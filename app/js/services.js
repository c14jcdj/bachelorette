var bacheloretteServices = angular.module('bacheloretteApp');
bacheloretteServices.factory('sharedServices', function($http) {
    var picks = {longterm: {hometown: '',
                            fantasy: '',
                            'final': ''     
                                    },
                weekly: "Bob"
                                }
   return {
     getQuestion: function(callback) {
       $http.get('stubs/questions.json').success(callback);
     },
     getPieces: function(callback){
        $http.get('stubs/pieces.json').success(callback);
     },
     picks: picks
   }
});

