(function() {

  window.App = angular.module('App', ['ngAnimate']);

  App.controller('TransDemo', function(transitions, $scope, $timeout) {
    var mockList, pushDemo;
    $scope.limit = 3;
    $scope.transType = 'fade';
    $scope.timingFunction = '';
    $scope.data = mockList = [];
    pushDemo = function() {
      return $scope.data.push({
        type: $scope.transType,
        timing: $scope.timingFunction
      });
    };
    $scope.reset = function() {
      return $scope.data.length = 0;
    };
    $scope.demoTrans = function(transType) {
      $scope.transType = transType;
      return pushDemo();
    };
    $scope.demoTiming = function(timingFunction) {
      $scope.timingFunction = timingFunction;
      return pushDemo();
    };
    $scope.transClass = function() {
      if ($scope.transType) {
        return "ng-trans ng-trans-" + $scope.transType + " " + $scope.timingFunction;
      }
    };
    return $scope.remove = function(index) {
      return $scope.data.splice(index, 1);
    };
  });

  App.directive('demoTrans', function() {
    return {
      template: "<button class=\"btn btn-primary\"\n        ng-click=\"demoTrans(trans); blur()\">{{ trans }}</button>",
      replace: true,
      scope: true,
      restrict: 'A',
      link: function(scope, element, attrs) {
        var trans;
        trans = scope.trans = attrs.demoTrans;
        return scope.blur = function() {
          return element[0].blur();
        };
      }
    };
  });

  App.directive('demoTiming', function() {
    return {
      template: "<button class=\"btn btn-primary\"\n        ng-click=\"demoTiming(timing); blur()\">{{ timing }}</button>",
      replace: true,
      scope: true,
      restrict: 'A',
      link: function(scope, element, attrs) {
        var timing;
        timing = scope.timing = attrs.demoTiming;
        return scope.blur = function() {
          return element[0].blur();
        };
      }
    };
  });

  App.value('transitions', ['fade', 'fade-left', 'fade-up', 'fade-right', 'fade-down', 'slide-left', 'slide-up', 'slide-right', 'slide-down', 'scale-up', 'scale-down', 'flip-x', 'flip-y', 'rotate']);

}).call(this);
