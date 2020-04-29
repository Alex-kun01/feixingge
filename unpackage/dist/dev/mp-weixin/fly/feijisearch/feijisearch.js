(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["fly/feijisearch/feijisearch"],{

/***/ 188:
/*!*******************************************************************************!*\
  !*** E:/信合诚/飞行鸽/feixingge/main.js?{"page":"fly%2Ffeijisearch%2Ffeijisearch"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _feijisearch = _interopRequireDefault(__webpack_require__(/*! ./fly/feijisearch/feijisearch.vue */ 189));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_feijisearch.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 189:
/*!************************************************************!*\
  !*** E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feijisearch.vue?vue&type=template&id=3f27909c& */ 190);
/* harmony import */ var _feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feijisearch.vue?vue&type=script&lang=js& */ 192);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feijisearch.vue?vue&type=style&index=0&lang=less& */ 194);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 190:
/*!*******************************************************************************************!*\
  !*** E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=template&id=3f27909c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./feijisearch.vue?vue&type=template&id=3f27909c& */ 191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_template_id_3f27909c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 191:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=template&id=3f27909c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 192:
/*!*************************************************************************************!*\
  !*** E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./feijisearch.vue?vue&type=script&lang=js& */ 193);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX2_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 393));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





















































































































{
  components: {
    uniPopup: uniPopup },

  data: function data() {
    return {
      title: 'Hello',
      clearBtnShow: false,
      search_time_dc: '', // 搜索时间_单程
      search_time_fc: '', // 搜索时间_返程
      startCityInfo: {
        AirportShortName: '出发机场' },

      endCityInfo: {
        AirportShortName: '到达机场' },

      // 选中时间距当前时间的差距日
      time_to_now: '',
      gotime: [{
        time: '12/7',
        day: '周一' },

      {
        time: '12/7',
        day: '周一' }],


      qcpHist: [], // 汽车票历史记录
      sit_type: 0, // 舱位编号 0 全部 1 经济 2 公务/头等
      IsChild: false, // 是否为儿童票 需要单独设置并订票时传导
      ticTypeList: [
      {
        title: '单程',
        type: 0 },

      {
        title: '往返',
        type: 1 },

      {
        title: '联程',
        type: 2 }],

      // 机票类型数组,
      ticType: 0, // 机票类型 单程 = 0, 往返 = 1, 联程 =2
      ticTypeStr: '往返',
      cfDate: '',
      cfDateStr: '选择日期'
      // fcDate: '',  // 返程日期
      // fcDateStr: '添加返程',
    };

  },
  onShow: function onShow() {
    this.init();
  },
  onLoad: function onLoad(opt) {
  },
  onUnload: function onUnload() {
    uni.hideLoading();
  },
  methods: {
    // 初始化
    init: function init() {

      var _this = this;
      // 初始化日期
      if (Object.keys(this.$store.state.airFlightType.airDate).length == 0) {
        this.initDate(); // 自动初始化日期
      } else {
        this.cfDatefun(this.$store.state.airFlightType.airDate); // 选择日期
        this.cfDate = this.$store.state.airFlightType.airDate.dateStr;
        // console.log('000000',this.$store.state.airFlightType.airDate)
      }

      uni.getStorage({
        key: 'FromAirPlane',
        success: function success(res) {
          console.log('From res', res.data);
          _this.startCityInfo = res.data;
        } });


      uni.getStorage({
        key: 'ToAirPlane',
        success: function success(res) {
          console.log('To res', res.data);
          _this.endCityInfo = res.data;
        } });



    },
    // fcDatefun(target){
    // 	if(Object.keys(target).length == 0){
    // 		return 
    // 	}else{
    // 		this.fcDateStr = target.date.month + '月' + target.date.day + '日'

    // 	}
    // },
    // 进入页面自动初始化当前日期
    initDate: function initDate() {
      var year = new Date().getFullYear();
      var month = new Date().getMonth() + 1;
      var day = new Date().getDate();
      this.cfDate = year + '/' + month + '/' + day; //cfDate
      this.cfDateStr = month + '月' + day + '日';
    },
    cfDatefun: function cfDatefun(target) {
      if (Object.keys(target).length == 0) {
        return;
      } else {
        this.cfDateStr = target.date.month + '月' + target.date.day + '日';

      }
    },
    // 删除往返时间，变回单程机票
    delEndTime: function delEndTime() {
      var obj = this.$store.state.airFlightType;
      obj.end_time = '',
      this.ticType = 0;
      this.ticTypeStr = '单程';
    },

    // 设置时间格式(月份个位数带0)
    setTimeMonth: function setTimeMonth(Time) {
      var year = new Date(Time).getFullYear(); // 获取到年
      var month = new Date(Time).getMonth() + 1; // 获取到月
      var day = new Date(Time).getDate(); // 获取到日期
      var str = '';
      if (month < 10) {
        month = '0' + month;
      }
      str = year + '/' + month + '/' + day;
      console.log(str);
      return str;
    },

    // 自动设置机票单程/往返时间
    setTicTypeTime: function setTicTypeTime() {
      var airTimeDes = this.$store.state.airFlightType;
      if (airTimeDes.start_time) {
        this.search_time_dc = airTimeDes.start_time;
      } else {
        this.search_time_dc = new Date().toLocaleDateString().replace(/\-/g, '/');
        this.search_time_dc = this.setTimeMonth(this.search_time_dc);
      }

      if (airTimeDes.end_time) {
        this.search_time_fc = airTimeDes.end_time;
        this.ticType = 1;
        this.ticTypeStr = '往返';
      } else {
        this.ticType = 0;
        this.ticTypeStr = '单程';
      }
    },


    // 设置机票类型
    setTicType: function setTicType(val) {
      var str = '';
      switch (val.detail.value) {
        case 0:str = '单程';break;
        case 1:str = '往返';break;
        case 2:str = '联程';break;}

      this.ticTypeStr = str;
      this.ticType = val.detail.value;
    },




    // 设置是否为儿童票
    // 设置是否只看高铁车票
    setSeeGt: function setSeeGt() {
      this.IsChild = !this.IsChild;
    },


    // 选择弹出层中的舱位规格并关闭弹出层
    choseSitType: function choseSitType(item) {
      this.sit_type = item;
      this.showSitType(item);
      this.$refs.popup.close();
    },
    // 打开弹出层
    open: function open() {
      this.$refs.popup.open();
    },
    // 舱位名称设置
    showSitType: function showSitType(item) {
      if (item == 0) {
        return '全部舱位';
      } else if (item == 1) {
        return '经济舱';
      } else {
        return '公务舱/头等舱';
      }
    },

    // 改变始发地 做交换
    changeTwoCity: function changeTwoCity() {
      var sbox = _objectSpread({}, this.startCityInfo); //{...obj} 浅拷贝
      var ebox = _objectSpread({}, this.endCityInfo);

      // console.log(box)
      // return
      this.startCityInfo.AirportShortName = ebox.AirportShortName;
      this.endCityInfo.AirportShortName = sbox.AirportShortName;
    },

    // 获取选中日期和当前日期差距日 最多后天
    setTimetoNow: function setTimetoNow(type) {

      var str = type;
      var obj = this.$store.state.airFlightType;
      if (type == 'fc') {
        uni.navigateTo({
          url: '../chosedate/chosedate?type=fifc' });

        return;
        obj.type = 1;
        this.$store.commit('setFlyType', obj); // 添加返程
      }
      if (type == 'dc') {
        obj.type = 0;
        this.$store.commit('setFlyType', obj); // 直接单程 setFlyTic
      }
      var url = "../chosedate/chosedate?type=fjpDate";
      uni.navigateTo({
        url: url });

    },
    // 跳转到城市选择页面选择城市
    goSeachCity: function goSeachCity(type) {
      uni.navigateTo({
        url: "../../pages/choseCity/choseCity?type=" + type + "&fly=fly" });

    },
    // 点击查询跳转到指定查询页面 并存储查询记录
    searchFJP: function searchFJP() {


      var sName = this.startCityInfo.AirportShortName;
      var eName = this.endCityInfo.AirportShortName;
      var sDate = this.cfDateStr;
      if (sName == '出发机场' || eName == '到达机场') {
        uni.showModal({
          title: '提示',
          content: '请完善机场信息/出发日期',
          showCancel: false });

        return;
      }
      var DepartCityCode = this.startCityInfo.AirportCode; // 	出发城市三字码
      var ArriveCityCode = this.endCityInfo.CityCode; // 抵达城市三字码
      var IsChild = this.IsChild; // 是否是查询儿童票 
      var DepartDate = this.cfDate; // 出发日期
      var datas = {
        startCityInfo: this.startCityInfo,
        endCityInfo: this.endCityInfo,
        IsChild: this.IsChild,
        DepartDate: this.cfDate };

      this.$store.commit('setAirTicSeaMes', datas);
      // 跳转
      uni.navigateTo({
        url: '../../fly/hangbanlist/flyList?DepartCityCode=' + DepartCityCode + '&ArriveCityCode=' + ArriveCityCode + '&IsChild=' + IsChild + '&DepartDate=' + DepartDate });


    },
    // 清除搜索历史记录
    clearHist: function clearHist() {
      localStorage.clear('qcpHist');
      this.qcpHist = [];
      this.clearBtnShow = false;
    },
    // 返回上级目录
    goBack: function goBack() {
      uni.navigateBack({});


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 194:
/*!**********************************************************************************************!*\
  !*** E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./feijisearch.vue?vue&type=style&index=0&lang=less& */ 195);
/* harmony import */ var _D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX2_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX2_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX2_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX2_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX2_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_feijisearch_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/信合诚/飞行鸽/feixingge/fly/feijisearch/feijisearch.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[188,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/fly/feijisearch/feijisearch.js.map