// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const NUM_CIRCLES = 40;  
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);

}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();

}

function drawCircles(){
  noFill();
  let smallest = Infinity;
  let smallx = 0;
  let smally = 0;
  for(let i = 0; i<NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,60);
    circle(x,y,d);
    if(d< smallest){
      smallest = d;
      smallx = x;
      smally= y;
    }
  }
  fill(255,0,0);
  circle(smallx,smally,smallest)
  text(smallest, width/2, height/2)
  drawflag(smallx,smally, smallest);

}
