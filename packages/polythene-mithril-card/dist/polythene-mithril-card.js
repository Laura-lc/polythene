!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-card"),require("polythene-mithril-icon"),require("polythene-mithril-list-tile"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-card","polythene-mithril-icon","polythene-mithril-list-tile","polythene-mithril-shadow"],t):t((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-card"],e["polythene-mithril-icon"],e["polythene-mithril-list-tile"],e["polythene-mithril-shadow"])}(this,function(e,t,r,i,o,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var l=t.ViewComponent(a({},r.coreCardActions));l.displayName="CardActions";var d=t.StateComponent(a({},r.coreCardMedia));d.displayName="CardMedia";var h=t.ViewComponent(a({},r.coreCardPrimary));h.displayName="CardPrimary";var p=t.ViewComponent(a({},r.coreCard,{createContent:function(e,t){return r.coreCard.createContent(e,a(t,{CardActions:l,CardMedia:d,CardPrimary:h,Icon:i.Icon,ListTile:o.ListTile,Shadow:n.Shadow}))}}));p.displayName="Card",e.Card=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-card.js.map
