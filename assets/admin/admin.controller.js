(function () {
  'use strict';

  angular.module('public')
    .controller('AdminController', AdminController)
    .controller('ModalInstanceController', ModalInstanceController);

  AdminController.$inject = ['$uibModal', '$scope', '$rootScope'];
  function AdminController($uibModal, $scope, $rootScope) {
    var ctrl = this;
    ctrl.okClicked = false;

    //Listen for 'adminClicked' event from the restaurant.controller
    $rootScope.$on('adminClicked', function(event, args) {
      // Open admin authentication dialog
      ctrl.openDialog();
    });

    ctrl.openDialog = function() {

        var modalInstance = $uibModal.open({
          templateUrl: 'assets/admin/admin.html',
          size: 'md',
          keyboard: true,
          backdrop: 'static',
          controller: 'ModalInstanceController',
          controllerAs: 'ctrl',
          bindToController: true
          // resolve: {
          //   admin: function() {
          //     return ctrl.admin;
          //   }
          // }
        });

    };
  }

  ModalInstanceController.$inject = ['$uibModalInstance', '$scope'];
  function ModalInstanceController($uibModalInstance, $scope) {
    var modalCtrl = this;
    $scope.okClicked = false;

    modalCtrl.ok = function(admin) {
      $scope.okClicked = true;
      if (admin.username !== "admin" && admin.password !== "password") {
        $scope.isAdminValid = false;
      } else {
        $scope.isAdminValid = true;
        $uibModalInstance.close();
      }
    };

    modalCtrl.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }
})();
