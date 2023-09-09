import {fromEvent, Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';
import showdown from 'showdown';

export function getElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`no element found for ${selector}`);
  }
  return element;
}

export function getChangedValue(selector: string): Observable<string> {
  const element = getElement<HTMLInputElement>(selector);
  return fromEvent(element, 'input').pipe(
    map(event => {
      if (!event.target) return undefined;
      const target = event.target as HTMLInputElement;
      return target.value;
    }),
    startWith(element.value),
    filter((value: string | undefined): value is string => !!value)
  );
}

export function htmlToElement(html: string): ChildNode | undefined {
  const temp = document.createElement('template');
  html = html.trim(); // Never return a space text node as a result
  temp.innerHTML = html;
  const child = temp.content.firstChild;
  if (!child) return undefined;
  return child;
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function markdown(str: string): string {
  const converter = new showdown.Converter({
    emoji: true,
    literalMidWordUnderscores: true,
    openLinksInNewWindow: true,
    parseImgDimensions: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
  });
  const html = converter.makeHtml(str);
  return html;
}
