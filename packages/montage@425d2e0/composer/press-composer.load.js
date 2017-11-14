montageDefine("425d2e0","composer/press-composer",{dependencies:["../core/core","./composer","../core/event/mutable-event"],factory:function(e,t,n){var i=e("../core/core").Montage,o=e("./composer").Composer,s=e("../core/event/mutable-event").MutableEvent,r=t.PressComposer=o.specialize({load:{value:function(){window.PointerEvent?this._element.addEventListener("pointerdown",this,!0):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.addEventListener("MSPointerDown",this,!0):(this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("mousedown",this,!0))}},unload:{value:function(){window.PointerEvent?this._element.removeEventListener("pointerdown",this,!0):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.removeEventListener("MSPointerDown",this,!0):(this._element.removeEventListener("touchstart",this,!0),this._element.removeEventListener("mousedown",this,!0))}},delegate:{value:null},cancelPress:{value:function(){return this._state===r.PRESSED&&(this._cancelPress(),!0)}},_cancelPress:{value:function(e){this._dispatchPressCancel(e),this._endInteraction()}},addEventListener:{value:function(e,t,n){o.prototype.addEventListener.call(this,e,t,n),"longPress"===e&&(this._shouldDispatchLongPress=!0)}},_state:{value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{value:!1},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){this._longPressThreshold!==e&&(this._longPressThreshold=e)}},_needDispatchSafePress:{value:!1},_longPressTimeout:{value:null},_observedPointer:{value:null},_initialCenterPositionX:{value:0},_initialCenterPositionY:{value:0},_shouldSaveInitialCenterPosition:{value:!1},_targetElementOnLastTouchMove:{value:null},_endInteraction:{value:function(){this._element&&(this._removeEventListeners(),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._targetElementOnLastTouchMove=null,this._state=r.UNPRESSED,this._initialCenterPositionX=0,this._initialCenterPositionY=0,this._shouldSaveInitialCenterPosition=!1)}},_changedTouchisObserved:{value:function(e){if(null===this._observedPointer)return!1;for(var t=0,n=e.length;t<n;t++)if(e[t].identifier===this._observedPointer)return t;return!1}},surrenderPointer:{value:function(e,t){var n=this.callDelegateMethod("shouldComposerSurrenderPointerToComponent",this,e,t);return("undefined"==typeof n||n!==!1)&&(this.cancelPress(),!0)}},_shouldPerformPress:{value:function(){return!(this.component.disabled||null!==this._observedPointer)}},capturePointerdown:{value:function(e){"touch"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH?this.captureTouchstart(e):("mouse"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)&&this.captureMousedown(e)}},handlePointerup:{value:function(e){"touch"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH?this.handleTouchend(e):("mouse"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE)&&this.handleMouseup(e)}},handlePointercancel:{value:function(e){("touch"===e.pointerType||window.MSPointerEvent&&e.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.handleTouchcancel(e)}},captureTouchstart:{value:function(e){this._shouldPerformPress()&&(void 0!==e.pointerId?this._observedPointer=e.pointerId:e.changedTouches&&1===e.changedTouches.length&&(this._observedPointer=e.changedTouches[0].identifier),null!==this._observedPointer&&this.component.eventManager.claimPointer(this._observedPointer,this)?this._addPointerDownListener():this._observedPointer=null)}},handleTouchend:{value:function(e){if(null===this._observedPointer)return void this._endInteraction(e);var t;e.pointerId===this._observedPointer?t=e.target:this._changedTouchisObserved(e.changedTouches)!==!1&&(t=this._targetElementOnLastTouchMove||e.target),t&&this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&(this.element===t||this.element.contains(t)?this._dispatchPress(e,"undefined"==typeof e.pointerId?t:null):this._dispatchPressCancel(e),this._endInteraction(e))}},_saveInitialCenterPositionIfNeeded:{value:function(){this._shouldSaveInitialCenterPosition&&(this._saveInitialCenterPosition(),this._shouldSaveInitialCenterPosition=!1)}},_cancelPressIfCenterPositionChange:{value:function(e){return this._saveInitialCenterPositionIfNeeded(),!!this._isPositionChanged(e)&&(this._cancelPress(e),!0)}},_handleMove:{value:function(e){if(null===this._observedPointer)return void this._endInteraction(e);if(this._needDispatchSafePress=!1,("mouse"===this._observedPointer||e.pointerId===this._observedPointer||e.changedTouches&&this._changedTouchisObserved(e.changedTouches)!==!1)&&this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&!this._cancelPressIfCenterPositionChange(e)&&"touchmove"===e.type){var t=e.changedTouches[0];this._targetElementOnLastTouchMove=document.elementFromPoint(t.clientX,t.clientY)}}},captureWheel:{value:function(e){return null===this._observedPointer?void this._endInteraction(e):void((e.target===this.element||e.target===window||"function"==typeof e.target.contains&&e.target.contains(this.element)||this.element.contains(e.target))&&this._cancelPressIfCenterPositionChange(e))}},handleTouchcancel:{value:function(e){null!==this._observedPointer&&e.pointerId!==this._observedPointer&&this._changedTouchisObserved(e.changedTouches)===!1||(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(e),this._endInteraction(e))}},captureMousedown:{value:function(e){0===e.button&&this._shouldPerformPress()&&(this._observedPointer="mouse",this.component.eventManager.claimPointer(this._observedPointer,this),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._addPointerDownListener():this._observedPointer=null)}},_handlePointerDown:{value:function(e){if(this._removePointerDownListener(),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)){if(this._needDispatchSafePress=!1,"touchstart"===e.type){var t=this;window.nativeAddEventListener("touchstart",function n(e){window.nativeRemoveEventListener("touchstart",n,!1),t._needDispatchSafePress=!e.defaultPrevented},!1)}this._shouldSaveInitialCenterPosition=!0,this._addEventListeners(),this._dispatchPressStart(e)}else this._observedPointer=null}},captureScroll:{value:function(e){(e.target===this.element||e.target===window||"function"==typeof e.target.contains&&e.target.contains(this.element)||this.element.contains(e.target))&&this._cancelPressIfCenterPositionChange(e)}},handleMouseup:{value:function(e){if(null===this._observedPointer)return void this._endInteraction(e);if(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)){for(var t=e.target;t!==this._element&&t&&t.parentNode;)t=t.parentNode;if(t===this._element)return this._dispatchPress(e),void this._endInteraction(e)}this._cancelPress(e)}},handleDragstart:{value:function(e){this._cancelPress(e)}},_saveInitialCenterPosition:{value:function(){if(this.element instanceof HTMLElement){var e=this.element.getBoundingClientRect();this._initialCenterPositionX=e.left+e.width/2,this._initialCenterPositionY=e.top+e.height/2}}},_isPositionChanged:{value:function(e){if(this.element instanceof HTMLElement){var t=this.element.getBoundingClientRect(),n=t.left+t.width/2,i=t.top+t.height/2;if(this._initialCenterPositionX!==n||this._initialCenterPositionY!==i){var s=e.type,r=Math.abs(this._initialCenterPositionX-n),a=Math.abs(this._initialCenterPositionY-i),h="mouse"===this._observedPointer||"wheel"===s||"mousewheel"===s||"scroll"===s?this._mouseRadiusThreshold:this._touchRadiusThreshold;return o.isCoordinateOutsideRadius(r,a,h)}}return!1}},_mouseRadiusThreshold:{value:2},_touchRadiusThreshold:{value:4},_addPointerDownListener:{value:function(){window.PointerEvent?this._element.addEventListener("pointerdown",this,!1):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.addEventListener("MSPointerDown",this,!1):"mouse"===this._observedPointer?this._element.addEventListener("mousedown",this,!1):this._element.addEventListener("touchstart",this,!1)}},_removePointerDownListener:{value:function(){window.PointerEvent?this._element.removeEventListener("pointerdown",this,!1):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.removeEventListener("MSPointerDown",this,!1):"mouse"===this._observedPointer?this._element.removeEventListener("mousedown",this,!1):this._element.removeEventListener("touchstart",this,!1)}},_addEventListeners:{value:function(){window.PointerEvent?(document.addEventListener("pointerup",this,!1),document.addEventListener("pointermove",this,!1),document.addEventListener("pointercancel",this,!1)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(document.addEventListener("MSPointerUp",this,!1),document.addEventListener("MSPointerMove",this,!1),document.addEventListener("MSPointerCancel",this,!1)):"mouse"===this._observedPointer?(document.addEventListener("mouseup",this,!1),document.addEventListener("mousemove",this,!1),this._element.addEventListener("dragstart",this,!1)):(document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1),document.addEventListener("touchmove",this,!1));var e="undefined"!=typeof window.onwheel||"undefined"!=typeof window.WheelEvent?"wheel":"mousewheel";document.addEventListener(e,this,!0),document.addEventListener("scroll",this,!0)}},_removeEventListeners:{value:function(){window.PointerEvent?(document.removeEventListener("pointerup",this,!1),document.removeEventListener("pointermove",this,!1),document.removeEventListener("pointercancel",this,!1)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(document.removeEventListener("MSPointerUp",this,!1),document.removeEventListener("MSPointerMove",this,!1),document.removeEventListener("MSPointerCancel",this,!1)):"mouse"===this._observedPointer?(document.removeEventListener("mouseup",this,!1),document.removeEventListener("mousemove",this,!1),this._element.removeEventListener("dragstart",this,!1)):(document.removeEventListener("touchend",this,!1),document.removeEventListener("touchcancel",this,!1),document.removeEventListener("touchmove",this,!1));var e="undefined"!=typeof window.onwheel||"undefined"!=typeof window.WheelEvent?"wheel":"mousewheel";document.removeEventListener(e,this,!0),document.removeEventListener("scroll",this,!0)}},_createPressEvent:{enumerable:!1,value:function(e,t){var n,i,o=t;return t||(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!0,!0,null)),n=new a,n.event=t,n.type=e,n.pointer=this._observedPointer,n.targetElement=t.target,t.changedTouches&&(i=this._changedTouchisObserved(t.changedTouches))!==!1&&(o=n.touch=t.changedTouches[i]),o&&(n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY),n}},_dispatchPressStart:{enumerable:!1,value:function(e){if(this._state=r.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",e)),this._shouldDispatchLongPress){var t=this;this._longPressTimeout=setTimeout(function(){t._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(e,t){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null);var n=this._createPressEvent("press",e);if(t&&(n.targetElement=t,this._needDispatchSafePress||e.defaultPrevented)){var i=this,o=document.defaultView.defaultEventManager,s=function(r){(t===r.target||o._couldEmulatedEventHaveWrongTarget(e.changedTouches[0],r,o._emulatedEventRadiusThreshold,o._emulatedEventTimestampThreshold))&&i._dispatchSafePress(n,s)};return window.nativeAddEventListener("mousedown",s,!0),void(s.timeoutID=setTimeout(function(){i._dispatchSafePress(n,s)},300))}this.dispatchEvent(n),this._state=r.UNPRESSED}},_dispatchSafePress:{value:function(e,t){clearTimeout(t.timeoutID),t.timeoutID=null,window.nativeRemoveEventListener("mousedown",t,!0),this.dispatchEvent(e),this._state=r.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",e)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=r.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",e))}}},{UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2}});r.prototype.captureMSPointerDown=r.prototype.capturePointerdown,r.prototype.handleMSPointerUp=r.prototype.handlePointerup,r.prototype.handleMSPointerCancel=r.prototype.handlePointercancel,r.prototype.handleMSPointerMove=r.prototype._handleMove,r.prototype.handlePointermove=r.prototype._handleMove,r.prototype.handleTouchmove=r.prototype._handleMove,r.prototype.handleMousemove=r.prototype._handleMove,r.prototype.handleMousewheel=r.prototype.handleWheel,r.prototype.handleMSPointerDown=r.prototype._handlePointerDown,r.prototype.handlePointerdown=r.prototype._handlePointerDown,r.prototype.handleMousedown=r.prototype._handlePointerDown,r.prototype.handleTouchstart=r.prototype._handlePointerDown;var a=function(){var e,t,n,o,r,a;for(e=s.specialize({type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(e){this._event=e}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(e){this._touch=e}}}),t=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],n=["clientX","clientY","pageX","pageY","screenX","screenY","target"],o=function(e){return{get:function(){return this._event[e]}}},r=function(e){return{get:function(){return this._touch?this._touch[e]:this._event[e]}}},a=t.length-1;a>=0;a--)i.defineProperty(e,t[a],o(t[a]));for(a=n.length-1;a>=0;a--)i.defineProperty(e,n[a],r(n[a]));return e}()}});