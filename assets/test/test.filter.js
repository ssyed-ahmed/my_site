(function() {
  'use strict';

  angular.module('public')
    .filter('offset', offset);

  function offset() {
    return function(input, start) {
      start = parseInt(start, 10);  //radix 10 is used (default)
      return input.slice(start);
    };
  }
})();
