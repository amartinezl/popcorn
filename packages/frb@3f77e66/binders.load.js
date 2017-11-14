montageDefine("3f77e66","binders",{dependencies:["./scope","./observers"],factory:function(n,e,r){function t(){return new Error("").stack.replace(/^.*\n.*\n/,"\n")}function i(n,e,r,i,o,u){return r(C(function(r){if(!o.isActive)try{o.isActive=!0,u&&console.log("SET",u.targetPath,"TO",r,"ON",n,"BECAUSE",u.sourcePath,t()),Array.isArray(n)&&e>>>0===e?n.set(e,r):n[e]=r}finally{o.isActive=!1}}),i)}function o(n,e){return function(r,t,i,o,u){return e(C(function(e){function c(n){return null==n?void 0:n.bindProperty?n.bindProperty(e,r,t,o,u):c.bindProperty(n,e,r,t,o,u)}if(null!=e)return c.bindProperty=F,n(C(c),i)}),i)}}function u(n,e,r,i,o,u){return r(C(function(r){if(!o.isActive)try{o.isActive=!0,u&&console.log("SET FOR KEY",e,"TO",r,"ON",n,"BECAUSE",u.sourcePath,t()),n.set(e,r)}finally{o.isActive=!1}}),i)}function c(n,e){return function(r,t,i,o,u){return n(C(function(n){function c(e){return null==e?void 0:c.bindGet(n,e,r,t,o,u)}if(n)return c.bindGet=U,e(C(c),i)}),i)}}function a(n,e){return function(r,i,o,u,c){return n(C(function(n){if(n)return e(C(function(e){function o(n){if(n)o.set.has(e)||(c&&console.log("ADD",e,"TO",c.targetPath,"BECAUSE",c.sourcePath,t()),o.set.add(e));else for(;o.set.has(e);)c&&console.log("REMOVE",e,"FROM",c.targetPath,"BECAUSE",c.sourcePath,t()),o.set["delete"](e)}if(null!=e)return o.set=n,r(C(o),i)}),o)}),o)}}function f(n,e){return function(r,i,o,u,c){return r(C(function(r){if(r){c&&console.log("BIND",c.targetPath,"TO",c.sourcePath,t());n(e,i,i,u,c);return function(){c&&console.log("UNBIND",c.targetPath,"FROM",c.sourcePath,t())}}}),o)}}function l(n,e,r){return function(t,i,o,u,c){return t(C(function(t){if(t)return n(C(function(n){function t(n,e,a){t.cancelEach(i.slice(a,a+e.length));for(var f,l=[],s=0,d=n.length;s<d;s++)f=o.nest(n[s]),l.push(t.bindCondition(r,f,f,u,c));i.swap(a,e.length,l)}if(n){var i=[];t.cancelEach=R,t.bindCondition=e;var a=b(n,t,o);return function(){R(i),a()}}}),o)}),i)}}function s(n,e,r,t,i,o){var u=D(t),c=S(r,u);return function(r,t,u,a,f){return r(C(function(r){if(null!=r){if(r){var t=n(i,L,u,a,f),l=e(o,L,u,a,f);return function(){t(),l()}}return n(c,u,u,a,f)}}),t)}}function d(n,e,r,t,i,o){var u=D(t),c=N(r,u);return function(r,t,u,a,f){return r(C(function(r){if(null!=r){if(r)return n(c,u,u,a,f);var t=n(i,w,u,a,f),l=e(o,w,u,a,f);return function(){t(),l()}}}),t)}}function g(n,e,r){return function(t,i,o,u,c){return n(C(function(n){if(null!=n)return n?e(t,i,o,u,c):r(t,i,o,u,c)}),i)}}function h(n){return function(e,r,t,i,o){return n(C(function(n){if(n)return e(C(function(e){null!=e&&(n.splice?n.splice(0,n.length,e):n.clear&&n.add&&(n.clear(),n.add(e)))}),r)}),t)}}function v(n){return function(e,r,t,i,o){return n(C(function(n){if(n)return e(C(function(e){null!=e&&e!==n.one()&&(n.splice?n.splice(0,n.length,e):n.clear&&n.add&&(n.clear(),n.add(e)))}),r)}),t)}}function E(n,e){return function(r,i,o,u,c){return n(C(function(n){return n?r(C(function(e){function r(e,r,i){if(!B(n))if(c&&console.log("SWAPPING",r,"FOR",e,"AT",i,"ON",c.targetPath,t()),n.swap)n.swap(i,r.length,e);else if(n.add&&(n.remove||n["delete"])){var o,u,a,f;for(o=0,u=e.length,a;a=e[o];o++)n.add(a);for(f=n.remove||n["delete"],o=0,u=r.length,a;a=r[o];o++)n.deleteMethod(a)}}if(e!==n){if(!e)return void n.clear();if(e.addRangeChangeListener)return e.addRangeChangeListener(r),r(Array.from(e),Array.from(n),0),function(){e.removeRangeChangeListener(r)}}}),i):e(y.makeLiteralObserver([]),i,o,u,c)}),o)}}function m(n){return function(e,r,i,o,u){return n(C(function(n){if(n)return e(C(function(e){function r(e,r){if(!o.isActive)try{o.isActive=!0,void 0===e?(u&&u&&console.log("DELETED",u.targetPath,"FOR KEY",r,"ON",n,"BECAUSE",u.sourcePath,t()),Array.isArray(n)?n.splice(r,1):n["delete"](r)):(u&&u&&console.log("SET",u.targetPath,"FOR KEY",r,"TO",e,"ON",n,"BECAUSE",u.sourcePath,t()),n.set(r,e))}finally{o.isActive=!1}}return e?(n.clear(),e.forEach(r),e.addMapChangeListener(r)):void n.clear()}),r)}),i)}}function p(n){return function(e,r,t,i,o){return n(C(function(n){if(n)return e(C(function(e){function r(e,r,t){if(!B(n)){var i=n.length-t-r.length;n.swap(i,r.length,e.reversed())}}return e?(e.addRangeChangeListener(r),r(e,n,0),function(){e.removeRangeChangeListener(r)}):void n.clear()}),r)}),t)}}function A(n){return function(e,r,t,i,o){return e(C(function(e){return e?Function.noop:n(T,r,t,i,o)}),t)}}function O(n){return function(e,r,t,i,o){if(t.parent)return n(e,r,t.parent,i,o)}}function P(n,e){return function(r,t,i,o,u){return n(C(function(n){if(null!=n)return e(r,t,i.nest(n),o,u)}),i)}}function B(n){return n.getRangeChangeDescriptor&&n.getRangeChangeDescriptor().isActive}var k=n("./scope"),y=n("./observers"),C=y.autoCancelPrevious,b=y.observeRangeChange,R=y.cancelEach,D=y.makeNotObserver,N=y.makeOrObserver,S=y.makeAndObserver,T=(y.observeValue,y.makeLiteralObserver()),L=new k((!0)),w=new k((!1));e.bindProperty=i;var F=i;e.makePropertyBinder=o,e.bindGet=u;var U=u;e.makeGetBinder=c,e.makeHasBinder=a,e.makeEqualityBinder=f,e.makeEveryBlockBinder=l,e.makeAndBinder=s,e.makeOrBinder=d,e.makeConditionalBinder=g,e.makeOnlyBinder=h,e.makeOneBinder=v,e.makeRangeContentBinder=E,e.makeMapContentBinder=m,e.makeReversedBinder=p,e.makeDefinedBinder=A,e.makeParentBinder=O,e.makeWithBinder=P}});