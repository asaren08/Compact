// シェーダー基底クラス
export class Shader {

    // コンストラクタ
    constructor() {}

    // バッファオブジェクトを取得する
    public createBufferObject(gl: WebGLRenderingContext, target: number,
                              data: number[]): WebGLBuffer {
        let buffer = gl.createBuffer();
        gl.bindBuffer(target, buffer);
        if (target === gl.ARRAY_BUFFER) {
            gl.bufferData(target, new Float32Array(data), gl.STATIC_DRAW);
        } else if (target === gl.ELEMENT_ARRAY_BUFFER) {
            gl.bufferData(target, new Int16Array(data), gl.STATIC_DRAW);
        }
        gl.bindBuffer(target, null);
        return buffer;
    }

    // バッファと変数を紐付ける
    public setAttrib(gl: WebGLRenderingContext, location: number, size: number,
                     buffer: WebGLBuffer): void {
        gl.enableVertexAttribArray(location);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    
    // シェーダーを作成する
    private createShader(gl: WebGLRenderingContext, type: number,
                         source: string): WebGLShader {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { // シェーダーの作成に成功したとき
            return shader;
        } else { // シェーダーの作成に失敗したとき
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
    }

    // プログラムを作成する
    private createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader,
                          fragmentShader: WebGLShader): WebGLProgram {
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (gl.getProgramParameter(program, gl.LINK_STATUS)) { // プログラムの作成に成功したとき
            return program;
        } else { // プログラムの作成に失敗したとき
            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
    }

    // プログラムを取得する
    public getProgram(gl: WebGLRenderingContext, vSource: string, fSource: string) {
        let vShader = this.createShader(gl, gl.VERTEX_SHADER, vSource);
        let fShader = this.createShader(gl, gl.FRAGMENT_SHADER, fSource);
        return this.createProgram(gl, vShader, fShader);
    }
}