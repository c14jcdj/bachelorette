var bacheloretteDirectives = angular.module('bacheloretteDirectives', []);

bacheloretteDirectives.directive('longTermPick', function() {
      return {
          restrict: 'E',
          templateUrl: 'partials/long_term_picks.html',
          controller: 'longTermPickController',
          controllerAs: 'long'
      };
 });

bacheloretteDirectives.directive('weeklyPick', function() {
      return {
          restrict: 'E',
          templateUrl: 'partials/weekly_picks.html',
          controller: 'weeklyPickController',
          controllerAs: 'weekly'
      };
 });
bacheloretteDirectives.directive('gameQuestions', function() {
      return {
          restrict: 'E',
          templateUrl: 'partials/questions.html',
          controller: 'gameQuestionsController',
          controllerAs: 'questions'
      };
 });