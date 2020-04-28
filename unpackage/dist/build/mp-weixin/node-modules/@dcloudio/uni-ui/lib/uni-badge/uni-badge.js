(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"],{1402:function(t,e,n){"use strict";n.r(e);var u=n("1ef1"),i=n("9cdb1");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("2cda");var c,r=n("f0c5"),d=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"691dc2bf",null,!1,u["a"],c);e["default"]=d.exports},"1ef1":function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})},"2cda":function(t,e,n){"use strict";var u=n("8587"),i=n.n(u);i.a},8587:function(t,e,n){},"9cdb1":function(t,e,n){"use strict";n.r(e);var u=n("d2a4"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},d2a4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component',
    {
        'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1402"))
        })
    },
    [['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component']]
]);
