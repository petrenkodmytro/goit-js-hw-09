const body = document.querySelector('body');
const btnStartRef = document.querySelector('button[ data-start]');
const btnStopRef = document.querySelector('button[ data-stop]');

let intervalId = null;
btnStopRef.disabled = true; // console.log(btnStartRef.attributes);

btnStartRef.addEventListener('click', onStartChangeColor);
btnStopRef.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
  btnStopRef.disabled = false;
  btnStartRef.disabled = true;
  // let RandomHexColor = getRandomHexColor();
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopChangeColor() {
  clearInterval(intervalId);
  btnStopRef.disabled = true;
  btnStartRef.disabled = false;
  console.log(`Interval with id ${intervalId} has stopped!`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// const btn = document.querySelector('button[data-start]');
// btn.addEventListener('click', e => {
//   console.log(this);
// });
// disabled
