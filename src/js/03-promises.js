import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromiseSubmit);

function onCreatePromiseSubmit(e) {
  e.preventDefault();
  // деструктуризація елементів форми
  const { delay, step, amount } = form.elements;
  // цикл для створення необхідної кіл-ті функцій
  for (let i = 1; i <= Number(amount.value); i += 1) {
    // затримка, що враховує першу затримку (delay), введену користувачем, і крок (step).
    let delayOfPromise = Number(delay.value) + i * Number(step.value);

    createPromise(i, delayOfPromise)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    // генерація умови true або false для виконання промісу
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
}

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
