montageDefine("3f77e66","evaluate",{dependencies:["./parse","./compile-evaluator","./scope"],factory:function(e,a,o){function n(e,a,o,n,c){var s;s="string"==typeof e?r(e):e;var i=t(s),u=new p(a);return u.parameters=o,u.document=n,u.components=c,i(u)}var r=e("./parse"),t=e("./compile-evaluator"),p=e("./scope");o.exports=n}});