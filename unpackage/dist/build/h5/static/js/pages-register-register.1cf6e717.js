(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"147c":function(t,e,i){"use strict";i.r(e);var n=i("368e"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"26bb":function(t,e,i){"use strict";var n=i("d9bd"),o=i.n(n);o.a},3033:function(t,e,i){"use strict";i.r(e);var n=i("744d"),o=i("feae");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("7172");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4592f173",null,!1,n["a"],r);e["default"]=c.exports},"368e":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481");var o=n(i("3033")),a={data:function(){return{phone:"",yanzhengcode:"",password:""}},onLoad:function(){console.log(this.$store.state.userInfo.token)},computed:{isOk:function(){return!!(this.phone&&this.yanzhengcode&&this.password)},isverifitionOk:function(){return!!this.phone},isSubmitOk:function(){return!!(this.phone&&this.yanzhengcode&&this.password)}},methods:{changefun:function(t){this.boxShow=t},goBack:function(){uni.navigateTo({url:"../signin/signin"})},register:function(){var t=this.removespace(this.phone),e=this.removespace(this.yanzhengcode),i=this.removespace(this.password);console.log(t,e,i),t&&11==t.length?e?(!i||i.length<6||i.length>16)&&uni.showModal({content:"请检查密码是否正确"}):uni.showModal({content:"请输入验证码"}):uni.showModal({content:"请输检查手机号是否正确"}),uni.showModal({content:"待连接，敬请期待"})},getverifition:function(){var t=this,e=this.removespace(this.phone);e&&11==e.length?uni.request({url:t.$url+"/api/sms/send",method:"GET",data:{mobile:e,event:"register"},success:function(t){console.log("请求成功",t)}}):uni.showModal({content:"请检查您输入的是否是11位的手机号码"})},removespace:function(t){if("string"==typeof t)return t.replace(/\s+/g,"")}},components:{Topbar:o.default}};e.default=a},"394b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-1464b66b]{width:100%;height:100%;background:#fff}.register .topber uni-image[data-v-1464b66b]{width:%?20?%;height:%?36?%;margin:%?66?% 0 0 %?30?%}.register .title[data-v-1464b66b]{font-size:%?88?%;font-weight:800;margin:%?114?% 0 %?93?% %?57?%}.register .r_text[data-v-1464b66b]{height:%?34?%;font-size:%?36?%;font-family:PingFang SC;font-weight:700;color:#111;margin:0 0 %?102?% %?57?%}.register .form[data-v-1464b66b]{margin-left:%?56?%}.register .form .border_bom[data-v-1464b66b]{width:%?638?%;border-bottom:%?1?% solid #9c9c9c;padding-bottom:%?30?%;margin-bottom:%?29?%}.register .form .border_bom uni-input[data-v-1464b66b]{font-size:%?30?%;color:#999;text-indent:%?1?%}.register .form .getverifition[data-v-1464b66b]{display:-webkit-box;display:-webkit-flex;display:flex}.register .form .getverifition .getverifition_btn[data-v-1464b66b]{width:%?188?%;height:%?61?%;line-height:%?61?%;text-align:center;color:#fff;font-size:%?24?%;background:#d8d8d8;border-radius:%?30?%}.register .form .getverifition .getverifition_btn.active[data-v-1464b66b]{background:#ff9805}.register .goregister[data-v-1464b66b]{height:%?28?%;font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#333;margin:0 0 %?60?% %?57?%}.register .btn_signin[data-v-1464b66b]{width:%?683?%;height:%?100?%;border-radius:%?48?%;background-color:#d8d8d8;color:#fff;font-size:%?36?%}.register .btn_signin.active[data-v-1464b66b]{background:#ff9805}body.?%PAGE?%[data-v-1464b66b]{background:#fff}",""])},7172:function(t,e,i){"use strict";var n=i("a550"),o=i.n(n);o.a},"744d":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"topbar"},[i("v-uni-view",{staticClass:"img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-fanhui",staticStyle:{"font-weight":"bold"}})],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.title))])],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},7844:function(t,e,i){"use strict";i.r(e);var n=i("d57a"),o=i("147c");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("26bb");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1464b66b",null,!1,n["a"],r);e["default"]=c.exports},a550:function(t,e,i){var n=i("eb58");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("ecc18c28",n,!0,{sourceMap:!1,shadowMode:!1})},ac3c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:["title"],methods:{goBack:function(){uni.navigateBack({})}}};e.default=n},d57a:function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"register"},[i("Topbar"),i("v-uni-view",{staticClass:"title"},[t._v("立即加入")]),i("v-uni-view",{staticClass:"r_text"},[t._v("手机号注册")]),i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"verification"},[i("v-uni-view",{staticClass:"border_bom"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"border_bom getverifition"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.yanzhengcode,callback:function(e){t.yanzhengcode=e},expression:"yanzhengcode"}}),i("v-uni-button",{class:{getverifition_btn:!0,active:t.isverifitionOk},attrs:{disabled:!t.isverifitionOk,type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getverifition.apply(void 0,arguments)}}},[t._v("获取验证码")])],1),i("v-uni-view",{staticClass:"border_bom"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请设置6-16位的密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),i("v-uni-view",{staticClass:"goregister",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[t._v("点击登录")]),i("v-uni-button",{class:{btn_signin:!0,active:t.isSubmitOk},attrs:{disabled:!t.isOk,type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("注册")])],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},d9bd:function(t,e,i){var n=i("394b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("62b9592d",n,!0,{sourceMap:!1,shadowMode:!1})},eb58:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".topbar[data-v-4592f173]{height:%?128?%;width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:0 %?30?%}.topbar .img[data-v-4592f173]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.topbar uni-image[data-v-4592f173]{width:%?18?%;height:%?30?%}.topbar .title[data-v-4592f173]{width:%?672?%;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""])},feae:function(t,e,i){"use strict";i.r(e);var n=i("ac3c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a}}]);