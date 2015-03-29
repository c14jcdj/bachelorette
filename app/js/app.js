'use strict';

/* App Module */

var bacheloretteApp = angular.module('bacheloretteApp', [
  'ngRoute',
  'bacheloretteControllers',
  'bacheloretteDirectives'
]);

bacheloretteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'gameController',
        controllerAs: 'game'
      }).
      when('/admin', {
        templateUrl: 'partials/admin.html',
        controller: 'adminController'
      })
  }]);

