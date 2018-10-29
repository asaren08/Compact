import { RandomSpouitShader } from "../../Base/Shader/RandomSpouitShader";
import { Texture } from "../../Base/Texture/Texture";
import { VoronoiAnimationDrawer } from "./VoronoiAnimationDrawer";

// ステンドグラス風の描画を行うクラス
export class StainedGlassDrawer {
    private randomShader: RandomSpouitShader;   // ランダムに色を取るシェーダー
    private voronoiDrawer: VoronoiAnimationDrawer;  // ボロノイ描画クラス

    // コンストラクタ
    constructor() {
        this.randomShader = new RandomSpouitShader(); 
        this.voronoiDrawer = new VoronoiAnimationDrawer();
    }

        // シェーダープログラムを準備する
    public prepareShaderProgram(gl: WebGLRenderingContext) {
        this.voronoiDrawer.prepareShaderProgram(gl);
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                texture: WebGLTexture, matrix: Float32Array,
                seedCount: number): void {
        let seed = new Texture();
        seed.makeTexture(gl);
        this.randomShader.draw(gl, frameBuffer, texture, seed.getTexture(), matrix,
                               seedCount);
        this.voronoiDrawer.drawVoronoi(gl, frameBuffer, matrix, seed.getTexture());
    }
}