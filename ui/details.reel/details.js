var Component=require("montage/ui/component").Component,sharedTmdbService=require("core/tmdb-service").shared;exports.Details=Component.specialize({isVisible:{value:null},_movie:{value:null},movie:{set:function(e){var i=this;e&&!e.trailers?sharedTmdbService.loadMovie(e).then(function(i){return e.trailers=i.trailers,e.runtime=i.runtime,i}).then(function(e){return sharedTmdbService.loadReleases(e)}).then(function(i){var t=i.countries[0].certification;0===t.length&&(t="none"),e.mpaaRating=t}).then(function(){i.dispatchBeforeOwnPropertyChange("movie",i._movie),i._movie=e,i.isVisible=!0,i.dispatchOwnPropertyChange("movie",i._movie)}).done():(i._movie=e,this.isVisible=!0),this.needsDraw=!0},get:function(){return this._movie}},draw:{value:function(){if(this.movie){var e=this.movie.popularity;e<25?this.popularityIcon.style.backgroundPosition="0px 0px":e<50?this.popularityIcon.style.backgroundPosition="-12px 0px":e<75?this.popularityIcon.style.backgroundPosition="-24px 0px":this.popularityIcon.style.backgroundPosition="-36px 0px",this._isDetailsExpanded?this._element.classList.add("expanded"):this._element.classList.remove("expanded")}}},handleRentButtonAction:{value:function(){window.open(this.movie.links.alternate)}},handleTrailerButtonAction:{value:function(){this.dispatchEventNamed("openTrailer",!0,!0,{trailers:this.movie.trailers})}},_isDetailsExpanded:{value:!1},handleExpandButtonAction:{value:function(){this._isDetailsExpanded=!this._isDetailsExpanded,this.needsDraw=!0}}});