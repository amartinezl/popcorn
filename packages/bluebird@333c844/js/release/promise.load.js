montageDefine("333c844","js/release/promise",{dependencies:["./util","./es5","./async","./errors","./thenables","./promise_array","./context","./debuggability","./finally","./catch_filter","./nodeback","./method","./bind","./cancel","./direct_resolve","./synchronous_inspection","./join","./map.js","./call_get.js","./using.js","./timers.js","./generators.js","./nodeify.js","./promisify.js","./props.js","./race.js","./reduce.js","./settle.js","./some.js","./filter.js","./each.js","./any.js"],factory:function(e,t,i){"use strict";i.exports=function(){function t(){}function r(e,t){if("function"!=typeof t)throw new y("expecting a function but got "+f.classString(t));if(e.constructor!==n)throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")}function n(e){this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,e!==j&&(r(this,e),this._resolveFromExecutor(e)),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function o(e){this.promise._resolveCallback(e)}function s(e){this.promise._rejectCallback(e,!1)}function l(e){var t=new n(j);t._fulfillmentHandler0=e,t._rejectionHandler0=e,t._promise0=e,t._receiver0=e}var a,c=function(){return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},u=function(){return new n.PromiseInspection(this._target())},_=function(e){return n.reject(new y(e))},h={},f=e("./util");a=f.isNode?function(){var e=process.domain;return void 0===e&&(e=null),e}:function(){return null},f.notEnumerableProp(n,"_getDomain",a);var d=e("./es5"),p=e("./async"),v=new p;d.defineProperty(n,"_async",{value:v});var m=e("./errors"),y=n.TypeError=m.TypeError;n.RangeError=m.RangeError;var b=n.CancellationError=m.CancellationError;n.TimeoutError=m.TimeoutError,n.OperationalError=m.OperationalError,n.RejectionError=m.OperationalError,n.AggregateError=m.AggregateError;var j=function(){},g={},F={},C=e("./thenables")(n,j),w=e("./promise_array")(n,j,C,_,t),k=e("./context")(n),P=k.create,E=e("./debuggability")(n,k),H=(E.CapturedTrace,e("./finally")(n,C)),A=e("./catch_filter")(F),x=e("./nodeback"),S=f.errorObj,R=f.tryCatch;return n.prototype.toString=function(){return"[object Promise]"},n.prototype.caught=n.prototype["catch"]=function(e){var t=arguments.length;if(t>1){var i,r=new Array(t-1),n=0;for(i=0;i<t-1;++i){var o=arguments[i];if(!f.isObject(o))return _("expecting an object but got A catch statement predicate "+f.classString(o));r[n++]=o}return r.length=n,e=arguments[i],this.then(void 0,A(r,e,this))}return this.then(void 0,e)},n.prototype.reflect=function(){return this._then(u,u,void 0,this,void 0)},n.prototype.then=function(e,t){if(E.warnings()&&arguments.length>0&&"function"!=typeof e&&"function"!=typeof t){var i=".then() only accepts functions but was passed: "+f.classString(e);arguments.length>1&&(i+=", "+f.classString(t)),this._warn(i)}return this._then(e,t,void 0,void 0,void 0)},n.prototype.done=function(e,t){var i=this._then(e,t,void 0,void 0,void 0);i._setIsFinal()},n.prototype.spread=function(e){return"function"!=typeof e?_("expecting a function but got "+f.classString(e)):this.all()._then(e,void 0,void 0,g,void 0)},n.prototype.toJSON=function(){var e={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(e.fulfillmentValue=this.value(),e.isFulfilled=!0):this.isRejected()&&(e.rejectionReason=this.reason(),e.isRejected=!0),e},n.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new w(this).promise()},n.prototype.error=function(e){return this.caught(f.originatesFromRejection,e)},n.getNewLibraryCopy=i.exports,n.is=function(e){return e instanceof n},n.fromNode=n.fromCallback=function(e){var t=new n(j);t._captureStackTrace();var i=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=R(e)(x(t,i));return r===S&&t._rejectCallback(r.e,!0),t._isFateSealed()||t._setAsyncGuaranteed(),t},n.all=function(e){return new w(e).promise()},n.cast=function(e){var t=C(e);return t instanceof n||(t=new n(j),t._captureStackTrace(),t._setFulfilled(),t._rejectionHandler0=e),t},n.resolve=n.fulfilled=n.cast,n.reject=n.rejected=function(e){var t=new n(j);return t._captureStackTrace(),t._rejectCallback(e,!0),t},n.setScheduler=function(e){if("function"!=typeof e)throw new y("expecting a function but got "+f.classString(e));return v.setScheduler(e)},n.prototype._then=function(e,t,i,r,o){var s=void 0!==o,l=s?o:new n(j),c=this._target(),u=c._bitField;s||(l._propagateFrom(this,3),l._captureStackTrace(),void 0===r&&0!==(2097152&this._bitField)&&(r=0!==(50397184&u)?this._boundValue():c===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,l));var _=a();if(0!==(50397184&u)){var h,d,p=c._settlePromiseCtx;0!==(33554432&u)?(d=c._rejectionHandler0,h=e):0!==(16777216&u)?(d=c._fulfillmentHandler0,h=t,c._unsetRejectionIsUnhandled()):(p=c._settlePromiseLateCancellationObserver,d=new b("late cancellation observer"),c._attachExtraTrace(d),h=t),v.invoke(p,c,{handler:null===_?h:"function"==typeof h&&f.domainBind(_,h),promise:l,receiver:r,value:d})}else c._addCallbacks(e,t,l,r,_);return l},n.prototype._length=function(){return 65535&this._bitField},n.prototype._isFateSealed=function(){return 0!==(117506048&this._bitField)},n.prototype._isFollowing=function(){return 67108864===(67108864&this._bitField)},n.prototype._setLength=function(e){this._bitField=this._bitField&-65536|65535&e},n.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},n.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},n.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},n.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},n.prototype._isFinal=function(){return(4194304&this._bitField)>0},n.prototype._unsetCancelled=function(){this._bitField=this._bitField&-65537},n.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},n.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},n.prototype._setAsyncGuaranteed=function(){v.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},n.prototype._receiverAt=function(e){var t=0===e?this._receiver0:this[4*e-4+3];if(t!==h)return void 0===t&&this._isBound()?this._boundValue():t},n.prototype._promiseAt=function(e){return this[4*e-4+2]},n.prototype._fulfillmentHandlerAt=function(e){return this[4*e-4+0]},n.prototype._rejectionHandlerAt=function(e){return this[4*e-4+1]},n.prototype._boundValue=function(){},n.prototype._migrateCallback0=function(e){var t=(e._bitField,e._fulfillmentHandler0),i=e._rejectionHandler0,r=e._promise0,n=e._receiverAt(0);void 0===n&&(n=h),this._addCallbacks(t,i,r,n,null)},n.prototype._migrateCallbackAt=function(e,t){var i=e._fulfillmentHandlerAt(t),r=e._rejectionHandlerAt(t),n=e._promiseAt(t),o=e._receiverAt(t);void 0===o&&(o=h),this._addCallbacks(i,r,n,o,null)},n.prototype._addCallbacks=function(e,t,i,r,n){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=i,this._receiver0=r,"function"==typeof e&&(this._fulfillmentHandler0=null===n?e:f.domainBind(n,e)),"function"==typeof t&&(this._rejectionHandler0=null===n?t:f.domainBind(n,t));else{var s=4*o-4;this[s+2]=i,this[s+3]=r,"function"==typeof e&&(this[s+0]=null===n?e:f.domainBind(n,e)),"function"==typeof t&&(this[s+1]=null===n?t:f.domainBind(n,t))}return this._setLength(o+1),o},n.prototype._proxy=function(e,t){this._addCallbacks(void 0,void 0,t,e,null)},n.prototype._resolveCallback=function(e,t){if(0===(117506048&this._bitField)){if(e===this)return this._rejectCallback(c(),!1);var i=C(e,this);if(!(i instanceof n))return this._fulfill(e);t&&this._propagateFrom(i,2);var r=i._target();if(r===this)return void this._reject(c());var o=r._bitField;if(0===(50397184&o)){var s=this._length();s>0&&r._migrateCallback0(this);for(var l=1;l<s;++l)r._migrateCallbackAt(this,l);this._setFollowing(),this._setLength(0),this._setFollowee(r)}else if(0!==(33554432&o))this._fulfill(r._value());else if(0!==(16777216&o))this._reject(r._reason());else{var a=new b("late cancellation observer");r._attachExtraTrace(a),this._reject(a)}}},n.prototype._rejectCallback=function(e,t,i){var r=f.ensureErrorObject(e),n=r===e;if(!n&&!i&&E.warnings()){var o="a promise was rejected with a non-error: "+f.classString(e);this._warn(o,!0)}this._attachExtraTrace(r,!!t&&n),this._reject(e)},n.prototype._resolveFromExecutor=function(e){var t=this;this._captureStackTrace(),this._pushContext();var i=!0,r=this._execute(e,function(e){t._resolveCallback(e)},function(e){t._rejectCallback(e,i)});i=!1,this._popContext(),void 0!==r&&t._rejectCallback(r,!0)},n.prototype._settlePromiseFromHandler=function(e,t,i,r){var n=r._bitField;if(0===(65536&n)){r._pushContext();var o;t===g?i&&"number"==typeof i.length?o=R(e).apply(this._boundValue(),i):(o=S,o.e=new y("cannot .spread() a non-array: "+f.classString(i))):o=R(e).call(t,i);var s=r._popContext();n=r._bitField,0===(65536&n)&&(o===F?r._reject(i):o===S?r._rejectCallback(o.e,!1):(E.checkForgottenReturns(o,s,"",r,this),r._resolveCallback(o)))}},n.prototype._target=function(){for(var e=this;e._isFollowing();)e=e._followee();return e},n.prototype._followee=function(){return this._rejectionHandler0},n.prototype._setFollowee=function(e){this._rejectionHandler0=e},n.prototype._settlePromise=function(e,i,r,o){var s=e instanceof n,l=this._bitField,a=0!==(134217728&l);0!==(65536&l)?(s&&e._invokeInternalOnCancel(),r instanceof H&&r.isFinallyHandler()?(r.cancelPromise=e,R(i).call(r,o)===S&&e._reject(S.e)):i===u?e._fulfill(u.call(r)):r instanceof t?r._promiseCancelled(e):s||e instanceof w?e._cancel():r.cancel()):"function"==typeof i?s?(a&&e._setAsyncGuaranteed(),this._settlePromiseFromHandler(i,r,o,e)):i.call(r,o,e):r instanceof t?r._isResolved()||(0!==(33554432&l)?r._promiseFulfilled(o,e):r._promiseRejected(o,e)):s&&(a&&e._setAsyncGuaranteed(),0!==(33554432&l)?e._fulfill(o):e._reject(o))},n.prototype._settlePromiseLateCancellationObserver=function(e){var t=e.handler,i=e.promise,r=e.receiver,o=e.value;"function"==typeof t?i instanceof n?this._settlePromiseFromHandler(t,r,o,i):t.call(r,o,i):i instanceof n&&i._reject(o)},n.prototype._settlePromiseCtx=function(e){this._settlePromise(e.promise,e.handler,e.receiver,e.value)},n.prototype._settlePromise0=function(e,t,i){var r=this._promise0,n=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,e,n,t)},n.prototype._clearCallbackDataAtIndex=function(e){var t=4*e-4;this[t+2]=this[t+3]=this[t+0]=this[t+1]=void 0},n.prototype._fulfill=function(e){var t=this._bitField;if(!((117506048&t)>>>16)){if(e===this){var i=c();return this._attachExtraTrace(i),this._reject(i)}this._setFulfilled(),this._rejectionHandler0=e,(65535&t)>0&&(0!==(134217728&t)?this._settlePromises():v.settlePromises(this))}},n.prototype._reject=function(e){var t=this._bitField;if(!((117506048&t)>>>16))return this._setRejected(),this._fulfillmentHandler0=e,this._isFinal()?v.fatalError(e,f.isNode):void((65535&t)>0?v.settlePromises(this):this._ensurePossibleRejectionHandled())},n.prototype._fulfillPromises=function(e,t){for(var i=1;i<e;i++){var r=this._fulfillmentHandlerAt(i),n=this._promiseAt(i),o=this._receiverAt(i);this._clearCallbackDataAtIndex(i),this._settlePromise(n,r,o,t)}},n.prototype._rejectPromises=function(e,t){for(var i=1;i<e;i++){var r=this._rejectionHandlerAt(i),n=this._promiseAt(i),o=this._receiverAt(i);this._clearCallbackDataAtIndex(i),this._settlePromise(n,r,o,t)}},n.prototype._settlePromises=function(){var e=this._bitField,t=65535&e;if(t>0){if(0!==(16842752&e)){var i=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,i,e),this._rejectPromises(t,i)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,e),this._fulfillPromises(t,r)}this._setLength(0)}this._clearCancellationData()},n.prototype._settledValue=function(){var e=this._bitField;return 0!==(33554432&e)?this._rejectionHandler0:0!==(16777216&e)?this._fulfillmentHandler0:void 0},n.defer=n.pending=function(){E.deprecated("Promise.defer","new Promise");var e=new n(j);return{promise:e,resolve:o,reject:s}},f.notEnumerableProp(n,"_makeSelfResolutionError",c),e("./method")(n,j,C,_,E),e("./bind")(n,j,C,E),e("./cancel")(n,w,_,E),e("./direct_resolve")(n),e("./synchronous_inspection")(n),e("./join")(n,w,C,j,v,a),n.Promise=n,n.version="3.4.7",e("./map.js")(n,w,_,C,j,E),e("./call_get.js")(n),e("./using.js")(n,_,C,P,j,E),e("./timers.js")(n,j,E),e("./generators.js")(n,_,j,C,t,E),e("./nodeify.js")(n),e("./promisify.js")(n,j),e("./props.js")(n,w,C,_),e("./race.js")(n,j,C,_),e("./reduce.js")(n,w,_,C,j,E),e("./settle.js")(n,w,E),e("./some.js")(n,w,_),e("./filter.js")(n,j),e("./each.js")(n,j),e("./any.js")(n),f.toFastProperties(n),f.toFastProperties(n.prototype),l({a:1}),l({b:2}),l({c:3}),l(1),l(function(){}),l(void 0),l(!1),l(new n(j)),E.setBounds(p.firstLineError,f.lastLineError),n}}});