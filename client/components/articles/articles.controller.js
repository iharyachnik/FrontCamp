angular.module('blog')
  .controller('ArticlesController', ['Articles', function (Articles) {
    this.articles = [];

    Articles.getAll().$promise
      .then(res => {
        this.articles = res;
      });
  }]);
