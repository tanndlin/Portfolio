let snake;
let grid = [];
let snakeRows, snakeCols;
let size = 20;
let food;
let openSet = [];
let closedSet = [];
let current;
let start, end;
let path = [];
let rocks = [];
let numRocks = 0;
let stuckFrames = 0;

function setup() {
  let cnv = createCanvas(900, 900);
  cnv.parent("cnvParent2");
  setEvents();
  // reset();

  cols = Math.floor(width / size);
  rows = Math.floor(height / size);

  snake = new Snake();
  food = new Food();

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid.push(new Cell(i, j));
    }
  }

  let temp = [];
  for (let i = 0; i < numRocks; i++) {
    let r = Math.floor(Math.random() * grid.length);
    if (!temp.includes(r))
      temp.push(r);
  }
  for (let i = 0; i < temp.length; i++) {
    rocks.push(grid[temp[i]]);
  }

  for (let i = 0; i < grid.length; i++) {
    grid[i].calcNeighbors();
    grid[i].findRoutes();
  }
  findPath();
  // console.log(path);
}

function reset() {
  snake;
  grid = [];
  snakeRows, snakeCols;
  food;
  openSet = [];
  closedSet = [];
  current;
  start, end;
  path = [];
  rocks = [];
  setup();
}

function setEvents(){
  document.getElementById("rockSlider").addEventListener("change", updateSliders);
}

function updateSliders(){
  console.log("Updating");
  
  let rockSlider = document.getElementById("rockSlider");
  
  numRocks = rockSlider.value;
  console.log(numRocks);
  reset();
}

function draw() {
  background(51);
  noFill();

  findPath();
  if (path.length > 0) {
    let go = path.pop();
    let x = go.i;
    let y = go.j;
    snake.pos.x = x;
    snake.pos.y = y;
  }
  stroke(0);
  strokeWeight(1);

  fill(150);
  for (let i = 0; i < rocks.length; i++) {
    rect(rocks[i].i * size, rocks[i].j * size, size, size);
  }

  snake.update();
  snake.show();
  food.show();
  beginShape();
  noFill();
  stroke(255, 0, 200);
  strokeWeight(size / 5);
  for (var i = 0; i < path.length; i++) {
    vertex(path[i].i * size + size / 2, path[i].j * size + size / 2);
  }
  endShape();

  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(25);
  text("Number of Rocks: " + numRocks, 10, 20);

}


function findPath() {
  path = [];
  for (let i = 0; i < grid.length; i++) {
    grid[i].findRoutes();
    grid[i].g = 0;
    grid[i].f = 0;
    grid[i].h = 0;
    grid[i].previous = undefined;
    grid[i].path = false;
  }
  //Find the cell that contains the head
  let foodCell;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].i == snake.pos.x && grid[i].j == snake.pos.y) {
      start = grid[i];
    }
    if (grid[i].i == food.pos.x && grid[i].j == food.pos.y) {
      foodCell = grid[i];
    }
  }
  end = foodCell;
  // console.log(start);
  // console.log(end);
  openSet = [start];
  closedSet = [];
  // console.log(openSet, closedSet);
  // console.log(start);
  // openSet.push(start);
  // start = snake.pos;
  solve();
  path.pop();
}


function keyPressed() {
  let up = new Vector(0, -1);
  let down = new Vector(0, 1);
  let left = new Vector(-1, 0);
  let right = new Vector(1, 0);
  switch (key) {
    case 'w':
      if (snake.dir.y != down.y) {
        snake.dir = up
      }
      break;
    case 's':
      if (snake.dir.y != up.y) {
        snake.dir = down
      }
      break;
    case 'd':
      if (snake.dir.x != left.x) {
        snake.dir = right;
      }
      break;
    case 'a':
      if (snake.dir.x != right.x) {
        snake.dir = left;
      }
      break;
  }
}



function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.add = function (v) {
    this.x += v.x;
    this.y += v.y;
  }
}