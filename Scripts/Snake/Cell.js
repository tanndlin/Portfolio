function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.gridPos = this.i + this.j * cols;
    this.neighbors = [];
    this.routes = [];
    this.path = false;

    this.findRoutes = function(){
        this.routes = [];
        for(let i = 0; i < this.neighbors.length; i++){
            let c = this.neighbors[i];
            let blocked = false;
            for(let j = 0; j < snake.body.length - 1; j++){
                // console.log("SNAKE LENGTH: " + snake.body.length);
                // console.log(j);
                if(snake.body[j].x == c.i && snake.body[j].y == c.j){
                    blocked = true;
                }
                if(rocks.includes(c))
                blocked = true;
            }
            if(!blocked){
                this.routes.push(c);
            }
        }
    }

    this.calcNeighbors = function(){
        if(this.i != 0)
        this.neighbors.push(grid[this.gridPos - 1]);
        if(this.i != cols-1)
        this.neighbors.push(grid[this.gridPos + 1]);
        if(this.j != 0)
        this.neighbors.push(grid[this.gridPos - cols]);
        if(this.j != rows - 1)
        this.neighbors.push(grid[this.gridPos + cols]);
    }

}
