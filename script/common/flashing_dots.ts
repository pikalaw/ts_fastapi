import {getElement} from './view_model.js';

export type Visibility = 'visible' | 'hidden';

export function turnFlashingDots(visibility: Visibility) {
  const dots: HTMLElement = getElement('.flashing-dots');
  dots.style.visibility = visibility;
}
