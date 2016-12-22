(function () {
  'use strict';

  angular.module('testimonials')
    .service('TestimonialsService', TestimonialsService);

  function TestimonialsService() {
    var service = this;

    service.getTestimonials = function() {
      var testimonialsList = [
        {
          statement: 'Definitely would recommend to others....best food ever!!',
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
          statement: 'Would definitely come back again...especially for the starters...they rock!!',
          email: 'genius52@yah.com',
          occupation: 'Engineer'
        },
        {
          statement: 'One of the best places for the peking duck....would highly recommend that to my friends.',
          email: 'medy22@uet.com',
          occupation: 'Doctor'
        }
      ];

      return testimonialsList;
    }
  }
})();
