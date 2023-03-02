const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const btnRef = document.querySelector('.js-btn');
const input = document.getElementById('data-input');

btnRef.addEventListener('click', onAgeCalculateClick);

function onAgeCalculateClick() {
  console.log(input.value);
  let today = new Date();
  let inputDate = new Date(input.value);
  let birthMonth, birthDate, birthYear;

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();

  leapCheckerYear(currentYear);

  birthYear = currentYear - birthDetails.year;

  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear -= 1;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth -= 1;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear -= 1;
    }
  }
}
// проверка на дату из будущего
function CheckDate(date) {
  if (date <= new Date()) {
    Notiflix.Report.failure('Attention!!!', 'Sorry You are Not Born Yet', 'Ok');
  } else {
    // активація кнопки calc
    btnStartRef.disabled = false;
  }
}
// проверка на высокосный год
function leapCheckerYear(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
  console.log(year, months[1]);
}
