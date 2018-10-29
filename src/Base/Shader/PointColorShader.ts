import { Shader } from './Shader';

let vsPC =    "attribute vec4 a_Position;"
            + "attribute vec4 a_Color;"
            + "varying vec4 v_Color;"
            + "uniform mat4 u_mvpMatrix;\n"
            + "void main(){"
            + "    gl_Position = u_mvpMatrix * vec4(a_Position.xyz, 1.0);"
            + "    v_Color = a_Color;"
            + "    gl_PointSize = 1.;"
            + "}";

let fsPC  =   "precision mediump float;"
            + "varying vec4 v_Color;"
            + "void main(){"
            + "    gl_FragColor = v_Color;"
            +"}";


// 頂点座標と頂点色を元にした描画を行うシェーダー
export class PointColorShader extends Shader {

    // コンストラクタ
    constructor() {
        super();
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                mode: number, texture: WebGLTexture, points: number[],
                color: number[], count: number, matrix: Float32Array) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        let prg = this.getProgram(gl, vsPC, fsPC);
        gl.useProgram(prg);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        
        // 変数の取得
        let a_Position = gl.getAttribLocation(prg, "a_Position");
        let a_Color = gl.getAttribLocation(prg, "a_Color");
        let u_mvpMatrix = gl.getUniformLocation(prg, "u_mvpMatrix");

        // バッファのバインド
        var pointBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, points);
        var colorBuffer = this.createBufferObject(gl, gl.ARRAY_BUFFER, color);
      
        // Attributeへのアタッチ
        this.setAttrib(gl, a_Position, 2, pointBuffer);
        this.setAttrib(gl, a_Color, 4, colorBuffer);
        gl.uniformMatrix4fv(u_mvpMatrix, false, matrix);

        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D,
                                texture, 0);	
        gl.drawArrays(mode, 0, count);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
}