// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, d = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  nofill();
}

function draw() {
  background(220);

  circle(x,y,d);
}
