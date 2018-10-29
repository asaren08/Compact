import { Vector } from '../Math/Vector';
import { Matrix } from '../Math/Matrix';

// キャンバスクラス
export class GlCanvas {
    private gl: WebGLRenderingContext;      // glコンテキスト
    private canvas: HTMLCanvasElement;      // キャンバス 
    private frameBuffer: WebGLFramebuffer;  // フレームバッファ
    private position: Vector;               // キャンバスの位置
    private scale: number;                  // 拡大率
    private degree: number                  // 角度
    private matrix: Matrix;                 // 行列

    // コンストラクタ
    // @param canbasId キャンバスID
    // @param width 幅
    // @param height 高さ
    constructor(canvasId: string, width: number, height: number) {
        this.canvas = this.getCanvasContext(canvasId, width, height);
        this.gl = this.getGlContext();
        this.frameBuffer = this.gl.createFramebuffer();
        this.position = new Vector();
        this.scale = 1.0;
        this.degree = 0.0;
        this.matrix = new Matrix();
    }

    // キャンバスコンテキストを取得する    
    // @param canbasId キャンバスID
    // @param width 幅
    // @param height 高さ
    private getCanvasContext(canvasId: string, width: number,
                             height: number): HTMLCanvasElement {
        var cnvs = <HTMLCanvasElement>document.getElementById(canvasId);
        cnvs.width = width;
        cnvs.height = height;
        return cnvs;
    }

    // glコンテキストを取得する
    private getGlContext(): WebGLRenderingContext {
        var gl = this.canvas.getContext("experimental-webgl",
                                        { preserveDrawingBuffer: true });
        if (!gl) { // コンテキストを取得できなかったとき
            return null;
        }
        this.initGlContext(gl);
        return gl;
    }

    // glコンテキストを初期化する
    private initGlContext(gl: WebGLRenderingContext): void {
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // キャンバスを取得する
    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    // glコンテキストを取得する
    public getGL(): WebGLRenderingContext {
        return this.gl;
    }

    // フレームバッファを取得する
    public getFrameBuffer(): WebGLFramebuffer {
        return this.frameBuffer;
    }

    // キャンバスサイズを設定する
    // @param width 幅
    // @param height 高さ
    public setCanvasSize(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    // キャンバスサイズを取得する
    public getCanvasSize(): Vector {
        let size = new Vector();
        size.setXY(this.canvas.width, this.canvas.height);
        return size;
    }

    // キャンバス上の座標を計算する
    public getCanvasCoordinate(event: MouseEvent): Vector {
        var cv = <HTMLCanvasElement>event.target;
        var rect = cv.getBoundingClientRect();
        var px = event.clientX - rect.left;
        var py = event.clientY - rect.top;
        var x = 2 * px / this.canvas.width - 1;
        var y = 2 * py / this.canvas.height - 1;
        let vec = new Vector();
        vec.setXY(px, py);
        return vec;
    }

    // キャンバス上の座標を設定する
    public setCanvasCoordinate(event: MouseEvent): void {
        this.position = this.getCanvasCoordinate(event);
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    }

    // 角度を設定する
    public setDegree(deg: number): void {
        this.degree = deg;
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    }

    // 拡大率を設定する
    public setScale(aScale: number): void {
        this.scale = aScale;
        this.matrix.setMatrix(this.gl, this.position, this.degree, this.scale);
    }

    // 行列を取得する
    public getMatrix(): Float32Array {
        return this.matrix.getMatrixArray();
    }

    // キャンバスを保存する
    public saveCanvas(): void {
        let imageType = "image/png";
        let fileName = "art_woerk.png";
        let dataUrl = this.canvas.toDataURL(imageType);
        let blob = this.Base64toBlob(dataUrl);
        this.saveBlob(blob, fileName);
    }

    // Base64データをBlob型に変換する
    // https://st40.xyz/one-run/article/133/
    public Base64toBlob(base64) {
        // カンマで分割して以下のようにデータを分ける
        // tmp[0] : データ形式（data:image/png;base64）
        // tmp[1] : base64データ（iVBORw0k～）
        var tmp = base64.split(',');
        // base64データの文字列をデコード
        var data = atob(tmp[1]);
        // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
	    var mime = tmp[0].split(':')[1].split(';')[0];
        //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
	    var buf = new Uint8Array(data.length);
	    for (var i = 0; i < data.length; i++) {
            buf[i] = data.charCodeAt(i);
        }
        // blobデータを作成
	    var blob = new Blob([buf], { type: mime });
        return blob;
    }

    // 画像をダウンロードする
    // https://st40.xyz/one-run/article/133/
    public saveBlob(blob, fileName) {
        let url = (window.URL);
        // ダウンロード用のURL作成
        var dataUrl = url.createObjectURL(blob);
        // イベント作成
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // a要素を作成
        var a = <HTMLAnchorElement>document.createElementNS("http://www.w3.org/1999/xhtml", "a");
        // ダウンロード用のURLセット
        a.href = dataUrl;
        // ファイル名セット
        a.download = fileName;
        // イベントの発火
        a.dispatchEvent(event);
    }  
}