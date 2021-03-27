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






var randomMessages = ["human, or idea?", "are you awake?", "we're all gonna make it", "into the infinite", "escaping the comfort zone", "freedom of life", "freedom from inhibitions", "life", "we are all one", "it's an illusion", "outside the mind", "higher conscious", "who's in control?"];
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
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Jeremy Freedom - Internet person"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/img/square.jpg",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["portrait-logo"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        id: "title",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: "jeremyfreedom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons"],
        children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["youtubeIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " ", _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["twitterIcon"], _components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["mailIcon"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description, " fade-in"),
        children: randomMessages[randomNum]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "random vanity videos with occasional attempt to add value to the world"
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
          href: "https://www.instagram.com/cityofjeremy",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [_components_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_3__["instagramIcon"], " instagram \u2192"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "showing off travels & only the good parts of my life to make you FOMO"
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
          href: "https://discord.com/channels/484496726154280969/484496726741352450",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 discord \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead community channel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://jeremyfreedom.substack.com/archive",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDD89 blog \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "long form content that no one reads"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.reddit.com/r/jFreedom",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\uD83D\uDC65 reddit \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "dead internet forum"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.jbernier.com",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u2656 software consulting \u2192"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "for those who want to pay me money to fiddle with computers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tTWVzc2FnZXMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJIb21lIiwidXNlRWZmZWN0IiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyRngiLCJUZXh0U2NyYW1ibGUiLCJzZXRUZXh0IiwidGl0bGUiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwieW91dHViZUljb24iLCJpbnN0YWdyYW1JY29uIiwidHdpdHRlckljb24iLCJtYWlsSWNvbiIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsQ0FDckIsaUJBRHFCLEVBRXJCLGdCQUZxQixFQUdyQix5QkFIcUIsRUFJckIsbUJBSnFCLEVBS3JCLDJCQUxxQixFQU1yQixpQkFOcUIsRUFPckIsMEJBUHFCLEVBUXJCLE1BUnFCLEVBU3JCLGdCQVRxQixFQVVyQixrQkFWcUIsRUFXckIsa0JBWHFCLEVBWXJCLGtCQVpxQixFQWFyQixtQkFicUIsQ0FBdkI7QUFnQkEsSUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixjQUFjLENBQUNLLE1BQTFDLENBQWxCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWDtBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyx5REFBSixDQUFpQkosRUFBakIsQ0FBakI7QUFDQUcsWUFBUSxDQUFDRSxPQUFULENBQWlCQyxLQUFLLENBQUNDLFNBQXZCO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLGlCQUFUO0FBQTJCLGlCQUFTLEVBQUVGLDhEQUFNLENBQUMsZUFBRDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFJLFVBQUUsRUFBQyxPQUFQO0FBQWUsaUJBQVMsRUFBRUEsOERBQU0sQ0FBQ0YsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUssaUJBQVMsRUFBRUUsOERBQU0sQ0FBQyxvQkFBRCxDQUF0QjtBQUFBLG1CQUNHRyx3RUFESCxPQUNpQkMsMEVBRGpCLE9BQ2lDQyx3RUFEakMsRUFFR0MscUVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUFHLGlCQUFTLFlBQUtOLDhEQUFNLENBQUNPLFdBQVosYUFBWjtBQUFBLGtCQUNHdkIsY0FBYyxDQUFDQyxTQUFEO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWNFO0FBQUssaUJBQVMsRUFBRWUsOERBQU0sQ0FBQ1EsSUFBdkI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxzQ0FEUDtBQUVFLG1CQUFTLEVBQUVSLDhEQUFNLENBQUNTLElBRnBCO0FBQUEsa0NBSUU7QUFBQSx1QkFBS04sd0VBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUU7QUFDRSxjQUFJLEVBQUMsd0NBRFA7QUFFRSxtQkFBUyxFQUFFSCw4REFBTSxDQUFDUyxJQUZwQjtBQUFBLGtDQUlFO0FBQUEsdUJBQUtMLDBFQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixlQXVCRTtBQUNFLGNBQUksRUFBQyxvRUFEUDtBQUVFLG1CQUFTLEVBQUVKLDhEQUFNLENBQUNTLElBRnBCO0FBQUEsa0NBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGLGVBK0JFO0FBQ0UsY0FBSSxFQUFDLDRDQURQO0FBRUUsbUJBQVMsRUFBRVQsOERBQU0sQ0FBQ1MsSUFGcEI7QUFBQSxrQ0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkYsZUF1Q0U7QUFBRyxjQUFJLEVBQUMsbUNBQVI7QUFBNEMsbUJBQVMsRUFBRVQsOERBQU0sQ0FBQ1MsSUFBOUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0YsZUE0Q0U7QUFBRyxjQUFJLEVBQUMsMEJBQVI7QUFBbUMsbUJBQVMsRUFBRVQsOERBQU0sQ0FBQ1MsSUFBckQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxRkQ7O0dBNUZ1Qm5CLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDFiMWFiNjdlNGI4NmQ5OGVhYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHlvdXR1YmVJY29uLFxuICBpbnN0YWdyYW1JY29uLFxuICB0d2l0dGVySWNvbixcbiAgbWFpbEljb24sXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhSWNvbnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRleHRTY3JhbWJsZSBmcm9tIFwiLi4vbGliL1RleHRTY3JhbWJsZVwiO1xuXG5jb25zdCByYW5kb21NZXNzYWdlcyA9IFtcbiAgXCJodW1hbiwgb3IgaWRlYT9cIixcbiAgXCJhcmUgeW91IGF3YWtlP1wiLFxuICBcIndlJ3JlIGFsbCBnb25uYSBtYWtlIGl0XCIsXG4gIFwiaW50byB0aGUgaW5maW5pdGVcIixcbiAgXCJlc2NhcGluZyB0aGUgY29tZm9ydCB6b25lXCIsXG4gIFwiZnJlZWRvbSBvZiBsaWZlXCIsXG4gIFwiZnJlZWRvbSBmcm9tIGluaGliaXRpb25zXCIsXG4gIFwibGlmZVwiLFxuICBcIndlIGFyZSBhbGwgb25lXCIsXG4gIFwiaXQncyBhbiBpbGx1c2lvblwiLFxuICBcIm91dHNpZGUgdGhlIG1pbmRcIixcbiAgXCJoaWdoZXIgY29uc2Npb3VzXCIsXG4gIFwid2hvJ3MgaW4gY29udHJvbD9cIixcbl07XG5cbmNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbU1lc3NhZ2VzLmxlbmd0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICAgIGNvbnN0IGhlYWRlckZ4ID0gbmV3IFRleHRTY3JhbWJsZShlbCk7XG4gICAgaGVhZGVyRnguc2V0VGV4dCh0aXRsZS5pbm5lckhUTUwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmplcmVteWZyZWVkb208L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSmVyZW15IEZyZWVkb20gLSBJbnRlcm5ldCBwZXJzb25cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvc3F1YXJlLmpwZ1wiIGNsYXNzTmFtZT17c3R5bGVzW1wicG9ydHJhaXQtbG9nb1wiXX0gLz5cbiAgICAgICAgPGgxIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgamVyZW15ZnJlZWRvbVxuICAgICAgICA8L2gxPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wic29jaWFsLW1lZGlhLWljb25zXCJdfT5cbiAgICAgICAgICB7eW91dHViZUljb259IHtpbnN0YWdyYW1JY29ufSB7dHdpdHRlckljb259XG4gICAgICAgICAge21haWxJY29ufVxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXNjcmlwdGlvbn0gZmFkZS1pbmB9PlxuICAgICAgICAgIHtyYW5kb21NZXNzYWdlc1tyYW5kb21OdW1dfVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvSkRpY3Vsb3VzMVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz57eW91dHViZUljb259IHlvdXR1YmUgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICByYW5kb20gdmFuaXR5IHZpZGVvcyB3aXRoIG9jY2FzaW9uYWwgYXR0ZW1wdCB0byBhZGQgdmFsdWUgdG8gdGhlXG4gICAgICAgICAgICAgIHdvcmxkXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NpdHlvZmplcmVteVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz57aW5zdGFncmFtSWNvbn0gaW5zdGFncmFtICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgc2hvd2luZyBvZmYgdHJhdmVscyAmIG9ubHkgdGhlIGdvb2QgcGFydHMgb2YgbXkgbGlmZSB0byBtYWtlIHlvdVxuICAgICAgICAgICAgICBGT01PXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuY29tL2NoYW5uZWxzLzQ4NDQ5NjcyNjE1NDI4MDk2OS80ODQ0OTY3MjY3NDEzNTI0NTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+8J+RpSBkaXNjb3JkICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5kZWFkIGNvbW11bml0eSBjaGFubmVsPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9qZXJlbXlmcmVlZG9tLnN1YnN0YWNrLmNvbS9hcmNoaXZlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPvCflokgYmxvZyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+bG9uZyBmb3JtIGNvbnRlbnQgdGhhdCBubyBvbmUgcmVhZHM8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9qRnJlZWRvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPvCfkaUgcmVkZGl0ICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5kZWFkIGludGVybmV0IGZvcnVtPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5qYmVybmllci5jb21cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz7imZYgc29mdHdhcmUgY29uc3VsdGluZyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+Zm9yIHRob3NlIHdobyB3YW50IHRvIHBheSBtZSBtb25leSB0byBmaWRkbGUgd2l0aCBjb21wdXRlcnM8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9