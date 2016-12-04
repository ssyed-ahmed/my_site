(function () {
  'use strict';

  angular.module('public')
    .controller('TestimonialsController', TestimonialsController);

  function TestimonialsController() {
      var $ctrl = this;

      $ctrl.isFormShown = false;

      var testimonialsList = [
        {
          statement: 'Definitely would recomment to others....best food ever!!',
          email: 'ash44@junk.com',
          occupation: 'Writer'
        },
        {
          statement: 'Best food I have ever had...',
          email: 'jhdf355@test.com',
          occupation: 'Journalist'
        },
        {
          statement: 'Awesome...simply awesome :)',
          email: 'hut48@kjl.com',
          occupation: 'Musician'
        },
        {
          statement: 'Would definitely come back again...especially for the kebabs...they rock!!',
          email: 'genius52@yah.com',
          occupation: 'Engineer'
        },
        {
          statement: 'One of the best places for kebabs....would highly recommend them to my friends.',
          email: 'medy22@uet.com',
          occupation: 'Doctor'
        }
      ];

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
