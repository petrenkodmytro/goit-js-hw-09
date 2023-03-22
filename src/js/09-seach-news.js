import Notiflix from 'notiflix';
import Loading from 'notiflix';
const seachFormRef = document.querySelector('.js-seach-form');
const seachMore = document.querySelector('.seach-more');
const newsWrapperRef = document.querySelector('.js-news-container');
const btnUp = document.querySelector('.up');

let seachValue = '';
let pageNumber = 1;
btnUp.style.display = 'none';

seachFormRef.addEventListener('submit', onSeachNews);
seachMore.addEventListener('click', onSeachMoreNews);
window.addEventListener('scroll', scrollFunction);
btnUp.addEventListener('click', topFunction);

// функция первого поиска
function onSeachNews(e) {
  e.preventDefault();
  newsWrapperRef.innerHTML = '';
  seachValue = e.currentTarget.elements.news.value.trim();
  pageNumber = 1;
  Notiflix.Loading.arrows();

  fetchData(seachValue, pageNumber)
    .then(({ totalCount, value }) => {
      if (value.length === 0) {
        throw new Error('No data');
      }
      renderNewsCard(value);
      pageNumber += 1;
      console.log(pageNumber);
      seachMore.classList.remove('visually-hidden');
      // console.log(articles);
    })
    .catch(error => {
      newsWrapperRef.innerHTML = '';
      Notiflix.Report.failure('Attention!!!', 'Not found anything', 'Ok');
      console.error(error);
    })
    .finally(() => {
      Notiflix.Loading.remove();
      // seachFormRef.reset();
    });
}

// функция следующего поиска
function onSeachMoreNews(params) {
  Notiflix.Loading.arrows();
  fetchData(seachValue, pageNumber)
    .then(({ totalCount, value }) => {
      if (value.length === 0) {
        throw new Error('No data');
      }
      renderNewsCard(value);
      pageNumber += 1;
      console.log(pageNumber);
    })
    .catch(error => {
      newsWrapperRef.innerHTML = '';
      Notiflix.Report.failure('Attention!!!', 'Something wrong', 'Ok');
      console.error(error);
    }).finally(() => {
      Notiflix.Loading.remove();
      // seachFormRef.reset();
    });
}

// функция принесла и распарсила промис с данными
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '504d5aef12msh28872f0ea14deb5p1f3bbcjsnd108e0bdaaa0',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
  },
};

function fetchData(query, pageNumber) {
  return fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=${pageNumber}&pageSize=6&autoCorrect=true`,
    options
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// функция создания разметки
function cardMarkup({ title, provider, description, url, image }) {
  return `<div class="article-card">
  <img class="article-img" src="${image.url}" alt="" />
      <h3 class="article-title">${title}</h3>
      <h5 class="article-author">${provider.name || 'Anonymus'}</h5>
      <p class="article-text">${description}</p>
      <a class="article-link" href="${url}">Read more</a>
  </div>`;
}

// функция рендера страницы
function renderNewsCard(arrayNews) {
  const listNewsMarkup = arrayNews.reduce((acc, article) => {
    return cardMarkup(article) + acc;
  }, '');
  newsWrapperRef.insertAdjacentHTML('beforeend', listNewsMarkup);
}

// функція скролу
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
}

// повернення на початок сторінки
function topFunction() {
  console.log('ooooo');
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // Для Chrome, Firefox, IE и Opera
}
