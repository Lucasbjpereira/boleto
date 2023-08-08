!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Boleto = t() : e.Boleto = t()
}(window, (function () {
    return function (e) {
        var t = {};
        function r(n) {
            if (t[n]) 
                return t[n].exports;
            
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r),
            o.l = !0,
            o.exports
        }
        return r.m = e,
        r.c = t,
        r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },
        r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) 
                return e;
            
            if (4 & t && "object" == typeof e && e && e.__esModule) 
                return e;
            
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) 
                for (var o in e) 
                    r.d(n, o, function (t) {
                        return e[t]
                    }.bind(null, o));
                
            
            return n
        },
        r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t),
            t
        },
        r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        r.p = "",
        r(r.s = 0)
    }([
        function (e, t, r) {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable =! 0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            var o = r(1),
                a = r(3),
                u = r(4).modulo11,
                i = function () {
                    function e(t) {
                        if (function (e, t) {
                            if (!(e instanceof t)) 
                                throw new TypeError("Cannot call a class as a function")
                            
                        }(this, e), this.bankSlipNumber = t.replace(/[^\d]/g, ""), !this.valid()) 
                            throw new Error("Invalid bank slip number")
                        
                    }
                    var t,
                        r,
                        i;
                    return t = e,
                    (r =[
                        {
                            key: "valid",
                            value: function () {
                                if (47 !== this.bankSlipNumber.length) 
                                    return !1;
                                
                                var e = this.barcode().split(""),
                                    t = e.splice(4, 1);
                                return u(e).toString() === t.toString()
                            }
                        },
                        {
                            key: "barcode",
                            value: function () {
                                return this.bankSlipNumber.replace(/^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/, "$1$5$2$3$4")
                            }
                        },
                        {
                            key: "number",
                            value: function () {
                                return this.bankSlipNumber
                            }
                        },
                        {
                            key: "prettyNumber",
                            value: function () {
                                return this.bankSlipNumber.replace(/^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d{1})(\d{14})$/, "$1.$2 $3.$4 $5.$6 $7 $8")
                            }
                        }, {
                            key: "bank",
                            value: function () {
                                switch (this.barcode().substr(0, 3)) {
                                    case "001":
                                        return "Banco do Brasil";
                                    case "007":
                                        return "BNDES";
                                    case "033":
                                        return "Santander";
                                    case "069":
                                        return "Crefisa";
                                    case "077":
                                        return "Banco Inter";
                                    case "102":
                                        return "XP Investimentos";
                                    case "104":
                                        return "Caixa Econômica Federal";
                                    case "140":
                                        return "Easynvest";
                                    case "197":
                                        return "Stone";
                                    case "208":
                                        return "BTG Pactual";
                                    case "212":
                                        return "Banco Original";
                                    case "237":
                                        return "Bradesco";
                                    case "260":
                                        return "Nu Pagamentos";
                                    case "341":
                                        return "Itaú";
                                    case "389":
                                        return "Banco Mercantil do Brasil";
                                    case "422":
                                        return "Banco Safra";
                                    case "505":
                                        return "Credit Suisse";
                                    case "633":
                                        return "Banco Rendimento";
                                    case "652":
                                        return "Itaú Unibanco";
                                    case "735":
                                        return "Banco Neon";
                                    case "739":
                                        return "Banco Cetelem";
                                    case "745":
                                        return "Citibank";
                                    default:
                                        return "Unknown"
                                }
                            }
                        }, {
                            key: "currency",
                            value: function () {
                                switch (this.barcode()[3]) {
                                    case "9":
                                        return {code: "BRL", symbol: "R$", decimal: ","};
                                    default:
                                        return "Unknown"
                                }
                            }
                        }, {
                            key: "checksum",
                            value: function () {
                                return this.barcode()[4]
                            }
                        }, {
                            key: "expirationDate",
                            value: function () {
                                var e = new Date(8762364e5),
                                    t = this.barcode().substr(5, 4);
                                return new Date(e.getTime() + 864e5 * t)
                            }
                        }, {
                            key: "amount",
                            value: function () {
                                return(this.barcode().substr(9, 10) / 100).toFixed(2)
                            }
                        }, {
                            key: "prettyAmount",
                            value: function () {
                                var e = this.currency();
                                return "Unknown" === e ? this.amount() : "".concat(e.symbol, " ").concat(this.amount().replace(".", e.decimal))
                            }
                        }, {
                            key: "toSVG",
                            value: function (e) {
                                var t = a.encode(this.barcode());
                                return new o(t).render(e)
                            }
                        }
                    ]) && n(t.prototype, r),
                    i && n(t, i),
                    e
                }();
            e.exports = i
        },
        function (e, t, r) {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable =! 0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            var o = r(2),
                a = function () {
                    function e(t, r) {
                        !function (e, t) {
                            if (!(e instanceof t)) 
                                throw new TypeError("Cannot call a class as a function")
                            
                        }(this, e),
                        this.stripes = t.split("").map((function (e) {
                            return parseInt(e, 10)
                        })),
                        this.stripeWidth = r || 4
                    }
                    var t,
                        r,
                        a;
                    return t = e,
                    a = [
                        {
                            key: "color",
                            value: function (e) {
                                return e % 2 ? "#ffffff" : "#000000"
                            }
                        }
                    ],
                    (r =[
                        {
                            key: "render",
                            value: function (t) {
                                for (var r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = 0, a = 0, u = 0; u < this.stripes.length; u += 1, n += a) {
                                    a = this.stripeWidth * this.stripes[u];
                                    var i = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                    i.setAttribute("width", a),
                                    i.setAttribute("height", 100),
                                    i.setAttribute("fill", e.color(u)),
                                    i.setAttribute("x", n),
                                    i.setAttribute("y", 0),
                                    r.appendChild(i)
                                }
                                return r.setAttribute("width", "100%"),
                                r.setAttribute("height", "100%"),
                                r.setAttribute("viewBox", "0 0 ".concat(this.viewBoxWidth(), " 100")),
                                void 0 === t ? o.serializeToString(r) : (document.querySelector(t).appendChild(r), null)
                            }
                        }, {
                            key: "viewBoxWidth",
                            value: function () {
                                return this.stripes.reduce((function (e, t) {
                                    return e + t
                                }), 0) * this.stripeWidth
                            }
                        }
                    ]) && n(t.prototype, r),
                    a && n(t, a),
                    e
                }();
            e.exports = a
        },
        function (e, t, r) {
            var n,
                o,
                a;
            o = [],
            void 0 === (a = "function" == typeof(n = function () {
                var e = function (e) {
                        var t = e.tagName;
                        return "http://www.w3.org/1999/xhtml" === e.namespaceURI && (t = t.toLowerCase()),
                        t
                    },
                    t = function (e) {
                        return Array.prototype.map.call(e.childNodes, (function (e) {
                            return n(e)
                        })).join("")
                    },
                    r = function (r, n) {
                        var o = "<" + e(r);
                        return o += function (e, t) {
                            return Array.prototype.map.call(e.attributes || e.attrs, (function (e) {
                                return e.name
                            })).indexOf("xmlns") >= 0 || ! t && e.namespaceURI === e.parentNode.namespaceURI ? "" : ' xmlns="' + e.namespaceURI + '"'
                        }(r, n),
                        Array.prototype.forEach.call(r.attributes || r.attrs, (function (e) {
                            o += function (e) {
                                var t = e.value;
                                return " " + e.name + '="' + function (e) {
                                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
                                }(t) + '"'
                            }(e)
                        })),
                        r.childNodes.length > 0 ? (o += ">", o += t(r), o += "</" + e(r) + ">") : o += "/>",
                        o
                    },
                    n = function (e, n) {
                        var o = n && n.rootNode;
                        return "#document" === e.nodeName || "#document-fragment" === e.nodeName ? t(e) : e.tagName ? r(e, o) : "#text" === e.nodeName ? function (e) {
                            var t = e.nodeValue || e.value || "";
                            return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                        }(e) : "#comment" === e.nodeName ? function (e) {
                            return "\x3c!--" + e.data.replace(/-/g, "&#45;") + "--\x3e"
                        }(e) : "#cdata-section" === e.nodeName ? function (e) {
                            return "<![CDATA[" + e.nodeValue + "]]>"
                        }(e) : void 0
                    };
                return {
                    serializeToString: function (e) {
                        return n(e, {
                            rootNode: !0
                        }).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "")
                    }
                }
            }) ? n.apply(t, o) : n) || (e.exports = a)
        },
        function (e, t) {
            var r = [
                "11221",
                "21112",
                "12112",
                "22111",
                "11212",
                "21211",
                "12211",
                "11122",
                "21121",
                "12121"
            ];
            function n(e) {
                for (var t = r[Math.floor(e / 10)], n = r[e % 10], o = "", a = 0; a < 5; a += 1) 
                    o += t[a],
                    o += n[a];
                
                return o
            }
            e.exports = {
                encode: function (e) {
                    return "1111" + e.match(/(..?)/g).map(n).join("") + "211"
                }
            }
        },
        function (e, t) {
            e.exports = {
                modulo11: function (e) {
                    var t = e;
                    "string" == typeof t && (t = t.split("")),
                    t.reverse();
                    for (var r = 0, n = 0; n < t.length; n += 1) 
                        r += (n % 8 + 2) * t[n];
                    
                    return(11 - r % 11) % 10 || 1
                }
            }
        }
    ])
}));
