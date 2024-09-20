declare global {
  interface Window {
    setup?: () => void;
    draw?: () => void;
    preload?: () => void;
    mousePressed?: () => void;
    mouseReleased?: () => void;
    mouseClicked?: () => void;
    mouseMoved?: () => void;
    mouseDragged?: () => void;
    mouseWheel?: (event: WheelEvent) => void;
    keyPressed?: () => void;
    keyReleased?: () => void;
    keyTyped?: () => void;
    touchStarted?: () => void;
    touchMoved?: () => void;
    touchEnded?: () => void;
    deviceMoved?: () => void;
    deviceTurned?: () => void;
    deviceShaken?: () => void;
  }
}

export {};
