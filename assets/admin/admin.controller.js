(function () {
  'use strict';

  angular.module('public')
    .controller('AdminController', AdminController)
    .controller('ModalInstanceController', ModalInstanceController);

  AdminController.$inject = ['$uibModal', '$scope', '$rootScope', '$location'];
  function AdminController($uibModal, $scope, $rootScope, $location) {
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

  ModalInstanceController.$inject = ['$uibModalInstance', '$scope', '$location'];
  function ModalInstanceController($uibModalInstance, $scope, $location) {
    var modalCtrl = this;
    $scope.okClicked = false;

    modalCtrl.ok = function(admin) {
      modalCtrl.okClicked = true;
      if (admin.username !== "admin" && admin.password !== "password") {
        modalCtrl.isAdminValid = false;
      } else {
        modalCtrl.isAdminValid = true;
        $uibModalInstance.close();
      }
    };

    modalCtrl.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }
})();
