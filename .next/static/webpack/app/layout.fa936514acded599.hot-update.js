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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2fe6a2f3d26c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YTgzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJmZTZhMmYzZDI2Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PriceChart = ()=>{\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const chartInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [priceData, setPriceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State for price data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const encodedInput = encodeURIComponent(JSON.stringify({\n                json: {\n                    tokens: [\n                        \"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9\",\n                        \"untrn\"\n                    ],\n                    chainId: \"neutron-1\",\n                    dateRange: \"D7\"\n                }\n            }));\n            const apiUrl = \"https://app.astroport.fi/api/trpc/charts.prices?input=\".concat(encodedInput);\n            try {\n                var _data_result_data_ibc, _data_result_data, _data_result, _data_result_data_untrn, _data_result_data1, _data_result1;\n                const response = await fetch(apiUrl);\n                const data = await response.json();\n                console.log(\"API Response:\", data); // Log for debugging\n                // Extract price data based on the actual response structure\n                const formattedData = []; // Array to store extracted data\n                // Assuming data structure like this (replace with actual structure if different):\n                if (((_data_result = data.result) === null || _data_result === void 0 ? void 0 : (_data_result_data = _data_result.data) === null || _data_result_data === void 0 ? void 0 : (_data_result_data_ibc = _data_result_data.ibc) === null || _data_result_data_ibc === void 0 ? void 0 : _data_result_data_ibc.series) && ((_data_result1 = data.result) === null || _data_result1 === void 0 ? void 0 : (_data_result_data1 = _data_result1.data) === null || _data_result_data1 === void 0 ? void 0 : (_data_result_data_untrn = _data_result_data1.untrn) === null || _data_result_data_untrn === void 0 ? void 0 : _data_result_data_untrn.series)) {\n                    formattedData.push(...data.result.data.ibc.series.map((point)=>({\n                            time: point.x * 1000,\n                            price: point.y\n                        })));\n                    formattedData.push(...data.result.data.untrn.series.map((point)=>({\n                            time: point.x * 1000,\n                            price: point.y\n                        })));\n                } else {\n                    console.error(\"Unexpected data structure in API response\");\n                }\n                setPriceData(formattedData); // Update state with extracted data\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Destroy previous chart instance if necessary\n        if (chartInstanceRef.current) {\n            chartInstanceRef.current.destroy();\n        }\n        // Create a new chart instance only if price data is available\n        if (priceData.length > 0) {\n            var _chartRef_current;\n            const ctx = (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.getContext(\"2d\");\n            if (ctx) {\n                const labels = priceData.map((point)=>new Date(point.time).toLocaleString());\n                const values = priceData.map((point)=>point.price);\n                chartInstanceRef.current = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n                    type: \"line\",\n                    data: {\n                        labels,\n                        datasets: [\n                            {\n                                label: \"$ATOM-$NTRN Price\",\n                                data: values,\n                                backgroundColor: \"rgba(54, 162, 235, 0.2)\",\n                                borderColor: \"rgba(54, 162, 235, 1)\",\n                                borderWidth: 1\n                            }\n                        ]\n                    },\n                    options: {\n                        scales: {\n                            x: {\n                                title: {\n                                    display: true,\n                                    text: \"Date\"\n                                }\n                            },\n                            y: {\n                                title: {\n                                    display: true,\n                                    text: \"Price\"\n                                },\n                                ticks: {\n                                    callback: (value)=>{\n                                        if (typeof value === \"number\") {\n                                            return value.toFixed(6);\n                                        } else {\n                                            return value;\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                });\n            }\n        }\n    }, [\n        priceData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: chartRef,\n        id: \"priceChart\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anna2\\\\Documents\\\\projects\\\\timewave\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 124,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PriceChart, \"2Rb1TWVPnolgHefNN8erHv4+s/4=\");\n_c = PriceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceChart);\nvar _c;\n$RefreshReg$(_c, \"PriceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUMsS0FBSztvQkFDeENNLE1BQU07b0JBQ04zQixNQUFNO3dCQUNKdUI7d0JBQ0FLLFVBQVU7NEJBQ1I7Z0NBQ0VDLE9BQU87Z0NBQ1A3QixNQUFNMEI7Z0NBQ05JLGlCQUFpQjtnQ0FDakJDLGFBQWE7Z0NBQ2JDLGFBQWE7NEJBQ2Y7eUJBQ0Q7b0JBQ0g7b0JBQ0FDLFNBQVM7d0JBQ1BDLFFBQVE7NEJBQ05wQixHQUFHO2dDQUNEcUIsT0FBTztvQ0FDTEMsU0FBUztvQ0FDVEMsTUFBTTtnQ0FDUjs0QkFDRjs0QkFDQXJCLEdBQUc7Z0NBQ0RtQixPQUFPO29DQUNMQyxTQUFTO29DQUNUQyxNQUFNO2dDQUNSO2dDQUNBQyxPQUFPO29DQUNMQyxVQUFVLENBQUNDO3dDQUNULElBQUksT0FBT0EsVUFBVSxVQUFVOzRDQUM3QixPQUFPQSxNQUFNQyxPQUFPLENBQUM7d0NBQ3ZCLE9BQU87NENBQ0wsT0FBT0Q7d0NBQ1Q7b0NBQ0Y7Z0NBQ0Y7NEJBQ0Y7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDcEQ7S0FBVTtJQUVkLHFCQUFPLDhEQUFDc0Q7UUFBT0MsS0FBS3pEO1FBQVUwRCxJQUFHOzs7Ozs7QUFDbkM7R0FuSE0zRDtLQUFBQTtBQXFITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5pbnRlcmZhY2UgUHJpY2VEYXRhIHtcbiAgdGltZTogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5jb25zdCBQcmljZUNoYXJ0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjaGFydEluc3RhbmNlUmVmID0gdXNlUmVmPENoYXJ0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcmljZURhdGEsIHNldFByaWNlRGF0YV0gPSB1c2VTdGF0ZTxQcmljZURhdGFbXT4oW10pOyAvLyBTdGF0ZSBmb3IgcHJpY2UgZGF0YVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZW5jb2RlZElucHV0ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAganNvbjoge1xuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICdpYmMvQzRDRkY0NkZENkRFMzVDQTRDRjRDRTAzMUU2NDNDOEZEQzlCQTRCOTlBRTU5OEU5QjBFRDk4RkUzQTIzMTlGOScsXG4gICAgICAgICAgICAgICd1bnRybicsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2hhaW5JZDogJ25ldXRyb24tMScsXG4gICAgICAgICAgICBkYXRlUmFuZ2U6ICdENycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwcC5hc3Ryb3BvcnQuZmkvYXBpL3RycGMvY2hhcnRzLnByaWNlcz9pbnB1dD0ke2VuY29kZWRJbnB1dH1gO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEkgUmVzcG9uc2U6JywgZGF0YSk7IC8vIExvZyBmb3IgZGVidWdnaW5nXG5cbiAgICAgICAgLy8gRXh0cmFjdCBwcmljZSBkYXRhIGJhc2VkIG9uIHRoZSBhY3R1YWwgcmVzcG9uc2Ugc3RydWN0dXJlXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGE6IFByaWNlRGF0YVtdID0gW107IC8vIEFycmF5IHRvIHN0b3JlIGV4dHJhY3RlZCBkYXRhXG5cbiAgICAgICAgLy8gQXNzdW1pbmcgZGF0YSBzdHJ1Y3R1cmUgbGlrZSB0aGlzIChyZXBsYWNlIHdpdGggYWN0dWFsIHN0cnVjdHVyZSBpZiBkaWZmZXJlbnQpOlxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQ/LmRhdGE/LmliYz8uc2VyaWVzICYmIGRhdGEucmVzdWx0Py5kYXRhPy51bnRybj8uc2VyaWVzKSB7XG4gICAgICAgICAgZm9ybWF0dGVkRGF0YS5wdXNoKFxuICAgICAgICAgICAgLi4uZGF0YS5yZXN1bHQuZGF0YS5pYmMuc2VyaWVzLm1hcCgocG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBhbnk7IH0pID0+ICh7XG4gICAgICAgICAgICAgIHRpbWU6IHBvaW50LnggKiAxMDAwLCAvLyBBc3N1bWluZyB0aW1lIGluIHNlY29uZHMsIGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgIHByaWNlOiBwb2ludC55LFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3JtYXR0ZWREYXRhLnB1c2goXG4gICAgICAgICAgICAuLi5kYXRhLnJlc3VsdC5kYXRhLnVudHJuLnNlcmllcy5tYXAoKHBvaW50OiB7IHg6IG51bWJlcjsgeTogYW55OyB9KSA9PiAoe1xuICAgICAgICAgICAgICB0aW1lOiBwb2ludC54ICogMTAwMCwgLy8gQXNzdW1pbmcgdGltZSBpbiBzZWNvbmRzLCBjb252ZXJ0IHRvIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICBwcmljZTogcG9pbnQueSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBkYXRhIHN0cnVjdHVyZSBpbiBBUEkgcmVzcG9uc2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByaWNlRGF0YShmb3JtYXR0ZWREYXRhKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggZXh0cmFjdGVkIGRhdGFcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRGVzdHJveSBwcmV2aW91cyBjaGFydCBpbnN0YW5jZSBpZiBuZWNlc3NhcnlcbiAgICBpZiAoY2hhcnRJbnN0YW5jZVJlZi5jdXJyZW50KSB7XG4gICAgICBjaGFydEluc3RhbmNlUmVmLmN1cnJlbnQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBjaGFydCBpbnN0YW5jZSBvbmx5IGlmIHByaWNlIGRhdGEgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHByaWNlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdHggPSBjaGFydFJlZi5jdXJyZW50Py5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBwcmljZURhdGEubWFwKChwb2ludCkgPT4gbmV3IERhdGUocG9pbnQudGltZSkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHByaWNlRGF0YS5tYXAoKHBvaW50KSA9PiBwb2ludC5wcmljZSk7XG5cbiAgICAgICAgY2hhcnRJbnN0YW5jZVJlZi5jdXJyZW50ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICckQVRPTS0kTlRSTiBQcmljZScsXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnUHJpY2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAodmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKDYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwcmljZURhdGFdKTtcblxuICByZXR1cm4gPGNhbnZhcyByZWY9e2NoYXJ0UmVmfSBpZD1cInByaWNlQ2hhcnRcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlQ2hhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwiUHJpY2VDaGFydCIsImNoYXJ0UmVmIiwiY2hhcnRJbnN0YW5jZVJlZiIsInByaWNlRGF0YSIsInNldFByaWNlRGF0YSIsImZldGNoRGF0YSIsImVuY29kZWRJbnB1dCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwidG9rZW5zIiwiY2hhaW5JZCIsImRhdGVSYW5nZSIsImFwaVVybCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlZERhdGEiLCJyZXN1bHQiLCJpYmMiLCJzZXJpZXMiLCJ1bnRybiIsInB1c2giLCJtYXAiLCJwb2ludCIsInRpbWUiLCJ4IiwicHJpY2UiLCJ5IiwiZXJyb3IiLCJjdXJyZW50IiwiZGVzdHJveSIsImxlbmd0aCIsImN0eCIsImdldENvbnRleHQiLCJsYWJlbHMiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ2YWx1ZXMiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwic2NhbGVzIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsInRvRml4ZWQiLCJjYW52YXMiLCJyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});