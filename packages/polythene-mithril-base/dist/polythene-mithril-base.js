!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).polythene={})}(this,function(e){"use strict";var t={autocomplete:"autocomplete",autofocus:"autofocus",class:"class",className:"class",enctype:"enctype",formaction:"formaction",frameborder:"frameborder",maxlength:"maxlength",minlength:"minlength",onblur:"onblur",onchange:"onchange",onclick:"onclick",onfocus:"onfocus",oninput:"oninput",onkeydown:"onkeydown",onkeyup:"onkeyup",onmousedown:"onmousedown",onmouseout:"onmouseout",onmouseover:"onmouseover",onmouseup:"onmouseup",onscroll:"onscroll",onsubmit:"onsubmit",ontouchend:"ontouchend",ontouchmove:"ontouchmove",ontouchstart:"ontouchstart",readonly:"readonly",tabindex:"tabindex"};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e,t){return e(t={exports:{}},t.exports),t.exports}var a=i(function(e){!function(){function t(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}t.normalize=function(e){return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null!=e&&"object"!==n(e)?t("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},t.normalizeChildren=function(e){for(var n=0;n<e.length;n++)e[n]=t.normalize(e[n]);return e};var r=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},a={}.hasOwnProperty;function l(e){for(var t in e)if(a.call(e,t))return!1;return!0}function u(e){var o,u=arguments[1],s=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var c=i[e]||function(e){for(var t,n="div",o=[],a={};t=r.exec(e);){var l=t[1],u=t[2];if(""===l&&""!==u)n=u;else if("#"===l)a.id=u;else if("."===l)o.push(u);else if("["===t[3][0]){var s=t[6];s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?o.push(s):a[t[4]]=""===s?s:s||!0}}return o.length>0&&(a.className=o.join(" ")),i[e]={tag:n,attrs:a}}(e);if(null==u?u={}:("object"!==n(u)||null!=u.tag||Array.isArray(u))&&(u={},s=1),arguments.length===s+1)o=arguments[s],Array.isArray(o)||(o=[o]);else for(o=[];s<arguments.length;)o.push(arguments[s++]);var f=t.normalizeChildren(o);return"string"==typeof e?function(e,n,r){var o,i,u=!1,s=n.className||n.class;if(!l(e.attrs)&&!l(n)){var c={};for(var f in n)a.call(n,f)&&(c[f]=n[f]);n=c}for(var f in e.attrs)a.call(e.attrs,f)&&(n[f]=e.attrs[f]);for(var f in void 0!==s&&(void 0!==n.class&&(n.class=void 0,n.className=s),null!=e.attrs.className&&(n.className=e.attrs.className+" "+s)),n)if(a.call(n,f)&&"key"!==f){u=!0;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?i=r[0].children:o=r,t(e.tag,n.key,u?n:void 0,o,i)}(c,u,f):t(e,u.key,u,f)}u.trust=function(e){return null==e&&(e=""),t("<",void 0,void 0,e,void 0,void 0)},u.fragment=function(e,n){return t("[",e.key,e,t.normalizeChildren(n),void 0,void 0)};var s=u;if((c=function(e){if(!(this instanceof c))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var t=this,r=[],o=[],i=s(r,!0),a=s(o,!1),l=t._instance={resolvers:r,rejectors:o},u="function"==typeof setImmediate?setImmediate:setTimeout;function s(e,i){return function s(c){var d;try{if(!i||null==c||"object"!==n(c)&&"function"!=typeof c||"function"!=typeof(d=c.then))u(function(){i||0!==e.length||console.error("Possible unhandled promise rejection:",c);for(var t=0;t<e.length;t++)e[t](c);r.length=0,o.length=0,l.state=i,l.retry=function(){s(c)}});else{if(c===t)throw new TypeError("Promise can't be resolved w/ itself");f(d.bind(c))}}catch(e){a(e)}}}function f(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(a);try{e(n(i),r)}catch(e){r(e)}}f(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,a){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&a===o.state&&o.retry()}var a=new c(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),a},c.prototype.catch=function(e){return this.then(null,e)},c.resolve=function(e){return e instanceof c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.all=function(e){return new c(function(t,r){var o=e.length,i=0,a=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function u(e){i++,a[l]=e,i===o&&t(a)}null==e[l]||"object"!==n(e[l])&&"function"!=typeof e[l]||"function"!=typeof e[l].then?u(e[l]):e[l].then(u,r)}(l)})},c.race=function(e){return new c(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=c);var c=window.Promise}else if(void 0!==o){void 0===o.Promise&&(o.Promise=c);c=o.Promise}var f=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},d=new RegExp("^file://","i"),v=function(e,t){var n,r=0;function o(){var e=0;function t(){0==--e&&"function"==typeof n&&n()}return function n(r){var o=r.then;return r.then=function(){e++;var i=o.apply(r,arguments);return i.then(t,function(n){if(t(),0===e)throw n}),n(i)},r}}function i(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function l(e,t){var n=f(t);if(""!==n){var r=e.indexOf("?")<0?"?":"&";e+=r+n}return e}function u(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function s(e){return e.responseText}function c(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}return{request:function(n,r){var f=o();n=i(n,r);var v=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=u),"function"!=typeof n.extract&&(n.extract=s),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=l(n.url,n.data);var i=new e.XMLHttpRequest,f=!1,v=i.abort;for(var h in i.abort=function(){f=!0,v.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==u||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials),n.headers)({}).hasOwnProperty.call(n.headers,h)&&i.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!f&&4===i.readyState)try{var e=n.extract!==s?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||d.test(n.url))t(c(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(e){r(e)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?v:f(v)},jsonp:function(n,u){var s=o();n=i(n,u);var f=new t(function(t,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,u=e.document.createElement("script");e[i]=function(r){u.parentNode.removeChild(u),t(c(n.type,r)),delete e[i]},u.onerror=function(){u.parentNode.removeChild(u),o(new Error("JSONP request failed")),delete e[i]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=i,u.src=l(n.url,n.data),e.document.documentElement.appendChild(u)});return!0===n.background?f:s(f)},setCompletionCallback:function(e){n=e}}}(window,c),h=function(e){var r,o=e.document,i=o.createDocumentFragment(),a={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function l(e){return e.attrs&&e.attrs.xmlns||a[e.tag]}function u(e,t,n,r,o,i,a){for(var l=n;l<r;l++){var u=t[l];null!=u&&s(e,u,o,a,i)}}function s(e,n,r,a,d){var v=n.tag;if("string"!=typeof v)return function(e,t,n,r,o){if(f(t,n),null!=t.instance){var a=s(e,t.instance,n,r,o);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,g(e,a,o),a}return t.domSize=0,i}(e,n,r,a,d);switch(n.state={},null!=n.attrs&&C(n.attrs,n,r),v){case"#":return function(e,t,n){return t.dom=o.createTextNode(t.children),g(e,t.dom,n),t.dom}(e,n,d);case"<":return c(e,n,d);case"[":return function(e,t,n,r,i){var a=o.createDocumentFragment();if(null!=t.children){var l=t.children;u(a,l,0,l.length,n,null,r)}return t.dom=a.firstChild,t.domSize=a.childNodes.length,g(e,a,i),a}(e,n,r,a,d);default:return function(e,n,r,i,a){var s=n.tag,c=n.attrs,f=c&&c.is,d=(i=l(n)||i)?f?o.createElementNS(i,s,{is:f}):o.createElementNS(i,s):f?o.createElement(s,{is:f}):o.createElement(s);n.dom=d,null!=c&&function(e,t,n){for(var r in t)_(e,r,null,t[r],n)}(n,c,i);if(g(e,d,a),null!=n.attrs&&null!=n.attrs.contenteditable)y(n);else if(null!=n.text&&(""!==n.text?d.textContent=n.text:n.children=[t("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children){var v=n.children;u(d,v,0,v.length,r,null,i),function(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&_(e,"value",null,t.value,void 0),"selectedIndex"in t&&_(e,"selectedIndex",null,t.selectedIndex,void 0))}(n)}return d}(e,n,r,a,d)}}function c(e,t,n){var r={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=o.createElement(r);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var a,l=o.createDocumentFragment();a=i.firstChild;)l.appendChild(a);return g(e,l,n),l}function f(e,n){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return i;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return i;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&C(e.attrs,e,n),C(e._state,e,n),e.instance=t.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function d(e,t,n,r,o,i,a){if(t!==n&&(null!=t||null!=n))if(null==t)u(e,n,0,n.length,o,i,a);else if(null==n)w(t,0,t.length,n);else{if(t.length===n.length){for(var l=!1,c=0;c<n.length;c++)if(null!=n[c]&&null!=t[c]){l=null==n[c].key&&null==t[c].key;break}if(l){for(c=0;c<t.length;c++)t[c]!==n[c]&&(null==t[c]&&null!=n[c]?s(e,n[c],o,a,m(t,c+1,i)):null==n[c]?w(t,c,c+1,n):v(e,t[c],n[c],o,m(t,c+1,i),r,a));return}}if(r=r||function(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(t,n)){var f=t.pool;t=t.concat(t.pool)}for(var d,y=0,b=0,x=t.length-1,_=n.length-1;x>=y&&_>=b;){if((S=t[y])!==(C=n[b])||r)if(null==S)y++;else if(null==C)b++;else if(S.key===C.key){var k=null!=f&&y>=t.length-f.length||null==f&&r;b++,v(e,S,C,o,m(t,++y,i),k,a),r&&S.tag===C.tag&&g(e,p(S),i)}else{if((S=t[x])!==C||r)if(null==S)x--;else if(null==C)b++;else{if(S.key!==C.key)break;k=null!=f&&x>=t.length-f.length||null==f&&r;v(e,S,C,o,m(t,x+1,i),k,a),(r||b<_)&&g(e,p(S),m(t,y,i)),x--,b++}else x--,b++}else y++,b++}for(;x>=y&&_>=b;){var S,C;if((S=t[x])!==(C=n[_])||r)if(null==S)x--;else if(null==C)_--;else if(S.key===C.key){k=null!=f&&x>=t.length-f.length||null==f&&r;v(e,S,C,o,m(t,x+1,i),k,a),r&&S.tag===C.tag&&g(e,p(S),i),null!=S.dom&&(i=S.dom),x--,_--}else{if(d||(d=h(t,x)),null!=C){var E=d[C.key];if(null!=E){var A=t[E];k=null!=f&&E>=t.length-f.length||null==f&&r;v(e,A,C,o,m(t,x+1,i),r,a),g(e,p(A),i),t[E].skip=!0,null!=A.dom&&(i=A.dom)}else{i=s(e,C,o,a,i)}}_--}else x--,_--;if(_<b)break}u(e,n,b,_+1,o,i,a),w(t,y,x+1,n)}}function v(e,n,r,o,i,a,u){var h=n.tag;if(h===r.tag){if(r.state=n.state,r._state=n._state,r.events=n.events,!a&&function(e,t){var n,r;null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t));if(!(void 0===n&&void 0===r||n||r))return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0;return!1}(r,n))return;if("string"==typeof h)switch(null!=r.attrs&&(a?(r.state={},C(r.attrs,r,o)):E(r.attrs,r,o)),h){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(n,r);break;case"<":!function(e,t,n,r){t.children!==n.children?(p(t),c(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}(e,n,r,i);break;case"[":!function(e,t,n,r,o,i,a){d(e,t.children,n.children,r,o,i,a);var l=0,u=n.children;if(n.dom=null,null!=u){for(var s=0;s<u.length;s++){var c=u[s];null!=c&&null!=c.dom&&(null==n.dom&&(n.dom=c.dom),l+=c.domSize||1)}1!==l&&(n.domSize=l)}}(e,n,r,a,o,i,u);break;default:!function(e,n,r,o,i){var a=n.dom=e.dom;i=l(n)||i,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)_(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||k(o)?"key"!==o&&e.dom.removeAttribute(o):S(e,o,void 0))})(n,e.attrs,n.attrs,i),null!=n.attrs&&null!=n.attrs.contenteditable?y(n):null!=e.text&&null!=n.text&&""!==n.text?e.text.toString()!==n.text.toString()&&(e.dom.firstChild.nodeValue=n.text):(null!=e.text&&(e.children=[t("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=n.text&&(n.children=[t("#",void 0,void 0,n.text,void 0,void 0)]),d(a,e.children,n.children,r,o,null,i))}(n,r,a,o,u)}else!function(e,n,r,o,i,a,l){if(a)f(r,o);else{if(r.instance=t.normalize(r._state.view.call(r.state,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");null!=r.attrs&&E(r.attrs,r,o),E(r._state,r,o)}null!=r.instance?(null==n.instance?s(e,r.instance,o,l,i):v(e,n.instance,r.instance,o,i,a,l),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(b(n.instance,null),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(e,n,r,o,i,a,u)}else b(n,null),s(e,r,o,u,i)}function h(e,t){var n={},r=0;for(r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function p(e){var t=e.domSize;if(null!=t||null==e.dom){var n=o.createDocumentFragment();if(t>0){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return e.dom}function m(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function g(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function y(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function w(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:b(i,r))}}function b(e,t){var n,r=1,o=0;e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(n=e.attrs.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove&&(null!=(n=e._state.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));function i(){if(++o===r&&(function e(t){t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t);if("string"!=typeof t.tag)"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)x(i.nextSibling);x(e.dom),null==t||null!=e.domSize||null!=(a=e.attrs)&&(a.oncreate||a.onupdate||a.onbeforeremove||a.onremove)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}var a}i()}function x(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function _(e,t,r,i,a){var l=e.dom;if("key"!==t&&"is"!==t&&(r!==i||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===o.activeElement}(e,t)||"object"===n(i))&&void 0!==i&&!k(t)){var u,s=t.indexOf(":");if(s>-1&&"xlink"===t.substr(0,s))l.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(s+1),i);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof i)S(e,t,i);else if("style"===t)!function(e,t,n){t===n&&(e.style.cssText="",t=null);if(null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{for(var r in"string"==typeof t&&(e.style.cssText=""),n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}(l,r,i);else if(t in l&&("href"!==(u=t)&&"list"!==u&&"form"!==u&&"width"!==u&&"height"!==u)&&void 0===a&&!function(e){return e.attrs.is||e.tag.indexOf("-")>-1}(e)){if("value"===t){var c=""+i;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===c&&e.dom===o.activeElement)return;if("select"===e.tag)if(null===i){if(-1===e.dom.selectedIndex&&e.dom===o.activeElement)return}else if(null!==r&&e.dom.value===c&&e.dom===o.activeElement)return;if("option"===e.tag&&null!=r&&e.dom.value===c)return}if("input"===e.tag&&"type"===t)return void l.setAttribute(t,i);l[t]=i}else"boolean"==typeof i?i?l.setAttribute(t,""):l.removeAttribute(t):l.setAttribute("className"===t?"class":t,i)}}function k(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function S(e,t,n){var o=e.dom,i="function"!=typeof r?n:function(e){var t=n.call(o,e);return r.call(o,e),t};if(t in o)o[t]="function"==typeof n?i:null;else{var a=t.slice(2);if(void 0===e.events&&(e.events={}),e.events[t]===i)return;null!=e.events[t]&&o.removeEventListener(a,e.events[t],!1),"function"==typeof n&&(e.events[t]=i,o.addEventListener(a,e.events[t],!1))}}function C(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function E(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}return{render:function(e,n){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],i=o.activeElement,a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(n)||(n=[n]),d(e,e.vnodes,t.normalizeChildren(n),!1,r,null,"http://www.w3.org/1999/xhtml"===a?void 0:a),e.vnodes=n,null!=i&&o.activeElement!==i&&i.focus();for(var l=0;l<r.length;l++)r[l]()},setEventCallback:function(e){return r=e}}};var p=function(e){var t=h(e);t.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:o()});var n=[];function r(e){var t=n.indexOf(e);t>-1&&n.splice(t,2)}function o(){for(var e=1;e<n.length;e+=2)n[e]()}return{subscribe:function(e,t){r(e),n.push(e,function(e){var t=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===t||o-t>=16?(t=o,e()):null===n&&(n=r(function(){n=null,e(),t=Date.now()},16-(o-t)))}}(t))},unsubscribe:r,redraw:o,render:t.render}}(window);v.setCompletionCallback(p.redraw);var m;s.mount=(m=p,function(e,n){if(null===n)return m.render(e,[]),void m.unsubscribe(e);if(null==n.view&&"function"!=typeof n)throw new Error("m.mount(element, component) expects a component, not a vnode");m.subscribe(e,function(){m.render(e,t(n))}),m.redraw()});var g=c,y=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),a=decodeURIComponent(i[0]),l=2===i.length?decodeURIComponent(i[1]):"";"true"===l?l=!0:"false"===l&&(l=!1);var u=a.split(/\]\[?|\[/),s=n;a.indexOf("[")>-1&&u.pop();for(var c=0;c<u.length;c++){var f=u[c],d=u[c+1],v=""==d||!isNaN(parseInt(d,10)),h=c===u.length-1;if(""===f)null==r[a=u.slice(0,c).join()]&&(r[a]=0),f=r[a]++;null==s[f]&&(s[f]=h?l:v?[]:{}),s=s[f]}}return n},w=function(e){var t,n="function"==typeof e.history.pushState,r="function"==typeof setImmediate?setImmediate:setTimeout;function o(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function i(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var a=o>-1?o:e.length,l=y(e.slice(r+1,a));for(var u in l)t[u]=l[u]}if(o>-1){var s=y(e.slice(o+1));for(var u in s)n[u]=s[u]}return e.slice(0,i)}var a={prefix:"#!",getPath:function(){switch(a.prefix.charAt(0)){case"#":return o("hash").slice(a.prefix.length);case"?":return o("search").slice(a.prefix.length)+o("hash");default:return o("pathname").slice(a.prefix.length)+o("search")+o("hash")}},setPath:function(t,r,o){var l={},u={};if(t=i(t,l,u),null!=r){for(var s in r)l[s]=r[s];t=t.replace(/:([^\/]+)/g,function(e,t){return delete l[t],r[t]})}var c=f(l);c&&(t+="?"+c);var d=f(u);if(d&&(t+="#"+d),n){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,a.prefix+t):e.history.pushState(v,h,a.prefix+t)}else e.location.href=a.prefix+t}};return a.defineRoutes=function(o,l,u){function s(){var t=a.getPath(),n={},r=i(t,n,n),s=e.history.state;if(null!=s)for(var c in s)n[c]=s[c];for(var f in o){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(r))return void r.replace(d,function(){for(var e=f.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),i=0;i<e.length;i++)n[e[i].replace(/:|\./g,"")]=decodeURIComponent(r[i]);l(o[f],n,t,f)})}u(t,n)}var c;n?e.onpopstate=(c=s,function(){null==t&&(t=r(function(){t=null,c()}))}):"#"===a.prefix.charAt(0)&&(e.onhashchange=s),s()},a};s.route=function(e,n){var r,o,i,a,l,u=w(e),s=function(e,s,c){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var f=function(){null!=r&&n.render(e,r(t(o,i.key,i)))},d=function(e){if(e===s)throw new Error("Could not resolve default route "+s);u.setPath(s,null,{replace:!0})};u.defineRoutes(c,function(e,t,n){var u=l=function(e,s){u===l&&(o=null==s||"function"!=typeof s.view&&"function"!=typeof s?"div":s,i=t,a=n,l=null,r=(e.render||function(e){return e}).bind(e),f())};e.view||"function"==typeof e?u({},e):e.onmatch?g.resolve(e.onmatch(t,n)).then(function(t){u(e,t)},d):u(e,"div")},d),n.subscribe(e,f)};return s.set=function(e,t,n){null!=l&&((n=n||{}).replace=!0),l=null,u.setPath(e,t,n)},s.get=function(){return a},s.prefix=function(e){u.prefix=e},s.link=function(e){e.dom.setAttribute("href",u.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(u.prefix)&&(t=t.slice(u.prefix.length)),s.set(t,void 0,void 0)}}},s.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},s}(window,p),s.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var b=h(window);s.render=b.render,s.redraw=p.redraw,s.request=v.request,s.jsonp=v.jsonp,s.parseQueryString=y,s.buildQueryString=f,s.version="1.1.6",s.vnode=t,e.exports=s}()});a.displayName="mithril";var l=i(function(e){!function(){var t=0,n={};function r(){function e(){return arguments.length>0&&arguments[0]!==n&&o(e,arguments[0]),e._state.value}return function(e){e.constructor=r,e._state={id:t++,value:void 0,state:0,derive:void 0,recover:void 0,deps:{},parents:[],endStream:void 0,unregister:void 0},e.map=e["fantasy-land/map"]=s,e["fantasy-land/ap"]=c,e["fantasy-land/of"]=r,e.valueOf=f,e.toJSON=d,e.toString=f,Object.defineProperties(e,{end:{get:function(){if(!e._state.endStream){var t=r();t.map(function(n){return!0===n&&(u(e),t._state.unregister=function(){u(t)}),n}),e._state.endStream=t}return e._state.endStream}}})}(e),arguments.length>0&&arguments[0]!==n&&o(e,arguments[0]),e}function o(e,t){for(var n in i(e,t),e._state.deps)a(e._state.deps[n],!1);null!=e._state.unregister&&e._state.unregister(),function(e){for(var t in e._state.changed=!1,e._state.deps)e._state.deps[t]._state.changed=!1}(e)}function i(e,t){e._state.value=t,e._state.changed=!0,2!==e._state.state&&(e._state.state=1)}function a(e,t){var r=e._state.parents;if(r.length>0&&r.every(h)&&(t||r.some(p))){var o=e._state.derive();if(o===n)return!1;i(e,o)}}function l(e,t){if(!t.every(v))throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");return function(e,t,n){var r=e._state;return r.derive=n,r.parents=t.filter(m),function e(t,n){for(var r=0;r<n.length;r++)n[r]._state.deps[t._state.id]=t,e(t,n[r]._state.parents)}(e,r.parents),a(e,!0),e}(r(),t,function(){return e.apply(this,t.concat([t.filter(p)]))})}function u(e){for(var t=0;t<e._state.parents.length;t++){delete e._state.parents[t]._state.deps[e._state.id]}for(var n in e._state.deps){var r=e._state.deps[n],o=r._state.parents.indexOf(e);o>-1&&r._state.parents.splice(o,1)}e._state.state=2,e._state.deps={}}function s(e){return l(function(t){return e(t())},[this])}function c(e){return l(function(e,t){return e()(t())},[e,this])}function f(){return this._state.value}function d(){return null!=this._state.value&&"function"==typeof this._state.value.toJSON?this._state.value.toJSON():this._state.value}function v(e){return e._state}function h(e){return 1===e._state.state}function p(e){return e._state.changed}function m(e){return 2!==e._state.state}r["fantasy-land/of"]=r,r.merge=function(e){return l(function(){return e.map(function(e){return e()})},e)},r.combine=l,r.scan=function(e,t,n){var r=l(function(n){return t=e(t,n._state.value)},[n]);return 0===r._state.state&&r(t),r},r.scanMerge=function(e,t){var n=e.map(function(e){var t=e[0];return 0===t._state.state&&t(void 0),t});return l(function(){var r=arguments[arguments.length-1];return n.forEach(function(n,o){r.indexOf(n)>-1&&(t=e[o][1](t,n._state.value))}),t},n)},r.HALT=n,e.exports=r}()}),u=require("lodash.isequal");e.keys=t,e.renderer=a,e.ComponentCreator=function(e){var n=e.createContent,o=void 0===n?function(){return null}:n,i=e.createProps,s=void 0===i?function(){return{}}:i,c=e.component,f=void 0===c?null:c,d=e.getElement,v=void 0===d?function(){return"div"}:d,h=e.getInitialState,p=void 0===h?function(){return{}}:h,m=e.onMount,g=void 0===m?function(){return null}:m,y=e.onUnMount,w=void 0===y?function(){return null}:y,b=e.onUpdate,x=void 0===b?function(){return null}:b,_=e.view,k=void 0===_?null:_,S={mounted:!1,value:null},C=function(e){return a(f||v(e),s(e,{renderer:a,requiresKeys:!1,keys:t}),[e.attrs.before,o(e,{renderer:a,requiresKeys:!1,keys:t}),e.attrs.after])};return{view:k?function(e){return k(e,{render:C,renderer:a})}:function(e){return C(e)},oninit:function(e){var n=p(e,l,{keys:t});r(e.state,n),void 0!==n.redrawOnUpdate&&n.redrawOnUpdate.map(function(e){S.mounted&&(u(e,S.value)||(new Promise(function(e){return requestAnimationFrame(e)}).then(a.redraw),S.value=e))})},oncreate:function(e){S.mounted=!0,g(e,{keys:t})},onremove:w,onupdate:x}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-base.js.map
