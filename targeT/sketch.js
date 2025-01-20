// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let backimage, backimagereport, barrelimage;
let baseimage, cannonballimage, targetimage;
let explosionimages = [];
let shotsremainingimages = [];
let targethitimages = [];

let currentGame;


function setup() {
  createCanvas(1068, 600);
  currentGame = new Game();
}

function draw() {
  currentGame.play();
  quickinput();
}

function keyPressed(){
  if(key === ' '){
    currentGame.createShot();
  }
}


function quickinput(){
  if(keyIsDown(LEFT_ARROW)){
    currentGame.changeangle(true);
  }
  if(keyIsDown(RIGHT_ARROW)){
    currentGame.changeangle(false);
  }
  if(keyIsDown(UP_ARROW)){
    currentGame.changepower(true);
  }
  if(keyIsDown(DOWN_ARROW)){
    currentGame.changepower(false);
  }
}