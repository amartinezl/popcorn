montageDefine("425d2e0","ui/base/abstract-progress-bar",{dependencies:["./abstract-control"],factory:function(t,r,a){var e=t("./abstract-control").AbstractControl,n=r.AbstractProgressBar=e.specialize({constructor:{value:function o(){if(this.constructor===o)throw new Error("AbstractProgressBar cannot be instantiated.")}}});n.addAttributes({value:{dataType:"number"},max:{dataType:"number"}})}});