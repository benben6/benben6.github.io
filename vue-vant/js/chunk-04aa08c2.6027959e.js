(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04aa08c2"],{"0139":function(e,t,n){e.exports=n.p+"img/defaultImg.d45df20b.jpeg"},"02f4":function(e,t,n){var r=n("4588"),a=n("be13");e.exports=function(e){return function(t,n){var i,o,c=String(a(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?e?c.charAt(s):i:e?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"0c80":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"setup"}},[n("van-nav-bar",{attrs:{title:e.$t("setup.title"),fixed:!0,border:!1}}),n("van-cell-group",{staticStyle:{"margin-top":"2.4rem"}},[n("van-cell",{staticStyle:{"background-color":"#3bba63",color:"#FFF"},attrs:{"label-class":"labelClass","is-link":"",center:""}},[n("template",{slot:"title"},[e.userInfo.token?n("div",{staticClass:"personMsg",on:{click:function(t){return e.goToPage("userCenter")}}},[n("img",{staticClass:"iconImage",attrs:{src:e.user_image.login_icon,alt:""}}),e.userInfo.sex?n("div",{staticClass:"sex"},[n("img",{attrs:{src:"1"==e.userInfo.sex?e.user_image.female:e.user_image.male,alt:""}})]):e._e(),e.userInfo.token?n("div",{staticClass:"personInfo"},[n("span",[e._v(e._s(e.userInfo.user_name))]),n("span",[e._v(e._s(e.$t("setup.phone"))+"："+e._s(e.phoneNumber))])]):e._e()]):e._e(),e.userInfo.token?e._e():n("div",{staticClass:"personMsg"},[n("img",{staticClass:"iconImage",attrs:{src:e.user_image.noLogin_icon,alt:""}}),e.userInfo.token?e._e():n("div",{staticClass:"personInfo"},[n("div",{on:{click:function(t){return e.goToPage("login")}}},[e._v(e._s(e.$t("setup.login")))])])])])],2)],1),n("van-cell-group",{staticStyle:{"margin-top":"0.4rem"}},[n("van-cell",{attrs:{title:e.$t("setup.phone"),icon:"phone",value:"15686866766","is-link":""}}),n("van-cell",{attrs:{title:e.$t("setup.feedback"),icon:"comment-circle","is-link":""},on:{click:e.onFeedBack}}),n("van-cell",{attrs:{title:e.$t("setup.switchLanguage"),icon:"clock","is-link":""},on:{click:e.onSwitchLanguage}})],1),n("div",{staticClass:"version"},[e._v(e._s(e.$t("setup.version"))+e._s(e.version))]),n("transition",{attrs:{name:"router-slider",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("e17f"),n("2241")),o=(n("a481"),n("bd86")),c=n("2f62"),s=n("cdd9");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={data:function(){return{user_image:{login_icon:n("0139"),noLogin_icon:n("c64d"),female:n("28da"),male:n("3019")},version:s["a"]}},mounted:function(){},computed:l(l({},Object(c["e"])(["userInfo"])),{},{phoneNumber:function(){var e=String(this.userInfo.phone),t=/^(\d{3})\d{4}(\d{4})$/;return e.replace(t,"$1****$2")}}),methods:{goToPage:function(e){this.$router.push({name:e})},onFeedBack:function(){i["a"].alert({confirmButtonText:this.$t("setup.tip2"),title:this.$t("setup.tip3"),message:this.$t("setup.tip4")}).then((function(){}))},onSwitchLanguage:function(){this.$router.push({name:"switchLanguage"})}}},p=g,f=(n("d562"),n("2877")),d=Object(f["a"])(p,r,a,!1,null,"73704dd2",null);t["default"]=d.exports},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),i=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),g=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=c(e),f=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=f?!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!t})):void 0;if(!f||!d||"replace"===e&&!l||"split"===e&&!g){var v=/./[p],A=n(o,p,""[e],(function(e,t,n,r,a){return t.exec===s?f&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=A[0],h=A[1];r(String.prototype,e,b),a(RegExp.prototype,p,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},"28da":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD70lEQVRYR9VWS4gcVRQ9tzLOCBHcZOEoIumqjVPV7SKfhRCJEGMElYi/CBId/GISMRiwu8pgK3Z1BxGDMS7iLwYX418RMYkGBRdKjEjSVRPFqlY3joIbwYCGSR2pbqpTXV2fnkQI1u69e9+55557330lOMefnOP4+P8SmL3MnJwfCy4OFRybV36d+sWeOxM1R1bAnaqP85+TGwRYT+CmtGACvE/gA5kYn9Fn6ydHITQSgbZWM4XKnQAvHwUUkOOU4I2y17SL/AsJuCXrZQrvKQJKVYTyit5p3Jt3NpeAq5kHSVyTA/A7BDsC8OuK1/zqmFpdpmDRMoB3AbgyPCeCT3XPXpuFkUmgrdZmBHJ7ZnDybaPTvC3L3i6ZdRE8EdoJvln2mxsy+mZ421XNLQSez8l8j+HbDxSVJY4jwMO6b+9KnhlSwFWrGiFfAnJROmP5DhPnXaXP1v8K7e2lZkUE2yFYJcD3pOwyOo13o7OOah0BGJblNwFX6X7Li+MOEXC02nOgPJKdnbxk+I37Q/vRyrbFyonxHwS4ZACUWKN37EPhnqNaewDe17ULdxpec2suAVe1HIJ6JgGRTYbXeDG0u6XaNEVeTfHda/j2dJeAZj0Ecnc3PsTV/YaRScDValOkuLm1pdwSSeyq1jaCz6TU9WPdt6/vktRqN5LyYeQjQl33mrP9dfywU7JuhvCdQUB+MbiWn/vZlaorIMrhIcLkVqPT3NntEdVqCGj2fWIJ9FSJfa5qbSY40Kkknix37HoXrHe1Nhu+veR0k5nbATwVg5kxfPuOaO2qZjie15/OWLbofuOFVAVczayRGBifSQLhwYhQBNJWrUsBLJdgvmP8tONotN8bTMqRgZoLTN2zm6kEjqnm3QrwWvxAkkAyeF6/OKr5IwAt7hMA0xXf3ptKoK09vlYYHMgikAzmlKorjE7rm+S+W7IepHSb84KkjaJcW/aePphegt6T+yeA8yOHuAID/aJZt5J8C8C8AO8FxHFFUCFQAaBmKPO3TIxfGH+qhweRar4OYGMegbZWXT0GYeRzipK4KZmF2Wf4dvhQ9b+0UbyOUD4pUiAO4qhmn0xeTwiC63S/tT+XQGh0YipkleAMCAxlH2KkPsfO0seugLLoMwBLgOQgSstRVudlDuAPBKfWxK9oahPGQcI6C5XPC4BHMlOCq8teK7VPCv6IalOEHAaxeKRISSfBCQFXxmf/sEsBcu+BUp4FuG5hJGS/SPBoXvDMHkgL5KjmRgg2gViZS0QQKrbb8O19oxAu/CtOgoTzXajcIIJJEJNdu2COxBwl+Kjit74dJXBhEy4E5Gx8F6zA2QRLvcD/NeBC8f4FNiyRMN5emHsAAAAASUVORK5CYII="},3019:function(e,t){e.exports="data:image/png;base64,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"},"520a":function(e,t,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(e){var t,n,o,l,g=this;return u&&(n=new RegExp("^"+g.source+"$(?!\\s)",r.call(g))),s&&(t=g[c]),o=a.call(g,e),s&&o&&(g[c]=g.global?o.index+o[0].length:t),u&&o&&o.length>1&&i.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},a481:function(e,t,n){"use strict";var r=n("cb7c"),a=n("4bf8"),i=n("9def"),o=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,g=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,v){return[function(r,a){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,a):n.call(String(i),r,a)},function(e,t){var a=v(n,e,this,t);if(a.done)return a.value;var g=r(e),p=String(this),f="function"===typeof t;f||(t=String(t));var b=g.global;if(b){var h=g.unicode;g.lastIndex=0}var m=[];while(1){var O=s(g,p);if(null===O)break;if(m.push(O),!b)break;var C=String(O[0]);""===C&&(g.lastIndex=c(p,i(g.lastIndex),h))}for(var S="",x=0,w=0;w<m.length;w++){O=m[w];for(var I=String(O[0]),E=u(l(o(O.index),p.length),0),R=[],k=1;k<O.length;k++)R.push(d(O[k]));var y=O.groups;if(f){var j=[I].concat(R,E,p);void 0!==y&&j.push(y);var P=String(t.apply(void 0,j))}else P=A(I,p,E,R,y,t);E>=x&&(S+=p.slice(x,E)+P,x=E+I.length)}return S+p.slice(x)}];function A(e,t,r,i,o,c){var s=r+e.length,u=i.length,l=f;return void 0!==o&&(o=a(o),l=p),n.call(c,l,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=g(l/10);return 0===p?n:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):n}c=i[l-1]}return void 0===c?"":c}))}}))},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c64d:function(e,t,n){e.exports=n.p+"img/grey.fb4a97dd.jpg"},d562:function(e,t,n){"use strict";var r=n("e233"),a=n.n(r);a.a},e233:function(e,t,n){}}]);