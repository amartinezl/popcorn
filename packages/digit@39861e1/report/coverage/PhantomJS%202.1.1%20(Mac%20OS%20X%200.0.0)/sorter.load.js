montageDefine("39861e1","report/coverage/PhantomJS%202.1.1%20(Mac%20OS%20X%200.0.0)/sorter",{dependencies:[],factory:function(e,t,r){var n=function(){"use strict";function e(){return document.querySelector(".coverage-summary")}function t(){return e().querySelector("thead tr")}function r(){return e().querySelector("tbody")}function n(e){return t().querySelectorAll("th")[e]}function o(){var e,r,n,o=t().querySelectorAll("th"),a=[];for(n=0;n<o.length;n+=1)e=o[n],r={key:e.getAttribute("data-col"),sortable:!e.getAttribute("data-nosort"),type:e.getAttribute("data-type")||"string"},a.push(r),r.sortable&&(r.defaultDescSort="number"===r.type,e.innerHTML=e.innerHTML+'<span class="sorter"></span>');return a}function a(e){var t,r,n,o,a=e.querySelectorAll("td"),c={};for(n=0;n<a.length;n+=1)t=a[n],r=s[n],o=t.getAttribute("data-value"),"number"===r.type&&(o=Number(o)),c[r.key]=o;return c}function c(){var e,t=r().querySelectorAll("tr");for(e=0;e<t.length;e+=1)t[e].data=a(t[e])}function u(e,t){var r,n=s[e].key,o=function(e,t){return e=e.data[n],t=t.data[n],e<t?-1:e>t?1:0},a=o,c=document.querySelector(".coverage-summary tbody"),u=c.querySelectorAll("tr"),l=[];for(t&&(a=function(e,t){return-1*o(e,t)}),r=0;r<u.length;r+=1)l.push(u[r]),c.removeChild(u[r]);for(l.sort(a),r=0;r<l.length;r+=1)c.appendChild(l[r])}function l(){var e=n(f.index),t=e.className;t=t.replace(/ sorted$/,"").replace(/ sorted-desc$/,""),e.className=t}function d(){n(f.index).className+=f.desc?" sorted-desc":" sorted"}function i(){var e,t,r=function(e){var t=s[e];return function(){var r=t.defaultDescSort;f.index===e&&(r=!f.desc),u(e,r),l(),f.index=e,f.desc=r,d()}};for(e=0;e<s.length;e+=1)s[e].sortable&&(t=n(e).querySelector(".sorter").parentElement,t.addEventListener?t.addEventListener("click",r(e)):t.attachEvent("onclick",r(e)))}var s,f={index:0,desc:!1};return function(){e()&&(s=o(),c(s),d(),i())}}();window.addEventListener("load",n)}});