// レイヤークラス
export class Layer {
    private layerId: number;        // レイヤーのID
    private texture: WebGLTexture;  // 保持している描画結果

    // コンストラクタ
    constructor(id: number, tex: WebGLTexture) {
        this.layerId = id;
        this.texture = tex;
    }

    // IDを取得する
    public getLayerId(): number {
        return this.layerId;
    }

    // テクスチャを設定する
    public setTexture(tex: WebGLTexture): void {
        this.texture = tex;
    }

    // テクスチャを取得する
    public getTexture(): WebGLTexture {
        return this.texture;
    }
}