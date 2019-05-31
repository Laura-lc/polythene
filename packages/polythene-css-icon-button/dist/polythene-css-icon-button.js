!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],n):n((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var l={general_styles:function(e){return[]}},a=function(e){var t;return o(t={},"color_"+e,function(t,o){return[n.sel(t,{"&, .pe-icon-button__label":{color:o["color_"+e]}})]}),o(t,"color_"+e+"_background",function(t,o){return[n.sel(t,{" .pe-icon-button__content":{backgroundColor:o["color_"+e+"_background"]}})]}),o(t,"color_"+e+"_disabled",function(t,o){return[n.sel(t,{".pe-button--disabled":{" .pe-button__content, .pe-icon-button__label":{color:o["color_"+e+"_disabled"]}}})]}),o(t,"color_"+e+"_wash_background",function(t,o){return[n.sel(t,{" .pe-button__wash":{backgroundColor:o["color_"+e+"_wash_background"]}})]}),t},_=function(e){var t;return o(t={},"color_"+e+"_hover",function(t,o){return[n.sel(t,{" .pe-icon-button__content":{color:o["color_"+e+"_hover"]}})]}),o(t,"color_"+e+"_label_hover",function(t,o){return[n.sel(t,{" .pe-icon-button__label":{color:o["color_"+e+"_label_hover"]}})]}),o(t,"color_"+e+"_background_hover",function(t,o){return[n.sel(t,{" .pe-icon-button__content":{backgroundColor:o["color_"+e+"_background_hover"]}})]}),t},i=r({},l,a("light")),c=r({},l,a("dark")),u=_("light"),d=_("dark"),s=n.createColor({varFns:{lightTintFns:i,darkTintFns:c,lightTintHoverFns:u,darkTintHoverFns:d}}),b=function(e){return{}},g=function(e){return{}},p=function(e,t,r){return n.sel(e,{" .pe-icon-button__label":o({},r?"paddingRight":"paddingLeft",t.label_padding_before+"px")})},f=function(e,t,r){return n.sel(e,{" .pe-icon-button__label":o({},r?"paddingLeft":"paddingRight",t.label_padding_after+"px")})},h={general_styles:function(e,t){return[n.sel(e,[b(t),{display:"inline-flex",alignItems:"center",cursor:"pointer",border:"none"," .pe-button__content":{display:"flex",alignItems:"center",fontSize:"1rem",borderRadius:"50%",position:"relative"}," .pe-icon-button__content":{lineHeight:1,borderRadius:"50%",pointerEvents:"none"}," .pe-button__wash":[n.mixin.fit(),{zIndex:0,borderRadius:"inherit",pointerEvents:"none",opacity:0}],"&:focus:not(:active)":{" .pe-button__wash":{opacity:1}},".pe-button--has-hover:hover":{" .pe-button__wash":{opacity:1}}},o({},"*[dir=rtl] ".concat(e,", .pe-rtl ").concat(e),[g(t)])])]},padding:function(e,t){return[n.sel(e,{" .pe-icon-button__content":{padding:t.padding+"px"}})]},padding_compact:function(e,t){return[n.sel(e,{".pe-icon-button--compact":{" .pe-icon-button__content":{padding:t.padding_compact+"px"}}})]},animation_duration:function(e,t){return[n.sel(e,{" .pe-button__content, .pe-button__wash":[n.mixin.defaultTransition("all",t.animation_duration)]})]},label_font_size:function(e,t){return[n.sel(e,{" .pe-icon-button__label":{fontSize:t.label_font_size+"px"}})]},label_line_height:function(e,t){return[n.sel(e,{" .pe-icon-button__label":{lineHeight:t.label_line_height+"px"}})]},label_font_weight:function(e,t){return[n.sel(e,{" .pe-icon-button__label":{fontWeight:t.label_font_weight}})]},label_text_transform:function(e,t){return[n.sel(e,{" .pe-icon-button__label":{textTransform:t.label_text_transform}})]},label_padding_after:function(e,t){return[n.sel(e,{}),f(e,t,!1),f(n.selectorRTL(e),t,!0)]},label_padding_before:function(e,t){return[n.sel(e,{}),p(e,t,!1),p(n.selectorRTL(e),t,!0)]}},v=n.createLayout({varFns:h}),y={general_styles:!0,animation_duration:t.vars.animation_duration,label_font_size:16,label_font_weight:400,label_line_height:20,label_padding_after:0,label_padding_before:1*t.vars.grid_unit,label_text_transform:"initial",label_top_margin_factor:1/12,padding:(t.vars.grid_unit_icon_button-t.vars.unit_icon_size)/2,padding_compact:(t.vars.grid_unit_icon_button-t.vars.unit_icon_size)/3,color_background:"transparent",color_light:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_label:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_disabled:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_wash_background:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_background_hover),color_dark:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_label:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_disabled:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_wash_background:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_background_hover)},k=[v,s],m=".".concat("pe-button pe-icon-button".replace(/ /g,".")),x=n.styler.createAddStyle(m,k,y),w=n.styler.createGetStyle(m,k,y);n.styler.addStyle({selectors:[m],fns:k,vars:y}),e.addStyle=x,e.color=s,e.getStyle=w,e.layout=v,e.vars=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-icon-button.js.map
