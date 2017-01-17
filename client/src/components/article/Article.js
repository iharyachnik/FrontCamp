import React, { Component } from 'react';

import './Article.scss';

class Article extends Component {

  render() {
    const { item } = this.props;

    const footer = item.author
      ? (
        <section className="article-footer">
          <span className="article-footer__content">{item.author} | {item.date}</span>
        </section>
      )
      : null;

    return (
      <article className="article">
        <section className="article-header">
          <img className="article-header__image" src={item.image} />
          <h2 className="article-header__title">{item.title}</h2>
        </section>
        <section className="article-body">
          <h3 className="article-body__content">{item.body}</h3>
        </section>
        {footer}
      </article>
    );
  }
}

Article.propTypes = {
  item: React.PropTypes.object,
};

export default Article;