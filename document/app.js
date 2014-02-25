window.App = angular.module('App', ['ngAnimate']);

App.controller('TransDemo', function(transitions, $scope, $timeout) {
  var pushDemo, timeout;

  $scope.transType = 'fade';
  $scope.data = []

  pushDemo = function() {
    $scope.data.push({
      type: $scope.transType,
    });
  };

  $scope.selected = function(trans) {
    return $scope.transType === trans;
  };
  $scope.demo = function(trans) {
    $timeout.cancel(timeout);
    $scope.transType = trans

    var i = 0

    var timeoutDemo = function(){
      i = i + 1
      timeout = $timeout(function(){
        $scope.add(trans)
          if( i < 5) {
            timeoutDemo()
          } else {
            // $scope.reset()
          }
      }, 200)
    }
    timeoutDemo()
  };


  $scope.reset = function() {
    $timeout.cancel(timeout);
    $scope.data.length = 0;
  };
  $scope.add = function(transType) {
    if(transType) {
      $scope.transType = transType;
    }
    pushDemo();
  };

  $scope.transClass = function() {
    if ($scope.transType) {
      return "ng-trans ng-trans-" + $scope.transType;
    }
  };
  $scope.remove = function(index) {
    $scope.data.splice(index, 1);
  };

});


App.value('transitions', ['fade', 'fade-left', 'fade-up', 'fade-right', 'fade-down', 'slide-left', 'slide-up', 'slide-right', 'slide-down', 'scale-up', 'scale-down', 'flip-x', 'flip-y', 'rotate']);

App.value('easeIns', ["easeInQuad", "easeInCubic", "easeInQuart", "easeInQuint", "easeInSine", "easeInExpo", "easeInCirc", "easeInBack"]);

App.value('easeOuts', ["easeOutQuad", "easeOutCubic", "easeOutQuart", "easeOutQuint", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack"]);

App.value('easeInOuts', ["easeInOutQuad", "easeInOutCubic", "easeInOutQuart", "easeInOutQuint", "easeInOutSine", "easeInOutExpo", "easeInOutCirc", "easeInOutBack"]);

