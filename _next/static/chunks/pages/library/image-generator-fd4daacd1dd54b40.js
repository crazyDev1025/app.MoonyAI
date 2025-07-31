(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [767],
  {
    12849: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/library/image-generator",
        function () {
          return a(35930);
        },
      ]);
    },
    89346: function (e, s, a) {
      "use strict";
      a.d(s, {
        Ol: function () {
          return n;
        },
        SZ: function () {
          return i;
        },
        Zb: function () {
          return c;
        },
        aY: function () {
          return o;
        },
        ll: function () {
          return d;
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
      let n = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("flex flex-col space-y-1.5 p-6", a),
          ...t,
        });
      });
      n.displayName = "CardHeader";
      let d = t.forwardRef((e, s) => {
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
      d.displayName = "CardTitle";
      let i = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("text-sm text-slate-500 dark:text-slate-400", a),
          ...t,
        });
      });
      i.displayName = "CardDescription";
      let o = t.forwardRef((e, s) => {
        let { className: a, ...t } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, r.cn)("p-6 pt-0", a),
          ...t,
        });
      });
      (o.displayName = "CardContent"),
        (t.forwardRef((e, s) => {
          let { className: a, ...t } = e;
          return (0, l.jsx)("div", {
            ref: s,
            className: (0, r.cn)("flex items-center p-6 pt-0", a),
            ...t,
          });
        }).displayName = "CardFooter");
    },
    35930: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return f;
          },
        });
      var l = a(85893),
        t = a(7868),
        r = a(67294),
        c = a(73886),
        n = a(19453),
        d = a(52821);
      a(209);
      var i = a(98778),
        o = a(70337),
        x = a(94803),
        u = a.n(x),
        m = a(89346);
      function h(e) {
        let [s, a] = (0, r.useState)(!1),
          [t, c] = (0, r.useState)(0),
          [n, d] = (0, r.useState)(0);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
              children: e.data.map((e, s) =>
                (0, l.jsx)(
                  "div",
                  {
                    children: (0, l.jsx)(m.Zb, {
                      children: (0, l.jsxs)(m.aY, {
                        className: " p-2 space-y-3",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "relative group overflow-hidden rounded-lg cursor-pointer",
                            onClick: () => {
                              "completed" == e.status && (c(s), a(!0));
                            },
                            children: [
                              "completed" == e.status
                                ? (0, l.jsx)("img", {
                                    src: "".concat(
                                      e.url,
                                      "?w=200&h=200&format=webp"
                                    ),
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
                                children: (0, l.jsx)(o.UdD, {
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
                                    children: e.id.substring(0, 8),
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "text-sm",
                                    children: (0, l.jsx)(u(), {
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
                          src: "".concat(
                            e.data[t].upscaled_urls[n],
                            "?w=800&h=800&format=webp"
                          ),
                          alt: "Image ".concat(t + 1),
                          className: "object-contain w-full h-auto",
                          style: {
                            aspectRatio: "1200/600",
                            objectFit: "contain",
                          },
                        }),
                        (0, l.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, l.jsx)("div", {
                            className: "max-w-2xl",
                            children: (0, l.jsx)("div", {
                              className: "grid grid-cols-4 gap-4",
                              children: e.data[t].upscaled_urls.map((s, a) =>
                                (0, l.jsx)(
                                  "div",
                                  {
                                    onClick: () => d(a),
                                    children: (0, l.jsx)("div", {
                                      className: "border ".concat(
                                        n == a
                                          ? "border-cyan-400"
                                          : "border-slate-700",
                                        " rounded-2xl"
                                      ),
                                      children: (0, l.jsx)("img", {
                                        src: "".concat(
                                          e.data[t].upscaled_urls[a],
                                          "?w=800&h=800&format=webp"
                                        ),
                                        alt: "Image ".concat(t + 1),
                                        className:
                                          "object-contain w-full h-auto rounded-2xl",
                                      }),
                                    }),
                                  },
                                  a
                                )
                              ),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "text-center",
                          children: (0, l.jsx)(i.z, {
                            type: "button",
                            className: "rounded-full w-[200px]",
                            onClick: () =>
                              window.open(
                                e.data[t].upscaled_urls[n],
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
                      children: (0, l.jsx)(i.z, {
                        variant: "ghost",
                        size: "sm",
                        className:
                          "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                        onClick: () => {
                          a(!1), d(0);
                        },
                        children: (0, l.jsx)(o.K3i, { className: "w-5 h-5" }),
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var p = a(87066);
      function f() {
        let [e, s, a] = (0, t.c)(
            (0, c.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [i, o] = (0, r.useState)(!1),
          [x, u] = (0, r.useState)(null),
          [m, f] = (0, r.useState)(null),
          [j, N] = (0, r.useState)(null),
          [g, w] = (0, r.useState)(!1),
          v = async (e) => {
            try {
              let s = await p.Z.get("/api/images?id=".concat(e));
              if ("completed" == s.data.data.status) return s.data.data;
              return null;
            } catch (s) {
              return (
                console.error("Error fetching data for task ID:", e, s), null
              );
            }
          },
          y = async () => {
            let e = (0, d.yx)();
            if (!e) {
              console.error("geta() returned null or undefined");
              return;
            }
            try {
              e.then(async (e) => {
                if (e.length > 0) {
                  let s = await Promise.all(
                    e.map(async (e) => {
                      try {
                        return await v(e.id);
                      } catch (s) {
                        console.error(
                          "Error fetching data for task ID:",
                          e.id,
                          s
                        );
                      }
                    })
                  );
                  N(s);
                }
              });
            } catch (e) {
              console.error("Error in Promise.all:", e);
            }
          };
        return (
          (0, r.useEffect)(() => {
            y();
          }, []),
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
                          children: "Image Generator",
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
                          j
                            ? (0, l.jsx)("h1", {
                                className: "text-4xl font-bold text-cyan-400",
                                children: j.length,
                              })
                            : (0, l.jsx)(n.O, {
                                className: "h-[100px] w-[200px] rounded-xl",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                j
                  ? (0, l.jsx)("div", {
                      className: "",
                      children: (0, l.jsx)(h, { data: j.reverse() }),
                    })
                  : (0, l.jsxs)("div", {
                      className: "grid md:grid-cols-4 grid-cols-2 gap-4",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(n.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(n.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(n.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(n.O, {
                              className: "h-[200px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(n.O, {
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
      return e((e.s = 12849));
    }),
      (_N_E = e.O());
  },
]);
