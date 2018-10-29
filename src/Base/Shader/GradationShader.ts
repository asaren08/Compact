import {Shader} from './Shader';

let vsVert =  "attribute vec4 a_Position;\n"
            + "attribute vec2 u_TexCoord;\n"
            + "varying vec2 vTextureCoord;"
            + "uniform mat4 u_mvpMatrix;\n"
            + "void main() {\n"
            +   "vTextureCoord = u_TexCoord;"
            +   "gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);\n"
            + "}";

let fsGrad = 　"precision highp float;"
            +　"uniform sampler2D u_GradTexture;"
            +　"uniform sampler2D u_SrcTexture;"    
            +  "varying vec2 vTextureCoord;\n"
            +  "void main() {\n"
            +    "vec4 src = texture2D(u_SrcTexture, vTextureCoord);"
            +    "float y = 0.299 * src.r + 0.587 * src.g + 0.114 * src.b;"
            +    "vec4 grad = texture2D(u_GradTexture, vec2(y, 0.5));"
            +    "gl_FragColor = vec4(grad.r, grad.g, grad.b, src.a);\n"
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

// グラデーションシェーダ
export class GradationShader extends Shader {
    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, gradation: WebGLTexture,
                src: WebGLTexture, matrix: Float32Array): void {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        let prg = this.getProgram(gl, vsVert, fsGrad);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);

        // インデックス取得
        let a_Position = gl.getAttribLocation(prg, "a_Position");
        let u_GradTexture = gl.getUniformLocation(prg, "u_GradTexture");
        let u_SrcTexture = gl.getUniformLocation(prg, "u_SrcTexture");
        let u_TexCoord = gl.getAttribLocation(prg, "u_TexCoord");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");

        // バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, gradation);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, src);

        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_GradTexture, 0);
        gl.uniform1i(u_SrcTexture, 1);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    } 
}