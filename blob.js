
var yoff = 0.0;

function setup() {
  createCanvas(windowWidth -10,windowHeight -20);
}

function draw() {
  background(50);

  translate(width / 2, height / 2);

  var radius = 300;

  beginShape();
  var xoff = 0;
  for (var a = 0; a < 6; a += 0.1) {
    var offset = map(noise(xoff, yoff), 0, 1, -50, 50);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.09;
    //ellipse(x, y, 4, 4);
  }
  endShape();

  yoff += 0.005;
}