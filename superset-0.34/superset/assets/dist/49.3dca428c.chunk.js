(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/transformProps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/transformProps.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return transformProps; });\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-ui/event-flow */ \"./node_modules/@data-ui/event-flow/build/index.js\");\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */function transformProps(a){var b=a.formData,c=a.payload,d=a.width,e=a.height,f=b.allColumnsX,g=b.entity,h=b.minLeafNodeEventCount,i=c.data,j=i&&0<i.length;if(j){var k,l=(k={},k[_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__[\"ENTITY_ID\"]]=function(a){return a[g]+\"\"},k[_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__[\"EVENT_NAME\"]]=function(a){return a[f]},k[_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__[\"TS\"]]=function(a){return new Date(a.__timestamp)},k),m=Object(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__[\"cleanEvents\"])(i,l);return{data:m,height:e,initialMinEventCount:h,width:d}}return{data:null,height:e,width:d}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN1cGVyc2V0LXVpL2xlZ2FjeS1wbHVnaW4tY2hhcnQtZXZlbnQtZmxvdy9lc20vdHJhbnNmb3JtUHJvcHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN1cGVyc2V0LXVpL2xlZ2FjeS1wbHVnaW4tY2hhcnQtZXZlbnQtZmxvdy9lc20vdHJhbnNmb3JtUHJvcHMuanM/NWM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovaW1wb3J0e2NsZWFuRXZlbnRzLFRTLEVWRU5UX05BTUUsRU5USVRZX0lEfWZyb21cIkBkYXRhLXVpL2V2ZW50LWZsb3dcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1Qcm9wcyhhKXt2YXIgYj1hLmZvcm1EYXRhLGM9YS5wYXlsb2FkLGQ9YS53aWR0aCxlPWEuaGVpZ2h0LGY9Yi5hbGxDb2x1bW5zWCxnPWIuZW50aXR5LGg9Yi5taW5MZWFmTm9kZUV2ZW50Q291bnQsaT1jLmRhdGEsaj1pJiYwPGkubGVuZ3RoO2lmKGope3ZhciBrLGw9KGs9e30sa1tFTlRJVFlfSURdPWZ1bmN0aW9uKGEpe3JldHVybiBhW2ddK1wiXCJ9LGtbRVZFTlRfTkFNRV09ZnVuY3Rpb24oYSl7cmV0dXJuIGFbZl19LGtbVFNdPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRGF0ZShhLl9fdGltZXN0YW1wKX0sayksbT1jbGVhbkV2ZW50cyhpLGwpO3JldHVybntkYXRhOm0saGVpZ2h0OmUsaW5pdGlhbE1pbkV2ZW50Q291bnQ6aCx3aWR0aDpkfX1yZXR1cm57ZGF0YTpudWxsLGhlaWdodDplLHdpZHRoOmR9fSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/transformProps.js\n");

/***/ })

}]);