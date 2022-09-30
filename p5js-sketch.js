let xoff = 0.0;
let yoff = 256.333;

function setup() {
  createCanvas(512, 512);
  background(204);
}

function draw() {
  //background(204);
  xoff = xoff + 0.05;
  yoff = yoff + 0.05;
  let nX = noise(xoff) * width;
  let nY = noise(yoff) * height;
  ellipse(nX, nY, 51, 51);
}