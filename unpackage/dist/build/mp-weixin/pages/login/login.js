(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{2361:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},"5c62":function(t,e,n){"use strict";(function(t){n("a406"),n("921b");o(n("66fd"));var e=o(n("f115"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5d21":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/topbar").then(n.bind(null,"9342"))},i={data:function(){return{isPhoneLogin:!0,topbarData:{leftHandle:!1,title:"验证原手机号",left:"《",right:""},phone:"",yzcode:"",username:"",password:""}},methods:{loginOrResign:function(){var e=this,n={},o="";if(this.isPhoneLogin){if(o="/api/user/mobilelogin",!this.phone)return void t.showModal({title:"提示",content:"请输入手机号码",showCancel:!1});if(!this.yzcode)return void t.showModal({title:"提示",content:"请输入验证码",showCancel:!1});n.mobile=this.phone,n.captcha=this.yzcode}else{if(o="/api/user/login",!this.username)return void t.showModal({title:"提示",content:"请输入用户名",showCancel:!1});if(!this.password)return void t.showModal({title:"提示",content:"请输入密码",showCancel:!1});n.account=this.username,n.password=this.password}console.log(n),t.request({url:e.$url+o,method:"POST",data:n,success:function(n){1==n.data.code?(t.showToast({title:n.data.msg}),e.$store.commit("setUserInfo",n.data.data.userinfo),setTimeout(function(){t.switchTab({url:"../index/index"})},1e3)):t.showToast({title:n.data.msg,icon:"none"})}})},changeLoginWay:function(t){this.isPhoneLogin=!this.isPhoneLogin},getYzcode:function(){var e=this.phone;11==e.length?t.request({url:"/sms/send",method:"GET",data:{mobile:e},success:function(t){console.log(t)}}):t.showModal({showCancel:!1,title:"提示",content:"请输入正确手机号码"})},childbar:function(t){switch(t.identify){case"leftHandle":break;case"rightHandle":this.$router.push({path:"/pwdreg",query:{tag:"reg",btn:"reg"}});break}}},components:{Topbar:o}};e.default=i}).call(this,n("543d")["default"])},"70f3":function(t,e,n){"use strict";n.r(e);var o=n("5d21"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},d17b:function(t,e,n){},e55a:function(t,e,n){"use strict";var o=n("d17b"),i=n.n(o);i.a},f115:function(t,e,n){"use strict";n.r(e);var o=n("2361"),i=n("70f3");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("e55a");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"7224cc05",null,!1,o["a"],s);e["default"]=r.exports}},[["5c62","common/runtime","common/vendor"]]]);