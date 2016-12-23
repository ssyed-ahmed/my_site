(function () {
  'use strict';

  angular.module('public', ['ui.router', 'ui.bootstrap', 'menu','contactus', 'testimonials', 'admin', 'stats'])
    .constant('ApiPath', 'https://ssyed-ahmed-course5-new.herokuapp.com');
})();
