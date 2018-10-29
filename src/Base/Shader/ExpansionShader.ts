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
let fsTex = "precision mediump float;\n"
    + "uniform sampler2D u_Sampler;\n"
    + "uniform vec2 u_TexSize;\n"
    + "uniform float u_Radius;\n"
    + "uniform float u_Strength;\n"
    + "uniform vec2 u_Center;\n"
    + "varying vec2 vTextureCoord;\n"
    + "void main() {\n"
    + "    vec2 coord = vTextureCoord * u_TexSize;\n"
    + "    coord -= u_Center;\n"
    + "    float distance = length(coord);\n"
    + "    if (distance < u_Radius) {\n"
    + "        float percent = distance / u_Radius;\n"
    + "        if (u_Strength > 0.0) {\n"
    + "             coord *= mix(1.0, smoothstep(0.0, u_Radius / distance, percent), u_Strength * 0.75);\n"
    + "        } else {\n"
    + "             coord *= mix(1.0, pow(percent, 1.0 + u_Strength * 0.75) * u_Radius / distance, 1.0 - percent);\n"
    + "         }\n"
    + "    }\n"
    + "    coord += u_Center;\n"
    + "    gl_FragColor = texture2D(u_Sampler, coord / u_TexSize);\n"
    + "    vec2 clampedCoord = clamp(coord, vec2(0.0), u_TexSize);\n"
    + "    if (coord != clampedCoord) {\n"
    + "        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));\n"
    + "    }\n"
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
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,

    0.0, 1.0,
    1.0, 0.0,   
    1.0, 1.0,
];

// 膨張シェーダークラス
export class ExpansionShader extends Shader {
        
    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, texture: WebGLTexture,
                matrix: Float32Array, x: number, y: number, radius: number,
                strength: number): void {
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
        let u_TexSize = gl.getUniformLocation(prg, "u_TexSize");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");
        let u_Center = gl.getUniformLocation(prg, "u_Center");
        let u_Radius = gl.getUniformLocation(prg, "u_Radius");
        let u_Strength = gl.getUniformLocation(prg, "u_Strength");

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
        gl.uniform2f(u_Center, x, y);
        gl.uniform2f(u_TexSize ,gl.canvas.width, gl.canvas.height);
        gl.uniform1f(u_Radius, radius);
        gl.uniform1f(u_Strength, strength);
        
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}