montageDefine("04ddae7","lib/_stream_transform",{dependencies:["./_stream_duplex","core-util-is","inherits"],factory:function(r,t,e){function n(r,t){this.afterTransform=function(r,e){return i(t,r,e)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function i(r,t,e){var n=r._transformState;n.transforming=!1;var i=n.writecb;if(!i)return r.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!==e&&void 0!==e&&r.push(e),i&&i(t);var a=r._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&r._read(a.highWaterMark)}function a(r){if(!(this instanceof a))return new a(r);s.call(this,r);var t=(this._transformState=new n(r,this),this);this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(r){o(t,r)}):o(t)})}function o(r,t){if(t)return r.emit("error",t);var e=r._writableState,n=(r._readableState,r._transformState);if(e.length)throw new Error("calling transform done when ws.length != 0");if(n.transforming)throw new Error("calling transform done when still transforming");return r.push(null)}e.exports=a;var s=r("./_stream_duplex"),h=r("core-util-is");h.inherits=r("inherits"),h.inherits(a,s),a.prototype.push=function(r,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,r,t)},a.prototype._transform=function(r,t,e){throw new Error("not implemented")},a.prototype._write=function(r,t,e){var n=this._transformState;if(n.writecb=e,n.writechunk=r,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(r){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}}});