import moment from 'moment';

//---class Clock---
const getTemplateClock = () => `
<div class="clock">
  <h1 class="title">Instance of class Clock</h1>
  <p class="text"></p>
</div>`;

class Clock {
  constructor({ selector }) {
    this.parent = document.querySelector(selector);

    this.render();
    this.text = this.parent.querySelector('.text');

    this.updateValue();
    this.start();
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', getTemplateClock());
  }

  updateValue() {
    this.text.textContent = moment().format('DD/MM/YYYY HH:mm:ss');
  }

  start() {
    this.timerId = setInterval(() => {
      this.updateValue();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
}
// створення екземпляра class Clock
const clock = new Clock({ selector: '.clock' });
clock.text.style.fontSize = '30px';
clock.text.style.color = 'blue';

//---class Timer---
const getTemplateTimer = ({ days, hours, minutes, seconds, miliseconds }) => `
<div class="timer">
  <h1 class="title">Instance of class Timer</h1>
  <p class="text">${days}:${hours}:${minutes}:${seconds}:${miliseconds}</p>
  <button class="btn-stop">stop</button>
  <button class="btn-start">start</button>
</div>`;

function convertMs(ms) {
  // Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  // Remaining miliseconds
  const miliseconds = addLeadingZero(Math.floor((ms % 1000) / 10));
  // результат роботи функції
  return { days, hours, minutes, seconds, miliseconds };
}

function addLeadingZero(value) {
  // функція addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення у форматі xx:xx:xx:xx
  return String(value).padStart(2, '0');
}

class Timer {
  constructor(selector) {
    this.parent = document.querySelector(selector);
    this.value = 0;

    this.render();

    this.stopButton = this.parent.querySelector('.btn-stop');
    this.startButton = this.parent.querySelector('.btn-start');
    this.text = this.parent.querySelector('.text');

    this.stopButton.disabled = true;

    this.stopButton.addEventListener('click', this.stop.bind(this));
    this.startButton.addEventListener('click', this.start.bind(this));
  }

  render() {
    // this.parent.innerHTML = '';
    const { days, hours, minutes, seconds, miliseconds } = convertMs(
      this.value
    );
    this.parent.insertAdjacentHTML(
      'beforeend',
      getTemplateTimer({ days, hours, minutes, seconds, miliseconds })
    );
  }

  start() {
    if (this.timerId) return;

    this.startButton.disabled = true;
    this.stopButton.disabled = false;
    const startTime = Date.now();
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      let elapsedTime = currentTime - startTime;
      const { days, hours, minutes, seconds, miliseconds } =
        convertMs(elapsedTime);
      this.text.textContent = `${days}:${hours}:${minutes}:${seconds}:${miliseconds}`;
    }, 10);
  }

  stop() {
    clearInterval(this.timerId);
    this.startButton.disabled = false;
    this.stopButton.disabled = true;
    this.timerId = undefined;
  }
}
// створення екземпляра class Timer
const timer1 = new Timer('.timer');
