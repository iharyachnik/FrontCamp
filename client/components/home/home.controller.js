require('./home.scss');

angular.module('blog')
  .controller('HomeController', ['Articles', function (Articles) {
    this.amount = 0;
    this.titles = [];

    Articles.getTitles().$promise
      .then(res => {
        this.titles = res;
        this.amount = res.length;
      });
  }]);
