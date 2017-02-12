'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),require('polythene/common/object.assign');var _mithril=require('mithril'),_mithril2=_interopRequireDefault(_mithril);require('polythene/textfield/theme/theme');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var startEventType=window.PointerEvent?'pointerdown':'ontouchstart'in window||window.DocumentTouch&&document instanceof DocumentTouch?'touchstart':'mousedown',CSS_CLASSES={block:'pe-textfield',inputArea:'pe-textfield__input-area',input:'pe-textfield__input',label:'pe-textfield__label',counter:'pe-textfield__counter',help:'pe-textfield__help',focusHelp:'pe-textfield__help-focus',error:'pe-textfield__error',errorPlaceholder:'pe-textfield__error-placeholder',stateFocused:'pe-textfield--focused',stateDisabled:'pe-textfield--disabled',stateReadonly:'pe-textfield--readonly',stateInvalid:'pe-textfield--invalid',stateDirty:'pe-textfield--dirty',hasFloatingLabel:'pe-textfield--floating-label',isDense:'pe-textfield--dense',isRequired:'pe-textfield--required',hideRequiredChar:'pe-textfield--no-char',hasFullWidth:'pe-textfield--full-width',hasCounter:'pe-textfield--counter',hideSpinner:'pe-textfield--hide-spinner',hideClear:'pe-textfield--hide-clear',hideValidation:'pe-textfield--hide-validation'},validateCustom=function(a,b){var c=b.validate(a.value);return{invalid:c&&!c.valid,message:c&&c.error}},validateCounter=function(a,b){return{invalid:a.value.length>b.counter,message:b.error}},validateHTML=function(a,b){return{invalid:!a.inputEl().checkValidity(),message:b.error}},getValidStatus=function(a,b){var c={invalid:!1,message:void 0};return a.touched&&a.isInvalid&&0===a.value.length&&b.validateResetOnClear&&(a.touched=!1,a.isInvalid=!1,a.error=void 0),!c.invalid&&b.counter&&(c=validateCounter(a,b)),!c.invalid&&a.inputEl()&&a.inputEl().checkValidity&&(c=validateHTML(a,b)),!c.invalid&&b.validate&&(c=validateCustom(a,b)),c},checkValidity=function(a,b){var c=a.touched||b.validateAtStart?getValidStatus(a,b):{invalid:!1,message:void 0},d=a.isInvalid;a.error=c.message,a.isInvalid=c.invalid,c.invalid!==d&&setTimeout(_mithril2.default.redraw,0),c.invalid||(a.error=void 0)},checkDirty=function(a){a.isDirty=0<a.value.toString().length},updateState=function(a,b){checkValidity(a,b),checkDirty(a)},notifyState=function(a,b){if(b.getState){var c=getValidStatus(a,b);b.getState({focus:a.focus(),dirty:a.isDirty,value:a.value,el:a.inputEl(),invalid:c.invalid,error:c.error})}},ignoreEvent=function(a,b){return a.ignoreEvents&&-1!==a.ignoreEvents.indexOf(b)},createView=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};updateState(a,b);var c=a.isInvalid,d=b.tag||'div',f=b.type&&'submit'!==b.type&&'search'!==b.type?b.type:'text',g=b.multiline?'textarea':'input',h=c&&a.error,i=b.validate||b.min||b.max||b.minlength||b.required||b.pattern,j=b.disabled||b.readonly;if(!b.focus||a.focus()||j||(a.focus(!0),a.inputEl()&&a.inputEl().focus()),'function'==typeof b.value&&a.inputEl()&&!a.focus()&&!j){var n=b.value();a.value=n,a.touched=!0,updateState(a,b),notifyState(a,b),a.inputEl().value=n}var k=function onBlur(n){a.focus(!1),a.touched=!0,a.value=n.target.value,updateState(a,b),notifyState(a,b),a.el.classList.remove(CSS_CLASSES.stateFocused)},l={class:[CSS_CLASSES.block,c?CSS_CLASSES.stateInvalid:'',a.focus()?CSS_CLASSES.stateFocused:'',b.floatingLabel?CSS_CLASSES.hasFloatingLabel:'',b.disabled?CSS_CLASSES.stateDisabled:'',b.readonly?CSS_CLASSES.stateReadonly:'',a.isDirty?CSS_CLASSES.stateDirty:'',b.dense?CSS_CLASSES.isDense:'',b.required?CSS_CLASSES.isRequired:'',b.fullWidth?CSS_CLASSES.hasFullWidth:'',b.counter?CSS_CLASSES.hasCounter:'',!1===b.hideSpinner?'':CSS_CLASSES.hideSpinner,!1===b.hideClear?'':CSS_CLASSES.hideClear,b.hideValidation?CSS_CLASSES.hideValidation:'',b.hideRequiredMark?CSS_CLASSES.hideRequiredChar:'',b.class].join(' '),id:b.id||'',config:function config(n,o,p,q){o||(b.config&&b.config(n,o,p,q),a.el=n,!j&&updateState(a,b))}},m=[{tag:'div',attrs:{'class':CSS_CLASSES.inputArea},children:[b.label?{tag:'label',attrs:{'class':CSS_CLASSES.label,undefined:function undefined(){j||setTimeout(function(){a.inputEl().focus()},0)}},children:[b.label]}:null,(0,_mithril2.default)(g,Object.assign({},{class:CSS_CLASSES.input,type:f,name:b.name||'',disabled:b.disabled},ignoreEvent(b,'onclick')?null:{onclick:function onclick(){j||(a.focus(!0),notifyState(a,b))}},ignoreEvent(b,'onfocus')?null:{onfocus:function onfocus(){j||(a.focus(!0),a.el&&a.el.classList.add(CSS_CLASSES.stateFocused),notifyState(a,b))}},ignoreEvent(b,'oninput')?null:{oninput:function oninput(n){a.value=n.target.value,b.validateOnInput&&(a.touched=!0),updateState(a,b),notifyState(a,b),b.oninput&&b.oninput(a.value,n)}},ignoreEvent(b,'onkeydown')?null:{onkeydown:function onkeydown(n){13===n.which?(a.touched=!0,updateState(a,b),notifyState(a,b)):27===n.which?a.inputEl().blur(n):9===n.which&&setTimeout(function(){_mithril2.default.redraw(),setTimeout(_mithril2.default.redraw,250)},1)}},{config:function config(n,o,p){o||(a.inputEl(n),n.value=a.value,notifyState(a,b),!j&&!ignoreEvent(b,'onblur')&&(n.addEventListener('blur',k,!0),p.onunload=function(){n.removeEventListener('blur',k,!0)}))}},b.events?b.events:null,void 0===b.readonly?null:{readonly:!0},void 0===b.pattern?null:{pattern:b.pattern},void 0===b.maxlength?null:{maxlength:b.maxlength},void 0===b.minlength?null:{minlength:b.minlength},void 0===b.max?null:{max:b.max},void 0===b.min?null:{min:b.min},void 0===b.autofocus?null:{autofocus:b.autofocus},void 0===b.required?null:{required:b.required},void 0===b.tabindex?null:{tabindex:b.tabindex},void 0===b.rows?null:{rows:b.rows}))]},b.counter?{tag:'div',attrs:{'class':CSS_CLASSES.counter},children:[a.value.length+' / '+b.counter]}:null,b.help&&!h?{tag:'div',attrs:{'class':[CSS_CLASSES.help,b.focusHelp?CSS_CLASSES.focusHelp:''].join(' ')},children:[b.help]}:null,h?{tag:'div',attrs:{'class':CSS_CLASSES.error},children:[a.error]}:i&&!b.help?{tag:'div',attrs:{'class':CSS_CLASSES.errorPlaceholder},children:[]}:null];return(0,_mithril2.default)(d,l,[b.before,m,b.after])},component={controller:function controller(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=void 0,d=!1,f=a.error||'',h=_mithril2.default.prop(),i=a.focus||!1;if('function'==typeof a.value){var k=a.value();b=k===void 0?'':k}else b=void 0===a.value?'':a.value;''!==b&&(d=!0);return{value:b,error:f,el:void 0,inputEl:h,focus:function focus(k){return void 0===k?i:void(i=k)},isInvalid:!1,touched:d}},view:function view(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return createView(a,b)}};exports.default=component,module.exports=exports['default'];
//# sourceMappingURL=textfield.js.map