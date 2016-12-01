(function () {
  'use strict';

  angular.module('public')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$uibModal', '$timeout'];
  function AdminController($uibModal, $timeout) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.openDialog();
    };

    ctrl.openDialog = function() {
      $timeout(function () {
        $uibModal.open({
          templateUrl: 'assets/admin/admin.html',
          size: 'lg'
        })
      }, 10);
    };
  }
})();
