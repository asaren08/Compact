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
let fsTex =   "precision mediump float;\n"
            + "uniform sampler2D u_Sampler;\n"
            + "uniform vec2 u_Center;\n"
            + "uniform float u_Scale;\n"
            + "uniform vec2 u_TexSize;\n"
            + "varying vec2 vTextureCoord;\n"
            + "void main() {\n"
            + "    vec2 tex = (vTextureCoord * u_TexSize - u_Center) / u_Scale;\n"
            + "    tex.y /= 0.866025404;\n"
            + "    tex.x -= tex.y * 0.5;\n"

            + "    vec2 a;\n"
            + "    if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {\n"
            + "        a = vec2(floor(tex.x), floor(tex.y));\n"
            + "    } else {\n"
            + "        a = vec2(ceil(tex.x), ceil(tex.y));\n"
            + "    }\n"
            + "    vec2 b = vec2(ceil(tex.x), floor(tex.y));\n"
            + "    vec2 c = vec2(floor(tex.x), ceil(tex.y));\n"
            + "    vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);\n"
            + "    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n"
            + "    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n"
            + "    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n"
            + "    float alen = length(TEX - A);\n"
            + "    float blen = length(TEX - B);\n"
            + "    float clen = length(TEX - C);\n"
            
            + "vec2 choice;\n"
            + "if (alen < blen) {\n"
            + "    if (alen < clen) {\n"
            + "        choice = a;\n"
            + "    } else {\n"
            + "        choice = c;\n"
            + "    }\n"
            + "} else {\n"
            + "    if (blen < clen) {\n"
            + "        choice = b;\n"
            + "    } else {\n"        
            + "        choice = c;\n"
            + "    }\n"
            + "}\n"
            + "choice.x += choice.y * 0.5;\n"
            + "choice.y *= 0.866025404;\n"
            + "choice *= u_Scale / u_TexSize;\n"
            + "gl_FragColor = texture2D(u_Sampler, choice + u_Center / u_TexSize);\n"
            + "}\n";
            
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

// 六角形ピクセル化するシェーダークラス
export class PixelateShader extends Shader {
        
    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, texture: WebGLTexture,
                matrix: Float32Array, x: number, y: number, scale: number): void {
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
        let u_Scale = gl.getUniformLocation(prg, "u_Scale");
        let u_Center = gl.getUniformLocation(prg, "u_Center");
        let u_TexSize = gl.getUniformLocation(prg, "u_TexSize");

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
        gl.uniform1f(u_Scale, scale);
        gl.uniform2f(u_TexSize, gl.canvas.width, gl.canvas.height);
        gl.uniform2f(u_Center, x, y);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}