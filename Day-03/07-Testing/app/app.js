'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.greet'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/default",{
            template : "<h1>Welcome to Angular.js</h1>"
      })
      .otherwise({redirectTo: '/default'});
}]);
