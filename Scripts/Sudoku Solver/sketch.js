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
    // frameRate(2);

    createGrid();
    setEventListeners();

    current = grid[0][0];
}

function draw() {
    background(51);

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            grid[i][j].draw();

    if (startSolving)
        solve();
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

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            grid[i][j].setup();
    return;
}

function setRandomValues() {
    let amountOfRandomNumbers = floor(random(10, 50));

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

    if (!solved && solvable) {

        //Make sure current Cell is changable;
        while (!current.canChange) {
            current = current.next;
        }
        current.highlight();

        current.setValue(true, current.value + 1);

        if (current.value > 9) {
            backtrack();
            return;
        }

        if (current.checkValidValue()) {
            if (current.next == null)
                end();
            current = current.next;
        }

    }

    return;
}

function backtrack() {
    if (current.previous == null) {
        solvable = false;
        console.log("Not solvable");

        changeStatusBar("Not Solvable");

        return;
    }

    current.setValue(true, 0);
    current = current.previous;

    while (current.canChange == false)
        current = current.previous;

    return;
}

function end() {
    console.log("Solved!");
    solved = true;

    changeStatusBar("Solved!");

    return;
}

function startButtonEvent() {
    startSolving = true;
    changeStatusBar("Solving...");

    return;
}

function resetButtonEvent() {
    solved = false;
    solvable = true;
    startSolving = false;

    createGrid();
    current = grid[0][0];

    changeStatusBar("Awaiting Input");

    return;
}

function fillButtonEvent() {
    resetButtonEvent();
    setRandomValues();

    return;
}

function setEventListeners() {
    document.getElementById("startButton").addEventListener("click", startButtonEvent);
    document.getElementById("resetButton").addEventListener("click", resetButtonEvent);
    document.getElementById("fillButton").addEventListener("click", fillButtonEvent);
}

function changeStatusBar(str) {
    let statusBar = document.getElementById('statusBar');
    let beginning = "Status: ";
    statusBar.innerHTML = beginning + str;

}

function keyPressed() {

    if (isInt(key)) {
        let num = parseInt(key, 10);
        let x = floor(mouseX / size);
        let y = floor(mouseY / size);

        //Make sure key is valid
        let availableNumbers = grid[x][y].getAvailableNumbers();
        if (availableNumbers.includes(num))
            grid[x][y].setValue(false, num);
    }
}

function isInt(n) {
    return !isNaN(n);
}