"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_selectionControl=require("polythene/selection-control/selection-control"),_selectionControl2=_interopRequireDefault(_selectionControl),_iconSelection=require("polythene/selection-control/icon-selection"),_iconSelection2=_interopRequireDefault(_iconSelection),_theme=require("polythene/radio-button/theme/theme"),_theme2=_interopRequireDefault(_theme),selectable=function(selected){return!selected},createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return opts.theme=_theme2["default"],opts.defaultClass="pe-control--radio",opts.type="radio",opts.selectionView=_iconSelection2["default"],opts.selectable=selectable,_mithril2["default"].component(_selectionControl2["default"],opts)},component={view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=radio-button.js.map