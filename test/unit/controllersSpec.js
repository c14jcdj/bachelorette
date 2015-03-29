'use strict';

/* jasmine specs for controllers go here */
describe('bacheloretteApp controllers', function() {

  describe('tabController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('bacheloretteApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      
      // scope = $rootScope.$new();
      ctrl = $controller('tabController');
    }));


    it('should create a tab model initialized to 1', function() {
      var vm = ctrl
      expect(vm.num).toBe(1);
    });

    it('should create a setTab function that sets active tab', function() {
      var vm = ctrl
      vm.setTab(2)
      expect(vm.num).toBe(2);
    });


    
  });


  // describe('PhoneDetailCtrl', function(){
  // });
});
