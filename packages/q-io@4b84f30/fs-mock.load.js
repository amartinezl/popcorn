montageDefine("4b84f30","fs-mock",{dependencies:["q","./fs-boot","./fs-common","./buffer-stream","./reader","collections/set","./fs"],factory:function(t,r,e){function o(t,r){return this instanceof o?(this._root=new a(this,"/"),u.update(this,function(){return r}),r=r||this.ROOT,void(t&&this._init(t))):new o(t,r)}function i(t,r){return f.when(t.listTree(r),function(e){var i={};return f.all(e.map(function(e){var o=t.join(r,e),n=t.relativeFromDirectory(r,o);return f.when(t.stat(o),function(r){if(r.isFile())return f.when(t.read(e,"rb"),function(t){i[n]=t})})})).then(function(){return o(i)})})}function n(t){if(!t)throw new Error("FS required argument");this._fs=t,this.atime=this.mtime=Date.now(),this.mode=parseInt("0644",8),this._owner=null}function s(t){n.call(this,t),this._chunks=[]}function a(t){n.call(this,t),this._entries=Object.create(null),this.mode=parseInt("0755",8)}function c(t,r){n.call(this,t),this._link=r}var f=t("q"),l=t("./fs-boot"),u=t("./fs-common"),_=t("./buffer-stream"),h=t("./reader"),w=t("collections/set");e.exports=o,o.prototype=Object.create(l),o.prototype._init=function(t,r){r=r||this.ROOT,Object.keys(t).forEach(function(e){var o=t[e];e=this.join(r,e);var i=this.directory(e),n=this.base(e),a=this._root._walk(i,!0),c=new s(this);if(!(o instanceof Buffer)){if("object"==typeof o)return this._root._walk(e,!0),void this._init(o,e);o=new Buffer(String(o),"utf-8")}a._entries[n]=c,c._chunks=[o]},this)},o.prototype.list=function(t){var r=this;return f.fcall(function(){t=r.absolute(t);var e=r._root._walk(t)._follow(t);return e.isDirectory()||new Error("Can't list non-directory: "+JSON.stringify(t)),Object.keys(e._entries).sort()})},o.prototype.open=function(t,r,e,o){var i=this;return f.fcall(function(){t=i.absolute(t);var n=i.directory(t),a=i.base(t),c=i._root._walk(n);if(!c.isDirectory())throw new Error("Can't find "+t+" because "+n+" is not a directory");"object"==typeof r?(o=r,r=o.flags,e=o.charset):o=o||{},r=r||"r";var f=r.indexOf("b")>=0,l=r.indexOf("w")>=0,u=r.indexOf("a")>=0;if(f||(e=e||"utf-8"),l||u){c._entries[a]||(c._entries[a]=new s(this),"mode"in o&&(c._entries[a].mode=o.mode));var w=c._entries[a]._follow(t);if(!w.isFile())throw new Error("Can't write non-file "+t);return w.mtime=Date.now(),w.atime=Date.now(),u||(w._chunks.length=0),new _(w._chunks,e)}if(!c._entries[a])throw new Error("Can't read non-existant "+t);var w=c._entries[a]._follow(t);if(!w.isFile())throw new Error("Can't read non-file "+t);if(w.atime=Date.now(),"begin"in o&&"end"in o)return new _([h.join(w._chunks).slice(o.begin,o.end)],e);var y=w._chunks.slice();return new _(y,e)})},o.prototype.remove=function(t){var r=this;return f.fcall(function(){t=r.absolute(t);var e=r.directory(t),o=r.base(t),i=r._root._walk(e);if(!i.isDirectory())throw new Error("Can't remove file from non-directory: "+t);if(!i._entries[o])throw new Error("Can't remove non-existant file: "+t);if(i._entries[o].isDirectory())throw new Error("Can't remove directory. Use removeDirectory: "+t);delete i._entries[o]})},o.prototype.makeDirectory=function(t,r){var e=this;return f.fcall(function(){t=e.absolute(t);var o=e.directory(t),i=e.base(t),n=e._root._walk(o);if(!n.isDirectory()){var s=new Error("Can't make directory in non-directory: "+t);throw s.code="EEXISTS",s.exists=!0,s}if(n._entries[i]){var s=new Error("Can't make directory. Entry exists: "+t);throw s.code="EISDIR",s.exists=!0,s.isDirectory=!0,s}n._entries[i]=new a(e),r&&(n._entries[i].mode=r)})},o.prototype.removeDirectory=function(t){var r=this;return f.fcall(function(){t=r.absolute(t);var e=r.directory(t),o=r.base(t),i=r._root._walk(e);if(!i.isDirectory())throw new Error("Can't remove directory from non-directory: "+t);if(!i._entries[o])throw new Error("Can't remove non-existant directory: "+t);if(!i._entries[o].isDirectory())throw new Error("Can't remove non-directory: "+t);delete i._entries[o]})},o.prototype.stat=function(t){var r=this;return f.fcall(function(){return t=r.absolute(t),new r.Stats(r._root._walk(t)._follow(t))})},o.prototype.statLink=function(t){var r=this;return f.fcall(function(){return t=r.absolute(t),new r.Stats(r._root._walk(t))})},o.prototype.link=function(t,r){var e=this;return f.fcall(function(){t=e.absolute(t),r=e.absolute(r);var o=e._root._walk(t)._follow(t);if(!o.isFile())throw new Error("Can't link non-file: "+t);var i=e.directory(r),n=e.base(r),s=e._root._walk(i)._follow(i);if(!s.isDirectory())throw new Error("Can't create link in non-directory: "+r);if(s._entries[n]&&s._entries[n].isDirectory())throw new Error("Can't overwrite existing directory with hard link: "+r);s._entries[n]=o})},o.prototype.symbolicLink=function(t,r,e){var o=this;return f.fcall(function(){t=o.absolute(t);var e=o.directory(t),i=o.base(t),n=o._root._walk(e);if(n._entries[i]&&n._entries[i].isDirectory())throw new Error("Can't overwrite existing directory with symbolic link: "+t);n._entries[i]=new c(o,r)})},o.prototype.chown=function(t,r){var e=this;return f.fcall(function(){t=e.absolute(t),e._root._walk(t)._follow(t)._owner=r})},o.prototype.chmod=function(t,r){var e=this;return f.fcall(function(){t=e.absolute(t),e._root._walk(t)._follow(t).mode=r})},o.prototype.rename=function(t,r){var e=this;return f.fcall(function(){t=e.absolute(t),r=e.absolute(r);var o=e.directory(t),i=e._root._walk(o)._follow(o),n=e.base(t),s=i._entries[n];if(!s){var a=new Error("Can't copy non-existent file: "+t);throw a.code="ENOENT",a}if(s=s._follow(t),!s){var a=new Error("Can't copy non-existent file: "+t);throw a.code="ENOENT",a}var c=e.directory(r),f=e._root._walk(c)._follow(c),l=e.base(r),u=f._entries[l];if(u&&(u=u._follow(r)),u&&u.isDirectory()){var a=new Error("Can't copy over existing directory: "+r);throw a.code="EISDIR",a}u!==s&&(f._entries[l]=s,delete i._entries[n])})},o.prototype.readLink=function(t){var r=this;return f.fcall(function(){t=r.absolute(t);var e=r._root._walk(t);if(!r.isSymbolicLink())throw new Error("Can't read non-symbolic link: "+t);return e._link})},o.prototype.canonical=function(t){var r=this;return f.fcall(function(){return t=r.absolute(t),r._root._canonical(t)})},o.mock=i,n.prototype._walk=function(t,r,e){var o=this._fs.split(t);return this._fs.isAbsolute(t)?(o.shift(),this._fs._root._walkParts(o,r,this._fs.ROOT)):this._walkParts(o,r,e||this._fs.ROOT)},n.prototype._walkParts=function(t,r,e){if(0===t.length)return this;var o=t.shift();if(""===o)return this._walkParts(t,r,this._fs.join(e,o));var i=new Error("Can't find "+JSON.stringify(this._fs.resolve(o,this._fs.join(t)))+" via "+JSON.stringify(e));throw i.code="ENOENT",i},n.prototype._canonical=function(t){if(!this._fs.isAbsolute(t))throw new Error("Path must be absolute for _canonical: "+t);var r=this._fs.split(t);r.shift();var e=this._fs.ROOT;return e+this._fs._root._canonicalParts(r,e)},n.prototype._canonicalParts=function(t,r){return 0===t.length?r:this._fs.join(r,this._fs.join(t))},n.prototype._follow=function(){return this},n.prototype._touch=function(){this.mtime=Date.now()};var y=["isDirectory","isFile","isBlockDevice","isCharacterDevice","isSymbolicLink","isFIFO","isSocket"];y.forEach(function(t){n.prototype[t]=function(){return!1}}),n.prototype.lastAccessed=function(){return this.atime},n.prototype.lastModified=function(){return this.mtime},s.prototype=Object.create(n.prototype),s.prototype.isFile=function(){return!0},Object.defineProperty(s.prototype,"size",{configurable:!0,enumerable:!0,get:function(){return this._chunks.reduce(function(t,r){return t+=r.length},0)}}),a.prototype=Object.create(n.prototype),a.prototype.isDirectory=function(){return!0},a.prototype._walkParts=function(t,r,e){if(e=e||this._fs.ROOT,0===t.length)return this;var o=t.shift();if(""===o)return this._walkParts(t,r,this._fs.join(e,o));if(!this._entries[o]){if(!r){var i=new Error("Can't find "+JSON.stringify(this._fs.join(t))+" via "+JSON.stringify(e));throw i.code="ENOENT",i}this._entries[o]=new a(this._fs)}return this._entries[o]._walkParts(t,r,this._fs.join(e,o))},a.prototype._canonicalParts=function(t,r){if(0===t.length)return r;var e=t.shift();return""===e?r:(r===this._fs.ROOT&&(r=""),this._entries[e]?this._entries[e]._canonicalParts(t,this._fs.join(r,e)):this._fs.join(r,e,this._fs.join(t)))},c.prototype=Object.create(n.prototype),c.prototype.isSymbolicLink=function(){return!0},c.prototype._follow=function(t,r){if(r=r||w(),r.has(this)){var e=new Error("Can't follow symbolic link cycle at "+JSON.stringify(t));throw e.code="ELOOP",e}r.add(this);var o=this._fs.join(t,"..",this._link);return this._walk(o,null,"<link>")._follow(o,r)},c.prototype._canonicalParts=function(t,r){return this._fs.relativeFromDirectory(this._fs.ROOT,this._fs._root._canonical(this._fs.absolute(this._fs.join(r,"..",this._link))))};t("./fs")}});