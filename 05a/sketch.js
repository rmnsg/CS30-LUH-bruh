// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let currentcolor = 0; //0,1,2,3
let circlesize = 50;
let mycolor = 0;
let growing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mycolor = color(50, 230, 165); //tuple 3 comma seperated vlaues
}

function draw() {
  background(255);
  //curcle code fill value
  switch(currentcolor){
    //what is the value of the VAR
    case 0:
      fill(255,0,0);
      break;
    case 1:
      fill(mycolor); break;
    case 2:
      fill(0,255,255);
      break;
  }
  if(frameCount % 10 === 0) {
    currentcolor ++;
    if (currentcolor > 2) currentcolor = 0;
  }
  circle(width/2, height/2, circlesize);

  if(growing) circlesize += 2;
  else circlesize -=2;

 
}

function keyPressed(){
  if (key === "a"){
    growing = !growing;
  }
}