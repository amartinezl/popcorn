montageDefine("3f77e66","bindings",{dependencies:["collections/map","./bind","./compute","./observe","./stringify"],factory:function(n,e,t){function i(n,e,t){if(e)for(var i in e)r(n,i,e[i],t);return n}function r(n,t,i,o){o=o||r.empty;var c,a,s=r.getBindings(n);if(s.has(t))throw new Error("Can't bind to already bound target, "+JSON.stringify(t));return m in i||p in i||b in i?(s.set(t,i),i.target=n,(c=i.parameters||o.parameters)&&(i.parameters=c),(a=i.document||o.document)&&(i.document=a),i.components=i.components||o.components,i.cancel=b in i?r.compute(n,t,i):r.bind(n,t,i),e.count++):(l in i||y in i||v in i||(i.writable=!0),w in i||(i.configurable=!0),B in i||(i.enumerable=!0),Object.defineProperty(n,t,i)),n}function o(n){var e;return f.get(n)||f.set(n,e=new d)&&e}function c(n,e){var t=o(n);return t.get(e)}function a(n){for(var e=o(n),t=e.keys();name=t.next().value;)s(n,name,e)}function s(n,t,i){if(!i&&(i=o(n),!i.has(t)))throw new Error("Can't cancel non-existent binding to "+JSON.stringify(t));var r=i.get(t);r&&r.cancel&&(r.cancel(),i["delete"](t),e.count--,i.size<1&&f["delete"](n))}var d=n("collections/map"),g=n("./bind"),u=n("./compute"),f=(n("./observe"),n("./stringify"),new d),m=(Object.prototype.hasOwnProperty,"<-"),p="<->",b="compute",l="get",y="set",v="writable",w="configurable",B="enumerable";e.count=0,e.bindings=f,e.defineBindings=i,e.defineBinding=r,r.empty=Object.empty,r.getBindings=o,r.compute=u,r.bind=g,e.getBindings=o,e.getBinding=c,e.cancelBindings=a,e.cancelBinding=s}});