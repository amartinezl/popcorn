montageDefine("333c844","js/release/join",{dependencies:["./util"],factory:function(e,n,r){"use strict";r.exports=function(n,r,t,o,i,a){var s,c=e("./util"),l=c.canEvaluate,u=c.tryCatch,p=c.errorObj;if(l){for(var h=function(e){return new Function("value","holder","                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g,e))},f=function(e){return new Function("promise","holder","                           \n            'use strict';                                                    \n            holder.pIndex = promise;                                         \n            ".replace(/Index/g,e))},d=function(e){for(var r=new Array(e),t=0;t<r.length;++t)r[t]="this.p"+(t+1);var o=r.join(" = ")+" = null;",a="var promise;\n"+r.map(function(e){return"                                                         \n                promise = "+e+";                                      \n                if (promise instanceof Promise) {                            \n                    promise.cancel();                                        \n                }                                                            \n            "}).join("\n"),s=r.join(", "),c="Holder$"+e,l="return function(tryCatch, errorObj, Promise, async) {    \n            'use strict';                                                    \n            function [TheName](fn) {                                         \n                [TheProperties]                                              \n                this.fn = fn;                                                \n                this.asyncNeeded = true;                                     \n                this.now = 0;                                                \n            }                                                                \n                                                                             \n            [TheName].prototype._callFunction = function(promise) {          \n                promise._pushContext();                                      \n                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n                promise._popContext();                                       \n                if (ret === errorObj) {                                      \n                    promise._rejectCallback(ret.e, false);                   \n                } else {                                                     \n                    promise._resolveCallback(ret);                           \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype.checkFulfillment = function(promise) {       \n                var now = ++this.now;                                        \n                if (now === [TheTotal]) {                                    \n                    if (this.asyncNeeded) {                                  \n                        async.invoke(this._callFunction, this, promise);     \n                    } else {                                                 \n                        this._callFunction(promise);                         \n                    }                                                        \n                                                                             \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype._resultCancelled = function() {              \n                [CancellationCode]                                           \n            };                                                               \n                                                                             \n            return [TheName];                                                \n        }(tryCatch, errorObj, Promise, async);                               \n        ";return l=l.replace(/\[TheName\]/g,c).replace(/\[TheTotal\]/g,e).replace(/\[ThePassedArguments\]/g,s).replace(/\[TheProperties\]/g,o).replace(/\[CancellationCode\]/g,a),new Function("tryCatch","errorObj","Promise","async",l)(u,p,n,i)},m=[],v=[],y=[],_=0;_<8;++_)m.push(d(_+1)),v.push(h(_+1)),y.push(f(_+1));s=function(e){this._reject(e)}}n.join=function(){var e,i=arguments.length-1;if(i>0&&"function"==typeof arguments[i]&&(e=arguments[i],i<=8&&l)){var u=new n(o);u._captureStackTrace();for(var p=m[i-1],h=new p(e),f=v,d=0;d<i;++d){var _=t(arguments[d],u);if(_ instanceof n){_=_._target();var C=_._bitField;0===(50397184&C)?(_._then(f[d],s,void 0,u,h),y[d](_,h),h.asyncNeeded=!1):0!==(33554432&C)?f[d].call(u,_._value(),h):0!==(16777216&C)?u._reject(_._reason()):u._cancel()}else f[d].call(u,_,h)}if(!u._isFateSealed()){if(h.asyncNeeded){var T=a();null!==T&&(h.fn=c.domainBind(T,h.fn))}u._setAsyncGuaranteed(),u._setOnCancel(h)}return u}for(var g=arguments.length,j=new Array(g),w=0;w<g;++w)j[w]=arguments[w];e&&j.pop();var u=new r(j).promise();return void 0!==e?u.spread(e):u}}}});