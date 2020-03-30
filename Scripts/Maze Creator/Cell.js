function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.g = 0;
  this.f = 0;
  this.h = 0;
  this.gridPos = j * cols + i;
  //Top, Right, Bottom, Left
  this.walls = [true, true, true, true];
  this.neighbors = [];
  this.routes = [];
  this.visited = false;
  this.previous = undefined;
  this.path = false;

  this.show = function () {
    stroke(255);
    if (this.walls[0])
      line(this.i * size, this.j * size, (this.i + 1) * size, (this.j + 0) * size);
    if (this.walls[1])
      line((this.i + 1) * size, this.j * size, (this.i + 1) * size, (this.j + 1) * size);
    if (this.walls[2])
      line((this.i + 0) * size, (this.j + 1) * size, (this.i + 1) * size, (this.j + 1) * size);
    if (this.walls[3])
      line((this.i + 0) * size, (this.j + 0) * size, (this.i + 0) * size, (this.j + 1) * size);

    fill(255);
    // text(this.i + ", " + this.j, this.i * size + 10, this.j * size + size/2);
    // text(this.gridPos, this.i * size + 10, this.j * size + size/2);
    // text(this.neighbors.length, this.i * size + 10, this.j * size + size/2);
    if (this.visited) {
      fill(0, 255, 255);
      // rect(this.i * size, this.j * size, size, size);
    }
  }

  this.highlight = function () {
    fill(255, 0, 255);
    rect(this.i * size, this.j * size, size, size);
  }

  this.calcNeighbors = function () {
    if (this.i != 0)
      this.neighbors.push(grid[this.gridPos - 1]);
    if (this.i != cols - 1)
      this.neighbors.push(grid[this.gridPos + 1]);
    if (this.j != 0)
      this.neighbors.push(grid[this.gridPos - cols]);
    if (this.j != rows - 1)
      this.neighbors.push(grid[this.gridPos + cols]);
  }
  this.checkAva = function () {
    let temp = this.neighbors;
    this.neighbors = [];
    for (let i = 0; i < temp.length; i++) {
      if (!temp[i].visited)
        this.neighbors.push(temp[i]);
    }
  }

  this.findRoutes = function () {

    if (this.walls[0] == false)
      this.routes.push(grid[this.gridPos - cols]);

    if (this.walls[1] == false && this.i != (cols * rows) - 1)
      this.routes.push(grid[this.gridPos + 1]);

    if (this.walls[2] == false)
      this.routes.push(grid[this.gridPos + cols]);

    if (this.walls[3] == false && this.gridPos != 0)
      this.routes.push(grid[this.gridPos - 1]);

  }

}
