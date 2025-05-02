let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 設定畫布為全螢幕
  background('#efcfe3'); // 設定背景顏色為 efcfe3

  // 初始化攝影機擷取
  capture = createCapture(VIDEO);
  capture.size(width * 0.8, height * 0.8); // 設定影像寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始的攝影機影像

  // 建立與視訊畫面相同大小的圖形內容
  overlayGraphics = createGraphics(capture.width, capture.height);
}

function draw() {
  background('#efcfe3'); // 每次重繪時設定背景顏色

  // 計算視訊畫面的位置
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  // 更新 overlayGraphics 的內容
  drawOverlayGraphics();

  // 顯示攝影機影像，並水平翻轉
  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture, x, y, capture.width, capture.height);
  pop();

  // 在視訊畫面上方顯示 overlayGraphics
  //image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(width * 0.8, height * 0.8); // 重新設定影像大小
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新建立 overlayGraphics
}

function drawOverlayGraphics() {
  overlayGraphics.background(0); // 設定背景為黑色
  overlayGraphics.noStroke();

  // 每隔 20 單位繪製一個圓
  for (let y = 0; y < overlayGraphics.height; y += 20) {
    for (let x = 0; x < overlayGraphics.width; x += 20) {
      // 從 capture 中取樣顏色
      let col = capture.get(x, y);
      overlayGraphics.fill(col); // 設定圓的顏色
      overlayGraphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓形，中心點偏移 10
    }
  }
}
