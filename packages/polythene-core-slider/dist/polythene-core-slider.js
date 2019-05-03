!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c={component:"pe-slider",control:"pe-slider__control",label:"pe-slider__label",pin:"pe-slider__pin",thumb:"pe-slider__thumb",tick:"pe-slider__tick",ticks:"pe-slider__ticks",track:"pe-slider__track",trackBar:"pe-slider__track-bar",trackBarValue:"pe-slider__track-bar-value",trackPart:"pe-slider__track-part",trackPartRest:"pe-slider__track-rest",trackPartValue:"pe-slider__track-value",hasFocus:"pe-slider--focus",hasPin:"pe-slider--pin",hasTicks:"pe-slider--ticks",hasTrack:"pe-slider--track",isActive:"pe-slider--active",isAtMin:"pe-slider--min",isDisabled:"pe-slider--disabled",tickValue:"pe-slider__tick--value"},u=function(e,r){return t.isTouch&&e.touches?r?e.touches[0].pageY:e.touches[0].pageX:r?e.pageY:e.pageX};e._Slider=function(e){var o,l=e.h,s=e.a,d=e.useState,f=e.useEffect,v=e.useRef,p=e.getRef,k=i(e,["h","a","useState","useEffect","useRef","getRef"]),y=void 0!==k.min?k.min:0,h=void 0!==k.max?k.max:100,b=h-y,m=void 0!==k.stepSize?k.stepSize:1,g=1/m,_=void 0!==k.ticks&&!1!==k.ticks,w=void 0===k.interactiveTrack||k.interactiveTrack,E=Math.min(100,parseInt(b/m,10)),x=void 0!==k.defaultValue?k.defaultValue:void 0!==k.value?k.value:0,P=v(),N=v(),S=v(),O=v(),R=a(d(),2),j=R[0],A=R[1],M=a(d(y),2),V=M[0],B=M[1],C=a(d(!1),2),D=C[0],T=C[1],F=a(d(),2),L=F[0],I=F[1],q=a(d(),2),U=q[0],W=q[1],z=a(d(!1),2),K=z[0],X=z[1],Y=v(!1),H=v(0),G=v(0),J=v(0),Q=v(0),Z=function(){if(S.current&&t.isClient){Q.current=parseFloat(t.getStyle({element:S.current,prop:"width"})),G.current=N.current.getBoundingClientRect().width-Q.current;var e=window.getComputedStyle(N.current);J.current=parseFloat(e.marginLeft)}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;H.current=N.current.getBoundingClientRect().left-(J.current-Q.current/2)+e},ee=function(e){var t=u(e)-H.current,r=y+(t-J.current)/G.current*b;ne(r)},te=function(e){if(!Y.current){e.preventDefault(),Y.current=!0,X(!0),ce();var r=function(e){Y.current&&ee(e)},n=function e(){Y.current&&(ce(),t.isClient&&(t.pointerMoveEvent.forEach(function(e){return window.removeEventListener(e,r)}),t.pointerEndMoveEvent.forEach(function(t){return window.removeEventListener(t,e)})),Y.current=!1,X(!1))};t.isClient&&(t.pointerMoveEvent.forEach(function(e){return window.addEventListener(e,r)}),t.pointerEndMoveEvent.forEach(function(e){return window.addEventListener(e,n)})),Z()}},re=function(e){var t=e.value,r=e.shouldNotify,n=void 0!==r&&r;t<y&&(t=y),t>h&&(t=h);var i=m?Math.round(t*g)/g:t;B((i-y)/b),W(i),I(i),n&&k.onChange&&k.onChange({value:i})},ne=function(e){re({value:e,shouldNotify:!0})},ie=function(e){return ne(L+(e?10:1)*(m||1))},ae=function(e){return ne(L-(e?10:1)*(m||1))},ce=function(){P.current&&P.current.blur(),P.current=void 0,T(!1)};f(function(){j&&(N.current=j.querySelector(".".concat(c.track)),S.current=j.querySelector(".".concat(c.control)),O.current=j.querySelector(".".concat(c.pin)),Z(),re({value:x}))},[j]),f(function(){k.pin&&function(){if(S.current&&O.current){var e=V*G.current;O.current.style.left=e+"px"}}()},[L]),f(function(){U!==k.value&&re({value:k.value})},[k.value]);var ue=n({},t.filterSupportedAttributes(k),p(function(e){return e&&!j&&A(e)}),k.testId&&{"data-test-id":k.testId},{className:[c.component,k.disabled?c.isDisabled:null,k.pin?c.hasPin:null,w?c.hasTrack:null,K?c.isActive:null,D?c.hasFocus:null,0===V?c.isAtMin:null,_?c.hasTicks:null,"dark"===k.tone?"pe-dark-tone":null,"light"===k.tone?"pe-light-tone":null,k.className||k[s.class]].join(" ")}),oe=function(e){e.preventDefault(),Y.current||(Z(),$(0),ee(e),te(e))},le=function(e){e.preventDefault(),Z(),function(e){var t=S.current.getBoundingClientRect().left,r=u(e)-t-Q.current/2;$(r)}(e),te(e)},se=V+" 1 0%",de=1-V,fe=de+" 1 0%",ve=[k.before,l("div",n({},{className:c.track},w&&!k.disabled&&t.pointerStartMoveEvent.reduce(function(e,t){return e[s["on".concat(t)]]=oe,e},{})),[l("div",{className:c.trackPart+" "+c.trackPartValue,key:"trackPartValue",style:{flex:se,msFlex:se,WebkitFlex:se}},l("div",{className:c.trackBar},l("div",{className:c.trackBarValue}))),l("div",n({},{className:c.control,key:"control"},k.disabled?{disabled:!0}:(o={},r(o,s.tabindex,k[s.tabindex]||0),r(o,s.onfocus,function(){return e=S.current,ce(),P.current=e,void T(!0);var e}),r(o,s.onblur,function(){return ce()}),r(o,s.onkeydown,function(e){"Tab"!==e.key&&e.preventDefault(),"Escape"===e.key||"Esc"===e.key?S.current.blur(e):"ArrowLeft"===e.key||"ArrowDown"===e.key||"Left"===e.key||"Down"===e.key?ae(!!e.shiftKey):"ArrowRight"===e.key||"ArrowUp"===e.key||"Right"===e.key||"Up"===e.key?ie(!!e.shiftKey):"Home"===e.key?ne(y):"End"===e.key?ne(h):"PageDown"===e.key?ae(!0):"PageUp"===e.key&&ie(!0),Z()}),o),!k.disabled&&t.pointerStartMoveEvent.reduce(function(e,t){return e[s["on".concat(t)]]=le,e},{}),k.events?k.events:null,_?{step:E}:null),k.icon?l("div",{className:c.thumb,key:"icon"},k.icon):null),l("div",{className:c.trackPart+" "+c.trackPartRest,key:"trackPartRest",style:{flex:fe,msFlex:fe,WebkitFlex:fe,maxWidth:100*de+"%"}},l("div",{className:c.trackBar},l("div",{className:c.trackBarValue}))),_&&!k.disabled?l("div",{className:c.ticks,key:"ticks"},function(e,t,r,n){for(var i=[],a=n/r,u=0;u<t+1;)i.push(e("div",{className:u<=a?[c.tick,c.tickValue].join(" "):c.tick,key:"tick-".concat(u)})),u++;return i}(l,E,m,L)):null,_&&k.pin&&!k.disabled?l("div",{className:c.pin,key:"pin",value:L}):null]),k.after];return l(k.element||"div",ue,ve)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-slider.js.map
