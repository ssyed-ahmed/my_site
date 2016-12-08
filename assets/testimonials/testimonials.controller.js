(function () {
  'use strict';

  angular.module('public')
    .controller('TestimonialsController', TestimonialsController);

  TestimonialsController.$inject = ['TestimonialsService'];
  function TestimonialsController(TestimonialsService) {
      var $ctrl = this;

      $ctrl.isFormShown = false;

      var testimonialsList = TestimonialsService.getTestimonials();

      $ctrl.getTestimonials = function() {
        return testimonialsList;
      };

      $ctrl.addTestimonial = function() {
        $ctrl.hideForm();
        var statement = $ctrl.testimonial.statement;
        var email = $ctrl.testimonial.email;
        var occupation = $ctrl.testimonial.occupation;

        var testObj = {
          statement: statement,
          email: email,
          occupation: occupation
        };
        testimonialsList.push(testObj);
      };

      $ctrl.cancelAddTestimonial = function() {
        $ctrl.hideForm();
      };

      $ctrl.showForm = function() {
        $ctrl.isFormShown = true;
      };

      $ctrl.hideForm = function() {
        $ctrl.isFormShown = false;
      };
  };

})();
