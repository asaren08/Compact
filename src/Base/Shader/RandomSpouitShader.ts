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

// フラグメントシェーダー
let fsTex =  "precision mediump float;\n"
            + "uniform sampler2D u_Sampler;\n"
            + "varying vec2 vTextureCoord;\n"
            + "uniform float u_SeedCount;"

            + "float rand(vec2 co) {\n"
            + "   float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;\n"
            + "   float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));\n"
            + "   float t = fract(s * 43758.5453);\n"
            + "   return t;\n"
            + "}\n"

            + "void main() {\n"
            + "    vec4 tex = texture2D(u_Sampler, vec2(vTextureCoord.x,"
            + "                                    1. - vTextureCoord.y));\n"       
            + "    if (rand(gl_FragCoord.xy) >= 0.95 + u_SeedCount) {"
            + "        gl_FragColor = tex;"
            + "    } else {"
            + "        gl_FragColor = vec4(0.);"
            + "    }\n"
            +"}";

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
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,

    0.0, 1.0,
    1.0, 0.0,   
    1.0, 1.0,
];

// テクスチャからランダムに色を取るシェーダー
export class RandomSpouitShader extends Shader {    

    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                src: WebGLTexture, dst: WebGLTexture, matrix: Float32Array,
                seedCount: number): void {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        let prg = this.getProgram(gl, vsVert, fsTex);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);

        // インデックス取得
        let a_Position = gl.getAttribLocation(prg, "a_Position");
        let u_Sampler = gl.getUniformLocation(prg, "u_Sampler");
        let u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        let u_SeedCount = gl.getUniformLocation(prg, "u_SeedCount");

        // バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER,textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);

        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_SeedCount, seedCount);
            
        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D,                         dst, 0);
        
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);  
    }
}