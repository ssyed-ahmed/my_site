(function () {
  'use strict';

  angular.module('public')
    .component('testimonial', {
      templateUrl: 'assets/testimonials/testimonial.template.html',
      controller: TestimonialController,
      bindings: {
        testimonial: '<'
      }
    })

    function TestimonialController() {
      var $ctrl = this;
    }
})();
