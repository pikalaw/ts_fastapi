import {getWelcome} from './model.js';
import {setWelcome} from './view.js';

async function main() {
  const welcome = await getWelcome();
  setWelcome(welcome);
}

main();
