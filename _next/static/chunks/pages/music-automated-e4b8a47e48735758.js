(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [810],
  {
    70946: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/music-automated",
        function () {
          return s(73232);
        },
      ]);
    },
    91538: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return o;
        },
      });
      var a = s(85893),
        r = s(67294),
        n = s(49102),
        l = s(12003),
        i = s(55156);
      let c = (0, l.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        o = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(n.f, {
            ref: t,
            className: (0, i.cn)(c(), s),
            ...r,
          });
        });
      o.displayName = n.f.displayName;
    },
    14568: function (e, t, s) {
      "use strict";
      s.d(t, {
        E: function () {
          return i;
        },
      });
      var a = s(85893),
        r = s(67294),
        n = s(50815),
        l = s(55156);
      let i = r.forwardRef((e, t) => {
        let { className: s, value: r, ...i } = e;
        return (0, a.jsx)(n.fC, {
          ref: t,
          className: (0, l.cn)(
            "relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
            s
          ),
          ...i,
          children: (0, a.jsx)(n.z$, {
            className:
              "h-full w-full flex-1 bg-slate-900 transition-all dark:bg-cyan-400",
            style: { transform: "translateX(-".concat(100 - (r || 0), "%)") },
          }),
        });
      });
      i.displayName = n.fC.displayName;
    },
    1128: function (e, t, s) {
      "use strict";
      s.d(t, {
        i: function () {
          return i;
        },
      });
      var a = s(85893),
        r = s(67294),
        n = s(77066),
        l = s(55156);
      let i = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsxs)(n.fC, {
          ref: t,
          className: (0, l.cn)(
            "relative flex w-full touch-none select-none items-center",
            s
          ),
          ...r,
          children: [
            (0, a.jsx)(n.fQ, {
              className:
                "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900",
              children: (0, a.jsx)(n.e6, {
                className: "absolute h-full bg-slate-900 dark:bg-cyan-500",
              }),
            }),
            (0, a.jsx)(n.bU, {
              className:
                "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            }),
          ],
        });
      });
      i.displayName = n.fC.displayName;
    },
    74118: function (e, t, s) {
      "use strict";
      s.d(t, {
        g: function () {
          return l;
        },
      });
      var a = s(85893),
        r = s(67294),
        n = s(55156);
      let l = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)("textarea", {
          className: (0, n.cn)(
            "flex min-h-[80px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            s
          ),
          ref: t,
          ...r,
        });
      });
      l.displayName = "Textarea";
    },
    73232: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return V;
          },
        });
      var a = s(85893),
        r = s(98778),
        n = s(91538),
        l = s(74118),
        i = s(87066),
        c = s(67294),
        o = s(70337),
        d = s(41664),
        u = s.n(d),
        f = s(87536),
        m = s(7868),
        x = s(73886);
      s(8672);
      var h = s(1128),
        p = s(4109),
        b = s(84526),
        j = s(14568),
        y = s(52821);
      function g(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      var v = s(25360),
        w = s(77342),
        N = s(57898),
        k = s(7546);
      s(73935);
      var S = s(4222),
        C = [
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
          let s = c.forwardRef((e, s) => {
            let { asChild: r, ...n } = e,
              l = r ? S.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(l, { ...n, ref: s })
            );
          });
          return (s.displayName = `Primitive.${t}`), { ...e, [t]: s };
        }, {}),
        T = "Switch",
        [_, E] = (0, v.b)(T),
        [R, I] = _(T),
        z = c.forwardRef((e, t) => {
          let {
              __scopeSwitch: s,
              name: r,
              checked: n,
              defaultChecked: l,
              required: i,
              disabled: o,
              value: d = "on",
              onCheckedChange: u,
              form: f,
              ...m
            } = e,
            [x, h] = c.useState(null),
            p = (function (...e) {
              return c.useCallback(
                (function (...e) {
                  return (t) => {
                    let s = !1,
                      a = e.map((e) => {
                        let a = g(e, t);
                        return s || "function" != typeof a || (s = !0), a;
                      });
                    if (s)
                      return () => {
                        for (let t = 0; t < a.length; t++) {
                          let s = a[t];
                          "function" == typeof s ? s() : g(e[t], null);
                        }
                      };
                  };
                })(...e),
                e
              );
            })(t, (e) => h(e)),
            b = c.useRef(!1),
            j = !x || f || !!x.closest("form"),
            [y = !1, v] = (0, w.T)({ prop: n, defaultProp: l, onChange: u });
          return (0, a.jsxs)(R, {
            scope: s,
            checked: y,
            disabled: o,
            children: [
              (0, a.jsx)(C.button, {
                type: "button",
                role: "switch",
                "aria-checked": y,
                "aria-required": i,
                "data-state": M(y),
                "data-disabled": o ? "" : void 0,
                disabled: o,
                value: d,
                ...m,
                ref: p,
                onClick: (function (
                  e,
                  t,
                  { checkForDefaultPrevented: s = !0 } = {}
                ) {
                  return function (a) {
                    if ((e?.(a), !1 === s || !a.defaultPrevented))
                      return t?.(a);
                  };
                })(e.onClick, (e) => {
                  v((e) => !e),
                    j &&
                      ((b.current = e.isPropagationStopped()),
                      b.current || e.stopPropagation());
                }),
              }),
              j &&
                (0, a.jsx)(D, {
                  control: x,
                  bubbles: !b.current,
                  name: r,
                  value: d,
                  checked: y,
                  required: i,
                  disabled: o,
                  form: f,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      z.displayName = T;
      var P = "SwitchThumb",
        U = c.forwardRef((e, t) => {
          let { __scopeSwitch: s, ...r } = e,
            n = I(P, s);
          return (0, a.jsx)(C.span, {
            "data-state": M(n.checked),
            "data-disabled": n.disabled ? "" : void 0,
            ...r,
            ref: t,
          });
        });
      U.displayName = P;
      var D = (e) => {
        let { control: t, checked: s, bubbles: r = !0, ...n } = e,
          l = c.useRef(null),
          i = (0, N.D)(s),
          o = (0, k.t)(t);
        return (
          c.useEffect(() => {
            let e = l.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
            if (i !== s && t) {
              let a = new Event("click", { bubbles: r });
              t.call(e, s), e.dispatchEvent(a);
            }
          }, [i, s, r]),
          (0, a.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: s,
            ...n,
            tabIndex: -1,
            ref: l,
            style: {
              ...e.style,
              ...o,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function M(e) {
        return e ? "checked" : "unchecked";
      }
      var A = s(55156);
      let q = c.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(z, {
          className: (0, A.cn)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-cyan-400 dark:data-[state=unchecked]:bg-slate-800",
            s
          ),
          ...r,
          ref: t,
          children: (0, a.jsx)(U, {
            className: (0, A.cn)(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950"
            ),
          }),
        });
      });
      function V() {
        let [e, t, s] = (0, m.c)(
            (0, x.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [d, h] = (0, c.useState)(null),
          [p, g] = (0, c.useState)(!1),
          [v, w] = (0, c.useState)(0),
          {
            register: N,
            handleSubmit: k,
            control: S,
            setValue: C,
            formState: { errors: T },
          } = (0, f.cI)({
            defaultValues: {
              title: null,
              genre: null,
              lyrics: null,
              instrumental: !1,
            },
          }),
          _ = (0, f.qo)({ control: S }),
          E = () => {
            window.location.href = "#result";
          },
          R = async (e) => {
            g(!0);
            let t = {
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
                customMode: !1,
                instrumental: e.instrumental,
                prompt: e.lyrics,
                style: null,
                title: null,
                model: "V3_5",
                callBackUrl: "https://moxai.requestcatcher.com",
              },
            };
            try {
              let { data: e } = await i.Z.request(t);
              if (200 == e.code) {
                let t = { taskId: e.data.taskId };
                (0, y.UB)(t), E(), I(e.data.taskId);
              } else console.log(e), g(!1);
            } catch (e) {
              console.error(e), g(!1);
            }
          },
          I = async (e) => {
            try {
              let { data: t } = await i.Z.request({
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
              "SUCCESS" != t.data.status &&
                setTimeout(() => {
                  I(e);
                }, 1e4),
                "PENDING" == t.data.status
                  ? w(50)
                  : "FIRST_SUCCESS" == t.data.status
                  ? w(70)
                  : "SUCCESS" == t.data.status &&
                    (w(100),
                    setTimeout(() => {
                      h(t.data.response.sunoData), g(!1);
                    }, 1e4));
            } catch (e) {
              console.error(e), g(!1);
            }
          };
        return (0, a.jsxs)("div", {
          className: "space-y-8",
          children: [
            (0, a.jsx)("div", {
              className: "flex justify-between",
              children: (0, a.jsxs)("div", {
                className: "max-w-3xl space-y-2",
                children: [
                  (0, a.jsx)("h1", {
                    className: "text-3xl font-bold",
                    children: "Music Automated",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Share your idea, and let our AI automatically generate music based on your chosen theme and genre. You can also create instrumental-only music without vocals, tailored to your needs.",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "md:grid grid-cols-12 bg-slate-800 rounded-xl",
              children: [
                (0, a.jsx)("div", {
                  className: "col-span-4",
                  children: (0, a.jsxs)("form", {
                    onSubmit: k((e) => {
                      R(e);
                    }),
                    className: "p-4 space-y-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)(n._, {
                                htmlFor: "lyrics",
                                className: "required",
                                children: "Song Description",
                              }),
                              (0, a.jsx)("div", {
                                className: "",
                                children: (0, a.jsxs)("p", {
                                  children: [
                                    _.lyrics ? _.lyrics.length : 0,
                                    " ",
                                    "/199",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "bg-cyan-400/10 p-3 rounded-xl",
                            children: (0, a.jsx)("p", {
                              className:
                                "text-sm text-cyan-400 capitalize text-center opacity-100",
                              children:
                                "* Description Min 20 character - Max 199 character",
                            }),
                          }),
                          (0, a.jsx)(l.g, {
                            disabled: d && !p,
                            id: "lyrics",
                            maxLength: 199,
                            minLength: 10,
                            placeholder:
                              "Describe the style of music and the topic you want, AI will generate lyrics for you. ",
                            className: "h-[300px]",
                            ...N("lyrics"),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-2 bg-slate-950 p-3 rounded-xl",
                        children: (0, a.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(q, {
                                id: "instrument",
                                onCheckedChange: (e) => C("instrumental", e),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "self-center",
                              children: (0, a.jsx)(n._, {
                                htmlFor: "instrument",
                                children: "Instrumental",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", { className: "h-[100px]" }),
                      !d &&
                        !p &&
                        (0, a.jsx)(r.z, {
                          disabled: !_.lyrics || _.lyrics.length < 10,
                          type: "submit",
                          className: "w-full",
                          children: "Generate Music",
                        }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-span-8",
                  id: "result",
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-slate-950 min-h-[50vh] md:min-h-full p-4 rounded-r-none md:rounded-r-xl ".concat(
                        !d && "flex items-center justify-center",
                        " "
                      ),
                    children: [
                      p &&
                        (0, a.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "self-center flex justify-center animate-pulse text-white/20",
                              children: (0, a.jsx)(o.$69, { size: 60 }),
                            }),
                            (0, a.jsx)("div", {
                              className: "animate-pulse delay-300",
                              children: (0, a.jsx)(j.E, { value: v }),
                            }),
                            (0, a.jsx)("h1", {
                              className: "text-3xl font-bold text-center",
                              children: "Ai Proccessing",
                            }),
                            (0, a.jsxs)("p", {
                              className: "text-center max-w-xl mx-auto",
                              children: [
                                "AI is working, please wait delivering results in fast as 1 - 4 minutes, or you can see the music generated results on the history tab or on the",
                                (0, a.jsxs)(u(), {
                                  href: "/library/music-automated",
                                  className: "text-cyan-400",
                                  children: [
                                    " ",
                                    "library's music automated page.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      d && !p
                        ? (0, a.jsxs)("div", {
                            className: "space-y-5 p-5",
                            children: [
                              (0, a.jsx)(L, { tracks: d }),
                              (0, a.jsxs)("div", {
                                className: "max-w-sm  mx-auto space-y-4",
                                children: [
                                  "[Instrumental]" != d[0].prompt
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("h1", {
                                            className:
                                              "text-cyan-400 font-mono uppercase",
                                            children: "Song Lyrics :",
                                          }),
                                          (0, a.jsx)(b.U, {
                                            children: d[0].prompt,
                                          }),
                                        ],
                                      })
                                    : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)("p", {
                                          className: "text-center",
                                          children:
                                            "This song has no lyrics, only the instrumental",
                                        }),
                                      }),
                                  (0, a.jsx)(r.z, {
                                    type: "button",
                                    className: "w-full",
                                    onClick: () => location.reload(),
                                    children: "Reset Generate",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : !d &&
                          !p &&
                          (0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "self-center flex justify-center text-white/20",
                                children: (0, a.jsx)(o.qpF, { size: 60 }),
                              }),
                              (0, a.jsx)("p", {
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
      q.displayName = z.displayName;
      let F = (e) => {
          let t = Math.floor(e % 60)
            .toString()
            .padStart(2, "0");
          return "".concat(Math.floor(e / 60), ":").concat(t);
        },
        L = (e) => {
          let { tracks: t } = e,
            [s, n] = (0, c.useState)(null),
            [l, i] = (0, c.useState)([]),
            d = (0, c.useRef)([]),
            [u, f] = (0, c.useState)([]),
            m = (e) => {
              if (d.current[e]) {
                let t =
                  (d.current[e].currentTime / d.current[e].duration) * 100 || 0;
                i((s) => {
                  let a = [...s];
                  return (a[e] = t), a;
                });
              }
            },
            x = (e) => {
              if (d.current[e]) {
                let t = d.current[e].duration;
                f((s) => {
                  let a = [...s];
                  return (a[e] = t), a;
                });
              }
            },
            b = (e) => {
              null !== s &&
                s !== e &&
                (d.current[s].pause(), (d.current[s].currentTime = 0)),
                n(e),
                d.current[e].play();
            },
            j = (e) => {
              d.current[e].pause(), n(null);
            },
            y = (e, t) => {
              if (d.current[e]) {
                let s = d.current[e].duration;
                d.current[e].currentTime = (t / 100) * s;
              }
            };
          return (0, a.jsx)("div", {
            className: "space-y-4",
            children: t.map((e, t) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "bg-slate-800 p-4 rounded-2xl space-y-4",
                  children: [
                    (0, a.jsx)("audio", {
                      ref: (e) => (d.current[t] = e),
                      src: e.audioUrl,
                      onTimeUpdate: () => m(t),
                      onLoadedMetadata: () => x(t),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col md:flex-row gap-4",
                          children: [
                            (0, a.jsx)("img", {
                              src: e.imageUrl,
                              className:
                                "border border-slate-700 rounded-2xl w-[80px]",
                              alt: "",
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex gap-1",
                                  children: [
                                    (0, a.jsxs)(p.C, {
                                      className: "rounded p-1 text-xs",
                                      children: ["V", t + 1],
                                    }),
                                    (0, a.jsx)("h1", {
                                      className: "capitalize font-semibold",
                                      children: e.title,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", { children: "Genre :" }),
                                (0, a.jsx)("h1", {
                                  className:
                                    "text-cyan-400 font-mono uppercase text-xs",
                                  children: e.tags,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "self-start md:self-center",
                          children: (0, a.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, a.jsx)(r.z, {
                                type: "button",
                                size: "icon",
                                onClick: () => (s === t ? j(t) : b(t)),
                                children:
                                  s === t
                                    ? (0, a.jsx)(o.RAg, {})
                                    : (0, a.jsx)(o.qfg, {}),
                              }),
                              (0, a.jsx)(r.z, {
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
                    (0, a.jsx)(h.i, {
                      value: [l[t] || 0],
                      onValueChange: (e) => y(t, e),
                      min: 0,
                      max: 100,
                      step: 1,
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex justify-between text-sm text-gray-600",
                      children: [
                        (0, a.jsx)("span", {
                          children: d.current[t]
                            ? F(d.current[t].currentTime)
                            : "0:00",
                        }),
                        (0, a.jsx)("span", {
                          children: u[t] ? F(u[t]) : "0:00",
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            ),
          });
        };
    },
    8672: function () {},
    49102: function (e, t, s) {
      "use strict";
      s.d(t, {
        f: function () {
          return i;
        },
      });
      var a = s(67294),
        r = s(64757),
        n = s(85893),
        l = a.forwardRef((e, t) =>
          (0, n.jsx)(r.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              t.target.closest("button, input, select, textarea") ||
                (e.onMouseDown?.(t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      l.displayName = "Label";
      var i = l;
    },
  },
  function (e) {
    e.O(0, [66, 526, 554, 888, 774, 179], function () {
      return e((e.s = 70946));
    }),
      (_N_E = e.O());
  },
]);
