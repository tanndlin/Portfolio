function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.value = 0;
    this.canChange = true;
    this.neighbors = [];
    this.next;
    this.previous;

    this.draw = function () {
        stroke(255);
        strokeWeight(1);
        noFill();

        if (!this.canChange) {
            fill(0, 165, 255, 50);
        }

        rect(this.i * size, this.j * size, size, size);

        if (this.value != 0) {
            fill(255);
            text(this.value, this.i * size + 30, this.j * size + 75);
        }

    }

    this.highlight = function () {
        fill(255, 0, 255);
        rect(this.i * size, this.j * size, size, size);
        this.draw();
    }

    this.getAllNeighbors = function () {
        this.neighbors = [];

        //In row => Same j
        for (let i = 0; i < 9; i++)
            if (grid[i][this.j] != this)
                this.neighbors.push(grid[i][this.j]);

        //In Col => Same i
        for (let j = 0; j < 9; j++)
            if (grid[this.i][j] != this && !this.neighbors.includes(grid[this.i][j]))
                this.neighbors.push(grid[this.i][j]);

        //In Block
        let xGroup = floor(this.i / 3);
        let yGroup = floor(this.j / 3);

        let xs = [1, 2, 3];
        let ys = [1, 2, 3];

        xs = xs.map(e => e + 3 * xGroup - 1);
        ys = ys.map(e => e + 3 * yGroup - 1);

        for (let i of xs)
            for (let j of ys)
                if (grid[i][j] != this && !this.neighbors.includes(grid[i][j]))
                    this.neighbors.push(grid[i][j]);
    }

    this.getAvailableNumbers = function () {

        let availableNumbers = Array.from(Array(10).keys());
        availableNumbers.shift();

        for (let n of this.neighbors)
            if (availableNumbers.includes(n.value))
                availableNumbers.splice(availableNumbers.indexOf(n.value), 1);

        if (this.value != 0)
            availableNumbers.splice(availableNumbers.indexOf(this.value), 1);

        return availableNumbers;

    }

    this.setValue = function (change, val) {
        this.value = val;
        this.canChange = change;
    }

    this.checkValidValue = function (val) {
        if (this.getAvailableNumbers().includes(val))
            return true;
        return false;
    }

    this.calcNext = function () {
        if (this.i == 8 && this.j != 8) {
            this.next = grid[0][this.j + 1];
            return;
        }
        if (this.i < 8 && this.j != 8) {
            this.next = grid[this.i + 1][this.j];
            return;
        }
        this.next = null;
        return;

    }

    this.calcPrevious = function(){
        if(this.i != 0 && this.j != 0){
            this.previous = grid[this.i-1][this.j];
            return;
        }
        if(this.i == 0 && this.j != 0){
            this.previous = grid[8][this.j-1];
            return;
        }
        this.previous = null;
        return;
    }

    this.setup = function(){
        this.calcNext();
        this.calcPrevious();
        this.getAllNeighbors();
    }

}