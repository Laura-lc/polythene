!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function l(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var i={component:"pe-textfield",counter:"pe-textfield__counter",error:"pe-textfield__error",errorPlaceholder:"pe-textfield__error-placeholder",focusHelp:"pe-textfield__help-focus",help:"pe-textfield__help",input:"pe-textfield__input",inputArea:"pe-textfield__input-area",label:"pe-textfield__label",optionalIndicator:"pe-textfield__optional-indicator",requiredIndicator:"pe-textfield__required-indicator",hasCounter:"pe-textfield--counter",hasFloatingLabel:"pe-textfield--floating-label",hasFullWidth:"pe-textfield--full-width",hideClear:"pe-textfield--hide-clear",hideSpinner:"pe-textfield--hide-spinner",hideValidation:"pe-textfield--hide-validation",isDense:"pe-textfield--dense",isRequired:"pe-textfield--required",stateDirty:"pe-textfield--dirty",stateDisabled:"pe-textfield--disabled",stateFocused:"pe-textfield--focused",stateInvalid:"pe-textfield--invalid",stateReadonly:"pe-textfield--readonly"},a={invalid:!1,message:void 0},r=function(e,t){var l=a;return e.isTouched()&&e.isInvalid()&&0===e.inputEl().value.length&&t.validateResetOnClear&&(e.isTouched(!1),e.isInvalid(!1),e.error(void 0)),!l.invalid&&t.counter&&(l=function(e,t){return{invalid:e.inputEl().value.length>t.counter,message:t.error}}(e,t)),!l.invalid&&e.inputEl()&&e.inputEl().checkValidity&&(l=function(e,t){return{invalid:!e.inputEl().checkValidity(),message:t.error}}(e,t)),!l.invalid&&t.validate&&(l=function(e,t){if(!e.inputEl())return a;var l=t.validate(e.inputEl().value);return{invalid:l&&!l.valid,message:l&&l.error}}(e,t)),l},u=function(e){var t=e.state,l=e.attrs,n=void 0!==l.valid?{invalid:!l.valid,message:l.error}:t.isTouched()||l.validateAtStart?r(t,l):a,i=t.isInvalid();t.error(n.message),n.invalid!==i&&t.isInvalid(n.invalid),n.invalid||t.error(void 0)},o=function(e){var t=e.state,l=e.attrs;if(l.onChange){var i=r(t,l);l.onChange({focus:t.hasFocus(),dirty:t.isDirty(),el:t.inputEl(),invalid:i.invalid,error:i.error,value:t.inputEl().value,setInputState:function(l){var i=void 0!==l.value&&l.value!==t.inputEl().value,a=void 0!==l.focus&&l.focus!==t.hasFocus();(i||a)&&t.setInputState(n({},l,{vnode:e}))}})}},d=function(e,t){return e.ignoreEvents&&-1!==e.ignoreEvents.indexOf(t)},s=Object.freeze({getElement:function(e){return e.attrs.element||"div"},getInitialState:function(e,t,l){var n=l.keys,i=e.attrs,a=void 0!==i.defaultValue&&null!==i.defaultValue?i.defaultValue.toString():void 0!==i.value&&null!==i.value?i.value.toString():"",r=t(null),u=t(null),o=t({}),d=t(i.error),s=t(!1),p=t(!1),c=t(""!==a),v=t(!1);return{defaultValue:a,didSetFocusTime:0,el:r,error:d,hasFocus:s,inputEl:u,isDirty:c,isInvalid:v,isTouched:p,previousValue:t(void 0),setInputState:o,showErrorPlaceholder:!!(void 0!==i.valid||i.validate||i.min||i.max||i[n.minlength]||i[n.maxlength]||i.required||i.pattern),redrawOnUpdate:t.merge([u,v,c])}},onMount:function(e){if(e.dom){var t=e.dom,l=e.state,n=e.attrs;l.el(t);var i=n.multiLine?"textarea":"input",a=t.querySelector(i);e.state.inputEl(a),l.inputEl().value=l.defaultValue,l.setInputState.map(function(e){var t=e.vnode,i=e.type,a=e.focus,r=e.value;t&&(void 0!==r&&(l.inputEl().value=r),void 0!==a&&(l.hasFocus(a),a?l.inputEl().focus():l.inputEl().blur()),"input"===i&&(n.validateOnInput||n.counter)&&l.isTouched(l.inputEl().value!==l.defaultValue),"input"!==i&&l.isTouched(l.inputEl().value!==l.defaultValue),"onblur"===i&&l.isTouched(!0),l.isDirty(""!==l.inputEl().value),u(t),o(t),l.previousValue(l.inputEl().value))}),o(e)}},onUpdate:function(e){var t=e.state,l=e.attrs;u(e);var n=t.inputEl(),i=void 0!==l.value&&null!==l.value?l.value:n?n.value:t.previousValue(),a=null==i?"":i.toString();n&&t.previousValue()!==a&&(n.value=a,t.previousValue(a),t.setInputState({vnode:e,type:"input"}))},createProps:function(e,l){var a=l.keys,r=e.state,u=e.attrs,o=r.isInvalid();return n({},t.filterSupportedAttributes(u),{className:[i.component,o?i.stateInvalid:"",r.hasFocus()?i.stateFocused:"",r.isDirty()?i.stateDirty:"",u.floatingLabel?i.hasFloatingLabel:"",u.disabled?i.stateDisabled:"",u.readonly?i.stateReadonly:"",u.dense?i.isDense:"",u.required?i.isRequired:"",u.fullWidth?i.hasFullWidth:"",u.counter?i.hasCounter:"",!1!==u.hideSpinner&&void 0!==u.hideSpinner?i.hideSpinner:"",!1!==u.hideClear&&void 0!==u.hideClear?i.hideClear:"",u.hideValidation?i.hideValidation:"","dark"===u.tone?"pe-dark-tone":null,"light"===u.tone?"pe-light-tone":null,u.className||u[a.class]].join(" ")})},createContent:function(e,t){var a=t.renderer,r=t.keys,u=e.state,s=e.attrs,p=u.inputEl(),c=s.error||u.error(),v=u.isInvalid(),f=s.multiLine?"textarea":"input",h=s.multiLine?null:s.type&&"submit"!==s.type&&"search"!==s.type?s.type:"text",y=v&&void 0!==c,m=s.disabled||s[r.readonly],x=s.required&&""!==s.requiredIndicator?a("span",{key:"required",className:i.requiredIndicator},s.requiredIndicator||"*"):null,b=!s.required&&s.optionalIndicator?a("span",{key:"optional",className:i.optionalIndicator},s.optionalIndicator):null,g=s.label?[s.label,x,b]:null;return[a("div",{className:i.inputArea,key:"input-area"},[g?a("label",{key:"label",className:i.label},g):null,a(f,n({},{key:"input",className:i.input,disabled:s.disabled},h?{type:h}:null,s.name?{name:s.name}:null,d(s,r.onclick)?null:l({},r.onclick,function(){m||(u.setInputState({vnode:e,focus:!0}),o(e))}),d(s,r.onfocus)?null:l({},r.onfocus,function(){m||(u.setInputState({vnode:e,focus:!0}),u.el()&&u.el().classList.add(i.stateFocused),o(e))}),d(s,r.onblur)?null:l({},r.onblur,function(){u.setInputState({vnode:e,type:"onblur",focus:!1}),u.el().classList.remove(i.stateFocused)}),d(s,r.oninput)?null:l({},r.oninput,function(){u.setInputState({vnode:e,type:"input"})}),d(s,r.onkeydown)?null:l({},r.onkeydown,function(t){"Enter"===t.key?u.isTouched(!0):"Escape"!==t.key&&"Esc"!==t.key||u.setInputState({vnode:e,focus:!1})}),s.events?s.events:null,void 0!==s.required&&s.required?{required:!0}:null,void 0!==s[r.readonly]&&s[r.readonly]?l({},r.readonly,!0):null,void 0!==s.pattern?{pattern:s.pattern}:null,void 0!==s[r.maxlength]?l({},r.maxlength,s[r.maxlength]):null,void 0!==s[r.minlength]?l({},r.minlength,s[r.minlength]):null,void 0!==s.max?{max:s.max}:null,void 0!==s.min?{min:s.min}:null,void 0!==s[r.autofocus]?l({},r.autofocus,s[r.autofocus]):null,void 0!==s[r.tabindex]?l({},r.tabindex,s[r.tabindex]):null,void 0!==s.rows?{rows:s.rows}:null))]),s.counter?a("div",{key:"counter",className:i.counter},(p&&p.value.length||0)+" / "+s.counter):null,s.help&&!y?a("div",{key:"help",className:[i.help,s.focusHelp?i.focusHelp:null].join(" ")},s.help):null,y?a("div",{key:"error",className:i.error},c):u.showErrorPlaceholder&&!s.help?a("div",{key:"error-placeholder",className:i.errorPlaceholder}):null]}});e.coreTextField=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-textfield.js.map
