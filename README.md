20250502 上課筆記


## 第一條指令

```tex=

產生一個螢幕的畫布，背景顏色為efcfe3，擷取攝影機的影像，正常的顯示在視窗的中間，影像畫面寬高為視窗大小的80%，請把程式碼寫在sketch.js內

說明:
宣告一個全域變數 capture，用來儲存攝影機的影像資料。
createCanvas(400, 400)：建立一個 400x400 像素的畫布。
background('#efcfe3')：設定畫布的背景顏色為粉紫色（HEX 色碼：#efcfe3）。
background('#efcfe3')：每次重繪畫布時，重新填充背景顏色，避免影像重疊。


```

```javascript=

let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 設定畫布為全螢幕
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(width * 0.8, height * 0.8); // 重新設定影像大小
}



```
