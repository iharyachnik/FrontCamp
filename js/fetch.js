import settings from './settings';
import { createItem } from './domUtils';

export const getData = () => {
  const {apiUrl: url, selector} = settings;

  fetch(url)
    .then((res) => res.json())
    .then((content) => {
      const { articles } = content;
      const container = document.getElementById(selector);

      const arr = articles.map(article => createItem(article)).join('');
      container.innerHTML = arr;
    })
    .catch((err) => console.log(err));
};