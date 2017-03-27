'use strict';

angular.module('myApp.header', [])
  .directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/header/header.html',
      controller: 'HeaderCtrl'
    };
  })
  .controller('HeaderCtrl', [function() {

  }]);
