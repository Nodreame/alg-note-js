(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1656],{

/***/ "./leetcode/92_反转链表II.md":
/*!*******************************!*\
  !*** ./leetcode/92_反转链表II.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./92_反转链表II.md?vue&type=template&id=11b90f01& */ "./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__["render"],
  _92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01&":
/*!**************************************************************!*\
  !*** ./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??ref--1-1!../node_modules/@vuepress/markdown-loader??ref--1-2!./92_反转链表II.md?vue&type=template&id=11b90f01& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_92_II_md_vue_type_template_id_11b90f01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./leetcode/92_反转链表II.md?vue&type=template&id=11b90f01& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"反转链表ii"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#反转链表ii"}},[_vm._v("#")]),_vm._v(" "),_c('a',{attrs:{"href":"https://leetcode-cn.com/problems/reverse-linked-list-ii/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("反转链表II"),_c('OutboundLink')],1)]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("难度：Medium")]),_vm._v(" "),_c('li',[_vm._v("标签：链表反转 递归")])]),_vm._v(" "),_c('h2',{attrs:{"id":"刷题思路"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#刷题思路"}},[_vm._v("#")]),_vm._v(" 刷题思路")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("[x] 迭代法")]),_vm._v(" "),_c('li',[_vm._v("[x] 递归法")])]),_vm._v(" "),_c('h3',{attrs:{"id":"方法-1-迭代法"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-1-迭代法"}},[_vm._v("#")]),_vm._v(" 方法 1 迭代法")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("思路: 区分前驱指针、反转部分、后续链表三个部分")]),_vm._v(" "),_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O(N). 一次遍历.")]),_vm._v(" "),_c('li',[_vm._v("空间 O(1)")])])]),_vm._v(" "),_c('li',[_vm._v("结果:\n"),_c('ul',[_c('li',[_vm._v("执行用时：72 ms, 在所有 JavaScript 提交中击败了83.57%的用户")]),_vm._v(" "),_c('li',[_vm._v("内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了5.03%的用户")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("reverseBetween")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" m"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("m "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("===")]),_vm._v(" n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" head "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 相等等于不反转")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" newHead "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token class-name"}},[_vm._v("ListNode")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("null")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    newHead"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" head\n    "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 前驱指针prev用于最后尾接\"反转部分\", 当前指针curr用于执行链表反转")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("let")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("prev"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" curr"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("newHead"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" newHead"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("for")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("let")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<")]),_vm._v("m"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("++")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        prev "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" prev"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next\n        curr "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" curr"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next\n    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("let")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("null")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 存储\"反转部分\"结果")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("let")]),_vm._v(" currTail "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" curr "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 存储初始 curr，反转后将成为\"反转部分\"的尾节点")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("for")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("let")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v("m"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<=")]),_vm._v("n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("++")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" curr"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next\n        curr"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" res\n        res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" curr\n        curr "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" next\n    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    currTail"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" curr "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// \"反转部分\"尾接\"后续链表\"")]),_vm._v("\n    prev"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 前驱指针尾接\"反转部分\"")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" newHead"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])]),_c('h3',{attrs:{"id":"方法-2-递归法"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-2-递归法"}},[_vm._v("#")]),_vm._v(" 方法 2 递归法")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O(N). 共计一次遍历.")]),_vm._v(" "),_c('li',[_vm._v("空间 O(N). 递归调用栈的消耗.")])])]),_vm._v(" "),_c('li',[_vm._v("结果:\n"),_c('ul',[_c('li',[_vm._v("执行用时：80 ms, 在所有 JavaScript 提交中击败了60.11%的用户")]),_vm._v(" "),_c('li',[_vm._v("内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了5.03%的用户")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("reverseBetween")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" m"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!")]),_vm._v("head "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("||")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!")]),_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" head\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("m "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("===")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("reverseN")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("reverseBetween")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" m"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("-")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("-")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" head\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// 反转前N个节点")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("reverseN")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("n "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("===")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" head\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" res "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("reverseN")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" n"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("-")]),_c('span',{pre:true,attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next\n    head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" head\n    head"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("next "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" next\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" res\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])]),_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://github.com/Nodreame/leetcode-js","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JS刷题记录 Leetcode-js"),_c('OutboundLink')],1)]),_vm._v(" 每周都会更新刷题心得或者题解, 你的点赞或 star 都将助力我产出更好内容~")])])}
var staticRenderFns = []



/***/ })

}]);
//# sourceMappingURL=1656.90c82692.js.map