import P5 from "p5";

// Default setup function
export const setup = (p: P5) => {
    p.createCanvas(400, 400);
    p.fill(0);
};

// Default draw function
export const draw = (p: P5) => {
    p.background(220);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
};

// Default keyPressed event
export const keyPressed = (p: P5) => {
    p.fill(250, 200, 30);
};

// Default keyReleased event
export const keyReleased = (p: P5) => {
    p.fill(0);
};

// Default mouseMoved event
export const mouseMoved = (p: P5) => {
    // No-op by default
};

// Default mouseDragged event
export const mouseDragged = (p: P5) => {
    console.log("what a drag");
};

// Default mousePressed event
export const mousePressed = (p: P5) => {
    // No-op by default
};

// Default mouseReleased event
export const mouseReleased = (p: P5) => {
    // No-op by default
};

// Default mouseClicked event
export const mouseClicked = (p: P5) => {
    // No-op by default
};

// Default doubleClicked event
export const doubleClicked = (p: P5) => {
    // No-op by default
};
