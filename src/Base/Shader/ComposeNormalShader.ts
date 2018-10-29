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

// 普通合成
let fsNormal = "precision highp float;"
            +　"uniform sampler2D u_SrcTexture;"    
            +　"uniform sampler2D u_DstTexture;"    
            + "varying vec2 vTextureCoord;\n"
            + "void main() {\n"
            +    "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
            +    "vec4 dst = texture2D(u_DstTexture, vTextureCoord);"
            +    "if (src.a != 0.) {\n"
            +    "  gl_FragColor = src;\n"
            +    "} else {\n"
            +    "  gl_FragColor = dst;\n"
            +    "}"
            + "}";

let fsNotImage = "precision highp float;"
            +　"uniform sampler2D u_SrcTexture;"    
            +　"uniform sampler2D u_DstTexture;"    
            + "varying vec2 vTextureCoord;\n"
            + "void main() {\n"
            +    "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
            +    "vec4 dst = texture2D(u_DstTexture, -vTextureCoord);"
            +    "if (src.a != 0.) {\n"
            +    "  gl_FragColor = src;\n"
            +    "} else {\n"
            +    "  gl_FragColor = dst;\n"
            +    "}"
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
    0.0, 1.0,
    1.0, 1.0,
    0.0, 0.0,

    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0
];

// 普通合成クラス
export class ComposeNormalShader extends Shader{

    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public drawNotImage(gl: WebGLRenderingContext, src: WebGLTexture,
                      dst: WebGLTexture, matrix: Float32Array): void {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        let prg = this.getProgram(gl, vsVert, fsNotImage);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        
        // 変数の取得
        let a_Position = gl.getAttribLocation(prg, "a_Position");
        let u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        let u_DstTexture = gl.getUniformLocation(prg, "u_DstTexture");
        let u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        
        // バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, dst);

        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_SrcTexture, 0);
        gl.uniform1i(u_DstTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                src: WebGLTexture, dst: WebGLTexture, out: WebGLTexture,
                matrix: Float32Array): void {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        let prg = this.getProgram(gl, vsVert, fsNormal);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        
        // 変数の取得
        let a_Position = gl.getAttribLocation(prg, "a_Position");
        let u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        let u_DstTexture = gl.getUniformLocation(prg, "u_DstTexture");
        let u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        
        // バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, src);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, dst);

        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_SrcTexture, 0);
        gl.uniform1i(u_DstTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);

        // フレームバッファをバインド
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D,                         out, 0);
        
        // 描画
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // バインドの解除
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);  
    }
}