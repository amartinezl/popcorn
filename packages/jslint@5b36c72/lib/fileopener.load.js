montageDefine("5b36c72","lib/fileopener",{dependencies:["util","./stream","fs"],factory:function(e,t,i){"use strict";function r(){s.call(this,{objectMode:!0})}function o(e,t,i){var r=this;f.readFile(e,"utf8",function(t,o){return t?void r.emit("error",t):(r.push({file:e,body:o}),void i())})}var n=e("util"),s=e("./stream").Transform,f=e("fs");n.inherits(r,s),r.prototype._transform=o,i.exports=r}});