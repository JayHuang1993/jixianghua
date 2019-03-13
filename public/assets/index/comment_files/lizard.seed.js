var isLizardUserBeta = !1, isInIE = !1;

!function() {
    function i() {
        for (var i = [ "Ctrip_CtripWireless", "Unicom_CtripWireless", "Pro_CtripWireless", "Youth_CtripWireless", "gs_wireless", "sml_wireless", "we_wireless", "AndroidTV_CtripWireless", "Tieyou_TieyouWireless" ], t = RegExp, e = window.navigator.userAgent, n = {}, a = 0; a < i.length; a++) {
            var o = i[a];
            if (new t(i[a] + "_([\\d.]+)$").test(e)) {
                n.isInCtrip = !0, ("gs_wireless" == o || "sml_wireless" == o || "we_wireless" == o) && (n.isNeedWeb = !0), 
                n.ctripUA = o;
                break;
            }
        }
        return n;
    }
    function t(i) {
        function t() {
            window.ActiveXObject ? a = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (a = new XMLHttpRequest());
        }
        function e(i, e) {
            o = i, t(), a.onreadystatechange = n, a.open("GET", e, !0), a.setRequestHeader("Cache-Control", "no-cache"), 
            a.setRequestHeader("Content-Type", "text/plain"), a.send(null);
        }
        function n() {
            if (4 == a.readyState) try {
                var i = {}, t = a.response || a.responseText;
                if (t) for (var e, n = 0; n < u.length; n++) e = u[n], i[e] = (t.match(new RegExp("lizard22ares/(beta|web)/" + e + ".([^.]+)", "g")) || []).sort(function(i) {
                    return -1 == i.indexOf("beta") ? 1 : -1;
                });
                var o = JSON.stringify(i);
                "{}" !== o ? (o += "&" + new Date().getTime() + "&" + d.replace(/(http(s)?)?:?\/\//, ""), 
                window.localStorage.setItem("SEED22ARESMD5", o)) : window.localStorage.removeItem("SEED22ARESMD5");
            } catch (r) {}
        }
        var a, o = "";
        e("lastModified", i);
    }
    function e() {
        try {
            var i = window.localStorage.getItem("GUID");
            if (i && 1 == i.substr(-1)) return !0;
        } catch (t) {}
        return !1;
    }
    function n() {
        var i = window.localStorage.getItem("SEED22ARESMD5");
        if (i) try {
            if (d.replace(/(http(s)?)?:?\/\//, "") !== i.split("&")[2]) return;
            i = i.split("&")[0];
            for (var t, e, n, a = JSON.parse(i), o = 0; o < u.length; o++) t = u[o], n = s[o], 
            e = a[t], e && (e = -1 != n.indexOf("beta") ? e[0] : e[1]), -1 == n.indexOf(e) && (s[o] = n.replace(new RegExp("lizard22ares/(beta|web)/" + t + ".([^.]+)", "g"), e));
        } catch (r) {}
    }
    var a = "pro_20180321105517_";
    isLizardUserBeta = e();
    var o, r = document.getElementsByTagName("script") || [], c = /lizard\.seed\.(src\.)*js.*$/gi, l = "/res/concat?f=", d = "", s = [], u = [ "lizard.parser", "3rdlibs/IEPlugins", "app/c.ty.start", "app/c.ty.start", "lizard.hybrid", "lizard.geoHybrid" ];
    s = isLizardUserBeta ? [ "/resaresonline/fx/lizard22ares/beta/lizard.parser.7ffb48cd.js", "/resaresonline/fx/lizard22ares/beta/3rdlibs/IEPlugins.501f3317.js", "/resaresonline/fx/lizard22ares/beta/app/c.tv.start.10614680.js", "/resaresonline/fx/lizard22ares/beta/app/c.ty.start.baeeff6e.js", "/resaresonline/fx/lizard22ares/beta/lizard.hybrid.071f1b22.js", "/resaresonline/fx/lizard22ares/beta/lizard.geoHybrid.de0ccd8b.js" ] : [ "/resaresonline/fx/lizard22ares/web/lizard.parser.598b530b.js", "/resaresonline/fx/lizard22ares/web/3rdlibs/IEPlugins.b8296936.js", "/resaresonline/fx/lizard22ares/web/app/c.tv.start.8351b24e.js", "/resaresonline/fx/lizard22ares/web/app/c.ty.start.ca9b8e68.js", "/resaresonline/fx/lizard22ares/web/lizard.hybrid.38951db1.js", "/resaresonline/fx/lizard22ares/web/lizard.geoHybrid.b1417c3b.js" ], 
    n();
    var p = s.slice(0, 1), h = i();
    try {
        var g = new Image();
        g.onload = g.onerror = function() {
            window.supportWebP = !(1 != g.height);
        }, g.src = "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoBAAEAAAAMJaQAA3AA/v89WAAAAA==";
    } catch (f) {}
    try {
        if (-1 != window.navigator.userAgent.indexOf("IEMobile")) {
            var b = window.navigator.userAgent.match(/IEMobile\/\d+/);
            b.length > 0 && (b = b[0].split("/")[1], b >= 10 && p.splice(0, 0, s[1]));
        }
        isInIE = window.navigator.userAgent.match(/MSIE\s([\d.]+)/) || window.navigator.userAgent.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
    } catch (f) {}
    h.isInCtrip && ("AndroidTV_CtripWireless" === h.ctripUA ? p.push(s[2]) : "Tieyou_TieyouWireless" === h.ctripUA ? p.push(s[3]) : (p.push(s[4]), 
    p.push(s[5])));
    for (var x, _ = 0; _ < r.length; _++) {
        x = r[_];
        var v = x.getAttribute("src");
        if (v && c.test(v)) {
            o = v;
            var w = v.replace(c, "");
            d = w.substr(0, w.lastIndexOf("/code/lizard"));
            break;
        }
    }
    l = d + l + p.join(","), a && (l += "&" + a), document.write("<script crossorigin src='" + l + "'></script>");
    var y = Element.prototype.appendChild;
    if (Element.prototype.appendChild = function() {
        if (this === document.head) {
            var i = arguments[0];
            return 1 === i.nodeType && "script" === i.tagName.toLowerCase() && i.src.indexOf("//webresource.c-ctrip.com/") > -1 && i.setAttribute("crossorigin", 1), 
            y.apply(this, arguments);
        }
        return y.apply(this, arguments);
    }, o) {
        o = d + "/resaresonline/fx/lizard22ares/latest/default/web/lizard.seed.js";
        try {
            var m = window.localStorage.getItem("SEED22ARESMD5");
            if (m) {
                var k = m.split("&")[1];
                (k && new Date().getTime() - k >= 3e5 || !k) && t(o);
            } else t(o);
        } catch (f) {}
    }
    var A = window.localStorage, T = A.setItem.bind(A);
    void 0 === window.__bfi && (window.__bfi = []);
    var z = function() {
        var i, t = "TEST_PRIVATE_MODEL", e = "1";
        try {
            A.setItem(t, e), i = A.getItem(t), A.removeItem(t);
        } catch (n) {
            return !0;
        }
        return i === e ? !1 : !0;
    }();
    z || isInIE || (window.localStorage.setItem = function() {
        var i = [];
        return function(t, e, n) {
            var a = "noneCachedKey";
            t.toLowerCase().indexOf("_cache") >= 0 && (a = "cachedKey", i.push(t));
            try {
                T(t, e);
            } catch (o) {
                if ("QuotaExceededError" == o.name) {
                    if (n === !0) return;
                    var r = encodeURIComponent(JSON.stringify(A)).length;
                    window.__bfi.push([ "_trackMatrix", "101316", {
                        message: "QuotaExceededError",
                        key: t,
                        type: a
                    }, r ]), i.forEach(function(i) {
                        A.removeItem(i);
                    }), arguments.callee(t, e, !0), i = [];
                } else window.__bfi.push([ "_trackMatrix", "101316", {
                    message: JSON.stringify(o),
                    key: t,
                    type: a
                }, 1 ]);
            }
        };
    }());
}();