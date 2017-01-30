require('./articles.scss');

angular.module('blog')
  .controller('ArticlesController', ['Articles', function (Articles) {
    this.articles = [];

    this.getAll = () => Articles.getAll().$promise
      .then(res => {
        this.articles = res;
      });

    this.getAll();
  }]);
