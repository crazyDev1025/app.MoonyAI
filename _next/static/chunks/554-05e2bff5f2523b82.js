"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [554],
  {
    50815: function (e, t, r) {
      r.d(t, {
        z$: function () {
          return x;
        },
        fC: function () {
          return V;
        },
      });
      var a = r(67294),
        i = r(25360);
      r(73935);
      var s = r(4222),
        l = r(85893),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = a.forwardRef((e, r) => {
            let { asChild: a, ...i } = e,
              u = a ? s.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(u, { ...i, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        n = "Progress",
        [o, d] = (0, i.b)(n),
        [f, c] = o(n),
        y = a.forwardRef((e, t) => {
          var r, a;
          let {
            __scopeProgress: i,
            value: s = null,
            max: n,
            getValueLabel: o = h,
            ...d
          } = e;
          (n || 0 === n) &&
            !b(n) &&
            console.error(
              ((r = `${n}`),
              `Invalid prop \`max\` of value \`${r}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`)
            );
          let c = b(n) ? n : 100;
          null === s ||
            _(s, c) ||
            console.error(
              ((a = `${s}`),
              `Invalid prop \`value\` of value \`${a}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`)
            );
          let y = _(s, c) ? s : null,
            m = g(y) ? o(y, c) : void 0;
          return (0, l.jsx)(f, {
            scope: i,
            value: y,
            max: c,
            children: (0, l.jsx)(u.div, {
              "aria-valuemax": c,
              "aria-valuemin": 0,
              "aria-valuenow": g(y) ? y : void 0,
              "aria-valuetext": m,
              role: "progressbar",
              "data-state": p(y, c),
              "data-value": y ?? void 0,
              "data-max": c,
              ...d,
              ref: t,
            }),
          });
        });
      y.displayName = n;
      var m = "ProgressIndicator",
        v = a.forwardRef((e, t) => {
          let { __scopeProgress: r, ...a } = e,
            i = c(m, r);
          return (0, l.jsx)(u.div, {
            "data-state": p(i.value, i.max),
            "data-value": i.value ?? void 0,
            "data-max": i.max,
            ...a,
            ref: t,
          });
        });
      function h(e, t) {
        return `${Math.round((e / t) * 100)}%`;
      }
      function p(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function g(e) {
        return "number" == typeof e;
      }
      function b(e) {
        return g(e) && !isNaN(e) && e > 0;
      }
      function _(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0;
      }
      v.displayName = m;
      var V = y,
        x = v;
    },
    87536: function (e, t, r) {
      r.d(t, {
        cI: function () {
          return ex;
        },
        qo: function () {
          return L;
        },
      });
      var a = r(67294),
        i = (e) => "checkbox" === e.type,
        s = (e) => e instanceof Date,
        l = (e) => null == e;
      let u = (e) => "object" == typeof e;
      var n = (e) => !l(e) && !Array.isArray(e) && u(e) && !s(e),
        o = (e) =>
          n(e) && e.target
            ? i(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        f = (e, t) => e.has(d(t)),
        c = (e) => {
          let t = e.constructor && e.constructor.prototype;
          return n(t) && t.hasOwnProperty("isPrototypeOf");
        },
        y =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function m(e) {
        let t;
        let r = Array.isArray(e),
          a = "undefined" != typeof FileList && e instanceof FileList;
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else if (!(!(y && (e instanceof Blob || a)) && (r || n(e)))) return e;
        else if (((t = r ? [] : {}), r || c(e)))
          for (let r in e) e.hasOwnProperty(r) && (t[r] = m(e[r]));
        else t = e;
        return t;
      }
      var v = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        h = (e) => void 0 === e,
        p = (e, t, r) => {
          if (!t || !n(e)) return r;
          let a = v(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (l(e) ? e : e[t]),
            e
          );
          return h(a) || a === e ? (h(e[t]) ? r : e[t]) : a;
        },
        g = (e) => "boolean" == typeof e,
        b = (e) => /^\w*$/.test(e),
        _ = (e) => v(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        V = (e, t, r) => {
          let a = -1,
            i = b(t) ? [t] : _(t),
            s = i.length,
            l = s - 1;
          for (; ++a < s; ) {
            let t = i[a],
              s = r;
            if (a !== l) {
              let r = e[t];
              s = n(r) || Array.isArray(r) ? r : isNaN(+i[a + 1]) ? {} : [];
            }
            if ("__proto__" === t || "constructor" === t || "prototype" === t)
              return;
            (e[t] = s), (e = e[t]);
          }
          return e;
        };
      let x = { BLUR: "blur", FOCUS_OUT: "focusout" },
        A = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        w = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        },
        F = a.createContext(null),
        S = () => a.useContext(F);
      var k = (e, t, r, a = !0) => {
          let i = { defaultValues: t._defaultValues };
          for (let s in e)
            Object.defineProperty(i, s, {
              get: () => (
                t._proxyFormState[s] !== A.all &&
                  (t._proxyFormState[s] = !a || A.all),
                r && (r[s] = !0),
                e[s]
              ),
            });
          return i;
        },
        D = (e) => n(e) && !Object.keys(e).length,
        O = (e, t, r, a) => {
          r(e);
          let { name: i, ...s } = e;
          return (
            D(s) ||
            Object.keys(s).length >= Object.keys(t).length ||
            Object.keys(s).find((e) => t[e] === (!a || A.all))
          );
        },
        E = (e) => (Array.isArray(e) ? e : [e]),
        C = (e, t, r) =>
          !e ||
          !t ||
          e === t ||
          E(e).some(
            (e) => e && (r ? e === t : e.startsWith(t) || t.startsWith(e))
          );
      function j(e) {
        let t = a.useRef(e);
        (t.current = e),
          a.useEffect(() => {
            let r =
              !e.disabled &&
              t.current.subject &&
              t.current.subject.subscribe({ next: t.current.next });
            return () => {
              r && r.unsubscribe();
            };
          }, [e.disabled]);
      }
      var N = (e) => "string" == typeof e,
        T = (e, t, r, a, i) =>
          N(e)
            ? (a && t.watch.add(e), p(r, e, i))
            : Array.isArray(e)
            ? e.map((e) => (a && t.watch.add(e), p(r, e)))
            : (a && (t.watchAll = !0), r);
      function L(e) {
        let t = S(),
          {
            control: r = t.control,
            name: i,
            defaultValue: s,
            disabled: l,
            exact: u,
          } = e || {},
          n = a.useRef(i);
        (n.current = i),
          j({
            disabled: l,
            subject: r._subjects.values,
            next: (e) => {
              C(n.current, e.name, u) &&
                d(m(T(n.current, r._names, e.values || r._formValues, !1, s)));
            },
          });
        let [o, d] = a.useState(r._getWatch(i, s));
        return a.useEffect(() => r._removeUnmounted()), o;
      }
      var U = (e, t, r, a, i) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [a]: i || !0,
                },
              }
            : {},
        B = (e) => ({
          isOnSubmit: !e || e === A.onSubmit,
          isOnBlur: e === A.onBlur,
          isOnChange: e === A.onChange,
          isOnAll: e === A.all,
          isOnTouch: e === A.onTouched,
        }),
        M = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
            ));
      let P = (e, t, r, a) => {
        for (let i of r || Object.keys(e)) {
          let r = p(e, i);
          if (r) {
            let { _f: e, ...s } = r;
            if (e) {
              if (
                (e.refs && e.refs[0] && t(e.refs[0], i) && !a) ||
                (e.ref && t(e.ref, e.name) && !a)
              )
                return !0;
              if (P(s, t)) break;
            } else if (n(s) && P(s, t)) break;
          }
        }
      };
      var $ = (e, t, r) => {
          let a = E(p(e, r));
          return V(a, "root", t[r]), V(e, r, a), e;
        },
        q = (e) => "file" === e.type,
        R = (e) => "function" == typeof e,
        I = (e) => {
          if (!y) return !1;
          let t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        W = (e) => N(e),
        H = (e) => "radio" === e.type,
        z = (e) => e instanceof RegExp;
      let G = { value: !1, isValid: !1 },
        J = { value: !0, isValid: !0 };
      var K = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let t = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !h(e[0].attributes.value)
              ? h(e[0].value) || "" === e[0].value
                ? J
                : { value: e[0].value, isValid: !0 }
              : J
            : G;
        }
        return G;
      };
      let Q = { isValid: !1, value: null };
      var X = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              Q
            )
          : Q;
      function Y(e, t, r = "validate") {
        if (W(e) || (Array.isArray(e) && e.every(W)) || (g(e) && !e))
          return { type: r, message: W(e) ? e : "", ref: t };
      }
      var Z = (e) => (n(e) && !z(e) ? e : { value: e, message: "" }),
        ee = async (e, t, r, a, s) => {
          let {
              ref: u,
              refs: o,
              required: d,
              maxLength: f,
              minLength: c,
              min: y,
              max: m,
              pattern: v,
              validate: b,
              name: _,
              valueAsNumber: V,
              mount: x,
              disabled: A,
            } = e._f,
            F = p(t, _);
          if (!x || A) return {};
          let S = o ? o[0] : u,
            k = (e) => {
              a &&
                S.reportValidity &&
                (S.setCustomValidity(g(e) ? "" : e || ""), S.reportValidity());
            },
            O = {},
            E = H(u),
            C = i(u),
            j =
              ((V || q(u)) && h(u.value) && h(F)) ||
              (I(u) && "" === u.value) ||
              "" === F ||
              (Array.isArray(F) && !F.length),
            T = U.bind(null, _, r, O),
            L = (e, t, r, a = w.maxLength, i = w.minLength) => {
              let s = e ? t : r;
              O[_] = {
                type: e ? a : i,
                message: s,
                ref: u,
                ...T(e ? a : i, s),
              };
            };
          if (
            s
              ? !Array.isArray(F) || !F.length
              : d &&
                ((!(E || C) && (j || l(F))) ||
                  (g(F) && !F) ||
                  (C && !K(o).isValid) ||
                  (E && !X(o).isValid))
          ) {
            let { value: e, message: t } = W(d)
              ? { value: !!d, message: d }
              : Z(d);
            if (
              e &&
              ((O[_] = {
                type: w.required,
                message: t,
                ref: S,
                ...T(w.required, t),
              }),
              !r)
            )
              return k(t), O;
          }
          if (!j && (!l(y) || !l(m))) {
            let e, t;
            let a = Z(m),
              i = Z(y);
            if (l(F) || isNaN(F)) {
              let r = u.valueAsDate || new Date(F),
                s = (e) => new Date(new Date().toDateString() + " " + e),
                l = "time" == u.type,
                n = "week" == u.type;
              N(a.value) &&
                F &&
                (e = l
                  ? s(F) > s(a.value)
                  : n
                  ? F > a.value
                  : r > new Date(a.value)),
                N(i.value) &&
                  F &&
                  (t = l
                    ? s(F) < s(i.value)
                    : n
                    ? F < i.value
                    : r < new Date(i.value));
            } else {
              let r = u.valueAsNumber || (F ? +F : F);
              l(a.value) || (e = r > a.value), l(i.value) || (t = r < i.value);
            }
            if ((e || t) && (L(!!e, a.message, i.message, w.max, w.min), !r))
              return k(O[_].message), O;
          }
          if ((f || c) && !j && (N(F) || (s && Array.isArray(F)))) {
            let e = Z(f),
              t = Z(c),
              a = !l(e.value) && F.length > +e.value,
              i = !l(t.value) && F.length < +t.value;
            if ((a || i) && (L(a, e.message, t.message), !r))
              return k(O[_].message), O;
          }
          if (v && !j && N(F)) {
            let { value: e, message: t } = Z(v);
            if (
              z(e) &&
              !F.match(e) &&
              ((O[_] = {
                type: w.pattern,
                message: t,
                ref: u,
                ...T(w.pattern, t),
              }),
              !r)
            )
              return k(t), O;
          }
          if (b) {
            if (R(b)) {
              let e = Y(await b(F, t), S);
              if (e && ((O[_] = { ...e, ...T(w.validate, e.message) }), !r))
                return k(e.message), O;
            } else if (n(b)) {
              let e = {};
              for (let a in b) {
                if (!D(e) && !r) break;
                let i = Y(await b[a](F, t), S, a);
                i &&
                  ((e = { ...i, ...T(a, i.message) }),
                  k(i.message),
                  r && (O[_] = e));
              }
              if (!D(e) && ((O[_] = { ref: S, ...e }), !r)) return O;
            }
          }
          return k(!0), O;
        };
      function et(e, t) {
        let r = Array.isArray(t) ? t : b(t) ? [t] : _(t),
          a =
            1 === r.length
              ? e
              : (function (e, t) {
                  let r = t.slice(0, -1).length,
                    a = 0;
                  for (; a < r; ) e = h(e) ? a++ : e[t[a++]];
                  return e;
                })(e, r),
          i = r.length - 1,
          s = r[i];
        return (
          a && delete a[s],
          0 !== i &&
            ((n(a) && D(a)) ||
              (Array.isArray(a) &&
                (function (e) {
                  for (let t in e)
                    if (e.hasOwnProperty(t) && !h(e[t])) return !1;
                  return !0;
                })(a))) &&
            et(e, r.slice(0, -1)),
          e
        );
      }
      var er = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (t) => {
              for (let r of e) r.next && r.next(t);
            },
            subscribe: (t) => (
              e.push(t),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== t);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        ea = (e) => l(e) || !u(e);
      function ei(e, t) {
        if (ea(e) || ea(t)) return e === t;
        if (s(e) && s(t)) return e.getTime() === t.getTime();
        let r = Object.keys(e),
          a = Object.keys(t);
        if (r.length !== a.length) return !1;
        for (let i of r) {
          let r = e[i];
          if (!a.includes(i)) return !1;
          if ("ref" !== i) {
            let e = t[i];
            if (
              (s(r) && s(e)) ||
              (n(r) && n(e)) ||
              (Array.isArray(r) && Array.isArray(e))
                ? !ei(r, e)
                : r !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var es = (e) => "select-multiple" === e.type,
        el = (e) => H(e) || i(e),
        eu = (e) => I(e) && e.isConnected,
        en = (e) => {
          for (let t in e) if (R(e[t])) return !0;
          return !1;
        };
      function eo(e, t = {}) {
        let r = Array.isArray(e);
        if (n(e) || r)
          for (let r in e)
            Array.isArray(e[r]) || (n(e[r]) && !en(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), eo(e[r], t[r]))
              : l(e[r]) || (t[r] = !0);
        return t;
      }
      var ed = (e, t) =>
          (function e(t, r, a) {
            let i = Array.isArray(t);
            if (n(t) || i)
              for (let i in t)
                Array.isArray(t[i]) || (n(t[i]) && !en(t[i]))
                  ? h(r) || ea(a[i])
                    ? (a[i] = Array.isArray(t[i])
                        ? eo(t[i], [])
                        : { ...eo(t[i]) })
                    : e(t[i], l(r) ? {} : r[i], a[i])
                  : (a[i] = !ei(t[i], r[i]));
            return a;
          })(e, t, eo(t)),
        ef = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) =>
          h(e)
            ? e
            : t
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && N(e)
            ? new Date(e)
            : a
            ? a(e)
            : e;
      function ec(e) {
        let t = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : t.disabled)
          ? void 0
          : q(t)
          ? t.files
          : H(t)
          ? X(e.refs).value
          : es(t)
          ? [...t.selectedOptions].map(({ value: e }) => e)
          : i(t)
          ? K(e.refs).value
          : ef(h(t.value) ? e.ref.value : t.value, e);
      }
      var ey = (e, t, r, a) => {
          let i = {};
          for (let r of e) {
            let e = p(t, r);
            e && V(i, r, e._f);
          }
          return {
            criteriaMode: r,
            names: [...e],
            fields: i,
            shouldUseNativeValidation: a,
          };
        },
        em = (e) =>
          h(e)
            ? e
            : z(e)
            ? e.source
            : n(e)
            ? z(e.value)
              ? e.value.source
              : e.value
            : e;
      let ev = "AsyncFunction";
      var eh = (e) =>
          !!e &&
          !!e.validate &&
          !!(
            (R(e.validate) && e.validate.constructor.name === ev) ||
            (n(e.validate) &&
              Object.values(e.validate).find((e) => e.constructor.name === ev))
          ),
        ep = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function eg(e, t, r) {
        let a = p(e, r);
        if (a || b(r)) return { error: a, name: r };
        let i = r.split(".");
        for (; i.length; ) {
          let a = i.join("."),
            s = p(t, a),
            l = p(e, a);
          if (s && !Array.isArray(s) && r !== a) break;
          if (l && l.type) return { name: a, error: l };
          i.pop();
        }
        return { name: r };
      }
      var eb = (e, t, r, a, i) =>
          !i.isOnAll &&
          (!r && i.isOnTouch
            ? !(t || e)
            : (r ? a.isOnBlur : i.isOnBlur)
            ? !e
            : (r ? !a.isOnChange : !i.isOnChange) || e),
        e_ = (e, t) => !v(p(e, t)).length && et(e, t);
      let eV = {
        mode: A.onSubmit,
        reValidateMode: A.onChange,
        shouldFocusError: !0,
      };
      function ex(e = {}) {
        let t = a.useRef(),
          r = a.useRef(),
          [u, d] = a.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: R(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: R(e.defaultValues) ? void 0 : e.defaultValues,
          });
        t.current ||
          (t.current = {
            ...(function (e = {}) {
              let t,
                r = { ...eV, ...e },
                a = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: R(r.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: r.errors || {},
                  disabled: r.disabled || !1,
                },
                u = {},
                d =
                  ((n(r.defaultValues) || n(r.values)) &&
                    m(r.defaultValues || r.values)) ||
                  {},
                c = r.shouldUnregister ? {} : m(d),
                b = { action: !1, mount: !1, watch: !1 },
                _ = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                w = 0,
                F = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                S = { values: er(), array: er(), state: er() },
                k = B(r.mode),
                O = B(r.reValidateMode),
                C = r.criteriaMode === A.all,
                j = (e) => (t) => {
                  clearTimeout(w), (w = setTimeout(e, t));
                },
                L = async (e) => {
                  if (!r.disabled && (F.isValid || e)) {
                    let e = r.resolver ? D((await J()).errors) : await Q(u, !0);
                    e !== a.isValid && S.state.next({ isValid: e });
                  }
                },
                U = (e, t) => {
                  !r.disabled &&
                    (F.isValidating || F.validatingFields) &&
                    ((e || Array.from(_.mount)).forEach((e) => {
                      e &&
                        (t
                          ? V(a.validatingFields, e, t)
                          : et(a.validatingFields, e));
                    }),
                    S.state.next({
                      validatingFields: a.validatingFields,
                      isValidating: !D(a.validatingFields),
                    }));
                },
                W = (e, t) => {
                  V(a.errors, e, t), S.state.next({ errors: a.errors });
                },
                H = (e, t, r, a) => {
                  let i = p(u, e);
                  if (i) {
                    let s = p(c, e, h(r) ? p(d, e) : r);
                    h(s) || (a && a.defaultChecked) || t
                      ? V(c, e, t ? s : ec(i._f))
                      : Z(e, s),
                      b.mount && L();
                  }
                },
                z = (e, t, i, s, l) => {
                  let n = !1,
                    o = !1,
                    f = { name: e };
                  if (!r.disabled) {
                    let r = !!(p(u, e) && p(u, e)._f && p(u, e)._f.disabled);
                    if (!i || s) {
                      F.isDirty &&
                        ((o = a.isDirty),
                        (a.isDirty = f.isDirty = X()),
                        (n = o !== f.isDirty));
                      let i = r || ei(p(d, e), t);
                      (o = !!(!r && p(a.dirtyFields, e))),
                        i || r ? et(a.dirtyFields, e) : V(a.dirtyFields, e, !0),
                        (f.dirtyFields = a.dirtyFields),
                        (n = n || (F.dirtyFields && !i !== o));
                    }
                    if (i) {
                      let t = p(a.touchedFields, e);
                      t ||
                        (V(a.touchedFields, e, i),
                        (f.touchedFields = a.touchedFields),
                        (n = n || (F.touchedFields && t !== i)));
                    }
                    n && l && S.state.next(f);
                  }
                  return n ? f : {};
                },
                G = (e, i, s, l) => {
                  let u = p(a.errors, e),
                    n = F.isValid && g(i) && a.isValid !== i;
                  if (
                    (r.delayError && s
                      ? (t = j(() => W(e, s)))(r.delayError)
                      : (clearTimeout(w),
                        (t = null),
                        s ? V(a.errors, e, s) : et(a.errors, e)),
                    (s ? !ei(u, s) : u) || !D(l) || n)
                  ) {
                    let t = {
                      ...l,
                      ...(n && g(i) ? { isValid: i } : {}),
                      errors: a.errors,
                      name: e,
                    };
                    (a = { ...a, ...t }), S.state.next(t);
                  }
                },
                J = async (e) => {
                  U(e, !0);
                  let t = await r.resolver(
                    c,
                    r.context,
                    ey(
                      e || _.mount,
                      u,
                      r.criteriaMode,
                      r.shouldUseNativeValidation
                    )
                  );
                  return U(e), t;
                },
                K = async (e) => {
                  let { errors: t } = await J(e);
                  if (e)
                    for (let r of e) {
                      let e = p(t, r);
                      e ? V(a.errors, r, e) : et(a.errors, r);
                    }
                  else a.errors = t;
                  return t;
                },
                Q = async (e, t, i = { valid: !0 }) => {
                  for (let s in e) {
                    let l = e[s];
                    if (l) {
                      let { _f: e, ...u } = l;
                      if (e) {
                        let u = _.array.has(e.name),
                          n = l._f && eh(l._f);
                        n && F.validatingFields && U([s], !0);
                        let o = await ee(
                          l,
                          c,
                          C,
                          r.shouldUseNativeValidation && !t,
                          u
                        );
                        if (
                          (n && F.validatingFields && U([s]),
                          o[e.name] && ((i.valid = !1), t))
                        )
                          break;
                        t ||
                          (p(o, e.name)
                            ? u
                              ? $(a.errors, o, e.name)
                              : V(a.errors, e.name, o[e.name])
                            : et(a.errors, e.name));
                      }
                      D(u) || (await Q(u, t, i));
                    }
                  }
                  return i.valid;
                },
                X = (e, t) =>
                  !r.disabled && (e && t && V(c, e, t), !ei(eA(), d)),
                Y = (e, t, r) =>
                  T(
                    e,
                    _,
                    { ...(b.mount ? c : h(t) ? d : N(e) ? { [e]: t } : t) },
                    r,
                    t
                  ),
                Z = (e, t, r = {}) => {
                  let a = p(u, e),
                    s = t;
                  if (a) {
                    let r = a._f;
                    r &&
                      (r.disabled || V(c, e, ef(t, r)),
                      (s = I(r.ref) && l(t) ? "" : t),
                      es(r.ref)
                        ? [...r.ref.options].forEach(
                            (e) => (e.selected = s.includes(e.value))
                          )
                        : r.refs
                        ? i(r.ref)
                          ? r.refs.length > 1
                            ? r.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(s)
                                    ? !!s.find((t) => t === e.value)
                                    : s === e.value)
                              )
                            : r.refs[0] && (r.refs[0].checked = !!s)
                          : r.refs.forEach((e) => (e.checked = e.value === s))
                        : q(r.ref)
                        ? (r.ref.value = "")
                        : ((r.ref.value = s),
                          r.ref.type ||
                            S.values.next({ name: e, values: { ...c } })));
                  }
                  (r.shouldDirty || r.shouldTouch) &&
                    z(e, s, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && ex(e);
                },
                ea = (e, t, r) => {
                  for (let a in t) {
                    let i = t[a],
                      l = `${e}.${a}`,
                      o = p(u, l);
                    (_.array.has(e) || n(i) || (o && !o._f)) && !s(i)
                      ? ea(l, i, r)
                      : Z(l, i, r);
                  }
                },
                en = (e, t, r = {}) => {
                  let i = p(u, e),
                    s = _.array.has(e),
                    n = m(t);
                  V(c, e, n),
                    s
                      ? (S.array.next({ name: e, values: { ...c } }),
                        (F.isDirty || F.dirtyFields) &&
                          r.shouldDirty &&
                          S.state.next({
                            name: e,
                            dirtyFields: ed(d, c),
                            isDirty: X(e, n),
                          }))
                      : !i || i._f || l(n)
                      ? Z(e, n, r)
                      : ea(e, n, r),
                    M(e, _) && S.state.next({ ...a }),
                    S.values.next({
                      name: b.mount ? e : void 0,
                      values: { ...c },
                    });
                },
                eo = async (e) => {
                  b.mount = !0;
                  let i = e.target,
                    l = i.name,
                    n = !0,
                    d = p(u, l),
                    f = (e) => {
                      n =
                        Number.isNaN(e) ||
                        (s(e) && isNaN(e.getTime())) ||
                        ei(e, p(c, l, e));
                    };
                  if (d) {
                    let s, y;
                    let m = i.type ? ec(d._f) : o(e),
                      v = e.type === x.BLUR || e.type === x.FOCUS_OUT,
                      h =
                        (!ep(d._f) &&
                          !r.resolver &&
                          !p(a.errors, l) &&
                          !d._f.deps) ||
                        eb(v, p(a.touchedFields, l), a.isSubmitted, O, k),
                      g = M(l, _, v);
                    V(c, l, m),
                      v
                        ? (d._f.onBlur && d._f.onBlur(e), t && t(0))
                        : d._f.onChange && d._f.onChange(e);
                    let b = z(l, m, v, !1),
                      A = !D(b) || g;
                    if (
                      (v ||
                        S.values.next({
                          name: l,
                          type: e.type,
                          values: { ...c },
                        }),
                      h)
                    )
                      return (
                        F.isValid && ("onBlur" === r.mode ? v && L() : L()),
                        A && S.state.next({ name: l, ...(g ? {} : b) })
                      );
                    if ((!v && g && S.state.next({ ...a }), r.resolver)) {
                      let { errors: e } = await J([l]);
                      if ((f(m), n)) {
                        let t = eg(a.errors, u, l),
                          r = eg(e, u, t.name || l);
                        (s = r.error), (l = r.name), (y = D(e));
                      }
                    } else
                      U([l], !0),
                        (s = (await ee(d, c, C, r.shouldUseNativeValidation))[
                          l
                        ]),
                        U([l]),
                        f(m),
                        n && (s ? (y = !1) : F.isValid && (y = await Q(u, !0)));
                    n && (d._f.deps && ex(d._f.deps), G(l, y, s, b));
                  }
                },
                ev = (e, t) => {
                  if (p(a.errors, t) && e.focus) return e.focus(), 1;
                },
                ex = async (e, t = {}) => {
                  let i, s;
                  let l = E(e);
                  if (r.resolver) {
                    let t = await K(h(e) ? e : l);
                    (i = D(t)), (s = e ? !l.some((e) => p(t, e)) : i);
                  } else
                    e
                      ? ((s = (
                          await Promise.all(
                            l.map(async (e) => {
                              let t = p(u, e);
                              return await Q(t && t._f ? { [e]: t } : t);
                            })
                          )
                        ).every(Boolean)) ||
                          a.isValid) &&
                        L()
                      : (s = i = await Q(u));
                  return (
                    S.state.next({
                      ...(!N(e) || (F.isValid && i !== a.isValid)
                        ? {}
                        : { name: e }),
                      ...(r.resolver || !e ? { isValid: i } : {}),
                      errors: a.errors,
                    }),
                    t.shouldFocus && !s && P(u, ev, e ? l : _.mount),
                    s
                  );
                },
                eA = (e) => {
                  let t = { ...(b.mount ? c : d) };
                  return h(e) ? t : N(e) ? p(t, e) : e.map((e) => p(t, e));
                },
                ew = (e, t) => ({
                  invalid: !!p((t || a).errors, e),
                  isDirty: !!p((t || a).dirtyFields, e),
                  error: p((t || a).errors, e),
                  isValidating: !!p(a.validatingFields, e),
                  isTouched: !!p((t || a).touchedFields, e),
                }),
                eF = (e, t, r) => {
                  let i = (p(u, e, { _f: {} })._f || {}).ref,
                    {
                      ref: s,
                      message: l,
                      type: n,
                      ...o
                    } = p(a.errors, e) || {};
                  V(a.errors, e, { ...o, ...t, ref: i }),
                    S.state.next({ name: e, errors: a.errors, isValid: !1 }),
                    r && r.shouldFocus && i && i.focus && i.focus();
                },
                eS = (e, t = {}) => {
                  for (let i of e ? E(e) : _.mount)
                    _.mount.delete(i),
                      _.array.delete(i),
                      t.keepValue || (et(u, i), et(c, i)),
                      t.keepError || et(a.errors, i),
                      t.keepDirty || et(a.dirtyFields, i),
                      t.keepTouched || et(a.touchedFields, i),
                      t.keepIsValidating || et(a.validatingFields, i),
                      r.shouldUnregister || t.keepDefaultValue || et(d, i);
                  S.values.next({ values: { ...c } }),
                    S.state.next({
                      ...a,
                      ...(t.keepDirty ? { isDirty: X() } : {}),
                    }),
                    t.keepIsValid || L();
                },
                ek = ({
                  disabled: e,
                  name: t,
                  field: r,
                  fields: a,
                  value: i,
                }) => {
                  if ((g(e) && b.mount) || e) {
                    let s = e ? void 0 : h(i) ? ec(r ? r._f : p(a, t)._f) : i;
                    (!e && (e || h(s))) || V(c, t, s), z(t, s, !1, !1, !0);
                  }
                },
                eD = (e, t = {}) => {
                  let a = p(u, e),
                    i = g(t.disabled) || g(r.disabled);
                  return (
                    V(u, e, {
                      ...(a || {}),
                      _f: {
                        ...(a && a._f ? a._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...t,
                      },
                    }),
                    _.mount.add(e),
                    a
                      ? ek({
                          field: a,
                          disabled: g(t.disabled) ? t.disabled : r.disabled,
                          name: e,
                          value: t.value,
                        })
                      : H(e, !0, t.value),
                    {
                      ...(i ? { disabled: t.disabled || r.disabled } : {}),
                      ...(r.progressive
                        ? {
                            required: !!t.required,
                            min: em(t.min),
                            max: em(t.max),
                            minLength: em(t.minLength),
                            maxLength: em(t.maxLength),
                            pattern: em(t.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: eo,
                      onBlur: eo,
                      ref: (i) => {
                        if (i) {
                          eD(e, t), (a = p(u, e));
                          let r =
                              (h(i.value) &&
                                i.querySelectorAll &&
                                i.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              i,
                            s = el(r),
                            l = a._f.refs || [];
                          (s ? l.find((e) => e === r) : r === a._f.ref) ||
                            (V(u, e, {
                              _f: {
                                ...a._f,
                                ...(s
                                  ? {
                                      refs: [
                                        ...l.filter(eu),
                                        r,
                                        ...(Array.isArray(p(d, e)) ? [{}] : []),
                                      ],
                                      ref: { type: r.type, name: e },
                                    }
                                  : { ref: r }),
                              },
                            }),
                            H(e, !1, void 0, r));
                        } else
                          (a = p(u, e, {}))._f && (a._f.mount = !1),
                            (r.shouldUnregister || t.shouldUnregister) &&
                              !(f(_.array, e) && b.action) &&
                              _.unMount.add(e);
                      },
                    }
                  );
                },
                eO = () => r.shouldFocusError && P(u, ev, _.mount),
                eE = (e, t) => async (i) => {
                  let s;
                  if (
                    (i &&
                      (i.preventDefault && i.preventDefault(),
                      i.persist && i.persist()),
                    r.disabled)
                  ) {
                    t && (await t({ ...a.errors }, i));
                    return;
                  }
                  let l = m(c);
                  if ((S.state.next({ isSubmitting: !0 }), r.resolver)) {
                    let { errors: e, values: t } = await J();
                    (a.errors = e), (l = t);
                  } else await Q(u);
                  if ((et(a.errors, "root"), D(a.errors))) {
                    S.state.next({ errors: {} });
                    try {
                      await e(l, i);
                    } catch (e) {
                      s = e;
                    }
                  } else
                    t && (await t({ ...a.errors }, i)), eO(), setTimeout(eO);
                  if (
                    (S.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: D(a.errors) && !s,
                      submitCount: a.submitCount + 1,
                      errors: a.errors,
                    }),
                    s)
                  )
                    throw s;
                },
                eC = (e, t = {}) => {
                  let i = e ? m(e) : d,
                    s = m(i),
                    l = D(e),
                    n = l ? d : s;
                  if ((t.keepDefaultValues || (d = i), !t.keepValues)) {
                    if (t.keepDirtyValues)
                      for (let e of Array.from(
                        new Set([..._.mount, ...Object.keys(ed(d, c))])
                      ))
                        p(a.dirtyFields, e) ? V(n, e, p(c, e)) : en(e, p(n, e));
                    else {
                      if (y && h(e))
                        for (let e of _.mount) {
                          let t = p(u, e);
                          if (t && t._f) {
                            let e = Array.isArray(t._f.refs)
                              ? t._f.refs[0]
                              : t._f.ref;
                            if (I(e)) {
                              let t = e.closest("form");
                              if (t) {
                                t.reset();
                                break;
                              }
                            }
                          }
                        }
                      u = {};
                    }
                    (c = r.shouldUnregister
                      ? t.keepDefaultValues
                        ? m(d)
                        : {}
                      : m(n)),
                      S.array.next({ values: { ...n } }),
                      S.values.next({ values: { ...n } });
                  }
                  (_ = {
                    mount: t.keepDirtyValues ? _.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (b.mount =
                      !F.isValid || !!t.keepIsValid || !!t.keepDirtyValues),
                    (b.watch = !!r.shouldUnregister),
                    S.state.next({
                      submitCount: t.keepSubmitCount ? a.submitCount : 0,
                      isDirty:
                        !l &&
                        (t.keepDirty
                          ? a.isDirty
                          : !!(t.keepDefaultValues && !ei(e, d))),
                      isSubmitted: !!t.keepIsSubmitted && a.isSubmitted,
                      dirtyFields: l
                        ? {}
                        : t.keepDirtyValues
                        ? t.keepDefaultValues && c
                          ? ed(d, c)
                          : a.dirtyFields
                        : t.keepDefaultValues && e
                        ? ed(d, e)
                        : t.keepDirty
                        ? a.dirtyFields
                        : {},
                      touchedFields: t.keepTouched ? a.touchedFields : {},
                      errors: t.keepErrors ? a.errors : {},
                      isSubmitSuccessful:
                        !!t.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                      isSubmitting: !1,
                    });
                },
                ej = (e, t) => eC(R(e) ? e(c) : e, t);
              return {
                control: {
                  register: eD,
                  unregister: eS,
                  getFieldState: ew,
                  handleSubmit: eE,
                  setError: eF,
                  _executeSchema: J,
                  _getWatch: Y,
                  _getDirty: X,
                  _updateValid: L,
                  _removeUnmounted: () => {
                    for (let e of _.unMount) {
                      let t = p(u, e);
                      t &&
                        (t._f.refs
                          ? t._f.refs.every((e) => !eu(e))
                          : !eu(t._f.ref)) &&
                        eS(e);
                    }
                    _.unMount = new Set();
                  },
                  _updateFieldArray: (e, t = [], i, s, l = !0, n = !0) => {
                    if (s && i && !r.disabled) {
                      if (((b.action = !0), n && Array.isArray(p(u, e)))) {
                        let t = i(p(u, e), s.argA, s.argB);
                        l && V(u, e, t);
                      }
                      if (n && Array.isArray(p(a.errors, e))) {
                        let t = i(p(a.errors, e), s.argA, s.argB);
                        l && V(a.errors, e, t), e_(a.errors, e);
                      }
                      if (
                        F.touchedFields &&
                        n &&
                        Array.isArray(p(a.touchedFields, e))
                      ) {
                        let t = i(p(a.touchedFields, e), s.argA, s.argB);
                        l && V(a.touchedFields, e, t);
                      }
                      F.dirtyFields && (a.dirtyFields = ed(d, c)),
                        S.state.next({
                          name: e,
                          isDirty: X(e, t),
                          dirtyFields: a.dirtyFields,
                          errors: a.errors,
                          isValid: a.isValid,
                        });
                    } else V(c, e, t);
                  },
                  _updateDisabledField: ek,
                  _getFieldArray: (e) =>
                    v(
                      p(
                        b.mount ? c : d,
                        e,
                        r.shouldUnregister ? p(d, e, []) : []
                      )
                    ),
                  _reset: eC,
                  _resetDefaultValues: () =>
                    R(r.defaultValues) &&
                    r.defaultValues().then((e) => {
                      ej(e, r.resetOptions), S.state.next({ isLoading: !1 });
                    }),
                  _updateFormState: (e) => {
                    a = { ...a, ...e };
                  },
                  _disableForm: (e) => {
                    g(e) &&
                      (S.state.next({ disabled: e }),
                      P(
                        u,
                        (t, r) => {
                          let a = p(u, r);
                          a &&
                            ((t.disabled = a._f.disabled || e),
                            Array.isArray(a._f.refs) &&
                              a._f.refs.forEach((t) => {
                                t.disabled = a._f.disabled || e;
                              }));
                        },
                        0,
                        !1
                      ));
                  },
                  _subjects: S,
                  _proxyFormState: F,
                  _setErrors: (e) => {
                    (a.errors = e),
                      S.state.next({ errors: a.errors, isValid: !1 });
                  },
                  get _fields() {
                    return u;
                  },
                  get _formValues() {
                    return c;
                  },
                  get _state() {
                    return b;
                  },
                  set _state(value) {
                    b = value;
                  },
                  get _defaultValues() {
                    return d;
                  },
                  get _names() {
                    return _;
                  },
                  set _names(value) {
                    _ = value;
                  },
                  get _formState() {
                    return a;
                  },
                  set _formState(value) {
                    a = value;
                  },
                  get _options() {
                    return r;
                  },
                  set _options(value) {
                    r = { ...r, ...value };
                  },
                },
                trigger: ex,
                register: eD,
                handleSubmit: eE,
                watch: (e, t) =>
                  R(e)
                    ? S.values.subscribe({ next: (r) => e(Y(void 0, t), r) })
                    : Y(e, t, !0),
                setValue: en,
                getValues: eA,
                reset: ej,
                resetField: (e, t = {}) => {
                  p(u, e) &&
                    (h(t.defaultValue)
                      ? en(e, m(p(d, e)))
                      : (en(e, t.defaultValue), V(d, e, m(t.defaultValue))),
                    t.keepTouched || et(a.touchedFields, e),
                    t.keepDirty ||
                      (et(a.dirtyFields, e),
                      (a.isDirty = t.defaultValue ? X(e, m(p(d, e))) : X())),
                    !t.keepError && (et(a.errors, e), F.isValid && L()),
                    S.state.next({ ...a }));
                },
                clearErrors: (e) => {
                  e && E(e).forEach((e) => et(a.errors, e)),
                    S.state.next({ errors: e ? a.errors : {} });
                },
                unregister: eS,
                setError: eF,
                setFocus: (e, t = {}) => {
                  let r = p(u, e),
                    a = r && r._f;
                  if (a) {
                    let e = a.refs ? a.refs[0] : a.ref;
                    e.focus &&
                      (e.focus(), t.shouldSelect && R(e.select) && e.select());
                  }
                },
                getFieldState: ew,
              };
            })(e),
            formState: u,
          });
        let c = t.current.control;
        return (
          (c._options = e),
          j({
            subject: c._subjects.state,
            next: (e) => {
              O(e, c._proxyFormState, c._updateFormState, !0) &&
                d({ ...c._formState });
            },
          }),
          a.useEffect(() => c._disableForm(e.disabled), [c, e.disabled]),
          a.useEffect(() => {
            if (c._proxyFormState.isDirty) {
              let e = c._getDirty();
              e !== u.isDirty && c._subjects.state.next({ isDirty: e });
            }
          }, [c, u.isDirty]),
          a.useEffect(() => {
            e.values && !ei(e.values, r.current)
              ? (c._reset(e.values, c._options.resetOptions),
                (r.current = e.values),
                d((e) => ({ ...e })))
              : c._resetDefaultValues();
          }, [e.values, c]),
          a.useEffect(() => {
            e.errors && c._setErrors(e.errors);
          }, [e.errors, c]),
          a.useEffect(() => {
            c._state.mount || (c._updateValid(), (c._state.mount = !0)),
              c._state.watch &&
                ((c._state.watch = !1),
                c._subjects.state.next({ ...c._formState })),
              c._removeUnmounted();
          }),
          a.useEffect(() => {
            e.shouldUnregister &&
              c._subjects.values.next({ values: c._getWatch() });
          }, [e.shouldUnregister, c]),
          a.useMemo(() => ({ ...t.current, formState: k(u, c) }), [u, c])
        );
      }
    },
  },
]);
