(function () {
  'use strict';

  angular.module('public')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['menuItems']
  function MenuController(menuItems) {
    var $ctrl = this;
    $ctrl.menuItems = menuItems;
  }
})();
