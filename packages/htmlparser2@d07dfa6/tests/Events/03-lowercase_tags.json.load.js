montageDefine("d07dfa6","tests/Events/03-lowercase_tags.json",{exports:{name:"Lowercase tags",options:{handler:{},parser:{lowerCaseTags:!0}},html:"<H1 class=test>adsf</H1>",expected:[{event:"opentagname",data:["h1"]},{event:"attribute",data:["class","test"]},{event:"opentag",data:["h1",{"class":"test"}]},{event:"text",data:["adsf"]},{event:"closetag",data:["h1"]}]}});