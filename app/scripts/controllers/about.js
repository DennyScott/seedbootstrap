'use strict';

/**
 * @ngdoc function
 * @name seedbootstrapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seedbootstrapApp
 */
angular.module('seedbootstrapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
