(function () {
  'use strict';

  angular.module('public', ['ui.router', 'ui.bootstrap', 'menu','contactus', 'testimonials', 'admin'])
    .constant('ApiPath', 'https://ssyed-ahmed-course5-new.herokuapp.com');
})();
