(function () {
  'use strict';

  angular.module('Restaurant')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', '$location'];
  function MainController($scope, $rootScope, $location) {

    $scope.menuItems = [
      {name: 'Home', imgSuffix: 'home', path: 'public.home'},
      {name: 'Menu', imgSuffix: 'cutlery', path: 'public.menu'},
      {name: 'Specialities', imgSuffix: 'asterisk', path: 'public.specialities'},
      {name: 'Testimonials', imgSuffix: 'user', path: 'public.testimonials'},
      {name: 'Contact Us', imgSuffix: 'earphone', path: 'public.contactus'},
      {name: 'Statistics', imgSuffix: 'equalizer', path: 'public.stats'}
    ];

    $scope.activeMenu = $scope.menuItems[0];

    $scope.setActive = function(menuItem) {
      $scope.activeMenu = menuItem;
      if (menuItem.name === 'Admin') {
        //handle admin route
        $rootScope.$emit('adminClicked', {isAdminAction: true});
      }
    };

    $scope.$on("$stateChangeSuccess", function() {
      //Determine the location where the user is currently within the app
      console.log("Route path : " + $location.path());
      console.log("Active Menu :");
      console.log($scope.activeMenu);
      var path = getPathWithoutSlash();
      var menuItem = getMenuItemForPath(path);
      if(menuItem) {
        //var pathToSet = getPathToSet(menuItem);
        //$location.path(pathToSet)
        $scope.activeMenu = menuItem;
      }
    });

    function getPathWithoutSlash() {
      var path = $location.path();
      path = path.substring(1);
      return path;
    };

    function getMenuItemForPath(path) {
      var menuItem = null;
      var menuItems = $scope.menuItems;
      for(var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].path.indexOf(path) !== -1) {
          menuItem = menuItems[i];
          break;
        }
      }
      //Check for admin path
      if (path === "admin") {
        return {name: 'Admin'};
      }
      return menuItem;
    };

    function pathToSet(menuItem) {
      var path = menuItem.path;
      //Strip the string public. from the path and return
      path = path.substring(6, path.length);
      return path;
    }
  }
})();
