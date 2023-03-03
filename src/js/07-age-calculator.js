import Notiflix from 'notiflix';

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const btnRef = document.querySelector('.js-btn');
const input = document.getElementById('data-input');

btnRef.addEventListener('click', onAgeCalculateClick);

function onAgeCalculateClick() {
  let today = new Date();
  let inputDate = new Date(input.value);
  let birthYear, birthMonth, birthDate;

  CheckDate(inputDate);

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  console.log(currentMonth);
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
    let day = months[currentMonth - 1];
    console.log(day);
    birthDate = day + currentDate - birthDetails.date; // 3-corected day
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear -= 1;
    }
  }

  displayResult(birthYear, birthMonth, birthDate);
}
// проверка на дату из будущего
function CheckDate(date) {
  if (date >= new Date()) {
    Notiflix.Report.failure('Attention!!!', 'Sorry You are Not Born Yet', 'Ok');
  }
}

// проверка на высокосный год
function leapCheckerYear(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
  // console.log(year, months[1]);
}

function displayResult(bYear, bMonth, bDay) {
  document.getElementById('years').textContent = bYear;
  document.getElementById('months').textContent = bMonth;
  document.getElementById('days').textContent = bDay;
}
