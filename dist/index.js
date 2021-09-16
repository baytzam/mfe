"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/stable");

require("regenerator-runtime/runtime");

var _frontendPlatform = require("@edx/frontend-platform");

var _react = require("@edx/frontend-platform/react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _frontendComponentHeader = _interopRequireWildcard(require("@edx/frontend-component-header"));

var _frontendComponentFooter = _interopRequireWildcard(require("@edx/frontend-component-footer"));

var _i18n = _interopRequireDefault(require("./i18n"));

var _ExamplePage = _interopRequireDefault(require("./example/ExamplePage"));

require("./index.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _frontendPlatform.subscribe)(_frontendPlatform.APP_READY, function () {
  _reactDom.default.render( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.AppProvider, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_frontendComponentHeader.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExamplePage.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_frontendComponentFooter.default, {})]
  }), document.getElementById('root'));
});
(0, _frontendPlatform.subscribe)(_frontendPlatform.APP_INIT_ERROR, function (error) {
  _reactDom.default.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.ErrorPage, {
    message: error.message
  }), document.getElementById('root'));
});
(0, _frontendPlatform.initialize)({
  messages: [_i18n.default, _frontendComponentHeader.messages, _frontendComponentFooter.messages]
});
//# sourceMappingURL=index.js.map