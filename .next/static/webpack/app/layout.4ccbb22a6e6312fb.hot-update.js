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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e536847983d7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YTgzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImU1MzY4NDc5ODNkN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst PriceChart = ()=>{\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let chartInstance = null; // Initialize chartInstance variable\n        const fetchData = async ()=>{\n            const encodedInput = encodeURIComponent(JSON.stringify({\n                json: {\n                    tokens: [\n                        \"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9\",\n                        \"untrn\"\n                    ],\n                    chainId: \"neutron-1\",\n                    dateRange: \"D7\"\n                }\n            }));\n            const apiUrl = \"https://app.astroport.fi/api/trpc/charts.prices?input=\".concat(encodedInput);\n            try {\n                var _data_result_data, _data_result;\n                const response = await fetch(apiUrl);\n                const data = await response.json();\n                console.log(\"API Response:\", data);\n                const prices = ((_data_result = data.result) === null || _data_result === void 0 ? void 0 : (_data_result_data = _data_result.data) === null || _data_result_data === void 0 ? void 0 : _data_result_data.prices) ? data.result.data.prices : [];\n                const labels = prices.length > 0 ? prices.map((price)=>new Date(price.time * 1000).toLocaleString()) : [];\n                const values = prices.length > 0 ? prices.map((price)=>price.price) : [];\n                const avgPrice = document.getElementById(\"avgPrice\");\n                const maxPrice = document.getElementById(\"maxPrice\");\n                const minPrice = document.getElementById(\"minPrice\");\n                const average = values.length > 0 ? values.reduce((a, b)=>a + b, 0) / values.length : 0;\n                const max = values.length > 0 ? Math.max(...values) : 0;\n                const min = values.length > 0 ? Math.min(...values) : 0;\n                if (avgPrice && maxPrice && minPrice) {\n                    avgPrice.textContent = average.toFixed(6);\n                    maxPrice.textContent = max.toFixed(6);\n                    minPrice.textContent = min.toFixed(6);\n                }\n                // Destroy the existing chart instance if it exists\n                if (chartInstance) {\n                    chartInstance.destroy();\n                }\n                if (chartRef.current) {\n                    const ctx = chartRef.current.getContext(\"2d\");\n                    if (ctx) {\n                        chartInstance = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n                            type: \"line\",\n                            data: {\n                                labels,\n                                datasets: [\n                                    {\n                                        label: \"$ATOM-$NTRN Price\",\n                                        data: values,\n                                        backgroundColor: \"rgba(54, 162, 235, 0.2)\",\n                                        borderColor: \"rgba(54, 162, 235, 1)\",\n                                        borderWidth: 1\n                                    }\n                                ]\n                            },\n                            options: {\n                                scales: {\n                                    x: {\n                                        title: {\n                                            display: true,\n                                            text: \"Date\"\n                                        }\n                                    },\n                                    y: {\n                                        title: {\n                                            display: true,\n                                            text: \"Price\"\n                                        },\n                                        ticks: {\n                                            callback: (value, index, ticks)=>{\n                                                if (typeof value === \"number\") {\n                                                    return value.toFixed(6);\n                                                } else {\n                                                    return value;\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        });\n                    }\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n        // Clean-up function\n        return ()=>{\n            if (chartInstance) {\n                chartInstance.destroy(); // Destroy the chart instance when the component unmounts\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: chartRef,\n        id: \"priceChart\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna2\\\\Documents\\\\projects\\\\timewave\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 119,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PriceChart, \"X+1SfQQ6xefXNU27aQW843M7cTw=\");\n_c = PriceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceChart);\nvar _c;\n$RefreshReg$(_c, \"PriceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTt3Q0FDUjt3Q0FDQUUsT0FBTzs0Q0FDTEMsVUFBVSxDQUFDQyxPQUF3QkMsT0FBZUg7Z0RBQ2hELElBQUksT0FBT0UsVUFBVSxVQUFVO29EQUM3QixPQUFPQSxNQUFNcEIsT0FBTyxDQUFDO2dEQUN2QixPQUFPO29EQUNMLE9BQU9vQjtnREFDVDs0Q0FDRjt3Q0FDRjtvQ0FDRjtnQ0FDRjs0QkFDRjt3QkFDRjtvQkFDRjtnQkFDRjtZQUNGLEVBQUUsT0FBT0UsT0FBTztnQkFDZC9DLFFBQVErQyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQTVEO1FBRUEsb0JBQW9CO1FBQ3BCLE9BQU87WUFDTCxJQUFJRCxlQUFlO2dCQUNqQkEsY0FBY3dDLE9BQU8sSUFBSSx5REFBeUQ7WUFDcEY7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDc0I7UUFBT0MsS0FBS2hFO1FBQVVpRSxJQUFHOzs7Ozs7QUFDbkM7R0EvR01sRTtLQUFBQTtBQWlITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5pbnRlcmZhY2UgUHJpY2VEYXRhIHtcbiAgdGltZTogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5jb25zdCBQcmljZUNoYXJ0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNoYXJ0SW5zdGFuY2U6IENoYXJ0IHwgbnVsbCA9IG51bGw7IC8vIEluaXRpYWxpemUgY2hhcnRJbnN0YW5jZSB2YXJpYWJsZVxuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZW5jb2RlZElucHV0ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAganNvbjoge1xuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICdpYmMvQzRDRkY0NkZENkRFMzVDQTRDRjRDRTAzMUU2NDNDOEZEQzlCQTRCOTlBRTU5OEU5QjBFRDk4RkUzQTIzMTlGOScsXG4gICAgICAgICAgICAgICd1bnRybicsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2hhaW5JZDogJ25ldXRyb24tMScsXG4gICAgICAgICAgICBkYXRlUmFuZ2U6ICdENycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwcC5hc3Ryb3BvcnQuZmkvYXBpL3RycGMvY2hhcnRzLnByaWNlcz9pbnB1dD0ke2VuY29kZWRJbnB1dH1gO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEkgUmVzcG9uc2U6JywgZGF0YSk7XG4gICAgICAgIGNvbnN0IHByaWNlczogUHJpY2VEYXRhW10gPSBkYXRhLnJlc3VsdD8uZGF0YT8ucHJpY2VzID8gZGF0YS5yZXN1bHQuZGF0YS5wcmljZXMgOiBbXTtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gcHJpY2VzLmxlbmd0aCA+IDAgPyBwcmljZXMubWFwKChwcmljZTogUHJpY2VEYXRhKSA9PiBuZXcgRGF0ZShwcmljZS50aW1lICogMTAwMCkudG9Mb2NhbGVTdHJpbmcoKSkgOiBbXTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gcHJpY2VzLmxlbmd0aCA+IDAgPyBwcmljZXMubWFwKChwcmljZTogUHJpY2VEYXRhKSA9PiBwcmljZS5wcmljZSkgOiBbXTtcbiAgICBcblxuICAgICAgICBjb25zdCBhdmdQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmdQcmljZScpO1xuICAgICAgICBjb25zdCBtYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhQcmljZScpO1xuICAgICAgICBjb25zdCBtaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5QcmljZScpO1xuXG4gICAgICAgIGNvbnN0IGF2ZXJhZ2UgPSB2YWx1ZXMubGVuZ3RoID4gMCA/IHZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHZhbHVlcy5sZW5ndGggOiAwO1xuICAgICAgICBjb25zdCBtYXggPSB2YWx1ZXMubGVuZ3RoID4gMCA/IE1hdGgubWF4KC4uLnZhbHVlcykgOiAwO1xuICAgICAgICBjb25zdCBtaW4gPSB2YWx1ZXMubGVuZ3RoID4gMCA/IE1hdGgubWluKC4uLnZhbHVlcykgOiAwO1xuXG4gICAgICAgIGlmIChhdmdQcmljZSAmJiBtYXhQcmljZSAmJiBtaW5QcmljZSkge1xuICAgICAgICAgIGF2Z1ByaWNlLnRleHRDb250ZW50ID0gYXZlcmFnZS50b0ZpeGVkKDYpO1xuICAgICAgICAgIG1heFByaWNlLnRleHRDb250ZW50ID0gbWF4LnRvRml4ZWQoNik7XG4gICAgICAgICAgbWluUHJpY2UudGV4dENvbnRlbnQgPSBtaW4udG9GaXhlZCg2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGVzdHJveSB0aGUgZXhpc3RpbmcgY2hhcnQgaW5zdGFuY2UgaWYgaXQgZXhpc3RzXG4gICAgICAgIGlmIChjaGFydEluc3RhbmNlKSB7XG4gICAgICAgICAgY2hhcnRJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGN0eCA9IGNoYXJ0UmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjaGFydEluc3RhbmNlID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICckQVRPTS0kTlRSTiBQcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGluZGV4OiBudW1iZXIsIHRpY2tzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuXG4gICAgLy8gQ2xlYW4tdXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGNoYXJ0SW5zdGFuY2UpIHtcbiAgICAgICAgY2hhcnRJbnN0YW5jZS5kZXN0cm95KCk7IC8vIERlc3Ryb3kgdGhlIGNoYXJ0IGluc3RhbmNlIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGNhbnZhcyByZWY9e2NoYXJ0UmVmfSBpZD1cInByaWNlQ2hhcnRcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlQ2hhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDaGFydCIsIlByaWNlQ2hhcnQiLCJjaGFydFJlZiIsImNoYXJ0SW5zdGFuY2UiLCJmZXRjaERhdGEiLCJlbmNvZGVkSW5wdXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInRva2VucyIsImNoYWluSWQiLCJkYXRlUmFuZ2UiLCJhcGlVcmwiLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwcmljZXMiLCJyZXN1bHQiLCJsYWJlbHMiLCJsZW5ndGgiLCJtYXAiLCJwcmljZSIsIkRhdGUiLCJ0aW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ2YWx1ZXMiLCJhdmdQcmljZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXhQcmljZSIsIm1pblByaWNlIiwiYXZlcmFnZSIsInJlZHVjZSIsImEiLCJiIiwibWF4IiwiTWF0aCIsIm1pbiIsInRleHRDb250ZW50IiwidG9GaXhlZCIsImRlc3Ryb3kiLCJjdXJyZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsInR5cGUiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ4IiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInkiLCJ0aWNrcyIsImNhbGxiYWNrIiwidmFsdWUiLCJpbmRleCIsImVycm9yIiwiY2FudmFzIiwicmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});