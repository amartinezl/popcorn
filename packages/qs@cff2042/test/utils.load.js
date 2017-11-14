montageDefine("cff2042","test/utils",{dependencies:["tape","../lib/utils"],factory:function(e,a,o){"use strict";var r=e("tape"),t=e("../lib/utils");r("merge()",function(e){e.deepEqual(t.merge({a:"b"},{a:"c"}),{a:["b","c"]},"merges two objects with the same key");var a=t.merge({foo:"bar"},{foo:{first:"123"}});e.deepEqual(a,{foo:["bar",{first:"123"}]},"merges a standalone and an object into an array");var o=t.merge({foo:["bar",{first:"123"}]},{foo:{second:"456"}});e.deepEqual(o,{foo:{0:"bar",1:{first:"123"},second:"456"}},"merges a standalone and two objects into an array");var r=t.merge({foo:["bar",{first:"123",second:"456"}]},{foo:"baz"});e.deepEqual(r,{foo:["bar",{first:"123",second:"456"},"baz"]},"merges an object sandwiched by two standalones into an array");var n=t.merge({foo:["baz"]},{foo:["bar","xyzzy"]});e.deepEqual(n,{foo:["baz","bar","xyzzy"]}),e.end()}),r("assign()",function(e){var a={a:1,b:2},o={b:3,c:4},r=t.assign(a,o);e.equal(r,a,"returns the target"),e.deepEqual(a,{a:1,b:3,c:4},"target and source are merged"),e.deepEqual(o,{b:3,c:4},"source is untouched"),e.end()})}});