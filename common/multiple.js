"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril);require("polythene/common/object.assign");var multiple=function(mOpts){var items=[],removeItem=function(id){var item=findItem(id),index=items.indexOf(item);-1!==index&&items.splice(index,1)},findItem=function(id){for(var i=0;i<items.length;i++)if(items[i].instanceId===id)return items[i]},next=function(){items.length&&(items[0].show=!0,_mithril2["default"].redraw())},_remove=function(instanceId){mOpts.queue?(items.shift(),setTimeout(next,0)):removeItem(instanceId)},setPauseState=function(pause,instanceId){var item=findItem(instanceId);item&&(item.pause=pause,item.unpause=!pause)},didShow=function(instanceId){var item=findItem(instanceId);item&&item.showDeferred.resolve()},didHide=function(instanceId){var item=findItem(instanceId);item&&item.hideDeferred.resolve(),mOpts.queue&&_remove(instanceId)},makeItem=function(opts,instanceId){return Object.assign({},mOpts,{instanceId:instanceId,opts:opts,show:!mOpts.queue,showDeferred:_mithril2["default"].deferred(),hideDeferred:_mithril2["default"].deferred(),didShow:didShow,didHide:didHide})};return{count:function(){return items.length},clear:function(){return items.length=0},show:function(opts){var instanceId=arguments.length<=1||void 0===arguments[1]?mOpts.defaultId:arguments[1],item=void 0;return mOpts.queue?(item=makeItem(opts,instanceId),items.push(item),1===items.length&&next()):(item=findItem(instanceId),item||(item=makeItem(opts,instanceId),items.push(item))),item.showDeferred.promise},hide:function(){var instanceId=arguments.length<=0||void 0===arguments[0]?mOpts.defaultId:arguments[0],item=void 0;return mOpts.queue?items.length&&(item=items[0]):item=findItem(instanceId),item?(item.hide=!0,item.hideDeferred.promise):void 0},remove:function(){var instanceId=arguments.length<=0||void 0===arguments[0]?mOpts.defaultId:arguments[0];_remove(instanceId)},pause:function(){var instanceId=arguments.length<=0||void 0===arguments[0]?mOpts.defaultId:arguments[0];setPauseState(!0,instanceId)},unpause:function(){var instanceId=arguments.length<=0||void 0===arguments[0]?mOpts.defaultId:arguments[0];setPauseState(!1,instanceId)},view:function(){var toShowItems=items.filter(function(item){return item.show});return toShowItems.length?(document.body.classList.add(mOpts.bodyShowClass),(0,_mithril2["default"])(mOpts.tag,toShowItems.map(function(itemData){return _mithril2["default"].component(mOpts.instance,Object.assign({},itemData,{transitions:mOpts.transitions}))}))):(document.body.classList.remove(mOpts.bodyShowClass),(0,_mithril2["default"])(mOpts.noneTag))}}};exports["default"]=multiple,module.exports=exports["default"];
//# sourceMappingURL=multiple.js.map