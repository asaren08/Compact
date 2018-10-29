import { GlCanvas } from "../../Base/Canvas/GlCanvas";
import { LayerManager } from "../LayerManager/LayerManager";
import { VoronoiAnimationDrawer } from "./VoronoiAnimationDrawer";
import { StainedGlassDrawer } from "./StainedGlassDrawer";

// 追加機能のタイプ
export enum AdditionalType {
    AdditionalTypeNone,
    AdditionalTypeVoronoiAnimation,
    AdditionalTypeDistanceMapAnimation,
    AdditionalTypeStainedGlass,
    AdditionalTypeSoftShadow
}

// 追加機能を実行するクラス
export class AdditionalTool {
    private canvas: GlCanvas;                       // キャンバス
    private layerManager: LayerManager;             // レイヤー
    private currentAdditionalType: AdditionalType;  // エフェクトのタイプ
    private voronoiDrawer: VoronoiAnimationDrawer;  // ボロノイの描画クラス
    private stainedGlassDrawer: StainedGlassDrawer; // ステンドグラスの描画クラス

    // コンストラクタ
    constructor(cnvs: GlCanvas, manager: LayerManager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentAdditionalType = AdditionalType.AdditionalTypeNone;
        this.voronoiDrawer = new VoronoiAnimationDrawer();
        this.voronoiDrawer.prepareShaderProgram(this.canvas.getGL());
        this.stainedGlassDrawer = new StainedGlassDrawer();
        this.stainedGlassDrawer.prepareShaderProgram(this.canvas.getGL());
    }

    // 追加機能タイプを取得する
    public getAdditionalType(): AdditionalType {
        return this.currentAdditionalType;
    }

    // 追加機能タイプを設定する
    public setAdditionalType(type: AdditionalType): void {
        this.currentAdditionalType = type;
    }

    // アニメーションを停止する
    public stopAnimation(): void {
        this.voronoiDrawer.stopAnimation();
    }

    // 描画する
    public draw(seedCount: number): void {
        let gl = this.canvas.getGL();
        let texture = this.layerManager.getCanvasLayer().getTexture();
        let matrix = this.canvas.getMatrix();
        let buffer = this.canvas.getFrameBuffer();
        switch (this.currentAdditionalType) {
            case AdditionalType.AdditionalTypeVoronoiAnimation:
                this.voronoiDrawer.setSeedCount(seedCount);
                this.voronoiDrawer.draw(gl, buffer, matrix,
                                        this.currentAdditionalType);
                break;
            case AdditionalType.AdditionalTypeDistanceMapAnimation:
                this.voronoiDrawer.setSeedCount(seedCount);
                this.voronoiDrawer.draw(gl, buffer, matrix,
                                        this.currentAdditionalType);
                break;
            case AdditionalType.AdditionalTypeStainedGlass:
                this.stainedGlassDrawer.draw(gl, buffer, texture, matrix,
                                             seedCount / 300.);
                break;
            case AdditionalType.AdditionalTypeSoftShadow:
                break;
        }
    }
}