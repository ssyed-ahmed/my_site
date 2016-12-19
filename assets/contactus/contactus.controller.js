(function () {
  'use strict';

  angular.module('public')
    .controller('ContactUsController', ContactUsController);

  ContactUsController.$inject = ['$scope'];
  function ContactUsController($scope) {
    var contactCtrl = this;

    contactCtrl.submit = function(contact) {
        var name = contact.name;

        //clear the form after submit
        $scope.contactusForm.$setPristine();
        $scope.contact = {};
        $scope.contactusForm.$setUntouched();
    };
  }
})();
