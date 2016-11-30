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
      .state('public.menu', {
        url: '/menu',
        templateUrl: 'assets/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuItems: ['MenuService', function(MenuService) {
            return MenuService.getMenuItems();
          }]
        }
      })
      .state('public.specialities', {
        url: '/specialities',
        templateUrl: 'assets/specialities/specialities.html'
      })
  }
})();
