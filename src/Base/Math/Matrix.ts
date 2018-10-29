import { MathTools } from "./MathTool";
import { Vector } from "./Vector";
import { mat4 } from "gl-matrix";

// 行列クラス
export class Matrix {
    private mMatrix: mat4;      // モデル行列
    private vpMatrix: mat4;     // ビュー・プロジェクション行列
    private mvpMatrix: mat4;    // モデル・ビュー・プロジェクション行列

    // コンストラクタ
    constructor() {
        this.mMatrix = mat4.create();    
        this.vpMatrix = mat4.create();
        this.mvpMatrix = mat4.create();
        mat4.identity(this.mMatrix);
        mat4.identity(this.vpMatrix);    
        mat4.identity(this.mvpMatrix);
    }

    // ビュー行列とプロジェクション行列を設定する
    public setViewProjectionMatrix(gl: WebGLRenderingContext): void {
        let vMatrix = mat4.create();
        let pMatrix = mat4.create();
        mat4.identity(vMatrix);

        // ビュー座標変換
        let eye = [0.0, 0.0, 1.0]; // カメラ位置
        let center = [0, 0, 0]; // 中視点
        let up = [0, 1, 0]; // カメラ上方向
        mat4.lookAt(vMatrix, eye, center,up);

        // プロジェクション座標変換
        mat4.identity(pMatrix);
        let fovy = 45; // 視野角
        var aspect = gl.canvas.width / gl.canvas.height; // アスペクト比
        var near = 0.1; // ニアクリップ
        var far = 100; // ファークリップ
        mat4.perspective(pMatrix,fovy, aspect, near, far);
        mat4.multiply(this.vpMatrix, pMatrix, vMatrix);
    }

    // モデルを移動する
    public translateModel(trans: Vector): void {
        mat4.identity(this.mMatrix);
        mat4.translate(this.mMatrix, this.mMatrix,
                      [trans.getX(), trans.getY(), 0.0]);
    }

    // モデルを回転する
    public rotateModel(degree: number): void {
        let mt = new MathTools();
        let rad = mt.deg2Rad(degree);
        var axis = [0.0, 0.0, 1.0];
        mat4.rotate(this.mMatrix, this.mMatrix, rad, axis);
    }
    
    // モデルを拡大・縮小する
    public scaleModel(scale: number): void {
        mat4.scale(this.mMatrix, this.mMatrix, [scale, scale, scale]);
    }

    // 行列を設定する
    public setMatrix(gl: WebGLRenderingContext, trans: Vector, degree: number,
                     scale: number): void {
        this.setViewProjectionMatrix(gl);
        this.translateModel(trans);
        this.rotateModel(degree);
        this.scaleModel(scale);
        this.setViewProjectionMatrix(gl);
        mat4.multiply(this.mvpMatrix, this.mMatrix, this.vpMatrix); 
    }

    // 行列を取得する
    // 行列を使用する側には配列で渡す
    public getMatrixArray(): Float32Array {
        return this.mvpMatrix;
    }
    
    // 行列を文字列で取得する
    private getMatrixString(pos: Vector): string {
        let matrix = mat4.create();
        mat4.identity(matrix);
        mat4.translate(matrix, matrix,
                  [pos.getX(), pos.getY(), -1.0]);

        let rad = 0;
        var axis = [0.0, 0.0, 1.0];
        mat4.rotate(matrix, matrix, rad, axis);

        mat4.scale(matrix, matrix, [1, 1, 1]);
        return matrix.toString();
    }
    
    // trasfomr属性を設定する
    public setStyleTransform(element: HTMLElement, pos: Vector): void {
        let matrix = this.getMatrixString(pos);
        let matrixFunction = "matrix3d"  + "(" + matrix + ")";
        element.style.transform = matrixFunction;
    }
}