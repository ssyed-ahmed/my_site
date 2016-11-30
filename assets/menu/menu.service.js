(function () {
  'use strict';

  angular.module('public')
    .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {

    var service = this;

    service.getMenuItems = function() {
      return $http.get(ApiPath + '/menu_items.json').then(function(response) {
        return response.data;
      });
    };
  }
})();
