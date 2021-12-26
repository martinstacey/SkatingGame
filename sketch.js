function setup() {
  createCanvas(800, 800);
  //fullscreen();
}

function draw() {
  clear();
  background(255,255,0);
  circle(mouseX,mouseY,100)
  let display = touches.length + ' touches';
  text(display, 5, 10);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}