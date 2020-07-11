let drawings = [];
let drawSize = 40;
let angularVelocity = 1;
let drawSizeRandomness = 0;
let strokeColor;
let cnvColor;

let angularVeloSlider;
let angularVeloLabel;

let drawSizeRandLabel;
let drawSizeRandSlider;

let strokeColorPicker;
let cnvColorPicker;

function setup() {
    let cnv = createCanvas(900, 900);
    cnv.parent('cnvParent8')
    angleMode(DEGREES);
    frameRate(60);

    getHTMLElements();

}

function draw() {
    updateHTML();

    background(51);
    push();
    translate(width / 2, height / 2); //Centers origin

    stroke(255);
    fill(cnvColor);
    ellipse(0, 0, 600, 600);

    stroke(0);
    updateLocations();
    for (let i = 0; i < drawings.length; i++) {
        let d = drawings[i];
        fill(d.color);
        ellipse(d.pos.x, d.pos.y, d.size, d.size);
    }

    pop();

}

function mouseDragged() {
    console.log();
    let x = mouseX - width / 2;
    let y = mouseY - height / 2;

    let distFromCenter = dist(x, y, 0, 0);

    if (distFromCenter > 300)
        return;


    let angle = atan(y / x);
    if (x < 0)
        angle += 180;



    drawings.push({
        'pos': createVector(x, y),
        'size': drawSize + Math.random() * drawSizeRandomness - drawSizeRandomness / 2,
        'angle': angle,
        'color': strokeColor
    });
}

function updateLocations() {

    for (let i = 0; i < drawings.length; i++) {
        let d = drawings[i];

        let distanceFromCenter = dist(d.pos.x, d.pos.y, 0, 0);

        d.pos.x = distanceFromCenter * cos(d.angle);
        d.pos.y = distanceFromCenter * sin(d.angle);

        d.angle += angularVelocity;

    }
}

function reset() {
    drawings = [];
}

function updateHTML() {
    getSliderValues();
    updateLabels();
}

function getSliderValues() {
    angularVelocity = parseInt(angularVeloSlider.value);
    drawSizeRandomness = parseInt(drawSizeRandSlider.value);
    strokeColor = strokeColorPicker.value;
    cnvColor = cnvColorPicker.value;

}
function updateLabels() {
    angularVeloLabel.innerHTML = "Angular Velocity: " + angularVelocity + " Degree(s) per second";
    drawSizeRandLabel.innerHTML = "Draw Size Randomness: " + drawSizeRandomness;
}

function getHTMLElements() {
    angularVeloSlider = document.getElementById('angleVeloSlider');
    angularVeloLabel = document.getElementById('angleVeloLabel');

    drawSizeRandLabel = document.getElementById('drawSizeRandLabel');
    drawSizeRandSlider = document.getElementById('drawSizeRandSlider');

    strokeColorPicker = document.getElementById('strokeColorPicker');
    cnvColorPicker = document.getElementById('cnvColorPicker');

}