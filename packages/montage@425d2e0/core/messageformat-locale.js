exports.am=function(o){return 0===o||1==o?"one":"other"},exports.ar=function(o){return 0===o?"zero":1==o?"one":2==o?"two":o%100>=3&&o%100<=10&&o==Math.floor(o)?"few":o%100>=11&&o%100<=99&&o==Math.floor(o)?"many":"other"},exports.bg=function(o){return 1===o?"one":"other"},exports.bn=function(o){return 1===o?"one":"other"},exports.br=function(o){return 0===o?"zero":1==o?"one":2==o?"two":3==o?"few":6==o?"many":"other"},exports.ca=function(o){return 1===o?"one":"other"},exports.cs=function(o){return 1==o?"one":2==o||3==o||4==o?"few":"other"},exports.cy=function(o){return 0===o?"zero":1==o?"one":2==o?"two":3==o?"few":6==o?"many":"other"},exports.da=function(o){return 1===o?"one":"other"},exports.de=function(o){return 1===o?"one":"other"},exports.el=function(o){return 1===o?"one":"other"},exports.en=function(o){return 1===o?"one":"other"},exports.es=function(o){return 1===o?"one":"other"},exports.et=function(o){return 1===o?"one":"other"},exports.eu=function(o){return 1===o?"one":"other"},exports.fa=function(o){return"other"},exports.fi=function(o){return 1===o?"one":"other"},exports.fil=function(o){return 0===o||1==o?"one":"other"},exports.fr=function(o){return o>=0&&o<2?"one":"other"},exports.ga=function(o){return 1==o?"one":2==o?"two":"other"},exports.gl=function(o){return 1===o?"one":"other"},exports.gsw=function(o){return 1===o?"one":"other"},exports.gu=function(o){return 1===o?"one":"other"},exports.he=function(o){return 1===o?"one":"other"},exports.hi=function(o){return 0===o||1==o?"one":"other"},exports.hr=function(o){return o%10==1&&o%100!=11?"one":o%10>=2&&o%10<=4&&(o%100<12||o%100>14)&&o==Math.floor(o)?"few":o%10===0||o%10>=5&&o%10<=9||o%100>=11&&o%100<=14&&o==Math.floor(o)?"many":"other"},exports.hu=function(o){return"other"},exports.id=function(o){return"other"},exports["in"]=function(o){return"other"},exports.is=function(o){return 1===o?"one":"other"},exports.it=function(o){return 1===o?"one":"other"},exports.iw=function(o){return 1===o?"one":"other"},exports.ja=function(o){return"other"},exports.kn=function(o){return"other"},exports.ko=function(o){return"other"},exports.lag=function(o){return 0===o?"zero":o>0&&o<2?"one":"other"},exports.ln=function(o){return 0===o||1==o?"one":"other"},exports.lt=function(o){return o%10==1&&(o%100<11||o%100>19)?"one":o%10>=2&&o%10<=9&&(o%100<11||o%100>19)&&o==Math.floor(o)?"few":"other"},exports.lv=function(o){return 0===o?"zero":o%10==1&&o%100!=11?"one":"other"},exports.mk=function(o){return o%10==1&&11!=o?"one":"other"},exports.ml=function(o){return 1===o?"one":"other"},exports.mo=function(o){return 1==o?"one":0===o||1!=o&&o%100>=1&&o%100<=19&&o==Math.floor(o)?"few":"other"},exports.mr=function(o){return 1===o?"one":"other"},exports.ms=function(o){return"other"},exports.mt=function(o){return 1==o?"one":0===o||o%100>=2&&o%100<=4&&o==Math.floor(o)?"few":o%100>=11&&o%100<=19&&o==Math.floor(o)?"many":"other"},exports.ne=function(o){return 1===o?"one":"other"},exports.nl=function(o){return 1===o?"one":"other"},exports.no=function(o){return 1===o?"one":"other"},exports.or=function(o){return 1===o?"one":"other"},exports.pl=function(o){return 1==o?"one":o%10>=2&&o%10<=4&&(o%100<12||o%100>14)&&o==Math.floor(o)?"few":o%10===0||1!=o&&o%10==1||(o%10>=5&&o%10<=9||o%100>=12&&o%100<=14)&&o==Math.floor(o)?"many":"other"},exports.pt=function(o){return 1===o?"one":"other"},exports.ro=function(o){return 1==o?"one":0===o||1!=o&&o%100>=1&&o%100<=19&&o==Math.floor(o)?"few":"other"},exports.ru=function(o){return o%10==1&&o%100!=11?"one":o%10>=2&&o%10<=4&&(o%100<12||o%100>14)&&o==Math.floor(o)?"few":o%10===0||o%10>=5&&o%10<=9||o%100>=11&&o%100<=14&&o==Math.floor(o)?"many":"other"},exports.shi=function(o){return o>=0&&o<=1?"one":o>=2&&o<=10&&o==Math.floor(o)?"few":"other"},exports.sk=function(o){return 1==o?"one":2==o||3==o||4==o?"few":"other"},exports.sl=function(o){return o%100==1?"one":o%100==2?"two":o%100==3||o%100==4?"few":"other"},exports.sq=function(o){return 1===o?"one":"other"},exports.sr=function(o){return o%10==1&&o%100!=11?"one":o%10>=2&&o%10<=4&&(o%100<12||o%100>14)&&o==Math.floor(o)?"few":o%10===0||o%10>=5&&o%10<=9||o%100>=11&&o%100<=14&&o==Math.floor(o)?"many":"other"},exports.sv=function(o){return 1===o?"one":"other"},exports.sw=function(o){return 1===o?"one":"other"},exports.ta=function(o){return 1===o?"one":"other"},exports.te=function(o){return 1===o?"one":"other"},exports.th=function(o){return"other"},exports.tl=function(o){return 0===o||1==o?"one":"other"},exports.tr=function(o){return"other"},exports.uk=function(o){return o%10==1&&o%100!=11?"one":o%10>=2&&o%10<=4&&(o%100<12||o%100>14)&&o==Math.floor(o)?"few":o%10===0||o%10>=5&&o%10<=9||o%100>=11&&o%100<=14&&o==Math.floor(o)?"many":"other"},exports.ur=function(o){return 1===o?"one":"other"},exports.vi=function(o){return"other"},exports.zh=function(o){return"other"};