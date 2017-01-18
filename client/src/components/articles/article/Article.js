import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Article.scss';

import { deleteArticle } from '../../../action-creators/articles';

class Article extends Component {

  render() {
    const { item, deleteArticle } = this.props;

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
          <div className="article-header__cross"
            onClick={() => deleteArticle(item._id)}
          >
            <span>&#x2715;</span>
          </div>
          <img className="article-header__image"
            src={item.image}
            alt={item.title}  
          />
          <h2 className="article-header__title">
            {item.title}
          </h2>
        </section>
        <section className="article-body">
          <h3 className="article-body__content">
            {item.body}
          </h3>
        </section>
        {footer}
      </article>
    );
  }
}

Article.propTypes = {
  item: React.PropTypes.object,
};

export default connect(
  null,
  dispatch => bindActionCreators({
    deleteArticle,
  }, dispatch)
)(Article);