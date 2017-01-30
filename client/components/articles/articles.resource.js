angular.module('blog')
  .factory('Articles', ['$resource', function ($resource) {
    return $resource('/api/articles', {}, {
      getTitles: {
        url: '/api/articles/titles',
        isArray: true,
      },
      getAll: {
        isArray: true,
      },
      deleteOne: {
        url: '/api/articles/delete/:id',
        method: 'DELETE',
      },
      create: {
        url: '/api/articles/create',
        method: 'POST',
      },
    });
  }]);
