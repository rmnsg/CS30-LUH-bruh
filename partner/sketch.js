// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xva = 0;
let yva = 0;
let speed = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  square(xva, yva, 35)
  if (xva <= 465 && yva === 0){
    xva = xva + speed;
  }
  if (xva === 465 && yva <= 465){
    yva = yva + speed;
  }
  if (xva >= 0 && yva === 465){
    xva = xva - speed;
  }
  if (xva === 0 && yva >= 0){
    yva = yva - speed;
  }

  if(yva < 0 ){
    yva = 0
    
  }
  if(yva > 465){
    yva = 465
  }
  if(xva < 0 || xva > 465){
    xva = 0
  }
  
  }


function keyPressed(){
  if (keyIsDown(83)){
    speed = speed - 1
  }
}