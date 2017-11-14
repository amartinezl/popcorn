montageDefine("683d91c","shim-object",{dependencies:["./weak-map"],factory:function(e,t,n){"use strict";var r=e("./weak-map");n.exports=Object,Object.empty=Object.freeze(Object.create(null)),Object.isObject=function(e){return Object(e)===e},Object.getValueOf=function(e){return e&&"function"==typeof e.valueOf&&(e=e.valueOf()),e};var c=new r;Object.hash=function(e){return e&&"function"==typeof e.hash?""+e.hash():Object(e)===e?(c.has(e)||c.set(e,Math.random().toString(36).slice(2)),c.get(e)):""+e};var o=Object.prototype.hasOwnProperty;Object.owns=function(e,t){return o.call(e,t)},Object.has=function(e,t){if("object"!=typeof e)throw new Error("Object.has can't accept non-object: "+typeof e);if(e&&"function"==typeof e.has)return e.has(t);if("string"==typeof t)return t in e&&e[t]!==Object.prototype[t];throw new Error("Key must be a string for Object.has on plain objects")},Object.get=function(e,t,n){if("object"!=typeof e)throw new Error("Object.get can't accept non-object: "+typeof e);return e&&"function"==typeof e.get?e.get(t,n):Object.has(e,t)?e[t]:n},Object.set=function(e,t,n){e&&"function"==typeof e.set?e.set(t,n):e[t]=n},Object.addEach=function(e,t,n){var r=3!==arguments.length||n;if(t)if("function"!=typeof t.forEach||t.hasOwnProperty("forEach"))if("number"==typeof t.length)for(var c=0;c<t.length;c++)e[c]=t[c];else for(var o,f=Object.keys(t),a=0;o=f[a];a++)!r&&Object.owns(e,o)||(e[o]=t[o]);else t.isMap===!0?t.forEach(function(t,n){e[n]=t}):t.forEach(function(t){e[t[0]]=t[1]});else;return e},Object.defineEach=function(e,t,n,r,c,o){var f=3!==arguments.length||n;if(t)if("function"!=typeof t.forEach||t.hasOwnProperty("forEach"))if("number"==typeof t.length)for(var a=0;a<t.length;a++)Object.defineProperty(e,a,{value:t[a],writable:o,configurable:r,enumerable:c});else for(var i,u=Object.keys(t),b=0;i=u[b];b++)!f&&Object.owns(e,i)||Object.defineProperty(e,i,{value:t[i],writable:o,configurable:r,enumerable:c});else t.isMap===!0?t.forEach(function(t,n){Object.defineProperty(e,n,{value:t,writable:o,configurable:r,enumerable:c})}):t.forEach(function(t){Object.defineProperty(e,t[0],{value:t[1],writable:o,configurable:r,enumerable:c})});else;return e},Object.forEach=function(e,t,n){for(var r,c=Object.keys(e),o=0;r=c[o];o++)t.call(n,e[r],r,e)},Object.map=function(e,t,n){for(var r,c=Object.keys(e),o=0,f=[];r=c[o];o++)f.push(t.call(n,e[r],r,e));return f},Object.values=function(e){return Object.map(e,Function.identity)},Object.concat=function(){for(var e={},t=0;t<arguments.length;t++)Object.addEach(e,arguments[t]);return e},Object.from=Object.concat,Object.is=function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t},Object.equals=function(e,t,n,c){if(n=n||Object.equals,e=Object.getValueOf(e),t=Object.getValueOf(t),e===t)return!0;if(Object.isObject(e)){if(c=c||new r,c.has(e))return!0;c.set(e,!0)}if(Object.isObject(e)&&"function"==typeof e.equals)return e.equals(t,n,c);if(Object.isObject(t)&&"function"==typeof t.equals)return t.equals(e,n,c);if(Object.isObject(e)&&Object.isObject(t)&&Object.getPrototypeOf(e)===Object.prototype&&Object.getPrototypeOf(t)===Object.prototype){for(var o in e)if(!n(e[o],t[o],n,c))return!1;for(var o in t)if(!(o in e&&n(t[o],e[o],n,c)))return!1;return!0}return e!==e&&t!==t||(!e||!t)&&e===t},Object.compare=function(e,t){if(e=Object.getValueOf(e),t=Object.getValueOf(t),e===t)return 0;var n=typeof e,r=typeof t;return"number"===n&&"number"===r?e-t:"string"===n&&"string"===r?e<t?-(1/0):1/0:e&&"function"==typeof e.compare?e.compare(t):t&&"function"==typeof t.compare?-t.compare(e):0},Object.clone=function(e,t,n){if(e=Object.getValueOf(e),n=n||new r,void 0===t)t=1/0;else if(0===t)return e;if(Object.isObject(e)){if(!n.has(e))if(e&&"function"==typeof e.clone)n.set(e,e.clone(t,n));else{var c=Object.getPrototypeOf(e);if(null!==c&&c!==Object.prototype)throw new Error("Can't clone "+e);var o=Object.create(c);n.set(e,o);for(var f in e)o[f]=Object.clone(e[f],t-1,n)}return n.get(e)}return e},Object.clear=function(e){if(e&&"function"==typeof e.clear)e.clear();else for(var t=Object.keys(e),n=t.length;n;)n--,delete e[t[n]];return e}}});