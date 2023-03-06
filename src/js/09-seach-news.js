import Notiflix from 'notiflix';
const seachFormRef = document.querySelector('.js-seach-form');
const newsWrapperRef = document.querySelector('.js-news-container');

seachFormRef.addEventListener('submit', onSeachNews);

function onSeachNews(e) {
  e.preventDefault();

  const seachValue = seachFormRef.elements.news.value.trim();

  fetchData(seachValue)
    .then(({ articles }) => {
      if (articles.length === 0) {
        throw new Error('No data');
      }
      renderNewsCard(articles);
      // console.log(articles);
    })
    .catch(error => {
      newsWrapperRef.innerHTML = '';
      Notiflix.Report.failure('Attention!!!', 'Not found anything', 'Ok');
      console.error(error);
    })
    .finally(() => {
      seachFormRef.reset();
    });
}

// функция принесла и распарсила промис с данными
const options = {
  headers: {
    'X-Api-Key': 'ea323ce12d5643248c09e504b34a1936',
  },
};

function fetchData(query) {
  const URL = `https://newsapi.org/v2/everything?q=${query}`;
  return fetch(URL, options).then(response => response.json());
}

// функция создания разметки
function cardMarkup({ author, title, description, url, urlToImage }) {
  return `<div class="article-card">
  <img class="article-img" src="${urlToImage}" alt="" />
      <h3 class="article-title">${title}</h3>
      <h4 class="article-author">${author || 'Anonymus'}</h4>
      <p class="article-text">${description}</p>
      <a class="article-link" href="${url}">Read more</a>
  </div>`;
}

// функция рендера страницы
function renderNewsCard(arrayNews) {
  const listNewsMarkup = arrayNews.reduce((acc, article) => {
    return cardMarkup(article) + acc;
  }, '');

  newsWrapperRef.innerHTML = listNewsMarkup;
}
