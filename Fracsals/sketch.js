// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(0,100)
}

function draw() {
  background(220);
  randomSeed(seed);
  //circlencircle(width/2,height/2,width)
  //cantor(width*0.1,height*0.3,width*0.8,6)
  squarefractal(width/2,height/2,width/2)

}

function squarefractal(x,y,len){
  if(len>5){
    rectMode(CENTER);
    fill(random(255),random(255),random(255));
    push()
    translate(x,y)
    rotate(radians(frameCount))
    square(0,0,len)

    pop()
    squarefractal(x- len/2, y - len/2, len/2)
    squarefractal(x- len/2, y + len/2, len/2)
    squarefractal(x+ len/2, y - len/2, len/2)
    squarefractal(x+ len/2, y + len/2, len/2)
    
  }
}

function cantor(x,y,len,depth){
  if(depth>0){
    line(x,y,x+len,y)

    let newy = y+ 20;
    cantor(x,newy, len/3,depth -1)
    cantor(x+2/3*len,newy,len/3, depth-1)
  }
}

function circlencircle(x,y,d){
  if(d>10){
    circle(x,y,d);
    let den = map(mouseX, 0,width,1.01,1.5)
    circlencircle(x+3,y+1,d/den)
  }
}