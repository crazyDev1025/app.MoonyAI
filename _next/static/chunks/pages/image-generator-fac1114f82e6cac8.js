(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [670],
  {
    82931: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/image-generator",
        function () {
          return a(63032);
        },
      ]);
    },
    58104: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return n;
        },
      });
      var t = a(85893);
      a(67294);
      var l = a(92321),
        i = a(70337),
        c = a(7868),
        r = a(73886);
      function n() {
        let [e, s, a] = (0, c.c)(
            (0, r.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [n, d] = (0, c.T)((0, r.N)((e) => [e.valuess, e.setValuess])),
          { address: x } = (0, l.m)();
        return (0, t.jsx)(t.Fragment, {
          children:
            x &&
            (0, t.jsx)("div", {
              className: "p-2 bg-slate-800 rounded-xl h-full flex item-center",
              children: (0, t.jsxs)("div", {
                className:
                  "max-w-4xl mx-auto flex justify-between items-center gap-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "opacity-20 self-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, t.jsx)(i.A4U, { size: 40 }),
                          }),
                          (0, t.jsx)("div", {
                            className: "block md:hidden",
                            children: (0, t.jsx)(i.A4U, { size: 20 }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-sm md:text-base",
                            children: "Your Account :",
                          }),
                          (0, t.jsx)("h1", {
                            className: " text-cyan-400 text-sm md:text-base",
                            children:
                              x.substring(0, 6) +
                              "..." +
                              x.substring(x.length - 5, x.length),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "opacity-20 self-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, t.jsx)(i.$69, { size: 40 }),
                          }),
                          (0, t.jsx)("div", {
                            className: "block md:hidden",
                            children: (0, t.jsx)(i.$69, { size: 20 }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-sm md:text-base",
                            children: "Ai Credits :",
                          }),
                          (0, t.jsx)("h1", {
                            className: " text-cyan-400 text-sm md:text-base",
                            children: n.credit + e.credit,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        });
      }
    },
    14568: function (e, s, a) {
      "use strict";
      a.d(s, {
        E: function () {
          return r;
        },
      });
      var t = a(85893),
        l = a(67294),
        i = a(50815),
        c = a(55156);
      let r = l.forwardRef((e, s) => {
        let { className: a, value: l, ...r } = e;
        return (0, t.jsx)(i.fC, {
          ref: s,
          className: (0, c.cn)(
            "relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
            a
          ),
          ...r,
          children: (0, t.jsx)(i.z$, {
            className:
              "h-full w-full flex-1 bg-slate-900 transition-all dark:bg-cyan-400",
            style: { transform: "translateX(-".concat(100 - (l || 0), "%)") },
          }),
        });
      });
      r.displayName = i.fC.displayName;
    },
    74118: function (e, s, a) {
      "use strict";
      a.d(s, {
        g: function () {
          return c;
        },
      });
      var t = a(85893),
        l = a(67294),
        i = a(55156);
      let c = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("textarea", {
          className: (0, i.cn)(
            "flex min-h-[80px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            a
          ),
          ref: s,
          ...l,
        });
      });
      c.displayName = "Textarea";
    },
    63032: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return N;
          },
        });
      var t = a(85893),
        l = a(58104),
        i = a(87066),
        c = a(67294),
        r = a(87536),
        n = a(74118),
        d = a(98778),
        x = a(70337),
        o = a(14568),
        m = a(41664),
        u = a.n(m),
        h = a(52821);
      function p() {
        let {
            register: e,
            handleSubmit: s,
            watch: a,
            control: l,
            formState: { errors: m },
          } = (0, r.cI)(),
          [p, j] = (0, c.useState)(!1),
          [f, g] = (0, c.useState)(0),
          N = (0, r.qo)({ control: l }),
          v = async (e) => {
            C(!0);
            try {
              await i.Z.post("/api/images", e).then((e) => {
                y(e.data.data), b(e.data.data.id);
                let s = { id: e.data.data.id, prompt: e.data.data.prompt };
                (0, h.Qu)(s);
              });
            } catch (e) {
              y(null), C(!1), console.log(e);
            }
          },
          b = async (e) => {
            try {
              await i.Z.get("/api/images?id=".concat(e)).then((s) => {
                "completed" != s.data.data.status &&
                  setTimeout(() => {
                    b(e);
                  }, 5e3),
                  "peding" == s.data.data.status
                    ? E(20)
                    : "in-progress" == s.data.data.status
                    ? E(50)
                    : "completed" == s.data.data.status
                    ? (E(100),
                      setTimeout(() => {
                        C(!1), _(s.data.data);
                      }, 5e3))
                    : "failed" == s.data.data.status &&
                      (alert("your prompt is failed"), y(null), C(!1));
              });
            } catch (e) {
              y(null), C(!1), console.error(e);
            }
          },
          [w, y] = (0, c.useState)(null),
          [k, _] = (0, c.useState)(null),
          [z, C] = (0, c.useState)(!1),
          [A, E] = (0, c.useState)(0);
        return (0, t.jsxs)("div", {
          className: "bg-slate-800 rounded-xl",
          children: [
            !w &&
              !z &&
              !k &&
              (0, t.jsxs)("form", {
                onSubmit: s((e) => {
                  v(e);
                }),
                className: "p-4 space-y-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "bg-cyan-400/10 p-3 rounded-xl",
                        children: (0, t.jsx)("p", {
                          className:
                            "text-sm text-cyan-400 capitalize text-center opacity-100",
                          children: "* Prompt Min 20 character",
                        }),
                      }),
                      (0, t.jsx)(n.g, {
                        id: "prompt",
                        minLength: 10,
                        required: !0,
                        placeholder: "Enter prompt..",
                        className: "h-[300px]",
                        ...e("prompt"),
                      }),
                    ],
                  }),
                  !w &&
                    !z &&
                    !k &&
                    (0, t.jsx)("div", {
                      className: "space-y-2",
                      children: (0, t.jsx)(d.z, {
                        disabled: !N || !N.prompt || !(N.prompt.length > 10),
                        type: "submit",
                        children: "Generate Images",
                      }),
                    }),
                ],
              }),
            z &&
              (0, t.jsx)("div", {
                className:
                  "bg-slate-950 p-4 min-h-[50vh] flex justify-center items-center rounded-xl",
                children: (0, t.jsxs)("div", {
                  className: "max-w-3xl space-y-2",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "self-center flex justify-center animate-pulse text-white/20",
                      children: (0, t.jsx)(x.$69, { size: 60 }),
                    }),
                    (0, t.jsx)("div", {
                      className: "animate-pulse delay-300",
                      children: (0, t.jsx)(o.E, { value: A }),
                    }),
                    (0, t.jsx)("h1", {
                      className: "text-3xl font-bold text-center",
                      children: "Ai Proccessing",
                    }),
                    (0, t.jsxs)("p", {
                      className: "text-center max-w-xl mx-auto",
                      children: [
                        "AI is working, please wait delivering results in fast as 1 - 3 minutes, or you can see the images generated results on the history tab or on the",
                        (0, t.jsxs)(u(), {
                          href: "/library/images-generator",
                          className: "text-cyan-400",
                          children: [" ", "library's images generator page."],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            k &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: " p-4",
                    children: (0, t.jsx)("div", {
                      className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                      children: k.upscaled_urls.map((e, s) =>
                        (0, t.jsx)(
                          "div",
                          {
                            onClick: () => {
                              g(s), j(!0);
                            },
                            children: (0, t.jsx)("img", {
                              src: "".concat(e, "?w=200&h=200&format=webp"),
                              alt: "Image ".concat(s + 1),
                              width: 600,
                              height: 600,
                              className:
                                "object-cover w-full h-60 transition-all group-hover:scale-105 rounded-xl",
                              style: {
                                aspectRatio: "600/600",
                                objectFit: "cover",
                              },
                            }),
                          },
                          s
                        )
                      ),
                    }),
                  }),
                  p &&
                    (0, t.jsx)("div", {
                      className:
                        "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
                      children: (0, t.jsxs)("div", {
                        className:
                          "relative w-full max-w-5xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, t.jsx)("img", {
                                src: "".concat(
                                  k.upscaled_urls[f],
                                  "?w=800&h=800&format=webp"
                                ),
                                alt: "Image ".concat(f + 1),
                                className: "object-contain w-full h-auto",
                                style: {
                                  aspectRatio: "1200/800",
                                  objectFit: "contain",
                                },
                              }),
                              (0, t.jsx)("div", {
                                className: "text-center",
                                children: (0, t.jsx)("a", {
                                  href: k.upscaled_urls[f],
                                  target: "_blank",
                                  children: (0, t.jsx)(d.z, {
                                    type: "button",
                                    className: "rounded-full w-[200px]",
                                    children: "Download",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "absolute top-4 right-4",
                            children: (0, t.jsx)(d.z, {
                              variant: "ghost",
                              size: "sm",
                              className:
                                "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                              onClick: () => {
                                j(!1);
                              },
                              children: (0, t.jsx)(x.K3i, {
                                className: "w-5 h-5",
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "absolute inset-y-1/2 flex justify-between w-full px-4",
                            children: [
                              (0, t.jsx)(d.z, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                                onClick: () => {
                                  k &&
                                    g((e) =>
                                      0 === e
                                        ? k.upscaled_urls.length - 1
                                        : e - 1
                                    );
                                },
                                children: (0, t.jsx)(x.Djd, {
                                  className: "w-5 h-5",
                                }),
                              }),
                              (0, t.jsx)(d.z, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "bg-slate-900/50 hover:bg-slate-900/75 text-white",
                                onClick: () => {
                                  k &&
                                    g((e) =>
                                      e === k.upscaled_urls.length - 1
                                        ? 0
                                        : e + 1
                                    );
                                },
                                children: (0, t.jsx)(x.Khk, {
                                  className: "w-5 h-5",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, t.jsx)("div", {
                    className: "px-4 pb-4",
                    children: (0, t.jsx)(d.z, {
                      type: "button",
                      className: "w-full",
                      onClick: () => location.reload(),
                      children: "Reset Generate",
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var j = a(7868),
        f = a(92321),
        g = a(73886);
      function N() {
        let { address: e } = (0, f.m)(),
          [s, a] = (0, j.T)((0, g.N)((e) => [e.valuess, e.setValuess])),
          [i, c, r] = (0, j.c)(
            (0, g.N)((e) => [e.values, e.setValues, e.resetValues])
          );
        return (0, t.jsxs)("div", {
          className: "space-y-8",
          children: [
            (0, t.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, t.jsxs)("div", {
                  className: "max-w-3xl space-y-2",
                  children: [
                    (0, t.jsx)("h1", {
                      className: "text-3xl font-bold",
                      children: "Image Generator",
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "Bring your imagination to life with AI-powered image generation, creating stunning visuals from text descriptions.",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "hidden md:block",
                  children: e
                    ? (0, t.jsx)(l.Z, {})
                    : (0, t.jsx)("div", {
                        className: "p-4 bg-slate-800 rounded-xl w-[200px]",
                        children: (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-sm",
                              children: "Ai Credits :",
                            }),
                            (0, t.jsx)("h1", {
                              className: "uppercase text-cyan-400",
                              children: s.credit + i.credit,
                            }),
                          ],
                        }),
                      }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "block md:hidden",
              children:
                !e &&
                (0, t.jsx)("div", {
                  className: "p-4 bg-slate-800 rounded-xl",
                  children: (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-sm",
                        children: "Ai Credits :",
                      }),
                      (0, t.jsx)("h1", {
                        className: "uppercase text-cyan-400",
                        children: s.credit + i.credit,
                      }),
                    ],
                  }),
                }),
            }),
            (0, t.jsx)("div", {
              className: "block md:hidden",
              children: (0, t.jsx)(l.Z, {}),
            }),
            (0, t.jsx)(p, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [554, 888, 774, 179], function () {
      return e((e.s = 82931));
    }),
      (_N_E = e.O());
  },
]);
