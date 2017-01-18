import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import './NewArticle.scss';

import {createArticle} from '../../../action-creators/articles';

class NewArticle extends Component {
  render() {
    return (
      <form className="new-article-form">
        <h2>Create new article</h2>
        <div className="new-article-form-row">
          <div className="new-article-form-row__caption">
            <h3>Title:</h3>
          </div>
          <div className="new-article-form-row__content">
            <input
              type="text"
              className="new-article-form-row__content-input"  
              ref={node => this.title = node}
            />
          </div>
        </div>

        <div className="new-article-form-row">
          <div className="new-article-form-row__caption">
            <h3>Image:</h3>
          </div>
          <div className="new-article-form-row__content">
           <input
              type="text"
              className="new-article-form-row__content-input"  
              ref={node => this.image = node}
            />
          </div>
        </div>

        <div className="new-article-form-row">
          <div className="new-article-form-row__caption">
            <h3>Body:</h3>
          </div>
          <div className="new-article-form-row__content">
            <textarea
              className="new-article-form-row__content-input"  
              ref={node => this.body = node}
            ></textarea>
          </div>
        </div>

        <div className="new-article-form-row">
          <div className="new-article-form-footer">
            <Link to="/articles">
              <div className="button button_cancel">
                CANCEL
              </div>
            </Link>
            <Link to="/articles"
              onClick={() => this.onSubmit()}
            >            
              <div className="button button_submit">
                SUBMIT
              </div>
            </Link>
          </div >
        </div >
      </form >
    );
  }

  onSubmit() {
    const {createArticle} = this.props;
    
    const title = this.title.value;
    const body = this.body.value;
    const image = this.image.value;

    createArticle(title, body, image);
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
    createArticle,
  }, dispatch)
)(NewArticle);