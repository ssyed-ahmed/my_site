(function () {
  'use strict';

  angular.module('Restaurant', ['public'])
    .config(config);

  config.$inject = ['$urlRouterProvider']
  function config($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  }
})();
