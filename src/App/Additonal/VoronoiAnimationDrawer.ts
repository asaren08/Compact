import { VoronoiShader } from "../../Base/Shader/VoronoiShader";
import { Texture } from "../../Base/Texture/Texture";
import { PointColorShader } from "../../Base/Shader/PointColorShader";
import { AdditionalType } from "./AdditionalTool";

let ANIMATION_SPEED = -0.01;                 // 頂点の移動速度

// ボロノイアニメーションを描画するクラス
export class VoronoiAnimationDrawer {
    private seedCount: number               // 母点の数(ユーザーがスライダーで指定)
    private vertex: number[];               // 母点頂点
    private color: number[];                // 母点色
    private voronoiShader: VoronoiShader;   // ボロノイシェーダー
    private pointShader: PointColorShader;  // 点を描画するシェーダー
    private seedTexture: Texture;           // 母点を打ち込んだテクスチャ
    private read: WebGLTexture;             // 読み込みテクスチャ
    private write: WebGLTexture;            // 書き込みテクスチャ
    private animationId: number;            // アニメーションID
  
    // コンストラクタ
    constructor() {
        this.vertex = new Array();
        this.color = new Array();
        this.voronoiShader = new VoronoiShader();
        this.pointShader = new PointColorShader();
        this.seedTexture = new Texture();
        this.seedCount = 0;
        this.animationId = -1;
    }

    // 乱数を作成する
    private getRandom(): number {
        return Math.random() * 2 - 1.0;
    }

    // 母点数を指定する
    public setSeedCount(num: number) {
        this.seedCount = num;
        this.setSeedVerex();
    }

    // 母点頂点を設定する
    private setSeedVerex(): void {
        this.vertex.length = 0;
        this.color.length = 0;
        for (let i = 0; i < this.seedCount; i++) {
            this.vertex.push(this.getRandom(), this.getRandom());
            if (i % 2 === 0) {
                this.color.push(0.1 + i /this.seedCount,0.4, 0.9,1.0);
            } else {
                this.color.push(0.1 + i / this.seedCount, 0.9, 0.8, 1.0);
            }
        }
    }

    // 頂点を移動する
    private translateVertex(): void {
        for (let i = 0; i < this.vertex.length -2; i+=2) {
            let x = this.vertex[i];
            let y = this.vertex[i + 1];
            this.vertex[i] = x + ANIMATION_SPEED;  // x座標
            this.vertex[i + 1] = y + ANIMATION_SPEED; // y座標
            if (this.vertex[i] < -1.) {
                this.vertex[i] = y;
                this.vertex[i + 1] = 0;
            } else if (this.vertex[i + 1] < -1.){
                this.vertex[i] = 1;
                this.vertex[i + 1] = -x;
            }
        }
    }

    // テクスチャを入れ替える
    private swapTextures(){
        const tmp = this.read;
        this.read = this.write;
        this.write = tmp;
    }

    // シェーダープログラムを準備する
    public prepareShaderProgram(gl: WebGLRenderingContext) {
        this.voronoiShader.prepareProgram(gl);
    }

    // 描画する
    public draw(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                matrix: Float32Array, type: AdditionalType): void {
        this.stopAnimation();
        this.translateVertex();
        this.seedTexture.makeTexture(gl);
        this.pointShader.draw(gl, frameBuffer, gl.POINTS,
                              this.seedTexture.getTexture(), this.vertex,
                              this.color, this.seedCount, matrix);
        
        let readTex = new Texture();
        readTex.makeTexture(gl);
        this.read = readTex.getTexture();
        this.voronoiShader.makeReadTexture(gl, frameBuffer,
                                           this.seedTexture.getTexture(),
                                           this.read, matrix);
        
        let writeTex = new Texture();
        writeTex.makeTexture(gl);
        this.write = writeTex.getTexture();
        let step = gl.canvas.width / 2.0;
        while (step >= 1) {
            this.voronoiShader.runJumpFlood(gl, frameBuffer, this.read, this.write,
                                            matrix, step);
            this.swapTextures();
            step /= 2.0;   
        }

        if (type === AdditionalType.AdditionalTypeDistanceMapAnimation) {
            this.voronoiShader.drawDistanceMap(gl, this.seedTexture.getTexture(),
                                               this.read, matrix);
        } else {
            this.voronoiShader.drawVoronoi(gl, this.seedTexture.getTexture(),
                                           this.read, matrix);
        }
        this.animationId = requestAnimationFrame(() => this.draw(gl, frameBuffer,
                                                                 matrix, type));
    }

    // ボロノイ図を描く
    public drawVoronoi(gl: WebGLRenderingContext, frameBuffer: WebGLFramebuffer,
                      matrix: Float32Array, texture: WebGLTexture): void {
        let readTex = new Texture();
        readTex.makeTexture(gl);
        this.read = readTex.getTexture();
        this.voronoiShader.makeReadTexture(gl, frameBuffer,texture,
                                           this.read, matrix);
        
        let writeTex = new Texture();
        writeTex.makeTexture(gl);
        this.write = writeTex.getTexture();
        let step = gl.canvas.width / 2.0;
        while (step >= 1) {
            this.voronoiShader.runJumpFlood(gl, frameBuffer, this.read, this.write,
                                            matrix, step);
            this.swapTextures();
            step /= 2.0;   
        }
        this.voronoiShader.drawVoronoi(gl, texture, this.read, matrix);
    }

    // アニメーションを停止する
    public stopAnimation(): void {
        if (this.animationId != -1) {
            cancelAnimationFrame(this.animationId);
        }
    }
}