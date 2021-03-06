'use strict';

var app = angular.module('PokeApp', [
  'ngAnimate', 
  'ngRoute',
  'pokemonServices',
  'PokeApp.pokeInfo'
]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       otherwise({
         redirectTo: '/'
       });
}]);
// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
//]).
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);
