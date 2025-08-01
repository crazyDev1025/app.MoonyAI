"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [443],
  {
    42614: function (e, r, t) {
      t.d(r, {
        u: function () {
          return o;
        },
      });
      function o(e, [r, t]) {
        return Math.min(t, Math.max(r, e));
      }
    },
    25443: function (e, r, t) {
      t.d(r, {
        Ns: function () {
          return G;
        },
        fC: function () {
          return q;
        },
        gb: function () {
          return y;
        },
        l_: function () {
          return $;
        },
        q4: function () {
          return N;
        },
      });
      var o = t(67294),
        n = t(64757),
        l = t(29115),
        i = t(25360),
        a = t(28771),
        s = t(79698),
        c = t(78990),
        u = t(9981),
        d = t(42614),
        f = t(36206),
        p = t(85893),
        h = "ScrollArea",
        [w, v] = (0, i.b)(h),
        [b, g] = w(h),
        m = o.forwardRef((e, r) => {
          let {
              __scopeScrollArea: t,
              type: l = "hover",
              dir: i,
              scrollHideDelay: s = 600,
              ...u
            } = e,
            [d, f] = o.useState(null),
            [h, w] = o.useState(null),
            [v, g] = o.useState(null),
            [m, S] = o.useState(null),
            [E, x] = o.useState(null),
            [y, C] = o.useState(0),
            [T, R] = o.useState(0),
            [L, P] = o.useState(!1),
            [_, j] = o.useState(!1),
            D = (0, a.e)(r, (e) => f(e)),
            W = (0, c.gm)(i);
          return (0, p.jsx)(b, {
            scope: t,
            type: l,
            dir: W,
            scrollHideDelay: s,
            scrollArea: d,
            viewport: h,
            onViewportChange: w,
            content: v,
            onContentChange: g,
            scrollbarX: m,
            onScrollbarXChange: S,
            scrollbarXEnabled: L,
            onScrollbarXEnabledChange: P,
            scrollbarY: E,
            onScrollbarYChange: x,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: C,
            onCornerHeightChange: R,
            children: (0, p.jsx)(n.WV.div, {
              dir: W,
              ...u,
              ref: D,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": T + "px",
                ...e.style,
              },
            }),
          });
        });
      m.displayName = h;
      var S = "ScrollAreaViewport",
        E = o.forwardRef((e, r) => {
          let { __scopeScrollArea: t, children: l, nonce: i, ...s } = e,
            c = g(S, t),
            u = o.useRef(null),
            d = (0, a.e)(r, u, c.onViewportChange);
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: i,
              }),
              (0, p.jsx)(n.WV.div, {
                "data-radix-scroll-area-viewport": "",
                ...s,
                ref: d,
                style: {
                  overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                  overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                  ...e.style,
                },
                children: (0, p.jsx)("div", {
                  ref: c.onContentChange,
                  style: { minWidth: "100%", display: "table" },
                  children: l,
                }),
              }),
            ],
          });
        });
      E.displayName = S;
      var x = "ScrollAreaScrollbar",
        y = o.forwardRef((e, r) => {
          let { forceMount: t, ...n } = e,
            l = g(x, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = l,
            s = "horizontal" === e.orientation;
          return (
            o.useEffect(
              () => (
                s ? i(!0) : a(!0),
                () => {
                  s ? i(!1) : a(!1);
                }
              ),
              [s, i, a]
            ),
            "hover" === l.type
              ? (0, p.jsx)(C, { ...n, ref: r, forceMount: t })
              : "scroll" === l.type
              ? (0, p.jsx)(T, { ...n, ref: r, forceMount: t })
              : "auto" === l.type
              ? (0, p.jsx)(R, { ...n, ref: r, forceMount: t })
              : "always" === l.type
              ? (0, p.jsx)(L, { ...n, ref: r })
              : null
          );
        });
      y.displayName = x;
      var C = o.forwardRef((e, r) => {
          let { forceMount: t, ...n } = e,
            i = g(x, e.__scopeScrollArea),
            [a, s] = o.useState(!1);
          return (
            o.useEffect(() => {
              let e = i.scrollArea,
                r = 0;
              if (e) {
                let t = () => {
                    window.clearTimeout(r), s(!0);
                  },
                  o = () => {
                    r = window.setTimeout(() => s(!1), i.scrollHideDelay);
                  };
                return (
                  e.addEventListener("pointerenter", t),
                  e.addEventListener("pointerleave", o),
                  () => {
                    window.clearTimeout(r),
                      e.removeEventListener("pointerenter", t),
                      e.removeEventListener("pointerleave", o);
                  }
                );
              }
            }, [i.scrollArea, i.scrollHideDelay]),
            (0, p.jsx)(l.z, {
              present: t || a,
              children: (0, p.jsx)(R, {
                "data-state": a ? "visible" : "hidden",
                ...n,
                ref: r,
              }),
            })
          );
        }),
        T = o.forwardRef((e, r) => {
          var t, n;
          let { forceMount: i, ...a } = e,
            s = g(x, e.__scopeScrollArea),
            c = "horizontal" === e.orientation,
            u = F(() => h("SCROLL_END"), 100),
            [d, h] =
              ((t = "hidden"),
              (n = {
                hidden: { SCROLL: "scrolling" },
                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                idle: {
                  HIDE: "hidden",
                  SCROLL: "scrolling",
                  POINTER_ENTER: "interacting",
                },
              }),
              o.useReducer((e, r) => n[e][r] ?? e, t));
          return (
            o.useEffect(() => {
              if ("idle" === d) {
                let e = window.setTimeout(() => h("HIDE"), s.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [d, s.scrollHideDelay, h]),
            o.useEffect(() => {
              let e = s.viewport,
                r = c ? "scrollLeft" : "scrollTop";
              if (e) {
                let t = e[r],
                  o = () => {
                    let o = e[r];
                    t !== o && (h("SCROLL"), u()), (t = o);
                  };
                return (
                  e.addEventListener("scroll", o),
                  () => e.removeEventListener("scroll", o)
                );
              }
            }, [s.viewport, c, h, u]),
            (0, p.jsx)(l.z, {
              present: i || "hidden" !== d,
              children: (0, p.jsx)(L, {
                "data-state": "hidden" === d ? "hidden" : "visible",
                ...a,
                ref: r,
                onPointerEnter: (0, f.M)(e.onPointerEnter, () =>
                  h("POINTER_ENTER")
                ),
                onPointerLeave: (0, f.M)(e.onPointerLeave, () =>
                  h("POINTER_LEAVE")
                ),
              }),
            })
          );
        }),
        R = o.forwardRef((e, r) => {
          let t = g(x, e.__scopeScrollArea),
            { forceMount: n, ...i } = e,
            [a, s] = o.useState(!1),
            c = "horizontal" === e.orientation,
            u = F(() => {
              if (t.viewport) {
                let e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(c ? e : r);
              }
            }, 10);
          return (
            B(t.viewport, u),
            B(t.content, u),
            (0, p.jsx)(l.z, {
              present: n || a,
              children: (0, p.jsx)(L, {
                "data-state": a ? "visible" : "hidden",
                ...i,
                ref: r,
              }),
            })
          );
        }),
        L = o.forwardRef((e, r) => {
          let { orientation: t = "vertical", ...n } = e,
            l = g(x, e.__scopeScrollArea),
            i = o.useRef(null),
            a = o.useRef(0),
            [s, c] = o.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            u = X(s.viewport, s.content),
            d = {
              ...n,
              sizes: s,
              onSizesChange: c,
              hasThumb: !!(u > 0 && u < 1),
              onThumbChange: (e) => (i.current = e),
              onThumbPointerUp: () => (a.current = 0),
              onThumbPointerDown: (e) => (a.current = e),
            };
          function f(e, r) {
            return (function (e, r, t, o = "ltr") {
              let n = Y(t),
                l = r || n / 2,
                i = t.scrollbar.paddingStart + l,
                a = t.scrollbar.size - t.scrollbar.paddingEnd - (n - l),
                s = t.content - t.viewport;
              return U([i, a], "ltr" === o ? [0, s] : [-1 * s, 0])(e);
            })(e, a.current, s, r);
          }
          return "horizontal" === t
            ? (0, p.jsx)(P, {
                ...d,
                ref: r,
                onThumbPositionChange: () => {
                  if (l.viewport && i.current) {
                    let e = k(l.viewport.scrollLeft, s, l.dir);
                    i.current.style.transform = `translate3d(${e}px, 0, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  l.viewport && (l.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  l.viewport && (l.viewport.scrollLeft = f(e, l.dir));
                },
              })
            : "vertical" === t
            ? (0, p.jsx)(_, {
                ...d,
                ref: r,
                onThumbPositionChange: () => {
                  if (l.viewport && i.current) {
                    let e = k(l.viewport.scrollTop, s);
                    i.current.style.transform = `translate3d(0, ${e}px, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  l.viewport && (l.viewport.scrollTop = e);
                },
                onDragScroll: (e) => {
                  l.viewport && (l.viewport.scrollTop = f(e));
                },
              })
            : null;
        }),
        P = o.forwardRef((e, r) => {
          let { sizes: t, onSizesChange: n, ...l } = e,
            i = g(x, e.__scopeScrollArea),
            [s, c] = o.useState(),
            u = o.useRef(null),
            d = (0, a.e)(r, u, i.onScrollbarXChange);
          return (
            o.useEffect(() => {
              u.current && c(getComputedStyle(u.current));
            }, [u]),
            (0, p.jsx)(W, {
              "data-orientation": "horizontal",
              ...l,
              ref: d,
              sizes: t,
              style: {
                bottom: 0,
                left:
                  "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                right:
                  "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": Y(t) + "px",
                ...e.style,
              },
              onThumbPointerDown: (r) => e.onThumbPointerDown(r.x),
              onDragScroll: (r) => e.onDragScroll(r.x),
              onWheelScroll: (r, t) => {
                if (i.viewport) {
                  let o = i.viewport.scrollLeft + r.deltaX;
                  e.onWheelScroll(o), o > 0 && o < t && r.preventDefault();
                }
              },
              onResize: () => {
                u.current &&
                  i.viewport &&
                  s &&
                  n({
                    content: i.viewport.scrollWidth,
                    viewport: i.viewport.offsetWidth,
                    scrollbar: {
                      size: u.current.clientWidth,
                      paddingStart: O(s.paddingLeft),
                      paddingEnd: O(s.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        _ = o.forwardRef((e, r) => {
          let { sizes: t, onSizesChange: n, ...l } = e,
            i = g(x, e.__scopeScrollArea),
            [s, c] = o.useState(),
            u = o.useRef(null),
            d = (0, a.e)(r, u, i.onScrollbarYChange);
          return (
            o.useEffect(() => {
              u.current && c(getComputedStyle(u.current));
            }, [u]),
            (0, p.jsx)(W, {
              "data-orientation": "vertical",
              ...l,
              ref: d,
              sizes: t,
              style: {
                top: 0,
                right: "ltr" === i.dir ? 0 : void 0,
                left: "rtl" === i.dir ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": Y(t) + "px",
                ...e.style,
              },
              onThumbPointerDown: (r) => e.onThumbPointerDown(r.y),
              onDragScroll: (r) => e.onDragScroll(r.y),
              onWheelScroll: (r, t) => {
                if (i.viewport) {
                  let o = i.viewport.scrollTop + r.deltaY;
                  e.onWheelScroll(o), o > 0 && o < t && r.preventDefault();
                }
              },
              onResize: () => {
                u.current &&
                  i.viewport &&
                  s &&
                  n({
                    content: i.viewport.scrollHeight,
                    viewport: i.viewport.offsetHeight,
                    scrollbar: {
                      size: u.current.clientHeight,
                      paddingStart: O(s.paddingTop),
                      paddingEnd: O(s.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [j, D] = w(x),
        W = o.forwardRef((e, r) => {
          let {
              __scopeScrollArea: t,
              sizes: l,
              hasThumb: i,
              onThumbChange: c,
              onThumbPointerUp: u,
              onThumbPointerDown: d,
              onThumbPositionChange: h,
              onDragScroll: w,
              onWheelScroll: v,
              onResize: b,
              ...m
            } = e,
            S = g(x, t),
            [E, y] = o.useState(null),
            C = (0, a.e)(r, (e) => y(e)),
            T = o.useRef(null),
            R = o.useRef(""),
            L = S.viewport,
            P = l.content - l.viewport,
            _ = (0, s.W)(v),
            D = (0, s.W)(h),
            W = F(b, 10);
          function A(e) {
            T.current &&
              w({
                x: e.clientX - T.current.left,
                y: e.clientY - T.current.top,
              });
          }
          return (
            o.useEffect(() => {
              let e = (e) => {
                let r = e.target;
                E?.contains(r) && _(e, P);
              };
              return (
                document.addEventListener("wheel", e, { passive: !1 }),
                () => document.removeEventListener("wheel", e, { passive: !1 })
              );
            }, [L, E, P, _]),
            o.useEffect(D, [l, D]),
            B(E, W),
            B(S.content, W),
            (0, p.jsx)(j, {
              scope: t,
              scrollbar: E,
              hasThumb: i,
              onThumbChange: (0, s.W)(c),
              onThumbPointerUp: (0, s.W)(u),
              onThumbPositionChange: D,
              onThumbPointerDown: (0, s.W)(d),
              children: (0, p.jsx)(n.WV.div, {
                ...m,
                ref: C,
                style: { position: "absolute", ...m.style },
                onPointerDown: (0, f.M)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (T.current = E.getBoundingClientRect()),
                    (R.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    S.viewport && (S.viewport.style.scrollBehavior = "auto"),
                    A(e));
                }),
                onPointerMove: (0, f.M)(e.onPointerMove, A),
                onPointerUp: (0, f.M)(e.onPointerUp, (e) => {
                  let r = e.target;
                  r.hasPointerCapture(e.pointerId) &&
                    r.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = R.current),
                    S.viewport && (S.viewport.style.scrollBehavior = ""),
                    (T.current = null);
                }),
              }),
            })
          );
        }),
        A = "ScrollAreaThumb",
        N = o.forwardRef((e, r) => {
          let { forceMount: t, ...o } = e,
            n = D(A, e.__scopeScrollArea);
          return (0, p.jsx)(l.z, {
            present: t || n.hasThumb,
            children: (0, p.jsx)(z, { ref: r, ...o }),
          });
        }),
        z = o.forwardRef((e, r) => {
          let { __scopeScrollArea: t, style: l, ...i } = e,
            s = g(A, t),
            c = D(A, t),
            { onThumbPositionChange: u } = c,
            d = (0, a.e)(r, (e) => c.onThumbChange(e)),
            h = o.useRef(),
            w = F(() => {
              h.current && (h.current(), (h.current = void 0));
            }, 100);
          return (
            o.useEffect(() => {
              let e = s.viewport;
              if (e) {
                let r = () => {
                  if ((w(), !h.current)) {
                    let r = V(e, u);
                    (h.current = r), u();
                  }
                };
                return (
                  u(),
                  e.addEventListener("scroll", r),
                  () => e.removeEventListener("scroll", r)
                );
              }
            }, [s.viewport, w, u]),
            (0, p.jsx)(n.WV.div, {
              "data-state": c.hasThumb ? "visible" : "hidden",
              ...i,
              ref: d,
              style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...l,
              },
              onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, (e) => {
                let r = e.target.getBoundingClientRect(),
                  t = e.clientX - r.left,
                  o = e.clientY - r.top;
                c.onThumbPointerDown({ x: t, y: o });
              }),
              onPointerUp: (0, f.M)(e.onPointerUp, c.onThumbPointerUp),
            })
          );
        });
      N.displayName = A;
      var H = "ScrollAreaCorner",
        M = o.forwardRef((e, r) => {
          let t = g(H, e.__scopeScrollArea),
            o = !!(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o
            ? (0, p.jsx)(I, { ...e, ref: r })
            : null;
        });
      M.displayName = H;
      var I = o.forwardRef((e, r) => {
        let { __scopeScrollArea: t, ...l } = e,
          i = g(H, t),
          [a, s] = o.useState(0),
          [c, u] = o.useState(0),
          d = !!(a && c);
        return (
          B(i.scrollbarX, () => {
            let e = i.scrollbarX?.offsetHeight || 0;
            i.onCornerHeightChange(e), u(e);
          }),
          B(i.scrollbarY, () => {
            let e = i.scrollbarY?.offsetWidth || 0;
            i.onCornerWidthChange(e), s(e);
          }),
          d
            ? (0, p.jsx)(n.WV.div, {
                ...l,
                ref: r,
                style: {
                  width: a,
                  height: c,
                  position: "absolute",
                  right: "ltr" === i.dir ? 0 : void 0,
                  left: "rtl" === i.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        );
      });
      function O(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function X(e, r) {
        let t = e / r;
        return isNaN(t) ? 0 : t;
      }
      function Y(e) {
        let r = X(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - t) * r, 18);
      }
      function k(e, r, t = "ltr") {
        let o = Y(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          l = r.scrollbar.size - n,
          i = r.content - r.viewport,
          a = (0, d.u)(e, "ltr" === t ? [0, i] : [-1 * i, 0]);
        return U([0, i], [0, l - o])(a);
      }
      function U(e, r) {
        return (t) => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          let o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0]);
        };
      }
      var V = (e, r = () => {}) => {
        let t = { left: e.scrollLeft, top: e.scrollTop },
          o = 0;
        return (
          !(function n() {
            let l = { left: e.scrollLeft, top: e.scrollTop },
              i = t.left !== l.left,
              a = t.top !== l.top;
            (i || a) && r(), (t = l), (o = window.requestAnimationFrame(n));
          })(),
          () => window.cancelAnimationFrame(o)
        );
      };
      function F(e, r) {
        let t = (0, s.W)(e),
          n = o.useRef(0);
        return (
          o.useEffect(() => () => window.clearTimeout(n.current), []),
          o.useCallback(() => {
            window.clearTimeout(n.current),
              (n.current = window.setTimeout(t, r));
          }, [t, r])
        );
      }
      function B(e, r) {
        let t = (0, s.W)(r);
        (0, u.b)(() => {
          let r = 0;
          if (e) {
            let o = new ResizeObserver(() => {
              cancelAnimationFrame(r), (r = window.requestAnimationFrame(t));
            });
            return (
              o.observe(e),
              () => {
                window.cancelAnimationFrame(r), o.unobserve(e);
              }
            );
          }
        }, [e, t]);
      }
      var q = m,
        $ = E,
        G = M;
    },
  },
]);
