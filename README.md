ng-trans.css
============

ng-trans.css is some transitions made for AngularJS.

To see demo, check out http://minipai.github.io/ng-trans.css/

##Requirements
You need AngularJS 1.2 with ngAnimate.

##Usage
You only need to add class `ng-trans ng-trans-{{transType}} {{timingFuntion}}` to your parent element of [ng-repeat] to make transition work. Note that ng-trans.css use child selectors, so only the child element of `.ng-trans` but not all descendant elements will get effected.

## List of transitions ({{transType}})

- fade
- fade-left
- fade-up
- fade-right
- fade-down
- slide-up
- slide-up
- slide-right
- slide-down
- flip-x
- flip-y
- rotate

## List of timing functions ({{timingFuntion}})

- easeOutBack
- easeOutCirc
- easeOutExpo
- easeOutQuart

Timing funtions thanks to http://matthewlein.com/ceaser/


