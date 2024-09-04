import P5 from 'p5';
import {
    doubleClicked,
    draw,
    keyPressed,
    keyReleased,
    mouseClicked,
    mouseDragged,
    mouseMoved,
    mousePressed,
    mouseReleased,
    setup
} from './sketch';

// main styles
import './style.scss';

declare global {
    interface Window {
        p: P5;
    }
}


export const initializeSketch = (element: HTMLElement) => {
    new P5((p: P5) => {
        window.p = p;
        console.log('here')
        // Setup the built-in P5 eventhandlers
        p.setup = () => setup(p);
        p.draw = () => draw(p);
        p.keyPressed = () => keyPressed(p);
        p.keyReleased = () => keyReleased(p);
        p.mouseMoved = () => mouseMoved(p);
        p.mouseDragged = () => mouseDragged(p);
        p.mousePressed = () => mousePressed(p);
        p.mouseReleased = () => mouseReleased(p);
        p.mouseClicked = () => mouseClicked(p);
        p.doubleClicked = () => doubleClicked(p);
    }, element);
};

initializeSketch(document.getElementById('sketch')!);