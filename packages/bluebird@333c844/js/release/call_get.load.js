montageDefine("333c844","js/release/call_get",{dependencies:["./util"],factory:function(e,t,n){"use strict";var r=Object.create;if(r){var i=r(null),o=r(null);i[" size"]=o[" size"]=0}n.exports=function(t){function n(e,n){var r;if(null!=e&&(r=e[n]),"function"!=typeof r){var i="Object "+h.classString(e)+" has no method '"+h.toString(n)+"'";throw new t.TypeError(i)}return r}function r(e){var t=this.pop(),r=n(e,t);return r.apply(e,this)}function u(e){return e[this]}function a(e){var t=+this;return t<0&&(t=Math.max(0,t+e.length)),e[t]}var s,c,h=e("./util"),l=h.canEvaluate,f=h.isIdentifier,d=function(e){return new Function("ensureMethod","                                    \n        return function(obj) {                                               \n            'use strict'                                                     \n            var len = this.length;                                           \n            ensureMethod(obj, 'methodName');                                 \n            switch(len) {                                                    \n                case 1: return obj.methodName(this[0]);                      \n                case 2: return obj.methodName(this[0], this[1]);             \n                case 3: return obj.methodName(this[0], this[1], this[2]);    \n                case 0: return obj.methodName();                             \n                default:                                                     \n                    return obj.methodName.apply(obj, this);                  \n            }                                                                \n        };                                                                   \n        ".replace(/methodName/g,e))(n)},v=function(e){return new Function("obj","                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName",e))},p=function(e,t,n){var r=n[e];if("function"!=typeof r){if(!f(e))return null;if(r=t(e),n[e]=r,n[" size"]++,n[" size"]>512){for(var i=Object.keys(n),o=0;o<256;++o)delete n[i[o]];n[" size"]=i.length-256}}return r};s=function(e){return p(e,d,i)},c=function(e){return p(e,v,o)},t.prototype.call=function(e){for(var t=arguments.length,n=new Array(Math.max(t-1,0)),i=1;i<t;++i)n[i-1]=arguments[i];if(l){var o=s(e);if(null!==o)return this._then(o,void 0,void 0,n,void 0)}return n.push(e),this._then(r,void 0,void 0,n,void 0)},t.prototype.get=function(e){var t,n="number"==typeof e;if(n)t=a;else if(l){var r=c(e);t=null!==r?r:u}else t=u;return this._then(t,void 0,void 0,e,void 0)}}}});