(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) h(f);
  new MutationObserver((f) => {
    for (const v of f)
      if (v.type === "childList")
        for (const N of v.addedNodes)
          N.tagName === "LINK" && N.rel === "modulepreload" && h(N);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(f) {
    const v = {};
    return (
      f.integrity && (v.integrity = f.integrity),
      f.referrerPolicy && (v.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function h(f) {
    if (f.ep) return;
    f.ep = !0;
    const v = u(f);
    fetch(f.href, v);
  }
})();
var Xo = { exports: {} },
  Rr = {},
  Go = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc;
function Ff() {
  if (lc) return ee;
  lc = 1;
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    N = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    I = Symbol.iterator;
  function R(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (I && g[I]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    $ = {};
  function D(g, P, J) {
    (this.props = g),
      (this.context = P),
      (this.refs = $),
      (this.updater = J || A);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (g, P) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, g, P, "setState");
    }),
    (D.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function O() {}
  O.prototype = D.prototype;
  function G(g, P, J) {
    (this.props = g),
      (this.context = P),
      (this.refs = $),
      (this.updater = J || A);
  }
  var V = (G.prototype = new O());
  (V.constructor = G), z(V, D.prototype), (V.isPureReactComponent = !0);
  var b = Array.isArray,
    ue = Object.prototype.hasOwnProperty,
    we = { current: null },
    ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(g, P, J) {
    var te,
      re = {},
      le = null,
      ce = null;
    if (P != null)
      for (te in (P.ref !== void 0 && (ce = P.ref),
      P.key !== void 0 && (le = "" + P.key),
      P))
        ue.call(P, te) && !ve.hasOwnProperty(te) && (re[te] = P[te]);
    var oe = arguments.length - 2;
    if (oe === 1) re.children = J;
    else if (1 < oe) {
      for (var me = Array(oe), Ze = 0; Ze < oe; Ze++)
        me[Ze] = arguments[Ze + 2];
      re.children = me;
    }
    if (g && g.defaultProps)
      for (te in ((oe = g.defaultProps), oe))
        re[te] === void 0 && (re[te] = oe[te]);
    return {
      $$typeof: o,
      type: g,
      key: le,
      ref: ce,
      props: re,
      _owner: we.current,
    };
  }
  function ke(g, P) {
    return {
      $$typeof: o,
      type: g.type,
      key: P,
      ref: g.ref,
      props: g.props,
      _owner: g._owner,
    };
  }
  function Le(g) {
    return typeof g == "object" && g !== null && g.$$typeof === o;
  }
  function ht(g) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (J) {
        return P[J];
      })
    );
  }
  var vt = /\/+/g;
  function Ge(g, P) {
    return typeof g == "object" && g !== null && g.key != null
      ? ht("" + g.key)
      : P.toString(36);
  }
  function st(g, P, J, te, re) {
    var le = typeof g;
    (le === "undefined" || le === "boolean") && (g = null);
    var ce = !1;
    if (g === null) ce = !0;
    else
      switch (le) {
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case o:
            case c:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = g),
        (re = re(ce)),
        (g = te === "" ? "." + Ge(ce, 0) : te),
        b(re)
          ? ((J = ""),
            g != null && (J = g.replace(vt, "$&/") + "/"),
            st(re, P, J, "", function (Ze) {
              return Ze;
            }))
          : re != null &&
            (Le(re) &&
              (re = ke(
                re,
                J +
                  (!re.key || (ce && ce.key === re.key)
                    ? ""
                    : ("" + re.key).replace(vt, "$&/") + "/") +
                  g
              )),
            P.push(re)),
        1
      );
    if (((ce = 0), (te = te === "" ? "." : te + ":"), b(g)))
      for (var oe = 0; oe < g.length; oe++) {
        le = g[oe];
        var me = te + Ge(le, oe);
        ce += st(le, P, J, me, re);
      }
    else if (((me = R(g)), typeof me == "function"))
      for (g = me.call(g), oe = 0; !(le = g.next()).done; )
        (le = le.value), (me = te + Ge(le, oe++)), (ce += st(le, P, J, me, re));
    else if (le === "object")
      throw (
        ((P = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : P) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ce;
  }
  function gt(g, P, J) {
    if (g == null) return g;
    var te = [],
      re = 0;
    return (
      st(g, te, "", "", function (le) {
        return P.call(J, le, re++);
      }),
      te
    );
  }
  function He(g) {
    if (g._status === -1) {
      var P = g._result;
      (P = P()),
        P.then(
          function (J) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = J));
          },
          function (J) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = J));
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = P));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var Ne = { current: null },
    F = { transition: null },
    Z = {
      ReactCurrentDispatcher: Ne,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: we,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ee.Children = {
      map: gt,
      forEach: function (g, P, J) {
        gt(
          g,
          function () {
            P.apply(this, arguments);
          },
          J
        );
      },
      count: function (g) {
        var P = 0;
        return (
          gt(g, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (g) {
        return (
          gt(g, function (P) {
            return P;
          }) || []
        );
      },
      only: function (g) {
        if (!Le(g))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return g;
      },
    }),
    (ee.Component = D),
    (ee.Fragment = u),
    (ee.Profiler = f),
    (ee.PureComponent = G),
    (ee.StrictMode = h),
    (ee.Suspense = w),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (ee.act = H),
    (ee.cloneElement = function (g, P, J) {
      if (g == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            g +
            "."
        );
      var te = z({}, g.props),
        re = g.key,
        le = g.ref,
        ce = g._owner;
      if (P != null) {
        if (
          (P.ref !== void 0 && ((le = P.ref), (ce = we.current)),
          P.key !== void 0 && (re = "" + P.key),
          g.type && g.type.defaultProps)
        )
          var oe = g.type.defaultProps;
        for (me in P)
          ue.call(P, me) &&
            !ve.hasOwnProperty(me) &&
            (te[me] = P[me] === void 0 && oe !== void 0 ? oe[me] : P[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) te.children = J;
      else if (1 < me) {
        oe = Array(me);
        for (var Ze = 0; Ze < me; Ze++) oe[Ze] = arguments[Ze + 2];
        te.children = oe;
      }
      return {
        $$typeof: o,
        type: g.type,
        key: re,
        ref: le,
        props: te,
        _owner: ce,
      };
    }),
    (ee.createContext = function (g) {
      return (
        (g = {
          $$typeof: N,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (g.Provider = { $$typeof: v, _context: g }),
        (g.Consumer = g)
      );
    }),
    (ee.createElement = Ce),
    (ee.createFactory = function (g) {
      var P = Ce.bind(null, g);
      return (P.type = g), P;
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (g) {
      return { $$typeof: j, render: g };
    }),
    (ee.isValidElement = Le),
    (ee.lazy = function (g) {
      return { $$typeof: T, _payload: { _status: -1, _result: g }, _init: He };
    }),
    (ee.memo = function (g, P) {
      return { $$typeof: S, type: g, compare: P === void 0 ? null : P };
    }),
    (ee.startTransition = function (g) {
      var P = F.transition;
      F.transition = {};
      try {
        g();
      } finally {
        F.transition = P;
      }
    }),
    (ee.unstable_act = H),
    (ee.useCallback = function (g, P) {
      return Ne.current.useCallback(g, P);
    }),
    (ee.useContext = function (g) {
      return Ne.current.useContext(g);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (g) {
      return Ne.current.useDeferredValue(g);
    }),
    (ee.useEffect = function (g, P) {
      return Ne.current.useEffect(g, P);
    }),
    (ee.useId = function () {
      return Ne.current.useId();
    }),
    (ee.useImperativeHandle = function (g, P, J) {
      return Ne.current.useImperativeHandle(g, P, J);
    }),
    (ee.useInsertionEffect = function (g, P) {
      return Ne.current.useInsertionEffect(g, P);
    }),
    (ee.useLayoutEffect = function (g, P) {
      return Ne.current.useLayoutEffect(g, P);
    }),
    (ee.useMemo = function (g, P) {
      return Ne.current.useMemo(g, P);
    }),
    (ee.useReducer = function (g, P, J) {
      return Ne.current.useReducer(g, P, J);
    }),
    (ee.useRef = function (g) {
      return Ne.current.useRef(g);
    }),
    (ee.useState = function (g) {
      return Ne.current.useState(g);
    }),
    (ee.useSyncExternalStore = function (g, P, J) {
      return Ne.current.useSyncExternalStore(g, P, J);
    }),
    (ee.useTransition = function () {
      return Ne.current.useTransition();
    }),
    (ee.version = "18.3.1"),
    ee
  );
}
var ic;
function rs() {
  return ic || ((ic = 1), (Go.exports = Ff())), Go.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function $f() {
  if (oc) return Rr;
  oc = 1;
  var o = rs(),
    c = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    h = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(j, w, S) {
    var T,
      I = {},
      R = null,
      A = null;
    S !== void 0 && (R = "" + S),
      w.key !== void 0 && (R = "" + w.key),
      w.ref !== void 0 && (A = w.ref);
    for (T in w) h.call(w, T) && !v.hasOwnProperty(T) && (I[T] = w[T]);
    if (j && j.defaultProps)
      for (T in ((w = j.defaultProps), w)) I[T] === void 0 && (I[T] = w[T]);
    return {
      $$typeof: c,
      type: j,
      key: R,
      ref: A,
      props: I,
      _owner: f.current,
    };
  }
  return (Rr.Fragment = u), (Rr.jsx = N), (Rr.jsxs = N), Rr;
}
var sc;
function Uf() {
  return sc || ((sc = 1), (Xo.exports = $f())), Xo.exports;
}
var s = Uf(),
  E = rs(),
  Kl = {},
  Zo = { exports: {} },
  Xe = {},
  qo = { exports: {} },
  Jo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac;
function Af() {
  return (
    ac ||
      ((ac = 1),
      (function (o) {
        function c(F, Z) {
          var H = F.length;
          F.push(Z);
          e: for (; 0 < H; ) {
            var g = (H - 1) >>> 1,
              P = F[g];
            if (0 < f(P, Z)) (F[g] = Z), (F[H] = P), (H = g);
            else break e;
          }
        }
        function u(F) {
          return F.length === 0 ? null : F[0];
        }
        function h(F) {
          if (F.length === 0) return null;
          var Z = F[0],
            H = F.pop();
          if (H !== Z) {
            F[0] = H;
            e: for (var g = 0, P = F.length, J = P >>> 1; g < J; ) {
              var te = 2 * (g + 1) - 1,
                re = F[te],
                le = te + 1,
                ce = F[le];
              if (0 > f(re, H))
                le < P && 0 > f(ce, re)
                  ? ((F[g] = ce), (F[le] = H), (g = le))
                  : ((F[g] = re), (F[te] = H), (g = te));
              else if (le < P && 0 > f(ce, H))
                (F[g] = ce), (F[le] = H), (g = le);
              else break e;
            }
          }
          return Z;
        }
        function f(F, Z) {
          var H = F.sortIndex - Z.sortIndex;
          return H !== 0 ? H : F.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var v = performance;
          o.unstable_now = function () {
            return v.now();
          };
        } else {
          var N = Date,
            j = N.now();
          o.unstable_now = function () {
            return N.now() - j;
          };
        }
        var w = [],
          S = [],
          T = 1,
          I = null,
          R = 3,
          A = !1,
          z = !1,
          $ = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V(F) {
          for (var Z = u(S); Z !== null; ) {
            if (Z.callback === null) h(S);
            else if (Z.startTime <= F)
              h(S), (Z.sortIndex = Z.expirationTime), c(w, Z);
            else break;
            Z = u(S);
          }
        }
        function b(F) {
          if ((($ = !1), V(F), !z))
            if (u(w) !== null) (z = !0), He(ue);
            else {
              var Z = u(S);
              Z !== null && Ne(b, Z.startTime - F);
            }
        }
        function ue(F, Z) {
          (z = !1), $ && (($ = !1), O(Ce), (Ce = -1)), (A = !0);
          var H = R;
          try {
            for (
              V(Z), I = u(w);
              I !== null && (!(I.expirationTime > Z) || (F && !ht()));

            ) {
              var g = I.callback;
              if (typeof g == "function") {
                (I.callback = null), (R = I.priorityLevel);
                var P = g(I.expirationTime <= Z);
                (Z = o.unstable_now()),
                  typeof P == "function"
                    ? (I.callback = P)
                    : I === u(w) && h(w),
                  V(Z);
              } else h(w);
              I = u(w);
            }
            if (I !== null) var J = !0;
            else {
              var te = u(S);
              te !== null && Ne(b, te.startTime - Z), (J = !1);
            }
            return J;
          } finally {
            (I = null), (R = H), (A = !1);
          }
        }
        var we = !1,
          ve = null,
          Ce = -1,
          ke = 5,
          Le = -1;
        function ht() {
          return !(o.unstable_now() - Le < ke);
        }
        function vt() {
          if (ve !== null) {
            var F = o.unstable_now();
            Le = F;
            var Z = !0;
            try {
              Z = ve(!0, F);
            } finally {
              Z ? Ge() : ((we = !1), (ve = null));
            }
          } else we = !1;
        }
        var Ge;
        if (typeof G == "function")
          Ge = function () {
            G(vt);
          };
        else if (typeof MessageChannel < "u") {
          var st = new MessageChannel(),
            gt = st.port2;
          (st.port1.onmessage = vt),
            (Ge = function () {
              gt.postMessage(null);
            });
        } else
          Ge = function () {
            D(vt, 0);
          };
        function He(F) {
          (ve = F), we || ((we = !0), Ge());
        }
        function Ne(F, Z) {
          Ce = D(function () {
            F(o.unstable_now());
          }, Z);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            z || A || ((z = !0), He(ue));
          }),
          (o.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ke = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return u(w);
          }),
          (o.unstable_next = function (F) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = R;
            }
            var H = R;
            R = Z;
            try {
              return F();
            } finally {
              R = H;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (F, Z) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var H = R;
            R = F;
            try {
              return Z();
            } finally {
              R = H;
            }
          }),
          (o.unstable_scheduleCallback = function (F, Z, H) {
            var g = o.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? g + H : g))
                : (H = g),
              F)
            ) {
              case 1:
                var P = -1;
                break;
              case 2:
                P = 250;
                break;
              case 5:
                P = 1073741823;
                break;
              case 4:
                P = 1e4;
                break;
              default:
                P = 5e3;
            }
            return (
              (P = H + P),
              (F = {
                id: T++,
                callback: Z,
                priorityLevel: F,
                startTime: H,
                expirationTime: P,
                sortIndex: -1,
              }),
              H > g
                ? ((F.sortIndex = H),
                  c(S, F),
                  u(w) === null &&
                    F === u(S) &&
                    ($ ? (O(Ce), (Ce = -1)) : ($ = !0), Ne(b, H - g)))
                : ((F.sortIndex = P), c(w, F), z || A || ((z = !0), He(ue))),
              F
            );
          }),
          (o.unstable_shouldYield = ht),
          (o.unstable_wrapCallback = function (F) {
            var Z = R;
            return function () {
              var H = R;
              R = Z;
              try {
                return F.apply(this, arguments);
              } finally {
                R = H;
              }
            };
          });
      })(Jo)),
    Jo
  );
}
var uc;
function Bf() {
  return uc || ((uc = 1), (qo.exports = Af())), qo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function Hf() {
  if (cc) return Xe;
  cc = 1;
  var o = rs(),
    c = Bf();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var h = new Set(),
    f = {};
  function v(e, t) {
    N(e, t), N(e + "Capture", t);
  }
  function N(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) h.add(t[e]);
  }
  var j = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    T = {},
    I = {};
  function R(e) {
    return w.call(I, e)
      ? !0
      : w.call(T, e)
      ? !1
      : S.test(e)
      ? (I[e] = !0)
      : ((T[e] = !0), !1);
  }
  function A(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || A(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      D[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function G(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, G);
      D[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, G);
        D[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, G);
      D[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function V(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? R(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ue = Symbol.for("react.element"),
    we = Symbol.for("react.portal"),
    ve = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    ke = Symbol.for("react.profiler"),
    Le = Symbol.for("react.provider"),
    ht = Symbol.for("react.context"),
    vt = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    st = Symbol.for("react.suspense_list"),
    gt = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    Ne = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    g;
  function P(e) {
    if (g === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        g = (t && t[1]) || "";
      }
    return (
      `
` +
      g +
      e
    );
  }
  var J = !1;
  function te(e, t) {
    if (!e || J) return "";
    J = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (k) {
            var r = k;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (k) {
            r = k;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (
          var l = k.stack.split(`
`),
            i = r.stack.split(`
`),
            a = l.length - 1,
            d = i.length - 1;
          1 <= a && 0 <= d && l[a] !== i[d];

        )
          d--;
        for (; 1 <= a && 0 <= d; a--, d--)
          if (l[a] !== i[d]) {
            if (a !== 1 || d !== 1)
              do
                if ((a--, d--, 0 > d || l[a] !== i[d])) {
                  var p =
                    `
` + l[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= a && 0 <= d);
            break;
          }
      }
    } finally {
      (J = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = te(e.type, !1)), e;
      case 11:
        return (e = te(e.type.render, !1)), e;
      case 1:
        return (e = te(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ve:
        return "Fragment";
      case we:
        return "Portal";
      case ke:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case st:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ht:
          return (e.displayName || "Context") + ".Consumer";
        case Le:
          return (e._context.displayName || "Context") + ".Provider";
        case vt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case gt:
          return (
            (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
          );
        case He:
          (t = e._payload), (e = e._init);
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function ce(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === Ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function me(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ze(e) {
    var t = me(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (a) {
            (r = "" + a), i.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Dr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function cs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = me(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ei(e, t) {
    var n = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ds(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = oe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function fs(e, t) {
    (t = t.checked), t != null && V(e, "checked", t, !1);
  }
  function ti(e, t) {
    fs(e, t);
    var n = oe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ni(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ni(e, t.type, oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ni(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vn = Array.isArray;
  function gn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ri(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ms(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Vn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function hs(e, t) {
    var n = oe(t.value),
      r = oe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function gs(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function li(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? gs(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var $r,
    ys = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          $r = $r || document.createElement("div"),
            $r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = $r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ac = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kn).forEach(function (e) {
    Ac.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
    });
  });
  function xs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ws(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = xs(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Bc = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ii(e, t) {
    if (t) {
      if (Bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function oi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var si = null;
  function ai(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ui = null,
    yn = null,
    xn = null;
  function ks(e) {
    if ((e = mr(e))) {
      if (typeof ui != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = sl(t)), ui(e.stateNode, e.type, t));
    }
  }
  function Ns(e) {
    yn ? (xn ? xn.push(e) : (xn = [e])) : (yn = e);
  }
  function Ss() {
    if (yn) {
      var e = yn,
        t = xn;
      if (((xn = yn = null), ks(e), t)) for (e = 0; e < t.length; e++) ks(t[e]);
    }
  }
  function js(e, t) {
    return e(t);
  }
  function Es() {}
  var ci = !1;
  function Cs(e, t, n) {
    if (ci) return e(t, n);
    ci = !0;
    try {
      return js(e, t, n);
    } finally {
      (ci = !1), (yn !== null || xn !== null) && (Es(), Ss());
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = sl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var di = !1;
  if (j)
    try {
      var Xn = {};
      Object.defineProperty(Xn, "passive", {
        get: function () {
          di = !0;
        },
      }),
        window.addEventListener("test", Xn, Xn),
        window.removeEventListener("test", Xn, Xn);
    } catch {
      di = !1;
    }
  function Hc(e, t, n, r, l, i, a, d, p) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (_) {
      this.onError(_);
    }
  }
  var Gn = !1,
    Ur = null,
    Ar = !1,
    fi = null,
    Wc = {
      onError: function (e) {
        (Gn = !0), (Ur = e);
      },
    };
  function Vc(e, t, n, r, l, i, a, d, p) {
    (Gn = !1), (Ur = null), Hc.apply(Wc, arguments);
  }
  function Qc(e, t, n, r, l, i, a, d, p) {
    if ((Vc.apply(this, arguments), Gn)) {
      if (Gn) {
        var k = Ur;
        (Gn = !1), (Ur = null);
      } else throw Error(u(198));
      Ar || ((Ar = !0), (fi = k));
    }
  }
  function nn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ps(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _s(e) {
    if (nn(e) !== e) throw Error(u(188));
  }
  function Kc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = nn(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return _s(l), e;
          if (i === r) return _s(l), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var a = !1, d = l.child; d; ) {
          if (d === n) {
            (a = !0), (n = l), (r = i);
            break;
          }
          if (d === r) {
            (a = !0), (r = l), (n = i);
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = i.child; d; ) {
            if (d === n) {
              (a = !0), (n = i), (r = l);
              break;
            }
            if (d === r) {
              (a = !0), (r = i), (n = l);
              break;
            }
            d = d.sibling;
          }
          if (!a) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Rs(e) {
    return (e = Kc(e)), e !== null ? Ls(e) : null;
  }
  function Ls(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ls(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zs = c.unstable_scheduleCallback,
    Ts = c.unstable_cancelCallback,
    Yc = c.unstable_shouldYield,
    Xc = c.unstable_requestPaint,
    je = c.unstable_now,
    Gc = c.unstable_getCurrentPriorityLevel,
    pi = c.unstable_ImmediatePriority,
    Ms = c.unstable_UserBlockingPriority,
    Br = c.unstable_NormalPriority,
    Zc = c.unstable_LowPriority,
    Os = c.unstable_IdlePriority,
    Hr = null,
    yt = null;
  function qc(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function")
      try {
        yt.onCommitFiberRoot(Hr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var at = Math.clz32 ? Math.clz32 : ed,
    Jc = Math.log,
    bc = Math.LN2;
  function ed(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / bc) | 0)) | 0;
  }
  var Wr = 64,
    Vr = 4194304;
  function Zn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var d = a & ~l;
      d !== 0 ? (r = Zn(d)) : ((i &= a), i !== 0 && (r = Zn(i)));
    } else (a = n & ~l), a !== 0 ? (r = Zn(a)) : i !== 0 && (r = Zn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - at(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function td(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - at(i),
        d = 1 << a,
        p = l[a];
      p === -1
        ? ((d & n) === 0 || (d & r) !== 0) && (l[a] = td(d, t))
        : p <= t && (e.expiredLanes |= d),
        (i &= ~d);
    }
  }
  function mi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Is() {
    var e = Wr;
    return (Wr <<= 1), (Wr & 4194240) === 0 && (Wr = 64), e;
  }
  function hi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - at(t)),
      (e[t] = n);
  }
  function rd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function vi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var se = 0;
  function Ds(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Fs,
    gi,
    $s,
    Us,
    As,
    yi = !1,
    Kr = [],
    Ft = null,
    $t = null,
    Ut = null,
    Jn = new Map(),
    bn = new Map(),
    At = [],
    ld =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Bs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ft = null;
        break;
      case "dragenter":
      case "dragleave":
        $t = null;
        break;
      case "mouseover":
      case "mouseout":
        Ut = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = mr(t)), t !== null && gi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function id(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Ft = er(Ft, e, t, n, r, l)), !0;
      case "dragenter":
        return ($t = er($t, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ut = er(Ut, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Jn.set(i, er(Jn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), bn.set(i, er(bn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Hs(e) {
    var t = rn(e.target);
    if (t !== null) {
      var n = nn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ps(n)), t !== null)) {
            (e.blockedOn = t),
              As(e.priority, function () {
                $s(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (si = r), n.target.dispatchEvent(r), (si = null);
      } else return (t = mr(n)), t !== null && gi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Ws(e, t, n) {
    Yr(e) && n.delete(t);
  }
  function od() {
    (yi = !1),
      Ft !== null && Yr(Ft) && (Ft = null),
      $t !== null && Yr($t) && ($t = null),
      Ut !== null && Yr(Ut) && (Ut = null),
      Jn.forEach(Ws),
      bn.forEach(Ws);
  }
  function tr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      yi ||
        ((yi = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, od)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < Kr.length) {
      tr(Kr[0], e);
      for (var n = 1; n < Kr.length; n++) {
        var r = Kr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ft !== null && tr(Ft, e),
        $t !== null && tr($t, e),
        Ut !== null && tr(Ut, e),
        Jn.forEach(t),
        bn.forEach(t),
        n = 0;
      n < At.length;
      n++
    )
      (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
      Hs(n), n.blockedOn === null && At.shift();
  }
  var wn = b.ReactCurrentBatchConfig,
    Xr = !0;
  function sd(e, t, n, r) {
    var l = se,
      i = wn.transition;
    wn.transition = null;
    try {
      (se = 1), xi(e, t, n, r);
    } finally {
      (se = l), (wn.transition = i);
    }
  }
  function ad(e, t, n, r) {
    var l = se,
      i = wn.transition;
    wn.transition = null;
    try {
      (se = 4), xi(e, t, n, r);
    } finally {
      (se = l), (wn.transition = i);
    }
  }
  function xi(e, t, n, r) {
    if (Xr) {
      var l = wi(e, t, n, r);
      if (l === null) Fi(e, t, r, Gr, n), Bs(e, r);
      else if (id(l, e, t, n, r)) r.stopPropagation();
      else if ((Bs(e, r), t & 4 && -1 < ld.indexOf(e))) {
        for (; l !== null; ) {
          var i = mr(l);
          if (
            (i !== null && Fs(i),
            (i = wi(e, t, n, r)),
            i === null && Fi(e, t, r, Gr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Fi(e, t, r, null, n);
    }
  }
  var Gr = null;
  function wi(e, t, n, r) {
    if (((Gr = null), (e = ai(r)), (e = rn(e)), e !== null))
      if (((t = nn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ps(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Gr = e), null;
  }
  function Vs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Gc()) {
          case pi:
            return 1;
          case Ms:
            return 4;
          case Br:
          case Zc:
            return 16;
          case Os:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bt = null,
    ki = null,
    Zr = null;
  function Qs() {
    if (Zr) return Zr;
    var e,
      t = ki,
      n = t.length,
      r,
      l = "value" in Bt ? Bt.value : Bt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[i - r]; r++);
    return (Zr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Jr() {
    return !0;
  }
  function Ks() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, i, a) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Jr
          : Ks),
        (this.isPropagationStopped = Ks),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Jr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Jr));
        },
        persist: function () {},
        isPersistent: Jr,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ni = qe(kn),
    rr = H({}, kn, { view: 0, detail: 0 }),
    ud = qe(rr),
    Si,
    ji,
    lr,
    br = H({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== lr &&
              (lr && e.type === "mousemove"
                ? ((Si = e.screenX - lr.screenX), (ji = e.screenY - lr.screenY))
                : (ji = Si = 0),
              (lr = e)),
            Si);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ji;
      },
    }),
    Ys = qe(br),
    cd = H({}, br, { dataTransfer: 0 }),
    dd = qe(cd),
    fd = H({}, rr, { relatedTarget: 0 }),
    Ei = qe(fd),
    pd = H({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    md = qe(pd),
    hd = H({}, kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vd = qe(hd),
    gd = H({}, kn, { data: 0 }),
    Xs = qe(gd),
    yd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    xd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function kd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = wd[e])
      ? !!t[e]
      : !1;
  }
  function Ci() {
    return kd;
  }
  var Nd = H({}, rr, {
      key: function (e) {
        if (e.key) {
          var t = yd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? xd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function (e) {
        return e.type === "keypress" ? qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Sd = qe(Nd),
    jd = H({}, br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gs = qe(jd),
    Ed = H({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    Cd = qe(Ed),
    Pd = H({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = qe(Pd),
    Rd = H({}, br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ld = qe(Rd),
    zd = [9, 13, 27, 32],
    Pi = j && "CompositionEvent" in window,
    ir = null;
  j && "documentMode" in document && (ir = document.documentMode);
  var Td = j && "TextEvent" in window && !ir,
    Zs = j && (!Pi || (ir && 8 < ir && 11 >= ir)),
    qs = " ",
    Js = !1;
  function bs(e, t) {
    switch (e) {
      case "keyup":
        return zd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ea(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function Md(e, t) {
    switch (e) {
      case "compositionend":
        return ea(t);
      case "keypress":
        return t.which !== 32 ? null : ((Js = !0), qs);
      case "textInput":
        return (e = t.data), e === qs && Js ? null : e;
      default:
        return null;
    }
  }
  function Od(e, t) {
    if (Nn)
      return e === "compositionend" || (!Pi && bs(e, t))
        ? ((e = Qs()), (Zr = ki = Bt = null), (Nn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Id = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Id[e.type] : t === "textarea";
  }
  function na(e, t, n, r) {
    Ns(r),
      (t = ll(t, "onChange")),
      0 < t.length &&
        ((n = new Ni("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var or = null,
    sr = null;
  function Dd(e) {
    wa(e, 0);
  }
  function el(e) {
    var t = Pn(e);
    if (cs(t)) return e;
  }
  function Fd(e, t) {
    if (e === "change") return t;
  }
  var ra = !1;
  if (j) {
    var _i;
    if (j) {
      var Ri = "oninput" in document;
      if (!Ri) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"),
          (Ri = typeof la.oninput == "function");
      }
      _i = Ri;
    } else _i = !1;
    ra = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function ia() {
    or && (or.detachEvent("onpropertychange", oa), (sr = or = null));
  }
  function oa(e) {
    if (e.propertyName === "value" && el(sr)) {
      var t = [];
      na(t, sr, e, ai(e)), Cs(Dd, t);
    }
  }
  function $d(e, t, n) {
    e === "focusin"
      ? (ia(), (or = t), (sr = n), or.attachEvent("onpropertychange", oa))
      : e === "focusout" && ia();
  }
  function Ud(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return el(sr);
  }
  function Ad(e, t) {
    if (e === "click") return el(t);
  }
  function Bd(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function Hd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ut = typeof Object.is == "function" ? Object.is : Hd;
  function ar(e, t) {
    if (ut(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !ut(e[l], t[l])) return !1;
    }
    return !0;
  }
  function sa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function aa(e, t) {
    var n = sa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = sa(n);
    }
  }
  function ua(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ua(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ca() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function Li(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Wd(e) {
    var t = ca(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ua(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Li(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = aa(n, i));
          var a = aa(n, r);
          l &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Vd = j && "documentMode" in document && 11 >= document.documentMode,
    Sn = null,
    zi = null,
    ur = null,
    Ti = !1;
  function da(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ti ||
      Sn == null ||
      Sn !== Fr(r) ||
      ((r = Sn),
      "selectionStart" in r && Li(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ur && ar(ur, r)) ||
        ((ur = r),
        (r = ll(zi, "onSelect")),
        0 < r.length &&
          ((t = new Ni("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Sn))));
  }
  function tl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var jn = {
      animationend: tl("Animation", "AnimationEnd"),
      animationiteration: tl("Animation", "AnimationIteration"),
      animationstart: tl("Animation", "AnimationStart"),
      transitionend: tl("Transition", "TransitionEnd"),
    },
    Mi = {},
    fa = {};
  j &&
    ((fa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    "TransitionEvent" in window || delete jn.transitionend.transition);
  function nl(e) {
    if (Mi[e]) return Mi[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fa) return (Mi[e] = t[n]);
    return e;
  }
  var pa = nl("animationend"),
    ma = nl("animationiteration"),
    ha = nl("animationstart"),
    va = nl("transitionend"),
    ga = new Map(),
    ya =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ht(e, t) {
    ga.set(e, t), v(t, [e]);
  }
  for (var Oi = 0; Oi < ya.length; Oi++) {
    var Ii = ya[Oi],
      Qd = Ii.toLowerCase(),
      Kd = Ii[0].toUpperCase() + Ii.slice(1);
    Ht(Qd, "on" + Kd);
  }
  Ht(pa, "onAnimationEnd"),
    Ht(ma, "onAnimationIteration"),
    Ht(ha, "onAnimationStart"),
    Ht("dblclick", "onDoubleClick"),
    Ht("focusin", "onFocus"),
    Ht("focusout", "onBlur"),
    Ht(va, "onTransitionEnd"),
    N("onMouseEnter", ["mouseout", "mouseover"]),
    N("onMouseLeave", ["mouseout", "mouseover"]),
    N("onPointerEnter", ["pointerout", "pointerover"]),
    N("onPointerLeave", ["pointerout", "pointerover"]),
    v(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    v(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    v(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    v(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    v(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Yd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(cr)
    );
  function xa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Qc(r, t, void 0, e), (e.currentTarget = null);
  }
  function wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var d = r[a],
              p = d.instance,
              k = d.currentTarget;
            if (((d = d.listener), p !== i && l.isPropagationStopped()))
              break e;
            xa(l, d, k), (i = p);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((d = r[a]),
              (p = d.instance),
              (k = d.currentTarget),
              (d = d.listener),
              p !== i && l.isPropagationStopped())
            )
              break e;
            xa(l, d, k), (i = p);
          }
      }
    }
    if (Ar) throw ((e = fi), (Ar = !1), (fi = null), e);
  }
  function fe(e, t) {
    var n = t[Wi];
    n === void 0 && (n = t[Wi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function Di(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function dr(e) {
    if (!e[rl]) {
      (e[rl] = !0),
        h.forEach(function (n) {
          n !== "selectionchange" && (Yd.has(n) || Di(n, !1, e), Di(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || ((t[rl] = !0), Di("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var l = sd;
        break;
      case 4:
        l = ad;
        break;
      default:
        l = xi;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !di ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Fi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var p = a.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = a.stateNode.containerInfo),
                p === l || (p.nodeType === 8 && p.parentNode === l))
              )
                return;
              a = a.return;
            }
          for (; d !== null; ) {
            if (((a = rn(d)), a === null)) return;
            if (((p = a.tag), p === 5 || p === 6)) {
              r = i = a;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Cs(function () {
      var k = i,
        _ = ai(n),
        L = [];
      e: {
        var C = ga.get(e);
        if (C !== void 0) {
          var U = Ni,
            W = e;
          switch (e) {
            case "keypress":
              if (qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Sd;
              break;
            case "focusin":
              (W = "focus"), (U = Ei);
              break;
            case "focusout":
              (W = "blur"), (U = Ei);
              break;
            case "beforeblur":
            case "afterblur":
              U = Ei;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Cd;
              break;
            case pa:
            case ma:
            case ha:
              U = md;
              break;
            case va:
              U = _d;
              break;
            case "scroll":
              U = ud;
              break;
            case "wheel":
              U = Ld;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = vd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Gs;
          }
          var Q = (t & 4) !== 0,
            Ee = !Q && e === "scroll",
            y = Q ? (C !== null ? C + "Capture" : null) : C;
          Q = [];
          for (var m = k, x; m !== null; ) {
            x = m;
            var M = x.stateNode;
            if (
              (x.tag === 5 &&
                M !== null &&
                ((x = M),
                y !== null &&
                  ((M = Yn(m, y)), M != null && Q.push(fr(m, M, x)))),
              Ee)
            )
              break;
            m = m.return;
          }
          0 < Q.length &&
            ((C = new U(C, W, null, n, _)), L.push({ event: C, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            C &&
              n !== si &&
              (W = n.relatedTarget || n.fromElement) &&
              (rn(W) || W[Et]))
          )
            break e;
          if (
            (U || C) &&
            ((C =
              _.window === _
                ? _
                : (C = _.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            U
              ? ((W = n.relatedTarget || n.toElement),
                (U = k),
                (W = W ? rn(W) : null),
                W !== null &&
                  ((Ee = nn(W)), W !== Ee || (W.tag !== 5 && W.tag !== 6)) &&
                  (W = null))
              : ((U = null), (W = k)),
            U !== W)
          ) {
            if (
              ((Q = Ys),
              (M = "onMouseLeave"),
              (y = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Gs),
                (M = "onPointerLeave"),
                (y = "onPointerEnter"),
                (m = "pointer")),
              (Ee = U == null ? C : Pn(U)),
              (x = W == null ? C : Pn(W)),
              (C = new Q(M, m + "leave", U, n, _)),
              (C.target = Ee),
              (C.relatedTarget = x),
              (M = null),
              rn(_) === k &&
                ((Q = new Q(y, m + "enter", W, n, _)),
                (Q.target = x),
                (Q.relatedTarget = Ee),
                (M = Q)),
              (Ee = M),
              U && W)
            )
              t: {
                for (Q = U, y = W, m = 0, x = Q; x; x = En(x)) m++;
                for (x = 0, M = y; M; M = En(M)) x++;
                for (; 0 < m - x; ) (Q = En(Q)), m--;
                for (; 0 < x - m; ) (y = En(y)), x--;
                for (; m--; ) {
                  if (Q === y || (y !== null && Q === y.alternate)) break t;
                  (Q = En(Q)), (y = En(y));
                }
                Q = null;
              }
            else Q = null;
            U !== null && Na(L, C, U, Q, !1),
              W !== null && Ee !== null && Na(L, Ee, W, Q, !0);
          }
        }
        e: {
          if (
            ((C = k ? Pn(k) : window),
            (U = C.nodeName && C.nodeName.toLowerCase()),
            U === "select" || (U === "input" && C.type === "file"))
          )
            var K = Fd;
          else if (ta(C))
            if (ra) K = Bd;
            else {
              K = Ud;
              var Y = $d;
            }
          else
            (U = C.nodeName) &&
              U.toLowerCase() === "input" &&
              (C.type === "checkbox" || C.type === "radio") &&
              (K = Ad);
          if (K && (K = K(e, k))) {
            na(L, K, n, _);
            break e;
          }
          Y && Y(e, C, k),
            e === "focusout" &&
              (Y = C._wrapperState) &&
              Y.controlled &&
              C.type === "number" &&
              ni(C, "number", C.value);
        }
        switch (((Y = k ? Pn(k) : window), e)) {
          case "focusin":
            (ta(Y) || Y.contentEditable === "true") &&
              ((Sn = Y), (zi = k), (ur = null));
            break;
          case "focusout":
            ur = zi = Sn = null;
            break;
          case "mousedown":
            Ti = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ti = !1), da(L, n, _);
            break;
          case "selectionchange":
            if (Vd) break;
          case "keydown":
          case "keyup":
            da(L, n, _);
        }
        var X;
        if (Pi)
          e: {
            switch (e) {
              case "compositionstart":
                var q = "onCompositionStart";
                break e;
              case "compositionend":
                q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break e;
            }
            q = void 0;
          }
        else
          Nn
            ? bs(e, n) && (q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (q = "onCompositionStart");
        q &&
          (Zs &&
            n.locale !== "ko" &&
            (Nn || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && Nn && (X = Qs())
              : ((Bt = _),
                (ki = "value" in Bt ? Bt.value : Bt.textContent),
                (Nn = !0))),
          (Y = ll(k, q)),
          0 < Y.length &&
            ((q = new Xs(q, e, null, n, _)),
            L.push({ event: q, listeners: Y }),
            X ? (q.data = X) : ((X = ea(n)), X !== null && (q.data = X)))),
          (X = Td ? Md(e, n) : Od(e, n)) &&
            ((k = ll(k, "onBeforeInput")),
            0 < k.length &&
              ((_ = new Xs("onBeforeInput", "beforeinput", null, n, _)),
              L.push({ event: _, listeners: k }),
              (_.data = X)));
      }
      wa(L, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Yn(e, n)),
        i != null && r.unshift(fr(e, i, l)),
        (i = Yn(e, t)),
        i != null && r.push(fr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function En(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Na(e, t, n, r, l) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n,
        p = d.alternate,
        k = d.stateNode;
      if (p !== null && p === r) break;
      d.tag === 5 &&
        k !== null &&
        ((d = k),
        l
          ? ((p = Yn(n, i)), p != null && a.unshift(fr(n, p, d)))
          : l || ((p = Yn(n, i)), p != null && a.push(fr(n, p, d)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Xd = /\r\n?/g,
    Gd = /\u0000|\uFFFD/g;
  function Sa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xd,
        `
`
      )
      .replace(Gd, "");
  }
  function il(e, t, n) {
    if (((t = Sa(t)), Sa(e) !== t && n)) throw Error(u(425));
  }
  function ol() {}
  var $i = null,
    Ui = null;
  function Ai(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
    Zd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ja = typeof Promise == "function" ? Promise : void 0,
    qd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ja < "u"
        ? function (e) {
            return ja.resolve(null).then(e).catch(Jd);
          }
        : Bi;
  function Jd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Hi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), nr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    nr(t);
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ea(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + Cn,
    pr = "__reactProps$" + Cn,
    Et = "__reactContainer$" + Cn,
    Wi = "__reactEvents$" + Cn,
    bd = "__reactListeners$" + Cn,
    ef = "__reactHandles$" + Cn;
  function rn(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Et] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ea(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = Ea(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function mr(e) {
    return (
      (e = e[xt] || e[Et]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Pn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function sl(e) {
    return e[pr] || null;
  }
  var Vi = [],
    _n = -1;
  function Vt(e) {
    return { current: e };
  }
  function pe(e) {
    0 > _n || ((e.current = Vi[_n]), (Vi[_n] = null), _n--);
  }
  function de(e, t) {
    _n++, (Vi[_n] = e.current), (e.current = t);
  }
  var Qt = {},
    De = Vt(Qt),
    We = Vt(!1),
    ln = Qt;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    pe(We), pe(De);
  }
  function Ca(e, t, n) {
    if (De.current !== Qt) throw Error(u(168));
    de(De, t), de(We, n);
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ce(e) || "Unknown", l));
    return H({}, n, r);
  }
  function ul(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Qt),
      (ln = De.current),
      de(De, e),
      de(We, We.current),
      !0
    );
  }
  function _a(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = Pa(e, t, ln)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        pe(We),
        pe(De),
        de(De, e))
      : pe(We),
      de(We, n);
  }
  var Ct = null,
    cl = !1,
    Qi = !1;
  function Ra(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  function tf(e) {
    (cl = !0), Ra(e);
  }
  function Kt() {
    if (!Qi && Ct !== null) {
      Qi = !0;
      var e = 0,
        t = se;
      try {
        var n = Ct;
        for (se = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ct = null), (cl = !1);
      } catch (l) {
        throw (Ct !== null && (Ct = Ct.slice(e + 1)), zs(pi, Kt), l);
      } finally {
        (se = t), (Qi = !1);
      }
    }
    return null;
  }
  var Ln = [],
    zn = 0,
    dl = null,
    fl = 0,
    tt = [],
    nt = 0,
    on = null,
    Pt = 1,
    _t = "";
  function sn(e, t) {
    (Ln[zn++] = fl), (Ln[zn++] = dl), (dl = e), (fl = t);
  }
  function La(e, t, n) {
    (tt[nt++] = Pt), (tt[nt++] = _t), (tt[nt++] = on), (on = e);
    var r = Pt;
    e = _t;
    var l = 32 - at(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - at(t) + l;
    if (30 < i) {
      var a = l - (l % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (l -= a),
        (Pt = (1 << (32 - at(t) + l)) | (n << l) | r),
        (_t = i + e);
    } else (Pt = (1 << i) | (n << l) | r), (_t = e);
  }
  function Ki(e) {
    e.return !== null && (sn(e, 1), La(e, 1, 0));
  }
  function Yi(e) {
    for (; e === dl; )
      (dl = Ln[--zn]), (Ln[zn] = null), (fl = Ln[--zn]), (Ln[zn] = null);
    for (; e === on; )
      (on = tt[--nt]),
        (tt[nt] = null),
        (_t = tt[--nt]),
        (tt[nt] = null),
        (Pt = tt[--nt]),
        (tt[nt] = null);
  }
  var Je = null,
    be = null,
    he = !1,
    ct = null;
  function za(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ta(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Je = e), (be = Wt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Je = e), (be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = on !== null ? { id: Pt, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Je = e),
              (be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gi(e) {
    if (he) {
      var t = be;
      if (t) {
        var n = t;
        if (!Ta(e, t)) {
          if (Xi(e)) throw Error(u(418));
          t = Wt(n.nextSibling);
          var r = Je;
          t && Ta(e, t)
            ? za(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (he = !1), (Je = e));
        }
      } else {
        if (Xi(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), (he = !1), (Je = e);
      }
    }
  }
  function Ma(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Je = e;
  }
  function pl(e) {
    if (e !== Je) return !1;
    if (!he) return Ma(e), (he = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ai(e.type, e.memoizedProps))),
      t && (t = be))
    ) {
      if (Xi(e)) throw (Oa(), Error(u(418)));
      for (; t; ) za(e, t), (t = Wt(t.nextSibling));
    }
    if ((Ma(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = Wt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = Je ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    for (var e = be; e; ) e = Wt(e.nextSibling);
  }
  function Tn() {
    (be = Je = null), (he = !1);
  }
  function Zi(e) {
    ct === null ? (ct = [e]) : ct.push(e);
  }
  var nf = b.ReactCurrentBatchConfig;
  function hr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var d = l.refs;
              a === null ? delete d[i] : (d[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ia(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Da(e) {
    function t(y, m) {
      if (e) {
        var x = y.deletions;
        x === null ? ((y.deletions = [m]), (y.flags |= 16)) : x.push(m);
      }
    }
    function n(y, m) {
      if (!e) return null;
      for (; m !== null; ) t(y, m), (m = m.sibling);
      return null;
    }
    function r(y, m) {
      for (y = new Map(); m !== null; )
        m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling);
      return y;
    }
    function l(y, m) {
      return (y = en(y, m)), (y.index = 0), (y.sibling = null), y;
    }
    function i(y, m, x) {
      return (
        (y.index = x),
        e
          ? ((x = y.alternate),
            x !== null
              ? ((x = x.index), x < m ? ((y.flags |= 2), m) : x)
              : ((y.flags |= 2), m))
          : ((y.flags |= 1048576), m)
      );
    }
    function a(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function d(y, m, x, M) {
      return m === null || m.tag !== 6
        ? ((m = Ho(x, y.mode, M)), (m.return = y), m)
        : ((m = l(m, x)), (m.return = y), m);
    }
    function p(y, m, x, M) {
      var K = x.type;
      return K === ve
        ? _(y, m, x.props.children, M, x.key)
        : m !== null &&
          (m.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === He &&
              Ia(K) === m.type))
        ? ((M = l(m, x.props)), (M.ref = hr(y, m, x)), (M.return = y), M)
        : ((M = $l(x.type, x.key, x.props, null, y.mode, M)),
          (M.ref = hr(y, m, x)),
          (M.return = y),
          M);
    }
    function k(y, m, x, M) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== x.containerInfo ||
        m.stateNode.implementation !== x.implementation
        ? ((m = Wo(x, y.mode, M)), (m.return = y), m)
        : ((m = l(m, x.children || [])), (m.return = y), m);
    }
    function _(y, m, x, M, K) {
      return m === null || m.tag !== 7
        ? ((m = hn(x, y.mode, M, K)), (m.return = y), m)
        : ((m = l(m, x)), (m.return = y), m);
    }
    function L(y, m, x) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = Ho("" + m, y.mode, x)), (m.return = y), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ue:
            return (
              (x = $l(m.type, m.key, m.props, null, y.mode, x)),
              (x.ref = hr(y, null, m)),
              (x.return = y),
              x
            );
          case we:
            return (m = Wo(m, y.mode, x)), (m.return = y), m;
          case He:
            var M = m._init;
            return L(y, M(m._payload), x);
        }
        if (Vn(m) || Z(m))
          return (m = hn(m, y.mode, x, null)), (m.return = y), m;
        ml(y, m);
      }
      return null;
    }
    function C(y, m, x, M) {
      var K = m !== null ? m.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return K !== null ? null : d(y, m, "" + x, M);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ue:
            return x.key === K ? p(y, m, x, M) : null;
          case we:
            return x.key === K ? k(y, m, x, M) : null;
          case He:
            return (K = x._init), C(y, m, K(x._payload), M);
        }
        if (Vn(x) || Z(x)) return K !== null ? null : _(y, m, x, M, null);
        ml(y, x);
      }
      return null;
    }
    function U(y, m, x, M, K) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return (y = y.get(x) || null), d(m, y, "" + M, K);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ue:
            return (
              (y = y.get(M.key === null ? x : M.key) || null), p(m, y, M, K)
            );
          case we:
            return (
              (y = y.get(M.key === null ? x : M.key) || null), k(m, y, M, K)
            );
          case He:
            var Y = M._init;
            return U(y, m, x, Y(M._payload), K);
        }
        if (Vn(M) || Z(M)) return (y = y.get(x) || null), _(m, y, M, K, null);
        ml(m, M);
      }
      return null;
    }
    function W(y, m, x, M) {
      for (
        var K = null, Y = null, X = m, q = (m = 0), Me = null;
        X !== null && q < x.length;
        q++
      ) {
        X.index > q ? ((Me = X), (X = null)) : (Me = X.sibling);
        var ie = C(y, X, x[q], M);
        if (ie === null) {
          X === null && (X = Me);
          break;
        }
        e && X && ie.alternate === null && t(y, X),
          (m = i(ie, m, q)),
          Y === null ? (K = ie) : (Y.sibling = ie),
          (Y = ie),
          (X = Me);
      }
      if (q === x.length) return n(y, X), he && sn(y, q), K;
      if (X === null) {
        for (; q < x.length; q++)
          (X = L(y, x[q], M)),
            X !== null &&
              ((m = i(X, m, q)),
              Y === null ? (K = X) : (Y.sibling = X),
              (Y = X));
        return he && sn(y, q), K;
      }
      for (X = r(y, X); q < x.length; q++)
        (Me = U(X, y, q, x[q], M)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              X.delete(Me.key === null ? q : Me.key),
            (m = i(Me, m, q)),
            Y === null ? (K = Me) : (Y.sibling = Me),
            (Y = Me));
      return (
        e &&
          X.forEach(function (tn) {
            return t(y, tn);
          }),
        he && sn(y, q),
        K
      );
    }
    function Q(y, m, x, M) {
      var K = Z(x);
      if (typeof K != "function") throw Error(u(150));
      if (((x = K.call(x)), x == null)) throw Error(u(151));
      for (
        var Y = (K = null), X = m, q = (m = 0), Me = null, ie = x.next();
        X !== null && !ie.done;
        q++, ie = x.next()
      ) {
        X.index > q ? ((Me = X), (X = null)) : (Me = X.sibling);
        var tn = C(y, X, ie.value, M);
        if (tn === null) {
          X === null && (X = Me);
          break;
        }
        e && X && tn.alternate === null && t(y, X),
          (m = i(tn, m, q)),
          Y === null ? (K = tn) : (Y.sibling = tn),
          (Y = tn),
          (X = Me);
      }
      if (ie.done) return n(y, X), he && sn(y, q), K;
      if (X === null) {
        for (; !ie.done; q++, ie = x.next())
          (ie = L(y, ie.value, M)),
            ie !== null &&
              ((m = i(ie, m, q)),
              Y === null ? (K = ie) : (Y.sibling = ie),
              (Y = ie));
        return he && sn(y, q), K;
      }
      for (X = r(y, X); !ie.done; q++, ie = x.next())
        (ie = U(X, y, q, ie.value, M)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              X.delete(ie.key === null ? q : ie.key),
            (m = i(ie, m, q)),
            Y === null ? (K = ie) : (Y.sibling = ie),
            (Y = ie));
      return (
        e &&
          X.forEach(function (Df) {
            return t(y, Df);
          }),
        he && sn(y, q),
        K
      );
    }
    function Ee(y, m, x, M) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === ve &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case ue:
            e: {
              for (var K = x.key, Y = m; Y !== null; ) {
                if (Y.key === K) {
                  if (((K = x.type), K === ve)) {
                    if (Y.tag === 7) {
                      n(y, Y.sibling),
                        (m = l(Y, x.props.children)),
                        (m.return = y),
                        (y = m);
                      break e;
                    }
                  } else if (
                    Y.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === He &&
                      Ia(K) === Y.type)
                  ) {
                    n(y, Y.sibling),
                      (m = l(Y, x.props)),
                      (m.ref = hr(y, Y, x)),
                      (m.return = y),
                      (y = m);
                    break e;
                  }
                  n(y, Y);
                  break;
                } else t(y, Y);
                Y = Y.sibling;
              }
              x.type === ve
                ? ((m = hn(x.props.children, y.mode, M, x.key)),
                  (m.return = y),
                  (y = m))
                : ((M = $l(x.type, x.key, x.props, null, y.mode, M)),
                  (M.ref = hr(y, m, x)),
                  (M.return = y),
                  (y = M));
            }
            return a(y);
          case we:
            e: {
              for (Y = x.key; m !== null; ) {
                if (m.key === Y)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === x.containerInfo &&
                    m.stateNode.implementation === x.implementation
                  ) {
                    n(y, m.sibling),
                      (m = l(m, x.children || [])),
                      (m.return = y),
                      (y = m);
                    break e;
                  } else {
                    n(y, m);
                    break;
                  }
                else t(y, m);
                m = m.sibling;
              }
              (m = Wo(x, y.mode, M)), (m.return = y), (y = m);
            }
            return a(y);
          case He:
            return (Y = x._init), Ee(y, m, Y(x._payload), M);
        }
        if (Vn(x)) return W(y, m, x, M);
        if (Z(x)) return Q(y, m, x, M);
        ml(y, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          m !== null && m.tag === 6
            ? (n(y, m.sibling), (m = l(m, x)), (m.return = y), (y = m))
            : (n(y, m), (m = Ho(x, y.mode, M)), (m.return = y), (y = m)),
          a(y))
        : n(y, m);
    }
    return Ee;
  }
  var Mn = Da(!0),
    Fa = Da(!1),
    hl = Vt(null),
    vl = null,
    On = null,
    qi = null;
  function Ji() {
    qi = On = vl = null;
  }
  function bi(e) {
    var t = hl.current;
    pe(hl), (e._currentValue = t);
  }
  function eo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function In(e, t) {
    (vl = e),
      (qi = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Qe = !0), (e.firstContext = null));
  }
  function rt(e) {
    var t = e._currentValue;
    if (qi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (vl === null) throw Error(u(308));
        (On = e), (vl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var an = null;
  function to(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  function $a(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), to(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function no(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ua(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ne & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), to(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function gl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
    }
  }
  function Aa(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = a) : (i = i.next = a), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function yl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var i = l.firstBaseUpdate,
      a = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var p = d,
        k = p.next;
      (p.next = null), a === null ? (i = k) : (a.next = k), (a = p);
      var _ = e.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (d = _.lastBaseUpdate),
        d !== a &&
          (d === null ? (_.firstBaseUpdate = k) : (d.next = k),
          (_.lastBaseUpdate = p)));
    }
    if (i !== null) {
      var L = l.baseState;
      (a = 0), (_ = k = p = null), (d = i);
      do {
        var C = d.lane,
          U = d.eventTime;
        if ((r & C) === C) {
          _ !== null &&
            (_ = _.next =
              {
                eventTime: U,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var W = e,
              Q = d;
            switch (((C = t), (U = n), Q.tag)) {
              case 1:
                if (((W = Q.payload), typeof W == "function")) {
                  L = W.call(U, L, C);
                  break e;
                }
                L = W;
                break e;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = Q.payload),
                  (C = typeof W == "function" ? W.call(U, L, C) : W),
                  C == null)
                )
                  break e;
                L = H({}, L, C);
                break e;
              case 2:
                Yt = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (C = l.effects),
            C === null ? (l.effects = [d]) : C.push(d));
        } else
          (U = {
            eventTime: U,
            lane: C,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            _ === null ? ((k = _ = U), (p = L)) : (_ = _.next = U),
            (a |= C);
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          (C = d),
            (d = C.next),
            (C.next = null),
            (l.lastBaseUpdate = C),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (_ === null && (p = L),
        (l.baseState = p),
        (l.firstBaseUpdate = k),
        (l.lastBaseUpdate = _),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (a |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (dn |= a), (e.lanes = a), (e.memoizedState = L);
    }
  }
  function Ba(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var vr = {},
    wt = Vt(vr),
    gr = Vt(vr),
    yr = Vt(vr);
  function un(e) {
    if (e === vr) throw Error(u(174));
    return e;
  }
  function ro(e, t) {
    switch ((de(yr, t), de(gr, e), de(wt, vr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = li(t, e));
    }
    pe(wt), de(wt, t);
  }
  function Dn() {
    pe(wt), pe(gr), pe(yr);
  }
  function Ha(e) {
    un(yr.current);
    var t = un(wt.current),
      n = li(t, e.type);
    t !== n && (de(gr, e), de(wt, n));
  }
  function lo(e) {
    gr.current === e && (pe(wt), pe(gr));
  }
  var ge = Vt(0);
  function xl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var io = [];
  function oo() {
    for (var e = 0; e < io.length; e++)
      io[e]._workInProgressVersionPrimary = null;
    io.length = 0;
  }
  var wl = b.ReactCurrentDispatcher,
    so = b.ReactCurrentBatchConfig,
    cn = 0,
    ye = null,
    _e = null,
    ze = null,
    kl = !1,
    xr = !1,
    wr = 0,
    rf = 0;
  function Fe() {
    throw Error(u(321));
  }
  function ao(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ut(e[n], t[n])) return !1;
    return !0;
  }
  function uo(e, t, n, r, l, i) {
    if (
      ((cn = i),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (wl.current = e === null || e.memoizedState === null ? af : uf),
      (e = n(r, l)),
      xr)
    ) {
      i = 0;
      do {
        if (((xr = !1), (wr = 0), 25 <= i)) throw Error(u(301));
        (i += 1),
          (ze = _e = null),
          (t.updateQueue = null),
          (wl.current = cf),
          (e = n(r, l));
      } while (xr);
    }
    if (
      ((wl.current = jl),
      (t = _e !== null && _e.next !== null),
      (cn = 0),
      (ze = _e = ye = null),
      (kl = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function co() {
    var e = wr !== 0;
    return (wr = 0), e;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ze === null ? (ye.memoizedState = ze = e) : (ze = ze.next = e), ze;
  }
  function lt() {
    if (_e === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = ze === null ? ye.memoizedState : ze.next;
    if (t !== null) (ze = t), (_e = e);
    else {
      if (e === null) throw Error(u(310));
      (_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        ze === null ? (ye.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function kr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fo(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = _e,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var a = l.next;
        (l.next = i.next), (i.next = a);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var d = (a = null),
        p = null,
        k = i;
      do {
        var _ = k.lane;
        if ((cn & _) === _)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null,
              }),
            (r = k.hasEagerState ? k.eagerState : e(r, k.action));
        else {
          var L = {
            lane: _,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          };
          p === null ? ((d = p = L), (a = r)) : (p = p.next = L),
            (ye.lanes |= _),
            (dn |= _);
        }
        k = k.next;
      } while (k !== null && k !== i);
      p === null ? (a = r) : (p.next = d),
        ut(r, t.memoizedState) || (Qe = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (ye.lanes |= i), (dn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function po(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = (l = l.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== l);
      ut(i, t.memoizedState) || (Qe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Wa() {}
  function Va(e, t) {
    var n = ye,
      r = lt(),
      l = t(),
      i = !ut(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Qe = !0)),
      (r = r.queue),
      mo(Ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Nr(9, Ka.bind(null, n, r, l, t), void 0, null),
        Te === null)
      )
        throw Error(u(349));
      (cn & 30) !== 0 || Qa(n, t, l);
    }
    return l;
  }
  function Qa(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ka(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Xa(t) && Ga(e);
  }
  function Ya(e, t, n) {
    return n(function () {
      Xa(t) && Ga(e);
    });
  }
  function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ut(e, n);
    } catch {
      return !0;
    }
  }
  function Ga(e) {
    var t = Rt(e, 1);
    t !== null && mt(t, e, 1, -1);
  }
  function Za(e) {
    var t = kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = sf.bind(null, ye, e)),
      [t.memoizedState, e]
    );
  }
  function Nr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qa() {
    return lt().memoizedState;
  }
  function Nl(e, t, n, r) {
    var l = kt();
    (ye.flags |= e),
      (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Sl(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (_e !== null) {
      var a = _e.memoizedState;
      if (((i = a.destroy), r !== null && ao(r, a.deps))) {
        l.memoizedState = Nr(t, n, i, r);
        return;
      }
    }
    (ye.flags |= e), (l.memoizedState = Nr(1 | t, n, i, r));
  }
  function Ja(e, t) {
    return Nl(8390656, 8, e, t);
  }
  function mo(e, t) {
    return Sl(2048, 8, e, t);
  }
  function ba(e, t) {
    return Sl(4, 2, e, t);
  }
  function eu(e, t) {
    return Sl(4, 4, e, t);
  }
  function tu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function nu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Sl(4, 4, tu.bind(null, t, e), n)
    );
  }
  function ho() {}
  function ru(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ao(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function lu(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ao(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function iu(e, t, n) {
    return (cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n))
      : (ut(n, t) ||
          ((n = Is()), (ye.lanes |= n), (dn |= n), (e.baseState = !0)),
        t);
  }
  function lf(e, t) {
    var n = se;
    (se = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = so.transition;
    so.transition = {};
    try {
      e(!1), t();
    } finally {
      (se = n), (so.transition = r);
    }
  }
  function ou() {
    return lt().memoizedState;
  }
  function of(e, t, n) {
    var r = Jt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      su(e))
    )
      au(t, n);
    else if (((n = $a(e, t, n, r)), n !== null)) {
      var l = Be();
      mt(n, e, r, l), uu(n, t, r);
    }
  }
  function sf(e, t, n) {
    var r = Jt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (su(e)) au(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var a = t.lastRenderedState,
            d = i(a, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), ut(d, a))) {
            var p = t.interleaved;
            p === null
              ? ((l.next = l), to(t))
              : ((l.next = p.next), (p.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = $a(e, t, l, r)),
        n !== null && ((l = Be()), mt(n, e, r, l), uu(n, t, r));
    }
  }
  function su(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function au(e, t) {
    xr = kl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function uu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
    }
  }
  var jl = {
      readContext: rt,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    af = {
      readContext: rt,
      useCallback: function (e, t) {
        return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: rt,
      useEffect: Ja,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Nl(4194308, 4, tu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Nl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Nl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = of.bind(null, ye, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = kt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Za,
      useDebugValue: ho,
      useDeferredValue: function (e) {
        return (kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Za(!1),
          t = e[0];
        return (e = lf.bind(null, e[1])), (kt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ye,
          l = kt();
        if (he) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), Te === null)) throw Error(u(349));
          (cn & 30) !== 0 || Qa(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Ja(Ya.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Nr(9, Ka.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = kt(),
          t = Te.identifierPrefix;
        if (he) {
          var n = _t,
            r = Pt;
          (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = wr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = rf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: rt,
      useCallback: ru,
      useContext: rt,
      useEffect: mo,
      useImperativeHandle: nu,
      useInsertionEffect: ba,
      useLayoutEffect: eu,
      useMemo: lu,
      useReducer: fo,
      useRef: qa,
      useState: function () {
        return fo(kr);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var t = lt();
        return iu(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = fo(kr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wa,
      useSyncExternalStore: Va,
      useId: ou,
      unstable_isNewReconciler: !1,
    },
    cf = {
      readContext: rt,
      useCallback: ru,
      useContext: rt,
      useEffect: mo,
      useImperativeHandle: nu,
      useInsertionEffect: ba,
      useLayoutEffect: eu,
      useMemo: lu,
      useReducer: po,
      useRef: qa,
      useState: function () {
        return po(kr);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var t = lt();
        return _e === null ? (t.memoizedState = e) : iu(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = po(kr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Wa,
      useSyncExternalStore: Va,
      useId: ou,
      unstable_isNewReconciler: !1,
    };
  function dt(e, t) {
    if (e && e.defaultProps) {
      (t = H({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : H({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var El = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Jt(e),
        i = Lt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Xt(e, i, l)),
        t !== null && (mt(t, e, l, r), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Jt(e),
        i = Lt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Xt(e, i, l)),
        t !== null && (mt(t, e, l, r), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Be(),
        r = Jt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (mt(t, e, r, n), gl(t, e, r));
    },
  };
  function cu(e, t, n, r, l, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ar(n, r) || !ar(l, i)
        : !0
    );
  }
  function du(e, t, n) {
    var r = !1,
      l = Qt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = rt(i))
        : ((l = Ve(t) ? ln : De.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : Qt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = El),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function fu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && El.enqueueReplaceState(t, t.state, null);
  }
  function go(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), no(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = rt(i))
      : ((i = Ve(t) ? ln : De.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (vo(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && El.enqueueReplaceState(l, l.state, null),
        yl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += re(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function yo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function xo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function pu(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Tl || ((Tl = !0), (Oo = r)), xo(e, t);
      }),
      n
    );
  }
  function mu(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          xo(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          xo(e, t),
            typeof r != "function" &&
              (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function hu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new df();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
  }
  function vu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function gu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var ff = b.ReactCurrentOwner,
    Qe = !1;
  function Ae(e, t, n, r) {
    t.child = e === null ? Fa(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function yu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      In(t, l),
      (r = uo(e, t, n, r, i, l)),
      (n = co()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (he && n && Ki(t), (t.flags |= 1), Ae(e, t, r, l), t.child)
    );
  }
  function xu(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Bo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), wu(e, t, i, r, l))
        : ((e = $l(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ar), n(a, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = en(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wu(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ar(i, r) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return wo(e, t, n, r, l);
  }
  function ku(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(Un, et),
          (et |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(Un, et),
            (et |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          de(Un, et),
          (et |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Un, et),
        (et |= r);
    return Ae(e, t, l, n), t.child;
  }
  function Nu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wo(e, t, n, r, l) {
    var i = Ve(n) ? ln : De.current;
    return (
      (i = Rn(t, i)),
      In(t, l),
      (n = uo(e, t, n, r, i, l)),
      (r = co()),
      e !== null && !Qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (he && r && Ki(t), (t.flags |= 1), Ae(e, t, n, l), t.child)
    );
  }
  function Su(e, t, n, r, l) {
    if (Ve(n)) {
      var i = !0;
      ul(t);
    } else i = !1;
    if ((In(t, l), t.stateNode === null))
      Pl(e, t), du(t, n, r), go(t, n, r, l), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        d = t.memoizedProps;
      a.props = d;
      var p = a.context,
        k = n.contextType;
      typeof k == "object" && k !== null
        ? (k = rt(k))
        : ((k = Ve(n) ? ln : De.current), (k = Rn(t, k)));
      var _ = n.getDerivedStateFromProps,
        L =
          typeof _ == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== r || p !== k) && fu(t, a, r, k)),
        (Yt = !1);
      var C = t.memoizedState;
      (a.state = C),
        yl(t, r, a, l),
        (p = t.memoizedState),
        d !== r || C !== p || We.current || Yt
          ? (typeof _ == "function" && (vo(t, n, _, r), (p = t.memoizedState)),
            (d = Yt || cu(t, n, d, r, C, p, k))
              ? (L ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = k),
            (r = d))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Ua(e, t),
        (d = t.memoizedProps),
        (k = t.type === t.elementType ? d : dt(t.type, d)),
        (a.props = k),
        (L = t.pendingProps),
        (C = a.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = rt(p))
          : ((p = Ve(n) ? ln : De.current), (p = Rn(t, p)));
      var U = n.getDerivedStateFromProps;
      (_ =
        typeof U == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== L || C !== p) && fu(t, a, r, p)),
        (Yt = !1),
        (C = t.memoizedState),
        (a.state = C),
        yl(t, r, a, l);
      var W = t.memoizedState;
      d !== L || C !== W || We.current || Yt
        ? (typeof U == "function" && (vo(t, n, U, r), (W = t.memoizedState)),
          (k = Yt || cu(t, n, k, r, C, W, p) || !1)
            ? (_ ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, W, p),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, W, p)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = W)),
          (a.props = r),
          (a.state = W),
          (a.context = p),
          (r = k))
        : (typeof a.componentDidUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ko(e, t, n, r, i, l);
  }
  function ko(e, t, n, r, l, i) {
    Nu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return l && _a(t, n, !1), zt(e, t, i);
    (r = t.stateNode), (ff.current = t);
    var d =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Mn(t, e.child, null, i)), (t.child = Mn(t, null, d, i)))
        : Ae(e, t, d, i),
      (t.memoizedState = r.state),
      l && _a(t, n, !0),
      t.child
    );
  }
  function ju(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ca(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ca(e, t.context, !1),
      ro(e, t.containerInfo);
  }
  function Eu(e, t, n, r, l) {
    return Tn(), Zi(l), (t.flags |= 256), Ae(e, t, n, r), t.child;
  }
  var No = { dehydrated: null, treeContext: null, retryLane: 0 };
  function So(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cu(e, t, n) {
    var r = t.pendingProps,
      l = ge.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      d;
    if (
      ((d = a) ||
        (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      de(ge, l & 1),
      e === null)
    )
      return (
        Gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((a = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (a = { mode: "hidden", children: a }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = a))
                  : (i = Ul(a, r, 0, null)),
                (e = hn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = So(n)),
                (t.memoizedState = No),
                e)
              : jo(t, a))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return pf(e, t, a, r, d, l, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (l = e.child), (d = l.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        (a & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = en(l, p)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (i = en(d, i)) : ((i = hn(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? So(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = No),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = en(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function jo(e, t) {
    return (
      (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cl(e, t, n, r) {
    return (
      r !== null && Zi(r),
      Mn(t, e.child, null, n),
      (e = jo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function pf(e, t, n, r, l, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = yo(Error(u(422)))), Cl(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ul({ mode: "visible", children: r.children }, l, 0, null)),
          (i = hn(i, l, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          (t.mode & 1) !== 0 && Mn(t, e.child, null, a),
          (t.child.memoizedState = So(a)),
          (t.memoizedState = No),
          i);
    if ((t.mode & 1) === 0) return Cl(e, t, a, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d), (i = Error(u(419))), (r = yo(i, r, void 0)), Cl(e, t, a, r)
      );
    }
    if (((d = (a & e.childLanes) !== 0), Qe || d)) {
      if (((r = Te), r !== null)) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Rt(e, l), mt(r, e, l, -1));
      }
      return Ao(), (r = yo(Error(u(421)))), Cl(e, t, a, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (be = Wt(l.nextSibling)),
        (Je = t),
        (he = !0),
        (ct = null),
        e !== null &&
          ((tt[nt++] = Pt),
          (tt[nt++] = _t),
          (tt[nt++] = on),
          (Pt = e.id),
          (_t = e.overflow),
          (on = t)),
        (t = jo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Pu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), eo(e.return, t, n);
  }
  function Eo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function _u(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ae(e, t, r.children, n), (r = ge.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Pu(e, n, t);
          else if (e.tag === 19) Pu(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((de(ge, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && xl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Eo(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && xl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Eo(t, !0, n, null, i);
          break;
        case "together":
          Eo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function mf(e, t, n) {
    switch (t.tag) {
      case 3:
        ju(t), Tn();
        break;
      case 5:
        Ha(t);
        break;
      case 1:
        Ve(t.type) && ul(t);
        break;
      case 4:
        ro(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        de(hl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(ge, ge.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Cu(e, t, n)
            : (de(ge, ge.current & 1),
              (e = zt(e, t, n)),
              e !== null ? e.sibling : null);
        de(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return _u(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          de(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ku(e, t, n);
    }
    return zt(e, t, n);
  }
  var Ru, Co, Lu, zu;
  (Ru = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Co = function () {}),
    (Lu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), un(wt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = ei(e, l)), (r = ei(e, r)), (i = []);
            break;
          case "select":
            (l = H({}, l, { value: void 0 })),
              (r = H({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = ri(e, l)), (r = ri(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ol);
        }
        ii(n, r);
        var a;
        n = null;
        for (k in l)
          if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null)
            if (k === "style") {
              var d = l[k];
              for (a in d) d.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              k !== "dangerouslySetInnerHTML" &&
                k !== "children" &&
                k !== "suppressContentEditableWarning" &&
                k !== "suppressHydrationWarning" &&
                k !== "autoFocus" &&
                (f.hasOwnProperty(k)
                  ? i || (i = [])
                  : (i = i || []).push(k, null));
        for (k in r) {
          var p = r[k];
          if (
            ((d = l != null ? l[k] : void 0),
            r.hasOwnProperty(k) && p !== d && (p != null || d != null))
          )
            if (k === "style")
              if (d) {
                for (a in d)
                  !d.hasOwnProperty(a) ||
                    (p && p.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in p)
                  p.hasOwnProperty(a) &&
                    d[a] !== p[a] &&
                    (n || (n = {}), (n[a] = p[a]));
              } else n || (i || (i = []), i.push(k, n)), (n = p);
            else
              k === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (d = d ? d.__html : void 0),
                  p != null && d !== p && (i = i || []).push(k, p))
                : k === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (i = i || []).push(k, "" + p)
                : k !== "suppressContentEditableWarning" &&
                  k !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(k)
                    ? (p != null && k === "onScroll" && fe("scroll", e),
                      i || d === p || (i = []))
                    : (i = i || []).push(k, p));
        }
        n && (i = i || []).push("style", n);
        var k = i;
        (t.updateQueue = k) && (t.flags |= 4);
      }
    }),
    (zu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Sr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function hf(e, t, n) {
    var r = t.pendingProps;
    switch ((Yi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return Ve(t.type) && al(), $e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          pe(We),
          pe(De),
          oo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ct !== null && (Fo(ct), (ct = null)))),
          Co(e, t),
          $e(t),
          null
        );
      case 5:
        lo(t);
        var l = un(yr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Lu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return $e(t), null;
          }
          if (((e = un(wt.current)), pl(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[xt] = t), (r[pr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) fe(cr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                ds(r, i), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                ms(r, i), fe("invalid", r);
            }
            ii(n, i), (l = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var d = i[a];
                a === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, d, e),
                      (l = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, d, e),
                      (l = ["children", "" + d]))
                  : f.hasOwnProperty(a) &&
                    d != null &&
                    a === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Dr(r), ps(r, i, !0);
                break;
              case "textarea":
                Dr(r), vs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ol);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = gs(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[xt] = t),
              (e[pr] = r),
              Ru(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = oi(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < cr.length; l++) fe(cr[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (l = r);
                  break;
                case "details":
                  fe("toggle", e), (l = r);
                  break;
                case "input":
                  ds(e, r), (l = ei(e, r)), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = H({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  ms(e, r), (l = ri(e, r)), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              ii(n, l), (d = l);
              for (i in d)
                if (d.hasOwnProperty(i)) {
                  var p = d[i];
                  i === "style"
                    ? ws(e, p)
                    : i === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && ys(e, p))
                    : i === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && Qn(e, p)
                      : typeof p == "number" && Qn(e, "" + p)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (f.hasOwnProperty(i)
                        ? p != null && i === "onScroll" && fe("scroll", e)
                        : p != null && V(e, i, p, a));
                }
              switch (n) {
                case "input":
                  Dr(e), ps(e, r, !1);
                  break;
                case "textarea":
                  Dr(e), vs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? gn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        gn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ol);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) zu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = un(yr.current)), un(wt.current), pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xt] = t),
              (i = r.nodeValue !== n) && ((e = Je), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[xt] = t),
              (t.stateNode = r);
        }
        return $e(t), null;
      case 13:
        if (
          (pe(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (he && be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Oa(), Tn(), (t.flags |= 98560), (i = !1);
          else if (((i = pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[xt] = t;
            } else
              Tn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            $e(t), (i = !1);
          } else ct !== null && (Fo(ct), (ct = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ge.current & 1) !== 0
                  ? Re === 0 && (Re = 3)
                  : Ao())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (
          Dn(),
          Co(e, t),
          e === null && dr(t.stateNode.containerInfo),
          $e(t),
          null
        );
      case 10:
        return bi(t.type._context), $e(t), null;
      case 17:
        return Ve(t.type) && al(), $e(t), null;
      case 19:
        if ((pe(ge), (i = t.memoizedState), i === null)) return $e(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) Sr(i, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = xl(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Sr(i, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (a = i.alternate),
                      a === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = a.childLanes),
                          (i.lanes = a.lanes),
                          (i.child = a.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = a.memoizedProps),
                          (i.memoizedState = a.memoizedState),
                          (i.updateQueue = a.updateQueue),
                          (i.type = a.type),
                          (e = a.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return de(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              je() > An &&
              ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = xl(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Sr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !he)
              )
                return $e(t), null;
            } else
              2 * je() - i.renderingStartTime > An &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = i.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = je()),
            (t.sibling = null),
            (n = ge.current),
            de(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          Uo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (et & 1073741824) !== 0 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function vf(e, t) {
    switch ((Yi(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          pe(We),
          pe(De),
          oo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return lo(t), null;
      case 13:
        if (
          (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Tn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return pe(ge), null;
      case 4:
        return Dn(), null;
      case 10:
        return bi(t.type._context), null;
      case 22:
      case 23:
        return Uo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1,
    Ue = !1,
    gf = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function $n(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }
  function Po(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var Tu = !1;
  function yf(e, t) {
    if ((($i = Xr), (e = ca()), Li(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              d = -1,
              p = -1,
              k = 0,
              _ = 0,
              L = e,
              C = null;
            t: for (;;) {
              for (
                var U;
                L !== n || (l !== 0 && L.nodeType !== 3) || (d = a + l),
                  L !== i || (r !== 0 && L.nodeType !== 3) || (p = a + r),
                  L.nodeType === 3 && (a += L.nodeValue.length),
                  (U = L.firstChild) !== null;

              )
                (C = L), (L = U);
              for (;;) {
                if (L === e) break t;
                if (
                  (C === n && ++k === l && (d = a),
                  C === i && ++_ === r && (p = a),
                  (U = L.nextSibling) !== null)
                )
                  break;
                (L = C), (C = L.parentNode);
              }
              L = U;
            }
            n = d === -1 || p === -1 ? null : { start: d, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ui = { focusedElem: e, selectionRange: n }, Xr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var W = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (W !== null) {
                    var Q = W.memoizedProps,
                      Ee = W.memoizedState,
                      y = t.stateNode,
                      m = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : dt(t.type, Q),
                        Ee
                      );
                    y.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var x = t.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (M) {
            Se(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (W = Tu), (Tu = !1), W;
  }
  function jr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && Po(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function _o(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Mu(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Mu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[xt],
          delete t[pr],
          delete t[Wi],
          delete t[bd],
          delete t[ef])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ou(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Iu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ou(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ro(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ro(e, t, n), e = e.sibling; e !== null; )
        Ro(e, t, n), (e = e.sibling);
  }
  function Lo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Lo(e, t, n), e = e.sibling; e !== null; )
        Lo(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    ft = !1;
  function Gt(e, t, n) {
    for (n = n.child; n !== null; ) Du(e, t, n), (n = n.sibling);
  }
  function Du(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(Hr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ue || $n(n, t);
      case 6:
        var r = Oe,
          l = ft;
        (Oe = null),
          Gt(e, t, n),
          (Oe = r),
          (ft = l),
          Oe !== null &&
            (ft
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (ft
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Hi(e.parentNode, n)
                : e.nodeType === 1 && Hi(e, n),
              nr(e))
            : Hi(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = ft),
          (Oe = n.stateNode.containerInfo),
          (ft = !0),
          Gt(e, t, n),
          (Oe = r),
          (ft = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ue &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Po(n, t, a),
              (l = l.next);
          } while (l !== r);
        }
        Gt(e, t, n);
        break;
      case 1:
        if (
          !Ue &&
          ($n(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (d) {
            Se(n, t, d);
          }
        Gt(e, t, n);
        break;
      case 21:
        Gt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ue = (r = Ue) || n.memoizedState !== null), Gt(e, t, n), (Ue = r))
          : Gt(e, t, n);
        break;
      default:
        Gt(e, t, n);
    }
  }
  function Fu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gf()),
        t.forEach(function (r) {
          var l = Pf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            a = t,
            d = a;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                (Oe = d.stateNode), (ft = !1);
                break e;
              case 3:
                (Oe = d.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Oe = d.stateNode.containerInfo), (ft = !0);
                break e;
            }
            d = d.return;
          }
          if (Oe === null) throw Error(u(160));
          Du(i, a, l), (Oe = null), (ft = !1);
          var p = l.alternate;
          p !== null && (p.return = null), (l.return = null);
        } catch (k) {
          Se(l, t, k);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) $u(t, e), (t = t.sibling);
  }
  function $u(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((pt(t, e), Nt(e), r & 4)) {
          try {
            jr(3, e, e.return), Rl(3, e);
          } catch (Q) {
            Se(e, e.return, Q);
          }
          try {
            jr(5, e, e.return);
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        break;
      case 1:
        pt(t, e), Nt(e), r & 512 && n !== null && $n(n, n.return);
        break;
      case 5:
        if (
          (pt(t, e),
          Nt(e),
          r & 512 && n !== null && $n(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Qn(l, "");
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            d = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              d === "input" && i.type === "radio" && i.name != null && fs(l, i),
                oi(d, a);
              var k = oi(d, i);
              for (a = 0; a < p.length; a += 2) {
                var _ = p[a],
                  L = p[a + 1];
                _ === "style"
                  ? ws(l, L)
                  : _ === "dangerouslySetInnerHTML"
                  ? ys(l, L)
                  : _ === "children"
                  ? Qn(l, L)
                  : V(l, _, L, k);
              }
              switch (d) {
                case "input":
                  ti(l, i);
                  break;
                case "textarea":
                  hs(l, i);
                  break;
                case "select":
                  var C = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var U = i.value;
                  U != null
                    ? gn(l, !!i.multiple, U, !1)
                    : C !== !!i.multiple &&
                      (i.defaultValue != null
                        ? gn(l, !!i.multiple, i.defaultValue, !0)
                        : gn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[pr] = i;
            } catch (Q) {
              Se(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((pt(t, e), Nt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (Q) {
            Se(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          (pt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nr(t.containerInfo);
          } catch (Q) {
            Se(e, e.return, Q);
          }
        break;
      case 4:
        pt(t, e), Nt(e);
        break;
      case 13:
        pt(t, e),
          Nt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Mo = je())),
          r & 4 && Fu(e);
        break;
      case 22:
        if (
          ((_ = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ue = (k = Ue) || _), pt(t, e), (Ue = k)) : pt(t, e),
          Nt(e),
          r & 8192)
        ) {
          if (
            ((k = e.memoizedState !== null),
            (e.stateNode.isHidden = k) && !_ && (e.mode & 1) !== 0)
          )
            for (B = e, _ = e.child; _ !== null; ) {
              for (L = B = _; B !== null; ) {
                switch (((C = B), (U = C.child), C.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, C, C.return);
                    break;
                  case 1:
                    $n(C, C.return);
                    var W = C.stateNode;
                    if (typeof W.componentWillUnmount == "function") {
                      (r = C), (n = C.return);
                      try {
                        (t = r),
                          (W.props = t.memoizedProps),
                          (W.state = t.memoizedState),
                          W.componentWillUnmount();
                      } catch (Q) {
                        Se(r, n, Q);
                      }
                    }
                    break;
                  case 5:
                    $n(C, C.return);
                    break;
                  case 22:
                    if (C.memoizedState !== null) {
                      Bu(L);
                      continue;
                    }
                }
                U !== null ? ((U.return = C), (B = U)) : Bu(L);
              }
              _ = _.sibling;
            }
          e: for (_ = null, L = e; ; ) {
            if (L.tag === 5) {
              if (_ === null) {
                _ = L;
                try {
                  (l = L.stateNode),
                    k
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((d = L.stateNode),
                        (p = L.memoizedProps.style),
                        (a =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (d.style.display = xs("display", a)));
                } catch (Q) {
                  Se(e, e.return, Q);
                }
              }
            } else if (L.tag === 6) {
              if (_ === null)
                try {
                  L.stateNode.nodeValue = k ? "" : L.memoizedProps;
                } catch (Q) {
                  Se(e, e.return, Q);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              _ === L && (_ = null), (L = L.return);
            }
            _ === L && (_ = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        pt(t, e), Nt(e), r & 4 && Fu(e);
        break;
      case 21:
        break;
      default:
        pt(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ou(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
            var i = Iu(e);
            Lo(e, i, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              d = Iu(e);
            Ro(e, d, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (p) {
        Se(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xf(e, t, n) {
    (B = e), Uu(e);
  }
  function Uu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        i = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || _l;
        if (!a) {
          var d = l.alternate,
            p = (d !== null && d.memoizedState !== null) || Ue;
          d = _l;
          var k = Ue;
          if (((_l = a), (Ue = p) && !k))
            for (B = l; B !== null; )
              (a = B),
                (p = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Hu(l)
                  : p !== null
                  ? ((p.return = a), (B = p))
                  : Hu(l);
          for (; i !== null; ) (B = i), Uu(i), (i = i.sibling);
          (B = l), (_l = d), (Ue = k);
        }
        Au(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (B = i))
          : Au(e);
    }
  }
  function Au(e) {
    for (; B !== null; ) {
      var t = B;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ue || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ue)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : dt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Ba(t, i, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ba(t, a, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var k = t.alternate;
                  if (k !== null) {
                    var _ = k.memoizedState;
                    if (_ !== null) {
                      var L = _.dehydrated;
                      L !== null && nr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Ue || (t.flags & 512 && _o(t));
        } catch (C) {
          Se(t, t.return, C);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Bu(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Hu(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (p) {
              Se(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Se(t, l, p);
              }
            }
            var i = t.return;
            try {
              _o(t);
            } catch (p) {
              Se(t, i, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              _o(t);
            } catch (p) {
              Se(t, a, p);
            }
        }
      } catch (p) {
        Se(t, t.return, p);
      }
      if (t === e) {
        B = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        (d.return = t.return), (B = d);
        break;
      }
      B = t.return;
    }
  }
  var wf = Math.ceil,
    Ll = b.ReactCurrentDispatcher,
    zo = b.ReactCurrentOwner,
    it = b.ReactCurrentBatchConfig,
    ne = 0,
    Te = null,
    Pe = null,
    Ie = 0,
    et = 0,
    Un = Vt(0),
    Re = 0,
    Er = null,
    dn = 0,
    zl = 0,
    To = 0,
    Cr = null,
    Ke = null,
    Mo = 0,
    An = 1 / 0,
    Tt = null,
    Tl = !1,
    Oo = null,
    Zt = null,
    Ml = !1,
    qt = null,
    Ol = 0,
    Pr = 0,
    Io = null,
    Il = -1,
    Dl = 0;
  function Be() {
    return (ne & 6) !== 0 ? je() : Il !== -1 ? Il : (Il = je());
  }
  function Jt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && Ie !== 0
      ? Ie & -Ie
      : nf.transition !== null
      ? (Dl === 0 && (Dl = Is()), Dl)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
        e);
  }
  function mt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Io = null), Error(u(185)));
    qn(e, n, r),
      ((ne & 2) === 0 || e !== Te) &&
        (e === Te && ((ne & 2) === 0 && (zl |= n), Re === 4 && bt(e, Ie)),
        Ye(e, r),
        n === 1 &&
          ne === 0 &&
          (t.mode & 1) === 0 &&
          ((An = je() + 500), cl && Kt()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    nd(e, t);
    var r = Qr(e, e === Te ? Ie : 0);
    if (r === 0)
      n !== null && Ts(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ts(n), t === 1))
        e.tag === 0 ? tf(Vu.bind(null, e)) : Ra(Vu.bind(null, e)),
          qd(function () {
            (ne & 6) === 0 && Kt();
          }),
          (n = null);
      else {
        switch (Ds(r)) {
          case 1:
            n = pi;
            break;
          case 4:
            n = Ms;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = Os;
            break;
          default:
            n = Br;
        }
        n = Ju(n, Wu.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Wu(e, t) {
    if (((Il = -1), (Dl = 0), (ne & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n) return null;
    var r = Qr(e, e === Te ? Ie : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var i = Ku();
      (Te !== e || Ie !== t) && ((Tt = null), (An = je() + 500), pn(e, t));
      do
        try {
          Sf();
          break;
        } catch (d) {
          Qu(e, d);
        }
      while (!0);
      Ji(),
        (Ll.current = i),
        (ne = l),
        Pe !== null ? (t = 0) : ((Te = null), (Ie = 0), (t = Re));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = mi(e)), l !== 0 && ((r = l), (t = Do(e, l)))),
        t === 1)
      )
        throw ((n = Er), pn(e, 0), bt(e, r), Ye(e, je()), n);
      if (t === 6) bt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !kf(l) &&
            ((t = Fl(e, r)),
            t === 2 && ((i = mi(e)), i !== 0 && ((r = i), (t = Do(e, i)))),
            t === 1))
        )
          throw ((n = Er), pn(e, 0), bt(e, r), Ye(e, je()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            mn(e, Ke, Tt);
            break;
          case 3:
            if (
              (bt(e, r),
              (r & 130023424) === r && ((t = Mo + 500 - je()), 10 < t))
            ) {
              if (Qr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Be(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Bi(mn.bind(null, e, Ke, Tt), t);
              break;
            }
            mn(e, Ke, Tt);
            break;
          case 4:
            if ((bt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - at(r);
              (i = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~i);
            }
            if (
              ((r = l),
              (r = je() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * wf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Bi(mn.bind(null, e, Ke, Tt), r);
              break;
            }
            mn(e, Ke, Tt);
            break;
          case 5:
            mn(e, Ke, Tt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Ye(e, je()), e.callbackNode === n ? Wu.bind(null, e) : null;
  }
  function Do(e, t) {
    var n = Cr;
    return (
      e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
      (e = Fl(e, t)),
      e !== 2 && ((t = Ke), (Ke = n), t !== null && Fo(t)),
      e
    );
  }
  function Fo(e) {
    Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
  }
  function kf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!ut(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function bt(e, t) {
    for (
      t &= ~To,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - at(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Vu(e) {
    if ((ne & 6) !== 0) throw Error(u(327));
    Bn();
    var t = Qr(e, 0);
    if ((t & 1) === 0) return Ye(e, je()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = mi(e);
      r !== 0 && ((t = r), (n = Do(e, r)));
    }
    if (n === 1) throw ((n = Er), pn(e, 0), bt(e, t), Ye(e, je()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mn(e, Ke, Tt),
      Ye(e, je()),
      null
    );
  }
  function $o(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((An = je() + 500), cl && Kt());
    }
  }
  function fn(e) {
    qt !== null && qt.tag === 0 && (ne & 6) === 0 && Bn();
    var t = ne;
    ne |= 1;
    var n = it.transition,
      r = se;
    try {
      if (((it.transition = null), (se = 1), e)) return e();
    } finally {
      (se = r), (it.transition = n), (ne = t), (ne & 6) === 0 && Kt();
    }
  }
  function Uo() {
    (et = Un.current), pe(Un);
  }
  function pn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zd(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((Yi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            Dn(), pe(We), pe(De), oo();
            break;
          case 5:
            lo(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            pe(ge);
            break;
          case 19:
            pe(ge);
            break;
          case 10:
            bi(r.type._context);
            break;
          case 22:
          case 23:
            Uo();
        }
        n = n.return;
      }
    if (
      ((Te = e),
      (Pe = e = en(e.current, null)),
      (Ie = et = t),
      (Re = 0),
      (Er = null),
      (To = zl = dn = 0),
      (Ke = Cr = null),
      an !== null)
    ) {
      for (t = 0; t < an.length; t++)
        if (((n = an[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = l), (r.next = a);
          }
          n.pending = r;
        }
      an = null;
    }
    return e;
  }
  function Qu(e, t) {
    do {
      var n = Pe;
      try {
        if ((Ji(), (wl.current = jl), kl)) {
          for (var r = ye.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          kl = !1;
        }
        if (
          ((cn = 0),
          (ze = _e = ye = null),
          (xr = !1),
          (wr = 0),
          (zo.current = null),
          n === null || n.return === null)
        ) {
          (Re = 1), (Er = t), (Pe = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            d = n,
            p = t;
          if (
            ((t = Ie),
            (d.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var k = p,
              _ = d,
              L = _.tag;
            if ((_.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var C = _.alternate;
              C
                ? ((_.updateQueue = C.updateQueue),
                  (_.memoizedState = C.memoizedState),
                  (_.lanes = C.lanes))
                : ((_.updateQueue = null), (_.memoizedState = null));
            }
            var U = vu(a);
            if (U !== null) {
              (U.flags &= -257),
                gu(U, a, d, i, t),
                U.mode & 1 && hu(i, k, t),
                (t = U),
                (p = k);
              var W = t.updateQueue;
              if (W === null) {
                var Q = new Set();
                Q.add(p), (t.updateQueue = Q);
              } else W.add(p);
              break e;
            } else {
              if ((t & 1) === 0) {
                hu(i, k, t), Ao();
                break e;
              }
              p = Error(u(426));
            }
          } else if (he && d.mode & 1) {
            var Ee = vu(a);
            if (Ee !== null) {
              (Ee.flags & 65536) === 0 && (Ee.flags |= 256),
                gu(Ee, a, d, i, t),
                Zi(Fn(p, d));
              break e;
            }
          }
          (i = p = Fn(p, d)),
            Re !== 4 && (Re = 2),
            Cr === null ? (Cr = [i]) : Cr.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = pu(i, p, t);
                Aa(i, y);
                break e;
              case 1:
                d = p;
                var m = i.type,
                  x = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (Zt === null || !Zt.has(x))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var M = mu(i, d, t);
                  Aa(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Xu(n);
      } catch (K) {
        (t = K), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ku() {
    var e = Ll.current;
    return (Ll.current = jl), e === null ? jl : e;
  }
  function Ao() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Te === null ||
        ((dn & 268435455) === 0 && (zl & 268435455) === 0) ||
        bt(Te, Ie);
  }
  function Fl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ku();
    (Te !== e || Ie !== t) && ((Tt = null), pn(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        Qu(e, l);
      }
    while (!0);
    if ((Ji(), (ne = n), (Ll.current = r), Pe !== null)) throw Error(u(261));
    return (Te = null), (Ie = 0), Re;
  }
  function Nf() {
    for (; Pe !== null; ) Yu(Pe);
  }
  function Sf() {
    for (; Pe !== null && !Yc(); ) Yu(Pe);
  }
  function Yu(e) {
    var t = qu(e.alternate, e, et);
    (e.memoizedProps = e.pendingProps),
      t === null ? Xu(e) : (Pe = t),
      (zo.current = null);
  }
  function Xu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = hf(n, t, et)), n !== null)) {
          Pe = n;
          return;
        }
      } else {
        if (((n = vf(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Re = 6), (Pe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function mn(e, t, n) {
    var r = se,
      l = it.transition;
    try {
      (it.transition = null), (se = 1), jf(e, t, n, r);
    } finally {
      (it.transition = l), (se = r);
    }
    return null;
  }
  function jf(e, t, n, r) {
    do Bn();
    while (qt !== null);
    if ((ne & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (rd(e, i),
      e === Te && ((Pe = Te = null), (Ie = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ml ||
        ((Ml = !0),
        Ju(Br, function () {
          return Bn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      (i = it.transition), (it.transition = null);
      var a = se;
      se = 1;
      var d = ne;
      (ne |= 4),
        (zo.current = null),
        yf(e, n),
        $u(n, e),
        Wd(Ui),
        (Xr = !!$i),
        (Ui = $i = null),
        (e.current = n),
        xf(n),
        Xc(),
        (ne = d),
        (se = a),
        (it.transition = i);
    } else e.current = n;
    if (
      (Ml && ((Ml = !1), (qt = e), (Ol = l)),
      (i = e.pendingLanes),
      i === 0 && (Zt = null),
      qc(n.stateNode),
      Ye(e, je()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Tl) throw ((Tl = !1), (e = Oo), (Oo = null), e);
    return (
      (Ol & 1) !== 0 && e.tag !== 0 && Bn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Io ? Pr++ : ((Pr = 0), (Io = e))) : (Pr = 0),
      Kt(),
      null
    );
  }
  function Bn() {
    if (qt !== null) {
      var e = Ds(Ol),
        t = it.transition,
        n = se;
      try {
        if (((it.transition = null), (se = 16 > e ? 16 : e), qt === null))
          var r = !1;
        else {
          if (((e = qt), (qt = null), (Ol = 0), (ne & 6) !== 0))
            throw Error(u(331));
          var l = ne;
          for (ne |= 4, B = e.current; B !== null; ) {
            var i = B,
              a = i.child;
            if ((B.flags & 16) !== 0) {
              var d = i.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var k = d[p];
                  for (B = k; B !== null; ) {
                    var _ = B;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, _, i);
                    }
                    var L = _.child;
                    if (L !== null) (L.return = _), (B = L);
                    else
                      for (; B !== null; ) {
                        _ = B;
                        var C = _.sibling,
                          U = _.return;
                        if ((Mu(_), _ === k)) {
                          B = null;
                          break;
                        }
                        if (C !== null) {
                          (C.return = U), (B = C);
                          break;
                        }
                        B = U;
                      }
                  }
                }
                var W = i.alternate;
                if (W !== null) {
                  var Q = W.child;
                  if (Q !== null) {
                    W.child = null;
                    do {
                      var Ee = Q.sibling;
                      (Q.sibling = null), (Q = Ee);
                    } while (Q !== null);
                  }
                }
                B = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = i), (B = a);
            else
              e: for (; B !== null; ) {
                if (((i = B), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, i, i.return);
                  }
                var y = i.sibling;
                if (y !== null) {
                  (y.return = i.return), (B = y);
                  break e;
                }
                B = i.return;
              }
          }
          var m = e.current;
          for (B = m; B !== null; ) {
            a = B;
            var x = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && x !== null)
              (x.return = a), (B = x);
            else
              e: for (a = m; B !== null; ) {
                if (((d = B), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, d);
                    }
                  } catch (K) {
                    Se(d, d.return, K);
                  }
                if (d === a) {
                  B = null;
                  break e;
                }
                var M = d.sibling;
                if (M !== null) {
                  (M.return = d.return), (B = M);
                  break e;
                }
                B = d.return;
              }
          }
          if (
            ((ne = l),
            Kt(),
            yt && typeof yt.onPostCommitFiberRoot == "function")
          )
            try {
              yt.onPostCommitFiberRoot(Hr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (se = n), (it.transition = t);
      }
    }
    return !1;
  }
  function Gu(e, t, n) {
    (t = Fn(n, t)),
      (t = pu(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Be()),
      e !== null && (qn(e, 1, t), Ye(e, t));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Gu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Zt === null || !Zt.has(r)))
          ) {
            (e = Fn(n, e)),
              (e = mu(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Be()),
              t !== null && (qn(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Te === e &&
        (Ie & n) === n &&
        (Re === 4 || (Re === 3 && (Ie & 130023424) === Ie && 500 > je() - Mo)
          ? pn(e, 0)
          : (To |= n)),
      Ye(e, t);
  }
  function Zu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Vr), (Vr <<= 1), (Vr & 130023424) === 0 && (Vr = 4194304)));
    var n = Be();
    (e = Rt(e, t)), e !== null && (qn(e, t, n), Ye(e, n));
  }
  function Cf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Zu(e, n);
  }
  function Pf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Zu(e, n);
  }
  var qu;
  qu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) Qe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Qe = !1), mf(e, t, n);
        Qe = (e.flags & 131072) !== 0;
      }
    else (Qe = !1), he && (t.flags & 1048576) !== 0 && La(t, fl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Pl(e, t), (e = t.pendingProps);
        var l = Rn(t, De.current);
        In(t, n), (l = uo(null, t, r, e, l, n));
        var i = co();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((i = !0), ul(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              no(t),
              (l.updater = El),
              (t.stateNode = l),
              (l._reactInternals = t),
              go(t, r, e, n),
              (t = ko(null, t, r, !0, i, n)))
            : ((t.tag = 0), he && i && Ki(t), Ae(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rf(r)),
            (e = dt(r, e)),
            l)
          ) {
            case 0:
              t = wo(null, t, r, e, n);
              break e;
            case 1:
              t = Su(null, t, r, e, n);
              break e;
            case 11:
              t = yu(null, t, r, e, n);
              break e;
            case 14:
              t = xu(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          wo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Su(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ju(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Ua(e, t),
            yl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Fn(Error(u(423)), t)), (t = Eu(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Fn(Error(u(424)), t)), (t = Eu(e, t, r, n, l));
              break e;
            } else
              for (
                be = Wt(t.stateNode.containerInfo.firstChild),
                  Je = t,
                  he = !0,
                  ct = null,
                  n = Fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tn(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            Ae(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ha(t),
          e === null && Gi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = l.children),
          Ai(r, l) ? (a = null) : i !== null && Ai(r, i) && (t.flags |= 32),
          Nu(e, t),
          Ae(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && Gi(t), null;
      case 13:
        return Cu(e, t, n);
      case 4:
        return (
          ro(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mn(t, null, r, n)) : Ae(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          yu(e, t, r, l, n)
        );
      case 7:
        return Ae(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (a = l.value),
            de(hl, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (ut(i.value, a)) {
              if (i.children === l.children && !We.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var d = i.dependencies;
                if (d !== null) {
                  a = i.child;
                  for (var p = d.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (i.tag === 1) {
                        (p = Lt(-1, n & -n)), (p.tag = 2);
                        var k = i.updateQueue;
                        if (k !== null) {
                          k = k.shared;
                          var _ = k.pending;
                          _ === null
                            ? (p.next = p)
                            : ((p.next = _.next), (_.next = p)),
                            (k.pending = p);
                        }
                      }
                      (i.lanes |= n),
                        (p = i.alternate),
                        p !== null && (p.lanes |= n),
                        eo(i.return, n, t),
                        (d.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(u(341));
                  (a.lanes |= n),
                    (d = a.alternate),
                    d !== null && (d.lanes |= n),
                    eo(a, n, t),
                    (a = i.sibling);
                } else a = i.child;
                if (a !== null) a.return = i;
                else
                  for (a = i; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((i = a.sibling), i !== null)) {
                      (i.return = a.return), (a = i);
                      break;
                    }
                    a = a.return;
                  }
                i = a;
              }
          Ae(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          In(t, n),
          (l = rt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ae(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = dt(r, t.pendingProps)),
          (l = dt(r.type, l)),
          xu(e, t, r, l, n)
        );
      case 15:
        return wu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Pl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), ul(t)) : (e = !1),
          In(t, n),
          du(t, r, l),
          go(t, r, l, n),
          ko(null, t, r, !0, e, n)
        );
      case 19:
        return _u(e, t, n);
      case 22:
        return ku(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Ju(e, t) {
    return zs(e, t);
  }
  function _f(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new _f(e, t, n, r);
  }
  function Bo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Rf(e) {
    if (typeof e == "function") return Bo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === vt)) return 11;
      if (e === gt) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function $l(e, t, n, r, l, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) Bo(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case ve:
          return hn(n.children, l, i, t);
        case Ce:
          (a = 8), (l |= 8);
          break;
        case ke:
          return (
            (e = ot(12, n, t, l | 2)), (e.elementType = ke), (e.lanes = i), e
          );
        case Ge:
          return (e = ot(13, n, t, l)), (e.elementType = Ge), (e.lanes = i), e;
        case st:
          return (e = ot(19, n, t, l)), (e.elementType = st), (e.lanes = i), e;
        case Ne:
          return Ul(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Le:
                a = 10;
                break e;
              case ht:
                a = 9;
                break e;
              case vt:
                a = 11;
                break e;
              case gt:
                a = 14;
                break e;
              case He:
                (a = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function hn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function Ul(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = Ne),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ho(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Wo(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Lf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = hi(0)),
      (this.expirationTimes = hi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Vo(e, t, n, r, l, i, a, d, p) {
    return (
      (e = new Lf(e, t, n, d, p)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = ot(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      no(i),
      e
    );
  }
  function zf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: we,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function bu(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (nn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return Pa(e, n, t);
    }
    return t;
  }
  function ec(e, t, n, r, l, i, a, d, p) {
    return (
      (e = Vo(n, r, !0, e, l, i, a, d, p)),
      (e.context = bu(null)),
      (n = e.current),
      (r = Be()),
      (l = Jt(n)),
      (i = Lt(r, l)),
      (i.callback = t ?? null),
      Xt(n, i, l),
      (e.current.lanes = l),
      qn(e, l, r),
      Ye(e, r),
      e
    );
  }
  function Al(e, t, n, r) {
    var l = t.current,
      i = Be(),
      a = Jt(l);
    return (
      (n = bu(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, a)),
      e !== null && (mt(e, l, a, i), gl(e, l, a)),
      a
    );
  }
  function Bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qo(e, t) {
    tc(e, t), (e = e.alternate) && tc(e, t);
  }
  function Tf() {
    return null;
  }
  var nc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ko(e) {
    this._internalRoot = e;
  }
  (Hl.prototype.render = Ko.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Al(e, t, null, null);
    }),
    (Hl.prototype.unmount = Ko.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fn(function () {
            Al(null, e, null, null);
          }),
            (t[Et] = null);
        }
      });
  function Hl(e) {
    this._internalRoot = e;
  }
  Hl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Us();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
      At.splice(n, 0, e), n === 0 && Hs(e);
    }
  };
  function Yo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Wl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rc() {}
  function Mf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var k = Bl(a);
          i.call(k);
        };
      }
      var a = ec(t, r, e, 0, null, !1, !1, "", rc);
      return (
        (e._reactRootContainer = a),
        (e[Et] = a.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        a
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var k = Bl(p);
        d.call(k);
      };
    }
    var p = Vo(e, 0, !1, null, null, !1, !1, "", rc);
    return (
      (e._reactRootContainer = p),
      (e[Et] = p.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Al(t, p, n, r);
      }),
      p
    );
  }
  function Vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var p = Bl(a);
          d.call(p);
        };
      }
      Al(t, a, e, l);
    } else a = Mf(n, t, e, l, r);
    return Bl(a);
  }
  (Fs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zn(t.pendingLanes);
          n !== 0 &&
            (vi(t, n | 1),
            Ye(t, je()),
            (ne & 6) === 0 && ((An = je() + 500), Kt()));
        }
        break;
      case 13:
        fn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = Be();
            mt(r, e, 1, l);
          }
        }),
          Qo(e, 1);
    }
  }),
    (gi = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Be();
          mt(t, e, 134217728, n);
        }
        Qo(e, 134217728);
      }
    }),
    ($s = function (e) {
      if (e.tag === 13) {
        var t = Jt(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = Be();
          mt(n, e, t, r);
        }
        Qo(e, t);
      }
    }),
    (Us = function () {
      return se;
    }),
    (As = function (e, t) {
      var n = se;
      try {
        return (se = e), t();
      } finally {
        se = n;
      }
    }),
    (ui = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = sl(r);
                if (!l) throw Error(u(90));
                cs(r), ti(r, l);
              }
            }
          }
          break;
        case "textarea":
          hs(e, n);
          break;
        case "select":
          (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
      }
    }),
    (js = $o),
    (Es = fn);
  var Of = { usingClientEntryPoint: !1, Events: [mr, Pn, sl, Ns, Ss, $o] },
    _r = {
      findFiberByHostInstance: rn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    If = {
      bundleType: _r.bundleType,
      version: _r.version,
      rendererPackageName: _r.rendererPackageName,
      rendererConfig: _r.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Rs(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _r.findFiberByHostInstance || Tf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        (Hr = Ql.inject(If)), (yt = Ql);
      } catch {}
  }
  return (
    (Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of),
    (Xe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yo(t)) throw Error(u(200));
      return zf(e, t, null, n);
    }),
    (Xe.createRoot = function (e, t) {
      if (!Yo(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = nc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Vo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Et] = t.current),
        dr(e.nodeType === 8 ? e.parentNode : e),
        new Ko(t)
      );
    }),
    (Xe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = Rs(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Xe.flushSync = function (e) {
      return fn(e);
    }),
    (Xe.hydrate = function (e, t, n) {
      if (!Wl(t)) throw Error(u(200));
      return Vl(null, e, t, !0, n);
    }),
    (Xe.hydrateRoot = function (e, t, n) {
      if (!Yo(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        a = nc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = ec(t, null, e, 1, n ?? null, l, !1, i, a)),
        (e[Et] = t.current),
        dr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Hl(t);
    }),
    (Xe.render = function (e, t, n) {
      if (!Wl(t)) throw Error(u(200));
      return Vl(null, e, t, !1, n);
    }),
    (Xe.unmountComponentAtNode = function (e) {
      if (!Wl(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (fn(function () {
            Vl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Et] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Xe.unstable_batchedUpdates = $o),
    (Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Wl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Vl(e, t, n, !1, r);
    }),
    (Xe.version = "18.3.1-next-f1338f8080-20240426"),
    Xe
  );
}
var dc;
function Wf() {
  if (dc) return Zo.exports;
  dc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), (Zo.exports = Hf()), Zo.exports;
}
var fc;
function Vf() {
  if (fc) return Kl;
  fc = 1;
  var o = Wf();
  return (Kl.createRoot = o.createRoot), (Kl.hydrateRoot = o.hydrateRoot), Kl;
}
var Qf = Vf(),
  Lr = {},
  pc;
function Kf() {
  if (pc) return Lr;
  (pc = 1),
    Object.defineProperty(Lr, "__esModule", { value: !0 }),
    (Lr.parse = N),
    (Lr.serialize = S);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    c = /^[\u0021-\u003A\u003C-\u007E]*$/,
    u =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    h = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    v = (() => {
      const R = function () {};
      return (R.prototype = Object.create(null)), R;
    })();
  function N(R, A) {
    const z = new v(),
      $ = R.length;
    if ($ < 2) return z;
    const D = (A == null ? void 0 : A.decode) || T;
    let O = 0;
    do {
      const G = R.indexOf("=", O);
      if (G === -1) break;
      const V = R.indexOf(";", O),
        b = V === -1 ? $ : V;
      if (G > b) {
        O = R.lastIndexOf(";", G - 1) + 1;
        continue;
      }
      const ue = j(R, O, G),
        we = w(R, G, ue),
        ve = R.slice(ue, we);
      if (z[ve] === void 0) {
        let Ce = j(R, G + 1, b),
          ke = w(R, b, Ce);
        const Le = D(R.slice(Ce, ke));
        z[ve] = Le;
      }
      O = b + 1;
    } while (O < $);
    return z;
  }
  function j(R, A, z) {
    do {
      const $ = R.charCodeAt(A);
      if ($ !== 32 && $ !== 9) return A;
    } while (++A < z);
    return z;
  }
  function w(R, A, z) {
    for (; A > z; ) {
      const $ = R.charCodeAt(--A);
      if ($ !== 32 && $ !== 9) return A + 1;
    }
    return z;
  }
  function S(R, A, z) {
    const $ = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!o.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
    const D = $(A);
    if (!c.test(D)) throw new TypeError(`argument val is invalid: ${A}`);
    let O = R + "=" + D;
    if (!z) return O;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      O += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!u.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      O += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!h.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      O += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!I(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      O += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (O += "; HttpOnly"),
      z.secure && (O += "; Secure"),
      z.partitioned && (O += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return O;
  }
  function T(R) {
    if (R.indexOf("%") === -1) return R;
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  function I(R) {
    return f.call(R) === "[object Date]";
  }
  return Lr;
}
Kf();
var mc = "popstate";
function Yf(o = {}) {
  function c(h, f) {
    let { pathname: v, search: N, hash: j } = h.location;
    return ts(
      "",
      { pathname: v, search: N, hash: j },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function u(h, f) {
    return typeof f == "string" ? f : Tr(f);
  }
  return Gf(c, u, null, o);
}
function xe(o, c) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(c);
}
function St(o, c) {
  if (!o) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Xf() {
  return Math.random().toString(36).substring(2, 10);
}
function hc(o, c) {
  return { usr: o.state, key: o.key, idx: c };
}
function ts(o, c, u = null, h) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof c == "string" ? Hn(c) : c),
    state: u,
    key: (c && c.key) || h || Xf(),
  };
}
function Tr({ pathname: o = "/", search: c = "", hash: u = "" }) {
  return (
    c && c !== "?" && (o += c.charAt(0) === "?" ? c : "?" + c),
    u && u !== "#" && (o += u.charAt(0) === "#" ? u : "#" + u),
    o
  );
}
function Hn(o) {
  let c = {};
  if (o) {
    let u = o.indexOf("#");
    u >= 0 && ((c.hash = o.substring(u)), (o = o.substring(0, u)));
    let h = o.indexOf("?");
    h >= 0 && ((c.search = o.substring(h)), (o = o.substring(0, h))),
      o && (c.pathname = o);
  }
  return c;
}
function Gf(o, c, u, h = {}) {
  let { window: f = document.defaultView, v5Compat: v = !1 } = h,
    N = f.history,
    j = "POP",
    w = null,
    S = T();
  S == null && ((S = 0), N.replaceState({ ...N.state, idx: S }, ""));
  function T() {
    return (N.state || { idx: null }).idx;
  }
  function I() {
    j = "POP";
    let D = T(),
      O = D == null ? null : D - S;
    (S = D), w && w({ action: j, location: $.location, delta: O });
  }
  function R(D, O) {
    j = "PUSH";
    let G = ts($.location, D, O);
    S = T() + 1;
    let V = hc(G, S),
      b = $.createHref(G);
    try {
      N.pushState(V, "", b);
    } catch (ue) {
      if (ue instanceof DOMException && ue.name === "DataCloneError") throw ue;
      f.location.assign(b);
    }
    v && w && w({ action: j, location: $.location, delta: 1 });
  }
  function A(D, O) {
    j = "REPLACE";
    let G = ts($.location, D, O);
    S = T();
    let V = hc(G, S),
      b = $.createHref(G);
    N.replaceState(V, "", b),
      v && w && w({ action: j, location: $.location, delta: 0 });
  }
  function z(D) {
    let O = f.location.origin !== "null" ? f.location.origin : f.location.href,
      G = typeof D == "string" ? D : Tr(D);
    return (
      (G = G.replace(/ $/, "%20")),
      xe(
        O,
        `No window.location.(origin|href) available to create URL for href: ${G}`
      ),
      new URL(G, O)
    );
  }
  let $ = {
    get action() {
      return j;
    },
    get location() {
      return o(f, N);
    },
    listen(D) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(mc, I),
        (w = D),
        () => {
          f.removeEventListener(mc, I), (w = null);
        }
      );
    },
    createHref(D) {
      return c(f, D);
    },
    createURL: z,
    encodeLocation(D) {
      let O = z(D);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: R,
    replace: A,
    go(D) {
      return N.go(D);
    },
  };
  return $;
}
function xc(o, c, u = "/") {
  return Zf(o, c, u, !1);
}
function Zf(o, c, u, h) {
  let f = typeof c == "string" ? Hn(c) : c,
    v = It(f.pathname || "/", u);
  if (v == null) return null;
  let N = wc(o);
  qf(N);
  let j = null;
  for (let w = 0; j == null && w < N.length; ++w) {
    let S = ap(v);
    j = op(N[w], S, h);
  }
  return j;
}
function wc(o, c = [], u = [], h = "") {
  let f = (v, N, j) => {
    let w = {
      relativePath: j === void 0 ? v.path || "" : j,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: N,
      route: v,
    };
    w.relativePath.startsWith("/") &&
      (xe(
        w.relativePath.startsWith(h),
        `Absolute route path "${w.relativePath}" nested under path "${h}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(h.length)));
    let S = Ot([h, w.relativePath]),
      T = u.concat(w);
    v.children &&
      v.children.length > 0 &&
      (xe(
        v.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
      ),
      wc(v.children, c, T, S)),
      !(v.path == null && !v.index) &&
        c.push({ path: S, score: lp(S, v.index), routesMeta: T });
  };
  return (
    o.forEach((v, N) => {
      var j;
      if (v.path === "" || !((j = v.path) != null && j.includes("?"))) f(v, N);
      else for (let w of kc(v.path)) f(v, N, w);
    }),
    c
  );
}
function kc(o) {
  let c = o.split("/");
  if (c.length === 0) return [];
  let [u, ...h] = c,
    f = u.endsWith("?"),
    v = u.replace(/\?$/, "");
  if (h.length === 0) return f ? [v, ""] : [v];
  let N = kc(h.join("/")),
    j = [];
  return (
    j.push(...N.map((w) => (w === "" ? v : [v, w].join("/")))),
    f && j.push(...N),
    j.map((w) => (o.startsWith("/") && w === "" ? "/" : w))
  );
}
function qf(o) {
  o.sort((c, u) =>
    c.score !== u.score
      ? u.score - c.score
      : ip(
          c.routesMeta.map((h) => h.childrenIndex),
          u.routesMeta.map((h) => h.childrenIndex)
        )
  );
}
var Jf = /^:[\w-]+$/,
  bf = 3,
  ep = 2,
  tp = 1,
  np = 10,
  rp = -2,
  vc = (o) => o === "*";
function lp(o, c) {
  let u = o.split("/"),
    h = u.length;
  return (
    u.some(vc) && (h += rp),
    c && (h += ep),
    u
      .filter((f) => !vc(f))
      .reduce((f, v) => f + (Jf.test(v) ? bf : v === "" ? tp : np), h)
  );
}
function ip(o, c) {
  return o.length === c.length && o.slice(0, -1).every((h, f) => h === c[f])
    ? o[o.length - 1] - c[c.length - 1]
    : 0;
}
function op(o, c, u = !1) {
  let { routesMeta: h } = o,
    f = {},
    v = "/",
    N = [];
  for (let j = 0; j < h.length; ++j) {
    let w = h[j],
      S = j === h.length - 1,
      T = v === "/" ? c : c.slice(v.length) || "/",
      I = Zl(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: S },
        T
      ),
      R = w.route;
    if (
      (!I &&
        S &&
        u &&
        !h[h.length - 1].route.index &&
        (I = Zl(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          T
        )),
      !I)
    )
      return null;
    Object.assign(f, I.params),
      N.push({
        params: f,
        pathname: Ot([v, I.pathname]),
        pathnameBase: fp(Ot([v, I.pathnameBase])),
        route: R,
      }),
      I.pathnameBase !== "/" && (v = Ot([v, I.pathnameBase]));
  }
  return N;
}
function Zl(o, c) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [u, h] = sp(o.path, o.caseSensitive, o.end),
    f = c.match(u);
  if (!f) return null;
  let v = f[0],
    N = v.replace(/(.)\/+$/, "$1"),
    j = f.slice(1);
  return {
    params: h.reduce((S, { paramName: T, isOptional: I }, R) => {
      if (T === "*") {
        let z = j[R] || "";
        N = v.slice(0, v.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const A = j[R];
      return (
        I && !A ? (S[T] = void 0) : (S[T] = (A || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: v,
    pathnameBase: N,
    pattern: o,
  };
}
function sp(o, c = !1, u = !0) {
  St(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let h = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (N, j, w) => (
            h.push({ paramName: j, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (h.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (f += "\\/*$")
      : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, c ? void 0 : "i"), h]
  );
}
function ap(o) {
  try {
    return o
      .split("/")
      .map((c) => decodeURIComponent(c).replace(/\//g, "%2F"))
      .join("/");
  } catch (c) {
    return (
      St(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      o
    );
  }
}
function It(o, c) {
  if (c === "/") return o;
  if (!o.toLowerCase().startsWith(c.toLowerCase())) return null;
  let u = c.endsWith("/") ? c.length - 1 : c.length,
    h = o.charAt(u);
  return h && h !== "/" ? null : o.slice(u) || "/";
}
function up(o, c = "/") {
  let {
    pathname: u,
    search: h = "",
    hash: f = "",
  } = typeof o == "string" ? Hn(o) : o;
  return {
    pathname: u ? (u.startsWith("/") ? u : cp(u, c)) : c,
    search: pp(h),
    hash: mp(f),
  };
}
function cp(o, c) {
  let u = c.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? u.length > 1 && u.pop() : f !== "." && u.push(f);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function bo(o, c, u, h) {
  return `Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    h
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function dp(o) {
  return o.filter(
    (c, u) => u === 0 || (c.route.path && c.route.path.length > 0)
  );
}
function Nc(o) {
  let c = dp(o);
  return c.map((u, h) => (h === c.length - 1 ? u.pathname : u.pathnameBase));
}
function Sc(o, c, u, h = !1) {
  let f;
  typeof o == "string"
    ? (f = Hn(o))
    : ((f = { ...o }),
      xe(
        !f.pathname || !f.pathname.includes("?"),
        bo("?", "pathname", "search", f)
      ),
      xe(
        !f.pathname || !f.pathname.includes("#"),
        bo("#", "pathname", "hash", f)
      ),
      xe(!f.search || !f.search.includes("#"), bo("#", "search", "hash", f)));
  let v = o === "" || f.pathname === "",
    N = v ? "/" : f.pathname,
    j;
  if (N == null) j = u;
  else {
    let I = c.length - 1;
    if (!h && N.startsWith("..")) {
      let R = N.split("/");
      for (; R[0] === ".."; ) R.shift(), (I -= 1);
      f.pathname = R.join("/");
    }
    j = I >= 0 ? c[I] : "/";
  }
  let w = up(f, j),
    S = N && N !== "/" && N.endsWith("/"),
    T = (v || N === ".") && u.endsWith("/");
  return !w.pathname.endsWith("/") && (S || T) && (w.pathname += "/"), w;
}
var Ot = (o) => o.join("/").replace(/\/\/+/g, "/"),
  fp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pp = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  mp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function hp(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var jc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(jc);
var vp = ["GET", ...jc];
new Set(vp);
var Wn = E.createContext(null);
Wn.displayName = "DataRouter";
var Jl = E.createContext(null);
Jl.displayName = "DataRouterState";
var Ec = E.createContext({ isTransitioning: !1 });
Ec.displayName = "ViewTransition";
var gp = E.createContext(new Map());
gp.displayName = "Fetchers";
var yp = E.createContext(null);
yp.displayName = "Await";
var jt = E.createContext(null);
jt.displayName = "Navigation";
var Mr = E.createContext(null);
Mr.displayName = "Location";
var Dt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Dt.displayName = "Route";
var ls = E.createContext(null);
ls.displayName = "RouteError";
function xp(o, { relative: c } = {}) {
  xe(
    Or(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: h } = E.useContext(jt),
    { hash: f, pathname: v, search: N } = Ir(o, { relative: c }),
    j = v;
  return (
    u !== "/" && (j = v === "/" ? u : Ot([u, v])),
    h.createHref({ pathname: j, search: N, hash: f })
  );
}
function Or() {
  return E.useContext(Mr) != null;
}
function vn() {
  return (
    xe(
      Or(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(Mr).location
  );
}
var Cc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Pc(o) {
  E.useContext(jt).static || E.useLayoutEffect(o);
}
function wp() {
  let { isDataRoute: o } = E.useContext(Dt);
  return o ? Mp() : kp();
}
function kp() {
  xe(
    Or(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = E.useContext(Wn),
    { basename: c, navigator: u } = E.useContext(jt),
    { matches: h } = E.useContext(Dt),
    { pathname: f } = vn(),
    v = JSON.stringify(Nc(h)),
    N = E.useRef(!1);
  return (
    Pc(() => {
      N.current = !0;
    }),
    E.useCallback(
      (w, S = {}) => {
        if ((St(N.current, Cc), !N.current)) return;
        if (typeof w == "number") {
          u.go(w);
          return;
        }
        let T = Sc(w, JSON.parse(v), f, S.relative === "path");
        o == null &&
          c !== "/" &&
          (T.pathname = T.pathname === "/" ? c : Ot([c, T.pathname])),
          (S.replace ? u.replace : u.push)(T, S.state, S);
      },
      [c, u, v, f, o]
    )
  );
}
E.createContext(null);
function Ir(o, { relative: c } = {}) {
  let { matches: u } = E.useContext(Dt),
    { pathname: h } = vn(),
    f = JSON.stringify(Nc(u));
  return E.useMemo(() => Sc(o, JSON.parse(f), h, c === "path"), [o, f, h, c]);
}
function Np(o, c) {
  return _c(o, c);
}
function _c(o, c, u, h) {
  var G;
  xe(
    Or(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f, static: v } = E.useContext(jt),
    { matches: N } = E.useContext(Dt),
    j = N[N.length - 1],
    w = j ? j.params : {},
    S = j ? j.pathname : "/",
    T = j ? j.pathnameBase : "/",
    I = j && j.route;
  {
    let V = (I && I.path) || "";
    Rc(
      S,
      !I || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let R = vn(),
    A;
  if (c) {
    let V = typeof c == "string" ? Hn(c) : c;
    xe(
      T === "/" || ((G = V.pathname) == null ? void 0 : G.startsWith(T)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (A = V);
  } else A = R;
  let z = A.pathname || "/",
    $ = z;
  if (T !== "/") {
    let V = T.replace(/^\//, "").split("/");
    $ = "/" + z.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let D =
    !v && u && u.matches && u.matches.length > 0
      ? u.matches
      : xc(o, { pathname: $ });
  St(
    I || D != null,
    `No routes matched location "${A.pathname}${A.search}${A.hash}" `
  ),
    St(
      D == null ||
        D[D.length - 1].route.element !== void 0 ||
        D[D.length - 1].route.Component !== void 0 ||
        D[D.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = Pp(
    D &&
      D.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, w, V.params),
          pathname: Ot([
            T,
            f.encodeLocation
              ? f.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? T
              : Ot([
                  T,
                  f.encodeLocation
                    ? f.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    N,
    u,
    h
  );
  return c && O
    ? E.createElement(
        Mr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...A,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function Sp() {
  let o = Tp(),
    c = hp(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    u = o instanceof Error ? o.stack : null,
    h = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: h },
    v = { padding: "2px 4px", backgroundColor: h },
    N = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (N = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: v }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, c),
      u ? E.createElement("pre", { style: f }, u) : null,
      N
    )
  );
}
var jp = E.createElement(Sp, null),
  Ep = class extends E.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, c) {
      return c.location !== o.location ||
        (c.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : c.error,
            location: c.location,
            revalidation: o.revalidation || c.revalidation,
          };
    }
    componentDidCatch(o, c) {
      console.error(
        "React Router caught the following error during render",
        o,
        c
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            Dt.Provider,
            { value: this.props.routeContext },
            E.createElement(ls.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Cp({ routeContext: o, match: c, children: u }) {
  let h = E.useContext(Wn);
  return (
    h &&
      h.static &&
      h.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (h.staticContext._deepestRenderedBoundaryId = c.route.id),
    E.createElement(Dt.Provider, { value: o }, u)
  );
}
function Pp(o, c = [], u = null, h = null) {
  if (o == null) {
    if (!u) return null;
    if (u.errors) o = u.matches;
    else if (c.length === 0 && !u.initialized && u.matches.length > 0)
      o = u.matches;
    else return null;
  }
  let f = o,
    v = u == null ? void 0 : u.errors;
  if (v != null) {
    let w = f.findIndex(
      (S) => S.route.id && (v == null ? void 0 : v[S.route.id]) !== void 0
    );
    xe(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        v
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let N = !1,
    j = -1;
  if (u)
    for (let w = 0; w < f.length; w++) {
      let S = f[w];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (j = w),
        S.route.id)
      ) {
        let { loaderData: T, errors: I } = u,
          R =
            S.route.loader &&
            !T.hasOwnProperty(S.route.id) &&
            (!I || I[S.route.id] === void 0);
        if (S.route.lazy || R) {
          (N = !0), j >= 0 ? (f = f.slice(0, j + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, S, T) => {
    let I,
      R = !1,
      A = null,
      z = null;
    u &&
      ((I = v && S.route.id ? v[S.route.id] : void 0),
      (A = S.route.errorElement || jp),
      N &&
        (j < 0 && T === 0
          ? (Rc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (R = !0),
            (z = null))
          : j === T &&
            ((R = !0), (z = S.route.hydrateFallbackElement || null))));
    let $ = c.concat(f.slice(0, T + 1)),
      D = () => {
        let O;
        return (
          I
            ? (O = A)
            : R
            ? (O = z)
            : S.route.Component
            ? (O = E.createElement(S.route.Component, null))
            : S.route.element
            ? (O = S.route.element)
            : (O = w),
          E.createElement(Cp, {
            match: S,
            routeContext: { outlet: w, matches: $, isDataRoute: u != null },
            children: O,
          })
        );
      };
    return u && (S.route.ErrorBoundary || S.route.errorElement || T === 0)
      ? E.createElement(Ep, {
          location: u.location,
          revalidation: u.revalidation,
          component: A,
          error: I,
          children: D(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function is(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _p(o) {
  let c = E.useContext(Wn);
  return xe(c, is(o)), c;
}
function Rp(o) {
  let c = E.useContext(Jl);
  return xe(c, is(o)), c;
}
function Lp(o) {
  let c = E.useContext(Dt);
  return xe(c, is(o)), c;
}
function os(o) {
  let c = Lp(o),
    u = c.matches[c.matches.length - 1];
  return (
    xe(
      u.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function zp() {
  return os("useRouteId");
}
function Tp() {
  var h;
  let o = E.useContext(ls),
    c = Rp("useRouteError"),
    u = os("useRouteError");
  return o !== void 0 ? o : (h = c.errors) == null ? void 0 : h[u];
}
function Mp() {
  let { router: o } = _p("useNavigate"),
    c = os("useNavigate"),
    u = E.useRef(!1);
  return (
    Pc(() => {
      u.current = !0;
    }),
    E.useCallback(
      async (f, v = {}) => {
        St(u.current, Cc),
          u.current &&
            (typeof f == "number"
              ? o.navigate(f)
              : await o.navigate(f, { fromRouteId: c, ...v }));
      },
      [o, c]
    )
  );
}
var gc = {};
function Rc(o, c, u) {
  !c && !gc[o] && ((gc[o] = !0), St(!1, u));
}
E.memo(Op);
function Op({ routes: o, future: c, state: u }) {
  return _c(o, void 0, u, c);
}
function Lc(o) {
  xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Ip({
  basename: o = "/",
  children: c = null,
  location: u,
  navigationType: h = "POP",
  navigator: f,
  static: v = !1,
}) {
  xe(
    !Or(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let N = o.replace(/^\/*/, "/"),
    j = E.useMemo(
      () => ({ basename: N, navigator: f, static: v, future: {} }),
      [N, f, v]
    );
  typeof u == "string" && (u = Hn(u));
  let {
      pathname: w = "/",
      search: S = "",
      hash: T = "",
      state: I = null,
      key: R = "default",
    } = u,
    A = E.useMemo(() => {
      let z = It(w, N);
      return z == null
        ? null
        : {
            location: { pathname: z, search: S, hash: T, state: I, key: R },
            navigationType: h,
          };
    }, [N, w, S, T, I, R, h]);
  return (
    St(
      A != null,
      `<Router basename="${N}"> is not able to match the URL "${w}${S}${T}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    A == null
      ? null
      : E.createElement(
          jt.Provider,
          { value: j },
          E.createElement(Mr.Provider, { children: c, value: A })
        )
  );
}
function Dp({ children: o, location: c }) {
  return Np(ns(o), c);
}
function ns(o, c = []) {
  let u = [];
  return (
    E.Children.forEach(o, (h, f) => {
      if (!E.isValidElement(h)) return;
      let v = [...c, f];
      if (h.type === E.Fragment) {
        u.push.apply(u, ns(h.props.children, v));
        return;
      }
      xe(
        h.type === Lc,
        `[${
          typeof h.type == "string" ? h.type : h.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xe(
          !h.props.index || !h.props.children,
          "An index route cannot have child routes."
        );
      let N = {
        id: h.props.id || v.join("-"),
        caseSensitive: h.props.caseSensitive,
        element: h.props.element,
        Component: h.props.Component,
        index: h.props.index,
        path: h.props.path,
        loader: h.props.loader,
        action: h.props.action,
        hydrateFallbackElement: h.props.hydrateFallbackElement,
        HydrateFallback: h.props.HydrateFallback,
        errorElement: h.props.errorElement,
        ErrorBoundary: h.props.ErrorBoundary,
        hasErrorBoundary:
          h.props.hasErrorBoundary === !0 ||
          h.props.ErrorBoundary != null ||
          h.props.errorElement != null,
        shouldRevalidate: h.props.shouldRevalidate,
        handle: h.props.handle,
        lazy: h.props.lazy,
      };
      h.props.children && (N.children = ns(h.props.children, v)), u.push(N);
    }),
    u
  );
}
var Xl = "get",
  Gl = "application/x-www-form-urlencoded";
function bl(o) {
  return o != null && typeof o.tagName == "string";
}
function Fp(o) {
  return bl(o) && o.tagName.toLowerCase() === "button";
}
function $p(o) {
  return bl(o) && o.tagName.toLowerCase() === "form";
}
function Up(o) {
  return bl(o) && o.tagName.toLowerCase() === "input";
}
function Ap(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Bp(o, c) {
  return o.button === 0 && (!c || c === "_self") && !Ap(o);
}
var Yl = null;
function Hp() {
  if (Yl === null)
    try {
      new FormData(document.createElement("form"), 0), (Yl = !1);
    } catch {
      Yl = !0;
    }
  return Yl;
}
var Wp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function es(o) {
  return o != null && !Wp.has(o)
    ? (St(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`
      ),
      null)
    : o;
}
function Vp(o, c) {
  let u, h, f, v, N;
  if ($p(o)) {
    let j = o.getAttribute("action");
    (h = j ? It(j, c) : null),
      (u = o.getAttribute("method") || Xl),
      (f = es(o.getAttribute("enctype")) || Gl),
      (v = new FormData(o));
  } else if (Fp(o) || (Up(o) && (o.type === "submit" || o.type === "image"))) {
    let j = o.form;
    if (j == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = o.getAttribute("formaction") || j.getAttribute("action");
    if (
      ((h = w ? It(w, c) : null),
      (u = o.getAttribute("formmethod") || j.getAttribute("method") || Xl),
      (f =
        es(o.getAttribute("formenctype")) ||
        es(j.getAttribute("enctype")) ||
        Gl),
      (v = new FormData(j, o)),
      !Hp())
    ) {
      let { name: S, type: T, value: I } = o;
      if (T === "image") {
        let R = S ? `${S}.` : "";
        v.append(`${R}x`, "0"), v.append(`${R}y`, "0");
      } else S && v.append(S, I);
    }
  } else {
    if (bl(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = Xl), (h = null), (f = Gl), (N = o);
  }
  return (
    v && f === "text/plain" && ((N = v), (v = void 0)),
    { action: h, method: u.toLowerCase(), encType: f, formData: v, body: N }
  );
}
function ss(o, c) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(c);
}
async function Qp(o, c) {
  if (o.id in c) return c[o.id];
  try {
    let u = await import(o.module);
    return (c[o.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Kp(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function Yp(o, c, u) {
  let h = await Promise.all(
    o.map(async (f) => {
      let v = c.routes[f.route.id];
      if (v) {
        let N = await Qp(v, u);
        return N.links ? N.links() : [];
      }
      return [];
    })
  );
  return qp(
    h
      .flat(1)
      .filter(Kp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function yc(o, c, u, h, f, v) {
  let N = (w, S) => (u[S] ? w.route.id !== u[S].route.id : !0),
    j = (w, S) => {
      var T;
      return (
        u[S].pathname !== w.pathname ||
        (((T = u[S].route.path) == null ? void 0 : T.endsWith("*")) &&
          u[S].params["*"] !== w.params["*"])
      );
    };
  return v === "assets"
    ? c.filter((w, S) => N(w, S) || j(w, S))
    : v === "data"
    ? c.filter((w, S) => {
        var I;
        let T = h.routes[w.route.id];
        if (!T || !T.hasLoader) return !1;
        if (N(w, S) || j(w, S)) return !0;
        if (w.route.shouldRevalidate) {
          let R = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((I = u[0]) == null ? void 0 : I.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function Xp(o, c, { includeHydrateFallback: u } = {}) {
  return Gp(
    o
      .map((h) => {
        let f = c.routes[h.route.id];
        if (!f) return [];
        let v = [f.module];
        return (
          f.clientActionModule && (v = v.concat(f.clientActionModule)),
          f.clientLoaderModule && (v = v.concat(f.clientLoaderModule)),
          u &&
            f.hydrateFallbackModule &&
            (v = v.concat(f.hydrateFallbackModule)),
          f.imports && (v = v.concat(f.imports)),
          v
        );
      })
      .flat(1)
  );
}
function Gp(o) {
  return [...new Set(o)];
}
function Zp(o) {
  let c = {},
    u = Object.keys(o).sort();
  for (let h of u) c[h] = o[h];
  return c;
}
function qp(o, c) {
  let u = new Set();
  return (
    new Set(c),
    o.reduce((h, f) => {
      let v = JSON.stringify(Zp(f));
      return u.has(v) || (u.add(v), h.push({ key: v, link: f })), h;
    }, [])
  );
}
var Jp = new Set([100, 101, 204, 205]);
function bp(o, c) {
  let u =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    u.pathname === "/"
      ? (u.pathname = "_root.data")
      : c && It(u.pathname, c) === "/"
      ? (u.pathname = `${c.replace(/\/$/, "")}/_root.data`)
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
    u
  );
}
function zc() {
  let o = E.useContext(Wn);
  return (
    ss(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function em() {
  let o = E.useContext(Jl);
  return (
    ss(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var as = E.createContext(void 0);
as.displayName = "FrameworkContext";
function Tc() {
  let o = E.useContext(as);
  return (
    ss(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function tm(o, c) {
  let u = E.useContext(as),
    [h, f] = E.useState(!1),
    [v, N] = E.useState(!1),
    {
      onFocus: j,
      onBlur: w,
      onMouseEnter: S,
      onMouseLeave: T,
      onTouchStart: I,
    } = c,
    R = E.useRef(null);
  E.useEffect(() => {
    if ((o === "render" && N(!0), o === "viewport")) {
      let $ = (O) => {
          O.forEach((G) => {
            N(G.isIntersecting);
          });
        },
        D = new IntersectionObserver($, { threshold: 0.5 });
      return (
        R.current && D.observe(R.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [o]),
    E.useEffect(() => {
      if (h) {
        let $ = setTimeout(() => {
          N(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [h]);
  let A = () => {
      f(!0);
    },
    z = () => {
      f(!1), N(!1);
    };
  return u
    ? o !== "intent"
      ? [v, R, {}]
      : [
          v,
          R,
          {
            onFocus: zr(j, A),
            onBlur: zr(w, z),
            onMouseEnter: zr(S, A),
            onMouseLeave: zr(T, z),
            onTouchStart: zr(I, A),
          },
        ]
    : [!1, R, {}];
}
function zr(o, c) {
  return (u) => {
    o && o(u), u.defaultPrevented || c(u);
  };
}
function nm({ page: o, ...c }) {
  let { router: u } = zc(),
    h = E.useMemo(() => xc(u.routes, o, u.basename), [u.routes, o, u.basename]);
  return h ? E.createElement(lm, { page: o, matches: h, ...c }) : null;
}
function rm(o) {
  let { manifest: c, routeModules: u } = Tc(),
    [h, f] = E.useState([]);
  return (
    E.useEffect(() => {
      let v = !1;
      return (
        Yp(o, c, u).then((N) => {
          v || f(N);
        }),
        () => {
          v = !0;
        }
      );
    }, [o, c, u]),
    h
  );
}
function lm({ page: o, matches: c, ...u }) {
  let h = vn(),
    { manifest: f, routeModules: v } = Tc(),
    { basename: N } = zc(),
    { loaderData: j, matches: w } = em(),
    S = E.useMemo(() => yc(o, c, w, f, h, "data"), [o, c, w, f, h]),
    T = E.useMemo(() => yc(o, c, w, f, h, "assets"), [o, c, w, f, h]),
    I = E.useMemo(() => {
      if (o === h.pathname + h.search + h.hash) return [];
      let z = new Set(),
        $ = !1;
      if (
        (c.forEach((O) => {
          var V;
          let G = f.routes[O.route.id];
          !G ||
            !G.hasLoader ||
            ((!S.some((b) => b.route.id === O.route.id) &&
              O.route.id in j &&
              (V = v[O.route.id]) != null &&
              V.shouldRevalidate) ||
            G.hasClientLoader
              ? ($ = !0)
              : z.add(O.route.id));
        }),
        z.size === 0)
      )
        return [];
      let D = bp(o, N);
      return (
        $ &&
          z.size > 0 &&
          D.searchParams.set(
            "_routes",
            c
              .filter((O) => z.has(O.route.id))
              .map((O) => O.route.id)
              .join(",")
          ),
        [D.pathname + D.search]
      );
    }, [N, j, h, f, S, c, o, v]),
    R = E.useMemo(() => Xp(T, f), [T, f]),
    A = rm(T);
  return E.createElement(
    E.Fragment,
    null,
    I.map((z) =>
      E.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...u,
      })
    ),
    R.map((z) =>
      E.createElement("link", { key: z, rel: "modulepreload", href: z, ...u })
    ),
    A.map(({ key: z, link: $ }) => E.createElement("link", { key: z, ...$ }))
  );
}
function im(...o) {
  return (c) => {
    o.forEach((u) => {
      typeof u == "function" ? u(c) : u != null && (u.current = c);
    });
  };
}
var Mc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Mc && (window.__reactRouterVersion = "7.5.3");
} catch {}
function om({ basename: o, children: c, window: u }) {
  let h = E.useRef();
  h.current == null && (h.current = Yf({ window: u, v5Compat: !0 }));
  let f = h.current,
    [v, N] = E.useState({ action: f.action, location: f.location }),
    j = E.useCallback(
      (w) => {
        E.startTransition(() => N(w));
      },
      [N]
    );
  return (
    E.useLayoutEffect(() => f.listen(j), [f, j]),
    E.createElement(Ip, {
      basename: o,
      children: c,
      location: v.location,
      navigationType: v.action,
      navigator: f,
    })
  );
}
var Oc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ql = E.forwardRef(function (
    {
      onClick: c,
      discover: u = "render",
      prefetch: h = "none",
      relative: f,
      reloadDocument: v,
      replace: N,
      state: j,
      target: w,
      to: S,
      preventScrollReset: T,
      viewTransition: I,
      ...R
    },
    A
  ) {
    let { basename: z } = E.useContext(jt),
      $ = typeof S == "string" && Oc.test(S),
      D,
      O = !1;
    if (typeof S == "string" && $ && ((D = S), Mc))
      try {
        let ke = new URL(window.location.href),
          Le = S.startsWith("//") ? new URL(ke.protocol + S) : new URL(S),
          ht = It(Le.pathname, z);
        Le.origin === ke.origin && ht != null
          ? (S = ht + Le.search + Le.hash)
          : (O = !0);
      } catch {
        St(
          !1,
          `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let G = xp(S, { relative: f }),
      [V, b, ue] = tm(h, R),
      we = cm(S, {
        replace: N,
        state: j,
        target: w,
        preventScrollReset: T,
        relative: f,
        viewTransition: I,
      });
    function ve(ke) {
      c && c(ke), ke.defaultPrevented || we(ke);
    }
    let Ce = E.createElement("a", {
      ...R,
      ...ue,
      href: D || G,
      onClick: O || v ? c : ve,
      ref: im(A, b),
      target: w,
      "data-discover": !$ && u === "render" ? "true" : void 0,
    });
    return V && !$
      ? E.createElement(E.Fragment, null, Ce, E.createElement(nm, { page: G }))
      : Ce;
  });
ql.displayName = "Link";
var sm = E.forwardRef(function (
  {
    "aria-current": c = "page",
    caseSensitive: u = !1,
    className: h = "",
    end: f = !1,
    style: v,
    to: N,
    viewTransition: j,
    children: w,
    ...S
  },
  T
) {
  let I = Ir(N, { relative: S.relative }),
    R = vn(),
    A = E.useContext(Jl),
    { navigator: z, basename: $ } = E.useContext(jt),
    D = A != null && hm(I) && j === !0,
    O = z.encodeLocation ? z.encodeLocation(I).pathname : I.pathname,
    G = R.pathname,
    V =
      A && A.navigation && A.navigation.location
        ? A.navigation.location.pathname
        : null;
  u ||
    ((G = G.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (O = O.toLowerCase())),
    V && $ && (V = It(V, $) || V);
  const b = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let ue = G === O || (!f && G.startsWith(O) && G.charAt(b) === "/"),
    we =
      V != null &&
      (V === O || (!f && V.startsWith(O) && V.charAt(O.length) === "/")),
    ve = { isActive: ue, isPending: we, isTransitioning: D },
    Ce = ue ? c : void 0,
    ke;
  typeof h == "function"
    ? (ke = h(ve))
    : (ke = [
        h,
        ue ? "active" : null,
        we ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Le = typeof v == "function" ? v(ve) : v;
  return E.createElement(
    ql,
    {
      ...S,
      "aria-current": Ce,
      className: ke,
      ref: T,
      style: Le,
      to: N,
      viewTransition: j,
    },
    typeof w == "function" ? w(ve) : w
  );
});
sm.displayName = "NavLink";
var am = E.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: c,
      navigate: u,
      reloadDocument: h,
      replace: f,
      state: v,
      method: N = Xl,
      action: j,
      onSubmit: w,
      relative: S,
      preventScrollReset: T,
      viewTransition: I,
      ...R
    },
    A
  ) => {
    let z = pm(),
      $ = mm(j, { relative: S }),
      D = N.toLowerCase() === "get" ? "get" : "post",
      O = typeof j == "string" && Oc.test(j),
      G = (V) => {
        if ((w && w(V), V.defaultPrevented)) return;
        V.preventDefault();
        let b = V.nativeEvent.submitter,
          ue = (b == null ? void 0 : b.getAttribute("formmethod")) || N;
        z(b || V.currentTarget, {
          fetcherKey: c,
          method: ue,
          navigate: u,
          replace: f,
          state: v,
          relative: S,
          preventScrollReset: T,
          viewTransition: I,
        });
      };
    return E.createElement("form", {
      ref: A,
      method: D,
      action: $,
      onSubmit: h ? w : G,
      ...R,
      "data-discover": !O && o === "render" ? "true" : void 0,
    });
  }
);
am.displayName = "Form";
function um(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ic(o) {
  let c = E.useContext(Wn);
  return xe(c, um(o)), c;
}
function cm(
  o,
  {
    target: c,
    replace: u,
    state: h,
    preventScrollReset: f,
    relative: v,
    viewTransition: N,
  } = {}
) {
  let j = wp(),
    w = vn(),
    S = Ir(o, { relative: v });
  return E.useCallback(
    (T) => {
      if (Bp(T, c)) {
        T.preventDefault();
        let I = u !== void 0 ? u : Tr(w) === Tr(S);
        j(o, {
          replace: I,
          state: h,
          preventScrollReset: f,
          relative: v,
          viewTransition: N,
        });
      }
    },
    [w, j, S, u, h, c, o, f, v, N]
  );
}
var dm = 0,
  fm = () => `__${String(++dm)}__`;
function pm() {
  let { router: o } = Ic("useSubmit"),
    { basename: c } = E.useContext(jt),
    u = zp();
  return E.useCallback(
    async (h, f = {}) => {
      let { action: v, method: N, encType: j, formData: w, body: S } = Vp(h, c);
      if (f.navigate === !1) {
        let T = f.fetcherKey || fm();
        await o.fetch(T, u, f.action || v, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: S,
          formMethod: f.method || N,
          formEncType: f.encType || j,
          flushSync: f.flushSync,
        });
      } else
        await o.navigate(f.action || v, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: S,
          formMethod: f.method || N,
          formEncType: f.encType || j,
          replace: f.replace,
          state: f.state,
          fromRouteId: u,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [o, c, u]
  );
}
function mm(o, { relative: c } = {}) {
  let { basename: u } = E.useContext(jt),
    h = E.useContext(Dt);
  xe(h, "useFormAction must be used inside a RouteContext");
  let [f] = h.matches.slice(-1),
    v = { ...Ir(o || ".", { relative: c }) },
    N = vn();
  if (o == null) {
    v.search = N.search;
    let j = new URLSearchParams(v.search),
      w = j.getAll("index");
    if (w.some((T) => T === "")) {
      j.delete("index"),
        w.filter((I) => I).forEach((I) => j.append("index", I));
      let T = j.toString();
      v.search = T ? `?${T}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      f.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (v.pathname = v.pathname === "/" ? u : Ot([u, v.pathname])),
    Tr(v)
  );
}
function hm(o, c = {}) {
  let u = E.useContext(Ec);
  xe(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: h } = Ic("useViewTransitionState"),
    f = Ir(o, { relative: c.relative });
  if (!u.isTransitioning) return !1;
  let v = It(u.currentLocation.pathname, h) || u.currentLocation.pathname,
    N = It(u.nextLocation.pathname, h) || u.nextLocation.pathname;
  return Zl(f.pathname, N) != null || Zl(f.pathname, v) != null;
}
new TextEncoder();
[...Jp];
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var vm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = (o) =>
    o
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ae = (o, c) => {
    const u = E.forwardRef(
      (
        {
          color: h = "currentColor",
          size: f = 24,
          strokeWidth: v = 2,
          absoluteStrokeWidth: N,
          className: j = "",
          children: w,
          ...S
        },
        T
      ) =>
        E.createElement(
          "svg",
          {
            ref: T,
            ...vm,
            width: f,
            height: f,
            stroke: h,
            strokeWidth: N ? (Number(v) * 24) / Number(f) : v,
            className: ["lucide", `lucide-${gm(o)}`, j].join(" "),
            ...S,
          },
          [
            ...c.map(([I, R]) => E.createElement(I, R)),
            ...(Array.isArray(w) ? w : [w]),
          ]
        )
    );
    return (u.displayName = `${o}`), u;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = ae("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = ae("Axe", [
  ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" }],
  ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = ae("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = ae("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = ae("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = ae("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dc = ae("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = ae("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = ae("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = ae("PaintBucket", [
  [
    "path",
    {
      d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
      key: "irua1i",
    },
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  [
    "path",
    {
      d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
      key: "xk76lq",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const us = ae("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = ae("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8",
    },
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = ae("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = ae("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $c = ae("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = ae("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uc = ae("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dm = ae("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = ae("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = ae("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Bm = () => {
    const [o, c] = E.useState(!1),
      [u, h] = E.useState(!1);
    E.useEffect(() => {
      const v = () => {
        window.scrollY > 10 ? h(!0) : h(!1);
      };
      return (
        window.addEventListener("scroll", v),
        () => window.removeEventListener("scroll", v)
      );
    }, []);
    const f = () => {
      c(!o);
    };
    return s.jsxs("header", {
      className: `fixed w-full z-50 transition-all duration-300 ${
        u ? "bg-white shadow-md py-2" : "py-4"
      }`,
      children: [
        s.jsx("div", {
          className: "container-custom",
          children: s.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              s.jsx("div", {
                className: "flex items-center",
                children: s.jsxs("a", {
                  href: "/",
                  className: `text-2xl font-bold ${
                    u ? "text-brown-800" : "text-white"
                  } flex items-center drop-shadow-md`,
                  children: [
                    s.jsx("span", {
                      className: u ? "text-green-700" : "text-green-100",
                      children: "Лес",
                    }),
                    s.jsx("span", {
                      className: u ? "text-brown-700" : "text-white",
                      children: "Мастер",
                    }),
                  ],
                }),
              }),
              s.jsxs("nav", {
                className: "hidden md:flex items-center space-x-8",
                children: [
                  s.jsx("a", {
                    href: "#products",
                    className: `nav-link ${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } font-medium drop-shadow-md`,
                    children: "Продукция",
                  }),
                  s.jsxs("div", {
                    className: "relative group",
                    children: [
                      s.jsxs("button", {
                        className: `nav-link flex items-center ${
                          u
                            ? "text-gray-700 hover:text-green-700"
                            : "text-white hover:text-green-100"
                        } font-medium drop-shadow-md`,
                        children: [
                          "Категории ",
                          s.jsx(Nm, { size: 16, className: "ml-1" }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top",
                        children: [
                          s.jsx("a", {
                            href: "#plywood",
                            className:
                              "block px-4 py-2 text-sm hover:bg-brown-50 font-medium text-green-700",
                            children: "Фанера",
                          }),
                          s.jsx("a", {
                            href: "#lumber",
                            className:
                              "block px-4 py-2 text-sm hover:bg-brown-50",
                            children: "Пиломатериалы",
                          }),
                          s.jsx("a", {
                            href: "#hardwood",
                            className:
                              "block px-4 py-2 text-sm hover:bg-brown-50",
                            children: "Твёрдая древесина",
                          }),
                          s.jsx("a", {
                            href: "#softwood",
                            className:
                              "block px-4 py-2 text-sm hover:bg-brown-50",
                            children: "Мягкая древесина",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("a", {
                    href: "#about",
                    className: `nav-link ${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } font-medium drop-shadow-md`,
                    children: "О нас",
                  }),
                  s.jsx("a", {
                    href: "#testimonials",
                    className: `nav-link ${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } font-medium drop-shadow-md`,
                    children: "Отзывы",
                  }),
                  s.jsx("a", {
                    href: "#contact",
                    className: `nav-link ${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } font-medium drop-shadow-md`,
                    children: "Контакты",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  s.jsx("button", {
                    className: `${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } transition-colors duration-300 drop-shadow-md`,
                    children: s.jsx(Mm, { size: 20 }),
                  }),
                  s.jsx("button", {
                    className: `${
                      u
                        ? "text-gray-700 hover:text-green-700"
                        : "text-white hover:text-green-100"
                    } transition-colors duration-300 drop-shadow-md`,
                    children: s.jsx($c, { size: 20 }),
                  }),
                  s.jsx("button", {
                    onClick: f,
                    className: `md:hidden ${
                      u ? "text-gray-700" : "text-white"
                    } drop-shadow-md`,
                    children: o
                      ? s.jsx(Um, { size: 24 })
                      : s.jsx(Rm, { size: 24 }),
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: `md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
            o ? "translate-y-0" : "-translate-y-full"
          }`,
          children: s.jsx("div", {
            className: "container-custom py-4",
            children: s.jsxs("nav", {
              className: "flex flex-col space-y-4",
              children: [
                s.jsx("a", {
                  href: "#products",
                  className: "nav-link py-2",
                  children: "Продукция",
                }),
                s.jsx("a", {
                  href: "#plywood",
                  className: "nav-link py-2 pl-4 font-medium text-green-700",
                  children: "- Фанера",
                }),
                s.jsx("a", {
                  href: "#lumber",
                  className: "nav-link py-2 pl-4",
                  children: "- Пиломатериалы",
                }),
                s.jsx("a", {
                  href: "#hardwood",
                  className: "nav-link py-2 pl-4",
                  children: "- Твёрдая древесина",
                }),
                s.jsx("a", {
                  href: "#softwood",
                  className: "nav-link py-2 pl-4",
                  children: "- Мягкая древесина",
                }),
                s.jsx("a", {
                  href: "#about",
                  className: "nav-link py-2",
                  children: "О нас",
                }),
                s.jsx("a", {
                  href: "#testimonials",
                  className: "nav-link py-2",
                  children: "Отзывы",
                }),
                s.jsx("a", {
                  href: "#contact",
                  className: "nav-link py-2",
                  children: "Контакты",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Hm = () =>
    s.jsxs("section", {
      className: "relative h-hero pt-24 overflow-hidden",
      children: [
        s.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            s.jsx("img", {
              src: "/header.webp",
              alt: "Высококачественные пиломатериалы и фанера",
              className: "w-full h-full object-cover",
            }),
            s.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-black/70 to-black/30",
            }),
          ],
        }),
        s.jsx("div", {
          className:
            "container-custom relative z-10 h-full flex flex-col justify-center",
          children: s.jsxs("div", {
            className: "max-w-2xl text-white",
            children: [
              s.jsx("span", {
                className:
                  "inline-block px-4 py-1 mb-4 bg-green-700 text-white rounded-full text-sm font-medium",
                children: "Высококачественные пиломатериалы и фанера",
              }),
              s.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight",
                children: [
                  "Качественная фанера и",
                  s.jsx("br", {}),
                  "пиломатериалы",
                ],
              }),
              s.jsx("p", {
                className: "text-lg md:text-xl mb-8 text-gray-100",
                children:
                  "От строительных проектов до тонкой деревообработки - у нас есть высококачественные материалы для любых задач.",
              }),
              s.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                  s.jsxs("a", {
                    href: "#products",
                    className: "btn-primary flex items-center justify-center",
                    children: [
                      "Смотреть продукцию ",
                      s.jsx(ym, { size: 18, className: "ml-2" }),
                    ],
                  }),
                  s.jsx("a", {
                    href: "#contact",
                    className: "btn-secondary flex items-center justify-center",
                    children: "Связаться с нами",
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-50 h-16",
        }),
      ],
    }),
  Wm = [
    {
      id: 1,
      icon: s.jsx(_m, { className: "w-10 h-10 text-green-700" }),
      title: "Экологичность",
      description:
        "Вся наша продукция поставляется из сертифицированных лесных хозяйств, обеспечивающих ответственное природопользование.",
    },
    {
      id: 2,
      icon: s.jsx(Om, { className: "w-10 h-10 text-green-700" }),
      title: "Гарантия качества",
      description:
        "Мы гарантируем качество каждого продукта и проводим строгий контроль на всех этапах производства.",
    },
    {
      id: 3,
      icon: s.jsx(Uc, { className: "w-10 h-10 text-green-700" }),
      title: "Быстрая доставка",
      description:
        "Благодаря эффективной логистической сети мы обеспечиваем своевременную доставку для ваших проектов.",
    },
    {
      id: 4,
      icon: s.jsx(xm, { className: "w-10 h-10 text-green-700" }),
      title: "Экспертная поддержка",
      description:
        "Наша команда специалистов всегда готова предоставить профессиональную консультацию по вашим запросам.",
    },
  ],
  Vm = () =>
    s.jsx("section", {
      id: "about",
      className: "py-16 bg-white",
      children: s.jsx("div", {
        className: "container-custom",
        children: s.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("span", {
                  className:
                    "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
                  children: "О компании ЛесМастер",
                }),
                s.jsx("h2", {
                  className: "section-title mb-6",
                  children:
                    "Ваш надёжный партнёр в сфере древесины с 1985 года",
                }),
                s.jsx("p", {
                  className: "text-gray-600 mb-6",
                  children:
                    "Более трёх десятилетий ЛесМастер поставляет высококачественную фанеру и пиломатериалы для строителей, плотников и любителей DIY. Наша приверженность качеству, экологичным практикам и удовлетворённости клиентов сделала нас предпочтительным выбором для древесных материалов в регионе.",
                }),
                s.jsx("p", {
                  className: "text-gray-600 mb-8",
                  children:
                    "Мы гордимся тем, что предлагаем широкий выбор древесной продукции: от строительной фанеры до ценных пород древесины для изготовления мебели. Наша опытная команда гарантирует, что каждое изделие соответствует высочайшим стандартам качества.",
                }),
                s.jsxs("div", {
                  className: "flex flex-wrap gap-4",
                  children: [
                    s.jsx("a", {
                      href: "#contact",
                      className: "btn-primary",
                      children: "Связаться с нами",
                    }),
                    s.jsx("a", {
                      href: "#story",
                      className:
                        "px-6 py-3 text-brown-800 border-2 border-brown-800 rounded-md hover:bg-brown-50 transition-colors duration-300",
                      children: "Наша история",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "relative",
              children: [
                s.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                  children: Wm.map((o) =>
                    s.jsxs(
                      "div",
                      {
                        className:
                          "bg-brown-50 p-6 rounded-lg border border-brown-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1",
                        children: [
                          s.jsx("div", { className: "mb-4", children: o.icon }),
                          s.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: o.title,
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children: o.description,
                          }),
                        ],
                      },
                      o.id
                    )
                  ),
                }),
                s.jsx("div", {
                  className:
                    "absolute -z-10 top-10 left-10 w-full h-full bg-green-100 rounded-lg",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Qm = [
    {
      id: 1,
      title: "Доска обрезная 25x150x6000 мм, сорт 1",
      description:
        "Высококачественная обрезная доска из хвойных пород дерева для строительства и отделки.",
      price: 650,
      oldPrice: 750,
      image: "/images/products/product-1.jpg",
      category: "Доска обрезная",
      inStock: !0,
      link: "/products/doska-obreznaya-25x150",
    },
    {
      id: 2,
      title: "Брус строительный 100x150x6000 мм",
      description:
        "Строительный брус из сосны для каркасного строительства и других конструкций.",
      price: 1200,
      oldPrice: null,
      image: "/images/products/product-2.jpg",
      category: "Брус строительный",
      inStock: !0,
      link: "/products/brus-100x150",
    },
    {
      id: 3,
      title: "Вагонка сосна 16x96x3000 мм, сорт А",
      description:
        "Высококачественная вагонка из сосны для внутренней отделки помещений.",
      price: 320,
      oldPrice: 380,
      image: "/images/products/product-3.jpg",
      category: "Вагонка",
      inStock: !0,
      link: "/products/vagonka-sosna-16x96",
    },
    {
      id: 4,
      title: "Доска пола 28x120x6000 мм, сорт АВ",
      description:
        "Шпунтованная доска пола из сосны для создания прочного и красивого деревянного пола.",
      price: 850,
      oldPrice: null,
      image: "/images/products/product-4.jpg",
      category: "Доска пола",
      inStock: !1,
      link: "/products/doska-pola-28x120",
    },
    {
      id: 5,
      title: "Блок-хаус 36x140x6000 мм, сорт А",
      description:
        "Материал для внешней отделки, имитирующий оцилиндрованное бревно.",
      price: 1100,
      oldPrice: 1250,
      image: "/images/products/product-5.jpg",
      category: "Блок-хаус",
      inStock: !0,
      link: "/products/blok-haus-36x140",
    },
    {
      id: 6,
      title: "Плинтус деревянный 20x45x3000 мм",
      description: "Деревянный плинтус из сосны для отделки помещений.",
      price: 180,
      oldPrice: null,
      image: "/images/products/product-6.jpg",
      category: "Погонажные изделия",
      inStock: !0,
      link: "/products/plintus-20x45",
    },
    {
      id: 7,
      title: "Имитация бруса 20x140x6000 мм, сорт АВ",
      description:
        "Отделочный материал, имитирующий брус, для внешней отделки зданий.",
      price: 720,
      oldPrice: 790,
      image: "/images/products/product-7.jpg",
      category: "Имитация бруса",
      inStock: !0,
      link: "/products/imitaciya-brusa-20x140",
    },
    {
      id: 8,
      title: "Террасная доска 28x140x6000 мм",
      description:
        "Специальная доска для обустройства террас, веранд и садовых дорожек.",
      price: 1450,
      oldPrice: 1600,
      image: "/images/products/product-8.jpg",
      category: "Террасная доска",
      inStock: !0,
      link: "/products/terrasnaya-doska-28x140",
    },
  ],
  Km = () =>
    s.jsx("section", {
      id: "featured-products",
      className: "py-16 bg-brown-50",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Популярные товары",
          }),
          s.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between mb-12",
            children: [
              s.jsx("h2", {
                className: "section-title mb-4 md:mb-0",
                children: "Наши лучшие предложения",
              }),
              s.jsx("a", {
                href: "#products",
                className:
                  "inline-block px-6 py-3 bg-brown-100 text-brown-800 rounded-lg font-medium transition-colors hover:bg-brown-200",
                children: "Все товары",
              }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: Qm.slice(0, 8).map((o) =>
              s.jsxs(
                "div",
                {
                  className:
                    "bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col",
                  children: [
                    s.jsx("a", {
                      href: o.link,
                      className: "block h-48 overflow-hidden",
                      children: s.jsx("img", {
                        src: o.image,
                        alt: o.title,
                        className:
                          "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                      }),
                    }),
                    s.jsxs("div", {
                      className: "p-4 flex-grow",
                      children: [
                        s.jsx("span", {
                          className: "text-sm text-gray-500 mb-1 block",
                          children: o.category,
                        }),
                        s.jsx("a", {
                          href: o.link,
                          children: s.jsx("h3", {
                            className:
                              "text-lg font-semibold mb-2 hover:text-green-700 transition-colors line-clamp-2",
                            children: o.title,
                          }),
                        }),
                        s.jsx("p", {
                          className: "text-gray-600 text-sm mb-4 line-clamp-2",
                          children: o.description,
                        }),
                        s.jsxs("div", {
                          className: "mt-auto",
                          children: [
                            s.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-3",
                              children: [
                                s.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    s.jsxs("span", {
                                      className:
                                        "text-xl font-bold text-gray-900",
                                      children: [o.price, " ₽"],
                                    }),
                                    o.oldPrice &&
                                      s.jsxs("span", {
                                        className:
                                          "text-sm text-gray-500 line-through ml-2",
                                        children: [o.oldPrice, " ₽"],
                                      }),
                                  ],
                                }),
                                s.jsx("span", {
                                  className: `text-sm font-medium ${
                                    o.inStock
                                      ? "text-green-600"
                                      : "text-red-500"
                                  }`,
                                  children: o.inStock
                                    ? "В наличии"
                                    : "Под заказ",
                                }),
                              ],
                            }),
                            s.jsxs("button", {
                              className: `w-full py-2 px-4 rounded-lg flex items-center justify-center transition-colors ${
                                o.inStock
                                  ? "bg-green-700 text-white hover:bg-green-800"
                                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                              }`,
                              disabled: !o.inStock,
                              children: [
                                s.jsx($c, { className: "w-5 h-5 mr-2" }),
                                "В корзину",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                o.id
              )
            ),
          }),
          s.jsx("div", {
            className: "text-center mt-12",
            children: s.jsx("a", {
              href: "#products",
              className: "btn-primary",
              children: "Смотреть все товары",
            }),
          }),
        ],
      }),
    }),
  Ym = [
    {
      id: 1,
      title: "Доска обрезная",
      description:
        "Высококачественная обрезная доска различных размеров для строительства и отделки.",
      image: "/images/categories/category-1.jpg",
      link: "/products/obreznoj-pilomaterial",
    },
    {
      id: 2,
      title: "Брус строительный",
      description:
        "Прочный строительный брус для каркасного строительства и других конструкций.",
      image: "/images/categories/category-2.jpg",
      link: "/products/brus",
    },
    {
      id: 3,
      title: "Вагонка",
      description:
        "Отделочный материал для внутренней и внешней отделки помещений.",
      image: "/images/categories/category-3.jpg",
      link: "/products/vagonka",
    },
    {
      id: 4,
      title: "Доска пола",
      description:
        "Специальная доска для создания прочного и красивого деревянного пола.",
      image: "/images/categories/category-4.jpg",
      link: "/products/doska-pola",
    },
    {
      id: 5,
      title: "Блок-хаус",
      description:
        "Материал для внешней отделки, имитирующий оцилиндрованное бревно.",
      image: "/images/categories/category-5.jpg",
      link: "/products/blok-haus",
    },
    {
      id: 6,
      title: "Погонажные изделия",
      description:
        "Плинтусы, наличники, уголки и другие отделочные элементы из дерева.",
      image: "/images/categories/category-6.jpg",
      link: "/products/pogonazhnye-izdeliya",
    },
  ],
  Xm = () =>
    s.jsx("section", {
      id: "categories",
      className: "py-16 bg-white",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Наша продукция",
          }),
          s.jsx("h2", {
            className: "section-title mb-12",
            children: "Категории пиломатериалов",
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: Ym.map((o) =>
              s.jsxs(
                "div",
                {
                  className:
                    "bg-brown-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group",
                  children: [
                    s.jsx("a", {
                      href: o.link,
                      className: "block h-64 overflow-hidden",
                      children: s.jsx("img", {
                        src: o.image,
                        alt: o.title,
                        className:
                          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                      }),
                    }),
                    s.jsxs("div", {
                      className: "p-6",
                      children: [
                        s.jsx("a", {
                          href: o.link,
                          children: s.jsx("h3", {
                            className:
                              "text-xl font-semibold mb-2 group-hover:text-green-700 transition-colors",
                            children: o.title,
                          }),
                        }),
                        s.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children: o.description,
                        }),
                        s.jsxs("a", {
                          href: o.link,
                          className:
                            "inline-flex items-center text-green-700 font-medium hover:text-green-800",
                          children: [
                            "Подробнее",
                            s.jsx("svg", {
                              className: "w-4 h-4 ml-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                o.id
              )
            ),
          }),
          s.jsx("div", {
            className: "text-center mt-12",
            children: s.jsx("a", {
              href: "#categories",
              className: "btn-primary",
              children: "Смотреть все категории",
            }),
          }),
        ],
      }),
    }),
  Gm = () =>
    s.jsx("section", {
      id: "products",
      className: "py-16 bg-white",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Наша продукция",
          }),
          s.jsx("h2", {
            className: "section-title mb-12",
            children: "Каталог пиломатериалов",
          }),
          s.jsx("div", {
            className: "mb-12 bg-brown-50 p-8 rounded-lg shadow-sm",
            children: s.jsxs("div", {
              className: "flex flex-col md:flex-row gap-8",
              children: [
                s.jsxs("div", {
                  className: "md:w-1/2",
                  children: [
                    s.jsx("h3", {
                      className: "text-2xl font-semibold mb-4 text-brown-800",
                      children: "Фанера высшего качества",
                    }),
                    s.jsx("p", {
                      className: "text-gray-700 mb-4",
                      children:
                        "Мы предлагаем широкий ассортимент фанеры различных сортов и толщин для любых строительных и отделочных работ. Наша фанера отличается высоким качеством, прочностью и долговечностью.",
                    }),
                    s.jsxs("ul", {
                      className: "list-disc list-inside mb-6 text-gray-700",
                      children: [
                        s.jsx("li", {
                          children: "Фанера ФК (внутреннего применения)",
                        }),
                        s.jsx("li", {
                          children: "Фанера ФСФ (повышенной влагостойкости)",
                        }),
                        s.jsx("li", { children: "Ламинированная фанера" }),
                        s.jsx("li", {
                          children:
                            "Фанера различных сортов (1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4, 4/4)",
                        }),
                        s.jsx("li", { children: "Толщина от 4 до 24 мм" }),
                      ],
                    }),
                    s.jsx("a", {
                      href: "#plywood",
                      className: "btn-primary inline-block",
                      children: "Подробнее о фанере",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "md:w-1/2",
                  children: s.jsx("img", {
                    src: "/pilorama/fanera.webp",
                    alt: "Фанера высшего качества",
                    width: "600",
                    height: "400",
                    className: "w-full h-80 object-cover rounded-lg shadow-md",
                  }),
                }),
              ],
            }),
          }),
          s.jsx(Xm, {}),
          s.jsx(Km, {}),
        ],
      }),
    }),
  Zm = [
    {
      id: 1,
      title: "Доставка пиломатериалов",
      description:
        "Быстрая и надежная доставка пиломатериалов по городу и области. Собственный автопарк грузовых автомобилей.",
      icon: s.jsx(Uc, { className: "w-10 h-10 text-green-700" }),
      link: "/services/delivery",
    },
    {
      id: 2,
      title: "Распил по размерам",
      description:
        "Точный распил пиломатериалов по вашим размерам с использованием современного оборудования.",
      icon: s.jsx(zm, { className: "w-10 h-10 text-green-700" }),
      link: "/services/custom-cutting",
    },
    {
      id: 3,
      title: "Строгание",
      description:
        "Профессиональное строгание древесины для получения идеально гладкой поверхности.",
      icon: s.jsx(wm, { className: "w-10 h-10 text-green-700" }),
      link: "/services/planing",
    },
    {
      id: 4,
      title: "Фрезерование",
      description:
        "Изготовление погонажных изделий любой сложности по индивидуальным заказам.",
      icon: s.jsx(Tm, { className: "w-10 h-10 text-green-700" }),
      link: "/services/milling",
    },
    {
      id: 5,
      title: "Сушка древесины",
      description:
        "Камерная сушка пиломатериалов до необходимой влажности с соблюдением всех технологических требований.",
      icon: s.jsx($m, { className: "w-10 h-10 text-green-700" }),
      link: "/services/drying",
    },
    {
      id: 6,
      title: "Обработка антисептиком",
      description:
        "Защитная обработка древесины современными антисептическими составами для продления срока службы.",
      icon: s.jsx(Lm, { className: "w-10 h-10 text-green-700" }),
      link: "/services/antiseptic",
    },
  ],
  qm = () =>
    s.jsx("section", {
      id: "services",
      className: "py-16 bg-brown-50",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Наши услуги",
          }),
          s.jsx("h2", {
            className: "section-title mb-12",
            children: "Что мы предлагаем",
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: Zm.map((o) =>
              s.jsxs(
                "div",
                {
                  className:
                    "bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1",
                  children: [
                    s.jsx("div", { className: "mb-4", children: o.icon }),
                    s.jsx("h3", {
                      className: "text-xl font-semibold mb-3",
                      children: o.title,
                    }),
                    s.jsx("p", {
                      className: "text-gray-600 mb-4",
                      children: o.description,
                    }),
                  ],
                },
                o.id
              )
            ),
          }),
        ],
      }),
    }),
  Mt = [
    {
      id: 1,
      name: "Иван Петров",
      position: "Руководитель строительной компании",
      image: "/images/testimonials/person1.jpg",
      rating: 5,
      text: 'Мы сотрудничаем с "Пилорама Лесмастер" уже более 5 лет. Всегда отличное качество пиломатериалов, точные сроки поставки и профессиональный подход к работе. Рекомендую как надежного поставщика для строительных проектов любой сложности.',
    },
    {
      id: 2,
      name: "Елена Смирнова",
      position: "Дизайнер интерьеров",
      image: "/images/testimonials/person2.jpg",
      rating: 5,
      text: "Заказывала мебельные щиты для нескольких проектов. Качество материала превзошло ожидания - идеальная поверхность, точная геометрия. Отдельное спасибо за помощь в подборе оптимальных вариантов под конкретные задачи.",
    },
    {
      id: 3,
      name: "Алексей Кузнецов",
      position: "Частный застройщик",
      image: "/images/testimonials/person3.jpg",
      rating: 4,
      text: 'Строил дом для своей семьи и заказывал весь пиломатериал в "Лесмастере". Порадовало соотношение цены и качества, а также возможность доставки прямо на участок. Единственный небольшой минус - пришлось немного подождать из-за большого количества заказов.',
    },
    {
      id: 4,
      name: "Ольга Васильева",
      position: "Владелица мебельной мастерской",
      image: "/images/testimonials/person4.jpg",
      rating: 5,
      text: 'Наша мастерская регулярно закупает материалы в "Пилораме Лесмастер". Особенно ценим стабильное качество, индивидуальный подход и возможность заказа нестандартных размеров. Это позволяет нам создавать уникальные предметы мебели для наших клиентов.',
    },
  ],
  Jm = () => {
    const [o, c] = E.useState(0),
      u = () => {
        c((v) => (v === Mt.length - 1 ? 0 : v + 1));
      },
      h = () => {
        c((v) => (v === 0 ? Mt.length - 1 : v - 1));
      },
      f = (v) =>
        Array.from({ length: 5 }).map((N, j) =>
          s.jsx(
            Im,
            {
              className: `w-5 h-5 ${
                j < v ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`,
            },
            j
          )
        );
    return s.jsx("section", {
      className: "py-16 bg-brown-50",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Отзывы клиентов",
          }),
          s.jsx("h2", {
            className: "section-title mb-12",
            children: "Что говорят о нас",
          }),
          s.jsxs("div", {
            className: "relative",
            children: [
              s.jsx("div", {
                className: "max-w-3xl mx-auto",
                children: s.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center mb-6",
                      children: [
                        s.jsx("img", {
                          src: Mt[o].image,
                          alt: Mt[o].name,
                          className: "w-16 h-16 rounded-full object-cover mr-4",
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "font-semibold text-lg",
                              children: Mt[o].name,
                            }),
                            s.jsx("p", {
                              className: "text-gray-600 text-sm",
                              children: Mt[o].position,
                            }),
                            s.jsx("div", {
                              className: "flex mt-1",
                              children: f(Mt[o].rating),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      className: "text-gray-700 italic mb-4",
                      children: ['"', Mt[o].text, '"'],
                    }),
                  ],
                }),
              }),
              s.jsx("button", {
                onClick: h,
                className:
                  "absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brown-100 transition-colors",
                "aria-label": "Предыдущий отзыв",
                children: s.jsx(Sm, { className: "w-6 h-6 text-brown-800" }),
              }),
              s.jsx("button", {
                onClick: u,
                className:
                  "absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brown-100 transition-colors",
                "aria-label": "Следующий отзыв",
                children: s.jsx(jm, { className: "w-6 h-6 text-brown-800" }),
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex justify-center mt-6",
            children: Mt.map((v, N) =>
              s.jsx(
                "button",
                {
                  onClick: () => c(N),
                  className: `w-3 h-3 mx-1 rounded-full ${
                    N === o ? "bg-brown-800" : "bg-brown-200"
                  }`,
                  "aria-label": `Перейти к отзыву ${N + 1}`,
                },
                N
              )
            ),
          }),
        ],
      }),
    });
  },
  bm = [
    {
      id: 1,
      title: "Как выбрать правильный пиломатериал для строительства дома",
      excerpt:
        "Советы экспертов по выбору качественных пиломатериалов для строительства деревянного дома.",
      image: "/images/blog/post1.jpg",
      date: "15 мая 2023",
      author: "Александр Иванов",
      category: "Советы",
      link: "/blog/how-to-choose-lumber",
    },
    {
      id: 2,
      title: "Тренды в деревянном домостроении 2023 года",
      excerpt:
        "Обзор современных тенденций в строительстве деревянных домов и использовании экологичных материалов.",
      image: "/images/blog/post2.jpg",
      date: "3 июня 2023",
      author: "Елена Петрова",
      category: "Тренды",
      link: "/blog/wooden-house-trends-2023",
    },
    {
      id: 3,
      title: "Уход за деревянными изделиями: продлеваем срок службы",
      excerpt:
        "Практические рекомендации по уходу за деревянными изделиями для сохранения их первоначального вида.",
      image: "/images/blog/post3.jpg",
      date: "22 июня 2023",
      author: "Михаил Сидоров",
      category: "Уход",
      link: "/blog/wooden-products-maintenance",
    },
    {
      id: 4,
      title: "Экологичность деревянного строительства: факты и мифы",
      excerpt:
        "Разбираемся, насколько экологично деревянное строительство и какие преимущества оно дает для окружающей среды.",
      image: "/images/blog/post4.jpg",
      date: "10 июля 2023",
      author: "Ольга Смирнова",
      category: "Экология",
      link: "/blog/eco-friendly-wooden-construction",
    },
    {
      id: 5,
      title: "Инновационные технологии обработки древесины",
      excerpt:
        "Обзор современных методов обработки древесины, повышающих долговечность и эстетические качества материала.",
      image: "/images/blog/post5.jpg",
      date: "5 августа 2023",
      author: "Дмитрий Козлов",
      category: "Технологии",
      link: "/blog/innovative-wood-processing",
    },
  ],
  eh = () =>
    s.jsx("section", {
      id: "blog",
      className: "py-16 bg-brown-50",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Наш блог",
          }),
          s.jsx("div", {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between mb-12",
            children: s.jsx("h2", {
              className: "section-title mb-4 md:mb-0",
              children: "Полезные статьи",
            }),
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: bm.map((o) =>
              s.jsx(
                "div",
                {
                  className:
                    "bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1",
                  children: s.jsxs("div", {
                    className: "p-6",
                    children: [
                      s.jsxs("div", {
                        className:
                          "flex items-center text-sm text-gray-500 mb-3",
                        children: [
                          s.jsxs("span", {
                            className: "flex items-center mr-4",
                            children: [
                              s.jsx(km, { className: "w-4 h-4 mr-1" }),
                              o.date,
                            ],
                          }),
                          s.jsxs("span", {
                            className: "flex items-center",
                            children: [
                              s.jsx(Fm, { className: "w-4 h-4 mr-1" }),
                              o.author,
                            ],
                          }),
                        ],
                      }),
                      s.jsx(ql, {
                        to: o.link.replace("/", ""),
                        children: s.jsx("h3", {
                          className:
                            "text-xl font-semibold mb-3 hover:text-green-700 transition-colors",
                          children: o.title,
                        }),
                      }),
                      s.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children: o.excerpt,
                      }),
                      s.jsxs(ql, {
                        to: o.link.replace("/", ""),
                        className:
                          "inline-flex items-center text-green-700 font-medium hover:text-green-800",
                        children: [
                          "Читать далее",
                          s.jsx("svg", {
                            className: "w-4 h-4 ml-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: s.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                              d: "M14 5l7 7m0 0l-7 7m7-7H3",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                o.id
              )
            ),
          }),
          s.jsx("div", {
            className: "text-center mt-12",
            children: s.jsx("a", {
              href: "#blog",
              className: "btn-secondary",
              children: "Посмотреть все статьи",
            }),
          }),
        ],
      }),
    }),
  th = () =>
    s.jsx("section", {
      className: "py-16 bg-green-700 text-white",
      children: s.jsx("div", {
        className: "container-custom",
        children: s.jsxs("div", {
          className:
            "flex flex-col lg:flex-row lg:items-center lg:justify-between",
          children: [
            s.jsxs("div", {
              className: "mb-8 lg:mb-0 lg:max-w-2xl",
              children: [
                s.jsx("h2", {
                  className: "text-3xl font-bold mb-4",
                  children:
                    "Нужны качественные пиломатериалы для вашего проекта?",
                }),
                s.jsx("p", {
                  className: "text-green-100 text-lg mb-6",
                  children:
                    "Свяжитесь с нами сегодня для получения бесплатной консультации и расчета стоимости. Мы поможем подобрать оптимальные материалы под ваши задачи и бюджет.",
                }),
                s.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
                  children: [
                    s.jsx("a", {
                      href: "#contact",
                      className: "btn-white",
                      children: "Связаться с нами",
                    }),
                    s.jsxs("a", {
                      href: "tel:+78001234567",
                      className:
                        "inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg transition-colors hover:bg-white hover:text-green-700",
                      children: [
                        s.jsx(us, { className: "w-5 h-5 mr-2" }),
                        "8 (800) 123-45-67",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-lg text-gray-800 max-w-md",
              children: [
                s.jsx("h3", {
                  className: "text-xl font-semibold mb-4",
                  children: "Получите бесплатный расчет стоимости",
                }),
                s.jsxs("form", {
                  children: [
                    s.jsx("div", {
                      className: "mb-4",
                      children: s.jsx("input", {
                        type: "text",
                        placeholder: "Ваше имя",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                        required: !0,
                      }),
                    }),
                    s.jsx("div", {
                      className: "mb-4",
                      children: s.jsx("input", {
                        type: "tel",
                        placeholder: "Ваш телефон",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                        required: !0,
                      }),
                    }),
                    s.jsx("div", {
                      className: "mb-4",
                      children: s.jsx("textarea", {
                        placeholder: "Опишите ваш проект",
                        rows: 3,
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                      }),
                    }),
                    s.jsx("button", {
                      type: "submit",
                      className:
                        "w-full bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors hover:bg-green-800",
                      children: "Отправить заявку",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  nh = () =>
    s.jsx("section", {
      id: "contact",
      className: "py-16 bg-white",
      children: s.jsx("div", {
        className: "container-custom",
        children: s.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("span", {
                  className:
                    "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
                  children: "Связаться с нами",
                }),
                s.jsx("h2", {
                  className: "section-title mb-6",
                  children: "Контактная информация",
                }),
                s.jsx("p", {
                  className: "text-gray-600 mb-8",
                  children:
                    "Есть вопросы о нашей продукции или нужна индивидуальная консультация? Наша команда готова помочь. Свяжитесь с нами, используя контактную информацию ниже или заполните форму, и мы свяжемся с вами в ближайшее время.",
                }),
                s.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        s.jsx("div", {
                          className: "flex-shrink-0 mt-1",
                          children: s.jsx(Fc, {
                            className: "w-6 h-6 text-green-700",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("h3", {
                              className: "text-lg font-semibold",
                              children: "Наш адрес",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "ул. Лесная 123, г. Деревоград, 94123",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        s.jsx("div", {
                          className: "flex-shrink-0 mt-1",
                          children: s.jsx(us, {
                            className: "w-6 h-6 text-green-700",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("h3", {
                              className: "text-lg font-semibold",
                              children: "Номер телефона",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "(000) 123-4567",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        s.jsx("div", {
                          className: "flex-shrink-0 mt-1",
                          children: s.jsx(Dc, {
                            className: "w-6 h-6 text-green-700",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("h3", {
                              className: "text-lg font-semibold",
                              children: "Электронная почта",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "info@lesmaster.ru",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        s.jsx("div", {
                          className: "flex-shrink-0 mt-1",
                          children: s.jsx(Em, {
                            className: "w-6 h-6 text-green-700",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("h3", {
                              className: "text-lg font-semibold",
                              children: "Часы работы",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "Понедельник-Пятница: 8:00-18:00",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "Суббота: 9:00-16:00",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "Воскресенье: Выходной",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "bg-brown-50 p-8 rounded-lg shadow-md",
              children: [
                s.jsx("h3", {
                  className: "text-2xl font-semibold mb-6",
                  children: "Отправить сообщение",
                }),
                s.jsxs("form", {
                  children: [
                    s.jsxs("div", {
                      className: "mb-4",
                      children: [
                        s.jsx("label", {
                          htmlFor: "name",
                          className: "block text-gray-700 mb-2",
                          children: "Полное имя",
                        }),
                        s.jsx("input", {
                          type: "text",
                          id: "name",
                          className: "form-input",
                          placeholder: "Ваше имя",
                          required: !0,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "mb-4",
                      children: [
                        s.jsx("label", {
                          htmlFor: "email",
                          className: "block text-gray-700 mb-2",
                          children: "Электронная почта",
                        }),
                        s.jsx("input", {
                          type: "email",
                          id: "email",
                          className: "form-input",
                          placeholder: "Ваш email",
                          required: !0,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "mb-4",
                      children: [
                        s.jsx("label", {
                          htmlFor: "phone",
                          className: "block text-gray-700 mb-2",
                          children: "Номер телефона",
                        }),
                        s.jsx("input", {
                          type: "tel",
                          id: "phone",
                          className: "form-input",
                          placeholder: "Ваш телефон",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "mb-4",
                      children: [
                        s.jsx("label", {
                          htmlFor: "subject",
                          className: "block text-gray-700 mb-2",
                          children: "Тема",
                        }),
                        s.jsx("input", {
                          type: "text",
                          id: "subject",
                          className: "form-input",
                          placeholder: "Тема сообщения",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "mb-6",
                      children: [
                        s.jsx("label", {
                          htmlFor: "message",
                          className: "block text-gray-700 mb-2",
                          children: "Сообщение",
                        }),
                        s.jsx("textarea", {
                          id: "message",
                          rows: 4,
                          className: "form-input",
                          placeholder: "Ваше сообщение",
                          required: !0,
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      type: "submit",
                      className: "btn-primary w-full",
                      children: "Отправить сообщение",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  rh = () => {
    const o = new Date().getFullYear();
    return s.jsx("footer", {
      className: "bg-gray-900 text-white pt-16 pb-8",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("a", {
                    href: "/",
                    className: "inline-block mb-6",
                    children: s.jsx("img", {
                      src: "/images/logo-white.svg",
                      alt: "Пилорама",
                      className: "h-10",
                    }),
                  }),
                  s.jsx("p", {
                    className: "text-gray-400 mb-6",
                    children:
                      "Мы предлагаем широкий ассортимент высококачественных пиломатериалов для строительства и отделки. Наша продукция соответствует всем стандартам качества и экологической безопасности.",
                  }),
                  s.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      s.jsx("a", {
                        href: "https://facebook.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: s.jsx(Cm, { className: "w-5 h-5" }),
                      }),
                      s.jsx("a", {
                        href: "https://instagram.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: s.jsx(Pm, { className: "w-5 h-5" }),
                      }),
                      s.jsx("a", {
                        href: "https://youtube.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: s.jsx(Am, { className: "w-5 h-5" }),
                      }),
                      s.jsx("a", {
                        href: "https://twitter.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: s.jsx(Dm, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Быстрые ссылки",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Главная",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#about",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "О нас",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#products",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Продукция",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#services",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Услуги",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#blog",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Блог",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "#contact",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Контакты",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Продукция",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/products/lumber",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Пиломатериалы",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/products/woodwork",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Столярные изделия",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/products/furniture-panels",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Мебельные щиты",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/products/moldings",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Погонажные изделия",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("a", {
                          href: "/products/firewood",
                          className:
                            "text-brown-200 hover:text-white transition-colors",
                          children: "Дрова",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Контакты",
                  }),
                  s.jsxs("ul", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("li", {
                        className: "flex",
                        children: [
                          s.jsx(Fc, {
                            className:
                              "w-5 h-5 text-brown-200 mr-3 flex-shrink-0",
                          }),
                          s.jsx("span", {
                            className: "text-brown-200",
                            children: "ул. Лесная 123, г. Деревоград, 94123",
                          }),
                        ],
                      }),
                      s.jsxs("li", {
                        className: "flex",
                        children: [
                          s.jsx(us, {
                            className:
                              "w-5 h-5 text-brown-200 mr-3 flex-shrink-0",
                          }),
                          s.jsx("span", {
                            className: "text-brown-200",
                            children: "(555) 123-4567",
                          }),
                        ],
                      }),
                      s.jsxs("li", {
                        className: "flex",
                        children: [
                          s.jsx(Dc, {
                            className:
                              "w-5 h-5 text-brown-200 mr-3 flex-shrink-0",
                          }),
                          s.jsx("span", {
                            className: "text-brown-200",
                            children: "info@lesmaster.ru",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("hr", { className: "border-brown-700 mb-8" }),
          s.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:justify-between md:items-center",
            children: [
              s.jsxs("p", {
                className: "text-brown-300 text-sm mb-4 md:mb-0",
                children: ["© ", o, " Пилорама Лесмастер. Все права защищены."],
              }),
              s.jsxs("div", {
                className:
                  "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm",
                children: [
                  s.jsx("a", {
                    href: "/privacy",
                    className:
                      "text-brown-300 hover:text-white transition-colors",
                    children: "Политика конфиденциальности",
                  }),
                  s.jsx("a", {
                    href: "/terms",
                    className:
                      "text-brown-300 hover:text-white transition-colors",
                    children: "Условия использования",
                  }),
                  s.jsx("a", {
                    href: "/sitemap",
                    className:
                      "text-brown-300 hover:text-white transition-colors",
                    children: "Карта сайта",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  lh = () => {
    const o = [
      {
        id: 1,
        title: "Фанера ФК",
        description:
          "Фанера ФК (внутреннего применения) предназначена для использования в сухих помещениях. Изготавливается с использованием карбамидоформальдегидных смол.",
        image: "/pilorama/fanera_fk.webp",
        specs: [
          "Толщина: 4-24 мм",
          "Сорта: 1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4, 4/4",
          "Формат: 1525x1525 мм, 2440x1220 мм",
        ],
      },
      {
        id: 2,
        title: "Фанера ФСФ",
        description:
          "Фанера ФСФ (повышенной влагостойкости) применяется во влажных помещениях и на открытом воздухе под навесом. Производится с использованием фенолформальдегидных смол.",
        image: "/pilorama/fanera_fsf.jpg",
        specs: [
          "Толщина: 4-24 мм",
          "Сорта: 1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4, 4/4",
          "Формат: 1525x1525 мм, 2440x1220 мм",
        ],
      },
      {
        id: 3,
        title: "Ламинированная фанера",
        description:
          "Ламинированная фанера покрыта специальной пленкой, которая придает ей дополнительную прочность, влагостойкость и декоративные качества. Широко применяется в строительстве и производстве мебели.",
        image: "/pilorama/fanera_lam.jpg",
        specs: [
          "Толщина: 9-24 мм",
          "Цвета: темно-коричневый, светло-коричневый",
          "Формат: 2440x1220 мм",
        ],
      },
      {
        id: 4,
        title: "Фанера шлифованная",
        description:
          "Шлифованная фанера имеет гладкую поверхность, готовую к покраске или другой отделке. Идеально подходит для мебельного производства и внутренней отделки.",
        image: "/pilorama/fanera_shlif.jpg",
        specs: [
          "Толщина: 4-24 мм",
          "Сорта: 1/1, 1/2, 2/2",
          "Формат: 1525x1525 мм, 2440x1220 мм",
        ],
      },
    ];
    return s.jsx("section", {
      id: "plywood",
      className: "py-16 bg-brown-50",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [
          s.jsx("span", {
            className:
              "inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium",
            children: "Фанера",
          }),
          s.jsx("h2", {
            className: "section-title mb-6",
            children: "Фанера высшего качества",
          }),
          s.jsx("p", {
            className: "text-gray-700 mb-12 max-w-3xl",
            children:
              "Мы предлагаем широкий ассортимент фанеры от ведущих производителей. Наша продукция соответствует всем стандартам качества и экологической безопасности. Вы можете приобрести фанеру оптом и в розницу с доставкой по городу и области.",
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
            children: o.map((c) =>
              s.jsx(
                "div",
                {
                  className: "bg-white rounded-lg shadow-md overflow-hidden",
                  children: s.jsxs("div", {
                    className: "flex flex-col h-full",
                    children: [
                      s.jsx("div", {
                        className: "h-64 overflow-hidden",
                        children: s.jsx("img", {
                          src: c.image,
                          alt: c.title,
                          className:
                            "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                        }),
                      }),
                      s.jsxs("div", {
                        className: "p-6 flex-grow",
                        children: [
                          s.jsx("h3", {
                            className:
                              "text-xl font-semibold mb-3 text-brown-800",
                            children: c.title,
                          }),
                          s.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: c.description,
                          }),
                          s.jsxs("div", {
                            className: "mt-auto",
                            children: [
                              s.jsx("h4", {
                                className: "font-medium mb-2 text-green-700",
                                children: "Характеристики:",
                              }),
                              s.jsx("ul", {
                                className:
                                  "list-disc list-inside text-gray-700",
                                children: c.specs.map((u, h) =>
                                  s.jsx("li", { children: u }, h)
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "px-6 pb-6",
                        children: s.jsx("a", {
                          href: "#contact",
                          className: "btn-primary w-full text-center",
                          children: "Запросить цену",
                        }),
                      }),
                    ],
                  }),
                },
                c.id
              )
            ),
          }),
          s.jsxs("div", {
            className: "bg-white p-8 rounded-lg shadow-md",
            children: [
              s.jsx("h3", {
                className: "text-xl font-semibold mb-4 text-brown-800",
                children: "Преимущества нашей фанеры",
              }),
              s.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M5 13l4 4L19 7",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Высокое качество",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Вся продукция соответствует ГОСТ и имеет необходимые сертификаты качества",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Оперативная доставка",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Доставляем заказы в кратчайшие сроки собственным транспортом",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Гибкие условия оплаты",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Работаем с наличным и безналичным расчетом, возможна отсрочка платежа",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Большой ассортимент",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "В наличии фанера различных сортов, размеров и толщин",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Профессиональная консультация",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Наши специалисты помогут подобрать оптимальный вариант для ваших задач",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-start",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4",
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-brown-800",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h4", {
                            className: "font-medium mb-2",
                            children: "Гарантия качества",
                          }),
                          s.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Предоставляем гарантию на всю продукцию и возможность возврата",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ih = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(Hm, {}),
        s.jsx(Vm, {}),
        s.jsx(Gm, {}),
        s.jsx(lh, {}),
        s.jsx(qm, {}),
        s.jsx(Jm, {}),
        s.jsx(eh, {}),
        s.jsx(th, {}),
        s.jsx(nh, {}),
      ],
    }),
  oh = () =>
    s.jsxs(om, {
      basename: "/pilorama",
      children: [
        s.jsx(Bm, {}),
        s.jsx(Dp, {
          children: s.jsx(Lc, { path: "/", element: s.jsx(ih, {}) }),
        }),
        s.jsx(rh, {}),
      ],
    });
Qf.createRoot(document.getElementById("root")).render(
  s.jsx(E.StrictMode, { children: s.jsx(oh, {}) })
);
