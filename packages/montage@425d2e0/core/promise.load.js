montageDefine("425d2e0","core/promise",{dependencies:["bluebird"],factory:function(e,n,t){Promise=e("bluebird"),Promise.is=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},Promise.prototype.hasOwnProperty("finally")===!1&&(Promise.prototype["finally"]=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})})}),n.Promise=Promise}});