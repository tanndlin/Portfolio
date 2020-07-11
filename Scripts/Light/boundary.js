class Boundary{

    p1 = createVector();
    p2 = createVector();

    constructor(p1_, p2_){
        this.p1 = p1_;
        this.p2 = p2_;
    }

    draw = function(){
        line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }

}