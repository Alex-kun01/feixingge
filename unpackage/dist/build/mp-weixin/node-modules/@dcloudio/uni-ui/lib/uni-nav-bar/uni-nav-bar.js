(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar"],{"2b92":function(t,n,e){"use strict";e.r(n);var i=e("d4da"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},4472:function(t,n,e){"use strict";var i=e("b8e7"),u=e.n(i);u.a},7316:function(t,n,e){"use strict";e.r(n);var i=e("82247"),u=e("2b92");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("4472");var r,a=e("f0c5"),l=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"d7d45b90",null,!1,i["a"],r);n["default"]=l.exports},82247:function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},b8e7:function(t,n,e){},d4da:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar").then(e.bind(null,"4d69"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"92cc"))},o={name:"UniNavBar",components:{uniStatusBar:i,uniIcons:u},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};n.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component',
    {
        'node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7316"))
        })
    },
    [['node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component']]
]);