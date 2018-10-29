import { GlCanvas } from "../../Base/Canvas/GlCanvas";
import { Layer } from "../../Base/Layer/Layer";
import { ComposeNormalShader } from "../../Base/Shader/ComposeNormalShader";
import { PointColorShader } from "../../Base/Shader/PointColorShader";
import { TextureShader } from "../../Base/Shader/TextureShader";
import { Texture } from "../../Base/Texture/Texture";
import { ImageDrawer } from "../Image/ImageDrawer";

let ID_CANVAS_LAYER = 1000;     // キャンバスレイヤーのID

// レイヤーの管理クラス
export class LayerManager {
    private canvas: GlCanvas;                   // キャンバス
    private layers: Layer[];                    // レイヤー
    private canvasLayer: Layer;                 // キャンバスレイヤー
    private composeShader: ComposeNormalShader; // 普通合成シェーダー

    // コンストラクタ
    constructor(cnvs: GlCanvas) {
        this.layers = new Array();
        this.composeShader = new ComposeNormalShader();
        this.canvas = cnvs;
        this.initCanvasLayer();
    }

    // キャンバスレイヤーを初期化する
    public initCanvasLayer(): void {
        let texture = new Texture();
        texture.makeTexture(this.canvas.getGL());
        let shader = new PointColorShader();
        let position = [
            -1.0,  1.0,
             1.0,  1.0,
            -1.0, -1.0, 
        
            -1.0, -1.0,
             1.0,  1.0,
             1.0, -1.0,
        ];
        let color = new Array();
        for (let i = 0; i < 6; i++) {
            color.push(1.0, 1.0, 1.0, 1.0);
        }
        shader.draw(this.canvas.getGL(), this.canvas.getFrameBuffer(),
                    this.canvas.getGL().TRIANGLES,    
                    texture.getTexture(), position, color, 6,
                    this.canvas.getMatrix());
        this.canvasLayer = new Layer(ID_CANVAS_LAYER, texture.getTexture()); 
    }

    // テクスチャを元にレイヤーを末尾に追加する
    public addLayer(texture: WebGLTexture): void {
        let id = this.layers.length;
        let layer = new Layer(id, texture);
        this.layers.push(layer);
        this.updateCanvas();
    }

    // キャンバスレイヤーを取得する
    public getCanvasLayer(): Layer {
        return this.canvasLayer;
    }

    // レイヤーを合成する
    // テクスチャを下のレイヤーに合成する
    // layer2の管理はこのメソッドを呼び出した側で行う
    public composeLayer(layer1: Layer, layer2: Layer): void {
        let gl = this.canvas.getGL();
        let buffer = this.canvas.getFrameBuffer();
        let outTex = new Texture();
        outTex.makeTexture(gl);
        this.composeShader.draw(gl, buffer, layer2.getTexture(),
                                layer1.getTexture(), outTex.getTexture(), this.canvas.getMatrix());
        layer1.setTexture(outTex.getTexture());                                      
    }

    // 全てのレイヤーをキャンバスレイヤーに合成する
    public composeToCanvas(): void {
        for (let i = 0; i < this.layers.length; i++) {
            this.composeLayer(this.canvasLayer, this.layers[i]);
        }
    }

    // キャンバスレイヤーの描画を更新する
    public updateCanvas(): void {
        this.composeToCanvas();
        let shader = new TextureShader();
        shader.draw(this.canvas.getGL(),
                    this.canvasLayer.getTexture(),
                    this.canvas.getMatrix());
    }
}