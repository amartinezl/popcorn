montageDefine("425d2e0","core/serialization/bindings",{dependencies:["frb","frb/stringify","frb/expand","frb/scope","../serialization/serializer/montage-serializer","../serialization/deserializer/montage-deserializer"],factory:function(e,r,i){var n=e("frb"),t=e("frb/stringify"),o=e("frb/expand"),a=e("frb/scope"),s=e("../serialization/serializer/montage-serializer").MontageSerializer,c=e("../serialization/deserializer/montage-deserializer").MontageDeserializer,b="boundObject",d="<-",l="<->";s.defineSerializationUnit("bindings",function(e,r){for(var i,s,c=n.getBindings(r),b={},f=c.keys();s=f.next().value;){var g=c.get(s),u={};if((!("serializable"in g)||g.serializable)&&g.sourceSyntax){var z=g.sourcePath,p=g.sourceSyntax;if(g.source&&g.source!==r){var v=e.getObjectLabel(g.source),y=new a({type:"component",label:v});y.components=e,p=o(p,y)}var y=new a;y.components=e,z=t(p,y),g.twoWay?u[l]=z:u[d]=z,g.converter?u.converter=g.converter:(u.convert=g.convert,u.revert=g.revert),g.trace&&(u.trace=!0),b[s]=u,i=!0}}return i?b:void 0}),c.defineDeserializationUnit("bindings",function(e,r,i){var t,o,a={components:e};for(t in i){if(o=i[t],"object"!=typeof o)throw new Error("Binding descriptor must be an object, not "+typeof o);b in o&&(o.source=e.getObjectByLabel(o.boundObject),o.oneway?o[d]=o.boundPropertyPath:o[l]=o.boundPropertyPath,delete o.boundObject,delete o.boundObjectPropertyPath,delete o.oneway),n.defineBinding(r,t,o,a)}})}});