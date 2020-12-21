webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "C:\\Users\\Fredrik\\projects\\next\\bitzprice\\components\\Prices.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Prices = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(C_Users_Fredrik_projects_next_bitzprice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = "";

      if (this.state.currency === "USD") {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.USD.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            "class": "badge badge.primary",
            children: this.props.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === "GBP") {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.GBP.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            "class": "badge badge.primary",
            children: this.props.bpi.GBP.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.GBP.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === "EUR") {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.EUR.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            "class": "badge badge.primary",
            children: this.props.bpi.EUR.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.EUR.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 20
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "list-group",
          children: list
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              currency: e.target.value
            });
          },
          className: "form-controll",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "USD",
            children: "USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "GBP",
            children: "GBO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "EUR",
            children: "EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this);
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJsaXN0Iiwic3RhdGUiLCJwcm9wcyIsImJwaSIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHQlAiLCJFVVIiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozt3VEFDTTtBQUNKQyxjQUFRLEVBQUU7QUFETixLOzs7Ozs7OzZCQUlDO0FBQUE7O0FBQ0wsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsVUFBSSxLQUFLQyxLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDL0JDLFlBQUksZ0JBQUc7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQ1csS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJDLFdBRDlCLHFCQUVMO0FBQU0scUJBQU0scUJBQVo7QUFBQSxzQkFDRyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkU7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSyxlQUtQO0FBQUEsc0JBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBUUgsT0FURCxNQVNPLElBQUksS0FBS04sS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTVCLEVBQW1DO0FBQ3RDQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUNXLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CSCxXQUQ5QixxQkFFTDtBQUFNLHFCQUFNLHFCQUFaO0FBQUEsc0JBQ0csS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkssZUFLUDtBQUFBLHNCQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQVFILE9BVE0sTUFTQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN0Q0MsWUFBSSxnQkFBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDVyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkosV0FEOUIscUJBRUw7QUFBTSxxQkFBTSxxQkFBWjtBQUFBLHNCQUNHLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSDtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZLLGVBS1A7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkY7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFPSDs7QUFFRCwwQkFDSTtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQ0tQO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFRLGtCQUFRLEVBQUcsa0JBQUFVLENBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDWixzQkFBUSxFQUFFVyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBcEIsYUFBZCxDQUFKO0FBQUEsV0FBcEI7QUFDQSxtQkFBUyxFQUFDLGVBRFY7QUFBQSxrQ0FFSTtBQUFRLGlCQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQVEsaUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBUSxpQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBZUg7Ozs7RUFuRGdCQyw0Q0FBSyxDQUFDQyxTOztBQXNEWmpCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiNTdjY2QyZDJmM2I0NTU5ZGNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSBcIlVTRFwiKSB7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLnByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09IFwiR0JQXCIpIHtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UucHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gXCJFVVJcIikge1xyXG4gICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS5wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW5jeTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCTzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXSwic291cmNlUm9vdCI6IiJ9