(function () {
  'use strict';

  angular.module('Restaurant')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope'];
  function MainController($scope, $rootScope) {

    $scope.menuItems = [
      {name: 'Home', imgSuffix: 'home', path: 'public.home'},
      {name: 'Menu', imgSuffix: 'cutlery', path: 'public.menu'},
      {name: 'Specialities', imgSuffix: 'asterisk', path: 'public.specialities'},
      {name: 'Testimonials', imgSuffix: 'user', path: 'public.testimonials'},
      {name: 'Contact Us', imgSuffix: 'earphone', path: 'public.contactus'}
      //{name: 'Admin', imgSuffix: 'lock', path: 'public.admin'}
    ];

    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
      $scope.activeMenu = menuItem;
      if (menuItem.name === 'Admin') {
        //handle admin route
        $rootScope.$emit('adminClicked', {isAdminAction: true});
      }
    };
  }
})();
