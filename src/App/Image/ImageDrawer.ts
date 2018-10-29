import { ImageTexture } from "../../Base/Texture/ImageTexture";
import { Matrix } from "../../Base/Math/Matrix";
import { TextureShader } from "../../Base/Shader/TextureShader";
import { GlCanvas } from "../../Base/Canvas/GlCanvas";
import { Texture } from "../../Base/Texture/Texture";

// 画像の書き出しを行うクラス
export class ImageDrawer {
    private image: ImageTexture;    // 画像テクスチャ

    // コンストラクタ
    constructor() { 
        this.image = new ImageTexture();
    }
    
    // 画像を取得する
    public getImageFile(files) {
        let length = files.length;
        let imageFile = null;
        for (let i = 0; i < length; i++) {
            if (!files[i] || files[i].type.indexOf('image/') < 0) {
                continue; // 画像ファイルではないとき
            }
            imageFile = files[i];
        }
        return imageFile;
    }

    // 画像テクスチャを描画する
    public draw(gl: WebGLRenderingContext,image: HTMLImageElement): void {
        this.image.makeImageTexture(gl, image);
    }

    // 画像テクスチャを取得する
    public getImageTexture() {
        return this.image.getTexture();
    }
}