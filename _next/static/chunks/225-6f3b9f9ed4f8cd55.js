(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [225],
  {
    58363: function (a, i) {
      "use strict";
      i.Z = function (a, i) {
        if (a && i) {
          var t = Array.isArray(i) ? i : i.split(",");
          if (0 === t.length) return !0;
          var n = a.name || "",
            e = (a.type || "").toLowerCase(),
            p = e.replace(/\/.*$/, "");
          return t.some(function (a) {
            var i = a.trim().toLowerCase();
            return "." === i.charAt(0)
              ? n.toLowerCase().endsWith(i)
              : i.endsWith("/*")
              ? p === i.replace(/\/.*$/, "")
              : e === i;
          });
        }
        return !0;
      };
    },
    92703: function (a, i, t) {
      "use strict";
      var n = t(50414);
      function e() {}
      function p() {}
      (p.resetWarningCache = e),
        (a.exports = function () {
          function a(a, i, t, e, p, o) {
            if (o !== n) {
              var c = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function i() {
            return a;
          }
          a.isRequired = a;
          var t = {
            array: a,
            bigint: a,
            bool: a,
            func: a,
            number: a,
            object: a,
            string: a,
            symbol: a,
            any: a,
            arrayOf: i,
            element: a,
            elementType: a,
            instanceOf: i,
            node: a,
            objectOf: i,
            oneOf: i,
            oneOfType: i,
            shape: i,
            exact: i,
            checkPropTypes: p,
            resetWarningCache: e,
          };
          return (t.PropTypes = t), t;
        });
    },
    45697: function (a, i, t) {
      a.exports = t(92703)();
    },
    50414: function (a) {
      "use strict";
      a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    44524: function (a, i, t) {
      "use strict";
      t.d(i, {
        uI: function () {
          return aa;
        },
      });
      var n = t(67294),
        e = t(45697),
        p = t.n(e),
        o = t(97582);
      let c = new Map([
        ["1km", "application/vnd.1000minds.decision-model+xml"],
        ["3dml", "text/vnd.in3d.3dml"],
        ["3ds", "image/x-3ds"],
        ["3g2", "video/3gpp2"],
        ["3gp", "video/3gp"],
        ["3gpp", "video/3gpp"],
        ["3mf", "model/3mf"],
        ["7z", "application/x-7z-compressed"],
        ["7zip", "application/x-7z-compressed"],
        ["123", "application/vnd.lotus-1-2-3"],
        ["aab", "application/x-authorware-bin"],
        ["aac", "audio/x-acc"],
        ["aam", "application/x-authorware-map"],
        ["aas", "application/x-authorware-seg"],
        ["abw", "application/x-abiword"],
        ["ac", "application/vnd.nokia.n-gage.ac+xml"],
        ["ac3", "audio/ac3"],
        ["acc", "application/vnd.americandynamics.acc"],
        ["ace", "application/x-ace-compressed"],
        ["acu", "application/vnd.acucobol"],
        ["acutc", "application/vnd.acucorp"],
        ["adp", "audio/adpcm"],
        ["aep", "application/vnd.audiograph"],
        ["afm", "application/x-font-type1"],
        ["afp", "application/vnd.ibm.modcap"],
        ["ahead", "application/vnd.ahead.space"],
        ["ai", "application/pdf"],
        ["aif", "audio/x-aiff"],
        ["aifc", "audio/x-aiff"],
        ["aiff", "audio/x-aiff"],
        ["air", "application/vnd.adobe.air-application-installer-package+zip"],
        ["ait", "application/vnd.dvb.ait"],
        ["ami", "application/vnd.amiga.ami"],
        ["amr", "audio/amr"],
        ["apk", "application/vnd.android.package-archive"],
        ["apng", "image/apng"],
        ["appcache", "text/cache-manifest"],
        ["application", "application/x-ms-application"],
        ["apr", "application/vnd.lotus-approach"],
        ["arc", "application/x-freearc"],
        ["arj", "application/x-arj"],
        ["asc", "application/pgp-signature"],
        ["asf", "video/x-ms-asf"],
        ["asm", "text/x-asm"],
        ["aso", "application/vnd.accpac.simply.aso"],
        ["asx", "video/x-ms-asf"],
        ["atc", "application/vnd.acucorp"],
        ["atom", "application/atom+xml"],
        ["atomcat", "application/atomcat+xml"],
        ["atomdeleted", "application/atomdeleted+xml"],
        ["atomsvc", "application/atomsvc+xml"],
        ["atx", "application/vnd.antix.game-component"],
        ["au", "audio/x-au"],
        ["avi", "video/x-msvideo"],
        ["avif", "image/avif"],
        ["aw", "application/applixware"],
        ["azf", "application/vnd.airzip.filesecure.azf"],
        ["azs", "application/vnd.airzip.filesecure.azs"],
        ["azv", "image/vnd.airzip.accelerator.azv"],
        ["azw", "application/vnd.amazon.ebook"],
        ["b16", "image/vnd.pco.b16"],
        ["bat", "application/x-msdownload"],
        ["bcpio", "application/x-bcpio"],
        ["bdf", "application/x-font-bdf"],
        ["bdm", "application/vnd.syncml.dm+wbxml"],
        ["bdoc", "application/x-bdoc"],
        ["bed", "application/vnd.realvnc.bed"],
        ["bh2", "application/vnd.fujitsu.oasysprs"],
        ["bin", "application/octet-stream"],
        ["blb", "application/x-blorb"],
        ["blorb", "application/x-blorb"],
        ["bmi", "application/vnd.bmi"],
        ["bmml", "application/vnd.balsamiq.bmml+xml"],
        ["bmp", "image/bmp"],
        ["book", "application/vnd.framemaker"],
        ["box", "application/vnd.previewsystems.box"],
        ["boz", "application/x-bzip2"],
        ["bpk", "application/octet-stream"],
        ["bpmn", "application/octet-stream"],
        ["bsp", "model/vnd.valve.source.compiled-map"],
        ["btif", "image/prs.btif"],
        ["buffer", "application/octet-stream"],
        ["bz", "application/x-bzip"],
        ["bz2", "application/x-bzip2"],
        ["c", "text/x-c"],
        ["c4d", "application/vnd.clonk.c4group"],
        ["c4f", "application/vnd.clonk.c4group"],
        ["c4g", "application/vnd.clonk.c4group"],
        ["c4p", "application/vnd.clonk.c4group"],
        ["c4u", "application/vnd.clonk.c4group"],
        ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
        ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
        ["cab", "application/vnd.ms-cab-compressed"],
        ["caf", "audio/x-caf"],
        ["cap", "application/vnd.tcpdump.pcap"],
        ["car", "application/vnd.curl.car"],
        ["cat", "application/vnd.ms-pki.seccat"],
        ["cb7", "application/x-cbr"],
        ["cba", "application/x-cbr"],
        ["cbr", "application/x-cbr"],
        ["cbt", "application/x-cbr"],
        ["cbz", "application/x-cbr"],
        ["cc", "text/x-c"],
        ["cco", "application/x-cocoa"],
        ["cct", "application/x-director"],
        ["ccxml", "application/ccxml+xml"],
        ["cdbcmsg", "application/vnd.contact.cmsg"],
        ["cda", "application/x-cdf"],
        ["cdf", "application/x-netcdf"],
        ["cdfx", "application/cdfx+xml"],
        ["cdkey", "application/vnd.mediastation.cdkey"],
        ["cdmia", "application/cdmi-capability"],
        ["cdmic", "application/cdmi-container"],
        ["cdmid", "application/cdmi-domain"],
        ["cdmio", "application/cdmi-object"],
        ["cdmiq", "application/cdmi-queue"],
        ["cdr", "application/cdr"],
        ["cdx", "chemical/x-cdx"],
        ["cdxml", "application/vnd.chemdraw+xml"],
        ["cdy", "application/vnd.cinderella"],
        ["cer", "application/pkix-cert"],
        ["cfs", "application/x-cfs-compressed"],
        ["cgm", "image/cgm"],
        ["chat", "application/x-chat"],
        ["chm", "application/vnd.ms-htmlhelp"],
        ["chrt", "application/vnd.kde.kchart"],
        ["cif", "chemical/x-cif"],
        ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
        ["cil", "application/vnd.ms-artgalry"],
        ["cjs", "application/node"],
        ["cla", "application/vnd.claymore"],
        ["class", "application/octet-stream"],
        ["clkk", "application/vnd.crick.clicker.keyboard"],
        ["clkp", "application/vnd.crick.clicker.palette"],
        ["clkt", "application/vnd.crick.clicker.template"],
        ["clkw", "application/vnd.crick.clicker.wordbank"],
        ["clkx", "application/vnd.crick.clicker"],
        ["clp", "application/x-msclip"],
        ["cmc", "application/vnd.cosmocaller"],
        ["cmdf", "chemical/x-cmdf"],
        ["cml", "chemical/x-cml"],
        ["cmp", "application/vnd.yellowriver-custom-menu"],
        ["cmx", "image/x-cmx"],
        ["cod", "application/vnd.rim.cod"],
        ["coffee", "text/coffeescript"],
        ["com", "application/x-msdownload"],
        ["conf", "text/plain"],
        ["cpio", "application/x-cpio"],
        ["cpp", "text/x-c"],
        ["cpt", "application/mac-compactpro"],
        ["crd", "application/x-mscardfile"],
        ["crl", "application/pkix-crl"],
        ["crt", "application/x-x509-ca-cert"],
        ["crx", "application/x-chrome-extension"],
        ["cryptonote", "application/vnd.rig.cryptonote"],
        ["csh", "application/x-csh"],
        ["csl", "application/vnd.citationstyles.style+xml"],
        ["csml", "chemical/x-csml"],
        ["csp", "application/vnd.commonspace"],
        ["csr", "application/octet-stream"],
        ["css", "text/css"],
        ["cst", "application/x-director"],
        ["csv", "text/csv"],
        ["cu", "application/cu-seeme"],
        ["curl", "text/vnd.curl"],
        ["cww", "application/prs.cww"],
        ["cxt", "application/x-director"],
        ["cxx", "text/x-c"],
        ["dae", "model/vnd.collada+xml"],
        ["daf", "application/vnd.mobius.daf"],
        ["dart", "application/vnd.dart"],
        ["dataless", "application/vnd.fdsn.seed"],
        ["davmount", "application/davmount+xml"],
        ["dbf", "application/vnd.dbf"],
        ["dbk", "application/docbook+xml"],
        ["dcr", "application/x-director"],
        ["dcurl", "text/vnd.curl.dcurl"],
        ["dd2", "application/vnd.oma.dd2+xml"],
        ["ddd", "application/vnd.fujixerox.ddd"],
        ["ddf", "application/vnd.syncml.dmddf+xml"],
        ["dds", "image/vnd.ms-dds"],
        ["deb", "application/x-debian-package"],
        ["def", "text/plain"],
        ["deploy", "application/octet-stream"],
        ["der", "application/x-x509-ca-cert"],
        ["dfac", "application/vnd.dreamfactory"],
        ["dgc", "application/x-dgc-compressed"],
        ["dic", "text/x-c"],
        ["dir", "application/x-director"],
        ["dis", "application/vnd.mobius.dis"],
        ["disposition-notification", "message/disposition-notification"],
        ["dist", "application/octet-stream"],
        ["distz", "application/octet-stream"],
        ["djv", "image/vnd.djvu"],
        ["djvu", "image/vnd.djvu"],
        ["dll", "application/octet-stream"],
        ["dmg", "application/x-apple-diskimage"],
        ["dmn", "application/octet-stream"],
        ["dmp", "application/vnd.tcpdump.pcap"],
        ["dms", "application/octet-stream"],
        ["dna", "application/vnd.dna"],
        ["doc", "application/msword"],
        ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
        [
          "docx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        ["dot", "application/msword"],
        ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
        [
          "dotx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        ],
        ["dp", "application/vnd.osgi.dp"],
        ["dpg", "application/vnd.dpgraph"],
        ["dra", "audio/vnd.dra"],
        ["drle", "image/dicom-rle"],
        ["dsc", "text/prs.lines.tag"],
        ["dssc", "application/dssc+der"],
        ["dtb", "application/x-dtbook+xml"],
        ["dtd", "application/xml-dtd"],
        ["dts", "audio/vnd.dts"],
        ["dtshd", "audio/vnd.dts.hd"],
        ["dump", "application/octet-stream"],
        ["dvb", "video/vnd.dvb.file"],
        ["dvi", "application/x-dvi"],
        ["dwd", "application/atsc-dwd+xml"],
        ["dwf", "model/vnd.dwf"],
        ["dwg", "image/vnd.dwg"],
        ["dxf", "image/vnd.dxf"],
        ["dxp", "application/vnd.spotfire.dxp"],
        ["dxr", "application/x-director"],
        ["ear", "application/java-archive"],
        ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
        ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
        ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
        ["ecma", "application/ecmascript"],
        ["edm", "application/vnd.novadigm.edm"],
        ["edx", "application/vnd.novadigm.edx"],
        ["efif", "application/vnd.picsel"],
        ["ei6", "application/vnd.pg.osasli"],
        ["elc", "application/octet-stream"],
        ["emf", "image/emf"],
        ["eml", "message/rfc822"],
        ["emma", "application/emma+xml"],
        ["emotionml", "application/emotionml+xml"],
        ["emz", "application/x-msmetafile"],
        ["eol", "audio/vnd.digital-winds"],
        ["eot", "application/vnd.ms-fontobject"],
        ["eps", "application/postscript"],
        ["epub", "application/epub+zip"],
        ["es", "application/ecmascript"],
        ["es3", "application/vnd.eszigno3+xml"],
        ["esa", "application/vnd.osgi.subsystem"],
        ["esf", "application/vnd.epson.esf"],
        ["et3", "application/vnd.eszigno3+xml"],
        ["etx", "text/x-setext"],
        ["eva", "application/x-eva"],
        ["evy", "application/x-envoy"],
        ["exe", "application/octet-stream"],
        ["exi", "application/exi"],
        ["exp", "application/express"],
        ["exr", "image/aces"],
        ["ext", "application/vnd.novadigm.ext"],
        ["ez", "application/andrew-inset"],
        ["ez2", "application/vnd.ezpix-album"],
        ["ez3", "application/vnd.ezpix-package"],
        ["f", "text/x-fortran"],
        ["f4v", "video/mp4"],
        ["f77", "text/x-fortran"],
        ["f90", "text/x-fortran"],
        ["fbs", "image/vnd.fastbidsheet"],
        ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
        ["fcs", "application/vnd.isac.fcs"],
        ["fdf", "application/vnd.fdf"],
        ["fdt", "application/fdt+xml"],
        ["fe_launch", "application/vnd.denovo.fcselayout-link"],
        ["fg5", "application/vnd.fujitsu.oasysgp"],
        ["fgd", "application/x-director"],
        ["fh", "image/x-freehand"],
        ["fh4", "image/x-freehand"],
        ["fh5", "image/x-freehand"],
        ["fh7", "image/x-freehand"],
        ["fhc", "image/x-freehand"],
        ["fig", "application/x-xfig"],
        ["fits", "image/fits"],
        ["flac", "audio/x-flac"],
        ["fli", "video/x-fli"],
        ["flo", "application/vnd.micrografx.flo"],
        ["flv", "video/x-flv"],
        ["flw", "application/vnd.kde.kivio"],
        ["flx", "text/vnd.fmi.flexstor"],
        ["fly", "text/vnd.fly"],
        ["fm", "application/vnd.framemaker"],
        ["fnc", "application/vnd.frogans.fnc"],
        ["fo", "application/vnd.software602.filler.form+xml"],
        ["for", "text/x-fortran"],
        ["fpx", "image/vnd.fpx"],
        ["frame", "application/vnd.framemaker"],
        ["fsc", "application/vnd.fsc.weblaunch"],
        ["fst", "image/vnd.fst"],
        ["ftc", "application/vnd.fluxtime.clip"],
        ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
        ["fvt", "video/vnd.fvt"],
        ["fxp", "application/vnd.adobe.fxp"],
        ["fxpl", "application/vnd.adobe.fxp"],
        ["fzs", "application/vnd.fuzzysheet"],
        ["g2w", "application/vnd.geoplan"],
        ["g3", "image/g3fax"],
        ["g3w", "application/vnd.geospace"],
        ["gac", "application/vnd.groove-account"],
        ["gam", "application/x-tads"],
        ["gbr", "application/rpki-ghostbusters"],
        ["gca", "application/x-gca-compressed"],
        ["gdl", "model/vnd.gdl"],
        ["gdoc", "application/vnd.google-apps.document"],
        ["geo", "application/vnd.dynageo"],
        ["geojson", "application/geo+json"],
        ["gex", "application/vnd.geometry-explorer"],
        ["ggb", "application/vnd.geogebra.file"],
        ["ggt", "application/vnd.geogebra.tool"],
        ["ghf", "application/vnd.groove-help"],
        ["gif", "image/gif"],
        ["gim", "application/vnd.groove-identity-message"],
        ["glb", "model/gltf-binary"],
        ["gltf", "model/gltf+json"],
        ["gml", "application/gml+xml"],
        ["gmx", "application/vnd.gmx"],
        ["gnumeric", "application/x-gnumeric"],
        ["gpg", "application/gpg-keys"],
        ["gph", "application/vnd.flographit"],
        ["gpx", "application/gpx+xml"],
        ["gqf", "application/vnd.grafeq"],
        ["gqs", "application/vnd.grafeq"],
        ["gram", "application/srgs"],
        ["gramps", "application/x-gramps-xml"],
        ["gre", "application/vnd.geometry-explorer"],
        ["grv", "application/vnd.groove-injector"],
        ["grxml", "application/srgs+xml"],
        ["gsf", "application/x-font-ghostscript"],
        ["gsheet", "application/vnd.google-apps.spreadsheet"],
        ["gslides", "application/vnd.google-apps.presentation"],
        ["gtar", "application/x-gtar"],
        ["gtm", "application/vnd.groove-tool-message"],
        ["gtw", "model/vnd.gtw"],
        ["gv", "text/vnd.graphviz"],
        ["gxf", "application/gxf"],
        ["gxt", "application/vnd.geonext"],
        ["gz", "application/gzip"],
        ["gzip", "application/gzip"],
        ["h", "text/x-c"],
        ["h261", "video/h261"],
        ["h263", "video/h263"],
        ["h264", "video/h264"],
        ["hal", "application/vnd.hal+xml"],
        ["hbci", "application/vnd.hbci"],
        ["hbs", "text/x-handlebars-template"],
        ["hdd", "application/x-virtualbox-hdd"],
        ["hdf", "application/x-hdf"],
        ["heic", "image/heic"],
        ["heics", "image/heic-sequence"],
        ["heif", "image/heif"],
        ["heifs", "image/heif-sequence"],
        ["hej2", "image/hej2k"],
        ["held", "application/atsc-held+xml"],
        ["hh", "text/x-c"],
        ["hjson", "application/hjson"],
        ["hlp", "application/winhlp"],
        ["hpgl", "application/vnd.hp-hpgl"],
        ["hpid", "application/vnd.hp-hpid"],
        ["hps", "application/vnd.hp-hps"],
        ["hqx", "application/mac-binhex40"],
        ["hsj2", "image/hsj2"],
        ["htc", "text/x-component"],
        ["htke", "application/vnd.kenameaapp"],
        ["htm", "text/html"],
        ["html", "text/html"],
        ["hvd", "application/vnd.yamaha.hv-dic"],
        ["hvp", "application/vnd.yamaha.hv-voice"],
        ["hvs", "application/vnd.yamaha.hv-script"],
        ["i2g", "application/vnd.intergeo"],
        ["icc", "application/vnd.iccprofile"],
        ["ice", "x-conference/x-cooltalk"],
        ["icm", "application/vnd.iccprofile"],
        ["ico", "image/x-icon"],
        ["ics", "text/calendar"],
        ["ief", "image/ief"],
        ["ifb", "text/calendar"],
        ["ifm", "application/vnd.shana.informed.formdata"],
        ["iges", "model/iges"],
        ["igl", "application/vnd.igloader"],
        ["igm", "application/vnd.insors.igm"],
        ["igs", "model/iges"],
        ["igx", "application/vnd.micrografx.igx"],
        ["iif", "application/vnd.shana.informed.interchange"],
        ["img", "application/octet-stream"],
        ["imp", "application/vnd.accpac.simply.imp"],
        ["ims", "application/vnd.ms-ims"],
        ["in", "text/plain"],
        ["ini", "text/plain"],
        ["ink", "application/inkml+xml"],
        ["inkml", "application/inkml+xml"],
        ["install", "application/x-install-instructions"],
        ["iota", "application/vnd.astraea-software.iota"],
        ["ipfix", "application/ipfix"],
        ["ipk", "application/vnd.shana.informed.package"],
        ["irm", "application/vnd.ibm.rights-management"],
        ["irp", "application/vnd.irepository.package+xml"],
        ["iso", "application/x-iso9660-image"],
        ["itp", "application/vnd.shana.informed.formtemplate"],
        ["its", "application/its+xml"],
        ["ivp", "application/vnd.immervision-ivp"],
        ["ivu", "application/vnd.immervision-ivu"],
        ["jad", "text/vnd.sun.j2me.app-descriptor"],
        ["jade", "text/jade"],
        ["jam", "application/vnd.jam"],
        ["jar", "application/java-archive"],
        ["jardiff", "application/x-java-archive-diff"],
        ["java", "text/x-java-source"],
        ["jhc", "image/jphc"],
        ["jisp", "application/vnd.jisp"],
        ["jls", "image/jls"],
        ["jlt", "application/vnd.hp-jlyt"],
        ["jng", "image/x-jng"],
        ["jnlp", "application/x-java-jnlp-file"],
        ["joda", "application/vnd.joost.joda-archive"],
        ["jp2", "image/jp2"],
        ["jpe", "image/jpeg"],
        ["jpeg", "image/jpeg"],
        ["jpf", "image/jpx"],
        ["jpg", "image/jpeg"],
        ["jpg2", "image/jp2"],
        ["jpgm", "video/jpm"],
        ["jpgv", "video/jpeg"],
        ["jph", "image/jph"],
        ["jpm", "video/jpm"],
        ["jpx", "image/jpx"],
        ["js", "application/javascript"],
        ["json", "application/json"],
        ["json5", "application/json5"],
        ["jsonld", "application/ld+json"],
        ["jsonl", "application/jsonl"],
        ["jsonml", "application/jsonml+json"],
        ["jsx", "text/jsx"],
        ["jxr", "image/jxr"],
        ["jxra", "image/jxra"],
        ["jxrs", "image/jxrs"],
        ["jxs", "image/jxs"],
        ["jxsc", "image/jxsc"],
        ["jxsi", "image/jxsi"],
        ["jxss", "image/jxss"],
        ["kar", "audio/midi"],
        ["karbon", "application/vnd.kde.karbon"],
        ["kdb", "application/octet-stream"],
        ["kdbx", "application/x-keepass2"],
        ["key", "application/x-iwork-keynote-sffkey"],
        ["kfo", "application/vnd.kde.kformula"],
        ["kia", "application/vnd.kidspiration"],
        ["kml", "application/vnd.google-earth.kml+xml"],
        ["kmz", "application/vnd.google-earth.kmz"],
        ["kne", "application/vnd.kinar"],
        ["knp", "application/vnd.kinar"],
        ["kon", "application/vnd.kde.kontour"],
        ["kpr", "application/vnd.kde.kpresenter"],
        ["kpt", "application/vnd.kde.kpresenter"],
        ["kpxx", "application/vnd.ds-keypoint"],
        ["ksp", "application/vnd.kde.kspread"],
        ["ktr", "application/vnd.kahootz"],
        ["ktx", "image/ktx"],
        ["ktx2", "image/ktx2"],
        ["ktz", "application/vnd.kahootz"],
        ["kwd", "application/vnd.kde.kword"],
        ["kwt", "application/vnd.kde.kword"],
        ["lasxml", "application/vnd.las.las+xml"],
        ["latex", "application/x-latex"],
        ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
        ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
        ["les", "application/vnd.hhe.lesson-player"],
        ["less", "text/less"],
        ["lgr", "application/lgr+xml"],
        ["lha", "application/octet-stream"],
        ["link66", "application/vnd.route66.link66+xml"],
        ["list", "text/plain"],
        ["list3820", "application/vnd.ibm.modcap"],
        ["listafp", "application/vnd.ibm.modcap"],
        ["litcoffee", "text/coffeescript"],
        ["lnk", "application/x-ms-shortcut"],
        ["log", "text/plain"],
        ["lostxml", "application/lost+xml"],
        ["lrf", "application/octet-stream"],
        ["lrm", "application/vnd.ms-lrm"],
        ["ltf", "application/vnd.frogans.ltf"],
        ["lua", "text/x-lua"],
        ["luac", "application/x-lua-bytecode"],
        ["lvp", "audio/vnd.lucent.voice"],
        ["lwp", "application/vnd.lotus-wordpro"],
        ["lzh", "application/octet-stream"],
        ["m1v", "video/mpeg"],
        ["m2a", "audio/mpeg"],
        ["m2v", "video/mpeg"],
        ["m3a", "audio/mpeg"],
        ["m3u", "text/plain"],
        ["m3u8", "application/vnd.apple.mpegurl"],
        ["m4a", "audio/x-m4a"],
        ["m4p", "application/mp4"],
        ["m4s", "video/iso.segment"],
        ["m4u", "application/vnd.mpegurl"],
        ["m4v", "video/x-m4v"],
        ["m13", "application/x-msmediaview"],
        ["m14", "application/x-msmediaview"],
        ["m21", "application/mp21"],
        ["ma", "application/mathematica"],
        ["mads", "application/mads+xml"],
        ["maei", "application/mmt-aei+xml"],
        ["mag", "application/vnd.ecowin.chart"],
        ["maker", "application/vnd.framemaker"],
        ["man", "text/troff"],
        ["manifest", "text/cache-manifest"],
        ["map", "application/json"],
        ["mar", "application/octet-stream"],
        ["markdown", "text/markdown"],
        ["mathml", "application/mathml+xml"],
        ["mb", "application/mathematica"],
        ["mbk", "application/vnd.mobius.mbk"],
        ["mbox", "application/mbox"],
        ["mc1", "application/vnd.medcalcdata"],
        ["mcd", "application/vnd.mcd"],
        ["mcurl", "text/vnd.curl.mcurl"],
        ["md", "text/markdown"],
        ["mdb", "application/x-msaccess"],
        ["mdi", "image/vnd.ms-modi"],
        ["mdx", "text/mdx"],
        ["me", "text/troff"],
        ["mesh", "model/mesh"],
        ["meta4", "application/metalink4+xml"],
        ["metalink", "application/metalink+xml"],
        ["mets", "application/mets+xml"],
        ["mfm", "application/vnd.mfmp"],
        ["mft", "application/rpki-manifest"],
        ["mgp", "application/vnd.osgeo.mapguide.package"],
        ["mgz", "application/vnd.proteus.magazine"],
        ["mid", "audio/midi"],
        ["midi", "audio/midi"],
        ["mie", "application/x-mie"],
        ["mif", "application/vnd.mif"],
        ["mime", "message/rfc822"],
        ["mj2", "video/mj2"],
        ["mjp2", "video/mj2"],
        ["mjs", "application/javascript"],
        ["mk3d", "video/x-matroska"],
        ["mka", "audio/x-matroska"],
        ["mkd", "text/x-markdown"],
        ["mks", "video/x-matroska"],
        ["mkv", "video/x-matroska"],
        ["mlp", "application/vnd.dolby.mlp"],
        ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
        ["mmf", "application/vnd.smaf"],
        ["mml", "text/mathml"],
        ["mmr", "image/vnd.fujixerox.edmics-mmr"],
        ["mng", "video/x-mng"],
        ["mny", "application/x-msmoney"],
        ["mobi", "application/x-mobipocket-ebook"],
        ["mods", "application/mods+xml"],
        ["mov", "video/quicktime"],
        ["movie", "video/x-sgi-movie"],
        ["mp2", "audio/mpeg"],
        ["mp2a", "audio/mpeg"],
        ["mp3", "audio/mpeg"],
        ["mp4", "video/mp4"],
        ["mp4a", "audio/mp4"],
        ["mp4s", "application/mp4"],
        ["mp4v", "video/mp4"],
        ["mp21", "application/mp21"],
        ["mpc", "application/vnd.mophun.certificate"],
        ["mpd", "application/dash+xml"],
        ["mpe", "video/mpeg"],
        ["mpeg", "video/mpeg"],
        ["mpg", "video/mpeg"],
        ["mpg4", "video/mp4"],
        ["mpga", "audio/mpeg"],
        ["mpkg", "application/vnd.apple.installer+xml"],
        ["mpm", "application/vnd.blueice.multipass"],
        ["mpn", "application/vnd.mophun.application"],
        ["mpp", "application/vnd.ms-project"],
        ["mpt", "application/vnd.ms-project"],
        ["mpy", "application/vnd.ibm.minipay"],
        ["mqy", "application/vnd.mobius.mqy"],
        ["mrc", "application/marc"],
        ["mrcx", "application/marcxml+xml"],
        ["ms", "text/troff"],
        ["mscml", "application/mediaservercontrol+xml"],
        ["mseed", "application/vnd.fdsn.mseed"],
        ["mseq", "application/vnd.mseq"],
        ["msf", "application/vnd.epson.msf"],
        ["msg", "application/vnd.ms-outlook"],
        ["msh", "model/mesh"],
        ["msi", "application/x-msdownload"],
        ["msl", "application/vnd.mobius.msl"],
        ["msm", "application/octet-stream"],
        ["msp", "application/octet-stream"],
        ["msty", "application/vnd.muvee.style"],
        ["mtl", "model/mtl"],
        ["mts", "model/vnd.mts"],
        ["mus", "application/vnd.musician"],
        ["musd", "application/mmt-usd+xml"],
        ["musicxml", "application/vnd.recordare.musicxml+xml"],
        ["mvb", "application/x-msmediaview"],
        ["mvt", "application/vnd.mapbox-vector-tile"],
        ["mwf", "application/vnd.mfer"],
        ["mxf", "application/mxf"],
        ["mxl", "application/vnd.recordare.musicxml"],
        ["mxmf", "audio/mobile-xmf"],
        ["mxml", "application/xv+xml"],
        ["mxs", "application/vnd.triscape.mxs"],
        ["mxu", "video/vnd.mpegurl"],
        ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
        ["n3", "text/n3"],
        ["nb", "application/mathematica"],
        ["nbp", "application/vnd.wolfram.player"],
        ["nc", "application/x-netcdf"],
        ["ncx", "application/x-dtbncx+xml"],
        ["nfo", "text/x-nfo"],
        ["ngdat", "application/vnd.nokia.n-gage.data"],
        ["nitf", "application/vnd.nitf"],
        ["nlu", "application/vnd.neurolanguage.nlu"],
        ["nml", "application/vnd.enliven"],
        ["nnd", "application/vnd.noblenet-directory"],
        ["nns", "application/vnd.noblenet-sealer"],
        ["nnw", "application/vnd.noblenet-web"],
        ["npx", "image/vnd.net-fpx"],
        ["nq", "application/n-quads"],
        ["nsc", "application/x-conference"],
        ["nsf", "application/vnd.lotus-notes"],
        ["nt", "application/n-triples"],
        ["ntf", "application/vnd.nitf"],
        ["numbers", "application/x-iwork-numbers-sffnumbers"],
        ["nzb", "application/x-nzb"],
        ["oa2", "application/vnd.fujitsu.oasys2"],
        ["oa3", "application/vnd.fujitsu.oasys3"],
        ["oas", "application/vnd.fujitsu.oasys"],
        ["obd", "application/x-msbinder"],
        ["obgx", "application/vnd.openblox.game+xml"],
        ["obj", "model/obj"],
        ["oda", "application/oda"],
        ["odb", "application/vnd.oasis.opendocument.database"],
        ["odc", "application/vnd.oasis.opendocument.chart"],
        ["odf", "application/vnd.oasis.opendocument.formula"],
        ["odft", "application/vnd.oasis.opendocument.formula-template"],
        ["odg", "application/vnd.oasis.opendocument.graphics"],
        ["odi", "application/vnd.oasis.opendocument.image"],
        ["odm", "application/vnd.oasis.opendocument.text-master"],
        ["odp", "application/vnd.oasis.opendocument.presentation"],
        ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
        ["odt", "application/vnd.oasis.opendocument.text"],
        ["oga", "audio/ogg"],
        ["ogex", "model/vnd.opengex"],
        ["ogg", "audio/ogg"],
        ["ogv", "video/ogg"],
        ["ogx", "application/ogg"],
        ["omdoc", "application/omdoc+xml"],
        ["onepkg", "application/onenote"],
        ["onetmp", "application/onenote"],
        ["onetoc", "application/onenote"],
        ["onetoc2", "application/onenote"],
        ["opf", "application/oebps-package+xml"],
        ["opml", "text/x-opml"],
        ["oprc", "application/vnd.palm"],
        ["opus", "audio/ogg"],
        ["org", "text/x-org"],
        ["osf", "application/vnd.yamaha.openscoreformat"],
        ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
        ["osm", "application/vnd.openstreetmap.data+xml"],
        ["otc", "application/vnd.oasis.opendocument.chart-template"],
        ["otf", "font/otf"],
        ["otg", "application/vnd.oasis.opendocument.graphics-template"],
        ["oth", "application/vnd.oasis.opendocument.text-web"],
        ["oti", "application/vnd.oasis.opendocument.image-template"],
        ["otp", "application/vnd.oasis.opendocument.presentation-template"],
        ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
        ["ott", "application/vnd.oasis.opendocument.text-template"],
        ["ova", "application/x-virtualbox-ova"],
        ["ovf", "application/x-virtualbox-ovf"],
        ["owl", "application/rdf+xml"],
        ["oxps", "application/oxps"],
        ["oxt", "application/vnd.openofficeorg.extension"],
        ["p", "text/x-pascal"],
        ["p7a", "application/x-pkcs7-signature"],
        ["p7b", "application/x-pkcs7-certificates"],
        ["p7c", "application/pkcs7-mime"],
        ["p7m", "application/pkcs7-mime"],
        ["p7r", "application/x-pkcs7-certreqresp"],
        ["p7s", "application/pkcs7-signature"],
        ["p8", "application/pkcs8"],
        ["p10", "application/x-pkcs10"],
        ["p12", "application/x-pkcs12"],
        ["pac", "application/x-ns-proxy-autoconfig"],
        ["pages", "application/x-iwork-pages-sffpages"],
        ["pas", "text/x-pascal"],
        ["paw", "application/vnd.pawaafile"],
        ["pbd", "application/vnd.powerbuilder6"],
        ["pbm", "image/x-portable-bitmap"],
        ["pcap", "application/vnd.tcpdump.pcap"],
        ["pcf", "application/x-font-pcf"],
        ["pcl", "application/vnd.hp-pcl"],
        ["pclxl", "application/vnd.hp-pclxl"],
        ["pct", "image/x-pict"],
        ["pcurl", "application/vnd.curl.pcurl"],
        ["pcx", "image/x-pcx"],
        ["pdb", "application/x-pilot"],
        ["pde", "text/x-processing"],
        ["pdf", "application/pdf"],
        ["pem", "application/x-x509-user-cert"],
        ["pfa", "application/x-font-type1"],
        ["pfb", "application/x-font-type1"],
        ["pfm", "application/x-font-type1"],
        ["pfr", "application/font-tdpfr"],
        ["pfx", "application/x-pkcs12"],
        ["pgm", "image/x-portable-graymap"],
        ["pgn", "application/x-chess-pgn"],
        ["pgp", "application/pgp"],
        ["php", "application/x-httpd-php"],
        ["php3", "application/x-httpd-php"],
        ["php4", "application/x-httpd-php"],
        ["phps", "application/x-httpd-php-source"],
        ["phtml", "application/x-httpd-php"],
        ["pic", "image/x-pict"],
        ["pkg", "application/octet-stream"],
        ["pki", "application/pkixcmp"],
        ["pkipath", "application/pkix-pkipath"],
        ["pkpass", "application/vnd.apple.pkpass"],
        ["pl", "application/x-perl"],
        ["plb", "application/vnd.3gpp.pic-bw-large"],
        ["plc", "application/vnd.mobius.plc"],
        ["plf", "application/vnd.pocketlearn"],
        ["pls", "application/pls+xml"],
        ["pm", "application/x-perl"],
        ["pml", "application/vnd.ctc-posml"],
        ["png", "image/png"],
        ["pnm", "image/x-portable-anymap"],
        ["portpkg", "application/vnd.macports.portpkg"],
        ["pot", "application/vnd.ms-powerpoint"],
        ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
        [
          "potx",
          "application/vnd.openxmlformats-officedocument.presentationml.template",
        ],
        ["ppa", "application/vnd.ms-powerpoint"],
        ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
        ["ppd", "application/vnd.cups-ppd"],
        ["ppm", "image/x-portable-pixmap"],
        ["pps", "application/vnd.ms-powerpoint"],
        ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
        [
          "ppsx",
          "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
        ],
        ["ppt", "application/powerpoint"],
        ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
        [
          "pptx",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ],
        ["pqa", "application/vnd.palm"],
        ["prc", "application/x-pilot"],
        ["pre", "application/vnd.lotus-freelance"],
        ["prf", "application/pics-rules"],
        ["provx", "application/provenance+xml"],
        ["ps", "application/postscript"],
        ["psb", "application/vnd.3gpp.pic-bw-small"],
        ["psd", "application/x-photoshop"],
        ["psf", "application/x-font-linux-psf"],
        ["pskcxml", "application/pskc+xml"],
        ["pti", "image/prs.pti"],
        ["ptid", "application/vnd.pvi.ptid1"],
        ["pub", "application/x-mspublisher"],
        ["pvb", "application/vnd.3gpp.pic-bw-var"],
        ["pwn", "application/vnd.3m.post-it-notes"],
        ["pya", "audio/vnd.ms-playready.media.pya"],
        ["pyv", "video/vnd.ms-playready.media.pyv"],
        ["qam", "application/vnd.epson.quickanime"],
        ["qbo", "application/vnd.intu.qbo"],
        ["qfx", "application/vnd.intu.qfx"],
        ["qps", "application/vnd.publishare-delta-tree"],
        ["qt", "video/quicktime"],
        ["qwd", "application/vnd.quark.quarkxpress"],
        ["qwt", "application/vnd.quark.quarkxpress"],
        ["qxb", "application/vnd.quark.quarkxpress"],
        ["qxd", "application/vnd.quark.quarkxpress"],
        ["qxl", "application/vnd.quark.quarkxpress"],
        ["qxt", "application/vnd.quark.quarkxpress"],
        ["ra", "audio/x-realaudio"],
        ["ram", "audio/x-pn-realaudio"],
        ["raml", "application/raml+yaml"],
        ["rapd", "application/route-apd+xml"],
        ["rar", "application/x-rar"],
        ["ras", "image/x-cmu-raster"],
        ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
        ["rdf", "application/rdf+xml"],
        ["rdz", "application/vnd.data-vision.rdz"],
        ["relo", "application/p2p-overlay+xml"],
        ["rep", "application/vnd.businessobjects"],
        ["res", "application/x-dtbresource+xml"],
        ["rgb", "image/x-rgb"],
        ["rif", "application/reginfo+xml"],
        ["rip", "audio/vnd.rip"],
        ["ris", "application/x-research-info-systems"],
        ["rl", "application/resource-lists+xml"],
        ["rlc", "image/vnd.fujixerox.edmics-rlc"],
        ["rld", "application/resource-lists-diff+xml"],
        ["rm", "audio/x-pn-realaudio"],
        ["rmi", "audio/midi"],
        ["rmp", "audio/x-pn-realaudio-plugin"],
        ["rms", "application/vnd.jcp.javame.midlet-rms"],
        ["rmvb", "application/vnd.rn-realmedia-vbr"],
        ["rnc", "application/relax-ng-compact-syntax"],
        ["rng", "application/xml"],
        ["roa", "application/rpki-roa"],
        ["roff", "text/troff"],
        ["rp9", "application/vnd.cloanto.rp9"],
        ["rpm", "audio/x-pn-realaudio-plugin"],
        ["rpss", "application/vnd.nokia.radio-presets"],
        ["rpst", "application/vnd.nokia.radio-preset"],
        ["rq", "application/sparql-query"],
        ["rs", "application/rls-services+xml"],
        ["rsa", "application/x-pkcs7"],
        ["rsat", "application/atsc-rsat+xml"],
        ["rsd", "application/rsd+xml"],
        ["rsheet", "application/urc-ressheet+xml"],
        ["rss", "application/rss+xml"],
        ["rtf", "text/rtf"],
        ["rtx", "text/richtext"],
        ["run", "application/x-makeself"],
        ["rusd", "application/route-usd+xml"],
        ["rv", "video/vnd.rn-realvideo"],
        ["s", "text/x-asm"],
        ["s3m", "audio/s3m"],
        ["saf", "application/vnd.yamaha.smaf-audio"],
        ["sass", "text/x-sass"],
        ["sbml", "application/sbml+xml"],
        ["sc", "application/vnd.ibm.secure-container"],
        ["scd", "application/x-msschedule"],
        ["scm", "application/vnd.lotus-screencam"],
        ["scq", "application/scvp-cv-request"],
        ["scs", "application/scvp-cv-response"],
        ["scss", "text/x-scss"],
        ["scurl", "text/vnd.curl.scurl"],
        ["sda", "application/vnd.stardivision.draw"],
        ["sdc", "application/vnd.stardivision.calc"],
        ["sdd", "application/vnd.stardivision.impress"],
        ["sdkd", "application/vnd.solent.sdkm+xml"],
        ["sdkm", "application/vnd.solent.sdkm+xml"],
        ["sdp", "application/sdp"],
        ["sdw", "application/vnd.stardivision.writer"],
        ["sea", "application/octet-stream"],
        ["see", "application/vnd.seemail"],
        ["seed", "application/vnd.fdsn.seed"],
        ["sema", "application/vnd.sema"],
        ["semd", "application/vnd.semd"],
        ["semf", "application/vnd.semf"],
        ["senmlx", "application/senml+xml"],
        ["sensmlx", "application/sensml+xml"],
        ["ser", "application/java-serialized-object"],
        ["setpay", "application/set-payment-initiation"],
        ["setreg", "application/set-registration-initiation"],
        ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
        ["sfs", "application/vnd.spotfire.sfs"],
        ["sfv", "text/x-sfv"],
        ["sgi", "image/sgi"],
        ["sgl", "application/vnd.stardivision.writer-global"],
        ["sgm", "text/sgml"],
        ["sgml", "text/sgml"],
        ["sh", "application/x-sh"],
        ["shar", "application/x-shar"],
        ["shex", "text/shex"],
        ["shf", "application/shf+xml"],
        ["shtml", "text/html"],
        ["sid", "image/x-mrsid-image"],
        ["sieve", "application/sieve"],
        ["sig", "application/pgp-signature"],
        ["sil", "audio/silk"],
        ["silo", "model/mesh"],
        ["sis", "application/vnd.symbian.install"],
        ["sisx", "application/vnd.symbian.install"],
        ["sit", "application/x-stuffit"],
        ["sitx", "application/x-stuffitx"],
        ["siv", "application/sieve"],
        ["skd", "application/vnd.koan"],
        ["skm", "application/vnd.koan"],
        ["skp", "application/vnd.koan"],
        ["skt", "application/vnd.koan"],
        ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
        [
          "sldx",
          "application/vnd.openxmlformats-officedocument.presentationml.slide",
        ],
        ["slim", "text/slim"],
        ["slm", "text/slim"],
        ["sls", "application/route-s-tsid+xml"],
        ["slt", "application/vnd.epson.salt"],
        ["sm", "application/vnd.stepmania.stepchart"],
        ["smf", "application/vnd.stardivision.math"],
        ["smi", "application/smil"],
        ["smil", "application/smil"],
        ["smv", "video/x-smv"],
        ["smzip", "application/vnd.stepmania.package"],
        ["snd", "audio/basic"],
        ["snf", "application/x-font-snf"],
        ["so", "application/octet-stream"],
        ["spc", "application/x-pkcs7-certificates"],
        ["spdx", "text/spdx"],
        ["spf", "application/vnd.yamaha.smaf-phrase"],
        ["spl", "application/x-futuresplash"],
        ["spot", "text/vnd.in3d.spot"],
        ["spp", "application/scvp-vp-response"],
        ["spq", "application/scvp-vp-request"],
        ["spx", "audio/ogg"],
        ["sql", "application/x-sql"],
        ["src", "application/x-wais-source"],
        ["srt", "application/x-subrip"],
        ["sru", "application/sru+xml"],
        ["srx", "application/sparql-results+xml"],
        ["ssdl", "application/ssdl+xml"],
        ["sse", "application/vnd.kodak-descriptor"],
        ["ssf", "application/vnd.epson.ssf"],
        ["ssml", "application/ssml+xml"],
        ["sst", "application/octet-stream"],
        ["st", "application/vnd.sailingtracker.track"],
        ["stc", "application/vnd.sun.xml.calc.template"],
        ["std", "application/vnd.sun.xml.draw.template"],
        ["stf", "application/vnd.wt.stf"],
        ["sti", "application/vnd.sun.xml.impress.template"],
        ["stk", "application/hyperstudio"],
        ["stl", "model/stl"],
        ["stpx", "model/step+xml"],
        ["stpxz", "model/step-xml+zip"],
        ["stpz", "model/step+zip"],
        ["str", "application/vnd.pg.format"],
        ["stw", "application/vnd.sun.xml.writer.template"],
        ["styl", "text/stylus"],
        ["stylus", "text/stylus"],
        ["sub", "text/vnd.dvb.subtitle"],
        ["sus", "application/vnd.sus-calendar"],
        ["susp", "application/vnd.sus-calendar"],
        ["sv4cpio", "application/x-sv4cpio"],
        ["sv4crc", "application/x-sv4crc"],
        ["svc", "application/vnd.dvb.service"],
        ["svd", "application/vnd.svd"],
        ["svg", "image/svg+xml"],
        ["svgz", "image/svg+xml"],
        ["swa", "application/x-director"],
        ["swf", "application/x-shockwave-flash"],
        ["swi", "application/vnd.aristanetworks.swi"],
        ["swidtag", "application/swid+xml"],
        ["sxc", "application/vnd.sun.xml.calc"],
        ["sxd", "application/vnd.sun.xml.draw"],
        ["sxg", "application/vnd.sun.xml.writer.global"],
        ["sxi", "application/vnd.sun.xml.impress"],
        ["sxm", "application/vnd.sun.xml.math"],
        ["sxw", "application/vnd.sun.xml.writer"],
        ["t", "text/troff"],
        ["t3", "application/x-t3vm-image"],
        ["t38", "image/t38"],
        ["taglet", "application/vnd.mynfc"],
        ["tao", "application/vnd.tao.intent-module-archive"],
        ["tap", "image/vnd.tencent.tap"],
        ["tar", "application/x-tar"],
        ["tcap", "application/vnd.3gpp2.tcap"],
        ["tcl", "application/x-tcl"],
        ["td", "application/urc-targetdesc+xml"],
        ["teacher", "application/vnd.smart.teacher"],
        ["tei", "application/tei+xml"],
        ["teicorpus", "application/tei+xml"],
        ["tex", "application/x-tex"],
        ["texi", "application/x-texinfo"],
        ["texinfo", "application/x-texinfo"],
        ["text", "text/plain"],
        ["tfi", "application/thraud+xml"],
        ["tfm", "application/x-tex-tfm"],
        ["tfx", "image/tiff-fx"],
        ["tga", "image/x-tga"],
        ["tgz", "application/x-tar"],
        ["thmx", "application/vnd.ms-officetheme"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["tk", "application/x-tcl"],
        ["tmo", "application/vnd.tmobile-livetv"],
        ["toml", "application/toml"],
        ["torrent", "application/x-bittorrent"],
        ["tpl", "application/vnd.groove-tool-template"],
        ["tpt", "application/vnd.trid.tpt"],
        ["tr", "text/troff"],
        ["tra", "application/vnd.trueapp"],
        ["trig", "application/trig"],
        ["trm", "application/x-msterminal"],
        ["ts", "video/mp2t"],
        ["tsd", "application/timestamped-data"],
        ["tsv", "text/tab-separated-values"],
        ["ttc", "font/collection"],
        ["ttf", "font/ttf"],
        ["ttl", "text/turtle"],
        ["ttml", "application/ttml+xml"],
        ["twd", "application/vnd.simtech-mindmapper"],
        ["twds", "application/vnd.simtech-mindmapper"],
        ["txd", "application/vnd.genomatix.tuxedo"],
        ["txf", "application/vnd.mobius.txf"],
        ["txt", "text/plain"],
        ["u8dsn", "message/global-delivery-status"],
        ["u8hdr", "message/global-headers"],
        ["u8mdn", "message/global-disposition-notification"],
        ["u8msg", "message/global"],
        ["u32", "application/x-authorware-bin"],
        ["ubj", "application/ubjson"],
        ["udeb", "application/x-debian-package"],
        ["ufd", "application/vnd.ufdl"],
        ["ufdl", "application/vnd.ufdl"],
        ["ulx", "application/x-glulx"],
        ["umj", "application/vnd.umajin"],
        ["unityweb", "application/vnd.unity"],
        ["uoml", "application/vnd.uoml+xml"],
        ["uri", "text/uri-list"],
        ["uris", "text/uri-list"],
        ["urls", "text/uri-list"],
        ["usdz", "model/vnd.usdz+zip"],
        ["ustar", "application/x-ustar"],
        ["utz", "application/vnd.uiq.theme"],
        ["uu", "text/x-uuencode"],
        ["uva", "audio/vnd.dece.audio"],
        ["uvd", "application/vnd.dece.data"],
        ["uvf", "application/vnd.dece.data"],
        ["uvg", "image/vnd.dece.graphic"],
        ["uvh", "video/vnd.dece.hd"],
        ["uvi", "image/vnd.dece.graphic"],
        ["uvm", "video/vnd.dece.mobile"],
        ["uvp", "video/vnd.dece.pd"],
        ["uvs", "video/vnd.dece.sd"],
        ["uvt", "application/vnd.dece.ttml+xml"],
        ["uvu", "video/vnd.uvvu.mp4"],
        ["uvv", "video/vnd.dece.video"],
        ["uvva", "audio/vnd.dece.audio"],
        ["uvvd", "application/vnd.dece.data"],
        ["uvvf", "application/vnd.dece.data"],
        ["uvvg", "image/vnd.dece.graphic"],
        ["uvvh", "video/vnd.dece.hd"],
        ["uvvi", "image/vnd.dece.graphic"],
        ["uvvm", "video/vnd.dece.mobile"],
        ["uvvp", "video/vnd.dece.pd"],
        ["uvvs", "video/vnd.dece.sd"],
        ["uvvt", "application/vnd.dece.ttml+xml"],
        ["uvvu", "video/vnd.uvvu.mp4"],
        ["uvvv", "video/vnd.dece.video"],
        ["uvvx", "application/vnd.dece.unspecified"],
        ["uvvz", "application/vnd.dece.zip"],
        ["uvx", "application/vnd.dece.unspecified"],
        ["uvz", "application/vnd.dece.zip"],
        ["vbox", "application/x-virtualbox-vbox"],
        ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
        ["vcard", "text/vcard"],
        ["vcd", "application/x-cdlink"],
        ["vcf", "text/x-vcard"],
        ["vcg", "application/vnd.groove-vcard"],
        ["vcs", "text/x-vcalendar"],
        ["vcx", "application/vnd.vcx"],
        ["vdi", "application/x-virtualbox-vdi"],
        ["vds", "model/vnd.sap.vds"],
        ["vhd", "application/x-virtualbox-vhd"],
        ["vis", "application/vnd.visionary"],
        ["viv", "video/vnd.vivo"],
        ["vlc", "application/videolan"],
        ["vmdk", "application/x-virtualbox-vmdk"],
        ["vob", "video/x-ms-vob"],
        ["vor", "application/vnd.stardivision.writer"],
        ["vox", "application/x-authorware-bin"],
        ["vrml", "model/vrml"],
        ["vsd", "application/vnd.visio"],
        ["vsf", "application/vnd.vsf"],
        ["vss", "application/vnd.visio"],
        ["vst", "application/vnd.visio"],
        ["vsw", "application/vnd.visio"],
        ["vtf", "image/vnd.valve.source.texture"],
        ["vtt", "text/vtt"],
        ["vtu", "model/vnd.vtu"],
        ["vxml", "application/voicexml+xml"],
        ["w3d", "application/x-director"],
        ["wad", "application/x-doom"],
        ["wadl", "application/vnd.sun.wadl+xml"],
        ["war", "application/java-archive"],
        ["wasm", "application/wasm"],
        ["wav", "audio/x-wav"],
        ["wax", "audio/x-ms-wax"],
        ["wbmp", "image/vnd.wap.wbmp"],
        ["wbs", "application/vnd.criticaltools.wbs+xml"],
        ["wbxml", "application/wbxml"],
        ["wcm", "application/vnd.ms-works"],
        ["wdb", "application/vnd.ms-works"],
        ["wdp", "image/vnd.ms-photo"],
        ["weba", "audio/webm"],
        ["webapp", "application/x-web-app-manifest+json"],
        ["webm", "video/webm"],
        ["webmanifest", "application/manifest+json"],
        ["webp", "image/webp"],
        ["wg", "application/vnd.pmi.widget"],
        ["wgt", "application/widget"],
        ["wks", "application/vnd.ms-works"],
        ["wm", "video/x-ms-wm"],
        ["wma", "audio/x-ms-wma"],
        ["wmd", "application/x-ms-wmd"],
        ["wmf", "image/wmf"],
        ["wml", "text/vnd.wap.wml"],
        ["wmlc", "application/wmlc"],
        ["wmls", "text/vnd.wap.wmlscript"],
        ["wmlsc", "application/vnd.wap.wmlscriptc"],
        ["wmv", "video/x-ms-wmv"],
        ["wmx", "video/x-ms-wmx"],
        ["wmz", "application/x-msmetafile"],
        ["woff", "font/woff"],
        ["woff2", "font/woff2"],
        ["word", "application/msword"],
        ["wpd", "application/vnd.wordperfect"],
        ["wpl", "application/vnd.ms-wpl"],
        ["wps", "application/vnd.ms-works"],
        ["wqd", "application/vnd.wqd"],
        ["wri", "application/x-mswrite"],
        ["wrl", "model/vrml"],
        ["wsc", "message/vnd.wfa.wsc"],
        ["wsdl", "application/wsdl+xml"],
        ["wspolicy", "application/wspolicy+xml"],
        ["wtb", "application/vnd.webturbo"],
        ["wvx", "video/x-ms-wvx"],
        ["x3d", "model/x3d+xml"],
        ["x3db", "model/x3d+fastinfoset"],
        ["x3dbz", "model/x3d+binary"],
        ["x3dv", "model/x3d-vrml"],
        ["x3dvz", "model/x3d+vrml"],
        ["x3dz", "model/x3d+xml"],
        ["x32", "application/x-authorware-bin"],
        ["x_b", "model/vnd.parasolid.transmit.binary"],
        ["x_t", "model/vnd.parasolid.transmit.text"],
        ["xaml", "application/xaml+xml"],
        ["xap", "application/x-silverlight-app"],
        ["xar", "application/vnd.xara"],
        ["xav", "application/xcap-att+xml"],
        ["xbap", "application/x-ms-xbap"],
        ["xbd", "application/vnd.fujixerox.docuworks.binder"],
        ["xbm", "image/x-xbitmap"],
        ["xca", "application/xcap-caps+xml"],
        ["xcs", "application/calendar+xml"],
        ["xdf", "application/xcap-diff+xml"],
        ["xdm", "application/vnd.syncml.dm+xml"],
        ["xdp", "application/vnd.adobe.xdp+xml"],
        ["xdssc", "application/dssc+xml"],
        ["xdw", "application/vnd.fujixerox.docuworks"],
        ["xel", "application/xcap-el+xml"],
        ["xenc", "application/xenc+xml"],
        ["xer", "application/patch-ops-error+xml"],
        ["xfdf", "application/vnd.adobe.xfdf"],
        ["xfdl", "application/vnd.xfdl"],
        ["xht", "application/xhtml+xml"],
        ["xhtml", "application/xhtml+xml"],
        ["xhvml", "application/xv+xml"],
        ["xif", "image/vnd.xiff"],
        ["xl", "application/excel"],
        ["xla", "application/vnd.ms-excel"],
        ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
        ["xlc", "application/vnd.ms-excel"],
        ["xlf", "application/xliff+xml"],
        ["xlm", "application/vnd.ms-excel"],
        ["xls", "application/vnd.ms-excel"],
        ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
        ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
        [
          "xlsx",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ],
        ["xlt", "application/vnd.ms-excel"],
        ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
        [
          "xltx",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        ],
        ["xlw", "application/vnd.ms-excel"],
        ["xm", "audio/xm"],
        ["xml", "application/xml"],
        ["xns", "application/xcap-ns+xml"],
        ["xo", "application/vnd.olpc-sugar"],
        ["xop", "application/xop+xml"],
        ["xpi", "application/x-xpinstall"],
        ["xpl", "application/xproc+xml"],
        ["xpm", "image/x-xpixmap"],
        ["xpr", "application/vnd.is-xpr"],
        ["xps", "application/vnd.ms-xpsdocument"],
        ["xpw", "application/vnd.intercon.formnet"],
        ["xpx", "application/vnd.intercon.formnet"],
        ["xsd", "application/xml"],
        ["xsl", "application/xml"],
        ["xslt", "application/xslt+xml"],
        ["xsm", "application/vnd.syncml+xml"],
        ["xspf", "application/xspf+xml"],
        ["xul", "application/vnd.mozilla.xul+xml"],
        ["xvm", "application/xv+xml"],
        ["xvml", "application/xv+xml"],
        ["xwd", "image/x-xwindowdump"],
        ["xyz", "chemical/x-xyz"],
        ["xz", "application/x-xz"],
        ["yaml", "text/yaml"],
        ["yang", "application/yang"],
        ["yin", "application/yin+xml"],
        ["yml", "text/yaml"],
        ["ymp", "text/x-suse-ymp"],
        ["z", "application/x-compress"],
        ["z1", "application/x-zmachine"],
        ["z2", "application/x-zmachine"],
        ["z3", "application/x-zmachine"],
        ["z4", "application/x-zmachine"],
        ["z5", "application/x-zmachine"],
        ["z6", "application/x-zmachine"],
        ["z7", "application/x-zmachine"],
        ["z8", "application/x-zmachine"],
        ["zaz", "application/vnd.zzazz.deck+xml"],
        ["zip", "application/zip"],
        ["zir", "application/vnd.zul"],
        ["zirz", "application/vnd.zul"],
        ["zmm", "application/vnd.handheld-entertainment+xml"],
        ["zsh", "text/x-scriptzsh"],
      ]);
      function l(a, i, t) {
        let n = (function (a) {
            let { name: i } = a;
            if (i && -1 !== i.lastIndexOf(".") && !a.type) {
              let t = i.split(".").pop().toLowerCase(),
                n = c.get(t);
              n &&
                Object.defineProperty(a, "type", {
                  value: n,
                  writable: !1,
                  configurable: !1,
                  enumerable: !0,
                });
            }
            return a;
          })(a),
          { webkitRelativePath: e } = a,
          p =
            "string" == typeof i
              ? i
              : "string" == typeof e && e.length > 0
              ? e
              : `./${a.name}`;
        return (
          "string" != typeof n.path && r(n, "path", p),
          void 0 !== t &&
            Object.defineProperty(n, "handle", {
              value: t,
              writable: !1,
              configurable: !1,
              enumerable: !0,
            }),
          r(n, "relativePath", p),
          n
        );
      }
      function r(a, i, t) {
        Object.defineProperty(a, i, {
          value: t,
          writable: !1,
          configurable: !1,
          enumerable: !0,
        });
      }
      let s = [".DS_Store", "Thumbs.db"];
      function d(a) {
        return "object" == typeof a && null !== a;
      }
      function m(a) {
        return a.filter((a) => -1 === s.indexOf(a.name));
      }
      function u(a) {
        if (null === a) return [];
        let i = [];
        for (let t = 0; t < a.length; t++) {
          let n = a[t];
          i.push(n);
        }
        return i;
      }
      function v(a) {
        if ("function" != typeof a.webkitGetAsEntry) return x(a);
        let i = a.webkitGetAsEntry();
        return i && i.isDirectory ? g(i) : x(a, i);
      }
      function x(a, i) {
        return (0, o.__awaiter)(this, void 0, void 0, function* () {
          var t;
          if (
            globalThis.isSecureContext &&
            "function" == typeof a.getAsFileSystemHandle
          ) {
            let i = yield a.getAsFileSystemHandle();
            if (null === i) throw Error(`${a} is not a File`);
            if (void 0 !== i) {
              let a = yield i.getFile();
              return (a.handle = i), l(a);
            }
          }
          let n = a.getAsFile();
          if (!n) throw Error(`${a} is not a File`);
          return l(
            n,
            null !== (t = null == i ? void 0 : i.fullPath) && void 0 !== t
              ? t
              : void 0
          );
        });
      }
      function f(a) {
        return (0, o.__awaiter)(this, void 0, void 0, function* () {
          return a.isDirectory
            ? g(a)
            : (function (a) {
                return (0, o.__awaiter)(this, void 0, void 0, function* () {
                  return new Promise((i, t) => {
                    a.file(
                      (t) => {
                        i(l(t, a.fullPath));
                      },
                      (a) => {
                        t(a);
                      }
                    );
                  });
                });
              })(a);
        });
      }
      function g(a) {
        let i = a.createReader();
        return new Promise((a, t) => {
          let n = [];
          !(function e() {
            i.readEntries(
              (i) =>
                (0, o.__awaiter)(this, void 0, void 0, function* () {
                  if (i.length) {
                    let a = Promise.all(i.map(f));
                    n.push(a), e();
                  } else
                    try {
                      let i = yield Promise.all(n);
                      a(i);
                    } catch (a) {
                      t(a);
                    }
                }),
              (a) => {
                t(a);
              }
            );
          })();
        });
      }
      var b = t(58363);
      function h(a) {
        return (
          (function (a) {
            if (Array.isArray(a)) return D(a);
          })(a) ||
          (function (a) {
            if (
              ("undefined" != typeof Symbol && null != a[Symbol.iterator]) ||
              null != a["@@iterator"]
            )
              return Array.from(a);
          })(a) ||
          z(a) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(a, i) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(a);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(a, i).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function w(a) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? y(Object(t), !0).forEach(function (i) {
                k(a, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (i) {
                Object.defineProperty(
                  a,
                  i,
                  Object.getOwnPropertyDescriptor(t, i)
                );
              });
        }
        return a;
      }
      function k(a, i, t) {
        return (
          i in a
            ? Object.defineProperty(a, i, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[i] = t),
          a
        );
      }
      function j(a, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, i) {
            var t,
              n,
              e =
                null == a
                  ? null
                  : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
                    a["@@iterator"];
            if (null != e) {
              var p = [],
                o = !0,
                c = !1;
              try {
                for (
                  e = e.call(a);
                  !(o = (t = e.next()).done) &&
                  (p.push(t.value), !i || p.length !== i);
                  o = !0
                );
              } catch (a) {
                (c = !0), (n = a);
              } finally {
                try {
                  o || null == e.return || e.return();
                } finally {
                  if (c) throw n;
                }
              }
              return p;
            }
          })(a, i) ||
          z(a, i) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function z(a, i) {
        if (a) {
          if ("string" == typeof a) return D(a, i);
          var t = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === t && a.constructor && (t = a.constructor.name),
            "Map" === t || "Set" === t)
          )
            return Array.from(a);
          if (
            "Arguments" === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return D(a, i);
        }
      }
      function D(a, i) {
        (null == i || i > a.length) && (i = a.length);
        for (var t = 0, n = Array(i); t < i; t++) n[t] = a[t];
        return n;
      }
      var O = "function" == typeof b.Z ? b.Z : b.Z.default,
        E = function () {
          var a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            i = a.split(","),
            t = i.length > 1 ? "one of ".concat(i.join(", ")) : i[0];
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(t),
          };
        },
        F = function (a) {
          return {
            code: "file-too-large",
            message: "File is larger than "
              .concat(a, " ")
              .concat(1 === a ? "byte" : "bytes"),
          };
        },
        A = function (a) {
          return {
            code: "file-too-small",
            message: "File is smaller than "
              .concat(a, " ")
              .concat(1 === a ? "byte" : "bytes"),
          };
        },
        C = { code: "too-many-files", message: "Too many files" };
      function P(a, i) {
        var t = "application/x-moz-file" === a.type || O(a, i);
        return [t, t ? null : E(i)];
      }
      function q(a, i, t) {
        if (S(a.size)) {
          if (S(i) && S(t)) {
            if (a.size > t) return [!1, F(t)];
            if (a.size < i) return [!1, A(i)];
          } else if (S(i) && a.size < i) return [!1, A(i)];
          else if (S(t) && a.size > t) return [!1, F(t)];
        }
        return [!0, null];
      }
      function S(a) {
        return null != a;
      }
      function R(a) {
        return "function" == typeof a.isPropagationStopped
          ? a.isPropagationStopped()
          : void 0 !== a.cancelBubble && a.cancelBubble;
      }
      function T(a) {
        return a.dataTransfer
          ? Array.prototype.some.call(a.dataTransfer.types, function (a) {
              return "Files" === a || "application/x-moz-file" === a;
            })
          : !!a.target && !!a.target.files;
      }
      function _(a) {
        a.preventDefault();
      }
      function I() {
        for (var a = arguments.length, i = Array(a), t = 0; t < a; t++)
          i[t] = arguments[t];
        return function (a) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), e = 1;
            e < t;
            e++
          )
            n[e - 1] = arguments[e];
          return i.some(function (i) {
            return !R(a) && i && i.apply(void 0, [a].concat(n)), R(a);
          });
        };
      }
      function M(a) {
        return (
          "audio/*" === a ||
          "video/*" === a ||
          "image/*" === a ||
          "text/*" === a ||
          "application/*" === a ||
          /\w+\/[-+.\w]+/g.test(a)
        );
      }
      function L(a) {
        return /^.*\.[\w]+$/.test(a);
      }
      var K = ["children"],
        N = ["open"],
        $ = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        B = ["refKey", "onChange", "onClick"];
      function W(a, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, i) {
            var t,
              n,
              e =
                null == a
                  ? null
                  : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
                    a["@@iterator"];
            if (null != e) {
              var p = [],
                o = !0,
                c = !1;
              try {
                for (
                  e = e.call(a);
                  !(o = (t = e.next()).done) &&
                  (p.push(t.value), !i || p.length !== i);
                  o = !0
                );
              } catch (a) {
                (c = !0), (n = a);
              } finally {
                try {
                  o || null == e.return || e.return();
                } finally {
                  if (c) throw n;
                }
              }
              return p;
            }
          })(a, i) ||
          V(a, i) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function V(a, i) {
        if (a) {
          if ("string" == typeof a) return U(a, i);
          var t = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === t && a.constructor && (t = a.constructor.name),
            "Map" === t || "Set" === t)
          )
            return Array.from(a);
          if (
            "Arguments" === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return U(a, i);
        }
      }
      function U(a, i) {
        (null == i || i > a.length) && (i = a.length);
        for (var t = 0, n = Array(i); t < i; t++) n[t] = a[t];
        return n;
      }
      function G(a, i) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(a);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(a, i).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function H(a) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? G(Object(t), !0).forEach(function (i) {
                Z(a, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (i) {
                Object.defineProperty(
                  a,
                  i,
                  Object.getOwnPropertyDescriptor(t, i)
                );
              });
        }
        return a;
      }
      function Z(a, i, t) {
        return (
          i in a
            ? Object.defineProperty(a, i, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[i] = t),
          a
        );
      }
      function Y(a, i) {
        if (null == a) return {};
        var t,
          n,
          e = (function (a, i) {
            if (null == a) return {};
            var t,
              n,
              e = {},
              p = Object.keys(a);
            for (n = 0; n < p.length; n++)
              (t = p[n]), i.indexOf(t) >= 0 || (e[t] = a[t]);
            return e;
          })(a, i);
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(a);
          for (n = 0; n < p.length; n++)
            (t = p[n]),
              !(i.indexOf(t) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(a, t) &&
                (e[t] = a[t]);
        }
        return e;
      }
      var J = (0, n.forwardRef)(function (a, i) {
        var t = a.children,
          e = aa(Y(a, K)),
          p = e.open,
          o = Y(e, N);
        return (
          (0, n.useImperativeHandle)(
            i,
            function () {
              return { open: p };
            },
            [p]
          ),
          n.createElement(n.Fragment, null, t(H(H({}, o), {}, { open: p })))
        );
      });
      J.displayName = "Dropzone";
      var Q = {
        disabled: !1,
        getFilesFromEvent: function (a) {
          return (0, o.__awaiter)(this, void 0, void 0, function* () {
            return d(a) && d(a.dataTransfer)
              ? (function (a, i) {
                  return (0, o.__awaiter)(this, void 0, void 0, function* () {
                    if (a.items) {
                      let t = u(a.items).filter((a) => "file" === a.kind);
                      return "drop" !== i
                        ? t
                        : m(
                            (function a(i) {
                              return i.reduce(
                                (i, t) => [
                                  ...i,
                                  ...(Array.isArray(t) ? a(t) : [t]),
                                ],
                                []
                              );
                            })(yield Promise.all(t.map(v)))
                          );
                    }
                    return m(u(a.files).map((a) => l(a)));
                  });
                })(a.dataTransfer, a.type)
              : d(a) && d(a.target)
              ? u(a.target.files).map((a) => l(a))
              : Array.isArray(a) &&
                a.every((a) => "getFile" in a && "function" == typeof a.getFile)
              ? (function (a) {
                  return (0, o.__awaiter)(this, void 0, void 0, function* () {
                    return (yield Promise.all(a.map((a) => a.getFile()))).map(
                      (a) => l(a)
                    );
                  });
                })(a)
              : [];
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !1,
        autoFocus: !1,
      };
      (J.defaultProps = Q),
        (J.propTypes = {
          children: p().func,
          accept: p().objectOf(p().arrayOf(p().string)),
          multiple: p().bool,
          preventDropOnDocument: p().bool,
          noClick: p().bool,
          noKeyboard: p().bool,
          noDrag: p().bool,
          noDragEventsBubbling: p().bool,
          minSize: p().number,
          maxSize: p().number,
          maxFiles: p().number,
          disabled: p().bool,
          getFilesFromEvent: p().func,
          onFileDialogCancel: p().func,
          onFileDialogOpen: p().func,
          useFsAccessApi: p().bool,
          autoFocus: p().bool,
          onDragEnter: p().func,
          onDragLeave: p().func,
          onDragOver: p().func,
          onDrop: p().func,
          onDropAccepted: p().func,
          onDropRejected: p().func,
          onError: p().func,
          validator: p().func,
        });
      var X = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        acceptedFiles: [],
        fileRejections: [],
      };
      function aa() {
        var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = H(H({}, Q), a),
          t = i.accept,
          e = i.disabled,
          p = i.getFilesFromEvent,
          o = i.maxSize,
          c = i.minSize,
          l = i.multiple,
          r = i.maxFiles,
          s = i.onDragEnter,
          d = i.onDragLeave,
          m = i.onDragOver,
          u = i.onDrop,
          v = i.onDropAccepted,
          x = i.onDropRejected,
          f = i.onFileDialogCancel,
          g = i.onFileDialogOpen,
          b = i.useFsAccessApi,
          y = i.autoFocus,
          z = i.preventDropOnDocument,
          D = i.noClick,
          O = i.noKeyboard,
          E = i.noDrag,
          F = i.noDragEventsBubbling,
          A = i.onError,
          K = i.validator,
          N = (0, n.useMemo)(
            function () {
              return (function (a) {
                if (S(a))
                  return Object.entries(a)
                    .reduce(function (a, i) {
                      var t = j(i, 2),
                        n = t[0],
                        e = t[1];
                      return [].concat(h(a), [n], h(e));
                    }, [])
                    .filter(function (a) {
                      return M(a) || L(a);
                    })
                    .join(",");
              })(t);
            },
            [t]
          ),
          G = (0, n.useMemo)(
            function () {
              return S(t)
                ? [
                    {
                      description: "Files",
                      accept: Object.entries(t)
                        .filter(function (a) {
                          var i = j(a, 2),
                            t = i[0],
                            n = i[1],
                            e = !0;
                          return (
                            M(t) ||
                              (console.warn(
                                'Skipped "'.concat(
                                  t,
                                  '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
                                )
                              ),
                              (e = !1)),
                            (Array.isArray(n) && n.every(L)) ||
                              (console.warn(
                                'Skipped "'.concat(
                                  t,
                                  '" because an invalid file extension was provided.'
                                )
                              ),
                              (e = !1)),
                            e
                          );
                        })
                        .reduce(function (a, i) {
                          var t = j(i, 2),
                            n = t[0],
                            e = t[1];
                          return w(w({}, a), {}, k({}, n, e));
                        }, {}),
                    },
                  ]
                : t;
            },
            [t]
          ),
          J = (0, n.useMemo)(
            function () {
              return "function" == typeof g ? g : at;
            },
            [g]
          ),
          aa = (0, n.useMemo)(
            function () {
              return "function" == typeof f ? f : at;
            },
            [f]
          ),
          an = (0, n.useRef)(null),
          ae = (0, n.useRef)(null),
          ap = W((0, n.useReducer)(ai, X), 2),
          ao = ap[0],
          ac = ap[1],
          al = ao.isFocused,
          ar = ao.isFileDialogActive,
          as = (0, n.useRef)(
            "undefined" != typeof window &&
              window.isSecureContext &&
              b &&
              "showOpenFilePicker" in window
          ),
          ad = function () {
            !as.current &&
              ar &&
              setTimeout(function () {
                ae.current &&
                  !ae.current.files.length &&
                  (ac({ type: "closeDialog" }), aa());
              }, 300);
          };
        (0, n.useEffect)(
          function () {
            return (
              window.addEventListener("focus", ad, !1),
              function () {
                window.removeEventListener("focus", ad, !1);
              }
            );
          },
          [ae, ar, aa, as]
        );
        var am = (0, n.useRef)([]),
          au = function (a) {
            (an.current && an.current.contains(a.target)) ||
              (a.preventDefault(), (am.current = []));
          };
        (0, n.useEffect)(
          function () {
            return (
              z &&
                (document.addEventListener("dragover", _, !1),
                document.addEventListener("drop", au, !1)),
              function () {
                z &&
                  (document.removeEventListener("dragover", _),
                  document.removeEventListener("drop", au));
              }
            );
          },
          [an, z]
        ),
          (0, n.useEffect)(
            function () {
              return (
                !e && y && an.current && an.current.focus(), function () {}
              );
            },
            [an, y, e]
          );
        var av = (0, n.useCallback)(
            function (a) {
              A ? A(a) : console.error(a);
            },
            [A]
          ),
          ax = (0, n.useCallback)(
            function (a) {
              var i;
              a.preventDefault(),
                a.persist(),
                aF(a),
                (am.current = [].concat(
                  (function (a) {
                    if (Array.isArray(a)) return U(a);
                  })((i = am.current)) ||
                    (function (a) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != a[Symbol.iterator]) ||
                        null != a["@@iterator"]
                      )
                        return Array.from(a);
                    })(i) ||
                    V(i) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(),
                  [a.target]
                )),
                T(a) &&
                  Promise.resolve(p(a))
                    .then(function (i) {
                      if (!R(a) || F) {
                        var t,
                          n,
                          e,
                          p,
                          d,
                          m,
                          u,
                          v,
                          x = i.length,
                          f =
                            x > 0 &&
                            ((n = (t = {
                              files: i,
                              accept: N,
                              minSize: c,
                              maxSize: o,
                              multiple: l,
                              maxFiles: r,
                              validator: K,
                            }).files),
                            (e = t.accept),
                            (p = t.minSize),
                            (d = t.maxSize),
                            (m = t.multiple),
                            (u = t.maxFiles),
                            (v = t.validator),
                            (!!m || !(n.length > 1)) &&
                              (!m || !(u >= 1) || !(n.length > u)) &&
                              n.every(function (a) {
                                var i = j(P(a, e), 1)[0],
                                  t = j(q(a, p, d), 1)[0],
                                  n = v ? v(a) : null;
                                return i && t && !n;
                              }));
                        ac({
                          isDragAccept: f,
                          isDragReject: x > 0 && !f,
                          isDragActive: !0,
                          type: "setDraggedFiles",
                        }),
                          s && s(a);
                      }
                    })
                    .catch(function (a) {
                      return av(a);
                    });
            },
            [p, s, av, F, N, c, o, l, r, K]
          ),
          af = (0, n.useCallback)(
            function (a) {
              a.preventDefault(), a.persist(), aF(a);
              var i = T(a);
              if (i && a.dataTransfer)
                try {
                  a.dataTransfer.dropEffect = "copy";
                } catch (a) {}
              return i && m && m(a), !1;
            },
            [m, F]
          ),
          ag = (0, n.useCallback)(
            function (a) {
              a.preventDefault(), a.persist(), aF(a);
              var i = am.current.filter(function (a) {
                  return an.current && an.current.contains(a);
                }),
                t = i.indexOf(a.target);
              -1 !== t && i.splice(t, 1),
                (am.current = i),
                !(i.length > 0) &&
                  (ac({
                    type: "setDraggedFiles",
                    isDragActive: !1,
                    isDragAccept: !1,
                    isDragReject: !1,
                  }),
                  T(a) && d && d(a));
            },
            [an, d, F]
          ),
          ab = (0, n.useCallback)(
            function (a, i) {
              var t = [],
                n = [];
              a.forEach(function (a) {
                var i = W(P(a, N), 2),
                  e = i[0],
                  p = i[1],
                  l = W(q(a, c, o), 2),
                  r = l[0],
                  s = l[1],
                  d = K ? K(a) : null;
                if (e && r && !d) t.push(a);
                else {
                  var m = [p, s];
                  d && (m = m.concat(d)),
                    n.push({
                      file: a,
                      errors: m.filter(function (a) {
                        return a;
                      }),
                    });
                }
              }),
                ((!l && t.length > 1) || (l && r >= 1 && t.length > r)) &&
                  (t.forEach(function (a) {
                    n.push({ file: a, errors: [C] });
                  }),
                  t.splice(0)),
                ac({
                  acceptedFiles: t,
                  fileRejections: n,
                  isDragReject: n.length > 0,
                  type: "setFiles",
                }),
                u && u(t, n, i),
                n.length > 0 && x && x(n, i),
                t.length > 0 && v && v(t, i);
            },
            [ac, l, N, c, o, r, u, v, x, K]
          ),
          ah = (0, n.useCallback)(
            function (a) {
              a.preventDefault(),
                a.persist(),
                aF(a),
                (am.current = []),
                T(a) &&
                  Promise.resolve(p(a))
                    .then(function (i) {
                      (!R(a) || F) && ab(i, a);
                    })
                    .catch(function (a) {
                      return av(a);
                    }),
                ac({ type: "reset" });
            },
            [p, ab, av, F]
          ),
          ay = (0, n.useCallback)(
            function () {
              if (as.current) {
                ac({ type: "openDialog" }),
                  J(),
                  window
                    .showOpenFilePicker({ multiple: l, types: G })
                    .then(function (a) {
                      return p(a);
                    })
                    .then(function (a) {
                      ab(a, null), ac({ type: "closeDialog" });
                    })
                    .catch(function (a) {
                      a instanceof DOMException &&
                      ("AbortError" === a.name || a.code === a.ABORT_ERR)
                        ? (aa(a), ac({ type: "closeDialog" }))
                        : a instanceof DOMException &&
                          ("SecurityError" === a.name ||
                            a.code === a.SECURITY_ERR)
                        ? ((as.current = !1),
                          ae.current
                            ? ((ae.current.value = null), ae.current.click())
                            : av(
                                Error(
                                  "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                                )
                              ))
                        : av(a);
                    });
                return;
              }
              ae.current &&
                (ac({ type: "openDialog" }),
                J(),
                (ae.current.value = null),
                ae.current.click());
            },
            [ac, J, aa, b, ab, av, G, l]
          ),
          aw = (0, n.useCallback)(
            function (a) {
              an.current &&
                an.current.isEqualNode(a.target) &&
                (" " === a.key ||
                  "Enter" === a.key ||
                  32 === a.keyCode ||
                  13 === a.keyCode) &&
                (a.preventDefault(), ay());
            },
            [an, ay]
          ),
          ak = (0, n.useCallback)(function () {
            ac({ type: "focus" });
          }, []),
          aj = (0, n.useCallback)(function () {
            ac({ type: "blur" });
          }, []),
          az = (0, n.useCallback)(
            function () {
              D ||
                ((function () {
                  var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    -1 !== a.indexOf("MSIE") ||
                    -1 !== a.indexOf("Trident/") ||
                    -1 !== a.indexOf("Edge/")
                  );
                })()
                  ? setTimeout(ay, 0)
                  : ay());
            },
            [D, ay]
          ),
          aD = function (a) {
            return e ? null : a;
          },
          aO = function (a) {
            return O ? null : aD(a);
          },
          aE = function (a) {
            return E ? null : aD(a);
          },
          aF = function (a) {
            F && a.stopPropagation();
          },
          aA = (0, n.useMemo)(
            function () {
              return function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = a.refKey,
                  t = a.role,
                  n = a.onKeyDown,
                  p = a.onFocus,
                  o = a.onBlur,
                  c = a.onClick,
                  l = a.onDragEnter,
                  r = a.onDragOver,
                  s = a.onDragLeave,
                  d = a.onDrop,
                  m = Y(a, $);
                return H(
                  H(
                    Z(
                      {
                        onKeyDown: aO(I(n, aw)),
                        onFocus: aO(I(p, ak)),
                        onBlur: aO(I(o, aj)),
                        onClick: aD(I(c, az)),
                        onDragEnter: aE(I(l, ax)),
                        onDragOver: aE(I(r, af)),
                        onDragLeave: aE(I(s, ag)),
                        onDrop: aE(I(d, ah)),
                        role:
                          "string" == typeof t && "" !== t ? t : "presentation",
                      },
                      void 0 === i ? "ref" : i,
                      an
                    ),
                    e || O ? {} : { tabIndex: 0 }
                  ),
                  m
                );
              };
            },
            [an, aw, ak, aj, az, ax, af, ag, ah, O, E, e]
          ),
          aC = (0, n.useCallback)(function (a) {
            a.stopPropagation();
          }, []),
          aP = (0, n.useMemo)(
            function () {
              return function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = a.refKey,
                  t = a.onChange,
                  n = a.onClick,
                  e = Y(a, B);
                return H(
                  H(
                    {},
                    Z(
                      {
                        accept: N,
                        multiple: l,
                        type: "file",
                        style: {
                          border: 0,
                          clip: "rect(0, 0, 0, 0)",
                          clipPath: "inset(50%)",
                          height: "1px",
                          margin: "0 -1px -1px 0",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: "1px",
                          whiteSpace: "nowrap",
                        },
                        onChange: aD(I(t, ah)),
                        onClick: aD(I(n, aC)),
                        tabIndex: -1,
                      },
                      void 0 === i ? "ref" : i,
                      ae
                    )
                  ),
                  e
                );
              };
            },
            [ae, t, l, ah, e]
          );
        return H(
          H({}, ao),
          {},
          {
            isFocused: al && !e,
            getRootProps: aA,
            getInputProps: aP,
            rootRef: an,
            inputRef: ae,
            open: aD(ay),
          }
        );
      }
      function ai(a, i) {
        switch (i.type) {
          case "focus":
            return H(H({}, a), {}, { isFocused: !0 });
          case "blur":
            return H(H({}, a), {}, { isFocused: !1 });
          case "openDialog":
            return H(H({}, X), {}, { isFileDialogActive: !0 });
          case "closeDialog":
            return H(H({}, a), {}, { isFileDialogActive: !1 });
          case "setDraggedFiles":
            return H(
              H({}, a),
              {},
              {
                isDragActive: i.isDragActive,
                isDragAccept: i.isDragAccept,
                isDragReject: i.isDragReject,
              }
            );
          case "setFiles":
            return H(
              H({}, a),
              {},
              {
                acceptedFiles: i.acceptedFiles,
                fileRejections: i.fileRejections,
                isDragReject: i.isDragReject,
              }
            );
          case "reset":
            return H({}, X);
          default:
            return a;
        }
      }
      function at() {}
    },
    78990: function (a, i, t) {
      "use strict";
      t.d(i, {
        gm: function () {
          return p;
        },
      });
      var n = t(67294);
      t(85893);
      var e = n.createContext(void 0);
      function p(a) {
        let i = n.useContext(e);
        return a || i || "ltr";
      }
    },
    80650: function (a, i, t) {
      "use strict";
      t.d(i, {
        ck: function () {
          return C;
        },
        fC: function () {
          return A;
        },
        Pc: function () {
          return y;
        },
      });
      var n = t(67294),
        e = t(36206),
        p = t(92896),
        o = t(28771),
        c = t(85893),
        l = t(91276),
        r = t(64757),
        s = t(79698),
        d = t(77342),
        m = t(78990),
        u = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        x = "RovingFocusGroup",
        [f, g, b] = (0, p.B)(x),
        [h, y] = (function (a, i = []) {
          let t = [],
            e = () => {
              let i = t.map((a) => n.createContext(a));
              return function (t) {
                let e = t?.[a] || i;
                return n.useMemo(
                  () => ({ [`__scope${a}`]: { ...t, [a]: e } }),
                  [t, e]
                );
              };
            };
          return (
            (e.scopeName = a),
            [
              function (i, e) {
                let p = n.createContext(e),
                  o = t.length;
                function l(i) {
                  let { scope: t, children: e, ...l } = i,
                    r = t?.[a][o] || p,
                    s = n.useMemo(() => l, Object.values(l));
                  return (0, c.jsx)(r.Provider, { value: s, children: e });
                }
                return (
                  (t = [...t, e]),
                  (l.displayName = i + "Provider"),
                  [
                    l,
                    function (t, c) {
                      let l = c?.[a][o] || p,
                        r = n.useContext(l);
                      if (r) return r;
                      if (void 0 !== e) return e;
                      throw Error(`\`${t}\` must be used within \`${i}\``);
                    },
                  ]
                );
              },
              (function (...a) {
                let i = a[0];
                if (1 === a.length) return i;
                let t = () => {
                  let t = a.map((a) => ({
                    useScope: a(),
                    scopeName: a.scopeName,
                  }));
                  return function (a) {
                    let e = t.reduce((i, { useScope: t, scopeName: n }) => {
                      let e = t(a)[`__scope${n}`];
                      return { ...i, ...e };
                    }, {});
                    return n.useMemo(
                      () => ({ [`__scope${i.scopeName}`]: e }),
                      [e]
                    );
                  };
                };
                return (t.scopeName = i.scopeName), t;
              })(e, ...i),
            ]
          );
        })(x, [b]),
        [w, k] = h(x),
        j = n.forwardRef((a, i) =>
          (0, c.jsx)(f.Provider, {
            scope: a.__scopeRovingFocusGroup,
            children: (0, c.jsx)(f.Slot, {
              scope: a.__scopeRovingFocusGroup,
              children: (0, c.jsx)(z, { ...a, ref: i }),
            }),
          })
        );
      j.displayName = x;
      var z = n.forwardRef((a, i) => {
          let {
              __scopeRovingFocusGroup: t,
              orientation: p,
              loop: l = !1,
              dir: x,
              currentTabStopId: f,
              defaultCurrentTabStopId: b,
              onCurrentTabStopIdChange: h,
              onEntryFocus: y,
              preventScrollOnEntryFocus: k = !1,
              ...j
            } = a,
            z = n.useRef(null),
            D = (0, o.e)(i, z),
            O = (0, m.gm)(x),
            [E = null, A] = (0, d.T)({ prop: f, defaultProp: b, onChange: h }),
            [C, P] = n.useState(!1),
            q = (0, s.W)(y),
            S = g(t),
            R = n.useRef(!1),
            [T, _] = n.useState(0);
          return (
            n.useEffect(() => {
              let a = z.current;
              if (a)
                return (
                  a.addEventListener(u, q), () => a.removeEventListener(u, q)
                );
            }, [q]),
            (0, c.jsx)(w, {
              scope: t,
              orientation: p,
              dir: O,
              loop: l,
              currentTabStopId: E,
              onItemFocus: n.useCallback((a) => A(a), [A]),
              onItemShiftTab: n.useCallback(() => P(!0), []),
              onFocusableItemAdd: n.useCallback(() => _((a) => a + 1), []),
              onFocusableItemRemove: n.useCallback(() => _((a) => a - 1), []),
              children: (0, c.jsx)(r.WV.div, {
                tabIndex: C || 0 === T ? -1 : 0,
                "data-orientation": p,
                ...j,
                ref: D,
                style: { outline: "none", ...a.style },
                onMouseDown: (0, e.M)(a.onMouseDown, () => {
                  R.current = !0;
                }),
                onFocus: (0, e.M)(a.onFocus, (a) => {
                  let i = !R.current;
                  if (a.target === a.currentTarget && i && !C) {
                    let i = new CustomEvent(u, v);
                    if (
                      (a.currentTarget.dispatchEvent(i), !i.defaultPrevented)
                    ) {
                      let a = S().filter((a) => a.focusable);
                      F(
                        [
                          a.find((a) => a.active),
                          a.find((a) => a.id === E),
                          ...a,
                        ]
                          .filter(Boolean)
                          .map((a) => a.ref.current),
                        k
                      );
                    }
                  }
                  R.current = !1;
                }),
                onBlur: (0, e.M)(a.onBlur, () => P(!1)),
              }),
            })
          );
        }),
        D = "RovingFocusGroupItem",
        O = n.forwardRef((a, i) => {
          let {
              __scopeRovingFocusGroup: t,
              focusable: p = !0,
              active: o = !1,
              tabStopId: s,
              ...d
            } = a,
            m = (0, l.M)(),
            u = s || m,
            v = k(D, t),
            x = v.currentTabStopId === u,
            b = g(t),
            { onFocusableItemAdd: h, onFocusableItemRemove: y } = v;
          return (
            n.useEffect(() => {
              if (p) return h(), () => y();
            }, [p, h, y]),
            (0, c.jsx)(f.ItemSlot, {
              scope: t,
              id: u,
              focusable: p,
              active: o,
              children: (0, c.jsx)(r.WV.span, {
                tabIndex: x ? 0 : -1,
                "data-orientation": v.orientation,
                ...d,
                ref: i,
                onMouseDown: (0, e.M)(a.onMouseDown, (a) => {
                  p ? v.onItemFocus(u) : a.preventDefault();
                }),
                onFocus: (0, e.M)(a.onFocus, () => v.onItemFocus(u)),
                onKeyDown: (0, e.M)(a.onKeyDown, (a) => {
                  if ("Tab" === a.key && a.shiftKey) {
                    v.onItemShiftTab();
                    return;
                  }
                  if (a.target !== a.currentTarget) return;
                  let i = (function (a, i, t) {
                    var n;
                    let e =
                      ((n = a.key),
                      "rtl" !== t
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === i &&
                        ["ArrowLeft", "ArrowRight"].includes(e)
                      ) &&
                      !(
                        "horizontal" === i &&
                        ["ArrowUp", "ArrowDown"].includes(e)
                      )
                    )
                      return E[e];
                  })(a, v.orientation, v.dir);
                  if (void 0 !== i) {
                    if (a.metaKey || a.ctrlKey || a.altKey || a.shiftKey)
                      return;
                    a.preventDefault();
                    let e = b()
                      .filter((a) => a.focusable)
                      .map((a) => a.ref.current);
                    if ("last" === i) e.reverse();
                    else if ("prev" === i || "next" === i) {
                      var t, n;
                      "prev" === i && e.reverse();
                      let p = e.indexOf(a.currentTarget);
                      e = v.loop
                        ? ((t = e),
                          (n = p + 1),
                          t.map((a, i) => t[(n + i) % t.length]))
                        : e.slice(p + 1);
                    }
                    setTimeout(() => F(e));
                  }
                }),
              }),
            })
          );
        });
      O.displayName = D;
      var E = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function F(a, i = !1) {
        let t = document.activeElement;
        for (let n of a)
          if (
            n === t ||
            (n.focus({ preventScroll: i }), document.activeElement !== t)
          )
            return;
      }
      var A = j,
        C = O;
    },
    60434: function (a, i, t) {
      "use strict";
      t.d(i, {
        VY: function () {
          return P;
        },
        aV: function () {
          return A;
        },
        fC: function () {
          return F;
        },
        xz: function () {
          return C;
        },
      });
      var n = t(67294),
        e = t(36206),
        p = t(25360),
        o = t(80650),
        c = t(29115),
        l = t(64757),
        r = t(78990),
        s = t(77342),
        d = t(91276),
        m = t(85893),
        u = "Tabs",
        [v, x] = (0, p.b)(u, [o.Pc]),
        f = (0, o.Pc)(),
        [g, b] = v(u),
        h = n.forwardRef((a, i) => {
          let {
              __scopeTabs: t,
              value: n,
              onValueChange: e,
              defaultValue: p,
              orientation: o = "horizontal",
              dir: c,
              activationMode: u = "automatic",
              ...v
            } = a,
            x = (0, r.gm)(c),
            [f, b] = (0, s.T)({ prop: n, onChange: e, defaultProp: p });
          return (0, m.jsx)(g, {
            scope: t,
            baseId: (0, d.M)(),
            value: f,
            onValueChange: b,
            orientation: o,
            dir: x,
            activationMode: u,
            children: (0, m.jsx)(l.WV.div, {
              dir: x,
              "data-orientation": o,
              ...v,
              ref: i,
            }),
          });
        });
      h.displayName = u;
      var y = "TabsList",
        w = n.forwardRef((a, i) => {
          let { __scopeTabs: t, loop: n = !0, ...e } = a,
            p = b(y, t),
            c = f(t);
          return (0, m.jsx)(o.fC, {
            asChild: !0,
            ...c,
            orientation: p.orientation,
            dir: p.dir,
            loop: n,
            children: (0, m.jsx)(l.WV.div, {
              role: "tablist",
              "aria-orientation": p.orientation,
              ...e,
              ref: i,
            }),
          });
        });
      w.displayName = y;
      var k = "TabsTrigger",
        j = n.forwardRef((a, i) => {
          let { __scopeTabs: t, value: n, disabled: p = !1, ...c } = a,
            r = b(k, t),
            s = f(t),
            d = O(r.baseId, n),
            u = E(r.baseId, n),
            v = n === r.value;
          return (0, m.jsx)(o.ck, {
            asChild: !0,
            ...s,
            focusable: !p,
            active: v,
            children: (0, m.jsx)(l.WV.button, {
              type: "button",
              role: "tab",
              "aria-selected": v,
              "aria-controls": u,
              "data-state": v ? "active" : "inactive",
              "data-disabled": p ? "" : void 0,
              disabled: p,
              id: d,
              ...c,
              ref: i,
              onMouseDown: (0, e.M)(a.onMouseDown, (a) => {
                p || 0 !== a.button || !1 !== a.ctrlKey
                  ? a.preventDefault()
                  : r.onValueChange(n);
              }),
              onKeyDown: (0, e.M)(a.onKeyDown, (a) => {
                [" ", "Enter"].includes(a.key) && r.onValueChange(n);
              }),
              onFocus: (0, e.M)(a.onFocus, () => {
                let a = "manual" !== r.activationMode;
                v || p || !a || r.onValueChange(n);
              }),
            }),
          });
        });
      j.displayName = k;
      var z = "TabsContent",
        D = n.forwardRef((a, i) => {
          let {
              __scopeTabs: t,
              value: e,
              forceMount: p,
              children: o,
              ...r
            } = a,
            s = b(z, t),
            d = O(s.baseId, e),
            u = E(s.baseId, e),
            v = e === s.value,
            x = n.useRef(v);
          return (
            n.useEffect(() => {
              let a = requestAnimationFrame(() => (x.current = !1));
              return () => cancelAnimationFrame(a);
            }, []),
            (0, m.jsx)(c.z, {
              present: p || v,
              children: ({ present: t }) =>
                (0, m.jsx)(l.WV.div, {
                  "data-state": v ? "active" : "inactive",
                  "data-orientation": s.orientation,
                  role: "tabpanel",
                  "aria-labelledby": d,
                  hidden: !t,
                  id: u,
                  tabIndex: 0,
                  ...r,
                  ref: i,
                  style: {
                    ...a.style,
                    animationDuration: x.current ? "0s" : void 0,
                  },
                  children: t && o,
                }),
            })
          );
        });
      function O(a, i) {
        return `${a}-trigger-${i}`;
      }
      function E(a, i) {
        return `${a}-content-${i}`;
      }
      D.displayName = z;
      var F = h,
        A = w,
        C = j,
        P = D;
    },
  },
]);
