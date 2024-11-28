// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(1200, 400, WEBGL); //0,0 center
}

function draw() {
  background(0);
  push();
  rotateY(radians(frameCount));
  angle = map(mouseX,0,width,-120,120);
  for(let i = 0; i<360; i+=6){
    push();
    rotateY(radians(i));
    boxes(50);
    pop();
  }
  
  pop();
}

let angle = 1;

function boxes(size){
  if(size > 0.5){
    rotateZ(radians(angle));
    translate(size*1.25, 13);
    box(size);
    boxes(size*.7);
  }
}