// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(238, 207, 109);
  Cloud(random(width),random(height),33)
  frameRate(3)
}

function Cloud(xs,ys,ws){
  
  fill(0,0,0)
  noStroke();
  circle(xs,ys,65)
  circle(xs+20, ys+4, 55)
  circle(xs-5, ys-12, 55)
  circle(xs-23, ys+3, 55)
  fill(255,255,200)
  circle(xs,ys,63)
  circle(xs+20, ys+4, 53)
  circle(xs-5, ys-12, 53)
  circle(xs-23, ys+3, 53)
  



}

