montageDefine("425d2e0","ui/segmented-bar.reel/segmented-bar",{dependencies:["ui/base/abstract-button","core/range-controller","core/tree-controller"],factory:function(t,e,n){"use strict";var i=t("ui/base/abstract-button").AbstractButton,l=t("core/range-controller").RangeController,o=t("core/tree-controller").TreeController;e.SegmentedBar=i.specialize({_data:{value:null},data:{get:function(){return this._repetitionDataController.content},set:function(t){t!==this._data&&(this._data=t,t&&(this._dataController=null,this._repetitionDataController=new l(t)),this.needsDraw=!0)}},_dataController:{value:null},dataController:{get:function(){return this._dataController},set:function(t){t!==this._dataController&&(this._data=null,this._dataController=t,t instanceof o?(this._repetitionDataController=new l,this.defineBinding("_repetitionDataController.content",{"<-":"iterations.filter{this.children.length == 0}",source:t})):this._repetitionDataController=t,this.needsDraw=!0)}},_repetitionDataController:{value:null},_orientation:{value:null},orientation:{get:function(){return this._orientation},set:function(t){this._orientation!==t&&(this._orientation=t,this.needsDraw=!0)}},_setComponentDataFromEvent:{value:function(t){var e="montage-Segment"===t.targetElement.className?t.targetElement.component:t.targetElement.parentElement.component;this.detail.get("label")===e.label&&this.detail.get("length")===e.length||this.detail.set("data",{label:e.label,length:e.length})}},handlePress:{value:function(t){this._setComponentDataFromEvent(t),i.prototype.handlePress.call(this)}},handleKeyup:{value:function(t){this._setComponentDataFromEvent(t),i.prototype.handleKeyup.call(this)}},handleLongPress:{value:function(t){this._setComponentDataFromEvent(t),i.prototype.handleLongPress.call(this)}},draw:{value:function(){"vertical"===this.orientation&&"column"!==this.templateObjects.repetition.element.style.flexDirection?(this.templateObjects.repetition.element.style.webkitBoxOrient="vertical",this.templateObjects.repetition.element.style.webkitFlexDirection="column",this.templateObjects.repetition.element.style.msFlexDirection="column",this.templateObjects.repetition.element.style.flexDirection="column"):"horizontal"===this.orientation&&"row"!==this.templateObjects.repetition.element.style.flexDirection&&this.templateObjects.repetition.element.style.flexDirection&&(this.templateObjects.repetition.element.style.webkitBoxOrient="horizontal",this.templateObjects.repetition.element.style.webkitFlexDirection="row",this.templateObjects.repetition.element.style.msFlexDirection="row",this.templateObjects.repetition.element.style.flexDirection="row")}},exitDocument:{value:function(){this.cancelBindings(),this.templateObjects.repetition.getBinding("contentController")&&this.templateObjects.repetition.cancelBinding("contentController")}}})}});