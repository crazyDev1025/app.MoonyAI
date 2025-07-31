(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [175],
  {
    71185: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/library",
        function () {
          return a(75113);
        },
      ]);
    },
    89346: function (e, s, a) {
      "use strict";
      a.d(s, {
        Ol: function () {
          return i;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return c;
        },
        aY: function () {
          return x;
        },
        ll: function () {
          return n;
        },
      });
      var l = a(85893),
        t = a(67294),
        r = a(55156);
      let c = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)(
            "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-800 dark:text-slate-50",
            a
          ),
          ...t,
        });
      });
      c.displayName = "Card";
      let i = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("flex flex-col space-y-1.5 p-6", a),
          ...t,
        });
      });
      i.displayName = "CardHeader";
      let n = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            a
          ),
          ...t,
        });
      });
      n.displayName = "CardTitle";
      let d = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("text-sm text-slate-500 dark:text-slate-400", a),
          ...t,
        });
      });
      d.displayName = "CardDescription";
      let x = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("p-6 pt-0", a),
          ...t,
        });
      });
      (x.displayName = "CardContent"),
        (t.forwardRef((e, s) => {
          let { className: a, ...t } = e;
          return (0, l.jsx)("div", {
            ref: s,
            className: (0, r.cn)("flex items-center p-6 pt-0", a),
            ...t,
          });
        }).displayName = "CardFooter");
    },
    75113: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return m;
          },
        });
      var l = a(85893),
        t = a(7868),
        r = a(67294),
        c = a(73886),
        i = a(19453);
      a(209);
      var n = a(98778),
        d = a(70337),
        x = a(94803),
        o = a.n(x),
        h = a(89346);
      function u(e) {
        let [s, a] = (0, r.useState)(!1),
          [t, c] = (0, r.useState)(0);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
              children: e.data.map((e, s) =>
                (0, l.jsx)(
                  "div",
                  {
                    children: (0, l.jsx)(h.Zb, {
                      children: (0, l.jsxs)(h.aY, {
                        className: " p-2 space-y-3",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "relative group overflow-hidden rounded-lg cursor-pointer",
                            onClick: () => {
                              3 == e.faceswap_status && (c(s), a(!0));
                            },
                            children: [
                              3 == e.faceswap_status
                                ? (0, l.jsx)("img", {
                                    src: e.url,
                                    alt: "Image ".concat(s + 1),
                                    width: 600,
                                    height: 600,
                                    className:
                                      "object-cover w-full h-60 transition-all group-hover:scale-105 rounded-xl",
                                    style: {
                                      aspectRatio: "600/600",
                                      objectFit: "cover",
                                    },
                                  })
                                : (0, l.jsxs)("div", {
                                    className:
                                      "relative bg-slate-900 rounded-xl",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "",
                                        alt: "Image ".concat(s + 1),
                                        width: 600,
                                        height: 600,
                                        className:
                                          "object-cover w-full h-60 transition-all group-hover:scale-105 rounded-xl opacity-0",
                                        style: {
                                          aspectRatio: "600/600",
                                          objectFit: "cover",
                                        },
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center",
                                        children: (0, l.jsxs)("div", {
                                          className: "text-center",
                                          children: [
                                            (0, l.jsx)("h1", {
                                              children: "Ai Processing",
                                            }),
                                            (0, l.jsx)("p", {
                                              children:
                                                "Please wait at the moment",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              (0, l.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                children: (0, l.jsx)(d.UdD, {
                                  className: "w-8 h-8 text-white",
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex justify-between gap-4",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("h1", {
                                    className: "text-white text-sm",
                                    children: e._id.substring(0, 8),
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "text-sm",
                                    children: (0, l.jsx)(o(), {
                                      format: "YYYY/MM/DD",
                                      children: e.createdAt,
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsx)("div", {
                                className: "w-[50px] h-[50px]",
                                children: (0, l.jsx)("img", {
                                  src: "/img/logo.png",
                                  width: 80,
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  s
                )
              ),
            }),
            s &&
              (0, l.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
                children: (0, l.jsxs)("div", {
                  className:
                    "relative w-full max-w-5xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "space-y-2",
                      children: [
                        (0, l.jsx)("img", {
                          src: e.data[t].url,
                          alt: "Image ".concat(t + 1),
                          className: "object-contain w-full h-auto",
                          style: {
                            aspectRatio: "1200/800",
                            objectFit: "contain",
                          },
                        }),
                        (0, l.jsx)("div", {
                          className: "text-center",
                          children: (0, l.jsx)(n.z, {
                            type: "button",
                            className: "rounded-full w-[200px]",
                            onClick: () =>
                              window.open(
                                e.data[t].url,
                                "_blank",
                                "noopener,noreferrer"
                              ),
                            children: "Download",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "absolute top-4 right-4",
                      children: (0, l.jsx)(n.z, {
                        variant: "ghost",
                        size: "sm",
                        className:
                          "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                        onClick: () => {
                          a(!1);
                        },
                        children: (0, l.jsx)(d.K3i, { className: "w-5 h-5" }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "absolute inset-y-1/2 flex justify-between w-full px-4",
                      children: [
                        (0, l.jsx)(n.z, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                          onClick: () => {
                            c((s) => (0 === s ? e.data.length - 1 : s - 1));
                          },
                          children: (0, l.jsx)(d.Djd, { className: "w-5 h-5" }),
                        }),
                        (0, l.jsx)(n.z, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                          onClick: () => {
                            c((s) => (s === e.data.length - 1 ? 0 : s + 1));
                          },
                          children: (0, l.jsx)(d.Khk, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      function m() {
        let [e, s, a] = (0, t.c)(
            (0, c.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [n, d] = (0, r.useState)(!1),
          [x, o] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {}, []),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className: "space-y-8",
              children: [
                (0, l.jsxs)("div", {
                  className: "md:flex justify-between space-y-3 md:space-y-0",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "max-w-xl space-y-2",
                      children: [
                        (0, l.jsx)("h1", {
                          className: "text-3xl font-bold",
                          children: "Library Face Swap",
                        }),
                        (0, l.jsx)("p", {
                          children:
                            "Gallery of results from users who AI generated.",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "self-center",
                      children: (0, l.jsxs)("div", {
                        className:
                          "md:text-right space-y-2 bg-slate-800 p-4 rounded-xl",
                        children: [
                          (0, l.jsx)("p", { children: "Total Generated :" }),
                          e.table_history_face_swap
                            ? (0, l.jsx)("h1", {
                                className: "text-4xl font-bold text-cyan-400",
                                children: e.table_history_face_swap.filter(
                                  (e) => (null == e ? void 0 : e.url)
                                ).length,
                              })
                            : (0, l.jsx)(i.O, {
                                className: "h-[100px] w-[200px] rounded-xl",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.table_history_face_swap
                  ? (0, l.jsx)("div", {
                      className: "",
                      children: (0, l.jsx)(u, {
                        data: e.table_history_face_swap
                          .filter((e) => (null == e ? void 0 : e.url))
                          .reverse(),
                      }),
                    })
                  : (0, l.jsxs)("div", {
                      className: "grid md:grid-cols-4 grid-cols-2 gap-4",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(i.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(i.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(i.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(i.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(i.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          })
        );
      }
    },
    209: function () {},
  },
  function (e) {
    e.O(0, [803, 888, 774, 179], function () {
      return e((e.s = 71185));
    }),
      (_N_E = e.O());
  },
]);
