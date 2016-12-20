(function () {
  'use strict';

  angular.module('public')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['menuItems']
  function MenuController(menuItems) {
    var $ctrl = this;

    $ctrl.menuItems = menuItems;

    $ctrl.isCardView = true;

    $ctrl.menuItems = menuItems.menu_items;
    $ctrl.currentPage = 0;
    $ctrl.itemsPerPage = 12;
    $ctrl.viewType = "card";

    $ctrl.renderCardView = function() {
      $ctrl.isCardView = true;
      $ctrl.viewType = "card";
    };

    $ctrl.renderListView = function() {
      $ctrl.isCardView = false;
      $ctrl.viewType = "list";
    };

    $ctrl.getNextPage = function () {
      if ($ctrl.getCurrentPage() < $ctrl.pageCount()) {
        $ctrl.currentPage++;
      }
    };

    $ctrl.getPreviousPage = function () {
      if ($ctrl.getCurrentPage() > 0) {
        $ctrl.currentPage--;
      }
    };

    $ctrl.pageCount = function() {
      return Math.ceil($ctrl.menuItems.length/$ctrl.itemsPerPage) - 1;
    };

    $ctrl.nextPageDisabled = function () {
      return $ctrl.getCurrentPage() === $ctrl.pageCount() ? "disabled": "";
    };

    $ctrl.previousPageDisabled = function () {
      return $ctrl.getCurrentPage() === 0 ? "disabled": "";
    };

    $ctrl.getCurrentPage = function() {
      return $ctrl.currentPage;
    };

    $ctrl.setCurrentPage = function(pageNum) {
      $ctrl.currentPage = pageNum;
    };

    $ctrl.setPage = function(pageNum) {
      $ctrl.setCurrentPage(pageNum);
    };

    $ctrl.range = function() {
      var rangeSize = 12;
      var ret = [];
      var start;

      start = $ctrl.getCurrentPage();
      if (start > $ctrl.pageCount() - rangeSize) {
        start = $ctrl.pageCount() - rangeSize + 1;
      }

      for (var i = start; i < start + rangeSize; i++) {
        ret.push(i);
      }
      return ret;
    };
  }
})();
