'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _config=require('polythene/config/config'),_config2=_interopRequireDefault(_config);require('polythene/common/object.assign');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var vendorize=function(a,b){var c=b.map(function(d){return'_'+d+'$'}).join('');return _defineProperty({},c,a)},fit=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,b=a+'px';return{position:'absolute',top:b,right:b,bottom:b,left:b}},fontSmoothing=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!0;return a?{'-webkit-font-smoothing':'antialiased','-moz-osx-font-smoothing':'grayscale'}:{'-webkit-font-smoothing':'subpixel-antialiased','-moz-osx-font-smoothing':'auto'}},ellipsis=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'px';return'none'===a?{'text-overflow':'initial',overflow:'initial',display:'block',height:'auto'}:Object.assign({},{overflow:'hidden','text-overflow':'ellipsis','text-rendering':'auto'},a===void 0?null:{'-webkit-line-clamp':a,'-webkit-box-orient':'vertical',display:'-webkit-box'},b===void 0?null:{'max-height':a*b+c})},clearfix=function(){return{'&:after':{content:'""',display:'table',clear:'both'}}},hairline=function(){return{}},sticky=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:1;return[{position:'-webkit-sticky'},{position:'-moz-sticky'},{position:'-o-sticky'},{position:'-ms-sticky'},{position:'sticky'},{top:0,'z-index':a}]},createStyles=function(a,b){return Array.isArray(a)?a.map(function(c){for(var d in c)return _defineProperty({},d,b(c[d]))}):b(a)},defaultTransition=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'all',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:_config2.default.animation_duration,c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:_config2.default.animation_curve_default;return[vendorize({'transition-delay':0},_config2.default.prefixes_transition),vendorize({'transition-duration':b},_config2.default.prefixes_transition),vendorize({'transition-timing-function':c},_config2.default.prefixes_transition),vendorize({'transition-property':a},_config2.default.prefixes_transition)]},fluidScale=function(a,b,c,d){var e=4<arguments.length&&arguments[4]!==void 0?arguments[4]:320,f=5<arguments.length&&arguments[5]!==void 0?arguments[5]:1920,g=6<arguments.length&&arguments[6]!==void 0?arguments[6]:'horizontal';return fluidScales([a],b,[[e,c],[f,d]],g)},fluidScales=function(a,b,c,d){var e=c.sort(),f=e.map(function(j){return j[0]}),g=e.map(function(j){return j[0]});g.shift(),g.push(f[f.length-1]);var h=e.map(function(j){return j[1]}),i=e.map(function(j){return j[1]});return i.shift(),i.push(h[h.length-1]),e.map(function(j,k){return fluidRule(a,b,d,f[k],g[k],h[k],i[k],0===k,k===e.length-1)})},fluidRule=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'horizontal',d=arguments[3],e=arguments[4],f=arguments[5],g=arguments[6],h=arguments[7],i=arguments[8],j='vertical'===c?'vh':'vw',k='vertical'===c?'height':'width',l=i?['@media (min-'+k+': '+d+'px)']:['@media (min-'+k+': '+d+'px) and (max-'+k+': '+e+'px)'],r=Array.isArray(a)?a:[a];return[h?r.map(function(s){return _defineProperty({},s,''+f+b)}):null,_defineProperty({},l,r.map(function(s){return _defineProperty({},s,i?''+g+b:'calc('+('(('+g+' - '+f+') / ('+e+' - '+d+') * 100'+j+')')+' + '+('((('+f+' * '+e+') - ('+g+' * '+d+')) / ('+e+' - '+d+')) * 1'+b)+')')}))]};exports.default={clearfix:clearfix,createStyles:createStyles,defaultTransition:defaultTransition,ellipsis:ellipsis,fit:fit,fontSmoothing:fontSmoothing,fluidScale:fluidScale,fluidScales:fluidScales,hairline:hairline,sticky:sticky,vendorize:vendorize},module.exports=exports['default'];
//# sourceMappingURL=mixin.js.map