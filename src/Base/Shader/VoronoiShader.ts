import { Shader } from './Shader';

// バーテックスシェーダー
let vsVert =  "attribute vec4 a_Position;\n"
            + "attribute vec2 u_TexCoord;\n"
            + "varying vec2 vTextureCoord;"
            + "uniform mat4 u_mvpMatrix;\n"
            + "void main() {\n"
            +   "vTextureCoord = u_TexCoord;"
            +   "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
            + "}";   

// Readテクスチャ用のシェーダー
// 母点に対応していれば座標をテクスチャに格納する
let fsRead =  "precision highp float;\n"
            + "uniform sampler2D u_Sampler;\n"
            + "varying vec2 vTextureCoord;\n"
            + "uniform vec2 u_Resolution;\n"

            // 近似しているか(vec4版)
            + "bool approxEqual(const vec4 a, const vec4 b) {\n"
            + "    return all(lessThan(abs(a - b), vec4(0.005)));\n"
            + "}\n"

            // 母点座標をテクスチャに保存するために変換する
            + "vec2 encodeCoordinate(const float value) {\n"
            + "   float v = value;\n"
            + "   return vec2(floor(v / 100.), mod(v, 100.));\n"
            + "}\n"

            // 座標を格納したピクセルを作る
            + "vec4 createPixcel(const vec2 coord) {\n"
            + "    vec2 c = floor(coord);\n"
            + "    vec2 rg = encodeCoordinate(c.x);\n"
            + "    vec2 ba = encodeCoordinate(c.y);\n"    
            + "    return vec4(rg, ba) / 255.;\n"  
            + "}"

            // 無効なピクセルを作る
            + "vec4 createInvalidPixcel() {\n" 
            + "    return createPixcel(vec2(5000., 5000.));\n"  
            + "}\n"
    
            + "void main() {\n"
            + "    vec2 coord = gl_FragCoord.xy / u_Resolution;\n"
            + "    vec4 pixel = texture2D(u_Sampler, vec2(coord.x, 1. - coord.y));\n"
            + "    if (!approxEqual(pixel, vec4(0.))) {\n" // 母点対応点
            + "        gl_FragColor = createPixcel(gl_FragCoord.xy);\n"
            + "    } else {\n" // 母点に対応しない点
            + "        gl_FragColor = createInvalidPixcel();\n"
            + "    }\n"
            + "}";

// Writeテクスチャ用のシェーダー
// 近傍のピクセルを読んで自身の色を決定する
let fsWrite = "precision highp float;\n"	
            + "uniform sampler2D u_Sampler;\n"
            + "uniform int u_stepSize;\n"
            + "varying vec2 vTextureCoord;\n"
            + "uniform vec2 u_Resolution;\n"
    
            // 矩形内にあるか
            + "bool between(const vec2 value, const vec2 bottom, const vec2 top) {\n"
            + "   return (all(greaterThan(value, bottom)) && "
            + "           all(lessThan(value, top)));\n"
            + "}\n"

            // UV座標系におさまっているか
            + "bool isValidUv(const vec2 uv) {\n"
            +    "return between(uv, vec2(0., 0.), vec2(1., 1.));\n"
            + "}\n"

            // 座標をデコードする
            + "float decodeCoordinate(const vec2 encodedCoordinate) {\n"
            + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;\n"
            + "}\n"      
    
            // 母点近傍の座標を返す
            + "vec2 getSeedClosestCoord(const vec4 pixel) {\n"
            + "    vec4 p = pixel * 255.;\n"
            + "    float x = decodeCoordinate(p.rg);\n"
            + "    float y = decodeCoordinate(p.ba);\n"    
            + "    return vec2(x, y) + vec2(0.5);\n"  
            + "}\n"
    
            // 有効なピクセルか
            + "bool isValidPixel(const vec4 pixel) {\n"
            + "    vec2 coord = getSeedClosestCoord(pixel);\n"
            + "    return coord.x < 4999.;\n"
            + "}\n"

            // 母点座標をテクスチャに保存するために変換する
            + "vec2 encodeCoordinate(const float value) {\n"
            + "   float v = value;\n"
            + "   return vec2(floor(v / 100.), mod(v, 100.));\n"
            + "}\n"    
    
            // 座標を格納したピクセルを作る
            + "vec4 createPixcel(const vec2 coord) {\n"
            + "    vec2 c = floor(coord);\n"
            + "    vec2 rg = encodeCoordinate(c.x);\n"
            + "    vec2 ba = encodeCoordinate(c.y);\n"    
            + "    return vec4(rg, ba) / 255.;\n"  
            + "}"

            // 無効なピクセルを作る
            + "vec4 createInvalidPixcel() {\n" 
            + "    return createPixcel(vec2(5000., 5000.));\n"  
            + "}\n"

            // JFAを計算する(対応する座標を格納する)
            + "vec4 jumpFlood(vec4 curPixel, vec2 offset) {\n"
            + "    vec2 refCoord = (gl_FragCoord.xy + offset) / u_Resolution;;\n"
            + "    vec4 refPixel = texture2D(u_Sampler, refCoord);\n"
            + "    if (!isValidUv(refCoord)) {\n"
            + "        refPixel = createInvalidPixcel();\n"
            + "    }\n"
            + "    if (!isValidPixel(refPixel)) {\n" //参照ピクセル無効のとき
            + "        return curPixel;\n"
            + "    } else if (!isValidPixel(curPixel)) {\n" // カレント無効のとき
            + "        return refPixel;\n" 
            + "    } else {\n" // どちらも有効のとき
            + "        vec2 decodeC = getSeedClosestCoord(curPixel);\n"
            + "        vec2 decodeR = getSeedClosestCoord(refPixel);\n"
            + "        float disC = distance(gl_FragCoord.xy, decodeC);\n"
            + "        float disR = distance(gl_FragCoord.xy, decodeR);\n"
            + "        if (disC > disR) {\n" // カレントピクセルの方が遠いとき
            + "            return refPixel;\n"
            + "        }"
            + "    }\n"
            + "    return curPixel;"        
            + "}\n"

            +"void main(){"
            + "   vec4 curPixel = texture2D(u_Sampler, gl_FragCoord.xy /"
            + "                                                   u_Resolution);"
            +"    curPixel = jumpFlood(curPixel, vec2(0, u_stepSize));"
            +"    curPixel = jumpFlood(curPixel, vec2(u_stepSize, u_stepSize));"
            +"    curPixel = jumpFlood(curPixel, vec2(u_stepSize, 0));"
            +"    curPixel = jumpFlood(curPixel, vec2(u_stepSize, -u_stepSize));"
            +"    curPixel = jumpFlood(curPixel, vec2(0, -u_stepSize));"
            +"    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, -u_stepSize));"
            +"    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, 0));"
            +"    curPixel = jumpFlood(curPixel, vec2(-u_stepSize, u_stepSize));" 
            +"    gl_FragColor = curPixel;"					
            +"}";

// ボロノイ描画用のシェーダー
let fsVornoi = "precision highp float;"
            + "uniform sampler2D u_SeedTex;"
            + "uniform sampler2D u_JumpFloodTex;"    
            + "varying vec2 vTextureCoord;\n"
            + "uniform vec2 u_Resolution;\n"
    
            // 座標をデコードする
            + "float decodeCoordinate(const vec2 encodedCoordinate) {"
            + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;"
            + "}"  

            // 母点近傍の座標を返す
            + "vec2 getSeedClosestCoord(const vec4 pixel) {"
            + "    vec4 p = pixel * 255.;"
            + "    float x = decodeCoordinate(p.rg);"
            + "    float y = decodeCoordinate(p.ba);"    
            + "    return vec2(x, y) + vec2(0.5);"  
            + "}"  
    
            // 有効なピクセルか
            + "bool isValidPixel(const vec4 pixel) {\n"
            + "    vec2 coord = getSeedClosestCoord(pixel);\n"
            + "    return coord.x < 4999.;\n"
            + "}\n"   
    
            + "void main() {"
            + "    vec4 pixel = texture2D(u_JumpFloodTex, gl_FragCoord.xy /"
            + "                                           u_Resolution);"
            + "    if (isValidPixel(pixel)) {"
            + "        vec2 coord = getSeedClosestCoord(pixel) / u_Resolution;"
            + "        gl_FragColor=texture2D(u_SeedTex,vec2(coord.x, 1.- coord.y));"
            + "    } else {"
            + "        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);"
            + "    }"
            + "}";

// 距離マップ描画用のシェーダー
let fsDis =   "precision highp float;"
            + "uniform sampler2D u_SeedTex;"
            + "uniform sampler2D u_JumpFloodTex;"    
            + "varying vec2 vTextureCoord;\n"
            + "uniform vec2 u_Resolution;\n"
    
            // 座標をデコードする
            + "float decodeCoordinate(const vec2 encodedCoordinate) {"
            + "   return encodedCoordinate.x * 100. + encodedCoordinate.y;"
            + "}"  

            // 母点近傍の座標を返す
            + "vec2 getSeedClosestCoord(const vec4 pixel) {"
            + "    vec4 p = pixel * 255.;"
            + "    float x = decodeCoordinate(p.rg);"
            + "    float y = decodeCoordinate(p.ba);"    
            + "    return vec2(x, y) + vec2(0.5);"  
            + "}"  
    
            // 有効なピクセルか
            + "bool isValidPixel(const vec4 pixel) {\n"
            + "    vec2 coord = getSeedClosestCoord(pixel);\n"
            + "    return coord.x < 4999.;\n"
            + "}\n"   
    
            + "void main() {"
            + "    vec4 pixel = texture2D(u_JumpFloodTex, gl_FragCoord.xy /"
            + "                                           u_Resolution);"
            + "    vec2 coord = getSeedClosestCoord(pixel);"
            + "    float dist = distance(gl_FragCoord.xy, coord);"
            + "    dist = 1.0 - (dist / u_Resolution.x) / 0.7;"
            + "    gl_FragColor = vec4(dist, dist, dist, 1.0);"        
            + "}";

// 頂点座標
var position = [
    -1.0,  1.0,  0.0,
     1.0,  1.0,  0.0,
    -1.0, -1.0,  0.0,

    -1.0, -1.0,  0.0,
     1.0,  1.0,  0.0,
     1.0, -1.0,  0.0,
];

// テクスチャ座標
var textureCoord = [
    0.0, 1.0,
    1.0, 1.0,
    0.0, 0.0,

    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0
];

// ボロノイ分割を計算するシェーダークラス
export class VoronoiShader extends Shader {
    private program: WebGLProgram;
    private readProgram: WebGLProgram;
    private writeProgram: WebGLProgram;
    private voronoiProgram: WebGLProgram;
    private distanceProgram: WebGLProgram;
    
    // コンストラクタ
    constructor() {
        super();
        this.program = null;
        this.readProgram = null;
        this.writeProgram = null;
        this.voronoiProgram = null;
        this.distanceProgram = null;
    }

    // プログラムを準備する
    public prepareProgram(gl: WebGLRenderingContext): void {
        this.readProgram = this.getProgram(gl, vsVert, fsRead);
        this.writeProgram = this.getProgram(gl, vsVert, fsWrite);
        this.voronoiProgram = this.getProgram(gl, vsVert, fsVornoi);
        this.distanceProgram = this.getProgram(gl, vsVert, fsDis);
    }

    // Readテクスチャを作成する
    public makeReadTexture(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                           src: WebGLTexture, dst: WebGLTexture,
                           matrix: Float32Array) {
        gl.useProgram(this.readProgram);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        
        // インデックス取得
        let a_Position = gl.getAttribLocation(this.readProgram, "a_Position");
        let u_Sampler = gl.getUniformLocation(this.readProgram, "u_Sampler");
        let u_TexCoord = gl.getAttribLocation(this.readProgram, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(this.readProgram, "u_mvpMatrix");
        let u_Resolution = gl.getUniformLocation(this.readProgram, "u_Resolution");
        
        //　バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D,                         dst, 0);
        
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);  
    }

    // JFAを実行する
    public runJumpFlood (gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                         src: WebGLTexture, dst: WebGLTexture,
                         matrix: Float32Array, step: number) {
        gl.useProgram(this.writeProgram);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
    
        let a_Position = gl.getAttribLocation(this.writeProgram, "a_Position");
        let u_Sampler = gl.getUniformLocation(this.writeProgram, "u_Sampler");
        let u_TexCoord = gl.getAttribLocation(this.writeProgram, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(this.writeProgram, "u_mvpMatrix");
        let u_stepSize = gl.getUniformLocation(this.writeProgram, "u_stepSize");
        let u_Resolution = gl.getUniformLocation(this.writeProgram, "u_Resolution");

        //　バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        
        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1i(u_stepSize, step);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D,                         dst, 0);
        
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);  
    }

    // ボロノイ分割の共通処理を行う
    private runDrawVoronoiCommon(gl: WebGLRenderingContext, prg: WebGLProgram,
                                 origin: WebGLTexture, jumped: WebGLTexture,
                                 matrix: Float32Array): void {
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
	
	    let a_Position = gl.getAttribLocation(prg, "a_Position");
	    let u_SeedTex = gl.getUniformLocation(prg, "u_SeedTex");
        let u_JumpFloodTex = gl.getUniformLocation(prg, "u_JumpFloodTex");
        let u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
	    let u_Resolution = gl.getUniformLocation(prg, "u_Resolution");
  
        //　バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, origin);
	    gl.activeTexture(gl.TEXTURE1);
	    gl.bindTexture(gl.TEXTURE_2D, jumped);
	
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
	    gl.uniform1i(u_SeedTex, 0);
        gl.uniform1i(u_JumpFloodTex, 1);
        gl.uniform2f(u_Resolution, gl.canvas.width, gl.canvas.height);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
	

    }

    // ボロノイ分割を描画する
    public drawVoronoi(gl: WebGLRenderingContext, origin: WebGLTexture,
                       jumped: WebGLTexture, matrix: Float32Array): void {
        this.runDrawVoronoiCommon(gl, this.voronoiProgram, origin, jumped, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // 距離マップを描画する
    public drawDistanceMap(gl: WebGLRenderingContext, origin: WebGLTexture,
                           jumped: WebGLTexture, matrix: Float32Array): void {
        this.runDrawVoronoiCommon(gl, this.distanceProgram, origin, jumped, matrix);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}