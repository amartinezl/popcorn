montageDefine("425d2e0","window-loader/montage-window",{dependencies:["../core/core"],factory:function(t,e,i){var n=t("../core/core").Montage;e.MontageWindow=n.specialize({_application:{value:null},application:{get:function(){return this._application},set:function(t){null===this._application&&(this._application=t,this.focused&&this._setFocusedWindow(this))}},_window:{value:null},window:{get:function(){return this._window},set:function(t){if(null===this._window){var e=t.document.body;this._window=t,t.addEventListener("beforeunload",this,!0),t.addEventListener("focus",this,!0),t.addEventListener("mousedown",this,!0),null===e.getAttribute("tabIndex")&&(e.setAttribute("tabIndex",-1),e.focus())}}},document:{get:function(){return this._window.document}},_component:{value:null},component:{get:function(){return this._component},set:function(t){null===this._component&&(this._component=t)}},title:{get:function(){return this.document.title},set:function(t){this.document.title=t}},focused:{value:!1},focus:{value:function(){this._window&&this._window.focus()}},_setFocusedWindow:{value:function(t){var e,i,n,o=this.application;if(o._multipleWindow){e=o.windows;for(n in e)i=e[n],i.window===t?i.focused!==!0&&(i.focused=!0,"z-order"==o.windowsSortOrder?(e.splice(n,1),e.unshift(i)):"reverse-z-order"==o.windowsSortOrder&&(e.splice(n,1),e.push(i))):i.focused=!1}else this.focused=!0}},closed:{get:function(){return!!this._window&&this._window.closed}},close:{value:function(){this._window&&this._window.close()}},resizeTo:{value:function(t,e){this._window&&this._window.resizeTo(t,e)}},moveTo:{value:function(t,e){this._window&&this._window.moveTo(t,e)}},captureFocus:{value:function(t){var e=this.application;if(!this.application)return void(this.focused=!0);if(e.parentApplication)e.mainApplication.window.captureFocus(t);else{var i=(t.target.ownerDocument?t.target.ownerDocument.defaultView:null)||t.target.defaultView||t.target;this._setFocusedWindow(i)}}},captureMousedown:{value:function(t){this.captureFocus(t)}},captureBeforeunload:{value:function(t){var e,i=this.application,n=i.windows,o=i.attachedWindows;i.attachedWindows=[];for(var e in o)o[e].close();i.parentApplication&&(o=i.parentApplication.attachedWindows,e=o.indexOf(this),e!==-1&&o.splice(e,1),e=n.indexOf(this),e!==-1&&n.splice(e,1),this.window.removeEventListener("beforeunload",this,!0),this.close())}}})}});