montageDefine("425d2e0","core/converter/converter",{dependencies:["../core","../core","../core"],factory:function(e,r,n){var o=e("../core").Montage,t="[object Number]",l=Object.prototype.toString,i=function(e){return l.call(e)===t};r.isNumber=i;var u=function(e){return e&&"undefined"!=typeof e};r.isDef=u;r.Validator=o.specialize({validate:{value:null}}),r.Converter=o.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:e("../core")._blueprintModuleIdDescriptor,blueprint:e("../core")._blueprintDescriptor})}});