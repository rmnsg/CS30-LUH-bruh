class Ball{

    constructor(v_){
        this.pos = createVector(73,525);
        this.velocity = v_;
        this.gravity = createVector(0,0.2)
        this.alive = true;
        this.collisonType = 0 ; // 1- ground 2- target
                                // no COllosion 0

    }

    move(){
        this.pos.add(this.velocity)
        this.velocity.add(this.gravity)
    }

    display(){
        push()
        translate(this.pos.x, this.pos.y)
        image(cannonballimage,0,0)
        pop();
    }

    getAlive(){
        return this.alive;
    }

    getcollisontype(){
        return this.collisonType
    }

    checkgroundcollison(){
        //546
        if(this.pos.y > 546){
            this.alive = false;
            this.collisonType = 1;

        }
    }
}