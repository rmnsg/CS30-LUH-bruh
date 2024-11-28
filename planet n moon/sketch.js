// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  car1 = new Vehicle(width/2,height/(random(2,3)),0,10,0)

  eastbound = [];
  westbound = [];

  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(random(width), random(height/2,height/3), 0, 5, 0));
    westbound.push(new Vehicle(random(width), random(height/1.4,height/1.79), 1, 5, 1));

  }

}

function draw() {
  background(220);
  DrawRoad();
  for (let vehicle of eastbound) { 
    vehicle.action(); 
  } 
  for (let vehicle of westbound) {
     vehicle.action();
  }
}


class Vehicle{

  constructor(x,y,d,xs,type){
    this.x = x;
    this.y = y;
    this.d = d;
    this.xs = xs;
    this.c = color(random(255),random(255),random(255));
    this.type = type;}

  display(){
    if(this.type === 0){
      this.drawCar();
    }
    else if(this.type ===1){
      this.drawTruck();
    }
  }

   
  move() {
    if (this.d === 0) {
      this.x += this.xs;
      if (this.x > width) {
        this.x = -45;
      }
    } 
    else {
      this.x -= this.xs;
      if (this.x < 0) {
        this.x = width;
      }
    }
  }
  

    
  speedUp(){
    if (this.d === 0 && this.xs < 15) {
      this.xs += 1;
      if(this.xs > 15){
        this.xs = 14;
        
      }
    } 
    else if (this.d === 1 && this.xs > 0) {
      this.xs -= 1;
      if(this.xs <= 1){
        this.xs = 5;
    }
  }
  }

  speedDown() {
    if (this.xs > 1) {
      this.xs -= 1;
      if(this.xs <= 0){
        this.xs += 5;
      }
    }
  }


  action() {
    this.move();
    if (random(100) < 1) this.speedUp();
    if (random(100) < 1) this.speedDown();
    this.display();
  }
  
  

  drawCar(){
    fill(this.c);
    rect(this.x,this.y,100,40);

  }

  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,100,40);

  }
}

function DrawRoad(){
  fill(0);
  rect(0,height / 3,width,500);

  stroke(155);
  for (let i = 0; i < width; i +=50){
    fill(255,255,255)
    strokeWeight(5)
    line(i, height/2+50, i + 30, height/2+50)
  }

}
