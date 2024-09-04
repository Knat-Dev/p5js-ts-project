import P5 from 'p5';

export const setup = (p: P5) => {
  p.createCanvas(400, 400);
  p.fill(0);
};

export const draw = (p: P5) => {
  p.background(220);
  p.ellipse(p.width / 2, p.height / 2, 50, 50);
};

export const keyPressed = (p: P5) => {
  p.fill(250, 200, 30);
};

export const keyReleased = (p: P5) => {
  p.fill(0);
};

export const mouseMoved = (p: P5) => {
  // No-op by default
};

export const mouseDragged = (p: P5) => {
  console.log('what a drag');
};

export const mousePressed = (p: P5) => {
  // No-op by default
};

export const mouseReleased = (p: P5) => {
  // No-op by default
};

export const mouseClicked = (p: P5) => {
  // No-op by default
};

export const doubleClicked = (p: P5) => {
  // No-op by default
};
