(function () {
  'use strict';

  angular.module('public')
    .controller('TestController', TestController);

  TestController.$inject = ['MenuService'];
  function TestController(MenuService) {
    var testCtrl = this;

    testCtrl.menuItems = [];
    testCtrl.currentPage = 0;
    testCtrl.itemsPerPage = 12;

    testCtrl.getAllMenuItems = function () {
      testCtrl.menuItems = MenuService.getMenuItems();
    };

    testCtrl.getNextPage = function () {
      if (testCtrl.getCurrentPage() < testCtrl.pageCount()) {
        testCtrl.currentPage++;
      }
    };

    testCtrl.getPreviousPage = function () {
      if (testCtrl.getCurrentPage() > 0) {
        testCtrl.currentPage--;
      }
    };

    testCtrl.pageCount = function() {
      return Math.ceil(testCtrl.menuItems/testCtrl.itemsPerPage) - 1;
    };

    testCtrl.nextPageDisabled = function () {
      return testCtrl.getCurrentPage() === testCtrl.pageCount() ? "disabled": "";
    };

    testCtrl.prviousPageDisabled = function () {
      return testCtrl.getCurrentPage() === 0 ? "disabled": "";
    };

    testCtrl.getCurrentPage = function() {
      return testCtrl.currentPage;
    };

    testCtrl.setCurrentPage = function(pageNum) {
      testCtrl.currentPage = pageNum;
    };

    testCtrl.setPage = function(pageNum) {
      testCtrl.setCurrentPage(pageNum);
    };

    testCtrl.range = function() {
      var rangeSize = 12;
      var ret = [];
      var start;

      start = testCtrl.getCurrentPage();
      if (start > testCtrl.pageCount() - rangeSize) {
        start = testCtrl.pageCount() - rangeSize + 1;
      }

      for (var i = start; i < start + rangeSize; i++) {
        ret.push(i);
      }
      return ret;
    };
  }
})();
