montageDefine("425d2e0","ui/checkbox.reel/checkbox",{dependencies:["ui/check-control"],factory:function(e,c,t){var o=e("ui/check-control").CheckControl;c.Checkbox=o.specialize({enterDocument:{value:function(e){this["super"](e),e&&this.element.setAttribute("role","checkbox")}},hasTemplate:{value:!1}})}});