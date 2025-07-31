(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [514],
  {
    83421: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/music-editing",
        function () {
          return s(69479);
        },
      ]);
    },
    61567: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(85893);
      s(67294);
      var c = s(98130);
      function l(e) {
        return (0, n.jsx)("div", {
          className: "flex flex-1 justify-center item-center",
          children: (0, n.jsx)("div", {
            className: "h-[400px]  flex justify-center items-center",
            children: (0, n.jsxs)("div", {
              className: "space-y-2",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "self-center flex justify-center animate-pulse text-white/20",
                  children: (0, n.jsx)("img", {
                    src: "/img/logo.png",
                    width: 90,
                    alt: "",
                  }),
                }),
                (0, n.jsx)("h1", {
                  className: "text-3xl font-bold text-center",
                  children: "Comingsoon",
                }),
                (0, n.jsx)("p", {
                  className: "text-center w-[300px] mx-auto",
                  children:
                    "Features is coming soon, it is under development by our team",
                }),
                (0, n.jsx)(c.ZP, { date: e.time, renderer: i }),
              ],
            }),
          }),
        });
      }
      let i = (e) => {
        let { days: t, hours: s, minutes: c, seconds: l, completed: i } = e;
        if (!i)
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "bg-slate-800 w-[100px] h-[100px] p-8 rounded-xl flex justify-center items-center",
                  children: (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: t,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-center",
                        children: "Days",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "bg-slate-800 w-[100px] h-[100px] p-8 rounded-xl flex justify-center items-center",
                  children: (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: s,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-center",
                        children: "Hours",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "bg-slate-800 w-[100px] h-[100px] p-8 rounded-xl flex justify-center items-center",
                  children: (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: c,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-center",
                        children: "Minutes",
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "bg-slate-800 w-[100px] h-[100px] p-8 rounded-xl flex justify-center items-center",
                  children: (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: l,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-center",
                        children: "Second",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
      };
    },
    69479: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var n = s(85893),
        c = s(61567);
      function l(e) {
        return (0, n.jsx)(c.Z, { time: 1738395455e3 });
      }
      s(67294);
    },
  },
  function (e) {
    e.O(0, [130, 888, 774, 179], function () {
      return e((e.s = 83421));
    }),
      (_N_E = e.O());
  },
]);
