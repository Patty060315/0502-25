let capture;

function setup() {
  createCanvas(400, 400);
  background('#efcfe3'); // 設定背景顏色為 efcfe3

  // 初始化攝影機擷取
  capture = createCapture(VIDEO);
  capture.size(width * 0.8, height * 0.8); // 設定影像寬高為視窗大小的 80%
  capture.hide(); // 隱藏原始的攝影機影像
}

function draw() {
  background('#efcfe3'); // 每次重繪時設定背景顏色

  // 將攝影機影像顯示在畫布中央
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  image(capture, x, y, capture.width, capture.height);
}
