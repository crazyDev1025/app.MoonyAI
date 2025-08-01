"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [422],
  {
    10422: function (e, t, a) {
      a.d(t, {
        offchainLookup: function () {
          return k;
        },
        offchainLookupSignature: function () {
          return m;
        },
      });
      var s = a(59422),
        r = a(96070),
        n = a(36117),
        o = a(29008);
      class c extends n.G {
        constructor({
          callbackSelector: e,
          cause: t,
          data: a,
          extraData: s,
          sender: r,
          urls: n,
        }) {
          super(
            t.shortMessage ||
              "An error occurred while fetching for an offchain result.",
            {
              cause: t,
              metaMessages: [
                ...(t.metaMessages || []),
                t.metaMessages?.length ? "" : [],
                "Offchain Gateway Call:",
                n && [
                  "  Gateway URL(s):",
                  ...n.map((e) => `    ${(0, o.G)(e)}`),
                ],
                `  Sender: ${r}`,
                `  Data: ${a}`,
                `  Callback selector: ${e}`,
                `  Extra data: ${s}`,
              ].flat(),
              name: "OffchainLookupError",
            }
          );
        }
      }
      class i extends n.G {
        constructor({ result: e, url: t }) {
          super(
            "Offchain gateway response is malformed. Response data must be a hex value.",
            {
              metaMessages: [
                `Gateway URL: ${(0, o.G)(t)}`,
                `Response: ${(0, r.P)(e)}`,
              ],
              name: "OffchainLookupResponseMalformedError",
            }
          );
        }
      }
      class u extends n.G {
        constructor({ sender: e, to: t }) {
          super(
            "Reverted sender address does not match target contract address (`to`).",
            {
              metaMessages: [
                `Contract address: ${t}`,
                `OffchainLookup sender address: ${e}`,
              ],
              name: "OffchainLookupSenderMismatchError",
            }
          );
        }
      }
      var d = a(78863),
        f = a(86899),
        l = a(45444),
        p = a(26087),
        h = a(49321),
        w = a(57040),
        y = a(15102);
      let m = "0x556f1830",
        g = {
          name: "OffchainLookup",
          type: "error",
          inputs: [
            { name: "sender", type: "address" },
            { name: "urls", type: "string[]" },
            { name: "callData", type: "bytes" },
            { name: "callbackFunction", type: "bytes4" },
            { name: "extraData", type: "bytes" },
          ],
        };
      async function k(e, { blockNumber: t, blockTag: a, data: r, to: n }) {
        let { args: o } = (0, f.p)({ data: r, abi: [g] }),
          [i, d, y, m, k] = o,
          { ccipRead: G } = e,
          L = G && "function" == typeof G?.request ? G.request : b;
        try {
          if (
            !(function (e, t) {
              if (!(0, h.U)(e, { strict: !1 })) throw new p.b({ address: e });
              if (!(0, h.U)(t, { strict: !1 })) throw new p.b({ address: t });
              return e.toLowerCase() === t.toLowerCase();
            })(n, i)
          )
            throw new u({ sender: i, to: n });
          let r = await L({ data: y, sender: i, urls: d }),
            { data: o } = await (0, s.R)(e, {
              blockNumber: t,
              blockTag: a,
              data: (0, w.zo)([
                m,
                (0, l.E)([{ type: "bytes" }, { type: "bytes" }], [r, k]),
              ]),
              to: n,
            });
          return o;
        } catch (e) {
          throw new c({
            callbackSelector: m,
            cause: e,
            data: r,
            extraData: k,
            sender: i,
            urls: d,
          });
        }
      }
      async function b({ data: e, sender: t, urls: a }) {
        let s = Error("An unknown error occurred.");
        for (let n = 0; n < a.length; n++) {
          let o = a[n],
            c = o.includes("{data}") ? "GET" : "POST",
            u = "POST" === c ? { data: e, sender: t } : void 0,
            f = "POST" === c ? { "Content-Type": "application/json" } : {};
          try {
            let a;
            let n = await fetch(o.replace("{sender}", t).replace("{data}", e), {
              body: JSON.stringify(u),
              headers: f,
              method: c,
            });
            if (
              ((a = n.headers
                .get("Content-Type")
                ?.startsWith("application/json")
                ? (await n.json()).data
                : await n.text()),
              !n.ok)
            ) {
              s = new d.Gg({
                body: u,
                details: a?.error ? (0, r.P)(a.error) : n.statusText,
                headers: n.headers,
                status: n.status,
                url: o,
              });
              continue;
            }
            if (!(0, y.v)(a)) {
              s = new i({ result: a, url: o });
              continue;
            }
            return a;
          } catch (e) {
            s = new d.Gg({ body: u, details: e.message, url: o });
          }
        }
        throw s;
      }
    },
  },
]);
