/*! For license information please see a1a450e5.98e06c2e.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[7710],{8173:function(e,t,r){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(r),p=n,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?i.createElement(g,l(l({ref:t},u),{},{components:r})):i.createElement(g,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=r[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3"]},"beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(8173),n=r(7294),a=r(5774),l=r(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,r){for(var n,a=(0,i.Z)(r);!(n=a()).done;){var l=n.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function u(e){var t=e.id,r=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===r)throw new Error("page id not found in sidebar");var i=Math.round((r+1)/o*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(a.Ip,{value:i,text:i+"%"}))}},9572:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return de},default:function(){return fe},frontMatter:function(){return me},metadata:function(){return pe},toc:function(){return ge}});var i,n,a,l,c,s,o,u,m,d,p,g,h,f,y,b,v,x,w,E,k,O,N,P,C=r(2122),q=r(9756),j=r(7294),S=r(3905),_=r(1961),T=["title","titleId"];function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var A,H,M,I,D,G,W,Z,z,V,X,F,U,L,Q,$,J,K,Y,ee,te,re,ie,ne,ae=function(e){var t=e.title,r=e.titleId,C=R(e,T);return j.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,i||(i=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"play-clue-1_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})),j.createElement("filter",{id:"play-clue-1_yml__b"},j.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),j.createElement("feComponentTransfer",{result:"shadow"},j.createElement("feFuncA",{type:"linear",slope:.5})),j.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),j.createElement("feMerge",null,j.createElement("feMergeNode",{in:"shadow"}),j.createElement("feMergeNode",{in:"border"}),j.createElement("feMergeNode",{in:"SourceGraphic"}))))),n||(n=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),a||(a=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),s||(s=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),j.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,o||(o=j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#play-clue-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,d||(d=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,p||(p=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,g||(g=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,h||(h=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,f||(f=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,y||(y=j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),j.createElement("svg",B({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,b||(b=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),v||(v=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),j.createElement("svg",B({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,x||(x=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),w||(w=j.createElement("image",{height:70,width:50,x:642,xlinkHref:"/img/pieces/arrow.svg",y:85})),E||(E=j.createElement("circle",{cx:667,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),j.createElement("svg",B({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,k||(k=j.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#play-clue-1_yml__b)"},"(1)"))),j.createElement("svg",B({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,O||(O=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,N||(N=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",B({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},C),t?j.createElement("title",{id:r},t):null,P||(P=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},le=["title","titleId"];function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var oe=function(e){var t=e.title,r=e.titleId,i=se(e,le);return j.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,A||(A=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"play-clue-2_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),H||(H=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red2.svg"})),M||(M=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),I||(I=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),D||(D=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),G||(G=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),j.createElement("svg",ce({height:100,width:90,x:464,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,W||(W=j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),Z||(Z=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#play-clue-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),z||(z=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",ce({height:100,width:70,x:554,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,V||(V=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:632,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,X||(X=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:710,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,F||(F=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:788,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,U||(U=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:866,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,L||(L=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,Q||(Q=j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),j.createElement("svg",ce({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,$||($=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,J||(J=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),K||(K=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),j.createElement("svg",ce({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,Y||(Y=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/1.svg"}))),ee||(ee=j.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),te||(te=j.createElement("circle",{cx:745,cy:110,r:15,stroke:"#fff",strokeWidth:2})),j.createElement("svg",ce({height:16,width:16,x:737,y:102,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,re||(re=j.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"1"))),j.createElement("svg",ce({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,ie||(ie=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ce({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},i),t?j.createElement("title",{id:r},t):null,ne||(ne=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},ue=["components"],me={id:"play-clues",title:"Play Clues"},de=void 0,pe={unversionedId:"beginner/play-clues",id:"beginner/play-clues",isDocsHomePage:!1,title:"Play Clues",description:"- The first type of clue is called a Play Clue.",source:"@site/docs/beginner/play-clues.md",sourceDirName:"beginner",slug:"/beginner/play-clues",permalink:"/docs/beginner/play-clues",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/play-clues.md",version:"current",frontMatter:{id:"play-clues",title:"Play Clues"},sidebar:"mainSidebar",previous:{title:"The Two Types of Clues",permalink:"/docs/beginner/two-types-of-clues"},next:{title:"Play Clues (Question 1)",permalink:"/docs/beginner/play-clues-question-1"}},ge=[],he={toc:ge};function fe(e){var t=e.components,r=(0,q.Z)(e,ue);return(0,S.kt)("wrapper",(0,C.Z)({},he,r,{components:t,mdxType:"MDXLayout"}),(0,S.kt)(_.Z,{id:"play-clues",mdxType:"BeginnersGuideProgress"}),(0,S.kt)("ul",null,(0,S.kt)("li",{parentName:"ul"},"The first type of clue is called a ",(0,S.kt)("em",{parentName:"li"},"Play Clue"),"."),(0,S.kt)("li",{parentName:"ul"},"The goal of Hanabi is to get all of the cards played on the stacks. Thus, we give ",(0,S.kt)("em",{parentName:"li"},"Play Clues")," to each other to communicate that specific cards are playable."),(0,S.kt)("li",{parentName:"ul"},"Here, Alice clues red to Bob, touching a card on slot 2."),(0,S.kt)("li",{parentName:"ul"},'This is a message to "play this card". Thus, it must be the red 1 (because no red cards are played on the stacks yet).')),(0,S.kt)(ae,{mdxType:"PlayClue1"}),(0,S.kt)("ul",null,(0,S.kt)("li",{parentName:"ul"},(0,S.kt)("em",{parentName:"li"},"Play Clues")," can be given with either a color clue or a number clue."),(0,S.kt)("li",{parentName:"ul"},"Here, Alice clues number 1 to Bob, touching a card on slot 3."),(0,S.kt)("li",{parentName:"ul"},'Similar to before, this is a message to "play this card". Thus, it must be a yellow 1 or a blue 1 (since those are the only two 1\'s that are not played yet).')),(0,S.kt)(oe,{mdxType:"PlayClue2"}))}fe.isMDXComponent=!0},5774:function(e,t,r){"use strict";r.d(t,{Ip:function(){return s}});var i=r(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:a,dashRatio:n,counterClockwise:r})),d:l({pathRadius:a,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,n=2*Math.PI*i,a=(1-r)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,r),i)-r)/(i-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,i.createElement)("svg",{className:n.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:n.background,style:c.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:c.trail}),(0,i.createElement)(a,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:c.path}),o?(0,i.createElement)("text",{className:n.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);