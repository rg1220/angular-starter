'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('Home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl).toBeDefined();
    }));

  });
});