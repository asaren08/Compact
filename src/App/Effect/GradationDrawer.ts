import { GradationTexture } from "../../Base/Texture/GradationTexture";
import { GradationType } from "./GradationTool";
import { GradationShader } from "../../Base/Shader/GradationShader";

// 青-赤
let blueRedPos = [
    -1.,    // 始点
    1.      // 終点
];

let blueRedCol = [
    0, 0 ,1, 1, // 始点カラー
    1, 0 ,0, 1  // 終点カラー
];

// トイカメラ
let toyCameraPos = [
    -1.,            // 始点
    -1. + 2. / 4., 
    -1. + 4. / 4.,
    -1. + 6. / 4.,
     1.,            // 終点
]

let toyCameraCol = [
    23.  / 255., 32. / 255., 50. / 255., 1.,   // 始点カラー
    30. / 255., 50. / 255., 60. / 255., 1., 
    22. / 255., 120. / 255., 87. / 255., 1., 
    100. / 255., 209. / 255., 137. / 255., 1., 
    240. / 255., 255. / 255., 245. / 255., 1.,  // 終点カラー
];

// レトロ風
let retroPos = [
    -1.,            // 始点
    -1. + 2. / 4., 
    -1. + 4. / 4.,
    -1. + 6. / 4.,
     1.,            // 終点
]

let retroCol = [
    70.  / 255., 70. / 255., 140. / 255., 1.,   // 始点カラー
    110. / 255., 135. / 255., 170. / 255., 1., 
    190. / 255., 180. / 255., 165. / 255., 1., 
    240. / 255., 209. / 255., 170. / 255., 1., 
    250. / 255., 230. / 255., 210. / 255., 1.,  // 終点カラー
];


// グラデーション描画を作成するクラス
export class GradationDrawer {
    private vertex: number[];               // テクスチャ頂点
    private color: number[];                // 頂点色
    private gradation: GradationTexture;    // グラデーション
    private shader: GradationShader;        // シェーダー

    // コンストラクタ
    constructor() {
        this.vertex = new Array();
        this.color = new Array();
        this.gradation = new GradationTexture();
        this.shader = new GradationShader();
    }

    // テクスチャ頂点と頂点色を設定する
    private setVertexAndColor(pos: number[], col: number[]) {
        this.vertex.length = 0;
        this.color.length = 0;
        for (let i = 0; i < pos.length - 1; i++) {
            // 左上頂点
            let idx = i * 4;
            this.vertex.push(pos[i], -1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);

            // 左下頂点
            this.vertex.push(pos[i], 1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);

            // 右上頂点
            this.vertex.push(pos[i + 1], -1.);
            let nextIdx = (i + 1) * 4;
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);

            // 左下頂点
            this.vertex.push(pos[i], 1.);
            this.color.push(col[idx], col[idx + 1], col[idx + 2], col[idx + 3]);

            // 右上頂点
            this.vertex.push(pos[i + 1], -1.);
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);

            // 右上頂点
            this.vertex.push(pos[i + 1], 1.);
            this.color.push(col[nextIdx], col[nextIdx + 1], col[nextIdx + 2], col[nextIdx + 3]);
        }
    }

    // グラデーション作成する(オフスクリーン描画)
    private makeGradation(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,                        type: GradationType, matrix: Float32Array): void {
        switch (type) {
            case GradationType.GradationTypeBlueRed:
                this.setVertexAndColor(blueRedPos, blueRedCol);
                var count = (blueRedPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex,
                                             this.color, count, matrix);
                break;
            case GradationType.GradationTypeToyCamera:
                this.setVertexAndColor(toyCameraPos, toyCameraCol);
                var count = (toyCameraPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex,
                                             this.color, count, matrix);    
                break;
            case GradationType.GradationTypeRetro:
                this.setVertexAndColor(retroPos, retroCol);
                var count = (retroPos.length - 1) * 2 * 3;
                this.gradation.makeGradation(gl, frameBuffer, this.vertex,
                                            this.color, count, matrix);        
                break;
        }
    }

    // テクスチャにグラデーションをかける
    public drawGradation(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                         texture: WebGLTexture, type: GradationType,
                         matrix: Float32Array): void {
        this.makeGradation(gl, frameBuffer, type, matrix);
        this.shader.draw(gl, this.gradation.getTexture(), texture, matrix);
    }
}