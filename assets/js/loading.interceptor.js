(function() {
  'use strict';

  angular.module('Restaurant')
    .config(config)
    .factory('loadingHttpInterceptor', LoadingHttpInterceptor);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
      $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

  LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];
  function LoadingHttpInterceptor($rootScope, $q) {

    var loadingCount = 0;
    var loadingEventName = "spinner:activate";

    return {

      request: function(config) {
        if (++loadingCount === 1) {
          $rootScope.$broadcast(loadingEventName, {on: true});
        }

        return config;
      },

      response: function(response) {
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingEventName, {on: false});
        }

        return response;
      },

      responseError: function(response) {
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingEventName, {on: false});
        }

        return $q.reject(response);
      }
    };
  }
})();
