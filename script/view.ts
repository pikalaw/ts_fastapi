import {getElement, htmlToElement, markdown} from './common/view_model.js';

export type {Visibility} from './common/flashing_dots.js';
export {turnFlashingDots} from './common/flashing_dots.js';

export function setWelcome(message: string): void {
  const div = getElement('.welcome');
  const child = htmlToElement(markdown(message))!;
  div.replaceChildren(child);
}
