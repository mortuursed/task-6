
import createCounter, { makeGreeting } from './counter.js';

const greetingEl = document.querySelector('#greeting');
const valueEl = document.querySelector('#value');
const incBtn = document.querySelector('#inc');
const decBtn = document.querySelector('#dec');

const counter = createCounter(0);

greetingEl.textContent = makeGreeting('Rosti');

const render = () => {
  valueEl.textContent = String(counter.getCount());
};

incBtn.addEventListener('click', () => {
  counter.increment();
  render();
});

decBtn.addEventListener('click', () => {
  counter.decrement();
  render();
});

render();