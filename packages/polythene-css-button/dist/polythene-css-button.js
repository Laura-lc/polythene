!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-css-shadow"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-css-shadow","polythene-theme"],e):e((t=t||self).polythene={},t["polythene-core-css"],t["polythene-css-shadow"],t["polythene-theme"])}(this,function(t,e,o,r){"use strict";var n={component:"pe-text-button",super:"pe-button",row:"pe-button-row",content:"pe-button__content",label:"pe-button__label",textLabel:"pe-button__text-label",wash:"pe-button__wash",dropdown:"pe-button__dropdown",border:"pe-button--border",contained:"pe-button--contained",disabled:"pe-button--disabled",dropdownClosed:"pe-button--dropdown-closed",dropdownOpen:"pe-button--dropdown-open",extraWide:"pe-button--extra-wide",hasDropdown:"pe-button--dropdown",highLabel:"pe-button--high-label",inactive:"pe-button--inactive",raised:"pe-button--raised",selected:"pe-button--selected",separatorAtStart:"pe-button--separator-start"};function d(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}var _={general_styles:function(t){return[e.sel(t,{userSelect:"none","-moz-user-select":"none",outline:"none",padding:0,textDecoration:"none",textAlign:"center",cursor:"pointer",".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive":{cursor:"default",pointerEvents:"none"}," .pe-button__content":{position:"relative",borderRadius:"inherit"}," .pe-button__label":[e.mixin.fontSmoothing(),{position:"relative",display:"block",borderRadius:"inherit",pointerEvents:"none"}]," .pe-button__wash":[e.mixin.fit(),{zIndex:0,borderRadius:"inherit",pointerEvents:"none"}]}),{".pe-button-row":{fontSize:0,lineHeight:0}}]},row_margin_h:function(t,e){return[{".pe-button-row":d({margin:"0 -".concat(e.row_margin_h,"px")}," ".concat(t),{margin:"0 ".concat(e.row_margin_h,"px")})}]}},i=e.createLayout({varFns:_}),l=function(t,o,r){return e.sel(t,{":not(.pe-button--disabled)":{" .pe-button__content":{borderColor:o["color_"+r+"_border"]}}})},u={general_styles:function(){return[]}},c=function(t){var o;return d(o={},"color_"+t+"_text",function(o,r){return[e.sel(o,{":not(.pe-button--disabled)":{"&, &:link, &:visited":{color:r["color_"+t+"_text"]}}})]}),d(o,"color_"+t+"_disabled_text",function(o,r){return[e.sel(o,{".pe-button--disabled":{color:r["color_"+t+"_disabled_text"]}})]}),d(o,"color_"+t+"_background",function(o,r){return[e.sel(o,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{backgroundColor:r["color_"+t+"_background"]}}})]}),d(o,"color_"+t+"_active_background",function(o,r){return[e.sel(o,{":not(.pe-button--disabled)":{".pe-button--selected":{" .pe-button__content":{backgroundColor:r["color_"+t+"_active_background"]}}}})]}),d(o,"color_"+t+"_disabled_background",function(o,r){return[e.sel(o,{".pe-button--disabled":{" .pe-button__content":{backgroundColor:r["color_"+t+"_disabled_background"]}}})]}),d(o,"color_"+t+"_border",function(e,o){return[l("".concat(e,".pe-button--border"),o,t)]}),d(o,"border",function(e,o){return[l(e,o,t)]}),d(o,"color_"+t+"_active_border",function(o,r){return[e.sel(o,{".pe-button--border.pe-button--selected":{" .pe-button__content":{borderColor:r["color_"+t+"_active_border"]}}})]}),d(o,"color_"+t+"_disabled_border",function(o,r){return[e.sel(o,{".pe-button--border.pe-button--disabled":{" .pe-button__content":{borderColor:r["color_"+t+"_disabled_border"]}}})]}),d(o,"color_"+t+"_icon",function(o,r){return[e.sel(o,{" .pe-button__dropdown":{color:r["color_"+t+"_icon"]}})]}),d(o,"color_"+t+"_separator",function(o,r){return[e.sel(o,{".pe-button--separator-start":{" .pe-button__content":{borderColor:r["color_"+t+"_separator"]}}})]}),o},s=function(t){var o;return d(o={},"color_"+t+"_hover",function(o,r){return[e.sel(o,{":not(.pe-button--disabled):not(.pe-button--selected)":{color:r["color_"+t+"_hover"]}})]}),d(o,"color_"+t+"_hover_border",function(o,r){return[e.sel(o,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{borderColor:r["color_"+t+"_hover_border"]}}})]}),d(o,"color_"+t+"_wash_background",function(o,r){return[e.sel(o,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__wash":{backgroundColor:r["color_"+t+"_wash_background"]}}})]}),d(o,"color_"+t+"_hover_background",function(o,r){return[e.sel(o,{":not(.pe-button--disabled):not(.pe-button--selected)":{" .pe-button__content":{backgroundColor:r["color_"+t+"_hover_background"]}}})]}),d(o,"color_"+t+"_hover_icon",function(o,r){return[e.sel(o,{" .pe-button__dropdown":{color:r["color_"+t+"_hover_icon"]}})]}),o},b=a({},u,c("light")),p=a({},u,c("dark")),g=s("light"),h=s("dark"),f=e.createColor({varFns:{lightTintFns:b,darkTintFns:p,lightTintHoverFns:g,darkTintHoverFns:h}}),v=function(t){return function(){return{".pe-button--separator-start .pe-button__content":{borderStyle:t?"none solid none none":"none none none solid"}}}},m=v(!1),w=v(!0),y=function(t,o){return e.sel(t,{" .pe-button__dropdown":{minHeight:"calc((1em * ".concat(o.line_height,") + 2 * ").concat(o.label_padding_v,"px)")}})},k=function(t,o){return e.sel(t,{".pe-button--high-label":{padding:0," .pe-button__label":{padding:o.outer_padding_v+o.label_padding_v+"px 0"}}})},x=function(t,o){return e.sel(t,{".pe-button--high-label":{" .pe-button__label, .pe-button__dropdown":{minHeight:"calc((1em * ".concat(o.line_height,") + 2 * ").concat(o.outer_padding_v+o.label_padding_v,"px)")}}})},S=function(t,o,r){var n,a;return e.sel(t,{" .pe-button__content":{borderRadius:o.border_radius+"px"},":not(:first-child)":{" .pe-button__content":(n={},d(n,r?"borderTopRightRadius":"borderTopLeftRadius",0),d(n,r?"borderBottomRightRadius":"borderBottomLeftRadius",0),n)},":not(:last-child)":{" .pe-button__content":(a={},d(a,r?"borderTopLeftRadius":"borderTopRightRadius",0),d(a,r?"borderBottomLeftRadius":"borderBottomRightRadius",0),a)}})},R=function(t,o){return e.sel(t,{" .pe-button__wash, .pe-ripple":e.mixin.fit(-1)," .pe-button__content":{borderStyle:"solid",paddingLeft:o.padding_h_border+"px",paddingRight:o.padding_h_border+"px"}})},L=function(t,o){return e.sel(t,{" .pe-button__content":{borderWidth:o.border_width+"px"}," .pe-button-group & + &":{marginLeft:-o.border_width+"px"}})},C=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),r.forEach(function(e){d(t,e,o[e])})}return t}({general_styles:function(t,o){return[e.sel(t,[m(),{display:"inline-block",background:"transparent",border:"none"," .pe-button__content":{position:"relative",borderWidth:"1px",display:"flex",alignItems:"center",justifyContent:"center"},".pe-button--border":R(t,o)," .pe-button__label, .pe-button__dropdown":{whiteSpace:"pre",userSelect:"none","-moz-user-select":"none"}," .pe-button__text-label":{display:"inline-block",lineHeight:1},".pe-button--dropdown":{minWidth:"0"," .pe-button__dropdown":{position:"relative"}," .pe-svg":{position:"absolute",left:0,top:"50%"}," .pe-button__label + .pe-button__dropdown":{marginLeft:"6px",minWidth:0}}," .pe-button-group &":{minWidth:0}," .pe-button__dropdown .pe-svg":e.mixin.defaultTransition("transform"),".pe-button--dropdown-open":{" .pe-button__dropdown .pe-svg":{transform:"rotate(-180deg)"}}}]),[e.sel(e.selectorRTL(t),w())]]},border_radius:function(t,o){return[e.sel(t,{" .pe-button__content":{borderRadius:o.border_radius+"px"}}),S(".pe-button-group ".concat(t),o,!1),S(e.selectorRTL(".pe-button-group ".concat(t)),o,!0)]},border_width:function(t,e){return[L(t,e)]},min_width:function(t,o){return[e.sel(t,{minWidth:o.min_width+"px"})]},animation_duration:function(t,o){return[e.sel(t,{" .pe-button__content, .pe-button__wash":[e.mixin.defaultTransition("all",o.animation_duration)]})]},padding_h:function(t,o){return[e.sel(t,{" .pe-button__content":{padding:"0 "+o.padding_h+"px"," .pe-button__dropdown":{minWidth:"calc(36px - 2 * ".concat(o.padding_h,"px)")},".pe-button--dropdown":{" .pe-button__label + .pe-button__dropdown":{marginRight:"calc(7px - ".concat(o.padding_h,"px)")}}}})]},padding_h_extra_wide:function(t,o){return[e.sel(t,{".pe-button--extra-wide .pe-button__content":{padding:"0 "+o.padding_h_extra_wide+"px"}})]},label_padding_v:function(t,o){return[e.sel(t,{" .pe-button__label":{padding:o.label_padding_v+"px 0"},".pe-button--border":{" .pe-button__label":{padding:o.label_padding_v-1+"px 0"}}}),y(t,o),k(t,o),x(t,o)]},font_weight:function(t,o){return[e.sel(t,{" .pe-button__label":{fontWeight:o.font_weight}})]},text_transform:function(t,o){return[e.sel(t,{" .pe-button__label":{textTransform:o.text_transform}})]},font_size:function(t,o){return[e.sel(t,{" .pe-button__label, .pe-button__dropdown":{fontSize:o.font_size+"px"}})]},line_height:function(t,o){return[e.sel(t,{" .pe-button__label, .pe-button__dropdown":{lineHeight:o.line_height}}),y(t,o),x(t,o)]},dropdown_icon_size:function(t,o){return[e.sel(t,{".pe-button--dropdown":{" .pe-button__dropdown":{width:o.dropdown_icon_size+"px"}," .pe-svg":{width:o.dropdown_icon_size+"px",height:o.dropdown_icon_size+"px",marginTop:-o.dropdown_icon_size/2+"px"}}})]},outer_padding_v:function(t,o){return[e.sel(t,{padding:o.outer_padding_v+"px 0",".pe-button--high-label":{padding:0}}),k(t,o),x(t,o)]},separator_width:function(t,o){return[e.sel(t,{".pe-button--separator-start":{" .pe-button__content":{borderWidth:o.separator_width+"px"}}})]},letter_spacing:function(t,o){return[e.sel(t,{letterSpacing:o.letter_spacing+"px"})]},border:function(t,e){return e.border&&R(t,e)},contained:function(t,o){return o.contained&&function(t,o){return e.sel(t,{" .pe-button__content":{paddingLeft:o.padding_h+"px",paddingRight:o.padding_h+"px"}," .pe-button__wash":{display:"none"}})}(t,o)}},o.sharedVarFns),z=e.createLayout({varFns:C}),T=a({},{border:!1,contained:!0},o.sharedVars),O=a({},{general_styles:!0,padding_h:4*r.vars.grid_unit,color_light_background:"#fff",color_light_disabled_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_disabled),color_light_wash_background:"transparent",color_dark_active_background:e.rgba(r.vars.color_primary_dark),color_dark_background:e.rgba(r.vars.color_primary),color_dark_disabled_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_disabled),color_dark_wash_background:"transparent"},T),j=r.vars.unit_touch_height,Q=a({},{border:!1,contained:!1},o.sharedVars),W={border_width:1,padding_h_border:O.padding_h,color_light_border:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_medium),color_light_disabled_border:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_dark_border:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_medium),color_dark_disabled_border:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled)},F=a({},{general_styles:!0,animation_duration:r.vars.animation_duration,border_radius:r.vars.unit_item_border_radius,dropdown_icon_size:24,font_size:14,font_weight:500,label_padding_v:11,letter_spacing:.75,line_height:1,min_width:8*r.vars.grid_unit_component,outer_padding_v:(j-36)/2,padding_h:2*r.vars.grid_unit,padding_h_extra_wide:6*r.vars.grid_unit,row_margin_h:r.vars.grid_unit,separator_width:1,text_transform:"uppercase",color_light_background:"transparent",color_light_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_wash_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_active_background:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_background_active),color_light_disabled_background:"transparent",color_light_disabled_text:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_icon:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_separator:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_dark_background:"transparent",color_dark_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_wash_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover),color_dark_active_background:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_background_active),color_dark_disabled_background:"transparent",color_dark_disabled_text:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_icon:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_separator:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light)},W,Q),V=[z,f],B=[i],H=".".concat(n.super),P=".".concat(n.component);e.styler.addStyle({selectors:[H],fns:B,vars:F}),e.styler.addStyle({selectors:[P],fns:V,vars:F});var E=e.createColor({superColor:f}),q=[e.createLayout({superLayout:z}),E],A=[n.component,n.contained].join(" "),D=".".concat(A.split(/\s/).join(".")),I=(e.styler.createAddStyle(D,q,O),e.styler.createGetStyle(D,q,O));e.styler.addStyle({selectors:[D],fns:q,vars:O});var G=F,M=f,J=z;t.addStyle=function(t,o){!function(t,o){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).mediaQuery,n=o&&o.contained?O:F;t&&e.styler.addStyle({selectors:[H,t],fns:B,vars:n,customVars:o,mediaQuery:r}),t&&e.styler.addStyle({selectors:[P,t],fns:V,vars:n,customVars:o,mediaQuery:r})}(t,o,{mediaQuery:(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).mediaQuery})},t.getStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).mediaQuery;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).mediaQuery,n=o&&o.contained?O:F;return e.styler.getStyle({selectors:[H,t],fns:B,vars:n,customVars:o,mediaQuery:r}).concat(e.styler.getStyle({selectors:[P,t],fns:V,vars:n,customVars:o,mediaQuery:r}))}(t,o,{mediaQuery:r}).concat(I(t,o,{mediaQuery:r}))},t.textButtonColor=M,t.textButtonLayout=J,t.textButtonVars=G,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-button.js.map
