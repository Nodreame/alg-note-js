(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[503],{

/***/ "./leetcode/144_二叉树的前序遍历.md":
/*!**********************************!*\
  !*** ./leetcode/144_二叉树的前序遍历.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./144_二叉树的前序遍历.md?vue&type=template&id=36e45e43& */ "./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43&":
/*!*****************************************************************!*\
  !*** ./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??ref--1-1!../node_modules/@vuepress/markdown-loader??ref--1-2!./144_二叉树的前序遍历.md?vue&type=template&id=36e45e43& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_144_md_vue_type_template_id_36e45e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./leetcode/144_二叉树的前序遍历.md?vue&type=template&id=36e45e43& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"二叉树的前序遍历"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#二叉树的前序遍历"}},[_vm._v("#")]),_vm._v(" "),_c('a',{attrs:{"href":"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("二叉树的前序遍历"),_c('OutboundLink')],1)]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("难度：Medium")]),_vm._v(" "),_c('li',[_vm._v("标签：")])]),_vm._v(" "),_c('h2',{attrs:{"id":"刷题思路"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#刷题思路"}},[_vm._v("#")]),_vm._v(" 刷题思路")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("[x] 模板递归法（DFS）")]),_vm._v(" "),_c('li',[_vm._v("[x] 模板迭代法（DFS）")])]),_vm._v(" "),_c('h3',{attrs:{"id":"方法-1-模板递归法-dfs"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-1-模板递归法-dfs"}},[_vm._v("#")]),_vm._v(" 方法 1 模板递归法（DFS）")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O(n)")]),_vm._v(" "),_c('li',[_vm._v("空间 O(n)")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("preorderTraversal")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("root")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("recursion")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("root"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" res\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("recursion")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" res")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("val"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("recursion")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("recursion")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('h3',{attrs:{"id":"方法-2-模板迭代法-dfs"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-2-模板迭代法-dfs"}},[_vm._v("#")]),_vm._v(" 方法 2 模板迭代法（DFS）")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O(n)")]),_vm._v(" "),_c('li',[_vm._v("空间 O(n)")])])]),_vm._v(" "),_c('li',[_vm._v("结果：\n"),_c('ul',[_c('li',[_vm._v("执行用时：72 ms, 在所有 JavaScript 提交中击败了90.09%的用户")]),_vm._v(" "),_c('li',[_vm._v("内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了7.72%的用户")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("preorderTraversal")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("root")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!")]),_vm._v("root"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" stack "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("root"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("while")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("length "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v(">")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" node "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("pop")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("flag"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n            res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("val"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("else")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n            "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n            node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("flag "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token boolean"}},[_vm._v("true")]),_vm._v("\n            stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" res\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])]),_c('p',[_vm._v("优化版本，减少一轮循环：")]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("preorderTraversal")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("root")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!")]),_vm._v("root"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" stack "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("root"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("while")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("length "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v(">")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" node "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("pop")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        res"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("val"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("right"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("node"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("left"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" res\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])]),_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://github.com/Nodreame/leetcode-js","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JS刷题记录 Leetcode-js"),_c('OutboundLink')],1)]),_vm._v(" 每周都会更新刷题心得或者题解, 你的点赞或 star 都将助力我产出更好内容~")])])}
var staticRenderFns = []



/***/ })

}]);
//# sourceMappingURL=503.6f80e63b.js.map