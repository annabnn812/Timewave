"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c799ca2576e7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YTgzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImM3OTljYTI1NzZlN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PriceChart = ()=>{\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            // Fetch data from the API\n            const encodedInput = encodeURIComponent(JSON.stringify({\n                json: {\n                    tokens: [\n                        \"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9\",\n                        \"untrn\"\n                    ],\n                    chainId: \"neutron-1\",\n                    dateRange: \"D90\"\n                }\n            }));\n            const apiUrl = \"https://app.astroport.fi/api/trpc/charts.prices?input=\".concat(encodedInput);\n            try {\n                var _chartRef_current;\n                const response = await fetch(apiUrl);\n                const data = await response.json();\n                console.log(\"API Response:\", data);\n                const atomPrices = data.result.data.json[\"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9\"].series;\n                const ntrnPrices = data.result.data.untrn.series;\n                const combinedPrices = [\n                    ...atomPrices,\n                    ...ntrnPrices\n                ];\n                const values = combinedPrices.map((price)=>price.value);\n                const labels = combinedPrices.map((price)=>new Date(price.timestamp * 1000).toLocaleString());\n                const avgPrice = document.getElementById(\"avgPrice\");\n                const maxPrice = document.getElementById(\"maxPrice\");\n                const minPrice = document.getElementById(\"minPrice\");\n                const average = values.length > 0 ? values.reduce((a, b)=>a + b, 0) / values.length : 0;\n                const max = values.length > 0 ? Math.max(...values) : 0;\n                const min = values.length > 0 ? Math.min(...values) : 0;\n                if (avgPrice && maxPrice && minPrice) {\n                    avgPrice.textContent = average.toFixed(6);\n                    maxPrice.textContent = max.toFixed(6);\n                    minPrice.textContent = min.toFixed(6);\n                }\n                // Destroy previous chart instance\n                if (chartInstanceRef.current) {\n                    chartInstanceRef.current.destroy();\n                }\n                // Create new chart instance\n                const ctx = (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.getContext(\"2d\");\n                if (ctx) {\n                    chartInstanceRef.current = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n                        type: \"line\",\n                        data: {\n                            labels,\n                            datasets: [\n                                {\n                                    label: \"$ATOM-$NTRN Price\",\n                                    data: values,\n                                    backgroundColor: \"rgba(54, 162, 235, 0.2)\",\n                                    borderColor: \"rgba(54, 162, 235, 1)\",\n                                    borderWidth: 1\n                                }\n                            ]\n                        },\n                        options: {\n                            scales: {\n                                x: {\n                                    title: {\n                                        display: true,\n                                        text: \"Date\"\n                                    }\n                                },\n                                y: {\n                                    title: {\n                                        display: true,\n                                        text: \"Price\"\n                                    },\n                                    ticks: {\n                                        callback: (value)=>{\n                                            if (typeof value === \"number\") {\n                                                return value.toFixed(6);\n                                            } else {\n                                                return value;\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    });\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: chartRef,\n        id: \"priceChart\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna2\\\\Documents\\\\projects\\\\timewave\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 115,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PriceChart, \"0kidk2EAizBYKgfY+KQx4ULbe78=\");\n_c = PriceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceChart);\nvar _c;\n$RefreshReg$(_c, \"PriceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87d0NBQ0xDLFNBQVM7d0NBQ1RDLE1BQU07b0NBQ1I7b0NBQ0FFLE9BQU87d0NBQ0xDLFVBQVUsQ0FBQ3RDOzRDQUNULElBQUksT0FBT0EsVUFBVSxVQUFVO2dEQUM3QixPQUFPQSxNQUFNbUIsT0FBTyxDQUFDOzRDQUN2QixPQUFPO2dEQUNMLE9BQU9uQjs0Q0FDVDt3Q0FDRjtvQ0FDRjtnQ0FDRjs0QkFDRjt3QkFDRjtvQkFDRjtnQkFDRjtZQUNGLEVBQUUsT0FBT3VDLE9BQU87Z0JBQ2RsRCxRQUFRa0QsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO1FBRUEvRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDZ0U7UUFBT0MsS0FBS25FO1FBQVVvRSxJQUFHOzs7Ozs7QUFDbkM7R0ExR01yRTtLQUFBQTtBQTRHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5pbnRlcmZhY2UgUHJpY2VEYXRhIHtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmNvbnN0IFByaWNlQ2hhcnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNoYXJ0SW5zdGFuY2VSZWYgPSB1c2VSZWY8Q2hhcnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEZldGNoIGRhdGEgZnJvbSB0aGUgQVBJXG4gICAgICBjb25zdCBlbmNvZGVkSW5wdXQgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBqc29uOiB7XG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgJ2liYy9DNENGRjQ2RkQ2REUzNUNBNENGNENFMDMxRTY0M0M4RkRDOUJBNEI5OUFFNTk4RTlCMEVEOThGRTNBMjMxOUY5JyxcbiAgICAgICAgICAgICAgJ3VudHJuJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjaGFpbklkOiAnbmV1dHJvbi0xJyxcbiAgICAgICAgICAgIGRhdGVSYW5nZTogJ0Q5MCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwcC5hc3Ryb3BvcnQuZmkvYXBpL3RycGMvY2hhcnRzLnByaWNlcz9pbnB1dD0ke2VuY29kZWRJbnB1dH1gO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEkgUmVzcG9uc2U6JywgZGF0YSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGF0b21QcmljZXM6IFByaWNlRGF0YVtdID0gZGF0YS5yZXN1bHQuZGF0YS5qc29uWydpYmMvQzRDRkY0NkZENkRFMzVDQTRDRjRDRTAzMUU2NDNDOEZEQzlCQTRCOTlBRTU5OEU5QjBFRDk4RkUzQTIzMTlGOSddLnNlcmllcztcbiAgICAgICAgY29uc3QgbnRyblByaWNlczogUHJpY2VEYXRhW10gPSBkYXRhLnJlc3VsdC5kYXRhLnVudHJuLnNlcmllcztcbiAgICBcbiAgICAgICAgY29uc3QgY29tYmluZWRQcmljZXMgPSBbLi4uYXRvbVByaWNlcywgLi4ubnRyblByaWNlc107XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbWJpbmVkUHJpY2VzLm1hcCgocHJpY2U6IFByaWNlRGF0YSkgPT4gcHJpY2UudmFsdWUpO1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBjb21iaW5lZFByaWNlcy5tYXAoKHByaWNlOiBQcmljZURhdGEpID0+IG5ldyBEYXRlKHByaWNlLnRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgIFxuICAgICAgICBjb25zdCBhdmdQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmdQcmljZScpO1xuICAgICAgICBjb25zdCBtYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhQcmljZScpO1xuICAgICAgICBjb25zdCBtaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5QcmljZScpO1xuICAgIFxuICAgICAgICBjb25zdCBhdmVyYWdlID0gdmFsdWVzLmxlbmd0aCA+IDAgPyB2YWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyB2YWx1ZXMubGVuZ3RoIDogMDtcbiAgICAgICAgY29uc3QgbWF4ID0gdmFsdWVzLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi52YWx1ZXMpIDogMDtcbiAgICAgICAgY29uc3QgbWluID0gdmFsdWVzLmxlbmd0aCA+IDAgPyBNYXRoLm1pbiguLi52YWx1ZXMpIDogMDtcbiAgICBcbiAgICAgICAgaWYgKGF2Z1ByaWNlICYmIG1heFByaWNlICYmIG1pblByaWNlKSB7XG4gICAgICAgICAgYXZnUHJpY2UudGV4dENvbnRlbnQgPSBhdmVyYWdlLnRvRml4ZWQoNik7XG4gICAgICAgICAgbWF4UHJpY2UudGV4dENvbnRlbnQgPSBtYXgudG9GaXhlZCg2KTtcbiAgICAgICAgICBtaW5QcmljZS50ZXh0Q29udGVudCA9IG1pbi50b0ZpeGVkKDYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzdHJveSBwcmV2aW91cyBjaGFydCBpbnN0YW5jZVxuICAgICAgICBpZiAoY2hhcnRJbnN0YW5jZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY2hhcnRJbnN0YW5jZVJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgY2hhcnQgaW5zdGFuY2VcbiAgICAgICAgY29uc3QgY3R4ID0gY2hhcnRSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgIGNoYXJ0SW5zdGFuY2VSZWYuY3VycmVudCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJEFUT00tJE5UUk4gUHJpY2UnLFxuICAgICAgICAgICAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUHJpY2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9GaXhlZCg2KTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9IGlkPVwicHJpY2VDaGFydFwiIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDaGFydCIsIlByaWNlQ2hhcnQiLCJjaGFydFJlZiIsImNoYXJ0SW5zdGFuY2VSZWYiLCJmZXRjaERhdGEiLCJlbmNvZGVkSW5wdXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInRva2VucyIsImNoYWluSWQiLCJkYXRlUmFuZ2UiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhdG9tUHJpY2VzIiwicmVzdWx0Iiwic2VyaWVzIiwibnRyblByaWNlcyIsInVudHJuIiwiY29tYmluZWRQcmljZXMiLCJ2YWx1ZXMiLCJtYXAiLCJwcmljZSIsInZhbHVlIiwibGFiZWxzIiwiRGF0ZSIsInRpbWVzdGFtcCIsInRvTG9jYWxlU3RyaW5nIiwiYXZnUHJpY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWF4UHJpY2UiLCJtaW5QcmljZSIsImF2ZXJhZ2UiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhIiwiYiIsIm1heCIsIk1hdGgiLCJtaW4iLCJ0ZXh0Q29udGVudCIsInRvRml4ZWQiLCJjdXJyZW50IiwiZGVzdHJveSIsImN0eCIsImdldENvbnRleHQiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwic2NhbGVzIiwieCIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJ5IiwidGlja3MiLCJjYWxsYmFjayIsImVycm9yIiwiY2FudmFzIiwicmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});