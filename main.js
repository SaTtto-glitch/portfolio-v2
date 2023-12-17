import * as h from "react";
import yt, { useState as nr, useEffect as ar } from "react";
import ir from "react-dom";
var Fe = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function or() {
  if (ut)
    return Z;
  ut = 1;
  var e = yt, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, c, d) {
    var m, v = {}, E = null, D = null;
    d !== void 0 && (E = "" + d), c.key !== void 0 && (E = "" + c.key), c.ref !== void 0 && (D = c.ref);
    for (m in c)
      i.call(c, m) && !u.hasOwnProperty(m) && (v[m] = c[m]);
    if (f && f.defaultProps)
      for (m in c = f.defaultProps, c)
        v[m] === void 0 && (v[m] = c[m]);
    return { $$typeof: r, type: f, key: E, ref: D, props: v, _owner: a.current };
  }
  return Z.Fragment = n, Z.jsx = s, Z.jsxs = s, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function sr() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = yt, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function x(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = O && t[O] || t[C];
      return typeof o == "function" ? o : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(t) {
      {
        for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          l[g - 1] = arguments[g];
        S("error", t, l);
      }
    }
    function S(t, o, l) {
      {
        var g = _.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (o += "%s", l = l.concat([w]));
        var N = l.map(function(R) {
          return String(R);
        });
        N.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, N);
      }
    }
    var L = !1, F = !1, oe = !1, z = !1, Re = !1, B;
    B = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === u || Re || t === a || t === d || t === m || z || t === D || L || F || oe || typeof t == "object" && t !== null && (t.$$typeof === E || t.$$typeof === v || t.$$typeof === s || t.$$typeof === f || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === B || t.getModuleId !== void 0));
    }
    function jt(t, o, l) {
      var g = t.displayName;
      if (g)
        return g;
      var w = o.displayName || o.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function We(t) {
      return t.displayName || "Context";
    }
    function V(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var o = t;
            return We(o) + ".Consumer";
          case s:
            var l = t;
            return We(l._context) + ".Provider";
          case c:
            return jt(t, t.render, "ForwardRef");
          case v:
            var g = t.displayName || null;
            return g !== null ? g : V(t.type) || "Memo";
          case E: {
            var w = t, N = w._payload, R = w._init;
            try {
              return V(R(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, $e, Me, Be, Ye, Je, Ke, qe;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Dt() {
      {
        if (H === 0) {
          $e = console.log, Me = console.info, Be = console.warn, Ye = console.error, Je = console.group, Ke = console.groupCollapsed, qe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function Lt() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: $e
            }),
            info: W({}, t, {
              value: Me
            }),
            warn: W({}, t, {
              value: Be
            }),
            error: W({}, t, {
              value: Ye
            }),
            group: W({}, t, {
              value: Je
            }),
            groupCollapsed: W({}, t, {
              value: Ke
            }),
            groupEnd: W({}, t, {
              value: qe
            })
          });
        }
        H < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ne = _.ReactCurrentDispatcher, Se;
    function se(t, o, l) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            Se = g && g[1] || "";
          }
        return `
` + Se + t;
      }
    }
    var Ce = !1, le;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      le = new kt();
    }
    function ze(t, o) {
      if (!t || Ce)
        return "";
      {
        var l = le.get(t);
        if (l !== void 0)
          return l;
      }
      var g;
      Ce = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Ne.current, Ne.current = null, Dt();
      try {
        if (o) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (I) {
              g = I;
            }
            Reflect.construct(t, [], R);
          } else {
            try {
              R.call();
            } catch (I) {
              g = I;
            }
            t.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            g = I;
          }
          t();
        }
      } catch (I) {
        if (I && g && typeof I.stack == "string") {
          for (var b = I.stack.split(`
`), k = g.stack.split(`
`), P = b.length - 1, j = k.length - 1; P >= 1 && j >= 0 && b[P] !== k[j]; )
            j--;
          for (; P >= 1 && j >= 0; P--, j--)
            if (b[P] !== k[j]) {
              if (P !== 1 || j !== 1)
                do
                  if (P--, j--, j < 0 || b[P] !== k[j]) {
                    var U = `
` + b[P].replace(" at new ", " at ");
                    return t.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", t.displayName)), typeof t == "function" && le.set(t, U), U;
                  }
                while (P >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, Ne.current = N, Lt(), Error.prepareStackTrace = w;
      }
      var J = t ? t.displayName || t.name : "", lt = J ? se(J) : "";
      return typeof t == "function" && le.set(t, lt), lt;
    }
    function Ft(t, o, l) {
      return ze(t, !1);
    }
    function Ut(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function ue(t, o, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ze(t, Ut(t));
      if (typeof t == "string")
        return se(t);
      switch (t) {
        case d:
          return se("Suspense");
        case m:
          return se("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ft(t.render);
          case v:
            return ue(t.type, o, l);
          case E: {
            var g = t, w = g._payload, N = g._init;
            try {
              return ue(N(w), o, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, He = {}, Xe = _.ReactDebugCurrentFrame;
    function fe(t) {
      if (t) {
        var o = t._owner, l = ue(t.type, t._source, o ? o.type : null);
        Xe.setExtraStackFrame(l);
      } else
        Xe.setExtraStackFrame(null);
    }
    function At(t, o, l, g, w) {
      {
        var N = Function.call.bind(ce);
        for (var R in t)
          if (N(t, R)) {
            var b = void 0;
            try {
              if (typeof t[R] != "function") {
                var k = Error((g || "React class") + ": " + l + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              b = t[R](o, R, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              b = P;
            }
            b && !(b instanceof Error) && (fe(w), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, R, typeof b), fe(null)), b instanceof Error && !(b.message in He) && (He[b.message] = !0, fe(w), y("Failed %s type: %s", l, b.message), fe(null));
          }
      }
    }
    var Vt = Array.isArray;
    function Te(t) {
      return Vt(t);
    }
    function It(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, l = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function Wt(t) {
      try {
        return Ze(t), !1;
      } catch {
        return !0;
      }
    }
    function Ze(t) {
      return "" + t;
    }
    function Qe(t) {
      if (Wt(t))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", It(t)), Ze(t);
    }
    var X = _.ReactCurrentOwner, $t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt, Oe;
    Oe = {};
    function Mt(t) {
      if (ce.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Bt(t) {
      if (ce.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Yt(t, o) {
      if (typeof t.ref == "string" && X.current && o && X.current.stateNode !== o) {
        var l = V(X.current.type);
        Oe[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(X.current.type), t.ref), Oe[l] = !0);
      }
    }
    function Jt(t, o) {
      {
        var l = function() {
          et || (et = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Kt(t, o) {
      {
        var l = function() {
          tt || (tt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var qt = function(t, o, l, g, w, N, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: o,
        ref: l,
        props: R,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Gt(t, o, l, g, w) {
      {
        var N, R = {}, b = null, k = null;
        l !== void 0 && (Qe(l), b = "" + l), Bt(o) && (Qe(o.key), b = "" + o.key), Mt(o) && (k = o.ref, Yt(o, w));
        for (N in o)
          ce.call(o, N) && !$t.hasOwnProperty(N) && (R[N] = o[N]);
        if (t && t.defaultProps) {
          var P = t.defaultProps;
          for (N in P)
            R[N] === void 0 && (R[N] = P[N]);
        }
        if (b || k) {
          var j = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && Jt(R, j), k && Kt(R, j);
        }
        return qt(t, b, k, w, g, X.current, R);
      }
    }
    var Pe = _.ReactCurrentOwner, rt = _.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var o = t._owner, l = ue(t.type, t._source, o ? o.type : null);
        rt.setExtraStackFrame(l);
      } else
        rt.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function De(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function nt() {
      {
        if (Pe.current) {
          var t = V(Pe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function zt(t) {
      {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + o + ":" + l + ".";
        }
        return "";
      }
    }
    var at = {};
    function Ht(t) {
      {
        var o = nt();
        if (!o) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (o = `

Check the top-level render call using <` + l + ">.");
        }
        return o;
      }
    }
    function it(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = Ht(o);
        if (at[l])
          return;
        at[l] = !0;
        var g = "";
        t && t._owner && t._owner !== Pe.current && (g = " It was passed a child from " + V(t._owner.type) + "."), Y(t), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Y(null);
      }
    }
    function ot(t, o) {
      {
        if (typeof t != "object")
          return;
        if (Te(t))
          for (var l = 0; l < t.length; l++) {
            var g = t[l];
            De(g) && it(g, o);
          }
        else if (De(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = x(t);
          if (typeof w == "function" && w !== t.entries)
            for (var N = w.call(t), R; !(R = N.next()).done; )
              De(R.value) && it(R.value, o);
        }
      }
    }
    function Xt(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var l;
        if (typeof o == "function")
          l = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === v))
          l = o.propTypes;
        else
          return;
        if (l) {
          var g = V(o);
          At(l, t.props, "prop", g, t);
        } else if (o.PropTypes !== void 0 && !je) {
          je = !0;
          var w = V(o);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(t) {
      {
        for (var o = Object.keys(t.props), l = 0; l < o.length; l++) {
          var g = o[l];
          if (g !== "children" && g !== "key") {
            Y(t), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), y("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function st(t, o, l, g, w, N) {
      {
        var R = we(t);
        if (!R) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = zt(w);
          k ? b += k : b += nt();
          var P;
          t === null ? P = "null" : Te(t) ? P = "array" : t !== void 0 && t.$$typeof === r ? (P = "<" + (V(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : P = typeof t, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, b);
        }
        var j = Gt(t, o, l, w, N);
        if (j == null)
          return j;
        if (R) {
          var U = o.children;
          if (U !== void 0)
            if (g)
              if (Te(U)) {
                for (var J = 0; J < U.length; J++)
                  ot(U[J], t);
                Object.freeze && Object.freeze(U);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ot(U, t);
        }
        return t === i ? Zt(j) : Xt(j), j;
      }
    }
    function Qt(t, o, l) {
      return st(t, o, l, !0);
    }
    function er(t, o, l) {
      return st(t, o, l, !1);
    }
    var tr = er, rr = Qt;
    Q.Fragment = i, Q.jsx = tr, Q.jsxs = rr;
  }()), Q;
}
process.env.NODE_ENV === "production" ? Fe.exports = or() : Fe.exports = sr();
var p = Fe.exports, te = {}, ee = ir;
if (process.env.NODE_ENV === "production")
  te.createRoot = ee.createRoot, te.hydrateRoot = ee.hydrateRoot;
else {
  var de = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  te.createRoot = function(e, r) {
    de.usingClientEntryPoint = !0;
    try {
      return ee.createRoot(e, r);
    } finally {
      de.usingClientEntryPoint = !1;
    }
  }, te.hydrateRoot = function(e, r, n) {
    de.usingClientEntryPoint = !0;
    try {
      return ee.hydrateRoot(e, r, n);
    } finally {
      de.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, re.apply(this, arguments);
}
var $;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})($ || ($ = {}));
const ft = "popstate";
function lr(e) {
  e === void 0 && (e = {});
  function r(i, a) {
    let {
      pathname: u,
      search: s,
      hash: f
    } = i.location;
    return Ue(
      "",
      {
        pathname: u,
        search: s,
        hash: f
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function n(i, a) {
    return typeof a == "string" ? a : ne(a);
  }
  return cr(r, n, null, e);
}
function T(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function M(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function ur() {
  return Math.random().toString(36).substr(2, 8);
}
function dt(e, r) {
  return {
    usr: e.state,
    key: e.key,
    idx: r
  };
}
function Ue(e, r, n, i) {
  return n === void 0 && (n = null), re({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof r == "string" ? ye(r) : r, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || i || ur()
  });
}
function ne(e) {
  let {
    pathname: r = "/",
    search: n = "",
    hash: i = ""
  } = e;
  return n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function ye(e) {
  let r = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (r.hash = e.substr(n), e = e.substr(0, n));
    let i = e.indexOf("?");
    i >= 0 && (r.search = e.substr(i), e = e.substr(0, i)), e && (r.pathname = e);
  }
  return r;
}
function cr(e, r, n, i) {
  i === void 0 && (i = {});
  let {
    window: a = document.defaultView,
    v5Compat: u = !1
  } = i, s = a.history, f = $.Pop, c = null, d = m();
  d == null && (d = 0, s.replaceState(re({}, s.state, {
    idx: d
  }), ""));
  function m() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function v() {
    f = $.Pop;
    let x = m(), _ = x == null ? null : x - d;
    d = x, c && c({
      action: f,
      location: C.location,
      delta: _
    });
  }
  function E(x, _) {
    f = $.Push;
    let y = Ue(C.location, x, _);
    n && n(y, x), d = m() + 1;
    let S = dt(y, d), L = C.createHref(y);
    try {
      s.pushState(S, "", L);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      a.location.assign(L);
    }
    u && c && c({
      action: f,
      location: C.location,
      delta: 1
    });
  }
  function D(x, _) {
    f = $.Replace;
    let y = Ue(C.location, x, _);
    n && n(y, x), d = m();
    let S = dt(y, d), L = C.createHref(y);
    s.replaceState(S, "", L), u && c && c({
      action: f,
      location: C.location,
      delta: 0
    });
  }
  function O(x) {
    let _ = a.location.origin !== "null" ? a.location.origin : a.location.href, y = typeof x == "string" ? x : ne(x);
    return T(_, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, _);
  }
  let C = {
    get action() {
      return f;
    },
    get location() {
      return e(a, s);
    },
    listen(x) {
      if (c)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(ft, v), c = x, () => {
        a.removeEventListener(ft, v), c = null;
      };
    },
    createHref(x) {
      return r(a, x);
    },
    createURL: O,
    encodeLocation(x) {
      let _ = O(x);
      return {
        pathname: _.pathname,
        search: _.search,
        hash: _.hash
      };
    },
    push: E,
    replace: D,
    go(x) {
      return s.go(x);
    }
  };
  return C;
}
var pt;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(pt || (pt = {}));
function ht(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, i] = fr(e.path, e.caseSensitive, e.end), a = r.match(n);
  if (!a)
    return null;
  let u = a[0], s = u.replace(/(.)\/+$/, "$1"), f = a.slice(1);
  return {
    params: i.reduce((d, m, v) => {
      let {
        paramName: E,
        isOptional: D
      } = m;
      if (E === "*") {
        let C = f[v] || "";
        s = u.slice(0, u.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const O = f[v];
      return D && !O ? d[E] = void 0 : d[E] = dr(O || "", E), d;
    }, {}),
    pathname: u,
    pathnameBase: s,
    pattern: e
  };
}
function fr(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !0), M(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let i = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, f, c) => (i.push({
    paramName: f,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (i.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, r ? void 0 : "i"), i];
}
function dr(e, r) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return M(!1, 'The value for the URL param "' + r + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function K(e, r) {
  if (r === "/")
    return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let n = r.endsWith("/") ? r.length - 1 : r.length, i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
function pr(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: n,
    search: i = "",
    hash: a = ""
  } = typeof e == "string" ? ye(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : hr(n, r) : r,
    search: vr(i),
    hash: gr(a)
  };
}
function hr(e, r) {
  let n = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function Le(e, r, n, i) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function mr(e) {
  return e.filter((r, n) => n === 0 || r.route.path && r.route.path.length > 0);
}
function Et(e, r) {
  let n = mr(e);
  return r ? n.map((i, a) => a === e.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
}
function bt(e, r, n, i) {
  i === void 0 && (i = !1);
  let a;
  typeof e == "string" ? a = ye(e) : (a = re({}, e), T(!a.pathname || !a.pathname.includes("?"), Le("?", "pathname", "search", a)), T(!a.pathname || !a.pathname.includes("#"), Le("#", "pathname", "hash", a)), T(!a.search || !a.search.includes("#"), Le("#", "search", "hash", a)));
  let u = e === "" || a.pathname === "", s = u ? "/" : a.pathname, f;
  if (s == null)
    f = n;
  else if (i) {
    let v = r.length === 0 ? [] : r[r.length - 1].replace(/^\//, "").split("/");
    if (s.startsWith("..")) {
      let E = s.split("/");
      for (; E[0] === ".."; )
        E.shift(), v.pop();
      a.pathname = E.join("/");
    }
    f = "/" + v.join("/");
  } else {
    let v = r.length - 1;
    if (s.startsWith("..")) {
      let E = s.split("/");
      for (; E[0] === ".."; )
        E.shift(), v -= 1;
      a.pathname = E.join("/");
    }
    f = v >= 0 ? r[v] : "/";
  }
  let c = pr(a, f), d = s && s !== "/" && s.endsWith("/"), m = (u || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || m) && (c.pathname += "/"), c;
}
const Ae = (e) => e.join("/").replace(/\/\/+/g, "/"), vr = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, gr = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, _t = ["post", "put", "patch", "delete"];
new Set(_t);
const yr = ["get", ..._t];
new Set(yr);
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ve.apply(this, arguments);
}
const Ee = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Ee.displayName = "DataRouter");
const xt = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (xt.displayName = "DataRouterState");
const Er = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Er.displayName = "Await");
const A = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (A.displayName = "Navigation");
const be = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (be.displayName = "Location");
const G = /* @__PURE__ */ h.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (G.displayName = "Route");
const br = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (br.displayName = "RouteError");
function _r(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r;
  _e() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : T(!1));
  let {
    basename: i,
    navigator: a
  } = h.useContext(A), {
    hash: u,
    pathname: s,
    search: f
  } = ie(e, {
    relative: n
  }), c = s;
  return i !== "/" && (c = s === "/" ? i : Ae([i, s])), a.createHref({
    pathname: c,
    search: f,
    hash: u
  });
}
function _e() {
  return h.useContext(be) != null;
}
function ae() {
  return _e() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : T(!1)), h.useContext(be).location;
}
const Rt = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wt(e) {
  h.useContext(A).static || h.useLayoutEffect(e);
}
function xr() {
  let {
    isDataRoute: e
  } = h.useContext(G);
  return e ? Cr() : Rr();
}
function Rr() {
  _e() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : T(!1));
  let e = h.useContext(Ee), {
    basename: r,
    future: n,
    navigator: i
  } = h.useContext(A), {
    matches: a
  } = h.useContext(G), {
    pathname: u
  } = ae(), s = JSON.stringify(Et(a, n.v7_relativeSplatPath)), f = h.useRef(!1);
  return wt(() => {
    f.current = !0;
  }), h.useCallback(function(d, m) {
    if (m === void 0 && (m = {}), process.env.NODE_ENV !== "production" && M(f.current, Rt), !f.current)
      return;
    if (typeof d == "number") {
      i.go(d);
      return;
    }
    let v = bt(d, JSON.parse(s), u, m.relative === "path");
    e == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : Ae([r, v.pathname])), (m.replace ? i.replace : i.push)(v, m.state, m);
  }, [r, i, s, u, e]);
}
function ie(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r, {
    future: i
  } = h.useContext(A), {
    matches: a
  } = h.useContext(G), {
    pathname: u
  } = ae(), s = JSON.stringify(Et(a, i.v7_relativeSplatPath));
  return h.useMemo(() => bt(e, JSON.parse(s), u, n === "path"), [e, s, u, n]);
}
var Nt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Nt || {}), Ve = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Ve || {});
function St(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function wr(e) {
  let r = h.useContext(Ee);
  return r || (process.env.NODE_ENV !== "production" ? T(!1, St(e)) : T(!1)), r;
}
function Nr(e) {
  let r = h.useContext(G);
  return r || (process.env.NODE_ENV !== "production" ? T(!1, St(e)) : T(!1)), r;
}
function Ct(e) {
  let r = Nr(e), n = r.matches[r.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? T(!1, e + ' can only be used on routes that contain a unique "id"') : T(!1)), n.route.id;
}
function Sr() {
  return Ct(Ve.UseRouteId);
}
function Cr() {
  let {
    router: e
  } = wr(Nt.UseNavigateStable), r = Ct(Ve.UseNavigateStable), n = h.useRef(!1);
  return wt(() => {
    n.current = !0;
  }), h.useCallback(function(a, u) {
    u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && M(n.current, Rt), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, ve({
      fromRouteId: r
    }, u)));
  }, [e, r]);
}
function Tr(e) {
  let {
    basename: r = "/",
    children: n = null,
    location: i,
    navigationType: a = $.Pop,
    navigator: u,
    static: s = !1,
    future: f
  } = e;
  _e() && (process.env.NODE_ENV !== "production" ? T(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : T(!1));
  let c = r.replace(/^\/*/, "/"), d = h.useMemo(() => ({
    basename: c,
    navigator: u,
    static: s,
    future: ve({
      v7_relativeSplatPath: !1
    }, f)
  }), [c, f, u, s]);
  typeof i == "string" && (i = ye(i));
  let {
    pathname: m = "/",
    search: v = "",
    hash: E = "",
    state: D = null,
    key: O = "default"
  } = i, C = h.useMemo(() => {
    let x = K(m, c);
    return x == null ? null : {
      location: {
        pathname: x,
        search: v,
        hash: E,
        state: D,
        key: O
      },
      navigationType: a
    };
  }, [c, m, v, E, D, O, a]);
  return process.env.NODE_ENV !== "production" && M(C != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + m + v + E + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), C == null ? null : /* @__PURE__ */ h.createElement(A.Provider, {
    value: d
  }, /* @__PURE__ */ h.createElement(be.Provider, {
    children: n,
    value: C
  }));
}
new Promise(() => {
});
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, q.apply(this, arguments);
}
function Ie(e, r) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, u;
  for (u = 0; u < i.length; u++)
    a = i[u], !(r.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const he = "get", me = "application/x-www-form-urlencoded";
function xe(e) {
  return e != null && typeof e.tagName == "string";
}
function Or(e) {
  return xe(e) && e.tagName.toLowerCase() === "button";
}
function Pr(e) {
  return xe(e) && e.tagName.toLowerCase() === "form";
}
function jr(e) {
  return xe(e) && e.tagName.toLowerCase() === "input";
}
function Dr(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Lr(e, r) {
  return e.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Dr(e);
}
let pe = null;
function kr() {
  if (pe === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), pe = !1;
    } catch {
      pe = !0;
    }
  return pe;
}
const Fr = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ke(e) {
  return e != null && !Fr.has(e) ? (process.env.NODE_ENV !== "production" && M(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + me + '"')), null) : e;
}
function Ur(e, r) {
  let n, i, a, u, s;
  if (Pr(e)) {
    let f = e.getAttribute("action");
    i = f ? K(f, r) : null, n = e.getAttribute("method") || he, a = ke(e.getAttribute("enctype")) || me, u = new FormData(e);
  } else if (Or(e) || jr(e) && (e.type === "submit" || e.type === "image")) {
    let f = e.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || f.getAttribute("action");
    if (i = c ? K(c, r) : null, n = e.getAttribute("formmethod") || f.getAttribute("method") || he, a = ke(e.getAttribute("formenctype")) || ke(f.getAttribute("enctype")) || me, u = new FormData(f, e), !kr()) {
      let {
        name: d,
        type: m,
        value: v
      } = e;
      if (m === "image") {
        let E = d ? d + "." : "";
        u.append(E + "x", "0"), u.append(E + "y", "0");
      } else
        d && u.append(d, v);
    }
  } else {
    if (xe(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = he, i = null, a = me, s = e;
  }
  return u && a === "text/plain" && (s = u, u = void 0), {
    action: i,
    method: n.toLowerCase(),
    encType: a,
    formData: u,
    body: s
  };
}
const Ar = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Vr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Ir = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Tt = /* @__PURE__ */ h.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Tt.displayName = "ViewTransition");
const Wr = /* @__PURE__ */ h.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Wr.displayName = "Fetchers");
const $r = "startTransition", mt = h[$r];
function Mr(e) {
  let {
    basename: r,
    children: n,
    future: i,
    window: a
  } = e, u = h.useRef();
  u.current == null && (u.current = lr({
    window: a,
    v5Compat: !0
  }));
  let s = u.current, [f, c] = h.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: d
  } = i || {}, m = h.useCallback((v) => {
    d && mt ? mt(() => c(v)) : c(v);
  }, [c, d]);
  return h.useLayoutEffect(() => s.listen(m), [s, m]), /* @__PURE__ */ h.createElement(Tr, {
    basename: r,
    children: n,
    location: f.location,
    navigationType: f.action,
    navigator: s,
    future: i
  });
}
process.env.NODE_ENV;
const Br = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ot = /* @__PURE__ */ h.forwardRef(function(r, n) {
  let {
    onClick: i,
    relative: a,
    reloadDocument: u,
    replace: s,
    state: f,
    target: c,
    to: d,
    preventScrollReset: m,
    unstable_viewTransition: v
  } = r, E = Ie(r, Ar), {
    basename: D
  } = h.useContext(A), O, C = !1;
  if (typeof d == "string" && Yr.test(d) && (O = d, Br))
    try {
      let S = new URL(window.location.href), L = d.startsWith("//") ? new URL(S.protocol + d) : new URL(d), F = K(L.pathname, D);
      L.origin === S.origin && F != null ? d = F + L.search + L.hash : C = !0;
    } catch {
      process.env.NODE_ENV !== "production" && M(!1, '<Link to="' + d + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let x = _r(d, {
    relative: a
  }), _ = Gr(d, {
    replace: s,
    state: f,
    target: c,
    preventScrollReset: m,
    relative: a,
    unstable_viewTransition: v
  });
  function y(S) {
    i && i(S), S.defaultPrevented || _(S);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ h.createElement("a", q({}, E, {
      href: O || x,
      onClick: C || u ? i : y,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (Ot.displayName = "Link");
const Jr = /* @__PURE__ */ h.forwardRef(function(r, n) {
  let {
    "aria-current": i = "page",
    caseSensitive: a = !1,
    className: u = "",
    end: s = !1,
    style: f,
    to: c,
    unstable_viewTransition: d,
    children: m
  } = r, v = Ie(r, Vr), E = ie(c, {
    relative: v.relative
  }), D = ae(), O = h.useContext(xt), {
    navigator: C
  } = h.useContext(A), x = O != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  en(E) && d === !0, _ = C.encodeLocation ? C.encodeLocation(E).pathname : E.pathname, y = D.pathname, S = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
  a || (y = y.toLowerCase(), S = S ? S.toLowerCase() : null, _ = _.toLowerCase());
  const L = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let F = y === _ || !s && y.startsWith(_) && y.charAt(L) === "/", oe = S != null && (S === _ || !s && S.startsWith(_) && S.charAt(_.length) === "/"), z = {
    isActive: F,
    isPending: oe,
    isTransitioning: x
  }, Re = F ? i : void 0, B;
  typeof u == "function" ? B = u(z) : B = [u, F ? "active" : null, oe ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let we = typeof f == "function" ? f(z) : f;
  return /* @__PURE__ */ h.createElement(Ot, q({}, v, {
    "aria-current": Re,
    className: B,
    ref: n,
    style: we,
    to: c,
    unstable_viewTransition: d
  }), typeof m == "function" ? m(z) : m);
});
process.env.NODE_ENV !== "production" && (Jr.displayName = "NavLink");
const Kr = /* @__PURE__ */ h.forwardRef((e, r) => {
  let {
    fetcherKey: n,
    navigate: i,
    reloadDocument: a,
    replace: u,
    state: s,
    method: f = he,
    action: c,
    onSubmit: d,
    relative: m,
    preventScrollReset: v,
    unstable_viewTransition: E
  } = e, D = Ie(e, Ir), O = Zr(), C = Qr(c, {
    relative: m
  }), x = f.toLowerCase() === "get" ? "get" : "post", _ = (y) => {
    if (d && d(y), y.defaultPrevented)
      return;
    y.preventDefault();
    let S = y.nativeEvent.submitter, L = S?.getAttribute("formmethod") || f;
    O(S || y.currentTarget, {
      fetcherKey: n,
      method: L,
      navigate: i,
      replace: u,
      state: s,
      relative: m,
      preventScrollReset: v,
      unstable_viewTransition: E
    });
  };
  return /* @__PURE__ */ h.createElement("form", q({
    ref: r,
    method: x,
    action: C,
    onSubmit: a ? d : _
  }, D));
});
process.env.NODE_ENV !== "production" && (Kr.displayName = "Form");
process.env.NODE_ENV;
var ge;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ge || (ge = {}));
var vt;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(vt || (vt = {}));
function qr(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Pt(e) {
  let r = h.useContext(Ee);
  return r || (process.env.NODE_ENV !== "production" ? T(!1, qr(e)) : T(!1)), r;
}
function Gr(e, r) {
  let {
    target: n,
    replace: i,
    state: a,
    preventScrollReset: u,
    relative: s,
    unstable_viewTransition: f
  } = r === void 0 ? {} : r, c = xr(), d = ae(), m = ie(e, {
    relative: s
  });
  return h.useCallback((v) => {
    if (Lr(v, n)) {
      v.preventDefault();
      let E = i !== void 0 ? i : ne(d) === ne(m);
      c(e, {
        replace: E,
        state: a,
        preventScrollReset: u,
        relative: s,
        unstable_viewTransition: f
      });
    }
  }, [d, c, m, i, a, n, e, u, s, f]);
}
function zr() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Hr = 0, Xr = () => "__" + String(++Hr) + "__";
function Zr() {
  let {
    router: e
  } = Pt(ge.UseSubmit), {
    basename: r
  } = h.useContext(A), n = Sr();
  return h.useCallback(function(i, a) {
    a === void 0 && (a = {}), zr();
    let {
      action: u,
      method: s,
      encType: f,
      formData: c,
      body: d
    } = Ur(i, r);
    if (a.navigate === !1) {
      let m = a.fetcherKey || Xr();
      e.fetch(m, n, a.action || u, {
        preventScrollReset: a.preventScrollReset,
        formData: c,
        body: d,
        formMethod: a.method || s,
        formEncType: a.encType || f,
        unstable_flushSync: a.unstable_flushSync
      });
    } else
      e.navigate(a.action || u, {
        preventScrollReset: a.preventScrollReset,
        formData: c,
        body: d,
        formMethod: a.method || s,
        formEncType: a.encType || f,
        replace: a.replace,
        state: a.state,
        fromRouteId: n,
        unstable_flushSync: a.unstable_flushSync,
        unstable_viewTransition: a.unstable_viewTransition
      });
  }, [e, r, n]);
}
function Qr(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r, {
    basename: i
  } = h.useContext(A), a = h.useContext(G);
  a || (process.env.NODE_ENV !== "production" ? T(!1, "useFormAction must be used inside a RouteContext") : T(!1));
  let [u] = a.matches.slice(-1), s = q({}, ie(e || ".", {
    relative: n
  })), f = ae();
  if (e == null) {
    s.search = f.search;
    let c = new URLSearchParams(s.search);
    c.has("index") && c.get("index") === "" && (c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "");
  }
  return (!e || e === ".") && u.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (s.pathname = s.pathname === "/" ? i : Ae([i, s.pathname])), ne(s);
}
function en(e, r) {
  r === void 0 && (r = {});
  let n = h.useContext(Tt);
  n == null && (process.env.NODE_ENV !== "production" ? T(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : T(!1));
  let {
    basename: i
  } = Pt(ge.useViewTransitionState), a = ie(e, {
    relative: r.relative
  });
  if (!n.isTransitioning)
    return !1;
  let u = K(n.currentLocation.pathname, i) || n.currentLocation.pathname, s = K(n.nextLocation.pathname, i) || n.nextLocation.pathname;
  return ht(a.pathname, s) != null || ht(a.pathname, u) != null;
}
const gt = ({ sectionId: e }) => {
  const [r, n] = nr(!1), i = () => {
    const a = document.querySelector(`#${e}`);
    if (a) {
      const s = a.getBoundingClientRect().top < window.innerHeight;
      n(s);
    }
  };
  return ar(() => (window.addEventListener("scroll", i), i(), () => {
    window.removeEventListener("scroll", i);
  }), []), /* @__PURE__ */ p.jsxs("section", { className: `section fade ${r ? "fade-in" : ""}`, id: e, children: [
    e === "Profile" && /* @__PURE__ */ p.jsxs("div", { className: "section__inner", children: [
      /* @__PURE__ */ p.jsx("div", { className: "section__titleBlock", children: /* @__PURE__ */ p.jsx("h2", { className: "section__titleBlock--title", children: /* @__PURE__ */ p.jsx("img", { src: "img/top/profile.svg", alt: "" }) }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "column__item u-center", children: [
          /* @__PURE__ */ p.jsx("img", { src: "img/top/profile.JPG", alt: "" }),
          /* @__PURE__ */ p.jsx("p", { className: "logo-title", children: "sayatto" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "column__item", children: [
          /* @__PURE__ */ p.jsx("p", { className: "text", children: "東京のWeb制作会社でフロントエンドエンジニアをしています。" }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("p", { className: "column__item--title", children: "▼ Skill" }),
            /* @__PURE__ */ p.jsx("p", { className: "text", children: "HTML/CSS/JavaScipt/WordPress/React/Docker/Git" })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("p", { className: "column__item--title", children: "▼ Favorite" }),
            /* @__PURE__ */ p.jsx("p", { className: "text", children: "イラスト制作/読書/映画鑑賞/ゲーム" })
          ] })
        ] })
      ] })
    ] }),
    e === "works" && /* @__PURE__ */ p.jsxs("div", { className: "section__inner", children: [
      /* @__PURE__ */ p.jsx("div", { className: "section__titleBlock", children: /* @__PURE__ */ p.jsx("h2", { className: "section__titleBlock--title", children: /* @__PURE__ */ p.jsx("img", { src: "img/top/works.svg", alt: "" }) }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "cardWrapper", children: [
        /* @__PURE__ */ p.jsx("div", { className: "card", children: /* @__PURE__ */ p.jsxs(
          "a",
          {
            className: "url-link",
            href: "https://github.com/SaTtto-glitch/DogImageApp",
            target: "_blank",
            children: [
              /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "card__image",
                  src: "img/top/Dog_app.gif",
                  alt: ""
                }
              ),
              /* @__PURE__ */ p.jsx("p", { className: "card__title", children: "Dogアプリ" }),
              /* @__PURE__ */ p.jsx("p", { className: "card__info", children: "犬の画像をランダムに生成するアプリ" }),
              /* @__PURE__ */ p.jsx("p", { className: "card__info", children: "HTML/CSS/JavaScipt/React" })
            ]
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "card", children: /* @__PURE__ */ p.jsxs(
          "a",
          {
            className: "url-link",
            href: "https://github.com/SaTtto-glitch/React-forum",
            target: "_blank",
            children: [
              /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "card__image",
                  src: "img/top/Forum_app.gif",
                  alt: ""
                }
              ),
              /* @__PURE__ */ p.jsxs("div", { className: "", children: [
                /* @__PURE__ */ p.jsx("p", { className: "card__title", children: "掲示板アプリ" }),
                /* @__PURE__ */ p.jsx("p", { className: "card__info", children: "作成したスレッドにコメントができるアプリ" }),
                /* @__PURE__ */ p.jsx("p", { className: "card__info", children: "HTML/CSS/javascipt(React)" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "card", children: /* @__PURE__ */ p.jsxs(
          "a",
          {
            className: "url-link",
            href: "https://github.com/SaTtto-glitch/bookreview-app",
            target: "_blank",
            children: [
              /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "card__image",
                  src: "img/top/Review_app.gif",
                  alt: ""
                }
              ),
              /* @__PURE__ */ p.jsx("p", { className: "card__title", children: "書籍レビューアプリ" }),
              /* @__PURE__ */ p.jsx("p", { className: "card__info", children: "書籍情報と感想を投稿できるアプリ" }),
              /* @__PURE__ */ p.jsx("p", { className: "card-caption-info", children: "ログイン機能を作成しました。" }),
              /* @__PURE__ */ p.jsx("p", { className: "card-caption-info", children: "HTML/CSS/javascipt(React)" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}, tn = () => /* @__PURE__ */ p.jsxs("main", { children: [
  /* @__PURE__ */ p.jsx("section", { className: "FV", children: /* @__PURE__ */ p.jsx("div", { className: "FV__inner" }) }),
  /* @__PURE__ */ p.jsx("h1", { className: "FV__title", children: "sayatto" }),
  /* @__PURE__ */ p.jsxs("div", { className: "contents", children: [
    /* @__PURE__ */ p.jsx(gt, { sectionId: "Profile" }),
    /* @__PURE__ */ p.jsx(gt, { sectionId: "works" }),
    /* @__PURE__ */ p.jsx("footer", { className: "footer", children: /* @__PURE__ */ p.jsx("div", { className: "inner" }) })
  ] })
] });
function rn() {
  return /* @__PURE__ */ p.jsx(Mr, { children: /* @__PURE__ */ p.jsx(tn, {}) });
}
te.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ p.jsx(rn, {})
);
//# sourceMappingURL=main.js.map
