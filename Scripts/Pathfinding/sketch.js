let openSet = [];
let closedSet = [];
let size = 20;
let grid = [];
let cols, rows;
let mode = 'none';
let start, end;
let path = [];
let solveFlag = false;
let huer;

function setup() {
  // document.getElementById("solveButton").addEventListener("click", setSolve(true));

  let cnv = createCanvas(900, 900);
  cnv.parent('cnvParent4');
  let cnvSize = cnv.width;
  cols = floor(cnvSize / size);
  rows = floor(cnvSize / size);

  createGrid(cols, rows);
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];

  openSet.push(start);
}


function draw() {
  frameRate(144);

  //Make sure there is only one start and end
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      if (start != grid[i][j] && grid[i][j].start)
        grid[i][j].start = false;

  start.start = true;

  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      if (end != grid[i][j] && grid[i][j].end)
        grid[i][j].end = false;

  end.end = true;

  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      grid[i][j].current = false;

  //------------------------------------------------------------------------------

  if (solveFlag)
    solve();


  for (let i = 0; i < openSet.length; i++)
    openSet[i].openSet = true;

  for (let i = 0; i < closedSet.length; i++)
    closedSet[i].closedSet = true;

  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      grid[i][j].path = false;


  for (let i = 0; i < path.length; i++)
    path[i].path = true;

  background(255);
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      grid[i][j].draw();

}

function createGrid() {
  for (let i = 0; i < cols; i++) {
    let col = [];
    for (let j = 0; j < rows; j++) {
      col.push(new Cell(i, j));
    }
    grid.push(col);
  }



  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      grid[i][j].getNeighbors();

}

function mouseDragged() {
  let buttons = document.getElementsByName('mode');

  for (let i = 0; i < buttons.length; i++)
    if (buttons[i].checked)
      mode = buttons[i].value;

  let mouseSide = (mouseButton == "left");
  let x = floor(mouseX / size);
  let y = floor(mouseY / size);

  if (x < cols && x >= 0 && y < rows && y >= 0) {

    switch (mode) {
      case 'obstacle':
        grid[x][y].obstacle = mouseSide;
        break;

      case 'start':
        start = grid[x][y];
        break;
      case 'end':
        end = grid[x][y];
        break;
    }
  }

}

//-------------------------------------------------------------------------------------------------

function removeFromArray(arr, elt) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
}

function hueristic(a, b) {

  let buttons = document.getElementsByName('heuristic');

  for (let i = 0; i < buttons.length; i++)
    if (buttons[i].checked)
      huer = buttons[i].value;

  let D, D2;
  let dx, dy;

  D = document.getElementById("costInput").value;
  

  switch (huer) {
    case 'euclid':
      //Euclidian Distance
      return dist(a.i, a.j, b.i, b.j);

    case 'manhattan':
      //Taxi Cab Distance
      dx = abs(a.i - b.i);
      dy = abs(a.j - b.j);
      return D * (dx + dy);

    case 'chebyshev':
      //Taxi Cab Distance
      D2 = 1;
      dx = abs(a.i - b.i);
      dy = abs(a.j - b.j);
      return D * (dx + dy) + (D2 - 2 * D) * min(dx, dy);
  }
  return d;
}



function setSolve(bool) {
  solveFlag = bool;
  openSet = [];
  openSet.push(start);
  closedSet = [];
  path = [];

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].closedSet = false;
      grid[i][j].openSet = false;
      grid[i][j].path = false;
      grid[i][j].g = 0;
      grid[i][j].f = 0;
      grid[i][j].h = 0;
    }
  }

  // loop();
}

function solve() {

  if (openSet.length > 0) {

    var winner = 0;
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    var current = openSet[winner];
    current.current = true;

    if (current == end) {
      // noLoop();
      solveFlag = false;
      console.log("done");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    var neighbors = current.getRoutes();
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];

      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        var tempG = current.g + 1;

        var newPath = false;

        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true;
          }
        } else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        if (newPath) {
          neighbor.h = hueristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
        }

      }
    }

  } else {
    console.log("No Solution");
    noSolution = true;
    // noLoop();
    return;
  }

  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }
}