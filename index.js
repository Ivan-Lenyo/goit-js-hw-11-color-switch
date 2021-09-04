const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

let timerId = null;

refs.buttonStart.addEventListener('click', startChangeBodyColor);
refs.buttonStop.addEventListener('click', stopChangeBodyColor);

function startChangeBodyColor() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length)]}`;
    }, 1000);
    refs.buttonStart.disabled = true;
};

function stopChangeBodyColor() {
    clearInterval(timerId);
    refs.buttonStart.disabled = false;
};