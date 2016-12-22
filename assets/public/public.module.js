(function () {
  'use strict';

  angular.module('public', ['ui.router', 'ui.bootstrap', 'menu','contactus', 'admin'])
    .constant('ApiPath', 'https://ssyed-ahmed-course5-new.herokuapp.com');
})();
