(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyperson/modifyperson"],{"3dd2":function(n,e,t){"use strict";t.r(e);var o=t("da43"),u=t("d2d6");for(var i in u)"default"!==i&&function(n){t.d(e,n,function(){return u[n]})}(i);t("8c1d");var r,a=t("f0c5"),c=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,"262149a6",null,!1,o["a"],r);e["default"]=c.exports},5828:function(n,e,t){},"8c1d":function(n,e,t){"use strict";var o=t("5828"),u=t.n(o);u.a},"8e4f":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(t.bind(null,"e33f"))},u=function(){return t.e("components/topBar/topbarx").then(t.bind(null,"3033"))},i={data:function(){return{title:"修改个人信息",person:{name:"张三",sex:0,sexStr:"男",phone:"17628331820",userName:"HHHHH"}}},methods:{goModifyPass:function(){n.navigateTo({url:"../modify/modify"})},choseSex:function(){this.$refs.popup.open()},setSex:function(n){this.person.sex=n,this.person.sexStr=0==n?"男":"女",this.$refs.popup.close()},childbar:function(n){switch(n.identify){case"leftHandle":break;case"rightHandle":this.$router.push({path:"/pwdreg",query:{tag:"reg",btn:"reg"}});break}},goBack:function(){n.navigateTo({url:"../person/person"})}},mounted:function(){},components:{Topbar:u,uniPopup:o}};e.default=i}).call(this,t("6e42")["default"])},d2d6:function(n,e,t){"use strict";t.r(e);var o=t("8e4f"),u=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=u.a},da43:function(n,e,t){"use strict";var o={"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"3504"))},u=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"b",function(){return u}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return o})},e940:function(n,e,t){"use strict";(function(n){t("9712"),t("921b");o(t("66fd"));var e=o(t("3dd2"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["e940","common/runtime","common/vendor"]]]);