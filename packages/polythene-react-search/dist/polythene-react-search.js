!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-search"),require("polythene-react-textfield")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-search","polythene-react-textfield"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-search"],e["polythene-react-textfield"])}(this,function(e,t,r,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=t.StateComponent(o({},r.coreSearch,{createContent:function(e,t){return r.coreSearch.createContent(e,o(t,{TextField:n.TextField}))}}));c.displayName="Search",e.Search=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-search.js.map
