montageDefine("333c844","js/release/thenables",{dependencies:["./util"],factory:function(t,e,n){"use strict";n.exports=function(e,n){function r(t,r){if(f(t)){if(t instanceof e)return t;var c=u(t);if(c===i){r&&r._pushContext();var o=e.reject(c.e);return r&&r._popContext(),o}if("function"==typeof c){if(a(t)){var o=new e(n);return t._then(o._fulfill,o._reject,void 0,o,null),o}return l(t,c,r)}}return t}function c(t){return t.then}function u(t){try{return c(t)}catch(e){return i.e=e,i}}function a(t){try{return s.call(t,"_promise0")}catch(e){return!1}}function l(t,r,c){function u(t){l&&(l._resolveCallback(t),l=null)}function a(t){l&&(l._rejectCallback(t,s,!0),l=null)}var l=new e(n),f=l;c&&c._pushContext(),l._captureStackTrace(),c&&c._popContext();var s=!0,p=o.tryCatch(r).call(t,u,a);return s=!1,l&&p===i&&(l._rejectCallback(p.e,!0,!0),l=null),f}var o=t("./util"),i=o.errorObj,f=o.isObject,s={}.hasOwnProperty;return r}}});