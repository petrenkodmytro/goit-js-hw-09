import Notiflix from 'notiflix';

const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
const btnPauseRef = document.querySelector('button[data-pause]');
const spanDaysRef = document.querySelector('span[data-days]');
const spanHoursRef = document.querySelector('span[data-hours]');
const spanMinutesRef = document.querySelector('span[data-minutes]');
const spanSecondsRef = document.querySelector('span[data-seconds]');
const spanMiliSecondsRef = document.querySelector('span[data-miliseconds]');

let StopwatchId = null;

btnStartRef.addEventListener('click', onStartStopwatchClick);
btnStopRef.addEventListener('click', onStopStopwatchClick);
btnPauseRef.addEventListener('click', onPauseStopwatchClick);

function onStartStopwatchClick() {
  // Date.now() не створює екземпляр, повертає поточний час у мілісекундах
  const startTime = Date.now();
  StopwatchId = setInterval(() => {
    // деактивація кнопки старта
    btnStartRef.disabled = true;
    const currentTime = Date.now();
    let remainingTime = currentTime - startTime;
    const timerComponents = convertMs(remainingTime);
    // деструктурізація timerComponents
    const { days, hours, minutes, seconds, miliseconds } = timerComponents;
    spanDaysRef.textContent = days;
    spanHoursRef.textContent = hours;
    spanMinutesRef.textContent = minutes;
    spanSecondsRef.textContent = seconds;
    spanMiliSecondsRef.textContent = miliseconds;
  }, 10);
}

function onStopStopwatchClick() {
  // зупинка Stopwatch
  clearInterval(StopwatchId);
  // активація кнопки старта
  btnStartRef.disabled = false;
  // console.log('stop Stopwatch');
  // Notiflix.Notify.success('Stopwatch is stoped');
  Notiflix.Report.success('Success', 'Stopwatch is stoped', 'Ok');
  // деструктурізація результату роботи функції convertMs()
  const { days, hours, minutes, seconds, miliseconds } = convertMs(0);
  spanDaysRef.textContent = days;
  spanHoursRef.textContent = hours;
  spanMinutesRef.textContent = minutes;
  spanSecondsRef.textContent = seconds;
  spanMiliSecondsRef.textContent = miliseconds;
}

function onPauseStopwatchClick() {
  
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

  return { days, hours, minutes, seconds, miliseconds };
}

function addLeadingZero(value) {
  // функція addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення у форматі xx:xx:xx:xx
  return String(value).padStart(2, '0');
}

// Метод getTime() повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
// const date = new Date();
// console.log(date.getTime());

//----1------
// Вот пример кода для создания секундомера и кнопки "Пауза":
// // Инициализация переменных
// let timer = document.getElementById('timer');
// let pauseButton = document.getElementById('pause');
// let startTime, elapsedTime = 0, timerInterval;

// // Функция для обновления таймера
// function updateTimer() {
//   let ms = elapsedTime;
//   let seconds = Math.floor(ms / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   ms = ms % 1000;
//   seconds = seconds % 60;
//   minutes = minutes % 60;
  
//   timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// // Функция для запуска таймера
// function startTimer() {
//   startTime = Date.now() - elapsedTime;
//   timerInterval = setInterval(function() {
//     elapsedTime = Date.now() - startTime;
//     updateTimer();
//   }, 10);
// }

// // Функция для остановки таймера
// function stopTimer() {
//   clearInterval(timerInterval);
// }

// // Обработчик клика на кнопке "Пауза"
// pauseButton.addEventListener('click', function() {
//   if (pauseButton.textContent === 'Пауза') {
//     pauseButton.textContent = 'Продолжить';
//     stopTimer();
//   } else {
//     pauseButton.textContent = 'Пауза';
//     startTimer();
//   }
// });

// // Запуск таймера
// startTimer();


//-----2-----
// let startTime; // the start time in milliseconds
// let elapsedTime = 0; // the elapsed time in milliseconds
// let timerInterval; // the timer interval ID
// let isPaused = true; // whether the timer is currently paused

// // update the display with the current elapsed time
// function updateDisplay() {
//   const minutes = Math.floor(elapsedTime / 60000);
//   const seconds = Math.floor((elapsedTime % 60000) / 1000);
//   const milliseconds = Math.floor((elapsedTime % 1000) / 10);
//   const display = `${minutes}:${seconds
//     .toString()
//     .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
//   document.getElementById("display").textContent = display;
// }

// // start the stopwatch
// function startTimer() {
//   startTime = Date.now() - elapsedTime;
//   timerInterval = setInterval(() => {
//     elapsedTime = Date.now() - startTime;
//     updateDisplay();
//   }, 10);
//   isPaused = false;
// }

// // pause the stopwatch
// function pauseTimer() {
//   clearInterval(timerInterval);
//   isPaused = true;
// }

// // reset the stopwatch
// function resetTimer() {
//   clearInterval(timerInterval);
//   startTime = null;
//   elapsedTime = 0;
//   updateDisplay();
//   isPaused = true;
// }

// // add event listeners to the buttons
// document.getElementById("start").addEventListener("click", () => {
//   if (isPaused) {
//     startTimer();
//   } else {
//     pauseTimer();
//   }
// });

// document.getElementById("pause").addEventListener("click", () => {
//   if (isPaused) {
//     startTimer();
//   } else {
//     pauseTimer();
//   }
// });

// document.getElementById("reset").addEventListener("click", resetTimer);
