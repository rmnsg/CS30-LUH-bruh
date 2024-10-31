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
  mybackground();
  myforeground();
  //screen is updated at the end of draw
}

let Ys = Y
function mybackground(){
// use a lopp to draw a gradient background
  let= rectheight = 1;
  noStroke();
  for(let y = 0; y < height; y += rectheight){
    let val= map(y,0,width,0,255)
    rect(val,255-val, val);
    fill(y/3)
  }

}

function myforeground(){
  // use FOR / WHILE loops to draw on the canvas
  for (let x = 0; x < width; x = x + 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x ,x, height/2)
  }

  //draw some stars
  let starcount = 0;
  fill(random(0,255),random(0,255),random(0,255)); //red
  while(starcount < 100){
    let x = random(0, width)
    let y = random(0, height)
    circle(x,y,10)
    starcount++;


  }

}

