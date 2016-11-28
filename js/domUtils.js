import getArticleDate from './date';

export const createItem = (item) => {
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