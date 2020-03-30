function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.obstacle = false;
    this.start = false;
    this.end = false;
    this.current = false;
    this.openSet = false;
    this.closedSet = false;
    this.path = false;
    this.neighbors = [];
    this.previous;


    this.draw = function () {
        strokeWeight(1);
        line(this.i * size, this.j * size, (this.i + 1) * size, this.j * size); //Top
        line(this.i * size, (this.j + 1) * size, (this.i + 1) * size, (this.j + 1) * size); //Bottom
        line(this.i * size, this.j * size, this.i * size, (this.j + 1) * size); //Left
        line((this.i + 1) * size, this.j * size, (this.i + 1) * size, (this.j + 1) * size); //Right


        noFill();
        if (this.openSet)
            fill(0, 255, 0);
        if (this.closedSet)
            fill(255, 0, 0);
        if (this.path)
            fill(255, 255, 0);
        if (this.current)
            fill(255, 0, 255);
        if (this.end)
            fill(255, 165, 0);
        if (this.start)
            fill(0, 0, 255);
        if (this.obstacle)
            fill(51);
        stroke(0);
        rect(this.i * size, this.j * size, size, size);

    }

    this.getNeighbors = function () {
        // console.log(this);

        if (this.i > 0)
            this.neighbors.push(grid[this.i - 1][this.j]);
        if (this.i < cols - 2)
            this.neighbors.push(grid[this.i + 1][this.j]);
        if (this.j > 0)
            this.neighbors.push(grid[this.i][this.j - 1]);
        if (this.j < rows - 2)
            this.neighbors.push(grid[this.i][this.j + 1]);
    }

    this.getRoutes = function () {
        let routes = [];
        for (let i = 0; i < this.neighbors.length; i++)
            if (!this.neighbors[i].obstacle)
                routes.push(this.neighbors[i]);

        return routes;
    }

}