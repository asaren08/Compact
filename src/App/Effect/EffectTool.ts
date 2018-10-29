import { GlCanvas } from "../../Base/Canvas/GlCanvas";
import { LayerManager } from "../LayerManager/LayerManager";
import { SepiaShader } from "../../Base/Shader/SepiaShader";
import { GrayscaleShader } from "../../Base/Shader/GrayscaleShader";
import { InvertShader } from "../../Base/Shader/InvertShader";
import { PosterizationShader } from "../../Base/Shader/PosterizationShader";
import { ForestedGlassShader } from "../../Base/Shader/FrostedGlassShader";
import { ThresholdShader } from "../../Base/Shader/ThresholdShader";
import { TranspalentColorShader } from "../../Base/Shader/TranspalentColorShader";
import { ZoomBlurShader } from "../../Base/Shader/ZoomBlurShader";
import { BrightnessContrastShader } from "../../Base/Shader/BrightnessContrastShader";
import { HueSaturationShader } from "../../Base/Shader/HueSaturationShader";
import { PixelateShader } from "../../Base/Shader/PixelateShader";
import { ExpansionShader } from "../../Base/Shader/ExpansionShader";

// エフェクトのタイプ
export enum EffectType {
    EffectTypeNone,
    EffectTypeSepia,
    EffectTypeGrayscale,
    EffectTypeInvert,
    EffectTypePosterization,
    EffectTypefrostedGlass,
    EffectTypeThreshold,
    EffectTypeTranspalent,
    EffectTypeZoomBlur,
    EffectTypeBrightnessContrast,
    EffectTypeHueSarturation,
    EffectTypePixelate,
    EffectTypeExpansion,
}

// エフェクトを行うクラス
export class EffectTool {
    private canvas: GlCanvas;               // キャンバス
    private layerManager: LayerManager;     // レイヤー
    private currentEffectType: EffectType;  // エフェクトのタイプ

    // コンストラクタ
    constructor(cnvs: GlCanvas, manager: LayerManager) {
        this.canvas = cnvs;
        this.layerManager = manager;
        this.currentEffectType = EffectType.EffectTypeNone;
    }

    // エフェクトタイプを取得する
    public getEffectType(): EffectType {
        return this.currentEffectType;
    }

    // エフェクトタイプを設定する
    public setEffectType(type: EffectType): void {
        this.currentEffectType = type;
    }

    // 描画する
    public draw(value1: number, value2 = 0, value3 = 0, value4 = 0): void {
        switch (this.currentEffectType) {
            case EffectType.EffectTypeSepia:
                let sepiaShader = new SepiaShader();
                sepiaShader.draw(this.canvas.getGL(),
                                 this.layerManager.getCanvasLayer().getTexture(),
                                 this.canvas.getMatrix());
                break;
            case EffectType.EffectTypeGrayscale:
                let gsShader = new GrayscaleShader();
                gsShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix());    
                break;
            case EffectType.EffectTypeInvert:
                let invertShader = new InvertShader();
                invertShader.draw(this.canvas.getGL(),
                                  this.layerManager.getCanvasLayer().getTexture(),
                                  this.canvas.getMatrix());    
                break;
            case EffectType.EffectTypePosterization:
                let posShader = new PosterizationShader();
                posShader.draw(this.canvas.getGL(),
                               this.layerManager.getCanvasLayer().getTexture(),
                               this.canvas.getMatrix(), value1); 
                break;
            case EffectType.EffectTypefrostedGlass:
                let fgShader = new ForestedGlassShader();
                fgShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value1); 
                break;
            case EffectType.EffectTypeThreshold:
                let thShader = new ThresholdShader();
                thShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value1); 
                break;
            case EffectType.EffectTypeTranspalent:
                let tpShader = new TranspalentColorShader();
                tpShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value1); 
                break;
            case EffectType.EffectTypeZoomBlur:
                let zbShader = new ZoomBlurShader();
                zbShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value3, value4, value1);
                break;
            case EffectType.EffectTypeBrightnessContrast:
                let bcShader = new BrightnessContrastShader();
                bcShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value1, value2);
                break;
            case EffectType.EffectTypeHueSarturation:
                let hsShader = new HueSaturationShader();
                hsShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value1, value2);
                break;
            case EffectType.EffectTypePixelate:
                let pxShader = new PixelateShader();
                pxShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                              this.canvas.getMatrix(), value2, value3, value1);
                break;
            case EffectType.EffectTypeExpansion:
                let exShader = new ExpansionShader();
                exShader.draw(this.canvas.getGL(),
                              this.layerManager.getCanvasLayer().getTexture(),
                    this.canvas.getMatrix(), value3, value4, value1, value2);
                    break;
        }
    }
}