!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core-checkbox"),require("polythene-core-selection-control"),require("polythene-mithril-icon"),require("polythene-mithril-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-checkbox","polythene-core-selection-control","polythene-mithril-icon","polythene-mithril-icon-button"],o):o((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-checkbox"],e["polythene-core-selection-control"],e["polythene-mithril-icon"],e["polythene-mithril-icon-button"])}(this,function(e,o,t,n,r,i){"use strict";function c(){return(c=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=o.ViewComponent(c({},n.viewControl,{createContent:function(e,o){return n.viewControl.createContent(e,c(o,{Icon:r.Icon,IconButton:i.IconButton}))}}));l.displayName="ViewControl";var h=o.StateComponent(c({},n.coreSelectionControl,{createContent:function(e,o){return n.coreSelectionControl.createContent(e,c(o,{ViewControl:l}))}}));h.displayName="SelectionControl";var p=o.StateComponent(c({},t.coreCheckbox,{component:h}));p.displayName="Checkbox",e.Checkbox=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-checkbox.js.map
