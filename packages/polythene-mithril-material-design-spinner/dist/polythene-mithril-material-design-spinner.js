!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-material-design-spinner"),require("polythene-mithril-base-spinner")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-material-design-spinner","polythene-mithril-base-spinner"],n):n((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-material-design-spinner"],e["polythene-mithril-base-spinner"])}(this,function(e,n,r,i,p){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var l="pe-spinner__placeholder",a=n.StateComponent(t({},i.coreMaterialDesignSpinner,{component:p.BaseSpinner})),o=n.StateComponent(r.Conditional);o.displayName="MaterialDesignSpinnerToggle";var s={view:function(e){return n.renderer(o,t({},e.attrs,{placeholderClassName:l,instance:a}))},classes:{component:"pe-md-spinner",animation:"pe-md-spinner__animation",circle:"pe-md-spinner__circle",circleClipper:"pe-md-spinner__circle-clipper",circleClipperLeft:"pe-md-spinner__circle-clipper-left",circleClipperRight:"pe-md-spinner__circle-clipper-right",gapPatch:"pe-md-spinner__gap-patch",layer:"pe-md-spinner__layer",layerN:"pe-md-spinner__layer-"},displayName:"MaterialDesignSpinner"};e.MaterialDesignSpinner=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-material-design-spinner.js.map
