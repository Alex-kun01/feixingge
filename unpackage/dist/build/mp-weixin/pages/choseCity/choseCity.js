(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/choseCity/choseCity"],{4142:function(t,e,n){"use strict";var o=n("7ac5"),i=n.n(o);i.a},"45fd":function(t,e,n){"use strict";var o={"city-select":()=>Promise.all([n.e("common/vendor"),n.e("components/city-select/city-select")]).then(n.bind(null,"a849")),"uni-popup":()=>n.e("components/uni-popup/uni-popup").then(n.bind(null,"8546"))},i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},"7ac5":function(t,e,n){},"84fa":function(t,e,n){"use strict";(function(t){n("a406"),n("921b");o(n("66fd"));var e=o(n("edfc"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"93a9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("be15"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8546"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/city-select/city-select")]).then(n.bind(null,"a849"))},s={data:function(){return{formatName:"title",activeCity:{},hotCity:[],obtainCitys:[],searchType:"",hotelType:!1,flyType:!1,mayCitys:[],choseAir:{}}},components:{citySelect:c,uniPopup:a},onLoad:function(e){var n=this;this.searchType=e.type,console.log(this.searchType),"fly"==e.fly&&(this.flyType=!0),"hotel"==e.type&&(this.hotelType=!0),setTimeout(function(){n.formatName="cityName",n.activeCity={cityName:"南京",cityCode:110100},n.hotCity=[{cityName:"南京",cityCode:110100},{cityName:"北京",cityCode:110102},{cityCode:"310100",cityName:"上海"},{cityCode:"440100",cityName:"广州"},{cityCode:"510100",cityName:"成都"}],n.obtainCitys=o.default,t.showToast({icon:"none",title:"更新数据成功",duration:3e3,mask:!0})},1e3)},methods:{choseAirPlane:function(e,n){var o=this,i=this.mayCitys[n];t.showModal({content:"您选择的是"+i.AirportName+",确定吗?",success:function(e){e.confirm?(o.$refs.popup.close(),o.choseAir=i,"gt_end"==o.searchType?t.setStorage({key:"ToAirPlane",data:i}):t.setStorage({key:"FromAirPlane",data:i}),t.navigateBack({})):e.cancel&&console.log("用户点击取消")}})},open:function(){this.$refs.popup.open()},setCityAirPlane:function(e){t.showLoading({title:"加载中..."});var n=this;e.cityName=e.cityName.replace(/市/g,""),console.log(e.cityName);var o=(new Date).toLocaleString();console.log(o);var i="/api";t.request({url:i+"/Flight/GetAllAirportCity",method:"POST",data:{ApiKey:"b421b9a21075a359c09a36db79325d5b",Sign:"",Timestamp:o,Data:{}},success:function(o){t.hideLoading();for(var i=o.data.Data,a=[],c=0;c<i.length;c++)e.cityName==i[c].CityName&&a.push(i[c]);n.mayCitys=a,0==a.length?t.showModal({showCancel:!1,content:"该城市没有机场！"}):n.open()}})},setHotelCity:function(e){console.log(e),this.$store.commit("setHotelMes",e),t.navigateBack({})},cityClick:function(e){this.hotelType?this.setHotelCity(e):this.flyType?this.setCityAirPlane(e):("gt_start"==this.searchType&&t.setStorage({key:"gt_start_city",data:e}),"gt_end"==this.searchType&&t.setStorage({key:"gt_end_city",data:e}),t.navigateBack({}))}}};e.default=s}).call(this,n("543d")["default"])},c452:function(t,e,n){"use strict";n.r(e);var o=n("93a9"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},edfc:function(t,e,n){"use strict";n.r(e);var o=n("45fd"),i=n("c452");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("4142");var c,s=n("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=l.exports}},[["84fa","common/runtime","common/vendor"]]]);