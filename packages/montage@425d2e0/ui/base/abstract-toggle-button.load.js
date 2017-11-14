montageDefine("425d2e0","ui/base/abstract-toggle-button",{dependencies:["./abstract-control","../../composer/press-composer","../../composer/key-composer"],factory:function(e,s,t){var n=e("./abstract-control").AbstractControl,i=e("../../composer/press-composer").PressComposer,o=e("../../composer/key-composer").KeyComposer,r=s.AbstractToggleButton=n.specialize({constructor:{value:function(){if(this.constructor===r)throw new Error("AbstractToggleButton cannot be instantiated.");this._pressComposer=new i,this._pressComposer.defineBinding("longPressThreshold ",{"<-":"holdThreshold",source:this}),this.addComposer(this._pressComposer),this._keyComposer=new o,this._keyComposer.component=this,this._keyComposer.keys="space",this.addComposer(this._keyComposer),this.classList.add("montage-ToggleButton"),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"},"classList.has('montage-ToggleButton--pressed')":{"<-":"pressed"}})}},enabled:{value:!0},acceptsActiveTarget:{value:function(){return!0}},_labelNode:{value:null},_pressedLabel:{value:"on"},pressedLabel:{get:function(){return this._pressedLabel},set:function(e){this._pressedLabel=""+e,this.needsDraw=!0}},_unpressedLabel:{value:"off"},unpressedLabel:{get:function(){return this._unpressedLabel},set:function(e){this._unpressedLabel=""+e,this.needsDraw=!0}},holdThreshold:{value:1e3},_pressComposer:{value:null},_keyComposer:{value:null},_active:{value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},_pressed:{value:!1},pressed:{set:function(e){e!==this._pressed&&(this._pressed=e,this.needsDraw=!0)},get:function(){return this._pressed}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1),this._keyComposer.addEventListener("keyPress",this,!1)}},addEventListener:{value:function(e,s,t){n.prototype.addEventListener.call(this,e,s,t),"longAction"===e&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(e){this.active=!1,this.enabled&&(this.pressed=!this.pressed,this.dispatchActionEvent(),document.removeEventListener("touchmove",this,!1))}},handleKeyPress:{value:function(e){this.active=!1,this.enabled&&(this.pressed=!this.pressed,this.dispatchActionEvent())}},handleLongPress:{value:function(e){this._pressComposer.cancelPress();var s=document.createEvent("CustomEvent");s.initCustomEvent("longAction",!0,!0,null),this.dispatchEvent(s)}},handlePressCancel:{value:function(e){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},_toggle:{value:function(){this.pressed=!this.pressed}},isInputElement:{value:!1},enterDocument:{value:function(e){e&&(this.isInputElement="INPUT"===this.originalElement.tagName,this.isInputElement||(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild),this.element.setAttribute("role","button"))}},_drawLabel:{enumerable:!1,value:function(e){this.isInputElement?this._element.setAttribute("value",e):this._labelNode&&(this._labelNode.data=e)}},draw:{value:function(){this.pressed?this._drawLabel(this.pressedLabel):this._drawLabel(this.unpressedLabel),this.element.setAttribute("aria-pressed",this.pressed)}}})}});