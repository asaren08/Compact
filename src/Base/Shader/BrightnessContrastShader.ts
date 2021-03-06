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
            + "uniform float u_Brightness;\n"
            + "uniform float u_Contrast;\n"

            + "void main() {\n"
            + "    vec4 tex = texture2D(u_Sampler, vTextureCoord);\n"       
            + "    tex.rgb += u_Brightness;\n"
            + "    if (u_Contrast > 0.0) {\n"
            + "        tex.rgb = (tex.rgb - 0.5) / (1.0 - u_Contrast) + 0.5;\n"
            + "    } else {\n"
            + "        tex.rgb = (tex.rgb - 0.5) * (1.0 + u_Contrast) + 0.5;\n"
            + "    }\n"
            + "    gl_FragColor = tex;\n"
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

// 明るさ・コントラストを調整するシェーダークラス
export class BrightnessContrastShader extends Shader {
        
    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, texture: WebGLTexture,
                matrix: Float32Array, brightness: number, contrast: number): void {
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
        let u_Brightness = gl.getUniformLocation(prg, "u_Brightness");
        let u_Contrast = gl.getUniformLocation(prg, "u_Contrast");

        // バッファ処理
        let posBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, position);
        let texBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, textureCoord);

        // テクスチャのバインド
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // 変数として設定
        this.setAttrib(gl, a_Position, 3, posBuffer);
        this.setAttrib(gl, u_TexCoord, 2, texBuffer);
        gl.uniform1i(u_Sampler, 0);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);
        gl.uniform1f(u_Brightness, brightness);
        gl.uniform1f(u_Contrast, contrast);
        
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}