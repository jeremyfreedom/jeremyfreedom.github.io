webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/TextScramble.js":
/*!*****************************!*\
  !*** ./lib/TextScramble.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextScramble; });
/* harmony import */ var _home_jbernier_code_jeremyfreedom_jeremyfreedom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jbernier_code_jeremyfreedom_jeremyfreedom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
var TextScramble = /*#__PURE__*/function () {
  function TextScramble(el) {
    Object(_home_jbernier_code_jeremyfreedom_jeremyfreedom_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextScramble);

    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  Object(_home_jbernier_code_jeremyfreedom_jeremyfreedom_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextScramble, [{
    key: "setText",
    value: function setText(newText) {
      var _this = this;

      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {
        return _this.resolve = resolve;
      });
      this.queue = [];

      for (var i = 0; i < length; i++) {
        var from = oldText[i] || "";
        var to = newText[i] || "";
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from: from,
          to: to,
          start: start,
          end: end
        });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  }, {
    key: "update",
    value: function update() {
      var output = "";
      var complete = 0;

      for (var i = 0, n = this.queue.length; i < n; i++) {
        var _this$queue$i = this.queue[i],
            from = _this$queue$i.from,
            to = _this$queue$i.to,
            start = _this$queue$i.start,
            end = _this$queue$i.end,
            _char = _this$queue$i["char"];

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!_char || Math.random() < 0.28) {
            _char = this.randomChar();
            this.queue[i]["char"] = _char;
          }

          output += "<span class=\"dud\">".concat(_char, "</span>");
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }, {
    key: "randomChar",
    value: function randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }]);

  return TextScramble;
}();



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SocialMediaIcons */ "./components/SocialMediaIcons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_TextScramble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/TextScramble */ "./lib/TextScramble.js");


var _jsxFileName = "/home/jbernier/code/jeremyfreedom/jeremyfreedom/pages/index.js",
    _s = $RefreshSig$();






var randomMessages = ["human, or idea", "are you awake?", "we're all gonna make it", "into the infinite"];
var randomNum = Math.floor(Math.random() * randomMessages.length);
function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var el = document.getElementById("title");
    var headerFx = new TextScramble(el);
    headerFx.setText(title.innerHTML);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "jeremyfreedom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Jeremy Freedom - Internet person"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/img/square.jpg",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["portrait-logo"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        id: "title",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: "jeremyfreedom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons"],
        children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["youtubeIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["twitterIcon"], _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["mailIcon"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
        children: randomMessages[randomNum]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.youtube.com/c/JDiculous1",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["youtubeIcon"], " youtube \u2192"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "random vanity videos with occasional attempt to add value to the world"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.instagram.com/cityofjeremy",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " instagram \u2192"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "showing off travels & only the good parts of my life to make you FOMO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://discord.com/channels/484496726154280969/484496726741352450",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 discord \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead community channel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://jeremyfreedom.substack.com/archive",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDD89 blog \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "long form content that no one reads"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.reddit.com/r/jFreedom",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 reddit \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead internet forum"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.jbernier.com",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u2656 software consulting \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "for those who want to pay me money to fiddle with computers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1RleHRTY3JhbWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRleHRTY3JhbWJsZSIsImVsIiwiY2hhcnMiLCJ1cGRhdGUiLCJiaW5kIiwibmV3VGV4dCIsIm9sZFRleHQiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJNYXRoIiwibWF4IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVldWUiLCJpIiwiZnJvbSIsInRvIiwic3RhcnQiLCJmbG9vciIsInJhbmRvbSIsImVuZCIsInB1c2giLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImZyYW1lUmVxdWVzdCIsImZyYW1lIiwib3V0cHV0IiwiY29tcGxldGUiLCJuIiwiY2hhciIsInJhbmRvbUNoYXIiLCJpbm5lckhUTUwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYW5kb21NZXNzYWdlcyIsInJhbmRvbU51bSIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyRngiLCJzZXRUZXh0IiwidGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwieW91dHViZUljb24iLCJpbnN0YWdyYW1JY29uIiwidHdpdHRlckljb24iLCJtYWlsSWNvbiIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBRXFCQSxZO0FBQ25CLHdCQUFZQyxFQUFaLEVBQWdCO0FBQUE7O0FBQ2QsU0FBS0EsRUFBTCxHQUFVQSxFQUFW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QUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1GRDs7R0ExRnVCaEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZmNhN2Y3MjJlZjNiOWVhMjBlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4vLyBUZXh0U2NyYW1ibGVcbi8vIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0U2NyYW1ibGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNoYXJzID0gXCIhPD4tX1xcXFwvW117feKAlD0rKl4/I19fX19fX19fXCI7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNldFRleHQobmV3VGV4dCkge1xuICAgIGNvbnN0IG9sZFRleHQgPSB0aGlzLmVsLmlubmVyVGV4dDtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChvbGRUZXh0Lmxlbmd0aCwgbmV3VGV4dC5sZW5ndGgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKHRoaXMucmVzb2x2ZSA9IHJlc29sdmUpKTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZnJvbSA9IG9sZFRleHRbaV0gfHwgXCJcIjtcbiAgICAgIGNvbnN0IHRvID0gbmV3VGV4dFtpXSB8fCBcIlwiO1xuICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MCk7XG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKTtcbiAgICAgIHRoaXMucXVldWUucHVzaCh7IGZyb20sIHRvLCBzdGFydCwgZW5kIH0pO1xuICAgIH1cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lUmVxdWVzdCk7XG4gICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICB1cGRhdGUoKSB7XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgbGV0IGNvbXBsZXRlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucXVldWUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBsZXQgeyBmcm9tLCB0bywgc3RhcnQsIGVuZCwgY2hhciB9ID0gdGhpcy5xdWV1ZVtpXTtcbiAgICAgIGlmICh0aGlzLmZyYW1lID49IGVuZCkge1xuICAgICAgICBjb21wbGV0ZSsrO1xuICAgICAgICBvdXRwdXQgKz0gdG87XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWUgPj0gc3RhcnQpIHtcbiAgICAgICAgaWYgKCFjaGFyIHx8IE1hdGgucmFuZG9tKCkgPCAwLjI4KSB7XG4gICAgICAgICAgY2hhciA9IHRoaXMucmFuZG9tQ2hhcigpO1xuICAgICAgICAgIHRoaXMucXVldWVbaV0uY2hhciA9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ICs9IGA8c3BhbiBjbGFzcz1cImR1ZFwiPiR7Y2hhcn08L3NwYW4+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBmcm9tO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IG91dHB1dDtcbiAgICBpZiAoY29tcGxldGUgPT09IHRoaXMucXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcmFtZVJlcXVlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuICAgICAgdGhpcy5mcmFtZSsrO1xuICAgIH1cbiAgfVxuICByYW5kb21DaGFyKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2hhcnMubGVuZ3RoKV07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHlvdXR1YmVJY29uLFxuICBpbnN0YWdyYW1JY29uLFxuICB0d2l0dGVySWNvbixcbiAgbWFpbEljb24sXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhSWNvbnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRleHRTY3JhYmxlIGZyb20gXCIuLi9saWIvVGV4dFNjcmFtYmxlXCI7XG5cbmNvbnN0IHJhbmRvbU1lc3NhZ2VzID0gW1xuICBcImh1bWFuLCBvciBpZGVhXCIsXG4gIFwiYXJlIHlvdSBhd2FrZT9cIixcbiAgXCJ3ZSdyZSBhbGwgZ29ubmEgbWFrZSBpdFwiLFxuICBcImludG8gdGhlIGluZmluaXRlXCIsXG5dO1xuXG5jb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21NZXNzYWdlcy5sZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBoZWFkZXJGeCA9IG5ldyBUZXh0U2NyYW1ibGUoZWwpO1xuICAgIGhlYWRlckZ4LnNldFRleHQodGl0bGUuaW5uZXJIVE1MKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5qZXJlbXlmcmVlZG9tPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkplcmVteSBGcmVlZG9tIC0gSW50ZXJuZXQgcGVyc29uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NxdWFyZS5qcGdcIiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcnRyYWl0LWxvZ29cIl19IC8+XG4gICAgICAgIDxoMSBpZD1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIGplcmVteWZyZWVkb21cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlc1tcInNvY2lhbC1tZWRpYS1pY29uc1wiXX0+XG4gICAgICAgICAge3lvdXR1YmVJY29ufSB7aW5zdGFncmFtSWNvbn0ge3R3aXR0ZXJJY29ufVxuICAgICAgICAgIHttYWlsSWNvbn1cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntyYW5kb21NZXNzYWdlc1tyYW5kb21OdW1dfTwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9KRGljdWxvdXMxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPnt5b3V0dWJlSWNvbn0geW91dHViZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHJhbmRvbSB2YW5pdHkgdmlkZW9zIHdpdGggb2NjYXNpb25hbCBhdHRlbXB0IHRvIGFkZCB2YWx1ZSB0byB0aGVcbiAgICAgICAgICAgICAgd29ybGRcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY2l0eW9mamVyZW15XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPntpbnN0YWdyYW1JY29ufSBpbnN0YWdyYW0gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBzaG93aW5nIG9mZiB0cmF2ZWxzICYgb25seSB0aGUgZ29vZCBwYXJ0cyBvZiBteSBsaWZlIHRvIG1ha2UgeW91XG4gICAgICAgICAgICAgIEZPTU9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGlzY29yZC5jb20vY2hhbm5lbHMvNDg0NDk2NzI2MTU0MjgwOTY5LzQ4NDQ5NjcyNjc0MTM1MjQ1MFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz7wn5GlIGRpc2NvcmQgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPmRlYWQgY29tbXVuaXR5IGNoYW5uZWw8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2plcmVteWZyZWVkb20uc3Vic3RhY2suY29tL2FyY2hpdmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+8J+WiSBibG9nICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5sb25nIGZvcm0gY29udGVudCB0aGF0IG5vIG9uZSByZWFkczwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL2pGcmVlZG9tXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+8J+RpSByZWRkaXQgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPmRlYWQgaW50ZXJuZXQgZm9ydW08L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmpiZXJuaWVyLmNvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPuKZliBzb2Z0d2FyZSBjb25zdWx0aW5nICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5mb3IgdGhvc2Ugd2hvIHdhbnQgdG8gcGF5IG1lIG1vbmV5IHRvIGZpZGRsZSB3aXRoIGNvbXB1dGVyczwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=