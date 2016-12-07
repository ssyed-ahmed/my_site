(function () {
  'use strict';

  angular.module('public')
    .controller('AdminController', AdminController)
    .controller('ModalInstanceController', ModalInstanceController);

  AdminController.$inject = ['$uibModal', '$rootScope'];
  function AdminController($uibModal, $rootScope) {
    var ctrl = this;

    //Listen for 'adminClicked' event from the restaurant.controller
    $rootScope.$on('adminClicked', function(event, args) {
      // Open admin authentication dialog
      ctrl.openDialog();
    });

    ctrl.openDialog = function() {

        var modalInstance = $uibModal.open({
          templateUrl: 'assets/admin/admin.html',
          size: 'lg',
          keyboard: true,
          backdrop: 'static',
          controller: 'ModalInstanceController',
          controllerAs: 'ctrl',
          bindToController: true
        });

    };
  }

  ModalInstanceController.$inject = ['$uibModalInstance'];
  function ModalInstanceController($uibModalInstance) {
    var modalCtrl = this;

    modalCtrl.ok = function() {
      $uibModalInstance.close();
    };

    modalCtrl.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }
})();
