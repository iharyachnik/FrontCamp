require('./articles.scss');

angular.module('blog')
  .controller('ArticlesController', ['Articles', function (Articles) {
    this.articles = [];

    this.getAll = (page = 1, pageSize = 5) => Articles.getAll({page, pageSize}).$promise
      .then(res => {
        this.articles = res;
      });

    this.getAll();
  }]);
