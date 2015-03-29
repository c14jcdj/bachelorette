'use strict';

/* Controllers */

var bacheloretteControllers = angular.module('bacheloretteControllers', []);

bacheloretteControllers.controller('adminController', ['$http',
  function($http) {
  }]);

bacheloretteControllers.controller('mainController', ['$routeParams', 'sharedServices',
  function($routeParams, sharedServices) {
      var vm = this;
        vm.picks = sharedServices.picks
        sharedServices.getPieces(function(data) {
            vm.pieces = data.pieces;
        });      



    
  }]);

bacheloretteControllers.controller('gameController', ['$routeParams',
  function($routeParams) {
    

    
  }]);

bacheloretteControllers.controller('gameQuestionsController', ['$routeParams',
  function($routeParams) {
  	

  	
  }]);
bacheloretteControllers.controller('longTermPickController', ['$routeParams',
  function($routeParams) {
  	

  	
  }]);


bacheloretteControllers.controller('tabController', ['$http',
  function($http) {
  	var vm = this;
  	vm.num = 1;
  	vm.setTab = function(tab){
  		vm.num = tab;
  	}
  }]);

bacheloretteControllers.controller('weeklyPickController', ['$routeParams',
  function($routeParams) {
  	

  	
  }]);
    

