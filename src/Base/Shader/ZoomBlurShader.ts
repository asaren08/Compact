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
            + "uniform vec2 u_TexSize;\n"
            + "uniform vec2 u_Center;\n"
            + "uniform float u_Strength;\n"

            // すりガラスシェーダーのランダムより高品質か
            + "float random(vec3 scale, float seed) {\n"
            + "  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) *"
            + "               43758.5453 + seed);\n"
            + "}\n"
    
            + "void main() {\n"
            + "    vec4 color = vec4(0.0);\n"
            + "    float total = 0.0;\n"
            + "    vec2 toCenter = u_Center - vTextureCoord * u_TexSize;\n"
            + "    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n"
            + "    for (float t = 0.0; t <= 40.0; t++) {\n"
            + "        float percent = (t + offset) / 40.0;\n"
            + "        float weight = 4.0 * (percent - percent * percent);\n"
            + "        vec4 tex = texture2D(u_Sampler, vTextureCoord + toCenter *"
            + "                             percent * u_Strength / u_TexSize);\n"
            + "        tex.rgb *= tex.a;\n"
            + "        color += tex * weight;\n"
            + "        total += weight;\n"
            + "    }"
            + "    gl_FragColor = color / total;\n"
            + "    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n"
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

// ズームぼかしシェーダークラス
// 参考(https://github.com/evanw/glfx.js)
export class ZoomBlurShader extends Shader {
        
    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, texture: WebGLTexture,
                matrix: Float32Array, x: number, y: number, strength: number): void {
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
        let u_TexSize = gl.getUniformLocation(prg, "u_TexSize");
        let u_Center = gl.getUniformLocation(prg, "u_Center");
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
        gl.uniform2f(u_TexSize, gl.canvas.width, gl.canvas.height);
        gl.uniform2f(u_Center, x, y);
        gl.uniform1f(u_Strength, strength);
        
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}