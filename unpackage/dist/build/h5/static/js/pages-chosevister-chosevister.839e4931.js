(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chosevister-chosevister"],{"1f48":function(t,e,i){"use strict";i.r(e);var n=i("bed2"),a=i("5436");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b073");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"131e54f7",null,!1,n["a"],r);e["default"]=s.exports},3033:function(t,e,i){"use strict";i.r(e);var n=i("744d"),a=i("feae");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("7172");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4592f173",null,!1,n["a"],r);e["default"]=s.exports},5436:function(t,e,i){"use strict";i.r(e);var n=i("9f75"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},7172:function(t,e,i){"use strict";var n=i("a550"),a=i.n(n);a.a},"744d":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"topbar"},[i("v-uni-view",{staticClass:"img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-fanhui",staticStyle:{"font-weight":"bold"}})],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.title))])],1)],1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},"90af":function(t,e,i){var n=i("beca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("68cf01e8",n,!0,{sourceMap:!1,shadowMode:!1})},"9f75":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3033")),o={data:function(){return{title:"选择常用旅客",city:{from:"北京",to:"成都"},cyUserlist:[{name:"张三",idcard:"513821199999999999",phone:"13333333333"},{name:"张三",idcard:"513821199999999999",phone:"13333333333"},{name:"张三",idcard:"513821199999999999",phone:"13333333333"}]}},onLoad:function(){},methods:{goAddvister:function(){uni.navigateTo({url:"../addvister/addvister"})},goSetUser:function(t){uni.navigateTo({url:"../setvister/setvister?id="+t.name})},goBack:function(){uni.switchTab({url:"../mine/mine"})}},components:{Topbar:a.default}};e.default=o},a550:function(t,e,i){var n=i("eb58");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ecc18c28",n,!0,{sourceMap:!1,shadowMode:!1})},ac3c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:["title"],methods:{goBack:function(){uni.navigateBack({})}}};e.default=n},b073:function(t,e,i){"use strict";var n=i("90af"),a=i.n(n);a.a},beca:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-131e54f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .topbar[data-v-131e54f7]{height:45px;line-height:%?55?%;width:100%;background-color:#fff;position:relative}.content .topbar uni-image[data-v-131e54f7]{width:%?18?%;height:%?30?%;margin:%?30?% 0 0 %?30?%;position:absolute;top:0;left:0}.content .topbar .title[data-v-131e54f7]{font-size:%?32?%;position:absolute;top:10px;left:calc(50% - %?100?%)}.content .info_wrap[data-v-131e54f7]{width:90%;margin:0 auto;background:#fff;border-radius:5px;position:relative;margin-top:4vw;padding:3vw 0}.content .info_wrap .chosego_wrap[data-v-131e54f7]{color:#ff9805}.content .info_wrap .item_wrap[data-v-131e54f7]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:100%;padding:0 4vw;height:10vw}.content .info_wrap .item_wrap .rt_img[data-v-131e54f7]{width:10vw;height:10vw;border-radius:50%;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.content .info_wrap .item_wrap .num_wrap[data-v-131e54f7]{color:#999;font-weight:200}.content .info_wrap .item_wrap .name[data-v-131e54f7]{line-height:10vw;width:auto;text-align:center;font-size:5vw}.content .info_wrap .item_wrap .time_show[data-v-131e54f7]{line-height:18vw;width:auto;text-align:center}.content .info_wrap .item_wrap .search_btn[data-v-131e54f7]{width:90%;height:13vw;line-height:13vw;border-radius:10vw;background:#ff9805}.content .info_wrap .btn_wrap[data-v-131e54f7]{height:18vw;margin-bottom:6vw}.content .info_wrap .go_next_icon[data-v-131e54f7]{left:90%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.content .info_wrap .go_next_icon uni-image[data-v-131e54f7]{width:2vw!important;height:4vw!important}.content .icon_wrap[data-v-131e54f7]{width:10vw}.content .icon_wrap uni-image[data-v-131e54f7]{width:8vw!important;height:8vw!important}.content .go_center[data-v-131e54f7]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}",""])},bed2:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("Topbar",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"info_wrap"},[i("v-uni-view",{staticClass:"card_wrap"},[i("v-uni-view",{staticClass:"chosego_wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAddvister.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item_wrap"},[i("v-uni-view",{staticClass:"icon_wrap"},[i("v-uni-image",{attrs:{src:"../../static/tianjia@2x.png",mode:""}})],1),i("v-uni-view",{staticClass:"name"},[t._v("添加常用旅客")])],1)],1)],1)],1),t._l(t.cyUserlist,function(e){return i("v-uni-view",{key:e.id,staticClass:"info_wrap"},[i("v-uni-view",{staticClass:"card_wrap",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSetUser(e)}}},[i("v-uni-view",{staticClass:"item_wrap"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"item_wrap"},[i("v-uni-view",{staticClass:"num_wrap name"},[t._v("手机号码 "+t._s(e.phone))])],1),i("v-uni-view",{staticClass:"item_wrap"},[i("v-uni-view",{staticClass:"num_wrap name"},[t._v("身份证号 "+t._s(e.idcard))])],1),i("v-uni-view",{staticClass:"go_next_icon go_center"},[i("v-uni-image",{staticClass:"go_center",attrs:{src:"../../static/fanhui@2x.png",mode:""}})],1)],1)],1)})],2)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},eb58:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".topbar[data-v-4592f173]{height:%?128?%;width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:0 %?30?%}.topbar .img[data-v-4592f173]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.topbar uni-image[data-v-4592f173]{width:%?18?%;height:%?30?%}.topbar .title[data-v-4592f173]{width:%?672?%;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""])},feae:function(t,e,i){"use strict";i.r(e);var n=i("ac3c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);