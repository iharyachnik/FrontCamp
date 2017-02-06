angular.module('blog')
  .controller('HeaderController', function () {
    this.menuItems = [
      {
        title: 'Home',
        state: 'home',
      },
      {
        title: 'Articles',
        state: 'articles',
      },
    ];
  });