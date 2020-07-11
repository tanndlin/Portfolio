let rays = [];
let boundaries = [];
let p1temp;
let p2temp;
let firstPointSet = false;
let numRays = 20;
let origin;

function setup() {
    let cnv = createCanvas(900, 900);
    cnv.parent('cnvParent7');
    background(51);
    origin = createVector();

    for (i = 0; i < numRays; i++) {
        let angle = TWO_PI / numRays * i;
        let r = new Ray(origin, angle);
        rays.push(r);
    }


    //Set outer boundaries
    let _00 = createVector();
    let _10 = createVector(width, 0);
    let _01 = createVector(0, height);
    let _11 = createVector(width, height);

    boundaries.push(new Boundary(_00, _10));
    boundaries.push(new Boundary(_01, _11));
    boundaries.push(new Boundary(_00, _01));
    boundaries.push(new Boundary(_10, _11));

}

function draw() {
    background(51);

    stroke(255);
    for (let i = 0; i < boundaries.length; i++) {
        let b = boundaries[i];
        b.draw();
    }

    for (let i = 0; i < rays.length; i++) {
        let r = rays[i];
        r.draw();
    }

    origin = createVector(mouseX, mouseY);    
    rays.forEach(r => {
        r.origin = origin;
    });

}

function mousePressed() {
    let x = mouseX;
    let y = mouseY;

    if (!firstPointSet) {
        p1temp = createVector(x, y);
        firstPointSet = true;
    } else {

        p2temp = createVector(x, y);
        let b = new Boundary(p1temp, p2temp);
        console.log(b);

        boundaries.unshift(b);

        console.log("Created boundary");
        firstPointSet = false;

    }

}