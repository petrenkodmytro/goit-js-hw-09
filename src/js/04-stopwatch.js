// import Notiflix from 'notiflix';

const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
const btnPauseRef = document.querySelector('button[data-pause]');
const spanDaysRef = document.querySelector('span[data-days]');
const spanHoursRef = document.querySelector('span[data-hours]');
const spanMinutesRef = document.querySelector('span[data-minutes]');
const spanSecondsRef = document.querySelector('span[data-seconds]');
const spanMiliSecondsRef = document.querySelector('span[data-miliseconds]');

btnPauseRef.disabled = true;
let StopwatchId = null;
let elapsedTime = 0;

btnStartRef.addEventListener('click', onStartStopwatchClick);
btnStopRef.addEventListener('click', onStopStopwatchClick);
btnPauseRef.addEventListener('click', onPauseStopwatchClick);

function onStartStopwatchClick() {
  // деактивація кнопки старта та активація кнопки пауза
  btnStartRef.disabled = true;
  btnPauseRef.disabled = false;
  // Date.now() не створює екземпляр, повертає поточний час у мілісекундах
  const startTime = Date.now() - elapsedTime;
  StopwatchId = setInterval(() => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    onUpdateStopwatch(elapsedTime);
  }, 10);
}

function onStopStopwatchClick() {
  // зупинка Stopwatch
  clearInterval(StopwatchId);
  btnPauseRef.textContent = 'Pause';
  elapsedTime = 0;
  // активація кнопки старта та деактивація кнопки пауза
  btnStartRef.disabled = false;
  btnPauseRef.disabled = true;
  onUpdateStopwatch(elapsedTime);
}

function onPauseStopwatchClick() {
  if (btnPauseRef.textContent === 'Pause') {
    btnPauseRef.textContent = 'Continue';
    clearInterval(StopwatchId);
    // вивід у консоль час кола
    console.log(elapsedTime);
  } else {
    btnPauseRef.textContent = 'Pause';
    onStartStopwatchClick();
  }
}

function onUpdateStopwatch(ms) {
  const { days, hours, minutes, seconds, miliseconds } = convertMs(ms);
  spanDaysRef.textContent = days;
  spanHoursRef.textContent = hours;
  spanMinutesRef.textContent = minutes;
  spanSecondsRef.textContent = seconds;
  spanMiliSecondsRef.textContent = miliseconds;
}

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

// Метод getTime() повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
// const date = new Date();
// console.log(date.getTime());

// console.log('stop Stopwatch');
// Notiflix.Notify.success('Stopwatch is stoped');
// Notiflix.Report.success('Success', 'Stopwatch is stoped', 'Ok');
