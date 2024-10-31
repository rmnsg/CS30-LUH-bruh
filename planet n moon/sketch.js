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
  background(220);
  DrawRoad();
}

class Veichle{

  constructor(x,y,d,xs,d){
    this.x = x;
    this.y = y;
    this.d = d;
    this.xs = xs;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
  }

  display(){
    if(this.type === 0){
      this.drawCar();
    }
    else if(this.type ===1){
      this.drawTruck();
    }
  }

  DrawRoad(){
    fill(0);
    rect(height,height / 2 , width, width/2)

    //draw - - - - -
    stroke(155);
    for (let i = 0; i < width; i +=50){
      
    }

  }

  drawCar(){
    fill(this.c);
    rect(this.x,this.y,100,40)

  }

  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,100,40)

  }
}

