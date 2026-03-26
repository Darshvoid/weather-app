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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domHandling.js */ \"./src/modules/domHandling.js\");\n/* harmony import */ var _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers.js */ \"./src/modules/helpers.js\");\n\n\n\n\nconst themeSwitcher = document.getElementById(\"theme-switcher\");\nconst degreeSwitch = document.getElementById(\"degree-switch\");\nconst locationInput = document.getElementById(\"location-input\");\nconst locationWeather = document.getElementById(\"location-weather\");\nconst locationFlag = document.getElementById(\"location-flag\");\nconst loadingElement = document.createElement(\"div\");\nloadingElement.classList.add(\"loading-container\");\nconst loadingText = document.createElement(\"p\");\nloadingText.classList.add(\"loading-text\");\nconst loadingSVG = document.createElement(\"img\");\nloadingSVG.classList.add(\"loading-svg\");\n\nloadingElement.appendChild(loadingText);\nloadingElement.appendChild(loadingSVG);\n\nlet degreeType = \"us\";\nlet degreeValue = null;\n\nthemeSwitcher.addEventListener(\"click\", () => {\n  _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeTheme();\n\n  loadingSVG.src = `./icons/3-dots-${getComputedStyle(document.documentElement).getPropertyValue(\"color-scheme\")}.svg`;\n});\n\ndegreeSwitch.addEventListener(\"click\", () => {\n  if (locationWeather.textContent.includes(\"--°C\")) {\n    alert(\"Input an address into searchbar before changing degree type\");\n    return;\n  }\n\n  if (degreeType === \"us\") {\n    degreeType = \"uk\";\n  } else {\n    degreeType = \"us\";\n  }\n\n  if (degreeType === \"us\") {\n    degreeSwitch.textContent = \"/F\";\n    locationWeather.textContent = `${degreeValue}°C`;\n  } else {\n    degreeSwitch.textContent = \"/C\";\n    locationWeather.textContent = `${Math.round(_modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertTemperature(degreeValue, degreeType))}°F`;\n  }\n});\n\nlocationInput.addEventListener(\"keyup\", async (e) => {\n  if (e.target.value === \"\") {\n    if (loadingText.textContent.includes(\"Failed\")) {\n      loadingElement.remove();\n    }\n  }\n  if (e.key === \"Enter\") {\n    try {\n      loadingText.textContent = \"Processing address\";\n      loadingSVG.src = `./icons/3-dots-${getComputedStyle(document.documentElement).getPropertyValue(\"color-scheme\")}.svg`;\n      document.body.querySelector(\"header\").appendChild(loadingElement);\n      const address = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchAddressData(e.target.value);\n      let country = null;\n      loadingText.textContent = \"Getting location data\";\n\n      if (address.country) {\n        country = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchCountryData(address.country);\n        locationFlag.src = loadingSVG.src;\n      }\n\n      loadingText.textContent = \"Getting location weather\";\n      const weather = await _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchWeatherData(\n        `${address.country || \"\"},${address.city || \"\"}, ${address.state || \"\"}`,\n      );\n\n      loadingElement.remove();\n      loadingText.textContent = \"Processing address\";\n      _modules_domHandling_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateWeatherContent({\n        locationFlag: country.flag,\n        locationMain:\n          address.state ||\n          address.country ||\n          address.city ||\n          weather.state ||\n          weather.city,\n        locationSecondary:\n          address.city ||\n          address.state ||\n          weather.state ||\n          weather.city ||\n          address.country,\n        locationWeather: `${weather.currentWeather.temp}°C`,\n        weatherIcon: weather.currentWeather.icon,\n        weatherWind: `Wind: ${weather.currentWeather.windspeed} km/h`,\n        weatherPrecipitation: `Precipitation: ${weather.currentWeather.precip} %`,\n        weatherHumidity: `Humidity: ${weather.currentWeather.humidity} %`,\n        weatherDescription: `${weather.currentWeather.description}`,\n        week: weather.week,\n      });\n\n      degreeValue = weather.currentWeather.temp;\n    } catch (e) {\n      console.log(e);\n      loadingText.textContent = `Failed: ${e.message}`;\n      loadingSVG.src = \"./icons/failed.svg\";\n      locationFlag.src =\n        \"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png\";\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/modules/domHandling.js"
/*!************************************!*\
  !*** ./src/modules/domHandling.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst root = document.documentElement;\nconst currentTheme = getComputedStyle(\n  document.documentElement,\n).getPropertyValue(\"color-scheme\");\n// THEME HANDLING\n\nconst domActions = {\n  changeTheme(theme) {\n    const themeIcon = document.getElementById(\"theme-icon\");\n    const searchIcon = document.getElementById(\"search-icon\");\n    const currentColorScheme =\n      getComputedStyle(root).getPropertyValue(\"color-scheme\");\n    const days = document.querySelectorAll(\".day-icon\");\n    const weatherIcon = document.getElementById(\"temperature-icon\");\n\n    if (theme) {\n      root.style.setProperty(\"color-scheme\", theme);\n      themeIcon.src = `./icons/theme-switch--${theme}.svg`;\n      searchIcon.src = `./icons/search--${theme}.svg`;\n\n      return;\n    }\n\n    if (currentColorScheme === \"light\") {\n      root.style.setProperty(\"color-scheme\", \"dark\");\n      themeIcon.src = \"./icons/theme-switch--dark.svg\";\n      searchIcon.src = \"./icons/search--dark.svg\";\n\n      if (weatherIcon.src !== \"http://localhost:8080/\") {\n        weatherIcon.src = weatherIcon.src.replace(\"-dark\", \"\");\n      }\n\n      days.forEach((el) => {\n        console.log(el);\n        if (el.src !== \"http://localhost:8080/\") {\n          el.src = el.src.replace(\"-dark\", \"\");\n        }\n      });\n\n      return;\n    }\n\n    if (currentColorScheme === \"dark\") {\n      root.style.setProperty(\"color-scheme\", \"light\");\n      themeIcon.src = \"./icons/theme-switch--light.svg\";\n      searchIcon.src = \"./icons/search--light.svg\";\n\n      if (weatherIcon.src !== \"http://localhost:8080/\") {\n        const split = weatherIcon.src.split(\".\");\n        weatherIcon.src = `${split[0]}-dark.svg`;\n      }\n\n      days.forEach((el) => {\n        console.log(el);\n        if (el.src !== \"http://localhost:8080/\") {\n          const split = el.src.split(\".\");\n          el.src = `${split[0]}-dark.svg`;\n        }\n      });\n\n      return;\n    }\n  },\n\n  updateWeatherContent(stats) {\n    const locationFlag = document.getElementById(\"location-flag\");\n    const locationMain = document.getElementById(\"location-main\");\n    const locationSecondary = document.getElementById(\"location-secondary\");\n    const locationWeather = document.getElementById(\"location-weather\");\n    const weatherIcon = document.getElementById(\"temperature-icon\");\n    const weatherWind = document.getElementById(\"weather-wind\");\n    const weatherPrecipitation = document.getElementById(\n      \"weather-precipitation\",\n    );\n    const weatherHumidity = document.getElementById(\"weather-humidity\");\n    console.log(weatherHumidity, weatherHumidity.textContent);\n    const weatherDescription = document.getElementById(\"weather-description\");\n    const days = document.querySelectorAll(\".day-container\");\n\n    locationFlag.src = stats.locationFlag || \"--\";\n    locationMain.textContent = stats.locationMain || \"--\";\n    locationSecondary.textContent = stats.locationSecondary || \"--\";\n    locationWeather.textContent = stats.locationWeather || \"--°\";\n    console.log(currentTheme);\n    weatherIcon.src = `./icons/weather/${stats.weatherIcon}${currentTheme === \"light\" ? \"-dark\" : \"\"}.svg`;\n\n    weatherWind.textContent = stats.weatherWind || \"Wind: -- km/h\";\n    weatherPrecipitation.textContent =\n      stats.weatherPrecipitation || \"Precipitation: --%\";\n    weatherHumidity.textContent = stats.weatherHumidity || \"Humidity: --%\";\n    weatherDescription.textContent = stats.weatherDescription || \"--\";\n\n    for (let i = 0; i <= 6; i++) {\n      console.log(currentTheme);\n      days[i].querySelector(`#day-${i}`).textContent =\n        stats.week[i].datetimesingle;\n      days[i].querySelector(\".day-temp\").textContent = `${stats.week[i].temp}°`;\n      days[i].querySelector(\".day-icon\").src =\n        `./icons/weather/${stats.week[i].icon}${currentTheme === \"light\" ? \"-dark\" : \"\"}.svg`;\n    }\n  },\n\n  initializeTheme() {\n    window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n      ? this.changeTheme(\"dark\")\n      : this.changeTheme(\"light\");\n  },\n};\n\ndomActions.initializeTheme();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domActions);\n\n\n//# sourceURL=webpack:///./src/modules/domHandling.js?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;