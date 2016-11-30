(function () {
  'use strict';

  angular.module('public')
    .config(config);

  config.$inject = ['$stateProvider']
  function config($stateProvider) {

    $stateProvider.
      state('public', {
        abstract: true,
        templateUrl: 'assets/public/public.html'
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'assets/public/home.html'
      })
  }
})();
