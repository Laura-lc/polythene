!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-mithril-base-spinner"),require("polythene-core-ios-spinner"),require("cyano-mithril"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base-spinner","polythene-core-ios-spinner","cyano-mithril","polythene-core"],n):n((e=e||self).polythene={},e["polythene-mithril-base-spinner"],e["polythene-core-ios-spinner"],e["cyano-mithril"],e["polythene-core"])}(this,function(e,n,r,t,i){"use strict";function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var s="pe-spinner__placeholder",p=t.cast(r._Spinner,{h:t.h,BaseSpinner:n.BaseSpinner}),l=t.cast(i._Conditional,{h:t.h,useState:t.useState,useEffect:t.useEffect});l.displayName="IOSSpinnerToggle";var a={view:function(e){return t.h(l,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){o(e,n,r[n])})}return e}({},e.attrs,{placeholderClassName:s,instance:p}))},classes:{component:"pe-ios-spinner",blades:"pe-ios-spinner__blades",blade:"pe-ios-spinner__blade"},displayName:"IOSSpinner"};e.IOSSpinner=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-ios-spinner.js.map
