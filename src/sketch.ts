window.setup = function () {
  console.log('setup called');
  createCanvas(400, 400);
};

window.draw = function () {
  background(220);
  ellipse(50, 50, 80, 80);
};
