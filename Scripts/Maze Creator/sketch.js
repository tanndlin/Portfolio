let grid = [];
let stack = [];
let cols, rows;
let size = 50;
let current;
let openSet = [];
let closedSet = [];
let start, end;
let solveCheck, sizeInput;

function buttonChecked() {
  console.log("Hello");

  if (stack.length == 0) {
    for (var i = 0; i < grid.length; i++) {
      grid[i].findRoutes();
    }

    grid[0].walls[3] = false;
    grid[grid.length - 1].walls[1] = false;
    current = grid[0];

    solve();
  }
}

function sizeChange(){
  size = sizeInput.value;
  console.log(size);
  reset();
}

function getElements() {
  solveCheck = document.getElementById('solveCheck');
  solveCheck.addEventListener("click", buttonChecked);

  sizeInput = document.getElementById("sizeInput");
  sizeInput.addEventListener("change", sizeChange);
}

function reset() {
  grid = [];
  openSet = [];
  closedSet = [];
  stack = [];
  setup();
}


function setup() {
  getElements();
  let cnv = createCanvas(900, 900);
  cnv.parent('cnvParent3');
  background(51);

  cols = Math.floor(width / size);
  rows = Math.floor(height / size);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid.push(new Cell(i, j));
    }
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i].calcNeighbors();
  }

  current = grid[0];
  start = grid[0];
  end = grid[grid.length - 1];
  openSet.push(start);
  stack.push(current);
  current.visited = true;  

}

function draw() {
  background(51);
  createMaze();
  noFill();
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function createMaze() {
  if (stack.length > 0) {
    if (current.neighbors.length > 0) {
      let r = Math.floor(Math.random() * current.neighbors.length);
      stack.push(current);
      current.highlight();
      let n = current.neighbors[r];

      switch (n.gridPos) {
        case current.gridPos + cols:
          current.walls[2] = false;
          n.walls[0] = false;
          break;
        case current.gridPos - cols:
          current.walls[0] = false;
          n.walls[2] = false;
          break;
        case current.gridPos + 1:
          current.walls[1] = false;
          n.walls[3] = false;
          break;
        case current.gridPos - 1:
          current.walls[3] = false;
          n.walls[1] = false;
          break;
      }

      current = n;
      current.visited = true;

    } else {
      current = stack.pop();
    }

    //Delete Myself From Neighbors' Lists
    if (current.i != 0)
      grid[current.gridPos - 1].checkAva();
    if (current.i != cols - 1)
      grid[current.gridPos + 1].checkAva();
    if (current.j != 0)
      grid[current.gridPos - cols].checkAva();
    if (current.j != rows - 1)
      grid[current.gridPos + cols].checkAva();
  } else {
    if (solveCheck.checked) {
      for (var i = 0; i < grid.length; i++) {
        grid[i].findRoutes();
      }

      grid[0].walls[3] = false;
      grid[grid.length - 1].walls[1] = false;
      current = grid[0];

      solve();
    }
    noLoop();
  }
}
