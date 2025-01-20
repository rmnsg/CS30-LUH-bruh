// perlin Noise
// Roman Gondal
// 10/12/2024
//
// Extra for Experts:
// perline noise 
let rwidth = 5;// all the variables to help make it work
let seedr = 0;
let wids = 0;
let rtime = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  seedr = random(0,100);// fetch a random # to take from the seed map
}

function draw() {
  background(220);
  generate_terrain();//generate rects
  rectMode(CENTER);//center rects are the bottom of the screen
  randomSeed(seedr);
  Key_pressed();//check if seed pressed
}


function generate_terrain(){
  for(let x = 0; x < width; x+= rwidth){
    //let rheight= random(0,700)
    let rheight = noise(rtime);//find a specific point from noise map
    rheight *= 700;
    rtime += 0.023;
    rect(x , height, rwidth, rheight*2);}//make rects
    fill(33,35,35)//color
    rtime = 0;//reset it before it loops back so it dosent get jumbled up

}

function Key_pressed(){   
  if (keyIsDown(LEFT_ARROW) === true) {
    rwidth += 0.1;//key presses check
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    rwidth -= 0.1;
  }
}
  