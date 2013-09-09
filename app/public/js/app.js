'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/print', {templateUrl: 'print', controller: MyCtrl1});
    $routeProvider.when('/signin', {templateUrl: 'login', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/print'});
    $locationProvider.html5Mode(true);
  }]);