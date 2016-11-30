(function () {
  'use strict';

  angular.module('public')
    .component('menuItem', {
      templateUrl: 'assets/menu-item/menu-item.html',
      bindings: {
        menuItem: '<'
      },
      controller: MenuItemController
    });

    function MenuItemController() {
      var $ctrl = this;
    }
})();
