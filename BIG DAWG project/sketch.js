// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let wids = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for(let i = 0; i < 20; i++){
  //   Cloud(wids,random(0,height),random(0.5,2.0))
  // }
}

function draw() {
  wids += 25;

  background(238, 207, 109);
//  Cloud(wids,height/2,1.5)
  frameRate(60)
  for(let i = 0; i < 123; i++){
  Cloud(wids,height,random(.05,2,0))
  if(wids >= width+5000){
    wids = 0
    } 
  }
}

function Cloud(xs,ys,ws){
  fill(0,0,0);
  noStroke();
  scale(ws);
  circle(xs,ys,65)
  circle(xs+20, ys+4, 55)
  circle(xs-5, ys-12, 55)
  circle(xs-23, ys+3, 55)
  fill(255,255,200)
  circle(xs,ys,63)
  circle(xs+20, ys+4, 53)
  circle(xs-5, ys-12, 53)
  circle(xs-23, ys+3, 53)
  ellipse(xs+200,ys+200,200)
  ellipse(xs+150,ys+200,200)
  ellipse(xs+200,ys+150,200)

}

