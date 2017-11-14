montageDefine("57a7f91","common",{dependencies:["path","minimatch","path-is-absolute"],factory:function(e,r,t){function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function o(e,r){return e.toLowerCase().localeCompare(r.toLowerCase())}function a(e,r){return e.localeCompare(r)}function c(e,r){e.ignore=r.ignore||[],Array.isArray(e.ignore)||(e.ignore=[e.ignore]),e.ignore.length&&(e.ignore=e.ignore.map(i))}function i(e){var r=null;if("/**"===e.slice(-3)){var t=e.replace(/(\/\*\*)+$/,"");r=new w(t,{dot:!0})}return{matcher:new w(e,{dot:!0}),gmatcher:r}}function s(e,r,t){if(t||(t={}),t.matchBase&&-1===r.indexOf("/")){if(t.noglobstar)throw new Error("base matching requires globstar");r="**/"+r}e.silent=!!t.silent,e.pattern=r,e.strict=t.strict!==!1,e.realpath=!!t.realpath,e.realpathCache=t.realpathCache||Object.create(null),e.follow=!!t.follow,e.dot=!!t.dot,e.mark=!!t.mark,e.nodir=!!t.nodir,e.nodir&&(e.mark=!0),e.sync=!!t.sync,e.nounique=!!t.nounique,e.nonull=!!t.nonull,e.nosort=!!t.nosort,e.nocase=!!t.nocase,e.stat=!!t.stat,e.noprocess=!!t.noprocess,e.absolute=!!t.absolute,e.maxLength=t.maxLength||1/0,e.cache=t.cache||Object.create(null),e.statCache=t.statCache||Object.create(null),e.symlinks=t.symlinks||Object.create(null),c(e,t),e.changedCwd=!1;var o=process.cwd();n(t,"cwd")?(e.cwd=g.resolve(t.cwd),e.changedCwd=e.cwd!==o):e.cwd=o,e.root=t.root||g.resolve(e.cwd,"/"),e.root=g.resolve(e.root),"win32"===process.platform&&(e.root=e.root.replace(/\\/g,"/")),e.cwdAbs=d(e.cwd)?e.cwd:u(e,e.cwd),"win32"===process.platform&&(e.cwdAbs=e.cwdAbs.replace(/\\/g,"/")),e.nomount=!!t.nomount,t.nonegate=!0,t.nocomment=!0,e.minimatch=new w(r,t),e.options=e.minimatch.options}function l(e){for(var r=e.nounique,t=r?[]:Object.create(null),n=0,c=e.matches.length;n<c;n++){var i=e.matches[n];if(i&&0!==Object.keys(i).length){var s=Object.keys(i);r?t.push.apply(t,s):s.forEach(function(e){t[e]=!0})}else if(e.nonull){var l=e.minimatch.globSet[n];r?t.push(l):t[l]=!0}}if(r||(t=Object.keys(t)),e.nosort||(t=t.sort(e.nocase?o:a)),e.mark){for(var n=0;n<t.length;n++)t[n]=e._mark(t[n]);e.nodir&&(t=t.filter(function(r){var t=!/\/$/.test(r),n=e.cache[r]||e.cache[u(e,r)];return t&&n&&(t="DIR"!==n&&!Array.isArray(n)),t}))}e.ignore.length&&(t=t.filter(function(r){return!m(e,r)})),e.found=t}function h(e,r){var t=u(e,r),n=e.cache[t],o=r;if(n){var a="DIR"===n||Array.isArray(n),c="/"===r.slice(-1);if(a&&!c?o+="/":!a&&c&&(o=o.slice(0,-1)),o!==r){var i=u(e,o);e.statCache[i]=e.statCache[t],e.cache[i]=e.cache[t]}}return o}function u(e,r){var t=r;return t="/"===r.charAt(0)?g.join(e.root,r):d(r)||""===r?r:e.changedCwd?g.resolve(e.cwd,r):g.resolve(r),"win32"===process.platform&&(t=t.replace(/\\/g,"/")),t}function m(e,r){return!!e.ignore.length&&e.ignore.some(function(e){return e.matcher.match(r)||!(!e.gmatcher||!e.gmatcher.match(r))})}function f(e,r){return!!e.ignore.length&&e.ignore.some(function(e){return!(!e.gmatcher||!e.gmatcher.match(r))})}r.alphasort=a,r.alphasorti=o,r.setopts=s,r.ownProp=n,r.makeAbs=u,r.finish=l,r.mark=h,r.isIgnored=m,r.childrenIgnored=f;var g=e("path"),p=e("minimatch"),d=e("path-is-absolute"),w=p.Minimatch}});