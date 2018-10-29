import { Vector } from "../Math/Vector";
import { Matrix } from "../Math/Matrix";

let COLLUSION_OFFSET = 35;

// つまみクラス
export class Knob {
    private isSelected: boolean     // 選択されているか(ある位置に設定されているか)
    private isEnable: boolean       // 有効か
    private canvasPosition: Vector  // キャンバス内の位置
    private globalPosition: Vector  // 親要素内の位置
    private traslateMatrix: Matrix  // 移動用の行列
    private element: HTMLButtonElement    // html上の要素

    // コンストラクタ
    constructor(id: string) {
        this.element = document.createElement('button');
        this.element.id = id;
        this.init();
    }

    // つまみを初期化する
    private init(): void {
        this.element.style
        this.element.style.backgroundColor = "rgb(100, 100, 100)";
        this.element.style.width = "12px";
        this.element.style.height = "12px";
        this.element.style.position = "absolute";
        this.element.style.zIndex = "99";
        this.element.style.borderRadius = "50%";
        this.element.style.display = "inline-block";
        this.element.style.pointerEvents = "none";
        this.element.disabled = true;
        this.canvasPosition = new Vector();
        this.globalPosition = new Vector();
        this.isSelected = false;
        this.isEnable = true;
        this.traslateMatrix = new Matrix();
    }

    // アンカースタイルに変更する
    public setAnchorStyle(): void {
        this.element.style.backgroundColor = "rgb(1, 175, 255)";
        let offset = new Vector();
        offset.setXY(100, 100);
        this.canvasPosition.add(offset);
        this.globalPosition.add(offset);
    }

    // つまみを親要素に追加する
    public addKnob(parent: HTMLElement, before: HTMLElement): void {
        parent.insertBefore(this.element, before);
    }

    // 選択されているか
    public getIsSelected(): boolean {
        return this.isSelected;
    }

    // 選択状態を設定する
    public setIsSelected(state: boolean): void {
        if (this.isEnable) {
            this.isSelected = state;
        }
    }

    // 要素を取得する
    public getElement(): HTMLElement {
        return this.element;
    }

    // キャンバス上の位置を設定する
    public setCanvasPosition(pos: Vector): void {
        if (this.isEnable) {
            this.canvasPosition = pos;
        }
    }

    // キャンバス上の位置を取得する
    public getCanvasPosition(): Vector {
        return this.canvasPosition;
    }

    // 親要素上の位置を設定する
    public setGlobalPosition(pos: Vector): void {
        if (this.isEnable) {
            this.globalPosition = pos;
        }
    }

    // 親要素上の位置を取得する
    public getGlobalPosition(): Vector {
        return this.globalPosition;
    }

    // 有効かどうか設定する
    public setIsEnable(state: boolean): void {
        this.isEnable = state;
        if (this.isEnable) {
            this.showKnob();
        } else {
            this.hideKnob();
        }
    }

    // 有効かどうか取得する
    public getIsEnable(): boolean {
        return this.isEnable;
    }

    // つまみを表示する
    public showKnob(): void {
        this.init();
        this.element.style.display = "inline-block";
    } 

    // つまみを隠す
    public hideKnob(): void {
        this.element.style.display = "none";
    }

    // 当たり判定
    public isCollusion(pos: Vector): boolean {
        if (pos.getX() >= this.canvasPosition.getX() &&
            pos.getX() <= this.canvasPosition.getX() - this.element.clientWidth / 2 + COLLUSION_OFFSET &&
            pos.getY() >= this.canvasPosition.getY() &&
            pos.getY() <= this.canvasPosition.getY() + this.element.clientHeight/ 2 + COLLUSION_OFFSET) {
            return true;
        }
        return false;
    }

    // 描画する
    public draw() {
        this.traslateMatrix.setStyleTransform(this.element, this.globalPosition);
    }
}