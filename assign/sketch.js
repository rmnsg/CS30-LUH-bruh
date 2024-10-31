// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  print("setup once on tnu at the start");
  createCanvas(1920, 1080);
} //              W  

function draw() {
  //runs over and over (targeting 60 fps)
  print(windowWidth)
  background(200);
  DrawCircles();
}

function DrawCircles(){
  fill(100,200, 255);
  circle(0,0,50);

  fill(204,102,0)
  circle(100,-20,50)

}

