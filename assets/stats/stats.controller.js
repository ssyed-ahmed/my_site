(function () {
  'use strict';

  angular.module('stats')
    .controller('StatsLineController', StatsLineController);

  function StatsLineController() {
    var ctrl = this;

    ctrl.labels = ["January", "February", "March", "April", "May", "June", "July"];
    ctrl.series = ['Series A', 'Series B'];
    ctrl.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    ctrl.onClick = function (points, evt) {
      console.log(points, evt);
    };
    ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    ctrl.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }

  angular.module('stats')
    .controller('StatsBarController', StatsBarController);

  function StatsBarController() {
    var ctrl = this;

    ctrl.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    ctrl.series = ['Series A', 'Series B'];

    ctrl.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  }
})();
