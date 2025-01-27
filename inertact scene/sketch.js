// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let xs = 0
let ys = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(153,255,217);
  text(mouseX + " " + mouseY,mouseX,mouseY)
  noStroke();
  fill(255)
  circle(0,height/5,70)
  circle(39,height/5+12,55)
  circle(10,height/5+19,65)

  circle(300,height/5,70)
  circle(280,height/5+12,55)
  circle(339,height/5+12,55)
  circle(310,height/5+19,65)

  circle(700,height/5,70)
  circle(680,height/5+12,55)
  circle(739,height/5+12,55)
  circle(710,height/5+19,65)

  circle(500,height/5+300,70)
  circle(480,height/5+312,55)
  circle(539,height/5+312,55)
  circle(510,height/5+319,65)
  
  circle(0,height/5+300,70)
  circle(18,height/5+312,55)
  circle(39,height/5+312,55)
  circle(10,height/5+319,65)

  fill(50,41,47)
  rect(0,height-100,width,100)

  fill(112,93,86)
  rect(800,842-248,15,250)
  
  fill(33,78,52)
  xs = 0
  ys = 0
  triangle(810+xs,570+ys,760+xs,670+ys,860+xs,670+ys)
  triangle(810+xs,570+ys+50,760+xs,670+50+ys,860+xs,670+50+ys)
  triangle(810+xs,570+ys+100,760+xs,670+100+ys,860+xs,670+100+ys)

  xs = -600
  ys = 0  
  fill(112,93,86)
  rect(800+xs,842-248+ys,15,250)
  
  fill(33,78,52)
  triangle(810+xs,570+ys,760+xs,670+ys,860+xs,670+ys)
  triangle(810+xs,570+ys+50,760+xs,670+50+ys,860+xs,670+50+ys)
  triangle(810+xs,570+ys+100,760+xs,670+100+ys,860+xs,670+100+ys)

}
