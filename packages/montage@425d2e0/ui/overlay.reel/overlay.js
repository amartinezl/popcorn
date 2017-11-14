var Component=require("../component").Component,KeyComposer=require("../../composer/key-composer").KeyComposer,PressComposer=require("../../composer/press-composer").PressComposer,defaultEventManager=require("../../core/event/event-manager").defaultEventManager,CLASS_PREFIX="montage-Overlay",VISIBLE_CLASS_NAME=CLASS_PREFIX+"--visible";exports.Overlay=Component.specialize({__pressComposer:{value:null},_pressComposer:{get:function(){return this.__pressComposer||(this.__pressComposer=new PressComposer,this.__pressComposer.delegate=this,this.addComposerForElement(this._pressComposer,this.element.ownerDocument)),this.__pressComposer}},__keyComposer:{value:null},_keyComposer:{get:function(){return this.__keyComposer||(this.__keyComposer=new KeyComposer,this.__keyComposer.keys="escape",this.__keyComposer.identifier="escape",this.addComposerForElement(this.__keyComposer,this.element.ownerDocument.defaultView)),this.__keyComposer}},_anchor:{value:null},anchor:{set:function(e){this._anchor=e,this.needsDraw=!0},get:function(){return this._anchor}},_position:{value:null},position:{set:function(e){this._position=e,this.needsDraw=!0},get:function(){return this._position}},_drawPosition:{value:null},_isShown:{value:!1},isShown:{get:function(){return this._isShown}},_resizeHandlerTimeout:{value:null},_previousActiveTarget:{value:null},delegate:{value:null},_dismissOnExternalInteraction:{value:!0},dismissOnExternalInteraction:{set:function(e){e!==this._dismissOnExternalInteraction&&(this._dismissOnExternalInteraction=e,e?this._pressComposer.addEventListener("pressStart",this,!1):this._pressComposer.removeEventListener("pressStart",this,!1))},get:function(){return this._dismissOnExternalInteraction}},enterDocument:{value:function(e){e&&(this.element.ownerDocument.body.appendChild(this.element),this.attachToParentComponent())}},show:{value:function(){if(!this._isShown){if(this.isModal&&(this._previousActiveTarget=defaultEventManager.activeTarget,defaultEventManager.activeTarget=this,defaultEventManager.activeTarget!==this))return void console.warn("Overlay "+this.identifier+" can't become the active target because ",defaultEventManager.activeTarget," didn't surrender it.");this.attachToParentComponent(),this.classList.add(VISIBLE_CLASS_NAME),this.loadComposer(this._pressComposer),this.loadComposer(this._keyComposer),this._isShown=!0,this.needsDraw=!0,this._keyComposer.addEventListener("keyPress",this,!1),this.element.ownerDocument.defaultView.addEventListener("resize",this),this._dismissOnExternalInteraction&&this._pressComposer.addEventListener("pressStart",this,!1)}}},hide:{value:function(){this._isShown&&(this.classList.remove(VISIBLE_CLASS_NAME),this.unloadComposer(this._pressComposer),this.unloadComposer(this._keyComposer),this._isShown=!1,this.needsDraw=!0,this.isModal&&(defaultEventManager.activeTarget=this._previousActiveTarget),this._keyComposer.removeEventListener("keyPress",this,!1),this.element.ownerDocument.defaultView.removeEventListener("resize",this),this._dismissOnExternalInteraction&&this._pressComposer.removeEventListener("pressStart",this,!1))}},isModal:{value:!0},shouldComposerSurrenderPointerToComponent:{value:function(e,t,s){return s&&s.element&&!this.element.contains(s.element)&&this.hide(),!0}},surrendersActiveTarget:{value:function(e){var t,s=!(this.isModal&&this.isShown);return!s&&e&&e.element&&(s=this.element.contains(e.element)),t=this.callDelegateMethod("overlayShouldDismissOnSurrenderActiveTarget",this,e,s),void 0!==t?t:s}},handleResize:{value:function(){this.isShown&&(this.needsDraw=!0)}},handlePressStart:{value:function(e){this.element.contains(e.targetElement)||this.dismissOverlay(e)}},handleKeyPress:{value:function(e){"escape"===e.identifier&&this.dismissOverlay(e)}},dismissOverlay:{value:function(e){var t=!1;return this._isShown&&(t=this.callDelegateMethod("shouldDismissOverlay",this,e.targetElement,e.type),(void 0===t||t)&&(this.hide(),this._dispatchDismissEvent())),t}},willDraw:{value:function(){this._isShown?this._calculatePosition():this.callDelegateMethod("didHideOverlay",this)}},draw:{value:function(){if(this._isShown){var e=this._drawPosition;this.element.style.top=e.top+"px",this.element.style.left=e.left+"px",this.element.style.visibility="visible",this.callDelegateMethod("didShowOverlay",this)}else this.element.style.visibility="hidden"}},didDraw:{value:function(){this._isShown||this.detachFromParentComponent()}},_calculatePosition:{value:function(){var e,t;e=this.position?this.position:this.anchor?this._calculateAnchorPosition():this._calculateCenteredPosition(),t=this.callDelegateMethod("willPositionOverlay",this,e),t&&(e=t),this._drawPosition=e}},_calculateAnchorPosition:{value:function(){var e,t=this.anchor,s=this.element.offsetWidth,i=t.getBoundingClientRect(),n=t.offsetHeight||0,o=t.offsetWidth||0;return e={top:i.top+n,left:i.left+o/2-s/2},e.left<0&&(e.left=0),e}},_calculateCenteredPosition:{value:function(){var e=this.element.ownerDocument.defaultView,t=e.innerHeight,s=e.innerWidth,i=this.element.offsetHeight,n=this.element.offsetWidth;return{top:t/2-i/2,left:s/2-n/2}}},_dispatchDismissEvent:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("dismiss",!0,!0,null),this.dispatchEvent(e)}}});