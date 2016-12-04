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
      .state('public.testimonials', {
        url: '/testimonials',
        templateUrl: 'assets/testimonials/testimonials.html',
        controller: 'TestimonialsController',
        controllerAs: 'testCtrl'
      })
      .state('public.contactus', {
        url: '/contactus',
        templateUrl: 'assets/contactus/contactus.html',
        controller: 'ContactUsController',
        controllerAs: 'contactCtrl'
      })
      .state('public.admin', {
        url: '/admin',
        //templateUrl: 'assets/admin/admin.html',
        controller: 'AdminController'
      });
  }
})();
