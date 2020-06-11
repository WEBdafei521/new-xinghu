(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-canvas/uni-canvas"],{

/***/ 384:
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-canvas.vue?vue&type=template&id=8a854b0a& */ 385);
/* harmony import */ var _uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-canvas.vue?vue&type=script&lang=js& */ 387);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 385:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue?vue&type=template&id=8a854b0a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-canvas.vue?vue&type=template&id=8a854b0a& */ 386);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_template_id_8a854b0a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 386:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue?vue&type=template&id=8a854b0a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 387:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-canvas.vue?vue&type=script&lang=js& */ 388);
/* harmony import */ var _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_7_5_20200519_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 388:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/new-xinghu/components/uni-canvas/uni-canvas.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      imgurl: '' };

  },
  created: function created() {
    console.log('已加载');
    this.canvasImage();
  },
  onReady: function onReady() {
    console.log('页面已加载');
    // this.canvasImage()
  },
  methods: {
    canvasImage: function canvasImage() {var _this = this;
      console.log('开始绘制');
      var context = uni.createCanvasContext('mycanvas', this);
      context.drawImage('../../static/show_image.jpg', 25, 20, 223, 252.5);
      context.drawImage('../../static/chu.jpg', 102, 132, 70, 70);
      context.setFillStyle("#F8F8F8");
      context.fill();
      context.setFillStyle("#999999");
      context.setFontSize(11);
      context.drawImage('../../static/show_image1.jpg', 55, 295, 28, 28);
      context.fillText('微信扫码或长按识别', 98.5, 305);
      context.fillText('观看直播', 120, 320);
      context.draw(true, function () {
        console.log('绘制完成');
        uni.canvasToTempFilePath({
          canvasId: 'mycanvas',
          success: function success(res) {
            console.log('保存成功', res);
            _this.imgurl = res.tempFilePath;
            _this.canvasShow = false;
            uni.setStorageSync('person-card', _this.imgurl);
          },
          fail: function fail(err) {
            console.log('绘制失败', err);
            // uni.showToast({
            // 	title: '名片加载失败',
            // 	duration: 2000 
            // });
          } },
        _this);
      });
    },
    saveImage: function saveImage() {var _this2 = this;
      var that = this;
      uni.showActionSheet({
        itemList: ['保存图片'],
        success: function success(res) {
          console.log(res);
          if (res.tapIndex == 0) {
            uni.saveImageToPhotosAlbum({
              filePath: _this2.imgurl, //    图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
              success: function success() {
                uni.showToast({
                  title: '保存成功',
                  duration: 2000 });

              },
              fail: function fail() {
                uni.showToast({
                  title: '保存失败',
                  duration: 2000 });

              } });

          }
        },
        fail: function fail(res) {
          console.log(res);
          that.$emit("close_share_image");
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-canvas/uni-canvas.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-canvas/uni-canvas-create-component',
    {
        'components/uni-canvas/uni-canvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(384))
        })
    },
    [['components/uni-canvas/uni-canvas-create-component']]
]);
