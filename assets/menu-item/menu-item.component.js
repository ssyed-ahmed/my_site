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

    MenuItemController.$inject = ['$filter'];
    function MenuItemController($filter) {
      var $ctrl = this;

      $ctrl.getMenuLargePortion = function() {
        var ret = ($ctrl.menuItem.large_portion_name === '' || $ctrl.menuItem.large_portion_name === null)? 'NA': $ctrl.menuItem.large_portion_name;
        return ret;
      };

      $ctrl.getMenuSmallPortion = function() {
        var ret = ($ctrl.menuItem.small_portion_name === '' || $ctrl.menuItem.small_portion_name === null)? 'NA': $ctrl.menuItem.small_portion_name;
        return ret;
      };

      $ctrl.getMenuSmallPrice = function() {
        var ret = ($ctrl.menuItem.price_small === '' || $ctrl.menuItem.price_small === null)? 'NA': $ctrl.menuItem.price_small;
        if(ret !== 'NA') {
          ret = $filter('currency')(ret);
        }
        return ret;
      };
    }
})();
