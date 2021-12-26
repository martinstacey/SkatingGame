function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  clear();
  background(255,0,0);
  circle(mouseX,mouseY,100)
  let display = touches.length + ' touches';
  textSize(32);
  text(display, 5, 10);
  console.log(touches);
}