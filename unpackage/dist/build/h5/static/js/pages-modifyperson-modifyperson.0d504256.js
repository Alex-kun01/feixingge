(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-modifyperson-modifyperson"],{"1bd7":function(t,e,i){var n=i("2940");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7663ada5",n,!0,{sourceMap:!1,shadowMode:!1})},2940:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".topbar[data-v-b49b759e]{height:45px;line-height:%?55?%;width:100%;background-color:#fff;position:relative}.topbar uni-image[data-v-b49b759e]{width:%?18?%;height:%?30?%;margin:%?30?% 0 0 %?30?%;position:absolute;top:0;left:0}.topbar .title[data-v-b49b759e]{font-size:%?32?%;position:absolute;top:10px;left:calc(50% - %?100?%)}.person-container[data-v-b49b759e]{width:100%;background-color:#eee}.person-container .por[data-v-b49b759e]{width:100%;height:80px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;box-sizing:border-box;padding:0 10px}.person-container .por uni-image[data-v-b49b759e]{width:50px;height:50px;margin-right:10px;border-radius:50%}.person-container .por .name[data-v-b49b759e]{font-weight:700;font-size:1rem}.person-container .person-item[data-v-b49b759e]{background-color:#fff;width:100%;box-sizing:border-box;padding:0 10px;height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.person-container .person-item .title[data-v-b49b759e]{font-size:.8rem;color:#222}.person-container .person-item .right[data-v-b49b759e]{font-size:.6rem;color:#696969}.person-container .person-item .right uni-input[data-v-b49b759e]{font-size:3vw;text-align:right}.person-container .uni-popup .uni-popup__wrapper-box .option[data-v-b49b759e]{width:100%;background-color:#fff}.person-container .uni-popup .uni-popup__wrapper-box .option uni-text[data-v-b49b759e]{width:100%;height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#222}.person-container .uni-popup .uni-popup__wrapper-box .cancel[data-v-b49b759e]{margin-top:6px;width:100%;height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;color:#222}",""])},3033:function(t,e,i){"use strict";i.r(e);var n=i("744d"),o=i("feae");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("7172");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4592f173",null,!1,n["a"],r);e["default"]=c.exports},"3dd2":function(t,e,i){"use strict";i.r(e);var n=i("b87a"),o=i("d2d6");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("52ed");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"b49b759e",null,!1,n["a"],r);e["default"]=c.exports},"52ed":function(t,e,i){"use strict";var n=i("1bd7"),o=i.n(n);o.a},7172:function(t,e,i){"use strict";var n=i("a550"),o=i.n(n);o.a},"744d":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"topbar"},[i("v-uni-view",{staticClass:"img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-fanhui",staticStyle:{"font-weight":"bold"}})],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.title))])],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},a550:function(t,e,i){var n=i("eb58");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("ecc18c28",n,!0,{sourceMap:!1,shadowMode:!1})},ac3c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:["title"],methods:{goBack:function(){uni.navigateBack({})}}};e.default=n},b87a:function(t,e,i){"use strict";var n={"uni-popup":i("3504").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"person-container"},[i("Topbar",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"por"},[i("v-uni-image",{attrs:{src:"../../static/person/por.png",mode:"aspectFit"}}),i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.person.userName,callback:function(e){t.$set(t.person,"userName",e)},expression:"person.userName"}})],1),i("v-uni-view",{staticClass:"person-item",staticStyle:{"border-bottom":"1px solid #E1E1E1"}},[i("v-uni-text",{staticClass:"title"},[t._v("姓名")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.person.name,callback:function(e){t.$set(t.person,"name",e)},expression:"person.name"}})],1)],1),i("v-uni-view",{staticClass:"person-item",staticStyle:{"border-bottom":"1px solid #E1E1E1"}},[i("v-uni-text",{staticClass:"title"},[t._v("性别")]),i("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choseSex.apply(void 0,arguments)}}},[i("v-uni-text",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(t.person.sexStr))])],1)],1),i("v-uni-view",{staticClass:"person-item"},[i("v-uni-text",{staticClass:"title"},[t._v("手机")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.person.phone,callback:function(e){t.$set(t.person,"phone",e)},expression:"person.phone"}})],1)],1),i("v-uni-view",{staticClass:"person-item",staticStyle:{"margin-top":"10px","border-bottom":"1px solid #E1E1E1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goModifyPass.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"title"},[t._v("修改密码")]),i("v-uni-view",{staticClass:"right"})],1),i("v-uni-view",{staticClass:"person-item"},[i("v-uni-text",{staticClass:"title"},[t._v("退出登录")])],1),i("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"option"},[i("v-uni-text",{staticStyle:{"border-bottom":"1px solid #F2F2F2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSex(0)}}},[t._v("男")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSex(1)}}},[t._v("女")])],1),i("v-uni-text",{staticClass:"cancel"},[t._v("取消")])],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},be1c:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("e33f")),a=n(i("3033")),r={data:function(){return{title:"修改个人信息",person:{name:"张三",sex:0,sexStr:"男",phone:"17628331820",userName:"HHHHH"}}},methods:{goModifyPass:function(){uni.navigateTo({url:"../modify/modify"})},choseSex:function(){this.$refs.popup.open()},setSex:function(t){this.person.sex=t,this.person.sexStr=0==t?"男":"女",this.$refs.popup.close()},childbar:function(t){switch(t.identify){case"leftHandle":break;case"rightHandle":this.$router.push({path:"/pwdreg",query:{tag:"reg",btn:"reg"}});break}},goBack:function(){uni.navigateTo({url:"../person/person"})}},mounted:function(){},components:{Topbar:a.default,uniPopup:o.default}};e.default=r},d2d6:function(t,e,i){"use strict";i.r(e);var n=i("be1c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},eb58:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".topbar[data-v-4592f173]{height:%?128?%;width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:0 %?30?%}.topbar .img[data-v-4592f173]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.topbar uni-image[data-v-4592f173]{width:%?18?%;height:%?30?%}.topbar .title[data-v-4592f173]{width:%?672?%;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""])},feae:function(t,e,i){"use strict";i.r(e);var n=i("ac3c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a}}]);