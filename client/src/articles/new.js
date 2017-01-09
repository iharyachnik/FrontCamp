import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient, Router)
export class NewArticle {
  constructor(http, router) {
    this.http = http;
    this.router = router;

    this.title = '';
    this.body = '';
  }

  submit() {
    const article = {
      title: this.title,
      body: this.body,
    };

    this.http.fetch('http://localhost:3000/api/articles/create', {
      method: 'POST',
      body: json(article),
    })
      .then(res => res.json())
      .then(articles => {
        this.articles = articles;
        this.navigateToArticles();
      })
      .catch(err => console.log(err));
  }

  cancel() {
    this.navigateToArticles();
  }

  navigateToArticles() {
    this.router.navigate('/articles');
  }
}