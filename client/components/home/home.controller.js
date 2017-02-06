angular.module('blog')
  .controller('HomeController', ['articleTitles', function (articleTitles) {
    this.amount = articleTitles.length || 0;
    this.titles = articleTitles || [];
  }]);

