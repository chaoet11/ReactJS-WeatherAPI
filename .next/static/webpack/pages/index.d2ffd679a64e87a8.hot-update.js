"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Weather.jsx":
/*!************************************!*\
  !*** ./src/components/Weather.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Weather(param) {\n    let { weatherData } = param;\n    var _weatherData_sys;\n    if (!weatherData || !weatherData.weather) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No weather data available.\"\n        }, void 0, false, {\n            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n            lineNumber: 6,\n            columnNumber: 12\n        }, this);\n    }\n    // 確保 sys 和 sunrise 是可用的\n    const sunriseTimestamp = weatherData === null || weatherData === void 0 ? void 0 : (_weatherData_sys = weatherData.sys) === null || _weatherData_sys === void 0 ? void 0 : _weatherData_sys.sunrise;\n    // 轉換主資料中的時間戳\n    const dataTimestamp = weatherData === null || weatherData === void 0 ? void 0 : weatherData.dt; // 資料更新的 Unix 時間戳\n    // 使用 Day.js 將時間轉換\n    const formattedSunrise = sunriseTimestamp ? dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(sunriseTimestamp).format(\"MM-DD HH:MM\") : \"N/A\";\n    const formattedDateTime = dataTimestamp ? dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(dataTimestamp).format(\"MM-DD HH:MM\") : \"N/A\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/2 my-4 mx-auto flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start justify-between h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl\",\n                                        children: [\n                                            weatherData.name,\n                                            \", \",\n                                            weatherData.sys.country\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: weatherData.weather[0].description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-6xl font-semibold\",\n                                    children: [\n                                        weatherData.main.temp.toFixed(),\n                                        \"\\xb0C\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/2 flex flex-col justify-between items-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"http://openweathermap.org/img/wn/\".concat(weatherData.weather[0].icon, \"@2x.png\"),\n                                alt: weatherData.weather[0].description,\n                                className: \"w-[120px]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Feels Like\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold w-20\",\n                                            children: [\n                                                weatherData.main.feels_like.toFixed(),\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Humidity\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold w-20\",\n                                            children: [\n                                                weatherData.main.humidity,\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Sunrise\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold w-20\",\n                                            children: weatherData.main\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between gap-x-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Time\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold w-20\",\n                                            children: formattedDateTime\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chao/Desktop/ReactJS-WeatherAPI/src/components/Weather.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBRVgsU0FBU0UsUUFBUSxLQUFlO1FBQWYsRUFBRUMsV0FBVyxFQUFFLEdBQWY7UUFNTEE7SUFMekIsSUFBSSxDQUFDQSxlQUFlLENBQUNBLFlBQVlDLE9BQU8sRUFBRTtRQUN4QyxxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkO0lBRUEsd0JBQXdCO0lBQ3hCLE1BQU1DLG1CQUFtQkgsd0JBQUFBLG1DQUFBQSxtQkFBQUEsWUFBYUksR0FBRyxjQUFoQkosdUNBQUFBLGlCQUFrQkssT0FBTztJQUNsRCxhQUFhO0lBQ2IsTUFBTUMsZ0JBQWdCTix3QkFBQUEsa0NBQUFBLFlBQWFPLEVBQUUsRUFBRSxpQkFBaUI7SUFFeEQsa0JBQWtCO0lBQ2xCLE1BQU1DLG1CQUFtQkwsbUJBQ3JCTCxpREFBVSxDQUFDSyxrQkFBa0JPLE1BQU0sQ0FBQyxpQkFDcEM7SUFFSixNQUFNQyxvQkFBb0JMLGdCQUN0QlIsaURBQVUsQ0FBQ1EsZUFBZUksTUFBTSxDQUFDLGlCQUNqQztJQUVKLHFCQUNFLDhEQUFDUjtRQUFJVSxXQUFVO2tCQUNiLDRFQUFDVjtZQUFJVSxXQUFVOzs4QkFDYiw4REFBQ1Y7b0JBQUlVLFdBQVU7OEJBQ2IsNEVBQUNWO3dCQUFJVSxXQUFVOzswQ0FDYiw4REFBQ1Y7O2tEQUNDLDhEQUFDVzt3Q0FBRUQsV0FBVTs7NENBQ1ZaLFlBQVljLElBQUk7NENBQUM7NENBQUdkLFlBQVlJLEdBQUcsQ0FBQ1csT0FBTzs7Ozs7OztrREFFOUMsOERBQUNGO3dDQUFFRCxXQUFVO2tEQUFXWixZQUFZQyxPQUFPLENBQUMsRUFBRSxDQUFDZSxXQUFXOzs7Ozs7Ozs7Ozs7MENBRTVELDhEQUFDZDswQ0FDQyw0RUFBQ2U7b0NBQUdMLFdBQVU7O3dDQUNYWixZQUFZa0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU87d0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUt6Qyw4REFBQ2xCO29CQUFJVSxXQUFVOztzQ0FFYiw4REFBQ1Y7NEJBQUlVLFdBQVU7c0NBQ2IsNEVBQUNTO2dDQUNDQyxLQUFLLG9DQUFnRSxPQUE1QnRCLFlBQVlDLE9BQU8sQ0FBQyxFQUFFLENBQUNzQixJQUFJLEVBQUM7Z0NBQ3JFQyxLQUFLeEIsWUFBWUMsT0FBTyxDQUFDLEVBQUUsQ0FBQ2UsV0FBVztnQ0FDdkNKLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDVjs0QkFBSVUsV0FBVTs7OENBQ2IsOERBQUNWO29DQUFJVSxXQUFVOztzREFDYiw4REFBQ0M7c0RBQUU7Ozs7OztzREFDSCw4REFBQ0E7NENBQUVELFdBQVU7O2dEQUNWWixZQUFZa0IsSUFBSSxDQUFDTyxVQUFVLENBQUNMLE9BQU87Z0RBQUc7Ozs7Ozs7Ozs7Ozs7OENBRzNDLDhEQUFDbEI7b0NBQUlVLFdBQVU7O3NEQUNiLDhEQUFDQztzREFBRTs7Ozs7O3NEQUNILDhEQUFDQTs0Q0FBRUQsV0FBVTs7Z0RBQWtCWixZQUFZa0IsSUFBSSxDQUFDUSxRQUFRO2dEQUFDOzs7Ozs7Ozs7Ozs7OzhDQUUzRCw4REFBQ3hCO29DQUFJVSxXQUFVOztzREFDYiw4REFBQ0M7c0RBQUU7Ozs7OztzREFDSCw4REFBQ0E7NENBQUVELFdBQVU7c0RBQWtCWixZQUFZa0IsSUFBSTs7Ozs7Ozs7Ozs7OzhDQUVqRCw4REFBQ2hCO29DQUFJVSxXQUFVOztzREFDYiw4REFBQ0M7c0RBQUU7Ozs7OztzREFDSCw4REFBQ0E7NENBQUVELFdBQVU7c0RBQWtCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0M7S0F0RXdCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzeD8wODJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlcih7IHdlYXRoZXJEYXRhIH0pIHtcbiAgaWYgKCF3ZWF0aGVyRGF0YSB8fCAhd2VhdGhlckRhdGEud2VhdGhlcikge1xuICAgIHJldHVybiA8ZGl2Pk5vIHdlYXRoZXIgZGF0YSBhdmFpbGFibGUuPC9kaXY+O1xuICB9XG5cbiAgLy8g56K65L+dIHN5cyDlkowgc3VucmlzZSDmmK/lj6/nlKjnmoRcbiAgY29uc3Qgc3VucmlzZVRpbWVzdGFtcCA9IHdlYXRoZXJEYXRhPy5zeXM/LnN1bnJpc2U7XG4gIC8vIOi9ieaPm+S4u+izh+aWmeS4reeahOaZgumWk+aIs1xuICBjb25zdCBkYXRhVGltZXN0YW1wID0gd2VhdGhlckRhdGE/LmR0OyAvLyDos4fmlpnmm7TmlrDnmoQgVW5peCDmmYLplpPmiLNcblxuICAvLyDkvb/nlKggRGF5LmpzIOWwh+aZgumWk+i9ieaPm1xuICBjb25zdCBmb3JtYXR0ZWRTdW5yaXNlID0gc3VucmlzZVRpbWVzdGFtcFxuICAgID8gZGF5anMudW5peChzdW5yaXNlVGltZXN0YW1wKS5mb3JtYXQoXCJNTS1ERCBISDpNTVwiKVxuICAgIDogXCJOL0FcIjtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IGRhdGFUaW1lc3RhbXBcbiAgICA/IGRheWpzLnVuaXgoZGF0YVRpbWVzdGFtcCkuZm9ybWF0KFwiTU0tREQgSEg6TU1cIilcbiAgICA6IFwiTi9BXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwMHB4XSBoLVsyNTBweF0gYmctZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQteGwgbS1hdXRvIHJlbGF0aXZlIHB4LTYgdG9wLVsxMCVdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIG15LTQgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgICAgIHt3ZWF0aGVyRGF0YS5uYW1lfSwge3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57d2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAge3dlYXRoZXJEYXRhLm1haW4udGVtcC50b0ZpeGVkKCl9wrBDXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kXCI+XG4gICAgICAgICAgey8qIHdlYXRoZXIgaWNvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgfVxuICAgICAgICAgICAgICBhbHQ9e3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEyMHB4XVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBnYXAteS0yIG15LTQgbXgtYXV0byB0ZXh0LXhzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC14LThcIj5cbiAgICAgICAgICAgICAgPHA+RmVlbHMgTGlrZTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHctMjBcIj5cbiAgICAgICAgICAgICAgICB7d2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoKX3CsENcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC14LThcIj5cbiAgICAgICAgICAgICAgPHA+SHVtaWRpdHk8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB3LTIwXCI+e3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAteC04XCI+XG4gICAgICAgICAgICAgIDxwPlN1bnJpc2U8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB3LTIwXCI+e3dlYXRoZXJEYXRhLm1haW59PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC14LThcIj5cbiAgICAgICAgICAgICAgPHA+VGltZTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHctMjBcIj57Zm9ybWF0dGVkRGF0ZVRpbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkYXlqcyIsIldlYXRoZXIiLCJ3ZWF0aGVyRGF0YSIsIndlYXRoZXIiLCJkaXYiLCJzdW5yaXNlVGltZXN0YW1wIiwic3lzIiwic3VucmlzZSIsImRhdGFUaW1lc3RhbXAiLCJkdCIsImZvcm1hdHRlZFN1bnJpc2UiLCJ1bml4IiwiZm9ybWF0IiwiZm9ybWF0dGVkRGF0ZVRpbWUiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImNvdW50cnkiLCJkZXNjcmlwdGlvbiIsImgxIiwibWFpbiIsInRlbXAiLCJ0b0ZpeGVkIiwiaW1nIiwic3JjIiwiaWNvbiIsImFsdCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Weather.jsx\n"));

/***/ })

});