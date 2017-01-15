/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _noManure = __webpack_require__(1);

	var _appManager = __webpack_require__(5);

	var $ = __webpack_require__(2);
	window.jQuery = $;
	window.$ = $;
	var kube = __webpack_require__(49);


	var appInstance = new _noManure.App("app");
	(0, _appManager.registerComponents)(appInstance);

	//try to create base folder
	console.log("making frtlzer folder");
	fs.mkdir(app.getPath("documents") + "/frtlzer", function (err) {
	    console.log(err);
	    var simpleGit = __webpack_require__(18)(app.getPath("documents") + "/frtlzer");
	    //if not already there, it's the first run, so set config
	    if (!err) {
	        var emptyConfig = { "gitAuth": { "user": "", "password": "" } };
	        fs.writeFile(app.getPath("documents") + "/frtlzer/config.json", JSON.stringify(emptyConfig));
	    } else {
	        fs.readFile(app.getPath("documents") + "/frtlzer/config.json", 'utf-8', function (err, data) {
	            var configs = JSON.parse(data);
	            if (!err) {
	                //check if already cloned the repo, if not clone, else pull
	                fs.readdir(app.getPath("documents") + "/frtlzer/wfs/", function (err, files) {
	                    if (err) {
	                        simpleGit.clone("https://" + configs.gitAuth.user + ":" + configs.gitAuth.password + "@github.com/fiesensee/wfs.git", app.getPath("documents") + "/frtlzer/wfs/");
	                    } else {
	                        simpleGit = __webpack_require__(18)(app.getPath("documents") + "/frtlzer/wfs/");
	                        simpleGit.pull();
	                    }
	                });
	            }
	        });
	    }
	});

	appInstance.renderComponent("mainMenu");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.App = exports.Component = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = exports.Component = function () {
	    function Component(name) {
	        _classCallCheck(this, Component);

	        this.appInstance = null;
	        this.name = name;
	        this.data = null;
	        this.props = null;
	    }

	    _createClass(Component, [{
	        key: "render",
	        value: function render() {
	            var _this = this;

	            console.log("rendering");
	            return new Promise(function (resolve) {
	                return resolve(_this.template(_this.data));
	            });
	        }
	    }, {
	        key: "addListeners",
	        value: function addListeners() {}
	    }]);

	    return Component;
	}();

	var App = exports.App = function () {
	    function App(ElementID) {
	        _classCallCheck(this, App);

	        this.AppElement = (0, _jquery2.default)("#" + ElementID);
	        this.components = [];
	        this.props = {};
	    }

	    _createClass(App, [{
	        key: "registerComponent",
	        value: function registerComponent(component) {
	            this.components.push(component);
	        }
	    }, {
	        key: "renderComponent",
	        value: function renderComponent(componentName) {
	            var _this2 = this;

	            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var component = this.components.find(function (comp) {
	                return comp.name == componentName;
	            });
	            component.props = props;
	            component.appInstance = this;
	            component.render().then(function (out) {
	                _this2.AppElement.html(out);
	                component.addListeners();
	            });
	        }
	    }]);

	    return App;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
	!function (a, b) {
	  "use strict";
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  "use strict";
	  var c = [],
	      d = a.document,
	      e = Object.getPrototypeOf,
	      f = c.slice,
	      g = c.concat,
	      h = c.push,
	      i = c.indexOf,
	      j = {},
	      k = j.toString,
	      l = j.hasOwnProperty,
	      m = l.toString,
	      n = m.call(Object),
	      o = {};function p(a, b) {
	    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	  }var q = "3.1.1",
	      r = function r(a, b) {
	    return new r.fn.init(a, b);
	  },
	      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      t = /^-ms-/,
	      u = /-([a-z])/g,
	      v = function v(a, b) {
	    return b.toUpperCase();
	  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
	      return f.call(this);
	    }, get: function get(a) {
	      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
	    }, pushStack: function pushStack(a) {
	      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
	    }, each: function each(a) {
	      return r.each(this, a);
	    }, map: function map(a) {
	      return this.pushStack(r.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(f.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor();
	    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
	      if (null != (a = arguments[h])) for (b in a) {
	        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	      }
	    }return g;
	  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === r.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
	    }, isPlainObject: function isPlainObject(a) {
	      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
	    }, globalEval: function globalEval(a) {
	      p(a);
	    }, camelCase: function camelCase(a) {
	      return a.replace(t, "ms-").replace(u, v);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b) {
	      var c,
	          d = 0;if (w(a)) {
	        for (c = a.length; d < c; d++) {
	          if (b.call(a[d], d, a[d]) === !1) break;
	        }
	      } else for (d in a) {
	        if (b.call(a[d], d, a[d]) === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(s, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : i.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
	        a[e++] = b[d];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          e,
	          f = 0,
	          h = [];if (w(a)) for (d = a.length; f < d; f++) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      } else for (f in a) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      }return g.apply([], h);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
	        return a.apply(b || this, d.concat(f.call(arguments)));
	      }, e.guid = a.guid = a.guid || r.guid++, e;
	    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	    j["[object " + b + "]"] = b.toLowerCase();
	  });function w(a) {
	    var b = !!a && "length" in a && a.length,
	        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
	  }var x = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ha(),
	        z = ha(),
	        A = ha(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = {}.hasOwnProperty,
	        D = [],
	        E = D.pop,
	        F = D.push,
	        G = D.push,
	        H = D.slice,
	        I = function I(a, b) {
	      for (var c = 0, d = a.length; c < d; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        K = "[\\x20\\t\\r\\n\\f]",
	        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
	        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
	        O = new RegExp(K + "+", "g"),
	        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
	        Q = new RegExp("^" + K + "*," + K + "*"),
	        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
	        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
	        T = new RegExp(N),
	        U = new RegExp("^" + L + "$"),
	        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
	        W = /^(?:input|select|textarea|button)$/i,
	        X = /^h\d$/i,
	        Y = /^[^{]+\{\s*\[native \w/,
	        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        $ = /[+~]/,
	        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
	        aa = function aa(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	        ca = function ca(a, b) {
	      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
	    },
	        da = function da() {
	      m();
	    },
	        ea = ta(function (a) {
	      return a.disabled === !0 && ("form" in a || "label" in a);
	    }, { dir: "parentNode", next: "legend" });try {
	      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
	    } catch (fa) {
	      G = { apply: D.length ? function (a, b) {
	          F.apply(a, H.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function ga(a, b, d, e) {
	      var f,
	          h,
	          j,
	          k,
	          l,
	          o,
	          r,
	          s = b && b.ownerDocument,
	          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
	        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
	          if (9 === w) {
	            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
	          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
	        } else {
	          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
	        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
	          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
	            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
	              o[h] = "#" + k + " " + sa(o[h]);
	            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
	          }if (r) try {
	            return G.apply(d, s.querySelectorAll(r)), d;
	          } catch (x) {} finally {
	            k === u && b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(P, "$1"), b, d, e);
	    }function ha() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ia(a) {
	      return a[u] = !0, a;
	    }function ja(a) {
	      var b = n.createElement("fieldset");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ka(a, b) {
	      var c = a.split("|"),
	          e = c.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function la(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function na(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function oa(a) {
	      return function (b) {
	        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
	      };
	    }function pa(a) {
	      return ia(function (b) {
	        return b = +b, ia(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function qa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = ga.support = {}, f = ga.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
	    }, m = ga.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ja(function (a) {
	        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
	        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
	      }), c.getById ? (d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }, d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c ? [c] : [];
	        }
	      }) : (d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }, d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c,
	              d,
	              e,
	              f = b.getElementById(a);if (f) {
	            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
	              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
	            }
	          }return [];
	        }
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
	      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ja(function (a) {
	        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
	        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            g = [a],
	            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
	          g.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          h.unshift(c);
	        }while (g[d] === h[d]) {
	          d++;
	        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
	      }, n) : n;
	    }, ga.matches = function (a, b) {
	      return ga(a, null, null, b);
	    }, ga.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return ga(b, n, null, [a]).length > 0;
	    }, ga.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, ga.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, ga.escape = function (a) {
	      return (a + "").replace(ba, ca);
	    }, ga.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, ga.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = ga.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h,
	                t = !1;if (q) {
	              if (f) {
	                while (p) {
	                  m = b;while (m = m[p]) {
	                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                  if (1 === m.nodeType && ++t && m === b) {
	                    k[a] = [w, n, t];break;
	                  }
	                }
	              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
	              }return t -= e, t === d || t % d === 0 && t / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ia(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ia(function (a) {
	          return function (b) {
	            return ga(a, b).length > 0;
	          };
	        }), contains: ia(function (a) {
	          return a = a.replace(_, aa), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ia(function (a) {
	          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return X.test(a.nodeName);
	        }, input: function input(a) {
	          return W.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: pa(function () {
	          return [0];
	        }), last: pa(function (a, b) {
	          return [b - 1];
	        }), eq: pa(function (a, b, c) {
	          return [c < 0 ? c + b : c];
	        }), even: pa(function (a, b) {
	          for (var c = 0; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: pa(function (a, b) {
	          for (var c = 1; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = ma(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = na(b);
	    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
	    };function sa(a) {
	      for (var b = 0, c = a.length, d = ""; b < c; b++) {
	        d += a[b].value;
	      }return d;
	    }function ta(a, b, c) {
	      var d = b.dir,
	          e = b.next,
	          f = e || d,
	          g = c && "parentNode" === f,
	          h = x++;return b.first ? function (b, c, e) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || g) return a(b, c, e);
	        }return !1;
	      } : function (b, c, i) {
	        var j,
	            k,
	            l,
	            m = [w, h];if (i) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
	            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
	          }
	        }return !1;
	      };
	    }function ua(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function va(a, b, c) {
	      for (var d = 0, e = b.length; d < e; d++) {
	        ga(a, b[d], c);
	      }return c;
	    }function wa(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
	        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
	      }return g;
	    }function xa(a, b, c, d, e, f) {
	      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || va(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : wa(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
	      });
	    }function ya(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
	        return a === b;
	      }, h, !0), l = ta(function (a) {
	        return I(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; i < f; i++) {
	        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; e < f; e++) {
	              if (d.relative[a[e].type]) break;
	            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
	          }m.push(c);
	        }
	      }return ua(m);
	    }function za(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            o,
	            q,
	            r = 0,
	            s = "0",
	            t = _f && [],
	            u = [],
	            v = j,
	            x = _f || e && d.find.TAG("*", k),
	            y = w += null == v ? 1 : Math.random() || .1,
	            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
	          if (e && l) {
	            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
	              if (q(l, g || n, h)) {
	                i.push(l);break;
	              }
	            }k && (w = y);
	          }c && ((l = !q && l) && r--, _f && t.push(l));
	        }if (r += s, c && s !== r) {
	          o = 0;while (q = b[o++]) {
	            q(t, u, g, h);
	          }if (_f) {
	            if (r > 0) while (s--) {
	              t[s] || u[s] || (u[s] = E.call(i));
	            }u = wa(u);
	          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
	        }return k && (w = y, j = v), t;
	      };return c ? ia(f) : f;
	    }return h = ga.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, za(e, d)), f.selector = a;
	      }return f;
	    }, i = ga.select = function (a, b, c, e) {
	      var f,
	          i,
	          j,
	          k,
	          l,
	          m = "function" == typeof a && a,
	          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
	        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
	          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
	        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
	          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
	            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
	          }
	        }
	      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
	    }), ja(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ka("type|href|height|width", function (a, b, c) {
	      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ja(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ka("value", function (a, b, c) {
	      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
	    }), ja(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ka(J, function (a, b, c) {
	      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), ga;
	  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
	    var d = [],
	        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
	      if (1 === a.nodeType) {
	        if (e && r(a).is(c)) break;d.push(a);
	      }
	    }return d;
	  },
	      z = function z(a, b) {
	    for (var c = []; a; a = a.nextSibling) {
	      1 === a.nodeType && a !== b && c.push(a);
	    }return c;
	  },
	      A = r.expr.match.needsContext,
	      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
	    return r.isFunction(b) ? r.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    }) : b.nodeType ? r.grep(a, function (a) {
	      return a === b !== c;
	    }) : "string" != typeof b ? r.grep(a, function (a) {
	      return i.call(b, a) > -1 !== c;
	    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
	      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
	    }));
	  }r.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, r.fn.extend({ find: function find(a) {
	      var b,
	          c,
	          d = this.length,
	          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
	        for (b = 0; b < d; b++) {
	          if (r.contains(e[b], this)) return !0;
	        }
	      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
	        r.find(a, e[b], c);
	      }return d > 1 ? r.uniqueSort(c) : c;
	    }, filter: function filter(a) {
	      return this.pushStack(D(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(D(this, a || [], !0));
	    }, is: function is(a) {
	      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
	    } });var E,
	      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	      G = r.fn.init = function (a, b, c) {
	    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
	      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
	        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
	          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
	        }return this;
	      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
	    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
	      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
	      var b = r(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; a < c; a++) {
	          if (r.contains(this, b[a])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      var c,
	          d = 0,
	          e = this.length,
	          f = [],
	          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function J(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	  }r.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return y(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return y(a, "parentNode", c);
	    }, next: function next(a) {
	      return J(a, "nextSibling");
	    }, prev: function prev(a) {
	      return J(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return y(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return y(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return y(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return y(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return z((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return z(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || r.merge([], a.childNodes);
	    } }, function (a, b) {
	    r.fn[a] = function (c, d) {
	      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
	    var b = {};return r.each(a.match(K) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }r.Callbacks = function (a) {
	    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f = [],
	        g = [],
	        h = -1,
	        i = function i() {
	      for (e = a.once, d = b = !0; g.length; h = -1) {
	        c = g.shift();while (++h < f.length) {
	          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
	        }
	      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
	    },
	        j = { add: function add() {
	        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
	          r.each(b, function (b, c) {
	            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
	          });
	        }(arguments), c && !b && i()), this;
	      }, remove: function remove() {
	        return r.each(arguments, function (a, b) {
	          var c;while ((c = r.inArray(b, f, c)) > -1) {
	            f.splice(c, 1), c <= h && h--;
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? r.inArray(a, f) > -1 : f.length > 0;
	      }, empty: function empty() {
	        return f && (f = []), this;
	      }, disable: function disable() {
	        return e = g = [], f = c = "", this;
	      }, disabled: function disabled() {
	        return !f;
	      }, lock: function lock() {
	        return e = g = [], c || b || (f = c = ""), this;
	      }, locked: function locked() {
	        return !!e;
	      }, fireWith: function fireWith(a, c) {
	        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	      }, fire: function fire() {
	        return j.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return j;
	  };function M(a) {
	    return a;
	  }function N(a) {
	    throw a;
	  }function O(a, b, c) {
	    var d;try {
	      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
	    } catch (a) {
	      c.call(void 0, a);
	    }
	  }r.extend({ Deferred: function Deferred(b) {
	      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
	          d = "pending",
	          e = { state: function state() {
	          return d;
	        }, always: function always() {
	          return f.done(arguments).fail(arguments), this;
	        }, "catch": function _catch(a) {
	          return e.then(null, a);
	        }, pipe: function pipe() {
	          var a = arguments;return r.Deferred(function (b) {
	            r.each(c, function (c, d) {
	              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
	                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, then: function then(b, d, e) {
	          var f = 0;function g(b, c, d, e) {
	            return function () {
	              var h = this,
	                  i = arguments,
	                  j = function j() {
	                var a, j;if (!(b < f)) {
	                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
	                }
	              },
	                  k = e ? j : function () {
	                try {
	                  j();
	                } catch (a) {
	                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
	                }
	              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
	            };
	          }return r.Deferred(function (a) {
	            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? r.extend(a, e) : e;
	        } },
	          f = {};return r.each(c, function (a, b) {
	        var g = b[2],
	            h = b[5];e[b[1]] = g.add, h && g.add(function () {
	          d = h;
	        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
	          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
	        }, f[b[0] + "With"] = g.fireWith;
	      }), e.promise(f), b && b.call(f, f), f;
	    }, when: function when(a) {
	      var b = arguments.length,
	          c = b,
	          d = Array(c),
	          e = f.call(arguments),
	          g = r.Deferred(),
	          h = function h(a) {
	        return function (c) {
	          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
	        };
	      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
	        O(e[c], h(c), g.reject);
	      }return g.promise();
	    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
	    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	  }, r.readyException = function (b) {
	    a.setTimeout(function () {
	      throw b;
	    });
	  };var Q = r.Deferred();r.fn.ready = function (a) {
	    return Q.then(a)["catch"](function (a) {
	      r.readyException(a);
	    }), this;
	  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? r.readyWait++ : r.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
	    } }), r.ready.then = Q.then;function R() {
	    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
	  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === r.type(c)) {
	      e = !0;for (h in c) {
	        S(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
	      return j.call(r(a), c);
	    })), b)) for (; h < i; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      T = function T(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	  };function U() {
	    this.expando = r.expando + U.uid++;
	  }U.uid = 1, U.prototype = { cache: function cache(a) {
	      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
	        e[r.camelCase(d)] = b[d];
	      }return e;
	    }, get: function get(a, b) {
	      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
	    }, access: function access(a, b, c) {
	      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d = a[this.expando];if (void 0 !== d) {
	        if (void 0 !== b) {
	          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
	            delete d[b[c]];
	          }
	        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
	      }
	    }, hasData: function hasData(a) {
	      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
	    } };var V = new U(),
	      W = new U(),
	      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      Y = /[A-Z]/g;function Z(a) {
	    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
	  }function $(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
	      try {
	        c = Z(c);
	      } catch (e) {}W.set(a, b, c);
	    } else c = void 0;return c;
	  }r.extend({ hasData: function hasData(a) {
	      return W.hasData(a) || V.hasData(a);
	    }, data: function data(a, b, c) {
	      return W.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      W.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return V.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      V.remove(a, b);
	    } }), r.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
	          }V.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
	        W.set(this, a);
	      }) : S(this, function (b) {
	        var c;if (f && void 0 === b) {
	          if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
	        } else this.each(function () {
	          W.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        W.remove(this, a);
	      });
	    } }), r.extend({ queue: function queue(a, b, c) {
	      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = r.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = r._queueHooks(a, b),
	          g = function g() {
	        r.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
	          V.remove(a, [b + "queue", c]);
	        }) });
	    } }), r.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        r.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = r.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
	      ba = ["Top", "Right", "Bottom", "Left"],
	      ca = function ca(a, b) {
	    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	  },
	      da = function da(a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  };function ea(a, b, c, d) {
	    var e,
	        f = 1,
	        g = 20,
	        h = d ? function () {
	      return d.cur();
	    } : function () {
	      return r.css(a, b, "");
	    },
	        i = h(),
	        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
	        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
	      j = j || k[3], c = c || [], k = +i || 1;do {
	        f = f || ".5", k /= f, r.style(a, b, k + j);
	      } while (f !== (f = h() / i) && 1 !== f && --g);
	    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	  }var fa = {};function ga(a) {
	    var b,
	        c = a.ownerDocument,
	        d = a.nodeName,
	        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
	  }function ha(a, b) {
	    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
	      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
	    }for (f = 0; f < g; f++) {
	      null != e[f] && (a[f].style.display = e[f]);
	    }return a;
	  }r.fn.extend({ show: function show() {
	      return ha(this, !0);
	    }, hide: function hide() {
	      return ha(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        ca(this) ? r(this).show() : r(this).hide();
	      });
	    } });var ia = /^(?:checkbox|radio)$/i,
	      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	      ka = /^$|\/(?:java|ecma)script/i,
	      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
	    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
	  }function na(a, b) {
	    for (var c = 0, d = a.length; c < d; c++) {
	      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
	    }
	  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
	      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
	        g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
	          g = g.lastChild;
	        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
	      } else m.push(b.createTextNode(f));
	    }l.textContent = "", n = 0;while (f = m[n++]) {
	      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
	        k = 0;while (f = g[k++]) {
	          ka.test(f.type || "") && c.push(f);
	        }
	      }
	    }return l;
	  }!function () {
	    var a = d.createDocumentFragment(),
	        b = a.appendChild(d.createElement("div")),
	        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  }();var qa = d.documentElement,
	      ra = /^key/,
	      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
	    return !0;
	  }function va() {
	    return !1;
	  }function wa() {
	    try {
	      return d.activeElement;
	    } catch (a) {}
	  }function xa(a, b, c, d, e, f) {
	    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
	      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
	        xa(a, h, c, d, b[h], f);
	      }return a;
	    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
	      return r().off(a), g.apply(this, arguments);
	    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
	      r.event.add(this, b, e, d, c);
	    });
	  }r.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.get(a);if (q) {
	        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
	          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
	        }
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
	        b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
	            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
	              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
	            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
	          } else for (n in i) {
	            r.event.remove(a, n + b[j], c, d, !0);
	          }
	        }r.isEmptyObject(i) && V.remove(a, "handle events");
	      }
	    }, dispatch: function dispatch(a) {
	      var b = r.event.fix(a),
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = new Array(arguments.length),
	          j = (V.get(this, "events") || {})[b.type] || [],
	          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
	        i[c] = arguments[c];
	      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
	        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
	          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
	            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g,
	          h = [],
	          i = b.delegateCount,
	          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
	        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
	          for (f = [], g = {}, c = 0; c < i; c++) {
	            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
	          }f.length && h.push({ elem: j, handlers: f });
	        }
	      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
	    }, addProp: function addProp(a, b) {
	      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
	          if (this.originalEvent) return b(this.originalEvent);
	        } : function () {
	          if (this.originalEvent) return this.originalEvent[a];
	        }, set: function set(b) {
	          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
	        } });
	    }, fix: function fix(a) {
	      return a[r.expando] ? a : new r.Event(a);
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          if (this !== wa() && this.focus) return this.focus(), !1;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          if (this === wa() && this.blur) return this.blur(), !1;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
	        }, _default: function _default(a) {
	          return r.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } } }, r.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c);
	  }, r.Event = function (a, b) {
	    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
	      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
	    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), r.fn.extend({ on: function on(a, b, c, d) {
	      return xa(this, a, b, c, d);
	    }, one: function one(a, b, c, d) {
	      return xa(this, a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
	        r.event.remove(this, a, c, b);
	      });
	    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	      za = /<script|<style|<link/i,
	      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      Ba = /^true\/(.*)/,
	      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
	    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
	  }function Ea(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function Fa(a) {
	    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function Ga(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) {
	          for (c = 0, d = j[e].length; c < d; c++) {
	            r.event.add(b, e, j[e][c]);
	          }
	        }
	      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
	    }
	  }function Ha(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }function Ia(a, b, c, d) {
	    b = g.apply([], b);var e,
	        f,
	        h,
	        i,
	        j,
	        k,
	        l = 0,
	        m = a.length,
	        n = m - 1,
	        q = b[0],
	        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
	      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
	    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
	      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
	        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
	      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
	        j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
	      }
	    }return a;
	  }function Ja(a, b, c) {
	    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
	      c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
	    }return a;
	  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
	      return a.replace(ya, "<$1></$2>");
	    }, clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
	        Ha(f[d], g[d]);
	      }if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
	        Ga(f[d], g[d]);
	      } else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
	        if (T(c)) {
	          if (b = c[V.expando]) {
	            if (b.events) for (d in b.events) {
	              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
	            }c[V.expando] = void 0;
	          }c[W.expando] && (c[W.expando] = void 0);
	        }
	      }
	    } }), r.fn.extend({ detach: function detach(a) {
	      return Ja(this, a, !0);
	    }, remove: function remove(a) {
	      return Ja(this, a);
	    }, text: function text(a) {
	      return S(this, function (a) {
	        return void 0 === a ? r.text(this) : this.empty().each(function () {
	          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return Ia(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Da(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return Ia(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Da(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return Ia(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return Ia(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null != a && a, b = null == b ? a : b, this.map(function () {
	        return r.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return S(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = r.htmlPrefilter(a);try {
	            for (; c < d; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = [];return Ia(this, arguments, function (b) {
	        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
	      }, a);
	    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    r.fn[a] = function (a) {
	      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
	        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
	      }return this.pushStack(d);
	    };
	  });var Ka = /^margin/,
	      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
	      Ma = function Ma(b) {
	    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	  };!function () {
	    function b() {
	      if (i) {
	        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
	      }
	    }var c,
	        e,
	        f,
	        g,
	        h = d.createElement("div"),
	        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
	        return b(), c;
	      }, boxSizingReliable: function boxSizingReliable() {
	        return b(), e;
	      }, pixelMarginRight: function pixelMarginRight() {
	        return b(), f;
	      }, reliableMarginLeft: function reliableMarginLeft() {
	        return b(), g;
	      } }));
	  }();function Na(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	  }function Oa(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }var Pa = /^(none|table(?!-c[ea]).+)/,
	      Qa = { position: "absolute", visibility: "hidden", display: "block" },
	      Ra = { letterSpacing: "0", fontWeight: "400" },
	      Sa = ["Webkit", "Moz", "ms"],
	      Ta = d.createElement("div").style;function Ua(a) {
	    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
	        c = Sa.length;while (c--) {
	      if (a = Sa[c] + b, a in Ta) return a;
	    }
	  }function Va(a, b, c) {
	    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	  }function Wa(a, b, c, d, e) {
	    var f,
	        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
	      "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
	    }return g;
	  }function Xa(a, b, c) {
	    var d,
	        e = !0,
	        f = Ma(a),
	        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
	      if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
	    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
	  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Na(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = r.camelCase(b),
	            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
	    } }), r.each(["height", "width"], function (a, b) {
	    r.cssHooks[b] = { get: function get(a, c, d) {
	        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
	          return Xa(a, b, d);
	        });
	      }, set: function set(a, c, d) {
	        var e,
	            f = d && Ma(a),
	            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
	      } };
	  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
	    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
	      return a.getBoundingClientRect().left;
	    })) + "px";
	  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    r.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
	          e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
	  }), r.fn.extend({ css: function css(a, b) {
	      return S(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (r.isArray(b)) {
	          for (d = Ma(a), e = b.length; g < e; g++) {
	            f[b[g]] = r.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
	      }, a, b, arguments.length > 1);
	    } });function Ya(a, b, c, d, e) {
	    return new Ya.prototype.init(a, b, c, d, e);
	  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
	    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
	        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	      }, set: function set(a) {
	        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
	      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, r.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
	      $a,
	      _a = /^(?:toggle|show|hide)$/,
	      ab = /queueHooks$/;function bb() {
	    $a && (a.requestAnimationFrame(bb), r.fx.tick());
	  }function cb() {
	    return a.setTimeout(function () {
	      Za = void 0;
	    }), Za = r.now();
	  }function db(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
	      c = ba[d], e["margin" + c] = e["padding" + c] = a;
	    }return b && (e.opacity = e.width = a), e;
	  }function eb(a, b, c) {
	    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function fb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = "width" in b || "height" in b,
	        m = this,
	        n = {},
	        o = a.style,
	        p = a.nodeType && ca(a),
	        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
	      g.unqueued || h();
	    }), g.unqueued++, m.always(function () {
	      m.always(function () {
	        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
	      });
	    }));for (d in b) {
	      if (e = b[d], _a.test(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
	          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	        }n[d] = q && q[d] || r.style(a, d);
	      }
	    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
	      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
	        o.display = j;
	      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
	        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	      })), i = !1;for (d in n) {
	        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
	          p || ha([a]), V.remove(a, "fxshow");for (d in n) {
	            r.style(a, d, n[d]);
	          }
	        })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
	      }
	    }
	  }function gb(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function hb(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = hb.prefilters.length,
	        h = r.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
	          j.tweens[c].run(1);
	        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
	      if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
	    }return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
	        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
	      }] }, tweener: function tweener(a, b) {
	      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
	        c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
	      }
	    }, prefilters: [fb], prefilter: function prefilter(a, b) {
	      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
	    } }), r.speed = function (a, b, c) {
	    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
	      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
	    }, e;
	  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = r.isEmptyObject(a),
	          f = r.speed(b, c, d),
	          g = function g() {
	        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = r.timers,
	            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && ab.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }!b && c || r.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = V.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = r.timers,
	            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; b < g; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), r.each(["toggle", "show", "hide"], function (a, b) {
	    var c = r.fn[b];r.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
	    };
	  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    r.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), r.timers = [], r.fx.tick = function () {
	    var a,
	        b = 0,
	        c = r.timers;for (Za = r.now(); b < c.length; b++) {
	      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
	    }c.length || r.fx.stop(), Za = void 0;
	  }, r.fx.timer = function (a) {
	    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
	  }, r.fx.interval = 13, r.fx.start = function () {
	    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
	  }, r.fx.stop = function () {
	    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
	  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
	    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
	      var e = a.setTimeout(c, b);d.stop = function () {
	        a.clearTimeout(e);
	      };
	    });
	  }, function () {
	    var a = d.createElement("input"),
	        b = d.createElement("select"),
	        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	  }();var ib,
	      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
	      return S(this, r.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        r.removeAttr(this, a);
	      });
	    } }), r.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d = 0,
	          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
	        a.removeAttribute(c);
	      }
	    } }), ib = { set: function set(a, b, c) {
	      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
	      var e,
	          f,
	          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
	    };
	  });var kb = /^(?:input|select|textarea|button)$/i,
	      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
	      return S(this, r.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[r.propFix[a] || a];
	      });
	    } }), r.extend({ prop: function prop(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
	        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    }, set: function set(a) {
	      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    r.propFix[this.toLowerCase()] = this;
	  });function mb(a) {
	    var b = a.match(K) || [];return b.join(" ");
	  }function nb(a) {
	    return a.getAttribute && a.getAttribute("class") || "";
	  }r.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).addClass(a.call(this, b, nb(this)));
	      });if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
	            g = 0;while (f = b[g++]) {
	              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
	            }h = mb(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).removeClass(a.call(this, b, nb(this)));
	      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
	            g = 0;while (f = b[g++]) {
	              while (d.indexOf(" " + f + " ") > -1) {
	                d = d.replace(" " + f + " ", " ");
	              }
	            }h = mb(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
	        r(this).toggleClass(a.call(this, c, nb(this), b), b);
	      }) : this.each(function () {
	        var b, d, e, f;if ("string" === c) {
	          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
	      });
	    }, hasClass: function hasClass(a) {
	      var b,
	          c,
	          d = 0;b = " " + a + " ";while (c = this[d++]) {
	        if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
	      }return !1;
	    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
	      }
	    } }), r.extend({ valHooks: { option: { get: function get(a) {
	          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
	        } }, select: { get: function get(a) {
	          var b,
	              c,
	              d,
	              e = a.options,
	              f = a.selectedIndex,
	              g = "select-one" === a.type,
	              h = g ? null : [],
	              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
	            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
	              if (b = r(c).val(), g) return b;h.push(b);
	            }
	          }return h;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = r.makeArray(b),
	              g = e.length;while (g--) {
	            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
	          }return c || (a.selectedIndex = -1), f;
	        } } } }), r.each(["radio", "checkbox"], function () {
	    r.valHooks[this] = { set: function set(a, b) {
	        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
	      } }, o.checkOn || (r.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
	      var g,
	          h,
	          i,
	          j,
	          k,
	          m,
	          n,
	          o = [e || d],
	          p = l.call(b, "type") ? b.type : b,
	          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
	        if (!f && !n.noBubble && !r.isWindow(e)) {
	          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
	            o.push(h), i = h;
	          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
	        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
	          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
	        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
	      }
	    }, simulate: function simulate(a, b, c) {
	      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
	    } }), r.fn.extend({ trigger: function trigger(a, b) {
	      return this.each(function () {
	        r.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
	    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
	    r.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), r.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      r.event.simulate(b, a.target, r.event.fix(a));
	    };r.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
	      } };
	  });var qb = a.location,
	      rb = r.now(),
	      sb = /\?/;r.parseXML = function (b) {
	    var c;if (!b || "string" != typeof b) return null;try {
	      c = new a.DOMParser().parseFromString(b, "text/xml");
	    } catch (d) {
	      c = void 0;
	    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	  };var tb = /\[\]$/,
	      ub = /\r?\n/g,
	      vb = /^(?:submit|button|image|reset|file)$/i,
	      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
	    var e;if (r.isArray(b)) r.each(b, function (b, e) {
	      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
	      xb(a + "[" + e + "]", b[e], c, d);
	    }
	  }r.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
	    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      xb(c, a[c], b, e);
	    }return d.join("&");
	  }, r.fn.extend({ serialize: function serialize() {
	      return r.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
	      }).map(function (a, b) {
	        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
	          return { name: b.name, value: a.replace(ub, "\r\n") };
	        }) : { name: b.name, value: c.replace(ub, "\r\n") };
	      }).get();
	    } });var yb = /%20/g,
	      zb = /#.*$/,
	      Ab = /([?&])_=[^&]*/,
	      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      Db = /^(?:GET|HEAD)$/,
	      Eb = /^\/\//,
	      Fb = {},
	      Gb = {},
	      Hb = "*/".concat("*"),
	      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
	        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function Kb(a, b, c, d) {
	    var e = {},
	        f = a === Gb;function g(h) {
	      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function Lb(a, b) {
	    var c,
	        d,
	        e = r.ajaxSettings.flatOptions || {};for (c in b) {
	      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    }return d && r.extend(!0, a, d), a;
	  }function Mb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (d) for (e in h) {
	      if (h[e] && h[e].test(d)) {
	        i.unshift(e);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }if (f) return f !== i[0] && i.unshift(f), c[f];
	  }function Nb(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
	    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o = r.ajaxSetup({}, c),
	          p = o.context || o,
	          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
	          s = r.Deferred(),
	          t = r.Callbacks("once memory"),
	          u = o.statusCode || {},
	          v = {},
	          w = {},
	          x = "canceled",
	          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (k) {
	            if (!h) {
	              h = {};while (b = Bb.exec(g)) {
	                h[b[1].toLowerCase()] = b[2];
	              }
	            }b = h[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return k ? g : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return null == k && (o.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
	            u[b] = [u[b], a[b]];
	          }return this;
	        }, abort: function abort(a) {
	          var b = a || x;return e && e.abort(b), A(0, b), this;
	        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
	        j = d.createElement("a");try {
	          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
	        } catch (z) {
	          o.crossDomain = !0;
	        }
	      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
	        y.setRequestHeader(m, o.headers[m]);
	      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
	        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
	          y.abort("timeout");
	        }, o.timeout));try {
	          k = !1, e.send(v, A);
	        } catch (z) {
	          if (k) throw z;A(-1, z);
	        }
	      } else A(-1, "No Transport");function A(b, c, d, h) {
	        var j,
	            m,
	            n,
	            v,
	            w,
	            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
	      }return y;
	    }, getJSON: function getJSON(a, b, c) {
	      return r.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return r.get(a, void 0, b, "script");
	    } }), r.each(["get", "post"], function (a, b) {
	    r[b] = function (a, c, d, e) {
	      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
	    };
	  }), r._evalUrl = function (a) {
	    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	  }, r.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) {
	          a = a.firstElementChild;
	        }return a;
	      }).append(this)), this;
	    }, wrapInner: function wrapInner(a) {
	      return r.isFunction(a) ? this.each(function (b) {
	        r(this).wrapInner(a.call(this, b));
	      }) : this.each(function () {
	        var b = r(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = r.isFunction(a);return this.each(function (c) {
	        r(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap(a) {
	      return this.parent(a).not("body").each(function () {
	        r(this).replaceWith(this.childNodes);
	      }), this;
	    } }), r.expr.pseudos.hidden = function (a) {
	    return !r.expr.pseudos.visible(a);
	  }, r.expr.pseudos.visible = function (a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	  }, r.ajaxSettings.xhr = function () {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  };var Ob = { 0: 200, 1223: 204 },
	      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
	    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
	        var g,
	            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
	          h[g] = b.xhrFields[g];
	        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
	          h.setRequestHeader(g, e[g]);
	        }_c = function c(a) {
	          return function () {
	            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
	          };
	        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
	          4 === h.readyState && a.setTimeout(function () {
	            _c && d();
	          });
	        }, _c = _c("abort");try {
	          h.send(b.hasContent && b.data || null);
	        } catch (i) {
	          if (_c) throw i;
	        }
	      }, abort: function abort() {
	        _c && _c();
	      } };
	  }), r.ajaxPrefilter(function (a) {
	    a.crossDomain && (a.contents.script = !1);
	  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
	        return r.globalEval(a), a;
	      } } }), r.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), r.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, _c2;return { send: function send(e, f) {
	          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
	            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
	          }), d.head.appendChild(b[0]);
	        }, abort: function abort() {
	          _c2 && _c2();
	        } };
	    }
	  });var Qb = [],
	      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
	    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || r.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script";
	  }), o.createHTMLDocument = function () {
	    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	  }(), r.parseHTML = function (a, b, c) {
	    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	  }, r.fn.load = function (a, b, c) {
	    var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
	    }).always(c && function (a, b) {
	      g.each(function () {
	        c.apply(this, f || [a.responseText, b, a]);
	      });
	    }), this;
	  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    r.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), r.expr.pseudos.animated = function (a) {
	    return r.grep(r.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };function Sb(a) {
	    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }r.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = r.css(a, "position"),
	          l = r(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, r.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        r.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d,
	          e,
	          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || qa;
	      });
	    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = "pageYOffset" === b;r.fn[a] = function (d) {
	      return S(this, function (a, d, e) {
	        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
	      }, a, d, arguments.length);
	    };
	  }), r.each(["top", "left"], function (a, b) {
	    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
	      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
	    });
	  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
	    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      r.fn[d] = function (e, f) {
	        var g = arguments.length && (c || "boolean" != typeof e),
	            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
	          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
	        }, b, g ? e : void 0, g);
	      };
	    });
	  }), r.fn.extend({ bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } }), r.parseJSON = JSON.parse, "function" == "function" && __webpack_require__(4) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return r;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb = a.jQuery,
	      Ub = a.$;return r.noConflict = function (b) {
	    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
	  }, b || (a.jQuery = a.$ = r), r;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.registerComponents = registerComponents;

	var _mainMenu = __webpack_require__(6);

	var _componentOverview = __webpack_require__(15);

	var _createComponent = __webpack_require__(40);

	var _editArticle = __webpack_require__(44);

	function registerComponents(appInstance) {
	    appInstance.registerComponent(_mainMenu.mainMenuComponent);
	    appInstance.registerComponent(_componentOverview.componentOverviewComponent);
	    appInstance.registerComponent(_createComponent.createComponentComponent);
	    appInstance.registerComponent(_editArticle.editArticleComponent);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mainMenuComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _noManure = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(7);
	var template = __webpack_require__(11);

	var mainMenu = function (_Component) {
	    _inherits(mainMenu, _Component);

	    function mainMenu() {
	        _classCallCheck(this, mainMenu);

	        var _this = _possibleConstructorReturn(this, (mainMenu.__proto__ || Object.getPrototypeOf(mainMenu)).call(this, "mainMenu"));

	        _this.template = template;
	        return _this;
	    }

	    _createClass(mainMenu, [{
	        key: "render",
	        value: function render() {
	            return _get(mainMenu.prototype.__proto__ || Object.getPrototypeOf(mainMenu.prototype), "render", this).call(this);
	        }
	    }, {
	        key: "addListeners",
	        value: function addListeners() {
	            var _this2 = this;

	            (0, _jquery2.default)("#showComponents").click(function () {
	                _this2.appInstance.renderComponent("componentOverview");
	            });
	        }
	    }]);

	    return mainMenu;
	}(_noManure.Component);

	var mainMenuComponent = exports.mainMenuComponent = new mainMenu();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./mainMenu.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./mainMenu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".main-menu-container {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    flex-direction: column;\n}\n\n.main-menu-container > h3 {\n    width: 100%;\n    margin-bottom: 10rem;\n}", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(12);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"main-menu-container\">");t.b("\n" + i);t.b("    <h3>Frtlzer</h3>");t.b("\n" + i);t.b("    <button type=\"button\" id=\"showComponents\">Components</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"main-menu-container\">\n    <h3>Frtlzer</h3>\n    <button type=\"button\" id=\"showComponents\">Components</button>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	// This file is for use with Node.js. See dist/ for browser files.

	var Hogan = __webpack_require__(13);
	Hogan.Template = __webpack_require__(14).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;

	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };

	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';

	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }

	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }

	      return isAllWhitespace;
	    }

	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();

	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }

	      seenTag = false;
	      lineStart = tokens.length;
	    }

	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');

	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];

	      return closeIndex + close.length - 1;
	    }

	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }

	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }

	    filterLine(seenTag, true);

	    return tokens;
	  }

	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }

	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }

	    return s.replace(/^\s*|\s*$/g, '');
	  }

	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }

	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;

	    tail = stack[stack.length - 1];

	    while (tokens.length > 0) {
	      token = tokens.shift();

	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }

	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }

	      instructions.push(token);
	    }

	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }

	    return instructions;
	  }

	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }

	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }

	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }

	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }

	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }

	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);

	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }

	    return this.makeTemplate(context, text, options);
	  }

	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }

	  Hogan.template = Hogan.Template;

	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }

	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }

	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }

	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }

	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }

	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },

	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },

	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },

	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },

	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },

	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },

	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },

	    '{': tripleStache,

	    '&': tripleStache
	  }

	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }

	  function write(s) {
	    return 't.b(' + s + ');';
	  }

	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }

	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }

	  Hogan.cache = {};

	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }

	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];

	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }

	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	var Hogan = {};

	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }

	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },

	    // variable escaping
	    v: hoganEscape,

	    // triple stache
	    t: coerceToString,

	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },

	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },

	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];

	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }

	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }

	      if (!template) {
	        return null;
	      }

	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;

	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;

	      return template;
	    },

	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }

	      return partial.ri(context, partials, indent);
	    },

	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];

	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }

	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },

	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;

	      if (isArray(val) && val.length === 0) {
	        return false;
	      }

	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }

	      pass = !!val;

	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }

	      return pass;
	    },

	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;

	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }

	      if (returnFound && !val) {
	        return false;
	      }

	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }

	      return val;
	    },

	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;

	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }

	      if (!found) {
	        return (returnFound) ? false : "";
	      }

	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }

	      return val;
	    },

	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;

	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;

	      return false;
	    },

	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },

	    // template result buffering
	    b: function(s) { this.buf += s; },

	    fl: function() { var r = this.buf; this.buf = ''; return r; },

	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);

	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }

	      return result;
	    },

	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);

	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }

	      return result;
	    },

	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }

	  };

	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;

	    if (scope && typeof scope == 'object') {

	      if (scope[key] !== undefined) {
	        val = scope[key];

	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }

	    return val;
	  }

	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';

	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }

	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }

	    return partial;
	  }

	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }

	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }

	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };

	})( true ? exports : Hogan);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.componentOverviewComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _noManure = __webpack_require__(1);

	var _renderers = __webpack_require__(16);

	var _helper = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(37);
	var template = __webpack_require__(39);

	var componentOverview = function (_Component) {
	    _inherits(componentOverview, _Component);

	    function componentOverview() {
	        _classCallCheck(this, componentOverview);

	        var _this = _possibleConstructorReturn(this, (componentOverview.__proto__ || Object.getPrototypeOf(componentOverview)).call(this, "componentOverview"));

	        _this.template = template;
	        return _this;
	    }

	    _createClass(componentOverview, [{
	        key: "getArticleForComponent",
	        value: function getArticleForComponent(componentName) {
	            var article = this.articles.find(function (arti) {
	                return arti.componentName === componentName;
	            });
	            return article;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return new Promise(function (resolve) {
	                _this2.confPath = app.getPath("documents") + "/frtlzer/wfs/configs/";
	                var componentData = fs.readFileSync(_this2.confPath + "components.json", 'utf-8');
	                var articleData = fs.readFileSync(_this2.confPath + "articles.json", 'utf-8');
	                _this2.articles = JSON.parse(articleData).articles;
	                _this2.components = JSON.parse(componentData).components;
	                _this2.data = { "components": [] };
	                for (var i = 0; i < _this2.components.length; i++) {
	                    _this2.data.components.push(_this2.components[i]);
	                    var article = _this2.getArticleForComponent(_this2.components[i].componentName);
	                    console.log(article);
	                    if (article) {
	                        _this2.data.components[i].title = article.title;
	                    } else {
	                        _this2.data.components[i].title = _this2.components[i].componentName;
	                    }
	                    _this2.data.components[i].isBlog = false;
	                    if (_this2.components[i].template === "blogEntry") {
	                        _this2.data.components[i].isBlog = true;
	                    }
	                }
	                resolve(_get(componentOverview.prototype.__proto__ || Object.getPrototypeOf(componentOverview.prototype), "render", _this2).call(_this2));
	            });
	        }
	    }, {
	        key: "addListeners",
	        value: function addListeners() {
	            var _this3 = this;

	            (0, _jquery2.default)(".delete").click(function (e) {
	                //remove from components and save to file
	                var componentIndex = _this3.components.findIndex(function (comp) {
	                    return comp.componentName === (0, _jquery2.default)(e.currentTarget).parent().attr("id");
	                });
	                var deletedComp = _this3.components.splice(componentIndex, 1);
	                var articleIndex = _this3.articles.findIndex(function (arti) {
	                    return arti.componentName === (0, _jquery2.default)(e.currentTarget).parent().attr("id");
	                });
	                _this3.articles.splice(articleIndex, 1);
	                fs.writeFile(_this3.confPath + "components.json", JSON.stringify({ "components": _this3.components }), function (err) {
	                    fs.writeFile(_this3.confPath + "articles.json", JSON.stringify({ "articles": _this3.articles }), function (err) {
	                        fs.rmdir(app.getPath("documents") + "/frtlzer/wfs/src/components/" + deletedComp[0].componentName, function (err) {
	                            console.log(err);
	                            (0, _helper.deleteRoute)(deletedComp).then(function () {
	                                (0, _renderers.renderAllAndPush)("delete component " + deletedComp[0].componentName).then(function () {
	                                    _this3.appInstance.renderComponent("componentOverview");
	                                });
	                            });
	                        });
	                    });
	                });
	            });
	            (0, _jquery2.default)(".edit").click(function (e) {
	                //find in components and render editArticle
	                var component = _this3.components.find(function (comp) {
	                    return comp.componentName === (0, _jquery2.default)(e.currentTarget).parent().attr("id");
	                });
	                var props = { "componentName": component.componentName };
	                _this3.appInstance.renderComponent("editArticle", props);
	            });
	            (0, _jquery2.default)("#newComponent").click(function () {
	                _this3.appInstance.renderComponent("createComponent");
	            });
	        }
	    }]);

	    return componentOverview;
	}(_noManure.Component);

	var componentOverviewComponent = exports.componentOverviewComponent = new componentOverview();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.renderAllAndPush = renderAllAndPush;
	exports.renderComponents = renderComponents;
	exports.renderBlogFiles = renderBlogFiles;
	var Mustache = __webpack_require__(17);
	var projectPath = app.getPath("documents") + "/frtlzer/wfs/";
	var simpleGit = __webpack_require__(18)(app.getPath("documents") + "/frtlzer/wfs/");

	function renderAllAndPush(pushMessage) {
	    return new Promise(function (resolve) {
	        renderComponents().then(function () {
	            renderBlogFiles().then(function () {
	                simpleGit.add("./*").commit(pushMessage).push("origin", "develop");
	                resolve();
	            });
	        });
	    });
	}

	function renderComponents() {
	    return new Promise(function (resolve) {
	        renderRegistrations().then(function () {
	            renderRoutes().then(function () {
	                resolve();
	            });
	        });
	    });
	}

	function renderRegistrations() {
	    return new Promise(function (resolve) {
	        console.log("rendering component registrations");
	        fs.readFile(projectPath + "configs/components.json", 'utf-8', function (err, data) {
	            var componentData = JSON.parse(data);
	            var componentsTemplate = "{{#components}}\nimport { {{componentName}}Component } from \"./components/{{componentName}}/{{componentName}}\";\n{{/components}}\nexport function registerComponents(appInstance){\n    {{#components}}\n    appInstance.registerComponent({{componentName}}Component);\n    {{/components}}\n}";
	            var components = Mustache.render(componentsTemplate, componentData);
	            fs.writeFile(projectPath + "src/appManager.js", components, function () {
	                resolve();
	            });
	        });
	    });
	}

	function renderRoutes() {
	    return new Promise(function (resolve) {
	        console.log("rendering routes");
	        fs.readFile(projectPath + "configs/routes.json", 'utf-8', function (err, data) {
	            var routesData = JSON.parse(data);
	            console.log(routesData);
	            var routePartial = "{ \"name\": \"{{name}}\", \"path\": \"{{{path}}}\", \"children\":[\n    {{#children}}\n    {{> routePartial}}\n    {{/children}}\n] },";
	            var routesTemplate = "export const routes = [\n    {{#routes}}\n    {{> routePartial}}\n    {{/routes}}\n]";
	            var routes = Mustache.render(routesTemplate, routesData, { "routePartial": routePartial });
	            console.log(routes);
	            fs.writeFile(projectPath + "src/routes.js", routes, function () {
	                resolve();
	            });
	        });
	    });
	}

	function renderBlogFiles() {
	    return new Promise(function (resolve) {
	        fs.readFile(projectPath + "configs/articles.json", 'utf-8', function (err, data) {
	            var articles = JSON.parse(data);
	            renderArticles(articles).then(function () {
	                renderBlogHtml(articles.articles, 0).then(function () {
	                    resolve();
	                });
	            });
	        });
	    });
	}

	var blogHtmlTemplate = "<div class=\"blog-container\">\n<div class=\"blog-header\">\n    <div class=\"header-nav\">\n        <h3 class=\"nav-button\" id=\"home\">Heim</h3>\n        <h3 class=\"nav-button\">A</h3>\n        <h3 class=\"nav-button\">B</h3>\n        <h3 class=\"nav-button\">\xDCber</h3>\n    </div>\n    <div class=\"blog-logo\">\n        <h2>K</h2>\n    </div>\n</div>\n<div class=\"blog-content\">\n    <h3 class=\"date\">{{date}}</h3>\n    <h1 class=\"content-title\">{{title}}</h1>\n    <div class=\"blog-text\">\n        {{{text}}}\n    </div>\n</div>\n<div class=\"blog-next\">\n</div>\n</div>";

	function renderBlogHtml(articles, index) {
	    return new Promise(function (resolve) {
	        console.log("rendering blog article: " + articles[index].title);
	        var article = articles[index];
	        var articleData = fs.readFileSync(projectPath + "src/components/" + article.componentName + "/" + article.componentName + ".json");
	        var blogHtml = Mustache.render(blogHtmlTemplate, JSON.parse(articleData));
	        fs.writeFile(projectPath + "src/components/" + article.componentName + "/" + article.componentName + ".html", blogHtml, function (err) {
	            if (index == articles.length - 1) {
	                resolve();
	            } else {
	                resolve(renderBlogHtml(articles, index + 1));
	            }
	        });
	    });
	}

	function renderArticles(articles) {
	    return new Promise(function (resolve) {
	        console.log("rendering blog articles");
	        var articlesTemplate = "export const articles = {\n    \"articles\": [\n        {{#articles}}\n        { \"componentName\": \"{{componentName}}\", \"componentLink\": \"{{componentLink}}\",  \"title\": \"{{title}}\", \"category\": \"{{category}}\", \"published\": {{published}} },\n        {{/articles}}\n    ]\n}";
	        var articlesText = Mustache.render(articlesTemplate, articles);
	        fs.writeFile(projectPath + "src/articles.js", articlesText, function (err) {
	            resolve();
	        });
	    });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.3.0';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	  return mustache;
	}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	var Git = __webpack_require__(19);

	var ChildProcess = __webpack_require__(31);
	var Buffer = __webpack_require__(32).Buffer;
	var exists = __webpack_require__(33);

	module.exports = function (baseDir) {

	    if (baseDir && !exists(baseDir, exists.FOLDER)) {
	        throw new Error("Cannot use simple-git on a directory that does not exist.");
	    }

	    return new Git(baseDir || process.cwd(), ChildProcess, Buffer);
	};



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	(function () {

	   /**
	    * Git handling for node. All public functions can be chained and all `then` handlers are optional.
	    *
	    * @param {string} baseDir base directory for all processes to run
	    *
	    * @param {Object} ChildProcess The ChildProcess module
	    * @param {Function} Buffer The Buffer implementation to use
	    *
	    * @constructor
	    */
	   function Git (baseDir, ChildProcess, Buffer) {
	      this._baseDir = baseDir;
	      this._runCache = [];

	      this.ChildProcess = ChildProcess;
	      this.Buffer = Buffer;
	   }

	   /**
	    * @type {string} The command to use to reference the git binary
	    */
	   Git.prototype._command = 'git';

	   /**
	    * @type {Function} An optional handler to use when a child process is created
	    */
	   Git.prototype._outputHandler = null;

	   /**
	    * @type {boolean} Property showing whether logging will be silenced - defaults to true in a production environment
	    */
	   Git.prototype._silentLogging = /prod/.test(process.env.NODE_ENV);

	   /**
	    * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
	    * the system path, or a fully qualified path to the executable.
	    *
	    * @param {string} command
	    * @returns {Git}
	    */
	   Git.prototype.customBinary = function (command) {
	      this._command = command;
	      return this;
	   };

	   /**
	    * Sets the working directory of the subsequent commands.
	    *
	    * @param {string} workingDirectory
	    * @param {Function} [then]
	    * @returns {Git}
	    */
	   Git.prototype.cwd = function (workingDirectory, then) {
	      var git = this;
	      var next = Git.trailingFunctionArgument(arguments);

	      return this.then(function () {
	         git._baseDir = workingDirectory;
	         next && next(null, workingDirectory);
	      });
	   };

	   /**
	    * Sets a handler function to be called whenever a new child process is created, the handler function will be called
	    * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
	    *
	    * @example
	    * require('simple-git')
	    *    .outputHandler(function (command, stdout, stderr) {
	    *       stdout.pipe(process.stdout);
	    *    })
	    *    .checkout('https://github.com/user/repo.git');
	    *
	    * @see http://nodejs.org/api/child_process.html#child_process_class_childprocess
	    * @see http://nodejs.org/api/stream.html#stream_class_stream_readable
	    * @param {Function} outputHandler
	    * @returns {Git}
	    */
	   Git.prototype.outputHandler = function (outputHandler) {
	      this._outputHandler = outputHandler;
	      return this;
	   };

	   /**
	    * Initialize a git repo
	    *
	    * @param {Boolean} [bare=false]
	    * @param {Function} [then]
	    */
	   Git.prototype.init = function (bare, then) {
	      var commands = ['init'];
	      var next = Git.trailingFunctionArgument(arguments);

	      if (bare === true) {
	         commands.push('--bare');
	      }

	      return this._run(commands, function (err) {
	         next && next(err);
	      });
	   };

	   /**
	    * Check the status of the local repo
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.status = function (then) {
	      return this._run(
	         ['status', '--porcelain', '-b'],
	         Git._responseHandler(then, 'StatusSummary')
	      );
	   };

	   /**
	    * List the stash(s) of the local repo
	    *
	    * @param {Object|Array} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.stashList = function (options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);
	      var opt = (handler === then ? options : null) || {};

	      var splitter = opt.splitter || ';';
	      var command = ["stash", "list", "--pretty=format:%H %ai %s%d %aN %ae".replace(/\s+/g, splitter)];
	      if (Array.isArray(opt)) {
	         command = command.concat(opt);
	      }

	      return this._run(command,
	         Git._responseHandler(handler, 'ListLogSummary', splitter)
	      );
	   };

	   /**
	    * Stash the local repo
	    *
	    * @param {Object|Array} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.stash = function (options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);
	      var command = ["stash"];

	      if (Array.isArray(options)) {
	         command = command.concat(options);
	      }
	      else {
	         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && data);
	      });
	   };

	   /**
	    * Clone a git repo
	    *
	    * @param {string} repoPath
	    * @param {string} localPath
	    * @param {String[]} [options] Optional array of options to pass through to the clone command
	    * @param {Function} [then]
	    */
	   Git.prototype.clone = function (repoPath, localPath, options, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var command = ['clone'];
	      if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }
	      command.push(repoPath, localPath);

	      return this._run(command, function (err, data) {
	         next && next(err, data);
	      });
	   };

	   /**
	    * Mirror a git repo
	    *
	    * @param {string} repoPath
	    * @param {string} localPath
	    * @param {Function} [then]
	    */
	   Git.prototype.mirror = function (repoPath, localPath, then) {
	      return this.clone(repoPath, localPath, ['--mirror'], then);
	   };

	   /**
	    * Internally uses pull and tags to get the list of tags then checks out the latest tag.
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.checkoutLatestTag = function (then) {
	      var git = this;
	      return this.pull().tags(function (err, tags) {
	         git.checkout(tags.latest, then);
	      });
	   };

	   /**
	    * Adds one or more files to source control
	    *
	    * @param {string|string[]} files
	    * @param {Function} [then]
	    */
	   Git.prototype.add = function (files, then) {
	      return this._run(['add'].concat(files), function (err, data) {
	         then && then(err);
	      });
	   };

	   /**
	    * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
	    * files will be committed.
	    *
	    * @param {string|string[]} message
	    * @param {string|string[]} [files]
	    * @param {Object} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.commit = function (message, files, options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);

	      var command = ['commit'];

	      [].concat(message).forEach(function (message) {
	         command.push('-m', message);
	      });

	      [].push.apply(command,  [].concat(typeof files === "string" || Array.isArray(files) ? files : []));

	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      return this._run(
	         command,
	         Git._responseHandler(handler, 'CommitSummary')
	      );
	   };

	   /**
	    * Gets a function to be used for logging.
	    *
	    * @param {string} level
	    * @param {string} [message]
	    *
	    * @returns {Function}
	    * @private
	    */
	   Git.prototype._getLog = function (level, message) {
	      var log = this._silentLogging ? function () {
	      } : console[level].bind(console);
	      if (arguments.length > 1) {
	         log(message);
	      }
	      return log;
	   };

	   /**
	    * Pull the updated contents of the current repo
	    *
	    * @param {string} [remote] When supplied must also include the branch
	    * @param {string} [branch] When supplied must also include the remote
	    * @param {Object} [options] Optionally include set of options to merge into the command
	    * @param {Function} [then]
	    */
	   Git.prototype.pull = function (remote, branch, options, then) {
	      var command = ["pull"];
	      var handler = Git.trailingFunctionArgument(arguments);

	      if (typeof remote === 'string' && typeof branch === 'string') {
	         command.push(remote, branch);
	      }

	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      return this._run(command, Git._responseHandler(handler, 'PullSummary'));
	   };

	   /**
	    * Fetch the updated contents of the current repo.
	    *
	    * @example
	    *   .fetch('upstream', 'master') // fetches from master on remote named upstream
	    *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
	    *
	    * @param {string} [remote]
	    * @param {string} [branch]
	    * @param {Function} [then]
	    */
	   Git.prototype.fetch = function (remote, branch, then) {
	      var command = ["fetch"];
	      var next = Git.trailingFunctionArgument(arguments);
	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      if (typeof remote === 'string' && typeof branch === 'string') {
	         command.push(remote, branch);
	      }

	      if (Array.isArray(remote)) {
	         command = command.concat(remote);
	      }

	      return this._run(
	         command,
	         Git._responseHandler(next, 'FetchSummary'),
	         {
	            concatStdErr: true
	         }
	      );
	   };

	   /**
	    * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
	    * a production environment.
	    *
	    * @param {boolean} silence
	    * @returns {Git}
	    */
	   Git.prototype.silent = function (silence) {
	      this._silentLogging = !!silence;
	      return this;
	   };

	   /**
	    * List all tags
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.tags = function (then) {
	      return this.tag(['-l'], Git._responseHandler(then, 'TagList'));
	   };

	   /**
	    * Rebases the current working copy. Options can be supplied either as an array of string parameters
	    * to be sent to the `git rebase` command, or a standard options object.
	    *
	    * @param {Object|String[]} [options]
	    * @param {Function} [then]
	    * @returns {Git}
	    */
	   Git.prototype.rebase = function (options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);
	      var command = ['rebase'];
	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && data);
	      })
	   };

	   /**
	    * Reset a repo
	    *
	    * @param {string|string[]} [mode=soft] Either an array of arguments supported by the 'git reset' command, or the
	    *                                        string value 'soft' or 'hard' to set the reset mode.
	    * @param {Function} [then]
	    */
	   Git.prototype.reset = function (mode, then) {
	      var command = ['reset'];
	      var next = Git.trailingFunctionArgument(arguments);
	      if (next === mode || typeof mode === 'string' || !mode) {
	         command.push('--' + (mode === 'hard' ? mode : 'soft'));
	      }
	      else if (Array.isArray(mode)) {
	         command.push.apply(command, mode);
	      }

	      return this._run(command, function (err) {
	         next && next(err || null);
	      });
	   };

	   /**
	    * Revert one or more commits in the local working copy
	    *
	    * @param {string} commit The commit to revert. Can be any hash, offset (eg: `HEAD~2`) or range (eg: `master~5..master~2`)
	    * @param {Object} [options] Optional options object
	    * @param {Function} [then]
	    */
	   Git.prototype.revert = function (commit, options, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var command = ['revert'];

	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      if (typeof commit !== 'string') {
	         return this.then(function () {
	            next && next(new TypeError("Commit must be a string"));
	         });
	      }

	      command.push(commit);
	      return this._run(command, function (err) {
	         next && next(err || null);
	      });
	   };

	   /**
	    * Add a lightweight tag to the head of the current branch
	    *
	    * @param {string} name
	    * @param {Function} [then]
	    */
	   Git.prototype.addTag = function (name, then) {
	      if (typeof name !== "string") {
	         return this.then(function () {
	            then && then(new TypeError("Git.addTag requires a tag name"));
	         });
	      }

	      return this.tag([name], then);
	   };

	   /**
	    * Add an annotated tag to the head of the current branch
	    *
	    * @param {string} tagName
	    * @param {string} tagMessage
	    * @param {Function} [then]
	    */
	   Git.prototype.addAnnotatedTag = function (tagName, tagMessage, then) {
	      return this.tag(['-a', '-m', tagMessage, tagName], function (err) {
	         then && then(err);
	      });
	   };

	   /**
	    * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
	    * by supplying either a string or array of strings as the `what` parameter.
	    *
	    * @param {string|string[]} what One or more commands to pass to `git checkout`
	    * @param {Function} [then]
	    */
	   Git.prototype.checkout = function (what, then) {
	      var command = ['checkout'];
	      command = command.concat(what);

	      return this._run(command, function (err, data) {
	         then && then(err, !err && this._parseCheckout(data));
	      });
	   };

	   /**
	    * Check out a remote branch
	    *
	    * @param {string} branchName name of branch
	    * @param {string} startPoint (e.g origin/development)
	    * @param {Function} [then]
	    */
	   Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
	      return this.checkout(['-b', branchName, startPoint], then);
	   };

	   /**
	    * Check out a local branch
	    *
	    * @param {string} branchName of branch
	    * @param {Function} [then]
	    */
	   Git.prototype.checkoutLocalBranch = function (branchName, then) {
	      return this.checkout(['-b', branchName], then);
	   };

	   /**
	    * Delete a local branch
	    *
	    * @param {string} branchName name of branch
	    * @param {Function} [then]
	    */
	   Git.prototype.deleteLocalBranch = function (branchName, then) {
	      return this.branch(['-d', branchName], then);
	   };

	   /**
	    * List all branches
	    *
	    * @param {Object} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.branch = function (options, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var command = ['branch'];
	      if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }

	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
	      if (!arguments.length || next === options) {
	         command.push('-a', '-v');
	      }

	      return this._run(command, command.indexOf('-d') > 0
	         ? Git._responseHandler(next, 'BranchDeleteSummary', false)
	         : Git._responseHandler(next, 'BranchSummary'));
	   };

	   /**
	    * Return list of local branches
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.branchLocal = function (then) {
	      return this.branch(['-v'], then);
	   };

	   /**
	    * Add config to local git instance
	    *
	    * @param {string} key configuration key (e.g user.name)
	    * @param {string} value for the given key (e.g your name)
	    * @param {Function} [then]
	    */
	   Git.prototype.addConfig = function (key, value, then) {
	      return this._run(['config', '--local', key, value], function (err, data) {
	         then && then(err, !err && data);
	      });
	   };

	   /**
	    * Executes any command against the git binary.
	    *
	    * @param {string[]|Object} commands
	    * @param {Function} [then]
	    *
	    * @returns {Git}
	    */
	   Git.prototype.raw = function (commands, then) {
	      var command = [];
	      if (Array.isArray(commands)) {
	         command = commands.slice(0);
	      }
	      else {
	         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
	      }

	      var next = Git.trailingFunctionArgument(arguments);

	      if (!command.length) {
	         return this.then(function () {
	            next && next(new Error('Raw: must supply one or more command to execute'), null);
	         });
	      }

	      return this._run(command, function (err, data) {
	         next && next(err, !err && data || null);
	      });
	   };

	   /**
	    * Add a submodule
	    *
	    * @param {string} repo
	    * @param {string} path
	    * @param {Function} [then]
	    */
	   Git.prototype.submoduleAdd = function (repo, path, then) {
	      return this._run(['submodule', 'add', repo, path], function (err) {
	         then && then(err);
	      });
	   };

	   /**
	    * Update submodules
	    *
	    * @param {string[]} [args]
	    * @param {Function} [then]
	    */
	   Git.prototype.submoduleUpdate = function (args, then) {
	      if (typeof args === 'string') {
	        this._getLog('warn', 'Git#submoduleUpdate: args should be supplied as an array of individual arguments');
	      }

	      var next = Git.trailingFunctionArgument(arguments);
	      var command = (args !== next) ? args : [];

	      return this.subModule(['update'].concat(command), function (err, args) {
	         next && next(err, args);
	      });
	   };

	   /**
	    * Initialize submodules
	    *
	    * @param {string[]} [args]
	    * @param {Function} [then]
	   */
	   Git.prototype.submoduleInit = function (args, then){
	      if (typeof args === 'string') {
	        this._getLog('warn', 'Git#submoduleInit: args should be supplied as an array of individual arguments');
	      }

	      var next = Git.trailingFunctionArgument(arguments);
	      var command = (args !== next) ? args : [];

	      return this.subModule(['init'].concat(command), function (err, args) {
	         next && next(err, args);
	      });
	   };

	   /**
	    * Call any `git submodule` function with arguments passed as an array of strings.
	    *
	    * @param {string[]} options
	    * @param {Function} [then]
	    */
	   Git.prototype.subModule = function (options, then) {
	      if (!Array.isArray(options)) {
	         return this.then(function () {
	            then && then(new TypeError("Git.subModule requires an array of arguments"));
	         });
	      }

	      if (options[0] !== 'submodule') {
	         options.unshift('submodule');
	      }

	      return this._run(options, function (err, data) {
	         then && then(err || null, err ? null : data);
	      });
	   };

	   /**
	    * List remote
	    *
	    * @param {string[]} [args]
	    * @param {Function} [then]
	    */
	   Git.prototype.listRemote = function (args, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var data = next === args || args === undefined ? [] : args;

	      if (typeof data === 'string') {
	         this._getLog('warn', 'Git#listRemote: args should be supplied as an array of individual arguments');
	      }

	      return this._run(['ls-remote'].concat(data), function (err, data) {
	         next && next(err, data);
	      });
	   };

	   /**
	    * Adds a remote to the list of remotes.
	    *
	    * @param {string} remoteName Name of the repository - eg "upstream"
	    * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
	    * @param {Function} [then]
	    * @returns {*}
	    */
	   Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
	      return this._run(['remote', 'add', remoteName, remoteRepo], function (err) {
	         then && then(err);
	      });
	   };

	   /**
	    * Removes an entry from the list of remotes.
	    *
	    * @param {string} remoteName Name of the repository - eg "upstream"
	    * @param {Function} [then]
	    * @returns {*}
	    */
	   Git.prototype.removeRemote = function (remoteName, then) {
	      return this._run(['remote', 'remove', remoteName], function (err) {
	         then && then(err);
	      });
	   };

	   /**
	    * Gets the currently available remotes, setting the optional verbose argument to true includes additional
	    * detail on the remotes themselves.
	    *
	    * @param {boolean} [verbose=false]
	    * @param {Function} [then]
	    */
	   Git.prototype.getRemotes = function (verbose, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var args = verbose === true ? ['-v'] : [];

	      return this.remote(args, function (err, data) {
	         next && next(err, !err && function () {
	               return data.trim().split('\n').reduce(function (remotes, remote) {
	                  var detail = remote.trim().split(/\s+/);
	                  var name = detail.shift();

	                  if (!remotes[name]) {
	                     remotes[name] = remotes[remotes.length] = {
	                        name: name,
	                        refs: {}
	                     };
	                  }

	                  if (detail.length) {
	                     remotes[name].refs[detail.pop().replace(/[^a-z]/g, '')] = detail.pop();
	                  }

	                  return remotes;
	               }, []).slice(0);
	            }());
	      });
	   };

	   /**
	    * Call any `git remote` function with arguments passed as an array of strings.
	    *
	    * @param {string[]} options
	    * @param {Function} [then]
	    */
	   Git.prototype.remote = function (options, then) {
	      if (!Array.isArray(options)) {
	         return this.then(function () {
	            then && then(new TypeError("Git.remote requires an array of arguments"));
	         });
	      }

	      if (options[0] !== 'remote') {
	         options.unshift('remote');
	      }

	      return this._run(options, function (err, data) {
	         then && then(err || null, err ? null : data);
	      });
	   };

	   /**
	    * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
	    * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
	    *
	    * @param {string} from
	    * @param {string} to
	    * @param {Object} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.mergeFromTo = function (from, to, options, then) {
	      var commands = [
	         from,
	         to
	      ];
	      var callback = Git.trailingFunctionArgument(arguments);

	      if (Array.isArray(options)) {
	         commands = commands.concat(options);
	      }

	      return this.merge(commands, callback);
	   };

	   Git.prototype.merge = function (options, then) {
	      if (!Array.isArray(options)) {
	         return this.then(function () {
	            then && then(new TypeError("Git.merge requires an array of arguments"));
	         });
	      }

	      if (options[0] !== 'merge') {
	         options.unshift('merge');
	      }

	      return this._run(options, function (err, data) {
	         then && then(err || null, err ? null : data);
	      });
	   };

	   /**
	    * Call any `git tag` function with arguments passed as an array of strings.
	    *
	    * @param {string[]} options
	    * @param {Function} [then]
	    */
	   Git.prototype.tag = function (options, then) {
	      if (!Array.isArray(options)) {
	         return this.then(function () {
	            then && then(new TypeError("Git.tag requires an array of arguments"));
	         });
	      }

	      if (options[0] !== 'tag') {
	         options.unshift('tag');
	      }

	      return this._run(options, function (err, data) {
	         then && then(err || null, err ? null : data);
	      });
	   };

	   /**
	    * Updates repository server info
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.updateServerInfo =  function (then) {
	       return this._run(["update-server-info"], function (err, data) {
	           then && then(err, !err && data);
	       });
	   };

	   /**
	    * Pushes the current committed changes to a remote, optionally specify the names of the remote and branch to use
	    * when pushing. Supply multiple options as an array of strings in the first argument - see examples below.
	    *
	    * @param {string|string[]} [remote]
	    * @param {string} [branch]
	    * @param {Function} [then]
	    */
	   Git.prototype.push = function (remote, branch, then) {
	      var command = [];
	      var handler = Git.trailingFunctionArgument(arguments);

	      if (typeof remote === 'string' && typeof branch === 'string') {
	         command.push(remote, branch);
	      }

	      if (Array.isArray(remote)) {
	         command = command.concat(remote);
	      }

	      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

	      if (command[0] !== 'push') {
	         command.unshift('push');
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && data);
	      });
	   };

	   /**
	    * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
	    * default configured remote spec.
	    *
	    * @param {string} [remote]
	    * @param {Function} [then]
	    */
	   Git.prototype.pushTags = function (remote, then) {
	      var command = ['push'];
	      if (typeof remote === "string") {
	         command.push(remote);
	      }
	      command.push('--tags');

	      then = typeof arguments[arguments.length - 1] === "function" ? arguments[arguments.length - 1] : null;

	      return this._run(command, function (err, data) {
	         then && then(err, !err && data);
	      });
	   };

	   /**
	    * Removes the named files from source control.
	    *
	    * @param {string|string[]} files
	    * @param {Function} [then]
	    */
	   Git.prototype.rm = function (files, then) {
	      return this._rm(files, '-f', then);
	   };

	   /**
	    * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
	    * completely remove the files, use `rm`.
	    *
	    * @param {string|string[]} files
	    * @param {Function} [then]
	    */
	   Git.prototype.rmKeepLocal = function (files, then) {
	      return this._rm(files, '--cached', then);
	   };

	   /**
	    * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
	    * size, and type.
	    *
	    * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
	    *
	    * @param {string[]} [options]
	    * @param {Function} [then]
	    */
	  Git.prototype.catFile = function (options, then) {
	     var handler = Git.trailingFunctionArgument(arguments);
	     var command = ['cat-file'];

	     if (typeof options === 'string') {
	        throw new TypeError('Git#catFile: options must be supplied as an array of strings');
	     }
	     else if (Array.isArray(options)) {
	        command.push.apply(command, options);
	     }

	     return this._run(command, function (err, data) {
	        handler && handler(err, data);
	     });
	  };

	   /**
	    * Return repository changes.
	    *
	    * @param {string} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.diff = function (options, then) {
	      var command = ['diff'];

	      if (typeof options === 'string') {
	         command[0] += ' ' + options;
	         this._getLog('warn',
	            'Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
	      }
	      else if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }

	      if (typeof arguments[arguments.length - 1] === 'function') {
	         then = arguments[arguments.length - 1];
	      }

	      return this._run(command, function (err, data) {
	         then && then(err, data);
	      });
	   };

	   Git.prototype.diffSummary = function (options, then) {
	      var next = Git.trailingFunctionArgument(arguments);
	      var command = ['--stat'];

	      if (options && options !== next) {
	         command.push.apply(command, [].concat(options));
	      }

	      return this.diff(command, Git._responseHandler(next, 'DiffSummary'));
	   };

	   /**
	    * rev-parse.
	    *
	    * @param {string|string[]} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.revparse = function (options, then) {
	      var command = ['rev-parse'];

	      if (typeof options === 'string') {
	         command = command + ' ' + options;
	         this._getLog('warn',
	            'Git#revparse: supplying options as a single string is now deprecated, switch to an array of strings');
	      }
	      else if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }

	      if (typeof arguments[arguments.length - 1] === 'function') {
	         then = arguments[arguments.length - 1];
	      }

	      return this._run(command, function (err, data) {
	         then && then(err, data);
	      });
	   };

	   /**
	    * Show various types of objects, for example the file at a certain commit
	    *
	    * @param {string} [options]
	    * @param {Function} [then]
	    */
	   Git.prototype.show = function (options, then) {
	      var args = [].slice.call(arguments, 0);
	      var handler = typeof args[args.length - 1] === "function" ? args.pop() : null;
	      var command = ['show'];
	      if (typeof options === 'string') {
	         command = command + ' ' + options;
	         this._getLog('warn',
	            'Git#show: supplying options as a single string is now deprecated, switch to an array of strings');
	      }
	      else if (Array.isArray(options)) {
	         command.push.apply(command, options);
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && data);
	      });
	   };

	   /**
	    * @param {string} mode Required parameter "n" or "f"
	    * @param {Array} options
	    * @param {Function} [then]
	    */
	   Git.prototype.clean = function(mode, options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);

	      if(!/^[nf]$/.test(mode)) {
	         return this.then(function () {
	            handler && handler(new TypeError('Git clean mode parameter ("n" or "f") is required'));
	         });
	      }

	      var command = ['clean', '-' + mode];
	      if(Array.isArray(options)) {
	         command = command.concat(options);
	      }

	      if (command.indexOf('-i') > 0) {
	         return this.then(function () {
	            handler && handler(new TypeError('Git clean interactive mode is not supported'));
	         });
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && data);
	      });
	   };

	   /**
	    * Call a simple function
	    * @param {Function} [then]
	    */
	   Git.prototype.then = function (then) {
	      this._run([], function () {
	         typeof then === 'function' && then();
	      });
	      return this;
	   };

	   /**
	    * Show commit logs.
	    *
	    * @param {Object|string[]} [options]
	    * @param {string} [options.from] The first commit to include
	    * @param {string} [options.to] The most recent commit to include
	    * @param {string} [options.file] A single file to include in the result
	    *
	    * @param {Function} [then]
	    */
	   Git.prototype.log = function (options, then) {
	      var handler = Git.trailingFunctionArgument(arguments);
	      var opt = (handler === then ? options : null) || {};

	      var splitter = opt.splitter || ';';
	      var format = opt.format || {
	         hash: '%H',
	         date: '%ai',
	         message: '%s%d',
	         author_name: '%aN',
	         author_email: '%ae'
	      };

	      var fields = Object.keys(format);
	      var formatstr = fields.map(function(k) { return format[k]; }).join(splitter);
	      var command = ["log", "--pretty=format:" + formatstr + __webpack_require__(20).COMMIT_BOUNDARY];

	      if (Array.isArray(opt)) {
	         command = command.concat(opt);
	         opt = {};
	      }
	      else if (typeof arguments[0] === "string" || typeof arguments[1] === "string") {
	         this._getLog('warn',
	            'Git#log: supplying to or from as strings is now deprecated, switch to an options configuration object');
	         opt = {
	            from: arguments[0],
	            to: arguments[1]
	         };
	      }

	      if (opt.from && opt.to) {
	         command.push(opt.from + "..." + opt.to);
	      }

	      if (opt.file) {
	         command.push("--follow", options.file);
	      }

	      if (opt.n || opt['max-count']) {
	         command.push("--max-count=" + (opt.n || opt['max-count']));
	      }

	      'splitter n max-count file from to --pretty format'.split(' ').forEach(function (key) {
	         delete opt[key];
	      });

	      Git._appendOptions(command, opt);

	      return this._run(command, Git._responseHandler(handler, 'ListLogSummary', [splitter, fields]));
	   };

	   /**
	    * Check if a pathname or pathnames are excluded by .gitignore
	    *
	    * @param {string|string[]} pathnames
	    * @param {Function} [then]
	    */
	   Git.prototype.checkIgnore = function (pathnames, then) {
	      var handler = Git.trailingFunctionArgument(arguments);
	      var command = ["check-ignore"];

	      if (handler !== pathnames) {
	         command = command.concat(pathnames);
	      }

	      return this._run(command, function (err, data) {
	         handler && handler(err, !err && this._parseCheckIgnore(data));
	      });
	   };

	   Git.prototype._rm = function (_files, options, then) {
	      var files = [].concat(_files);
	      var args = ['rm', options];
	      args.push.apply(args, files);

	      return this._run(args, function (err) {
	         then && then(err);
	      });
	   };

	   Git.prototype._parseCheckout = function (checkout) {
	      // TODO
	   };

	   /**
	    * Parser for the `check-ignore` command - returns each
	    * @param {string} [files]
	    * @returns {string[]}
	    */
	   Git.prototype._parseCheckIgnore = function (files) {
	      return files.split(/\n/g).filter(Boolean).map(function (file) { return file.trim() });
	   };

	   /**
	    * Schedules the supplied command to be run, the command should not include the name of the git binary and should
	    * be an array of strings passed as the arguments to the git binary.
	    *
	    * @param {string[]} command
	    * @param {Function} then
	    * @param {Object} [opt]
	    *
	    * @returns {Git}
	    */
	   Git.prototype._run = function (command, then, opt) {
	      if (typeof command === "string") {
	         command = command.split(" ");
	      }
	      this._runCache.push([command, then, opt || {}]);
	      this._schedule();

	      return this;
	   };

	   Git.prototype._schedule = function () {
	      if (!this._childProcess && this._runCache.length) {
	         var Buffer = this.Buffer;
	         var task = this._runCache.shift();
	         var command = task[0];
	         var then = task[1];
	         var options = task[2];

	         var stdOut = [];
	         var stdErr = [];
	         var spawned = this.ChildProcess.spawn(this._command, command.slice(0), {
	            cwd: this._baseDir
	         });

	         spawned.stdout.on('data', function (buffer) {
	            stdOut.push(buffer);
	         });
	         spawned.stderr.on('data', function (buffer) {
	            stdErr.push(buffer);
	         });

	         spawned.on('error', function (err) {
	            stdErr.push(new Buffer(err.stack, 'ascii'));
	         });

	         spawned.on('close', function (exitCode, exitSignal) {
	            delete this._childProcess;

	            if (exitCode && stdErr.length) {
	               stdErr = Buffer.concat(stdErr).toString('utf-8');

	               this._getLog('error', stdErr);
	               this._runCache = [];
	               then.call(this, stdErr, null);
	            }
	            else {
	               if (options.concatStdErr) {
	                  [].push.apply(stdOut, stdErr);
	               }

	               then.call(this, null, Buffer.concat(stdOut).toString('utf-8'));
	            }

	            process.nextTick(this._schedule.bind(this));
	         }.bind(this));

	         this._childProcess = spawned;

	         if (this._outputHandler) {
	            this._outputHandler(command[0],
	               this._childProcess.stdout,
	               this._childProcess.stderr);
	         }
	      }
	   };

	   /**
	    * Given any number of arguments, returns the last argument if it is a function, otherwise returns null.
	    * @returns {Function|null}
	    */
	   Git.trailingFunctionArgument = function (args) {
	      var trailing = args[args.length - 1];
	      return (typeof trailing === "function") ? trailing : null;
	   };

	   /**
	    * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
	    * if there is one. When not found, the return value is null.
	    * @returns {Object|null}
	    */
	   Git.trailingOptionsArgument = function (args) {
	      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
	      return Object.prototype.toString.call(options) === '[object Object]' ? options : null;
	   };

	   /**
	    * Mutates the supplied command array by merging in properties in the options object. When the
	    * value of the item in the options object is a string it will be concatenated to the key as
	    * a single `name=value` item, otherwise just the name will be used.
	    *
	    * @param {string[]} command
	    * @param {Object} options
	    * @private
	    */
	   Git._appendOptions = function (command, options) {
	      if (options === null) {
	         return;
	      }

	      Object.keys(options).forEach(function (key) {
	         var value = options[key];
	         if (typeof value === 'string') {
	            command.push(key + '=' + value);
	         }
	         else {
	            command.push(key);
	         }
	      });
	   };

	   /**
	    * Given the type of response and the callback to receive the parsed response,
	    * uses the correct parser and calls back the callback.
	    *
	    * @param {Function} callback
	    * @param {string} type
	    * @param {Object[]} [args]
	    *
	    * @private
	    */
	   Git._responseHandler = function (callback, type, args) {
	      return function (error, data) {
	         if (typeof callback !== 'function') {
	            return;
	         }

	         if (error) {
	            callback(error, null);
	            return;
	         }

	         var handler = __webpack_require__(21)("./" + type);
	         var result = handler.parse.apply(handler, [data].concat(args === undefined ? [] : args));

	         callback(null, result);
	      };


	   };

	   module.exports = Git;

	}());


/***/ },
/* 20 */
/***/ function(module, exports) {

	
	module.exports = ListLogSummary;

	/**
	 * The ListLogSummary is returned as a response to getting `git().log()` or `git().stashList()`
	 *
	 * @constructor
	 */
	function ListLogSummary (all) {
	   this.all = all;
	   this.latest = all.length && all[0] || null;
	   this.total = all.length;
	}

	/**
	 * Detail for each of the log lines
	 * @type {ListLogLine[]}
	 */
	ListLogSummary.prototype.all = null;

	/**
	 * Most recent entry in the log
	 * @type {ListLogLine}
	 */
	ListLogSummary.prototype.latest = null;

	/**
	 * Number of items in the log
	 * @type {number}
	 */
	ListLogSummary.prototype.total = 0;

	function ListLogLine (line, fields) {
	   for (var k = 0; k < fields.length; k++) {
	      this[fields[k]] = line[k];
	   }
	}

	ListLogSummary.COMMIT_BOUNDARY = '------------------------ >8 ------------------------';

	ListLogSummary.parse = function (text, splitter, fields) {
	   fields = fields || ['hash', 'date', 'message', 'author_name', 'author_email'];
	   return new ListLogSummary(
	      text
	         .split(ListLogSummary.COMMIT_BOUNDARY + '\n')
	         .map(function (item) {
	            return item.replace(ListLogSummary.COMMIT_BOUNDARY, '')
	         })
	         .filter(Boolean)
	         .map(function (item) {
	            return new ListLogLine(item.trim().split(splitter), fields);
	         })
	   );
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./BranchDeleteSummary": 22,
		"./BranchDeleteSummary.js": 22,
		"./BranchSummary": 23,
		"./BranchSummary.js": 23,
		"./CommitSummary": 24,
		"./CommitSummary.js": 24,
		"./DiffSummary": 25,
		"./DiffSummary.js": 25,
		"./FetchSummary": 26,
		"./FetchSummary.js": 26,
		"./FileStatusSummary": 27,
		"./FileStatusSummary.js": 27,
		"./ListLogSummary": 20,
		"./ListLogSummary.js": 20,
		"./PullSummary": 28,
		"./PullSummary.js": 28,
		"./StatusSummary": 29,
		"./StatusSummary.js": 29,
		"./TagList": 30,
		"./TagList.js": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 21;


/***/ },
/* 22 */
/***/ function(module, exports) {

	
	module.exports = BranchDeletion;

	function BranchDeletion (branch, hash) {
	   this.branch = branch;
	   this.hash = hash;
	   this.success = hash !== null;
	}

	BranchDeletion.deleteSuccessRegex = /(\S+)\s+\(\S+\s([^\)]+)\)/;
	BranchDeletion.deleteErrorRegex = /^error[^']+'([^']+)'/;

	BranchDeletion.parse = function (data, asArray) {
	   var result;
	   var branchDeletions = data.trim().split('\n').map(function (line) {
	         if (result = BranchDeletion.deleteSuccessRegex.exec(line)) {
	            return new BranchDeletion(result[1], result[2]);
	         }
	         else if (result = BranchDeletion.deleteErrorRegex.exec(line)) {
	            return new BranchDeletion(result[1], null);
	         }
	      })
	      .filter(Boolean);

	   return asArray ? branchDeletions : branchDeletions.pop();
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	
	module.exports = BranchSummary;

	function BranchSummary () {
	   this.detached = false;
	   this.current = '';
	   this.all = [];
	   this.branches = {};
	}

	BranchSummary.prototype.push = function (current, detached, name, commit, label) {
	   if (current) {
	      this.detached = detached;
	      this.current = name;
	   }
	   this.all.push(name);
	   this.branches[name] = {
	      current: current,
	      name: name,
	      commit: commit,
	      label: label
	   };
	};

	BranchSummary.detachedRegex = /^(\*?\s+)\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/;
	BranchSummary.branchRegex = /^(\*?\s+)(\S+)\s+([a-z0-9]+)\s(.*)$/;

	BranchSummary.parse = function (commit) {
	   var branchSummary = new BranchSummary();

	   commit.split('\n')
	      .forEach(function (line) {
	         var detached = true;
	         var branch = BranchSummary.detachedRegex.exec(line);
	         if (!branch) {
	            detached = false;
	            branch = BranchSummary.branchRegex.exec(line);
	         }

	         if (branch) {
	            branchSummary.push(
	               branch[1].charAt(0) === '*',
	               detached,
	               branch[2],
	               branch[3],
	               branch[4]
	            );
	         }
	      });

	   return branchSummary;
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	
	module.exports = CommitSummary;

	function CommitSummary () {
	   this.branch = '';
	   this.commit = '';
	   this.summary = {
	      changes: 0,
	      insertions: 0,
	      deletions: 0
	   };
	}

	CommitSummary.prototype.setBranchFromCommit = function (commitData) {
	   if (commitData) {
	      this.branch = commitData[1];
	      this.commit = commitData[2];
	   }
	};

	CommitSummary.prototype.setSummaryFromCommit = function (commitData) {
	   if (this.branch && commitData) {
	      this.summary.changes = commitData[1] || 0;
	      this.summary.insertions = commitData[2] || 0;
	      this.summary.deletions = commitData[3] || 0;
	   }
	};

	CommitSummary.parse = function (commit) {
	   var lines = commit.trim().split('\n');

	   var commitSummary = new CommitSummary();
	   commitSummary.setBranchFromCommit(/\[([^\s]+) ([^\]]+)/.exec(lines.shift()));
	   commitSummary.setSummaryFromCommit(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)?(?:,\s*(\d+))?/g.exec(lines.shift()));

	   return commitSummary;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	
	module.exports = DiffSummary;

	/**
	 * The DiffSummary is returned as a response to getting `git().status()`
	 *
	 * @constructor
	 */
	function DiffSummary () {
	   this.files = [];
	   this.insertions = 0;
	   this.deletions = 0;
	}

	/**
	 * Number of lines added
	 * @type {number}
	 */
	DiffSummary.prototype.insertions = 0;

	/**
	 * Number of lines deleted
	 * @type {number}
	 */
	DiffSummary.prototype.deletions = 0;

	DiffSummary.parse = function (text) {
	   var line, handler;

	   var lines = text.trim().split('\n');
	   var status = new DiffSummary();

	   var summary = lines.pop();
	   if (summary) {
	      summary.trim().split(', ').slice(1).forEach(function (text) {
	         var summary = /(\d+)\s([a-z]+)/.exec(text);
	         if (summary) {
	            status[summary[2].replace(/s$/, '') + 's'] = parseInt(summary[1], 10);
	         }
	      });
	   }

	   while (line = lines.shift()) {
	      line = line.trim().match(/^(.+)\s+\|\s+(\d+)\s+([+\-]+)$/);
	      if (line) {
	         status.files.push({
	            file: line[1].trim(),
	            changes: parseInt(line[2], 10),
	            insertions: line[3].replace(/\-/g, '').length,
	            deletions: line[3].replace(/\+/g, '').length
	         });
	      }
	   }

	   return status;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	function FetchSummary (raw) {
	   this.raw = raw;

	   this.remote = null;
	   this.branches = [];
	   this.tags = [];
	}

	FetchSummary.parsers = [
	   [
	      /From (.+)$/, function (fetchSummary, matches) {
	         fetchSummary.remote = matches[0];
	      }
	   ],
	   [
	      /\* \[new branch\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
	         fetchSummary.branches.push({
	            name: matches[0],
	            tracking: matches[1]
	         });
	      }
	   ],
	   [
	      /\* \[new tag\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
	         fetchSummary.tags.push({
	            name: matches[0],
	            tracking: matches[1]
	         });
	      }
	   ]
	];

	FetchSummary.parse = function (data) {
	   var fetchSummary = new FetchSummary(data);

	   String(data)
	      .trim()
	      .split('\n')
	      .forEach(function (line) {
	         var original = line.trim();
	         FetchSummary.parsers.some(function (parser) {
	            var parsed = parser[0].exec(original);
	            if (parsed) {
	               parser[1](fetchSummary, parsed.slice(1));
	               return true;
	            }
	         });
	      });

	   return fetchSummary;
	};

	module.exports = FetchSummary;


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	function FileStatusSummary (path, index, working_dir) {
	   this.path = path;
	   this.index = index;
	   this.working_dir = working_dir;

	   if ('R' === index + working_dir) {
	      var detail = FileStatusSummary.fromPathRegex.exec(path) || [null, path, path];
	      this.from = detail[1];
	      this.path = detail[2];
	   }
	}

	FileStatusSummary.fromPathRegex = /^(.+) \-> (.+)$/;

	FileStatusSummary.prototype = {
	   path: '',
	   from: ''
	};

	module.exports = FileStatusSummary;


/***/ },
/* 28 */
/***/ function(module, exports) {

	
	module.exports = PullSummary;

	/**
	 * The PullSummary is returned as a response to getting `git().pull()`
	 *
	 * @constructor
	 */
	function PullSummary () {
	   this.files = [];
	   this.insertions = {};
	   this.deletions = {};

	   this.summary = {
	      changes: 0,
	      insertions: 0,
	      deletions: 0
	   }
	}

	/**
	 * The array of file paths/names that have been modified in any part of the pulled content
	 * @type {string[]}
	 */
	PullSummary.prototype.files = null;

	/**
	 * A map of file path to number to show the number of insertions per file.
	 * @type {Object}
	 */
	PullSummary.prototype.insertions = null;

	/**
	 * A map of file path to number to show the number of deletions per file.
	 * @type {Object}
	 */
	PullSummary.prototype.deletions = null;

	/**
	 * Overall summary of changes/insertions/deletions and the number associated with each
	 * across all content that was pulled.
	 * @type {Object}
	 */
	PullSummary.prototype.summary = null;

	PullSummary.FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s(\+*)(\-*)/;
	PullSummary.SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(\-\))?/;

	PullSummary.parse = function (text) {
	   var pullSummary = new PullSummary;

	   for (var lines = text.split('\n'), i = 0, l = lines.length; i < l; i++) {
	      var update = PullSummary.FILE_UPDATE_REGEX.exec(lines[i]);

	      // search for update statement for each file
	      if (update) {
	         pullSummary.files.push(update[1]);

	         var insertions = update[2].length;
	         if (insertions) {
	            pullSummary.insertions[update[1]] = insertions;
	         }

	         var deletions = update[3].length;
	         if (deletions) {
	            pullSummary.deletions[update[1]] = deletions;
	         }
	      }

	      // summary appears after updates
	      else if (pullSummary.files.length &&
	               (update = PullSummary.SUMMARY_REGEX.exec(lines[i])) &&
	               !(typeof(update[3]) === 'undefined' && typeof(update[5]) === 'undefined'))
	      {
	         pullSummary.summary.changes = +update[1] || 0;
	         pullSummary.summary.insertions = +update[3] || 0;
	         pullSummary.summary.deletions = +update[5] || 0;
	      }
	   }

	   return pullSummary;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	var FileStatusSummary = __webpack_require__(27);

	module.exports = StatusSummary;

	/**
	 * The StatusSummary is returned as a response to getting `git().status()`
	 *
	 * @constructor
	 */
	function StatusSummary () {
	   this.not_added = [];
	   this.conflicted = [];
	   this.created = [];
	   this.deleted = [];
	   this.modified = [];
	   this.renamed = [];
	   this.files = [];
	}

	/**
	 * Number of commits ahead of the tracked branch
	 * @type {number}
	 */
	StatusSummary.prototype.ahead = 0;

	/**
	 * Number of commits behind the tracked branch
	 * @type {number}
	 */
	StatusSummary.prototype.behind = 0;

	/**
	 * Name of the current branch
	 * @type {null}
	 */
	StatusSummary.prototype.current = null;

	/**
	 * Name of the branch being tracked
	 * @type {string}
	 */
	StatusSummary.prototype.tracking = null;

	/**
	 * All files represented as an array of objects containing the `path` and status in `index` and
	 * in the `working_dir`.
	 *
	 * @type {Array}
	 */
	StatusSummary.prototype.files = null;

	/**
	 * Gets whether this StatusSummary represents a clean working branch.
	 *
	 * @return {boolean}
	 */
	StatusSummary.prototype.isClean = function () {
	   return 0 === Object.keys(this).filter(function (name) {
	      return Array.isArray(this[name]) && this[name].length;
	   }, this).length;
	};

	StatusSummary.parsers = {
	   '##': function (line, status) {
	      var aheadReg = /ahead (\d+)/;
	      var behindReg = /behind (\d+)/;
	      var currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
	      var trackingReg = /\.{3}(\S*)/;
	      var regexResult;

	      regexResult = aheadReg.exec(line);
	      status.ahead = regexResult && +regexResult[1] || 0;

	      regexResult = behindReg.exec(line);
	      status.behind = regexResult && +regexResult[1] || 0;

	      regexResult = currentReg.exec(line);
	      status.current = regexResult && regexResult[1];

	      regexResult = trackingReg.exec(line);
	      status.tracking = regexResult && regexResult[1];
	   },

	   '??': function (line, status) {
	      status.not_added.push(line);
	   },

	   A: function (line, status) {
	      status.created.push(line);
	   },

	   AM: function (line, status) {
	      status.created.push(line);
	   },

	   D: function (line, status) {
	      status.deleted.push(line);
	   },

	   M: function (line, status) {
	      status.modified.push(line);
	   },

	   R: function (line, status) {
	      var detail = /^(.+) \-> (.+)$/.exec(line) || [null, line, line];

	      status.renamed.push({
	         from: detail[1],
	         to: detail[2]
	      });
	   },

	   UU: function (line, status) {
	      status.conflicted.push(line);
	   }
	};

	StatusSummary.parse = function (text) {
	   var line, linestr, handler;

	   var lines = text.split('\n');
	   var status = new StatusSummary();

	   while (linestr = lines.shift()) {
	      line = linestr.match(/(..?)\s+(.*)/);
	      if (!line || !line[1].trim()) {
	         line = linestr.trim().match(/(..?)\s+(.*)/);
	      }

	      if (line) {
	         if ((handler = StatusSummary.parsers[line[1].trim()])) {
	            handler(line[2], status);
	         }

	         if (line[1] != '##') {
	            status.files.push(new FileStatusSummary(line[2], line[1][0], line[1][1]));
	         }
	      }
	   }

	   return status;
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	
	module.exports = TagList;

	function TagList (tagList, latest) {
	   this.latest = latest;
	   this.all = tagList
	}

	TagList.parse = function (data) {
	   var number = function (input) {
	      if (typeof input === 'string') {
	         return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
	      }

	      return 0;
	   };

	   var tags = data
	      .trim()
	      .split('\n')
	      .map(function (item) { return item.trim(); })
	      .filter(Boolean)
	      .sort(function (tagA, tagB) {
	         var partsA = tagA.split('.');
	         var partsB = tagB.split('.');

	         if (partsA.length === 1 || partsB.length === 1) {
	            return tagA - tagB > 0 ? 1 : -1;
	         }

	         for (var i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
	            var a = number(partsA[i]);
	            var b = number(partsB[i]);

	            var diff = a - b;
	            if (diff) {
	               return diff > 0 ? 1 : -1;
	            }
	         }

	         return 0;
	      });

	   var latest = tags.filter(function (tag) { return tag.indexOf('.') >= 0; }).pop();

	   return new TagList(tags, latest);
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("buffer");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	var fs = __webpack_require__(34);

	function exists (path, isFile, isDirectory) {
	   try {
	      var matches = false;
	      var stat = fs.statSync(path);

	      matches = matches || isFile && stat.isFile();
	      matches = matches || isDirectory && stat.isDirectory();

	      return matches;
	   }
	   catch (e) {
	      if (e.code === 'ENOENT') {
	         return false;
	      }

	      throw e;
	   }
	}

	module.exports = function (path, type) {
	   if (!type) {
	      return exists(path, true, true);
	   }

	   return exists(path, type & 1, type & 2);
	};

	module.exports.FILE = 1;

	module.exports.FOLDER = 2;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addBlogEntry = addBlogEntry;
	exports.addComponent = addComponent;
	exports.getComponentName = getComponentName;
	exports.getComponentRoute = getComponentRoute;
	exports.deleteRoute = deleteRoute;

	var _generators = __webpack_require__(36);

	var _renderers = __webpack_require__(16);

	function addBlogEntry(blogEntry) {
	    //blogentry needs componentName, title, date, category(maybe have a default) and published(should be false)
	    return new Promise(function (resolve) {
	        addComponent(blogEntry, "blogEntry").then(function () {
	            //add blog to articles.json
	            console.log("reading articles.json");
	            fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", 'utf-8', function (err, articleData) {
	                var articles = JSON.parse(articleData);
	                articles.articles.push(blogEntry);
	                console.log("writing articles.json");
	                fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", JSON.stringify(articles));
	            });
	            //write the specific article.json data
	            var newBlogData = { "title": blogEntry.title, "date": blogEntry.date, "text": "" };
	            console.log("writing component.json");
	            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/src/components/" + blogEntry.componentName + "/" + blogEntry.componentName + ".json", JSON.stringify(newBlogData), function (err) {
	                console.log(err);
	                (0, _generators.generateBlogFiles)(blogEntry.componentName, newBlogData).then(function () {
	                    (0, _renderers.renderAllAndPush)("adding blog entry " + blogEntry.componentName).then(resolve());
	                });
	            });
	        });
	    });
	}

	function addComponent(component) {
	    var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "blank";

	    return new Promise(function (resolve) {
	        //add component to components.json
	        console.log("reading components.json");
	        fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/components.json", 'utf-8', function (err, componentData) {
	            var components = JSON.parse(componentData);
	            components.components.push({ "componentName": component.componentName, "template": template });
	            console.log("writing components.json");
	            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/components.json", JSON.stringify(components));
	        });
	        //add route to routes.json
	        console.log("reading routes.json");
	        fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", 'utf-8', function (err, routeData) {
	            var routes = JSON.parse(routeData);
	            var route = component.componentLink.split(".");
	            setPath(route, routes.routes, 0);
	            console.log("writing routes.json");
	            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", JSON.stringify(routes));
	        });
	        //create empty component skeleton
	        (0, _generators.generateComponent)(component).then(function () {
	            resolve();
	        });
	    });
	}

	function setPath(newRoute, routes, level) {
	    var targetRouteIndex = routes.findIndex(function (route) {
	        return route.name === newRoute[level];
	    });
	    if (targetRouteIndex !== -1) {
	        return setPath(newRoute, routes[targetRouteIndex].children, level + 1);
	    } else {
	        if (level === newRoute.length - 1) {
	            var newEndpoint = {
	                "name": newRoute[newRoute.length - 1], "path": "/" + newRoute[newRoute.length - 1], children: []
	            };
	            routes.push(newEndpoint);
	            return 0;
	        } else {
	            var newNode = {
	                "name": newRoute[level], "path": "/" + newRoute[level], children: []
	            };
	            routes.push(newNode);
	            return setPath(newRoute, routes[routes.length - 1].children, level + 1);
	        }
	    }
	}

	function getComponentName(componentLink) {
	    return replaceAndCamelCase(replaceAndCamelCase(componentLink, "/"), "-");
	}

	function getComponentRoute(componentLink) {
	    return componentLink.replace(/\//g, ".");
	}

	function replaceAndCamelCase(text, token) {
	    var textParts = text.split(token);
	    for (var i = 0; i < textParts.length; i++) {
	        textParts[i] = textParts[i].charAt(0).toUpperCase() + textParts[i].slice(1);
	    }
	    return textParts.join("");
	}

	function deleteRoute(component) {
	    var linkParts = component.componentLink.split(".");
	    var routeIndices = [];
	    var routes = fs.readFileSync(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", 'utf-8');
	    // for(var i = 0; i < linkParts.length; i++){
	    //     let routeIndex = routes.findIndex((route) => {
	    //         return route.name === linkParts[i];
	    //     })
	    //     routeIndices.push(routeIndex);
	    // let routePart = routes[routeIndices[0]];
	    // for(var i = 0; i < routeIndices.length; i++){
	    //     for(var j = 0; i < linkParts.length; j++){

	    //     }
	    // }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.generateComponent = generateComponent;
	exports.generateBlogFiles = generateBlogFiles;
	exports.generateBlogCss = generateBlogCss;
	var Mustache = __webpack_require__(17);
	function generateComponent(component) {
	    return new Promise(function (resolve) {
	        console.log("generating component js");
	        console.log(component);
	        var path = app.getPath("documents") + "/frtlzer/wfs/src/components/" + component.componentName;
	        fs.mkdir(path);
	        var jsTemplate = "import $ from \"../../vendor/jquery.min\";\nimport {Component} from \"../../vendor/noManure\";\nrequire(\"./{{componentName}}.css\")\nvar template = require(\"./{{componentName}}.html\");\nclass {{componentName}} extends Component {\n    constructor(){\n        super(\"{{componentName}}\");\n        this.template = template;\n        this.route = \"{{componentLink}}\";\n    }\n    render(){\n        return super.render()\n    }\n    addListeners(){\n        $(\"#home\").click(() => {\n            this.appInstance.renderComponent(\"Home\");\n        });\n    }\n}\nexport var {{componentName}}Component = new {{componentName}}();";
	        console.log(component.componentName);
	        fs.writeFile(path + "/" + component.componentName + ".js", Mustache.render(jsTemplate, component), function (err) {
	            resolve();
	        });
	    });
	}

	function generateBlogFiles(componentName, blogData) {
	    return new Promise(function (resolve) {
	        generateBlogCss(componentName).then(function () {
	            resolve();
	        });
	    });
	}

	function generateBlogCss(componentName) {
	    return new Promise(function (resolve) {
	        console.log("generating blog css");
	        var path = app.getPath("documents") + "/frtlzer/wfs/src/components/" + componentName;
	        var cssTemplate = ".blog-container {\n    width: 100vw;\n    height: 100vh;\n}\n\n.blog-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-left: 15%;\n    margin-right: 15%;\n    margin-bottom: 6rem;\n    \n}\n\n.header-nav {\n    display: inherit;\n    text-align: center;\n}\n\n.header-nav > * {\n    cursor: pointer;\n}\n\n.header-nav > h3 {\n    padding-top: 3rem;\n    width: 5rem;\n    margin-top: 0;\n    border-top: 3px solid white;\n    transition: all 0.3s;\n}\n\n.blog-logo {\n    padding-top: 3rem;\n}\n\n.blog-logo > h2 {\n    margin-top: 0px;\n}\n\n.header-nav > h3:hover {\n    border-top: 3px solid #cb450f;\n}\n\n.blog-content {\n    margin-right: 25%;\n    margin-left: 15%;\n    text-align: right;\n}\n\n.date{\n    text-align: left;\n}\n\n.content-title {\n    font-size: 60px;\n}\n\n.blog-text {\n    margin-left: 20%;\n    margin-right: 20%;\n    font-size: 20px;\n}";
	        fs.writeFile(path + "/" + componentName + ".css", cssTemplate, function (err) {
	            resolve();
	        });
	    });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./componentOverview.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./componentOverview.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(12);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<table>");t.b("\n" + i);t.b("    <thead>");t.b("\n" + i);t.b("        <tr>");t.b("\n" + i);t.b("            <th>Title</th>");t.b("\n" + i);t.b("            <th>Template</th>");t.b("\n" + i);t.b("            <th></th>");t.b("\n" + i);t.b("            <th>Actions</th>");t.b("\n" + i);t.b("        </tr>");t.b("\n" + i);t.b("    </thead>");t.b("\n" + i);t.b("    <tbody>");t.b("\n" + i);if(t.s(t.f("components",c,p,1),c,p,0,203,599,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <tr>");t.b("\n" + i);t.b("            <td>");t.b(t.v(t.f("title",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("            <td>");t.b(t.v(t.f("template",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("            <td><div class=\"buttons group\" id=\"");t.b(t.v(t.f("componentName",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("isBlog",c,p,1),c,p,0,376,465,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <button type=\"button\" class=\"button edit\">Edit</button>");t.b("\n" + i);});c.pop();}t.b("                <button type=\"button\" class=\"button delete\">Delete</button>");t.b("\n" + i);t.b("            </div></td>");t.b("\n" + i);t.b("        </tr>");t.b("\n" + i);});c.pop();}t.b("    </tbody>");t.b("\n" + i);t.b("</table>");t.b("\n" + i);t.b("<button type=\"button\" id=\"newComponent\">Create new Component</button>");return t.fl(); },partials: {}, subs: {  }}, "<table>\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Template</th>\n            <th></th>\n            <th>Actions</th>\n        </tr>\n    </thead>\n    <tbody>\n        {{#components}}\n        <tr>\n            <td>{{title}}</td>\n            <td>{{template}}</td>\n            <td><div class=\"buttons group\" id=\"{{componentName}}\">\n                {{#isBlog}}\n                <button type=\"button\" class=\"button edit\">Edit</button>\n                {{/isBlog}}\n                <button type=\"button\" class=\"button delete\">Delete</button>\n            </div></td>\n        </tr>\n        {{/components}}\n    </tbody>\n</table>\n<button type=\"button\" id=\"newComponent\">Create new Component</button>", H);return T.render.apply(T, arguments); };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createComponentComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _noManure = __webpack_require__(1);

	var _helper = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(41);
	var template = __webpack_require__(43);

	var createComponent = function (_Component) {
	    _inherits(createComponent, _Component);

	    function createComponent() {
	        _classCallCheck(this, createComponent);

	        var _this = _possibleConstructorReturn(this, (createComponent.__proto__ || Object.getPrototypeOf(createComponent)).call(this, "createComponent"));

	        _this.template = template;
	        return _this;
	    }

	    _createClass(createComponent, [{
	        key: "render",
	        value: function render() {
	            return _get(createComponent.prototype.__proto__ || Object.getPrototypeOf(createComponent.prototype), "render", this).call(this);
	        }
	    }, {
	        key: "addListeners",
	        value: function addListeners() {
	            var _this2 = this;

	            (0, _jquery2.default)("#template").change(function () {
	                (0, _jquery2.default)(".template-settings").hide();
	                var template = (0, _jquery2.default)("#template").children().filter(":selected").val();
	                (0, _jquery2.default)("." + template + "-settings").show();
	            });
	            (0, _jquery2.default)("#createFromInputs").click(function () {
	                var newComponent = {
	                    "componentLink": (0, _helper.getComponentRoute)((0, _jquery2.default)("#componentLink").val()),
	                    "componentName": (0, _helper.getComponentName)((0, _jquery2.default)("#componentLink").val())
	                };
	                if ((0, _jquery2.default)("#template").val() === "blog-entry") {
	                    (function () {
	                        newComponent.title = (0, _jquery2.default)("#blog-title").val();
	                        newComponent.date = (0, _jquery2.default)("#blog-date").val();
	                        newComponent.category = (0, _jquery2.default)("#blog-category").val();
	                        newComponent.published = false;
	                        var props = { "componentName": newComponent.componentName };
	                        (0, _helper.addBlogEntry)(newComponent).then(function () {
	                            _this2.appInstance.renderComponent("editArticle", props);
	                        });
	                    })();
	                }
	            });
	            (0, _jquery2.default)("#back").click(function () {
	                _this2.appInstance.renderComponent("componentOverview");
	            });
	        }
	    }]);

	    return createComponent;
	}(_noManure.Component);

	var createComponentComponent = exports.createComponentComponent = new createComponent();

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./createComponent.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./createComponent.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".template-settings {\n    display: none;\n}", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(12);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"create-menu\">");t.b("\n" + i);t.b("    <div class=\"form\">");t.b("\n" + i);t.b("        <div class=\"form-item\">");t.b("\n" + i);t.b("            <label for=\"componentLink\">Link to page</label>");t.b("\n" + i);t.b("            <input type=\"text\" id=\"componentLink\" value=\"\" placeholder=\"blog/a/entry\">");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"form-item\">");t.b("\n" + i);t.b("            <label for=\"template\">Template</label>");t.b("\n" + i);t.b("            <select id=\"template\">");t.b("\n" + i);t.b("                <option value=\"blank\">Blank</option>");t.b("\n" + i);t.b("                <option value=\"blog-entry\">Blog entry</option>");t.b("\n" + i);t.b("            </select>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"blog-entry-settings template-settings\">");t.b("\n" + i);t.b("            <div class=\"form-item\">");t.b("\n" + i);t.b("                <label for=\"blog-title\">Title</label>");t.b("\n" + i);t.b("                <input type=\"text\" id=\"blog-title\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"form-item\">");t.b("\n" + i);t.b("                <label for=\"blog-date\">Date</label>");t.b("\n" + i);t.b("                <input type=\"date\" id=\"blog-date\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"form-item\">");t.b("\n" + i);t.b("                <label for=\"blog-category\">Category</label>");t.b("\n" + i);t.b("                <input type=\"text\" id=\"blog-category\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <button type=\"button\" id=\"createFromInputs\">Create</button>");t.b("\n" + i);t.b("        <button type=\"button\" id=\"back\">Back</button>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"create-menu\">\n    <div class=\"form\">\n        <div class=\"form-item\">\n            <label for=\"componentLink\">Link to page</label>\n            <input type=\"text\" id=\"componentLink\" value=\"\" placeholder=\"blog/a/entry\">\n        </div>\n        <div class=\"form-item\">\n            <label for=\"template\">Template</label>\n            <select id=\"template\">\n                <option value=\"blank\">Blank</option>\n                <option value=\"blog-entry\">Blog entry</option>\n            </select>\n        </div>\n        <div class=\"blog-entry-settings template-settings\">\n            <div class=\"form-item\">\n                <label for=\"blog-title\">Title</label>\n                <input type=\"text\" id=\"blog-title\">\n            </div>\n            <div class=\"form-item\">\n                <label for=\"blog-date\">Date</label>\n                <input type=\"date\" id=\"blog-date\">\n            </div>\n            <div class=\"form-item\">\n                <label for=\"blog-category\">Category</label>\n                <input type=\"text\" id=\"blog-category\">\n            </div>\n        </div>\n        <button type=\"button\" id=\"createFromInputs\">Create</button>\n        <button type=\"button\" id=\"back\">Back</button>\n    </div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.editArticleComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _noManure = __webpack_require__(1);

	var _renderers = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(45);
	var simplegit = __webpack_require__(18)(app.getPath("documents") + "/frtlzer/wfs/");
	var Quill = __webpack_require__(47);
	var template = __webpack_require__(48);

	var editArticle = function (_Component) {
	    _inherits(editArticle, _Component);

	    function editArticle() {
	        _classCallCheck(this, editArticle);

	        var _this = _possibleConstructorReturn(this, (editArticle.__proto__ || Object.getPrototypeOf(editArticle)).call(this, "editArticle"));

	        _this.template = template;
	        return _this;
	    }

	    _createClass(editArticle, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            this.toolbarOptions = [['bold', 'italic', 'underline', 'strike'], // toggled buttons
	            ['blockquote', 'code-block', 'image'], [{ 'header': 1 }, { 'header': 2 }], // custom button values
	            [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'header': [1, 2, 3, 4, 5, 6, false] }], ['clean'] // remove formatting button
	            ];
	            this.articlePath = app.getPath("documents") + "/frtlzer/wfs/src/components/" + this.props.componentName + "/" + this.props.componentName + ".json";
	            return new Promise(function (resolve) {
	                fs.readFile(_this2.articlePath, 'utf-8', function (err, data) {
	                    if (err) {
	                        console.log(err);
	                    } else {
	                        _this2.articleData = JSON.parse(data);
	                        _this2.data = _this2.articleData;
	                        resolve(_get(editArticle.prototype.__proto__ || Object.getPrototypeOf(editArticle.prototype), "render", _this2).call(_this2));
	                    }
	                });
	            });

	            return _get(editArticle.prototype.__proto__ || Object.getPrototypeOf(editArticle.prototype), "render", this).call(this);
	        }
	    }, {
	        key: "addListeners",
	        value: function addListeners() {
	            var _this3 = this;

	            if (this.articleData.published) {
	                (0, _jquery2.default)("#published").prop("checked", true);
	            };
	            var editor = new Quill("#editor", {
	                modules: {
	                    toolbar: this.toolbarOptions
	                },
	                theme: "snow"
	            });
	            (0, _jquery2.default)(".ql-editor").html(this.articleData.text);
	            (0, _jquery2.default)("#back").click(function () {
	                _this3.appInstance.renderComponent("componentOverview");
	            });
	            (0, _jquery2.default)("#save").click(function () {
	                _this3.articleData.title = (0, _jquery2.default)("#article-title").val();
	                _this3.articleData.date = (0, _jquery2.default)("#article-date").val();
	                _this3.articleData.text = (0, _jquery2.default)(".ql-editor").html();
	                _this3.articleData.published = (0, _jquery2.default)("#published").is(":checked");
	                console.log(_this3.articleData);
	                fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", 'utf-8', function (err, data) {
	                    console.log(data);
	                    var articles = JSON.parse(data);
	                    var articleIndex = articles.articles.findIndex(function (arti) {
	                        return arti.componentName === _this3.props.componentName;
	                    });
	                    articles.articles[articleIndex].published = _this3.articleData.published;
	                    fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", JSON.stringify(articles), function (err) {
	                        fs.writeFile(_this3.articlePath, JSON.stringify(_this3.articleData), function (err) {
	                            (0, _renderers.renderAllAndPush)("edit article " + articles.articles[articleIndex].title).then(function () {
	                                _this3.appInstance.renderComponent("componentOverview");
	                            });
	                        });
	                    });
	                });
	            });
	        }
	    }]);

	    return editArticle;
	}(_noManure.Component);

	var editArticleComponent = exports.editArticleComponent = new editArticle();

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./editArticle.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./editArticle.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".editor-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    height: 70vh;\n    text-align: center;\n}\n\n.article-meta-data {\n    display: block;\n}\n\n.ql-toolbar > * >  button {\n    min-height: 0px;\n}\n\n.ql-toolbar > * >  button:hover {\n    box-shadow: none;\n}\n\n.editor-actions {\n    margin-top: 4rem;\n}", ""]);

	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Quill Editor v1.1.9
	 * https://quilljs.com/
	 * Copyright (c) 2014, Jason Chen
	 * Copyright (c) 2013, salesforce.com
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Quill"] = factory();
		else
			root["Quill"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(53);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		var _break = __webpack_require__(30);

		var _break2 = _interopRequireDefault(_break);

		var _container = __webpack_require__(42);

		var _container2 = _interopRequireDefault(_container);

		var _cursor = __webpack_require__(34);

		var _cursor2 = _interopRequireDefault(_cursor);

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		var _scroll = __webpack_require__(43);

		var _scroll2 = _interopRequireDefault(_scroll);

		var _text = __webpack_require__(33);

		var _text2 = _interopRequireDefault(_text);

		var _clipboard = __webpack_require__(44);

		var _clipboard2 = _interopRequireDefault(_clipboard);

		var _history = __webpack_require__(51);

		var _history2 = _interopRequireDefault(_history);

		var _keyboard = __webpack_require__(52);

		var _keyboard2 = _interopRequireDefault(_keyboard);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_quill2.default.register({
		  'blots/block': _block2.default,
		  'blots/block/embed': _block.BlockEmbed,
		  'blots/break': _break2.default,
		  'blots/container': _container2.default,
		  'blots/cursor': _cursor2.default,
		  'blots/embed': _embed2.default,
		  'blots/inline': _inline2.default,
		  'blots/scroll': _scroll2.default,
		  'blots/text': _text2.default,

		  'modules/clipboard': _clipboard2.default,
		  'modules/history': _history2.default,
		  'modules/keyboard': _keyboard2.default
		});

		_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

		module.exports = _quill2.default;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var container_1 = __webpack_require__(3);
		var format_1 = __webpack_require__(7);
		var leaf_1 = __webpack_require__(12);
		var scroll_1 = __webpack_require__(13);
		var inline_1 = __webpack_require__(14);
		var block_1 = __webpack_require__(15);
		var embed_1 = __webpack_require__(16);
		var text_1 = __webpack_require__(17);
		var attributor_1 = __webpack_require__(8);
		var class_1 = __webpack_require__(10);
		var style_1 = __webpack_require__(11);
		var store_1 = __webpack_require__(9);
		var Registry = __webpack_require__(6);
		var Parchment = {
		    Scope: Registry.Scope,
		    create: Registry.create,
		    find: Registry.find,
		    query: Registry.query,
		    register: Registry.register,
		    Container: container_1.default,
		    Format: format_1.default,
		    Leaf: leaf_1.default,
		    Embed: embed_1.default,
		    Scroll: scroll_1.default,
		    Block: block_1.default,
		    Inline: inline_1.default,
		    Text: text_1.default,
		    Attributor: {
		        Attribute: attributor_1.default,
		        Class: class_1.default,
		        Style: style_1.default,
		        Store: store_1.default
		    }
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = Parchment;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var linked_list_1 = __webpack_require__(4);
		var shadow_1 = __webpack_require__(5);
		var Registry = __webpack_require__(6);
		var ContainerBlot = (function (_super) {
		    __extends(ContainerBlot, _super);
		    function ContainerBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    ContainerBlot.prototype.appendChild = function (other) {
		        this.insertBefore(other);
		    };
		    ContainerBlot.prototype.attach = function () {
		        var _this = this;
		        _super.prototype.attach.call(this);
		        this.children = new linked_list_1.default();
		        // Need to be reversed for if DOM nodes already in order
		        [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
		            try {
		                var child = makeBlot(node);
		                _this.insertBefore(child, _this.children.head);
		            }
		            catch (err) {
		                if (err instanceof Registry.ParchmentError)
		                    return;
		                else
		                    throw err;
		            }
		        });
		    };
		    ContainerBlot.prototype.deleteAt = function (index, length) {
		        if (index === 0 && length === this.length()) {
		            return this.remove();
		        }
		        this.children.forEachAt(index, length, function (child, offset, length) {
		            child.deleteAt(offset, length);
		        });
		    };
		    ContainerBlot.prototype.descendant = function (criteria, index) {
		        var _a = this.children.find(index), child = _a[0], offset = _a[1];
		        if ((criteria.blotName == null && criteria(child)) ||
		            (criteria.blotName != null && child instanceof criteria)) {
		            return [child, offset];
		        }
		        else if (child instanceof ContainerBlot) {
		            return child.descendant(criteria, offset);
		        }
		        else {
		            return [null, -1];
		        }
		    };
		    ContainerBlot.prototype.descendants = function (criteria, index, length) {
		        if (index === void 0) { index = 0; }
		        if (length === void 0) { length = Number.MAX_VALUE; }
		        var descendants = [], lengthLeft = length;
		        this.children.forEachAt(index, length, function (child, index, length) {
		            if ((criteria.blotName == null && criteria(child)) ||
		                (criteria.blotName != null && child instanceof criteria)) {
		                descendants.push(child);
		            }
		            if (child instanceof ContainerBlot) {
		                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
		            }
		            lengthLeft -= length;
		        });
		        return descendants;
		    };
		    ContainerBlot.prototype.detach = function () {
		        this.children.forEach(function (child) {
		            child.detach();
		        });
		        _super.prototype.detach.call(this);
		    };
		    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
		        this.children.forEachAt(index, length, function (child, offset, length) {
		            child.formatAt(offset, length, name, value);
		        });
		    };
		    ContainerBlot.prototype.insertAt = function (index, value, def) {
		        var _a = this.children.find(index), child = _a[0], offset = _a[1];
		        if (child) {
		            child.insertAt(offset, value, def);
		        }
		        else {
		            var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
		            this.appendChild(blot);
		        }
		    };
		    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
		        if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
		            return childBlot instanceof child;
		        })) {
		            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
		        }
		        childBlot.insertInto(this, refBlot);
		    };
		    ContainerBlot.prototype.length = function () {
		        return this.children.reduce(function (memo, child) {
		            return memo + child.length();
		        }, 0);
		    };
		    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
		        this.children.forEach(function (child) {
		            targetParent.insertBefore(child, refNode);
		        });
		    };
		    ContainerBlot.prototype.optimize = function () {
		        _super.prototype.optimize.call(this);
		        if (this.children.length === 0) {
		            if (this.statics.defaultChild != null) {
		                var child = Registry.create(this.statics.defaultChild);
		                this.appendChild(child);
		                child.optimize();
		            }
		            else {
		                this.remove();
		            }
		        }
		    };
		    ContainerBlot.prototype.path = function (index, inclusive) {
		        if (inclusive === void 0) { inclusive = false; }
		        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
		        var position = [[this, index]];
		        if (child instanceof ContainerBlot) {
		            return position.concat(child.path(offset, inclusive));
		        }
		        else if (child != null) {
		            position.push([child, offset]);
		        }
		        return position;
		    };
		    ContainerBlot.prototype.removeChild = function (child) {
		        this.children.remove(child);
		    };
		    ContainerBlot.prototype.replace = function (target) {
		        if (target instanceof ContainerBlot) {
		            target.moveChildren(this);
		        }
		        _super.prototype.replace.call(this, target);
		    };
		    ContainerBlot.prototype.split = function (index, force) {
		        if (force === void 0) { force = false; }
		        if (!force) {
		            if (index === 0)
		                return this;
		            if (index === this.length())
		                return this.next;
		        }
		        var after = this.clone();
		        this.parent.insertBefore(after, this.next);
		        this.children.forEachAt(index, this.length(), function (child, offset, length) {
		            child = child.split(offset, force);
		            after.appendChild(child);
		        });
		        return after;
		    };
		    ContainerBlot.prototype.unwrap = function () {
		        this.moveChildren(this.parent, this.next);
		        this.remove();
		    };
		    ContainerBlot.prototype.update = function (mutations) {
		        var _this = this;
		        var addedNodes = [], removedNodes = [];
		        mutations.forEach(function (mutation) {
		            if (mutation.target === _this.domNode && mutation.type === 'childList') {
		                addedNodes.push.apply(addedNodes, mutation.addedNodes);
		                removedNodes.push.apply(removedNodes, mutation.removedNodes);
		            }
		        });
		        removedNodes.forEach(function (node) {
		            // Check node has actually been removed
		            // One exception is Chrome does not immediately remove IFRAMEs
		            // from DOM but MutationRecord is correct in its reported removal
		            if (node.parentNode != null && node.tagName !== 'IFRAME' &&
		                (document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
		                return;
		            }
		            var blot = Registry.find(node);
		            if (blot == null)
		                return;
		            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
		                blot.detach();
		            }
		        });
		        addedNodes.filter(function (node) {
		            return node.parentNode == _this.domNode;
		        }).sort(function (a, b) {
		            if (a === b)
		                return 0;
		            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
		                return 1;
		            }
		            return -1;
		        }).forEach(function (node) {
		            var refBlot = null;
		            if (node.nextSibling != null) {
		                refBlot = Registry.find(node.nextSibling);
		            }
		            var blot = makeBlot(node);
		            if (blot.next != refBlot || blot.next == null) {
		                if (blot.parent != null) {
		                    blot.parent.removeChild(_this);
		                }
		                _this.insertBefore(blot, refBlot);
		            }
		        });
		    };
		    return ContainerBlot;
		}(shadow_1.default));
		function makeBlot(node) {
		    var blot = Registry.find(node);
		    if (blot == null) {
		        try {
		            blot = Registry.create(node);
		        }
		        catch (e) {
		            blot = Registry.create(Registry.Scope.INLINE);
		            [].slice.call(node.childNodes).forEach(function (child) {
		                blot.domNode.appendChild(child);
		            });
		            node.parentNode.replaceChild(blot.domNode, node);
		            blot.attach();
		        }
		    }
		    return blot;
		}
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = ContainerBlot;


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";
		var LinkedList = (function () {
		    function LinkedList() {
		        this.head = this.tail = undefined;
		        this.length = 0;
		    }
		    LinkedList.prototype.append = function () {
		        var nodes = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            nodes[_i] = arguments[_i];
		        }
		        this.insertBefore(nodes[0], undefined);
		        if (nodes.length > 1) {
		            this.append.apply(this, nodes.slice(1));
		        }
		    };
		    LinkedList.prototype.contains = function (node) {
		        var cur, next = this.iterator();
		        while (cur = next()) {
		            if (cur === node)
		                return true;
		        }
		        return false;
		    };
		    LinkedList.prototype.insertBefore = function (node, refNode) {
		        node.next = refNode;
		        if (refNode != null) {
		            node.prev = refNode.prev;
		            if (refNode.prev != null) {
		                refNode.prev.next = node;
		            }
		            refNode.prev = node;
		            if (refNode === this.head) {
		                this.head = node;
		            }
		        }
		        else if (this.tail != null) {
		            this.tail.next = node;
		            node.prev = this.tail;
		            this.tail = node;
		        }
		        else {
		            node.prev = undefined;
		            this.head = this.tail = node;
		        }
		        this.length += 1;
		    };
		    LinkedList.prototype.offset = function (target) {
		        var index = 0, cur = this.head;
		        while (cur != null) {
		            if (cur === target)
		                return index;
		            index += cur.length();
		            cur = cur.next;
		        }
		        return -1;
		    };
		    LinkedList.prototype.remove = function (node) {
		        if (!this.contains(node))
		            return;
		        if (node.prev != null)
		            node.prev.next = node.next;
		        if (node.next != null)
		            node.next.prev = node.prev;
		        if (node === this.head)
		            this.head = node.next;
		        if (node === this.tail)
		            this.tail = node.prev;
		        this.length -= 1;
		    };
		    LinkedList.prototype.iterator = function (curNode) {
		        if (curNode === void 0) { curNode = this.head; }
		        // TODO use yield when we can
		        return function () {
		            var ret = curNode;
		            if (curNode != null)
		                curNode = curNode.next;
		            return ret;
		        };
		    };
		    LinkedList.prototype.find = function (index, inclusive) {
		        if (inclusive === void 0) { inclusive = false; }
		        var cur, next = this.iterator();
		        while (cur = next()) {
		            var length_1 = cur.length();
		            if (index < length_1 || (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
		                return [cur, index];
		            }
		            index -= length_1;
		        }
		        return [null, 0];
		    };
		    LinkedList.prototype.forEach = function (callback) {
		        var cur, next = this.iterator();
		        while (cur = next()) {
		            callback(cur);
		        }
		    };
		    LinkedList.prototype.forEachAt = function (index, length, callback) {
		        if (length <= 0)
		            return;
		        var _a = this.find(index), startNode = _a[0], offset = _a[1];
		        var cur, curIndex = index - offset, next = this.iterator(startNode);
		        while ((cur = next()) && curIndex < index + length) {
		            var curLength = cur.length();
		            if (index > curIndex) {
		                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
		            }
		            else {
		                callback(cur, 0, Math.min(curLength, index + length - curIndex));
		            }
		            curIndex += curLength;
		        }
		    };
		    LinkedList.prototype.map = function (callback) {
		        return this.reduce(function (memo, cur) {
		            memo.push(callback(cur));
		            return memo;
		        }, []);
		    };
		    LinkedList.prototype.reduce = function (callback, memo) {
		        var cur, next = this.iterator();
		        while (cur = next()) {
		            memo = callback(memo, cur);
		        }
		        return memo;
		    };
		    return LinkedList;
		}());
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = LinkedList;


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Registry = __webpack_require__(6);
		var ShadowBlot = (function () {
		    function ShadowBlot(domNode) {
		        this.domNode = domNode;
		        this.attach();
		    }
		    Object.defineProperty(ShadowBlot.prototype, "statics", {
		        // Hack for accessing inherited static methods
		        get: function () {
		            return this.constructor;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    ShadowBlot.create = function (value) {
		        if (this.tagName == null) {
		            throw new Registry.ParchmentError('Blot definition missing tagName');
		        }
		        var node;
		        if (Array.isArray(this.tagName)) {
		            if (typeof value === 'string') {
		                value = value.toUpperCase();
		                if (parseInt(value).toString() === value) {
		                    value = parseInt(value);
		                }
		            }
		            if (typeof value === 'number') {
		                node = document.createElement(this.tagName[value - 1]);
		            }
		            else if (this.tagName.indexOf(value) > -1) {
		                node = document.createElement(value);
		            }
		            else {
		                node = document.createElement(this.tagName[0]);
		            }
		        }
		        else {
		            node = document.createElement(this.tagName);
		        }
		        if (this.className) {
		            node.classList.add(this.className);
		        }
		        return node;
		    };
		    ShadowBlot.prototype.attach = function () {
		        this.domNode[Registry.DATA_KEY] = { blot: this };
		    };
		    ShadowBlot.prototype.clone = function () {
		        var domNode = this.domNode.cloneNode();
		        return Registry.create(domNode);
		    };
		    ShadowBlot.prototype.detach = function () {
		        if (this.parent != null)
		            this.parent.removeChild(this);
		        delete this.domNode[Registry.DATA_KEY];
		    };
		    ShadowBlot.prototype.deleteAt = function (index, length) {
		        var blot = this.isolate(index, length);
		        blot.remove();
		    };
		    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
		        var blot = this.isolate(index, length);
		        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
		            blot.wrap(name, value);
		        }
		        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
		            var parent_1 = Registry.create(this.statics.scope);
		            blot.wrap(parent_1);
		            parent_1.format(name, value);
		        }
		    };
		    ShadowBlot.prototype.insertAt = function (index, value, def) {
		        var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
		        var ref = this.split(index);
		        this.parent.insertBefore(blot, ref);
		    };
		    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
		        if (this.parent != null) {
		            this.parent.children.remove(this);
		        }
		        parentBlot.children.insertBefore(this, refBlot);
		        if (refBlot != null) {
		            var refDomNode = refBlot.domNode;
		        }
		        if (this.next == null || this.domNode.nextSibling != refDomNode) {
		            parentBlot.domNode.insertBefore(this.domNode, (typeof refDomNode !== 'undefined') ? refDomNode : null);
		        }
		        this.parent = parentBlot;
		    };
		    ShadowBlot.prototype.isolate = function (index, length) {
		        var target = this.split(index);
		        target.split(length);
		        return target;
		    };
		    ShadowBlot.prototype.length = function () {
		        return 1;
		    };
		    ;
		    ShadowBlot.prototype.offset = function (root) {
		        if (root === void 0) { root = this.parent; }
		        if (this.parent == null || this == root)
		            return 0;
		        return this.parent.children.offset(this) + this.parent.offset(root);
		    };
		    ShadowBlot.prototype.optimize = function () {
		        // TODO clean up once we use WeakMap
		        if (this.domNode[Registry.DATA_KEY] != null) {
		            delete this.domNode[Registry.DATA_KEY].mutations;
		        }
		    };
		    ShadowBlot.prototype.remove = function () {
		        if (this.domNode.parentNode != null) {
		            this.domNode.parentNode.removeChild(this.domNode);
		        }
		        this.detach();
		    };
		    ShadowBlot.prototype.replace = function (target) {
		        if (target.parent == null)
		            return;
		        target.parent.insertBefore(this, target.next);
		        target.remove();
		    };
		    ShadowBlot.prototype.replaceWith = function (name, value) {
		        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
		        replacement.replace(this);
		        return replacement;
		    };
		    ShadowBlot.prototype.split = function (index, force) {
		        return index === 0 ? this : this.next;
		    };
		    ShadowBlot.prototype.update = function (mutations) {
		        if (mutations === void 0) { mutations = []; }
		        // Nothing to do by default
		    };
		    ShadowBlot.prototype.wrap = function (name, value) {
		        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
		        if (this.parent != null) {
		            this.parent.insertBefore(wrapper, this.next);
		        }
		        wrapper.appendChild(this);
		        return wrapper;
		    };
		    return ShadowBlot;
		}());
		ShadowBlot.blotName = 'abstract';
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = ShadowBlot;


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var ParchmentError = (function (_super) {
		    __extends(ParchmentError, _super);
		    function ParchmentError(message) {
		        var _this;
		        message = '[Parchment] ' + message;
		        _this = _super.call(this, message) || this;
		        _this.message = message;
		        _this.name = _this.constructor.name;
		        return _this;
		    }
		    return ParchmentError;
		}(Error));
		exports.ParchmentError = ParchmentError;
		var attributes = {};
		var classes = {};
		var tags = {};
		var types = {};
		exports.DATA_KEY = '__blot';
		var Scope;
		(function (Scope) {
		    Scope[Scope["TYPE"] = 3] = "TYPE";
		    Scope[Scope["LEVEL"] = 12] = "LEVEL";
		    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
		    Scope[Scope["BLOT"] = 14] = "BLOT";
		    Scope[Scope["INLINE"] = 7] = "INLINE";
		    Scope[Scope["BLOCK"] = 11] = "BLOCK";
		    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
		    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
		    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
		    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
		    Scope[Scope["ANY"] = 15] = "ANY";
		})(Scope = exports.Scope || (exports.Scope = {}));
		;
		function create(input, value) {
		    var match = query(input);
		    if (match == null) {
		        throw new ParchmentError("Unable to create " + input + " blot");
		    }
		    var BlotClass = match;
		    var node = input instanceof Node ? input : BlotClass.create(value);
		    return new BlotClass(node, value);
		}
		exports.create = create;
		function find(node, bubble) {
		    if (bubble === void 0) { bubble = false; }
		    if (node == null)
		        return null;
		    if (node[exports.DATA_KEY] != null)
		        return node[exports.DATA_KEY].blot;
		    if (bubble)
		        return find(node.parentNode, bubble);
		    return null;
		}
		exports.find = find;
		function query(query, scope) {
		    if (scope === void 0) { scope = Scope.ANY; }
		    var match;
		    if (typeof query === 'string') {
		        match = types[query] || attributes[query];
		    }
		    else if (query instanceof Text) {
		        match = types['text'];
		    }
		    else if (typeof query === 'number') {
		        if (query & Scope.LEVEL & Scope.BLOCK) {
		            match = types['block'];
		        }
		        else if (query & Scope.LEVEL & Scope.INLINE) {
		            match = types['inline'];
		        }
		    }
		    else if (query instanceof HTMLElement) {
		        var names = (query.getAttribute('class') || '').split(/\s+/);
		        for (var i in names) {
		            match = classes[names[i]];
		            if (match)
		                break;
		        }
		        match = match || tags[query.tagName];
		    }
		    if (match == null)
		        return null;
		    if ((scope & Scope.LEVEL & match.scope) && (scope & Scope.TYPE & match.scope))
		        return match;
		    return null;
		}
		exports.query = query;
		function register() {
		    var Definitions = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        Definitions[_i] = arguments[_i];
		    }
		    if (Definitions.length > 1) {
		        return Definitions.map(function (d) {
		            return register(d);
		        });
		    }
		    var Definition = Definitions[0];
		    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
		        throw new ParchmentError('Invalid definition');
		    }
		    else if (Definition.blotName === 'abstract') {
		        throw new ParchmentError('Cannot register abstract class');
		    }
		    types[Definition.blotName || Definition.attrName] = Definition;
		    if (typeof Definition.keyName === 'string') {
		        attributes[Definition.keyName] = Definition;
		    }
		    else {
		        if (Definition.className != null) {
		            classes[Definition.className] = Definition;
		        }
		        if (Definition.tagName != null) {
		            if (Array.isArray(Definition.tagName)) {
		                Definition.tagName = Definition.tagName.map(function (tagName) {
		                    return tagName.toUpperCase();
		                });
		            }
		            else {
		                Definition.tagName = Definition.tagName.toUpperCase();
		            }
		            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
		            tagNames.forEach(function (tag) {
		                if (tags[tag] == null || Definition.className == null) {
		                    tags[tag] = Definition;
		                }
		            });
		        }
		    }
		    return Definition;
		}
		exports.register = register;


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var attributor_1 = __webpack_require__(8);
		var store_1 = __webpack_require__(9);
		var container_1 = __webpack_require__(3);
		var Registry = __webpack_require__(6);
		var FormatBlot = (function (_super) {
		    __extends(FormatBlot, _super);
		    function FormatBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    FormatBlot.formats = function (domNode) {
		        if (typeof this.tagName === 'string') {
		            return true;
		        }
		        else if (Array.isArray(this.tagName)) {
		            return domNode.tagName.toLowerCase();
		        }
		        return undefined;
		    };
		    FormatBlot.prototype.attach = function () {
		        _super.prototype.attach.call(this);
		        this.attributes = new store_1.default(this.domNode);
		    };
		    FormatBlot.prototype.format = function (name, value) {
		        var format = Registry.query(name);
		        if (format instanceof attributor_1.default) {
		            this.attributes.attribute(format, value);
		        }
		        else if (value) {
		            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
		                this.replaceWith(name, value);
		            }
		        }
		    };
		    FormatBlot.prototype.formats = function () {
		        var formats = this.attributes.values();
		        var format = this.statics.formats(this.domNode);
		        if (format != null) {
		            formats[this.statics.blotName] = format;
		        }
		        return formats;
		    };
		    FormatBlot.prototype.replaceWith = function (name, value) {
		        var replacement = _super.prototype.replaceWith.call(this, name, value);
		        this.attributes.copy(replacement);
		        return replacement;
		    };
		    FormatBlot.prototype.update = function (mutations) {
		        var _this = this;
		        _super.prototype.update.call(this, mutations);
		        if (mutations.some(function (mutation) {
		            return mutation.target === _this.domNode && mutation.type === 'attributes';
		        })) {
		            this.attributes.build();
		        }
		    };
		    FormatBlot.prototype.wrap = function (name, value) {
		        var wrapper = _super.prototype.wrap.call(this, name, value);
		        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
		            this.attributes.move(wrapper);
		        }
		        return wrapper;
		    };
		    return FormatBlot;
		}(container_1.default));
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = FormatBlot;


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Registry = __webpack_require__(6);
		var Attributor = (function () {
		    function Attributor(attrName, keyName, options) {
		        if (options === void 0) { options = {}; }
		        this.attrName = attrName;
		        this.keyName = keyName;
		        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
		        if (options.scope != null) {
		            // Ignore type bits, force attribute bit
		            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
		        }
		        else {
		            this.scope = Registry.Scope.ATTRIBUTE;
		        }
		        if (options.whitelist != null)
		            this.whitelist = options.whitelist;
		    }
		    Attributor.keys = function (node) {
		        return [].map.call(node.attributes, function (item) {
		            return item.name;
		        });
		    };
		    Attributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        node.setAttribute(this.keyName, value);
		        return true;
		    };
		    Attributor.prototype.canAdd = function (node, value) {
		        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
		        if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
		            return true;
		        }
		        return false;
		    };
		    Attributor.prototype.remove = function (node) {
		        node.removeAttribute(this.keyName);
		    };
		    Attributor.prototype.value = function (node) {
		        var value = node.getAttribute(this.keyName);
		        return this.canAdd(node, value) ? value : '';
		    };
		    return Attributor;
		}());
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = Attributor;


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var attributor_1 = __webpack_require__(8);
		var class_1 = __webpack_require__(10);
		var style_1 = __webpack_require__(11);
		var Registry = __webpack_require__(6);
		var AttributorStore = (function () {
		    function AttributorStore(domNode) {
		        this.attributes = {};
		        this.domNode = domNode;
		        this.build();
		    }
		    AttributorStore.prototype.attribute = function (attribute, value) {
		        if (value) {
		            if (attribute.add(this.domNode, value)) {
		                if (attribute.value(this.domNode) != null) {
		                    this.attributes[attribute.attrName] = attribute;
		                }
		                else {
		                    delete this.attributes[attribute.attrName];
		                }
		            }
		        }
		        else {
		            attribute.remove(this.domNode);
		            delete this.attributes[attribute.attrName];
		        }
		    };
		    AttributorStore.prototype.build = function () {
		        var _this = this;
		        this.attributes = {};
		        var attributes = attributor_1.default.keys(this.domNode);
		        var classes = class_1.default.keys(this.domNode);
		        var styles = style_1.default.keys(this.domNode);
		        attributes.concat(classes).concat(styles).forEach(function (name) {
		            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
		            if (attr instanceof attributor_1.default) {
		                _this.attributes[attr.attrName] = attr;
		            }
		        });
		    };
		    AttributorStore.prototype.copy = function (target) {
		        var _this = this;
		        Object.keys(this.attributes).forEach(function (key) {
		            var value = _this.attributes[key].value(_this.domNode);
		            target.format(key, value);
		        });
		    };
		    AttributorStore.prototype.move = function (target) {
		        var _this = this;
		        this.copy(target);
		        Object.keys(this.attributes).forEach(function (key) {
		            _this.attributes[key].remove(_this.domNode);
		        });
		        this.attributes = {};
		    };
		    AttributorStore.prototype.values = function () {
		        var _this = this;
		        return Object.keys(this.attributes).reduce(function (attributes, name) {
		            attributes[name] = _this.attributes[name].value(_this.domNode);
		            return attributes;
		        }, {});
		    };
		    return AttributorStore;
		}());
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = AttributorStore;


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var attributor_1 = __webpack_require__(8);
		function match(node, prefix) {
		    var className = node.getAttribute('class') || '';
		    return className.split(/\s+/).filter(function (name) {
		        return name.indexOf(prefix + "-") === 0;
		    });
		}
		var ClassAttributor = (function (_super) {
		    __extends(ClassAttributor, _super);
		    function ClassAttributor() {
		        return _super.apply(this, arguments) || this;
		    }
		    ClassAttributor.keys = function (node) {
		        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
		            return name.split('-').slice(0, -1).join('-');
		        });
		    };
		    ClassAttributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        this.remove(node);
		        node.classList.add(this.keyName + "-" + value);
		        return true;
		    };
		    ClassAttributor.prototype.remove = function (node) {
		        var matches = match(node, this.keyName);
		        matches.forEach(function (name) {
		            node.classList.remove(name);
		        });
		        if (node.classList.length === 0) {
		            node.removeAttribute('class');
		        }
		    };
		    ClassAttributor.prototype.value = function (node) {
		        var result = match(node, this.keyName)[0] || '';
		        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
		        return this.canAdd(node, value) ? value : '';
		    };
		    return ClassAttributor;
		}(attributor_1.default));
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = ClassAttributor;


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var attributor_1 = __webpack_require__(8);
		function camelize(name) {
		    var parts = name.split('-');
		    var rest = parts.slice(1).map(function (part) {
		        return part[0].toUpperCase() + part.slice(1);
		    }).join('');
		    return parts[0] + rest;
		}
		var StyleAttributor = (function (_super) {
		    __extends(StyleAttributor, _super);
		    function StyleAttributor() {
		        return _super.apply(this, arguments) || this;
		    }
		    StyleAttributor.keys = function (node) {
		        return (node.getAttribute('style') || '').split(';').map(function (value) {
		            var arr = value.split(':');
		            return arr[0].trim();
		        });
		    };
		    StyleAttributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        node.style[camelize(this.keyName)] = value;
		        return true;
		    };
		    StyleAttributor.prototype.remove = function (node) {
		        node.style[camelize(this.keyName)] = '';
		        if (!node.getAttribute('style')) {
		            node.removeAttribute('style');
		        }
		    };
		    StyleAttributor.prototype.value = function (node) {
		        var value = node.style[camelize(this.keyName)];
		        return this.canAdd(node, value) ? value : '';
		    };
		    return StyleAttributor;
		}(attributor_1.default));
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = StyleAttributor;


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var shadow_1 = __webpack_require__(5);
		var Registry = __webpack_require__(6);
		var LeafBlot = (function (_super) {
		    __extends(LeafBlot, _super);
		    function LeafBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    LeafBlot.value = function (domNode) {
		        return true;
		    };
		    LeafBlot.prototype.index = function (node, offset) {
		        if (node !== this.domNode)
		            return -1;
		        return Math.min(offset, 1);
		    };
		    LeafBlot.prototype.position = function (index, inclusive) {
		        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
		        if (index > 0)
		            offset += 1;
		        return [this.parent.domNode, offset];
		    };
		    LeafBlot.prototype.value = function () {
		        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
		        var _a;
		    };
		    return LeafBlot;
		}(shadow_1.default));
		LeafBlot.scope = Registry.Scope.INLINE_BLOT;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = LeafBlot;


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var container_1 = __webpack_require__(3);
		var Registry = __webpack_require__(6);
		var OBSERVER_CONFIG = {
		    attributes: true,
		    characterData: true,
		    characterDataOldValue: true,
		    childList: true,
		    subtree: true
		};
		var MAX_OPTIMIZE_ITERATIONS = 100;
		var ScrollBlot = (function (_super) {
		    __extends(ScrollBlot, _super);
		    function ScrollBlot(node) {
		        var _this = _super.call(this, node) || this;
		        _this.parent = null;
		        _this.observer = new MutationObserver(function (mutations) {
		            _this.update(mutations);
		        });
		        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
		        return _this;
		    }
		    ScrollBlot.prototype.detach = function () {
		        _super.prototype.detach.call(this);
		        this.observer.disconnect();
		    };
		    ScrollBlot.prototype.deleteAt = function (index, length) {
		        this.update();
		        if (index === 0 && length === this.length()) {
		            this.children.forEach(function (child) {
		                child.remove();
		            });
		        }
		        else {
		            _super.prototype.deleteAt.call(this, index, length);
		        }
		    };
		    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
		        this.update();
		        _super.prototype.formatAt.call(this, index, length, name, value);
		    };
		    ScrollBlot.prototype.insertAt = function (index, value, def) {
		        this.update();
		        _super.prototype.insertAt.call(this, index, value, def);
		    };
		    ScrollBlot.prototype.optimize = function (mutations) {
		        var _this = this;
		        if (mutations === void 0) { mutations = []; }
		        _super.prototype.optimize.call(this);
		        // We must modify mutations directly, cannot make copy and then modify
		        var records = [].slice.call(this.observer.takeRecords());
		        // Array.push currently seems to be implemented by a non-tail recursive function
		        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
		        while (records.length > 0)
		            mutations.push(records.pop());
		        // TODO use WeakMap
		        var mark = function (blot, markParent) {
		            if (markParent === void 0) { markParent = true; }
		            if (blot == null || blot === _this)
		                return;
		            if (blot.domNode.parentNode == null)
		                return;
		            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
		                blot.domNode[Registry.DATA_KEY].mutations = [];
		            }
		            if (markParent)
		                mark(blot.parent);
		        };
		        var optimize = function (blot) {
		            if (blot.domNode[Registry.DATA_KEY] == null || blot.domNode[Registry.DATA_KEY].mutations == null) {
		                return;
		            }
		            if (blot instanceof container_1.default) {
		                blot.children.forEach(optimize);
		            }
		            blot.optimize();
		        };
		        var remaining = mutations;
		        for (var i = 0; remaining.length > 0; i += 1) {
		            if (i >= MAX_OPTIMIZE_ITERATIONS) {
		                throw new Error('[Parchment] Maximum optimize iterations reached');
		            }
		            remaining.forEach(function (mutation) {
		                var blot = Registry.find(mutation.target, true);
		                if (blot == null)
		                    return;
		                if (blot.domNode === mutation.target) {
		                    if (mutation.type === 'childList') {
		                        mark(Registry.find(mutation.previousSibling, false));
		                        [].forEach.call(mutation.addedNodes, function (node) {
		                            var child = Registry.find(node, false);
		                            mark(child, false);
		                            if (child instanceof container_1.default) {
		                                child.children.forEach(function (grandChild) {
		                                    mark(grandChild, false);
		                                });
		                            }
		                        });
		                    }
		                    else if (mutation.type === 'attributes') {
		                        mark(blot.prev);
		                    }
		                }
		                mark(blot);
		            });
		            this.children.forEach(optimize);
		            remaining = [].slice.call(this.observer.takeRecords());
		            records = remaining.slice();
		            while (records.length > 0)
		                mutations.push(records.pop());
		        }
		    };
		    ScrollBlot.prototype.update = function (mutations) {
		        var _this = this;
		        mutations = mutations || this.observer.takeRecords();
		        // TODO use WeakMap
		        mutations.map(function (mutation) {
		            var blot = Registry.find(mutation.target, true);
		            if (blot == null)
		                return;
		            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
		                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
		                return blot;
		            }
		            else {
		                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
		                return null;
		            }
		        }).forEach(function (blot) {
		            if (blot == null || blot === _this || blot.domNode[Registry.DATA_KEY] == null)
		                return;
		            blot.update(blot.domNode[Registry.DATA_KEY].mutations || []);
		        });
		        if (this.domNode[Registry.DATA_KEY].mutations != null) {
		            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations);
		        }
		        this.optimize(mutations);
		    };
		    return ScrollBlot;
		}(container_1.default));
		ScrollBlot.blotName = 'scroll';
		ScrollBlot.defaultChild = 'block';
		ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
		ScrollBlot.tagName = 'DIV';
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = ScrollBlot;


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var format_1 = __webpack_require__(7);
		var Registry = __webpack_require__(6);
		// Shallow object comparison
		function isEqual(obj1, obj2) {
		    if (Object.keys(obj1).length !== Object.keys(obj2).length)
		        return false;
		    for (var prop in obj1) {
		        if (obj1[prop] !== obj2[prop])
		            return false;
		    }
		    return true;
		}
		var InlineBlot = (function (_super) {
		    __extends(InlineBlot, _super);
		    function InlineBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    InlineBlot.formats = function (domNode) {
		        if (domNode.tagName === InlineBlot.tagName)
		            return undefined;
		        return _super.formats.call(this, domNode);
		    };
		    InlineBlot.prototype.format = function (name, value) {
		        var _this = this;
		        if (name === this.statics.blotName && !value) {
		            this.children.forEach(function (child) {
		                if (!(child instanceof format_1.default)) {
		                    child = child.wrap(InlineBlot.blotName, true);
		                }
		                _this.attributes.copy(child);
		            });
		            this.unwrap();
		        }
		        else {
		            _super.prototype.format.call(this, name, value);
		        }
		    };
		    InlineBlot.prototype.formatAt = function (index, length, name, value) {
		        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
		            var blot = this.isolate(index, length);
		            blot.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    InlineBlot.prototype.optimize = function () {
		        _super.prototype.optimize.call(this);
		        var formats = this.formats();
		        if (Object.keys(formats).length === 0) {
		            return this.unwrap(); // unformatted span
		        }
		        var next = this.next;
		        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
		            next.moveChildren(this);
		            next.remove();
		        }
		    };
		    return InlineBlot;
		}(format_1.default));
		InlineBlot.blotName = 'inline';
		InlineBlot.scope = Registry.Scope.INLINE_BLOT;
		InlineBlot.tagName = 'SPAN';
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = InlineBlot;


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var format_1 = __webpack_require__(7);
		var Registry = __webpack_require__(6);
		var BlockBlot = (function (_super) {
		    __extends(BlockBlot, _super);
		    function BlockBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    BlockBlot.formats = function (domNode) {
		        var tagName = Registry.query(BlockBlot.blotName).tagName;
		        if (domNode.tagName === tagName)
		            return undefined;
		        return _super.formats.call(this, domNode);
		    };
		    BlockBlot.prototype.format = function (name, value) {
		        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
		            return;
		        }
		        else if (name === this.statics.blotName && !value) {
		            this.replaceWith(BlockBlot.blotName);
		        }
		        else {
		            _super.prototype.format.call(this, name, value);
		        }
		    };
		    BlockBlot.prototype.formatAt = function (index, length, name, value) {
		        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
		            this.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    BlockBlot.prototype.insertAt = function (index, value, def) {
		        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
		            // Insert text or inline
		            _super.prototype.insertAt.call(this, index, value, def);
		        }
		        else {
		            var after = this.split(index);
		            var blot = Registry.create(value, def);
		            after.parent.insertBefore(blot, after);
		        }
		    };
		    BlockBlot.prototype.update = function (mutations) {
		        if (navigator.userAgent.match(/Trident/)) {
		            this.attach();
		        }
		        else {
		            _super.prototype.update.call(this, mutations);
		        }
		    };
		    return BlockBlot;
		}(format_1.default));
		BlockBlot.blotName = 'block';
		BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
		BlockBlot.tagName = 'P';
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = BlockBlot;


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var leaf_1 = __webpack_require__(12);
		var EmbedBlot = (function (_super) {
		    __extends(EmbedBlot, _super);
		    function EmbedBlot() {
		        return _super.apply(this, arguments) || this;
		    }
		    EmbedBlot.formats = function (domNode) {
		        return undefined;
		    };
		    EmbedBlot.prototype.format = function (name, value) {
		        // super.formatAt wraps, which is what we want in general,
		        // but this allows subclasses to overwrite for formats
		        // that just apply to particular embeds
		        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
		    };
		    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
		        if (index === 0 && length === this.length()) {
		            this.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    EmbedBlot.prototype.formats = function () {
		        return this.statics.formats(this.domNode);
		    };
		    return EmbedBlot;
		}(leaf_1.default));
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = EmbedBlot;


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var leaf_1 = __webpack_require__(12);
		var Registry = __webpack_require__(6);
		var TextBlot = (function (_super) {
		    __extends(TextBlot, _super);
		    function TextBlot(node) {
		        var _this = _super.call(this, node) || this;
		        _this.text = _this.statics.value(_this.domNode);
		        return _this;
		    }
		    TextBlot.create = function (value) {
		        return document.createTextNode(value);
		    };
		    TextBlot.value = function (domNode) {
		        return domNode.data;
		    };
		    TextBlot.prototype.deleteAt = function (index, length) {
		        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
		    };
		    TextBlot.prototype.index = function (node, offset) {
		        if (this.domNode === node) {
		            return offset;
		        }
		        return -1;
		    };
		    TextBlot.prototype.insertAt = function (index, value, def) {
		        if (def == null) {
		            this.text = this.text.slice(0, index) + value + this.text.slice(index);
		            this.domNode.data = this.text;
		        }
		        else {
		            _super.prototype.insertAt.call(this, index, value, def);
		        }
		    };
		    TextBlot.prototype.length = function () {
		        return this.text.length;
		    };
		    TextBlot.prototype.optimize = function () {
		        _super.prototype.optimize.call(this);
		        this.text = this.statics.value(this.domNode);
		        if (this.text.length === 0) {
		            this.remove();
		        }
		        else if (this.next instanceof TextBlot && this.next.prev === this) {
		            this.insertAt(this.length(), this.next.value());
		            this.next.remove();
		        }
		    };
		    TextBlot.prototype.position = function (index, inclusive) {
		        if (inclusive === void 0) { inclusive = false; }
		        return [this.domNode, index];
		    };
		    TextBlot.prototype.split = function (index, force) {
		        if (force === void 0) { force = false; }
		        if (!force) {
		            if (index === 0)
		                return this;
		            if (index === this.length())
		                return this.next;
		        }
		        var after = Registry.create(this.domNode.splitText(index));
		        this.parent.insertBefore(after, this.next);
		        this.text = this.statics.value(this.domNode);
		        return after;
		    };
		    TextBlot.prototype.update = function (mutations) {
		        var _this = this;
		        if (mutations.some(function (mutation) {
		            return mutation.type === 'characterData' && mutation.target === _this.domNode;
		        })) {
		            this.text = this.statics.value(this.domNode);
		        }
		    };
		    TextBlot.prototype.value = function () {
		        return this.text;
		    };
		    return TextBlot;
		}(leaf_1.default));
		TextBlot.blotName = 'text';
		TextBlot.scope = Registry.Scope.INLINE_BLOT;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = TextBlot;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.overload = exports.expandConfig = undefined;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		__webpack_require__(19);

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _editor = __webpack_require__(27);

		var _editor2 = _interopRequireDefault(_editor);

		var _emitter3 = __webpack_require__(35);

		var _emitter4 = _interopRequireDefault(_emitter3);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _selection = __webpack_require__(40);

		var _selection2 = _interopRequireDefault(_selection);

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		var _theme = __webpack_require__(41);

		var _theme2 = _interopRequireDefault(_theme);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var debug = (0, _logger2.default)('quill');

		var Quill = function () {
		  _createClass(Quill, null, [{
		    key: 'debug',
		    value: function debug(limit) {
		      if (limit === true) {
		        limit = 'log';
		      }
		      _logger2.default.level(limit);
		    }
		  }, {
		    key: 'import',
		    value: function _import(name) {
		      if (this.imports[name] == null) {
		        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
		      }
		      return this.imports[name];
		    }
		  }, {
		    key: 'register',
		    value: function register(path, target) {
		      var _this = this;

		      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		      if (typeof path !== 'string') {
		        var name = path.attrName || path.blotName;
		        if (typeof name === 'string') {
		          // register(Blot | Attributor, overwrite)
		          this.register('formats/' + name, path, target);
		        } else {
		          Object.keys(path).forEach(function (key) {
		            _this.register(key, path[key], target);
		          });
		        }
		      } else {
		        if (this.imports[path] != null && !overwrite) {
		          debug.warn('Overwriting ' + path + ' with', target);
		        }
		        this.imports[path] = target;
		        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
		          _parchment2.default.register(target);
		        }
		      }
		    }
		  }]);

		  function Quill(container) {
		    var _this2 = this;

		    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		    _classCallCheck(this, Quill);

		    this.options = expandConfig(container, options);
		    this.container = this.options.container;
		    this.scrollingContainer = this.options.scrollingContainer || document.body;
		    if (this.container == null) {
		      return debug.error('Invalid Quill container', container);
		    }
		    if (this.options.debug) {
		      Quill.debug(this.options.debug);
		    }
		    var html = this.container.innerHTML.trim();
		    this.container.classList.add('ql-container');
		    this.container.innerHTML = '';
		    this.root = this.addContainer('ql-editor');
		    this.root.classList.add('ql-blank');
		    this.emitter = new _emitter4.default();
		    this.scroll = _parchment2.default.create(this.root, {
		      emitter: this.emitter,
		      whitelist: this.options.formats
		    });
		    this.editor = new _editor2.default(this.scroll);
		    this.selection = new _selection2.default(this.scroll, this.emitter);
		    this.theme = new this.options.theme(this, this.options);
		    this.keyboard = this.theme.addModule('keyboard');
		    this.clipboard = this.theme.addModule('clipboard');
		    this.history = this.theme.addModule('history');
		    this.theme.init();
		    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
		      if (type === _emitter4.default.events.TEXT_CHANGE) {
		        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
		      }
		    });
		    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
		      var range = _this2.selection.lastRange;
		      var index = range && range.length === 0 ? range.index : undefined;
		      modify.call(_this2, function () {
		        return _this2.editor.update(null, mutations, index);
		      }, source);
		    });
		    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
		    this.setContents(contents);
		    this.history.clear();
		    if (this.options.placeholder) {
		      this.root.setAttribute('data-placeholder', this.options.placeholder);
		    }
		    if (this.options.readOnly) {
		      this.disable();
		    }
		  }

		  _createClass(Quill, [{
		    key: 'addContainer',
		    value: function addContainer(container) {
		      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		      if (typeof container === 'string') {
		        var className = container;
		        container = document.createElement('div');
		        container.classList.add(className);
		      }
		      this.container.insertBefore(container, refNode);
		      return container;
		    }
		  }, {
		    key: 'blur',
		    value: function blur() {
		      this.selection.setRange(null);
		    }
		  }, {
		    key: 'deleteText',
		    value: function deleteText(index, length, source) {
		      var _this3 = this;

		      var _overload = overload(index, length, source);

		      var _overload2 = _slicedToArray(_overload, 4);

		      index = _overload2[0];
		      length = _overload2[1];
		      source = _overload2[3];

		      return modify.call(this, function () {
		        return _this3.editor.deleteText(index, length);
		      }, source, index, -1 * length);
		    }
		  }, {
		    key: 'disable',
		    value: function disable() {
		      this.enable(false);
		    }
		  }, {
		    key: 'enable',
		    value: function enable() {
		      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		      this.scroll.enable(enabled);
		      this.container.classList.toggle('ql-disabled', !enabled);
		      if (!enabled) {
		        this.blur();
		      }
		    }
		  }, {
		    key: 'focus',
		    value: function focus() {
		      var scrollTop = this.scrollingContainer.scrollTop;
		      this.selection.focus();
		      this.scrollingContainer.scrollTop = scrollTop;
		      this.selection.scrollIntoView();
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      var _this4 = this;

		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        var range = _this4.getSelection(true);
		        var change = new _quillDelta2.default();
		        if (range == null) {
		          return change;
		        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
		          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
		        } else if (range.length === 0) {
		          _this4.selection.format(name, value);
		          return change;
		        } else {
		          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
		        }
		        _this4.setSelection(range, _emitter4.default.sources.SILENT);
		        return change;
		      }, source);
		    }
		  }, {
		    key: 'formatLine',
		    value: function formatLine(index, length, name, value, source) {
		      var _this5 = this;

		      var formats = void 0;

		      var _overload3 = overload(index, length, name, value, source);

		      var _overload4 = _slicedToArray(_overload3, 4);

		      index = _overload4[0];
		      length = _overload4[1];
		      formats = _overload4[2];
		      source = _overload4[3];

		      return modify.call(this, function () {
		        return _this5.editor.formatLine(index, length, formats);
		      }, source, index, 0);
		    }
		  }, {
		    key: 'formatText',
		    value: function formatText(index, length, name, value, source) {
		      var _this6 = this;

		      var formats = void 0;

		      var _overload5 = overload(index, length, name, value, source);

		      var _overload6 = _slicedToArray(_overload5, 4);

		      index = _overload6[0];
		      length = _overload6[1];
		      formats = _overload6[2];
		      source = _overload6[3];

		      return modify.call(this, function () {
		        return _this6.editor.formatText(index, length, formats);
		      }, source, index, 0);
		    }
		  }, {
		    key: 'getBounds',
		    value: function getBounds(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      if (typeof index === 'number') {
		        return this.selection.getBounds(index, length);
		      } else {
		        return this.selection.getBounds(index.index, index.length);
		      }
		    }
		  }, {
		    key: 'getContents',
		    value: function getContents() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

		      var _overload7 = overload(index, length);

		      var _overload8 = _slicedToArray(_overload7, 2);

		      index = _overload8[0];
		      length = _overload8[1];

		      return this.editor.getContents(index, length);
		    }
		  }, {
		    key: 'getFormat',
		    value: function getFormat() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection();
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      if (typeof index === 'number') {
		        return this.editor.getFormat(index, length);
		      } else {
		        return this.editor.getFormat(index.index, index.length);
		      }
		    }
		  }, {
		    key: 'getLength',
		    value: function getLength() {
		      return this.scroll.length();
		    }
		  }, {
		    key: 'getModule',
		    value: function getModule(name) {
		      return this.theme.modules[name];
		    }
		  }, {
		    key: 'getSelection',
		    value: function getSelection() {
		      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		      if (focus) this.focus();
		      this.update(); // Make sure we access getRange with editor in consistent state
		      return this.selection.getRange()[0];
		    }
		  }, {
		    key: 'getText',
		    value: function getText() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

		      var _overload9 = overload(index, length);

		      var _overload10 = _slicedToArray(_overload9, 2);

		      index = _overload10[0];
		      length = _overload10[1];

		      return this.editor.getText(index, length);
		    }
		  }, {
		    key: 'hasFocus',
		    value: function hasFocus() {
		      return this.selection.hasFocus();
		    }
		  }, {
		    key: 'insertEmbed',
		    value: function insertEmbed(index, embed, value) {
		      var _this7 = this;

		      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

		      return modify.call(this, function () {
		        return _this7.editor.insertEmbed(index, embed, value);
		      }, source, index);
		    }
		  }, {
		    key: 'insertText',
		    value: function insertText(index, text, name, value, source) {
		      var _this8 = this;

		      var formats = void 0;

		      var _overload11 = overload(index, 0, name, value, source);

		      var _overload12 = _slicedToArray(_overload11, 4);

		      index = _overload12[0];
		      formats = _overload12[2];
		      source = _overload12[3];

		      return modify.call(this, function () {
		        return _this8.editor.insertText(index, text, formats);
		      }, source, index, text.length);
		    }
		  }, {
		    key: 'isEnabled',
		    value: function isEnabled() {
		      return !this.container.classList.contains('ql-disabled');
		    }
		  }, {
		    key: 'off',
		    value: function off() {
		      return this.emitter.off.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'on',
		    value: function on() {
		      return this.emitter.on.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'once',
		    value: function once() {
		      return this.emitter.once.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'pasteHTML',
		    value: function pasteHTML(index, html, source) {
		      this.clipboard.dangerouslyPasteHTML(index, html, source);
		    }
		  }, {
		    key: 'removeFormat',
		    value: function removeFormat(index, length, source) {
		      var _this9 = this;

		      var _overload13 = overload(index, length, source);

		      var _overload14 = _slicedToArray(_overload13, 4);

		      index = _overload14[0];
		      length = _overload14[1];
		      source = _overload14[3];

		      return modify.call(this, function () {
		        return _this9.editor.removeFormat(index, length);
		      }, source, index);
		    }
		  }, {
		    key: 'setContents',
		    value: function setContents(delta) {
		      var _this10 = this;

		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        delta = new _quillDelta2.default(delta);
		        var length = _this10.getLength();
		        var deleted = _this10.editor.deleteText(0, length);
		        var applied = _this10.editor.applyDelta(delta);
		        var lastOp = applied.ops[applied.ops.length - 1];
		        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
		          _this10.editor.deleteText(_this10.getLength() - 1, 1);
		          applied.delete(1);
		        }
		        var ret = deleted.compose(applied);
		        return ret;
		      }, source);
		    }
		  }, {
		    key: 'setSelection',
		    value: function setSelection(index, length, source) {
		      if (index == null) {
		        this.selection.setRange(null, length || Quill.sources.API);
		      } else {
		        var _overload15 = overload(index, length, source);

		        var _overload16 = _slicedToArray(_overload15, 4);

		        index = _overload16[0];
		        length = _overload16[1];
		        source = _overload16[3];

		        this.selection.setRange(new _selection.Range(index, length), source);
		      }
		      this.selection.scrollIntoView();
		    }
		  }, {
		    key: 'setText',
		    value: function setText(text) {
		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      var delta = new _quillDelta2.default().insert(text);
		      return this.setContents(delta, source);
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

		      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
		      this.selection.update(source);
		      return change;
		    }
		  }, {
		    key: 'updateContents',
		    value: function updateContents(delta) {
		      var _this11 = this;

		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        delta = new _quillDelta2.default(delta);
		        return _this11.editor.applyDelta(delta, source);
		      }, source, true);
		    }
		  }]);

		  return Quill;
		}();

		Quill.DEFAULTS = {
		  bounds: null,
		  formats: null,
		  modules: {},
		  placeholder: '',
		  readOnly: false,
		  scrollingContainer: null,
		  strict: true,
		  theme: 'default'
		};
		Quill.events = _emitter4.default.events;
		Quill.sources = _emitter4.default.sources;
		// eslint-disable-next-line no-undef
		Quill.version =  false ? 'dev' : ("1.1.9");

		Quill.imports = {
		  'delta': _quillDelta2.default,
		  'parchment': _parchment2.default,
		  'core/module': _module2.default,
		  'core/theme': _theme2.default
		};

		function expandConfig(container, userConfig) {
		  userConfig = (0, _extend2.default)(true, {
		    container: container,
		    modules: {
		      clipboard: true,
		      keyboard: true,
		      history: true
		    }
		  }, userConfig);
		  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
		    userConfig.theme = _theme2.default;
		  } else {
		    userConfig.theme = Quill.import('themes/' + userConfig.theme);
		    if (userConfig.theme == null) {
		      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
		    }
		  }
		  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
		  [themeConfig, userConfig].forEach(function (config) {
		    config.modules = config.modules || {};
		    Object.keys(config.modules).forEach(function (module) {
		      if (config.modules[module] === true) {
		        config.modules[module] = {};
		      }
		    });
		  });
		  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
		  var moduleConfig = moduleNames.reduce(function (config, name) {
		    var moduleClass = Quill.import('modules/' + name);
		    if (moduleClass == null) {
		      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
		    } else {
		      config[name] = moduleClass.DEFAULTS || {};
		    }
		    return config;
		  }, {});
		  // Special case toolbar shorthand
		  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
		    userConfig.modules.toolbar = {
		      container: userConfig.modules.toolbar
		    };
		  }
		  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
		  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
		    if (typeof userConfig[key] === 'string') {
		      userConfig[key] = document.querySelector(userConfig[key]);
		    }
		  });
		  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
		    if (userConfig.modules[name]) {
		      config[name] = userConfig.modules[name];
		    }
		    return config;
		  }, {});
		  return userConfig;
		}

		// Handle selection preservation and TEXT_CHANGE emission
		// common to modification APIs
		function modify(modifier, source, index, shift) {
		  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
		    return new _quillDelta2.default();
		  }
		  var range = index == null ? null : this.getSelection();
		  var oldDelta = this.editor.delta;
		  var change = modifier();
		  if (range != null && source === _emitter4.default.sources.USER) {
		    if (index === true) index = range.index;
		    if (shift == null) {
		      range = shiftRange(range, change, source);
		    } else if (shift !== 0) {
		      range = shiftRange(range, index, shift, source);
		    }
		    this.setSelection(range, _emitter4.default.sources.SILENT);
		  }
		  if (change.length() > 0) {
		    var _emitter;

		    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
		    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
		    if (source !== _emitter4.default.sources.SILENT) {
		      var _emitter2;

		      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
		    }
		  }
		  return change;
		}

		function overload(index, length, name, value, source) {
		  var formats = {};
		  if (typeof index.index === 'number' && typeof index.length === 'number') {
		    // Allow for throwaway end (used by insertText/insertEmbed)
		    if (typeof length !== 'number') {
		      source = value, value = name, name = length, length = index.length, index = index.index;
		    } else {
		      length = index.length, index = index.index;
		    }
		  } else if (typeof length !== 'number') {
		    source = value, value = name, name = length, length = 0;
		  }
		  // Handle format being object, two format name/value strings or excluded
		  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
		    formats = name;
		    source = value;
		  } else if (typeof name === 'string') {
		    if (value != null) {
		      formats[name] = value;
		    } else {
		      source = name;
		    }
		  }
		  // Handle optional source
		  source = source || _emitter4.default.sources.API;
		  return [index, length, formats, source];
		}

		function shiftRange(range, index, length, source) {
		  if (range == null) return null;
		  var start = void 0,
		      end = void 0;
		  if (index instanceof _quillDelta2.default) {
		    var _map = [range.index, range.index + range.length].map(function (pos) {
		      return index.transformPosition(pos, source === _emitter4.default.sources.USER);
		    });

		    var _map2 = _slicedToArray(_map, 2);

		    start = _map2[0];
		    end = _map2[1];
		  } else {
		    var _map3 = [range.index, range.index + range.length].map(function (pos) {
		      if (pos < index || pos === index && source !== _emitter4.default.sources.USER) return pos;
		      if (length >= 0) {
		        return pos + length;
		      } else {
		        return Math.max(index, pos + length);
		      }
		    });

		    var _map4 = _slicedToArray(_map3, 2);

		    start = _map4[0];
		    end = _map4[1];
		  }
		  return new _selection.Range(start, end - start);
		}

		exports.expandConfig = expandConfig;
		exports.overload = overload;
		exports.default = Quill;

	/***/ },
	/* 19 */
	/***/ function(module, exports) {

		'use strict';

		var elem = document.createElement('div');
		elem.classList.toggle('test-class', false);
		if (elem.classList.contains('test-class')) {
		  (function () {
		    var _toggle = DOMTokenList.prototype.toggle;
		    DOMTokenList.prototype.toggle = function (token, force) {
		      if (arguments.length > 1 && !this.contains(token) === !force) {
		        return force;
		      } else {
		        return _toggle.call(this, token);
		      }
		    };
		  })();
		}

		if (!String.prototype.startsWith) {
		  String.prototype.startsWith = function (searchString, position) {
		    position = position || 0;
		    return this.substr(position, searchString.length) === searchString;
		  };
		}

		if (!String.prototype.endsWith) {
		  String.prototype.endsWith = function (searchString, position) {
		    var subjectString = this.toString();
		    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
		      position = subjectString.length;
		    }
		    position -= searchString.length;
		    var lastIndex = subjectString.indexOf(searchString, position);
		    return lastIndex !== -1 && lastIndex === position;
		  };
		}

		if (!Array.prototype.find) {
		  Object.defineProperty(Array.prototype, "find", {
		    value: function value(predicate) {
		      if (this === null) {
		        throw new TypeError('Array.prototype.find called on null or undefined');
		      }
		      if (typeof predicate !== 'function') {
		        throw new TypeError('predicate must be a function');
		      }
		      var list = Object(this);
		      var length = list.length >>> 0;
		      var thisArg = arguments[1];
		      var value;

		      for (var i = 0; i < length; i++) {
		        value = list[i];
		        if (predicate.call(thisArg, value, i, list)) {
		          return value;
		        }
		      }
		      return undefined;
		    }
		  });
		}

		// Disable resizing in Firefox
		document.addEventListener("DOMContentLoaded", function () {
		  document.execCommand("enableObjectResizing", false, false);
		});

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var diff = __webpack_require__(21);
		var equal = __webpack_require__(22);
		var extend = __webpack_require__(25);
		var op = __webpack_require__(26);


		var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


		var Delta = function (ops) {
		  // Assume we are given a well formed ops
		  if (Array.isArray(ops)) {
		    this.ops = ops;
		  } else if (ops != null && Array.isArray(ops.ops)) {
		    this.ops = ops.ops;
		  } else {
		    this.ops = [];
		  }
		};


		Delta.prototype.insert = function (text, attributes) {
		  var newOp = {};
		  if (text.length === 0) return this;
		  newOp.insert = text;
		  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
		    newOp.attributes = attributes;
		  }
		  return this.push(newOp);
		};

		Delta.prototype['delete'] = function (length) {
		  if (length <= 0) return this;
		  return this.push({ 'delete': length });
		};

		Delta.prototype.retain = function (length, attributes) {
		  if (length <= 0) return this;
		  var newOp = { retain: length };
		  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
		    newOp.attributes = attributes;
		  }
		  return this.push(newOp);
		};

		Delta.prototype.push = function (newOp) {
		  var index = this.ops.length;
		  var lastOp = this.ops[index - 1];
		  newOp = extend(true, {}, newOp);
		  if (typeof lastOp === 'object') {
		    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
		      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
		      return this;
		    }
		    // Since it does not matter if we insert before or after deleting at the same index,
		    // always prefer to insert first
		    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
		      index -= 1;
		      lastOp = this.ops[index - 1];
		      if (typeof lastOp !== 'object') {
		        this.ops.unshift(newOp);
		        return this;
		      }
		    }
		    if (equal(newOp.attributes, lastOp.attributes)) {
		      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
		        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
		        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
		        return this;
		      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
		        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
		        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
		        return this;
		      }
		    }
		  }
		  if (index === this.ops.length) {
		    this.ops.push(newOp);
		  } else {
		    this.ops.splice(index, 0, newOp);
		  }
		  return this;
		};

		Delta.prototype.filter = function (predicate) {
		  return this.ops.filter(predicate);
		};

		Delta.prototype.forEach = function (predicate) {
		  this.ops.forEach(predicate);
		};

		Delta.prototype.map = function (predicate) {
		  return this.ops.map(predicate);
		};

		Delta.prototype.partition = function (predicate) {
		  var passed = [], failed = [];
		  this.forEach(function(op) {
		    var target = predicate(op) ? passed : failed;
		    target.push(op);
		  });
		  return [passed, failed];
		};

		Delta.prototype.reduce = function (predicate, initial) {
		  return this.ops.reduce(predicate, initial);
		};

		Delta.prototype.chop = function () {
		  var lastOp = this.ops[this.ops.length - 1];
		  if (lastOp && lastOp.retain && !lastOp.attributes) {
		    this.ops.pop();
		  }
		  return this;
		};

		Delta.prototype.length = function () {
		  return this.reduce(function (length, elem) {
		    return length + op.length(elem);
		  }, 0);
		};

		Delta.prototype.slice = function (start, end) {
		  start = start || 0;
		  if (typeof end !== 'number') end = Infinity;
		  var ops = [];
		  var iter = op.iterator(this.ops);
		  var index = 0;
		  while (index < end && iter.hasNext()) {
		    var nextOp;
		    if (index < start) {
		      nextOp = iter.next(start - index);
		    } else {
		      nextOp = iter.next(end - index);
		      ops.push(nextOp);
		    }
		    index += op.length(nextOp);
		  }
		  return new Delta(ops);
		};


		Delta.prototype.compose = function (other) {
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  var delta = new Delta();
		  while (thisIter.hasNext() || otherIter.hasNext()) {
		    if (otherIter.peekType() === 'insert') {
		      delta.push(otherIter.next());
		    } else if (thisIter.peekType() === 'delete') {
		      delta.push(thisIter.next());
		    } else {
		      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
		      var thisOp = thisIter.next(length);
		      var otherOp = otherIter.next(length);
		      if (typeof otherOp.retain === 'number') {
		        var newOp = {};
		        if (typeof thisOp.retain === 'number') {
		          newOp.retain = length;
		        } else {
		          newOp.insert = thisOp.insert;
		        }
		        // Preserve null when composing with a retain, otherwise remove it for inserts
		        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
		        if (attributes) newOp.attributes = attributes;
		        delta.push(newOp);
		      // Other op should be delete, we could be an insert or retain
		      // Insert + delete cancels out
		      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
		        delta.push(otherOp);
		      }
		    }
		  }
		  return delta.chop();
		};

		Delta.prototype.concat = function (other) {
		  var delta = new Delta(this.ops.slice());
		  if (other.ops.length > 0) {
		    delta.push(other.ops[0]);
		    delta.ops = delta.ops.concat(other.ops.slice(1));
		  }
		  return delta;
		};

		Delta.prototype.diff = function (other, index) {
		  if (this.ops === other.ops) {
		    return new Delta();
		  }
		  var strings = [this, other].map(function (delta) {
		    return delta.map(function (op) {
		      if (op.insert != null) {
		        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
		      }
		      var prep = (ops === other.ops) ? 'on' : 'with';
		      throw new Error('diff() called ' + prep + ' non-document');
		    }).join('');
		  });
		  var delta = new Delta();
		  var diffResult = diff(strings[0], strings[1], index);
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  diffResult.forEach(function (component) {
		    var length = component[1].length;
		    while (length > 0) {
		      var opLength = 0;
		      switch (component[0]) {
		        case diff.INSERT:
		          opLength = Math.min(otherIter.peekLength(), length);
		          delta.push(otherIter.next(opLength));
		          break;
		        case diff.DELETE:
		          opLength = Math.min(length, thisIter.peekLength());
		          thisIter.next(opLength);
		          delta['delete'](opLength);
		          break;
		        case diff.EQUAL:
		          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
		          var thisOp = thisIter.next(opLength);
		          var otherOp = otherIter.next(opLength);
		          if (equal(thisOp.insert, otherOp.insert)) {
		            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
		          } else {
		            delta.push(otherOp)['delete'](opLength);
		          }
		          break;
		      }
		      length -= opLength;
		    }
		  });
		  return delta.chop();
		};

		Delta.prototype.eachLine = function (predicate, newline) {
		  newline = newline || '\n';
		  var iter = op.iterator(this.ops);
		  var line = new Delta();
		  while (iter.hasNext()) {
		    if (iter.peekType() !== 'insert') return;
		    var thisOp = iter.peek();
		    var start = op.length(thisOp) - iter.peekLength();
		    var index = typeof thisOp.insert === 'string' ?
		      thisOp.insert.indexOf(newline, start) - start : -1;
		    if (index < 0) {
		      line.push(iter.next());
		    } else if (index > 0) {
		      line.push(iter.next(index));
		    } else {
		      predicate(line, iter.next(1).attributes || {});
		      line = new Delta();
		    }
		  }
		  if (line.length() > 0) {
		    predicate(line, {});
		  }
		};

		Delta.prototype.transform = function (other, priority) {
		  priority = !!priority;
		  if (typeof other === 'number') {
		    return this.transformPosition(other, priority);
		  }
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  var delta = new Delta();
		  while (thisIter.hasNext() || otherIter.hasNext()) {
		    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
		      delta.retain(op.length(thisIter.next()));
		    } else if (otherIter.peekType() === 'insert') {
		      delta.push(otherIter.next());
		    } else {
		      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
		      var thisOp = thisIter.next(length);
		      var otherOp = otherIter.next(length);
		      if (thisOp['delete']) {
		        // Our delete either makes their delete redundant or removes their retain
		        continue;
		      } else if (otherOp['delete']) {
		        delta.push(otherOp);
		      } else {
		        // We retain either their retain or insert
		        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
		      }
		    }
		  }
		  return delta.chop();
		};

		Delta.prototype.transformPosition = function (index, priority) {
		  priority = !!priority;
		  var thisIter = op.iterator(this.ops);
		  var offset = 0;
		  while (thisIter.hasNext() && offset <= index) {
		    var length = thisIter.peekLength();
		    var nextType = thisIter.peekType();
		    thisIter.next();
		    if (nextType === 'delete') {
		      index -= Math.min(length, index - offset);
		      continue;
		    } else if (nextType === 'insert' && (offset < index || !priority)) {
		      index += length;
		    }
		    offset += length;
		  }
		  return index;
		};


		module.exports = Delta;


	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		/**
		 * This library modifies the diff-patch-match library by Neil Fraser
		 * by removing the patch and match functionality and certain advanced
		 * options in the diff function. The original license is as follows:
		 *
		 * ===
		 *
		 * Diff Match and Patch
		 *
		 * Copyright 2006 Google Inc.
		 * http://code.google.com/p/google-diff-match-patch/
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *   http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */


		/**
		 * The data structure representing a diff is an array of tuples:
		 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
		 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
		 */
		var DIFF_DELETE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;


		/**
		 * Find the differences between two texts.  Simplifies the problem by stripping
		 * any common prefix or suffix off the texts before diffing.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {Int} cursor_pos Expected edit position in text1 (optional)
		 * @return {Array} Array of diff tuples.
		 */
		function diff_main(text1, text2, cursor_pos) {
		  // Check for equality (speedup).
		  if (text1 == text2) {
		    if (text1) {
		      return [[DIFF_EQUAL, text1]];
		    }
		    return [];
		  }

		  // Check cursor_pos within bounds
		  if (cursor_pos < 0 || text1.length < cursor_pos) {
		    cursor_pos = null;
		  }

		  // Trim off common prefix (speedup).
		  var commonlength = diff_commonPrefix(text1, text2);
		  var commonprefix = text1.substring(0, commonlength);
		  text1 = text1.substring(commonlength);
		  text2 = text2.substring(commonlength);

		  // Trim off common suffix (speedup).
		  commonlength = diff_commonSuffix(text1, text2);
		  var commonsuffix = text1.substring(text1.length - commonlength);
		  text1 = text1.substring(0, text1.length - commonlength);
		  text2 = text2.substring(0, text2.length - commonlength);

		  // Compute the diff on the middle block.
		  var diffs = diff_compute_(text1, text2);

		  // Restore the prefix and suffix.
		  if (commonprefix) {
		    diffs.unshift([DIFF_EQUAL, commonprefix]);
		  }
		  if (commonsuffix) {
		    diffs.push([DIFF_EQUAL, commonsuffix]);
		  }
		  diff_cleanupMerge(diffs);
		  if (cursor_pos != null) {
		    diffs = fix_cursor(diffs, cursor_pos);
		  }
		  return diffs;
		};


		/**
		 * Find the differences between two texts.  Assumes that the texts do not
		 * have any common prefix or suffix.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_compute_(text1, text2) {
		  var diffs;

		  if (!text1) {
		    // Just add some text (speedup).
		    return [[DIFF_INSERT, text2]];
		  }

		  if (!text2) {
		    // Just delete some text (speedup).
		    return [[DIFF_DELETE, text1]];
		  }

		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  var i = longtext.indexOf(shorttext);
		  if (i != -1) {
		    // Shorter text is inside the longer text (speedup).
		    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
		             [DIFF_EQUAL, shorttext],
		             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
		    // Swap insertions for deletions if diff is reversed.
		    if (text1.length > text2.length) {
		      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
		    }
		    return diffs;
		  }

		  if (shorttext.length == 1) {
		    // Single character string.
		    // After the previous speedup, the character can't be an equality.
		    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
		  }

		  // Check to see if the problem can be split in two.
		  var hm = diff_halfMatch_(text1, text2);
		  if (hm) {
		    // A half-match was found, sort out the return data.
		    var text1_a = hm[0];
		    var text1_b = hm[1];
		    var text2_a = hm[2];
		    var text2_b = hm[3];
		    var mid_common = hm[4];
		    // Send both pairs off for separate processing.
		    var diffs_a = diff_main(text1_a, text2_a);
		    var diffs_b = diff_main(text1_b, text2_b);
		    // Merge the results.
		    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
		  }

		  return diff_bisect_(text1, text2);
		};


		/**
		 * Find the 'middle snake' of a diff, split the problem in two
		 * and return the recursively constructed diff.
		 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 * @private
		 */
		function diff_bisect_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  var max_d = Math.ceil((text1_length + text2_length) / 2);
		  var v_offset = max_d;
		  var v_length = 2 * max_d;
		  var v1 = new Array(v_length);
		  var v2 = new Array(v_length);
		  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
		  // integers and undefined.
		  for (var x = 0; x < v_length; x++) {
		    v1[x] = -1;
		    v2[x] = -1;
		  }
		  v1[v_offset + 1] = 0;
		  v2[v_offset + 1] = 0;
		  var delta = text1_length - text2_length;
		  // If the total number of characters is odd, then the front path will collide
		  // with the reverse path.
		  var front = (delta % 2 != 0);
		  // Offsets for start and end of k loop.
		  // Prevents mapping of space beyond the grid.
		  var k1start = 0;
		  var k1end = 0;
		  var k2start = 0;
		  var k2end = 0;
		  for (var d = 0; d < max_d; d++) {
		    // Walk the front path one step.
		    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
		      var k1_offset = v_offset + k1;
		      var x1;
		      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
		        x1 = v1[k1_offset + 1];
		      } else {
		        x1 = v1[k1_offset - 1] + 1;
		      }
		      var y1 = x1 - k1;
		      while (x1 < text1_length && y1 < text2_length &&
		             text1.charAt(x1) == text2.charAt(y1)) {
		        x1++;
		        y1++;
		      }
		      v1[k1_offset] = x1;
		      if (x1 > text1_length) {
		        // Ran off the right of the graph.
		        k1end += 2;
		      } else if (y1 > text2_length) {
		        // Ran off the bottom of the graph.
		        k1start += 2;
		      } else if (front) {
		        var k2_offset = v_offset + delta - k1;
		        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
		          // Mirror x2 onto top-left coordinate system.
		          var x2 = text1_length - v2[k2_offset];
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }

		    // Walk the reverse path one step.
		    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
		      var k2_offset = v_offset + k2;
		      var x2;
		      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
		        x2 = v2[k2_offset + 1];
		      } else {
		        x2 = v2[k2_offset - 1] + 1;
		      }
		      var y2 = x2 - k2;
		      while (x2 < text1_length && y2 < text2_length &&
		             text1.charAt(text1_length - x2 - 1) ==
		             text2.charAt(text2_length - y2 - 1)) {
		        x2++;
		        y2++;
		      }
		      v2[k2_offset] = x2;
		      if (x2 > text1_length) {
		        // Ran off the left of the graph.
		        k2end += 2;
		      } else if (y2 > text2_length) {
		        // Ran off the top of the graph.
		        k2start += 2;
		      } else if (!front) {
		        var k1_offset = v_offset + delta - k2;
		        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
		          var x1 = v1[k1_offset];
		          var y1 = v_offset + x1 - k1_offset;
		          // Mirror x2 onto top-left coordinate system.
		          x2 = text1_length - x2;
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }
		  }
		  // Diff took too long and hit the deadline or
		  // number of diffs equals number of characters, no commonality at all.
		  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
		};


		/**
		 * Given the location of the 'middle snake', split the diff in two parts
		 * and recurse.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {number} x Index of split point in text1.
		 * @param {number} y Index of split point in text2.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_bisectSplit_(text1, text2, x, y) {
		  var text1a = text1.substring(0, x);
		  var text2a = text2.substring(0, y);
		  var text1b = text1.substring(x);
		  var text2b = text2.substring(y);

		  // Compute both diffs serially.
		  var diffs = diff_main(text1a, text2a);
		  var diffsb = diff_main(text1b, text2b);

		  return diffs.concat(diffsb);
		};


		/**
		 * Determine the common prefix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the start of each
		 *     string.
		 */
		function diff_commonPrefix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerstart = 0;
		  while (pointermin < pointermid) {
		    if (text1.substring(pointerstart, pointermid) ==
		        text2.substring(pointerstart, pointermid)) {
		      pointermin = pointermid;
		      pointerstart = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }
		  return pointermid;
		};


		/**
		 * Determine the common suffix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of each string.
		 */
		function diff_commonSuffix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 ||
		      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerend = 0;
		  while (pointermin < pointermid) {
		    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
		        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
		      pointermin = pointermid;
		      pointerend = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }
		  return pointermid;
		};


		/**
		 * Do the two texts share a substring which is at least half the length of the
		 * longer text?
		 * This speedup can produce non-minimal diffs.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {Array.<string>} Five element Array, containing the prefix of
		 *     text1, the suffix of text1, the prefix of text2, the suffix of
		 *     text2 and the common middle.  Or null if there was no match.
		 */
		function diff_halfMatch_(text1, text2) {
		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
		    return null;  // Pointless.
		  }

		  /**
		   * Does a substring of shorttext exist within longtext such that the substring
		   * is at least half the length of longtext?
		   * Closure, but does not reference any external variables.
		   * @param {string} longtext Longer string.
		   * @param {string} shorttext Shorter string.
		   * @param {number} i Start index of quarter length substring within longtext.
		   * @return {Array.<string>} Five element Array, containing the prefix of
		   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
		   *     of shorttext and the common middle.  Or null if there was no match.
		   * @private
		   */
		  function diff_halfMatchI_(longtext, shorttext, i) {
		    // Start with a 1/4 length substring at position i as a seed.
		    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
		    var j = -1;
		    var best_common = '';
		    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
		    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
		      var prefixLength = diff_commonPrefix(longtext.substring(i),
		                                           shorttext.substring(j));
		      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
		                                           shorttext.substring(0, j));
		      if (best_common.length < suffixLength + prefixLength) {
		        best_common = shorttext.substring(j - suffixLength, j) +
		            shorttext.substring(j, j + prefixLength);
		        best_longtext_a = longtext.substring(0, i - suffixLength);
		        best_longtext_b = longtext.substring(i + prefixLength);
		        best_shorttext_a = shorttext.substring(0, j - suffixLength);
		        best_shorttext_b = shorttext.substring(j + prefixLength);
		      }
		    }
		    if (best_common.length * 2 >= longtext.length) {
		      return [best_longtext_a, best_longtext_b,
		              best_shorttext_a, best_shorttext_b, best_common];
		    } else {
		      return null;
		    }
		  }

		  // First check if the second quarter is the seed for a half-match.
		  var hm1 = diff_halfMatchI_(longtext, shorttext,
		                             Math.ceil(longtext.length / 4));
		  // Check again based on the third quarter.
		  var hm2 = diff_halfMatchI_(longtext, shorttext,
		                             Math.ceil(longtext.length / 2));
		  var hm;
		  if (!hm1 && !hm2) {
		    return null;
		  } else if (!hm2) {
		    hm = hm1;
		  } else if (!hm1) {
		    hm = hm2;
		  } else {
		    // Both matched.  Select the longest.
		    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
		  }

		  // A half-match was found, sort out the return data.
		  var text1_a, text1_b, text2_a, text2_b;
		  if (text1.length > text2.length) {
		    text1_a = hm[0];
		    text1_b = hm[1];
		    text2_a = hm[2];
		    text2_b = hm[3];
		  } else {
		    text2_a = hm[0];
		    text2_b = hm[1];
		    text1_a = hm[2];
		    text1_b = hm[3];
		  }
		  var mid_common = hm[4];
		  return [text1_a, text1_b, text2_a, text2_b, mid_common];
		};


		/**
		 * Reorder and merge like edit sections.  Merge equalities.
		 * Any edit section can move as long as it doesn't cross an equality.
		 * @param {Array} diffs Array of diff tuples.
		 */
		function diff_cleanupMerge(diffs) {
		  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
		  var pointer = 0;
		  var count_delete = 0;
		  var count_insert = 0;
		  var text_delete = '';
		  var text_insert = '';
		  var commonlength;
		  while (pointer < diffs.length) {
		    switch (diffs[pointer][0]) {
		      case DIFF_INSERT:
		        count_insert++;
		        text_insert += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_DELETE:
		        count_delete++;
		        text_delete += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_EQUAL:
		        // Upon reaching an equality, check for prior redundancies.
		        if (count_delete + count_insert > 1) {
		          if (count_delete !== 0 && count_insert !== 0) {
		            // Factor out any common prefixies.
		            commonlength = diff_commonPrefix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              if ((pointer - count_delete - count_insert) > 0 &&
		                  diffs[pointer - count_delete - count_insert - 1][0] ==
		                  DIFF_EQUAL) {
		                diffs[pointer - count_delete - count_insert - 1][1] +=
		                    text_insert.substring(0, commonlength);
		              } else {
		                diffs.splice(0, 0, [DIFF_EQUAL,
		                                    text_insert.substring(0, commonlength)]);
		                pointer++;
		              }
		              text_insert = text_insert.substring(commonlength);
		              text_delete = text_delete.substring(commonlength);
		            }
		            // Factor out any common suffixies.
		            commonlength = diff_commonSuffix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              diffs[pointer][1] = text_insert.substring(text_insert.length -
		                  commonlength) + diffs[pointer][1];
		              text_insert = text_insert.substring(0, text_insert.length -
		                  commonlength);
		              text_delete = text_delete.substring(0, text_delete.length -
		                  commonlength);
		            }
		          }
		          // Delete the offending records and add the merged ones.
		          if (count_delete === 0) {
		            diffs.splice(pointer - count_insert,
		                count_delete + count_insert, [DIFF_INSERT, text_insert]);
		          } else if (count_insert === 0) {
		            diffs.splice(pointer - count_delete,
		                count_delete + count_insert, [DIFF_DELETE, text_delete]);
		          } else {
		            diffs.splice(pointer - count_delete - count_insert,
		                count_delete + count_insert, [DIFF_DELETE, text_delete],
		                [DIFF_INSERT, text_insert]);
		          }
		          pointer = pointer - count_delete - count_insert +
		                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
		        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
		          // Merge this equality with the previous one.
		          diffs[pointer - 1][1] += diffs[pointer][1];
		          diffs.splice(pointer, 1);
		        } else {
		          pointer++;
		        }
		        count_insert = 0;
		        count_delete = 0;
		        text_delete = '';
		        text_insert = '';
		        break;
		    }
		  }
		  if (diffs[diffs.length - 1][1] === '') {
		    diffs.pop();  // Remove the dummy entry at the end.
		  }

		  // Second pass: look for single edits surrounded on both sides by equalities
		  // which can be shifted sideways to eliminate an equality.
		  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
		  var changes = false;
		  pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
		        diffs[pointer + 1][0] == DIFF_EQUAL) {
		      // This is a single edit surrounded by equalities.
		      if (diffs[pointer][1].substring(diffs[pointer][1].length -
		          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
		        // Shift the edit over the previous equality.
		        diffs[pointer][1] = diffs[pointer - 1][1] +
		            diffs[pointer][1].substring(0, diffs[pointer][1].length -
		                                        diffs[pointer - 1][1].length);
		        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
		        diffs.splice(pointer - 1, 1);
		        changes = true;
		      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
		          diffs[pointer + 1][1]) {
		        // Shift the edit over the next equality.
		        diffs[pointer - 1][1] += diffs[pointer + 1][1];
		        diffs[pointer][1] =
		            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
		            diffs[pointer + 1][1];
		        diffs.splice(pointer + 1, 1);
		        changes = true;
		      }
		    }
		    pointer++;
		  }
		  // If shifts were made, the diff needs reordering and another shift sweep.
		  if (changes) {
		    diff_cleanupMerge(diffs);
		  }
		};


		var diff = diff_main;
		diff.INSERT = DIFF_INSERT;
		diff.DELETE = DIFF_DELETE;
		diff.EQUAL = DIFF_EQUAL;

		module.exports = diff;

		/*
		 * Modify a diff such that the cursor position points to the start of a change:
		 * E.g.
		 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
		 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
		 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
		 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
		 *
		 * @param {Array} diffs Array of diff tuples
		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
		 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
		 */
		function cursor_normalize_diff (diffs, cursor_pos) {
		  if (cursor_pos === 0) {
		    return [DIFF_EQUAL, diffs];
		  }
		  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
		    var d = diffs[i];
		    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
		      var next_pos = current_pos + d[1].length;
		      if (cursor_pos === next_pos) {
		        return [i + 1, diffs];
		      } else if (cursor_pos < next_pos) {
		        // copy to prevent side effects
		        diffs = diffs.slice();
		        // split d into two diff changes
		        var split_pos = cursor_pos - current_pos;
		        var d_left = [d[0], d[1].slice(0, split_pos)];
		        var d_right = [d[0], d[1].slice(split_pos)];
		        diffs.splice(i, 1, d_left, d_right);
		        return [i + 1, diffs];
		      } else {
		        current_pos = next_pos;
		      }
		    }
		  }
		  throw new Error('cursor_pos is out of bounds!')
		}

		/*
		 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
		 *
		 * Case 1)
		 *   Check if a naive shift is possible:
		 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
		 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
		 * Case 2)
		 *   Check if the following shifts are possible:
		 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
		 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
		 *         ^            ^
		 *         d          d_next
		 *
		 * @param {Array} diffs Array of diff tuples
		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
		 * @return {Array} Array of diff tuples
		 */
		function fix_cursor (diffs, cursor_pos) {
		  var norm = cursor_normalize_diff(diffs, cursor_pos);
		  var ndiffs = norm[1];
		  var cursor_pointer = norm[0];
		  var d = ndiffs[cursor_pointer];
		  var d_next = ndiffs[cursor_pointer + 1];

		  if (d == null) {
		    // Text was deleted from end of original string,
		    // cursor is now out of bounds in new string
		    return diffs;
		  } else if (d[0] !== DIFF_EQUAL) {
		    // A modification happened at the cursor location.
		    // This is the expected outcome, so we can return the original diff.
		    return diffs;
		  } else {
		    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
		      // Case 1)
		      // It is possible to perform a naive shift
		      ndiffs.splice(cursor_pointer, 2, d_next, d)
		      return merge_tuples(ndiffs, cursor_pointer, 2)
		    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
		      // Case 2)
		      // d[1] is a prefix of d_next[1]
		      // We can assume that d_next[0] !== 0, since d[0] === 0
		      // Shift edit locations..
		      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
		      var suffix = d_next[1].slice(d[1].length);
		      if (suffix.length > 0) {
		        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
		      }
		      return merge_tuples(ndiffs, cursor_pointer, 3)
		    } else {
		      // Not possible to perform any modification
		      return diffs;
		    }
		  }

		}

		/*
		 * Try to merge tuples with their neigbors in a given range.
		 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
		 *
		 * @param {Array} diffs Array of diff tuples.
		 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
		 * @param {Int} length Number of consecutive elements to check.
		 * @return {Array} Array of merged diff tuples.
		 */
		function merge_tuples (diffs, start, length) {
		  // Check from (start-1) to (start+length).
		  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
		    if (i + 1 < diffs.length) {
		      var left_d = diffs[i];
		      var right_d = diffs[i+1];
		      if (left_d[0] === right_d[1]) {
		        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
		      }
		    }
		  }
		  return diffs;
		}


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var pSlice = Array.prototype.slice;
		var objectKeys = __webpack_require__(23);
		var isArguments = __webpack_require__(24);

		var deepEqual = module.exports = function (actual, expected, opts) {
		  if (!opts) opts = {};
		  // 7.1. All identical values are equivalent, as determined by ===.
		  if (actual === expected) {
		    return true;

		  } else if (actual instanceof Date && expected instanceof Date) {
		    return actual.getTime() === expected.getTime();

		  // 7.3. Other pairs that do not both pass typeof value == 'object',
		  // equivalence is determined by ==.
		  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
		    return opts.strict ? actual === expected : actual == expected;

		  // 7.4. For all other Object pairs, including Array objects, equivalence is
		  // determined by having the same number of owned properties (as verified
		  // with Object.prototype.hasOwnProperty.call), the same set of keys
		  // (although not necessarily the same order), equivalent values for every
		  // corresponding key, and an identical 'prototype' property. Note: this
		  // accounts for both named and indexed properties on Arrays.
		  } else {
		    return objEquiv(actual, expected, opts);
		  }
		}

		function isUndefinedOrNull(value) {
		  return value === null || value === undefined;
		}

		function isBuffer (x) {
		  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
		  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
		    return false;
		  }
		  if (x.length > 0 && typeof x[0] !== 'number') return false;
		  return true;
		}

		function objEquiv(a, b, opts) {
		  var i, key;
		  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
		    return false;
		  // an identical 'prototype' property.
		  if (a.prototype !== b.prototype) return false;
		  //~~~I've managed to break Object.keys through screwy arguments passing.
		  //   Converting to array solves the problem.
		  if (isArguments(a)) {
		    if (!isArguments(b)) {
		      return false;
		    }
		    a = pSlice.call(a);
		    b = pSlice.call(b);
		    return deepEqual(a, b, opts);
		  }
		  if (isBuffer(a)) {
		    if (!isBuffer(b)) {
		      return false;
		    }
		    if (a.length !== b.length) return false;
		    for (i = 0; i < a.length; i++) {
		      if (a[i] !== b[i]) return false;
		    }
		    return true;
		  }
		  try {
		    var ka = objectKeys(a),
		        kb = objectKeys(b);
		  } catch (e) {//happens when one is a string literal and the other isn't
		    return false;
		  }
		  // having the same number of owned properties (keys incorporates
		  // hasOwnProperty)
		  if (ka.length != kb.length)
		    return false;
		  //the same set of keys (although not necessarily the same order),
		  ka.sort();
		  kb.sort();
		  //~~~cheap key test
		  for (i = ka.length - 1; i >= 0; i--) {
		    if (ka[i] != kb[i])
		      return false;
		  }
		  //equivalent values for every corresponding key, and
		  //~~~possibly expensive deep test
		  for (i = ka.length - 1; i >= 0; i--) {
		    key = ka[i];
		    if (!deepEqual(a[key], b[key], opts)) return false;
		  }
		  return typeof a === typeof b;
		}


	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		exports = module.exports = typeof Object.keys === 'function'
		  ? Object.keys : shim;

		exports.shim = shim;
		function shim (obj) {
		  var keys = [];
		  for (var key in obj) keys.push(key);
		  return keys;
		}


	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		var supportsArgumentsClass = (function(){
		  return Object.prototype.toString.call(arguments)
		})() == '[object Arguments]';

		exports = module.exports = supportsArgumentsClass ? supported : unsupported;

		exports.supported = supported;
		function supported(object) {
		  return Object.prototype.toString.call(object) == '[object Arguments]';
		};

		exports.unsupported = unsupported;
		function unsupported(object){
		  return object &&
		    typeof object == 'object' &&
		    typeof object.length == 'number' &&
		    Object.prototype.hasOwnProperty.call(object, 'callee') &&
		    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
		    false;
		};


	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		'use strict';

		var hasOwn = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;

		var isArray = function isArray(arr) {
			if (typeof Array.isArray === 'function') {
				return Array.isArray(arr);
			}

			return toStr.call(arr) === '[object Array]';
		};

		var isPlainObject = function isPlainObject(obj) {
			if (!obj || toStr.call(obj) !== '[object Object]') {
				return false;
			}

			var hasOwnConstructor = hasOwn.call(obj, 'constructor');
			var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
			// Not own constructor property must be Object
			if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			var key;
			for (key in obj) {/**/}

			return typeof key === 'undefined' || hasOwn.call(obj, key);
		};

		module.exports = function extend() {
			var options, name, src, copy, copyIsArray, clone,
				target = arguments[0],
				i = 1,
				length = arguments.length,
				deep = false;

			// Handle a deep copy situation
			if (typeof target === 'boolean') {
				deep = target;
				target = arguments[1] || {};
				// skip the boolean and the target
				i = 2;
			} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
				target = {};
			}

			for (; i < length; ++i) {
				options = arguments[i];
				// Only deal with non-null/undefined values
				if (options != null) {
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target !== copy) {
							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && isArray(src) ? src : [];
								} else {
									clone = src && isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								target[name] = extend(deep, clone, copy);

							// Don't bring in undefined values
							} else if (typeof copy !== 'undefined') {
								target[name] = copy;
							}
						}
					}
				}
			}

			// Return the modified object
			return target;
		};



	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var equal = __webpack_require__(22);
		var extend = __webpack_require__(25);


		var lib = {
		  attributes: {
		    compose: function (a, b, keepNull) {
		      if (typeof a !== 'object') a = {};
		      if (typeof b !== 'object') b = {};
		      var attributes = extend(true, {}, b);
		      if (!keepNull) {
		        attributes = Object.keys(attributes).reduce(function (copy, key) {
		          if (attributes[key] != null) {
		            copy[key] = attributes[key];
		          }
		          return copy;
		        }, {});
		      }
		      for (var key in a) {
		        if (a[key] !== undefined && b[key] === undefined) {
		          attributes[key] = a[key];
		        }
		      }
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    },

		    diff: function(a, b) {
		      if (typeof a !== 'object') a = {};
		      if (typeof b !== 'object') b = {};
		      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
		        if (!equal(a[key], b[key])) {
		          attributes[key] = b[key] === undefined ? null : b[key];
		        }
		        return attributes;
		      }, {});
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    },

		    transform: function (a, b, priority) {
		      if (typeof a !== 'object') return b;
		      if (typeof b !== 'object') return undefined;
		      if (!priority) return b;  // b simply overwrites us without priority
		      var attributes = Object.keys(b).reduce(function (attributes, key) {
		        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
		        return attributes;
		      }, {});
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		  },

		  iterator: function (ops) {
		    return new Iterator(ops);
		  },

		  length: function (op) {
		    if (typeof op['delete'] === 'number') {
		      return op['delete'];
		    } else if (typeof op.retain === 'number') {
		      return op.retain;
		    } else {
		      return typeof op.insert === 'string' ? op.insert.length : 1;
		    }
		  }
		};


		function Iterator(ops) {
		  this.ops = ops;
		  this.index = 0;
		  this.offset = 0;
		};

		Iterator.prototype.hasNext = function () {
		  return this.peekLength() < Infinity;
		};

		Iterator.prototype.next = function (length) {
		  if (!length) length = Infinity;
		  var nextOp = this.ops[this.index];
		  if (nextOp) {
		    var offset = this.offset;
		    var opLength = lib.length(nextOp)
		    if (length >= opLength - offset) {
		      length = opLength - offset;
		      this.index += 1;
		      this.offset = 0;
		    } else {
		      this.offset += length;
		    }
		    if (typeof nextOp['delete'] === 'number') {
		      return { 'delete': length };
		    } else {
		      var retOp = {};
		      if (nextOp.attributes) {
		        retOp.attributes = nextOp.attributes;
		      }
		      if (typeof nextOp.retain === 'number') {
		        retOp.retain = length;
		      } else if (typeof nextOp.insert === 'string') {
		        retOp.insert = nextOp.insert.substr(offset, length);
		      } else {
		        // offset should === 0, length should === 1
		        retOp.insert = nextOp.insert;
		      }
		      return retOp;
		    }
		  } else {
		    return { retain: Infinity };
		  }
		};

		Iterator.prototype.peek = function () {
		  return this.ops[this.index];
		};

		Iterator.prototype.peekLength = function () {
		  if (this.ops[this.index]) {
		    // Should never return 0 if our index is being managed correctly
		    return lib.length(this.ops[this.index]) - this.offset;
		  } else {
		    return Infinity;
		  }
		};

		Iterator.prototype.peekType = function () {
		  if (this.ops[this.index]) {
		    if (typeof this.ops[this.index]['delete'] === 'number') {
		      return 'delete';
		    } else if (typeof this.ops[this.index].retain === 'number') {
		      return 'retain';
		    } else {
		      return 'insert';
		    }
		  }
		  return 'retain';
		};


		module.exports = lib;


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _op = __webpack_require__(26);

		var _op2 = _interopRequireDefault(_op);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _code = __webpack_require__(28);

		var _code2 = _interopRequireDefault(_code);

		var _cursor = __webpack_require__(34);

		var _cursor2 = _interopRequireDefault(_cursor);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		var _clone = __webpack_require__(38);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(22);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Editor = function () {
		  function Editor(scroll) {
		    _classCallCheck(this, Editor);

		    this.scroll = scroll;
		    this.delta = this.getDelta();
		  }

		  _createClass(Editor, [{
		    key: 'applyDelta',
		    value: function applyDelta(delta) {
		      var _this = this;

		      var consumeNextNewline = false;
		      this.scroll.update();
		      var scrollLength = this.scroll.length();
		      this.scroll.batch = true;
		      delta = normalizeDelta(delta);
		      delta.reduce(function (index, op) {
		        var length = op.retain || op.delete || op.insert.length || 1;
		        var attributes = op.attributes || {};
		        if (op.insert != null) {
		          if (typeof op.insert === 'string') {
		            var text = op.insert;
		            if (text.endsWith('\n') && consumeNextNewline) {
		              consumeNextNewline = false;
		              text = text.slice(0, -1);
		            }
		            if (index >= scrollLength && !text.endsWith('\n')) {
		              consumeNextNewline = true;
		            }
		            _this.scroll.insertAt(index, text);

		            var _scroll$line = _this.scroll.line(index),
		                _scroll$line2 = _slicedToArray(_scroll$line, 2),
		                line = _scroll$line2[0],
		                offset = _scroll$line2[1];

		            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
		            if (line instanceof _block2.default) {
		              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
		                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
		                  leaf = _line$descendant2[0];

		              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
		            }
		            attributes = _op2.default.attributes.diff(formats, attributes) || {};
		          } else if (_typeof(op.insert) === 'object') {
		            var key = Object.keys(op.insert)[0]; // There should only be one key
		            if (key == null) return index;
		            _this.scroll.insertAt(index, key, op.insert[key]);
		          }
		          scrollLength += length;
		        }
		        Object.keys(attributes).forEach(function (name) {
		          _this.scroll.formatAt(index, length, name, attributes[name]);
		        });
		        return index + length;
		      }, 0);
		      delta.reduce(function (index, op) {
		        if (typeof op.delete === 'number') {
		          _this.scroll.deleteAt(index, op.delete);
		          return index;
		        }
		        return index + (op.retain || op.insert.length || 1);
		      }, 0);
		      this.scroll.batch = false;
		      this.scroll.optimize();
		      return this.update(delta);
		    }
		  }, {
		    key: 'deleteText',
		    value: function deleteText(index, length) {
		      this.scroll.deleteAt(index, length);
		      return this.update(new _quillDelta2.default().retain(index).delete(length));
		    }
		  }, {
		    key: 'formatLine',
		    value: function formatLine(index, length) {
		      var _this2 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      this.scroll.update();
		      Object.keys(formats).forEach(function (format) {
		        var lines = _this2.scroll.lines(index, Math.max(length, 1));
		        var lengthRemaining = length;
		        lines.forEach(function (line) {
		          var lineLength = line.length();
		          if (!(line instanceof _code2.default)) {
		            line.format(format, formats[format]);
		          } else {
		            var codeIndex = index - line.offset(_this2.scroll);
		            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
		            line.formatAt(codeIndex, codeLength, format, formats[format]);
		          }
		          lengthRemaining -= lineLength;
		        });
		      });
		      this.scroll.optimize();
		      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'formatText',
		    value: function formatText(index, length) {
		      var _this3 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      Object.keys(formats).forEach(function (format) {
		        _this3.scroll.formatAt(index, length, format, formats[format]);
		      });
		      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'getContents',
		    value: function getContents(index, length) {
		      return this.delta.slice(index, index + length);
		    }
		  }, {
		    key: 'getDelta',
		    value: function getDelta() {
		      return this.scroll.lines().reduce(function (delta, line) {
		        return delta.concat(line.delta());
		      }, new _quillDelta2.default());
		    }
		  }, {
		    key: 'getFormat',
		    value: function getFormat(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      var lines = [],
		          leaves = [];
		      if (length === 0) {
		        this.scroll.path(index).forEach(function (path) {
		          var _path = _slicedToArray(path, 1),
		              blot = _path[0];

		          if (blot instanceof _block2.default) {
		            lines.push(blot);
		          } else if (blot instanceof _parchment2.default.Leaf) {
		            leaves.push(blot);
		          }
		        });
		      } else {
		        lines = this.scroll.lines(index, length);
		        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
		      }
		      var formatsArr = [lines, leaves].map(function (blots) {
		        if (blots.length === 0) return {};
		        var formats = (0, _block.bubbleFormats)(blots.shift());
		        while (Object.keys(formats).length > 0) {
		          var blot = blots.shift();
		          if (blot == null) return formats;
		          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
		        }
		        return formats;
		      });
		      return _extend2.default.apply(_extend2.default, formatsArr);
		    }
		  }, {
		    key: 'getText',
		    value: function getText(index, length) {
		      return this.getContents(index, length).filter(function (op) {
		        return typeof op.insert === 'string';
		      }).map(function (op) {
		        return op.insert;
		      }).join('');
		    }
		  }, {
		    key: 'insertEmbed',
		    value: function insertEmbed(index, embed, value) {
		      this.scroll.insertAt(index, embed, value);
		      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
		    }
		  }, {
		    key: 'insertText',
		    value: function insertText(index, text) {
		      var _this4 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
		      this.scroll.insertAt(index, text);
		      Object.keys(formats).forEach(function (format) {
		        _this4.scroll.formatAt(index, text.length, format, formats[format]);
		      });
		      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'isBlank',
		    value: function isBlank() {
		      if (this.scroll.children.length == 0) return true;
		      if (this.scroll.children.length > 1) return false;
		      var child = this.scroll.children.head;
		      return child.length() <= 1 && Object.keys(child.formats()).length == 0;
		    }
		  }, {
		    key: 'removeFormat',
		    value: function removeFormat(index, length) {
		      var text = this.getText(index, length);

		      var _scroll$line3 = this.scroll.line(index + length),
		          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
		          line = _scroll$line4[0],
		          offset = _scroll$line4[1];

		      var suffixLength = 0,
		          suffix = new _quillDelta2.default();
		      if (line != null) {
		        if (!(line instanceof _code2.default)) {
		          suffixLength = line.length() - offset;
		        } else {
		          suffixLength = line.newlineIndex(offset) - offset + 1;
		        }
		        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
		      }
		      var contents = this.getContents(index, length + suffixLength);
		      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
		      var delta = new _quillDelta2.default().retain(index).concat(diff);
		      return this.applyDelta(delta);
		    }
		  }, {
		    key: 'update',
		    value: function update(change) {
		      var _this5 = this;

		      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

		      var oldDelta = this.delta;
		      if (mutations.length === 1 && mutations[0].type === 'characterData' && _parchment2.default.find(mutations[0].target)) {
		        (function () {
		          // Optimization for character changes
		          var textBlot = _parchment2.default.find(mutations[0].target);
		          var formats = (0, _block.bubbleFormats)(textBlot);
		          var index = textBlot.offset(_this5.scroll);
		          var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
		          var oldText = new _quillDelta2.default().insert(oldValue);
		          var newText = new _quillDelta2.default().insert(textBlot.value());
		          var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
		          change = diffDelta.reduce(function (delta, op) {
		            if (op.insert) {
		              return delta.insert(op.insert, formats);
		            } else {
		              return delta.push(op);
		            }
		          }, new _quillDelta2.default());
		          _this5.delta = oldDelta.compose(change);
		        })();
		      } else {
		        this.delta = this.getDelta();
		        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
		          change = oldDelta.diff(this.delta, cursorIndex);
		        }
		      }
		      return change;
		    }
		  }]);

		  return Editor;
		}();

		function combineFormats(formats, combined) {
		  return Object.keys(combined).reduce(function (merged, name) {
		    if (formats[name] == null) return merged;
		    if (combined[name] === formats[name]) {
		      merged[name] = combined[name];
		    } else if (Array.isArray(combined[name])) {
		      if (combined[name].indexOf(formats[name]) < 0) {
		        merged[name] = combined[name].concat([formats[name]]);
		      }
		    } else {
		      merged[name] = [combined[name], formats[name]];
		    }
		    return merged;
		  }, {});
		}

		function normalizeDelta(delta) {
		  return delta.reduce(function (delta, op) {
		    if (op.insert === 1) {
		      var attributes = (0, _clone2.default)(op.attributes);
		      delete attributes['image'];
		      return delta.insert({ image: op.attributes.image }, attributes);
		    }
		    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
		      op = (0, _clone2.default)(op);
		      if (op.attributes.list) {
		        op.attributes.list = 'ordered';
		      } else {
		        op.attributes.list = 'bullet';
		        delete op.attributes.bullet;
		      }
		    }
		    if (typeof op.insert === 'string') {
		      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
		      return delta.insert(text, op.attributes);
		    }
		    return delta.push(op);
		  }, new _quillDelta2.default());
		}

		exports.default = Editor;

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.Code = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		var _text = __webpack_require__(33);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Code = function (_Inline) {
		  _inherits(Code, _Inline);

		  function Code() {
		    _classCallCheck(this, Code);

		    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
		  }

		  return Code;
		}(_inline2.default);

		Code.blotName = 'code';
		Code.tagName = 'CODE';

		var CodeBlock = function (_Block) {
		  _inherits(CodeBlock, _Block);

		  function CodeBlock() {
		    _classCallCheck(this, CodeBlock);

		    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
		  }

		  _createClass(CodeBlock, [{
		    key: 'delta',
		    value: function delta() {
		      var _this3 = this;

		      var text = this.domNode.textContent;
		      if (text.endsWith('\n')) {
		        // Should always be true
		        text = text.slice(0, -1);
		      }
		      return text.split('\n').reduce(function (delta, frag) {
		        return delta.insert(frag).insert('\n', _this3.formats());
		      }, new _quillDelta2.default());
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      if (name === this.statics.blotName && value) return;

		      var _descendant = this.descendant(_text2.default, this.length() - 1),
		          _descendant2 = _slicedToArray(_descendant, 1),
		          text = _descendant2[0];

		      if (text != null) {
		        text.deleteAt(text.length() - 1, 1);
		      }
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (length === 0) return;
		      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
		        return;
		      }
		      var nextNewline = this.newlineIndex(index);
		      if (nextNewline < 0 || nextNewline >= index + length) return;
		      var prevNewline = this.newlineIndex(index, true) + 1;
		      var isolateLength = nextNewline - prevNewline + 1;
		      var blot = this.isolate(prevNewline, isolateLength);
		      var next = blot.next;
		      blot.format(name, value);
		      if (next instanceof CodeBlock) {
		        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
		      }
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null) return;

		      var _descendant3 = this.descendant(_text2.default, index),
		          _descendant4 = _slicedToArray(_descendant3, 2),
		          text = _descendant4[0],
		          offset = _descendant4[1];

		      text.insertAt(offset, value);
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      var length = this.domNode.textContent.length;
		      if (!this.domNode.textContent.endsWith('\n')) {
		        return length + 1;
		      }
		      return length;
		    }
		  }, {
		    key: 'newlineIndex',
		    value: function newlineIndex(searchIndex) {
		      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      if (!reverse) {
		        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
		        return offset > -1 ? searchIndex + offset : -1;
		      } else {
		        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      if (!this.domNode.textContent.endsWith('\n')) {
		        this.appendChild(_parchment2.default.create('text', '\n'));
		      }
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this);
		      var next = this.next;
		      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
		        next.optimize();
		        next.moveChildren(this);
		        next.remove();
		      }
		    }
		  }, {
		    key: 'replace',
		    value: function replace(target) {
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
		      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
		        var blot = _parchment2.default.find(node);
		        if (blot == null) {
		          node.parentNode.removeChild(node);
		        } else if (blot instanceof _parchment2.default.Embed) {
		          blot.remove();
		        } else {
		          blot.unwrap();
		        }
		      });
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
		      domNode.setAttribute('spellcheck', false);
		      return domNode;
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      return true;
		    }
		  }]);

		  return CodeBlock;
		}(_block2.default);

		CodeBlock.blotName = 'code-block';
		CodeBlock.tagName = 'PRE';
		CodeBlock.TAB = '  ';

		exports.Code = Code;
		exports.default = CodeBlock;

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _break = __webpack_require__(30);

		var _break2 = _interopRequireDefault(_break);

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		var _text = __webpack_require__(33);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var NEWLINE_LENGTH = 1;

		var BlockEmbed = function (_Embed) {
		  _inherits(BlockEmbed, _Embed);

		  function BlockEmbed() {
		    _classCallCheck(this, BlockEmbed);

		    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
		  }

		  _createClass(BlockEmbed, [{
		    key: 'attach',
		    value: function attach() {
		      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
		      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
		    }
		  }, {
		    key: 'delta',
		    value: function delta() {
		      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
		      if (attribute != null) {
		        this.attributes.attribute(attribute, value);
		      }
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      this.format(name, value);
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (typeof value === 'string' && value.endsWith('\n')) {
		        var block = _parchment2.default.create(Block.blotName);
		        this.parent.insertBefore(block, index === 0 ? this : this.next);
		        block.insertAt(0, value.slice(0, -1));
		      } else {
		        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
		      }
		    }
		  }]);

		  return BlockEmbed;
		}(_embed2.default);

		BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
		// It is important for cursor behavior BlockEmbeds use tags that are block level elements


		var Block = function (_Parchment$Block) {
		  _inherits(Block, _Parchment$Block);

		  function Block(domNode) {
		    _classCallCheck(this, Block);

		    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

		    _this2.cache = {};
		    return _this2;
		  }

		  _createClass(Block, [{
		    key: 'delta',
		    value: function delta() {
		      if (this.cache.delta == null) {
		        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
		          if (leaf.length() === 0) {
		            return delta;
		          } else {
		            return delta.insert(leaf.value(), bubbleFormats(leaf));
		          }
		        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
		      }
		      return this.cache.delta;
		    }
		  }, {
		    key: 'deleteAt',
		    value: function deleteAt(index, length) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
		      this.cache = {};
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (length <= 0) return;
		      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
		        if (index + length === this.length()) {
		          this.format(name, value);
		        }
		      } else {
		        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
		      }
		      this.cache = {};
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
		      if (value.length === 0) return;
		      var lines = value.split('\n');
		      var text = lines.shift();
		      if (text.length > 0) {
		        if (index < this.length() - 1 || this.children.tail == null) {
		          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
		        } else {
		          this.children.tail.insertAt(this.children.tail.length(), text);
		        }
		        this.cache = {};
		      }
		      var block = this;
		      lines.reduce(function (index, line) {
		        block = block.split(index, true);
		        block.insertAt(0, line);
		        return line.length;
		      }, index + text.length);
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      var head = this.children.head;
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
		      if (head instanceof _break2.default) {
		        head.remove();
		      }
		      this.cache = {};
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      if (this.cache.length == null) {
		        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
		      }
		      return this.cache.length;
		    }
		  }, {
		    key: 'moveChildren',
		    value: function moveChildren(target, ref) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
		      this.cache = {};
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this);
		      this.cache = {};
		    }
		  }, {
		    key: 'path',
		    value: function path(index) {
		      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
		    }
		  }, {
		    key: 'removeChild',
		    value: function removeChild(child) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
		      this.cache = {};
		    }
		  }, {
		    key: 'split',
		    value: function split(index) {
		      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
		        var clone = this.clone();
		        if (index === 0) {
		          this.parent.insertBefore(clone, this);
		          return this;
		        } else {
		          this.parent.insertBefore(clone, this.next);
		          return clone;
		        }
		      } else {
		        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
		        this.cache = {};
		        return next;
		      }
		    }
		  }]);

		  return Block;
		}(_parchment2.default.Block);

		Block.blotName = 'block';
		Block.tagName = 'P';
		Block.defaultChild = 'break';
		Block.allowedChildren = [_inline2.default, _embed2.default, _text2.default];

		function bubbleFormats(blot) {
		  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  if (blot == null) return formats;
		  if (typeof blot.formats === 'function') {
		    formats = (0, _extend2.default)(formats, blot.formats());
		  }
		  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
		    return formats;
		  }
		  return bubbleFormats(blot.parent, formats);
		}

		exports.bubbleFormats = bubbleFormats;
		exports.BlockEmbed = BlockEmbed;
		exports.default = Block;

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Break = function (_Embed) {
		  _inherits(Break, _Embed);

		  function Break() {
		    _classCallCheck(this, Break);

		    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
		  }

		  _createClass(Break, [{
		    key: 'insertInto',
		    value: function insertInto(parent, ref) {
		      if (parent.children.length === 0) {
		        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
		      } else {
		        this.remove();
		      }
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      return 0;
		    }
		  }, {
		    key: 'value',
		    value: function value() {
		      return '';
		    }
		  }], [{
		    key: 'value',
		    value: function value() {
		      return undefined;
		    }
		  }]);

		  return Break;
		}(_embed2.default);

		Break.blotName = 'break';
		Break.tagName = 'BR';

		exports.default = Break;

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Embed = function (_Parchment$Embed) {
		  _inherits(Embed, _Parchment$Embed);

		  function Embed() {
		    _classCallCheck(this, Embed);

		    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
		  }

		  return Embed;
		}(_parchment2.default.Embed);

		exports.default = Embed;

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _text = __webpack_require__(33);

		var _text2 = _interopRequireDefault(_text);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Inline = function (_Parchment$Inline) {
		  _inherits(Inline, _Parchment$Inline);

		  function Inline() {
		    _classCallCheck(this, Inline);

		    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
		  }

		  _createClass(Inline, [{
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
		        var blot = this.isolate(index, length);
		        if (value) {
		          blot.wrap(name, value);
		        }
		      } else {
		        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this);
		      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
		        var parent = this.parent.isolate(this.offset(), this.length());
		        this.moveChildren(parent);
		        parent.wrap(this);
		      }
		    }
		  }], [{
		    key: 'compare',
		    value: function compare(self, other) {
		      var selfIndex = Inline.order.indexOf(self);
		      var otherIndex = Inline.order.indexOf(other);
		      if (selfIndex >= 0 || otherIndex >= 0) {
		        return selfIndex - otherIndex;
		      } else if (self === other) {
		        return 0;
		      } else if (self < other) {
		        return -1;
		      } else {
		        return 1;
		      }
		    }
		  }]);

		  return Inline;
		}(_parchment2.default.Inline);

		Inline.allowedChildren = [Inline, _embed2.default, _text2.default];
		// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
		Inline.order = ['cursor', 'inline', // Must be lower
		'code', 'underline', 'strike', 'italic', 'bold', 'script', 'link' // Must be higher
		];

		exports.default = Inline;

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TextBlot = function (_Parchment$Text) {
		  _inherits(TextBlot, _Parchment$Text);

		  function TextBlot() {
		    _classCallCheck(this, TextBlot);

		    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
		  }

		  return TextBlot;
		}(_parchment2.default.Text);

		exports.default = TextBlot;

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _text = __webpack_require__(33);

		var _text2 = _interopRequireDefault(_text);

		var _emitter = __webpack_require__(35);

		var _emitter2 = _interopRequireDefault(_emitter);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Cursor = function (_Embed) {
		  _inherits(Cursor, _Embed);

		  _createClass(Cursor, null, [{
		    key: 'value',
		    value: function value() {
		      return undefined;
		    }
		  }]);

		  function Cursor(domNode, selection) {
		    _classCallCheck(this, Cursor);

		    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

		    _this.selection = selection;
		    _this.textNode = document.createTextNode(Cursor.CONTENTS);
		    _this.domNode.appendChild(_this.textNode);
		    _this._length = 0;
		    return _this;
		  }

		  _createClass(Cursor, [{
		    key: 'detach',
		    value: function detach() {
		      // super.detach() will also clear domNode.__blot
		      if (this.parent != null) this.parent.removeChild(this);
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      if (this._length !== 0) {
		        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
		      }
		      var target = this,
		          index = 0;
		      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
		        index += target.offset(target.parent);
		        target = target.parent;
		      }
		      if (target != null) {
		        this._length = Cursor.CONTENTS.length;
		        target.optimize();
		        target.formatAt(index, Cursor.CONTENTS.length, name, value);
		        this._length = 0;
		      }
		    }
		  }, {
		    key: 'index',
		    value: function index(node, offset) {
		      if (node === this.textNode) return 0;
		      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      return this._length;
		    }
		  }, {
		    key: 'position',
		    value: function position() {
		      return [this.textNode, this.textNode.data.length];
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
		      this.parent = null;
		    }
		  }, {
		    key: 'restore',
		    value: function restore() {
		      var _this2 = this;

		      if (this.selection.composing) return;
		      if (this.parent == null) return;
		      var textNode = this.textNode;
		      var range = this.selection.getNativeRange();
		      var restoreText = void 0,
		          start = void 0,
		          end = void 0;
		      if (range != null && range.start.node === textNode && range.end.node === textNode) {
		        var _ref = [textNode, range.start.offset, range.end.offset];
		        restoreText = _ref[0];
		        start = _ref[1];
		        end = _ref[2];
		      }
		      // Link format will insert text outside of anchor tag
		      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
		        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
		      }
		      if (this.textNode.data !== Cursor.CONTENTS) {
		        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
		        if (this.next instanceof _text2.default) {
		          restoreText = this.next.domNode;
		          this.next.insertAt(0, text);
		          this.textNode.data = Cursor.CONTENTS;
		        } else {
		          this.textNode.data = text;
		          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
		          this.textNode = document.createTextNode(Cursor.CONTENTS);
		          this.domNode.appendChild(this.textNode);
		        }
		      }
		      this.remove();
		      if (start == null) return;
		      this.selection.emitter.once(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
		        var _map = [start, end].map(function (offset) {
		          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
		        });

		        var _map2 = _slicedToArray(_map, 2);

		        start = _map2[0];
		        end = _map2[1];

		        _this2.selection.setNativeRange(restoreText, start, restoreText, end);
		      });
		    }
		  }, {
		    key: 'update',
		    value: function update(mutations) {
		      var _this3 = this;

		      mutations.forEach(function (mutation) {
		        if (mutation.type === 'characterData' && mutation.target === _this3.textNode) {
		          _this3.restore();
		        }
		      });
		    }
		  }, {
		    key: 'value',
		    value: function value() {
		      return '';
		    }
		  }]);

		  return Cursor;
		}(_embed2.default);

		Cursor.blotName = 'cursor';
		Cursor.className = 'ql-cursor';
		Cursor.tagName = 'span';
		Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


		exports.default = Cursor;

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _eventemitter = __webpack_require__(36);

		var _eventemitter2 = _interopRequireDefault(_eventemitter);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:events');

		var Emitter = function (_EventEmitter) {
		  _inherits(Emitter, _EventEmitter);

		  function Emitter() {
		    _classCallCheck(this, Emitter);

		    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

		    _this.on('error', debug.error);
		    return _this;
		  }

		  _createClass(Emitter, [{
		    key: 'emit',
		    value: function emit() {
		      debug.log.apply(debug, arguments);
		      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
		    }
		  }]);

		  return Emitter;
		}(_eventemitter2.default);

		Emitter.events = {
		  EDITOR_CHANGE: 'editor-change',
		  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
		  SCROLL_OPTIMIZE: 'scroll-optimize',
		  SCROLL_UPDATE: 'scroll-update',
		  SELECTION_CHANGE: 'selection-change',
		  TEXT_CHANGE: 'text-change'
		};
		Emitter.sources = {
		  API: 'api',
		  SILENT: 'silent',
		  USER: 'user'
		};

		exports.default = Emitter;

	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		'use strict';

		var has = Object.prototype.hasOwnProperty
		  , prefix = '~';

		/**
		 * Constructor to create a storage for our `EE` objects.
		 * An `Events` instance is a plain object whose properties are event names.
		 *
		 * @constructor
		 * @api private
		 */
		function Events() {}

		//
		// We try to not inherit from `Object.prototype`. In some engines creating an
		// instance in this way is faster than calling `Object.create(null)` directly.
		// If `Object.create(null)` is not supported we prefix the event names with a
		// character to make sure that the built-in object properties are not
		// overridden or used as an attack vector.
		//
		if (Object.create) {
		  Events.prototype = Object.create(null);

		  //
		  // This hack is needed because the `__proto__` property is still inherited in
		  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
		  //
		  if (!new Events().__proto__) prefix = false;
		}

		/**
		 * Representation of a single event listener.
		 *
		 * @param {Function} fn The listener function.
		 * @param {Mixed} context The context to invoke the listener with.
		 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
		 * @constructor
		 * @api private
		 */
		function EE(fn, context, once) {
		  this.fn = fn;
		  this.context = context;
		  this.once = once || false;
		}

		/**
		 * Minimal `EventEmitter` interface that is molded against the Node.js
		 * `EventEmitter` interface.
		 *
		 * @constructor
		 * @api public
		 */
		function EventEmitter() {
		  this._events = new Events();
		  this._eventsCount = 0;
		}

		/**
		 * Return an array listing the events for which the emitter has registered
		 * listeners.
		 *
		 * @returns {Array}
		 * @api public
		 */
		EventEmitter.prototype.eventNames = function eventNames() {
		  var names = []
		    , events
		    , name;

		  if (this._eventsCount === 0) return names;

		  for (name in (events = this._events)) {
		    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
		  }

		  if (Object.getOwnPropertySymbols) {
		    return names.concat(Object.getOwnPropertySymbols(events));
		  }

		  return names;
		};

		/**
		 * Return the listeners registered for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Boolean} exists Only check if there are listeners.
		 * @returns {Array|Boolean}
		 * @api public
		 */
		EventEmitter.prototype.listeners = function listeners(event, exists) {
		  var evt = prefix ? prefix + event : event
		    , available = this._events[evt];

		  if (exists) return !!available;
		  if (!available) return [];
		  if (available.fn) return [available.fn];

		  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
		    ee[i] = available[i].fn;
		  }

		  return ee;
		};

		/**
		 * Calls each of the listeners registered for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @returns {Boolean} `true` if the event had listeners, else `false`.
		 * @api public
		 */
		EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
		  var evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) return false;

		  var listeners = this._events[evt]
		    , len = arguments.length
		    , args
		    , i;

		  if (listeners.fn) {
		    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

		    switch (len) {
		      case 1: return listeners.fn.call(listeners.context), true;
		      case 2: return listeners.fn.call(listeners.context, a1), true;
		      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
		      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
		      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
		      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
		    }

		    for (i = 1, args = new Array(len -1); i < len; i++) {
		      args[i - 1] = arguments[i];
		    }

		    listeners.fn.apply(listeners.context, args);
		  } else {
		    var length = listeners.length
		      , j;

		    for (i = 0; i < length; i++) {
		      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

		      switch (len) {
		        case 1: listeners[i].fn.call(listeners[i].context); break;
		        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
		        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
		        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
		        default:
		          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
		            args[j - 1] = arguments[j];
		          }

		          listeners[i].fn.apply(listeners[i].context, args);
		      }
		    }
		  }

		  return true;
		};

		/**
		 * Add a listener for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {Mixed} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.on = function on(event, fn, context) {
		  var listener = new EE(fn, context || this)
		    , evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
		  else if (!this._events[evt].fn) this._events[evt].push(listener);
		  else this._events[evt] = [this._events[evt], listener];

		  return this;
		};

		/**
		 * Add a one-time listener for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {Mixed} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.once = function once(event, fn, context) {
		  var listener = new EE(fn, context || this, true)
		    , evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
		  else if (!this._events[evt].fn) this._events[evt].push(listener);
		  else this._events[evt] = [this._events[evt], listener];

		  return this;
		};

		/**
		 * Remove the listeners of a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn Only remove the listeners that match this function.
		 * @param {Mixed} context Only remove the listeners that have this context.
		 * @param {Boolean} once Only remove one-time listeners.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
		  var evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) return this;
		  if (!fn) {
		    if (--this._eventsCount === 0) this._events = new Events();
		    else delete this._events[evt];
		    return this;
		  }

		  var listeners = this._events[evt];

		  if (listeners.fn) {
		    if (
		         listeners.fn === fn
		      && (!once || listeners.once)
		      && (!context || listeners.context === context)
		    ) {
		      if (--this._eventsCount === 0) this._events = new Events();
		      else delete this._events[evt];
		    }
		  } else {
		    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
		      if (
		           listeners[i].fn !== fn
		        || (once && !listeners[i].once)
		        || (context && listeners[i].context !== context)
		      ) {
		        events.push(listeners[i]);
		      }
		    }

		    //
		    // Reset the array, or remove it completely if we have no more listeners.
		    //
		    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
		    else if (--this._eventsCount === 0) this._events = new Events();
		    else delete this._events[evt];
		  }

		  return this;
		};

		/**
		 * Remove all listeners, or those of the specified event.
		 *
		 * @param {String|Symbol} [event] The event name.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
		  var evt;

		  if (event) {
		    evt = prefix ? prefix + event : event;
		    if (this._events[evt]) {
		      if (--this._eventsCount === 0) this._events = new Events();
		      else delete this._events[evt];
		    }
		  } else {
		    this._events = new Events();
		    this._eventsCount = 0;
		  }

		  return this;
		};

		//
		// Alias methods names because people roll like that.
		//
		EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;

		//
		// This function doesn't apply anymore.
		//
		EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
		  return this;
		};

		//
		// Expose the prefix.
		//
		EventEmitter.prefixed = prefix;

		//
		// Allow `EventEmitter` to be imported as module namespace.
		//
		EventEmitter.EventEmitter = EventEmitter;

		//
		// Expose the module.
		//
		if ('undefined' !== typeof module) {
		  module.exports = EventEmitter;
		}


	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var levels = ['error', 'warn', 'log', 'info'];
		var level = 'warn';

		function debug(method) {
		  if (levels.indexOf(method) <= levels.indexOf(level)) {
		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }

		    console[method].apply(console, args); // eslint-disable-line no-console
		  }
		}

		function namespace(ns) {
		  return levels.reduce(function (logger, method) {
		    logger[method] = debug.bind(console, method, ns);
		    return logger;
		  }, {});
		}

		debug.level = namespace.level = function (newLevel) {
		  level = newLevel;
		};

		exports.default = namespace;

	/***/ },
	/* 38 */
	/***/ function(module, exports) {

		var clone = (function() {
		'use strict';

		var nativeMap;
		try {
		  nativeMap = Map;
		} catch(_) {
		  // maybe a reference error because no `Map`. Give it a dummy value that no
		  // value will ever be an instanceof.
		  nativeMap = function() {};
		}

		var nativeSet;
		try {
		  nativeSet = Set;
		} catch(_) {
		  nativeSet = function() {};
		}

		var nativePromise;
		try {
		  nativePromise = Promise;
		} catch(_) {
		  nativePromise = function() {};
		}

		/**
		 * Clones (copies) an Object using deep copying.
		 *
		 * This function supports circular references by default, but if you are certain
		 * there are no circular references in your object, you can save some CPU time
		 * by calling clone(obj, false).
		 *
		 * Caution: if `circular` is false and `parent` contains circular references,
		 * your program may enter an infinite loop and crash.
		 *
		 * @param `parent` - the object to be cloned
		 * @param `circular` - set to true if the object to be cloned may contain
		 *    circular references. (optional - true by default)
		 * @param `depth` - set to a number if the object is only to be cloned to
		 *    a particular depth. (optional - defaults to Infinity)
		 * @param `prototype` - sets the prototype to be used when cloning an object.
		 *    (optional - defaults to parent prototype).
		 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
		 *    should be cloned as well. Non-enumerable properties on the prototype
		 *    chain will be ignored. (optional - false by default)
		*/
		function clone(parent, circular, depth, prototype, includeNonEnumerable) {
		  if (typeof circular === 'object') {
		    depth = circular.depth;
		    prototype = circular.prototype;
		    includeNonEnumerable = circular.includeNonEnumerable;
		    circular = circular.circular;
		  }
		  // maintain two arrays for circular references, where corresponding parents
		  // and children have the same index
		  var allParents = [];
		  var allChildren = [];

		  var useBuffer = typeof Buffer != 'undefined';

		  if (typeof circular == 'undefined')
		    circular = true;

		  if (typeof depth == 'undefined')
		    depth = Infinity;

		  // recurse this function so we don't reset allParents and allChildren
		  function _clone(parent, depth) {
		    // cloning null always returns null
		    if (parent === null)
		      return null;

		    if (depth === 0)
		      return parent;

		    var child;
		    var proto;
		    if (typeof parent != 'object') {
		      return parent;
		    }

		    if (parent instanceof nativeMap) {
		      child = new nativeMap();
		    } else if (parent instanceof nativeSet) {
		      child = new nativeSet();
		    } else if (parent instanceof nativePromise) {
		      child = new nativePromise(function (resolve, reject) {
		        parent.then(function(value) {
		          resolve(_clone(value, depth - 1));
		        }, function(err) {
		          reject(_clone(err, depth - 1));
		        });
		      });
		    } else if (clone.__isArray(parent)) {
		      child = [];
		    } else if (clone.__isRegExp(parent)) {
		      child = new RegExp(parent.source, __getRegExpFlags(parent));
		      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
		    } else if (clone.__isDate(parent)) {
		      child = new Date(parent.getTime());
		    } else if (useBuffer && Buffer.isBuffer(parent)) {
		      child = new Buffer(parent.length);
		      parent.copy(child);
		      return child;
		    } else if (parent instanceof Error) {
		      child = Object.create(parent);
		    } else {
		      if (typeof prototype == 'undefined') {
		        proto = Object.getPrototypeOf(parent);
		        child = Object.create(proto);
		      }
		      else {
		        child = Object.create(prototype);
		        proto = prototype;
		      }
		    }

		    if (circular) {
		      var index = allParents.indexOf(parent);

		      if (index != -1) {
		        return allChildren[index];
		      }
		      allParents.push(parent);
		      allChildren.push(child);
		    }

		    if (parent instanceof nativeMap) {
		      var keyIterator = parent.keys();
		      while(true) {
		        var next = keyIterator.next();
		        if (next.done) {
		          break;
		        }
		        var keyChild = _clone(next.value, depth - 1);
		        var valueChild = _clone(parent.get(next.value), depth - 1);
		        child.set(keyChild, valueChild);
		      }
		    }
		    if (parent instanceof nativeSet) {
		      var iterator = parent.keys();
		      while(true) {
		        var next = iterator.next();
		        if (next.done) {
		          break;
		        }
		        var entryChild = _clone(next.value, depth - 1);
		        child.add(entryChild);
		      }
		    }

		    for (var i in parent) {
		      var attrs;
		      if (proto) {
		        attrs = Object.getOwnPropertyDescriptor(proto, i);
		      }

		      if (attrs && attrs.set == null) {
		        continue;
		      }
		      child[i] = _clone(parent[i], depth - 1);
		    }

		    if (Object.getOwnPropertySymbols) {
		      var symbols = Object.getOwnPropertySymbols(parent);
		      for (var i = 0; i < symbols.length; i++) {
		        // Don't need to worry about cloning a symbol because it is a primitive,
		        // like a number or string.
		        var symbol = symbols[i];
		        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
		        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
		          continue;
		        }
		        child[symbol] = _clone(parent[symbol], depth - 1);
		        if (!descriptor.enumerable) {
		          Object.defineProperty(child, symbol, {
		            enumerable: false
		          });
		        }
		      }
		    }

		    if (includeNonEnumerable) {
		      var allPropertyNames = Object.getOwnPropertyNames(parent);
		      for (var i = 0; i < allPropertyNames.length; i++) {
		        var propertyName = allPropertyNames[i];
		        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
		        if (descriptor && descriptor.enumerable) {
		          continue;
		        }
		        child[propertyName] = _clone(parent[propertyName], depth - 1);
		        Object.defineProperty(child, propertyName, {
		          enumerable: false
		        });
		      }
		    }

		    return child;
		  }

		  return _clone(parent, depth);
		}

		/**
		 * Simple flat clone using prototype, accepts only objects, usefull for property
		 * override on FLAT configuration object (no nested props).
		 *
		 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
		 * works.
		 */
		clone.clonePrototype = function clonePrototype(parent) {
		  if (parent === null)
		    return null;

		  var c = function () {};
		  c.prototype = parent;
		  return new c();
		};

		// private utility functions

		function __objToStr(o) {
		  return Object.prototype.toString.call(o);
		}
		clone.__objToStr = __objToStr;

		function __isDate(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object Date]';
		}
		clone.__isDate = __isDate;

		function __isArray(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object Array]';
		}
		clone.__isArray = __isArray;

		function __isRegExp(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
		}
		clone.__isRegExp = __isRegExp;

		function __getRegExpFlags(re) {
		  var flags = '';
		  if (re.global) flags += 'g';
		  if (re.ignoreCase) flags += 'i';
		  if (re.multiline) flags += 'm';
		  return flags;
		}
		clone.__getRegExpFlags = __getRegExpFlags;

		return clone;
		})();

		if (typeof module === 'object' && module.exports) {
		  module.exports = clone;
		}


	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Module = function Module(quill) {
		  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  _classCallCheck(this, Module);

		  this.quill = quill;
		  this.options = options;
		};

		Module.DEFAULTS = {};

		exports.default = Module;

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.Range = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _clone = __webpack_require__(38);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(22);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _emitter3 = __webpack_require__(35);

		var _emitter4 = _interopRequireDefault(_emitter3);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var debug = (0, _logger2.default)('quill:selection');

		var Range = function Range(index) {
		  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		  _classCallCheck(this, Range);

		  this.index = index;
		  this.length = length;
		};

		var Selection = function () {
		  function Selection(scroll, emitter) {
		    var _this = this;

		    _classCallCheck(this, Selection);

		    this.emitter = emitter;
		    this.scroll = scroll;
		    this.composing = false;
		    this.root = this.scroll.domNode;
		    this.root.addEventListener('compositionstart', function () {
		      _this.composing = true;
		    });
		    this.root.addEventListener('compositionend', function () {
		      _this.composing = false;
		    });
		    this.cursor = _parchment2.default.create('cursor', this);
		    // savedRange is last non-null range
		    this.lastRange = this.savedRange = new Range(0, 0);
		    ['keyup', 'mouseup', 'mouseleave', 'touchend', 'touchleave', 'focus', 'blur'].forEach(function (eventName) {
		      _this.root.addEventListener(eventName, function () {
		        // When range used to be a selection and user click within the selection,
		        // the range now being a cursor has not updated yet without setTimeout
		        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 100);
		      });
		    });
		    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
		      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
		        _this.update(_emitter4.default.sources.SILENT);
		      }
		    });
		    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
		      var native = _this.getNativeRange();
		      if (native == null) return;
		      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
		      // TODO unclear if this has negative side effects
		      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
		        try {
		          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
		        } catch (ignored) {}
		      });
		    });
		    this.update(_emitter4.default.sources.SILENT);
		  }

		  _createClass(Selection, [{
		    key: 'focus',
		    value: function focus() {
		      if (this.hasFocus()) return;
		      this.root.focus();
		      this.setRange(this.savedRange);
		    }
		  }, {
		    key: 'format',
		    value: function format(_format, value) {
		      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
		      this.scroll.update();
		      var nativeRange = this.getNativeRange();
		      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
		      if (nativeRange.start.node !== this.cursor.textNode) {
		        var blot = _parchment2.default.find(nativeRange.start.node, false);
		        if (blot == null) return;
		        // TODO Give blot ability to not split
		        if (blot instanceof _parchment2.default.Leaf) {
		          var after = blot.split(nativeRange.start.offset);
		          blot.parent.insertBefore(this.cursor, after);
		        } else {
		          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
		        }
		        this.cursor.attach();
		      }
		      this.cursor.format(_format, value);
		      this.scroll.optimize();
		      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
		      this.update();
		    }
		  }, {
		    key: 'getBounds',
		    value: function getBounds(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      var scrollLength = this.scroll.length();
		      index = Math.min(index, scrollLength - 1);
		      length = Math.min(index + length, scrollLength - 1) - index;
		      var bounds = void 0,
		          node = void 0,
		          _scroll$leaf = this.scroll.leaf(index),
		          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
		          leaf = _scroll$leaf2[0],
		          offset = _scroll$leaf2[1];
		      if (leaf == null) return null;

		      var _leaf$position = leaf.position(offset, true);

		      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

		      node = _leaf$position2[0];
		      offset = _leaf$position2[1];

		      var range = document.createRange();
		      if (length > 0) {
		        range.setStart(node, offset);

		        var _scroll$leaf3 = this.scroll.leaf(index + length);

		        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

		        leaf = _scroll$leaf4[0];
		        offset = _scroll$leaf4[1];

		        if (leaf == null) return null;

		        var _leaf$position3 = leaf.position(offset, true);

		        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

		        node = _leaf$position4[0];
		        offset = _leaf$position4[1];

		        range.setEnd(node, offset);
		        bounds = range.getBoundingClientRect();
		      } else {
		        var side = 'left';
		        var rect = void 0;
		        if (node instanceof Text) {
		          if (offset < node.data.length) {
		            range.setStart(node, offset);
		            range.setEnd(node, offset + 1);
		          } else {
		            range.setStart(node, offset - 1);
		            range.setEnd(node, offset);
		            side = 'right';
		          }
		          rect = range.getBoundingClientRect();
		        } else {
		          rect = leaf.domNode.getBoundingClientRect();
		          if (offset > 0) side = 'right';
		        }
		        bounds = {
		          height: rect.height,
		          left: rect[side],
		          width: 0,
		          top: rect.top
		        };
		      }
		      var containerBounds = this.root.parentNode.getBoundingClientRect();
		      return {
		        left: bounds.left - containerBounds.left,
		        right: bounds.left + bounds.width - containerBounds.left,
		        top: bounds.top - containerBounds.top,
		        bottom: bounds.top + bounds.height - containerBounds.top,
		        height: bounds.height,
		        width: bounds.width
		      };
		    }
		  }, {
		    key: 'getNativeRange',
		    value: function getNativeRange() {
		      var selection = document.getSelection();
		      if (selection == null || selection.rangeCount <= 0) return null;
		      var nativeRange = selection.getRangeAt(0);
		      if (nativeRange == null) return null;
		      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
		        return null;
		      }
		      var range = {
		        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
		        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
		        native: nativeRange
		      };
		      [range.start, range.end].forEach(function (position) {
		        var node = position.node,
		            offset = position.offset;
		        while (!(node instanceof Text) && node.childNodes.length > 0) {
		          if (node.childNodes.length > offset) {
		            node = node.childNodes[offset];
		            offset = 0;
		          } else if (node.childNodes.length === offset) {
		            node = node.lastChild;
		            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
		          } else {
		            break;
		          }
		        }
		        position.node = node, position.offset = offset;
		      });
		      debug.info('getNativeRange', range);
		      return range;
		    }
		  }, {
		    key: 'getRange',
		    value: function getRange() {
		      var _this2 = this;

		      var range = this.getNativeRange();
		      if (range == null) return [null, null];
		      var positions = [[range.start.node, range.start.offset]];
		      if (!range.native.collapsed) {
		        positions.push([range.end.node, range.end.offset]);
		      }
		      var indexes = positions.map(function (position) {
		        var _position = _slicedToArray(position, 2),
		            node = _position[0],
		            offset = _position[1];

		        var blot = _parchment2.default.find(node, true);
		        var index = blot.offset(_this2.scroll);
		        if (offset === 0) {
		          return index;
		        } else if (blot instanceof _parchment2.default.Container) {
		          return index + blot.length();
		        } else {
		          return index + blot.index(node, offset);
		        }
		      });
		      var start = Math.min.apply(Math, _toConsumableArray(indexes)),
		          end = Math.max.apply(Math, _toConsumableArray(indexes));
		      end = Math.min(end, this.scroll.length() - 1);
		      return [new Range(start, end - start), range];
		    }
		  }, {
		    key: 'hasFocus',
		    value: function hasFocus() {
		      return document.activeElement === this.root;
		    }
		  }, {
		    key: 'scrollIntoView',
		    value: function scrollIntoView() {
		      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastRange;

		      if (range == null) return;
		      var bounds = this.getBounds(range.index, range.length);
		      if (bounds == null) return;
		      if (this.root.offsetHeight < bounds.bottom) {
		        var _scroll$line = this.scroll.line(Math.min(range.index + range.length, this.scroll.length() - 1)),
		            _scroll$line2 = _slicedToArray(_scroll$line, 1),
		            line = _scroll$line2[0];

		        this.root.scrollTop = line.domNode.offsetTop + line.domNode.offsetHeight - this.root.offsetHeight;
		      } else if (bounds.top < 0) {
		        var _scroll$line3 = this.scroll.line(Math.min(range.index, this.scroll.length() - 1)),
		            _scroll$line4 = _slicedToArray(_scroll$line3, 1),
		            _line = _scroll$line4[0];

		        this.root.scrollTop = _line.domNode.offsetTop;
		      }
		    }
		  }, {
		    key: 'setNativeRange',
		    value: function setNativeRange(startNode, startOffset) {
		      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
		      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
		      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
		      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
		        return;
		      }
		      var selection = document.getSelection();
		      if (selection == null) return;
		      if (startNode != null) {
		        if (!this.hasFocus()) this.root.focus();
		        var native = (this.getNativeRange() || {}).native;
		        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
		          var range = document.createRange();
		          range.setStart(startNode, startOffset);
		          range.setEnd(endNode, endOffset);
		          selection.removeAllRanges();
		          selection.addRange(range);
		        }
		      } else {
		        selection.removeAllRanges();
		        this.root.blur();
		        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
		      }
		    }
		  }, {
		    key: 'setRange',
		    value: function setRange(range) {
		      var _this3 = this;

		      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

		      if (typeof force === 'string') {
		        source = force;
		        force = false;
		      }
		      debug.info('setRange', range);
		      if (range != null) {
		        (function () {
		          var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
		          var args = [];
		          var scrollLength = _this3.scroll.length();
		          indexes.forEach(function (index, i) {
		            index = Math.min(scrollLength - 1, index);
		            var node = void 0,
		                _scroll$leaf5 = _this3.scroll.leaf(index),
		                _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
		                leaf = _scroll$leaf6[0],
		                offset = _scroll$leaf6[1];
		            var _leaf$position5 = leaf.position(offset, i !== 0);

		            var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

		            node = _leaf$position6[0];
		            offset = _leaf$position6[1];

		            args.push(node, offset);
		          });
		          if (args.length < 2) {
		            args = args.concat(args);
		          }
		          _this3.setNativeRange.apply(_this3, _toConsumableArray(args).concat([force]));
		        })();
		      } else {
		        this.setNativeRange(null);
		      }
		      this.update(source);
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

		      var nativeRange = void 0,
		          oldRange = this.lastRange;

		      var _getRange = this.getRange();

		      var _getRange2 = _slicedToArray(_getRange, 2);

		      this.lastRange = _getRange2[0];
		      nativeRange = _getRange2[1];

		      if (this.lastRange != null) {
		        this.savedRange = this.lastRange;
		      }
		      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
		        var _emitter;

		        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
		          this.cursor.restore();
		        }
		        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
		        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
		        if (source !== _emitter4.default.sources.SILENT) {
		          var _emitter2;

		          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
		        }
		      }
		    }
		  }]);

		  return Selection;
		}();

		function contains(parent, descendant) {
		  try {
		    // Firefox inserts inaccessible nodes around video elements
		    descendant.parentNode;
		  } catch (e) {
		    return false;
		  }
		  // IE11 has bug with Text nodes
		  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
		  if (descendant instanceof Text) {
		    descendant = descendant.parentNode;
		  }
		  return parent.contains(descendant);
		}

		exports.Range = Range;
		exports.default = Selection;

	/***/ },
	/* 41 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Theme = function () {
		  function Theme(quill, options) {
		    _classCallCheck(this, Theme);

		    this.quill = quill;
		    this.options = options;
		    this.modules = {};
		  }

		  _createClass(Theme, [{
		    key: 'init',
		    value: function init() {
		      var _this = this;

		      Object.keys(this.options.modules).forEach(function (name) {
		        if (_this.modules[name] == null) {
		          _this.addModule(name);
		        }
		      });
		    }
		  }, {
		    key: 'addModule',
		    value: function addModule(name) {
		      var moduleClass = this.quill.constructor.import('modules/' + name);
		      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
		      return this.modules[name];
		    }
		  }]);

		  return Theme;
		}();

		Theme.DEFAULTS = {
		  modules: {}
		};
		Theme.themes = {
		  'default': Theme
		};

		exports.default = Theme;

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Container = function (_Parchment$Container) {
		  _inherits(Container, _Parchment$Container);

		  function Container() {
		    _classCallCheck(this, Container);

		    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
		  }

		  return Container;
		}(_parchment2.default.Container);

		Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

		exports.default = Container;

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _emitter = __webpack_require__(35);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		var _break = __webpack_require__(30);

		var _break2 = _interopRequireDefault(_break);

		var _container = __webpack_require__(42);

		var _container2 = _interopRequireDefault(_container);

		var _code = __webpack_require__(28);

		var _code2 = _interopRequireDefault(_code);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		function isLine(blot) {
		  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
		}

		var Scroll = function (_Parchment$Scroll) {
		  _inherits(Scroll, _Parchment$Scroll);

		  function Scroll(domNode, config) {
		    _classCallCheck(this, Scroll);

		    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

		    _this.emitter = config.emitter;
		    if (Array.isArray(config.whitelist)) {
		      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
		        whitelist[format] = true;
		        return whitelist;
		      }, {});
		    }
		    _this.optimize();
		    _this.enable();
		    return _this;
		  }

		  _createClass(Scroll, [{
		    key: 'deleteAt',
		    value: function deleteAt(index, length) {
		      var _line = this.line(index),
		          _line2 = _slicedToArray(_line, 2),
		          first = _line2[0],
		          offset = _line2[1];

		      var _line3 = this.line(index + length),
		          _line4 = _slicedToArray(_line3, 1),
		          last = _line4[0];

		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
		      if (last != null && first !== last && offset > 0 && !(first instanceof _block.BlockEmbed) && !(last instanceof _block.BlockEmbed)) {
		        if (last instanceof _code2.default) {
		          last.deleteAt(last.length() - 1, 1);
		        }
		        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
		        first.moveChildren(last, ref);
		        first.remove();
		      }
		      this.optimize();
		    }
		  }, {
		    key: 'enable',
		    value: function enable() {
		      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		      this.domNode.setAttribute('contenteditable', enabled);
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, format, value) {
		      if (this.whitelist != null && !this.whitelist[format]) return;
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
		      this.optimize();
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
		      if (index >= this.length()) {
		        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
		          var blot = _parchment2.default.create(this.statics.defaultChild);
		          this.appendChild(blot);
		          if (def == null && value.endsWith('\n')) {
		            value = value.slice(0, -1);
		          }
		          blot.insertAt(0, value, def);
		        } else {
		          var embed = _parchment2.default.create(value, def);
		          this.appendChild(embed);
		        }
		      } else {
		        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
		      }
		      this.optimize();
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
		        var wrapper = _parchment2.default.create(this.statics.defaultChild);
		        wrapper.appendChild(blot);
		        blot = wrapper;
		      }
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
		    }
		  }, {
		    key: 'leaf',
		    value: function leaf(index) {
		      return this.path(index).pop() || [null, -1];
		    }
		  }, {
		    key: 'line',
		    value: function line(index) {
		      if (index === this.length()) {
		        return this.line(index - 1);
		      }
		      return this.descendant(isLine, index);
		    }
		  }, {
		    key: 'lines',
		    value: function lines() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

		      var getLines = function getLines(blot, index, length) {
		        var lines = [],
		            lengthLeft = length;
		        blot.children.forEachAt(index, length, function (child, index, length) {
		          if (isLine(child)) {
		            lines.push(child);
		          } else if (child instanceof _parchment2.default.Container) {
		            lines = lines.concat(getLines(child, index, lengthLeft));
		          }
		          lengthLeft -= length;
		        });
		        return lines;
		      };
		      return getLines(this, index, length);
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		      if (this.batch === true) return;
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations);
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations);
		      }
		    }
		  }, {
		    key: 'path',
		    value: function path(index) {
		      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
		    }
		  }, {
		    key: 'update',
		    value: function update(mutations) {
		      if (this.batch === true) return;
		      var source = _emitter2.default.sources.USER;
		      if (typeof mutations === 'string') {
		        source = mutations;
		      }
		      if (!Array.isArray(mutations)) {
		        mutations = this.observer.takeRecords();
		      }
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
		      }
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
		      }
		    }
		  }]);

		  return Scroll;
		}(_parchment2.default.Scroll);

		Scroll.blotName = 'scroll';
		Scroll.className = 'ql-editor';
		Scroll.tagName = 'DIV';
		Scroll.defaultChild = 'block';
		Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

		exports.default = Scroll;

	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		var _align = __webpack_require__(45);

		var _background = __webpack_require__(46);

		var _color = __webpack_require__(47);

		var _direction = __webpack_require__(48);

		var _font = __webpack_require__(49);

		var _size = __webpack_require__(50);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:clipboard');

		var DOM_KEY = '__ql-matcher';

		var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

		var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
		  memo[attr.keyName] = attr;
		  return memo;
		}, {});

		var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
		  memo[attr.keyName] = attr;
		  return memo;
		}, {});

		var Clipboard = function (_Module) {
		  _inherits(Clipboard, _Module);

		  function Clipboard(quill, options) {
		    _classCallCheck(this, Clipboard);

		    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

		    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
		    _this.container = _this.quill.addContainer('ql-clipboard');
		    _this.container.setAttribute('contenteditable', true);
		    _this.container.setAttribute('tabindex', -1);
		    _this.matchers = [];
		    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (pair) {
		      _this.addMatcher.apply(_this, _toConsumableArray(pair));
		    });
		    return _this;
		  }

		  _createClass(Clipboard, [{
		    key: 'addMatcher',
		    value: function addMatcher(selector, matcher) {
		      this.matchers.push([selector, matcher]);
		    }
		  }, {
		    key: 'convert',
		    value: function convert(html) {
		      if (typeof html === 'string') {
		        this.container.innerHTML = html;
		      }

		      var _prepareMatching = this.prepareMatching(),
		          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
		          elementMatchers = _prepareMatching2[0],
		          textMatchers = _prepareMatching2[1];

		      var delta = traverse(this.container, elementMatchers, textMatchers);
		      // Remove trailing newline
		      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
		        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
		      }
		      debug.log('convert', this.container.innerHTML, delta);
		      this.container.innerHTML = '';
		      return delta;
		    }
		  }, {
		    key: 'dangerouslyPasteHTML',
		    value: function dangerouslyPasteHTML(index, html) {
		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

		      if (typeof index === 'string') {
		        return this.quill.setContents(this.convert(index), html);
		      } else {
		        var paste = this.convert(html);
		        return this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
		      }
		    }
		  }, {
		    key: 'onPaste',
		    value: function onPaste(e) {
		      var _this2 = this;

		      if (e.defaultPrevented || !this.quill.isEnabled()) return;
		      var range = this.quill.getSelection();
		      var delta = new _quillDelta2.default().retain(range.index);
		      var scrollTop = this.quill.scrollingContainer.scrollTop;
		      this.container.focus();
		      setTimeout(function () {
		        _this2.quill.selection.update(_quill2.default.sources.SILENT);
		        delta = delta.concat(_this2.convert()).delete(range.length);
		        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
		        // range.length contributes to delta.length()
		        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
		        _this2.quill.scrollingContainer.scrollTop = scrollTop;
		        _this2.quill.selection.scrollIntoView();
		      }, 1);
		    }
		  }, {
		    key: 'prepareMatching',
		    value: function prepareMatching() {
		      var _this3 = this;

		      var elementMatchers = [],
		          textMatchers = [];
		      this.matchers.forEach(function (pair) {
		        var _pair = _slicedToArray(pair, 2),
		            selector = _pair[0],
		            matcher = _pair[1];

		        switch (selector) {
		          case Node.TEXT_NODE:
		            textMatchers.push(matcher);
		            break;
		          case Node.ELEMENT_NODE:
		            elementMatchers.push(matcher);
		            break;
		          default:
		            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
		              // TODO use weakmap
		              node[DOM_KEY] = node[DOM_KEY] || [];
		              node[DOM_KEY].push(matcher);
		            });
		            break;
		        }
		      });
		      return [elementMatchers, textMatchers];
		    }
		  }]);

		  return Clipboard;
		}(_module2.default);

		Clipboard.DEFAULTS = {
		  matchers: []
		};

		function computeStyle(node) {
		  if (node.nodeType !== Node.ELEMENT_NODE) return {};
		  var DOM_KEY = '__ql-computed-style';
		  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
		}

		function deltaEndsWith(delta, text) {
		  var endText = "";
		  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
		    var op = delta.ops[i];
		    if (typeof op.insert !== 'string') break;
		    endText = op.insert + endText;
		  }
		  return endText.slice(-1 * text.length) === text;
		}

		function isLine(node) {
		  if (node.childNodes.length === 0) return false; // Exclude embed blocks
		  var style = computeStyle(node);
		  return ['block', 'list-item'].indexOf(style.display) > -1;
		}

		function traverse(node, elementMatchers, textMatchers) {
		  // Post-order
		  if (node.nodeType === node.TEXT_NODE) {
		    return textMatchers.reduce(function (delta, matcher) {
		      return matcher(node, delta);
		    }, new _quillDelta2.default());
		  } else if (node.nodeType === node.ELEMENT_NODE) {
		    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
		      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
		      if (childNode.nodeType === node.ELEMENT_NODE) {
		        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
		          return matcher(childNode, childrenDelta);
		        }, childrenDelta);
		        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
		          return matcher(childNode, childrenDelta);
		        }, childrenDelta);
		      }
		      return delta.concat(childrenDelta);
		    }, new _quillDelta2.default());
		  } else {
		    return new _quillDelta2.default();
		  }
		}

		function matchAlias(format, node, delta) {
		  return delta.compose(new _quillDelta2.default().retain(delta.length(), _defineProperty({}, format, true)));
		}

		function matchAttributor(node, delta) {
		  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
		  var classes = _parchment2.default.Attributor.Class.keys(node);
		  var styles = _parchment2.default.Attributor.Style.keys(node);
		  var formats = {};
		  attributes.concat(classes).concat(styles).forEach(function (name) {
		    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
		    if (attr != null) {
		      formats[attr.attrName] = attr.value(node);
		      if (formats[attr.attrName]) return;
		    }
		    if (ATTRIBUTE_ATTRIBUTORS[name] != null) {
		      attr = ATTRIBUTE_ATTRIBUTORS[name];
		      formats[attr.attrName] = attr.value(node) || undefined;
		    }
		    if (STYLE_ATTRIBUTORS[name] != null) {
		      attr = STYLE_ATTRIBUTORS[name];
		      formats[attr.attrName] = attr.value(node) || undefined;
		    }
		  });
		  if (Object.keys(formats).length > 0) {
		    delta = delta.compose(new _quillDelta2.default().retain(delta.length(), formats));
		  }
		  return delta;
		}

		function matchBlot(node, delta) {
		  var match = _parchment2.default.query(node);
		  if (match == null) return delta;
		  if (match.prototype instanceof _parchment2.default.Embed) {
		    var embed = {};
		    var value = match.value(node);
		    if (value != null) {
		      embed[match.blotName] = value;
		      delta = new _quillDelta2.default().insert(embed, match.formats(node));
		    }
		  } else if (typeof match.formats === 'function') {
		    var formats = _defineProperty({}, match.blotName, match.formats(node));
		    delta = delta.compose(new _quillDelta2.default().retain(delta.length(), formats));
		  }
		  return delta;
		}

		function matchBreak(node, delta) {
		  if (!deltaEndsWith(delta, '\n')) {
		    delta.insert('\n');
		  }
		  return delta;
		}

		function matchIgnore() {
		  return new _quillDelta2.default();
		}

		function matchNewline(node, delta) {
		  if (isLine(node) && !deltaEndsWith(delta, '\n')) {
		    delta.insert('\n');
		  }
		  return delta;
		}

		function matchSpacing(node, delta) {
		  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
		    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
		    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
		      delta.insert('\n');
		    }
		  }
		  return delta;
		}

		function matchStyles(node, delta) {
		  var formats = {};
		  var style = node.style || {};
		  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
		    formats.italic = true;
		  }
		  if (style.fontWeight && computeStyle(node).fontWeight === 'bold') {
		    formats.bold = true;
		  }
		  if (Object.keys(formats).length > 0) {
		    delta = delta.compose(new _quillDelta2.default().retain(delta.length(), formats));
		  }
		  if (parseFloat(style.textIndent || 0) > 0) {
		    // Could be 0.5in
		    delta = new _quillDelta2.default().insert('\t').concat(delta);
		  }
		  return delta;
		}

		function matchText(node, delta) {
		  var text = node.data;
		  // Word represents empty line with <o:p>&nbsp;</o:p>
		  if (node.parentNode.tagName === 'O:P') {
		    return delta.insert(text.trim());
		  }
		  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
		    // eslint-disable-next-line func-style
		    var replacer = function replacer(collapse, match) {
		      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
		      return match.length < 1 && collapse ? ' ' : match;
		    };
		    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
		    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
		    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
		      text = text.replace(/^\s+/, replacer.bind(replacer, false));
		    }
		    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
		      text = text.replace(/\s+$/, replacer.bind(replacer, false));
		    }
		  }
		  return delta.insert(text);
		}

		exports.default = Clipboard;
		exports.matchAttributor = matchAttributor;
		exports.matchBlot = matchBlot;
		exports.matchNewline = matchNewline;
		exports.matchSpacing = matchSpacing;
		exports.matchText = matchText;

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var config = {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: ['right', 'center', 'justify']
		};

		var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
		var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
		var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

		exports.AlignAttribute = AlignAttribute;
		exports.AlignClass = AlignClass;
		exports.AlignStyle = AlignStyle;

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.BackgroundStyle = exports.BackgroundClass = undefined;

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _color = __webpack_require__(47);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
		  scope: _parchment2.default.Scope.INLINE
		});
		var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
		  scope: _parchment2.default.Scope.INLINE
		});

		exports.BackgroundClass = BackgroundClass;
		exports.BackgroundStyle = BackgroundStyle;

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ColorAttributor = function (_Parchment$Attributor) {
		  _inherits(ColorAttributor, _Parchment$Attributor);

		  function ColorAttributor() {
		    _classCallCheck(this, ColorAttributor);

		    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
		  }

		  _createClass(ColorAttributor, [{
		    key: 'value',
		    value: function value(domNode) {
		      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
		      if (!value.startsWith('rgb(')) return value;
		      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
		      return '#' + value.split(',').map(function (component) {
		        return ('00' + parseInt(component).toString(16)).slice(-2);
		      }).join('');
		    }
		  }]);

		  return ColorAttributor;
		}(_parchment2.default.Attributor.Style);

		var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
		  scope: _parchment2.default.Scope.INLINE
		});
		var ColorStyle = new ColorAttributor('color', 'color', {
		  scope: _parchment2.default.Scope.INLINE
		});

		exports.ColorAttributor = ColorAttributor;
		exports.ColorClass = ColorClass;
		exports.ColorStyle = ColorStyle;

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var config = {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: ['rtl']
		};

		var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
		var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
		var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

		exports.DirectionAttribute = DirectionAttribute;
		exports.DirectionClass = DirectionClass;
		exports.DirectionStyle = DirectionStyle;

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.FontClass = exports.FontStyle = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var config = {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['serif', 'monospace']
		};

		var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

		var FontStyleAttributor = function (_Parchment$Attributor) {
		  _inherits(FontStyleAttributor, _Parchment$Attributor);

		  function FontStyleAttributor() {
		    _classCallCheck(this, FontStyleAttributor);

		    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
		  }

		  _createClass(FontStyleAttributor, [{
		    key: 'value',
		    value: function value(node) {
		      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
		    }
		  }]);

		  return FontStyleAttributor;
		}(_parchment2.default.Attributor.Style);

		var FontStyle = new FontStyleAttributor('font', 'font-family', config);

		exports.FontStyle = FontStyle;
		exports.FontClass = FontClass;

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.SizeStyle = exports.SizeClass = undefined;

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['small', 'large', 'huge']
		});
		var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['10px', '18px', '32px']
		});

		exports.SizeClass = SizeClass;
		exports.SizeStyle = SizeStyle;

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getLastChangeIndex = exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var History = function (_Module) {
		  _inherits(History, _Module);

		  function History(quill, options) {
		    _classCallCheck(this, History);

		    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

		    _this.lastRecorded = 0;
		    _this.ignoreChange = false;
		    _this.clear();
		    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
		      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
		      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
		        _this.record(delta, oldDelta);
		      } else {
		        _this.transform(delta);
		      }
		    });
		    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
		    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
		    if (/Win/i.test(navigator.platform)) {
		      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
		    }
		    return _this;
		  }

		  _createClass(History, [{
		    key: 'change',
		    value: function change(source, dest) {
		      if (this.stack[source].length === 0) return;
		      var delta = this.stack[source].pop();
		      this.lastRecorded = 0;
		      this.ignoreChange = true;
		      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
		      this.ignoreChange = false;
		      var index = getLastChangeIndex(delta[source]);
		      this.quill.setSelection(index);
		      this.quill.selection.scrollIntoView();
		      this.stack[dest].push(delta);
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      this.stack = { undo: [], redo: [] };
		    }
		  }, {
		    key: 'record',
		    value: function record(changeDelta, oldDelta) {
		      if (changeDelta.ops.length === 0) return;
		      this.stack.redo = [];
		      var undoDelta = this.quill.getContents().diff(oldDelta);
		      var timestamp = Date.now();
		      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
		        var delta = this.stack.undo.pop();
		        undoDelta = undoDelta.compose(delta.undo);
		        changeDelta = delta.redo.compose(changeDelta);
		      } else {
		        this.lastRecorded = timestamp;
		      }
		      this.stack.undo.push({
		        redo: changeDelta,
		        undo: undoDelta
		      });
		      if (this.stack.undo.length > this.options.maxStack) {
		        this.stack.undo.shift();
		      }
		    }
		  }, {
		    key: 'redo',
		    value: function redo() {
		      this.change('redo', 'undo');
		    }
		  }, {
		    key: 'transform',
		    value: function transform(delta) {
		      this.stack.undo.forEach(function (change) {
		        change.undo = delta.transform(change.undo, true);
		        change.redo = delta.transform(change.redo, true);
		      });
		      this.stack.redo.forEach(function (change) {
		        change.undo = delta.transform(change.undo, true);
		        change.redo = delta.transform(change.redo, true);
		      });
		    }
		  }, {
		    key: 'undo',
		    value: function undo() {
		      this.change('undo', 'redo');
		    }
		  }]);

		  return History;
		}(_module2.default);

		History.DEFAULTS = {
		  delay: 1000,
		  maxStack: 100,
		  userOnly: false
		};

		function endsWithNewlineChange(delta) {
		  var lastOp = delta.ops[delta.ops.length - 1];
		  if (lastOp == null) return false;
		  if (lastOp.insert != null) {
		    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
		  }
		  if (lastOp.attributes != null) {
		    return Object.keys(lastOp.attributes).some(function (attr) {
		      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
		    });
		  }
		  return false;
		}

		function getLastChangeIndex(delta) {
		  var deleteLength = delta.reduce(function (length, op) {
		    length += op.delete || 0;
		    return length;
		  }, 0);
		  var changeIndex = delta.length() - deleteLength;
		  if (endsWithNewlineChange(delta)) {
		    changeIndex -= 1;
		  }
		  return changeIndex;
		}

		exports.default = History;
		exports.getLastChangeIndex = getLastChangeIndex;

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _clone = __webpack_require__(38);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(22);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _op = __webpack_require__(26);

		var _op2 = _interopRequireDefault(_op);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:keyboard');

		var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

		var Keyboard = function (_Module) {
		  _inherits(Keyboard, _Module);

		  _createClass(Keyboard, null, [{
		    key: 'match',
		    value: function match(evt, binding) {
		      binding = normalize(binding);
		      if (!!binding.shortKey !== evt[SHORTKEY] && binding.shortKey !== null) return false;
		      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
		        return key != SHORTKEY && !!binding[key] !== evt[key] && binding[key] !== null;
		      })) {
		        return false;
		      }
		      return binding.key === (evt.which || evt.keyCode);
		    }
		  }]);

		  function Keyboard(quill, options) {
		    _classCallCheck(this, Keyboard);

		    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

		    _this.bindings = {};
		    Object.keys(_this.options.bindings).forEach(function (name) {
		      if (_this.options.bindings[name]) {
		        _this.addBinding(_this.options.bindings[name]);
		      }
		    });
		    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
		    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
		    if (/Gecko/i.test(navigator.userAgent)) {
		      // Need to handle delete and backspace for Firefox in the general case #1171
		      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
		      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
		    } else {
		      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
		      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
		    }
		    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
		    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
		    _this.listen();
		    return _this;
		  }

		  _createClass(Keyboard, [{
		    key: 'addBinding',
		    value: function addBinding(key) {
		      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      var binding = normalize(key);
		      if (binding == null || binding.key == null) {
		        return debug.warn('Attempted to add invalid keyboard binding', binding);
		      }
		      if (typeof context === 'function') {
		        context = { handler: context };
		      }
		      if (typeof handler === 'function') {
		        handler = { handler: handler };
		      }
		      binding = (0, _extend2.default)(binding, context, handler);
		      this.bindings[binding.key] = this.bindings[binding.key] || [];
		      this.bindings[binding.key].push(binding);
		    }
		  }, {
		    key: 'listen',
		    value: function listen() {
		      var _this2 = this;

		      this.quill.root.addEventListener('keydown', function (evt) {
		        if (evt.defaultPrevented) return;
		        var which = evt.which || evt.keyCode;
		        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
		          return Keyboard.match(evt, binding);
		        });
		        if (bindings.length === 0) return;
		        var range = _this2.quill.getSelection();
		        if (range == null || !_this2.quill.hasFocus()) return;

		        var _quill$scroll$line = _this2.quill.scroll.line(range.index),
		            _quill$scroll$line2 = _slicedToArray(_quill$scroll$line, 2),
		            line = _quill$scroll$line2[0],
		            offset = _quill$scroll$line2[1];

		        var _quill$scroll$leaf = _this2.quill.scroll.leaf(range.index),
		            _quill$scroll$leaf2 = _slicedToArray(_quill$scroll$leaf, 2),
		            leafStart = _quill$scroll$leaf2[0],
		            offsetStart = _quill$scroll$leaf2[1];

		        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.scroll.leaf(range.index + range.length),
		            _ref2 = _slicedToArray(_ref, 2),
		            leafEnd = _ref2[0],
		            offsetEnd = _ref2[1];

		        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
		        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
		        var curContext = {
		          collapsed: range.length === 0,
		          empty: range.length === 0 && line.length() <= 1,
		          format: _this2.quill.getFormat(range),
		          offset: offset,
		          prefix: prefixText,
		          suffix: suffixText
		        };
		        var prevented = bindings.some(function (binding) {
		          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
		          if (binding.empty != null && binding.empty !== curContext.empty) return false;
		          if (binding.offset != null && binding.offset !== curContext.offset) return false;
		          if (Array.isArray(binding.format)) {
		            // any format is present
		            if (binding.format.every(function (name) {
		              return curContext.format[name] == null;
		            })) {
		              return false;
		            }
		          } else if (_typeof(binding.format) === 'object') {
		            // all formats must match
		            if (!Object.keys(binding.format).every(function (name) {
		              if (binding.format[name] === true) return curContext.format[name] != null;
		              if (binding.format[name] === false) return curContext.format[name] == null;
		              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
		            })) {
		              return false;
		            }
		          }
		          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
		          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
		          return binding.handler.call(_this2, range, curContext) !== true;
		        });
		        if (prevented) {
		          evt.preventDefault();
		        }
		      });
		    }
		  }]);

		  return Keyboard;
		}(_module2.default);

		Keyboard.keys = {
		  BACKSPACE: 8,
		  TAB: 9,
		  ENTER: 13,
		  ESCAPE: 27,
		  LEFT: 37,
		  UP: 38,
		  RIGHT: 39,
		  DOWN: 40,
		  DELETE: 46
		};

		Keyboard.DEFAULTS = {
		  bindings: {
		    'bold': makeFormatHandler('bold'),
		    'italic': makeFormatHandler('italic'),
		    'underline': makeFormatHandler('underline'),
		    'indent': {
		      // highlight tab or tab at beginning of list, indent or blockquote
		      key: Keyboard.keys.TAB,
		      format: ['blockquote', 'indent', 'list'],
		      handler: function handler(range, context) {
		        if (context.collapsed && context.offset !== 0) return true;
		        this.quill.format('indent', '+1', _quill2.default.sources.USER);
		      }
		    },
		    'outdent': {
		      key: Keyboard.keys.TAB,
		      shiftKey: true,
		      format: ['blockquote', 'indent', 'list'],
		      // highlight tab or tab at beginning of list, indent or blockquote
		      handler: function handler(range, context) {
		        if (context.collapsed && context.offset !== 0) return true;
		        this.quill.format('indent', '-1', _quill2.default.sources.USER);
		      }
		    },
		    'outdent backspace': {
		      key: Keyboard.keys.BACKSPACE,
		      collapsed: true,
		      format: ['blockquote', 'indent', 'list'],
		      offset: 0,
		      handler: function handler(range, context) {
		        if (context.format.indent != null) {
		          this.quill.format('indent', '-1', _quill2.default.sources.USER);
		        } else if (context.format.blockquote != null) {
		          this.quill.format('blockquote', false, _quill2.default.sources.USER);
		        } else if (context.format.list != null) {
		          this.quill.format('list', false, _quill2.default.sources.USER);
		        }
		      }
		    },
		    'indent code-block': makeCodeBlockHandler(true),
		    'outdent code-block': makeCodeBlockHandler(false),
		    'remove tab': {
		      key: Keyboard.keys.TAB,
		      shiftKey: true,
		      collapsed: true,
		      prefix: /\t$/,
		      handler: function handler(range) {
		        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
		      }
		    },
		    'tab': {
		      key: Keyboard.keys.TAB,
		      handler: function handler(range, context) {
		        if (!context.collapsed) {
		          this.quill.scroll.deleteAt(range.index, range.length);
		        }
		        this.quill.insertText(range.index, '\t', _quill2.default.sources.USER);
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		      }
		    },
		    'list empty enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: ['list'],
		      empty: true,
		      handler: function handler(range, context) {
		        this.quill.format('list', false, _quill2.default.sources.USER);
		        if (context.format.indent) {
		          this.quill.format('indent', false, _quill2.default.sources.USER);
		        }
		      }
		    },
		    'checklist enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: { list: 'checked' },
		      handler: function handler(range) {
		        this.quill.scroll.insertAt(range.index, '\n');

		        var _quill$scroll$line3 = this.quill.scroll.line(range.index + 1),
		            _quill$scroll$line4 = _slicedToArray(_quill$scroll$line3, 1),
		            line = _quill$scroll$line4[0];

		        line.format('list', 'unchecked');
		        this.quill.update(_quill2.default.sources.USER);
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		        this.quill.selection.scrollIntoView();
		      }
		    },
		    'header enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: ['header'],
		      suffix: /^$/,
		      handler: function handler(range) {
		        this.quill.scroll.insertAt(range.index, '\n');
		        this.quill.formatText(range.index + 1, 1, 'header', false, _quill2.default.sources.USER);
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		        this.quill.selection.scrollIntoView();
		      }
		    },
		    'list autofill': {
		      key: ' ',
		      collapsed: true,
		      format: { list: false },
		      prefix: /^(1\.|-)$/,
		      handler: function handler(range, context) {
		        var length = context.prefix.length;
		        this.quill.scroll.deleteAt(range.index - length, length);
		        this.quill.formatLine(range.index - length, 1, 'list', length === 1 ? 'bullet' : 'ordered', _quill2.default.sources.USER);
		        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
		      }
		    }
		  }
		};

		function handleBackspace(range, context) {
		  if (range.index === 0) return;

		  var _quill$scroll$line5 = this.quill.scroll.line(range.index),
		      _quill$scroll$line6 = _slicedToArray(_quill$scroll$line5, 1),
		      line = _quill$scroll$line6[0];

		  var formats = {};
		  if (context.offset === 0) {
		    var curFormats = line.formats();
		    var prevFormats = this.quill.getFormat(range.index - 1, 1);
		    formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
		  }
		  this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
		  if (Object.keys(formats).length > 0) {
		    this.quill.formatLine(range.index - 1, 1, formats, _quill2.default.sources.USER);
		  }
		  this.quill.selection.scrollIntoView();
		}

		function handleDelete(range) {
		  if (range.index >= this.quill.getLength() - 1) return;
		  this.quill.deleteText(range.index, 1, _quill2.default.sources.USER);
		}

		function handleDeleteRange(range) {
		  this.quill.deleteText(range, _quill2.default.sources.USER);
		  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
		  this.quill.selection.scrollIntoView();
		}

		function handleEnter(range, context) {
		  var _this3 = this;

		  if (range.length > 0) {
		    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
		  }
		  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
		    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
		      lineFormats[format] = context.format[format];
		    }
		    return lineFormats;
		  }, {});
		  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
		  this.quill.selection.scrollIntoView();
		  Object.keys(context.format).forEach(function (name) {
		    if (lineFormats[name] != null) return;
		    if (Array.isArray(context.format[name])) return;
		    if (name === 'link') return;
		    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
		  });
		}

		function makeCodeBlockHandler(indent) {
		  return {
		    key: Keyboard.keys.TAB,
		    shiftKey: !indent,
		    format: { 'code-block': true },
		    handler: function handler(range) {
		      var CodeBlock = _parchment2.default.query('code-block');
		      var index = range.index,
		          length = range.length;

		      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
		          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
		          block = _quill$scroll$descend2[0],
		          offset = _quill$scroll$descend2[1];

		      if (block == null) return;
		      var scrollOffset = this.quill.scroll.offset(block);
		      var start = block.newlineIndex(offset, true) + 1;
		      var end = block.newlineIndex(scrollOffset + offset + length);
		      var lines = block.domNode.textContent.slice(start, end).split('\n');
		      offset = 0;
		      lines.forEach(function (line, i) {
		        if (indent) {
		          block.insertAt(start + offset, CodeBlock.TAB);
		          offset += CodeBlock.TAB.length;
		          if (i === 0) {
		            index += CodeBlock.TAB.length;
		          } else {
		            length += CodeBlock.TAB.length;
		          }
		        } else if (line.startsWith(CodeBlock.TAB)) {
		          block.deleteAt(start + offset, CodeBlock.TAB.length);
		          offset -= CodeBlock.TAB.length;
		          if (i === 0) {
		            index -= CodeBlock.TAB.length;
		          } else {
		            length -= CodeBlock.TAB.length;
		          }
		        }
		        offset += line.length + 1;
		      });
		      this.quill.update(_quill2.default.sources.USER);
		      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
		    }
		  };
		}

		function makeFormatHandler(format) {
		  return {
		    key: format[0].toUpperCase(),
		    shortKey: true,
		    handler: function handler(range, context) {
		      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
		    }
		  };
		}

		function normalize(binding) {
		  if (typeof binding === 'string' || typeof binding === 'number') {
		    return normalize({ key: binding });
		  }
		  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
		    binding = (0, _clone2.default)(binding, false);
		  }
		  if (typeof binding.key === 'string') {
		    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
		      binding.key = Keyboard.keys[binding.key.toUpperCase()];
		    } else if (binding.key.length === 1) {
		      binding.key = binding.key.toUpperCase().charCodeAt(0);
		    } else {
		      return null;
		    }
		  }
		  return binding;
		}

		exports.default = Keyboard;

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _core = __webpack_require__(1);

		var _core2 = _interopRequireDefault(_core);

		var _align = __webpack_require__(45);

		var _direction = __webpack_require__(48);

		var _indent = __webpack_require__(54);

		var _blockquote = __webpack_require__(55);

		var _blockquote2 = _interopRequireDefault(_blockquote);

		var _header = __webpack_require__(56);

		var _header2 = _interopRequireDefault(_header);

		var _list = __webpack_require__(57);

		var _list2 = _interopRequireDefault(_list);

		var _background = __webpack_require__(46);

		var _color = __webpack_require__(47);

		var _font = __webpack_require__(49);

		var _size = __webpack_require__(50);

		var _bold = __webpack_require__(58);

		var _bold2 = _interopRequireDefault(_bold);

		var _italic = __webpack_require__(59);

		var _italic2 = _interopRequireDefault(_italic);

		var _link = __webpack_require__(60);

		var _link2 = _interopRequireDefault(_link);

		var _script = __webpack_require__(61);

		var _script2 = _interopRequireDefault(_script);

		var _strike = __webpack_require__(62);

		var _strike2 = _interopRequireDefault(_strike);

		var _underline = __webpack_require__(63);

		var _underline2 = _interopRequireDefault(_underline);

		var _image = __webpack_require__(64);

		var _image2 = _interopRequireDefault(_image);

		var _video = __webpack_require__(65);

		var _video2 = _interopRequireDefault(_video);

		var _code = __webpack_require__(28);

		var _code2 = _interopRequireDefault(_code);

		var _formula = __webpack_require__(66);

		var _formula2 = _interopRequireDefault(_formula);

		var _syntax = __webpack_require__(67);

		var _syntax2 = _interopRequireDefault(_syntax);

		var _toolbar = __webpack_require__(68);

		var _toolbar2 = _interopRequireDefault(_toolbar);

		var _icons = __webpack_require__(69);

		var _icons2 = _interopRequireDefault(_icons);

		var _picker = __webpack_require__(102);

		var _picker2 = _interopRequireDefault(_picker);

		var _colorPicker = __webpack_require__(104);

		var _colorPicker2 = _interopRequireDefault(_colorPicker);

		var _iconPicker = __webpack_require__(105);

		var _iconPicker2 = _interopRequireDefault(_iconPicker);

		var _tooltip = __webpack_require__(106);

		var _tooltip2 = _interopRequireDefault(_tooltip);

		var _bubble = __webpack_require__(107);

		var _bubble2 = _interopRequireDefault(_bubble);

		var _snow = __webpack_require__(109);

		var _snow2 = _interopRequireDefault(_snow);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_core2.default.register({
		  'attributors/attribute/direction': _direction.DirectionAttribute,

		  'attributors/class/align': _align.AlignClass,
		  'attributors/class/background': _background.BackgroundClass,
		  'attributors/class/color': _color.ColorClass,
		  'attributors/class/direction': _direction.DirectionClass,
		  'attributors/class/font': _font.FontClass,
		  'attributors/class/size': _size.SizeClass,

		  'attributors/style/align': _align.AlignStyle,
		  'attributors/style/background': _background.BackgroundStyle,
		  'attributors/style/color': _color.ColorStyle,
		  'attributors/style/direction': _direction.DirectionStyle,
		  'attributors/style/font': _font.FontStyle,
		  'attributors/style/size': _size.SizeStyle
		}, true);

		_core2.default.register({
		  'formats/align': _align.AlignClass,
		  'formats/direction': _direction.DirectionClass,
		  'formats/indent': _indent.IndentClass,

		  'formats/background': _background.BackgroundStyle,
		  'formats/color': _color.ColorStyle,
		  'formats/font': _font.FontClass,
		  'formats/size': _size.SizeClass,

		  'formats/blockquote': _blockquote2.default,
		  'formats/code-block': _code2.default,
		  'formats/header': _header2.default,
		  'formats/list': _list2.default,

		  'formats/bold': _bold2.default,
		  'formats/code': _code.Code,
		  'formats/italic': _italic2.default,
		  'formats/link': _link2.default,
		  'formats/script': _script2.default,
		  'formats/strike': _strike2.default,
		  'formats/underline': _underline2.default,

		  'formats/image': _image2.default,
		  'formats/video': _video2.default,

		  'formats/list/item': _list.ListItem,

		  'modules/formula': _formula2.default,
		  'modules/syntax': _syntax2.default,
		  'modules/toolbar': _toolbar2.default,

		  'themes/bubble': _bubble2.default,
		  'themes/snow': _snow2.default,

		  'ui/icons': _icons2.default,
		  'ui/picker': _picker2.default,
		  'ui/icon-picker': _iconPicker2.default,
		  'ui/color-picker': _colorPicker2.default,
		  'ui/tooltip': _tooltip2.default
		}, true);

		module.exports = _core2.default;

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.IndentClass = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var IdentAttributor = function (_Parchment$Attributor) {
		  _inherits(IdentAttributor, _Parchment$Attributor);

		  function IdentAttributor() {
		    _classCallCheck(this, IdentAttributor);

		    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
		  }

		  _createClass(IdentAttributor, [{
		    key: 'add',
		    value: function add(node, value) {
		      if (value === '+1' || value === '-1') {
		        var indent = this.value(node) || 0;
		        value = value === '+1' ? indent + 1 : indent - 1;
		      }
		      if (value === 0) {
		        this.remove(node);
		        return true;
		      } else {
		        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
		      }
		    }
		  }, {
		    key: 'canAdd',
		    value: function canAdd(node, value) {
		      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
		    }
		  }, {
		    key: 'value',
		    value: function value(node) {
		      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
		    }
		  }]);

		  return IdentAttributor;
		}(_parchment2.default.Attributor.Class);

		var IndentClass = new IdentAttributor('indent', 'ql-indent', {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
		});

		exports.IndentClass = IndentClass;

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Blockquote = function (_Block) {
		  _inherits(Blockquote, _Block);

		  function Blockquote() {
		    _classCallCheck(this, Blockquote);

		    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
		  }

		  return Blockquote;
		}(_block2.default);

		Blockquote.blotName = 'blockquote';
		Blockquote.tagName = 'blockquote';

		exports.default = Blockquote;

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Header = function (_Block) {
		  _inherits(Header, _Block);

		  function Header() {
		    _classCallCheck(this, Header);

		    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		  }

		  _createClass(Header, null, [{
		    key: 'formats',
		    value: function formats(domNode) {
		      return this.tagName.indexOf(domNode.tagName) + 1;
		    }
		  }]);

		  return Header;
		}(_block2.default);

		Header.blotName = 'header';
		Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

		exports.default = Header;

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.ListItem = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(29);

		var _block2 = _interopRequireDefault(_block);

		var _container = __webpack_require__(42);

		var _container2 = _interopRequireDefault(_container);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ListItem = function (_Block) {
		  _inherits(ListItem, _Block);

		  function ListItem() {
		    _classCallCheck(this, ListItem);

		    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
		  }

		  _createClass(ListItem, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (name === List.blotName && !value) {
		        this.replaceWith(_parchment2.default.create(this.statics.scope));
		      } else {
		        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      if (this.prev == null && this.next == null) {
		        this.parent.remove();
		      } else {
		        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
		      }
		    }
		  }, {
		    key: 'replaceWith',
		    value: function replaceWith(name, value) {
		      this.parent.isolate(this.offset(this.parent), this.length());
		      if (name === this.parent.statics.blotName) {
		        this.parent.replaceWith(name, value);
		        return this;
		      } else {
		        this.parent.unwrap();
		        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'formats',
		    value: function formats(domNode) {
		      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
		    }
		  }]);

		  return ListItem;
		}(_block2.default);

		ListItem.blotName = 'list-item';
		ListItem.tagName = 'LI';

		var List = function (_Container) {
		  _inherits(List, _Container);

		  function List() {
		    _classCallCheck(this, List);

		    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
		  }

		  _createClass(List, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (this.children.length > 0) {
		        this.children.tail.format(name, value);
		      }
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      // We don't inherit from FormatBlot
		      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      if (blot instanceof ListItem) {
		        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
		      } else {
		        var index = ref == null ? this.length() : ref.offset(this);
		        var after = this.split(index);
		        after.parent.insertBefore(blot, after);
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this);
		      var next = this.next;
		      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
		        next.moveChildren(this);
		        next.remove();
		      }
		    }
		  }, {
		    key: 'replace',
		    value: function replace(target) {
		      if (target.statics.blotName !== this.statics.blotName) {
		        var item = _parchment2.default.create(this.statics.defaultChild);
		        target.moveChildren(item);
		        this.appendChild(item);
		      }
		      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var tagName = value === 'ordered' ? 'OL' : 'UL';
		      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
		      if (value === 'checked' || value === 'unchecked') {
		        node.setAttribute('data-checked', value === 'checked');
		      }
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      if (domNode.tagName === 'OL') return 'ordered';
		      if (domNode.tagName === 'UL') {
		        if (domNode.hasAttribute('data-checked')) {
		          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
		        } else {
		          return 'bullet';
		        }
		      }
		      return undefined;
		    }
		  }]);

		  return List;
		}(_container2.default);

		List.blotName = 'list';
		List.scope = _parchment2.default.Scope.BLOCK_BLOT;
		List.tagName = ['OL', 'UL'];
		List.defaultChild = 'list-item';
		List.allowedChildren = [ListItem];

		exports.ListItem = ListItem;
		exports.default = List;

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Bold = function (_Inline) {
		  _inherits(Bold, _Inline);

		  function Bold() {
		    _classCallCheck(this, Bold);

		    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
		  }

		  _createClass(Bold, [{
		    key: 'optimize',
		    value: function optimize() {
		      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this);
		      if (this.domNode.tagName !== this.statics.tagName[0]) {
		        this.replaceWith(this.statics.blotName);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create() {
		      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      return true;
		    }
		  }]);

		  return Bold;
		}(_inline2.default);

		Bold.blotName = 'bold';
		Bold.tagName = ['STRONG', 'B'];

		exports.default = Bold;

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _bold = __webpack_require__(58);

		var _bold2 = _interopRequireDefault(_bold);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Italic = function (_Bold) {
		  _inherits(Italic, _Bold);

		  function Italic() {
		    _classCallCheck(this, Italic);

		    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
		  }

		  return Italic;
		}(_bold2.default);

		Italic.blotName = 'italic';
		Italic.tagName = ['EM', 'I'];

		exports.default = Italic;

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.sanitize = exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Link = function (_Inline) {
		  _inherits(Link, _Inline);

		  function Link() {
		    _classCallCheck(this, Link);

		    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
		  }

		  _createClass(Link, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
		      value = this.constructor.sanitize(value);
		      this.domNode.setAttribute('href', value);
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
		      value = this.sanitize(value);
		      node.setAttribute('href', value);
		      node.setAttribute('target', '_blank');
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return domNode.getAttribute('href');
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return _sanitize(url, ['http', 'https', 'mailto']) ? url : this.SANITIZED_URL;
		    }
		  }]);

		  return Link;
		}(_inline2.default);

		Link.blotName = 'link';
		Link.tagName = 'A';
		Link.SANITIZED_URL = 'about:blank';

		function _sanitize(url, protocols) {
		  var anchor = document.createElement('a');
		  anchor.href = url;
		  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
		  return protocols.indexOf(protocol) > -1;
		}

		exports.default = Link;
		exports.sanitize = _sanitize;

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Script = function (_Inline) {
		  _inherits(Script, _Inline);

		  function Script() {
		    _classCallCheck(this, Script);

		    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
		  }

		  _createClass(Script, null, [{
		    key: 'create',
		    value: function create(value) {
		      if (value === 'super') {
		        return document.createElement('sup');
		      } else if (value === 'sub') {
		        return document.createElement('sub');
		      } else {
		        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
		      }
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      if (domNode.tagName === 'SUB') return 'sub';
		      if (domNode.tagName === 'SUP') return 'super';
		      return undefined;
		    }
		  }]);

		  return Script;
		}(_inline2.default);

		Script.blotName = 'script';
		Script.tagName = ['SUB', 'SUP'];

		exports.default = Script;

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Strike = function (_Inline) {
		  _inherits(Strike, _Inline);

		  function Strike() {
		    _classCallCheck(this, Strike);

		    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
		  }

		  return Strike;
		}(_inline2.default);

		Strike.blotName = 'strike';
		Strike.tagName = 'S';

		exports.default = Strike;

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _inline = __webpack_require__(32);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Underline = function (_Inline) {
		  _inherits(Underline, _Inline);

		  function Underline() {
		    _classCallCheck(this, Underline);

		    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
		  }

		  return Underline;
		}(_inline2.default);

		Underline.blotName = 'underline';
		Underline.tagName = 'U';

		exports.default = Underline;

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _link = __webpack_require__(60);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ATTRIBUTES = ['alt', 'height', 'width'];

		var Image = function (_Embed) {
		  _inherits(Image, _Embed);

		  function Image() {
		    _classCallCheck(this, Image);

		    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
		  }

		  _createClass(Image, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (ATTRIBUTES.indexOf(name) > -1) {
		        if (value) {
		          this.domNode.setAttribute(name, value);
		        } else {
		          this.domNode.removeAttribute(name);
		        }
		      } else {
		        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
		      if (typeof value === 'string') {
		        node.setAttribute('src', this.sanitize(value));
		      }
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return ATTRIBUTES.reduce(function (formats, attribute) {
		        if (domNode.hasAttribute(attribute)) {
		          formats[attribute] = domNode.getAttribute(attribute);
		        }
		        return formats;
		      }, {});
		    }
		  }, {
		    key: 'match',
		    value: function match(url) {
		      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
		      );
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('src');
		    }
		  }]);

		  return Image;
		}(_embed2.default);

		Image.blotName = 'image';
		Image.tagName = 'IMG';

		exports.default = Image;

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _block = __webpack_require__(29);

		var _link = __webpack_require__(60);

		var _link2 = _interopRequireDefault(_link);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ATTRIBUTES = ['height', 'width'];

		var Video = function (_BlockEmbed) {
		  _inherits(Video, _BlockEmbed);

		  function Video() {
		    _classCallCheck(this, Video);

		    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
		  }

		  _createClass(Video, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (ATTRIBUTES.indexOf(name) > -1) {
		        if (value) {
		          this.domNode.setAttribute(name, value);
		        } else {
		          this.domNode.removeAttribute(name);
		        }
		      } else {
		        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
		      node.setAttribute('frameborder', '0');
		      node.setAttribute('allowfullscreen', true);
		      node.setAttribute('src', this.sanitize(value));
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return ATTRIBUTES.reduce(function (formats, attribute) {
		        if (domNode.hasAttribute(attribute)) {
		          formats[attribute] = domNode.getAttribute(attribute);
		        }
		        return formats;
		      }, {});
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return _link2.default.sanitize(url);
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('src');
		    }
		  }]);

		  return Video;
		}(_block.BlockEmbed);

		Video.blotName = 'video';
		Video.className = 'ql-video';
		Video.tagName = 'IFRAME';

		exports.default = Video;

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.FormulaBlot = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _embed = __webpack_require__(31);

		var _embed2 = _interopRequireDefault(_embed);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var FormulaBlot = function (_Embed) {
		  _inherits(FormulaBlot, _Embed);

		  function FormulaBlot() {
		    _classCallCheck(this, FormulaBlot);

		    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
		  }

		  _createClass(FormulaBlot, [{
		    key: 'index',
		    value: function index() {
		      return 1;
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
		      if (typeof value === 'string') {
		        window.katex.render(value, node);
		        node.setAttribute('data-value', value);
		      }
		      node.setAttribute('contenteditable', false);
		      return node;
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('data-value');
		    }
		  }]);

		  return FormulaBlot;
		}(_embed2.default);

		FormulaBlot.blotName = 'formula';
		FormulaBlot.className = 'ql-formula';
		FormulaBlot.tagName = 'SPAN';

		function Formula() {
		  if (window.katex == null) {
		    throw new Error('Formula module requires KaTeX.');
		  }
		  _quill2.default.register(FormulaBlot, true);
		}

		exports.FormulaBlot = FormulaBlot;
		exports.default = Formula;

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.CodeToken = exports.CodeBlock = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		var _code = __webpack_require__(28);

		var _code2 = _interopRequireDefault(_code);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SyntaxCodeBlock = function (_CodeBlock) {
		  _inherits(SyntaxCodeBlock, _CodeBlock);

		  function SyntaxCodeBlock() {
		    _classCallCheck(this, SyntaxCodeBlock);

		    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
		  }

		  _createClass(SyntaxCodeBlock, [{
		    key: 'replaceWith',
		    value: function replaceWith(block) {
		      this.domNode.textContent = this.domNode.textContent;
		      this.attach();
		      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
		    }
		  }, {
		    key: 'highlight',
		    value: function highlight(_highlight) {
		      if (this.cachedHTML !== this.domNode.innerHTML) {
		        var text = this.domNode.textContent;
		        if (text.trim().length > 0 || this.cachedHTML == null) {
		          this.domNode.innerHTML = _highlight(text);
		          this.attach();
		        }
		        this.cachedHTML = this.domNode.innerHTML;
		      }
		    }
		  }]);

		  return SyntaxCodeBlock;
		}(_code2.default);

		SyntaxCodeBlock.className = 'ql-syntax';

		var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
		  scope: _parchment2.default.Scope.INLINE
		});

		var Syntax = function (_Module) {
		  _inherits(Syntax, _Module);

		  function Syntax(quill, options) {
		    _classCallCheck(this, Syntax);

		    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

		    if (typeof _this2.options.highlight !== 'function') {
		      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
		    }
		    _quill2.default.register(CodeToken, true);
		    _quill2.default.register(SyntaxCodeBlock, true);
		    var timer = null;
		    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
		      if (timer != null) return;
		      timer = setTimeout(function () {
		        _this2.highlight();
		        timer = null;
		      }, 100);
		    });
		    _this2.highlight();
		    return _this2;
		  }

		  _createClass(Syntax, [{
		    key: 'highlight',
		    value: function highlight() {
		      var _this3 = this;

		      if (this.quill.selection.composing) return;
		      var range = this.quill.getSelection();
		      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
		        code.highlight(_this3.options.highlight);
		      });
		      this.quill.update(_quill2.default.sources.SILENT);
		      if (range != null) {
		        this.quill.setSelection(range, _quill2.default.sources.SILENT);
		      }
		    }
		  }]);

		  return Syntax;
		}(_module2.default);

		Syntax.DEFAULTS = {
		  highlight: function () {
		    if (window.hljs == null) return null;
		    return function (text) {
		      var result = window.hljs.highlightAuto(text);
		      return result.value;
		    };
		  }()
		};

		exports.CodeBlock = SyntaxCodeBlock;
		exports.CodeToken = CodeToken;
		exports.default = Syntax;

	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.addControls = exports.default = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(2);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(18);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(37);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(39);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:toolbar');

		var Toolbar = function (_Module) {
		  _inherits(Toolbar, _Module);

		  function Toolbar(quill, options) {
		    _classCallCheck(this, Toolbar);

		    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

		    if (Array.isArray(_this.options.container)) {
		      var container = document.createElement('div');
		      addControls(container, _this.options.container);
		      quill.container.parentNode.insertBefore(container, quill.container);
		      _this.container = container;
		    } else if (typeof _this.options.container === 'string') {
		      _this.container = document.querySelector(_this.options.container);
		    } else {
		      _this.container = _this.options.container;
		    }
		    if (!(_this.container instanceof HTMLElement)) {
		      var _ret;

		      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
		    }
		    _this.container.classList.add('ql-toolbar');
		    _this.controls = [];
		    _this.handlers = {};
		    Object.keys(_this.options.handlers).forEach(function (format) {
		      _this.addHandler(format, _this.options.handlers[format]);
		    });
		    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
		      _this.attach(input);
		    });
		    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
		      if (type === _quill2.default.events.SELECTION_CHANGE) {
		        _this.update(range);
		      }
		    });
		    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
		      var _this$quill$selection = _this.quill.selection.getRange(),
		          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
		          range = _this$quill$selection2[0]; // quill.getSelection triggers update


		      _this.update(range);
		    });
		    return _this;
		  }

		  _createClass(Toolbar, [{
		    key: 'addHandler',
		    value: function addHandler(format, handler) {
		      this.handlers[format] = handler;
		    }
		  }, {
		    key: 'attach',
		    value: function attach(input) {
		      var _this2 = this;

		      var format = [].find.call(input.classList, function (className) {
		        return className.indexOf('ql-') === 0;
		      });
		      if (!format) return;
		      format = format.slice('ql-'.length);
		      if (input.tagName === 'BUTTON') {
		        input.setAttribute('type', 'button');
		      }
		      if (this.handlers[format] == null) {
		        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
		          debug.warn('ignoring attaching to disabled format', format, input);
		          return;
		        }
		        if (_parchment2.default.query(format) == null) {
		          debug.warn('ignoring attaching to nonexistent format', format, input);
		          return;
		        }
		      }
		      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
		      input.addEventListener(eventName, function (e) {
		        var value = void 0;
		        if (input.tagName === 'SELECT') {
		          if (input.selectedIndex < 0) return;
		          var selected = input.options[input.selectedIndex];
		          if (selected.hasAttribute('selected')) {
		            value = false;
		          } else {
		            value = selected.value || false;
		          }
		        } else {
		          if (input.classList.contains('ql-active')) {
		            value = false;
		          } else {
		            value = input.value || !input.hasAttribute('value');
		          }
		          e.preventDefault();
		        }
		        _this2.quill.focus();

		        var _quill$selection$getR = _this2.quill.selection.getRange(),
		            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
		            range = _quill$selection$getR2[0];

		        if (_this2.handlers[format] != null) {
		          _this2.handlers[format].call(_this2, value);
		        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
		          value = prompt('Enter ' + format);
		          if (!value) return;
		          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
		        } else {
		          _this2.quill.format(format, value, _quill2.default.sources.USER);
		        }
		        _this2.update(range);
		      });
		      // TODO use weakmap
		      this.controls.push([format, input]);
		    }
		  }, {
		    key: 'update',
		    value: function update(range) {
		      var formats = range == null ? {} : this.quill.getFormat(range);
		      this.controls.forEach(function (pair) {
		        var _pair = _slicedToArray(pair, 2),
		            format = _pair[0],
		            input = _pair[1];

		        if (input.tagName === 'SELECT') {
		          var option = void 0;
		          if (range == null) {
		            option = null;
		          } else if (formats[format] == null) {
		            option = input.querySelector('option[selected]');
		          } else if (!Array.isArray(formats[format])) {
		            var value = formats[format];
		            if (typeof value === 'string') {
		              value = value.replace(/\"/g, '\\"');
		            }
		            option = input.querySelector('option[value="' + value + '"]');
		          }
		          if (option == null) {
		            input.value = ''; // TODO make configurable?
		            input.selectedIndex = -1;
		          } else {
		            option.selected = true;
		          }
		        } else {
		          if (range == null) {
		            input.classList.remove('ql-active');
		          } else if (input.hasAttribute('value')) {
		            // both being null should match (default values)
		            // '1' should match with 1 (headers)
		            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
		            input.classList.toggle('ql-active', isActive);
		          } else {
		            input.classList.toggle('ql-active', formats[format] != null);
		          }
		        }
		      });
		    }
		  }]);

		  return Toolbar;
		}(_module2.default);

		Toolbar.DEFAULTS = {};

		function addButton(container, format, value) {
		  var input = document.createElement('button');
		  input.setAttribute('type', 'button');
		  input.classList.add('ql-' + format);
		  if (value != null) {
		    input.value = value;
		  }
		  container.appendChild(input);
		}

		function addControls(container, groups) {
		  if (!Array.isArray(groups[0])) {
		    groups = [groups];
		  }
		  groups.forEach(function (controls) {
		    var group = document.createElement('span');
		    group.classList.add('ql-formats');
		    controls.forEach(function (control) {
		      if (typeof control === 'string') {
		        addButton(group, control);
		      } else {
		        var format = Object.keys(control)[0];
		        var value = control[format];
		        if (Array.isArray(value)) {
		          addSelect(group, format, value);
		        } else {
		          addButton(group, format, value);
		        }
		      }
		    });
		    container.appendChild(group);
		  });
		}

		function addSelect(container, format, values) {
		  var input = document.createElement('select');
		  input.classList.add('ql-' + format);
		  values.forEach(function (value) {
		    var option = document.createElement('option');
		    if (value !== false) {
		      option.setAttribute('value', value);
		    } else {
		      option.setAttribute('selected', 'selected');
		    }
		    input.appendChild(option);
		  });
		  container.appendChild(input);
		}

		Toolbar.DEFAULTS = {
		  container: null,
		  handlers: {
		    clean: function clean() {
		      var _this3 = this;

		      var range = this.quill.getSelection();
		      if (range == null) return;
		      if (range.length == 0) {
		        var formats = this.quill.getFormat();
		        Object.keys(formats).forEach(function (name) {
		          // Clean functionality in existing apps only clean inline formats
		          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
		            _this3.quill.format(name, false);
		          }
		        });
		      } else {
		        this.quill.removeFormat(range, _quill2.default.sources.USER);
		      }
		    },
		    direction: function direction(value) {
		      var align = this.quill.getFormat()['align'];
		      if (value === 'rtl' && align == null) {
		        this.quill.format('align', 'right', _quill2.default.sources.USER);
		      } else if (!value && align === 'right') {
		        this.quill.format('align', false, _quill2.default.sources.USER);
		      }
		      this.quill.format('direction', value, _quill2.default.sources.USER);
		    },
		    link: function link(value) {
		      if (value === true) {
		        value = prompt('Enter link URL:');
		      }
		      this.quill.format('link', value, _quill2.default.sources.USER);
		    },
		    indent: function indent(value) {
		      var range = this.quill.getSelection();
		      var formats = this.quill.getFormat(range);
		      var indent = parseInt(formats.indent || 0);
		      if (value === '+1' || value === '-1') {
		        var modifier = value === '+1' ? 1 : -1;
		        if (formats.direction === 'rtl') modifier *= -1;
		        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
		      }
		    }
		  }
		};

		exports.default = Toolbar;
		exports.addControls = addControls;

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		module.exports = {
		  'align': {
		    '': __webpack_require__(70),
		    'center': __webpack_require__(71),
		    'right': __webpack_require__(72),
		    'justify': __webpack_require__(73)
		  },
		  'background': __webpack_require__(74),
		  'blockquote': __webpack_require__(75),
		  'bold': __webpack_require__(76),
		  'clean': __webpack_require__(77),
		  'code': __webpack_require__(78),
		  'code-block': __webpack_require__(78),
		  'color': __webpack_require__(79),
		  'direction': {
		    '': __webpack_require__(80),
		    'rtl': __webpack_require__(81)
		  },
		  'float': {
		    'center': __webpack_require__(82),
		    'full': __webpack_require__(83),
		    'left': __webpack_require__(84),
		    'right': __webpack_require__(85)
		  },
		  'formula': __webpack_require__(86),
		  'header': {
		    '1': __webpack_require__(87),
		    '2': __webpack_require__(88)
		  },
		  'italic': __webpack_require__(89),
		  'image': __webpack_require__(90),
		  'indent': {
		    '+1': __webpack_require__(91),
		    '-1': __webpack_require__(92)
		  },
		  'link': __webpack_require__(93),
		  'list': {
		    'ordered': __webpack_require__(94),
		    'bullet': __webpack_require__(95),
		    'unchecked': __webpack_require__(96)
		  },
		  'script': {
		    'sub': __webpack_require__(97),
		    'super': __webpack_require__(98)
		  },
		  'strike': __webpack_require__(99),
		  'underline': __webpack_require__(100),
		  'video': __webpack_require__(101)
		};

	/***/ },
	/* 70 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

	/***/ },
	/* 71 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

	/***/ },
	/* 72 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

	/***/ },
	/* 73 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

	/***/ },
	/* 74 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

	/***/ },
	/* 75 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

	/***/ },
	/* 76 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

	/***/ },
	/* 77 */
	/***/ function(module, exports) {

		module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

	/***/ },
	/* 79 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

	/***/ },
	/* 80 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

	/***/ },
	/* 81 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

	/***/ },
	/* 82 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

	/***/ },
	/* 83 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

	/***/ },
	/* 84 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

	/***/ },
	/* 85 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

	/***/ },
	/* 86 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

	/***/ },
	/* 87 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class=\"ql-stroke ql-thin\" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>";

	/***/ },
	/* 88 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class=\"ql-stroke ql-thin\" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>";

	/***/ },
	/* 89 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

	/***/ },
	/* 90 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

	/***/ },
	/* 91 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

	/***/ },
	/* 92 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

	/***/ },
	/* 93 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

	/***/ },
	/* 94 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

	/***/ },
	/* 95 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

	/***/ },
	/* 96 */
	/***/ function(module, exports) {

		module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

	/***/ },
	/* 97 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

	/***/ },
	/* 98 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

	/***/ },
	/* 99 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

	/***/ },
	/* 100 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

	/***/ },
	/* 101 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _dropdown = __webpack_require__(103);

		var _dropdown2 = _interopRequireDefault(_dropdown);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Picker = function () {
		  function Picker(select) {
		    var _this = this;

		    _classCallCheck(this, Picker);

		    this.select = select;
		    this.container = document.createElement('span');
		    this.buildPicker();
		    this.select.style.display = 'none';
		    this.select.parentNode.insertBefore(this.container, this.select);
		    this.label.addEventListener('mousedown', function () {
		      _this.container.classList.toggle('ql-expanded');
		    });
		    this.select.addEventListener('change', this.update.bind(this));
		  }

		  _createClass(Picker, [{
		    key: 'buildItem',
		    value: function buildItem(option) {
		      var _this2 = this;

		      var item = document.createElement('span');
		      item.classList.add('ql-picker-item');
		      if (option.hasAttribute('value')) {
		        item.setAttribute('data-value', option.getAttribute('value'));
		      }
		      if (option.textContent) {
		        item.setAttribute('data-label', option.textContent);
		      }
		      item.addEventListener('click', function () {
		        _this2.selectItem(item, true);
		      });
		      return item;
		    }
		  }, {
		    key: 'buildLabel',
		    value: function buildLabel() {
		      var label = document.createElement('span');
		      label.classList.add('ql-picker-label');
		      label.innerHTML = _dropdown2.default;
		      this.container.appendChild(label);
		      return label;
		    }
		  }, {
		    key: 'buildOptions',
		    value: function buildOptions() {
		      var _this3 = this;

		      var options = document.createElement('span');
		      options.classList.add('ql-picker-options');
		      [].slice.call(this.select.options).forEach(function (option) {
		        var item = _this3.buildItem(option);
		        options.appendChild(item);
		        if (option.hasAttribute('selected')) {
		          _this3.selectItem(item);
		        }
		      });
		      this.container.appendChild(options);
		    }
		  }, {
		    key: 'buildPicker',
		    value: function buildPicker() {
		      var _this4 = this;

		      [].slice.call(this.select.attributes).forEach(function (item) {
		        _this4.container.setAttribute(item.name, item.value);
		      });
		      this.container.classList.add('ql-picker');
		      this.label = this.buildLabel();
		      this.buildOptions();
		    }
		  }, {
		    key: 'close',
		    value: function close() {
		      this.container.classList.remove('ql-expanded');
		    }
		  }, {
		    key: 'selectItem',
		    value: function selectItem(item) {
		      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      var selected = this.container.querySelector('.ql-selected');
		      if (item === selected) return;
		      if (selected != null) {
		        selected.classList.remove('ql-selected');
		      }
		      if (item == null) return;
		      item.classList.add('ql-selected');
		      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
		      if (item.hasAttribute('data-value')) {
		        this.label.setAttribute('data-value', item.getAttribute('data-value'));
		      } else {
		        this.label.removeAttribute('data-value');
		      }
		      if (item.hasAttribute('data-label')) {
		        this.label.setAttribute('data-label', item.getAttribute('data-label'));
		      } else {
		        this.label.removeAttribute('data-label');
		      }
		      if (trigger) {
		        if (typeof Event === 'function') {
		          this.select.dispatchEvent(new Event('change'));
		        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
		          // IE11
		          var event = document.createEvent('Event');
		          event.initEvent('change', true, true);
		          this.select.dispatchEvent(event);
		        }
		        this.close();
		      }
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var option = void 0;
		      if (this.select.selectedIndex > -1) {
		        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
		        option = this.select.options[this.select.selectedIndex];
		        this.selectItem(item);
		      } else {
		        this.selectItem(null);
		      }
		      var isActive = option != null && option !== this.select.querySelector('option[selected]');
		      this.label.classList.toggle('ql-active', isActive);
		    }
		  }]);

		  return Picker;
		}();

		exports.default = Picker;

	/***/ },
	/* 103 */
	/***/ function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _picker = __webpack_require__(102);

		var _picker2 = _interopRequireDefault(_picker);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ColorPicker = function (_Picker) {
		  _inherits(ColorPicker, _Picker);

		  function ColorPicker(select, label) {
		    _classCallCheck(this, ColorPicker);

		    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

		    _this.label.innerHTML = label;
		    _this.container.classList.add('ql-color-picker');
		    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
		      item.classList.add('ql-primary');
		    });
		    return _this;
		  }

		  _createClass(ColorPicker, [{
		    key: 'buildItem',
		    value: function buildItem(option) {
		      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
		      item.style.backgroundColor = option.getAttribute('value') || '';
		      return item;
		    }
		  }, {
		    key: 'selectItem',
		    value: function selectItem(item, trigger) {
		      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
		      var colorLabel = this.label.querySelector('.ql-color-label');
		      var value = item ? item.getAttribute('data-value') || '' : '';
		      if (colorLabel) {
		        if (colorLabel.tagName === 'line') {
		          colorLabel.style.stroke = value;
		        } else {
		          colorLabel.style.fill = value;
		        }
		      }
		    }
		  }]);

		  return ColorPicker;
		}(_picker2.default);

		exports.default = ColorPicker;

	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _picker = __webpack_require__(102);

		var _picker2 = _interopRequireDefault(_picker);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var IconPicker = function (_Picker) {
		  _inherits(IconPicker, _Picker);

		  function IconPicker(select, icons) {
		    _classCallCheck(this, IconPicker);

		    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

		    _this.container.classList.add('ql-icon-picker');
		    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
		      item.innerHTML = icons[item.getAttribute('data-value') || ''];
		    });
		    _this.defaultItem = _this.container.querySelector('.ql-selected');
		    _this.selectItem(_this.defaultItem);
		    return _this;
		  }

		  _createClass(IconPicker, [{
		    key: 'selectItem',
		    value: function selectItem(item, trigger) {
		      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
		      item = item || this.defaultItem;
		      this.label.innerHTML = item.innerHTML;
		    }
		  }]);

		  return IconPicker;
		}(_picker2.default);

		exports.default = IconPicker;

	/***/ },
	/* 106 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Tooltip = function () {
		  function Tooltip(quill, boundsContainer) {
		    var _this = this;

		    _classCallCheck(this, Tooltip);

		    this.quill = quill;
		    this.boundsContainer = boundsContainer || document.body;
		    this.root = quill.addContainer('ql-tooltip');
		    this.root.innerHTML = this.constructor.TEMPLATE;
		    this.quill.root.addEventListener('scroll', function () {
		      _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
		    });
		    this.hide();
		  }

		  _createClass(Tooltip, [{
		    key: 'hide',
		    value: function hide() {
		      this.root.classList.add('ql-hidden');
		    }
		  }, {
		    key: 'position',
		    value: function position(reference) {
		      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
		      var top = reference.bottom + this.quill.root.scrollTop;
		      this.root.style.left = left + 'px';
		      this.root.style.top = top + 'px';
		      this.root.classList.remove('ql-flip');
		      var containerBounds = this.boundsContainer.getBoundingClientRect();
		      var rootBounds = this.root.getBoundingClientRect();
		      var shift = 0;
		      if (rootBounds.right > containerBounds.right) {
		        shift = containerBounds.right - rootBounds.right;
		        this.root.style.left = left + shift + 'px';
		      }
		      if (rootBounds.left < containerBounds.left) {
		        shift = containerBounds.left - rootBounds.left;
		        this.root.style.left = left + shift + 'px';
		      }
		      if (rootBounds.bottom > containerBounds.bottom) {
		        var height = rootBounds.bottom - rootBounds.top;
		        var verticalShift = containerBounds.bottom - rootBounds.bottom - height;
		        this.root.style.top = top + verticalShift + 'px';
		        this.root.classList.add('ql-flip');
		      }
		      return shift;
		    }
		  }, {
		    key: 'show',
		    value: function show() {
		      this.root.classList.remove('ql-editing');
		      this.root.classList.remove('ql-hidden');
		    }
		  }]);

		  return Tooltip;
		}();

		exports.default = Tooltip;

	/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BubbleTooltip = undefined;

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _emitter = __webpack_require__(35);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _base = __webpack_require__(108);

		var _base2 = _interopRequireDefault(_base);

		var _selection = __webpack_require__(40);

		var _icons = __webpack_require__(69);

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

		var BubbleTheme = function (_BaseTheme) {
		  _inherits(BubbleTheme, _BaseTheme);

		  function BubbleTheme(quill, options) {
		    _classCallCheck(this, BubbleTheme);

		    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
		      options.modules.toolbar.container = TOOLBAR_CONFIG;
		    }

		    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

		    _this.quill.container.classList.add('ql-bubble');
		    return _this;
		  }

		  _createClass(BubbleTheme, [{
		    key: 'extendToolbar',
		    value: function extendToolbar(toolbar) {
		      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
		      this.tooltip.root.appendChild(toolbar.container);
		      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
		      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
		    }
		  }]);

		  return BubbleTheme;
		}(_base2.default);

		BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        link: function link(value) {
		          if (!value) {
		            this.quill.format('link', false);
		          } else {
		            this.quill.theme.tooltip.edit();
		          }
		        }
		      }
		    }
		  }
		});

		var BubbleTooltip = function (_BaseTooltip) {
		  _inherits(BubbleTooltip, _BaseTooltip);

		  function BubbleTooltip(quill, bounds) {
		    _classCallCheck(this, BubbleTooltip);

		    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

		    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
		      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
		      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
		        _this2.show();
		        // Lock our width so we will expand beyond our offsetParent boundaries
		        _this2.root.style.left = '0px';
		        _this2.root.style.width = '';
		        _this2.root.style.width = _this2.root.offsetWidth + 'px';
		        var lines = _this2.quill.scroll.lines(range.index, range.length);
		        if (lines.length === 1) {
		          _this2.position(_this2.quill.getBounds(range));
		        } else {
		          var lastLine = lines[lines.length - 1];
		          var index = lastLine.offset(_this2.quill.scroll);
		          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
		          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
		          _this2.position(_bounds);
		        }
		      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
		        _this2.hide();
		      }
		    });
		    return _this2;
		  }

		  _createClass(BubbleTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this3 = this;

		      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
		      this.root.querySelector('.ql-close').addEventListener('click', function () {
		        _this3.root.classList.remove('ql-editing');
		      });
		      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
		        // Let selection be restored by toolbar handlers before repositioning
		        setTimeout(function () {
		          if (_this3.root.classList.contains('ql-hidden')) return;
		          var range = _this3.quill.getSelection();
		          if (range != null) {
		            _this3.position(_this3.quill.getBounds(range));
		          }
		        }, 1);
		      });
		    }
		  }, {
		    key: 'cancel',
		    value: function cancel() {
		      this.show();
		    }
		  }, {
		    key: 'position',
		    value: function position(reference) {
		      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
		      var arrow = this.root.querySelector('.ql-tooltip-arrow');
		      arrow.style.marginLeft = '';
		      if (shift === 0) return shift;
		      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
		    }
		  }]);

		  return BubbleTooltip;
		}(_base.BaseTooltip);

		BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

		exports.BubbleTooltip = BubbleTooltip;
		exports.default = BubbleTheme;

	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BaseTooltip = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _quillDelta = __webpack_require__(20);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _emitter = __webpack_require__(35);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _keyboard = __webpack_require__(52);

		var _keyboard2 = _interopRequireDefault(_keyboard);

		var _theme = __webpack_require__(41);

		var _theme2 = _interopRequireDefault(_theme);

		var _colorPicker = __webpack_require__(104);

		var _colorPicker2 = _interopRequireDefault(_colorPicker);

		var _iconPicker = __webpack_require__(105);

		var _iconPicker2 = _interopRequireDefault(_iconPicker);

		var _picker = __webpack_require__(102);

		var _picker2 = _interopRequireDefault(_picker);

		var _tooltip = __webpack_require__(106);

		var _tooltip2 = _interopRequireDefault(_tooltip);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ALIGNS = [false, 'center', 'right', 'justify'];

		var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

		var FONTS = [false, 'serif', 'monospace'];

		var HEADERS = ['1', '2', '3', false];

		var SIZES = ['small', false, 'large', 'huge'];

		var BaseTheme = function (_Theme) {
		  _inherits(BaseTheme, _Theme);

		  function BaseTheme(quill, options) {
		    _classCallCheck(this, BaseTheme);

		    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

		    var listener = function listener(e) {
		      if (!document.body.contains(quill.root)) {
		        return document.body.removeEventListener('click', listener);
		      }
		      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
		        _this.tooltip.hide();
		      }
		      if (_this.pickers != null) {
		        _this.pickers.forEach(function (picker) {
		          if (!picker.container.contains(e.target)) {
		            picker.close();
		          }
		        });
		      }
		    };
		    document.body.addEventListener('click', listener);
		    return _this;
		  }

		  _createClass(BaseTheme, [{
		    key: 'addModule',
		    value: function addModule(name) {
		      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
		      if (name === 'toolbar') {
		        this.extendToolbar(module);
		      }
		      return module;
		    }
		  }, {
		    key: 'buildButtons',
		    value: function buildButtons(buttons, icons) {
		      buttons.forEach(function (button) {
		        var className = button.getAttribute('class') || '';
		        className.split(/\s+/).forEach(function (name) {
		          if (!name.startsWith('ql-')) return;
		          name = name.slice('ql-'.length);
		          if (icons[name] == null) return;
		          if (name === 'direction') {
		            button.innerHTML = icons[name][''] + icons[name]['rtl'];
		          } else if (typeof icons[name] === 'string') {
		            button.innerHTML = icons[name];
		          } else {
		            var value = button.value || '';
		            if (value != null && icons[name][value]) {
		              button.innerHTML = icons[name][value];
		            }
		          }
		        });
		      });
		    }
		  }, {
		    key: 'buildPickers',
		    value: function buildPickers(selects, icons) {
		      var _this2 = this;

		      this.pickers = selects.map(function (select) {
		        if (select.classList.contains('ql-align')) {
		          if (select.querySelector('option') == null) {
		            fillSelect(select, ALIGNS);
		          }
		          return new _iconPicker2.default(select, icons.align);
		        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
		          var format = select.classList.contains('ql-background') ? 'background' : 'color';
		          if (select.querySelector('option') == null) {
		            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
		          }
		          return new _colorPicker2.default(select, icons[format]);
		        } else {
		          if (select.querySelector('option') == null) {
		            if (select.classList.contains('ql-font')) {
		              fillSelect(select, FONTS);
		            } else if (select.classList.contains('ql-header')) {
		              fillSelect(select, HEADERS);
		            } else if (select.classList.contains('ql-size')) {
		              fillSelect(select, SIZES);
		            }
		          }
		          return new _picker2.default(select);
		        }
		      });
		      var update = function update() {
		        _this2.pickers.forEach(function (picker) {
		          picker.update();
		        });
		      };
		      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, update).on(_emitter2.default.events.SCROLL_OPTIMIZE, update);
		    }
		  }]);

		  return BaseTheme;
		}(_theme2.default);

		BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        formula: function formula() {
		          this.quill.theme.tooltip.edit('formula');
		        },
		        image: function image() {
		          var _this3 = this;

		          var fileInput = this.container.querySelector('input.ql-image[type=file]');
		          if (fileInput == null) {
		            fileInput = document.createElement('input');
		            fileInput.setAttribute('type', 'file');
		            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon, image/svg+xml');
		            fileInput.classList.add('ql-image');
		            fileInput.addEventListener('change', function () {
		              if (fileInput.files != null && fileInput.files[0] != null) {
		                var reader = new FileReader();
		                reader.onload = function (e) {
		                  var range = _this3.quill.getSelection(true);
		                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
		                  fileInput.value = "";
		                };
		                reader.readAsDataURL(fileInput.files[0]);
		              }
		            });
		            this.container.appendChild(fileInput);
		          }
		          fileInput.click();
		        },
		        video: function video() {
		          this.quill.theme.tooltip.edit('video');
		        }
		      }
		    }
		  }
		});

		var BaseTooltip = function (_Tooltip) {
		  _inherits(BaseTooltip, _Tooltip);

		  function BaseTooltip(quill, boundsContainer) {
		    _classCallCheck(this, BaseTooltip);

		    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

		    _this4.textbox = _this4.root.querySelector('input[type="text"]');
		    _this4.listen();
		    return _this4;
		  }

		  _createClass(BaseTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this5 = this;

		      this.textbox.addEventListener('keydown', function (event) {
		        if (_keyboard2.default.match(event, 'enter')) {
		          _this5.save();
		          event.preventDefault();
		        } else if (_keyboard2.default.match(event, 'escape')) {
		          _this5.cancel();
		          event.preventDefault();
		        }
		      });
		    }
		  }, {
		    key: 'cancel',
		    value: function cancel() {
		      this.hide();
		    }
		  }, {
		    key: 'edit',
		    value: function edit() {
		      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
		      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		      this.root.classList.remove('ql-hidden');
		      this.root.classList.add('ql-editing');
		      if (preview != null) {
		        this.textbox.value = preview;
		      } else if (mode !== this.root.getAttribute('data-mode')) {
		        this.textbox.value = '';
		      }
		      this.position(this.quill.getBounds(this.quill.selection.savedRange));
		      this.textbox.select();
		      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
		      this.root.setAttribute('data-mode', mode);
		    }
		  }, {
		    key: 'restoreFocus',
		    value: function restoreFocus() {
		      var scrollTop = this.quill.root.scrollTop;
		      this.quill.focus();
		      this.quill.root.scrollTop = scrollTop;
		    }
		  }, {
		    key: 'save',
		    value: function save() {
		      var value = this.textbox.value;
		      switch (this.root.getAttribute('data-mode')) {
		        case 'link':
		          {
		            var scrollTop = this.quill.root.scrollTop;
		            if (this.linkRange) {
		              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
		              delete this.linkRange;
		            } else {
		              this.restoreFocus();
		              this.quill.format('link', value, _emitter2.default.sources.USER);
		            }
		            this.quill.root.scrollTop = scrollTop;
		            break;
		          }
		        case 'video':
		          {
		            var match = value.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || value.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
		            if (match) {
		              value = match[1] + '://www.youtube.com/embed/' + match[3] + '?showinfo=0';
		            } else if (match = value.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/)) {
		              // eslint-disable-line no-cond-assign
		              value = match[1] + '://player.vimeo.com/video/' + match[3] + '/';
		            }
		          } // eslint-disable-next-line no-fallthrough
		        case 'formula':
		          {
		            var range = this.quill.getSelection(true);
		            var index = range.index + range.length;
		            if (range != null) {
		              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
		              if (this.root.getAttribute('data-mode') === 'formula') {
		                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
		              }
		              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
		            }
		            break;
		          }
		        default:
		      }
		      this.textbox.value = '';
		      this.hide();
		    }
		  }]);

		  return BaseTooltip;
		}(_tooltip2.default);

		function fillSelect(select, values) {
		  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		  values.forEach(function (value) {
		    var option = document.createElement('option');
		    if (value === defaultValue) {
		      option.setAttribute('selected', 'selected');
		    } else {
		      option.setAttribute('value', value);
		    }
		    select.appendChild(option);
		  });
		}

		exports.BaseTooltip = BaseTooltip;
		exports.default = BaseTheme;

	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _extend = __webpack_require__(25);

		var _extend2 = _interopRequireDefault(_extend);

		var _emitter = __webpack_require__(35);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _base = __webpack_require__(108);

		var _base2 = _interopRequireDefault(_base);

		var _link = __webpack_require__(60);

		var _link2 = _interopRequireDefault(_link);

		var _selection = __webpack_require__(40);

		var _icons = __webpack_require__(69);

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

		var SnowTheme = function (_BaseTheme) {
		  _inherits(SnowTheme, _BaseTheme);

		  function SnowTheme(quill, options) {
		    _classCallCheck(this, SnowTheme);

		    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
		      options.modules.toolbar.container = TOOLBAR_CONFIG;
		    }

		    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

		    _this.quill.container.classList.add('ql-snow');
		    return _this;
		  }

		  _createClass(SnowTheme, [{
		    key: 'extendToolbar',
		    value: function extendToolbar(toolbar) {
		      toolbar.container.classList.add('ql-snow');
		      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
		      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
		      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
		      if (toolbar.container.querySelector('.ql-link')) {
		        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
		          toolbar.handlers['link'].call(toolbar, !context.format.link);
		        });
		      }
		    }
		  }]);

		  return SnowTheme;
		}(_base2.default);

		SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        link: function link(value) {
		          if (value) {
		            var range = this.quill.getSelection();
		            if (range == null || range.length == 0) return;
		            var preview = this.quill.getText(range);
		            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
		              preview = 'mailto:' + preview;
		            }
		            var tooltip = this.quill.theme.tooltip;
		            tooltip.edit('link', preview);
		          } else {
		            this.quill.format('link', false);
		          }
		        }
		      }
		    }
		  }
		});

		var SnowTooltip = function (_BaseTooltip) {
		  _inherits(SnowTooltip, _BaseTooltip);

		  function SnowTooltip(quill, bounds) {
		    _classCallCheck(this, SnowTooltip);

		    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

		    _this2.preview = _this2.root.querySelector('a.ql-preview');
		    return _this2;
		  }

		  _createClass(SnowTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this3 = this;

		      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
		      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
		        if (_this3.root.classList.contains('ql-editing')) {
		          _this3.save();
		        } else {
		          _this3.edit('link', _this3.preview.textContent);
		        }
		        event.preventDefault();
		      });
		      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
		        if (_this3.linkRange != null) {
		          _this3.restoreFocus();
		          _this3.quill.formatText(_this3.linkRange, 'link', false, _emitter2.default.sources.USER);
		          delete _this3.linkRange;
		        }
		        event.preventDefault();
		        _this3.hide();
		      });
		      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
		        if (range == null) return;
		        if (range.length === 0 && source === _emitter2.default.sources.USER) {
		          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
		              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
		              link = _quill$scroll$descend2[0],
		              offset = _quill$scroll$descend2[1];

		          if (link != null) {
		            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
		            var preview = _link2.default.formats(link.domNode);
		            _this3.preview.textContent = preview;
		            _this3.preview.setAttribute('href', preview);
		            _this3.show();
		            _this3.position(_this3.quill.getBounds(_this3.linkRange));
		            return;
		          }
		        } else {
		          delete _this3.linkRange;
		        }
		        _this3.hide();
		      });
		    }
		  }, {
		    key: 'show',
		    value: function show() {
		      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
		      this.root.removeAttribute('data-mode');
		    }
		  }]);

		  return SnowTooltip;
		}(_base.BaseTooltip);

		SnowTooltip.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

		exports.default = SnowTheme;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(12);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"article-meta-data\">");t.b("\n" + i);t.b("    <form class=\"form\">");t.b("\n" + i);t.b("        <div class=\"form-item\">");t.b("\n" + i);t.b("            <label for=\"article-title\">Title</label>");t.b("\n" + i);t.b("            <input type=\"text\" id=\"article-title\" value=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"form-item\">");t.b("\n" + i);t.b("            <label for=\"article-date\">Date</label>");t.b("\n" + i);t.b("            <input type=\"date\" id=\"article-date\" value=\"");t.b(t.v(t.f("date",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </div>        ");t.b("\n" + i);t.b("    </form>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"editor-container\">");t.b("\n" + i);t.b("    <div id=\"toolbar\">");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div id=\"editor\">");t.b("\n" + i);t.b("        ");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"editor-actions\">");t.b("\n" + i);t.b("    <form action=\"\" class=\"form\">");t.b("\n" + i);t.b("        <div class=\"form-item\">");t.b("\n" + i);t.b("            <input type=\"checkbox\" id=\"published\" value=\"\">");t.b("\n" + i);t.b("            <label for=\"published\">Published</label>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <br>");t.b("\n" + i);t.b("        <button type=\"button\" id=\"save\">Save</button>");t.b("\n" + i);t.b("        <button type=\"button\" id=\"back\">Back</button>");t.b("\n" + i);t.b("    </form>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"article-meta-data\">\n    <form class=\"form\">\n        <div class=\"form-item\">\n            <label for=\"article-title\">Title</label>\n            <input type=\"text\" id=\"article-title\" value=\"{{title}}\">\n        </div>\n        <div class=\"form-item\">\n            <label for=\"article-date\">Date</label>\n            <input type=\"date\" id=\"article-date\" value=\"{{date}}\">\n        </div>        \n    </form>\n</div>\n<div class=\"editor-container\">\n    <div id=\"toolbar\">\n\n    </div>\n    <div id=\"editor\">\n        \n    </div>\n</div>\n<div class=\"editor-actions\">\n    <form action=\"\" class=\"form\">\n        <div class=\"form-item\">\n            <input type=\"checkbox\" id=\"published\" value=\"\">\n            <label for=\"published\">Published</label>\n        </div>\n        <br>\n        <button type=\"button\" id=\"save\">Save</button>\n        <button type=\"button\" id=\"back\">Back</button>\n    </form>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function () {
	  var t = function t(_t, e) {
	    this.$element = $(_t), this.opts = $.extend(!0, {}, this.opts, this.$element.data(), e), this.opts.hasOwnProperty("animation") && this.opts.animation === !1 && (this.opts.animation = {}, this.opts.animation.open = "show", this.opts.animation.close = "hide");
	  };t.prototype = { callback: function callback(t) {
	      var e,
	          s = [].slice.call(arguments).splice(1),
	          i = this.pluginName;if ("undefined" != typeof this.$element && (e = this.fireCallback($._data(this.$element[0], "events"), t, i, s), "undefined" != typeof e)) return e;if ("undefined" != typeof this.$target && null !== typeof this.$target) {
	        var n;if (1 !== this.$target.length) return e = [], this.$target.each($.proxy(function (o, a) {
	          n = $._data(a, "events"), e.push(this.fireCallback(n, t, i, s));
	        }, this)), e;if (n = $._data(this.$target[0], "events"), e = this.fireCallback(n, t, i, s), "undefined" != typeof e) return e;
	      }if ("undefined" == typeof this.opts || "undefined" == typeof this.opts.callbacks || "undefined" == typeof this.opts.callbacks[t]) return s;var o = this.opts.callbacks[t];return $.isFunction(o) ? o.apply(this, s) : s;
	    }, fireCallback: function fireCallback(t, e, s, i) {
	      if ("undefined" != typeof t && "undefined" != typeof t[e]) for (var n = t[e].length, o = 0; n > o; o++) {
	        var a = t[e][o].namespace;if (a === "callback." + s || a === s + ".callback") return t[e][o].handler.apply(this, i);
	      }
	    }, disableBodyScroll: function disableBodyScroll() {
	      var t = $("html"),
	          e = window.innerWidth;if (!e) {
	        var s = document.documentElement.getBoundingClientRect();e = s.right - Math.abs(s.left);
	      }var i = document.body.clientWidth < e,
	          n = this.measureScrollbar();t.css("overflow", "hidden"), i && t.css("padding-right", n);
	    }, measureScrollbar: function measureScrollbar() {
	      var t = $("body"),
	          e = document.createElement("div");e.className = "scrollbar-measure", t.append(e);var s = e.offsetWidth - e.clientWidth;return t[0].removeChild(e), s;
	    }, enableBodyScroll: function enableBodyScroll() {
	      $("html").css({ overflow: "", "padding-right": "" });
	    }, appendFields: function appendFields(t) {
	      if (this.opts.appendFields === !1) return t;var e = $(this.opts.appendFields);if (0 === e.length) return t;var s = "";return e.each(function () {
	        s += "&" + $(this).attr("name") + "=" + $(this).val();
	      }), "" === t ? s.replace(/^&/, "") : t + s;
	    }, appendFieldsAsData: function appendFieldsAsData(t) {
	      if (this.opts.appendFields === !1) return t;var e = $(this.opts.appendFields);return 0 === e.length ? t : (e.each(function () {
	        t.append($(this).attr("name"), $(this).val());
	      }), t);
	    }, appendForms: function appendForms(t) {
	      if (this.opts.appendForms === !1) return t;var e = $(this.opts.appendForms);if (0 === e.length) return t;var s = e.serialize();return "" === t ? s : t + "&" + s;
	    }, appendFormsAsData: function appendFormsAsData(t) {
	      if (this.opts.appendForms === !1) return t;var e = $(this.opts.appendForms).serializeArray();return $.each(e, function (e, s) {
	        t.append(s.name, s.value);
	      }), t;
	    }, isMobileScreen: function isMobileScreen() {
	      return $(window).width() <= 768;
	    }, isTabletScreen: function isTabletScreen() {
	      return $(window).width() >= 768 && $(window).width() <= 1024;
	    }, isDesktopScreen: function isDesktopScreen() {
	      return $(window).width() > 1024;
	    }, isLargeScreen: function isLargeScreen() {
	      return $(window).width() > 1200;
	    }, isMobile: function isMobile() {
	      return (/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent)
	      );
	    }, isDesktop: function isDesktop() {
	      return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent);
	    } };var e = { pluginsByClass: {}, classByPlugin: {}, directLoad: { message: "open" }, plugin: function plugin(s, i) {
	      function n() {
	        i.hasOwnProperty("init") && i.init.apply(this, arguments);
	      }i.pluginName = s, n.prototype = Object.create(t.prototype), n.prototype.constructor = n;for (var o in i) {
	        n.prototype[o] = i[o];
	      }var a = i.hasOwnProperty("classname") ? i.classname : !1;return a && (e.classByPlugin[s] = a, e.pluginsByClass[a] = s), $.fn[s] = e.createPlugin(s, n, a), n;
	    }, createPlugin: function createPlugin(t, s, i) {
	      var n = function n(i) {
	        var n = [],
	            o = Array.prototype.slice.call(arguments, 1);return "string" == typeof i ? this.eq(0).each(function () {
	          var s = $.data(this, t);if ("undefined" != typeof s && $.isFunction(s[i])) {
	            var a = s[i].apply(s, o);void 0 !== a && a !== s && n.push(a);
	          } else {
	            var h = !1;for (var l in e.directLoad) {
	              t === l && i === e.directLoad[l] && (h = !0, e.directPluginLoad(this, t));
	            }if (!h) return $.error('No such method "' + i + '" for ' + t);
	          }
	        }) : this.each(function () {
	          var e = $(this);if (e.attr("data-component-" + t + "-loaded") !== !0) {
	            e.attr("data-component-" + t + "-loaded", !0);var n = new s(this, i);$.data(this, t, {}), $.data(this, t, n), "undefined" != typeof n.$target && null !== typeof n.$target && n.$target.data(t, n);
	          }
	        }), 0 === n.length || 1 === n.length ? 0 === n.length ? this : n[0] : n;
	      };return $(window).on("load.components." + t, function () {
	        i && $("." + i)[t](), $('[data-component="' + t + '"]')[t]();
	      }), n;
	    }, directPluginLoad: function directPluginLoad(t, e) {
	      var s = document.createElement("span");$(s)[e]({ target: t, show: !0 });
	    } };window.Kube = t, window.SuperKube = e;
	}(), function (t) {
	  t.observer = { watch: function watch() {
	      t(window).on("load", function () {
	        t.observer.liveComponentsObserver();
	      });
	    }, getComponentsClasses: function getComponentsClasses() {
	      var t = [];for (var e in SuperKube.classByPlugin) {
	        t.push(SuperKube.classByPlugin[e]);
	      }return t;
	    }, getComponentsClassesAsString: function getComponentsClassesAsString() {
	      var e = t.observer.getComponentsClasses();return 0 === e.length ? "" : ",." + e.join(",.");
	    }, getComponentByClass: function getComponentByClass(t) {
	      return SuperKube.pluginsByClass[t];
	    }, once: function once(e, s) {
	      var e = "undefined" == typeof e ? t.observer.getComponentsClasses() : e,
	          s = "undefined" == typeof s ? t.observer.getComponentsClassesAsString() : s,
	          i = t("[data-component]" + s);i.each(function () {
	        var s = t(this),
	            i = !1,
	            n = e.length;if (n > 0) for (var o = 0; n > o; o++) {
	          s.hasClass(e[o]) && (i = t.observer.getComponentByClass(e[o]));
	        }var a;i && (a = i, "undefined" == typeof s.attr("data-component-" + a + "-loaded") && "undefined" != typeof s[a] && s[a]()), s.attr("data-component") && (a = s.attr("data-component"), "undefined" == typeof s.attr("data-component-" + a + "-loaded") && "undefined" != typeof s[a] && s[a]());
	      });
	    }, liveComponentsObserver: function liveComponentsObserver() {
	      if (window.MutationObserver) {
	        var e = t.observer.getComponentsClasses(),
	            s = t.observer.getComponentsClassesAsString(),
	            i = new MutationObserver(function (i) {
	          i.forEach(function (i) {
	            var n = i.addedNodes;0 === n.length || 1 === n.length && 3 === n.nodeType || t.observer.once(e, s);
	          });
	        });i.observe(document, { subtree: !0, childList: !0 });
	      }
	    } };
	}(jQuery), function (t) {
	  t.Alert = SuperKube.plugin("alert", { opts: { click: !1, animation: { open: { name: "fadeIn", timing: "linear", duration: .5 }, close: { name: "fadeOut", timing: "linear", duration: .5 } }, callbacks: ["open", "opened", "close", "closed"] }, init: function init() {
	      t.apply(this, arguments), this.$close = this.getCloseLink(), this.$close.on("click.component.alert", $.proxy(this.close, this)), this.opts.click !== !1 && this.$element.on("click.component.alert", $.proxy(this.close, this));
	    }, getCloseLink: function getCloseLink() {
	      return this.$element.find(".close");
	    }, isOpened: function isOpened() {
	      return this.$element.hasClass("open");
	    }, isClosed: function isClosed() {
	      return !this.$element.hasClass("open");
	    }, open: function open(t) {
	      t && t.preventDefault(), this.callback("open"), this.$element.animation(this.opts.animation.open, $.proxy(this.opened, this));
	    }, opened: function opened() {
	      this.$element.removeClass("hide").addClass("open"), this.callback("opened");
	    }, close: function close(t) {
	      t && t.preventDefault(), this.callback("close"), this.$element.animation(this.opts.animation.close, $.proxy(this.closed, this));
	    }, closed: function closed() {
	      this.$element.addClass("hide").removeClass("open"), this.callback("closed");
	    }, destroy: function destroy() {
	      this.$element.off(".component.alert").removeData(), this.$close.remove();
	    } });
	}(Kube), function (t) {
	  function e(e, s, i, n) {
	    var o = { name: "show", duration: .5, iterate: 1, delay: 0, prefix: "", timing: "linear" };"object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) ? (n = i, i = s) : o.name = s, "function" == typeof i ? (n = i, this.opts = o) : this.opts = t.extend(o, i), this.slide = "slideDown" === this.opts.name || "slideUp" === this.opts.name, this.$element = t(e), this.prefixes = ["", "-moz-", "-o-animation-", "-webkit-"], this.queue = [], this.slide && this.$element.height(this.$element.height()), this.init(n);
	  }t.fn.animation = function (t, s, i) {
	    return this.each(function () {
	      return new e(this, t, s, i);
	    });
	  }, e.prototype = { init: function init(t) {
	      this.queue.push(this.opts.name), this.clean(), "show" === this.opts.name ? this.$element.removeClass("hide").show() : "hide" === this.opts.name && this.$element.hide(), "show" === this.opts.name || "hide" === this.opts.name ? (this.opts.timing = "linear", "function" == typeof t && setTimeout(t, 1e3 * this.opts.duration)) : this.animate(t);
	    }, animate: function animate(e) {
	      this.$element.addClass("animated").css("display", "block").removeClass("hide"), this.$element.addClass(this.opts.prefix + this.queue[0]), this.set(this.opts.duration + "s", this.opts.delay + "s", this.opts.iterate, this.opts.timing);var s = this.queue.length > 1 ? null : e;this.complete("AnimationEnd", t.proxy(this.makeComplete, this), s);
	    }, set: function set(t, e, s, i) {
	      for (var n = this.prefixes.length; n--;) {
	        this.$element.css(this.prefixes[n] + "animation-duration", t), this.$element.css(this.prefixes[n] + "animation-delay", e), this.$element.css(this.prefixes[n] + "animation-iteration-count", s), this.$element.css(this.prefixes[n] + "animation-timing-function", i);
	      }
	    }, clean: function clean() {
	      this.$element.removeClass("animated").removeClass(this.opts.prefix + this.queue[0]), this.set("", "", "", "");
	    }, makeComplete: function makeComplete() {
	      this.$element.hasClass(this.opts.prefix + this.queue[0]) && (this.clean(), this.queue.shift(), this.queue.length && this.animate(callback));
	    }, complete: function complete(e, s, i) {
	      var n = e.toLowerCase() + " webkit" + e + " o" + e + " MS" + e;this.$element.one(n, t.proxy(function () {
	        "function" == typeof s && s();var e = ["fadeOut", "slideUp", "zoomOut", "slideOutUp", "slideOutRight", "slideOutLeft"];-1 !== t.inArray(this.opts.name, e) && this.$element.css("display", "none"), this.slide && this.$element.css("height", ""), "function" == typeof i && i(this), this.$element.off(n);
	      }, this));
	    } };
	}(jQuery), function (t) {
	  t.Сollapse = SuperKube.plugin("collapse", { classname: "collapse", opts: { target: !1, toggle: !0, active: !1, animation: { open: { name: "slideDown", timing: "linear", duration: .3 }, close: { name: "slideUp", timing: "linear", duration: .2 } }, toggleClass: "collapse-toggle", boxClass: "collapse-box", callbacks: ["open", "opened", "close", "closed"], hashes: [], currentHash: !1, currentItem: !1 }, init: function init() {
	      t.apply(this, arguments), this.$items = this.getItems(), this.$items.each($.proxy(this.loadItems, this)), this.$boxes = this.getBoxes(), this.closeAll(), this.setActiveItem();
	    }, getItems: function getItems() {
	      return this.$element.find("." + this.opts.toggleClass);
	    }, getBoxes: function getBoxes() {
	      return this.$element.find("." + this.opts.boxClass);
	    }, loadItems: function loadItems(t, e) {
	      var s = this.getItem(e);s.$el.attr("rel", s.hash), s.$el.hasClass("active") && (this.opts.currentItem = s, this.opts.active = s.hash), s.$el.on("click.component.collapse", $.proxy(this.toggle, this));
	    }, setActiveItem: function setActiveItem() {
	      this.opts.active !== !1 && (this.opts.currentItem = this.getItemBy(this.opts.active), this.opts.active = this.opts.currentItem.hash), this.opts.currentItem !== !1 && (this.addActive(this.opts.currentItem), this.opts.currentItem.$box.show());
	    }, addActive: function addActive(t) {
	      t.$box.removeClass("hide").addClass("open"), t.$el.addClass("active"), t.$caret !== !1 && t.$caret.removeClass("down").addClass("up"), t.$parent !== !1 && t.$parent.addClass("active"), this.opts.currentItem = t;
	    }, removeActive: function removeActive(t) {
	      t.$box.removeClass("open"), t.$el.removeClass("active"), t.$caret !== !1 && t.$caret.addClass("down").removeClass("up"), t.$parent !== !1 && t.$parent.removeClass("active"), this.opts.currentItem = !1;
	    }, toggle: function toggle(t) {
	      t && t.preventDefault();var e = $(t.target).closest("." + this.opts.toggleClass).get(0) || t.target,
	          s = this.getItem(e);return this.isClosed(s.hash) ? this.open(t) : this.close(s.hash);
	    }, openAll: function openAll() {
	      this.$items.addClass("active"), this.$boxes.addClass("open").show();
	    }, open: function open(t, e) {
	      if ("undefined" != typeof t) {
	        "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.preventDefault();var s = $(t.target).closest("." + this.opts.toggleClass).get(0) || t.target,
	            i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? this.getItem(s) : this.getItemBy(t);i.$box.hasClass("open") || (this.opts.toggle && this.closeAll(), this.callback("open", i), this.addActive(i), i.$box.animation(this.opts.animation.open, $.proxy(this.opened, this)));
	      }
	    }, opened: function opened() {
	      this.callback("opened", this.opts.currentItem);
	    }, closeAll: function closeAll() {
	      this.$items.removeClass("active").closest("li").removeClass("active"), this.$boxes.removeClass("open").hide();
	    }, close: function close(t) {
	      var e = this.getItemBy(t);this.callback("close", e), e.$box.animation(this.opts.animation.close, $.proxy(this.closed, this));
	    }, closed: function closed() {
	      var t = this.opts.currentItem;this.removeActive(t), this.callback("closed", t);
	    }, isOpened: function isOpened(t) {
	      return $(t).hasClass("open");
	    }, isClosed: function isClosed(t) {
	      return !$(t).hasClass("open");
	    }, getItem: function getItem(t) {
	      var e = {};e.$el = $(t), e.hash = e.$el.attr("href"), e.$box = $(e.hash);var s = e.$el.parent();e.$parent = "LI" === s[0].tagName ? s : !1;var i = e.$el.find(".caret");return e.$caret = 0 !== i.length ? i : !1, e;
	    }, getItemBy: function getItemBy(t) {
	      var e = "number" == typeof t ? this.$items.eq(t - 1) : this.$element.find('[rel="' + t + '"]');return this.getItem(e);
	    } });
	}(Kube), function (t) {
	  t.Dropdown = SuperKube.plugin("dropdown", { opts: { target: null, height: !1, width: !1, animation: { open: { name: "slideDown", duration: .15, timing: "linear" }, close: { name: "slideUp", duration: .1, timing: "linear" } }, callbacks: ["open", "opened", "close", "closed"], caretUp: !1 }, init: function init() {
	      t.apply(this, arguments), null !== this.opts.target && (this.$target = $(this.opts.target), this.$target.hide(), this.isMobile() && this.buildMobileAnimation(), this.$close = this.$target.find(".close"), this.$caret = this.getCaret(), this.buildCaretPosition(), this.$element.on("click.component.dropdown", $.proxy(this.toggle, this)));
	    }, buildMobileAnimation: function buildMobileAnimation() {
	      this.opts.animationOpen = "fadeIn", this.opts.animationClose = "fadeOut";
	    }, getCaret: function getCaret() {
	      return this.$element.find(".caret");
	    }, buildCaretPosition: function buildCaretPosition() {
	      var t = this.$element.offset().top + this.$element.innerHeight() + this.$target.innerHeight();$(document).height() > t || (this.opts.caretUp = !0, this.$caret.addClass("up"));
	    }, toggleCaretOpen: function toggleCaretOpen() {
	      this.opts.caretUp ? this.$caret.removeClass("up").addClass("down") : this.$caret.removeClass("down").addClass("up");
	    }, toggleCaretClose: function toggleCaretClose() {
	      this.opts.caretUp ? this.$caret.removeClass("down").addClass("up") : this.$caret.removeClass("up").addClass("down");
	    }, toggle: function toggle(t) {
	      return this.isClosed() ? this.open(t) : this.close(t);
	    }, getPlacement: function getPlacement(t) {
	      return $(document).height() < t ? "top" : "bottom";
	    }, getOffset: function getOffset(t) {
	      return this.isNavigationFixed() ? this.$element.position() : this.$element.offset();
	    }, getPosition: function getPosition() {
	      return this.isNavigationFixed() ? "fixed" : "absolute";
	    }, setPosition: function setPosition() {
	      if (this.isMobile()) this.$target.addClass("dropdown-mobile");else {
	        var t,
	            e = this.getPosition(),
	            s = this.getOffset(e),
	            i = this.$target.innerHeight(),
	            n = this.$target.innerWidth(),
	            o = this.getPlacement(s.top + i + this.$element.innerHeight()),
	            a = $(window).width() < s.left + n ? n - this.$element.innerWidth() : 0,
	            h = s.left - a;"bottom" === o ? (this.isClosed() && this.$caret.removeClass("up").addClass("down"), this.opts.caretUp = !1, t = s.top + this.$element.outerHeight() + 1) : (this.opts.animation.open.name = "show", this.opts.animation.close.name = "hide", this.isClosed() && this.$caret.addClass("up").removeClass("down"), this.opts.caretUp = !0, t = s.top - i - 1), this.$target.css({ position: e, top: t + "px", left: h + "px" });
	      }
	    }, enableEvents: function enableEvents() {
	      this.isDesktop() && this.$target.on("mouseover.component.dropdown", $.proxy(this.disableBodyScroll, this)).on("mouseout.component.dropdown", $.proxy(this.enableBodyScroll, this)), $(document).on("scroll.component.dropdown", $.proxy(this.setPosition, this)), $(window).on("resize.component.dropdown", $.proxy(this.setPosition, this)), $(document).on("click.component.dropdown touchstart.component.dropdown", $.proxy(this.close, this)), $(document).on("keydown.component.dropdown", $.proxy(this.handleKeyboard, this)), this.$target.find('[data-action="dropdown-close"]').on("click.component.dropdown", $.proxy(this.close, this));
	    }, disableEvents: function disableEvents() {
	      this.$target.off(".component.dropdown"), $(document).off(".component.dropdown"), $(window).off(".component.dropdown");
	    }, open: function open(t) {
	      t && t.preventDefault(), this.callback("open"), $(".dropdown").removeClass("open").hide(), this.opts.height && this.$target.css("min-height", this.opts.height + "px"), this.opts.width && this.$target.width(this.opts.width), this.setPosition(), this.toggleCaretOpen(), this.$target.animation(this.opts.animation.open, $.proxy(this.opened, this));
	    }, opened: function opened() {
	      this.enableEvents(), this.$target.addClass("open"), this.callback("opened");
	    }, handleKeyboard: function handleKeyboard(t) {
	      return 27 === t.which ? this.close(t) : !0;
	    }, shouldNotBeClosed: function shouldNotBeClosed(t) {
	      return "dropdown-close" === $(t).attr("data-action") || t === this.$close[0] ? !1 : 0 !== $(t).closest(".dropdown").length;
	    }, close: function close(t) {
	      if (!this.isClosed()) {
	        if (t) {
	          if (this.shouldNotBeClosed(t.target)) return;t.preventDefault();
	        }this.enableBodyScroll(), this.callback("close"), this.toggleCaretClose(), this.$target.removeClass("open").animation(this.opts.animation.close, $.proxy(this.closed, this));
	      }
	    }, closed: function closed() {
	      this.disableEvents(), this.callback("closed");
	    }, isOpened: function isOpened() {
	      return this.$target.hasClass("open");
	    }, isClosed: function isClosed() {
	      return !this.$target.hasClass("open");
	    }, isNavigationFixed: function isNavigationFixed() {
	      return 0 !== this.$element.closest(".fixed").length;
	    } });
	}(Kube), function (t) {
	  t.Alert = SuperKube.plugin("message", { opts: { target: null, top: "16px", right: "16px", position: "right", click: !0, show: !1, delay: 3, animation: { open: { name: "fadeIn", duration: .35, timing: "linear" }, close: { name: "fadeOut", duration: .35, timing: "linear" } }, callbacks: ["open", "opened", "close", "closed"] }, init: function init() {
	      t.apply(this, arguments), null !== this.opts.target && (this.$target = $(this.opts.target), this.$element.on("click.component.message", $.proxy(this.open, this)), this.$close = this.getCloseLink(), this.$close.on("click.component.message", $.proxy(this.close, this)), this.opts.show && this.open());
	    }, getCloseLink: function getCloseLink() {
	      return this.$target.find(".close");
	    }, setPosition: function setPosition() {
	      this.opts.top = this.isLine() ? 0 : this.opts.top, "center" === this.opts.position || this.isLine() ? (this.$target.css({ top: this.opts.top, right: "", left: "50%" }), this.$target.css({ "margin-left": "-" + this.$target.innerWidth() / 2 + "px" })) : this.$target.css({ top: this.opts.top, right: this.opts.right, left: "" });
	    }, open: function open() {
	      this.isOpened() || (this.closeAll(), this.setPosition(), this.callback("open"), this.$target.addClass("open").animation(this.opts.animation.open, $.proxy(this.opened, this)));
	    }, opened: function opened() {
	      $(document).on("keyup.component.message", $.proxy(this.handleKeyboard, this)), this.$target.addClass("open"), this.opts.click && this.$target.on("click.component.message", $.proxy(this.close, this)), this.opts.delay !== !1 && (this.timeout = setTimeout($.proxy(this.close, this), 1e3 * this.opts.delay)), this.callback("opened");
	    }, closeAll: function closeAll() {
	      $(document).off("keyup.component.message"), $(".message").not(this.$target[0]).hide().removeClass("open"), clearTimeout(this.timeout);
	    }, handleKeyboard: function handleKeyboard(t) {
	      return 27 === t.which ? this.close() : !0;
	    }, close: function close(t) {
	      this.isClosed() || (t && t.preventDefault && t.preventDefault(), this.callback("close"), this.$target.off("click.component.message").animation(this.opts.animation.close, $.proxy(this.closed, this)));
	    }, closed: function closed() {
	      this.$target.removeClass("open"), $(document).off("keyup.component.message"), clearTimeout(this.timeout), this.callback("closed");
	    }, isLine: function isLine() {
	      return this.$target.hasClass("line");
	    }, isOpened: function isOpened() {
	      return this.$target.hasClass("open");
	    }, isClosed: function isClosed() {
	      return !this.$target.hasClass("open");
	    } });
	}(Kube), function (t) {
	  t.modalcurrent = null, t.modalwindow = function (e) {
	    if ("undefined" == typeof this.element && (this.element = document.createElement("span")), "string" == typeof e) {
	      var s = Array.prototype.slice.call(arguments, 1);t(this.element).modal(e, s[0]);
	    } else e.show = !0, t(this.element).modal(e);
	  };
	}(jQuery), function (t) {
	  t.Modal = SuperKube.plugin("modal", { opts: { target: null, url: !1, header: !1, width: "600px", height: !1, maxHeight: !1, position: "center", show: !1, overlay: !0, appendForms: !1, appendFields: !1, animation: { open: { name: "show", timing: "linear", duration: .25 }, close: { name: "hide", timing: "linear", duration: .25 } }, callbacks: ["open", "opened", "close", "closed"] }, init: function init() {
	      t.apply(this, arguments), null !== this.opts.target && (this.$target = $(this.opts.target), 0 !== this.$target.length && (this.opts.show ? this.load(!1) : this.$element.on("mousedown.component.modal", $.proxy(this.load, this))));
	    }, load: function load(t) {
	      t && t.preventDefault && t.preventDefault(), this.$element.hasClass("in") || (this.buildModal(), this.buildOverlay(), this.buildHeader(), this.opts.url ? this.buildContent() : this.open());
	    }, buildModal: function buildModal() {
	      this.$modal = this.$target.find(".modal"), this.$header = this.$target.find(".modal-header"), this.$close = this.$target.find(".close"), this.$body = this.$target.find(".modal-body");
	    }, buildOverlay: function buildOverlay() {
	      this.opts.overlay !== !1 && (0 !== $("#modal-overlay").length ? this.$overlay = $("#modal-overlay") : (this.$overlay = $('<div id="modal-overlay">').hide(), $("body").prepend(this.$overlay)), this.$overlay.addClass("overlay"));
	    }, buildHeader: function buildHeader() {
	      this.opts.header && this.$header.html(this.opts.header);
	    }, buildContent: function buildContent() {
	      var t = "";t = this.appendForms(t), t = this.appendFields(t), $.ajax({ url: this.opts.url + "?" + new Date().getTime(), cache: !1, type: "post", data: t, success: $.proxy(function (t) {
	          this.$body.html(t), this.open();
	        }, this) });
	    }, buildWidth: function buildWidth() {
	      var t = this.opts.width,
	          e = "2%",
	          s = "2%",
	          i = t.match(/%$/);parseInt(this.opts.width) > $(window).width() && !i ? t = "96%" : i || (e = "16px", s = "16px"), this.$modal.css({ width: t, "margin-top": e, "margin-bottom": s });
	    }, buildPosition: function buildPosition() {
	      if ("center" === this.opts.position) {
	        var t = $(window).height(),
	            e = this.$modal.outerHeight(),
	            s = t / 2 - e / 2 + "px";this.isMobile() ? s = "2%" : e > t && (s = "16px"), this.$modal.css("margin-top", s);
	      }
	    }, buildHeight: function buildHeight() {
	      var t = $(window).height();if (this.opts.maxHeight) {
	        var e = parseInt(this.$body.css("padding-top")) + parseInt(this.$body.css("padding-bottom")),
	            s = parseInt(this.$modal.css("margin-top")) + parseInt(this.$modal.css("margin-bottom")),
	            i = t - this.$header.innerHeight() - e - s;this.$body.height(i);
	      } else this.opts.height !== !1 && this.$body.css("height", this.opts.height);var n = this.$modal.outerHeight();n > t && (this.opts.animation.open.name = "show", this.opts.animation.close.name = "hide");
	    }, resize: function resize() {
	      this.buildWidth(), this.buildPosition(), this.buildHeight();
	    }, enableEvents: function enableEvents() {
	      this.$close.on("click.component.modal", $.proxy(this.close, this)), $(document).on("keyup.component.modal", $.proxy(this.handleEscape, this)), this.$target.on("click.component.modal", $.proxy(this.close, this));
	    }, disableEvents: function disableEvents() {
	      this.$close.off(".component.modal"), $(document).off(".component.modal"), this.$target.off(".component.modal"), $(window).off(".component.modal");
	    }, findActions: function findActions() {
	      this.$body.find('[data-action="modal-close"]').on("mousedown.component.modal", $.proxy(this.close, this));
	    }, setHeader: function setHeader(t) {
	      this.$header.html(t);
	    }, setContent: function setContent(t) {
	      this.$body.html(t);
	    }, setWidth: function setWidth(t) {
	      this.opts.width = t, this.resize();
	    }, getModal: function getModal() {
	      return this.$modal;
	    }, getBody: function getBody() {
	      return this.$body;
	    }, getHeader: function getHeader() {
	      return this.$header;
	    }, open: function open() {
	      this.isOpened() || (this.isMobile() && (this.opts.width = "96%"), this.opts.overlay && this.$overlay.show(), this.$target.removeClass("hide").show(), this.enableEvents(), this.findActions(), this.resize(), $(window).on("resize.component.modal", $.proxy(this.resize, this)), this.isDesktop() && this.disableBodyScroll(), this.$modal.find("input[type=text],input[type=url],input[type=email]").on("keydown.component.modal", $.proxy(this.handleEnter, this)), this.callback("open"), this.$modal.animation(this.opts.animation.open, $.proxy(this.opened, this)));
	    }, opened: function opened() {
	      this.$modal.addClass("open"), this.callback("opened"), $.modalcurrent = this;
	    }, handleEnter: function handleEnter(t) {
	      13 === t.which && (t.preventDefault(), this.close(!1));
	    }, handleEscape: function handleEscape(t) {
	      return 27 === t.which ? this.close(!1) : !0;
	    }, close: function close(t) {
	      if (this.$modal && !this.isClosed()) {
	        if (t) {
	          if (this.shouldNotBeClosed(t.target)) return;t.preventDefault();
	        }this.callback("close"), this.disableEvents(), this.$modal.animation(this.opts.animation.close, $.proxy(this.closed, this)), this.opts.overlay && this.$overlay.animation(this.opts.animation.close);
	      }
	    }, closed: function closed() {
	      this.callback("closed"), this.$target.addClass("hide"), this.$modal.removeClass("open"), this.isDesktop() && this.enableBodyScroll(), this.$body.css("height", ""), $.modalcurrent = null;
	    }, shouldNotBeClosed: function shouldNotBeClosed(t) {
	      return "modal-close" === $(t).attr("data-action") || t === this.$close[0] ? !1 : 0 !== $(t).closest(".modal").length;
	    }, isOpened: function isOpened() {
	      return this.$modal.hasClass("open");
	    }, isClosed: function isClosed() {
	      return !this.$modal.hasClass("open");
	    }, destroy: function destroy() {
	      this.$element.off(".component.modal"), this.enableBodyScroll(), this.disableEvents(), this.$body.css("height", ""), this.$target.addClass("hide"), this.opts.overlay && this.$overlay.remove();
	    } });
	}(Kube), function (t) {
	  t.Offcanvas = SuperKube.plugin("offcanvas", { opts: { target: null, push: !0, width: "250px", direction: "left", event: "click", clickOutside: !0, animation: { open: { name: "slideInLeft", duration: .3, timing: "linear" }, close: { name: "slideOutLeft", duration: .2, timing: "linear" } }, callbacks: ["open", "opened", "close", "closed"], onlymobile: !0 }, init: function init() {
	      t.apply(this, arguments), null !== typeof this.opts.target && (this.$target = $(this.opts.target), this.opts.onlymobile = this.$target.hasClass("hide-on-small"), this.opts.width = $(window).width() < parseInt(this.opts.width) ? "100%" : this.opts.width, this.$element.addClass("offcanvas-element").on(this.opts.event + ".component.offcanvas", $.proxy(this.toggle, this)), this.buildDirectionAnimation(), this.$close = this.getCloseLink());
	    }, buildDirectionAnimation: function buildDirectionAnimation() {
	      "right" === this.opts.direction && (this.opts.animation.open.name = "slideInRight", this.opts.animation.close.name = "slideOutRight");
	    }, getCloseLink: function getCloseLink() {
	      return this.$target.find(".close");
	    }, toggle: function toggle(t) {
	      return t && t.preventDefault(), this.isClosed() ? this.open() : this.close();
	    }, open: function open() {
	      var t = $(document).find(".offcanvas");0 !== t.length && t.hasClass("open") && ($(document).off(".component.offcanvas"), t.css("width", "").hide().removeClass("open offcanvas offcanvas-left offcanvas-right")), this.callback("open"), this.$target.css("width", this.opts.width).addClass("offcanvas offcanvas-" + this.opts.direction), this.opts.onlymobile && this.$target.removeClass("hide-on-small"), this.push(), this.$target.addClass("open").animation(this.opts.animation.open, $.proxy(this.opened, this));
	    }, push: function push() {
	      if (this.opts.push) {
	        var t = "left" === this.opts.direction ? { left: this.opts.width } : { left: "-" + this.opts.width };$("body").addClass("offcanvas-push-body").animate(t, 1e3 * this.opts.animation.open.duration);
	      }
	    }, opened: function opened() {
	      this.opts.clickOutside && $(document).on("click.component.offcanvas", $.proxy(this.close, this)), this.isMobileScreen() && $("html").addClass("no-scroll"), $(document).on("keyup.component.offcanvas", $.proxy(this.handleKeyboard, this)), this.$close.on("click.component.offcanvas", $.proxy(this.close, this)), this.disableBodyScroll(), this.callback("opened");
	    }, handleKeyboard: function handleKeyboard(t) {
	      return 27 === t.which ? this.close() : !0;
	    }, close: function close(t) {
	      t && 0 !== $(t.target).closest(".offcanvas").length && !$(t.target).hasClass("close") || (this.enableBodyScroll(), this.callback("close"), this.pull(), this.$target.removeClass("open").animation(this.opts.animation.close, $.proxy(this.closed, this)));
	    }, pull: function pull() {
	      this.opts.push && $("body").animate({ left: 0 }, 1e3 * this.opts.animation.close.duration, function () {
	        $(this).removeClass("offcanvas-push-body");
	      });
	    }, closed: function closed() {
	      this.isMobileScreen() && $("html").removeClass("no-scroll"), this.opts.onlymobile && this.$target.addClass("hide-on-small").css("display", ""), this.$target.css("width", "").removeClass("offcanvas offcanvas-" + this.opts.direction), this.$close.off(".component.offcanvas"), $(document).off(".component.offcanvas"), this.callback("closed");
	    }, isClosed: function isClosed() {
	      return !this.$target.hasClass("open");
	    }, isOpened: function isOpened() {
	      return this.$target.hasClass("open");
	    } });
	}(Kube), function (t) {
	  t.Sticky = SuperKube.plugin("sticky", { classname: "sticky", opts: { offset: 0, callbacks: ["fixed", "unfixed"] }, init: function init() {
	      t.apply(this, arguments), this.offsetTop = this.getOffsetTop(), this.fixing(), $(window).scroll($.proxy(this.fixing, this));
	    }, getOffsetTop: function getOffsetTop() {
	      return this.$element.offset().top;
	    }, fixing: function fixing() {
	      return this.isMobileScreen() ? this.unfixed() : this.isFixingNeeded() ? this.fixed() : this.unfixed();
	    }, isFixingNeeded: function isFixingNeeded() {
	      return $(window).scrollTop() > this.offsetTop + this.opts.offset;
	    }, fixed: function fixed() {
	      this.$element.addClass("fixed"), this.callback("fixed");
	    }, unfixed: function unfixed() {
	      this.$element.removeClass("fixed"), this.callback("unfixed");
	    } });
	}(Kube), function (t) {
	  t.Tabs = SuperKube.plugin("tabs", { opts: { equals: !1, active: !1, live: !1, hash: !0, callbacks: ["init", "next", "prev", "open", "opened", "close", "closed"] }, init: function init() {
	      t.apply(this, arguments), this.opts.live !== !1 && this.buildLiveTabs(), this.tabsCollection = [], this.hashesCollection = [], this.currentHash = [], this.currentItem = !1, this.$items = this.getItems(), this.$items.each($.proxy(this.loadItems, this)), this.$tabs = this.getTabs(), this.currentHash = this.getLocationHash(), this.closeAll(), this.setActiveItem(), this.setItemHeight(), this.callback("init");
	    }, getTabs: function getTabs() {
	      return $(this.tabsCollection).map(function () {
	        return this.toArray();
	      });
	    }, getItems: function getItems() {
	      return this.$element.find("a");
	    }, loadItems: function loadItems(t, e) {
	      var s = this.getItem(e);s.$el.attr("rel", s.hash), this.collectItem(s), s.$parent.hasClass("active") && (this.currentItem = s, this.opts.active = s.hash), s.$el.on("click.component.tabs", $.proxy(this.open, this));
	    }, collectItem: function collectItem(t) {
	      this.tabsCollection.push(t.$tab), this.hashesCollection.push(t.hash);
	    }, buildLiveTabs: function buildLiveTabs() {
	      var t = $(this.opts.live);0 !== t.length && (this.$liveTabsList = $("<ul />"), t.each($.proxy(this.buildLiveItem, this)), this.$element.html("").append(this.$liveTabsList));
	    }, buildLiveItem: function buildLiveItem(t, e) {
	      var s = $(e),
	          i = $("<li />"),
	          n = $("<a />"),
	          o = t + 1;s.attr("id", this.getLiveItemId(s, o));var a = "#" + s.attr("id"),
	          h = this.getLiveItemTitle(s);n.attr("href", a).attr("rel", a).text(h), i.append(n), this.$liveTabsList.append(i);
	    }, getLiveItemId: function getLiveItemId(t, e) {
	      return "undefined" == typeof t.attr("id") ? this.opts.live.replace(".", "") + e : t.attr("id");
	    }, getLiveItemTitle: function getLiveItemTitle(t) {
	      return "undefined" == typeof t.attr("data-title") ? t.attr("id") : t.attr("data-title");
	    }, setActiveItem: function setActiveItem() {
	      this.currentHash ? (this.currentItem = this.getItemBy(this.currentHash), this.opts.active = this.currentHash) : this.opts.active === !1 && (this.currentItem = this.getItem(this.$items.first()), this.opts.active = this.currentItem.hash), this.addActive(this.currentItem);
	    }, addActive: function addActive(t) {
	      t.$parent.addClass("active"), t.$tab.removeClass("hide").show().addClass("open"), this.currentItem = t;
	    }, removeActive: function removeActive(t) {
	      t.$parent.removeClass("active"), t.$tab.hide().removeClass("open"), this.currentItem = !1;
	    }, next: function next(t) {
	      t && t.preventDefault();var e = this.getItem(this.fetchElement("next"));this.open(e.hash), this.callback("next", e);
	    }, prev: function prev(t) {
	      t && t.preventDefault();var e = this.getItem(this.fetchElement("prev"));this.open(e.hash), this.callback("prev", e);
	    }, fetchElement: function fetchElement(t) {
	      var e;if (this.currentItem !== !1) {
	        if (e = this.currentItem.$parent[t]().find("a"), 0 === e.length) return;
	      } else e = this.$items[0];return e;
	    }, open: function open(t, e) {
	      if ("undefined" != typeof t) {
	        "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.preventDefault();var s = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? this.getItem(t.target) : this.getItemBy(t);this.closeAll(), this.callback("open", s), this.addActive(s), this.pushStateOpen(e, s), this.callback("opened", s);
	      }
	    }, pushStateOpen: function pushStateOpen(t, e) {
	      t !== !1 && this.opts.hash !== !1 && history.pushState(!1, !1, e.hash);
	    }, close: function close(t) {
	      var e = this.getItemBy(t);e.$parent.hasClass("active") && (this.callback("close", e), this.removeActive(e), this.pushStateClose(), this.callback("closed", e));
	    }, pushStateClose: function pushStateClose() {
	      this.opts.hash !== !1 && history.pushState(!1, !1, " ");
	    }, closeAll: function closeAll() {
	      this.$tabs.removeClass("open").hide(), this.$items.parent().removeClass("active");
	    }, getItem: function getItem(t) {
	      var e = {};return e.$el = $(t), e.hash = e.$el.attr("href"), e.$parent = e.$el.parent(), e.$tab = $(e.hash), e;
	    }, getItemBy: function getItemBy(t) {
	      var e = "number" == typeof t ? this.$items.eq(t - 1) : this.$element.find('[rel="' + t + '"]');return this.getItem(e);
	    }, getLocationHash: function getLocationHash() {
	      return this.opts.hash === !1 ? !1 : this.isHash() ? top.location.hash : !1;
	    }, isHash: function isHash() {
	      return !("" === top.location.hash || -1 === $.inArray(top.location.hash, this.hashesCollection));
	    }, setItemHeight: function setItemHeight() {
	      if (this.opts.equals) {
	        var t = this.getItemMaxHeight() + "px";this.$tabs.css("min-height", t);
	      }
	    }, getItemMaxHeight: function getItemMaxHeight() {
	      var t = 0;return this.$tabs.each(function () {
	        var e = $(this).height();t = e > t ? e : t;
	      }), t;
	    }, destroy: function destroy() {
	      this.$tabs.removeClass("open").show(), this.$items.off(".component.tabs").parent().removeClass("active"), this.$element.removeData();
	    } });
	}(Kube), function (t) {
	  t.Toggleme = SuperKube.plugin("toggleme", { classname: "toggleme", opts: { target: null, text: "", animation: { open: { name: "slideDown", duration: .5, timing: "cubic-bezier(0.175, 0.885, 0.320, 1.375)" }, close: { name: "slideUp", duration: .5, timing: "cubic-bezier(0.600, -0.280, 0.735, 0.045)"
	        } }, callbacks: ["open", "opened", "close", "closed"] }, init: function init() {
	      t.apply(this, arguments), null !== this.opts.target && (this.text = this.$element.text(), this.$target = this.getTarget(), this.hideOnSmall = this.$target.hasClass("hide-on-small"), this.$element.on("click.component.toggleme", $.proxy(this.toggle, this)));
	    }, getTarget: function getTarget() {
	      switch (this.opts.target) {case "next":
	          return this.$element.next();case "parent+next":
	          return this.$element.parent().next();case "prev":
	          return this.$element.prev();case "parent+prev":
	          return this.$element.parent().prev();default:
	          return $(this.opts.target);}
	    }, toggle: function toggle(t) {
	      return t && t.preventDefault(), this.isOpened() ? this.close() : this.open();
	    }, isOpened: function isOpened() {
	      return this.$target.hasClass("open");
	    }, isClosed: function isClosed() {
	      return !this.$target.hasClass("open");
	    }, open: function open() {
	      this.isOpened() || (this.callback("open"), this.$target.removeClass("hide-on-small").animation(this.opts.animation.open, $.proxy(this.opened, this)), setTimeout($.proxy(this.setOpenedText, this), 500 * this.opts.animation.open.duration));
	    }, opened: function opened() {
	      this.$target.addClass("open"), this.callback("opened");
	    }, setOpenedText: function setOpenedText() {
	      "" !== this.opts.text && this.$element.text(this.opts.text);
	    }, close: function close() {
	      this.isClosed() || (this.callback("close"), "hide" === this.opts.animation.close && this.setClosedText(), this.$target.animation(this.opts.animation.close, $.proxy(this.closed, this)));
	    }, closed: function closed() {
	      this.$target.removeClass("open"), "hide" !== this.opts.animation.close && this.setClosedText(), this.hideOnSmall && this.$target.addClass("hide-on-small").show(), this.callback("closed");
	    }, setClosedText: function setClosedText() {
	      "" !== this.opts.text && this.$element.text(this.text);
	    }, destroy: function destroy() {
	      this.$target.hide().removeClass("open").removeData(), this.$element.off(".component.toggleme").removeData();
	    } });
	}(Kube);

/***/ }
/******/ ]);