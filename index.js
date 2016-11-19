'use strict';

import 'whatwg-fetch';

const apiUrl = 'https://mybestevernottakencompany.cloud.tyk.io/techcrunch/';

const getData = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((content) => {
      const { articles } = content;
      const container = document.getElementById('main');

      const arr = articles.map(article => createItem(article)).join('');
      container.innerHTML = arr;
    })
    .catch((err) => console.log(err));
};

const createItem = (item) => {
  const date = getArticleDate(item.publishedAt);

  return (
    `<article>
      <section class="article-header">
        <img src="${item.urlToImage}" />
        <h2>${item.title}</h2>
      </section>
      <section class="article-body">
        <h3>${item.description}</h3>
      </section>
      <section class="article-footer">
        <a href="${item.url}" target="_blank">Read more...</a>
        <span>${item.author} | ${date}</span>
      </section>
     </article>`
  );
};

const getArticleDate = dateISOString => {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dateISOString);
  const minutes = date.getMinutes();

  return `${date.getHours()}:${minutes > 9 ? minutes : '0' + minutes}, 
    ${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

getData();
