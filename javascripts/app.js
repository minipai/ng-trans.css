(function() {

  window.App = angular.module('App', ['ngAnimate']);

  App.controller('TransDemo', function($scope, $timeout) {
    var mockList, push;
    $scope.limit = 3;
    $scope.transType = 'fade';
    $scope.timingFunction = '';
    $scope.data = mockList = ['Demo Here'];
    push = function(i) {
      return $scope.data.push(i);
    };
    $scope.reset = function() {
      return $scope.data.length = 0;
    };
    $scope.demoTrans = function(transType) {
      $scope.transType = transType;
      return push(transType + ' ' + $scope.timingFunction);
    };
    $scope.demoTiming = function(timingFunction) {
      $scope.timingFunction = timingFunction;
      return push($scope.transType + ' ' + timingFunction);
    };
    return $scope.transClass = function() {
      if ($scope.transType) {
        return "ng-trans ng-trans-" + $scope.transType + " " + $scope.timingFunction;
      }
    };
  });

}).call(this);
