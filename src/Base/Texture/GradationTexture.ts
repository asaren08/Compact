import { Texture } from "./Texture";
import { PointColorShader } from "../Shader/PointColorShader";

// グラデーションテクスチャクラス
export class GradationTexture extends Texture {
    
    // コンストラクタ
    constructor() {
        super();
    }

    // グラデーションテクスチャを作成する
    public makeGradation(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                        points: number[], color: number[], count: number,
                        matrix: Float32Array): void {
        let shader = new PointColorShader();
        this.makeTexture(gl);
        shader.draw(gl, frameBuffer, gl.TRIANGLES, this.texture, points, color,
                    count, matrix);
    }
}