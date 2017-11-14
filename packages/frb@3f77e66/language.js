for(var Set=require("collections/set"),Map=require("collections/map"),precedence=exports.precedence=new Map,levels=exports.precedenceLevels=[["tuple","record"],["literal","value","parameters","property","element","component","mapBlock","filterBlock","sortedBlock","groupBlock","groupMapBlock","with"],["not","neg","number","parent"],["scope"],["default"],["pow","root","log"],["mul","div","mod","rem"],["add","sub"],["equals","lt","gt","le","ge","compare"],["and"],["or"],["if"]],i=0,countI=levels.length,predecessors,level,j,countJ;i<countI;i++)for(level=levels[i],predecessors=new Set(precedence.keysArray()),j=0,countJ=level.length;j<countJ;j++)precedence.set(level[j],predecessors);var operatorTokens=exports.operatorTokens=Map.from({"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","!=":"notEquals","??":"default","&&":"and","||":"or","?":"then",":":"else"});exports.operatorTypes=new Map(operatorTokens.map(function(e,o){return[e,o]}));