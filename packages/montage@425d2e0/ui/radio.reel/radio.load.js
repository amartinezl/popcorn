montageDefine("425d2e0","ui/radio.reel/radio",{dependencies:["ui/check-control","../../composer/press-composer","../../composer/key-composer"],factory:function(e,o,t){var r=e("ui/check-control").CheckControl;e("../../composer/press-composer").PressComposer;KeyComposer=e("../../composer/key-composer").KeyComposer;o.Radio=r.specialize({drawsFocusOnPointerActivation:{value:!0},hasTemplate:{value:!1},enterDocument:{value:function(e){e&&this.element.setAttribute("role","radio")}},prepareForActivationEvents:{value:function(){this["super"](),this._keyComposer=new KeyComposer,this._keyComposer.component=this,this._keyComposer.keys="space",this.addComposer(this._keyComposer),this._keyComposer.addEventListener("keyPress",this,!1),this._keyComposer.addEventListener("keyRelease",this,!1)}},handleKeyPress:{value:function(){this.active=!0}},handleKeyRelease:{value:function(){this.active=!1,this.check()}},_keyComposer:{value:null},_radioButtonController:{value:null},radioButtonController:{set:function(e){this._radioButtonController&&this._radioButtonController.unregisterRadioButton(this),this._radioButtonController=e,e&&e.registerRadioButton(this)},get:function(){return this._radioButtonController}}})}});