!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core"),require("polythene-core-notification")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core","polythene-core-notification"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core"],e["polythene-core-notification"])}(this,function(e,t,o,i){"use strict";var n={component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multi-line",vertical:"pe-notification--vertical",visible:"pe-notification--visible"},a=t.StateComponent(i.coreNotificationInstance);a.displayName="NotificationInstance";var c={name:"notification",className:n.component,htmlShowClass:n.open,defaultId:"default_notification",holderSelector:".".concat(n.holder),instance:a,placeholder:"span.".concat(n.placeholder),queue:!0},r=o.Multi({options:c,renderer:t.renderer}),l=t.StateComponent(r);Object.getOwnPropertyNames(r).forEach(function(e){return l[e]=r[e]}),l.displayName="Notification",e.NotificationInstance=a,e.Notification=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-notification.js.map
