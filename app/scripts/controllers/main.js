'use strict';

/**
 * @ngdoc function
 * @name seedbootstrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seedbootstrapApp
 */
angular.module('seedbootstrapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
