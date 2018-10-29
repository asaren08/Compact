// Mathクラス
export class MathTools {

    // コンストラクタ
    constructor() {}

    // 角度をラジアンに変換する
    public deg2Rad(degree: number): number {
        return degree * (Math.PI / 180);
    }

    // 階乗を計算する
    public calculateFactorial(n: number): number {
        let ret = 1.0;
        for (let i = 2; i <= n; i++) {
            ret *= i;
        }
        return ret;
    }

    // 二項展開を計算する
    public calculateBinominal(n: number, i: number): number {
        // 余分な部分を(n - i)で消す
        let numer = this.calculateFactorial(n);
        let denom = this.calculateFactorial(i) * this.calculateFactorial(n - i);
        return numer / denom;
    }

    // バーステイン基底関数を求める
    public calculateBerstein(n: number, i: number, t: number): number {
        // 二項係数 * t^i * (1-t)^(n-i)
        let b = this.calculateBinominal(n, i);
        let t0 = Math.pow(t, i);
        let t1 = Math.pow(1 - t, n - i);
        return b * t0 * t1; 
    }
}