window.App = angular.module('App', ['ngAnimate']);

App.controller('TransDemo', function(transitions, $scope, $timeout) {
  var mockList, pushDemo, timeouts;

  $scope.transType = 'fade';
  $scope.data = []
  timeouts = [];

  pushDemo = function() {
    $scope.data.push({
      type: $scope.transType,
      timing: $scope.timingFunction
    });
  };

  $scope.isCurrent = function() {
    scope.transType === trans;
  };
  $scope.demo = function(trans) {
    console.log('trans', trans)
    $scope.demoTrans(trans);
    var i = 1

    var timeoutDemo = function(){
      i = i + 1
      $timeout(function(){
        $scope.demoTrans(trans)
          if( i < 8){
            timeoutDemo()
          }
      }, 150)
    }
    timeoutDemo()
  };
  $scope.reset = function() {
    angular.forEach(timeouts, function(timeout) {
      return $timeout.cancel(timeout);
    });
    return $scope.data.length = 0;
  };
  $scope.demoTrans = function(transType) {
    $scope.transType = transType;
    return pushDemo();
  };


  $scope.transClass = function() {
    if ($scope.transType) {
      return "ng-trans ng-trans-" + $scope.transType + " " + $scope.timingFunction;
    }
  };
  $scope.remove = function(index) {
    return $scope.data.splice(index, 1);
  };

});

// App.directive('demoTrans', function() {
//   return {

//     scope: true,
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var blur, trans;
//       trans = scope.trans = attrs.demoTrans;
//       blur = function() {
//         return element[0].blur();
//       };
//       scope.isCurrent = function() {
//         return scope.transType === trans;
//       };
//       return scope.demo = function() {
//         if (trans === 'all') {
//           scope.demoAllTrans();
//         } else {
//           scope.demoTrans(trans);
//         }
//         return blur();
//       };
//     }
//   };
// });

App.directive('demoTiming', function(easeIns, easeOuts, easeInOuts) {
  return {
    template: "<button class=\"btn btn-primary\"\n        ng-class=\"{active: isCurrent()}\"\n        ng-click=\"demo()\">{{ timing }}</button>",
    replace: true,
    scope: true,
    restrict: 'A',
    link: function(scope, element, attrs) {
      var blur, timing;
      timing = scope.timing = attrs.demoTiming;
      blur = function() {
        return element[0].blur();
      };
      scope.isCurrent = function() {
        return scope.timingFunction === timing;
      };
      return scope.demo = function() {
        if (timing === 'easeIns') {
          scope.demoAllTiming(easeIns);
        } else if (timing === 'easeOuts') {
          scope.demoAllTiming(easeOuts);
        } else if (timing === 'easeInOuts') {
          scope.demoAllTiming(easeInOuts);
        } else {
          scope.demoTiming(timing);
        }
        return blur();
      };
    }
  };
});

App.value('transitions', ['fade', 'fade-left', 'fade-up', 'fade-right', 'fade-down', 'slide-left', 'slide-up', 'slide-right', 'slide-down', 'scale-up', 'scale-down', 'flip-x', 'flip-y', 'rotate']);

App.value('easeIns', ["easeInQuad", "easeInCubic", "easeInQuart", "easeInQuint", "easeInSine", "easeInExpo", "easeInCirc", "easeInBack"]);

App.value('easeOuts', ["easeOutQuad", "easeOutCubic", "easeOutQuart", "easeOutQuint", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack"]);

App.value('easeInOuts', ["easeInOutQuad", "easeInOutCubic", "easeInOutQuart", "easeInOutQuint", "easeInOutSine", "easeInOutExpo", "easeInOutCirc", "easeInOutBack"]);

