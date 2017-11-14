montageDefine("425d2e0","ui/tree-list.reel/tree-list",{dependencies:["ui/component","core/tree-controller","collections/weak-map"],factory:function(t,i,e){var o=t("ui/component").Component,n=t("core/tree-controller").TreeNode,s=t("collections/weak-map");i.TreeList=o.specialize({_controller:{value:null},controller:{get:function(){return this._controller},set:function(t){this._controller!==t&&(this._controller=t,this._heights=new s,this._controller&&(this._controller.delegate=this))}},_rowTopMargins:{get:function(){return this.__rowTopMargins||(this.__rowTopMargins=[]),this.__rowTopMargins}},_totalHeight:{value:0},_isRootExpanded:{value:!1},isRootExpanded:{get:function(){return this._isRootExpanded},set:function(t){this._isRootExpanded!==t&&(this._isRootExpanded=t,this._controller&&this._controller.expandNode(this._controller.data))}},_isRootVisible:{value:!0},isRootVisible:{get:function(){return this._isRootVisible},set:function(t){this._isRootVisible!==t&&(this._isRootVisible=t,this.handleTreeChange())}},_data:{value:null},handleTreeChange:{value:function(){var t,i;if(this._controller&&this._controller.data!==this._data&&(this._data=this._controller.data,!this.isRootExpanded&&this.isRootVisible||this._controller.expandNode(this._controller.data)),this._heights=new s,this.repetition&&(this.repetitionController.content=this.getIterations()),this.controller&&this.controller.data&&this.controller.data.children&&"function"==typeof this.rowHeight)for(this._totalHeight=0,this._rowTopMargins.length=0,this._rowTopMargins.push(0),t=0,i=this.controller.data.children.length;t<i;t+=1)this._totalHeight+=this.rowHeight(this.controller.data.children[t]),this._rowTopMargins.push(this._totalHeight)}},_visibilityRange:{value:[0,0]},visibilityRange:{get:function(){return this._visibilityRange},set:function(t){this._visibilityRange=t,this.repetitionController.content=this.getIterations()}},_getNodeHeight:{value:function(t){var i,e;if(this._controller)return i=this._controller._expansionMap.get(t),i?(e=this._heights.get(t),e||(e=this._computeExpandedNodeHeight(t),this._heights.set(t,e)),e):1}},_computeExpandedNodeHeight:{value:function(t){if(this._controller){var i,e,o=this._controller.childrenFromNode(t),n=1;if(o)for(i=o.length,e=0;e<i;e++)n+=this._getNodeHeight(o[e]);return n}}},_addIterations:{value:function(t,i,e,o,s){var r,h,l,a,d;if(t&&(a=new n(t,this._controller),a.height=this._getNodeHeight(t),a.parent=s,a.row=e,this.isRootVisible||t!==this._controller.data?(a.depth=o,i.push(a),e++):(i.push(a),a.depth=o,o--),this._controller.isNodeExpanded(t)&&(h=this._controller.childrenFromNode(t))))for(r=h.length,d=0;d<r;d++)this._isVisible(e,l=this._getNodeHeight(h[d]))?e=this._addIterations(h[d],i,e,o+1,a):e+=l;return e}},_isVisible:{value:function(t,i){var e=t+i;return t<this._visibilityRange[1]&&e>this._visibilityRange[0]}},getIterations:{value:function(){var t=[];return this._controller.data&&this._visibilityRange[1]>this._visibilityRange[0]&&this._isVisible(0,this._getNodeHeight(this._controller.data))&&this._addIterations(this._controller.data,t,0,0),t}},templateDidLoad:{value:function(){var t=this;this.repetition.willDraw=function(){t.needsDraw=!0}}},enterDocument:{value:function(t){t&&(window.addEventListener("resize",this,!1),this._element.addEventListener("scroll",this,!1)),this.handleScroll(),this.handleTreeChange()}},handleResize:{value:function(){var t,i,e,o;if("function"==typeof this.rowHeight){for(o=0,i=this._element.scrollTop;this._rowTopMargins[o+1]<i;)o++;for(t=o,i=this._rowTopMargins[t]+window.innerHeight;this._rowTopMargins[o]<i;)o++;e=o}else t=this._element.scrollTop/this._rowHeight,i=window.innerHeight/this._rowHeight,e=t+i;this.visibilityRange=[t,e]}},_rowHeight:{value:40},rowHeight:{get:function(){return this._rowHeight},set:function(t){this._rowHeight!==t&&(this._rowHeight=t,this.needsDraw=!0,this.repetitionController&&(this.handleTreeChange(),this.handleResize()))}},_indentationWidth:{value:30},indentationWidth:{get:function(){return this._indentationWidth},set:function(t){this._indentationWidth!==t&&(this._indentationWidth=t,this.needsDraw=!0)}},handleScroll:{value:function(){this.handleResize()}},draw:{value:function(){var t,i,e,o,n;for(o=0,n=this.repetition._drawnIterations.length;o<n;o++)t=this.repetition._drawnIterations[o],i=t.cachedFirstElement||t.firstElement,"function"==typeof this.rowHeight?this.isRootVisible||t.object.data!==this.controller.data?(e=this._rowTopMargins[t.object.row+1]-this._rowTopMargins[t.object.row],i.style.height=e+"px",i.style.marginTop=this._rowTopMargins[t.object.row]+"px",i.style.visibility="visible"):(e=0,i.style.marginTop=0,i.style.height=this._totalHeight+"px",i.style.visibility="hidden"):(i.style.marginTop=this._rowHeight*t.object.row+"px",this.isRootVisible||t.object.data!==this.controller.data?(i.style.height=this._rowHeight*t.object.height+"px",i.style.visibility="visible"):(i.style.height=this._rowHeight*(t.object.height-1)+"px",i.style.visibility="hidden")),i.style.marginLeft=this._indentationWidth*t.object.depth+"px"}}})}});