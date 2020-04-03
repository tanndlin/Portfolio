class Bird {

    pos = createVector();
    vel = createVector();
    angle = 0;
    maxSpeed = 0;

    constructor(max_speed) {
        this.pos = this.randomPos();
        this.maxSpeed = max_speed;
        this.angle = random(TWO_PI);
    }

    draw = function () {
        // ellipse(this.pos.x, this.pos.y, 10, 10);
        let size = 5;
        beginShape();

        //Bottom Right
        let x = this.pos.x + Math.cos(this.angle + PI / 2) * size;
        let y = this.pos.y + Math.sin(this.angle + PI / 2) * size;
        vertex(x, y);

        //Bottom Left
        x = this.pos.x + Math.cos(this.angle - PI / 2) * size;
        y = this.pos.y + Math.sin(this.angle - PI / 2) * size;
        vertex(x, y);

        //Point
        x = this.pos.x + Math.cos(this.angle) * 3 * size;
        y = this.pos.y + Math.sin(this.angle) * 3 * size;
        vertex(x, y);

        endShape();
    }

    update = function () {
        this.pos.add(this.vel);

        this.vel.x = Math.cos(this.angle) * this.maxSpeed;
        this.vel.y = Math.sin(this.angle) * this.maxSpeed;

        //Check out of bounds
        if (this.pos.x > width)
            this.pos.x = 0;
        if (this.pos.y > height)
            this.pos.y = 0;
        if (this.pos.x < 0)
            this.pos.x = width;
        if (this.pos.y < 0)
            this.pos.y = height;

        //Alignmnet
        let averageAngle = 0;
        let total = 0;
        for (let b of birds) {
            if (b != this) {
                if (dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y) < alignmentInfluenceDistance) {
                    averageAngle += b.angle;
                    total++;
                }
            }
        }

        averageAngle /= total;

        this.angle %= TWO_PI;
        averageAngle %= TWO_PI;

        if (averageAngle > 0) {
            if (this.angle < averageAngle)
                this.angle += alignmentInfluence;
            else
                this.angle -= alignmentInfluence;
        }

        //Seperation
        let maxSeperationInfluence = .1;
        for (let b of birds) {
            if (b != this) {
                let distanceToBird = dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y);
                if (distanceToBird < seperationInfluenceDistance) {

                    let dx = b.pos.x - this.pos.x;
                    let dy = b.pos.y - this.pos.y;
                    // let angleToBird = Math.atan(dy / dx);
                    
                    let delta = seperationInfluence / (distanceToBird);
                    delta = min(delta, maxSeperationInfluence);

                    if (dx > 0)
                        this.angle -= delta;
                    if (dx < 0)
                        this.angle += delta;
                }
            }
        }

        //Cohesion
        let averagePos = createVector();
        total = 0;
        for (let b of birds) {
            if (b != this) {
                if (dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y) < cohesionInfluenceDistance) {
                    averagePos.x += b.pos.x;
                    averagePos.y += b.pos.y;
                    total++;
                }
            }
        }

        averagePos.x /= total;
        averagePos.y /= total;

        let dx = averagePos.x - this.pos.x;
        let dy = averagePos.y - this.pos.y;

        let angleToAveragePos = Math.atan(dy / dx);

        if (angleToAveragePos < 0)
            this.angle += cohesionInfluence;
        else
            this.angle -= cohesionInfluence;
    }

    randomPos = function () {
        let x = floor(random(width));
        let y = floor(random(height));

        return createVector(x, y);
    }

}