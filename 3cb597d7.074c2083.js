(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{171:function(t,e,n){"use strict";n.r(e);var r=n(0),u=n.n(r),a=n(10);var i=function(t){var e=t.children,n=t.fallback;return a.a.canUseDOM&&null!=e?u.a.createElement(u.a.Fragment,null,e()):n||null},c=n(177),o=n(182);e.default=function(t){var e=t.lightImgSrc,n=t.darkImgSrc,r=t.altText;return u.a.createElement(i,{fallback:u.a.createElement("img",{src:Object(c.a)(n),alt:r})},(function(){var t=Object(o.a)().isDarkTheme?n:e,a=Object(c.a)(t);return u.a.createElement("img",{src:a,alt:r})}))}},177:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var r=n(22),u=n(181);function a(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,o=a.absolute,s=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(u.b)(n))return n;if(c)return e+n;var f=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+f:f}(a,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},181:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function u(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return u}))},182:function(t,e,n){"use strict";var r=n(0),u=n(186);e.a=function(){var t=Object(r.useContext)(u.a);if(null==t)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return t}},186:function(t,e,n){"use strict";var r=n(0),u=n.n(r).a.createContext(void 0);e.a=u}}]);