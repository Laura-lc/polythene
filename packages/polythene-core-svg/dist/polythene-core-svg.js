!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var o={component:"pe-svg"},r=Object.freeze({getElement:function(e){return e.attrs.element||"div"},onMount:function(e){if(e.dom){var t=e.dom.querySelector("svg");t&&t.setAttribute("focusable","false")}},createProps:function(e,r){var c=r.keys,i=e.attrs;return n({},t.filterSupportedAttributes(i),{className:[o.component,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.className||i[c.class]].join(" ")})},createContent:function(e){var t=e.attrs;return t.content?t.content:t.children||e.children||t}});e.coreSVG=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-svg.js.map
