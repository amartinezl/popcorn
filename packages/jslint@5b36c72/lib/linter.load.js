montageDefine("5b36c72","lib/linter",{dependencies:[],factory:function(r,e,t){function n(r,e){"use strict";var t=r||{};return e?(Object.keys(e).forEach(function(r){t.hasOwnProperty(r)||(t[r]=e[r])}),t):t}function o(r){"use strict";return 65279===r.charCodeAt(0)&&(r=r.slice(1)),r=r.replace(/^#!.*/,"")}e.merge=n,e.preprocessScript=o,e.doLint=function(r,e,t){"use strict";var n,c;return e=o(e),n=r(e,t),c=r.data(),void 0===c.ok&&(c.ok=n),c.options=t,c.errors=c.errors||c.warnings,c}}});