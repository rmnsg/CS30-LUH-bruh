// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mybook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mybook = new Book("rmns", "rmn",3064449930321,"stone",2333)
}

function draw() {
  background(220);
  mybook.display();
}

class Book{

  constructor(title, author, isbn, cover, pages,x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  display(){
    rectMode(CENTER); textAlign(CENTER,CENTER); textSize(20);
    switch(this.cover){
      case"softcover":
        fill(200,200,150); break;
      case"hardcover":
        fill(120,255,255); break;
      case "stone":
        fill(150,100,15); break;

    }
    rect(this.x, height/2, this.pages/10,150);
    fill(155);
    text(this.title[0], this.x, height/2)
  
  }

  printOut(){
    print(this.title + ", by" + this.author);
    print("length:" + this.pages);
    print("isbn" + this.isbn)
  }



}


