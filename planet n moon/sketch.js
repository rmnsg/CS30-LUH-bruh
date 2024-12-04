// Cars, Cars, and more Cars!
// ROMAN GONDAL
// 11/28/23
// Mr. Scoot/ Mr Hammond/ CS30
// casrs moving from one side of the screen to another wrapping around and random.
//

function setup() {
  createCanvas(windowWidth, windowHeight);

  eastbound = [];
  westbound = [];
      //Two arrays that will be the containers for the veichles

  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(random(width), random(height/2,height/3), 0, 5, int(random(0,1))));
    westbound.push(new Vehicle(random(width), random(height/1.4,height/1.79), 1, 5, int(random(0,2))));
    //loop that sends our a desired amount of veichles. and defines east/westbound
  }

}

function draw() {
  background(220);
  DrawRoad();
  for (let vehicle of eastbound) { 
    vehicle.action(); 
    //triggers eastbound veichles with the action function
  } 
  for (let vehicle of westbound) {
     vehicle.action();
    //triggers westbound veichles with the action function

  }
}


class Vehicle{
  //class where the veichle object is defined, coordinates, color, speed, type
  constructor(x,y,d,xs,type){
    this.x = x;
    this.y = y;
    this.d = d;
    this.xs = xs;
    this.c = color(random(255),random(255),random(255));
    this.type = type;}

  display(){
    //this func displays the desired veichle type
    if(this.type === 0){
      this.drawCar();
    }
    else if(this.type === 1){
      this.drawTruck();
    }
  }

   
  move() {
    if (this.d === 0) {
      this.x += this.xs;
      if (this.x > width) {
        this.x = -45; // if x is off screen push it back in
      }
    } //if direction is 0 you should move east,(else) move west
    else {
      this.x -= this.xs;
      if (this.x < -100) { //if the car goes 100 pixels off screen tp it back
        this.x = width+45;//to the front so its more smooth
      }
    }
  }
  

    
  speedUp(){
    if (this.d === 0 ) {
      if(this.xs < 15){
        this.xs += 1;
        if(this.xs > 15){
          this.xs = 14;
      } // if the direction is 0, and the speed is less than 15 add 1 to the xs value
      }
    } 
    else if (this.d === 1) {
      if(this.xs > 0){
      this.xs -= 1;
      if(this.xs <= 1){
        this.xs = 5;
        
      }
      }
    }
  }

  speedDown() {
    if (this.xs > 1) {
      this.xs -= 1;
      if(this.xs <= 0){
        this.xs += 5;
      }//speed down if spped is greater than 1. if speed goes to 0 add 5.
    }
  }
  changecolor(){
    this.c = color(random(255),random(255),random(255));
  }//random color


  action() {
    this.move();
    if (random(100) < 1) this.speedUp();
    if (random(100) < 1) this.speedDown();
    if (random(500) < 1) this.changecolor();
    this.display();
  }//make all the above functions have 1/100 chance of happeing
  
  

  drawCar(){
    noStroke();
    fill(255,255,255);
    square(this.x+12,this.y-5,15)
    square(this.x+75,this.y-5,15)
    square(this.x+75,this.y+20,15)
    square(this.x+12,this.y+20,15)
    fill(this.c);
    rect(this.x,this.y,100,30);
    //car graphic
    

  }

  drawTruck(){
    noStroke();
    fill(this.c);
    rect(this.x,this.y,100,40);
    fill(255,255,255)
    rect(this.x-1,this.y,1,40);
    fill(this.c);
    rect(this.x-12,this.y,10,40);
    //truck graphic
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
  }//road graphic, duplicating the lane dividers

}
