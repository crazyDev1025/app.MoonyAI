(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [149],
  {
    6400: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: function () {
            return S;
          },
          Fragment: function () {
            return C;
          },
          cloneElement: function () {
            return q;
          },
          createContext: function () {
            return z;
          },
          createElement: function () {
            return k;
          },
          createRef: function () {
            return E;
          },
          h: function () {
            return k;
          },
          hydrate: function () {
            return W;
          },
          isValidElement: function () {
            return a;
          },
          options: function () {
            return r;
          },
          render: function () {
            return U;
          },
          toChildArray: function () {
            return function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  "boolean" == typeof t ||
                  (b(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            };
          },
        });
      var i,
        r,
        s,
        a,
        o,
        c,
        l,
        u,
        d,
        h,
        p,
        f,
        m,
        g = {},
        _ = [],
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        b = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t, n) {
        var r,
          s,
          a,
          o = {};
        for (a in t)
          "key" == a ? (r = t[a]) : "ref" == a ? (s = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return I(e, o, r, s, null);
      }
      function I(e, t, n, i, a) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++s : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != r.vnode && r.vnode(o), o;
      }
      function E() {
        return { current: null };
      }
      function C(e) {
        return e.children;
      }
      function S(e, t) {
        (this.props = e), (this.context = t);
      }
      function x(e, t) {
        if (null == t) return e.__ ? x(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? x(e) : null;
      }
      function M(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) ||
          c !== r.debounceRendering) &&
          ((c = r.debounceRendering) || l)(A);
      }
      function A() {
        var e, t, n, i, s, a, c, l;
        for (o.sort(u); (e = o.shift()); )
          e.__d &&
            ((t = o.length),
            (i = void 0),
            (a = (s = (n = e).__v).__e),
            (c = []),
            (l = []),
            n.__P &&
              (((i = w({}, s)).__v = s.__v + 1),
              r.vnode && r.vnode(i),
              L(
                n.__P,
                i,
                s,
                n.__n,
                n.__P.namespaceURI,
                32 & s.__u ? [a] : null,
                c,
                null == a ? x(s) : a,
                !!(32 & s.__u),
                l
              ),
              (i.__v = s.__v),
              (i.__.__k[i.__i] = i),
              T(c, i, l),
              i.__e != a &&
                (function e(t) {
                  var n, i;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, n = 0;
                      n < t.__k.length;
                      n++
                    )
                      if (null != (i = t.__k[n]) && null != i.__e) {
                        t.__e = t.__c.base = i.__e;
                        break;
                      }
                    return e(t);
                  }
                })(i)),
            o.length > t && o.sort(u));
        A.__r = 0;
      }
      function P(e, t, n, i, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          m,
          y,
          w,
          k = (i && i.__k) || _,
          E = t.length;
        for (
          l = (function (e, t, n, i) {
            var s,
              a,
              o,
              c,
              l,
              u = t.length,
              d = n.length,
              h = d,
              p = 0;
            for (e.__k = [], s = 0; s < u; s++)
              null != (a = t[s]) &&
              "boolean" != typeof a &&
              "function" != typeof a
                ? ((c = s + p),
                  ((a = e.__k[s] =
                    "string" == typeof a ||
                    "number" == typeof a ||
                    "bigint" == typeof a ||
                    a.constructor == String
                      ? I(null, a, null, null, null)
                      : b(a)
                      ? I(C, { children: a }, null, null, null)
                      : void 0 === a.constructor && a.__b > 0
                      ? I(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                      : a).__ = e),
                  (a.__b = e.__b + 1),
                  (o = null),
                  -1 !==
                    (l = a.__i =
                      (function (e, t, n, i) {
                        var r = e.key,
                          s = e.type,
                          a = n - 1,
                          o = n + 1,
                          c = t[n];
                        if (
                          null === c ||
                          (c && r == c.key && s === c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (
                          ("function" != typeof s || s === C || r) &&
                          i > (null != c && 0 == (2 & c.__u) ? 1 : 0)
                        )
                          for (; a >= 0 || o < t.length; ) {
                            if (a >= 0) {
                              if (
                                (c = t[a]) &&
                                0 == (2 & c.__u) &&
                                r == c.key &&
                                s === c.type
                              )
                                return a;
                              a--;
                            }
                            if (o < t.length) {
                              if (
                                (c = t[o]) &&
                                0 == (2 & c.__u) &&
                                r == c.key &&
                                s === c.type
                              )
                                return o;
                              o++;
                            }
                          }
                        return -1;
                      })(a, n, c, h)) && (h--, (o = n[l]) && (o.__u |= 2)),
                  null == o || null === o.__v
                    ? (-1 == l && p--,
                      "function" != typeof a.type && (a.__u |= 4))
                    : l !== c &&
                      (l == c - 1
                        ? p--
                        : l == c + 1
                        ? p++
                        : (l > c ? p-- : p++, (a.__u |= 4))))
                : (a = e.__k[s] = null);
            if (h)
              for (s = 0; s < d; s++)
                null != (o = n[s]) &&
                  0 == (2 & o.__u) &&
                  (o.__e == i && (i = x(o)),
                  (function e(t, n, i) {
                    var s, a;
                    if (
                      (r.unmount && r.unmount(t),
                      (s = t.ref) &&
                        ((s.current && s.current !== t.__e) || j(s, null, n)),
                      null != (s = t.__c))
                    ) {
                      if (s.componentWillUnmount)
                        try {
                          s.componentWillUnmount();
                        } catch (e) {
                          r.__e(e, n);
                        }
                      s.base = s.__P = null;
                    }
                    if ((s = t.__k))
                      for (a = 0; a < s.length; a++)
                        s[a] && e(s[a], n, i || "function" != typeof t.type);
                    i || v(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(o, o));
            return i;
          })(n, t, k, l),
            h = 0;
          h < E;
          h++
        )
          null != (f = n.__k[h]) &&
            ((p = -1 === f.__i ? g : k[f.__i] || g),
            (f.__i = h),
            (w = L(e, f, p, s, a, o, c, l, u, d)),
            (m = f.__e),
            f.ref &&
              p.ref != f.ref &&
              (p.ref && j(p.ref, null, f), d.push(f.ref, f.__c || m, f)),
            null == y && null != m && (y = m),
            4 & f.__u || p.__k === f.__k
              ? (l = (function e(t, n, i) {
                  var r, s;
                  if ("function" == typeof t.type) {
                    for (r = t.__k, s = 0; r && s < r.length; s++)
                      r[s] && ((r[s].__ = t), (n = e(r[s], n, i)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !i.contains(n) && (n = x(t)),
                    i.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 === n.nodeType);
                  return n;
                })(f, l, e))
              : "function" == typeof f.type && void 0 !== w
              ? (l = w)
              : m && (l = m.nextSibling),
            (f.__u &= -7));
        return (n.__e = y), l;
      }
      function D(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || y.test(t)
                ? n
                : n + "px");
      }
      function N(e, t, n, i, r) {
        var s;
        e: if ("style" === t) {
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof i && (e.style.cssText = i = ""), i))
              for (t in i) (n && t in n) || D(e.style, t, "");
            if (n) for (t in n) (i && n[t] === i[t]) || D(e.style, t, n[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (s = t !== (t = t.replace(d, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = n),
            n
              ? i
                ? (n.u = i.u)
                : ((n.u = h), e.addEventListener(t, s ? f : p, s))
              : e.removeEventListener(t, s ? f : p, s);
        else {
          if ("http://www.w3.org/2000/svg" == r)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function R(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = h++;
            else if (t.t < n.u) return;
            return n(r.event ? r.event(t) : t);
          }
        };
      }
      function L(e, t, n, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          m,
          _,
          y,
          k,
          I,
          E,
          M,
          A,
          D,
          R,
          L,
          T,
          j,
          U,
          W = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(l = t.__e = n.__e)])),
          (h = r.__b) && h(t);
        e: if ("function" == typeof W)
          try {
            if (
              ((I = t.props),
              (E = "prototype" in W && W.prototype.render),
              (M = (h = W.contextType) && s[h.__c]),
              (A = h ? (M ? M.props.value : h.__) : s),
              n.__c
                ? (k = (p = t.__c = n.__c).__ = p.__E)
                : (E
                    ? (t.__c = p = new W(I, A))
                    : ((t.__c = p = new S(I, A)),
                      (p.constructor = W),
                      (p.render = O)),
                  M && M.sub(p),
                  (p.props = I),
                  p.state || (p.state = {}),
                  (p.context = A),
                  (p.__n = s),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              E && null == p.__s && (p.__s = p.state),
              E &&
                null != W.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, W.getDerivedStateFromProps(I, p.__s))),
              (m = p.props),
              (_ = p.state),
              (p.__v = t),
              f)
            )
              E &&
                null == W.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                E &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (E &&
                  null == W.getDerivedStateFromProps &&
                  I !== m &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(I, A),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(I, p.__s, A)) ||
                    t.__v === n.__v))
              ) {
                for (
                  t.__v !== n.__v &&
                    ((p.props = I), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    D = 0;
                  D < p._sb.length;
                  D++
                )
                  p.__h.push(p._sb[D]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(I, p.__s, A),
                E &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(m, _, y);
                  });
            }
            if (
              ((p.context = A),
              (p.props = I),
              (p.__P = e),
              (p.__e = !1),
              (R = r.__r),
              (L = 0),
              E)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  R && R(t),
                  h = p.render(p.props, p.state, p.context),
                  T = 0;
                T < p._sb.length;
                T++
              )
                p.__h.push(p._sb[T]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  R && R(t),
                  (h = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++L < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (s = w(w({}, s), p.getChildContext())),
              E &&
                !f &&
                null != p.getSnapshotBeforeUpdate &&
                (y = p.getSnapshotBeforeUpdate(m, _)),
              (l = P(
                e,
                b(
                  (j =
                    null != h && h.type === C && null == h.key
                      ? h.props.children
                      : h)
                )
                  ? j
                  : [j],
                t,
                n,
                s,
                a,
                o,
                c,
                l,
                u,
                d
              )),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              k && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), u || null != o)) {
              if (e.then) {
                for (
                  t.__u |= u ? 160 : 128;
                  l && 8 === l.nodeType && l.nextSibling;

                )
                  l = l.nextSibling;
                (o[o.indexOf(l)] = null), (t.__e = l);
              } else for (U = o.length; U--; ) v(o[U]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            r.__e(e, t, n);
          }
        else
          null == o && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, s, a, o, c, l, u) {
                  var d,
                    h,
                    p,
                    f,
                    m,
                    _,
                    y,
                    w = n.props,
                    k = t.props,
                    I = t.type;
                  if (
                    ("svg" === I
                      ? (a = "http://www.w3.org/2000/svg")
                      : "math" === I
                      ? (a = "http://www.w3.org/1998/Math/MathML")
                      : a || (a = "http://www.w3.org/1999/xhtml"),
                    null != o)
                  ) {
                    for (d = 0; d < o.length; d++)
                      if (
                        (m = o[d]) &&
                        "setAttribute" in m == !!I &&
                        (I ? m.localName === I : 3 === m.nodeType)
                      ) {
                        (e = m), (o[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null === I) return document.createTextNode(k);
                    (e = document.createElementNS(a, I, k.is && k)),
                      l && (r.__m && r.__m(t, o), (l = !1)),
                      (o = null);
                  }
                  if (null === I)
                    w === k || (l && e.data === k) || (e.data = k);
                  else {
                    if (
                      ((o = o && i.call(e.childNodes)),
                      (w = n.props || g),
                      !l && null != o)
                    )
                      for (w = {}, d = 0; d < e.attributes.length; d++)
                        w[(m = e.attributes[d]).name] = m.value;
                    for (d in w)
                      if (((m = w[d]), "children" == d));
                      else if ("dangerouslySetInnerHTML" == d) p = m;
                      else if (!(d in k)) {
                        if (
                          ("value" == d && "defaultValue" in k) ||
                          ("checked" == d && "defaultChecked" in k)
                        )
                          continue;
                        N(e, d, null, m, a);
                      }
                    for (d in k)
                      (m = k[d]),
                        "children" == d
                          ? (f = m)
                          : "dangerouslySetInnerHTML" == d
                          ? (h = m)
                          : "value" == d
                          ? (_ = m)
                          : "checked" == d
                          ? (y = m)
                          : (l && "function" != typeof m) ||
                            w[d] === m ||
                            N(e, d, m, w[d], a);
                    if (h)
                      l ||
                        (p &&
                          (h.__html === p.__html ||
                            h.__html === e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ""),
                      P(
                        e,
                        b(f) ? f : [f],
                        t,
                        n,
                        s,
                        "foreignObject" === I
                          ? "http://www.w3.org/1999/xhtml"
                          : a,
                        o,
                        c,
                        o ? o[0] : n.__k && x(n, 0),
                        l,
                        u
                      ),
                      null != o)
                    )
                      for (d = o.length; d--; ) v(o[d]);
                    l ||
                      ((d = "value"),
                      "progress" === I && null == _
                        ? e.removeAttribute("value")
                        : void 0 === _ ||
                          (_ === e[d] &&
                            ("progress" !== I || _) &&
                            ("option" !== I || _ === w[d])) ||
                          N(e, d, _, w[d], a),
                      (d = "checked"),
                      void 0 !== y && y !== e[d] && N(e, d, y, w[d], a));
                  }
                  return e;
                })(n.__e, t, n, s, a, o, c, u, d));
        return (h = r.diffed) && h(t), 128 & t.__u ? void 0 : l;
      }
      function T(e, t, n) {
        for (var i = 0; i < n.length; i++) j(n[i], n[++i], n[++i]);
        r.__c && r.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              r.__e(e, t.__v);
            }
          });
      }
      function j(e, t, n) {
        try {
          if ("function" == typeof e) {
            var i = "function" == typeof e.__u;
            i && e.__u(), (i && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          r.__e(e, n);
        }
      }
      function O(e, t, n) {
        return this.constructor(e, n);
      }
      function U(e, t, n) {
        var s, a, o, c;
        t === document && (t = document.documentElement),
          r.__ && r.__(e, t),
          (a = (s = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          L(
            t,
            (e = ((!s && n) || t).__k = k(C, null, [e])),
            a || g,
            g,
            t.namespaceURI,
            !s && n
              ? [n]
              : a
              ? null
              : t.firstChild
              ? i.call(t.childNodes)
              : null,
            o,
            !s && n ? n : a ? a.__e : t.firstChild,
            s,
            c
          ),
          T(o, e, c);
      }
      function W(e, t) {
        U(e, t, W);
      }
      function q(e, t, n) {
        var r,
          s,
          a,
          o,
          c = w({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (r = t[a])
            : "ref" == a
            ? (s = t[a])
            : (c[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          I(e.type, c, r || e.key, s || e.ref, null)
        );
      }
      function z(e, t) {
        var n = {
          __c: (t = "__cC" + m++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, i;
            return (
              this.getChildContext ||
                ((n = new Set()),
                ((i = {})[t] = this),
                (this.getChildContext = function () {
                  return i;
                }),
                (this.componentWillUnmount = function () {
                  n = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.forEach(function (e) {
                      (e.__e = !0), M(e);
                    });
                }),
                (this.sub = function (e) {
                  n.add(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n && n.delete(e), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (i = _.slice),
        (r = {
          __e: function (e, t, n, i) {
            for (var r, s, a; (t = t.__); )
              if ((r = t.__c) && !r.__)
                try {
                  if (
                    ((s = r.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (r.setState(s.getDerivedStateFromError(e)), (a = r.__d)),
                    null != r.componentDidCatch &&
                      (r.componentDidCatch(e, i || {}), (a = r.__d)),
                    a)
                  )
                    return (r.__E = r);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (S.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), M(this));
        }),
        (S.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), M(this));
        }),
        (S.prototype.render = C),
        (o = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = R(!1)),
        (f = R(!0)),
        (m = 0);
    },
    30396: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: function () {
            return C;
          },
          useContext: function () {
            return S;
          },
          useDebugValue: function () {
            return x;
          },
          useEffect: function () {
            return w;
          },
          useErrorBoundary: function () {
            return M;
          },
          useId: function () {
            return A;
          },
          useImperativeHandle: function () {
            return I;
          },
          useLayoutEffect: function () {
            return v;
          },
          useMemo: function () {
            return E;
          },
          useReducer: function () {
            return b;
          },
          useRef: function () {
            return k;
          },
          useState: function () {
            return y;
          },
        });
      var i,
        r,
        s,
        a,
        o = n(6400),
        c = 0,
        l = [],
        u = o.options,
        d = u.__b,
        h = u.__r,
        p = u.diffed,
        f = u.__c,
        m = u.unmount,
        g = u.__;
      function _(e, t) {
        u.__h && u.__h(r, e, c || t), (c = 0);
        var n = r.__H || (r.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function y(e) {
        return (c = 1), b(T, e);
      }
      function b(e, t, n) {
        var s = _(i++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              n ? n(t) : T(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(t, e);
                t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = r),
            !r.u))
        ) {
          var a = function (e, t, n) {
            if (!s.__c.__H) return !0;
            var i = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var r = s.__c.props !== e;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (r = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || r
            );
          };
          r.u = !0;
          var o = r.shouldComponentUpdate,
            c = r.componentWillUpdate;
          (r.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var i = o;
              (o = void 0), a(e, t, n), (o = i);
            }
            c && c.call(this, e, t, n);
          }),
            (r.shouldComponentUpdate = a);
        }
        return s.__N || s.__;
      }
      function w(e, t) {
        var n = _(i++, 3);
        !u.__s && L(n.__H, t) && ((n.__ = e), (n.i = t), r.__H.__h.push(n));
      }
      function v(e, t) {
        var n = _(i++, 4);
        !u.__s && L(n.__H, t) && ((n.__ = e), (n.i = t), r.__h.push(n));
      }
      function k(e) {
        return (
          (c = 5),
          E(function () {
            return { current: e };
          }, [])
        );
      }
      function I(e, t, n) {
        (c = 6),
          v(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(e)
          );
      }
      function E(e, t) {
        var n = _(i++, 7);
        return L(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function C(e, t) {
        return (
          (c = 8),
          E(function () {
            return e;
          }, t)
        );
      }
      function S(e) {
        var t = r.context[e.__c],
          n = _(i++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(r)), t.props.value) : e.__
        );
      }
      function x(e, t) {
        u.useDebugValue && u.useDebugValue(t ? t(e) : e);
      }
      function M(e) {
        var t = _(i++, 10),
          n = y();
        return (
          (t.__ = e),
          r.componentDidCatch ||
            (r.componentDidCatch = function (e, i) {
              t.__ && t.__(e, i), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        var e = _(i++, 11);
        if (!e.__) {
          for (var t = r.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function P() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(N), e.__H.__h.forEach(R), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), u.__e(t, e.__v);
            }
      }
      (u.__b = function (e) {
        (r = null), d && d(e);
      }),
        (u.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), g && g(e, t);
        }),
        (u.__r = function (e) {
          h && h(e), (i = 0);
          var t = (r = e.__c).__H;
          t &&
            (s === r
              ? ((t.__h = []),
                (r.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(N), t.__h.forEach(R), (t.__h = []), (i = 0))),
            (s = r);
        }),
        (u.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === u.requestAnimationFrame) ||
                (
                  (a = u.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(i),
                          D && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      i = setTimeout(n, 100);
                    D && (t = requestAnimationFrame(n));
                  }
                )(P)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (s = r = null);
        }),
        (u.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(N),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || R(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                u.__e(n, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (u.unmount = function (e) {
          m && m(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                N(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && u.__e(t, n.__v));
        });
      var D = "function" == typeof requestAnimationFrame;
      function N(e) {
        var t = r,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (r = t);
      }
      function R(e) {
        var t = r;
        (e.__c = e.__()), (r = t);
      }
      function L(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function T(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    42817: function (e, t, n) {
      var i = n(48764).Buffer;
      let r = n(91488);
      function s(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", l(t));
        if ("bool" === e) return u("uint8", t ? 1 : 0);
        if ("string" === e) return u("bytes", new i(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ("dynamic" === n) {
            var n,
              s,
              d,
              h,
              p,
              f = u("uint256", t.length);
            d.unshift(f);
          }
          return i.concat(d);
        }
        if ("bytes" === e)
          return (
            (t = new i(t)),
            (d = i.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = i.concat([d, r.zeros(32 - (t.length % 32))])),
            d
          );
        if (e.startsWith("bytes")) {
          if ((n = a(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return r.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          s = l(t);
          let i = r.bitLengthFromBigInt(s);
          if (i > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + i);
          if (s < 0) throw Error("Supplied uint is negative");
          return r.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith("int")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          s = l(t);
          let i = r.bitLengthFromBigInt(s);
          if (i > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + i);
          let o = r.twosFromBigInt(s, 256);
          return r.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (s = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", s * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), u("int256", l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = s(e[u]),
            h = t[u];
          if ("bytes" === d) c.push(h);
          else if ("string" === d) c.push(new i(h, "utf8"));
          else if ("bool" === d) c.push(new i(h ? "01" : "00", "hex"));
          else if ("address" === d) c.push(r.setLength(h, 20));
          else if (d.startsWith("bytes")) {
            if ((n = a(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(r.setLengthRight(h, n));
          } else if (d.startsWith("uint")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(r.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = r.twosFromBigInt(o, n);
            c.push(r.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return i.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            r = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = s(e[o]),
              d = u(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (n.push(u("uint256", a)), r.push(d), (a += d.length))
              : n.push(d);
          }
          return i.concat(n.concat(r));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return r.keccak(d(e, t));
        },
      };
    },
    87009: function (e, t, n) {
      var i = n(48764).Buffer;
      let r = n(91488),
        s = n(42817),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : r.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", r.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = i.from(o, "utf8")),
                    ["bytes32", r.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    i = o.map((t) => l(e, n, t));
                  return [
                    "bytes32",
                    r.keccak(
                      s.rawEncode(
                        i.map(([e]) => e),
                        i.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let i of n[e]) {
                let [e, n] = l(i.name, i.type, t[i.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let s of n[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ("bytes" === s.type)
                    o.push("bytes32"), (e = r.keccak(e)), c.push(e);
                  else if ("string" === s.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = i.from(e, "utf8")),
                      (e = r.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[s.type])
                    o.push("bytes32"),
                      (e = r.keccak(this.encodeData(s.type, e, n, a))),
                      c.push(e);
                  else if (s.type.lastIndexOf("]") === s.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(s.type), c.push(e);
                }
              }
            return s.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              i = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let r of (i = [e].concat(i.sort()))) {
              if (!t[r]) throw Error("No type definition specified: " + r);
              n +=
                r +
                "(" +
                t[r].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let i of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(i.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, i = !0) {
            return r.keccak(this.encodeData(e, t, n, i));
          },
          hashType(e, t) {
            return r.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              s = [i.from("1901", "hex")];
            return (
              s.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                s.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              r.keccak(i.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? r.toBuffer(e.value) : e.value;
              }),
              i = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return s.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                s.soliditySHA3(Array(e.length).fill("string"), a),
                s.soliditySHA3(i, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    91488: function (e, t, n) {
      var i = n(48764).Buffer;
      let { keccak_256: r } = n(85426);
      function s(e) {
        return i.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let r = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; r.length < t; ) r.unshift(0);
        return i.from(r);
      }
      function o(e, t, n) {
        let i = s(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(i), i)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(i, t - e.length), i)
          : e.slice(-t);
      }
      function c(e) {
        if (!i.isBuffer(e)) {
          if (Array.isArray(e)) e = i.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? i.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : i.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = i.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = i.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return i.from(r(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
    19149: function (e, t, n) {
      "use strict";
      let i;
      n.d(t, {
        createCoinbaseWalletSDK: function () {
          return e1;
        },
      });
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let i = localStorage.key(n);
            "string" == typeof i && i.startsWith(e) && t.push(i);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        a = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        o = "Unspecified error message.";
      function c(e, t = o) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (u(a, t)) return a[t].message;
          if (e >= -32099 && e <= -32e3) return "Unspecified server error.";
        }
        return t;
      }
      function l(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function u(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function d(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let h = {
        rpc: {
          parse: (e) => p(s.rpc.parse, e),
          invalidRequest: (e) => p(s.rpc.invalidRequest, e),
          invalidParams: (e) => p(s.rpc.invalidParams, e),
          methodNotFound: (e) => p(s.rpc.methodNotFound, e),
          internal: (e) => p(s.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return p(t, e);
          },
          invalidInput: (e) => p(s.rpc.invalidInput, e),
          resourceNotFound: (e) => p(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => p(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) => p(s.rpc.transactionRejected, e),
          methodNotSupported: (e) => p(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => p(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => f(s.provider.userRejectedRequest, e),
          unauthorized: (e) => f(s.provider.unauthorized, e),
          unsupportedMethod: (e) => f(s.provider.unsupportedMethod, e),
          disconnected: (e) => f(s.provider.disconnected, e),
          chainDisconnected: (e) => f(s.provider.chainDisconnected, e),
          unsupportedChain: (e) => f(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: i } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new _(t, n, i);
          },
        },
      };
      function p(e, t) {
        let [n, i] = m(t);
        return new g(e, n || c(e), i);
      }
      function f(e, t) {
        let [n, i] = m(t);
        return new _(e, n || c(e), i);
      }
      function m(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class g extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class _ extends g {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      let y = (e) => e,
        b = (e) => e,
        w = (e) => e;
      function v(e) {
        return Math.floor(e);
      }
      var k,
        I,
        E = n(48764).Buffer;
      let C = /^[0-9]*$/,
        S = /^[a-f0-9]*$/;
      function x(e) {
        return M(crypto.getRandomValues(new Uint8Array(e)));
      }
      function M(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function A(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function P(e, t = !1) {
        let n = e.toString("hex");
        return y(t ? `0x${n}` : n);
      }
      function D(e) {
        return P(q(e), !0);
      }
      function N(e) {
        return w(e.toString(10));
      }
      function R(e) {
        return y(`0x${BigInt(e).toString(16)}`);
      }
      function L(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function T(e) {
        return L(e) ? e.slice(2) : e;
      }
      function j(e) {
        return L(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function O(e) {
        if ("string" != typeof e) return !1;
        let t = T(e).toLowerCase();
        return S.test(t);
      }
      function U(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = T(e).toLowerCase();
            if (S.test(n)) return y(t ? `0x${n}` : n);
          }
          throw h.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return n.length % 2 == 1 && (n = y(`0${n}`)), t ? y(`0x${n}`) : n;
      }
      function W(e) {
        if ("string" == typeof e) {
          let t = T(e).toLowerCase();
          if (O(t) && 40 === t.length) return b(j(t));
        }
        throw h.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function q(e) {
        if (E.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (O(e)) {
            let t = U(e, !1);
            return E.from(t, "hex");
          }
          return E.from(e, "utf8");
        }
        throw h.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function z(e) {
        if ("number" == typeof e && Number.isInteger(e)) return v(e);
        if ("string" == typeof e) {
          if (C.test(e)) return v(Number(e));
          if (O(e)) return v(Number(BigInt(U(e, !0))));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function K(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(z(e));
        if ("string" == typeof e) {
          if (C.test(e)) return BigInt(e);
          if (O(e)) return BigInt(U(e, !0));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function F() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function H(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function B(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          i = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: i };
      }
      async function G(e, { iv: t, cipherText: n }) {
        let i = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(i);
      }
      function $(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function J(e, t) {
        let n = $(e);
        return M(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function Y(e, t) {
        let n = $(e),
          i = A(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(i),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function Q(e, t) {
        return B(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function V(e, t) {
        return JSON.parse(await G(t, e));
      }
      let Z = { storageKey: "ownPrivateKey", keyType: "private" },
        X = { storageKey: "ownPublicKey", keyType: "public" },
        ee = { storageKey: "peerPublicKey", keyType: "public" };
      class et {
        constructor() {
          (this.storage = new r("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(ee, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(X.storageKey),
            this.storage.removeItem(Z.storageKey),
            this.storage.removeItem(ee.storageKey);
        }
        async generateKeyPair() {
          let e = await F();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Z, e.privateKey),
            await this.storeKey(X, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(Z)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(X)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(ee)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await H(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? Y(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await J(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let en = "4.2.3",
        ei = "@coinbase/wallet-sdk";
      async function er(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          i = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": en,
              "X-Cbw-Sdk-Platform": ei,
            },
          }),
          { result: r, error: s } = await i.json();
        if (s) throw s;
        return r;
      }
      let es = "accounts",
        ea = "activeChain",
        eo = "availableChains",
        ec = "walletCapabilities";
      class el {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new et()),
            (this.storage = new r("CBWSDK", "SCWStateManager")),
            (this.accounts =
              null !== (t = this.storage.loadObject(es)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(ea) || {
              id:
                null !==
                  (i =
                    null === (n = e.metadata.appChainIds) || void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n;
          let i = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (t = e.params) && void 0 !== t ? t : {}
                ),
              },
            }),
            r = await this.communicator.postRequestAndWaitForResponse(i);
          if ("failure" in r.content) throw r.content.failure;
          let s = await Y("public", r.sender);
          await this.keyManager.setPeerPublicKey(s);
          let a = (await this.decryptResponseMessage(r)).result;
          if ("error" in a) throw a.error;
          let o = a.value;
          (this.accounts = o),
            this.storage.storeObject(es, o),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", o);
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) throw h.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", { chainId: R(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return R(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(ec);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw h.rpc.internal("No RPC URL set for chain");
              return er(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let i = await this.sendEncryptedRequest(e),
            r = (await this.decryptResponseMessage(i)).result;
          if ("error" in r) throw r.error;
          return r.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw h.rpc.invalidParams();
          let i = z(n[0].chainId);
          if (this.updateChain(i)) return null;
          let r = await this.sendRequestToPopup(e);
          return null === r && this.updateChain(i), r;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw h.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await Q({ action: e, chainId: this.chain.id }, t),
            i = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(i);
        }
        async createRequestMessage(e) {
          let t = await J("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let i = e.content;
          if ("failure" in i) throw i.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r) throw h.provider.unauthorized("Invalid session");
          let s = await V(i.encrypted, r),
            a = null === (t = s.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(eo, e), this.updateChain(this.chain.id, e);
          }
          let o =
            null === (n = s.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ec, o), s;
        }
        updateChain(e, t) {
          var n;
          let i = null != t ? t : this.storage.loadObject(eo),
            r = null == i ? void 0 : i.find((t) => t.id === e);
          return (
            !!r &&
            (r !== this.chain &&
              ((this.chain = r),
              this.storage.storeObject(ea, r),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", R(r.id))),
            !0)
          );
        }
      }
      var eu = n(87009);
      let ed = "Addresses";
      function eh(e) {
        return void 0 !== e.errorMessage;
      }
      class ep {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              A(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            r = new TextEncoder(),
            s = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              i,
              r.encode(e)
            ),
            a = s.slice(s.byteLength - 16),
            o = s.slice(0, s.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return M(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, i) => {
            !(async function () {
              let r = await crypto.subtle.importKey(
                  "raw",
                  A(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                s = A(e),
                a = s.slice(0, 12),
                o = s.slice(12, 28),
                c = new Uint8Array([...s.slice(28), ...o]),
                l = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, r, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      }
      class ef {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let i = `${t}:${n}`;
          this.auth = `Basic ${btoa(i)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: i } = await t.json();
            if (i) throw Error(`Check unseen events failed: ${i}`);
            let r =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(r), r;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      ((k = I || (I = {}))[(k.DISCONNECTED = 0)] = "DISCONNECTED"),
        (k[(k.CONNECTING = 1)] = "CONNECTING"),
        (k[(k.CONNECTED = 2)] = "CONNECTED");
      class em {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, I.CONNECTING),
              (i.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, I.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, I.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (i.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) ||
                      void 0 === n ||
                      n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, I.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class eg {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = v(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let i = e[n];
                  void 0 !== i && t(i);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.metadataUpdated(e, i);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(e),
                r = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.chainUpdated(i, r);
            }),
            (this.session = e),
            (this.cipher = new ep(e.secret)),
            (this.listener = n);
          let i = new em(`${t}/rpc`, WebSocket);
          i.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case I.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        i.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case I.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case I.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            i.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = i),
            (this.http = new ef(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: v(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== n.type) return;
          let { id: i, response: r } = n;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(i, r);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t, n = !1) {
          let i = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            r = {
              type: "PublishEvent",
              id: v(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: i,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(r);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let i = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, r) => {
                n = window.setTimeout(() => {
                  r(Error(`request ${i} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(i, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(i);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: v(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class e_ {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = j(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var ey = n(17748),
        eb = n(53465);
      let ew = "session:id",
        ev = "session:secret",
        ek = "session:linked";
      class eI {
        constructor(e, t, n, i = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, eb.ci)((0, ey.JQ)(`${t}, ${n} WalletLink`))),
            (this._linked = !!i);
        }
        static create(e) {
          return new eI(e, x(16), x(32)).save();
        }
        static load(e) {
          let t = e.getItem(ew),
            n = e.getItem(ek),
            i = e.getItem(ev);
          return t && i ? new eI(e, t, i, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(ew, this.id),
            this.storage.setItem(ev, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ek, this._linked ? "1" : "0");
        }
      }
      function eE() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) ||
              void 0 === e
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) &&
          void 0 !== t &&
          t
        );
      }
      function eC() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function eS() {
        for (var e, t, n = 0, i = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                i,
                r = "";
              if ("string" == typeof t || "number" == typeof t) r += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (i = e(t[n])) && (r && (r += " "), (r += i));
                else for (n in t) t[n] && (r && (r += " "), (r += n));
              }
              return r;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      }
      var ex = n(6400),
        eM = n(30396);
      class eA {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = eE());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, ex.render)(
              (0, ex.h)(
                "div",
                null,
                (0, ex.h)(
                  eP,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, ex.h)(eD, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eP = (e) =>
          (0, ex.h)(
            "div",
            { class: eS("-cbwsdk-snackbar-container") },
            (0, ex.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, ex.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        eD = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [i, r] = (0, eM.useState)(!0),
            [s, a] = (0, eM.useState)(null != e && e);
          return (
            (0, eM.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  r(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, ex.h)(
              "div",
              {
                class: eS(
                  "-cbwsdk-snackbar-instance",
                  i && "-cbwsdk-snackbar-instance-hidden",
                  s && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, ex.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    a(!s);
                  },
                },
                (0, ex.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, ex.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, ex.h)(
                  "div",
                  { class: "-gear-container" },
                  !s &&
                    (0, ex.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, ex.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, ex.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, ex.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, ex.h)(
                      "div",
                      {
                        class: eS(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, ex.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, ex.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, ex.h)(
                        "span",
                        {
                          class: eS(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class eN {
        constructor() {
          (this.attached = !1), (this.snackbar = new eA());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eC();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class eR {
        constructor() {
          (this.root = null), (this.darkMode = eE());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            eC();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, ex.render)(null, this.root),
            e &&
              (0, ex.render)(
                (0, ex.h)(
                  eL,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let eL = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: i,
          onDismiss: r,
        }) =>
          (0, ex.h)(
            eP,
            { darkMode: n },
            (0, ex.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, ex.h)(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              (0, ex.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: r,
              }),
              (0, ex.h)(
                "div",
                {
                  class: eS(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                (0, ex.h)("p", null, e),
                (0, ex.h)("button", { onClick: i }, t)
              )
            )
          ),
        eT = "https://www.walletlink.org";
      class ej {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new eR());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class eO {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) ||
                  void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(ed);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  i = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  i ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                eO.accountRequestCallbackIds.size > 0 &&
                  (Array.from(eO.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  eO.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: i, connection: r } = this.subscribe();
          (this._session = n),
            (this.connection = r),
            (this.relayEventManager = new e_()),
            (this.ui = i),
            this.ui.attach();
        }
        subscribe() {
          let e = eI.load(this.storage) || eI.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new eg({ session: e, linkAPIUrl: t, listener: this }),
            i = this.isMobileWeb ? new ej() : new eN();
          return n.connect(), { session: e, ui: i, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = eI.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && r.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: N(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? N(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: N(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? N(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? N(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? N(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: P(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = x(8),
            i = (i) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, i),
                null == t || t();
            };
          return new Promise((r, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), eh(e))) return s(Error(e.errorMessage));
                r(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof ej)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            eO.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              eO.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var i;
          let r =
            null !== (i = null == n ? void 0 : n.message) && void 0 !== i
              ? i
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: r });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            i = x(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(i, (n) => {
              if (eh(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              eO.accountRequestCallbackIds.add(i),
              this.publishWeb3RequestEvent(i, n);
          });
        }
        watchAsset(e, t, n, i, r, s) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: i, image: r },
                chainId: s,
              },
            },
            o = null,
            c = x(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eh(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, i, r, s) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: i,
                chainName: r,
                iconUrls: n,
                nativeCurrency: s,
              },
            },
            o = null,
            c = x(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eh(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            i = null,
            r = x(8);
          return (
            (i = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(r),
                  this.handleErrorResponse(r, n.method, e),
                  null == i || i();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(r, (n) =>
                (null == i || i(), eh(n) && n.errorCode)
                  ? t(
                      h.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : eh(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(r, n);
            })
          );
        }
      }
      eO.accountRequestCallbackIds = new Set();
      var eU = n(48764).Buffer;
      let eW = "DefaultChainId",
        eq = "DefaultJsonRpcUrl";
      class ez {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new r("walletlink", eT)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(ed);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => W(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(eq)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(eq, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let i = this.getChainId();
          this._storage.setItem(eW, t.toString(10)),
            z(t) !== i &&
              (null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", R(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw h.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw h.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw h.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw h.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: i, symbol: r, image: s, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              i,
              r,
              a,
              s,
              null == n ? void 0 : n.toString()
            );
          return !eh(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let i = e[0];
          if (
            (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw h.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!i.chainName || "" === i.chainName.trim())
            throw h.rpc.invalidParams("chainName is a required field");
          if (!i.nativeCurrency)
            throw h.rpc.invalidParams("nativeCurrency is a required field");
          let r = Number.parseInt(i.chainId, 16);
          if (r === this.getChainId()) return !1;
          let s = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = i,
            d = await s.addEthereumChain(r.toString(), a, l, o, c, u);
          if (eh(d)) return !1;
          if (
            (null === (n = d.result) || void 0 === n
              ? void 0
              : n.isApproved) === !0
          )
            return this.updateProviderInfo(a[0], r), null;
          throw h.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            i = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (eh(i)) throw i;
          let r = i.result;
          return (
            r.isApproved &&
              r.rpcUrl.length > 0 &&
              this.updateProviderInfo(r.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let i = e.map((e) => W(e));
          JSON.stringify(i) !== JSON.stringify(this._addresses) &&
            ((this._addresses = i),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", i),
            this._storage.setItem(ed, i.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return R(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw h.rpc.internal("No RPC URL set for chain");
              return er(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = W(e);
          if (!this._addresses.map((e) => W(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? W(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? W(e.to) : null,
            i = null != e.value ? K(e.value) : BigInt(0),
            r = e.data ? q(e.data) : eU.alloc(0),
            s = null != e.nonce ? z(e.nonce) : null,
            a = null != e.gasPrice ? K(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? K(e.maxFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: i,
            data: r,
            nonce: s,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas:
              null != e.maxPriorityFeePerGas ? K(e.maxPriorityFeePerGas) : null,
            gasLimit: null != e.gas ? K(e.gas) : null,
            chainId: e.chainId ? z(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let i = this.initializeRelay(),
            r = await i.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: D(n[0]),
                signature: D(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (eh(r)) throw r;
          return r.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eW)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", { chainId: R(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            i = await n.requestEthereumAccounts();
          if (eh(i)) throw i;
          if (!i.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(i.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", { chainId: R(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw h.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let i = this.initializeRelay(),
            r = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: W(t),
                message: D(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (eh(r)) throw r;
          return r.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signEthereumTransaction(t);
          if (eh(i)) throw i;
          return i.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = q(e[0]),
            n = this.initializeRelay(),
            i = await n.submitEthereumTransaction(t, this.getChainId());
          if (eh(i)) throw i;
          return i.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signAndSubmitEthereumTransaction(t);
          if (eh(i)) throw i;
          return i.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let i = n["eth_signTypedData_v1" === t ? 1 : 0],
            r = n["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(i);
          let s = this.initializeRelay(),
            a = await s.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: W(i),
                message: P(
                  {
                    eth_signTypedData_v1: eu.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: eu.hashForSignTypedData_v3,
                    eth_signTypedData_v4: eu.hashForSignTypedData_v4,
                    eth_signTypedData: eu.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw h.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(r),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(r, null, 2),
                addPrefix: !1,
              },
            });
          if (eh(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new eO({
                linkAPIUrl: eT,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let eK = "SignerType",
        eF = new r("CBWSDK", "SignerConfigurator");
      async function eH(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: i,
          callback: r,
        } = e;
        eB(t, n, r).catch(() => {});
        let s = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: i,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(s);
        return a;
      }
      async function eB(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let i = new ez({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: i.getSession() },
        }),
          await i.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let eG = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: e$, getCrossOriginOpenerPolicy: eJ } = {
          getCrossOriginOpenerPolicy: () => (void 0 === i ? "undefined" : i),
          checkCrossOriginOpenerPolicy: async () => {
            if ("undefined" == typeof window) {
              i = "non-browser-env";
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: "HEAD" });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get("Cross-Origin-Opener-Policy");
              (i = null != n ? n : "null"),
                "same-origin" === i && console.error(eG);
            } catch (e) {
              console.error(
                "Error checking Cross-Origin-Opener-Policy:",
                e.message
              ),
                (i = "error");
            }
          },
        };
      class eY {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let i = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let r = n.data;
                  e(r) &&
                    (t(r),
                    window.removeEventListener("message", i),
                    this.listeners.delete(i));
                };
                window.addEventListener("message", i),
                  this.listeners.set(i, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(h.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      for (let [t, n] of Object.entries({
                        sdkName: ei,
                        sdkVersion: en,
                        origin: window.location.origin,
                        coop: eJ(),
                      }))
                        e.searchParams.append(t, n.toString());
                    })(e);
                    let i = window.open(
                      e,
                      "Smart Wallet",
                      `width=420, height=540, left=${t}, top=${n}`
                    );
                    if ((null == i || i.focus(), !i))
                      throw h.rpc.internal("Pop up window failed to open");
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: en,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw h.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var eQ = n(54146);
      class eV extends eQ.v {}
      var eZ = function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, i = Object.getOwnPropertySymbols(e);
            r < i.length;
            r++
          )
            0 > t.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (n[i[r]] = e[i[r]]);
        return n;
      };
      class eX extends eV {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: i } = n,
            r = eZ(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = r),
            (this.communicator = new eY({
              url: i,
              metadata: t,
              preference: r,
            }));
          let s = eF.getItem(eK);
          s && (this.signer = this.initSigner(s));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw h.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ("string" != typeof t || 0 === t.length)
                  throw h.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (
                  void 0 !== n &&
                  !Array.isArray(n) &&
                  ("object" != typeof n || null === n)
                )
                  throw h.rpc.invalidParams({
                    message:
                      "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case "eth_sign":
                  case "eth_signTypedData_v2":
                  case "eth_subscribe":
                  case "eth_unsubscribe":
                    throw h.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), eF.setItem(eK, t);
                  break;
                }
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return R(1);
                default:
                  throw h.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, i;
                      let r = {};
                      return (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        u(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (a[n.toString()] || ((i = n) >= -32099 && i <= -32e3))
                          ? ((r.code = e.code),
                            e.message && "string" == typeof e.message
                              ? ((r.message = e.message),
                                u(e, "data") && (r.data = e.data))
                              : ((r.message = c(r.code)),
                                (r.data = { originalError: l(e) })))
                          : ((r.code = s.rpc.internal),
                            (r.message = d(e, "message") ? e.message : o),
                            (r.data = { originalError: l(e) })),
                        t && (r.stack = d(e, "stack") ? e.stack : void 0),
                        r
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: s.rpc.internal };
                        if (eh(e)) {
                          let n = e.errorMessage,
                            i =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? s.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: i,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", en),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            r.clearAll(),
            this.emit(
              "disconnect",
              h.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return eH({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let {
              signerType: t,
              metadata: n,
              communicator: i,
              callback: r,
            } = e;
            switch (t) {
              case "scw":
                return new el({ metadata: n, callback: r, communicator: i });
              case "walletlink":
                return new ez({ metadata: n, callback: r });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      let e0 = { options: "all" };
      function e1(e) {
        var t;
        new r("CBWSDK").setItem("VERSION", en), e$();
        let n = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(
            e0,
            null !== (t = e.preference) && void 0 !== t ? t : {}
          ),
        };
        !(function (e) {
          if (e) {
            if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error(
                "Attribution cannot contain both auto and dataSuffix properties"
              );
          }
        })(n.preference);
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, i;
                    let { appName: r, appLogoUrl: s, appChainIds: a } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null === (n = e.setAppInfo) ||
                            void 0 === n ||
                            n.call(e, r, s, a, t),
                          e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null === (i = o.setAppInfo) ||
                          void 0 === i ||
                          i.call(o, r, s, a, t),
                        o
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new eX(n);
              })(n)),
            i
          ),
        };
      }
    },
  },
]);
