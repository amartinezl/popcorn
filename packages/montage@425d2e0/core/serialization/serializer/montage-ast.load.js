montageDefine("425d2e0","core/serialization/serializer/montage-ast",{dependencies:["../../core"],factory:function(e,t,l){var i=e("../../core").Montage,a=(t.Root=i.specialize({constructor:{value:function(){this.object=Object.create(null)}},object:{value:null},setProperty:{value:function(e,t){null!=e&&(this.object[e]=t)}},getProperty:{value:function(e){return this.object[e]}},clearProperty:{value:function(e){delete this.object[e]}},hasProperty:{value:function(e){return e in this.object}},serialize:{value:function(e){return JSON.stringify(this,null,e)}},toJSON:{value:function(){var e,t=Object.create(null);for(var l in this.object)e=this.object[l],e.toJSON?t[l]=e.toJSON(l,1):t[l]=e;return t}}}),t.Value=i.specialize({root:{value:null},label:{value:null},value:{value:null},constructor:{value:function(e,t){this.root=e,this.value=t}},setLabel:{value:function(e){this.label&&this.root.clearProperty(this.label),this.label=e,this.root.setProperty(e,this)}},getLabel:{value:function(){return this.label}},clearLabel:{value:function(){this.root.clearProperty(this.label),this.label=null}},_getSerializationValue:{value:function(){return this.value}},toJSON:{value:function(e,t){var l=this._getSerializationValue();return 1===t?{value:l}:l}}})),u=(t.ElementReference=a.specialize({initWithRootAndId:{value:function(e,t){return a.call(this,e,t),this}},_getSerializationValue:{value:function(){return{"#":this.value}}}}),t.ModuleReference=a.specialize({initWithRootAndModuleId:{value:function(e,t){return a.call(this,e,t),this}},_getSerializationValue:{value:function(){return{"%":this.value}}}}),t.ObjectReference=a.specialize({constructor:{value:function(e,t){a.call(this,e,t)}},_getSerializationValue:{value:function(){return{"@":this.value}}}})),n=(t.CustomObject=a.specialize({constructor:{value:function(e){a.call(this,e,Object.create(null))}},setProperty:{value:function(e,t){null!=e&&(this.value[e]=t)}},getProperty:{value:function(e){return this.value[e]}},clearProperty:{value:function(e){delete this.value[e]}},toJSON:{value:function(e,t){var l,i=this._getSerializationValue();return 1===t?i:(l=new u(this.root,this.label),l.toJSON())}}}),t.ReferenceableValue=a.specialize({constructor:{value:function(e,t){a.call(this,e,t)}},toJSON:{value:function(e,t){var l,i=this._getSerializationValue();return 1===t?{value:i}:this.label?(l=new u(this.root,this.label),l.toJSON()):i}}}));t.ObjectLiteral=n.specialize({constructor:{value:function(e,t){a.call(this,e,t)}},setProperty:{value:function(e,t){null!=e&&(this.value[e]=t)}},getProperty:{value:function(e){return this.value[e]}},clearProperty:{value:function(e){delete this.value[e]}},getPropertyNames:{value:function(){return Object.keys(this.value)}}}),t.RegExpObject=n.specialize({constructor:{value:function(e,t){a.call(this,e,t)}},_getSerializationValue:{value:function(){var e=this.value;return{"/":{source:e.source,flags:(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")}}}}})}});