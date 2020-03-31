let scl = 10;
let inc = 0.1;
let cols, rows;
let field = [];

let particles = [];

let zoff = 0;

function setup() {
  let cnv = createCanvas(900, 900);
  cnv.parent("cnvParent1");
  background(255);

  cols = floor(width / scl);
  rows = floor(height / scl);
  field = new Array(cols * rows);
  for (let i = 0; i < 2500; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {

      let index = (x + y * cols);
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      field[index] = v;
      xoff += inc;

      // stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
  }
  particles.forEach(p => {
    p.update();
    p.show();
    p.follow(field);
  });
  zoff += 0.008;
}

function refresh(){
  background(255);
}