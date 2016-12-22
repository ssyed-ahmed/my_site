(function () {
  'use strict';

  angular.module('testimonials')
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
