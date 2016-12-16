(function () {
  'use strict';

  angular.module('public')
    .filter('truncate', truncate);

  function truncate() {
    return function (inputText, limit) {
      var result = (inputText.length > limit)? inputText.substr(0, limit) + ' ...': inputText;
      return result;
    };
  }
})();
