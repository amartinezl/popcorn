montageDefine("da2f0df","ui/main.reel/main",{dependencies:["montage/ui/component","core/tmdb-service"],factory:function(e,i,o){var n=e("montage/ui/component").Component,t=e("core/tmdb-service").shared;i.Main=n.specialize({constructor:{value:function(){this.application.addEventListener("openTrailer",this,!1),this.canDrawGate.setField("moviesLoaded",!1),this._initialDataLoad=this.moviesService.load()}},moviesService:{value:t},_initialDataLoad:{value:null},templateDidLoad:{value:function(){var e=this;e._initialDataLoad.then(function(){e.canDrawGate.setField("moviesLoaded",!0)}).done()}},handleOpenTrailer:{value:function(e){var i=e.detail.trailers;if(i&&i.youtube&&i.youtube.length){for(var o,n=i.youtube,t=0,a=n.length;t<a&&(o=n[t],!(o.name&&o.name.toLowerCase().indexOf("official")>-1));t++);this.templateObjects.player.openTrailer(o.source)}}},_windowScroll:{value:function(e){window.innerHeight!==window.outerHeight&&window.innerHeight===this._element.offsetHeight||(window.scrollTo(0,0),e.templateObjects.moviestrip.movieFlow.handleResize(),window.clearTimeout(e._windowScrollTimeout),e._windowScrollTimeout=window.setTimeout(function(){e._windowScroll(e)},700))}},_windowScrollTimeout:{value:null},handleOrientationchange:{value:function(){var e=this;window.scrollTo(0,0),navigator.userAgent.match(/(iPhone|iPod touch);.*CPU.*OS 7_0_\d/i)&&(window.clearTimeout(this._windowScrollTimeout),90===Math.abs(window.orientation)&&(e._windowScrollTimeout=window.setTimeout(function(){e._windowScroll(e)},1e3)))}},enterDocument:{value:function(e){e&&window.addEventListener("orientationchange",this,!1)}}})}});