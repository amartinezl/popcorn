montageDefine("1fecba1","lib/mimeparse",{dependencies:[],factory:function(e,r,a){function n(e){for(var a=[],n=e.split(","),t=0;t<n.length;t++)a.push(r.parseMediaRange(n[t]));return a}r.parseMimeType=function(e){for(var r,a,n={},t=e.split(";"),i=0;i<t.length;i++){var s=t[i].split("=");2===s.length&&(n[s[0].trim()]=s[1].trim())}return r=t[0].replace(/^\s+/,"").replace(/\s+$/,""),"*"===r&&(r="*/*"),a=r.split("/"),[a[0],a[1],n]},r.parseMediaRange=function(e){var a,n=r.parseMimeType(e);return n[2].q?(a=parseFloat(n[2].q),isNaN(a)?n[2].q="1":(a>1||a<0)&&(n[2].q="1")):n[2].q="1",n},r.fitnessAndQualityParsed=function(e,a){for(var n=-1,t=0,i=r.parseMediaRange(e),s=i[0],u=i[1],l=i[2],f=0;f<a.length;f++){var p=a[f],o=p[0],c=p[1],d=p[2];if(!(o!==s&&"*"!==o&&"*"!==s||c!==u&&"*"!==c&&"*"!==u)){var g=0;for(var h in l)"q"!==h&&d[h]&&d[h]===l[h]&&(g+=1);var q=o===s?100:0;q+=c===u?10:0,q+=g,q>n&&(n=q,t=d.q)}}return[n,parseFloat(t)]},r.qualityParsed=function(e,a){return r.fitnessAndQualityParsed(e,a)[1]},r.quality=function(e,a){return r.qualityParsed(e,n(a))},r.bestMatch=function(e,a){for(var t=n(a),i=[],s=0;s<e.length;s++)i.push([r.fitnessAndQualityParsed(e[s],t),e[s]]);return i.sort(),i[i.length-1][0][1]?i[i.length-1][1]:""}}});