'use strict';

/**
 * @ngdoc overview
 * @name seedbootstrapApp
 * @description
 * # seedbootstrapApp
 *
 * Main module of the application.
 */
angular
  .module('seedbootstrapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/main.html"
    })
	});
