!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,n){"use strict";function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var u={base:"pe-button",component:"pe-button pe-text-button",content:"pe-button__content",focus:"pe-button__focus",label:"pe-button__label",wash:"pe-button__wash",borders:"pe-button--borders",disabled:"pe-button--disabled",focused:"pe-button--focus",inactive:"pe-button--inactive",selected:"pe-button--selected"},c=n.vars.rgba,d=n.vars.unit_touch_height,_={margin_h:n.vars.grid_unit,border_radius:n.vars.unit_item_border_radius,font_size:14,font_weight:500,outer_padding_v:(d-36)/2,padding_h:2*n.vars.grid_unit,padding_v:11,min_width:8*n.vars.grid_unit_component,text_transform:"uppercase",border_width:0,color_light_background:"transparent",color_light_text:c(n.vars.color_light_foreground,n.vars.blend_light_text_primary),color_light_hover_background:c(n.vars.color_light_foreground,n.vars.blend_light_background_hover),color_light_focus_background:c(n.vars.color_light_foreground,n.vars.blend_light_background_hover),color_light_active_background:c(n.vars.color_light_foreground,n.vars.blend_light_background_active),color_light_disabled_background:"transparent",color_light_disabled_text:c(n.vars.color_light_foreground,n.vars.blend_light_text_disabled),color_dark_background:"transparent",color_dark_text:c(n.vars.color_dark_foreground,n.vars.blend_dark_text_primary),color_dark_hover_background:c(n.vars.color_dark_foreground,n.vars.blend_dark_background_hover),color_dark_focus_background:c(n.vars.color_dark_foreground,n.vars.blend_dark_background_hover),color_dark_active_background:c(n.vars.color_dark_foreground,n.vars.blend_dark_background_active),color_dark_disabled_background:"transparent",color_dark_disabled_text:c(n.vars.color_dark_foreground,n.vars.blend_dark_text_disabled)},s=function(e){return[r({},e,{userSelect:"none",outline:"none",padding:0,textDecoration:"none",textAlign:"center",cursor:"pointer",".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive":{cursor:"default",pointerEvents:"none"},".pe-button--focus":{" .pe-button__focus":{opacity:1}}," .pe-button__content":{position:"relative",borderRadius:"inherit"}," .pe-button__label":[t.mixin.fontSmoothing(),{position:"relative",display:"block",borderRadius:"inherit",pointerEvents:"none"}]," .pe-button__wash, .pe-button__focus":[t.mixin.defaultTransition("background-color"),t.mixin.fit(),{borderRadius:"inherit",pointerEvents:"none"}]," .pe-button__focus":{opacity:0}," .pe-button__wash":{zIndex:0}})]},b=function(e,o){return[a({},e,[{display:"inline-block",minWidth:o.min_width+"px",margin:"0 "+o.margin_h+"px",padding:o.outer_padding_v+"px 0",background:"transparent",border:"none"," .pe-button__content":{position:"relative",borderWidth:0,padding:"0 "+o.padding_h+"px",borderRadius:o.border_radius+"px"}," .pe-button__label":{padding:o.padding_v+"px 0",fontSize:o.font_size+"px",lineHeight:o.font_size+"px",fontWeight:o.font_weight,textTransform:o.text_transform,whiteSpace:"pre"},".pe-button--borders":{" .pe-button__wash, pe-button__focus, .pe-ripple":t.mixin.fit(-1)," .pe-button__content":{borderStyle:"solid",borderWidth:"1px"}," .pe-button__label":{padding:o.padding_v-1+"px 0"}}}])]},p=function(e,o,t,n){var r=t["color_"+n+"_border"]||"transparent",a=t["color_"+n+"_active_border"]||r,l=t["color_"+n+"_disabled_border"]||r;return[i({},e.map(function(e){return e+o}).join(","),{"&, &:link, &:visited":{color:t["color_"+n+"_text"]}," .pe-button__content":{backgroundColor:t["color_"+n+"_background"],borderColor:r},".pe-button--disabled":{color:t["color_"+n+"_disabled_text"]," .pe-button__content":{backgroundColor:t["color_"+n+"_disabled_background"],borderColor:l}},".pe-button--selected":{" .pe-button__content":{backgroundColor:t["color_"+n+"_active_background"],borderColor:a}," .pe-button__focus":{opacity:1,backgroundColor:t["color_"+n+"_focus_background"]}},".pe-button--focus":{" .pe-button__focus":{opacity:1,backgroundColor:t["color_"+n+"_focus_background"]}}})]},f=function(e,o,t,n){var r=t["color_"+n+"_border"]||"transparent",a=t["color_"+n+"_border"]||r;return[i({},e.map(function(e){return e+o+":hover"}).join(","),{":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash":{backgroundColor:t["color_"+n+"_hover_background"],borderColor:a}})]},g=function(e,o){return[p([".pe-dark-tone",".pe-dark-tone "],e,o,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,o,"light"),f(["html.pe-no-touch .pe-dark-tone "],e,o,"dark"),f(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],e,o,"light")]},h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v=[b,g],k="."+u.base,y="."+u.component.replace(/ /g,"."),m=function(e,o){return t.styler.generateStyles([e,y],h({},_,o),v)};t.styler.generateStyles([k],_,[s]),t.styler.generateStyles([y],_,v);var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S=m,j=function(e,t){var n,r=t.updateState,a=t.keys,i=e.state,c=e.attrs,d=c.disabled,_=c.inactive||i.inactive,s=c.events&&c.events.onclick,b=function(){return r("inactive",!0),setTimeout(function(){return r("inactive",!1)},1e3*c.inactivate)};return w({},o.filterSupportedAttributes(c,{add:["formaction","type"]}),{className:[c.parentClass||u.component,c.selected?u.selected:null,d?u.disabled:null,_?u.inactive:null,c.borders?u.borders:null,i.focus?u.focused:null,"dark"===c.tone?"pe-dark-tone":null,"light"===c.tone?"pe-light-tone":null,c.className||c[a.class]].join(" ")},_?null:(n={},l(n,a.tabindex,d||_?-1:c[a.tabindex]||0),l(n,a.onclick,function(e){return void 0!==c.inactivate&&b(),s&&s(e),!0}),l(n,a.onfocus,function(){return r("focus",!i.mouseover)}),l(n,a.onblur,function(){return r("focus",!1)}),l(n,a.onmouseover,function(){return r("mouseover",!0)}),l(n,a.onmouseout,function(){return r("mouseover",!1)}),l(n,a.onkeydown,function(e){13===e.which&&i.focus&&(r("focus",!1),s&&s(e))}),n),c.style?{style:{}}:null,c.events,c.url,d?{disabled:!0}:null)},C=function(e,o){var t,n=o.renderer,r=o.keys,a=o.ripple,i=e.attrs,c=void 0!==i.ink&&i.ink===!1,d=i.disabled,_=i.children||e.children,s=i.content?i.content:i.label?"object"===x(i.label)?i.label:n("div",{key:"label",className:u.label},i.label):_?_:null,b=d||void 0!==i.wash&&!i.wash;return s?n("div",(t={},l(t,r.class,u.content),l(t,"key","button"),l(t,"style",i.style||{}),t),[!d&&i.shadowComponent?i.shadowComponent:null,d||c?null:a&&n(a,w({},i.ripple,{key:"ripple",target:function(){return e.dom}})),b?null:n("div",{key:"wash",className:u.wash}),d?null:n("div",{key:"focus",className:u.focus}),s]):null};e.createProps=j,e.createContent=C,e.theme=S,e.classes=u,e.vars=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-button.js.map
