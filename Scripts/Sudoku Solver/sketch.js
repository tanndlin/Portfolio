let size = 100;
let grid = [];
let solved = false;
let solvable = true;
let startSolving = false;
let current;

function setup() {
    let cnv = createCanvas(900, 900);
    cnv.parent("cnvParent5");
    background(51);
    textSize(64);

    createGrid();

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            grid[i][j].setup();

    setRandomValues();

    current = grid[0][0];

}

function draw() {
    background(51);

    if (startSolving)
        solve();

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            grid[i][j].draw();

}

function createGrid() {
    grid = [];

    for (let i = 0; i < 9; i++) {
        let temp = [];
        for (let j = 0; j < 9; j++) {
            temp.push(new Cell(i, j));
        }
        grid.push(temp);
    }

    return;
}

function setRandomValues() {
    let amountOfRandomNumbers = floor(random(10, 30));

    for (let i = 0; i < amountOfRandomNumbers; i++) {

        let x = floor(random(0, 9));
        let y = floor(random(0, 9));

        let availableNumbers = grid[x][y].getAvailableNumbers();
        grid[x][y].setValue(false, availableNumbers[floor(random(0, availableNumbers.length))]);

    }
}

function solve() {

    /* -----------------------------------------IF PREVIOUS == NULL => UNSOLVABLE----------------------------------------- */
    /* ---------------------------------------------IF NEXT == NULL => SOLVED--------------------------------------------- */

    if (!solved || solvable) {

        //Make sure current Cell is changable;
        while (!current.canChange) {
            current = current.next;
        }
    }
}

function backtrack(){
    current = current.previous;
}