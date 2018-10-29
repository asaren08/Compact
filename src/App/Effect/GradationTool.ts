import { GlCanvas } from "../../Base/Canvas/GlCanvas";
import { LayerManager } from "../LayerManager/LayerManager";
import { GradationDrawer } from "./GradationDrawer";

// グラデーションのタイプ
export enum GradationType {
    GradationTypeNone,
    GradationTypeBlueRed,
    GradationTypeToyCamera,
    GradationTypeRetro
}

// グラデーションを行うクラス
export class GradationTool {
    private canvas: GlCanvas;                       // キャンバス
    private layerManager: LayerManager;             // レイヤー
    private currentGradationType: GradationType;    // エフェクトのタイプ
    private drawer: GradationDrawer;                // グラデーション描画クラス

    // コンストラクタ
    constructor(cnvs: GlCanvas, manager: LayerManager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentGradationType = GradationType.GradationTypeNone;
        this.drawer = new GradationDrawer();
    }

    // グラデーションタイプを取得する
    public getGradationType(): GradationType {
        return this.currentGradationType;
    }

    // グラデーションタイプを設定する
    public setGradationType(type: GradationType): void {
        this.currentGradationType = type;
    }

    // 描画する
    public draw(): void {
        let gl = this.canvas.getGL();
        let texture = this.layerManager.getCanvasLayer().getTexture();
        let matrix = this.canvas.getMatrix();
        let buffer = this.canvas.getFrameBuffer();
        this.drawer.drawGradation(gl, buffer, texture, this.currentGradationType,                              matrix);  
    }
}