import P5 from 'p5';
import { draw, setup } from './sketch';
import './style.scss';

new P5((p: P5) => {
  p.setup = () => {
    setup(p);
  };

  p.draw = () => {
    draw(p);
  };
}, document.getElementById('sketch') as HTMLElement);
