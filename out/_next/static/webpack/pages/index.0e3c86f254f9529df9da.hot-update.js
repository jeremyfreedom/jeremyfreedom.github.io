webpackHotUpdate_N_E("pages/index",{

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






var randomMessages = ["human, or idea?", "are you awake?", "we're all gonna make it", "into the infinite", "escaping the comfort zone", "freedom of life", "freedom from inhibitions", "life", "we are all one", "it's an illusion"];
var randomNum = Math.floor(Math.random() * randomMessages.length);
function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var el = document.getElementById("title");
    var headerFx = new _lib_TextScramble__WEBPACK_IMPORTED_MODULE_5__["default"](el);
    headerFx.setText(title.innerHTML);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "jeremyfreedom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Jeremy Freedom - Internet person"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/img/square.jpg",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["portrait-logo"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        id: "title",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: "jeremyfreedom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons"],
        children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["youtubeIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["twitterIcon"], _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["mailIcon"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description, " fade-in"),
        children: randomMessages[randomNum]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "random vanity videos with occasional attempt to add value to the world"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.instagram.com/cityofjeremy",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " instagram \u2192"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "showing off travels & only the good parts of my life to make you FOMO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://discord.com/channels/484496726154280969/484496726741352450",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 discord \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead community channel"
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
          href: "https://jeremyfreedom.substack.com/archive",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDD89 blog \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "long form content that no one reads"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.reddit.com/r/jFreedom",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 reddit \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead internet forum"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.jbernier.com",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u2656 software consulting \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "for those who want to pay me money to fiddle with computers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tTWVzc2FnZXMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJIb21lIiwidXNlRWZmZWN0IiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyRngiLCJUZXh0U2NyYW1ibGUiLCJzZXRUZXh0IiwidGl0bGUiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwieW91dHViZUljb24iLCJpbnN0YWdyYW1JY29uIiwidHdpdHRlckljb24iLCJtYWlsSWNvbiIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsQ0FDckIsaUJBRHFCLEVBRXJCLGdCQUZxQixFQUdyQix5QkFIcUIsRUFJckIsbUJBSnFCLEVBS3JCLDJCQUxxQixFQU1yQixpQkFOcUIsRUFPckIsMEJBUHFCLEVBUXJCLE1BUnFCLEVBU3JCLGdCQVRxQixFQVVyQixrQkFWcUIsQ0FBdkI7QUFhQSxJQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLGNBQWMsQ0FBQ0ssTUFBMUMsQ0FBbEI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFYO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLElBQUlDLHlEQUFKLENBQWlCSixFQUFqQixDQUFqQjtBQUNBRyxZQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEtBQUssQ0FBQ0MsU0FBdkI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0U7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFGRDs7R0E1RnVCbkIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTNjODZmMjU0Zjk1MjlkZjlkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgeW91dHViZUljb24sXG4gIGluc3RhZ3JhbUljb24sXG4gIHR3aXR0ZXJJY29uLFxuICBtYWlsSWNvbixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsTWVkaWFJY29uc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dFNjcmFtYmxlIGZyb20gXCIuLi9saWIvVGV4dFNjcmFtYmxlXCI7XG5cbmNvbnN0IHJhbmRvbU1lc3NhZ2VzID0gW1xuICBcImh1bWFuLCBvciBpZGVhP1wiLFxuICBcImFyZSB5b3UgYXdha2U/XCIsXG4gIFwid2UncmUgYWxsIGdvbm5hIG1ha2UgaXRcIixcbiAgXCJpbnRvIHRoZSBpbmZpbml0ZVwiLFxuICBcImVzY2FwaW5nIHRoZSBjb21mb3J0IHpvbmVcIixcbiAgXCJmcmVlZG9tIG9mIGxpZmVcIixcbiAgXCJmcmVlZG9tIGZyb20gaW5oaWJpdGlvbnNcIixcbiAgXCJsaWZlXCIsXG4gIFwid2UgYXJlIGFsbCBvbmVcIixcbiAgXCJpdCdzIGFuIGlsbHVzaW9uXCIsXG5dO1xuXG5jb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21NZXNzYWdlcy5sZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBoZWFkZXJGeCA9IG5ldyBUZXh0U2NyYW1ibGUoZWwpO1xuICAgIGhlYWRlckZ4LnNldFRleHQodGl0bGUuaW5uZXJIVE1MKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5qZXJlbXlmcmVlZG9tPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkplcmVteSBGcmVlZG9tIC0gSW50ZXJuZXQgcGVyc29uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NxdWFyZS5qcGdcIiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcnRyYWl0LWxvZ29cIl19IC8+XG4gICAgICAgIDxoMSBpZD1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIGplcmVteWZyZWVkb21cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlc1tcInNvY2lhbC1tZWRpYS1pY29uc1wiXX0+XG4gICAgICAgICAge3lvdXR1YmVJY29ufSB7aW5zdGFncmFtSWNvbn0ge3R3aXR0ZXJJY29ufVxuICAgICAgICAgIHttYWlsSWNvbn1cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGVzY3JpcHRpb259IGZhZGUtaW5gfT5cbiAgICAgICAgICB7cmFuZG9tTWVzc2FnZXNbcmFuZG9tTnVtXX1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jL0pEaWN1bG91czFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+e3lvdXR1YmVJY29ufSB5b3V0dWJlICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgcmFuZG9tIHZhbml0eSB2aWRlb3Mgd2l0aCBvY2Nhc2lvbmFsIGF0dGVtcHQgdG8gYWRkIHZhbHVlIHRvIHRoZVxuICAgICAgICAgICAgICB3b3JsZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jaXR5b2ZqZXJlbXlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+e2luc3RhZ3JhbUljb259IGluc3RhZ3JhbSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHNob3dpbmcgb2ZmIHRyYXZlbHMgJiBvbmx5IHRoZSBnb29kIHBhcnRzIG9mIG15IGxpZmUgdG8gbWFrZSB5b3VcbiAgICAgICAgICAgICAgRk9NT1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9jaGFubmVscy80ODQ0OTY3MjYxNTQyODA5NjkvNDg0NDk2NzI2NzQxMzUyNDUwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPvCfkaUgZGlzY29yZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+ZGVhZCBjb21tdW5pdHkgY2hhbm5lbDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vamVyZW15ZnJlZWRvbS5zdWJzdGFjay5jb20vYXJjaGl2ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz7wn5aJIGJsb2cgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPmxvbmcgZm9ybSBjb250ZW50IHRoYXQgbm8gb25lIHJlYWRzPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5yZWRkaXQuY29tL3IvakZyZWVkb21cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz7wn5GlIHJlZGRpdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+ZGVhZCBpbnRlcm5ldCBmb3J1bTwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuamJlcm5pZXIuY29tXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+4pmWIHNvZnR3YXJlIGNvbnN1bHRpbmcgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPmZvciB0aG9zZSB3aG8gd2FudCB0byBwYXkgbWUgbW9uZXkgdG8gZmlkZGxlIHdpdGggY29tcHV0ZXJzPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==