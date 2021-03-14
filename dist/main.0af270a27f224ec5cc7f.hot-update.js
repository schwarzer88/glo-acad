/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_acad"]("main",{

/***/ "./src/modules/validateInputs.js":
/*!***************************************!*\
  !*** ./src/modules/validateInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateInputs = function validateInputs() {\n  var formMessage = document.getElementById('form2-message'),\n      formNames = document.querySelectorAll('.form-name'),\n      form2Name = document.getElementById('form2-name'),\n      formEmails = document.querySelectorAll('.form-email'),\n      formPhones = document.querySelectorAll('.form-phone');\n  var hyphens = /-+/gi;\n  var spaces = /\\s+/gi;\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')) {\n      target.value = target.value.replace(/\\D/gi, '');\n    } else if (target.matches('.form-name') || target.matches('#form2-name')) {\n      target.value = target.value.replace(/[^А-яа-яЁё ]/gi, '');\n    } else if (target.matches('#form2-message')) {\n      target.value = target.value.replace(/[^А-Яа-яЁё .,'\"\\!\\?()-\\d]/gi, '');\n    } else if (target.matches('.form-email')) {\n      target.value = target.value.replace(/[^A-Za-z@_.!`*'-]/gi, '');\n    } else if (target.matches('.form-phone')) {\n      target.value = target.value.replace(/[^\\d\\+]/gi, '');\n    }\n  });\n\n  var changeOnBlur = function changeOnBlur(event) {\n    var target = event.target;\n\n    if (target.matches('.form-name') || target.matches('#form2-name')) {\n      target.value = target.value[0].toUpperCase() + target.value.substring(1).toLowerCase();\n    }\n\n    target.value = target.value.replace(hyphens, '-').trim();\n    target.value = target.value.replace(spaces, ' ').trim();\n  };\n\n  formMessage.addEventListener('blur', changeOnBlur);\n  form2Name.addEventListener('blur', changeOnBlur);\n  formNames.forEach(function (item) {\n    item.addEventListener('blur', changeOnBlur);\n  });\n  formEmails.forEach(function (item) {\n    item.addEventListener('blur', changeOnBlur);\n  });\n  formPhones.forEach(function (item) {\n    item.addEventListener('blur', changeOnBlur);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInputs);\n\n//# sourceURL=webpack://glo-acad/./src/modules/validateInputs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1e8d8d994b4b88a92a4d")
/******/ })();
/******/ 
/******/ }
);