let restore = false;
let count = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  clear();
  background(255,0,255);
  //circle(mouseX,mouseY,100)
  let display = touches.length + ' touches';
  textSize(32);
  text(display, width/2, height/2);
  if (touches.length>1){
    let x0 = touches[0];
    circle(touches[0].x,touches[0].y,100)
    circle(touches[1].x,touches[1].y,100)
  }
  count++;
  text(count,width/3,height/3);
}

function keyPressed(){
restore = restore;
console.log(touches[0].x);
}