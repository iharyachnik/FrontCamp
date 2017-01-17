import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './articles.scss';

import Article from '../article/Article';

import { fetchArticles } from '../../action-creators/articles';

class Articles extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div>
        {this.renderArticles()}
      </div>
    );
  }

  renderArticles() {
    const { articles } = this.props;

    if (!Array.isArray(articles)) {
      return null;
    }

    return articles.map(article => {
      return (
        <Article
          item={article}
        />
      );
    });
  }
}

export default connect(
  (store) => {
    const {Articles} = store;
    return {
      articles: Articles.items,
    };
  },
  dispatch => bindActionCreators({
    fetchArticles,
  }, dispatch)
)(Articles);