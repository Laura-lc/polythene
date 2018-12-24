!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var o={component:"pe-menu",panel:"pe-menu__panel",content:"pe-menu__content",placeholder:"pe-menu__placeholder",backdrop:"pe-menu__backdrop",floating:"pe-menu--floating",origin:"pe-menu--origin",permanent:"pe-menu--permanent",showBackdrop:"pe-menu--backdrop",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",isTopMenu:"pe-menu--top-menu",listTile:"pe-list-tile",selectedListTile:"pe-list-tile--selected"},i=function(e,i){if(!t.isServer&&i.target){var r=document.querySelector(i.target);if(r){var a=e.panelEl;if(a){var s=t.stylePropCompare({element:a,prop:"position",equals:"fixed"});if(s&&!function(e){var n=e.state;return e.attrs.topMenu||t.stylePropCompare({element:n.dom(),pseudoSelector:":before",prop:"content",contains:'"'.concat("top_menu",'"')})}({state:e,attrs:i}))return n(a.style,{}),void a.offsetHeight;var l=e.contentEl,p=a.parentNode.getBoundingClientRect(),c=r.getBoundingClientRect(),u=void 0!==i.offsetH?i.offsetH:void 0!==i.offset?i.offset:0,d=void 0!==i.offsetV?i.offsetV:"79%",f=-1!==u.toString().indexOf("%")?Math.round(.01*parseFloat(u)*c.width):Math.round(parseFloat(u)),h=-1!==d.toString().indexOf("%")?Math.round(.01*parseFloat(d)*c.height):Math.round(parseFloat(d)),m=i.origin||"top",v=m.split(/\W+/).reduce(function(e,t){return e[t]=!0,e},{}),g=l.querySelectorAll("."+o.listTile)[0];if(i.reposition){var y=l.querySelector("."+o.selectedListTile);if(g&&y){var b=g.getBoundingClientRect(),E=y.getBoundingClientRect();h=b.top-E.top}var w=(y||g).getBoundingClientRect(),T=r.getBoundingClientRect().height-w.height;h+=Math.abs(T)/2}else i.origin&&!s&&(v.top?h+=c.top-p.top:v.bottom&&(h+=c.top-p.bottom));if(i.height){var k=g?g.clientHeight:48;if("max"===i.height){var D=h,M=k;a.style.height="calc(100% - ".concat(D+M,"px)")}else{var S=/^\d+$/.test(i.height.toString())?"".concat(i.height,"px"):i.height;a.style.height=S}}var _=a.style.transitionDuration;a.style.transitionDuration="0ms",a.parentNode&&!s&&(v.right?a.style.right=c.right-p.right+f+"px":a.style.left=c.left-p.left+f+"px",v.bottom?a.style.bottom=h+"px":a.style.top=h+"px",a.style.transformOrigin=m.split(/\W+/).join(" ")),a.offsetHeight,a.style.transitionDuration=_}}}},r=function(e,t,n){return{state:e,attrs:t,isShow:n,beforeTransition:n?function(){return e.update()}:null,domElements:{el:e.panelEl,showClassElement:e.dom()},showClass:o.visible}},a=function(e,n){return t.transitionComponent(r(e,n,!1))},s=function(e,n){var o=e.state,i=e.attrs;"mount"===n?(t.subscribe("resize",o.update),t.subscribe("keydown",o.handleEscape),setTimeout(function(){o.activateDismissTap(),function(e,n){t.transitionComponent(r(e,n,!0))}(o,i)},0)):(t.unsubscribe("resize",o.update),t.unsubscribe("keydown",o.handleEscape),o.deActivateDismissTap())},l=Object.freeze({getElement:function(e){return e.attrs.element||"div"},getInitialState:function(e,n){var o=n(null),i=e.attrs;void 0!==i.offset&&t.deprecation("Menu",{option:"offset",newOption:"offsetH"}),void 0!==i.size&&t.deprecation("Menu",{option:"size",newOption:"width"});var r=n(!1),a=n(!1);return{dom:o,visible:r,transitioning:a,activateDismissTap:void 0,contentEl:void 0,deActivateDismissTap:void 0,handleDismissTap:void 0,handleEscape:void 0,panelEl:void 0,update:void 0,redrawOnUpdate:n.merge([a])}},onMount:function(e){if(e.dom){var r=e.state,l=e.attrs;r.dom(e.dom),r.panelEl=e.dom.querySelector(".".concat(o.panel)),r.contentEl=e.dom.querySelector(".".concat(o.content)),l.permanent||(r.handleDismissTap=function(e){e.target!==r.panelEl&&a(r,l)},r.update=function(){i(r,l),function(e,n){if(!t.isServer&&n.scrollTarget){var o=document.querySelector(n.scrollTarget);o&&(e.contentEl.scrollTop=o.offsetTop)}}(r,l)},r.activateDismissTap=function(){t.pointerEndMoveEvent.forEach(function(e){return document.addEventListener(e,r.handleDismissTap)})},r.deActivateDismissTap=function(){t.pointerEndMoveEvent.forEach(function(e){return document.removeEventListener(e,r.handleDismissTap)})},r.handleEscape=function(e){"Escape"!==e.key&&"Esc"!==e.key||a(r,n({},l,{hideDelay:0}))},s(e,"mount"))}},onUnMount:function(e){e.attrs.permanent||s(e,"unmount")},createProps:function(e,i){var r,a,s=i.keys,l=e.attrs,p=l.type||"floating";return n({},t.filterSupportedAttributes(l),{className:[o.component,l.permanent?o.permanent:null,l.origin?o.origin:null,l.backdrop?o.showBackdrop:null,l.topMenu?o.isTopMenu:null,"floating"!==p||l.permanent?null:o.floating,l.width||l.size?(a=l.width||l.size,r=a<1.5?1.5:a,o.width_n+r.toString().replace(".","-")):null,"dark"===l.tone?"pe-dark-tone":null,"light"===l.tone?"pe-light-tone":null,l.className||l[s.class]].join(" ")})},createContent:function(e,t){var n=t.renderer,i=t.Shadow,r=e.attrs,a=void 0!==r.shadowDepth?r.shadowDepth:void 0!==r.z?r.z:1;return[n("div",{key:"backdrop",className:o.backdrop}),n("div",{className:o.panel,key:"panel"},[n(i,{shadowDepth:a,animated:!0,key:"shadow"}),n("div",{className:o.content,style:r.style,key:"content"},r.content?r.content:e.children)])]}});e.coreMenu=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-menu.js.map
