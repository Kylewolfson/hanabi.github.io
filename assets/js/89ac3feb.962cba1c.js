(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6879],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,p=m["".concat(c,".").concat(d)]||m[d]||h[d]||n;return r?a.createElement(p,l(l({ref:t},u),{},{components:r})):a.createElement(p,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(7294),i=r(9443);var n=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var h=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,h=e.values,m=e.groupId,d=e.className,p=n(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,a.useState)(i),b=y[0],x=y[1],v=a.Children.toArray(e.children),w=[];if(null!=m){var k=g[m];null!=k&&k!==b&&h.some((function(e){return e.value===k}))&&x(k)}var E=function(e){var t=e.currentTarget,r=w.indexOf(t),a=h[r].value;x(a),null!=m&&(f(m,a),setTimeout((function(){var e,r,a,i,n,l,o,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,i=e.bottom,n=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&n<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case s:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e){var t=e.className,r=e.counterClockwise,i=e.dashRatio,n=e.pathRadius,c=e.strokeWidth,s=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:n,dashRatio:i,counterClockwise:r})),d:l({pathRadius:n,counterClockwise:r}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,i=2*Math.PI*a,n=(1-r)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-n:n)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,i=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),h=this.getPathRatio();return(0,a.createElement)("svg",{className:i.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(n,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),(0,a.createElement)(n,{className:i.path,counterClockwise:l,dashRatio:h*t,pathRadius:u,strokeWidth:c,style:o.path}),s?(0,a.createElement)("text",{className:i.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(c,{value:r,text:r+"%"}))}},515:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return te},default:function(){return ne},frontMatter:function(){return ee},metadata:function(){return re},toc:function(){return ae}});var a,i,n,l,o,c,s,u,h,m,d,p,g,f,y,b,x,v,w,k,E,N,C,O,P,T,j,_,I,B,R,S,H,D,Z,q,W,M,A,V=r(2122),Q=r(9756),z=r(7294),F=r(3905),G=r(8787),L=r(5064),X=r(8215),U=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Y=function(e){var t=e.title,r=e.titleId,V=J(e,U);return z.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,a||(a=z.createElement("defs",null,z.createElement("filter",{x:0,y:0,width:1,height:1,id:"clue-interpretation-question-5_yml__a"},z.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=z.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red5.svg"})),n||(n=z.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=z.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),o||(o=z.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),c||(c=z.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple2.svg"})),z.createElement("svg",K({height:100,width:90,x:464,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,s||(s=z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=z.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#clue-interpretation-question-5_yml__a)",x:"0%",y:"50%"},"Clue Giver")),h||(h=z.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),z.createElement("svg",K({height:100,width:70,x:554,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,m||(m=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:632,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,d||(d=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:710,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,p||(p=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:788,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,g||(g=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:866,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,f||(f=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,y||(y=z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),z.createElement("svg",K({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,b||(b=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,x||(x=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),v||(v=z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),z.createElement("svg",K({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,w||(w=z.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),k||(k=z.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),E||(E=z.createElement("circle",{cx:745,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),N||(N=z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),z.createElement("svg",K({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,C||(C=z.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),O||(O=z.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),P||(P=z.createElement("circle",{cx:823,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),T||(T=z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),j||(j=z.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/blue2.svg",y:125})),_||(_=z.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow_dark.svg",y:85})),I||(I=z.createElement("circle",{cx:901,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),z.createElement("svg",K({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,B||(B=z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),z.createElement("svg",K({height:100,width:70,x:554,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,R||(R=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,S||(S=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,H||(H=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,D||(D=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),z.createElement("svg",K({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":r},V),t?z.createElement("title",{id:r},t):null,Z||(Z=z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q||(q=z.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),W||(W=z.createElement("image",{height:100,width:70,x:138.5,xlinkHref:"/img/pieces/cards/blue3.svg",y:153.333})),M||(M=z.createElement("image",{height:100,width:70,x:173.5,xlinkHref:"/img/pieces/cards/blue4.svg",y:186.667})),A||(A=z.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},$=["components"],ee={id:"clue-interpretation-question-5",title:"Clue Interpretation (Question 5)"},te=void 0,re={unversionedId:"beginner/clue-interpretation-question-5",id:"beginner/clue-interpretation-question-5",isDocsHomePage:!1,title:"Clue Interpretation (Question 5)",description:"<Tabs",source:"@site/docs/beginner/clue-interpretation-question-5.md",sourceDirName:"beginner",slug:"/beginner/clue-interpretation-question-5",permalink:"/docs/beginner/clue-interpretation-question-5",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/clue-interpretation-question-5.md",version:"current",frontMatter:{id:"clue-interpretation-question-5",title:"Clue Interpretation (Question 5)"},sidebar:"mainSidebar",previous:{title:"Clue Interpretation (Question 4)",permalink:"/docs/beginner/clue-interpretation-question-4"},next:{title:"The Three Main Principles",permalink:"/docs/beginner/three-main-principles"}},ae=[],ie={toc:ae};function ne(e){var t=e.components,r=(0,Q.Z)(e,$);return(0,F.kt)("wrapper",(0,V.Z)({},ie,r,{components:t,mdxType:"MDXLayout"}),(0,F.kt)(G.Z,{part:"36",mdxType:"BeginnersGuideProgress"}),(0,F.kt)(L.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,F.kt)(X.Z,{value:"question",mdxType:"TabItem"},(0,F.kt)("ul",null,(0,F.kt)("li",{parentName:"ul"},"Bob has a clued 2 in this hand."),(0,F.kt)("li",{parentName:"ul"},"Alice clues blue to Bob, touching slot 3, slot 4, and slot 5.")),(0,F.kt)("ol",null,(0,F.kt)("li",{parentName:"ol"},"What slot is focused?"),(0,F.kt)("li",{parentName:"ol"},"Is this a ",(0,F.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,F.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,F.kt)("li",{parentName:"ol"},"What identity does Bob write on the focused card?"))),(0,F.kt)(X.Z,{value:"solution",mdxType:"TabItem"},(0,F.kt)("ol",null,(0,F.kt)("li",{parentName:"ol"},'Slot 4 is focused (i.e. the "new" card that was on chop).'),(0,F.kt)("li",{parentName:"ol"},"Blue 1 is played on the stacks and Bob already has a blue 2. Thus, the focused blue card can be either a blue 3, a blue 4, or a blue 5.",(0,F.kt)("ul",{parentName:"li"},(0,F.kt)("li",{parentName:"ul"},"If it is a blue 3, then this would be a ",(0,F.kt)("em",{parentName:"li"},"Chop-Focus Delayed Play Clue")," through his own blue 2. That is legal."),(0,F.kt)("li",{parentName:"ul"},"If it is a blue 4, then this would be a ",(0,F.kt)("em",{parentName:"li"},"Critical Save")," on the blue 4."),(0,F.kt)("li",{parentName:"ul"},"If it is a blue 5, then it wouldn't make any sense, because blue 5 is not playable. Blue 5 is critical, but it must be saved with a number 5 clue as a ",(0,F.kt)("em",{parentName:"li"},"5 Save"),"."),(0,F.kt)("li",{parentName:"ul"},"Thus, this can either be a ",(0,F.kt)("em",{parentName:"li"},"Chop-Focus Delayed Play Clue")," on the blue 3 or a ",(0,F.kt)("em",{parentName:"li"},"Critical Save")," on the blue 4."))),(0,F.kt)("li",{parentName:"ol"},'Bob writes "blue 3 or blue 4" on slot 3.')),(0,F.kt)("ul",null,(0,F.kt)("li",{parentName:"ul"},"Note that before this clue, Bob was not able to play the 2 in his hand, because it could have been the yellow 2 (which is not playable)."),(0,F.kt)("li",{parentName:"ul"},'This blue clue "filled in" his 2 to be the blue 2, so now Bob can go ahead and play it.'),(0,F.kt)("li",{parentName:"ul"},"However, this does ",(0,F.kt)("strong",{parentName:"li"},"not")," make the clue a ",(0,F.kt)("em",{parentName:"li"},"Play Clue"),". Since it was focused on slot 3, it first and foremost a potential ",(0,F.kt)("em",{parentName:"li"},"Save Clue"),' that happened to have a "side-effect" of making the blue 2 playable. (Blue 2 was not the focus of the clue.)')))),(0,F.kt)(Y,{mdxType:"ClueInterpretationQuestion5"}))}ne.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);