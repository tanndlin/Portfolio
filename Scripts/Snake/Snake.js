function Snake() {
    this.pos = new Vector(0, 0);
    this.dir = new Vector(0, 0);
    this.body = [];
    this.len = 1;

    this.show = function () {
        fill(255);
        rect(this.pos.x * size, this.pos.y * size, size, size);
        for (let i = 0; i < this.len - 1; i++) {
            rect(this.body[this.body.length - 2 - i].x * size, this.body[this.body.length - 2 - i].y * size, size, size);
        }
    }

    this.update = function () {
        // this.pos.add(this.dir);
        this.body.push(new Vector(this.pos.x, this.pos.y));

        if (this.body.length > this.len + 1)
            this.body.shift();

        if (this.pos.x == food.pos.x && this.pos.y == food.pos.y) {
            this.eat();
        }
        for (let i = 0; i < this.len - 1; i++) {
            if (this.body[i].x == this.pos.x && this.body[i].y == this.pos.y) {
                lose();
            }
        }
        if(this.pos.x >= cols)
            lose();
        if(this.pos.x < 0)
            lose();
        if(this.pos.y >= rows)
            lose();
        if(this.pos.y < 0)
            lose();
    }

    this.eat = function () {
        this.len++;
        food.pos = randPos();
        // console.log("EAT");
    }

}

function lose() {
    console.log("You lose!");
    // noLoop();
    reset();
    setup();
}

