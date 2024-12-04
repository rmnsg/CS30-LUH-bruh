// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let wids = 0
let posx = [500,300,700,1200,900,400,0,-200,-300,-600,-700]
let posy = [600,500,400,600,200,150,1000,600,300,700,800]
let xpos = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  wids += 5;
  background(238, 207, 109);
  cloud_hopper(xpos,100);
  xpos =+ 5;
  for(let i = 0; i < posx.length; i++){
    Cloud(wids+posx[i],posy[i],1);
    Cloud(wids+posx[i]-1000,posy[i],1);
    Cloud(wids+posx[i]-2000,posy[i],1);
    Cloud(wids+posx[i]-3000,posy[i],1);
    Cloud(wids+posx[i]-4000,posy[i],1);
    Cloud(wids+posx[i]-5000,posy[i],1);
    Cloud(wids+posx[i]-6000,posy[i],1);
  }

  if(wids > width+6800){
    wids = -1300;
  }
  
  


  frameRate(60);
  
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

}

function cloud_hopper(xss,ypos){
  fill(0,0,0);
  circle(xss, ypos, 33);
  
}

