import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient, Router)
export class Articles {
  constructor(http, router) {
    this.http = http;
    this.router = router;

    this.articles = [];

    this.getArticles();
  }

  getArticles() {
    this.http.fetch('api/articles/')
      .then(res => res.json())
      .then(articles => this.articles = articles)
      .catch(err => console.log(err));
  }

  createArticle() {
    this.router.navigateToRoute('articles-new');
  }

  deleteArticle(id) {
    this.http.fetch(`api/articles/delete/${id}`,
      {
        method: 'DELETE',
      })
      .then(() => this.getArticles())
      .catch(err => console.log(err));
  }
}