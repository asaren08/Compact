import { GlCanvas } from './Base/Canvas/GlCanvas';
import { LayerManager } from './App/LayerManager/LayerManager';
import { ImageDrawer } from './App/Image/ImageDrawer';
import { Vector } from './Base/Math/Vector';
import { mat4 } from 'gl-matrix';
import { EffectTool, EffectType } from './App/Effect/EffectTool';
import { Knob } from './Base/Component/Knob';
import { GradationTool, GradationType } from './App/Effect/GradationTool';
import { AdditionalTool, AdditionalType } from './App/Additonal/AdditionalTool';

let CANVAS_ID = "canvas";                   // キャンバスID
let CANVAS_WIDTH = 512;                     // キャンバス幅
let CANVAS_HEIGHT = 512;                    // キャンバス高さ
let CANVAS_INITIAL_POSITION_X = 250;        // キャンバス初期位置のX座標
let CANVAS_INITIAL_POSITION_Y = 100;        // キャンバス初期位置のY座標 

let dropArea;                               // ドロップエリア
let drawRect;                               // キャンバスの表示領域
let currentPotision;                        // キャンバス表示領域の現在位置
let glCanvas;                               // キャンバス
let layerManager;                           // レイヤー管理クラス

let effectTool;                             // エフェクトクラス
let gradationTool;                          // グラデーションクラス
let addtionalTool;                          // おまけツール

let adjustSliderTable1;                     // 調整スライダー1を表示するテーブル行
let adjustSliderLabel1;                     // 調整スライダー1のラベル
let adjustSlider1;                          // 調整スライダー1
let adjustSliderTable2;                     // 調整スライダー2を表示するテーブル行
let adjustSliderLabel2;                     // 調整スライダー2のラベル
let adjustSlider2;                          // 調整スライダー2
let toolSliderTable;                        // ツールスライダーを表示するテーブル行
let toolSliderLabel;                        // ツール用スライダーのラベル
let toolSlider;                             // ツール用汎用スライダー
let toolSliderTable2;                       // ツールスライダー2を表示するテーブル行
let toolSliderLabel2;                       // ツール用スライダー2のラベル
let toolSlider2;                            // ツール用汎用スライダー2
let seedSlider;                             // 母点スライダー
let knob;                                   // カレントノブ
let knobs;                                  // ノブ列

// UI初期化
function initUi(): void {
    // ドロップエリアとキャンバス表示領域
    dropArea = document.getElementById("dropArea");
    drawRect = document.getElementById("drawRect");
    // 調整スライダー1
    adjustSliderTable1 = document.getElementById("adjustSliderTable1");
    adjustSlider1 = document.getElementById("adjustSlider1");
    adjustSliderLabel1 = document.getElementById("adjustSliderLabel1");
    adjustSliderTable1.style.display = "none";
    // 調整スライダー2
    adjustSliderTable2 = document.getElementById("adjustSliderTable2");
    adjustSlider2 = document.getElementById("adjustSlider2");
    adjustSliderLabel2 = document.getElementById("adjustSliderLabel2");
    adjustSliderTable2.style.display = "none";
    // ツールスライダー
    toolSliderTable = document.getElementById("toolSliderTable");
    toolSlider = document.getElementById("toolSlider");
    toolSliderLabel = document.getElementById("toolSliderLabel");
    toolSliderTable.style.display = "none";
    // ツールスライダー2
    toolSliderTable2 = document.getElementById("toolSliderTable2");
    toolSlider2 = document.getElementById("toolSlider2");
    toolSliderLabel2 = document.getElementById("toolSliderLabel2");
    toolSliderTable2.style.display = "none";
    // 母点スライダー
    seedSlider = document.getElementById("seedSlider")
    // キャンバス初期位置の設定
    currentPotision = new Vector();
    currentPotision.setXY(CANVAS_INITIAL_POSITION_X, CANVAS_INITIAL_POSITION_Y);
    // ノブ列初期化
    knob = null;
    knobs = new Array();
}

initUi();

// アプリケーションを開始する
function main() {
    glCanvas = new GlCanvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
    layerManager = new LayerManager(glCanvas);
    effectTool = new EffectTool(glCanvas, layerManager);
    gradationTool = new GradationTool(glCanvas, layerManager);
    addtionalTool = new AdditionalTool(glCanvas, layerManager);
    
    layerManager.updateCanvas(); 
    addCanvasEventListener();
    setMatrix(glCanvas.getCanvas(), currentPotision);
}

main();

// ドラッグ中の要素がドロップ要素に重なった時
dropArea.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    dropArea.classList.add('dragover');
});
  
// ドラッグ中の要素がドロップ要素から外れた時
dropArea.addEventListener('dragleave', function () {
    dropArea.classList.remove('dragover');
});

// ドロップ要素にドロップされた時
dropArea.addEventListener('drop', function (event) {
    event.preventDefault();
    dropArea.classList.remove('dragover');
    let drawer = new ImageDrawer();
    let imageFile = drawer.getImageFile(event.dataTransfer.files);
    let img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = function () {
        glCanvas.setCanvasSize(img.width, img.height);
        drawer.draw(glCanvas.getGL(), img);
        layerManager.addLayer(drawer.getImageTexture());   
    };
});

// 調整スライダー1
adjustSlider1.addEventListener("input", function() {
    effectTool.draw(this.value, adjustSlider2.value);
}, false);

// 調整スライダー2
adjustSlider2.addEventListener("input", function() {
    effectTool.draw(adjustSlider1.value, this.value);
}, false);

// ツールスライダー
toolSlider.addEventListener("input", function () {
    if (knob !== null) {
        let pos = knob.getCanvasPosition();
        effectTool.draw(this.value, toolSlider2.value, pos.getX(), pos.getY());
    } else {
        effectTool.draw(this.value, toolSlider2.value); 
    }
}, false);

// ツールスライダー2
toolSlider2.addEventListener("input", function () {
    if (knob !== null) {
        let pos = knob.getCanvasPosition();
        effectTool.draw(toolSlider.value, this.value, pos.getX(), pos.getY());
    } else {
        effectTool.draw(toolSlider.value, this.value); 
    }
}, false);

// 母点スライダー
seedSlider.addEventListener("input", function() {
        addtionalTool.draw(this.value); 
}, false);

// 明るさ・コントラスト
document.getElementById("brightnessContrast").onclick = function () {
    addtionalTool.stopAnimation();
    setSlider(adjustSlider1, adjustSliderLabel1, adjustSliderTable1,
              -1.0, 1, 0.01, 0.0, "Brightness : ");
    setSlider(adjustSlider2, adjustSliderLabel2, adjustSliderTable2,
              -1.0, 1, 0.01, 0.0, "Contrast : ");
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectType.EffectTypeBrightnessContrast);
    effectTool.draw(adjustSlider1.value, adjustSlider2.value);
    removeKnob();
};

// 色相・彩度
document.getElementById("hueSarturation").onclick = function () {
    addtionalTool.stopAnimation();
    setSlider(adjustSlider1, adjustSliderLabel1, adjustSliderTable1,
              -1.0, 1, 0.01, 0.0, "Hue : ");
    setSlider(adjustSlider2, adjustSliderLabel2, adjustSliderTable2,
              -1.0, 1, 0.01, 0.0, "Sarturation : ");
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectType.EffectTypeHueSarturation);
    effectTool.draw(adjustSlider1.value, adjustSlider2.value);
    removeKnob();
};

// セピア
document.getElementById("sepia").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectType.EffectTypeSepia);
    effectTool.draw();
    removeKnob();
};

// グレースケール
document.getElementById("grayscale").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectType.EffectTypeGrayscale);
    effectTool.draw();
    removeKnob();
};

// 色反転
document.getElementById("invert").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    effectTool.setEffectType(EffectType.EffectTypeInvert);
    effectTool.draw();
    removeKnob();
};

// 2値化
document.getElementById("thresholding").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5,
              "Threshold : ");
    effectTool.setEffectType(EffectType.EffectTypeThreshold);
    effectTool.draw(toolSlider.value);
    removeKnob();
};

// すりガラス
document.getElementById("frostedGlass").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 20, 0.1, 5,
              "Radius : ");
    effectTool.setEffectType(EffectType.EffectTypefrostedGlass);
    effectTool.draw(toolSlider.value);
    removeKnob();
};

// ポスタリゼーション
document.getElementById("posterization").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 2, 16, 1, 8, "Step : ");
    effectTool.setEffectType(EffectType.EffectTypePosterization);
    effectTool.draw(toolSlider.value);
    removeKnob();
};

// 白背景透明化
document.getElementById("transpalent").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5,
              "Threshold : ");
    effectTool.setEffectType(EffectType.EffectTypeTranspalent);
    effectTool.draw(toolSlider.value);
    removeKnob();
};

// ズームぼかし
document.getElementById("zoomBlur").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 0.1, 1, 0.01, 0.5,
              "Strength : ");
    effectTool.setEffectType(EffectType.EffectTypeZoomBlur);
    removeKnob();   // ノブを一度リセットする
    let addedknob = new Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    let pos = knob.getCanvasPosition();
    effectTool.draw(toolSlider.value, 0, pos.x, pos.y);
};

// 六角形ピクセル化
document.getElementById("pixelate").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 60, 1, 10,
              "Scale : ");
    effectTool.setEffectType(EffectType.EffectTypePixelate);
    removeKnob();   // ノブを一度リセットする
    let addedknob = new Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    let pos = knob.getCanvasPosition();
    effectTool.draw(toolSlider.value, 0, pos.x, pos.y);
};

// 膨張フィルター
document.getElementById("expansion").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    setSlider(toolSlider, toolSliderLabel, toolSliderTable, 1, 200, 2, 20,
              "Radius : ");
    setSlider(toolSlider2, toolSliderLabel2, toolSliderTable2, -1.0, 1.0, 0.1, 1,
              "Strength : ");
    effectTool.setEffectType(EffectType.EffectTypeExpansion);
    removeKnob();   // ノブを一度リセットする
    let addedknob = new Knob((knobs.length).toString());
    addedknob.addKnob(drawRect, dropArea);
    knobs.push(addedknob);
    knob = addedknob;
    setMatrix(knob.getElement(), knob.getGlobalPosition());
    let pos = knob.getCanvasPosition();
    effectTool.draw(adjustSlider1.value, adjustSlider2.value, pos.x, pos.y);
};

// グラデーション
document.getElementById("blueRed").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationType.GradationTypeBlueRed);
    gradationTool.draw();
};

document.getElementById("toyCamera").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationType.GradationTypeToyCamera);
    gradationTool.draw();
};

document.getElementById("retro").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    gradationTool.setGradationType(GradationType.GradationTypeRetro);
    gradationTool.draw();
};

// おまけ機能(ボロノイアニメーション)
document.getElementById("voronoiAnimation").onclick = function () {
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalType.AdditionalTypeVoronoiAnimation);
    addtionalTool.draw(seedSlider.value);  
};

// おまけ機能(距離マップアニメーション)
document.getElementById("distanceMapAnimation").onclick = function () {
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalType.AdditionalTypeDistanceMapAnimation);
    addtionalTool.draw(seedSlider.value);  
};

// おまけ機能(ステンドグラス風)
document.getElementById("stainedGlass").onclick = function () {
    addtionalTool.stopAnimation();
    adjustSliderTable1.style.display = "none";
    adjustSliderTable2.style.display = "none";
    toolSliderTable.style.display = "none";
    toolSliderTable2.style.display = "none";
    removeKnob();
    addtionalTool.setAdditionalType(AdditionalType.AdditionalTypeStainedGlass);
    addtionalTool.draw(0);  
};

// キャンバス保存
document.getElementById("savePng").onclick = function () {
    glCanvas.saveCanvas();
};

// キャンバス表示領域のマウスイベント
drawRect.addEventListener('wheel', function(event) { 
    event.preventDefault();
    event = <WheelEvent>event;
    let del = new Vector();
    let x = event.deltaX;
    let y = event.deltaY;
    del.setXY(-x, -y);
    currentPotision.add(del);
    setMatrix(glCanvas.getCanvas(), currentPotision);
    if (knob !== null) {
        for (let i = 0; i < knobs.length; i++) {
            let pos = knobs[i].getGlobalPosition();
            pos.add(del);
            knobs[i].setGlobalPosition(pos);
            setMatrix(knobs[i].getElement(), pos);
        }
    }
}, false);

drawRect.addEventListener('mousemove', function (event) { 
    if (knob === null) {
        return;
    }
    if (knob.getIsEnable() && !knob.getIsSelected()) { // つまみが選択状態ではないとき
        let pos = new Vector();
        var rect = this.getBoundingClientRect();
        pos.setXY(event.clientX - rect.left - knob.getElement().clientWidth / 2.0,
                  event.clientY - rect.top - knob.getElement().clientHeight / 2.0);
        setMatrix(knob.getElement(), pos);
        knob.setGlobalPosition(pos);
    }
}, false);

// スライダーを設定する
function setSlider(slider: HTMLInputElement, sliderLabel: HTMLElement,
                   sliderTable: HTMLElement, min: number, max: number, step: number,
                   value: number, label: string) {
    slider.min = min.toString();
    slider.max = max.toString();
    slider.step = step.toString();
    slider.value = value.toString();
    sliderLabel.textContent = label;
    sliderTable.style.display = "block";
}

// 行列を文字列で取得する
function getMatrixString(pos: Vector): string {
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

// 行列を設定する
function setMatrix(element: HTMLElement, pos: Vector): void {
    let matrix = getMatrixString(pos);
    let matrixFunction = "matrix3d"  + "(" + matrix + ")";
    element.style.transform = matrixFunction;
}

// エフェクトツールにキャンバス座標を伝える
function setCanvasCoordinateToEffectTool(pos: Vector): void {
    if (effectTool.getEffectType() === EffectType.EffectTypeZoomBlur ||
        effectTool.getEffectType() === EffectType.EffectTypePixelate ||
        effectTool.getEffectType() === EffectType.EffectTypeExpansion) {
        effectTool.draw(toolSlider.value, toolSlider2.value, pos.getX(), pos.getY());
    }
}

// 位置からノブを探す
function findKnob(pos: Vector): Knob {
    for (let i = 0; i < knobs.length; i++) {
        if (knobs[i].isCollusion(pos)) {
            return knobs[i];
        }
    }
    return null;
}

// ノブを取り除く
function removeKnob() {
    if (knob !== null) {
        for (let i = 0; i < knobs.length; i++) {
            knobs[i].getElement().remove();
        }
        knobs.length = 0;
        knob = null;
    }
}

// キャンバスにマウスイベントリスナーをつける
function addCanvasEventListener(): void {
    let canvas = <HTMLElement>glCanvas.getCanvas();
    canvas.addEventListener('mousedown', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable()) {
            let pos = new Vector();
            if (knob.getIsSelected()) { // つまみが選択されているとき(置かれている)
                pos = knob.getCanvasPosition();
            } else {
                // つまみが選択されていないとき(移動中)
                pos = glCanvas.getCanvasCoordinate(event);
                knob.setCanvasPosition(pos);
            }
            knob.setIsSelected(!knob.getIsSelected());
            setCanvasCoordinateToEffectTool(pos);
        }
        // ノブを変更する
        let currentKnob = findKnob(glCanvas.getCanvasCoordinate(event));
        if (currentKnob !== knob && currentKnob !== null) {
            knob = currentKnob;
            if (knob.getIsSelected()) {
                knob.setIsSelected(false);
            }
        }
    }, false);
    canvas.addEventListener('mousemove', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable() && !knob.getIsSelected()) {
            // つまみが選択されていないとき
            let coord = glCanvas.getCanvasCoordinate(event);
            let size = new Vector();
            size.setXY(- knob.getElement().clientWidth / 2.0,
                       - knob.getElement().clientHeight / 2.0);
            coord.add(size);
            setCanvasCoordinateToEffectTool(coord);
        }
    }, false);
    canvas.addEventListener('mouseup', function (event) {
        if (knob === null) {
            return;
        }
        if (knob.getIsEnable() && !knob.getIsSelected()) {
            // つまみが選択されていないとき
            let coord = glCanvas.getCanvasCoordinate(event);
            setCanvasCoordinateToEffectTool(coord);
        }
    }, false);
}