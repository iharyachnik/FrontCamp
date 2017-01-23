'use strict';

angular.module('Blog')
  .controller('HeaderController', function (appConstants, $location) {
    this.menuItems = appConstants.routes;
    this.isActiveTab = function (path) {
      return $location.path() === path;
    };
  });