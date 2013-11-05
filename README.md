ng-trans.css
============

ng-trans.css is some transitions made for AngularJS.

To see demo, check out http://minipai.github.io/ng-trans.css/

##Requirements
You need AngularJS 1.2 with ngAnimate.

ng-trans.css works with directives that will add `.ng-leave`, `.ng-leave-active`, `.ng-enter` and `.ng-enter-active` CSS classes. This includes ngRepeat, ngInclude, ngIf, ngView.

##Usage
You only need to add class `ng-trans ng-trans-{{transType}} {{timingFuntion}}` to the element to make transition work.

```
<ul>
  <li class="ng-trans ng-trans-rotate easeOutBack" ng-repeat="item in data"></li>
</ul>
```

**Before v0.5.0 class needed to add to parent element. However, its changed to enable doing more fancy stuffs.**

## Builds

- **ng-trans.css** contains all transitions and timing functions.
- **ng-trans-transitions.css** contains all transitions.
- **ng-trans-timing-function.css** contains all timing functions.

## Sass support

If you want to apply transitions with your own selector, include @minxins in **_ng-trans-transition.scss** (in /source).

```
@import "ng-trans-transition.scss";

$trans-property: all;
$trans-duration: 400ms;

.your-selector {
  @include ng-trans();
  @include ng-trans-type( transType );
}

```
- `$trans-property` sets the property that should have transition. E.g. `all`, `opacity`.
- `$trans-duration` sets the duration time of transition. E.g. `500ms`, `1s`.
- `@include ng-trans()` is required. transition-property and transition-duration is done here;
- `@include ng-trans-type( transType )`  where transType may be one of the transition in the list below.

For mixins of timimg funcitons, checkout [matthewlein / Ceaser](https://github.com/matthewlein/Ceaser/tree/master/developer) or [jhardy / compass-ceaser-easing](https://github.com/jhardy/compass-ceaser-easing).


## List of transitions ({{transType}})

- fade, fade-left, fade-up, fade-right, fade-down
- slide-up, slide-up, slide-right, slide-down
- scale-up, scale-down
- flip-x, flip-y
- rotate


## List of timing functions ({{timingFuntion}})

- easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine
- easeInExpo, easeInCirc, easeInQuad, easeInBack
- easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine
- easeOutExpo, easeOutCirc, easeOutQuad, easeOutBack
- easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine
- easeInOutExpo, easeInOutCirc, easeInOutQuad, easeInOutBack

Timing funtions thanks to http://matthewlein.com/ceaser/


