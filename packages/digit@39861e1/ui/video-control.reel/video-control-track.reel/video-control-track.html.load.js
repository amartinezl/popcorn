montageDefine("39861e1","ui/video-control.reel/video-control-track.reel/video-control-track.html",{"text":"<!DOCTYPE html><html><head><title></title><style>.digit-VideoControlTrack{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;-webkit-align-items:center;-ms-flex-align:center;align-items:center;outline:none}.digit-VideoControlTrack-timeline-slider{display:inline-block;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;height:.25em;outline:none;padding-right:-webkit-calc(.6em - 2px);padding-right:-moz-calc(.6em - 2px);padding-right:calc(.6em - 2px)}.digit-VideoControlTrack-timeline-progress{overflow:hidden;height:.25em;border-radius:.15em;border:1px solid}.digit-VideoControlTrack-timeline-progress,.digit-VideoControlTrack-timeline-progress-value{position:absolute;width:100%;-moz-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.digit-VideoControlTrack-timeline-progress-value{top:0;left:-100%;background-color:currentColor;opacity:.5;height:100%}.digit-VideoControlTrack-thumb{position:relative;font-size:inherit;-moz-box-sizing:border-box;box-sizing:border-box;width:.6em;height:.6em;margin-top:-.15em;border-radius:.4em;border:1px solid;background-color:currentColor;cursor:pointer}.digit-VideoControlTrack-thumb:after{position:absolute;content:\"\";top:-8px;left:-8px;bottom:-8px;right:-8px}[data-montage-skin=\"wireframe\"] .digit-VideoControlTrack-timeline-progress{color:#b3b3b3;background-color:rgba(217,217,217,.75)}[data-montage-skin=\"wireframe\"] .digit-VideoControlTrack-thumb{border-color:#b3b3b3;background-color:#f2f2f2}[data-montage-skin=\"wireframe\"] .montage-Slider--active .digit-VideoControlTrack-thumb{background-color:#e5e5e5}[data-montage-skin=\"light\"] .digit-VideoControlTrack-timeline-progress{color:hsla(0,0%,0%,.6);border-color:hsla(0,0%,0%,.25);background-color:hsla(0,0%,0%,.05);box-shadow:inset 0 1px 1px hsla(0,0%,0%,.1),0 1px 0 hsla(0,0%,100%,.5)}[data-montage-skin=\"light\"] .digit-VideoControlTrack-thumb{color:hsla(0,0%,70%,1);border-color:hsla(0,0%,70%,1);background-image:-webkit-linear-gradient(top,hsl(0,0%,98%),hsl(0,0%,84%));background-image:-moz-linear-gradient(top,hsl(0,0%,98%),hsl(0,0%,84%));background-image:-ms-linear-gradient(top,hsl(0,0%,98%),hsl(0,0%,84%));background-image:linear-gradient(top,hsl(0,0%,98%),hsl(0,0%,84%));box-shadow:inset 0 1px 1px hsla(0,0%,100%,.8),0 1px 2px 0 hsla(0,0%,0%,.1),0 7px 6px -3px hsla(0,0%,0%,.15)}[data-montage-skin=\"light\"] .montage-Slider--active .digit-VideoControlTrack-thumb{color:hsla(0,0%,65%,1);border-color:hsla(0,0%,65%,1);background-image:-webkit-linear-gradient(top,hsl(0,0%,96%),hsl(0,0%,83%));background-image:-moz-linear-gradient(top,hsl(0,0%,96%),hsl(0,0%,83%));background-image:-ms-linear-gradient(top,hsl(0,0%,96%),hsl(0,0%,83%));background-image:linear-gradient(top,hsl(0,0%,96%),hsl(0,0%,83%));box-shadow:inset 0 1px 1px hsla(0,0%,100%,.8),0 1px 2px 0 hsla(0,0%,0%,.2),0 6px 6px -3px hsla(0,0%,0%,.1)}[data-montage-skin=\"dark\"] .digit-VideoControlTrack-timeline-progress{color:hsla(0,0%,100%,.7);border-color:hsl(0,0%,15%);background-color:hsl(0,0%,22%);box-shadow:inset 0 1px 2px hsla(0,0%,0%,.25),0 1px 0 hsla(0,0%,100%,.1)}[data-montage-skin=\"dark\"] .digit-VideoControlTrack-thumb{border-color:hsl(0,0%,16%);background-image:-webkit-linear-gradient(top,hsl(0,0%,36%),hsl(0,0%,24%));background-image:-moz-linear-gradient(top,hsl(0,0%,36%),hsl(0,0%,24%));background-image:-ms-linear-gradient(top,hsl(0,0%,36%),hsl(0,0%,24%));background-image:linear-gradient(top,hsl(0,0%,36%),hsl(0,0%,24%));box-shadow:inset 0 1px 1px hsla(0,0%,100%,.1),0 1px 2px 0 hsla(0,0%,0%,.15),0 7px 6px -3px hsla(0,0%,0%,.25)}[data-montage-skin=\"dark\"] .montage-Slider--active .digit-VideoControlTrack-thumb{color:hsl(0,0%,12%);background-image:-webkit-linear-gradient(top,hsl(0,0%,34%),hsl(0,0%,23%));background-image:-moz-linear-gradient(top,hsl(0,0%,34%),hsl(0,0%,23%));background-image:-ms-linear-gradient(top,hsl(0,0%,34%),hsl(0,0%,23%));background-image:linear-gradient(top,hsl(0,0%,34%),hsl(0,0%,23%));box-shadow:inset 0 1px 1px hsla(0,0%,100%,.1),0 1px 2px 0 hsla(0,0%,0%,.2),0 7px 6px -3px hsla(0,0%,0%,.15)}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"video-control-track\"}}},\"slider\":{\"prototype\":\"ui/video-control.reel/video-control-track.reel[Slider]\",\"properties\":{\"element\":{\"#\":\"slider\"},\"_sliderThumbElement\":{\"#\":\"sliderThumb\"}},\"bindings\":{\"controller\":{\"<-\":\"@owner\"}}},\"progressBar\":{\"prototype\":\"ui/video-control.reel/video-control-track.reel[ProgressBar]\",\"properties\":{\"element\":{\"#\":\"progress-bar\"},\"_progressBarValueElement\":{\"#\":\"progress-bar-value\"}},\"bindings\":{\"controller\":{\"<-\":\"@owner\"}}}}</script></head><body><div data-montage-id=video-control-track class=digit-VideoControlTrack><div data-montage-id=slider class=digit-VideoControlTrack-timeline-slider><div data-montage-id=progress-bar class=digit-VideoControlTrack-timeline-progress><div data-montage-id=progress-bar-value class=digit-VideoControlTrack-timeline-progress-value></div></div><div data-montage-id=sliderThumb class=digit-VideoControlTrack-thumb></div></div></div></body></html>"})