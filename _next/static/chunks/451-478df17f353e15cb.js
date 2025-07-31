(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [451],
  {
    78865: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(31134).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    15432: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(31134).Z)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    8672: function () {},
    49102: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(64757),
        l = n(85893),
        a = r.forwardRef((e, t) =>
          (0, l.jsx)(o.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              t.target.closest("button, input, select, textarea") ||
                (e.onMouseDown?.(t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      a.displayName = "Label";
      var i = a;
    },
    77282: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return e3;
        },
        ZA: function () {
          return tt;
        },
        JO: function () {
          return e9;
        },
        ck: function () {
          return tr;
        },
        wU: function () {
          return tl;
        },
        eT: function () {
          return to;
        },
        __: function () {
          return tn;
        },
        h_: function () {
          return e4;
        },
        fC: function () {
          return e5;
        },
        $G: function () {
          return ti;
        },
        u_: function () {
          return ta;
        },
        Z0: function () {
          return ts;
        },
        xz: function () {
          return e6;
        },
        B4: function () {
          return e8;
        },
        l_: function () {
          return te;
        },
      });
      var r,
        o = n(67294),
        l = n(73935),
        a = n(42614);
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var s = n(25360);
      function u(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function c(...e) {
        return o.useCallback(
          (function (...e) {
            return (t) => {
              let n = !1,
                r = e.map((e) => {
                  let r = u(e, t);
                  return n || "function" != typeof r || (n = !0), r;
                });
              if (n)
                return () => {
                  for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : u(e[t], null);
                  }
                };
            };
          })(...e),
          e
        );
      }
      var d = n(4222),
        f = n(85893),
        p = n(78990),
        v = [
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
          let n = o.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              l = r ? d.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, f.jsx)(l, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        h = n(79698),
        m = n(78724),
        w = "dismissableLayer.update",
        g = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        y = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              onFocusOutside: s,
              onInteractOutside: u,
              onDismiss: d,
              ...p
            } = e,
            y = o.useContext(g),
            [C, S] = o.useState(null),
            E = C?.ownerDocument ?? globalThis?.document,
            [, R] = o.useState({}),
            k = c(t, (e) => S(e)),
            P = Array.from(y.layers),
            [T] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = P.indexOf(T),
            D = C ? P.indexOf(C) : -1,
            L = y.layersWithOutsidePointerEventsDisabled.size > 0,
            M = D >= j,
            N = (function (e, t = globalThis?.document) {
              let n = (0, h.W)(e),
                r = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            x("dismissableLayer.pointerDownOutside", n, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", l.current),
                            (l.current = r),
                            t.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : r();
                      } else t.removeEventListener("click", l.current);
                      r.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", l.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...y.branches].some((e) => e.contains(t));
              !M || n || (a?.(e), u?.(e), e.defaultPrevented || d?.());
            }, E),
            _ = (function (e, t = globalThis?.document) {
              let n = (0, h.W)(e),
                r = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      x(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...y.branches].some((e) => e.contains(t)) ||
                (s?.(e), u?.(e), e.defaultPrevented || d?.());
            }, E);
          return (
            (0, m.e)((e) => {
              D !== y.layers.size - 1 ||
                (l?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()));
            }, E),
            o.useEffect(() => {
              if (C)
                return (
                  n &&
                    (0 === y.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = E.body.style.pointerEvents),
                      (E.body.style.pointerEvents = "none")),
                    y.layersWithOutsidePointerEventsDisabled.add(C)),
                  y.layers.add(C),
                  b(),
                  () => {
                    n &&
                      1 === y.layersWithOutsidePointerEventsDisabled.size &&
                      (E.body.style.pointerEvents = r);
                  }
                );
            }, [C, E, n, y]),
            o.useEffect(
              () => () => {
                C &&
                  (y.layers.delete(C),
                  y.layersWithOutsidePointerEventsDisabled.delete(C),
                  b());
              },
              [C, y]
            ),
            o.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(w, e),
                () => document.removeEventListener(w, e)
              );
            }, []),
            (0, f.jsx)(v.div, {
              ...p,
              ref: k,
              style: {
                pointerEvents: L ? (M ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: i(e.onFocusCapture, _.onFocusCapture),
              onBlurCapture: i(e.onBlurCapture, _.onBlurCapture),
              onPointerDownCapture: i(
                e.onPointerDownCapture,
                N.onPointerDownCapture
              ),
            })
          );
        });
      function b() {
        let e = new CustomEvent(w);
        document.dispatchEvent(e);
      }
      function x(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && l.flushSync(() => o.dispatchEvent(a))
          : o.dispatchEvent(a);
      }
      (y.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(g),
            r = o.useRef(null),
            l = c(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, f.jsx)(v.div, { ...e, ref: l })
          );
        }).displayName = "DismissableLayerBranch");
      var C = n(27552),
        S = n(70475),
        E = n(91276),
        R = n(12667),
        k = n(9981),
        P = o.forwardRef((e, t) => {
          let { container: n, ...r } = e,
            [a, i] = o.useState(!1);
          (0, k.b)(() => i(!0), []);
          let s = n || (a && globalThis?.document?.body);
          return s
            ? l.createPortal((0, f.jsx)(v.div, { ...r, ref: t }), s)
            : null;
        });
      P.displayName = "Portal";
      var T = n(77342),
        j = n(57898),
        D = o.forwardRef((e, t) =>
          (0, f.jsx)(v.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      D.displayName = "VisuallyHidden";
      var L = n(23541),
        M = n(97582),
        N = n(71642),
        _ = n(99495),
        I = (0, n(87122)._)(),
        B = function () {},
        W = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: B,
              onWheelCapture: B,
              onTouchMoveCapture: B,
            }),
            l = r[0],
            a = r[1],
            i = e.forwardProps,
            s = e.children,
            u = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            h = e.inert,
            m = e.allowPinchZoom,
            w = e.as,
            g = e.gapMode,
            y = (0, M.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            b = (0, _.q)([n, t]),
            x = (0, M.__assign)((0, M.__assign)({}, y), l);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: I,
                removeScrollBar: c,
                shards: f,
                noIsolation: v,
                inert: h,
                setCallbacks: a,
                allowPinchZoom: !!m,
                lockRef: n,
                gapMode: g,
              }),
            i
              ? o.cloneElement(
                  o.Children.only(s),
                  (0, M.__assign)((0, M.__assign)({}, x), { ref: b })
                )
              : o.createElement(
                  void 0 === w ? "div" : w,
                  (0, M.__assign)({}, x, { className: u, ref: b }),
                  s
                )
          );
        });
      (W.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (W.classNames = { fullWidth: N.zi, zeroRight: N.pF });
      var A = n(66781),
        O = n(37087),
        H = n(6525),
        F = !1;
      if ("undefined" != typeof window)
        try {
          var V = Object.defineProperty({}, "passive", {
            get: function () {
              return (F = !0), !0;
            },
          });
          window.addEventListener("test", V, V),
            window.removeEventListener("test", V, V);
        } catch (e) {
          F = !1;
        }
      var z = !!F && { passive: !1 },
        K = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        Y = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              Z(e, r))
            ) {
              var o = U(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        Z = function (e, t) {
          return "v" === e ? K(t, "overflowY") : K(t, "overflowX");
        },
        U = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        X = function (e, t, n, r, o) {
          var l,
            a =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            i = a * r,
            s = n.target,
            u = t.contains(s),
            c = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = U(e, s),
              h = v[0],
              m = v[1] - v[2] - a * h;
            (h || m) && Z(e, s) && ((f += m), (p += h)),
              s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
          } while (
            (!u && s !== document.body) ||
            (u && (t.contains(s) || t === s))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (c = !0),
            c
          );
        },
        q = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        $ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        G = function (e) {
          return e && "current" in e ? e.current : e;
        },
        J = 0,
        Q = [],
        ee = (0, A.L)(I, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            l = o.useState(J++)[0],
            a = o.useState(H.Ws)[0],
            i = o.useRef(e);
          o.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(l));
                  var t = (0, M.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(G),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(l));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(l)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(l)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var s = o.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !i.current.allowPinchZoom;
              var o,
                l = q(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - l[0],
                u = "deltaY" in e ? e.deltaY : a[1] - l[1],
                c = e.target,
                d = Math.abs(s) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = Y(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = Y(d, c))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || u) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return X(p, t, e, "h" === p ? s : u, !0);
            }, []),
            u = o.useCallback(function (e) {
              if (Q.length && Q[Q.length - 1] === a) {
                var n = "deltaY" in e ? $(e) : q(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (i.current.shards || [])
                    .map(G)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? s(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var l = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = q(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, $(t), t.target, s(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              c(t.type, q(t), t.target, s(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              Q.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, z),
              document.addEventListener("touchmove", u, z),
              document.addEventListener("touchstart", d, z),
              function () {
                (Q = Q.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", u, z),
                  document.removeEventListener("touchmove", u, z),
                  document.removeEventListener("touchstart", d, z);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            h = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            h
              ? o.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      l,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(l, " {pointer-events: all;}\n"),
                })
              : null,
            v ? o.createElement(O.jp, { gapMode: e.gapMode }) : null
          );
        }),
        et = o.forwardRef(function (e, t) {
          return o.createElement(
            W,
            (0, M.__assign)({}, e, { ref: t, sideCar: ee })
          );
        });
      et.classNames = W.classNames;
      var en = [" ", "Enter", "ArrowUp", "ArrowDown"],
        er = [" ", "Enter"],
        eo = "Select",
        [el, ea, ei] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = (0, s.b)(t),
            [l, a] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            i = (e) => {
              let { scope: t, children: n } = e,
                r = o.useRef(null),
                a = o.useRef(new Map()).current;
              return (0, f.jsx)(l, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n,
              });
            };
          i.displayName = t;
          let u = e + "CollectionSlot",
            p = o.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = c(t, a(u, n).collectionRef);
              return (0, f.jsx)(d.g7, { ref: o, children: r });
            });
          p.displayName = u;
          let v = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            m = o.forwardRef((e, t) => {
              let { scope: n, children: r, ...l } = e,
                i = o.useRef(null),
                s = c(t, i),
                u = a(v, n);
              return (
                o.useEffect(
                  () => (
                    u.itemMap.set(i, { ref: i, ...l }),
                    () => void u.itemMap.delete(i)
                  )
                ),
                (0, f.jsx)(d.g7, { [h]: "", ref: s, children: r })
              );
            });
          return (
            (m.displayName = v),
            [
              { Provider: i, Slot: p, ItemSlot: m },
              function (t) {
                let n = a(e + "CollectionConsumer", t);
                return o.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${h}]`));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              r,
            ]
          );
        })(eo),
        [es, eu] = (0, s.b)(eo, [ei, R.D7]),
        ec = (0, R.D7)(),
        [ed, ef] = es(eo),
        [ep, ev] = es(eo),
        eh = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: l,
              onOpenChange: a,
              value: i,
              defaultValue: s,
              onValueChange: u,
              dir: c,
              name: d,
              autoComplete: v,
              disabled: h,
              required: m,
              form: w,
            } = e,
            g = ec(t),
            [y, b] = o.useState(null),
            [x, C] = o.useState(null),
            [S, k] = o.useState(!1),
            P = (0, p.gm)(c),
            [j = !1, D] = (0, T.T)({ prop: r, defaultProp: l, onChange: a }),
            [L, M] = (0, T.T)({ prop: i, defaultProp: s, onChange: u }),
            N = o.useRef(null),
            _ = !y || w || !!y.closest("form"),
            [I, B] = o.useState(new Set()),
            W = Array.from(I)
              .map((e) => e.props.value)
              .join(";");
          return (0, f.jsx)(R.fC, {
            ...g,
            children: (0, f.jsxs)(ed, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: x,
              onValueNodeChange: C,
              valueNodeHasChildren: S,
              onValueNodeHasChildrenChange: k,
              contentId: (0, E.M)(),
              value: L,
              onValueChange: M,
              open: j,
              onOpenChange: D,
              dir: P,
              triggerPointerDownPosRef: N,
              disabled: h,
              children: [
                (0, f.jsx)(el.Provider, {
                  scope: t,
                  children: (0, f.jsx)(ep, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: o.useCallback((e) => {
                      B((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: o.useCallback((e) => {
                      B((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                _
                  ? (0, f.jsxs)(
                      e1,
                      {
                        "aria-hidden": !0,
                        required: m,
                        tabIndex: -1,
                        name: d,
                        autoComplete: v,
                        value: L,
                        onChange: (e) => M(e.target.value),
                        disabled: h,
                        form: w,
                        children: [
                          void 0 === L
                            ? (0, f.jsx)("option", { value: "" })
                            : null,
                          Array.from(I),
                        ],
                      },
                      W
                    )
                  : null,
              ],
            }),
          });
        };
      eh.displayName = eo;
      var em = "SelectTrigger",
        ew = o.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...l } = e,
            a = ec(n),
            s = ef(em, n),
            u = s.disabled || r,
            d = c(t, s.onTriggerChange),
            p = ea(n),
            h = o.useRef("touch"),
            [m, w, g] = e2((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === s.value),
                r = e7(t, e, n);
              void 0 !== r && s.onValueChange(r.value);
            }),
            y = (e) => {
              u || (s.onOpenChange(!0), g()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, f.jsx)(R.ee, {
            asChild: !0,
            ...a,
            children: (0, f.jsx)(v.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": e0(s.value) ? "" : void 0,
              ...l,
              ref: d,
              onClick: i(l.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== h.current && y(e);
              }),
              onPointerDown: i(l.onPointerDown, (e) => {
                h.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (y(e), e.preventDefault());
              }),
              onKeyDown: i(l.onKeyDown, (e) => {
                let t = "" !== m.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  w(e.key),
                  (!t || " " !== e.key) &&
                    en.includes(e.key) &&
                    (y(), e.preventDefault());
              }),
            }),
          });
        });
      ew.displayName = em;
      var eg = "SelectValue",
        ey = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: l,
              placeholder: a = "",
              ...i
            } = e,
            s = ef(eg, n),
            { onValueNodeHasChildrenChange: u } = s,
            d = void 0 !== l,
            p = c(t, s.onValueNodeChange);
          return (
            (0, k.b)(() => {
              u(d);
            }, [u, d]),
            (0, f.jsx)(v.span, {
              ...i,
              ref: p,
              style: { pointerEvents: "none" },
              children: e0(s.value)
                ? (0, f.jsx)(f.Fragment, { children: a })
                : l,
            })
          );
        });
      ey.displayName = eg;
      var eb = o.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, f.jsx)(v.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      eb.displayName = "SelectIcon";
      var ex = (e) => (0, f.jsx)(P, { asChild: !0, ...e });
      ex.displayName = "SelectPortal";
      var eC = "SelectContent",
        eS = o.forwardRef((e, t) => {
          let n = ef(eC, e.__scopeSelect),
            [r, a] = o.useState();
          return ((0, k.b)(() => {
            a(new DocumentFragment());
          }, []),
          n.open)
            ? (0, f.jsx)(ek, { ...e, ref: t })
            : r
            ? l.createPortal(
                (0, f.jsx)(eE, {
                  scope: e.__scopeSelect,
                  children: (0, f.jsx)(el.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, f.jsx)("div", { children: e.children }),
                  }),
                }),
                r
              )
            : null;
        });
      eS.displayName = eC;
      var [eE, eR] = es(eC),
        ek = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: l,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              side: u,
              sideOffset: p,
              align: v,
              alignOffset: h,
              arrowPadding: m,
              collisionBoundary: w,
              collisionPadding: g,
              sticky: b,
              hideWhenDetached: x,
              avoidCollisions: E,
              ...R
            } = e,
            k = ef(eC, n),
            [P, T] = o.useState(null),
            [j, D] = o.useState(null),
            M = c(t, (e) => T(e)),
            [N, _] = o.useState(null),
            [I, B] = o.useState(null),
            W = ea(n),
            [A, O] = o.useState(!1),
            H = o.useRef(!1);
          o.useEffect(() => {
            if (P) return (0, L.Ry)(P);
          }, [P]),
            (0, C.EW)();
          let F = o.useCallback(
              (e) => {
                let [t, ...n] = W().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (n?.scrollIntoView({ block: "nearest" }),
                    n === t && j && (j.scrollTop = 0),
                    n === r && j && (j.scrollTop = j.scrollHeight),
                    n?.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [W, j]
            ),
            V = o.useCallback(() => F([N, P]), [F, N, P]);
          o.useEffect(() => {
            A && V();
          }, [A, V]);
          let { onOpenChange: z, triggerPointerDownPosRef: K } = k;
          o.useEffect(() => {
            if (P) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (K.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (K.current?.y ?? 0)),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : P.contains(n.target) || z(!1),
                    document.removeEventListener("pointermove", t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [P, z, K]),
            o.useEffect(() => {
              let e = () => z(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [z]);
          let [Y, Z] = e2((e) => {
              let t = W().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = e7(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            U = o.useCallback(
              (e, t, n) => {
                let r = !H.current && !n;
                ((void 0 !== k.value && k.value === t) || r) &&
                  (_(e), r && (H.current = !0));
              },
              [k.value]
            ),
            X = o.useCallback(() => P?.focus(), [P]),
            q = o.useCallback(
              (e, t, n) => {
                let r = !H.current && !n;
                ((void 0 !== k.value && k.value === t) || r) && B(e);
              },
              [k.value]
            ),
            $ = "popper" === r ? eT : eP,
            G =
              $ === eT
                ? {
                    side: u,
                    sideOffset: p,
                    align: v,
                    alignOffset: h,
                    arrowPadding: m,
                    collisionBoundary: w,
                    collisionPadding: g,
                    sticky: b,
                    hideWhenDetached: x,
                    avoidCollisions: E,
                  }
                : {};
          return (0, f.jsx)(eE, {
            scope: n,
            content: P,
            viewport: j,
            onViewportChange: D,
            itemRefCallback: U,
            selectedItem: N,
            onItemLeave: X,
            itemTextRefCallback: q,
            focusSelectedItem: V,
            selectedItemText: I,
            position: r,
            isPositioned: A,
            searchRef: Y,
            children: (0, f.jsx)(et, {
              as: d.g7,
              allowPinchZoom: !0,
              children: (0, f.jsx)(S.M, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: i(l, (e) => {
                  k.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                }),
                children: (0, f.jsx)(y, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, f.jsx)($, {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...R,
                    ...G,
                    onPlaced: () => O(!0),
                    ref: M,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...R.style,
                    },
                    onKeyDown: i(R.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || Z(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = W()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => F(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ek.displayName = "SelectContentImpl";
      var eP = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...l } = e,
          i = ef(eC, n),
          s = eR(eC, n),
          [u, d] = o.useState(null),
          [p, h] = o.useState(null),
          m = c(t, (e) => h(e)),
          w = ea(n),
          g = o.useRef(!1),
          y = o.useRef(!0),
          {
            viewport: b,
            selectedItem: x,
            selectedItemText: C,
            focusSelectedItem: S,
          } = s,
          E = o.useCallback(() => {
            if (i.trigger && i.valueNode && u && p && b && x && C) {
              let e = i.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                n = i.valueNode.getBoundingClientRect(),
                o = C.getBoundingClientRect();
              if ("rtl" !== i.dir) {
                let r = o.left - t.left,
                  l = n.left - r,
                  i = e.left - l,
                  s = e.width + i,
                  c = Math.max(s, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.u)(l, [10, Math.max(10, d - c)]);
                (u.style.minWidth = s + "px"), (u.style.left = f + "px");
              } else {
                let r = t.right - o.right,
                  l = window.innerWidth - n.right - r,
                  i = window.innerWidth - e.right - l,
                  s = e.width + i,
                  c = Math.max(s, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.u)(l, [10, Math.max(10, d - c)]);
                (u.style.minWidth = s + "px"), (u.style.right = f + "px");
              }
              let l = w(),
                s = window.innerHeight - 20,
                c = b.scrollHeight,
                d = window.getComputedStyle(p),
                f = parseInt(d.borderTopWidth, 10),
                v = parseInt(d.paddingTop, 10),
                h = parseInt(d.borderBottomWidth, 10),
                m = f + v + c + parseInt(d.paddingBottom, 10) + h,
                y = Math.min(5 * x.offsetHeight, m),
                S = window.getComputedStyle(b),
                E = parseInt(S.paddingTop, 10),
                R = parseInt(S.paddingBottom, 10),
                k = e.top + e.height / 2 - 10,
                P = x.offsetHeight / 2,
                T = f + v + (x.offsetTop + P);
              if (T <= k) {
                let e = l.length > 0 && x === l[l.length - 1].ref.current;
                u.style.bottom = "0px";
                let t = p.clientHeight - b.offsetTop - b.offsetHeight;
                u.style.height =
                  T + Math.max(s - k, P + (e ? R : 0) + t + h) + "px";
              } else {
                let e = l.length > 0 && x === l[0].ref.current;
                u.style.top = "0px";
                let t = Math.max(k, f + b.offsetTop + (e ? E : 0) + P);
                (u.style.height = t + (m - T) + "px"),
                  (b.scrollTop = T - k + b.offsetTop);
              }
              (u.style.margin = "10px 0"),
                (u.style.minHeight = y + "px"),
                (u.style.maxHeight = s + "px"),
                r?.(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [w, i.trigger, i.valueNode, u, p, b, x, C, i.dir, r]);
        (0, k.b)(() => E(), [E]);
        let [R, P] = o.useState();
        (0, k.b)(() => {
          p && P(window.getComputedStyle(p).zIndex);
        }, [p]);
        let T = o.useCallback(
          (e) => {
            e && !0 === y.current && (E(), S?.(), (y.current = !1));
          },
          [E, S]
        );
        return (0, f.jsx)(ej, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: T,
          children: (0, f.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: R,
            },
            children: (0, f.jsx)(v.div, {
              ...l,
              ref: m,
              style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
            }),
          }),
        });
      });
      eP.displayName = "SelectItemAlignedPosition";
      var eT = o.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...l
          } = e,
          a = ec(n);
        return (0, f.jsx)(R.VY, {
          ...a,
          ...l,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...l.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      eT.displayName = "SelectPopperPosition";
      var [ej, eD] = es(eC, {}),
        eL = "SelectViewport",
        eM = o.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: r, ...l } = e,
            a = eR(eL, n),
            s = eD(eL, n),
            u = c(t, a.onViewportChange),
            d = o.useRef(0);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: r,
              }),
              (0, f.jsx)(el.Slot, {
                scope: n,
                children: (0, f.jsx)(v.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...l,
                  ref: u,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...l.style,
                  },
                  onScroll: i(l.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
                    if (r?.current && n) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let l = o + e,
                            a = Math.min(r, l),
                            i = l - a;
                          (n.style.height = a + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = i > 0 ? i : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eM.displayName = eL;
      var eN = "SelectGroup",
        [e_, eI] = es(eN),
        eB = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = (0, E.M)();
          return (0, f.jsx)(e_, {
            scope: n,
            id: o,
            children: (0, f.jsx)(v.div, {
              role: "group",
              "aria-labelledby": o,
              ...r,
              ref: t,
            }),
          });
        });
      eB.displayName = eN;
      var eW = "SelectLabel",
        eA = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = eI(eW, n);
          return (0, f.jsx)(v.div, { id: o.id, ...r, ref: t });
        });
      eA.displayName = eW;
      var eO = "SelectItem",
        [eH, eF] = es(eO),
        eV = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: l = !1,
              textValue: a,
              ...s
            } = e,
            u = ef(eO, n),
            d = eR(eO, n),
            p = u.value === r,
            [h, m] = o.useState(a ?? ""),
            [w, g] = o.useState(!1),
            y = c(t, (e) => d.itemRefCallback?.(e, r, l)),
            b = (0, E.M)(),
            x = o.useRef("touch"),
            C = () => {
              l || (u.onValueChange(r), u.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, f.jsx)(eH, {
            scope: n,
            value: r,
            disabled: l,
            textId: b,
            isSelected: p,
            onItemTextChange: o.useCallback((e) => {
              m((t) => t || (e?.textContent ?? "").trim());
            }, []),
            children: (0, f.jsx)(el.ItemSlot, {
              scope: n,
              value: r,
              disabled: l,
              textValue: h,
              children: (0, f.jsx)(v.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": w ? "" : void 0,
                "aria-selected": p && w,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: i(s.onFocus, () => g(!0)),
                onBlur: i(s.onBlur, () => g(!1)),
                onClick: i(s.onClick, () => {
                  "mouse" !== x.current && C();
                }),
                onPointerUp: i(s.onPointerUp, () => {
                  "mouse" === x.current && C();
                }),
                onPointerDown: i(s.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: i(s.onPointerMove, (e) => {
                  (x.current = e.pointerType),
                    l
                      ? d.onItemLeave?.()
                      : "mouse" === x.current &&
                        e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: i(s.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    d.onItemLeave?.();
                }),
                onKeyDown: i(s.onKeyDown, (e) => {
                  (d.searchRef?.current !== "" && " " === e.key) ||
                    (er.includes(e.key) && C(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      eV.displayName = eO;
      var ez = "SelectItemText",
        eK = o.forwardRef((e, t) => {
          let { __scopeSelect: n, className: r, style: a, ...i } = e,
            s = ef(ez, n),
            u = eR(ez, n),
            d = eF(ez, n),
            p = ev(ez, n),
            [h, m] = o.useState(null),
            w = c(
              t,
              (e) => m(e),
              d.onItemTextChange,
              (e) => u.itemTextRefCallback?.(e, d.value, d.disabled)
            ),
            g = h?.textContent,
            y = o.useMemo(
              () =>
                (0, f.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: g },
                  d.value
                ),
              [d.disabled, d.value, g]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: x } = p;
          return (
            (0, k.b)(() => (b(y), () => x(y)), [b, x, y]),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(v.span, { id: d.textId, ...i, ref: w }),
                d.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? l.createPortal(i.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      eK.displayName = ez;
      var eY = "SelectItemIndicator",
        eZ = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return eF(eY, n).isSelected
            ? (0, f.jsx)(v.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      eZ.displayName = eY;
      var eU = "SelectScrollUpButton",
        eX = o.forwardRef((e, t) => {
          let n = eR(eU, e.__scopeSelect),
            r = eD(eU, e.__scopeSelect),
            [l, a] = o.useState(!1),
            i = c(t, r.onScrollButtonChange);
          return (
            (0, k.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    a(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            l
              ? (0, f.jsx)(eG, {
                  ...e,
                  ref: i,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      eX.displayName = eU;
      var eq = "SelectScrollDownButton",
        e$ = o.forwardRef((e, t) => {
          let n = eR(eq, e.__scopeSelect),
            r = eD(eq, e.__scopeSelect),
            [l, a] = o.useState(!1),
            i = c(t, r.onScrollButtonChange);
          return (
            (0, k.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    a(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            l
              ? (0, f.jsx)(eG, {
                  ...e,
                  ref: i,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      e$.displayName = eq;
      var eG = o.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...l } = e,
            a = eR("SelectScrollButton", n),
            s = o.useRef(null),
            u = ea(n),
            c = o.useCallback(() => {
              null !== s.current &&
                (window.clearInterval(s.current), (s.current = null));
            }, []);
          return (
            o.useEffect(() => () => c(), [c]),
            (0, k.b)(() => {
              let e = u().find((e) => e.ref.current === document.activeElement);
              e?.ref.current?.scrollIntoView({ block: "nearest" });
            }, [u]),
            (0, f.jsx)(v.div, {
              "aria-hidden": !0,
              ...l,
              ref: t,
              style: { flexShrink: 0, ...l.style },
              onPointerDown: i(l.onPointerDown, () => {
                null === s.current && (s.current = window.setInterval(r, 50));
              }),
              onPointerMove: i(l.onPointerMove, () => {
                a.onItemLeave?.(),
                  null === s.current && (s.current = window.setInterval(r, 50));
              }),
              onPointerLeave: i(l.onPointerLeave, () => {
                c();
              }),
            })
          );
        }),
        eJ = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, f.jsx)(v.div, { "aria-hidden": !0, ...r, ref: t });
        });
      eJ.displayName = "SelectSeparator";
      var eQ = "SelectArrow";
      function e0(e) {
        return "" === e || void 0 === e;
      }
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = ec(n),
          l = ef(eQ, n),
          a = eR(eQ, n);
        return l.open && "popper" === a.position
          ? (0, f.jsx)(R.Eh, { ...o, ...r, ref: t })
          : null;
      }).displayName = eQ;
      var e1 = o.forwardRef((e, t) => {
        let { value: n, ...r } = e,
          l = o.useRef(null),
          a = c(t, l),
          i = (0, j.D)(n);
        return (
          o.useEffect(() => {
            let e = l.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (i !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [i, n]),
          (0, f.jsx)(D, {
            asChild: !0,
            children: (0, f.jsx)("select", { ...r, ref: a, defaultValue: n }),
          })
        );
      });
      function e2(e) {
        let t = (0, h.W)(e),
          n = o.useRef(""),
          r = o.useRef(0),
          l = o.useCallback(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          a = o.useCallback(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          o.useEffect(() => () => window.clearTimeout(r.current), []), [n, l, a]
        );
      }
      function e7(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          l =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (l = l.filter((e) => e !== n));
        let a = l.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return a !== n ? a : void 0;
      }
      e1.displayName = "BubbleSelect";
      var e5 = eh,
        e6 = ew,
        e8 = ey,
        e9 = eb,
        e4 = ex,
        e3 = eS,
        te = eM,
        tt = eB,
        tn = eA,
        tr = eV,
        to = eK,
        tl = eZ,
        ta = eX,
        ti = e$,
        ts = eJ;
    },
  },
]);
