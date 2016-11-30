(function () {
  'use strict';

  angular.module('Restaurant')
    .component('loading', {
      template: '<img src="assets/images/hourglass.svg" ng-if="$ctrl.show">',
      controller: 'LoadingController'
    });
})();
