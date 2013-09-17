(function() {

  window.App = angular.module('App', ['ngAnimate']);

  App.controller('List', function($scope) {
    var mockList;
    $scope.limit = 3;
    $scope.more = function() {
      return $scope.data = $scope.data.concat(mockList);
    };
    $scope.reset = function() {
      return $scope.data.length = 3;
    };
    $scope.transClass = function() {
      if ($scope.transType) {
        return "ng-trans ng-trans-" + $scope.transType;
      }
    };
    return $scope.data = mockList = ['lorem ipsum dolor sit', 'amet consectetur', 'adipisicing elit'];
  });

}).call(this);
