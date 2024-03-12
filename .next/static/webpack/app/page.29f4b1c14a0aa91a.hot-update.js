"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n// src/app/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PriceChart = ()=>{\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const encodedInput = encodeURIComponent(JSON.stringify({\n                json: {\n                    tokens: [\n                        \"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9\",\n                        \"untrn\"\n                    ],\n                    chainId: \"neutron-1\",\n                    dateRange: \"D7\"\n                }\n            }));\n            const apiUrl = \"https://app.astroport.fi/api/trpc/charts.prices?input=\".concat(encodedInput);\n            try {\n                var _data_result_data_json, _data_result_data, _data_result, _data_result_data_json1, _data_result_data1, _data_result1, _chartRef_current;\n                const response = await fetch(apiUrl);\n                const data = await response.json();\n                console.log(\"API Response:\", data);\n                // Extract price data from the API response\n                const ibcData = (_data_result = data.result) === null || _data_result === void 0 ? void 0 : (_data_result_data = _data_result.data) === null || _data_result_data === void 0 ? void 0 : (_data_result_data_json = _data_result_data.json) === null || _data_result_data_json === void 0 ? void 0 : _data_result_data_json.ibc;\n                const untrnData = (_data_result1 = data.result) === null || _data_result1 === void 0 ? void 0 : (_data_result_data1 = _data_result1.data) === null || _data_result_data1 === void 0 ? void 0 : (_data_result_data_json1 = _data_result_data1.json) === null || _data_result_data_json1 === void 0 ? void 0 : _data_result_data_json1.untrn;\n                if (!ibcData || !untrnData) {\n                    console.error(\"Missing price data in API response\");\n                    return;\n                }\n                const ibcPrices = ibcData.series.map((point)=>point.y);\n                const untrnPrices = untrnData.series.map((point)=>point.y);\n                const prices = [\n                    ...ibcPrices,\n                    ...untrnPrices\n                ];\n                // Update DOM elements with statistics\n                const avgPrice = document.getElementById(\"avgPrice\");\n                const maxPrice = document.getElementById(\"maxPrice\");\n                const minPrice = document.getElementById(\"minPrice\");\n                if (avgPrice && maxPrice && minPrice) {\n                    const average = prices.reduce((acc, curr)=>acc + curr, 0) / prices.length;\n                    const max = Math.max(...prices);\n                    const min = Math.min(...prices);\n                    avgPrice.textContent = average.toFixed(6);\n                    maxPrice.textContent = max.toFixed(6);\n                    minPrice.textContent = min.toFixed(6);\n                }\n                // Create chart\n                const ctx = (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.getContext(\"2d\");\n                if (ctx) {\n                    if (chartInstanceRef.current) {\n                        chartInstanceRef.current.destroy();\n                    }\n                    chartInstanceRef.current = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n                        type: \"line\",\n                        data: {\n                            labels: Array.from({\n                                length: prices.length\n                            }, (_, i)=>i + 1),\n                            datasets: [\n                                {\n                                    label: \"$ATOM-$NTRN Price\",\n                                    data: prices,\n                                    backgroundColor: \"rgba(54, 162, 235, 0.2)\",\n                                    borderColor: \"rgba(54, 162, 235, 1)\",\n                                    borderWidth: 1\n                                }\n                            ]\n                        },\n                        options: {\n                            scales: {\n                                x: {\n                                    title: {\n                                        display: true,\n                                        text: \"Date\"\n                                    }\n                                },\n                                y: {\n                                    title: {\n                                        display: true,\n                                        text: \"Price\"\n                                    },\n                                    ticks: {\n                                        callback: (value)=>{\n                                            if (typeof value === \"number\") {\n                                                return value.toFixed(6);\n                                            } else {\n                                                return value;\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    });\n                }\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: chartRef,\n        id: \"priceChart\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna2\\\\Documents\\\\projects\\\\timewave\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 122,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PriceChart, \"0kidk2EAizBYKgfY+KQx4ULbe78=\");\n_c = PriceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceChart);\nvar _c;\n$RefreshReg$(_c, \"PriceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFNQSxJQUFJOzRCQUM1REMsVUFBVTtnQ0FDUjtvQ0FDRUMsT0FBTztvQ0FDUDVDLE1BQU1pQjtvQ0FDTjRCLGlCQUFpQjtvQ0FDakJDLGFBQWE7b0NBQ2JDLGFBQWE7Z0NBQ2Y7NkJBQ0Q7d0JBQ0g7d0JBQ0FDLFNBQVM7NEJBQ1BDLFFBQVE7Z0NBQ05DLEdBQUc7b0NBQ0RDLE9BQU87d0NBQ0xDLFNBQVM7d0NBQ1RDLE1BQU07b0NBQ1I7Z0NBQ0Y7Z0NBQ0F0QyxHQUFHO29DQUNEb0MsT0FBTzt3Q0FDTEMsU0FBUzt3Q0FDVEMsTUFBTTtvQ0FDUjtvQ0FDQUMsT0FBTzt3Q0FDTEMsVUFBVSxDQUFDQzs0Q0FDVCxJQUFJLE9BQU9BLFVBQVUsVUFBVTtnREFDN0IsT0FBT0EsTUFBTXhCLE9BQU8sQ0FBQzs0Q0FDdkIsT0FBTztnREFDTCxPQUFPd0I7NENBQ1Q7d0NBQ0Y7b0NBQ0Y7Z0NBQ0Y7NEJBQ0Y7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7WUFDRixFQUFFLE9BQU85QyxPQUFPO2dCQUNkUCxRQUFRTyxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBR0FwQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDbUU7UUFBT0MsS0FBS3RFO1FBQVV1RSxJQUFHOzs7Ozs7QUFDbkM7R0FoSE14RTtLQUFBQTtBQWtITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9wYWdlLnRzeFxuJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5pbnRlcmZhY2UgUHJpY2VEYXRhIHtcbiAgdGltZTogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5jb25zdCBQcmljZUNoYXJ0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjaGFydEluc3RhbmNlUmVmID0gdXNlUmVmPENoYXJ0IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGVkSW5wdXQgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBqc29uOiB7XG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgJ2liYy9DNENGRjQ2RkQ2REUzNUNBNENGNENFMDMxRTY0M0M4RkRDOUJBNEI5OUFFNTk4RTlCMEVEOThGRTNBMjMxOUY5JyxcbiAgICAgICAgICAgICAgJ3VudHJuJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjaGFpbklkOiAnbmV1dHJvbi0xJyxcbiAgICAgICAgICAgIGRhdGVSYW5nZTogJ0Q3JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBcbiAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwcC5hc3Ryb3BvcnQuZmkvYXBpL3RycGMvY2hhcnRzLnByaWNlcz9pbnB1dD0ke2VuY29kZWRJbnB1dH1gO1xuICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnQVBJIFJlc3BvbnNlOicsIGRhdGEpO1xuICAgIFxuICAgICAgICAvLyBFeHRyYWN0IHByaWNlIGRhdGEgZnJvbSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IGliY0RhdGEgPSBkYXRhLnJlc3VsdD8uZGF0YT8uanNvbj8uaWJjO1xuICAgICAgICBjb25zdCB1bnRybkRhdGEgPSBkYXRhLnJlc3VsdD8uZGF0YT8uanNvbj8udW50cm47XG4gICAgXG4gICAgICAgIGlmICghaWJjRGF0YSB8fCAhdW50cm5EYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWlzc2luZyBwcmljZSBkYXRhIGluIEFQSSByZXNwb25zZScpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBpYmNQcmljZXMgPSBpYmNEYXRhLnNlcmllcy5tYXAoKHBvaW50OiBhbnkpID0+IHBvaW50LnkpO1xuICAgICAgICBjb25zdCB1bnRyblByaWNlcyA9IHVudHJuRGF0YS5zZXJpZXMubWFwKChwb2ludDogYW55KSA9PiBwb2ludC55KTtcbiAgICAgICAgY29uc3QgcHJpY2VzID0gWy4uLmliY1ByaWNlcywgLi4udW50cm5QcmljZXNdO1xuICAgIFxuICAgICAgICAvLyBVcGRhdGUgRE9NIGVsZW1lbnRzIHdpdGggc3RhdGlzdGljc1xuICAgICAgICBjb25zdCBhdmdQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmdQcmljZScpO1xuICAgICAgICBjb25zdCBtYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhQcmljZScpO1xuICAgICAgICBjb25zdCBtaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5QcmljZScpO1xuICAgIFxuICAgICAgICBpZiAoYXZnUHJpY2UgJiYgbWF4UHJpY2UgJiYgbWluUHJpY2UpIHtcbiAgICAgICAgICBjb25zdCBhdmVyYWdlID0gcHJpY2VzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKSAvIHByaWNlcy5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4ucHJpY2VzKTtcbiAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5wcmljZXMpO1xuICAgIFxuICAgICAgICAgIGF2Z1ByaWNlLnRleHRDb250ZW50ID0gYXZlcmFnZS50b0ZpeGVkKDYpO1xuICAgICAgICAgIG1heFByaWNlLnRleHRDb250ZW50ID0gbWF4LnRvRml4ZWQoNik7XG4gICAgICAgICAgbWluUHJpY2UudGV4dENvbnRlbnQgPSBtaW4udG9GaXhlZCg2KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDcmVhdGUgY2hhcnRcbiAgICAgICAgY29uc3QgY3R4ID0gY2hhcnRSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGlmIChjaGFydEluc3RhbmNlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNoYXJ0SW5zdGFuY2VSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGNoYXJ0SW5zdGFuY2VSZWYuY3VycmVudCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbGFiZWxzOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwcmljZXMubGVuZ3RoIH0sIChfLCBpKSA9PiBpICsgMSksXG4gICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICckQVRPTS0kTlRSTiBQcmljZScsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBwcmljZXMsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcmljZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKDYpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxjYW52YXMgcmVmPXtjaGFydFJlZn0gaWQ9XCJwcmljZUNoYXJ0XCIgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZUNoYXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhcnQiLCJQcmljZUNoYXJ0IiwiY2hhcnRSZWYiLCJjaGFydEluc3RhbmNlUmVmIiwiZmV0Y2hEYXRhIiwiZW5jb2RlZElucHV0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJ0b2tlbnMiLCJjaGFpbklkIiwiZGF0ZVJhbmdlIiwiYXBpVXJsIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwiaWJjRGF0YSIsInJlc3VsdCIsImliYyIsInVudHJuRGF0YSIsInVudHJuIiwiZXJyb3IiLCJpYmNQcmljZXMiLCJzZXJpZXMiLCJtYXAiLCJwb2ludCIsInkiLCJ1bnRyblByaWNlcyIsInByaWNlcyIsImF2Z1ByaWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1heFByaWNlIiwibWluUHJpY2UiLCJhdmVyYWdlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImxlbmd0aCIsIm1heCIsIk1hdGgiLCJtaW4iLCJ0ZXh0Q29udGVudCIsInRvRml4ZWQiLCJjdHgiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImRlc3Ryb3kiLCJ0eXBlIiwibGFiZWxzIiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ4IiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImNhbnZhcyIsInJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});