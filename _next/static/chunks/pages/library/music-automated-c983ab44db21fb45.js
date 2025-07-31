(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [518],
  {
    71813: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/library/music-automated",
        function () {
          return a(25954);
        },
      ]);
    },
    1128: function (e, s, a) {
      "use strict";
      a.d(s, {
        i: function () {
          return c;
        },
      });
      var l = a(85893),
        r = a(67294),
        t = a(77066),
        n = a(55156);
      let c = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsxs)(t.fC, {
          ref: s,
          className: (0, n.cn)(
            "relative flex w-full touch-none select-none items-center",
            a
          ),
          ...r,
          children: [
            (0, l.jsx)(t.fQ, {
              className:
                "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900",
              children: (0, l.jsx)(t.e6, {
                className: "absolute h-full bg-slate-900 dark:bg-cyan-500",
              }),
            }),
            (0, l.jsx)(t.bU, {
              className:
                "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            }),
          ],
        });
      });
      c.displayName = t.fC.displayName;
    },
    25954: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return N;
          },
        });
      var l = a(85893),
        r = a(7868),
        t = a(67294),
        n = a(73886),
        c = a(19453),
        d = a(52821);
      a(209);
      var i = a(87066),
        u = a(98778),
        o = a(70337),
        x = a(94803),
        m = a.n(x),
        f = a(4109),
        h = a(1128);
      let p = (e) => {
        let s = Math.floor(e % 60)
          .toString()
          .padStart(2, "0");
        return "".concat(Math.floor(e / 60), ":").concat(s);
      };
      function j(e) {
        let [s, a] = (0, t.useState)(null),
          [r, n] = (0, t.useState)([]),
          c = (0, t.useRef)([]),
          [d, i] = (0, t.useState)([]),
          x = (e) => {
            if (c.current[e]) {
              let s =
                (c.current[e].currentTime / c.current[e].duration) * 100 || 0;
              n((a) => {
                let l = [...a];
                return (l[e] = s), l;
              });
            }
          },
          j = (e) => {
            if (c.current[e]) {
              let s = c.current[e].duration;
              i((a) => {
                let l = [...a];
                return (l[e] = s), l;
              });
            }
          },
          N = (e) => {
            null !== s &&
              s !== e &&
              (c.current[s].pause(), (c.current[s].currentTime = 0)),
              a(e),
              c.current[e].play();
          },
          g = (e) => {
            c.current[e].pause(), a(null);
          },
          v = (e, s) => {
            if (c.current[e]) {
              let a = c.current[e].duration;
              c.current[e].currentTime = (s / 100) * a;
            }
          };
        return (0, l.jsx)(l.Fragment, {
          children:
            e.dataMusic &&
            (0, l.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4",
              children: e.dataMusic.map((a, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "bg-slate-800 p-4 rounded-2xl space-y-4",
                    children: [
                      (0, l.jsx)("audio", {
                        ref: (e) => (c.current[t] = e),
                        src: a.audioUrl,
                        onTimeUpdate: () => x(t),
                        onLoadedMetadata: () => j(t),
                      }),
                      (0, l.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, l.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, l.jsx)("img", {
                              src: a.imageUrl,
                              className: "rounded-xl md:w-[50%] w-full",
                              alt: "",
                            }),
                          }),
                          "[Instrumental]" == a.prompt &&
                            (0, l.jsx)("div", {
                              className:
                                "absolute md:bottom-3 bottom-2 left-0 right-0",
                              children: (0, l.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, l.jsx)(f.C, {
                                  className:
                                    "uppercase dark:bg-cyan-400 dark:text-black dark:border-transparent",
                                  children: "Instrumental",
                                }),
                              }),
                            }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                          (0, l.jsx)("div", {
                            className: "self-center text-cyan-400",
                            children: (0, l.jsx)(o.oP$, { size: 30 }),
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("h1", {
                                className:
                                  "text-white text-sm font-mono uppercase",
                                children: e.data[
                                  e.data.findIndex((e) =>
                                    e.response.sunoData.some((e) => e == a)
                                  )
                                ].taskId.substring(0, 10),
                              }),
                              (0, l.jsx)("p", {
                                className: "text-sm",
                                children: (0, l.jsx)(m(), {
                                  format: "YYYY/MM/DD",
                                  children: a.createTime,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, l.jsxs)(f.C, {
                            className: "rounded p-1 text-xs",
                            children: ["V", t % 2 == 0 ? 1 : 2],
                          }),
                          (0, l.jsx)("h1", {
                            className: "capitalize font-semibold",
                            children: a.title,
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          (0, l.jsx)("div", {
                            className: "flex flex-col md:flex-row gap-4",
                            children: (0, l.jsxs)("div", {
                              children: [
                                (0, l.jsx)("p", { children: "Genre :" }),
                                (0, l.jsx)("h1", {
                                  className:
                                    "text-cyan-400 font-mono uppercase text-xs",
                                  children: a.tags,
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "self-start md:self-center",
                            children: (0, l.jsxs)("div", {
                              className: "flex space-x-2",
                              children: [
                                (0, l.jsx)(u.z, {
                                  type: "button",
                                  size: "icon",
                                  onClick: () => (s === t ? g(t) : N(t)),
                                  children:
                                    s === t
                                      ? (0, l.jsx)(o.RAg, {})
                                      : (0, l.jsx)(o.qfg, {}),
                                }),
                                (0, l.jsx)(u.z, {
                                  type: "button",
                                  variant: "outline",
                                  onClick: () =>
                                    window.open(a.audioUrl, "_blank"),
                                  children: "Download",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)(h.i, {
                        value: [r[t] || 0],
                        onValueChange: (e) => v(t, e),
                        min: 0,
                        max: 100,
                        step: 1,
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-between text-sm text-gray-600",
                        children: [
                          (0, l.jsx)("span", {
                            children: c.current[t]
                              ? p(c.current[t].currentTime)
                              : "0:00",
                          }),
                          (0, l.jsx)("span", {
                            children: d[t] ? p(d[t]) : "0:00",
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
        });
      }
      function N() {
        let [e, s, a] = (0, r.c)(
            (0, n.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [u, o] = (0, t.useState)(!1),
          [x, m] = (0, t.useState)(null),
          [f, h] = (0, t.useState)(null),
          [p, N] = (0, t.useState)(null),
          [g, v] = (0, t.useState)(!1),
          b = async (e) => {
            try {
              let s = await i.Z.request({
                method: "GET",
                url: "https://apibox.erweima.ai/api/v1/generate/record-info",
                params: { taskId: e },
                headers: {
                  Authorization: "Bearer ".concat(
                    "14d024958d84f03801360074fe022edf"
                  ),
                  Accept: "application/json",
                },
              });
              if ("SUCCESS" == s.data.data.status) return s.data.data;
              return null;
            } catch (s) {
              return (
                console.error("Error fetching data for task ID:", e, s), null
              );
            }
          },
          w = async () => {
            let e = (0, d.Yz)();
            if (!e) {
              console.error(
                "getTableMusicAutomated() returned null or undefined"
              );
              return;
            }
            try {
              e.then(async (e) => {
                if (e.length > 0) {
                  let s = await Promise.all(
                    e.map(async (e) => {
                      try {
                        return await b(e.taskId);
                      } catch (s) {
                        return (
                          console.error(
                            "Error fetching data for task ID:",
                            e.taskId,
                            s
                          ),
                          null
                        );
                      }
                    })
                  );
                  h(s.filter((e) => null != e));
                  let a = s
                    .filter((e) => null != e)
                    .reduce((e, s) => e.concat(s.response.sunoData), []);
                  N(a);
                }
              });
            } catch (e) {
              console.error("Error in Promise.all:", e);
            }
          };
        return (
          (0, t.useEffect)(() => {}, []),
          (0, t.useEffect)(() => {
            w();
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
                          children: "Library Music Automated",
                        }),
                        (0, l.jsx)("p", {
                          className: "max-w-md",
                          children:
                            "Library of music automated results from users who AI generated.",
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
                          p
                            ? (0, l.jsx)("h1", {
                                className: "text-4xl font-bold text-cyan-400",
                                children: p.length,
                              })
                            : (0, l.jsx)(c.O, {
                                className: "h-[100px] w-[200px] rounded-xl",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  children: (0, l.jsx)("div", {
                    className: "bg-cyan-400/20 p-5 rounded-xl text-center",
                    children: (0, l.jsxs)("h1", {
                      children: [
                        "AI generated music automated results usually take",
                        " ",
                        (0, l.jsx)("span", {
                          className: "text-cyan-400",
                          children: "fast as 1 - 4 minutes",
                        }),
                      ],
                    }),
                  }),
                }),
                f
                  ? (0, l.jsx)("div", {
                      className: "",
                      children: (0, l.jsx)(j, {
                        data: f.reverse(),
                        dataMusic: p.reverse(),
                      }),
                    })
                  : (0, l.jsxs)("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(c.O, {
                              className: "h-[150px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(c.O, {
                              className: "h-[150px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(c.O, {
                              className: "h-[150px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-[100px] rounded-xl",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)(c.O, {
                              className: "h-[150px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
                              className: "h-[20px] w-full rounded-xl",
                            }),
                            (0, l.jsx)(c.O, {
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
    e.O(0, [803, 66, 888, 774, 179], function () {
      return e((e.s = 71813));
    }),
      (_N_E = e.O());
  },
]);
