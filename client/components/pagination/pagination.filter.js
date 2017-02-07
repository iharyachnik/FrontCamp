angular.module('blog')
  .filter('paginator', function () {
    return function (length, pageSize) {
      return Array
        .from({
          length: Math.ceil(length / pageSize),
        }, (v, k) => k + 1);
    };
  });