(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [371],
  {
    11249: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/music-creation",
        function () {
          return a(28044);
        },
      ]);
    },
    91538: function (e, s, a) {
      "use strict";
      a.d(s, {
        _: function () {
          return d;
        },
      });
      var t = a(85893),
        l = a(67294),
        r = a(49102),
        i = a(12003),
        n = a(55156);
      let c = (0, i.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        d = l.forwardRef((e, s) => {
          let { className: a, ...l } = e;
          return (0, t.jsx)(r.f, {
            ref: s,
            className: (0, n.cn)(c(), a),
            ...l,
          });
        });
      d.displayName = r.f.displayName;
    },
    14568: function (e, s, a) {
      "use strict";
      a.d(s, {
        E: function () {
          return n;
        },
      });
      var t = a(85893),
        l = a(67294),
        r = a(50815),
        i = a(55156);
      let n = l.forwardRef((e, s) => {
        let { className: a, value: l, ...n } = e;
        return (0, t.jsx)(r.fC, {
          ref: s,
          className: (0, i.cn)(
            "relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
            a
          ),
          ...n,
          children: (0, t.jsx)(r.z$, {
            className:
              "h-full w-full flex-1 bg-slate-900 transition-all dark:bg-cyan-400",
            style: { transform: "translateX(-".concat(100 - (l || 0), "%)") },
          }),
        });
      });
      n.displayName = r.fC.displayName;
    },
    1128: function (e, s, a) {
      "use strict";
      a.d(s, {
        i: function () {
          return n;
        },
      });
      var t = a(85893),
        l = a(67294),
        r = a(77066),
        i = a(55156);
      let n = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsxs)(r.fC, {
          ref: s,
          className: (0, i.cn)(
            "relative flex w-full touch-none select-none items-center",
            a
          ),
          ...l,
          children: [
            (0, t.jsx)(r.fQ, {
              className:
                "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900",
              children: (0, t.jsx)(r.e6, {
                className: "absolute h-full bg-slate-900 dark:bg-cyan-500",
              }),
            }),
            (0, t.jsx)(r.bU, {
              className:
                "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            }),
          ],
        });
      });
      n.displayName = r.fC.displayName;
    },
    74118: function (e, s, a) {
      "use strict";
      a.d(s, {
        g: function () {
          return i;
        },
      });
      var t = a(85893),
        l = a(67294),
        r = a(55156);
      let i = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("textarea", {
          className: (0, r.cn)(
            "flex min-h-[80px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            a
          ),
          ref: s,
          ...l,
        });
      });
      i.displayName = "Textarea";
    },
    28044: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return q;
          },
        });
      var t = a(85893),
        l = a(98778),
        r = a(88860),
        i = a(91538),
        n = a(74118),
        c = a(87066),
        d = a(67294),
        o = a(77282),
        u = a(42171),
        x = a(15432),
        f = a(78865),
        m = a(55156);
      let h = o.fC;
      o.ZA;
      let p = o.B4,
        j = d.forwardRef((e, s) => {
          let { className: a, children: l, ...r } = e;
          return (0, t.jsxs)(o.xz, {
            ref: s,
            className: (0, m.cn)(
              "flex h-10 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300",
              a
            ),
            ...r,
            children: [
              l,
              (0, t.jsx)(o.JO, {
                asChild: !0,
                children: (0, t.jsx)(u.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      j.displayName = o.xz.displayName;
      let y = d.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(o.u_, {
          ref: s,
          className: (0, m.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, t.jsx)(x.Z, { className: "h-4 w-4" }),
        });
      });
      y.displayName = o.u_.displayName;
      let N = d.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(o.$G, {
          ref: s,
          className: (0, m.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, t.jsx)(u.Z, { className: "h-4 w-4" }),
        });
      });
      N.displayName = o.$G.displayName;
      let b = d.forwardRef((e, s) => {
        let { className: a, children: l, position: r = "popper", ...i } = e;
        return (0, t.jsx)(o.h_, {
          children: (0, t.jsxs)(o.VY, {
            ref: s,
            className: (0, m.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              "popper" === r &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: r,
            ...i,
            children: [
              (0, t.jsx)(y, {}),
              (0, t.jsx)(o.l_, {
                className: (0, m.cn)(
                  "p-1",
                  "popper" === r &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: l,
              }),
              (0, t.jsx)(N, {}),
            ],
          }),
        });
      });
      (b.displayName = o.VY.displayName),
        (d.forwardRef((e, s) => {
          let { className: a, ...l } = e;
          return (0, t.jsx)(o.__, {
            ref: s,
            className: (0, m.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
            ...l,
          });
        }).displayName = o.__.displayName);
      let g = d.forwardRef((e, s) => {
        let { className: a, children: l, ...r } = e;
        return (0, t.jsxs)(o.ck, {
          ref: s,
          className: (0, m.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
            a
          ),
          ...r,
          children: [
            (0, t.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, t.jsx)(o.wU, {
                children: (0, t.jsx)(f.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, t.jsx)(o.eT, { children: l }),
          ],
        });
      });
      (g.displayName = o.ck.displayName),
        (d.forwardRef((e, s) => {
          let { className: a, ...l } = e;
          return (0, t.jsx)(o.Z0, {
            ref: s,
            className: (0, m.cn)(
              "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",
              a
            ),
            ...l,
          });
        }).displayName = o.Z0.displayName);
      var w = a(70337),
        v = a(41664),
        k = a.n(v),
        C = a(87536),
        _ = a(7868),
        S = a(73886);
      a(8672);
      var z = a(1128),
        R = a(4109),
        T = a(84526),
        E = a(14568),
        U = a(52821);
      function q() {
        let [e, s, a] = (0, _.c)(
            (0, S.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [o, u] = (0, d.useState)(null),
          [x, f] = (0, d.useState)(!1),
          [m, y] = (0, d.useState)(0),
          {
            register: N,
            handleSubmit: v,
            control: z,
            setValue: R,
            formState: { errors: q },
          } = (0, C.cI)({
            defaultValues: { title: null, genre: null, lyrics: null },
          }),
          G = (0, C.qo)({ control: z }),
          V = () => {
            window.location.href = "#result";
          },
          Z = async (e) => {
            f(!0);
            let s = {
              method: "POST",
              url: "https://apibox.erweima.ai/api/v1/generate",
              headers: {
                Authorization: "Bearer ".concat(
                  "14d024958d84f03801360074fe022edf"
                ),
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              data: {
                customMode: !0,
                instrumental: !1,
                prompt: e.lyrics,
                style: e.genre,
                title: e.title,
                model: "V3_5",
                callBackUrl: "https://moxai.requestcatcher.com",
              },
            };
            try {
              let { data: e } = await c.Z.request(s);
              if (200 == e.code) {
                let s = { taskId: e.data.taskId };
                (0, U.ww)(s), V(), A(e.data.taskId);
              } else f(!1);
            } catch (e) {
              console.error(e), f(!1);
            }
          },
          A = async (e) => {
            try {
              let { data: s } = await c.Z.request({
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
              "SUCCESS" != s.data.status &&
                setTimeout(() => {
                  A(e);
                }, 1e4),
                "PENDING" == s.data.status
                  ? y(50)
                  : "FIRST_SUCCESS" == s.data.status
                  ? y(70)
                  : "SUCCESS" == s.data.status &&
                    (y(100),
                    setTimeout(() => {
                      u(s.data.response.sunoData), f(!1);
                    }, 1e4));
            } catch (e) {
              console.error(e), f(!1);
            }
          };
        return (0, t.jsxs)("div", {
          className: "space-y-8",
          children: [
            (0, t.jsx)("div", {
              className: "flex justify-between",
              children: (0, t.jsxs)("div", {
                className: "max-w-3xl space-y-2",
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-3xl font-bold",
                    children: "Custom Music Creation",
                  }),
                  (0, t.jsx)("p", {
                    children:
                      "Create unique music tailored to your preferences! Choose the lyrics, genre, and mood to craft a personalized masterpiece.",
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className: "md:grid grid-cols-12 bg-slate-800 rounded-xl",
              children: [
                (0, t.jsx)("div", {
                  className: "col-span-4",
                  children: (0, t.jsxs)("form", {
                    onSubmit: v((e) => {
                      Z(e);
                    }),
                    className: "p-4 space-y-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsx)(i._, {
                            htmlFor: "title",
                            className: "required",
                            children: "Title",
                          }),
                          (0, t.jsx)(r.I, {
                            disabled: o && !x,
                            id: "title",
                            placeholder: "enter title..",
                            ...N("title"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsx)(i._, {
                            htmlFor: "genre",
                            className: "required",
                            children: "Genre",
                          }),
                          (0, t.jsxs)(h, {
                            disabled: o && !x,
                            onValueChange: (e) => {
                              R("genre", e);
                            },
                            children: [
                              (0, t.jsx)(j, {
                                id: "genre",
                                children: (0, t.jsx)(p, {
                                  placeholder: "Select Genre",
                                }),
                              }),
                              (0, t.jsxs)(b, {
                                children: [
                                  (0, t.jsx)(g, {
                                    value: "Jazz",
                                    children: "Jazz",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Rock",
                                    children: "Rock",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Pop",
                                    children: "Pop",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Hip Hop",
                                    children: "Hip Hop",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Country",
                                    children: "Country",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Classical",
                                    children: "Classical",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Electronic",
                                    children: "Electronic",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Blues",
                                    children: "Blues",
                                  }),
                                  (0, t.jsx)(g, {
                                    value: "Reggae",
                                    children: "Reggae",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, t.jsx)(i._, {
                                htmlFor: "lyrics",
                                className: "required",
                                children: "Lyrics",
                              }),
                              (0, t.jsx)("div", {
                                className: "",
                                children: (0, t.jsxs)("p", {
                                  children: [
                                    G.lyrics ? G.lyrics.length : 0,
                                    " ",
                                    "/1000",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "bg-cyan-400/10 p-3 rounded-xl",
                            children: (0, t.jsx)("p", {
                              className:
                                "text-sm text-cyan-400 capitalize text-center opacity-100",
                              children:
                                "* Lyrics Min 50 character - Max 1000 character",
                            }),
                          }),
                          (0, t.jsx)(n.g, {
                            disabled: o && !x,
                            id: "lyrics",
                            maxLength: 1e3,
                            minLength: 50,
                            placeholder: "enter lyrics..",
                            className: "h-[300px]",
                            ...N("lyrics"),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: "h-[100px]" }),
                      !o &&
                        !x &&
                        (0, t.jsx)(l.z, {
                          disabled:
                            !G.title ||
                            !G.genre ||
                            !G.lyrics ||
                            G.lyrics.length < 50,
                          type: "submit",
                          className: "w-full",
                          children: "Generate Music",
                        }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "col-span-8",
                  id: "result",
                  children: (0, t.jsxs)("div", {
                    className:
                      "bg-slate-950 min-h-[50vh] md:min-h-full p-4 rounded-r-none md:rounded-r-xl ".concat(
                        !o && "flex items-center justify-center",
                        " "
                      ),
                    children: [
                      x &&
                        (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "self-center flex justify-center animate-pulse text-white/20",
                              children: (0, t.jsx)(w.$69, { size: 60 }),
                            }),
                            (0, t.jsx)("div", {
                              className: "animate-pulse delay-300",
                              children: (0, t.jsx)(E.E, { value: m }),
                            }),
                            (0, t.jsx)("h1", {
                              className: "text-3xl font-bold text-center",
                              children: "Ai Proccessing",
                            }),
                            (0, t.jsxs)("p", {
                              className: "text-center max-w-xl mx-auto",
                              children: [
                                "AI is working, please wait delivering results in fast as 1 - 4 minutes, or you can see the music generated results on the history tab or on the",
                                (0, t.jsxs)(k(), {
                                  href: "/library/music-creation",
                                  className: "text-cyan-400",
                                  children: [
                                    " ",
                                    "library's custom music creation page.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      o && !x
                        ? (0, t.jsxs)("div", {
                            className: "space-y-5 p-5",
                            children: [
                              (0, t.jsx)(I, { tracks: o }),
                              (0, t.jsxs)("div", {
                                className: "max-w-sm  mx-auto space-y-4",
                                children: [
                                  (0, t.jsx)("h1", {
                                    className:
                                      "text-cyan-400 font-mono uppercase",
                                    children: "Song Lyrics :",
                                  }),
                                  (0, t.jsx)(T.U, { children: o[0].prompt }),
                                  (0, t.jsx)(l.z, {
                                    type: "button",
                                    className: "w-full",
                                    onClick: () => location.reload(),
                                    children: "Reset Generate",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : !o &&
                          !x &&
                          (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "self-center flex justify-center text-white/20",
                                children: (0, t.jsx)(w.qpF, { size: 60 }),
                              }),
                              (0, t.jsx)("p", {
                                className: "text-center max-w-xl mx-auto",
                                children:
                                  "Utilizes a streaming response system, delivering results in fast as 1 - 4 minutes. Stable and watermark-free.",
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let G = (e) => {
          let s = Math.floor(e % 60)
            .toString()
            .padStart(2, "0");
          return "".concat(Math.floor(e / 60), ":").concat(s);
        },
        I = (e) => {
          let { tracks: s } = e,
            [a, r] = (0, d.useState)(null),
            [i, n] = (0, d.useState)([]),
            c = (0, d.useRef)([]),
            [o, u] = (0, d.useState)([]),
            x = (e) => {
              if (c.current[e]) {
                let s =
                  (c.current[e].currentTime / c.current[e].duration) * 100 || 0;
                n((a) => {
                  let t = [...a];
                  return (t[e] = s), t;
                });
              }
            },
            f = (e) => {
              if (c.current[e]) {
                let s = c.current[e].duration;
                u((a) => {
                  let t = [...a];
                  return (t[e] = s), t;
                });
              }
            },
            m = (e) => {
              null !== a &&
                a !== e &&
                (c.current[a].pause(), (c.current[a].currentTime = 0)),
                r(e),
                c.current[e].play();
            },
            h = (e) => {
              c.current[e].pause(), r(null);
            },
            p = (e, s) => {
              if (c.current[e]) {
                let a = c.current[e].duration;
                c.current[e].currentTime = (s / 100) * a;
              }
            };
          return (0, t.jsx)("div", {
            className: "space-y-4",
            children: s.map((e, s) =>
              (0, t.jsxs)(
                "div",
                {
                  className: "bg-slate-800 p-4 rounded-2xl space-y-4",
                  children: [
                    (0, t.jsx)("audio", {
                      ref: (e) => (c.current[s] = e),
                      src: e.audioUrl,
                      onTimeUpdate: () => x(s),
                      onLoadedMetadata: () => f(s),
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex flex-col md:flex-row gap-4",
                          children: [
                            (0, t.jsx)("img", {
                              src: e.imageUrl,
                              className:
                                "border border-slate-700 rounded-2xl w-[80px]",
                              alt: "",
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex gap-1",
                                  children: [
                                    (0, t.jsxs)(R.C, {
                                      className: "rounded p-1 text-xs",
                                      children: ["V", s + 1],
                                    }),
                                    (0, t.jsx)("h1", {
                                      className: "capitalize font-semibold",
                                      children: e.title,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", { children: "Genre :" }),
                                (0, t.jsx)("h1", {
                                  className:
                                    "text-cyan-400 font-mono uppercase text-xs",
                                  children: e.tags,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "self-start md:self-center",
                          children: (0, t.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, t.jsx)(l.z, {
                                type: "button",
                                size: "icon",
                                onClick: () => (a === s ? h(s) : m(s)),
                                children:
                                  a === s
                                    ? (0, t.jsx)(w.RAg, {})
                                    : (0, t.jsx)(w.qfg, {}),
                              }),
                              (0, t.jsx)(l.z, {
                                type: "button",
                                variant: "outline",
                                onClick: () =>
                                  window.open(e.audioUrl, "_blank"),
                                children: "Download",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(z.i, {
                      value: [i[s] || 0],
                      onValueChange: (e) => p(s, e),
                      min: 0,
                      max: 100,
                      step: 1,
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex justify-between text-sm text-gray-600",
                      children: [
                        (0, t.jsx)("span", {
                          children: c.current[s]
                            ? G(c.current[s].currentTime)
                            : "0:00",
                        }),
                        (0, t.jsx)("span", {
                          children: o[s] ? G(o[s]) : "0:00",
                        }),
                      ],
                    }),
                  ],
                },
                s
              )
            ),
          });
        };
    },
  },
  function (e) {
    e.O(0, [66, 526, 554, 451, 888, 774, 179], function () {
      return e((e.s = 11249));
    }),
      (_N_E = e.O());
  },
]);
