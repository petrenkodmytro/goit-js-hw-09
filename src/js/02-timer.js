import Notiflix from 'notiflix'; // Описаний в документації
import flatpickr from 'flatpickr'; // Описаний в документації
import 'flatpickr/dist/flatpickr.min.css'; // Додатковий імпорт стилів

const inputDate = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('button[data-start]');
const spanDaysRef = document.querySelector('span[data-days]');
const spanHoursRef = document.querySelector('span[data-hours]');
const spanMinutesRef = document.querySelector('span[data-minutes]');
const spanSecondsRef = document.querySelector('span[data-seconds]');

btnStartRef.disabled = true;

btnStartRef.addEventListener('click', onStartTimerClick);

// Другим аргументом функції flatpickr(selector, options) можна передати необов'язковий об'єкт параметрів.
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    CheckDate(selectedDates);
  },
};

// дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу
flatpickr(inputDate, options);

// перевірка валідності дати (дату в минолому обрати не можна)
function CheckDate(selectedDates) {
  // console.log(selectedDates[0]);
  if (selectedDates[0] <= new Date()) {
    // Notiflix.Notify.failure('Please choose a date in the future');
    Notiflix.Report.failure(
      'Attention!!!',
      'Please choose a date in the future',
      'Ok'
    );
  } else {
    // активація кнопки старта
    btnStartRef.disabled = false;
  }
}

function onStartTimerClick() {
  
  const timerId = setInterval(() => {
    // деактивація кнопки старта
    btnStartRef.disabled = true;
    // console.log(inputDate.value);
    const startTime = new Date(inputDate.value).getTime();
    // Date.now() не створює екземпляр, повертає поточний час у мілісекундах
    const currentTime = Date.now();
    let remainingTime = startTime - currentTime;

    if (remainingTime > 0) {
      const timerComponents = convertMs(remainingTime);
      // деструктурізація timerComponents
      const { days, hours, minutes, seconds } = timerComponents;
      spanDaysRef.textContent = days;
      spanHoursRef.textContent = hours;
      spanMinutesRef.textContent = minutes;
      spanSecondsRef.textContent = seconds;
      // console.log(timerComponents);
    } else {
      // зупинка таймера
      clearInterval(timerId);
      // console.log('stop timer');
      // Notiflix.Notify.success('Timer is finished');
      Notiflix.Report.success('Success', 'Timer is finished', 'Ok');
    }
  }, 1000);
}

// Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}

// функція addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення у форматі xx:xx:xx:xx
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Метод getTime() повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
// const date = new Date();
// console.log(date.getTime());
