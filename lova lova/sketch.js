// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points =[];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let i = 0; i < points.length; i++){
    points[i].move();
    points[i].display();
  }

}

function mouseClicked(){
  points.push(new minipoint(mouseX, mouseY));
}

class minipoint{

  constructor(xpos,ypos){
    this.x = mouseY;
    this.y = mouseX;
    this.s = 99;
    this.c = color(random(255),random(255),random(255));
    this.noisex = random(55);
    this.noisey = random(111);
    this.OFFSET = 0.01;
    this.MAX_SPEED = 99;

  }

  display(){
    fill(this.c);
    noStroke();
    ellipse(this.x,this.y,this.s,this.s);
  }

  move(){

    let xspeed = map(noise(this.noisex),0,1,-this.MAX_SPEED,this.MAX_SPEED)
    let yspeed = map(noise(this.noisey),0,1,-this.MAX_SPEED,this.MAX_SPEED)
    this.x += xspeed;
    this.y += yspeed;
    this.noisex += this.OFFSET;
    this.noisey += this.OFFSET;

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
    if(this.y < 0) this.y += width;
    if(this.y > width) this.y -= width;



  }




}