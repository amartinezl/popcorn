montageDefine("333c844","js/release/nodeify",{dependencies:["./util"],factory:function(t,e,r){"use strict";r.exports=function(e){function r(t,e){var r=this;if(!o.isArray(t))return n.call(r,t,e);var a=l(e).apply(r._boundValue(),[null].concat(t));a===c&&i.throwLater(a.e)}function n(t,e){var r=this,n=r._boundValue(),a=void 0===t?l(e).call(n,null):l(e).call(n,null,t);a===c&&i.throwLater(a.e)}function a(t,e){var r=this;if(!t){var n=new Error(t+"");n.cause=t,t=n}var a=l(e).call(r._boundValue(),t);a===c&&i.throwLater(a.e)}var o=t("./util"),i=e._async,l=o.tryCatch,c=o.errorObj;e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var o=n;void 0!==e&&Object(e).spread&&(o=r),this._then(o,a,void 0,this,t)}return this}}}});