!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-switch"),require("polythene-core-selection-control"),require("polythene-react-shadow"),require("polythene-react-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-switch","polythene-core-selection-control","polythene-react-shadow","polythene-react-icon-button"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-switch"],e["polythene-core-selection-control"],e["polythene-react-shadow"],e["polythene-react-icon-button"])}(this,function(e,t,o,n,r,c){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var l=t.ViewComponent(i({},o.viewControl,{createContent:function(e,t){return o.viewControl.createContent(e,i(t,{Shadow:r.Shadow,IconButton:c.IconButton}))}}));l.displayName="ViewControl";var a=t.StateComponent(i({},n.coreSelectionControl,{createContent:function(e,t){return n.coreSelectionControl.createContent(e,i(t,{ViewControl:l}))}}));a.displayName="SelectionControl";var p=t.StateComponent(i({},o.coreSwitch,{component:a}));p.displayName="Switch",e.Switch=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-switch.js.map
