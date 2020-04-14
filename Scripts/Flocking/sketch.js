let birds = [];
let numberOfBirds = 100;
let maxSpeed = 2;

let alignDistLabel;
let sepDistLabel;
let cohDistLabel;

let alignInfluLabel;
let sepInfluLabel;
let cohInfluLabel;

let alignDistSlider;
let sepDistSlider;
let cohDistSlider;

let alignInfluSlider;
let sepInfluSlider;
let cohInfluSlider;

let alignmentInfluenceDistance = 100;
let alignmentInfluence = 0.01;

let seperationInfluenceDistance = 20;
let seperationInfluence = 1;

let cohesionInfluenceDistance = 100;
let cohesionInfluence = 0.005;

function setup() {
    let cnv = createCanvas(900, 900);
    cnv.parent("cnvParent6");
    background(51);

    createFlock(numberOfBirds);
    grabHTMLelements();
}

function draw() {
    background(51);

    for (let b of birds) {
        b.draw();
        b.update();
    }

    updateLabels();
    getInputs();

}

function createFlock(n) {
    for (let i = 0; i < n; i++)
        birds.push(new Bird(maxSpeed));
}

function grabHTMLelements(){
    alignDistLabel = document.getElementById('alignDistLabel');
    sepDistLabel = document.getElementById('sepDistLabel');
    cohDistLabel = document.getElementById('cohDistLabel');

    alignInfluLabel = document.getElementById('alignInfluLabel');
    sepInfluLabel = document.getElementById('sepInfluLabel');
    cohInfluLabel = document.getElementById('cohInfluLabel');

    alignDistSlider = document.getElementById('alignDistSlider');
    sepDistSlider = document.getElementById('sepDistSlider');
    cohDistSlider = document.getElementById('cohDistSlider');

    alignInfluSlider = document.getElementById('alignInfluSlider');
    sepInfluSlider = document.getElementById('sepInfluSlider');
    cohInfluSlider = document.getElementById('cohInfluSlider');
}

function updateLabels(){
    changeLabel(alignDistLabel, alignmentInfluenceDistance);
    changeLabel(sepDistLabel, seperationInfluenceDistance);
    changeLabel(cohDistLabel, cohesionInfluenceDistance);

    changeLabel(alignInfluLabel, alignmentInfluence);
    changeLabel(sepInfluLabel, seperationInfluence);
    changeLabel(cohInfluLabel, cohesionInfluence);
}

function changeLabel(label, num){
    let index = label.innerHTML.indexOf(':') + 2;
    label.innerHTML = label.innerHTML.slice(0, index) + num;
}

function getInputs(){
        alignmentInfluenceDistance = parseFloat(alignDistSlider.value);
        seperationInfluenceDistance = parseFloat(sepDistSlider.value);
        cohesionInfluenceDistance = parseFloat(cohDistSlider.value);

        alignmentInfluence = parseFloat(alignInfluSlider.value);
        seperationInfluence = parseFloat(sepInfluSlider.value);
        cohesionInfluence = parseFloat(cohInfluSlider.value);
}