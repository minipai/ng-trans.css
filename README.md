ng-trans.css
============

ng-trans.css is some transitions made for AngularJS.

To see demo, check out http://minipai.github.io/ng-trans.css/

##Requirements
You need AngularJS 1.2 with ngAnimate.

ng-trans.css works directives that will add `.ng-leave`, `.ng-leave-active`, `.ng-enter` and `.ng-enter-active` CSS classes. This includes ngRepeat, ngInclude, ngIf, ngView.

##Usage
You only need to add class `ng-trans ng-trans-{{transType}} {{timingFuntion}}` to the element to make transition work.

```
<ul>
  <li class=" ng-trans ng-trans-rotate easeOutBack" ng-repeat="item in data"></li>
</ul>
```

**Before v0.5.0 class needed to add to parent element. However, its changed to enable doing more fancy stuffs.**

## Builds

- ng-trans.css contains all transitions and timing functions.
- ng-trans-transitions.css contains all transitions.
- ng-trans-timing-function.css contains all timing functions.



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

- easeInQuad
- easeInCubic
- easeInQuart
- easeInQuint
- easeInSine
- easeInExpo
- easeInCirc
- easeInQuad
- easeInBack
- easeOutQuad
- easeOutCubic
- easeOutQuart
- easeOutQuint
- easeOutSine
- easeOutExpo
- easeOutCirc
- easeOutQuad
- easeOutBack
- easeInOutCubic
- easeInOutQuart
- easeInOutQuint
- easeInOutSine
- easeInOutExpo
- easeInOutCirc
- easeInOutQuad
- easeInOutBack

Timing funtions thanks to http://matthewlein.com/ceaser/


