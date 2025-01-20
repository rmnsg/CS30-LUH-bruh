class Game{

    constructor(){
        this.cannonangle = 60;
        this.cannonpower = 10;
        this.shots = [];

    }


    play(){
        //called once per frame acts like draw
        imageMode(CORNER);
        image(backimage,0,0);
        imageMode(CENTER);

        // process and draw every cannonball
        for(let i = 0; i < this.shots.length; i++){
            let b = this.shots[i];
            b.move();
            b.display();
            b.checkgroundcollison();
            //check the target collison
            if(b.getAlive()===false){
                if(b.getcollisontype()===1){
                    //ground collison case
                    //create a bunch of smoke particles

                    this.shots.splice(i,1);
                    i--;
                }
            }
        }

        //process and draw every smoke particle

        //draw the cannon
        this.displayCannon();
        this.displaypower()
    }

    createShot(){
        let v = createVector(this.cannonpower * cos(radians(this.cannonangle)),
        this.cannonpower * sin(radians(this.cannonangle)*-1));
        this.shots.push(new Ball(v))
        print("newshot")
    }


    displayCannon(){
        imageMode(CENTER);
        push();
        translate(73,535);
        push();
        rotate(radians(360 - this.cannonangle))
        image(barrelimage,0,0)
        pop()
        image(baseimage,0,0)
        pop();
    }

    displaypower(){
        rectMode(CORNER);
        fill(0);

        rect(0,50,this.cannonpower*15 - 50,45)
    }
    changepower(increse){
        if(increse){
            if(this.cannonpower < 20) this.cannonpower += .15;
        }
        else{
            if(this.cannonpower > 5) this.cannonpower -= .15;
        }
    }

    changeangle(increse){
        if(increse){
            if(this.cannonangle < 90) this.cannonangle += 2;
        }
        else{
            if(this.cannonangle > 0) this.cannonangle -= 2;
        }
    }

}