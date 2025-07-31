(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(67246);
        },
      ]);
    },
    89346: function (e, s, a) {
      "use strict";
      a.d(s, {
        Ol: function () {
          return d;
        },
        SZ: function () {
          return c;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return o;
        },
        ll: function () {
          return n;
        },
      });
      var l = a(85893),
        r = a(67294),
        t = a(55156);
      let i = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, t.cn)(
            "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-800 dark:text-slate-50",
            a
          ),
          ...r,
        });
      });
      i.displayName = "Card";
      let d = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, t.cn)("flex flex-col space-y-1.5 p-6", a),
          ...r,
        });
      });
      d.displayName = "CardHeader";
      let n = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, t.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            a
          ),
          ...r,
        });
      });
      n.displayName = "CardTitle";
      let c = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, t.cn)("text-sm text-slate-500 dark:text-slate-400", a),
          ...r,
        });
      });
      c.displayName = "CardDescription";
      let o = r.forwardRef((e, s) => {
        let { className: a, ...r } = e;
        return (0, l.jsx)("div", {
          ref: s,
          className: (0, t.cn)("p-6 pt-0", a),
          ...r,
        });
      });
      (o.displayName = "CardContent"),
        (r.forwardRef((e, s) => {
          let { className: a, ...r } = e;
          return (0, l.jsx)("div", {
            ref: s,
            className: (0, t.cn)("flex items-center p-6 pt-0", a),
            ...r,
          });
        }).displayName = "CardFooter");
    },
    67246: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return c;
          },
        });
      var l = a(85893),
        r = a(52821);
      a(67294);
      var t = a(89346),
        i = a(41664),
        d = a.n(i),
        n = a(4109);
      function c() {
        return (0, l.jsxs)("div", {
          className: "space-y-8",
          children: [
            (0, l.jsxs)("div", {
              className:
                "space-y-8 bg-gradient-to-b from-cyan-400/30 to-transparent p-4 md:p-10 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "flex justify-between",
                  children: (0, l.jsxs)("div", {
                    className: "max-w-2xl space-y-2",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Music Ai",
                      }),
                      (0, l.jsx)("p", {
                        className: "",
                        children:
                          "Music AI is a groundbreaking tool designed to empower creators with innovative solutions for composing, editing, and enhancing music.",
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-4 gap-10",
                  children:
                    r.Kl &&
                    r.Kl.filter((e) => 3 == e.category).map((e, s) =>
                      (0, l.jsx)(
                        t.Zb,
                        {
                          className:
                            "dark:bg-cyan-400/30  dark:border-transparent",
                          children: (0, l.jsxs)(d(), {
                            href:
                              1 == e.status
                                ? "/".concat(e.url)
                                : "javascript:void(0)",
                            className: "flex flex-col justify-between h-full",
                            children: [
                              (0, l.jsxs)(t.Ol, {
                                className: "space-y-2",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "/img/logo.png",
                                        className: "w-[30px] h-[30px]",
                                        alt: "",
                                      }),
                                      0 == e.status &&
                                        (0, l.jsx)("div", {
                                          children: (0, l.jsx)(n.C, {
                                            className:
                                              "py-2 dark:border-transparent",
                                            children: "Comingsoon",
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, l.jsx)(t.ll, {
                                    className: "text-xl md:text-base",
                                    children: e.title,
                                  }),
                                  (0, l.jsx)(t.SZ, { children: e.description }),
                                ],
                              }),
                              (0, l.jsx)(t.aY, {
                                children: e.img
                                  ? (0, l.jsx)("img", {
                                      src: e.img,
                                      width: "100%",
                                      className: "rounded-xl ",
                                      alt: "",
                                    })
                                  : (0, l.jsxs)("div", {
                                      className: "relative",
                                      children: [
                                        (0, l.jsxs)("video", {
                                          autoPlay: !0,
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          className: "w-full rounded-xl",
                                          children: [
                                            (0, l.jsx)("source", {
                                              src: e.video,
                                              type: "video/mp4",
                                            }),
                                            "Your browser does not support the video tag.",
                                          ],
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "absolute top-0 left-0 bottom-0 right-0 backdrop-grayscalee bg-slate-900/20 rounded-xl",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        },
                        s
                      )
                    ),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "space-y-8 bg-gradient-to-b from-purple-400/30 to-transparent p-4 md:p-10 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "flex justify-between",
                  children: (0, l.jsxs)("div", {
                    className: "max-w-2xl space-y-2",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Images Ai",
                      }),
                      (0, l.jsx)("p", {
                        className: "",
                        children:
                          "AI image generation tools are software applications that utilize artificial intelligence (AI) to create images from scratch or modify existing ones.",
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-4 gap-10",
                  children:
                    r.Kl &&
                    r.Kl.filter((e) => 1 == e.category).map((e, s) =>
                      (0, l.jsx)(
                        t.Zb,
                        {
                          className:
                            "dark:bg-purple-400/30  dark:border-transparent",
                          children: (0, l.jsxs)(d(), {
                            href:
                              1 == e.status
                                ? "/".concat(e.url)
                                : "javascript:void(0)",
                            className: "flex flex-col justify-between h-full",
                            children: [
                              (0, l.jsxs)(t.Ol, {
                                className: "space-y-2",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "/img/logo.png",
                                        className: "w-[30px] h-[30px]",
                                        alt: "",
                                      }),
                                      0 == e.status &&
                                        (0, l.jsx)("div", {
                                          children: (0, l.jsx)(n.C, {
                                            className:
                                              "py-2 dark:border-transparent dark:bg-purple-400/10 dark:text-purple-400",
                                            children: "Comingsoon",
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, l.jsx)(t.ll, {
                                    className: "text-xl md:text-base",
                                    children: e.title,
                                  }),
                                  (0, l.jsx)(t.SZ, { children: e.description }),
                                ],
                              }),
                              (0, l.jsx)(t.aY, {
                                children: e.img
                                  ? (0, l.jsx)("img", {
                                      src: e.img,
                                      width: "100%",
                                      className: "rounded-xl ",
                                      alt: "",
                                    })
                                  : (0, l.jsxs)("div", {
                                      className: "relative",
                                      children: [
                                        (0, l.jsxs)("video", {
                                          autoPlay: !0,
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          className: "w-full rounded-xl",
                                          children: [
                                            (0, l.jsx)("source", {
                                              src: e.video,
                                              type: "video/mp4",
                                            }),
                                            "Your browser does not support the video tag.",
                                          ],
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "absolute top-0 left-0 bottom-0 right-0 backdrop-grayscalee bg-slate-900/20 rounded-xl",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        },
                        s
                      )
                    ),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "space-y-8 bg-gradient-to-b from-yellow-400/30 to-transparent p-4 md:p-10 rounded-xl",
              children: [
                (0, l.jsx)("div", {
                  className: "flex justify-between",
                  children: (0, l.jsxs)("div", {
                    className: "max-w-2xl space-y-2",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Video Ai",
                      }),
                      (0, l.jsx)("p", {
                        className: "",
                        children:
                          "AI in video refers to the use of artificial intelligence technologies to enhance and automate various aspects of video creation and consumption.",
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-4 gap-10",
                  children:
                    r.Kl &&
                    r.Kl.filter((e) => 2 == e.category).map((e, s) =>
                      (0, l.jsx)(
                        t.Zb,
                        {
                          className:
                            "dark:bg-yellow-400/30  dark:border-transparent",
                          children: (0, l.jsxs)(d(), {
                            href:
                              1 == e.status
                                ? "/".concat(e.url)
                                : "javascript:void(0)",
                            className: "flex flex-col justify-between h-full",
                            children: [
                              (0, l.jsxs)(t.Ol, {
                                className: "space-y-2",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "/img/logo.png",
                                        className: "w-[30px] h-[30px]",
                                        alt: "",
                                      }),
                                      0 == e.status &&
                                        (0, l.jsx)("div", {
                                          children: (0, l.jsx)(n.C, {
                                            className:
                                              "py-2 dark:border-transparent dark:bg-yellow-400/10 dark:text-yellow-400",
                                            children: "Comingsoon",
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, l.jsx)(t.ll, {
                                    className: "text-xl md:text-base",
                                    children: e.title,
                                  }),
                                  (0, l.jsx)(t.SZ, { children: e.description }),
                                ],
                              }),
                              (0, l.jsx)(t.aY, {
                                children: e.img
                                  ? (0, l.jsx)("img", {
                                      src: e.img,
                                      width: "100%",
                                      className: "rounded-xl ",
                                      alt: "",
                                    })
                                  : (0, l.jsxs)("div", {
                                      className: "relative",
                                      children: [
                                        (0, l.jsxs)("video", {
                                          autoPlay: !0,
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          className: "w-full rounded-xl",
                                          children: [
                                            (0, l.jsx)("source", {
                                              src: e.video,
                                              type: "video/mp4",
                                            }),
                                            "Your browser does not support the video tag.",
                                          ],
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "absolute top-0 left-0 bottom-0 right-0 backdrop-grayscalee bg-slate-900/20 rounded-xl",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        },
                        s
                      )
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
