/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  box-sizing: border-box;\n  font-family: \"Inter\", sans-serif;\n\n  /* LIGHT THEME COLORS */\n  --light-text: #000000;\n  --light-text-seconary: #ffffff;\n  --light-background: #ffffff;\n  --light-border: #000000;\n  --light-background-secondary: #272727;\n  --light-decoration: #d9d9d9;\n  --light-week: #d9d9d9;\n  --light-icon: #363636;\n\n  /* DARK THEME COLORS */\n  --dark-text: #ffffff;\n  --dark-text-secondary: #000000;\n  --dark-background: #000000;\n  --dark-border: #ffffff;\n  --dark-background-secondary: #ffffff;\n  --dark-decoration: #282828;\n  --dark-week: #1c1c1c;\n  --dark-icon: #bdbdbd;\n}\n\n* {\n  transition:\n    background-color 0.1s ease-in,\n    color 0.1s ease-in,\n    border 0.1s ease-in;\n}\n\nbody {\n  background-color: light-dark(var(--light-background), var(--dark-background));\n}\n\n.width-100 {\n  width: 100% !important;\n  padding: 0 !important;\n}\n\n.container {\n  position: relative;\n}\n\n.app__header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  padding: 21px 26px;\n}\n\n.app__title {\n  font-size: 24px;\n  font-weight: 200;\n\n  text-wrap-mode: nowrap;\n\n  color: light-dark(var(--light-text), var(--dark-text));\n}\n\n.searchbar-container {\n  margin-left: 50px;\n  margin-right: clamp(0px, 15%, 150px);\n\n  flex-basis: 491px;\n  min-width: 150px;\n}\n\n.app__searchbar {\n  height: 36px;\n  width: 100%;\n\n  padding: 0px 35px;\n\n  border-radius: 20px;\n  border: 2px solid;\n\n  background-color: light-dark(#ededed00, #ededed00);\n\n  font-size: 1.3rem;\n}\n\n.app__searchbar-icon {\n  position: absolute;\n\n  top: 50%;\n  transform: translateY(-50%);\n  left: 8px;\n\n  height: 19px;\n  width: 19px;\n}\n\n.app__theme-switch {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: none;\n  border: none;\n\n  min-width: 40px;\n  min-height: 40px;\n\n  cursor: pointer;\n}\n\n/* MAIN */\n\n.app__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100%;\n  width: 100%;\n\n  padding: 0 26px;\n\n  margin-top: 10%;\n}\n\n.app__weather-content {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  gap: 18px;\n\n  height: 485px;\n  width: max-content;\n\n  min-height: fit-content;\n}\n\n.app__weather-content::before {\n  position: absolute;\n  content: \"\";\n\n  top: -6px;\n  left: 21px;\n\n  width: 128px;\n  height: 12px;\n\n  border-radius: 20px;\n\n  background-color: light-dark(#272727, #ffffff);\n}\n\n.app__weather-content::after {\n  position: absolute;\n  content: \"\";\n\n  bottom: 6px;\n  right: 21px;\n\n  width: 128px;\n  height: 12px;\n\n  border-radius: 20px;\n\n  background-color: light-dark(#272727, #ffffff);\n}\n\n.weather-section--big {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 40px;\n\n  height: 171px;\n\n  padding: 21px 10px;\n}\n\n.weather-section--small {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  height: 96px;\n\n  padding: 0 10px;\n}\n\n.weather__container--primary {\n  display: flex;\n  flex-direction: column;\n\n  height: min-content;\n}\n\n.weather__container--secondary-col {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  position: relative;\n}\n\n.weather__container--secondary-row {\n  display: flex;\n  flex-direction: row;\n  gap: 3px;\n\n  position: relative;\n}\n\n.weather__location-section {\n  position: relative;\n  border: solid 3px light-dark(var(--light-border), var(--dark-border));\n  border-bottom: none;\n\n  border-radius: 4px 4px 0 0;\n}\n\n.weather__location-section::after {\n  position: absolute;\n  content: \"\";\n\n  border-radius: 20px;\n  bottom: -15px;\n  left: -3px;\n\n  height: 12px;\n  width: 3px;\n\n  background-color: light-dark(#272727, #fff);\n}\n\n.weather__location-section::before {\n  position: absolute;\n  content: \"\";\n\n  border-radius: 20px;\n  bottom: -15px;\n  right: -3px;\n\n  height: 12px;\n  width: 3px;\n\n  background-color: light-dark(#272727, #fff);\n}\n\n.weather__title-primary {\n  display: flex;\n  align-items: center;\n\n  height: max-content;\n  width: max-content;\n  font-size: 2.6rem;\n  font-weight: 400;\n}\n\n.weather__title-secondary {\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  height: 33px;\n  width: max-content;\n\n  font-size: 2rem;\n  font-weight: 300;\n\n  padding: 0 10px;\n\n  color: light-dark(var(--light-text-seconary), var(--dark-text-secondary));\n  background-color: light-dark(\n    var(--light-background-secondary),\n    var(--dark-background-secondary)\n  );\n}\n\n.weather__title-secondary::before {\n  content: \"\";\n  position: absolute;\n\n  top: 50%;\n  transform: translateY(-50%);\n  left: -2px;\n\n  height: 80%;\n  width: 4px;\n\n  background-color: light-dark(var(--light-decoration), var(--dark-decoration));\n}\n\n.weather__title-secondary::after {\n  content: \"\";\n  position: absolute;\n\n  top: 50%;\n  transform: translateY(-50%);\n  right: -2px;\n\n  height: 80%;\n  width: 4px;\n\n  background-color: light-dark(var(--light-decoration), var(--dark-decoration));\n}\n\n.weather__location-flag {\n  height: 97px;\n  width: 157px;\n\n  border: solid 1px light-dark(var(--light-border), var(--dark-border));\n  border-radius: 7px;\n}\n\n.weather__temperature-section {\n  position: relative;\n  border: solid 3px light-dark(var(--light-border), var(--dark-border));\n\n  border-top: none;\n  border-bottom: none;\n}\n\n.temperature-option {\n  cursor: pointer;\n  background: none;\n  border: none;\n\n  font-size: 1.2rem;\n\n  align-self: flex-end;\n\n  color: light-dark(#828282, #828282);\n}\n\n.wheather__temperature-details {\n  display: flex;\n  align-items: center;\n\n  gap: 25px;\n}\n\n.weather__temperature-detail {\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n\n.weather__week-section {\n  position: relative;\n  border: solid 3px light-dark(var(--light-border), var(--dark-border));\n  border-top: none;\n\n  border-radius: 0 0 4px 4px;\n}\n\n.weather__week-section::after {\n  position: absolute;\n  content: \"\";\n\n  border-radius: 20px;\n  top: -15px;\n  left: -3px;\n\n  height: 12px;\n  width: 3px;\n\n  background-color: light-dark(#272727, #fff);\n}\n\n.weather__week-section::before {\n  position: absolute;\n  content: \"\";\n\n  border-radius: 20px;\n  top: -15px;\n  right: -3px;\n\n  height: 12px;\n  width: 3px;\n\n  background-color: light-dark(#272727, #fff);\n}\n.weather__week-container {\n  height: 46px;\n  width: 100%;\n\n  background-color: light-dark(var(--light-week), var(--dark-week));\n}\n\n.weather__week-days {\n  display: flex;\n  justify-content: space-evenly;\n\n  width: 100%;\n  gap: 38px;\n}\n\n.loading-container {\n  position: absolute;\n  bottom: -20px;\n  right: 50%;\n  transform: translateX(50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  gap: 10px;\n}\n\n.loading-svg {\n  height: 30px;\n}\n\n.day-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n\n  height: min-content;\n  width: 65px;\n}\n\n.day-temp {\n  top: 68px;\n  left: 52%;\n  transform: translateX(-52%);\n  text-align: center;\n  font-size: 1rem;\n  position: absolute;\n\n  color: light-dark(#000000, #fff);\n}\n\n.day-divisor {\n  position: absolute;\n  bottom: -22px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  background-color: light-dark(#000000, #fff);\n\n  width: 30px;\n  height: 1px;\n\n  border-radius: 20px;\n}\n\n.day-icon {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -20px;\n  height: 25px;\n}\n\n#temperature-icon {\n  height: 50px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/index.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n*:not(dialog) {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Increase line-height */\n  line-height: 1.5;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  padding: 0;\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/*\n  10. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/index.css"
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/index.css?\n}");

/***/ },

/***/ "./src/styles/reset.css"
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/reset.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/icons/3-dots-dark.svg"
/*!***********************************!*\
  !*** ./src/icons/3-dots-dark.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"caeacb36467873bf0751.svg\";\n\n//# sourceURL=webpack:///./src/icons/3-dots-dark.svg?\n}");

/***/ },

/***/ "./src/icons/3-dots-light.svg"
/*!************************************!*\
  !*** ./src/icons/3-dots-light.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f81e0fda9a7de37432a7.svg\";\n\n//# sourceURL=webpack:///./src/icons/3-dots-light.svg?\n}");

/***/ },

/***/ "./src/icons/br.png"
/*!**************************!*\
  !*** ./src/icons/br.png ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"600536ad23a3580e0788.png\";\n\n//# sourceURL=webpack:///./src/icons/br.png?\n}");

/***/ },

/***/ "./src/icons/failed.svg"
/*!******************************!*\
  !*** ./src/icons/failed.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3e94621bb9c7fd6ee9d3.svg\";\n\n//# sourceURL=webpack:///./src/icons/failed.svg?\n}");

/***/ },

/***/ "./src/icons/location.svg"
/*!********************************!*\
  !*** ./src/icons/location.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"733efb595552f7967256.svg\";\n\n//# sourceURL=webpack:///./src/icons/location.svg?\n}");

/***/ },

/***/ "./src/icons/search--dark.svg"
/*!************************************!*\
  !*** ./src/icons/search--dark.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5af8f3308a42519afc40.svg\";\n\n//# sourceURL=webpack:///./src/icons/search--dark.svg?\n}");

/***/ },

/***/ "./src/icons/search--light.svg"
/*!*************************************!*\
  !*** ./src/icons/search--light.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7ea67e5fd1773b97819c.svg\";\n\n//# sourceURL=webpack:///./src/icons/search--light.svg?\n}");

/***/ },

/***/ "./src/icons/theme-switch--dark.svg"
/*!******************************************!*\
  !*** ./src/icons/theme-switch--dark.svg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"18dc5f2649c7e33e1053.svg\";\n\n//# sourceURL=webpack:///./src/icons/theme-switch--dark.svg?\n}");

/***/ },

/***/ "./src/icons/theme-switch--light.svg"
/*!*******************************************!*\
  !*** ./src/icons/theme-switch--light.svg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f6d3dfe509df30fcb7b4.svg\";\n\n//# sourceURL=webpack:///./src/icons/theme-switch--light.svg?\n}");

/***/ },

/***/ "./src/icons/weather/clear-day-dark.svg"
/*!**********************************************!*\
  !*** ./src/icons/weather/clear-day-dark.svg ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7c7ed57ceb113d4f2db5.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/clear-day-dark.svg?\n}");

/***/ },

/***/ "./src/icons/weather/clear-day.svg"
/*!*****************************************!*\
  !*** ./src/icons/weather/clear-day.svg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"eb3fde4128e77d65f0e7.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/clear-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/clear-night.svg"
/*!*******************************************!*\
  !*** ./src/icons/weather/clear-night.svg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"988f5a0ddca358c3b0f6.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/clear-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/cloudy.svg"
/*!**************************************!*\
  !*** ./src/icons/weather/cloudy.svg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b473d83f0b1d9a1e6275.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/cloudy.svg?\n}");

/***/ },

/***/ "./src/icons/weather/fog.svg"
/*!***********************************!*\
  !*** ./src/icons/weather/fog.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1713156323a44fabdbea.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/fog.svg?\n}");

/***/ },

/***/ "./src/icons/weather/hail.svg"
/*!************************************!*\
  !*** ./src/icons/weather/hail.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ce6bacd2ef055011125b.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/hail.svg?\n}");

/***/ },

/***/ "./src/icons/weather/partly-cloudy-day-dark.svg"
/*!******************************************************!*\
  !*** ./src/icons/weather/partly-cloudy-day-dark.svg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7613eaff4270eb8a92c2.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/partly-cloudy-day-dark.svg?\n}");

/***/ },

/***/ "./src/icons/weather/partly-cloudy-day.svg"
/*!*************************************************!*\
  !*** ./src/icons/weather/partly-cloudy-day.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a7f31acfa847475ebc7e.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/partly-cloudy-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/partly-cloudy-night.svg"
/*!***************************************************!*\
  !*** ./src/icons/weather/partly-cloudy-night.svg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"028e48cb6e062a0252c3.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/partly-cloudy-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/rain-dark.svg"
/*!*****************************************!*\
  !*** ./src/icons/weather/rain-dark.svg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e0191096fb05009dbe91.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/rain-dark.svg?\n}");

/***/ },

/***/ "./src/icons/weather/rain-snow-showers-day.svg"
/*!*****************************************************!*\
  !*** ./src/icons/weather/rain-snow-showers-day.svg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7220bd986b010aa0611e.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/rain-snow-showers-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/rain-snow-showers-night.svg"
/*!*******************************************************!*\
  !*** ./src/icons/weather/rain-snow-showers-night.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c24a03375b91057c31bf.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/rain-snow-showers-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/rain-snow.svg"
/*!*****************************************!*\
  !*** ./src/icons/weather/rain-snow.svg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"751a1e9cc338ca8be8c3.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/rain-snow.svg?\n}");

/***/ },

/***/ "./src/icons/weather/rain.svg"
/*!************************************!*\
  !*** ./src/icons/weather/rain.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ea286cf256b78f5bd542.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/rain.svg?\n}");

/***/ },

/***/ "./src/icons/weather/showers-day.svg"
/*!*******************************************!*\
  !*** ./src/icons/weather/showers-day.svg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cc26fea1c648e16f201b.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/showers-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/showers-night.svg"
/*!*********************************************!*\
  !*** ./src/icons/weather/showers-night.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a616a564cd0b271a6a2f.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/showers-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/sleet.svg"
/*!*************************************!*\
  !*** ./src/icons/weather/sleet.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ba14f99a771ca5366c9b.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/sleet.svg?\n}");

/***/ },

/***/ "./src/icons/weather/snow-dark.svg"
/*!*****************************************!*\
  !*** ./src/icons/weather/snow-dark.svg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ba059c4f65439174aed7.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/snow-dark.svg?\n}");

/***/ },

/***/ "./src/icons/weather/snow-showers-day.svg"
/*!************************************************!*\
  !*** ./src/icons/weather/snow-showers-day.svg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e973d4fb0c4abbe2ac68.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/snow-showers-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/snow-showers-night.svg"
/*!**************************************************!*\
  !*** ./src/icons/weather/snow-showers-night.svg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"83c6a48c36ad31a7c481.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/snow-showers-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/snow.svg"
/*!************************************!*\
  !*** ./src/icons/weather/snow.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b1042ba21ac69ca05a31.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/snow.svg?\n}");

/***/ },

/***/ "./src/icons/weather/thunder-rain.svg"
/*!********************************************!*\
  !*** ./src/icons/weather/thunder-rain.svg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"019b157e8d00c4392e4c.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/thunder-rain.svg?\n}");

/***/ },

/***/ "./src/icons/weather/thunder-showers-day.svg"
/*!***************************************************!*\
  !*** ./src/icons/weather/thunder-showers-day.svg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ba37aecb1fbd05feacad.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/thunder-showers-day.svg?\n}");

/***/ },

/***/ "./src/icons/weather/thunder-showers-night.svg"
/*!*****************************************************!*\
  !*** ./src/icons/weather/thunder-showers-night.svg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4f01cd1dc0417e3bd5d8.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/thunder-showers-night.svg?\n}");

/***/ },

/***/ "./src/icons/weather/thunder.svg"
/*!***************************************!*\
  !*** ./src/icons/weather/thunder.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c30de0df095ae961a139.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/thunder.svg?\n}");

/***/ },

/***/ "./src/icons/weather/wind.svg"
/*!************************************!*\
  !*** ./src/icons/weather/wind.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"49e5d49966cee04973d6.svg\";\n\n//# sourceURL=webpack:///./src/icons/weather/wind.svg?\n}");

/***/ },

/***/ "./src/icons/index.js"
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _3_dots_dark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3-dots-dark.svg */ \"./src/icons/3-dots-dark.svg\");\n/* harmony import */ var _3_dots_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3-dots-light.svg */ \"./src/icons/3-dots-light.svg\");\n/* harmony import */ var _br_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./br.png */ \"./src/icons/br.png\");\n/* harmony import */ var _failed_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./failed.svg */ \"./src/icons/failed.svg\");\n/* harmony import */ var _location_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.svg */ \"./src/icons/location.svg\");\n/* harmony import */ var _search_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search--dark.svg */ \"./src/icons/search--dark.svg\");\n/* harmony import */ var _search_light_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search--light.svg */ \"./src/icons/search--light.svg\");\n/* harmony import */ var _theme_switch_dark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-switch--dark.svg */ \"./src/icons/theme-switch--dark.svg\");\n/* harmony import */ var _theme_switch_light_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-switch--light.svg */ \"./src/icons/theme-switch--light.svg\");\n/* harmony import */ var _weather_clear_day_dark_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather/clear-day-dark.svg */ \"./src/icons/weather/clear-day-dark.svg\");\n/* harmony import */ var _weather_clear_day_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weather/clear-day.svg */ \"./src/icons/weather/clear-day.svg\");\n/* harmony import */ var _weather_clear_night_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weather/clear-night.svg */ \"./src/icons/weather/clear-night.svg\");\n/* harmony import */ var _weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather/cloudy.svg */ \"./src/icons/weather/cloudy.svg\");\n/* harmony import */ var _weather_fog_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./weather/fog.svg */ \"./src/icons/weather/fog.svg\");\n/* harmony import */ var _weather_hail_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./weather/hail.svg */ \"./src/icons/weather/hail.svg\");\n/* harmony import */ var _weather_partly_cloudy_day_dark_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./weather/partly-cloudy-day-dark.svg */ \"./src/icons/weather/partly-cloudy-day-dark.svg\");\n/* harmony import */ var _weather_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./weather/partly-cloudy-day.svg */ \"./src/icons/weather/partly-cloudy-day.svg\");\n/* harmony import */ var _weather_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./weather/partly-cloudy-night.svg */ \"./src/icons/weather/partly-cloudy-night.svg\");\n/* harmony import */ var _weather_rain_dark_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./weather/rain-dark.svg */ \"./src/icons/weather/rain-dark.svg\");\n/* harmony import */ var _weather_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./weather/rain-snow-showers-day.svg */ \"./src/icons/weather/rain-snow-showers-day.svg\");\n/* harmony import */ var _weather_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./weather/rain-snow-showers-night.svg */ \"./src/icons/weather/rain-snow-showers-night.svg\");\n/* harmony import */ var _weather_rain_snow_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./weather/rain-snow.svg */ \"./src/icons/weather/rain-snow.svg\");\n/* harmony import */ var _weather_rain_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./weather/rain.svg */ \"./src/icons/weather/rain.svg\");\n/* harmony import */ var _weather_showers_day_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./weather/showers-day.svg */ \"./src/icons/weather/showers-day.svg\");\n/* harmony import */ var _weather_showers_night_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./weather/showers-night.svg */ \"./src/icons/weather/showers-night.svg\");\n/* harmony import */ var _weather_sleet_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./weather/sleet.svg */ \"./src/icons/weather/sleet.svg\");\n/* harmony import */ var _weather_snow_dark_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./weather/snow-dark.svg */ \"./src/icons/weather/snow-dark.svg\");\n/* harmony import */ var _weather_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./weather/snow-showers-day.svg */ \"./src/icons/weather/snow-showers-day.svg\");\n/* harmony import */ var _weather_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./weather/snow-showers-night.svg */ \"./src/icons/weather/snow-showers-night.svg\");\n/* harmony import */ var _weather_snow_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./weather/snow.svg */ \"./src/icons/weather/snow.svg\");\n/* harmony import */ var _weather_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./weather/thunder-rain.svg */ \"./src/icons/weather/thunder-rain.svg\");\n/* harmony import */ var _weather_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./weather/thunder-showers-day.svg */ \"./src/icons/weather/thunder-showers-day.svg\");\n/* harmony import */ var _weather_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./weather/thunder-showers-night.svg */ \"./src/icons/weather/thunder-showers-night.svg\");\n/* harmony import */ var _weather_thunder_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./weather/thunder.svg */ \"./src/icons/weather/thunder.svg\");\n/* harmony import */ var _weather_wind_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./weather/wind.svg */ \"./src/icons/weather/wind.svg\");\n// Root icons\n\n\n\n\n\n\n\n\n\n\n// Weather icons\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst icons = {\n  ui: {\n    \"3-dots-dark\": _3_dots_dark_svg__WEBPACK_IMPORTED_MODULE_0__,\n    \"3-dots-light\": _3_dots_light_svg__WEBPACK_IMPORTED_MODULE_1__,\n    \"search--dark\": _search_dark_svg__WEBPACK_IMPORTED_MODULE_5__,\n    \"search--light\": _search_light_svg__WEBPACK_IMPORTED_MODULE_6__,\n    \"theme-switch--dark\": _theme_switch_dark_svg__WEBPACK_IMPORTED_MODULE_7__,\n    \"theme-switch--light\": _theme_switch_light_svg__WEBPACK_IMPORTED_MODULE_8__,\n    location: _location_svg__WEBPACK_IMPORTED_MODULE_4__,\n    failed: _failed_svg__WEBPACK_IMPORTED_MODULE_3__,\n    br: _br_png__WEBPACK_IMPORTED_MODULE_2__,\n  },\n\n  weather: {\n    \"clear-day-dark\": _weather_clear_day_dark_svg__WEBPACK_IMPORTED_MODULE_9__,\n    \"clear-day\": _weather_clear_day_svg__WEBPACK_IMPORTED_MODULE_10__,\n    \"clear-night\": _weather_clear_night_svg__WEBPACK_IMPORTED_MODULE_11__,\n    cloudy: _weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_12__,\n    fog: _weather_fog_svg__WEBPACK_IMPORTED_MODULE_13__,\n    hail: _weather_hail_svg__WEBPACK_IMPORTED_MODULE_14__,\n    \"partly-cloudy-day-dark\": _weather_partly_cloudy_day_dark_svg__WEBPACK_IMPORTED_MODULE_15__,\n    \"partly-cloudy-day\": _weather_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_16__,\n    \"partly-cloudy-night\": _weather_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_17__,\n    \"rain-dark\": _weather_rain_dark_svg__WEBPACK_IMPORTED_MODULE_18__,\n    \"rain-snow-showers-day\": _weather_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_19__,\n    \"rain-snow-showers-night\": _weather_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_20__,\n    \"rain-snow\": _weather_rain_snow_svg__WEBPACK_IMPORTED_MODULE_21__,\n    rain: _weather_rain_svg__WEBPACK_IMPORTED_MODULE_22__,\n    \"showers-day\": _weather_showers_day_svg__WEBPACK_IMPORTED_MODULE_23__,\n    \"showers-night\": _weather_showers_night_svg__WEBPACK_IMPORTED_MODULE_24__,\n    sleet: _weather_sleet_svg__WEBPACK_IMPORTED_MODULE_25__,\n    \"snow-dark\": _weather_snow_dark_svg__WEBPACK_IMPORTED_MODULE_26__,\n    \"snow-showers-day\": _weather_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_27__,\n    \"snow-showers-night\": _weather_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_28__,\n    snow: _weather_snow_svg__WEBPACK_IMPORTED_MODULE_29__,\n    \"thunder-rain\": _weather_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_30__,\n    \"thunder-showers-day\": _weather_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_31__,\n    \"thunder-showers-night\": _weather_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_32__,\n    thunder: _weather_thunder_svg__WEBPACK_IMPORTED_MODULE_33__,\n    wind: _weather_wind_svg__WEBPACK_IMPORTED_MODULE_34__,\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n\n//# sourceURL=webpack:///./src/icons/index.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domHandling.js */ \"./src/modules/domHandling.js\");\n/* harmony import */ var _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers.js */ \"./src/modules/helpers.js\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _icons_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/index.js */ \"./src/icons/index.js\");\n\n\n\n\n\n\n\nconst getScheme = () =>\n  getComputedStyle(document.documentElement)\n    .getPropertyValue(\"color-scheme\")\n    .trim();\n\nlet currentColorScheme = getScheme();\n\nconst themeSwitcher = document.getElementById(\"theme-switcher\");\nconst degreeSwitch = document.getElementById(\"degree-switch\");\nconst locationInput = document.getElementById(\"location-input\");\nconst locationWeather = document.getElementById(\"location-weather\");\nconst locationFlag = document.getElementById(\"location-flag\");\n\nconst loadingElement = document.createElement(\"div\");\nloadingElement.classList.add(\"loading-container\");\n\nconst loadingText = document.createElement(\"p\");\nloadingText.classList.add(\"loading-text\");\n\nconst loadingSVG = document.createElement(\"img\");\nloadingSVG.classList.add(\"loading-svg\");\n\nloadingElement.appendChild(loadingText);\nloadingElement.appendChild(loadingSVG);\n\ndocument.getElementById(\"search-icon\").src =\n  _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`search--${currentColorScheme}`];\n\ndocument.getElementById(\"theme-icon\").src =\n  _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`theme-switch--${currentColorScheme}`];\n\nlet degreeType = \"us\";\nlet degreeValue = null;\n\nthemeSwitcher.addEventListener(\"click\", () => {\n  _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeTheme();\n\n  currentColorScheme = getScheme();\n\n  document.getElementById(\"theme-icon\").src =\n    _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`theme-switch--${currentColorScheme}`];\n\n  document.getElementById(\"search-icon\").src =\n    _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`search--${currentColorScheme}`];\n\n  loadingSVG.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`3-dots-${currentColorScheme}`];\n});\n\ndegreeSwitch.addEventListener(\"click\", () => {\n  if (locationWeather.textContent.includes(\"--°C\")) {\n    alert(\"Input an address into searchbar before changing degree type\");\n    return;\n  }\n\n  degreeType = degreeType === \"us\" ? \"uk\" : \"us\";\n\n  if (degreeType === \"us\") {\n    degreeSwitch.textContent = \"/F\";\n    locationWeather.textContent = `${degreeValue}°C`;\n  } else {\n    degreeSwitch.textContent = \"/C\";\n    locationWeather.textContent = `${Math.round(\n      _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertTemperature(degreeValue, degreeType),\n    )}°F`;\n  }\n});\n\nlocationInput.addEventListener(\"keyup\", async (e) => {\n  if (e.target.value === \"\") {\n    if (loadingText.textContent.includes(\"Failed\")) {\n      loadingElement.remove();\n    }\n  }\n\n  if (e.key === \"Enter\") {\n    try {\n      loadingText.textContent = \"Processing address\";\n      loadingSVG.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[`3-dots-${currentColorScheme}`];\n\n      document.body.querySelector(\"header\").appendChild(loadingElement);\n\n      const address = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchAddressData(e.target.value);\n\n      let country = null;\n\n      loadingText.textContent = \"Getting location data\";\n\n      if (address.country) {\n        country = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchCountryData(address.country);\n        locationFlag.src = loadingSVG.src;\n      }\n\n      loadingText.textContent = \"Getting location weather\";\n\n      const weather = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchWeatherData(\n        `${address.country || \"\"},${address.city || \"\"}, ${address.state || \"\"}`,\n      );\n\n      loadingElement.remove();\n      loadingText.textContent = \"Processing address\";\n\n      _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateWeatherContent({\n        locationFlag: country?.flag,\n        locationMain:\n          address.state ||\n          address.country ||\n          address.city ||\n          weather.state ||\n          weather.city,\n        locationSecondary:\n          address.city ||\n          address.state ||\n          weather.state ||\n          weather.city ||\n          address.country,\n        locationWeather: `${weather.currentWeather.temp}°C`,\n        weatherIcon: _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].weather[weather.currentWeather.icon],\n        weatherWind: `Wind: ${weather.currentWeather.windspeed} km/h`,\n        weatherPrecipitation: `Precipitation: ${weather.currentWeather.precip} %`,\n        weatherHumidity: `Humidity: ${weather.currentWeather.humidity} %`,\n        weatherDescription: `${weather.currentWeather.description}`,\n        week: weather.week,\n      });\n\n      degreeValue = weather.currentWeather.temp;\n    } catch (e) {\n      console.log(e);\n\n      loadingText.textContent = `Failed: ${e.message}`;\n      loadingSVG.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ui[\"failed\"];\n\n      locationFlag.src =\n        \"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png\";\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/modules/domHandling.js"
/*!************************************!*\
  !*** ./src/modules/domHandling.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icons_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/index.js */ \"./src/icons/index.js\");\n\n\nconst root = document.documentElement;\n\nconst getScheme = () =>\n  getComputedStyle(root).getPropertyValue(\"color-scheme\").trim();\n\nconst getWeatherIcon = (name, scheme) => {\n  if (scheme === \"light\") {\n    return _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weather[`${name}-dark`] || _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weather[name];\n  }\n\n  return _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weather[name];\n};\n\nconst domActions = {\n  changeTheme(theme) {\n    const themeIcon = document.getElementById(\"theme-icon\");\n    const searchIcon = document.getElementById(\"search-icon\");\n    const days = document.querySelectorAll(\".day-icon\");\n    const weatherIcon = document.getElementById(\"temperature-icon\");\n\n    let currentScheme = getScheme();\n\n    if (theme) {\n      root.style.setProperty(\"color-scheme\", theme);\n\n      themeIcon.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ui[`theme-switch--${theme}`];\n      searchIcon.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ui[`search--${theme}`];\n\n      return;\n    }\n\n    const nextTheme = currentScheme === \"light\" ? \"dark\" : \"light\";\n    root.style.setProperty(\"color-scheme\", nextTheme);\n\n    themeIcon.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ui[`theme-switch--${nextTheme}`];\n    searchIcon.src = _icons_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ui[`search--${nextTheme}`];\n\n    if (weatherIcon.dataset.icon) {\n      weatherIcon.src = getWeatherIcon(weatherIcon.dataset.icon, nextTheme);\n    }\n\n    days.forEach((el) => {\n      if (el.dataset.icon) {\n        el.src = getWeatherIcon(el.dataset.icon, nextTheme);\n      }\n    });\n  },\n\n  updateWeatherContent(stats) {\n    const locationFlag = document.getElementById(\"location-flag\");\n    const locationMain = document.getElementById(\"location-main\");\n    const locationSecondary = document.getElementById(\"location-secondary\");\n    const locationWeather = document.getElementById(\"location-weather\");\n    const weatherIcon = document.getElementById(\"temperature-icon\");\n    const weatherWind = document.getElementById(\"weather-wind\");\n    const weatherPrecipitation = document.getElementById(\n      \"weather-precipitation\",\n    );\n    const weatherHumidity = document.getElementById(\"weather-humidity\");\n    const weatherDescription = document.getElementById(\"weather-description\");\n    const days = document.querySelectorAll(\".day-container\");\n\n    const scheme = getScheme();\n\n    locationFlag.src = stats.locationFlag || \"--\";\n    locationMain.textContent = stats.locationMain || \"--\";\n    locationSecondary.textContent = stats.locationSecondary || \"--\";\n    locationWeather.textContent = stats.locationWeather || \"--°\";\n\n    weatherIcon.dataset.icon = stats.weatherIcon;\n    weatherIcon.src = getWeatherIcon(stats.weatherIcon, scheme);\n\n    weatherWind.textContent = stats.weatherWind || \"Wind: -- km/h\";\n    weatherPrecipitation.textContent =\n      stats.weatherPrecipitation || \"Precipitation: --%\";\n    weatherHumidity.textContent = stats.weatherHumidity || \"Humidity: --%\";\n    weatherDescription.textContent = stats.weatherDescription || \"--\";\n\n    for (let i = 0; i <= 6; i++) {\n      const day = days[i];\n      const iconKey = stats.week[i].icon;\n\n      day.querySelector(`#day-${i}`).textContent = stats.week[i].datetimesingle;\n\n      day.querySelector(\".day-temp\").textContent = `${stats.week[i].temp}°`;\n\n      const dayIcon = day.querySelector(\".day-icon\");\n\n\n      dayIcon.dataset.icon = iconKey;\n      dayIcon.src = getWeatherIcon(iconKey, scheme);\n    }\n  },\n\n  initializeTheme() {\n    window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n      ? this.changeTheme(\"dark\")\n      : this.changeTheme(\"light\");\n  },\n};\n\ndomActions.initializeTheme();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domActions);\n\n\n//# sourceURL=webpack:///./src/modules/domHandling.js?\n}");

/***/ },

/***/ "./src/modules/fetchAPI.js"
/*!*********************************!*\
  !*** ./src/modules/fetchAPI.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\n\nconst weatherAPI = {\n  async fetchAddressData(input) {\n    const url = `https://api.geoapify.com/v1/geocode/search?text=${input}&limit=1&format=json&apiKey=3c3f1c7de33343f19e5ef11358e874a7`;\n    const response = await fetch(url);\n\n    if (response.status === \"404\") {\n      throw new Error(\"Invalid address input\");\n    }\n\n    const data = await response.json();\n    if (data.results.length === 0) throw new Error(\"Invalid address input\");\n    const country = data.results[0].country || null;\n    const state = data.results[0].state || null;\n    const city = data.results[0].city || null;\n\n    return {\n      country,\n      state,\n      city,\n    };\n  },\n\n  async fetchCountryData(input) {\n    const url = `https://restcountries.com/v3.1/name/${input}`;\n    const response = await fetch(url);\n\n    if (response.status === \"404\") {\n      throw new Error(\"Invalid country input\");\n    }\n\n    let data = await response.json();\n    const validInput = response.url.split(\"name/\")[1].replaceAll(\"%20\", \" \");\n\n    for (const set of data) {\n      if (\n        _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].includesMatch(set?.altSpellings, validInput) ||\n        set?.name?.common.toLowerCase() === validInput.toLowerCase() ||\n        set?.name?.official.toLowerCase() === validInput.toLowerCase()\n      ) {\n        const flag = set.flags.png;\n        const capital = set.capital[0];\n        return {\n          flag,\n          capital,\n        };\n      }\n    }\n\n    throw new Error(\"Invalid Country\");\n  },\n\n  async fetchWeatherData(input) {\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=6UNEXP68LSQT2NBCGEWSBRU76&include=current&unitGroup=uk`;\n    const response = await fetch(url);\n\n    if (response.status === \"404\") {\n      throw new Error(\"Invalid weather address\");\n    }\n\n    const data = await response.json();\n    let state = data.timezone.split(\"/\")[1];\n    state = state.replaceAll(\"_\", \" \");\n\n    let city = data.resolvedAddress.split(\",\")[0];\n\n    for (let i = 0; i <= 6; i++) {\n      data.days[i].datetimesingle = _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].returnDaySingleWord([\n        data.days[i].datetime,\n      ]);\n    }\n\n    return {\n      city,\n      state,\n      currentWeather: data.days[0],\n      week: [\n        data.days[0],\n        data.days[1],\n        data.days[2],\n        data.days[3],\n        data.days[4],\n        data.days[5],\n        data.days[6],\n      ],\n    };\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);\n\n\n//# sourceURL=webpack:///./src/modules/fetchAPI.js?\n}");

/***/ },

/***/ "./src/modules/helpers.js"
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst flag = document.getElementById(\"location-flag\");\nconst locationMain = document.getElementById(\"location-main\");\nlet baseTempC = null;\n\nconst helpers = {\n  processInputs(input, cb) {\n    try {\n      const allInputs = input.split(\",\");\n      const processedInputs = allInputs.map((el) => {\n        return cb(el);\n      });\n\n      return processedInputs;\n    } catch (e) {\n      console.log(e);\n    }\n  },\n\n  includesMatch(arr = [], str = \"\") {\n    const lowerStr = str.toLowerCase();\n    return arr.some((item) => item.toLowerCase() === lowerStr);\n  },\n\n  convertTemperature(value) {\n    return Math.floor((value * 9) / 5 + 32);\n  },\n\n  returnDaySingleWord(date) {\n    const days = [\"M\", \"T\", \"W\", \"T\", \"F\", \"S\", \"S\"];\n    const dateObj = new Date(date);\n\n    const day = dateObj.getDay();\n\n    return days[day];\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers);\n\n\n//# sourceURL=webpack:///./src/modules/helpers.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;