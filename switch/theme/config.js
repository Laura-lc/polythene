'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),require('polythene/common/object.assign');var _config=require('polythene/selection-control/theme/config'),_config2=_interopRequireDefault(_config),_config3=require('polythene/icon-button/theme/config'),_config4=_interopRequireDefault(_config3),_config5=require('polythene/config/config'),_config6=_interopRequireDefault(_config5);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var rgba=_config6.default.rgba,hit_area_padding=(_config6.default.grid_unit_icon_button-_config6.default.unit_icon_size)/2,config=Object.assign({},_config2.default,{track_height:14,track_length:36,thumb_size:20,padding:1*_config6.default.grid_unit_component,icon_button_padding:_config4.default.padding,hit_area_padding:hit_area_padding,animation_duration:'.18s',color_light_thumb_on:rgba(_config6.default.color_primary),color_light_thumb_off:'#f1f1f1',color_light_thumb_disabled:'#bdbdbd',color_light_track_on:rgba(_config6.default.color_primary_faded),color_light_track_on_opacity:.55,color_light_track_off:rgba(_config6.default.color_light_foreground,_config6.default.blend_light_text_regular),color_light_track_off_opacity:.55,color_light_track_disabled:rgba(_config6.default.color_light_foreground,_config6.default.blend_light_background_disabled),color_light_track_disabled_opacity:1,color_dark_thumb_on:rgba(_config6.default.color_primary),color_dark_thumb_off:'#bdbdbd',color_dark_thumb_disabled:'#555',color_dark_track_on:rgba(_config6.default.color_primary_faded,_config6.default.blend_dark_text_tertiary),color_dark_track_on_opacity:.9,color_dark_track_off:'#717171',color_dark_track_off_opacity:.55,color_dark_track_disabled:'#717171',color_dark_track_disabled_opacity:.3});exports.default=config,module.exports=exports['default'];
//# sourceMappingURL=config.js.map