/*! For license information please see 469859d8.3f8b46aa.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[3131,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),i=n(7294),a=n(2389),l=n(5773),s=n(6010),c="tabItem_LplD";function o(e){var t,n,a,o=e.lazy,u=e.block,p=e.defaultValue,d=e.values,g=e.groupId,m=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),x=y.tabGroupChoices,w=y.setTabGroupChoices,k=(0,i.useState)(v),E=k[0],q=k[1],O=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var N=x[g];null!=N&&N!==E&&h.some((function(e){return e.value===N}))&&q(N)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==E&&(P(t),q(r),null!=g&&w(g,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:C,onClick:C},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,a.Z)();return i.createElement(o,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),i=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,s),"beginner"===c[0]&&c.shift();var o=c.length;function u(e){var t=e.id,n=c.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/o*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},2473:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return Z},default:function(){return W},frontMatter:function(){return D},metadata:function(){return M},toc:function(){return G}});var r,i,a,l,s,c,o,u,p,d,g,m,b,h,f,v,y,x,w,k,E,q=n(7462),O=n(3366),P=n(7294),N=n(3905),C=n(1961),T=n(9877),j=n(8215),S=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I=function(e){var t=e.title,n=e.titleId,q=R(e,S);return P.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,r||(r=P.createElement("defs",null,P.createElement("filter",{x:0,y:0,width:1,height:1,id:"a"},P.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=P.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red5.svg"})),a||(a=P.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow3.svg"})),l||(l=P.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=P.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),c||(c=P.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple2.svg"})),P.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=P.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=P.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),P.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,p||(p=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,d||(d=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,g||(g=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,m||(m=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,b||(b=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),P.createElement("svg",B({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,h||(h=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,f||(f=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),v||(v=P.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),P.createElement("svg",B({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,y||(y=P.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),x||(x=P.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),w||(w=P.createElement("circle",{cx:745,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),P.createElement("svg",B({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,k||(k=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",B({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":n},q),t?P.createElement("title",{id:n},t):null,E||(E=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},_=["components"],D={id:"play-clues-question-1",title:"Play Clues (Question 1)"},Z=void 0,M={unversionedId:"beginner/play-clues-question-1",id:"beginner/play-clues-question-1",title:"Play Clues (Question 1)",description:"<Tabs",source:"@site/docs/beginner/play-clues-question-1.md",sourceDirName:"beginner",slug:"/beginner/play-clues-question-1",permalink:"/docs/beginner/play-clues-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/play-clues-question-1.md",tags:[],version:"current",frontMatter:{id:"play-clues-question-1",title:"Play Clues (Question 1)"},sidebar:"mainSidebar",previous:{title:"Play Clues",permalink:"/docs/beginner/play-clues"},next:{title:"Play Clues (Question 2)",permalink:"/docs/beginner/play-clues-question-2"}},G=[],V={toc:G};function W(e){var t=e.components,n=(0,O.Z)(e,_);return(0,N.kt)("wrapper",(0,q.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,N.kt)(C.Z,{id:"play-clues-question-1",mdxType:"BeginnersGuideProgress"}),(0,N.kt)(T.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,N.kt)(j.Z,{value:"question",mdxType:"TabItem"},(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},"Alice clues blue to Bob, which touches one card on slot 3."),(0,N.kt)("li",{parentName:"ul"},"From Bob's perspective, this must be a ",(0,N.kt)("em",{parentName:"li"},"Play Clue"),". Bob marks down the identity of the card."),(0,N.kt)("li",{parentName:"ul"},"What ",(0,N.kt)("em",{parentName:"li"},"card note")," (i.e. card identity) does Bob write?"))),(0,N.kt)(j.Z,{value:"solution",mdxType:"TabItem"},(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},'Bob writes "blue 2".',(0,N.kt)("ul",{parentName:"li"},(0,N.kt)("li",{parentName:"ul"},"(Since the blue 1 is already played, the next blue card to play is the blue 2.)")))))),(0,N.kt)(I,{mdxType:"PlayCluesQuestion1"}))}W.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return c}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);