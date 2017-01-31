require('./pagination.scss');

angular.module('blog')
  .controller('PaginationController', ['Articles', function (Articles) {
    const pageSize = 5;

    this.pages = [];

    Articles.count().$promise
      .then(({count}) => {
        this.pages = Array.from({
          length: Math.ceil(count / pageSize),
        }, (v, k) => k + 1);
      });

    this.go = (page) => {
      this.getArticles(page, pageSize)
    };
  }]);
