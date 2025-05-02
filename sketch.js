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
  overlayGraphics.fill(255, 0, 0, 150); // 設定填充顏色為半透明紅色
  overlayGraphics.noStroke();
  overlayGraphics.ellipse(overlayGraphics.width / 2, overlayGraphics.height / 2, 100, 100); // 繪製一個圓形
}

function draw() {
  background('#efcfe3'); // 每次重繪時設定背景顏色

  // 計算視訊畫面的位置
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  // 顯示攝影機影像，並水平翻轉
  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture, x, y, capture.width, capture.height);
  pop();

  // 在視訊畫面上方顯示 overlayGraphics
  image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(width * 0.8, height * 0.8); // 重新設定影像大小
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新建立 overlayGraphics
  overlayGraphics.fill(255, 0, 0, 150); // 設定填充顏色為半透明紅色
  overlayGraphics.noStroke();
  overlayGraphics.ellipse(overlayGraphics.width / 2, overlayGraphics.height / 2, 100, 100); // 繪製一個圓形
}
