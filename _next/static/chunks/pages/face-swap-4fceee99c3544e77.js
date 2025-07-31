(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [117],
  {
    75987: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/face-swap",
        function () {
          return a(80712);
        },
      ]);
    },
    58104: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = a(85893);
      a(67294);
      var l = a(92321),
        i = a(70337),
        c = a(7868),
        r = a(73886);
      function d() {
        let [e, s, a] = (0, c.c)(
            (0, r.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [d, n] = (0, c.T)((0, r.N)((e) => [e.valuess, e.setValuess])),
          { address: o } = (0, l.m)();
        return (0, t.jsx)(t.Fragment, {
          children:
            o &&
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
                              o.substring(0, 6) +
                              "..." +
                              o.substring(o.length - 5, o.length),
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
                            children: d.credit + e.credit,
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
    62378: function (e, s, a) {
      "use strict";
      a.d(s, {
        RM: function () {
          return d;
        },
        Rn: function () {
          return x;
        },
        SC: function () {
          return n;
        },
        iA: function () {
          return c;
        },
        pj: function () {
          return p;
        },
        ss: function () {
          return o;
        },
        xD: function () {
          return r;
        },
      });
      var t = a(85893),
        l = a(67294),
        i = a(55156);
      let c = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("div", {
          className: "relative w-full overflow-auto",
          children: (0, t.jsx)("table", {
            ref: s,
            className: (0, i.cn)("w-full caption-bottom text-sm", a),
            ...l,
          }),
        });
      });
      c.displayName = "Table";
      let r = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("thead", {
          ref: s,
          className: (0, i.cn)("[&_tr]:border-b", a),
          ...l,
        });
      });
      r.displayName = "TableHeader";
      let d = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("tbody", {
          ref: s,
          className: (0, i.cn)("[&_tr:last-child]:border-0", a),
          ...l,
        });
      });
      (d.displayName = "TableBody"),
        (l.forwardRef((e, s) => {
          let { className: a, ...l } = e;
          return (0, t.jsx)("tfoot", {
            ref: s,
            className: (0, i.cn)(
              "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",
              a
            ),
            ...l,
          });
        }).displayName = "TableFooter");
      let n = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("tr", {
          ref: s,
          className: (0, i.cn)(
            "border-b border-white/20 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
            a
          ),
          ...l,
        });
      });
      n.displayName = "TableRow";
      let o = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("th", {
          ref: s,
          className: (0, i.cn)(
            "h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400",
            a
          ),
          ...l,
        });
      });
      o.displayName = "TableHead";
      let p = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("td", {
          ref: s,
          className: (0, i.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            a
          ),
          ...l,
        });
      });
      p.displayName = "TableCell";
      let x = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)("caption", {
          ref: s,
          className: (0, i.cn)(
            "mt-4 text-sm text-slate-500 dark:text-slate-400",
            a
          ),
          ...l,
        });
      });
      x.displayName = "TableCaption";
    },
    93517: function (e, s, a) {
      "use strict";
      a.d(s, {
        SP: function () {
          return n;
        },
        dr: function () {
          return d;
        },
        mQ: function () {
          return r;
        },
        nU: function () {
          return o;
        },
      });
      var t = a(85893),
        l = a(67294),
        i = a(60434),
        c = a(55156);
      let r = i.fC,
        d = l.forwardRef((e, s) => {
          let { className: a, ...l } = e;
          return (0, t.jsx)(i.aV, {
            ref: s,
            className: (0, c.cn)(
              "inline-flex h-10 items-center justify-center rounded-full bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
              a
            ),
            ...l,
          });
        });
      d.displayName = i.aV.displayName;
      let n = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(i.xz, {
          ref: s,
          className: (0, c.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-cyan-400 dark:data-[state=active]:text-black",
            a
          ),
          ...l,
        });
      });
      n.displayName = i.xz.displayName;
      let o = l.forwardRef((e, s) => {
        let { className: a, ...l } = e;
        return (0, t.jsx)(i.VY, {
          ref: s,
          className: (0, c.cn)(
            "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            a
          ),
          ...l,
        });
      });
      o.displayName = i.VY.displayName;
    },
    80712: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return _;
          },
        });
      var t = a(85893),
        l = a(58104),
        i = a(87066),
        c = a(67294),
        r = a(93517),
        d = a(52821),
        n = a(7868),
        o = a(73886),
        p = a(44524),
        x = a(70337),
        h = a(98778),
        m = a(26731),
        u = a(92321),
        j = a(62378),
        f = a(94803),
        g = a.n(f),
        y = a(11163),
        v = a(41664),
        b = a.n(v);
      let N = [
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935342/oi4pnkc1xa7uvdxjzirj.jpg",
          opts: "641,321:802,316:730,387:725,493",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935470/fjc8nwe7sj8gyhsvzxiv.jpg",
          opts: "606,255:708,249:679,307:665,356",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935535/ronjg6jgr7yqs7vhnnmo.jpg",
          opts: "587,354:742,368:652,461:657,506",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935595/p0lnajwajamvjw3hj5du.jpg",
          opts: "504,326:653,310:629,416:598,503",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935662/u281pa9gd0ffehv1wc5f.png",
          opts: "481,502:670,521:571,603:557,683",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935720/ixiz8cu6ohkhc2pyhjkc.jpg",
          opts: "504,260:638,265:563,344:573,398",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935790/gstzk5jzg0i6ylcilkrz.webp",
          opts: "1467,911:2042,924:1616,1137:1687,1523",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935888/rieofunn4ukd2ypqqzea.jpg",
          opts: "543,362:730,340:635,469:666,574",
        },
        {
          path: "https://res.cloudinary.com/dpzd1lwz1/image/upload/v1736935956/nwkv0sdeyqy1a37tnfqr.webp",
          opts: "641,430:807,419:700,509:731,597",
        },
      ];
      function w() {
        let [e, s] = (0, n.T)((0, o.N)((e) => [e.valuess, e.setValuess])),
          [a, l, f] = (0, n.c)(
            (0, o.N)((e) => [e.values, e.setValues, e.resetValues])
          ),
          [v, w] = (0, c.useState)(null),
          [_, k] = (0, c.useState)(null),
          [z, R] = (0, c.useState)([]),
          [A, S] = (0, c.useState)([]),
          [U, C] = (0, c.useState)(null),
          [F, I] = (0, c.useState)(null),
          { toast: Y } = (0, m.pm)(),
          { address: D } = (0, u.m)(),
          [L, T] = (0, c.useState)(0),
          [q, M] = (0, c.useState)(0),
          P = (0, y.useRouter)(),
          V = async (e) => {
            let s = new FormData();
            s.append("file", e), s.append("upload_preset", "zjto2qqd");
            try {
              let e = await i.Z.post(
                "https://api.cloudinary.com/v1_1/dpzd1lwz1/image/upload",
                s
              );
              if (e.data) return e.data;
            } catch (e) {
              console.log("imageUpload" + e);
            }
          },
          E = (e) =>
            new Promise((s, a) => {
              let t = new FileReader();
              t.readAsDataURL(e),
                (t.onload = () => {
                  s(t.result);
                }),
                (t.onerror = (e) => {
                  a(e);
                });
            }),
          {
            acceptedFiles: O,
            getRootProps: B,
            fileRejections: Z,
            getInputProps: Q,
          } = (0, p.uI)({
            maxSize: 5242880,
            multiple: !1,
            accept: { "image/png": [".png", ".jpeg", ".jpg"] },
            onDropAccepted: async (e) => {
              l("loading_drop", !0);
              let s = await Promise.all(
                e.map(async (s) => {
                  let a = await E(s),
                    t = await V(e[0]);
                  if (a)
                    return {
                      ...s,
                      preview: URL.createObjectURL(s),
                      base64: a,
                      dataImage: t,
                    };
                })
              );
              s && ee(s, 1);
            },
            onDropRejected: (e) => {
              Y({
                title: "Failed",
                description: "File is too large size, max file is ".concat(
                  5,
                  "MB"
                ),
              });
            },
          }),
          {
            acceptedFiles: G,
            getRootProps: H,
            fileRejections: $,
            getInputProps: X,
          } = (0, p.uI)({
            maxSize: 5242880,
            multiple: !1,
            accept: { "image/png": [".png", ".jpeg", ".jpg"] },
            onDropAccepted: async (e) => {
              l("loading_drop", !0);
              let s = await Promise.all(
                e.map(async (s) => {
                  let a = await E(s),
                    t = await V(e[0]);
                  return {
                    ...s,
                    preview: URL.createObjectURL(s),
                    base64: a,
                    dataImage: t,
                  };
                })
              );
              s && ee(s, 2);
            },
            onDropRejected: (e) => {
              Y({
                title: "Failed",
                description: "File is too large size, max file is ".concat(
                  5,
                  "MB"
                ),
              });
            },
          }),
          J = {
            Authorization: "Bearer ".concat(a.token),
            "Content-Type": "application/json",
          },
          K = async (a, t, c) => {
            try {
              let r = {
                sourceImage: [{ path: a[0].dataImage.url, opts: a[0].opts }],
                targetImage: [
                  {
                    path: 1 == c ? t[0].dataImage.url : t.path,
                    opts: 1 == c ? t[0].opts : t.opts,
                  },
                ],
                face_enhance: 0,
                modifyImage: 1 == c ? t[0].dataImage.url : t.path,
                webhookUrl: null,
              };
              await i.Z.post(
                "https://openapi.akool.com/api/open/v3/faceswap/highquality/specifyimage",
                r,
                { headers: J }
              ).then((i) => {
                if (i.data.data) {
                  let c = {
                    address: D || null,
                    type: "faceswap",
                    data: { data_1: i.data.data, data_2: a, data_3: t },
                  };
                  D ||
                    s("table_history_face_swap", [
                      ...e.table_history_face_swap,
                      c,
                    ]),
                    s("credit", e.credit - 1),
                    (0, d._U)(c),
                    W(i.data.data._id, !0),
                    l("loading_drop", !1);
                }
              });
            } catch (e) {
              l("loading_drop", !1), console.log(e);
            }
          },
          W = async (e, s) => {
            try {
              let t = await i.Z.get(
                "https://openapi.akool.com/api/open/v3/faceswap/result/listbyids?_ids=".concat(
                  e
                ),
                { headers: J }
              );
              if (t.data.data.result.length > 0) {
                if (!0 == s) {
                  let e = t.data.data.result[0];
                  w(e);
                } else
                  a.table_history_face_swap.find((s) => s._id == e),
                    t.data.data.result[0];
              }
            } catch (e) {
              console.log(e);
            }
          },
          ee = async (e, s) => {
            try {
              let a = {
                single_face: !0,
                image_url: e[0].dataImage.url,
                img: "",
              };
              await i.Z.post("https://sg3.akool.com/detect", a, J).then((a) => {
                console.log(a.data.landmarks_str),
                  a.data.landmarks_str.length > 0
                    ? (1 == s
                        ? R(
                            e.map((e) =>
                              Object.assign({
                                ...e,
                                opts: a.data.landmarks_str,
                              })
                            )
                          )
                        : 2 == s &&
                          (S(
                            e.map((e) =>
                              Object.assign({
                                ...e,
                                opts: a.data.landmarks_str,
                              })
                            )
                          ),
                          C(null),
                          I(null)),
                      l("loading_drop", !1))
                    : (1 == s ? R([]) : 2 == s && S([]),
                      l("loading_drop", !1),
                      Y({
                        title: "Upload Failed",
                        description: "Face not detection in your image",
                      }));
              });
            } catch (e) {
              console.log(e);
            }
          };
        return (
          (0, c.useEffect)(
            () => () => z.forEach((e) => URL.revokeObjectURL(e.preview)),
            [z]
          ),
          (0, c.useEffect)(
            () => () =>
              A.forEach((e) => {
                URL.revokeObjectURL(e.preview);
              }),
            [A]
          ),
          (0, c.useEffect)(() => {
            if (a.token && v) {
              let e = setInterval(() => {
                  T((e) => e + 1),
                    M((e) => e + 1),
                    3 != v.faceswap_status
                      ? W(v._id, !0)
                      : (console.log(
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque obcaecati fuga reiciendis nulla! Eaque, hic beatae, minus possimus voluptates distinctio magnam odit deleniti quia, quos culpa est quidem nam!"
                        ),
                        clearInterval(e),
                        Y({
                          title: "Success",
                          description: "Ai success generate",
                        }));
                }, 2e3),
                s = setTimeout(() => {
                  clearInterval(e);
                }, 1e4);
              return () => {
                clearInterval(e), clearTimeout(s);
              };
            }
          }, [a.token, v, w]),
          (0, t.jsx)("div", {
            className: "",
            children: (0, t.jsxs)(r.mQ, {
              defaultValue: "swap",
              children: [
                (0, t.jsxs)(r.dr, {
                  className: "grid grid-cols-2",
                  children: [
                    (0, t.jsx)(r.SP, { value: "swap", children: "Face Swap" }),
                    (0, t.jsx)(r.SP, { value: "history", children: "History" }),
                  ],
                }),
                (0, t.jsx)(r.nU, {
                  value: "swap",
                  children: (0, t.jsxs)("div", {
                    className: "pt-4 space-y-4",
                    children: [
                      v
                        ? (0, t.jsx)("div", {
                            className: "space-y-4",
                            children:
                              3 == v.faceswap_status
                                ? (0, t.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "rounded-xl h-[400px] bg-slate-800 flex justify-center",
                                        children: (0, t.jsx)("img", {
                                          src: v.url,
                                          style: {
                                            objectFit: "contain",
                                            objectPosition: "center",
                                            height: "auto",
                                            width: "100%",
                                          },
                                          alt: "",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          "text-center grid grid-cols-2",
                                        children: [
                                          (0, t.jsx)(h.z, {
                                            type: "button",
                                            className: "rounded-full w-full",
                                            onClick: () => {
                                              window.open(
                                                v.url,
                                                "_blank",
                                                "noopener,noreferrer"
                                              );
                                            },
                                            children: "Download",
                                          }),
                                          (0, t.jsx)(h.z, {
                                            variant: "outline",
                                            type: "button",
                                            className: "rounded-full w-full",
                                            onClick: () => {
                                              R([]),
                                                S([]),
                                                C(null),
                                                I(null),
                                                w(null),
                                                T(0),
                                                M(0);
                                            },
                                            children: "Generate Again",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "rounded-xl h-[400px] bg-slate-800 flex justify-center items-center",
                                      children: (0, t.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "self-center flex justify-center animate-pulse text-white/20",
                                            children: (0, t.jsx)(x.$69, {
                                              size: 60,
                                            }),
                                          }),
                                          (0, t.jsx)("h1", {
                                            className:
                                              "text-3xl font-bold text-center",
                                            children: "Ai Proccessing",
                                          }),
                                          (0, t.jsxs)("p", {
                                            className:
                                              "text-center max-w-xl mx-auto",
                                            children: [
                                              "AI is working, please wait, or you can see the image generated results on the history tab or on the",
                                              (0, t.jsxs)(b(), {
                                                href: "/library",
                                                className: "text-cyan-400",
                                                children: [
                                                  " ",
                                                  "library's faceswap page.",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                          })
                        : (0, t.jsxs)("div", {
                            className: "md:gap-10 gap-4 space-y-4",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "bg-slate-800 p-3 rounded-t-2xl flex gap-4",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "h-[60px] w-[60px]",
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "rounded-xl bg-cyan-400 h-[60px] w-[60px] text-black flex justify-center items-center",
                                          children: (0, t.jsx)("h1", {
                                            className: "font-bold text-2xl",
                                            children: "1",
                                          }),
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "self-center",
                                        children: [
                                          (0, t.jsx)("h1", {
                                            className: "capitalize",
                                            children: "Select Images Face",
                                          }),
                                          (0, t.jsx)("p", {
                                            children:
                                              "Upload the face image you want to replace",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  z.length > 0
                                    ? z.map((e, s) =>
                                        (0, t.jsxs)(
                                          "div",
                                          {
                                            className: "relative",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "rounded-xl h-[300px] bg-slate-800 flex justify-center",
                                                children: (0, t.jsx)("img", {
                                                  src: e.preview,
                                                  style: {
                                                    objectFit: "contain",
                                                    objectPosition: "center",
                                                    height: "auto",
                                                    width: "100%",
                                                  },
                                                  onLoad: () => {
                                                    URL.revokeObjectURL(
                                                      e.preview
                                                    );
                                                  },
                                                  alt: "",
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className:
                                                  "absolute top-1 right-1",
                                                children: (0, t.jsx)("a", {
                                                  href: "javascript:void(0)",
                                                  onClick: () => R([]),
                                                  className: "text-cyan-400",
                                                  children: (0, t.jsx)(x.qGf, {
                                                    size: 30,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          },
                                          s
                                        )
                                      )
                                    : (0, t.jsx)(t.Fragment, {
                                        children: (0, t.jsx)("div", {
                                          ...B({
                                            className:
                                              "bg-slate-900 p-5 rounded-xl border border-white/20 border-dashed h-[300px] flex items-center justify-center",
                                          }),
                                          children: (0, t.jsxs)("div", {
                                            children: [
                                              (0, t.jsx)("input", { ...Q() }),
                                              (0, t.jsxs)("div", {
                                                className:
                                                  "space-y-2 text-center",
                                                children: [
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "flex justify-center",
                                                    children: (0, t.jsx)(
                                                      x.v0Q,
                                                      {
                                                        className:
                                                          "text-white/20",
                                                        size: 40,
                                                      }
                                                    ),
                                                  }),
                                                  (0, t.jsx)("p", {
                                                    className: "text-sm",
                                                    children:
                                                      "Drag drop some files here, or click to select files.",
                                                  }),
                                                  (0, t.jsx)("p", {
                                                    className:
                                                      "text-sm text-cyan-400 opacity-100",
                                                    children:
                                                      "Max File Size 5MB",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                children: (0, t.jsxs)("div", {
                                  className: "bg-slate-900 rounded-xl",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "bg-slate-800 p-3 rounded-t-2xl flex gap-4",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: "h-[60px] w-[60px]",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "rounded-xl bg-cyan-400 h-[60px] w-[60px] text-black flex justify-center items-center",
                                            children: (0, t.jsx)("h1", {
                                              className: "font-bold text-2xl",
                                              children: "2",
                                            }),
                                          }),
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "self-center",
                                          children: [
                                            (0, t.jsx)("h1", {
                                              className: "capitalize",
                                              children: "Select images replace",
                                            }),
                                            (0, t.jsx)("p", {
                                              children:
                                                "Upload image or select image on template",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "pt-3",
                                      children: (0, t.jsxs)("div", {
                                        className:
                                          "grid grid-cols-2 md:grid-cols-5 gap-4",
                                        children: [
                                          A.length > 0
                                            ? A.map((e, s) =>
                                                (0, t.jsxs)(
                                                  "div",
                                                  {
                                                    className: "relative",
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          "h-[200px] rounded-xl bg-center bg-cover border border-white/20 border-dashed",
                                                        style: {
                                                          backgroundImage:
                                                            "url(".concat(
                                                              e.preview,
                                                              ")"
                                                            ),
                                                        },
                                                        onLoad: () => {
                                                          URL.revokeObjectURL(
                                                            e.preview
                                                          );
                                                        },
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          "absolute top-1 right-1",
                                                        children: (0, t.jsx)(
                                                          "a",
                                                          {
                                                            href: "javascript:void(0)",
                                                            onClick: () => {
                                                              S([]),
                                                                C(null),
                                                                I(null);
                                                            },
                                                            className:
                                                              "text-cyan-400",
                                                            children: (0,
                                                            t.jsx)(x.qGf, {
                                                              size: 30,
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  s
                                                )
                                              )
                                            : (0, t.jsx)("div", {
                                                ...H({
                                                  className:
                                                    "bg-slate-900 p-5 rounded-xl border border-white/20 border-dashed h-[200px] flex items-center justify-center",
                                                }),
                                                children: (0, t.jsxs)("div", {
                                                  children: [
                                                    (0, t.jsx)("input", {
                                                      ...X(),
                                                    }),
                                                    (0, t.jsxs)("div", {
                                                      className:
                                                        "space-y-2 text-center",
                                                      children: [
                                                        (0, t.jsx)("div", {
                                                          className:
                                                            "flex justify-center",
                                                          children: (0, t.jsx)(
                                                            x.v0Q,
                                                            {
                                                              className:
                                                                "text-white/20",
                                                              size: 40,
                                                            }
                                                          ),
                                                        }),
                                                        (0, t.jsx)("p", {
                                                          className: "text-sm",
                                                          children:
                                                            "Drag drop some files here, or click to select files.",
                                                        }),
                                                        (0, t.jsx)("p", {
                                                          className:
                                                            "text-sm text-cyan-400 opacity-100",
                                                          children:
                                                            "Max File Size 5MB",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          N.map((e, s) =>
                                            (0, t.jsx)(
                                              "div",
                                              {
                                                className:
                                                  "h-[200px] rounded-xl bg-center bg-cover ".concat(
                                                    F == s + 1
                                                      ? "opacity-50"
                                                      : "opacity-100",
                                                    " border-white/20"
                                                  ),
                                                style: {
                                                  backgroundImage:
                                                    "url(".concat(e.path, ")"),
                                                },
                                                onClick: () => {
                                                  C(e), S([]), I(s + 1);
                                                },
                                              },
                                              s + 1
                                            )
                                          ),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      !v &&
                        (0, t.jsx)(t.Fragment, {
                          children:
                            e.credit + a.credit > 0 &&
                            (0, t.jsx)(h.z, {
                              className: "rounded-full w-full",
                              size: "lg",
                              type: "button",
                              disabled:
                                (!z.length && !A.length && !U) ||
                                ((!(z.length > 0) || !(A.length > 0) || !!U) &&
                                  (!(z.length > 0) || !!A.length || !U)),
                              onClick: () => {
                                z.length > 0 && A.length > 0
                                  ? (l("loading_drop", !0), K(z, A, 1))
                                  : z.length > 0 &&
                                    U &&
                                    (l("loading_drop", !0), K(z, U, 2));
                              },
                              children: "Generate",
                            }),
                        }),
                    ],
                  }),
                }),
                (0, t.jsxs)(r.nU, {
                  value: "history",
                  children: [
                    (0, t.jsx)("div", {
                      className: "pt-4",
                      children: (0, t.jsxs)("div", {
                        className: "bg-slate-900 rounded-xl py-3",
                        children: [
                          (0, t.jsx)("div", {
                            className: "md:block hidden",
                            children: (0, t.jsxs)(j.iA, {
                              children: [
                                (0, t.jsx)(j.Rn, {
                                  children: "A list of your Ai history.",
                                }),
                                (0, t.jsx)(j.xD, {
                                  children: (0, t.jsxs)(j.SC, {
                                    children: [
                                      (0, t.jsx)(j.ss, {
                                        className: "w-[300px]",
                                        children: "Date",
                                      }),
                                      (0, t.jsx)(j.ss, {
                                        className: "w-[200px]",
                                        children: "Type",
                                      }),
                                      (0, t.jsx)(j.ss, {
                                        className: "text-right",
                                        children: "Actions",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsxs)(j.RM, {
                                  children: [
                                    e.table_history_face_swap.length > 0 &&
                                      e.table_history_face_swap
                                        .filter((e) => "faceswap" == e.type)
                                        .map((e, s) =>
                                          (0, t.jsxs)(
                                            j.SC,
                                            {
                                              children: [
                                                (0, t.jsx)(j.pj, {
                                                  className:
                                                    "font-medium opacity-50",
                                                  children: (0, t.jsx)(g(), {
                                                    format: "YYYY/MM/DD",
                                                    children: e.createdAt,
                                                  }),
                                                }),
                                                (0, t.jsx)(j.pj, {
                                                  className: "capitalize",
                                                  children: e.type,
                                                }),
                                                (0, t.jsx)(j.pj, {
                                                  className: "text-right",
                                                  children: (0, t.jsx)(h.z, {
                                                    type: "button",
                                                    className:
                                                      "rounded-full w-[150px]",
                                                    onClick: () =>
                                                      P.push("/library"),
                                                    children: "Library",
                                                  }),
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        ),
                                    a.table &&
                                      a.table_history_face_swap &&
                                      D &&
                                      a.table
                                        .filter(
                                          (e) =>
                                            e.address == D &&
                                            "faceswap" == e.type
                                        )
                                        .map((e, s) =>
                                          (0, t.jsxs)(
                                            j.SC,
                                            {
                                              children: [
                                                (0, t.jsx)(j.pj, {
                                                  className:
                                                    "font-medium opacity-50",
                                                  children: (0, t.jsx)(g(), {
                                                    format: "YYYY/MM/DD",
                                                    children: e.created_at,
                                                  }),
                                                }),
                                                (0, t.jsx)(j.pj, {
                                                  className: "capitalize",
                                                  children: e.type,
                                                }),
                                                (0, t.jsx)(j.pj, {
                                                  className: "text-right",
                                                  children: (0, t.jsx)(h.z, {
                                                    type: "button",
                                                    className:
                                                      "rounded-full w-[150px]",
                                                    onClick: () =>
                                                      P.push("/library"),
                                                    children: "Library",
                                                  }),
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsxs)("ul", {
                            className:
                              "md:hidden block divide-y divide-white/20 space-y-8",
                            children: [
                              e.table_history_face_swap.length > 0 &&
                                e.table_history_face_swap
                                  .filter((e) => "faceswap" == e.type)
                                  .map((e, s) =>
                                    (0, t.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "space-y-2 flex justify-between pt-8",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "capitalize",
                                                children: e.type,
                                              }),
                                              (0, t.jsx)("div", {
                                                children: (0, t.jsx)("div", {
                                                  className: "flex gap-4",
                                                  children: (0, t.jsx)(h.z, {
                                                    type: "button",
                                                    size: "sm",
                                                    className:
                                                      "rounded-full w-[100px]",
                                                    onClick: () =>
                                                      P.push("/library"),
                                                    children: "Library",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "space-y-2",
                                            children: (0, t.jsx)("div", {
                                              className:
                                                "font-medium opacity-50 text-sm text-right",
                                              children: (0, t.jsx)(g(), {
                                                format: "YYYY/MM/DD",
                                                children: e.createdAt,
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      s
                                    )
                                  ),
                              a.table &&
                                a.table_history_face_swap &&
                                D &&
                                a.table
                                  .filter(
                                    (e) =>
                                      e.address == D && "faceswap" == e.type
                                  )
                                  .map((e, s) =>
                                    (0, t.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "space-y-2 flex justify-between pt-8",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "capitalize",
                                                children: e.type,
                                              }),
                                              (0, t.jsx)("div", {
                                                children:
                                                  a.table_history_face_swap[
                                                    s
                                                  ] &&
                                                  a.table_history_face_swap.find(
                                                    (s) =>
                                                      s._id == e.data.data_1._id
                                                  ) &&
                                                  (0, t.jsx)("div", {
                                                    className: "flex gap-4",
                                                    children: (0, t.jsx)(h.z, {
                                                      type: "button",
                                                      size: "sm",
                                                      className:
                                                        "rounded-full w-[100px]",
                                                      onClick: () =>
                                                        P.push("/library"),
                                                      children: "Library",
                                                    }),
                                                  }),
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "space-y-2",
                                            children: (0, t.jsx)("div", {
                                              className:
                                                "font-medium opacity-50 text-sm text-right",
                                              children: (0, t.jsx)(g(), {
                                                format: "YYYY/MM/DD",
                                                children: e.created_at,
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      s
                                    )
                                  ),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "pt-4 hidden",
                      children: (0, t.jsx)("div", {
                        className:
                          "rounded-xl h-[400px] bg-slate-900 flex justify-center items-center",
                        children: (0, t.jsxs)("div", {
                          className: "space-y-2",
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex justify-center",
                              children: (0, t.jsx)(x.QyB, {
                                className: "text-white/20",
                                size: 40,
                              }),
                            }),
                            (0, t.jsx)("h1", {
                              className:
                                "text-2xl font-bold text-center opacity-50",
                              children: "You don't have Ai history",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-center max-w-xl mx-auto",
                              children:
                                "Your generated AI list will appear on this page.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function _() {
        let { address: e } = (0, u.m)(),
          [s, a] = (0, n.T)((0, o.N)((e) => [e.valuess, e.setValuess])),
          [i, c, r] = (0, n.c)(
            (0, o.N)((e) => [e.values, e.setValues, e.resetValues])
          );
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
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
                        children: "Face Swap",
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "A powerful face-swapping tool that allows users to replace faces in images with high-quality realism, suitable for memes, media, and creative projects.",
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
              (0, t.jsx)(w, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [803, 225, 888, 774, 179], function () {
      return e((e.s = 75987));
    }),
      (_N_E = e.O());
  },
]);
