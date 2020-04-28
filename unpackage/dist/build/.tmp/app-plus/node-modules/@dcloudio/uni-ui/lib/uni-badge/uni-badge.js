(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"],{"0e8e":function(t,e,n){},"2a9a":function(t,e,n){"use strict";var u=n("0e8e"),i=n.n(u);i.a},"59ad":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},7020:function(t,e,n){"use strict";n.r(e);var u=n("59ad"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},"7e80":function(t,e,n){"use strict";n.r(e);var u=n("fc63"),i=n("7020");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("2a9a");var c,r=n("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"b615e4c8",null,!1,u["a"],c);e["default"]=o.exports},fc63:function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component',
    {
        'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7e80"))
        })
    },
    [['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component']]
]);
