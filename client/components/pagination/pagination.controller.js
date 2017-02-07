angular.module('blog')
  .controller('PaginationController', ['Articles', function (Articles) {
    this.pageSize = 5;
    this.count = 0;

    Articles.count().$promise
      .then(({count}) => {
        this.count = count;
      });

    this.go = (page) => {
      this.getArticles(page, this.pageSize)
    };
  }]);
