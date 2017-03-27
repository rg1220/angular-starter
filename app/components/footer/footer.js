'use strict';

angular.module('myApp.footer', [])
  .directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/footer/footer.html',
      controller: 'FooterCtrl'
    };
  })
  .controller('FooterCtrl', [function() {

  }]);
