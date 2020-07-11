let numSpeeds = 10;
let times = [];
let grid = [];
let circleSize;
let speed = 500;
const showExtras = false;
let biggerShapeSize = 2;

function setup() {
    // frameRate(10);
    let cnv = createCanvas(900, 900);
    cnv.parent("cnvParent9");
    background(51);

    for (let i = 0; i < numSpeeds; i++) {
        times.push(0);
    }

    circleSize = .4 * (width / (numSpeeds + 1));

    for (let i = 0; i < numSpeeds + 1; i++) {
        let temp = [];

        for (let j = 0; j < numSpeeds + 1; j++) {
            temp.push([createVector(circleSize, 0)]);
        }

        grid.push(temp);
    }



}

function draw() {
    background(51);

    for (let i = 1; i < times.length + 1; i++) {
        times[i - 1] += (TWO_PI / speed) * i;
    }



    const size = width / (numSpeeds + 1);

    stroke(255);

    //Top Row
    noFill();
    strokeWeight(1);
    for (let i = 1; i < numSpeeds + 1; i++) {
        let time = times[i - 1];

        let x = circleSize * cos(time);
        let y = circleSize * sin(time);

        let newVector = createVector(x, y);
        grid[0][i].push(newVector);

        noFill();
        beginShape();
        for (let j = 0; j < grid[0][i].length; j++) {
            let point = grid[0][i][j];

            x = i * size + size / 2;
            y = size / 2;

            x += point.x;
            y += point.y;

            vertex(x, y);
        }
        endShape();

        fill(255);
        strokeWeight(1);
        if (showExtras) {
            ellipse(x, y, 5, 5);
            line(x, 0, x, height);
        }

    }

    //Left Column
    noFill();
    strokeWeight(1);
    for (let i = 1; i < numSpeeds + 1; i++) {
        let time = times[i - 1];

        let x = circleSize * cos(time);
        let y = circleSize * sin(time);

        let newVector = createVector(x, y);
        grid[i][0].push(newVector);

        noFill();
        beginShape();
        for (let j = 0; j < grid[i][0].length; j++) {
            let point = grid[i][0][j];

            x = size / 2;
            y = i * size + size / 2;

            x += point.x;
            y += point.y;

            vertex(x, y);
        }
        endShape();

        fill(255);
        strokeWeight(1);
        if (showExtras) {
            ellipse(x, y, 5, 5);
            line(0, y, width, y);
        }

    }


    //Middle
    noFill();
    for (let i = 0; i < numSpeeds + 1; i++) {
        for (let j = 0; j < numSpeeds + 1; j++) {

            strokeWeight(1);
            rect(i * size, j * size, (i + 1) * size, (j + 1) * size);

            if (i != 0 && j != 0) {

                //Calculates period so there is no overlap
                let period = speed / gcd(i, j);
                if (frameCount < period) {

                    let points = grid[i][j];
                    let x = circleSize * cos(times[i - 1]);
                    let y = circleSize * sin(times[j - 1]);
                    let newVector = createVector(x, y);
                    grid[i][j].push(newVector);

                }

                strokeWeight(biggerShapeSize);
                beginShape();
                for (let k = 0; k < grid[i][j].length; k++) {
                    let point = grid[i][j][k];

                    x = i * size + size / 2;
                    y = j * size + size / 2;

                    x += point.x;
                    y += point.y;
                    vertex(x, y);
                }
                endShape();

                x = circleSize * cos(times[i - 1]);
                y = circleSize * sin(times[j - 1]);

                x += i * size + size / 2;
                y += j * size + size / 2;

                if (showExtras)
                    ellipse(x, y, 5, 5);

            }

        }
    }

}

function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}