(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [526],
  {
    94470: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        i = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        o = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            l = t.call(e, "constructor"),
            i =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !l && !i) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        a = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        u = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (l) return l(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          l,
          s,
          c,
          f = arguments[0],
          p = 1,
          h = arguments.length,
          d = !1;
        for (
          "boolean" == typeof f && ((d = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" != typeof f && "function" != typeof f)) &&
              (f = {});
          p < h;
          ++p
        )
          if (((t = arguments[p]), null != t))
            for (n in t)
              (r = u(f, n)),
                f !== (l = u(t, n)) &&
                  (d && l && (o(l) || (s = i(l)))
                    ? (s
                        ? ((s = !1), (c = r && i(r) ? r : []))
                        : (c = r && o(r) ? r : {}),
                      a(f, { name: n, newValue: e(d, c, l) }))
                    : void 0 !== l && a(f, { name: n, newValue: l }));
        return f;
      };
    },
    18139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        a = /^[;\s]*/,
        u = /^\s+|\s+$/g;
      function s(e) {
        return e ? e.replace(u, "") : "";
      }
      e.exports = function (e, u) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        u = u || {};
        var c = 1,
          f = 1;
        function p(e) {
          var t = e.match(n);
          t && (c += t.length);
          var r = e.lastIndexOf("\n");
          f = ~r ? e.length - r : f + e.length;
        }
        function h() {
          var e = { line: c, column: f };
          return function (t) {
            return (t.position = new d(e)), y(r), t;
          };
        }
        function d(e) {
          (this.start = e),
            (this.end = { line: c, column: f }),
            (this.source = u.source);
        }
        d.prototype.content = e;
        var m = [];
        function g(t) {
          var n = Error(u.source + ":" + c + ":" + f + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = u.source),
            (n.line = c),
            (n.column = f),
            (n.source = e),
            u.silent)
          )
            m.push(n);
          else throw n;
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return p(r), (e = e.slice(r.length)), n;
          }
        }
        function x(e) {
          var t;
          for (e = e || []; (t = v()); ) !1 !== t && e.push(t);
          return e;
        }
        function v() {
          var t = h();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return g("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (f += 2),
              p(r),
              (e = e.slice(n)),
              (f += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          y(r),
          (function () {
            var e,
              n = [];
            for (
              x(n);
              (e = (function () {
                var e = h(),
                  n = y(l);
                if (n) {
                  if ((v(), !y(i))) return g("property missing ':'");
                  var r = y(o),
                    u = e({
                      type: "declaration",
                      property: s(n[0].replace(t, "")),
                      value: r ? s(r[0].replace(t, "")) : "",
                    });
                  return y(a), u;
                }
              })());

            )
              !1 !== e && (n.push(e), x(n));
            return n;
          })()
        );
      };
    },
    5174: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = null;
          if (!e || "string" != typeof e) return n;
          var r = (0, l.default)(e),
            i = "function" == typeof t;
          return (
            r.forEach(function (e) {
              if ("declaration" === e.type) {
                var r = e.property,
                  l = e.value;
                i ? t(r, l, e) : l && ((n = n || {})[r] = l);
              }
            }),
            n
          );
        });
      var l = r(n(18139));
    },
    84526: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return nM;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          boolean: function () {
            return g;
          },
          booleanish: function () {
            return y;
          },
          commaOrSpaceSeparated: function () {
            return S;
          },
          commaSeparated: function () {
            return b;
          },
          number: function () {
            return v;
          },
          overloadedBoolean: function () {
            return x;
          },
          spaceSeparated: function () {
            return k;
          },
        });
      var l = {};
      n.r(l),
        n.d(l, {
          attentionMarkers: function () {
            return tD;
          },
          contentInitial: function () {
            return tI;
          },
          disable: function () {
            return tO;
          },
          document: function () {
            return tC;
          },
          flow: function () {
            return tP;
          },
          flowInitial: function () {
            return tE;
          },
          insideSpan: function () {
            return tL;
          },
          string: function () {
            return tT;
          },
          text: function () {
            return tA;
          },
        });
      let i = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        a = {};
      function u(e, t) {
        return ((t || a).jsx ? o : i).test(e);
      }
      let s = /[ \t\n\f\r]/g;
      function c(e) {
        return "" === e.replace(s, "");
      }
      class f {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function p(e, t) {
        let n = {},
          r = {},
          l = -1;
        for (; ++l < e.length; )
          Object.assign(n, e[l].property), Object.assign(r, e[l].normal);
        return new f(n, r, t);
      }
      function h(e) {
        return e.toLowerCase();
      }
      (f.prototype.property = {}),
        (f.prototype.normal = {}),
        (f.prototype.space = null);
      class d {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (d.prototype.space = null),
        (d.prototype.boolean = !1),
        (d.prototype.booleanish = !1),
        (d.prototype.overloadedBoolean = !1),
        (d.prototype.number = !1),
        (d.prototype.commaSeparated = !1),
        (d.prototype.spaceSeparated = !1),
        (d.prototype.commaOrSpaceSeparated = !1),
        (d.prototype.mustUseProperty = !1),
        (d.prototype.defined = !1);
      let m = 0,
        g = w(),
        y = w(),
        x = w(),
        v = w(),
        k = w(),
        b = w(),
        S = w();
      function w() {
        return 2 ** ++m;
      }
      let C = Object.keys(r);
      class I extends d {
        constructor(e, t, n, l) {
          var i, o;
          let a = -1;
          if ((super(e, t), l && (this.space = l), "number" == typeof n))
            for (; ++a < C.length; ) {
              let e = C[a];
              (i = C[a]), (o = (n & r[e]) === r[e]) && (this[i] = o);
            }
        }
      }
      I.prototype.defined = !0;
      let E = {}.hasOwnProperty;
      function P(e) {
        let t;
        let n = {},
          r = {};
        for (t in e.properties)
          if (E.call(e.properties, t)) {
            let l = e.properties[t],
              i = new I(t, e.transform(e.attributes || {}, t), l, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (i.mustUseProperty = !0),
              (n[t] = i),
              (r[h(t)] = t),
              (r[h(i.attribute)] = t);
          }
        return new f(n, r, e.space);
      }
      let T = P({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        A = P({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function L(e, t) {
        return t in e ? e[t] : t;
      }
      function D(e, t) {
        return L(e, t.toLowerCase());
      }
      let O = P({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: D,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        z = P({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: y,
            ariaAutoComplete: null,
            ariaBusy: y,
            ariaChecked: y,
            ariaColCount: v,
            ariaColIndex: v,
            ariaColSpan: v,
            ariaControls: k,
            ariaCurrent: null,
            ariaDescribedBy: k,
            ariaDetails: null,
            ariaDisabled: y,
            ariaDropEffect: k,
            ariaErrorMessage: null,
            ariaExpanded: y,
            ariaFlowTo: k,
            ariaGrabbed: y,
            ariaHasPopup: null,
            ariaHidden: y,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: k,
            ariaLevel: v,
            ariaLive: null,
            ariaModal: y,
            ariaMultiLine: y,
            ariaMultiSelectable: y,
            ariaOrientation: null,
            ariaOwns: k,
            ariaPlaceholder: null,
            ariaPosInSet: v,
            ariaPressed: y,
            ariaReadOnly: y,
            ariaRelevant: null,
            ariaRequired: y,
            ariaRoleDescription: k,
            ariaRowCount: v,
            ariaRowIndex: v,
            ariaRowSpan: v,
            ariaSelected: y,
            ariaSetSize: v,
            ariaSort: null,
            ariaValueMax: v,
            ariaValueMin: v,
            ariaValueNow: v,
            ariaValueText: null,
            role: null,
          },
        }),
        M = P({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: D,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: b,
            acceptCharset: k,
            accessKey: k,
            action: null,
            allow: null,
            allowFullScreen: g,
            allowPaymentRequest: g,
            allowUserMedia: g,
            alt: null,
            as: null,
            async: g,
            autoCapitalize: null,
            autoComplete: k,
            autoFocus: g,
            autoPlay: g,
            blocking: k,
            capture: null,
            charSet: null,
            checked: g,
            cite: null,
            className: k,
            cols: v,
            colSpan: null,
            content: null,
            contentEditable: y,
            controls: g,
            controlsList: k,
            coords: v | b,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: g,
            defer: g,
            dir: null,
            dirName: null,
            disabled: g,
            download: x,
            draggable: y,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: g,
            formTarget: null,
            headers: k,
            height: v,
            hidden: g,
            high: v,
            href: null,
            hrefLang: null,
            htmlFor: k,
            httpEquiv: k,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: g,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: g,
            itemId: null,
            itemProp: k,
            itemRef: k,
            itemScope: g,
            itemType: k,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: g,
            low: v,
            manifest: null,
            max: null,
            maxLength: v,
            media: null,
            method: null,
            min: null,
            minLength: v,
            multiple: g,
            muted: g,
            name: null,
            nonce: null,
            noModule: g,
            noValidate: g,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: g,
            optimum: v,
            pattern: null,
            ping: k,
            placeholder: null,
            playsInline: g,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: g,
            referrerPolicy: null,
            rel: k,
            required: g,
            reversed: g,
            rows: v,
            rowSpan: v,
            sandbox: k,
            scope: null,
            scoped: g,
            seamless: g,
            selected: g,
            shadowRootClonable: g,
            shadowRootDelegatesFocus: g,
            shadowRootMode: null,
            shape: null,
            size: v,
            sizes: null,
            slot: null,
            span: v,
            spellCheck: y,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: v,
            step: null,
            style: null,
            tabIndex: v,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: g,
            useMap: null,
            value: y,
            width: v,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: k,
            axis: null,
            background: null,
            bgColor: null,
            border: v,
            borderColor: null,
            bottomMargin: v,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: g,
            declare: g,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: v,
            leftMargin: v,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: v,
            marginWidth: v,
            noResize: g,
            noHref: g,
            noShade: g,
            noWrap: g,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: v,
            rules: null,
            scheme: null,
            scrolling: y,
            standby: null,
            summary: null,
            text: null,
            topMargin: v,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: v,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: g,
            disableRemotePlayback: g,
            prefix: null,
            property: null,
            results: v,
            security: null,
            unselectable: null,
          },
        }),
        N = P({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: L,
          properties: {
            about: S,
            accentHeight: v,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: v,
            amplitude: v,
            arabicForm: null,
            ascent: v,
            attributeName: null,
            attributeType: null,
            azimuth: v,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: v,
            by: null,
            calcMode: null,
            capHeight: v,
            className: k,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: v,
            diffuseConstant: v,
            direction: null,
            display: null,
            dur: null,
            divisor: v,
            dominantBaseline: null,
            download: g,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: v,
            enableBackground: null,
            end: null,
            event: null,
            exponent: v,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: v,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: b,
            g2: b,
            glyphName: b,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: v,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: v,
            horizOriginX: v,
            horizOriginY: v,
            id: null,
            ideographic: v,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: v,
            k: v,
            k1: v,
            k2: v,
            k3: v,
            k4: v,
            kernelMatrix: S,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: v,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: v,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: v,
            overlineThickness: v,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: v,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: k,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: v,
            pointsAtY: v,
            pointsAtZ: v,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: S,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: S,
            rev: S,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: S,
            requiredFeatures: S,
            requiredFonts: S,
            requiredFormats: S,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: v,
            specularExponent: v,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: v,
            strikethroughThickness: v,
            string: null,
            stroke: null,
            strokeDashArray: S,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: v,
            strokeOpacity: v,
            strokeWidth: null,
            style: null,
            surfaceScale: v,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: S,
            tabIndex: v,
            tableValues: null,
            target: null,
            targetX: v,
            targetY: v,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: S,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: v,
            underlineThickness: v,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: v,
            values: null,
            vAlphabetic: v,
            vMathematical: v,
            vectorEffect: null,
            vHanging: v,
            vIdeographic: v,
            version: null,
            vertAdvY: v,
            vertOriginX: v,
            vertOriginY: v,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: v,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        F = p([A, T, O, z, M], "html"),
        R = p([A, T, O, z, N], "svg"),
        _ = /^data[-\w.:]+$/i,
        j = /-[a-z]/g,
        B = /[A-Z]/g;
      function H(e) {
        return "-" + e.toLowerCase();
      }
      function U(e) {
        return e.charAt(1).toUpperCase();
      }
      let V = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var q = n(5174),
        W = q.default || q;
      let Y = Q("end"),
        K = Q("start");
      function Q(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function X(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? J(e.position)
            : "start" in e || "end" in e
            ? J(e)
            : "line" in e || "column" in e
            ? $(e)
            : ""
          : "";
      }
      function $(e) {
        return Z(e && e.line) + ":" + Z(e && e.column);
      }
      function J(e) {
        return $(e && e.start) + "-" + $(e && e.end);
      }
      function Z(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class G extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            l = {},
            i = !1;
          if (
            (t &&
              (l =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !l.cause && e && ((i = !0), (r = e.message), (l.cause = e)),
            !l.ruleId && !l.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (l.ruleId = n)
              : ((l.source = n.slice(0, e)), (l.ruleId = n.slice(e + 1)));
          }
          if (!l.place && l.ancestors && l.ancestors) {
            let e = l.ancestors[l.ancestors.length - 1];
            e && (l.place = e.position);
          }
          let o = l.place && "start" in l.place ? l.place.start : l.place;
          (this.ancestors = l.ancestors || void 0),
            (this.cause = l.cause || void 0),
            (this.column = o ? o.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = o ? o.line : void 0),
            (this.name = X(l.place) || "1:1"),
            (this.place = l.place || void 0),
            (this.reason = this.message),
            (this.ruleId = l.ruleId || void 0),
            (this.source = l.source || void 0),
            (this.stack =
              i && l.cause && "string" == typeof l.cause.stack
                ? l.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (G.prototype.file = ""),
        (G.prototype.name = ""),
        (G.prototype.reason = ""),
        (G.prototype.message = ""),
        (G.prototype.stack = ""),
        (G.prototype.column = void 0),
        (G.prototype.line = void 0),
        (G.prototype.ancestors = void 0),
        (G.prototype.cause = void 0),
        (G.prototype.fatal = void 0),
        (G.prototype.place = void 0),
        (G.prototype.ruleId = void 0),
        (G.prototype.source = void 0);
      let ee = {}.hasOwnProperty,
        et = new Map(),
        en = /[A-Z]/g,
        er = /-([a-z])/g,
        el = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        ei = new Set(["td", "th"]),
        eo = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function ea(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                l = r;
              "svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                ((l = R), (e.schema = l)),
                e.ancestors.push(t);
              let i = ef(e, t.tagName, !1),
                o = (function (e, t) {
                  let n, r;
                  let l = {};
                  for (r in t.properties)
                    if ("children" !== r && ee.call(t.properties, r)) {
                      let i = (function (e, t, n) {
                        let r = (function (e, t) {
                          let n = h(t),
                            r = t,
                            l = d;
                          if (n in e.normal) return e.property[e.normal[n]];
                          if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            _.test(t)
                          ) {
                            if ("-" === t.charAt(4)) {
                              let e = t.slice(5).replace(j, U);
                              r =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = t.slice(4);
                              if (!j.test(e)) {
                                let n = e.replace(B, H);
                                "-" !== n.charAt(0) && (n = "-" + n),
                                  (t = "data" + n);
                              }
                            }
                            l = I;
                          }
                          return new l(r, t);
                        })(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (function (e, t) {
                                    let n = {};
                                    return (
                                      "" === e[e.length - 1] ? [...e, ""] : e
                                    )
                                      .join(
                                        (n.padRight ? " " : "") +
                                          "," +
                                          (!1 === n.padLeft ? "" : " ")
                                      )
                                      .trim();
                                  })(n)
                                : n.join(" ").trim()),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      W(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(er, eh))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new G(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            eo +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t;
                                  let n = {};
                                  for (t in e)
                                    ee.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(en, ed);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? V[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (i) {
                        let [r, o] = i;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof o &&
                        ei.has(t.tagName)
                          ? (n = o)
                          : (l[r] = o);
                      }
                    }
                  return (
                    n &&
                      ((l.style || (l.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    l
                  );
                })(e, t),
                a = ec(e, t);
              return (
                el.has(t.tagName) &&
                  (a = a.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && c(e.value)
                        : c(e))
                    );
                  })),
                eu(e, o, i, t),
                es(o, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, i, o, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) {
                let n = t.data.estree.body[0];
                return n.type, e.evaluater.evaluateExpression(n.expression);
              }
              ep(e, t.position);
            })(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                l = r;
              "svg" === t.name &&
                "html" === r.space &&
                ((l = R), (e.schema = l)),
                e.ancestors.push(t);
              let i = null === t.name ? e.Fragment : ef(e, t.name, !0),
                o = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ("mdxJsxExpressionAttribute" === r.type) {
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree.body[0];
                        t.type;
                        let l = t.expression;
                        l.type;
                        let i = l.properties[0];
                        i.type,
                          Object.assign(
                            n,
                            e.evaluater.evaluateExpression(i.argument)
                          );
                      } else ep(e, t.position);
                    } else {
                      let l;
                      let i = r.name;
                      if (r.value && "object" == typeof r.value) {
                        if (
                          r.value.data &&
                          r.value.data.estree &&
                          e.evaluater
                        ) {
                          let t = r.value.data.estree.body[0];
                          t.type,
                            (l = e.evaluater.evaluateExpression(t.expression));
                        } else ep(e, t.position);
                      } else l = null === r.value || r.value;
                      n[i] = l;
                    }
                  return n;
                })(e, t),
                a = ec(e, t);
              return (
                eu(e, o, i, t),
                es(o, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, i, o, n)
              );
            })(e, t, n)
          : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              ep(e, t.position);
            })(e, t)
          : "root" === t.type
          ? (function (e, t, n) {
              let r = {};
              return es(r, ec(e, t)), e.create(t, e.Fragment, r, n);
            })(e, t, n)
          : "text" === t.type
          ? t.value
          : void 0;
      }
      function eu(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function es(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function ec(e, t) {
        let n = [],
          r = -1,
          l = e.passKeys ? new Map() : et;
        for (; ++r < t.children.length; ) {
          let i;
          let o = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === o.type
                ? o.tagName
                : "mdxJsxFlowElement" === o.type ||
                  "mdxJsxTextElement" === o.type
                ? o.name
                : void 0;
            if (e) {
              let t = l.get(e) || 0;
              (i = e + "-" + t), l.set(e, t + 1);
            }
          }
          let a = ea(e, o, i);
          void 0 !== a && n.push(a);
        }
        return n;
      }
      function ef(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              l = -1;
            for (; ++l < n.length; ) {
              let t = u(n[l])
                ? { type: "Identifier", name: n[l] }
                : { type: "Literal", value: n[l] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(l && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            r = e;
          } else
            r =
              u(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return ee.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        ep(e);
      }
      function ep(e, t) {
        let n = new G("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = eo + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function eh(e, t) {
        return t.toUpperCase();
      }
      function ed(e) {
        return "-" + e.toLowerCase();
      }
      let em = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var eg = n(85893);
      let ey = {};
      function ex(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return ev(e.children, t, n);
        }
        return Array.isArray(e) ? ev(e, t, n) : "";
      }
      function ev(e, t, n) {
        let r = [],
          l = -1;
        for (; ++l < e.length; ) r[l] = ex(e[l], t, n);
        return r.join("");
      }
      function ek(e, t, n, r) {
        let l;
        let i = e.length,
          o = 0;
        if (
          ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (l = Array.from(r)).unshift(t, n), e.splice(...l);
        else
          for (n && e.splice(t, n); o < r.length; )
            (l = r.slice(o, o + 1e4)).unshift(t, 0),
              e.splice(...l),
              (o += 1e4),
              (t += 1e4);
      }
      function eb(e, t) {
        return e.length > 0 ? (ek(e, e.length, 0, t), e) : t;
      }
      class eS {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(
            this.right.length - (t || 0),
            Number.POSITIVE_INFINITY
          );
          return n && ew(this.left, n), r.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), ew(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), ew(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          ) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              ew(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              ew(this.left, t.reverse());
            }
          }
        }
      }
      function ew(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function eC(e) {
        let t, n, r, l, i, o, a;
        let u = {},
          s = -1,
          c = new eS(e);
        for (; ++s < c.length; ) {
          for (; s in u; ) s = u[s];
          if (
            ((t = c.get(s)),
            s &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === c.get(s - 1)[1].type &&
              ((r = 0) < (o = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === o[r][1].type &&
                (r += 2),
              r < o.length && "content" === o[r][1].type))
          )
            for (; ++r < o.length && "content" !== o[r][1].type; )
              "chunkText" === o[r][1].type &&
                ((o[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                u,
                (function (e, t) {
                  let n, r;
                  let l = e.get(t)[1],
                    i = e.get(t)[2],
                    o = t - 1,
                    a = [],
                    u = l._tokenizer || i.parser[l.contentType](l.start),
                    s = u.events,
                    c = [],
                    f = {},
                    p = -1,
                    h = l,
                    d = 0,
                    m = 0,
                    g = [0];
                  for (; h; ) {
                    for (; e.get(++o)[1] !== h; );
                    a.push(o),
                      !h._tokenizer &&
                        ((n = i.sliceStream(h)),
                        h.next || n.push(null),
                        r && u.defineSkip(h.start),
                        h._isInFirstContentOfListItem &&
                          (u._gfmTasklistFirstContentOfListItem = !0),
                        u.write(n),
                        h._isInFirstContentOfListItem &&
                          (u._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = h),
                      (h = h.next);
                  }
                  for (h = l; ++p < s.length; )
                    "exit" === s[p][0] &&
                      "enter" === s[p - 1][0] &&
                      s[p][1].type === s[p - 1][1].type &&
                      s[p][1].start.line !== s[p][1].end.line &&
                      ((m = p + 1),
                      g.push(m),
                      (h._tokenizer = void 0),
                      (h.previous = void 0),
                      (h = h.next));
                  for (
                    u.events = [],
                      h
                        ? ((h._tokenizer = void 0), (h.previous = void 0))
                        : g.pop(),
                      p = g.length;
                    p--;

                  ) {
                    let t = s.slice(g[p], g[p + 1]),
                      n = a.pop();
                    c.push([n, n + t.length - 1]), e.splice(n, 2, t);
                  }
                  for (c.reverse(), p = -1; ++p < c.length; )
                    (f[d + c[p][0]] = d + c[p][1]),
                      (d += c[p][1] - c[p][0] - 1);
                  return f;
                })(c, s)
              ),
              (s = u[s]),
              (a = !0));
          else if (t[1]._container) {
            for (r = s, n = void 0; r--; )
              if (
                "lineEnding" === (l = c.get(r))[1].type ||
                "lineEndingBlank" === l[1].type
              )
                "enter" === l[0] &&
                  (n && (c.get(n)[1].type = "lineEndingBlank"),
                  (l[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = { ...c.get(n)[1].start }),
              (i = c.slice(n, s)).unshift(t),
              c.splice(n, s - n + 1, i));
          }
        }
        return ek(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a;
      }
      let eI = {}.hasOwnProperty,
        eE = e_(/[A-Za-z]/),
        eP = e_(/[\dA-Za-z]/),
        eT = e_(/[#-'*+\--9=?A-Z^-~]/);
      function eA(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let eL = e_(/\d/),
        eD = e_(/[\dA-Fa-f]/),
        eO = e_(/[!-/:-@[-`{-~]/);
      function ez(e) {
        return null !== e && e < -2;
      }
      function eM(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function eN(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let eF = e_(/\p{P}|\p{S}/u),
        eR = e_(/\s/);
      function e_(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function ej(e, t, n, r) {
        let l = r ? r - 1 : Number.POSITIVE_INFINITY,
          i = 0;
        return function (r) {
          return eN(r)
            ? (e.enter(n),
              (function r(o) {
                return eN(o) && i++ < l ? (e.consume(o), r) : (e.exit(n), t(o));
              })(r))
            : t(r);
        };
      }
      let eB = {
          tokenize: function (e) {
            let t;
            let n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                if (null === t) {
                  e.consume(t);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  ej(e, n, "linePrefix")
                );
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function n(r) {
                    let l = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = l),
                      (t = l),
                      (function t(r) {
                        if (null === r) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                          return;
                        }
                        return ez(r)
                          ? (e.consume(r), e.exit("chunkText"), n)
                          : (e.consume(r), t);
                      })(r)
                    );
                  })(n)
                );
              }
            );
            return n;
          },
        },
        eH = {
          tokenize: function (e) {
            let t, n, r;
            let l = this,
              i = [],
              o = 0;
            return a;
            function a(t) {
              if (o < i.length) {
                let n = i[o];
                return (
                  (l.containerState = n[1]),
                  e.attempt(n[0].continuation, u, s)(t)
                );
              }
              return s(t);
            }
            function u(e) {
              if ((o++, l.containerState._closeFlow)) {
                let n;
                (l.containerState._closeFlow = void 0), t && y();
                let r = l.events.length,
                  i = r;
                for (; i--; )
                  if (
                    "exit" === l.events[i][0] &&
                    "chunkFlow" === l.events[i][1].type
                  ) {
                    n = l.events[i][1].end;
                    break;
                  }
                g(o);
                let a = r;
                for (; a < l.events.length; )
                  (l.events[a][1].end = { ...n }), a++;
                return (
                  ek(l.events, i + 1, 0, l.events.slice(r)),
                  (l.events.length = a),
                  s(e)
                );
              }
              return a(e);
            }
            function s(n) {
              if (o === i.length) {
                if (!t) return p(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return d(n);
                l.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (l.containerState = {}), e.check(eU, c, f)(n);
            }
            function c(e) {
              return t && y(), g(o), p(e);
            }
            function f(e) {
              return (
                (l.parser.lazy[l.now().line] = o !== i.length),
                (r = l.now().offset),
                d(e)
              );
            }
            function p(t) {
              return (l.containerState = {}), e.attempt(eU, h, d)(t);
            }
            function h(e) {
              return o++, i.push([l.currentConstruct, l.containerState]), p(e);
            }
            function d(r) {
              if (null === r) {
                t && y(), g(0), e.consume(r);
                return;
              }
              return (
                (t = t || l.parser.flow(l.now())),
                e.enter("chunkFlow", {
                  _tokenizer: t,
                  contentType: "flow",
                  previous: n,
                }),
                (function t(n) {
                  if (null === n) {
                    m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                    return;
                  }
                  return ez(n)
                    ? (e.consume(n),
                      m(e.exit("chunkFlow")),
                      (o = 0),
                      (l.interrupt = void 0),
                      a)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function m(e, i) {
              let a = l.sliceStream(e);
              if (
                (i && a.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(a),
                l.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  i = t.events.length;
                for (; i--; )
                  if (
                    t.events[i][1].start.offset < r &&
                    (!t.events[i][1].end || t.events[i][1].end.offset > r)
                  )
                    return;
                let a = l.events.length,
                  u = a;
                for (; u--; )
                  if (
                    "exit" === l.events[u][0] &&
                    "chunkFlow" === l.events[u][1].type
                  ) {
                    if (e) {
                      n = l.events[u][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (g(o), i = a; i < l.events.length; )
                  (l.events[i][1].end = { ...n }), i++;
                ek(l.events, u + 1, 0, l.events.slice(a)),
                  (l.events.length = i);
              }
            }
            function g(t) {
              let n = i.length;
              for (; n-- > t; ) {
                let t = i[n];
                (l.containerState = t[1]), t[0].exit.call(l, e);
              }
              i.length = t;
            }
            function y() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (l.containerState._closeFlow = void 0);
            }
          },
        },
        eU = {
          tokenize: function (e, t, n) {
            return ej(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        },
        eV = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eN(t) ? ej(e, r, "linePrefix")(t) : r(t);
            };
            function r(e) {
              return null === e || ez(e) ? t(e) : n(e);
            }
          },
        },
        eq = {
          resolve: function (e) {
            return eC(e), e;
          },
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? l(t)
                : ez(t)
                ? e.check(eW, i, l)(t)
                : (e.consume(t), r);
            }
            function l(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function i(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
        },
        eW = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                ej(e, l, "linePrefix")
              );
            };
            function l(l) {
              if (null === l || ez(l)) return n(l);
              let i = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(l)
                : e.interrupt(r.parser.constructs.flow, n, t)(l);
            }
          },
        },
        eY = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                eV,
                function (r) {
                  if (null === r) {
                    e.consume(r);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  ej(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(eq, r)),
                    "linePrefix"
                  )
                )
              );
            return n;
            function r(r) {
              if (null === r) {
                e.consume(r);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        eK = { resolveAll: eJ() },
        eQ = e$("string"),
        eX = e$("text");
      function e$(e) {
        return {
          resolveAll: eJ("text" === e ? eZ : void 0),
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              l = t.attempt(r, i, o);
            return i;
            function i(e) {
              return u(e) ? l(e) : o(e);
            }
            function o(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), a;
            }
            function a(e) {
              return u(e) ? (t.exit("data"), l(e)) : (t.consume(e), a);
            }
            function u(e) {
              if (null === e) return !0;
              let t = r[e],
                l = -1;
              if (t)
                for (; ++l < t.length; ) {
                  let e = t[l];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
        };
      }
      function eJ(e) {
        return function (t, n) {
          let r,
            l = -1;
          for (; ++l <= t.length; )
            void 0 === r
              ? t[l] && "data" === t[l][1].type && ((r = l), l++)
              : (t[l] && "data" === t[l][1].type) ||
                (l !== r + 2 &&
                  ((t[r][1].end = t[l - 1][1].end),
                  t.splice(r + 2, l - r - 2),
                  (l = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eZ(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let l = e[n - 1][1],
              i = t.sliceStream(l),
              o = i.length,
              a = -1,
              u = 0;
            for (; o--; ) {
              let e = i[o];
              if ("string" == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) u++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (r = !0), u++;
              else if (-1 === e);
              else {
                o++;
                break;
              }
            }
            if (u) {
              let i = {
                type:
                  n === e.length || r || u < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  _bufferIndex: o ? a : l.start._bufferIndex + a,
                  _index: l.start._index + o,
                  line: l.end.line,
                  column: l.end.column - u,
                  offset: l.end.offset - u,
                },
                end: { ...l.end },
              };
              (l.end = { ...i.start }),
                l.start.offset === l.end.offset
                  ? Object.assign(l, i)
                  : (e.splice(n, 0, ["enter", i, t], ["exit", i, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      let eG = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              l = 0;
            return function (i) {
              return (
                e.enter("thematicBreak"),
                (r = i),
                (function i(o) {
                  return o === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), l++, t)
                          : (e.exit("thematicBreakSequence"),
                            eN(n) ? ej(e, i, "whitespace")(n) : i(n));
                      })(o))
                    : l >= 3 && (null === o || ez(o))
                    ? (e.exit("thematicBreak"), t(o))
                    : n(o);
                })(i)
              );
            };
          },
        },
        e1 = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  eV,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      ej(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !eN(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        l(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(e2, t, l)(n));
                  }
                )
              );
              function l(l) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  ej(
                    e,
                    e.attempt(e1, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(l)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              l = r.events[r.events.length - 1],
              i =
                l && "linePrefix" === l[1].type
                  ? l[2].sliceSerialize(l[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              let l =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === l
                  ? !r.containerState.marker || t === r.containerState.marker
                  : eL(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = l),
                    e.enter(l, { _container: !0 })),
                  "listUnordered" === l)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(eG, n, a)(t) : a(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(l) {
                      return eL(l) && ++o < 10
                        ? (e.consume(l), t)
                        : (!r.interrupt || o < 2) &&
                          (r.containerState.marker
                            ? l === r.containerState.marker
                            : 41 === l || 46 === l)
                        ? (e.exit("listItemValue"), a(l))
                        : n(l);
                    })(t)
                  );
              }
              return n(t);
            };
            function a(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(eV, r.interrupt ? n : u, e.attempt(e0, c, s))
              );
            }
            function u(e) {
              return (r.containerState.initialBlankLine = !0), i++, c(e);
            }
            function s(t) {
              return eN(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  c)
                : n(t);
            }
            function c(n) {
              return (
                (r.containerState.size =
                  i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
        },
        e0 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return ej(
              e,
              function (e) {
                let l = r.events[r.events.length - 1];
                return !eN(e) && l && "listItemPrefixWhitespace" === l[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
        },
        e2 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return ej(
              e,
              function (e) {
                let l = r.events[r.events.length - 1];
                return l &&
                  "listItemIndent" === l[1].type &&
                  l[2].sliceSerialize(l[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
        },
        e4 = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return eN(t)
                  ? ej(
                      e,
                      l,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : l(t);
              };
              function l(r) {
                return e.attempt(e4, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  l
                );
              }
              return n(t);
            };
            function l(n) {
              return eN(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
        };
      function e3(e, t, n, r, l, i, o, a, u) {
        let s = u || Number.POSITIVE_INFINITY,
          c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(l), e.enter(i), e.consume(t), e.exit(i), f)
            : null === t || 32 === t || 41 === t || eA(t)
            ? n(t)
            : (e.enter(r),
              e.enter(o),
              e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              d(t));
        };
        function f(n) {
          return 62 === n
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(l), e.exit(r), t)
            : (e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              p(n));
        }
        function p(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(a), f(t))
            : null === t || 60 === t || ez(t)
            ? n(t)
            : (e.consume(t), 92 === t ? h : p);
        }
        function h(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
        function d(l) {
          return !c && (null === l || 41 === l || eM(l))
            ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(l))
            : c < s && 40 === l
            ? (e.consume(l), c++, d)
            : 41 === l
            ? (e.consume(l), c--, d)
            : null === l || 32 === l || 40 === l || eA(l)
            ? n(l)
            : (e.consume(l), 92 === l ? m : d);
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), d) : d(t);
        }
      }
      function e5(e, t, n, r, l, i) {
        let o;
        let a = this,
          u = 0;
        return function (t) {
          return e.enter(r), e.enter(l), e.consume(t), e.exit(l), e.enter(i), s;
        };
        function s(f) {
          return u > 999 ||
            null === f ||
            91 === f ||
            (93 === f && !o) ||
            (94 === f && !u && "_hiddenFootnoteSupport" in a.parser.constructs)
            ? n(f)
            : 93 === f
            ? (e.exit(i), e.enter(l), e.consume(f), e.exit(l), e.exit(r), t)
            : ez(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s)
            : (e.enter("chunkString", { contentType: "string" }), c(f));
        }
        function c(t) {
          return null === t || 91 === t || 93 === t || ez(t) || u++ > 999
            ? (e.exit("chunkString"), s(t))
            : (e.consume(t), o || (o = !eN(t)), 92 === t ? f : c);
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), u++, c)
            : c(t);
        }
      }
      function e6(e, t, n, r, l, i) {
        let o;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(l),
              e.consume(t),
              e.exit(l),
              (o = 40 === t ? 41 : t),
              a)
            : n(t);
        };
        function a(n) {
          return n === o
            ? (e.enter(l), e.consume(n), e.exit(l), e.exit(r), t)
            : (e.enter(i), u(n));
        }
        function u(t) {
          return t === o
            ? (e.exit(i), a(o))
            : null === t
            ? n(t)
            : ez(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              ej(e, u, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), s(t));
        }
        function s(t) {
          return t === o || null === t || ez(t)
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), 92 === t ? c : s);
        }
        function c(t) {
          return t === o || 92 === t ? (e.consume(t), s) : s(t);
        }
      }
      function e9(e, t) {
        let n;
        return function r(l) {
          return ez(l)
            ? (e.enter("lineEnding"),
              e.consume(l),
              e.exit("lineEnding"),
              (n = !0),
              r)
            : eN(l)
            ? ej(e, r, n ? "linePrefix" : "lineSuffix")(l)
            : t(l);
        };
      }
      function e7(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      let e8 = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eM(t) ? e9(e, r)(t) : n(t);
            };
            function r(t) {
              return e6(
                e,
                l,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function l(t) {
              return eN(t) ? ej(e, i, "whitespace")(t) : i(t);
            }
            function i(e) {
              return null === e || ez(e) ? t(e) : n(e);
            }
          },
        },
        te = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e.enter("codeIndented"), ej(e, l, "linePrefix", 5)(t);
            };
            function l(t) {
              let l = r.events[r.events.length - 1];
              return l &&
                "linePrefix" === l[1].type &&
                l[2].sliceSerialize(l[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? i(n)
                      : ez(n)
                      ? e.attempt(tt, t, i)(n)
                      : (e.enter("codeFlowValue"),
                        (function n(r) {
                          return null === r || ez(r)
                            ? (e.exit("codeFlowValue"), t(r))
                            : (e.consume(r), n);
                        })(n));
                  })(t)
                : n(t);
            }
            function i(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        tt = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return l;
            function l(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : ez(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l)
                : ej(e, i, "linePrefix", 5)(t);
            }
            function i(e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(e)
                : ez(e)
                ? l(e)
                : n(e);
            }
          },
        },
        tn = {
          name: "setextUnderline",
          resolveTo: function (e, t) {
            let n,
              r,
              l,
              i = e.length;
            for (; i--; )
              if ("enter" === e[i][0]) {
                if ("content" === e[i][1].type) {
                  n = i;
                  break;
                }
                "paragraph" === e[i][1].type && (r = i);
              } else
                "content" === e[i][1].type && e.splice(i, 1),
                  l || "definition" !== e[i][1].type || (l = i);
            let o = {
              type: "setextHeading",
              start: { ...e[r][1].start },
              end: { ...e[e.length - 1][1].end },
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              l
                ? (e.splice(r, 0, ["enter", o, t]),
                  e.splice(l + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = { ...e[l][1].end }))
                : (e[n][1] = o),
              e.push(["exit", o, t]),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r;
            let l = this;
            return function (t) {
              let o,
                a = l.events.length;
              for (; a--; )
                if (
                  "lineEnding" !== l.events[a][1].type &&
                  "linePrefix" !== l.events[a][1].type &&
                  "content" !== l.events[a][1].type
                ) {
                  o = "paragraph" === l.events[a][1].type;
                  break;
                }
              return !l.parser.lazy[l.now().line] && (l.interrupt || o)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        eN(n) ? ej(e, i, "lineSuffix")(n) : i(n));
                  })(t))
                : n(t);
            };
            function i(r) {
              return null === r || ez(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
        },
        tr = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        tl = ["pre", "script", "style", "textarea"],
        ti = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(eV, t, n)
              );
            };
          },
        },
        to = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return ez(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l)
                : n(t);
            };
            function l(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        ta = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  l);
            };
            function l(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        tu = {
          concrete: !0,
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r;
            let l = this,
              i = {
                partial: !0,
                tokenize: function (e, t, n) {
                  let i = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      o
                    );
                  };
                  function o(t) {
                    return (
                      e.enter("codeFencedFence"),
                      eN(t)
                        ? ej(
                            e,
                            u,
                            "linePrefix",
                            l.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : u(t)
                    );
                  }
                  function u(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(l) {
                          return l === r
                            ? (i++, e.consume(l), t)
                            : i >= a
                            ? (e.exit("codeFencedFenceSequence"),
                              eN(l) ? ej(e, s, "whitespace")(l) : s(l))
                            : n(l);
                        })(t))
                      : n(t);
                  }
                  function s(r) {
                    return null === r || ez(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
              },
              o = 0,
              a = 0;
            return function (t) {
              return (function (t) {
                let i = l.events[l.events.length - 1];
                return (
                  (o =
                    i && "linePrefix" === i[1].type
                      ? i[2].sliceSerialize(i[1], !0).length
                      : 0),
                  (r = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function t(l) {
                    return l === r
                      ? (a++, e.consume(l), t)
                      : a < 3
                      ? n(l)
                      : (e.exit("codeFencedFenceSequence"),
                        eN(l) ? ej(e, u, "whitespace")(l) : u(l));
                  })(t)
                );
              })(t);
            };
            function u(i) {
              return null === i || ez(i)
                ? (e.exit("codeFencedFence"),
                  l.interrupt ? t(i) : e.check(ta, c, d)(i))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(l) {
                    return null === l || ez(l)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        u(l))
                      : eN(l)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        ej(e, s, "whitespace")(l))
                      : 96 === l && l === r
                      ? n(l)
                      : (e.consume(l), t);
                  })(i));
            }
            function s(t) {
              return null === t || ez(t)
                ? u(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(l) {
                    return null === l || ez(l)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        u(l))
                      : 96 === l && l === r
                      ? n(l)
                      : (e.consume(l), t);
                  })(t));
            }
            function c(t) {
              return e.attempt(i, d, f)(t);
            }
            function f(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p
              );
            }
            function p(t) {
              return o > 0 && eN(t) ? ej(e, h, "linePrefix", o + 1)(t) : h(t);
            }
            function h(t) {
              return null === t || ez(t)
                ? e.check(ta, c, d)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || ez(n)
                      ? (e.exit("codeFlowValue"), h(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function d(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
        },
        ts = document.createElement("i");
      function tc(e) {
        let t = "&" + e + ";";
        ts.innerHTML = t;
        let n = ts.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let tf = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r, l;
            let i = this,
              o = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                a
              );
            };
            function a(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  u)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (l = eP),
                  s(t));
            }
            function u(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (l = eD),
                  s)
                : (e.enter("characterReferenceValue"), (r = 7), (l = eL), s(t));
            }
            function s(a) {
              if (59 === a && o) {
                let r = e.exit("characterReferenceValue");
                return l !== eP || tc(i.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(a),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(a);
              }
              return l(a) && o++ < r ? (e.consume(a), s) : n(a);
            }
          },
        },
        tp = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return eO(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        th = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                ej(e, t, "linePrefix")
              );
            };
          },
        };
      function td(e, t, n) {
        let r = [],
          l = -1;
        for (; ++l < e.length; ) {
          let i = e[l].resolveAll;
          i && !r.includes(i) && ((t = i(t, n)), r.push(i));
        }
        return t;
      }
      let tm = {
          name: "labelEnd",
          resolveAll: function (e) {
            let t = -1,
              n = [];
            for (; ++t < e.length; ) {
              let r = e[t][1];
              if (
                (n.push(e[t]),
                "labelImage" === r.type ||
                  "labelLink" === r.type ||
                  "labelEnd" === r.type)
              ) {
                let e = "labelImage" === r.type ? 4 : 2;
                (r.type = "data"), (t += e);
              }
            }
            return e.length !== n.length && ek(e, 0, e.length, n), e;
          },
          resolveTo: function (e, t) {
            let n,
              r,
              l,
              i,
              o = e.length,
              a = 0;
            for (; o--; )
              if (((n = e[o][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[o][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (l) {
                if (
                  "enter" === e[o][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = o), "labelLink" !== n.type)
                ) {
                  a = 2;
                  break;
                }
              } else "labelEnd" === n.type && (l = o);
            let u = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: { ...e[r][1].start },
                end: { ...e[e.length - 1][1].end },
              },
              s = {
                type: "label",
                start: { ...e[r][1].start },
                end: { ...e[l][1].end },
              },
              c = {
                type: "labelText",
                start: { ...e[r + a + 2][1].end },
                end: { ...e[l - 2][1].start },
              };
            return (
              (i = eb(
                (i = [
                  ["enter", u, t],
                  ["enter", s, t],
                ]),
                e.slice(r + 1, r + a + 3)
              )),
              (i = eb(i, [["enter", c, t]])),
              (i = eb(
                i,
                td(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + a + 4, l - 3),
                  t
                )
              )),
              (i = eb(i, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]])),
              (i = eb(i, e.slice(l + 1))),
              (i = eb(i, [["exit", u, t]])),
              ek(e, r, e.length, i),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r, l;
            let i = this,
              o = i.events.length;
            for (; o--; )
              if (
                ("labelImage" === i.events[o][1].type ||
                  "labelLink" === i.events[o][1].type) &&
                !i.events[o][1]._balanced
              ) {
                r = i.events[o][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? c(t)
                  : ((l = i.parser.defined.includes(
                      e7(i.sliceSerialize({ start: r.end, end: i.now() }))
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    a)
                : n(t);
            };
            function a(t) {
              return 40 === t
                ? e.attempt(tg, s, l ? s : c)(t)
                : 91 === t
                ? e.attempt(ty, s, l ? u : c)(t)
                : l
                ? s(t)
                : c(t);
            }
            function u(t) {
              return e.attempt(tx, s, c)(t);
            }
            function s(e) {
              return t(e);
            }
            function c(e) {
              return (r._balanced = !0), n(e);
            }
          },
        },
        tg = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return eM(t) ? e9(e, l)(t) : l(t);
            }
            function l(t) {
              return 41 === t
                ? s(t)
                : e3(
                    e,
                    i,
                    o,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function i(t) {
              return eM(t) ? e9(e, a)(t) : s(t);
            }
            function o(e) {
              return n(e);
            }
            function a(t) {
              return 34 === t || 39 === t || 40 === t
                ? e6(
                    e,
                    u,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : s(t);
            }
            function u(t) {
              return eM(t) ? e9(e, s)(t) : s(t);
            }
            function s(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        ty = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e5.call(
                r,
                e,
                l,
                i,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function l(e) {
              return r.parser.defined.includes(
                e7(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function i(e) {
              return n(e);
            }
          },
        },
        tx = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        tv = {
          name: "labelStartImage",
          resolveAll: tm.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                l
              );
            };
            function l(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  i)
                : n(t);
            }
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        };
      function tk(e) {
        return null === e || eM(e) || eR(e) ? 1 : eF(e) ? 2 : void 0;
      }
      let tb = {
        name: "attention",
        resolveAll: function (e, t) {
          let n,
            r,
            l,
            i,
            o,
            a,
            u,
            s,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            ) {
              for (n = c; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  a =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = { ...e[n][1].end },
                    p = { ...e[c][1].start };
                  tS(f, -a),
                    tS(p, a),
                    (i = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: { ...e[n][1].end },
                    }),
                    (o = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: { ...e[c][1].start },
                      end: p,
                    }),
                    (l = {
                      type: a > 1 ? "strongText" : "emphasisText",
                      start: { ...e[n][1].end },
                      end: { ...e[c][1].start },
                    }),
                    (r = {
                      type: a > 1 ? "strong" : "emphasis",
                      start: { ...i.start },
                      end: { ...o.end },
                    }),
                    (e[n][1].end = { ...i.start }),
                    (e[c][1].start = { ...o.end }),
                    (u = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (u = eb(u, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (u = eb(u, [
                      ["enter", r, t],
                      ["enter", i, t],
                      ["exit", i, t],
                      ["enter", l, t],
                    ])),
                    (u = eb(
                      u,
                      td(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, c),
                        t
                      )
                    )),
                    (u = eb(u, [
                      ["exit", l, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["exit", r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((s = 2),
                        (u = eb(u, [
                          ["enter", e[c][1], t],
                          ["exit", e[c][1], t],
                        ])))
                      : (s = 0),
                    ek(e, n - 1, c - n + 3, u),
                    (c = n + u.length - s - 2);
                  break;
                }
            }
          for (c = -1; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
        tokenize: function (e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
            l = this.previous,
            i = tk(l);
          return function (o) {
            return (
              (n = o),
              e.enter("attentionSequence"),
              (function o(a) {
                if (a === n) return e.consume(a), o;
                let u = e.exit("attentionSequence"),
                  s = tk(a),
                  c = !s || (2 === s && i) || r.includes(a),
                  f = !i || (2 === i && s) || r.includes(l);
                return (
                  (u._open = !!(42 === n ? c : c && (i || !f))),
                  (u._close = !!(42 === n ? f : f && (s || !c))),
                  t(a)
                );
              })(o)
            );
          };
        },
      };
      function tS(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let tw = {
          name: "labelStartLink",
          resolveAll: tm.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                l
              );
            };
            function l(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        },
        tC = {
          42: e1,
          43: e1,
          45: e1,
          48: e1,
          49: e1,
          50: e1,
          51: e1,
          52: e1,
          53: e1,
          54: e1,
          55: e1,
          56: e1,
          57: e1,
          62: e4,
        },
        tI = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r;
              let l = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  e5.call(
                    l,
                    e,
                    i,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t)
                );
              };
              function i(t) {
                return ((r = e7(
                  l
                    .sliceSerialize(l.events[l.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    o)
                  : n(t);
              }
              function o(t) {
                return eM(t) ? e9(e, a)(t) : a(t);
              }
              function a(t) {
                return e3(
                  e,
                  u,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function u(t) {
                return e.attempt(e8, s, s)(t);
              }
              function s(t) {
                return eN(t) ? ej(e, c, "whitespace")(t) : c(t);
              }
              function c(i) {
                return null === i || ez(i)
                  ? (e.exit("definition"), l.parser.defined.push(r), t(i))
                  : n(i);
              }
            },
          },
        },
        tE = { [-2]: te, [-1]: te, 32: te },
        tP = {
          35: {
            name: "headingAtx",
            resolve: function (e, t) {
              let n,
                r,
                l = e.length - 2,
                i = 3;
              return (
                "whitespace" === e[3][1].type && (i += 2),
                l - 2 > i && "whitespace" === e[l][1].type && (l -= 2),
                "atxHeadingSequence" === e[l][1].type &&
                  (i === l - 1 ||
                    (l - 4 > i && "whitespace" === e[l - 2][1].type)) &&
                  (l -= i + 1 === l ? 2 : 4),
                l > i &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[i][1].start,
                    end: e[l][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[i][1].start,
                    end: e[l][1].end,
                    contentType: "text",
                  }),
                  ek(e, i, l - i + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r = 0;
              return function (l) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function l(i) {
                    return 35 === i && r++ < 6
                      ? (e.consume(i), l)
                      : null === i || eM(i)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(r) {
                          return 35 === r
                            ? (e.enter("atxHeadingSequence"),
                              (function t(r) {
                                return 35 === r
                                  ? (e.consume(r), t)
                                  : (e.exit("atxHeadingSequence"), n(r));
                              })(r))
                            : null === r || ez(r)
                            ? (e.exit("atxHeading"), t(r))
                            : eN(r)
                            ? ej(e, n, "whitespace")(r)
                            : (e.enter("atxHeadingText"),
                              (function t(r) {
                                return null === r || 35 === r || eM(r)
                                  ? (e.exit("atxHeadingText"), n(r))
                                  : (e.consume(r), t);
                              })(r));
                        })(i))
                      : n(i);
                  })(l)
                );
              };
            },
          },
          42: eG,
          45: [tn, eG],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r, l, i, o, a;
              let u = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), s
                );
              };
              function s(o) {
                return 33 === o
                  ? (e.consume(o), c)
                  : 47 === o
                  ? (e.consume(o), (l = !0), h)
                  : 63 === o
                  ? (e.consume(o), (r = 3), u.interrupt ? t : O)
                  : eE(o)
                  ? (e.consume(o), (i = String.fromCharCode(o)), d)
                  : n(o);
              }
              function c(l) {
                return 45 === l
                  ? (e.consume(l), (r = 2), f)
                  : 91 === l
                  ? (e.consume(l), (r = 5), (o = 0), p)
                  : eE(l)
                  ? (e.consume(l), (r = 4), u.interrupt ? t : O)
                  : n(l);
              }
              function f(r) {
                return 45 === r ? (e.consume(r), u.interrupt ? t : O) : n(r);
              }
              function p(r) {
                let l = "CDATA[";
                return r === l.charCodeAt(o++)
                  ? (e.consume(r), o === l.length)
                    ? u.interrupt
                      ? t
                      : C
                    : p
                  : n(r);
              }
              function h(t) {
                return eE(t)
                  ? (e.consume(t), (i = String.fromCharCode(t)), d)
                  : n(t);
              }
              function d(o) {
                if (null === o || 47 === o || 62 === o || eM(o)) {
                  let a = 47 === o,
                    s = i.toLowerCase();
                  return !a && !l && tl.includes(s)
                    ? ((r = 1), u.interrupt ? t(o) : C(o))
                    : tr.includes(i.toLowerCase())
                    ? ((r = 6), a)
                      ? (e.consume(o), m)
                      : u.interrupt
                      ? t(o)
                      : C(o)
                    : ((r = 7),
                      u.interrupt && !u.parser.lazy[u.now().line]
                        ? n(o)
                        : l
                        ? (function t(n) {
                            return eN(n) ? (e.consume(n), t) : S(n);
                          })(o)
                        : g(o));
                }
                return 45 === o || eP(o)
                  ? (e.consume(o), (i += String.fromCharCode(o)), d)
                  : n(o);
              }
              function m(r) {
                return 62 === r ? (e.consume(r), u.interrupt ? t : C) : n(r);
              }
              function g(t) {
                return 47 === t
                  ? (e.consume(t), S)
                  : 58 === t || 95 === t || eE(t)
                  ? (e.consume(t), y)
                  : eN(t)
                  ? (e.consume(t), g)
                  : S(t);
              }
              function y(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || eP(t)
                  ? (e.consume(t), y)
                  : x(t);
              }
              function x(t) {
                return 61 === t
                  ? (e.consume(t), v)
                  : eN(t)
                  ? (e.consume(t), x)
                  : g(t);
              }
              function v(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (a = t), k)
                  : eN(t)
                  ? (e.consume(t), v)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        eM(n)
                        ? x(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function k(t) {
                return t === a
                  ? (e.consume(t), (a = null), b)
                  : null === t || ez(t)
                  ? n(t)
                  : (e.consume(t), k);
              }
              function b(e) {
                return 47 === e || 62 === e || eN(e) ? g(e) : n(e);
              }
              function S(t) {
                return 62 === t ? (e.consume(t), w) : n(t);
              }
              function w(t) {
                return null === t || ez(t)
                  ? C(t)
                  : eN(t)
                  ? (e.consume(t), w)
                  : n(t);
              }
              function C(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), T)
                  : 60 === t && 1 === r
                  ? (e.consume(t), A)
                  : 62 === t && 4 === r
                  ? (e.consume(t), z)
                  : 63 === t && 3 === r
                  ? (e.consume(t), O)
                  : 93 === t && 5 === r
                  ? (e.consume(t), D)
                  : ez(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"), e.check(ti, M, I)(t))
                  : null === t || ez(t)
                  ? (e.exit("htmlFlowData"), I(t))
                  : (e.consume(t), C);
              }
              function I(t) {
                return e.check(to, E, M)(t);
              }
              function E(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P
                );
              }
              function P(t) {
                return null === t || ez(t)
                  ? I(t)
                  : (e.enter("htmlFlowData"), C(t));
              }
              function T(t) {
                return 45 === t ? (e.consume(t), O) : C(t);
              }
              function A(t) {
                return 47 === t ? (e.consume(t), (i = ""), L) : C(t);
              }
              function L(t) {
                if (62 === t) {
                  let n = i.toLowerCase();
                  return tl.includes(n) ? (e.consume(t), z) : C(t);
                }
                return eE(t) && i.length < 8
                  ? (e.consume(t), (i += String.fromCharCode(t)), L)
                  : C(t);
              }
              function D(t) {
                return 93 === t ? (e.consume(t), O) : C(t);
              }
              function O(t) {
                return 62 === t
                  ? (e.consume(t), z)
                  : 45 === t && 2 === r
                  ? (e.consume(t), O)
                  : C(t);
              }
              function z(t) {
                return null === t || ez(t)
                  ? (e.exit("htmlFlowData"), M(t))
                  : (e.consume(t), z);
              }
              function M(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
          },
          61: tn,
          95: eG,
          96: tu,
          126: tu,
        },
        tT = { 38: tf, 92: tp },
        tA = {
          [-5]: th,
          [-4]: th,
          [-3]: th,
          33: tv,
          38: tf,
          42: tb,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    l
                  );
                };
                function l(t) {
                  return eE(t) ? (e.consume(t), i) : 64 === t ? n(t) : a(t);
                }
                function i(t) {
                  return 43 === t || 45 === t || 46 === t || eP(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), o)
                          : (43 === n || 45 === n || 46 === n || eP(n)) &&
                            r++ < 32
                          ? (e.consume(n), t)
                          : ((r = 0), a(n));
                      })(t))
                    : a(t);
                }
                function o(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || eA(r)
                    ? n(r)
                    : (e.consume(r), o);
                }
                function a(t) {
                  return 64 === t
                    ? (e.consume(t), u)
                    : eT(t)
                    ? (e.consume(t), a)
                    : n(t);
                }
                function u(l) {
                  return eP(l)
                    ? (function l(i) {
                        return 46 === i
                          ? (e.consume(i), (r = 0), u)
                          : 62 === i
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(i),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(i) {
                              if ((45 === i || eP(i)) && r++ < 63) {
                                let n = 45 === i ? t : l;
                                return e.consume(i), n;
                              }
                              return n(i);
                            })(i);
                      })(l)
                    : n(l);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r, l, i;
                let o = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    a
                  );
                };
                function a(t) {
                  return 33 === t
                    ? (e.consume(t), u)
                    : 47 === t
                    ? (e.consume(t), k)
                    : 63 === t
                    ? (e.consume(t), x)
                    : eE(t)
                    ? (e.consume(t), S)
                    : n(t);
                }
                function u(t) {
                  return 45 === t
                    ? (e.consume(t), s)
                    : 91 === t
                    ? (e.consume(t), (l = 0), h)
                    : eE(t)
                    ? (e.consume(t), y)
                    : n(t);
                }
                function s(t) {
                  return 45 === t ? (e.consume(t), p) : n(t);
                }
                function c(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), f)
                    : ez(t)
                    ? ((i = c), L(t))
                    : (e.consume(t), c);
                }
                function f(t) {
                  return 45 === t ? (e.consume(t), p) : c(t);
                }
                function p(e) {
                  return 62 === e ? A(e) : 45 === e ? f(e) : c(e);
                }
                function h(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(l++)
                    ? (e.consume(t), l === r.length ? d : h)
                    : n(t);
                }
                function d(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), m)
                    : ez(t)
                    ? ((i = d), L(t))
                    : (e.consume(t), d);
                }
                function m(t) {
                  return 93 === t ? (e.consume(t), g) : d(t);
                }
                function g(t) {
                  return 62 === t ? A(t) : 93 === t ? (e.consume(t), g) : d(t);
                }
                function y(t) {
                  return null === t || 62 === t
                    ? A(t)
                    : ez(t)
                    ? ((i = y), L(t))
                    : (e.consume(t), y);
                }
                function x(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), v)
                    : ez(t)
                    ? ((i = x), L(t))
                    : (e.consume(t), x);
                }
                function v(e) {
                  return 62 === e ? A(e) : x(e);
                }
                function k(t) {
                  return eE(t) ? (e.consume(t), b) : n(t);
                }
                function b(t) {
                  return 45 === t || eP(t)
                    ? (e.consume(t), b)
                    : (function t(n) {
                        return ez(n)
                          ? ((i = t), L(n))
                          : eN(n)
                          ? (e.consume(n), t)
                          : A(n);
                      })(t);
                }
                function S(t) {
                  return 45 === t || eP(t)
                    ? (e.consume(t), S)
                    : 47 === t || 62 === t || eM(t)
                    ? w(t)
                    : n(t);
                }
                function w(t) {
                  return 47 === t
                    ? (e.consume(t), A)
                    : 58 === t || 95 === t || eE(t)
                    ? (e.consume(t), C)
                    : ez(t)
                    ? ((i = w), L(t))
                    : eN(t)
                    ? (e.consume(t), w)
                    : A(t);
                }
                function C(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || eP(t)
                    ? (e.consume(t), C)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), I)
                          : ez(n)
                          ? ((i = t), L(n))
                          : eN(n)
                          ? (e.consume(n), t)
                          : w(n);
                      })(t);
                }
                function I(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), E)
                    : ez(t)
                    ? ((i = I), L(t))
                    : eN(t)
                    ? (e.consume(t), I)
                    : (e.consume(t), P);
                }
                function E(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), T)
                    : null === t
                    ? n(t)
                    : ez(t)
                    ? ((i = E), L(t))
                    : (e.consume(t), E);
                }
                function P(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || eM(t)
                    ? w(t)
                    : (e.consume(t), P);
                }
                function T(e) {
                  return 47 === e || 62 === e || eM(e) ? w(e) : n(e);
                }
                function A(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function L(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    D
                  );
                }
                function D(t) {
                  return eN(t)
                    ? ej(
                        e,
                        O,
                        "linePrefix",
                        o.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : O(t);
                }
                function O(t) {
                  return e.enter("htmlTextData"), i(t);
                }
              },
            },
          ],
          91: tw,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return ez(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
                }
              },
            },
            tp,
          ],
          93: tm,
          95: tb,
          96: {
            name: "codeText",
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                l = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[l][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = l; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[l][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (l += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = l - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            tokenize: function (e, t, n) {
              let r,
                l,
                i = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), i++, t)
                      : (e.exit("codeTextSequence"), o(n));
                  })(t)
                );
              };
              function o(u) {
                return null === u
                  ? n(u)
                  : 32 === u
                  ? (e.enter("space"), e.consume(u), e.exit("space"), o)
                  : 96 === u
                  ? ((l = e.enter("codeTextSequence")),
                    (r = 0),
                    (function n(o) {
                      return 96 === o
                        ? (e.consume(o), r++, n)
                        : r === i
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o))
                        : ((l.type = "codeTextData"), a(o));
                    })(u))
                  : ez(u)
                  ? (e.enter("lineEnding"),
                    e.consume(u),
                    e.exit("lineEnding"),
                    o)
                  : (e.enter("codeTextData"), a(u));
              }
              function a(t) {
                return null === t || 32 === t || 96 === t || ez(t)
                  ? (e.exit("codeTextData"), o(t))
                  : (e.consume(t), a);
              }
            },
          },
        },
        tL = { null: [tb, eK] },
        tD = { null: [42, 95] },
        tO = { null: [] },
        tz = /[\0\t\n\r]/g;
      function tM(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let tN =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tF(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return tM(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return tc(n) || e;
      }
      let tR = {}.hasOwnProperty;
      function t_(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function tj(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              X({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              X({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            X({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function tB(e) {
        let t = this;
        t.parser = function (n) {
          var r, i;
          let o, a, u, s;
          return (
            "string" !=
              typeof (r = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((i = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: s,
                  autolinkEmail: s,
                  atxHeading: r(d),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: s,
                  characterReference: s,
                  codeFenced: r(h),
                  codeFencedFenceInfo: l,
                  codeFencedFenceMeta: l,
                  codeIndented: r(h, l),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, l),
                  codeTextData: s,
                  data: s,
                  codeFlowValue: s,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: l,
                  definitionLabelString: l,
                  definitionTitleString: l,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(m),
                  hardBreakTrailing: r(m),
                  htmlFlow: r(g, l),
                  htmlFlowData: s,
                  htmlText: r(g, l),
                  htmlTextData: s,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: l,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(x, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(x),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: l,
                  resourceDestinationString: l,
                  resourceTitleString: l,
                  setextHeading: r(d),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: o(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: o(),
                  autolinkEmail: function (e) {
                    c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: o(),
                  characterEscapeValue: c,
                  characterReferenceMarkerHexadecimal: p,
                  characterReferenceMarkerNumeric: p,
                  characterReferenceValue: function (e) {
                    let t;
                    let n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = tM(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = tc(n));
                    let l = this.stack[this.stack.length - 1];
                    l.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = t_(e.end);
                  },
                  codeFenced: o(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: c,
                  codeIndented: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: c,
                  data: c,
                  definition: o(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = e7(this.sliceSerialize(e)).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: o(),
                  hardBreakEscape: o(f),
                  hardBreakTrailing: o(f),
                  htmlFlow: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: c,
                  htmlText: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: c,
                  image: o(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if (((this.data.inReference = !0), "link" === n.type)) {
                      let t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = t.replace(tN, tF)),
                      (n.identifier = e7(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (n.children[n.children.length - 1].position.end = t_(
                        e.end
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (s.call(this, e), c.call(this, e));
                  },
                  link: o(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: o(),
                  listOrdered: o(),
                  listUnordered: o(),
                  paragraph: o(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = e7(this.sliceSerialize(e)).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: o(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: o(),
                  thematicBreak: o(),
                },
              };
              (function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let l = n[r];
                  Array.isArray(l)
                    ? e(t, l)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (tR.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, l);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  o = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: i,
                    exit: a,
                    buffer: l,
                    resume: u,
                    data: n,
                  },
                  s = [],
                  c = -1;
                for (; ++c < e.length; )
                  ("listOrdered" === e[c][1].type ||
                    "listUnordered" === e[c][1].type) &&
                    ("enter" === e[c][0]
                      ? s.push(c)
                      : (c = (function (e, t, n) {
                          let r,
                            l,
                            i,
                            o,
                            a = t - 1,
                            u = -1,
                            s = !1;
                          for (; ++a <= n; ) {
                            let t = e[a];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === t[0] ? u++ : u--, (o = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || o || u || i || (i = a), (o = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                o = void 0;
                            }
                            if (
                              (!u &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === u &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let o = a;
                                for (l = void 0; o--; ) {
                                  let t = e[o];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    l &&
                                      ((e[l][1].type = "lineEndingBlank"),
                                      (s = !0)),
                                      (t[1].type = "lineEnding"),
                                      (l = o);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                i && (!l || i < l) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    l ? e[l][1].start : t[1].end
                                  )),
                                  e.splice(l || a, 0, ["exit", r, t[2]]),
                                  a++,
                                  n++;
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let l = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                (r = l),
                                  e.splice(a, 0, ["enter", l, t[2]]),
                                  a++,
                                  n++,
                                  (i = void 0),
                                  (o = !0);
                              }
                            }
                          }
                          return (e[t][1]._spread = s), n;
                        })(e, s.pop(), c)));
                for (c = -1; ++c < e.length; ) {
                  let n = t[e[c][0]];
                  tR.call(n, e[c][1].type) &&
                    n[e[c][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[c][2].sliceSerialize },
                        o
                      ),
                      e[c][1]
                    );
                }
                if (o.tokenStack.length > 0) {
                  let e = o.tokenStack[o.tokenStack.length - 1];
                  (e[1] || tj).call(o, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: t_(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: t_(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    c = -1;
                  ++c < t.transforms.length;

                )
                  r = t.transforms[c](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  i.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function l() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function i(e, t, n) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n || void 0]),
                  (e.position = { start: t_(t.start), end: void 0 });
              }
              function o(e) {
                return function (t) {
                  e && e.call(this, t), a.call(this, t);
                };
              }
              function a(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || tj).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      X({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                n.position.end = t_(e.end);
              }
              function u() {
                return ex(
                  this.stack.pop(),
                  "boolean" != typeof ey.includeImageAlt || ey.includeImageAlt,
                  "boolean" != typeof ey.includeHtml || ey.includeHtml
                );
              }
              function s(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: t_(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n);
              }
              function c(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = t_(e.end));
              }
              function f() {
                this.data.atHardBreak = !0;
              }
              function p(e) {
                this.data.characterReferenceType = e.type;
              }
              function h() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function d() {
                return { type: "heading", depth: 0, children: [] };
              }
              function m() {
                return { type: "break" };
              }
              function g() {
                return { type: "html", value: "" };
              }
              function y() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function x(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(i)(
              (function (e) {
                for (; !eC(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    constructs: (function (e) {
                      let t = {},
                        n = -1;
                      for (; ++n < e.length; )
                        (function (e, t) {
                          let n;
                          for (n in t) {
                            let r;
                            let l =
                                (eI.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                              i = t[n];
                            if (i)
                              for (r in i) {
                                eI.call(l, r) || (l[r] = []);
                                let e = i[r];
                                (function (e, t) {
                                  let n = -1,
                                    r = [];
                                  for (; ++n < t.length; )
                                    ("after" === t[n].add ? e : r).push(t[n]);
                                  ek(e, 0, 0, r);
                                })(l[r], Array.isArray(e) ? e : e ? [e] : []);
                              }
                          }
                        })(t, e[n]);
                      return t;
                    })([l, ...((e || {}).extensions || [])]),
                    content: n(eB),
                    defined: [],
                    document: n(eH),
                    flow: n(eY),
                    lazy: {},
                    string: n(eQ),
                    text: n(eX),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = {
                            _bufferIndex: -1,
                            _index: 0,
                            line: (n && n.line) || 1,
                            column: (n && n.column) || 1,
                            offset: (n && n.offset) || 0,
                          },
                          l = {},
                          i = [],
                          o = [],
                          a = [],
                          u = {
                            attempt: d(function (e, t) {
                              m(e, t.from);
                            }),
                            check: d(h),
                            consume: function (e) {
                              ez(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  g())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === o[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (s.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = p()),
                                s.events.push(["enter", n, s]),
                                a.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = a.pop();
                              return (
                                (t.end = p()), s.events.push(["exit", t, s]), t
                              );
                            },
                            interrupt: d(h, { interrupt: !0 }),
                          },
                          s = {
                            code: null,
                            containerState: {},
                            defineSkip: function (e) {
                              (l[e.line] = e.column), g();
                            },
                            events: [],
                            now: p,
                            parser: e,
                            previous: null,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  l = [];
                                for (; ++r < e.length; ) {
                                  let i;
                                  let o = e[r];
                                  if ("string" == typeof o) i = o;
                                  else
                                    switch (o) {
                                      case -5:
                                        i = "\r";
                                        break;
                                      case -4:
                                        i = "\n";
                                        break;
                                      case -3:
                                        i = "\r\n";
                                        break;
                                      case -2:
                                        i = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        i = " ";
                                        break;
                                      default:
                                        i = String.fromCharCode(o);
                                    }
                                  (n = -2 === o), l.push(i);
                                }
                                return l.join("");
                              })(f(e), t);
                            },
                            sliceStream: f,
                            write: function (e) {
                              return ((o = eb(o, e)),
                              (function () {
                                let e;
                                for (; r._index < o.length; ) {
                                  let n = o[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (c = c(t));
                                    }
                                  else c = c(n);
                                }
                              })(),
                              null !== o[o.length - 1])
                                ? []
                                : (m(t, 0),
                                  (s.events = td(i, s.events, s)),
                                  s.events);
                            },
                          },
                          c = t.tokenize.call(s, u);
                        return t.resolveAll && i.push(t), s;
                        function f(e) {
                          return (function (e, t) {
                            let n;
                            let r = t.start._index,
                              l = t.start._bufferIndex,
                              i = t.end._index,
                              o = t.end._bufferIndex;
                            if (r === i) n = [e[r].slice(l, o)];
                            else {
                              if (((n = e.slice(r, i)), l > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(l))
                                  : n.shift();
                              }
                              o > 0 && n.push(e[i].slice(0, o));
                            }
                            return n;
                          })(o, e);
                        }
                        function p() {
                          let {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: l,
                            offset: i,
                          } = r;
                          return {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: l,
                            offset: i,
                          };
                        }
                        function h(e, t) {
                          t.restore();
                        }
                        function d(e, t) {
                          return function (n, l, i) {
                            let o, c, f, h;
                            return Array.isArray(n)
                              ? d(n)
                              : "tokenize" in n
                              ? d([n])
                              : function (e) {
                                  let t = null !== e && n[e],
                                    r = null !== e && n.null;
                                  return d([
                                    ...(Array.isArray(t) ? t : t ? [t] : []),
                                    ...(Array.isArray(r) ? r : r ? [r] : []),
                                  ])(e);
                                };
                            function d(e) {
                              return ((o = e), (c = 0), 0 === e.length)
                                ? i
                                : m(e[c]);
                            }
                            function m(e) {
                              return function (n) {
                                return ((h = (function () {
                                  let e = p(),
                                    t = s.previous,
                                    n = s.currentConstruct,
                                    l = s.events.length,
                                    i = Array.from(a);
                                  return {
                                    from: l,
                                    restore: function () {
                                      (r = e),
                                        (s.previous = t),
                                        (s.currentConstruct = n),
                                        (s.events.length = l),
                                        (a = i),
                                        g();
                                    },
                                  };
                                })()),
                                (f = e),
                                e.partial || (s.currentConstruct = e),
                                e.name &&
                                  s.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? x(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(s), t)
                                        : s,
                                      u,
                                      y,
                                      x
                                    )(n);
                              };
                            }
                            function y(t) {
                              return e(f, h), l;
                            }
                            function x(e) {
                              return (h.restore(), ++c < o.length)
                                ? m(o[c])
                                : i;
                            }
                          };
                        }
                        function m(e, t) {
                          e.resolveAll && !i.includes(e) && i.push(e),
                            e.resolve &&
                              ek(
                                s.events,
                                t,
                                s.events.length - t,
                                e.resolve(s.events.slice(t), s)
                              ),
                            e.resolveTo &&
                              (s.events = e.resolveTo(s.events, s));
                        }
                        function g() {
                          r.line in l &&
                            r.column < 2 &&
                            ((r.column = l[r.line]),
                            (r.offset += l[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(i)
                  .document()
                  .write(
                    ((a = 1),
                    (u = ""),
                    (s = !0),
                    function (e, t, n) {
                      let r, l, i, c, f;
                      let p = [];
                      for (
                        e =
                          u +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          i = 0,
                          u = "",
                          s && (65279 === e.charCodeAt(0) && i++, (s = void 0));
                        i < e.length;

                      ) {
                        if (
                          ((tz.lastIndex = i),
                          (c =
                            (r = tz.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (f = e.charCodeAt(c)),
                          !r)
                        ) {
                          u = e.slice(i);
                          break;
                        }
                        if (10 === f && i === c && o) p.push(-3), (o = void 0);
                        else
                          switch (
                            (o && (p.push(-5), (o = void 0)),
                            i < c && (p.push(e.slice(i, c)), (a += c - i)),
                            f)
                          ) {
                            case 0:
                              p.push(65533), a++;
                              break;
                            case 9:
                              for (
                                l = 4 * Math.ceil(a / 4), p.push(-2);
                                a++ < l;

                              )
                                p.push(-1);
                              break;
                            case 10:
                              p.push(-4), (a = 1);
                              break;
                            default:
                              (o = !0), (a = 1);
                          }
                        i = c + 1;
                      }
                      return (
                        n && (o && p.push(-5), u && p.push(u), p.push(null)), p
                      );
                    })(n, r, !0)
                  )
              )
            )
          );
        };
      }
      let tH = "object" == typeof self ? self : globalThis,
        tU = (e, t) => {
          let n = (t, n) => (e.set(n, t), t),
            r = (l) => {
              if (e.has(l)) return e.get(l);
              let [i, o] = t[l];
              switch (i) {
                case 0:
                case -1:
                  return n(o, l);
                case 1: {
                  let e = n([], l);
                  for (let t of o) e.push(r(t));
                  return e;
                }
                case 2: {
                  let e = n({}, l);
                  for (let [t, n] of o) e[r(t)] = r(n);
                  return e;
                }
                case 3:
                  return n(new Date(o), l);
                case 4: {
                  let { source: e, flags: t } = o;
                  return n(new RegExp(e, t), l);
                }
                case 5: {
                  let e = n(new Map(), l);
                  for (let [t, n] of o) e.set(r(t), r(n));
                  return e;
                }
                case 6: {
                  let e = n(new Set(), l);
                  for (let t of o) e.add(r(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = o;
                  return n(new tH[e](t), l);
                }
                case 8:
                  return n(BigInt(o), l);
                case "BigInt":
                  return n(Object(BigInt(o)), l);
              }
              return n(new tH[i](o), l);
            };
          return r;
        },
        tV = (e) => tU(new Map(), e)(0),
        { toString: tq } = {},
        { keys: tW } = Object,
        tY = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = tq.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        tK = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        tQ = (e, t, n, r) => {
          let l = (e, t) => {
              let l = r.push(e) - 1;
              return n.set(t, l), l;
            },
            i = (r) => {
              if (n.has(r)) return n.get(r);
              let [o, a] = tY(r);
              switch (o) {
                case 0: {
                  let t = r;
                  switch (a) {
                    case "bigint":
                      (o = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + a);
                      t = null;
                      break;
                    case "undefined":
                      return l([-1], r);
                  }
                  return l([o, t], r);
                }
                case 1: {
                  if (a) return l([a, [...r]], r);
                  let e = [],
                    t = l([o, e], r);
                  for (let t of r) e.push(i(t));
                  return t;
                }
                case 2: {
                  if (a)
                    switch (a) {
                      case "BigInt":
                        return l([a, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return l([a, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return i(r.toJSON());
                  let n = [],
                    u = l([o, n], r);
                  for (let t of tW(r))
                    (e || !tK(tY(r[t]))) && n.push([i(t), i(r[t])]);
                  return u;
                }
                case 3:
                  return l([o, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return l([o, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = l([o, t], r);
                  for (let [n, l] of r)
                    (e || !(tK(tY(n)) || tK(tY(l)))) && t.push([i(n), i(l)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = l([o, t], r);
                  for (let n of r) (e || !tK(tY(n))) && t.push(i(n));
                  return n;
                }
              }
              let { message: u } = r;
              return l([o, { name: a, message: u }], r);
            };
          return i;
        },
        tX = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return tQ(!(t || n), !!t, new Map(), r)(e), r;
        };
      var t$ =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? tV(tX(e, t))
                : structuredClone(e)
          : (e, t) => tV(tX(e, t));
      function tJ(e) {
        let t = [],
          n = -1,
          r = 0,
          l = 0;
        for (; ++n < e.length; ) {
          let i = e.charCodeAt(n),
            o = "";
          if (37 === i && eP(e.charCodeAt(n + 1)) && eP(e.charCodeAt(n + 2)))
            l = 2;
          else if (i < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
              (o = String.fromCharCode(i));
          else if (i > 55295 && i < 57344) {
            let t = e.charCodeAt(n + 1);
            i < 56320 && t > 56319 && t < 57344
              ? ((o = String.fromCharCode(i, t)), (l = 1))
              : (o = "�");
          } else o = String.fromCharCode(i);
          o &&
            (t.push(e.slice(r, n), encodeURIComponent(o)),
            (r = n + l + 1),
            (o = "")),
            l && ((n += l), (l = 0));
        }
        return t.join("") + e.slice(r);
      }
      function tZ(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function tG(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      let t1 = function (e) {
        if (null == e) return t2;
        if ("function" == typeof e) return t0(e);
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = t1(e[n]);
                return t0(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : t0(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("string" == typeof e)
          return t0(function (t) {
            return t && t.type === e;
          });
        throw Error("Expected function, string, or object as test");
      };
      function t0(e) {
        return function (t, n, r) {
          var l;
          return !!(
            null !== (l = t) &&
            "object" == typeof l &&
            "type" in l &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function t2() {
        return !0;
      }
      let t4 = [];
      function t3(e, t, n, r) {
        let l, i, o;
        "function" == typeof t && "function" != typeof n
          ? ((i = void 0), (o = t), (l = n))
          : ((i = t), (o = n), (l = r)),
          (function (e, t, n, r) {
            let l;
            "function" == typeof t && "function" != typeof n
              ? ((r = n), (n = t))
              : (l = t);
            let i = t1(l),
              o = r ? -1 : 1;
            (function e(l, a, u) {
              let s = l && "object" == typeof l ? l : {};
              if ("string" == typeof s.type) {
                let e =
                  "string" == typeof s.tagName
                    ? s.tagName
                    : "string" == typeof s.name
                    ? s.name
                    : void 0;
                Object.defineProperty(c, "name", {
                  value: "node (" + l.type + (e ? "<" + e + ">" : "") + ")",
                });
              }
              return c;
              function c() {
                var s;
                let c,
                  f,
                  p,
                  h = t4;
                if (
                  (!t || i(l, a, u[u.length - 1] || void 0)) &&
                  !1 ===
                    (h = Array.isArray((s = n(l, u)))
                      ? s
                      : "number" == typeof s
                      ? [!0, s]
                      : null == s
                      ? t4
                      : [s])[0]
                )
                  return h;
                if (
                  "children" in l &&
                  l.children &&
                  l.children &&
                  "skip" !== h[0]
                )
                  for (
                    f = (r ? l.children.length : -1) + o, p = u.concat(l);
                    f > -1 && f < l.children.length;

                  ) {
                    if (!1 === (c = e(l.children[f], f, p)())[0]) return c;
                    f = "number" == typeof c[1] ? c[1] : f + o;
                  }
                return h;
              }
            })(e, void 0, [])();
          })(
            e,
            i,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return o(e, r, n);
            },
            l
          );
      }
      function t5(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let l = e.all(t),
          i = l[0];
        i && "text" === i.type
          ? (i.value = "[" + i.value)
          : l.unshift({ type: "text", value: "[" });
        let o = l[l.length - 1];
        return (
          o && "text" === o.type
            ? (o.value += r)
            : l.push({ type: "text", value: r }),
          l
        );
      }
      function t6(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function t9(e, t, n) {
        let r = 0,
          l = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(l - 1);
          for (; 9 === t || 32 === t; ) l--, (t = e.codePointAt(l - 1));
        }
        return l > r ? e.slice(r, l) : "";
      }
      let t7 = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let l = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (l.data = { meta: t.meta }),
            e.patch(t, l),
            (l = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(l = e.applyData(t, l))],
            }),
            e.patch(t, l),
            l
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n;
          let r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            l = String(t.identifier).toUpperCase(),
            i = tJ(l.toLowerCase()),
            o = e.footnoteOrder.indexOf(l),
            a = e.footnoteCounts.get(l);
          void 0 === a
            ? ((a = 0), e.footnoteOrder.push(l), (n = e.footnoteOrder.length))
            : (n = o + 1),
            (a += 1),
            e.footnoteCounts.set(l, a);
          let u = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + i,
              id: r + "fnref-" + i + (a > 1 ? "-" + a : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, u);
          let s = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [u],
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t5(e, t);
          let l = { src: tJ(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (l.title = r.title);
          let i = {
            type: "element",
            tagName: "img",
            properties: l,
            children: [],
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        image: function (e, t) {
          let n = { src: tJ(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t5(e, t);
          let l = { href: tJ(r.url || "") };
          null !== r.title && void 0 !== r.title && (l.title = r.title);
          let i = {
            type: "element",
            tagName: "a",
            properties: l,
            children: e.all(t),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        link: function (e, t) {
          let n = { href: tJ(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            l = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = t6(n[r]);
                  }
                  return t;
                })(n)
              : t6(t),
            i = {},
            o = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (i.className = ["task-list-item"]);
          }
          let a = -1;
          for (; ++a < r.length; ) {
            let e = r[a];
            (l || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
              o.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || l
                ? o.push(e)
                : o.push(...e.children);
          }
          let u = r[r.length - 1];
          u &&
            (l || "element" !== u.type || "p" !== u.tagName) &&
            o.push({ type: "text", value: "\n" });
          let s = {
            type: "element",
            tagName: "li",
            properties: i,
            children: o,
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            l = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++l < r.length;

          ) {
            let e = r[l];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let i = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            l = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), l.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              i = K(t.children[1]),
              o = Y(t.children[t.children.length - 1]);
            i && o && (r.position = { start: i, end: o }), l.push(r);
          }
          let i = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(l, !0),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            l = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            i = n && "table" === n.type ? n.align : void 0,
            o = i ? i.length : t.children.length,
            a = -1,
            u = [];
          for (; ++a < o; ) {
            let n = t.children[a],
              r = {},
              o = i ? i[a] : void 0;
            o && (r.align = o);
            let s = {
              type: "element",
              tagName: l,
              properties: r,
              children: [],
            };
            n &&
              ((s.children = e.all(n)), e.patch(n, s), (s = e.applyData(n, s))),
              u.push(s);
          }
          let s = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(u, !0),
          };
          return e.patch(t, s), e.applyData(t, s);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                l = 0,
                i = [];
              for (; r; )
                i.push(t9(t.slice(l, r.index), l > 0, !0), r[0]),
                  (l = r.index + r[0].length),
                  (r = n.exec(t));
              return i.push(t9(t.slice(l), l > 0, !1)), i.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: t8,
        yaml: t8,
        definition: t8,
        footnoteDefinition: t8,
      };
      function t8() {}
      let ne = {}.hasOwnProperty,
        nt = {};
      function nn(e, t) {
        e.position &&
          (t.position = (function (e) {
            let t = K(e),
              n = Y(e);
            if (t && n) return { start: t, end: n };
          })(e));
      }
      function nr(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            l = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type && l && Object.assign(n.properties, t$(l)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function nl(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function ni(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function no(e, t) {
        let n = (function (e, t) {
            let n = t || nt,
              r = new Map(),
              l = new Map(),
              i = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let l = i.one(n[r], e);
                      if (l) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(l) ||
                            "text" !== l.type ||
                            (l.value = ni(l.value)),
                          !Array.isArray(l) && "element" === l.type)
                        ) {
                          let e = l.children[0];
                          e && "text" === e.type && (e.value = ni(e.value));
                        }
                        Array.isArray(l) ? t.push(...l) : t.push(l);
                      }
                    }
                  }
                  return t;
                },
                applyData: nr,
                definitionById: r,
                footnoteById: l,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...t7, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = i.handlers[n];
                  if (ne.call(i.handlers, n) && r) return r(i, e, t);
                  if (
                    i.options.passThrough &&
                    i.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = t$(n);
                      return (r.children = i.all(e)), r;
                    }
                    return t$(e);
                  }
                  return (
                    i.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(
                            ne.call(n, "hProperties") || ne.call(n, "hChildren")
                          )
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return e.patch(t, r), e.applyData(t, r);
                    }
                  )(i, e, t);
                },
                options: n,
                patch: nn,
                wrap: nl,
              };
            return (
              t3(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : l,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              i
            );
          })(e, t),
          r = n.one(e, void 0),
          l = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || tZ,
              r = e.options.footnoteBackLabel || tG,
              l = e.options.footnoteLabel || "Footnotes",
              i = e.options.footnoteLabelTagName || "h2",
              o = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              a = [],
              u = -1;
            for (; ++u < e.footnoteOrder.length; ) {
              let l = e.footnoteById.get(e.footnoteOrder[u]);
              if (!l) continue;
              let i = e.all(l),
                o = String(l.identifier).toUpperCase(),
                s = tJ(o.toLowerCase()),
                c = 0,
                f = [],
                p = e.footnoteCounts.get(o);
              for (; void 0 !== p && ++c <= p; ) {
                f.length > 0 && f.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(u, c);
                "string" == typeof e && (e = { type: "text", value: e }),
                  f.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + s + (c > 1 ? "-" + c : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(u, c),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let h = i[i.length - 1];
              if (h && "element" === h.type && "p" === h.tagName) {
                let e = h.children[h.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : h.children.push({ type: "text", value: " " }),
                  h.children.push(...f);
              } else i.push(...f);
              let d = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + s },
                children: e.wrap(i, !0),
              };
              e.patch(l, d), a.push(d);
            }
            if (0 !== a.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: i,
                    properties: { ...t$(o), id: "footnote-label" },
                    children: [{ type: "text", value: l }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(a, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          i = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return l && i.children.push({ type: "text", value: "\n" }, l), i;
      }
      function na(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let l = no(n, { file: r, ...t });
              await e.run(l, r);
            }
          : function (n, r) {
              return no(n, { file: r, ...(e || t) });
            };
      }
      function nu(e) {
        if (e) throw e;
      }
      var ns = n(94470);
      function nc(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let nf = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          np(e);
          let r = 0,
            l = -1,
            i = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; i--; )
              if (47 === e.codePointAt(i)) {
                if (n) {
                  r = i + 1;
                  break;
                }
              } else l < 0 && ((n = !0), (l = i + 1));
            return l < 0 ? "" : e.slice(r, l);
          }
          if (t === e) return "";
          let o = -1,
            a = t.length - 1;
          for (; i--; )
            if (47 === e.codePointAt(i)) {
              if (n) {
                r = i + 1;
                break;
              }
            } else
              o < 0 && ((n = !0), (o = i + 1)),
                a > -1 &&
                  (e.codePointAt(i) === t.codePointAt(a--)
                    ? a < 0 && (l = i)
                    : ((a = -1), (l = o)));
          return r === l ? (l = o) : l < 0 && (l = e.length), e.slice(r, l);
        },
        dirname: function (e) {
          let t;
          if ((np(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          np(e);
          let n = e.length,
            r = -1,
            l = 0,
            i = -1,
            o = 0;
          for (; n--; ) {
            let a = e.codePointAt(n);
            if (47 === a) {
              if (t) {
                l = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === a
                ? i < 0
                  ? (i = n)
                  : 1 !== o && (o = 1)
                : i > -1 && (o = -1);
          }
          return i < 0 ||
            r < 0 ||
            0 === o ||
            (1 === o && i === r - 1 && i === l + 1)
            ? ""
            : e.slice(i, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            np(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                np(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      l = "",
                      i = 0,
                      o = -1,
                      a = 0,
                      u = -1;
                    for (; ++u <= e.length; ) {
                      if (u < e.length) n = e.codePointAt(u);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (o === u - 1 || 1 === a);
                        else if (o !== u - 1 && 2 === a) {
                          if (
                            l.length < 2 ||
                            2 !== i ||
                            46 !== l.codePointAt(l.length - 1) ||
                            46 !== l.codePointAt(l.length - 2)
                          ) {
                            if (l.length > 2) {
                              if ((r = l.lastIndexOf("/")) !== l.length - 1) {
                                r < 0
                                  ? ((l = ""), (i = 0))
                                  : (i =
                                      (l = l.slice(0, r)).length -
                                      1 -
                                      l.lastIndexOf("/")),
                                  (o = u),
                                  (a = 0);
                                continue;
                              }
                            } else if (l.length > 0) {
                              (l = ""), (i = 0), (o = u), (a = 0);
                              continue;
                            }
                          }
                          t && ((l = l.length > 0 ? l + "/.." : ".."), (i = 2));
                        } else
                          l.length > 0
                            ? (l += "/" + e.slice(o + 1, u))
                            : (l = e.slice(o + 1, u)),
                            (i = u - o - 1);
                        (o = u), (a = 0);
                      } else 46 === n && a > -1 ? a++ : (a = -1);
                    }
                    return l;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function np(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      let nh = {
        cwd: function () {
          return "/";
        },
      };
      function nd(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let nm = ["history", "path", "basename", "stem", "extname", "dirname"];
      class ng {
        constructor(e) {
          let t, n;
          (t = e
            ? nd(e)
              ? { path: e }
              : "string" == typeof e ||
                (e &&
                  "object" == typeof e &&
                  "byteLength" in e &&
                  "byteOffset" in e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "cwd" in t ? "" : nh.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < nm.length; ) {
            let e = nm[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) nm.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? nf.basename(this.path) : void 0;
        }
        set basename(e) {
          nx(e, "basename"),
            ny(e, "basename"),
            (this.path = nf.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? nf.dirname(this.path) : void 0;
        }
        set dirname(e) {
          nv(this.basename, "dirname"),
            (this.path = nf.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? nf.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((ny(e, "extname"), nv(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = nf.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          nd(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!nd(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            nx(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? nf.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          nx(e, "stem"),
            ny(e, "stem"),
            (this.path = nf.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new G(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
            ? this.value
            : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function ny(e, t) {
        if (e && e.includes(nf.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + nf.sep + "`"
          );
      }
      function nx(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function nv(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let nk = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return Object.setPrototypeOf(r, t), r;
        },
        nb = {}.hasOwnProperty;
      class nS extends nk {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    (function l(i, ...o) {
                      let a = e[++n],
                        u = -1;
                      if (i) {
                        r(i);
                        return;
                      }
                      for (; ++u < t.length; )
                        (null === o[u] || void 0 === o[u]) && (o[u] = t[u]);
                      (t = o),
                        a
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let i;
                                let o = e.length > t.length;
                                o && t.push(r);
                                try {
                                  i = e.apply(this, t);
                                } catch (e) {
                                  if (o && n) throw e;
                                  return r(e);
                                }
                                o ||
                                  (i && i.then && "function" == typeof i.then
                                    ? i.then(l, r)
                                    : i instanceof Error
                                    ? r(i)
                                    : l(i));
                              };
                              function r(e, ...l) {
                                n || ((n = !0), t(e, ...l));
                              }
                              function l(e) {
                                r(null, e);
                              }
                            })(
                              a,
                              l
                            )(...o)
                          : r(null, ...o);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new nS(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(ns(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (nE("data", this.frozen), (this.namespace[e] = t), this)
              : (nb.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (nE("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = nA(e),
            n = this.parser || this.Parser;
          return nC("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            nC("process", this.parser || this.Parser),
            nI("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, l) {
            let i = nA(e),
              o = n.parse(i);
            function a(e, n) {
              e || !n ? l(e) : r ? r(n) : t(void 0, n);
            }
            n.run(o, i, function (e, t, r) {
              if (e || !t || !r) return a(e);
              let l = n.stringify(t, r);
              "string" == typeof l ||
              (l &&
                "object" == typeof l &&
                "byteLength" in l &&
                "byteOffset" in l)
                ? (r.value = l)
                : (r.result = l),
                a(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            nC("processSync", this.parser || this.Parser),
            nI("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), nu(e), (t = r);
            }),
            nT("processSync", "process", n),
            t
          );
        }
        run(e, t, n) {
          nP(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? l(void 0, n) : new Promise(l)
          );
          function l(l, i) {
            let o = nA(t);
            r.run(e, o, function (t, r, o) {
              let a = r || e;
              t ? i(t) : l ? l(a) : n(void 0, a, o);
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              nu(e), (n = t), (r = !0);
            }),
            nT("runSync", "run", r),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = nA(t),
            r = this.compiler || this.Compiler;
          return nI("stringify", r), nP(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((nE("use", this.frozen), null == e));
          else if ("function" == typeof e) o(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? i(e) : l(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function l(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            i(e.plugins),
              e.settings && (r.settings = ns(!0, r.settings, e.settings));
          }
          function i(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ("function" == typeof e) o(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      o(t, n);
                    } else l(e);
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(e[t]);
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function o(e, t) {
            let r = -1,
              l = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                l = r;
                break;
              }
            if (-1 === l) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...i] = t,
                o = n[l][1];
              nc(o) && nc(r) && (r = ns(!0, o, r)), (n[l] = [e, r, ...i]);
            }
          }
        }
      }
      let nw = new nS().freeze();
      function nC(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function nI(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function nE(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function nP(e) {
        if (!nc(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function nT(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function nA(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new ng(e);
      }
      let nL = [],
        nD = { allowDangerousHtml: !0 },
        nO = /^(https?|ircs?|mailto|xmpp)$/i,
        nz = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function nM(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          l = e.className,
          i = e.components,
          o = e.disallowedElements,
          a = e.rehypePlugins || nL,
          u = e.remarkPlugins || nL,
          s = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...nD } : nD,
          c = e.skipHtml,
          f = e.unwrapDisallowed,
          p = e.urlTransform || nN,
          h = nw().use(tB).use(u).use(na, s).use(a),
          d = new ng();
        for (let t of ("string" == typeof r && (d.value = r), nz))
          Object.hasOwn(e, t.from) && (t.from, t.to && t.to, t.id);
        let m = h.parse(d),
          g = h.runSync(m, d);
        return (
          l &&
            (g = {
              type: "element",
              tagName: "div",
              properties: { className: l },
              children: "root" === g.type ? g.children : [g],
            }),
          t3(g, function (e, r, l) {
            if ("raw" === e.type && l && "number" == typeof r)
              return (
                c
                  ? l.children.splice(r, 1)
                  : (l.children[r] = { type: "text", value: e.value }),
                r
              );
            if ("element" === e.type) {
              let t;
              for (t in em)
                if (Object.hasOwn(em, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = em[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = p(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let i = t ? !t.includes(e.tagName) : !!o && o.includes(e.tagName);
              if (
                (!i && n && "number" == typeof r && (i = !n(e, r, l)),
                i && l && "number" == typeof r)
              )
                return (
                  f && e.children
                    ? l.children.splice(r, 1, ...e.children)
                    : l.children.splice(r, 1),
                  r
                );
            }
          }),
          (function (e, t) {
            var n, r, l;
            let i;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let o = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = t.jsxDEV),
                (i = function (e, t, r, l) {
                  let i = Array.isArray(r.children),
                    a = K(e);
                  return n(
                    t,
                    r,
                    l,
                    i,
                    {
                      columnNumber: a ? a.column - 1 : void 0,
                      fileName: o,
                      lineNumber: a ? a.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (r = t.jsx),
                (l = t.jsxs),
                (i = function (e, t, n, i) {
                  let o = Array.isArray(n.children) ? l : r;
                  return i ? o(t, n, i) : o(t, n);
                });
            }
            let a = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: i,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: o,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? R : F,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              u = ea(a, e, void 0);
            return u && "string" != typeof u
              ? u
              : a.create(e, a.Fragment, { children: u || void 0 }, void 0);
          })(g, {
            Fragment: eg.Fragment,
            components: i,
            ignoreInvalidStyle: !0,
            jsx: eg.jsx,
            jsxs: eg.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function nN(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          l = e.indexOf("/");
        return t < 0 ||
          (l > -1 && t > l) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          nO.test(e.slice(0, t))
          ? e
          : "";
      }
    },
  },
]);
