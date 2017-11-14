montageDefine("333c844","js/release/finally",{dependencies:["./util"],factory:function(e,t,n){"use strict";n.exports=function(t,n){function i(e,t,n){this.promise=e,this.type=t,this.handler=n,this.called=!1,this.cancelPromise=null}function l(e){this.finallyHandler=e}function r(e,t){return null!=e.cancelPromise&&(arguments.length>1?e.cancelPromise._reject(t):e.cancelPromise._cancel(),e.cancelPromise=null,!0)}function a(){return o.call(this,this.promise._target()._settledValue())}function s(e){if(!r(this,e))return h.e=e,h}function o(e){var i=this.promise,o=this.handler;if(!this.called){this.called=!0;var c=this.isFinallyHandler()?o.call(i._boundValue()):o.call(i._boundValue(),e);if(void 0!==c){i._setReturnedNonUndefined();var f=n(c,i);if(f instanceof t){if(null!=this.cancelPromise){if(f._isCancelled()){var d=new u("late cancellation observer");return i._attachExtraTrace(d),h.e=d,h}f.isPending()&&f._attachCancellationCallback(new l(this))}return f._then(a,s,void 0,this,void 0)}}}return i.isRejected()?(r(this),h.e=e,h):(r(this),e)}var c=e("./util"),u=t.CancellationError,h=c.errorObj;return i.prototype.isFinallyHandler=function(){return 0===this.type},l.prototype._resultCancelled=function(){r(this.finallyHandler)},t.prototype._passThrough=function(e,t,n,l){return"function"!=typeof e?this.then():this._then(n,l,void 0,new i(this,t,e),void 0)},t.prototype.lastly=t.prototype["finally"]=function(e){return this._passThrough(e,0,o,o)},t.prototype.tap=function(e){return this._passThrough(e,1,o)},i}}});