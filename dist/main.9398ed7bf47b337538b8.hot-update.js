/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_acad"]("main",{

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n  var time = 1;\n  var step = 200;\n\n  var outNum = function outNum(num, elem) {\n    var e = document.querySelector(elem);\n    var n = 0;\n    var t = Math.round(time / (num / step));\n    var interval = setInterval(function () {\n      n = n + step;\n\n      if (n > num) {\n        n = num;\n        clearInterval(interval);\n      }\n\n      e.textContent = n;\n    }, t);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://glo-acad/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fa90fc2e556f0f5ca40")
/******/ })();
/******/ 
/******/ }
);