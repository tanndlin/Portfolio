function Food(){
    this.pos = randPos();
    
    this.show = function(){
        fill(255, 0, 0);
        rect(this.pos.x * size, this.pos.y * size, size, size);
    }
}

function randPos(){
    let x = Math.floor(Math.random() * cols);
    let y = Math.floor(Math.random() * rows);
    for(let i = 0; i < snake.body.length; i++){
        if(snake.body[i].x == x && snake.body[i].y == y){
            return randPos();
        }
    }
    for(let i = 0; i < rocks.length; i++)
        if(x == rocks[i].i && y == rocks[i].j)
            return randPos();
            
    return new Vector(x, y);
}
