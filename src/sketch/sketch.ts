import P5 from 'p5';

export const setup = (p: P5) => {
  p.createCanvas(800, 600);
  p.background(0);
};

export const draw = (p: P5) => {
  p.fill(255);
  p.ellipse(p.width / 2, p.height / 2, 50, 50);
};
