montageDefine("425d2e0","core/serialization/serializer/montage-labeler",{dependencies:["../../core"],factory:function(e,t,a){var l=e("../../core").Montage;t.MontageLabeler=l.specialize({_labelRegexp:{value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},_labels:{value:null},_objectsLabels:{value:null},_objects:{value:null},_INITIAL_LABEL_NUMBER:{value:2},_baseNamesIndex:{value:null},_userDefinedLabels:{value:null},constructor:{value:function(){this._labels=Object.create(null),this._objectsLabels=Object.create(null),this._objects=Object.create(null),this._baseNamesIndex=Object.create(null),this._userDefinedLabels=Object.create(null)}},getTemplatePropertyLabel:{value:function(e){var t=this._getObjectLabel(e);if(":"!==t[0])throw new Error("Template property's labels need to start with a colon (:), (\""+t+'").');return t}},_getObjectLabel:{value:function(e){var t,a=Object.hash(e);return a in this._objectsLabels?t=this._objectsLabels[a]:(t=this.generateObjectLabel(e),this.setObjectLabel(e,t)),t}},getObjectLabel:{value:function(e){var t=this._getObjectLabel(e);if(":"===t[0])throw new Error('Labels starting with colon (:) can only be used for template properties, ("'+t+'").');return t}},getObjectName:{value:function(e){var t,a=e.identifier;return a&&this._labelRegexp.test(a)?t=e.identifier:e&&"object"==typeof e&&"getInfoForObject"in e||"getInfoForObject"in e.constructor?(t=l.getInfoForObject(e).objectName,t=t.toLowerCase()):t=Array.isArray(e)?"array":RegExp.isRegExp(e)?"regexp":typeof e,t}},initWithObjects:{value:function(e){for(var t in e)this.setObjectLabel(e[t],t),this._userDefinedLabels[t]=!0}},cleanup:{value:function(){this._labels=null,this._objectsLabels=null,this._objects=null,this._baseNamesIndex=null,this._userDefinedLabels=null}},generateLabel:{value:function(e){var t,a=this._baseNamesIndex[e];do a?(t=e+a,this._baseNamesIndex[e]=a+=1):(t=e,this._baseNamesIndex[e]=a=this._INITIAL_LABEL_NUMBER);while(t in this._labels);return t}},getLabelBaseName:{value:function(e){return e.replace(/\d*$/,"")}},addLabel:{value:function(e){this._labels[e]=!0}},addLabels:{value:function(e){for(var t=0,a=e.length;t<a;t++)this.addLabel(e[t])}},isLabelDefined:{value:function(e){return e in this._labels}},isUserDefinedLabel:{value:function(e){return e in this._userDefinedLabels}},generateObjectLabel:{value:function(e){var t=this.getObjectName(e);return this.generateLabel(t)}},setObjectLabel:{value:function(e,t){if("undefined"!=typeof e){var a=Object.hash(e);this.addLabel(t),this._objectsLabels[a]=t,this._objects[t]=e}}},getObjectByLabel:{value:function(e){return this._objects[e]}}})}});