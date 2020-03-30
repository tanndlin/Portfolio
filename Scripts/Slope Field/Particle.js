function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.maxSpeed = 1;
    this.prevPos = createVector();

    this.update = function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.acc.mult(0);
        this.updatePrevPos();
        this.edges();
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.show = function () {
        stroke(0, 5);
        strokeWeight(1);
        // point(this.pos.x, this.pos.y);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrevPos();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrevPos();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrevPos();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrevPos();
        }
    }

    this.follow = function (vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;
        this.applyForce(vectors[index]);
    }

    this.updatePrevPos = function(){
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
}