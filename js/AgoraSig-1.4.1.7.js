! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Signal = t() : e.Signal = t()
}(window, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(r, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 47)
    }([function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        var n, r, i = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var l, u = [],
            f = !1,
            h = -1;

        function c() {
            f && l && (f = !1, l.length ? u = l.concat(u) : h = -1, u.length && d())
        }

        function d() {
            if (!f) {
                var e = s(c);
                f = !0;
                for (var t = u.length; t;) {
                    for (l = u, u = []; ++h < t;) l && l[h].run();
                    h = -1, t = u.length
                }
                l = null, f = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function _(e, t) {
            this.fun = e, this.array = t
        }

        function p() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new _(e, t)), 1 !== u.length || f || s(d)
        }, _.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(e, t) {
        "function" == typeof Object.create ? e.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = Object.keys || function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            };
        e.exports = h;
        var o = n(5);
        o.inherits = n(2);
        var a = n(13),
            s = n(11);
        o.inherits(h, a);
        for (var l = i(s.prototype), u = 0; u < l.length; u++) {
            var f = l[u];
            h.prototype[f] || (h.prototype[f] = s.prototype[f])
        }

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", c)
        }

        function c() {
            this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this)
        }

        function d(e) {
            e.end()
        }
        Object.defineProperty(h.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), Object.defineProperty(h.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
            }
        }), h.prototype._destroy = function(e, t) {
            this.push(null), this.end(), r.nextTick(t, e)
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var r = n(23),
                i = n(24),
                o = n(12);

            function a() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
            }

            function l(e, t, n) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, e)
                }
                return u(this, e, t, n)
            }

            function u(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                    if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                    l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = c(e, t);
                    return e
                }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | _(t, n),
                        i = (e = s(e, r)).write(t, n);
                    i !== r && (e = e.slice(0, i));
                    return e
                }(e, t, n) : function(e, t) {
                    if (l.isBuffer(t)) {
                        var n = 0 | d(t.length);
                        return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                            return e != e
                        }(t.length) ? s(e, 0) : c(e, t);
                        if ("Buffer" === t.type && o(t.data)) return c(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function f(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(e, t) {
                if (f(t), e = s(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function c(e, t) {
                var n = t.length < 0 ? 0 : 0 | d(t.length);
                e = s(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }

            function d(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function _(e, t) {
                if (l.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return F(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Z(e).length;
                    default:
                        if (r) return F(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function p(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function g(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (i) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, r, i);
                if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, n, r, i) {
                var o, a = 1,
                    s = e.length,
                    l = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, l /= 2, n /= 2
                }

                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (i) {
                    var f = -1;
                    for (o = n; o < s; o++)
                        if (u(e, o) === u(t, -1 === f ? 0 : o - f)) {
                            if (-1 === f && (f = o), o - f + 1 === l) return f * a
                        } else -1 !== f && (o -= o - f), f = -1
                } else
                    for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                        for (var h = !0, c = 0; c < l; c++)
                            if (u(e, o + c) !== u(t, c)) {
                                h = !1;
                                break
                            }
                        if (h) return o
                    }
                return -1
            }

            function v(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[n + a] = s
                }
                return a
            }

            function y(e, t, n, r) {
                return j(F(t, e.length - n), e, n, r)
            }

            function b(e, t, n, r) {
                return j(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function w(e, t, n, r) {
                return b(e, t, n, r)
            }

            function E(e, t, n, r) {
                return j(Z(t), e, n, r)
            }

            function k(e, t, n, r) {
                return j(function(e, t) {
                    for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                    return o
                }(t, e.length - n), e, n, r)
            }

            function S(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function x(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n;) {
                    var o, a, s, l, u = e[i],
                        f = null,
                        h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + h <= n) switch (h) {
                        case 1:
                            u < 128 && (f = u);
                            break;
                        case 2:
                            128 == (192 & (o = e[i + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (f = l);
                            break;
                        case 3:
                            o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (f = l);
                            break;
                        case 4:
                            o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (f = l)
                    }
                    null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += h
                }
                return function(e) {
                    var t = e.length;
                    if (t <= T) return String.fromCharCode.apply(String, e);
                    var n = "",
                        r = 0;
                    for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));
                    return n
                }(r)
            }
            t.Buffer = l, t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return l.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
                return e.__proto__ = l.prototype, e
            }, l.from = function(e, t, n) {
                return u(null, e, t, n)
            }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })), l.alloc = function(e, t, n) {
                return function(e, t, n, r) {
                    return f(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
                }(null, e, t, n)
            }, l.allocUnsafe = function(e) {
                return h(null, e)
            }, l.allocUnsafeSlow = function(e) {
                return h(null, e)
            }, l.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, l.compare = function(e, t) {
                if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }, l.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function(e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return l.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = l.allocUnsafe(t),
                    i = 0;
                for (n = 0; n < e.length; ++n) {
                    var a = e[n];
                    if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), i += a.length
                }
                return r
            }, l.byteLength = _, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, l.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, l.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, l.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : function(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return L(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return x(this, t, n);
                        case "ascii":
                            return A(this, t, n);
                        case "latin1":
                        case "binary":
                            return R(this, t, n);
                        case "base64":
                            return S(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return I(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }.apply(this, arguments)
            }, l.prototype.equals = function(e) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === l.compare(this, e)
            }, l.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, l.prototype.compare = function(e, t, n, r, i) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                for (var o = i - r, a = n - t, s = Math.min(o, a), u = this.slice(r, i), f = e.slice(t, n), h = 0; h < s; ++h)
                    if (u[h] !== f[h]) {
                        o = u[h], a = f[h];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }, l.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, l.prototype.indexOf = function(e, t, n) {
                return g(this, e, t, n, !0)
            }, l.prototype.lastIndexOf = function(e, t, n) {
                return g(this, e, t, n, !1)
            }, l.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return v(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return y(this, e, t, n);
                    case "ascii":
                        return b(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return w(this, e, t, n);
                    case "base64":
                        return E(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, e, t, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, l.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var T = 4096;

            function A(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function R(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function L(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = t; o < n; ++o) i += P(e[o]);
                return i
            }

            function I(e, t, n) {
                for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function N(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function O(e, t, n, r, i, o) {
                if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function B(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function M(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
            }

            function U(e, t, n, r, i, o) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function D(e, t, n, r, o) {
                return o || U(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
            }

            function C(e, t, n, r, o) {
                return o || U(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
            }
            l.prototype.slice = function(e, t) {
                var n, r = this.length;
                if (e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
                else {
                    var i = t - e;
                    n = new l(i, void 0);
                    for (var o = 0; o < i; ++o) n[o] = this[o + e]
                }
                return n
            }, l.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || N(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                return r
            }, l.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || N(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, l.prototype.readUInt8 = function(e, t) {
                return t || N(e, 1, this.length), this[e]
            }, l.prototype.readUInt16LE = function(e, t) {
                return t || N(e, 2, this.length), this[e] | this[e + 1] << 8
            }, l.prototype.readUInt16BE = function(e, t) {
                return t || N(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, l.prototype.readUInt32LE = function(e, t) {
                return t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, l.prototype.readUInt32BE = function(e, t) {
                return t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, l.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || N(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, l.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || N(e, t, this.length);
                for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, l.prototype.readInt8 = function(e, t) {
                return t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, l.prototype.readInt16LE = function(e, t) {
                t || N(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, l.prototype.readInt16BE = function(e, t) {
                t || N(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, l.prototype.readInt32LE = function(e, t) {
                return t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, l.prototype.readInt32BE = function(e, t) {
                return t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, l.prototype.readFloatLE = function(e, t) {
                return t || N(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, l.prototype.readFloatBE = function(e, t) {
                return t || N(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, l.prototype.readDoubleLE = function(e, t) {
                return t || N(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, l.prototype.readDoubleBE = function(e, t) {
                return t || N(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, l.prototype.writeUIntLE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                return t + n
            }, l.prototype.writeUIntBE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + n
            }, l.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, l.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
            }, l.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
            }, l.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4
            }, l.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
            }, l.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    O(this, e, t, n, i - 1, -i)
                }
                var o = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + n
            }, l.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    O(this, e, t, n, i - 1, -i)
                }
                var o = n - 1,
                    a = 1,
                    s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + n
            }, l.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, l.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
            }, l.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
            }, l.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4
            }, l.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
            }, l.prototype.writeFloatLE = function(e, t, n) {
                return D(this, e, t, !0, n)
            }, l.prototype.writeFloatBE = function(e, t, n) {
                return D(this, e, t, !1, n)
            }, l.prototype.writeDoubleLE = function(e, t, n) {
                return C(this, e, t, !0, n)
            }, l.prototype.writeDoubleBE = function(e, t, n) {
                return C(this, e, t, !1, n)
            }, l.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var i, o = r - n;
                if (this === e && n < t && t < r)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                return o
            }, l.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var o;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < n; ++o) this[o] = e;
                else {
                    var a = l.isBuffer(e) ? e : F(new l(e, r).toString()),
                        s = a.length;
                    for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
                }
                return this
            };
            var z = /[^+\/0-9A-Za-z-_]/g;

            function P(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function F(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function Z(e) {
                return r.toByteArray(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(z, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function j(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }
        }).call(this, n(0))
    }, function(e, t, n) {
        (function(e) {
            function n(e) {
                return Object.prototype.toString.call(e)
            }
            t.isArray = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
            }, t.isBoolean = function(e) {
                return "boolean" == typeof e
            }, t.isNull = function(e) {
                return null === e
            }, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = function(e) {
                return "number" == typeof e
            }, t.isString = function(e) {
                return "string" == typeof e
            }, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = function(e) {
                return void 0 === e
            }, t.isRegExp = function(e) {
                return "[object RegExp]" === n(e)
            }, t.isObject = function(e) {
                return "object" == typeof e && null !== e
            }, t.isDate = function(e) {
                return "[object Date]" === n(e)
            }, t.isError = function(e) {
                return "[object Error]" === n(e) || e instanceof Error
            }, t.isFunction = function(e) {
                return "function" == typeof e
            }, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = e.isBuffer
        }).call(this, n(4).Buffer)
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
                nextTick: function(e, n, r, i) {
                    if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                    var o, a, s = arguments.length;
                    switch (s) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick(function() {
                                e.call(null, n)
                            });
                        case 3:
                            return t.nextTick(function() {
                                e.call(null, n, r)
                            });
                        case 4:
                            return t.nextTick(function() {
                                e.call(null, n, r, i)
                            });
                        default:
                            for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                            return t.nextTick(function() {
                                e.apply(null, o)
                            })
                    }
                }
            } : e.exports = t
        }).call(this, n(1))
    }, function(e, t, n) {
        var r = n(4),
            i = r.Buffer;

        function o(e, t) {
            for (var n in e) t[n] = e[n]
        }

        function a(e, t, n) {
            return i(e, t, n)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (o(r, t), t.Buffer = a), o(i, a), a.from = function(e, t, n) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, n)
        }, a.alloc = function(e, t, n) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var r = i(e);
            return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }, a.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e)
        }, a.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return r.SlowBuffer(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.assign = function(e) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var n = t.shift();
                if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (var r in n) i(n, r) && (e[r] = n[r])
                }
            }
            return e
        }, t.shrinkBuf = function(e, t) {
            return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
        };
        var o = {
                arraySet: function(e, t, n, r, i) {
                    if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
                    else
                        for (var o = 0; o < r; o++) e[i + o] = t[n + o]
                },
                flattenChunks: function(e) {
                    var t, n, r, i, o, a;
                    for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
                    for (a = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) o = e[t], a.set(o, i), i += o.length;
                    return a
                }
            },
            a = {
                arraySet: function(e, t, n, r, i) {
                    for (var o = 0; o < r; o++) e[i + o] = t[n + o]
                },
                flattenChunks: function(e) {
                    return [].concat.apply([], e)
                }
            };
        t.setTyped = function(e) {
            e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, o)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, a))
        }, t.setTyped(r)
    }, function(e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(e) {
            return "function" == typeof e
        }

        function i(e) {
            return "object" == typeof e && null !== e
        }

        function o(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
            if (! function(e) {
                    return "number" == typeof e
                }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function(e) {
            var t, n, a, s, l, u;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw f.context = t, f
            }
            if (o(n = this._events[e])) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (i(n))
                for (s = Array.prototype.slice.call(arguments, 1), a = (u = n.slice()).length, l = 0; l < a; l++) u[l].apply(this, s);
            return !0
        }, n.prototype.addListener = function(e, t) {
            var a;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
            if (!r(t)) throw TypeError("listener must be a function");
            var n = !1;

            function i() {
                this.removeListener(e, i), n || (n = !0, t.apply(this, arguments))
            }
            return i.listener = t, this.on(e, i), this
        }, n.prototype.removeListener = function(e, t) {
            var n, o, a, s;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (a = (n = this._events[e]).length, o = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (i(n)) {
                for (s = a; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        o = s;
                        break
                    }
                if (o < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r(n = this._events[e])) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function(e) {
            return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, function(e, t, n) {
        (t = e.exports = n(13)).Stream = t, t.Readable = t, t.Writable = n(11), t.Duplex = n(3), t.Transform = n(17), t.PassThrough = n(32)
    }, function(e, t, n) {
        "use strict";
        (function(t, r, i) {
            var o = n(6);

            function a(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(e, t, n) {
                        var r = e.entry;
                        e.entry = null;
                        for (; r;) {
                            var i = r.callback;
                            t.pendingcb--, i(n), r = r.next
                        }
                        t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                    }(t, e)
                }
            }
            e.exports = v;
            var s, l = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : o.nextTick;
            v.WritableState = m;
            var u = n(5);
            u.inherits = n(2);
            var f = {
                    deprecate: n(31)
                },
                h = n(14),
                c = n(7).Buffer,
                d = i.Uint8Array || function() {};
            var _, p = n(15);

            function g() {}

            function m(e, t) {
                s = s || n(3), e = e || {};
                var r = t instanceof s;
                this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                var i = e.highWaterMark,
                    u = e.writableHighWaterMark,
                    f = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (u || 0 === u) ? u : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var h = !1 === e.decodeStrings;
                this.decodeStrings = !h, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    ! function(e, t) {
                        var n = e._writableState,
                            r = n.sync,
                            i = n.writecb;
                        if (function(e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(n), t) ! function(e, t, n, r, i) {
                            --t.pendingcb, n ? (o.nextTick(i, r), o.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (i(r), e._writableState.errorEmitted = !0, e.emit("error", r), S(e, t))
                        }(e, n, r, t, i);
                        else {
                            var a = E(n);
                            a || n.corked || n.bufferProcessing || !n.bufferedRequest || w(e, n), r ? l(b, e, n, a, i) : b(e, n, a, i)
                        }
                    }(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
            }

            function v(e) {
                if (s = s || n(3), !(_.call(v, this) || this instanceof s)) return new v(e);
                this._writableState = new m(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), h.call(this)
            }

            function y(e, t, n, r, i, o, a) {
                t.writelen = r, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function b(e, t, n, r) {
                n || function(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, r(), S(e, t)
            }

            function w(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount,
                        i = new Array(r),
                        o = t.corkedRequestsFree;
                    o.entry = n;
                    for (var s = 0, l = !0; n;) i[s] = n, n.isBuf || (l = !1), n = n.next, s += 1;
                    i.allBuffers = l, y(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
                } else {
                    for (; n;) {
                        var u = n.chunk,
                            f = n.encoding,
                            h = n.callback;
                        if (y(e, t, !1, t.objectMode ? 1 : u.length, u, f, h), n = n.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = n, t.bufferProcessing = !1
            }

            function E(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function k(e, t) {
                e._final(function(n) {
                    t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), S(e, t)
                })
            }

            function S(e, t) {
                var n = E(t);
                return n && (! function(e, t) {
                    t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(k, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
                }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n
            }
            u.inherits(v, h), m.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(m.prototype, "buffer", {
                            get: f.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (_ = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
                    value: function(e) {
                        return !!_.call(this, e) || this === v && (e && e._writableState instanceof m)
                    }
                })) : _ = function(e) {
                    return e instanceof this
                }, v.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }, v.prototype.write = function(e, t, n) {
                    var r = this._writableState,
                        i = !1,
                        a = !r.objectMode && function(e) {
                            return c.isBuffer(e) || e instanceof d
                        }(e);
                    return a && !c.isBuffer(e) && (e = function(e) {
                        return c.from(e)
                    }(e)), "function" == typeof t && (n = t, t = null), a ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof n && (n = g), r.ended ? function(e, t) {
                        var n = new Error("write after end");
                        e.emit("error", n), o.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, r) {
                        var i = !0,
                            a = !1;
                        return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(r, a), i = !1), i
                    }(this, r, e, n)) && (r.pendingcb++, i = function(e, t, n, r, i, o) {
                        if (!n) {
                            var a = function(e, t, n) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = c.from(t, n));
                                return t
                            }(t, r, i);
                            r !== a && (n = !0, i = "buffer", r = a)
                        }
                        var s = t.objectMode ? 1 : r.length;
                        t.length += s;
                        var l = t.length < t.highWaterMark;
                        l || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var u = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: r,
                                encoding: i,
                                isBuf: n,
                                callback: o,
                                next: null
                            }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else y(e, t, !1, s, r, i, o);
                        return l
                    }(this, r, a, e, t, n)), i
                }, v.prototype.cork = function() {
                    this._writableState.corked++
                }, v.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
                }, v.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(v.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), v.prototype._write = function(e, t, n) {
                    n(new Error("_write() is not implemented"))
                }, v.prototype._writev = null, v.prototype.end = function(e, t, n) {
                    var r = this._writableState;
                    "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function(e, t, n) {
                        t.ending = !0, S(e, t), n && (t.finished ? o.nextTick(n) : e.once("finish", n));
                        t.ended = !0, e.writable = !1
                    }(this, r, n)
                }, Object.defineProperty(v.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), v.prototype.destroy = p.destroy, v.prototype._undestroy = p.undestroy, v.prototype._destroy = function(e, t) {
                    this.end(), t(e)
                }
        }).call(this, n(1), n(29).setImmediate, n(0))
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        "use strict";
        (function(t, r) {
            var i = n(6);
            e.exports = y;
            var o, a = n(12);
            y.ReadableState = v;
            n(9).EventEmitter;
            var s = function(e, t) {
                    return e.listeners(t).length
                },
                l = n(14),
                u = n(7).Buffer,
                f = t.Uint8Array || function() {};
            var h = n(5);
            h.inherits = n(2);
            var c = n(26),
                d = void 0;
            d = c && c.debuglog ? c.debuglog("stream") : function() {};
            var _, p = n(27),
                g = n(15);
            h.inherits(y, l);
            var m = ["error", "close", "destroy", "pause", "resume"];

            function v(e, t) {
                o = o || n(3), e = e || {};
                var r = t instanceof o;
                this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                var i = e.highWaterMark,
                    a = e.readableHighWaterMark,
                    s = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (_ || (_ = n(16).StringDecoder), this.decoder = new _(e.encoding), this.encoding = e.encoding)
            }

            function y(e) {
                if (o = o || n(3), !(this instanceof y)) return new y(e);
                this._readableState = new v(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), l.call(this)
            }

            function b(e, t, n, r, i) {
                var o, a = e._readableState;
                null === t ? (a.reading = !1, function(e, t) {
                    if (t.ended) return;
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                    }
                    t.ended = !0, S(e)
                }(e, a)) : (i || (o = function(e, t) {
                    var n;
                    (function(e) {
                        return u.isBuffer(e) || e instanceof f
                    })(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
                    return n
                }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function(e) {
                    return u.from(e)
                }(t)), r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? w(e, a, t, !1) : T(e, a)) : w(e, a, t, !1))) : r || (a.reading = !1));
                return function(e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                }(a)
            }

            function w(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && S(e)), T(e, t)
            }
            Object.defineProperty(y.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), y.prototype.destroy = g.destroy, y.prototype._undestroy = g.undestroy, y.prototype._destroy = function(e, t) {
                this.push(null), t(e)
            }, y.prototype.push = function(e, t) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t), t = ""), n = !0), b(this, e, t, !1, n)
            }, y.prototype.unshift = function(e) {
                return b(this, e, null, !0, !1)
            }, y.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, y.prototype.setEncoding = function(e) {
                return _ || (_ = n(16).StringDecoder), this._readableState.decoder = new _(e), this._readableState.encoding = e, this
            };
            var E = 8388608;

            function k(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    return e >= E ? e = E : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function S(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (d("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(x, e) : x(e))
            }

            function x(e) {
                d("emit readable"), e.emit("readable"), I(e)
            }

            function T(e, t) {
                t.readingMore || (t.readingMore = !0, i.nextTick(A, e, t))
            }

            function A(e, t) {
                for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (d("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                t.readingMore = !1
            }

            function R(e) {
                d("readable nexttick read 0"), e.read(0)
            }

            function L(e, t) {
                t.reading || (d("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0)
            }

            function I(e) {
                var t = e._readableState;
                for (d("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function N(e, t) {
                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function(e, t, n) {
                    var r;
                    e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function(e, t) {
                        var n = t.head,
                            r = 1,
                            i = n.data;
                        e -= i.length;
                        for (; n = n.next;) {
                            var o = n.data,
                                a = e > o.length ? o.length : e;
                            if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                                a === o.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                                break
                            }++r
                        }
                        return t.length -= r, i
                    }(e, t) : function(e, t) {
                        var n = u.allocUnsafe(e),
                            r = t.head,
                            i = 1;
                        r.data.copy(n), e -= r.data.length;
                        for (; r = r.next;) {
                            var o = r.data,
                                a = e > o.length ? o.length : e;
                            if (o.copy(n, n.length - e, 0, a), 0 === (e -= a)) {
                                a === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                                break
                            }++i
                        }
                        return t.length -= i, n
                    }(e, t);
                    return r
                }(e, t.buffer, t.decoder), n);
                var n
            }

            function O(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, i.nextTick(B, t, e))
            }

            function B(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function M(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            }
            y.prototype.read = function(e) {
                d("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    n = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return d("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? O(this) : S(this), null;
                if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && O(this), null;
                var r, i = t.needReadable;
                return d("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && d("length less than watermark", i = !0), t.ended || t.reading ? d("reading or ended", i = !1) : i && (d("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = k(n, t))), null === (r = e > 0 ? N(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && O(this)), null !== r && this.emit("data", r), r
            }, y.prototype._read = function(e) {
                this.emit("error", new Error("_read() is not implemented"))
            }, y.prototype.pipe = function(e, t) {
                var n = this,
                    o = this._readableState;
                switch (o.pipesCount) {
                    case 0:
                        o.pipes = e;
                        break;
                    case 1:
                        o.pipes = [o.pipes, e];
                        break;
                    default:
                        o.pipes.push(e)
                }
                o.pipesCount += 1, d("pipe count=%d opts=%j", o.pipesCount, t);
                var l = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? f : y;

                function u(t, r) {
                    d("onunpipe"), t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, d("cleanup"), e.removeListener("close", m), e.removeListener("finish", v), e.removeListener("drain", h), e.removeListener("error", g), e.removeListener("unpipe", u), n.removeListener("end", f), n.removeListener("end", y), n.removeListener("data", p), c = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h())
                }

                function f() {
                    d("onend"), e.end()
                }
                o.endEmitted ? i.nextTick(l) : n.once("end", l), e.on("unpipe", u);
                var h = function(e) {
                    return function() {
                        var t = e._readableState;
                        d("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, I(e))
                    }
                }(n);
                e.on("drain", h);
                var c = !1;
                var _ = !1;

                function p(t) {
                    d("ondata"), _ = !1, !1 !== e.write(t) || _ || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== M(o.pipes, e)) && !c && (d("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, _ = !0), n.pause())
                }

                function g(t) {
                    d("onerror", t), y(), e.removeListener("error", g), 0 === s(e, "error") && e.emit("error", t)
                }

                function m() {
                    e.removeListener("finish", v), y()
                }

                function v() {
                    d("onfinish"), e.removeListener("close", m), y()
                }

                function y() {
                    d("unpipe"), n.unpipe(e)
                }
                return n.on("data", p),
                    function(e, t, n) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                        e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                    }(e, "error", g), e.once("close", m), e.once("finish", v), e.emit("pipe", n), o.flowing || (d("pipe resume"), n.resume()), e
            }, y.prototype.unpipe = function(e) {
                var t = this._readableState,
                    n = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);
                if (!e) {
                    var r = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
                    return this
                }
                var a = M(t.pipes, e);
                return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
            }, y.prototype.on = function(e, t) {
                var n = l.prototype.on.call(this, e, t);
                if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) {
                    var r = this._readableState;
                    r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && S(this) : i.nextTick(R, this))
                }
                return n
            }, y.prototype.addListener = y.prototype.on, y.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (d("resume"), e.flowing = !0, function(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(L, e, t))
                }(this, e)), this
            }, y.prototype.pause = function() {
                return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, y.prototype.wrap = function(e) {
                var t = this,
                    n = this._readableState,
                    r = !1;
                for (var i in e.on("end", function() {
                        if (d("wrapped end"), n.decoder && !n.ended) {
                            var e = n.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(i) {
                        (d("wrapped data"), n.decoder && (i = n.decoder.write(i)), !n.objectMode || null !== i && void 0 !== i) && ((n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause())))
                    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var o = 0; o < m.length; o++) e.on(m[o], this.emit.bind(this, m[o]));
                return this._read = function(t) {
                    d("wrapped _read", t), r && (r = !1, e.resume())
                }, this
            }, Object.defineProperty(y.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), y._fromList = N
        }).call(this, n(0), n(1))
    }, function(e, t, n) {
        e.exports = n(9).EventEmitter
    }, function(e, t, n) {
        "use strict";
        var r = n(6);

        function i(e, t) {
            e.emit("error", t)
        }
        e.exports = {
            destroy: function(e, t) {
                var n = this,
                    o = this._readableState && this._readableState.destroyed,
                    a = this._writableState && this._writableState.destroyed;
                return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                    !t && e ? (r.nextTick(i, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
                }), this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(7).Buffer,
            i = r.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function o(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e) return "utf8";
                    for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                return t || e
            }(e), this.encoding) {
                case "utf16le":
                    this.text = l, this.end = u, t = 4;
                    break;
                case "utf8":
                    this.fillLast = s, t = 4;
                    break;
                case "base64":
                    this.text = f, this.end = h, t = 3;
                    break;
                default:
                    return this.write = c, void(this.end = d)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
        }

        function a(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function s(e) {
            var t = this.lastTotal - this.lastNeed,
                n = function(e, t, n) {
                    if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                    }
                }(this, e);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function l(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function u(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }

        function f(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
        }

        function h(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function c(e) {
            return e.toString(this.encoding)
        }

        function d(e) {
            return e && e.length ? this.write(e) : ""
        }
        t.StringDecoder = o, o.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, n;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
        }, o.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }, o.prototype.text = function(e, t) {
            var n = function(e, t, n) {
                var r = t.length - 1;
                if (r < n) return 0;
                var i = a(t[r]);
                if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                if (--r < n || -2 === i) return 0;
                if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                if (--r < n || -2 === i) return 0;
                if ((i = a(t[r])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                return 0
            }(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
        }, o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = o;
        var r = n(3),
            i = n(5);

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            r.call(this, e), this._transformState = {
                afterTransform: function(e, t) {
                    var n = this._transformState;
                    n.transforming = !1;
                    var r = n.writecb;
                    if (!r) return this.emit("error", new Error("write callback called multiple times"));
                    n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
                    var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", a)
        }

        function a() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function(t, n) {
                s(e, t, n)
            }) : s(this, null, null)
        }

        function s(e, t, n) {
            if (t) return e.emit("error", t);
            if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        i.inherits = n(2), i.inherits(o, r), o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t)
        }, o.prototype._transform = function(e, t, n) {
            throw new Error("_transform() is not implemented")
        }, o.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }, o.prototype._destroy = function(e, t) {
            var n = this;
            r.prototype._destroy.call(this, e, function(e) {
                t(e), n.emit("close")
            })
        }
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            function r(e, t) {
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }

            function i(e) {
                return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
            }
            var o = n(19),
                a = Object.prototype.hasOwnProperty,
                s = Array.prototype.slice,
                l = "foo" === function() {}.name;

            function u(e) {
                return Object.prototype.toString.call(e)
            }

            function f(e) {
                return !i(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
            }
            var h = e.exports = m,
                c = /\s*function\s+([^\(\s]*)\s*/;

            function d(e) {
                if (o.isFunction(e)) {
                    if (l) return e.name;
                    var t = e.toString().match(c);
                    return t && t[1]
                }
            }

            function _(e, t) {
                return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
            }

            function p(e) {
                if (l || !o.isFunction(e)) return o.inspect(e);
                var t = d(e);
                return "[Function" + (t ? ": " + t : "") + "]"
            }

            function g(e, t, n, r, i) {
                throw new h.AssertionError({
                    message: n,
                    actual: e,
                    expected: t,
                    operator: r,
                    stackStartFunction: i
                })
            }

            function m(e, t) {
                e || g(e, !0, t, "==", h.ok)
            }

            function v(e, t, n, a) {
                if (e === t) return !0;
                if (i(e) && i(t)) return 0 === r(e, t);
                if (o.isDate(e) && o.isDate(t)) return e.getTime() === t.getTime();
                if (o.isRegExp(e) && o.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                    if (f(e) && f(t) && u(e) === u(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                    if (i(e) !== i(t)) return !1;
                    var l = (a = a || {
                        actual: [],
                        expected: []
                    }).actual.indexOf(e);
                    return -1 !== l && l === a.expected.indexOf(t) || (a.actual.push(e), a.expected.push(t), function(e, t, n, r) {
                        if (null === e || void 0 === e || null === t || void 0 === t) return !1;
                        if (o.isPrimitive(e) || o.isPrimitive(t)) return e === t;
                        if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                        var i = y(e),
                            a = y(t);
                        if (i && !a || !i && a) return !1;
                        if (i) return e = s.call(e), t = s.call(t), v(e, t, n);
                        var l, u, f = E(e),
                            h = E(t);
                        if (f.length !== h.length) return !1;
                        for (f.sort(), h.sort(), u = f.length - 1; u >= 0; u--)
                            if (f[u] !== h[u]) return !1;
                        for (u = f.length - 1; u >= 0; u--)
                            if (l = f[u], !v(e[l], t[l], n, r)) return !1;
                        return !0
                    }(e, t, n, a))
                }
                return n ? e === t : e == t
            }

            function y(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }

            function b(e, t) {
                if (!e || !t) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                try {
                    if (e instanceof t) return !0
                } catch (e) {}
                return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
            }

            function w(e, t, n, r) {
                var i;
                if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
                "string" == typeof n && (r = n, n = null), i = function(e) {
                    var t;
                    try {
                        e()
                    } catch (e) {
                        t = e
                    }
                    return t
                }(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !i && g(i, n, "Missing expected exception" + r);
                var a = "string" == typeof r,
                    s = !e && o.isError(i),
                    l = !e && i && !n;
                if ((s && a && b(i, n) || l) && g(i, n, "Got unwanted exception" + r), e && i && n && !b(i, n) || !e && i) throw i
            }
            h.AssertionError = function(e) {
                this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function(e) {
                    return _(p(e.actual), 128) + " " + e.operator + " " + _(p(e.expected), 128)
                }(this), this.generatedMessage = !0);
                var t = e.stackStartFunction || g;
                if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else {
                    var n = new Error;
                    if (n.stack) {
                        var r = n.stack,
                            i = d(t),
                            o = r.indexOf("\n" + i);
                        if (o >= 0) {
                            var a = r.indexOf("\n", o + 1);
                            r = r.substring(a + 1)
                        }
                        this.stack = r
                    }
                }
            }, o.inherits(h.AssertionError, Error), h.fail = g, h.ok = m, h.equal = function(e, t, n) {
                e != t && g(e, t, n, "==", h.equal)
            }, h.notEqual = function(e, t, n) {
                e == t && g(e, t, n, "!=", h.notEqual)
            }, h.deepEqual = function(e, t, n) {
                v(e, t, !1) || g(e, t, n, "deepEqual", h.deepEqual)
            }, h.deepStrictEqual = function(e, t, n) {
                v(e, t, !0) || g(e, t, n, "deepStrictEqual", h.deepStrictEqual)
            }, h.notDeepEqual = function(e, t, n) {
                v(e, t, !1) && g(e, t, n, "notDeepEqual", h.notDeepEqual)
            }, h.notDeepStrictEqual = function e(t, n, r) {
                v(t, n, !0) && g(t, n, r, "notDeepStrictEqual", e)
            }, h.strictEqual = function(e, t, n) {
                e !== t && g(e, t, n, "===", h.strictEqual)
            }, h.notStrictEqual = function(e, t, n) {
                e === t && g(e, t, n, "!==", h.notStrictEqual)
            }, h.throws = function(e, t, n) {
                w(!0, e, t, n)
            }, h.doesNotThrow = function(e, t, n) {
                w(!1, e, t, n)
            }, h.ifError = function(e) {
                if (e) throw e
            };
            var E = Object.keys || function(e) {
                var t = [];
                for (var n in e) a.call(e, n) && t.push(n);
                return t
            }
        }).call(this, n(0))
    }, function(e, t, n) {
        (function(e, r) {
            var i = /%[sdj%]/g;
            t.format = function(e) {
                if (!m(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
                    return t.join(" ")
                }
                n = 1;
                for (var r = arguments, o = r.length, a = String(e).replace(i, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= o) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), l = r[n]; n < o; l = r[++n]) p(l) || !b(l) ? a += " " + l : a += " " + s(l);
                return a
            }, t.deprecate = function(n, i) {
                if (v(e.process)) return function() {
                    return t.deprecate(n, i).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return n;
                var o = !1;
                return function() {
                    if (!o) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                    }
                    return n.apply(this, arguments)
                }
            };
            var o, a = {};

            function s(e, n) {
                var r = {
                    seen: [],
                    stylize: u
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(n) ? r.showHidden = n : n && t._extend(r, n), v(r.showHidden) && (r.showHidden = !1), v(r.depth) && (r.depth = 2), v(r.colors) && (r.colors = !1), v(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = l), f(r, e, r.depth)
            }

            function l(e, t) {
                var n = s.styles[t];
                return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e
            }

            function u(e, t) {
                return e
            }

            function f(e, n, r) {
                if (e.customInspect && n && k(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, e);
                    return m(i) || (i = f(e, i, r)), i
                }
                var o = function(e, t) {
                    if (v(t)) return e.stylize("undefined", "undefined");
                    if (m(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    if (g(t)) return e.stylize("" + t, "number");
                    if (_(t)) return e.stylize("" + t, "boolean");
                    if (p(t)) return e.stylize("null", "null")
                }(e, n);
                if (o) return o;
                var a = Object.keys(n),
                    s = function(e) {
                        var t = {};
                        return e.forEach(function(e, n) {
                            t[e] = !0
                        }), t
                    }(a);
                if (e.showHidden && (a = Object.getOwnPropertyNames(n)), E(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(n);
                if (0 === a.length) {
                    if (k(n)) {
                        var l = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + l + "]", "special")
                    }
                    if (y(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (w(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (E(n)) return h(n)
                }
                var u, b = "",
                    S = !1,
                    x = ["{", "}"];
                (d(n) && (S = !0, x = ["[", "]"]), k(n)) && (b = " [Function" + (n.name ? ": " + n.name : "") + "]");
                return y(n) && (b = " " + RegExp.prototype.toString.call(n)), w(n) && (b = " " + Date.prototype.toUTCString.call(n)), E(n) && (b = " " + h(n)), 0 !== a.length || S && 0 != n.length ? r < 0 ? y(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = S ? function(e, t, n, r, i) {
                    for (var o = [], a = 0, s = t.length; a < s; ++a) A(t, String(a)) ? o.push(c(e, t, n, r, String(a), !0)) : o.push("");
                    return i.forEach(function(i) {
                        i.match(/^\d+$/) || o.push(c(e, t, n, r, i, !0))
                    }), o
                }(e, n, r, s, a) : a.map(function(t) {
                    return c(e, n, r, s, t, S)
                }), e.seen.pop(), function(e, t, n) {
                    if (e.reduce(function(e, t) {
                            return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                    return n[0] + t + " " + e.join(", ") + " " + n[1]
                }(u, b, x)) : x[0] + b + x[1]
            }

            function h(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function c(e, t, n, r, i, o) {
                var a, s, l;
                if ((l = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }).get ? s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")), A(r, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(l.value) < 0 ? (s = p(n) ? f(e, l.value, null) : f(e, l.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n")) : s = e.stylize("[Circular]", "special")), v(a)) {
                    if (o && i.match(/^\d+$/)) return s;
                    (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                }
                return a + ": " + s
            }

            function d(e) {
                return Array.isArray(e)
            }

            function _(e) {
                return "boolean" == typeof e
            }

            function p(e) {
                return null === e
            }

            function g(e) {
                return "number" == typeof e
            }

            function m(e) {
                return "string" == typeof e
            }

            function v(e) {
                return void 0 === e
            }

            function y(e) {
                return b(e) && "[object RegExp]" === S(e)
            }

            function b(e) {
                return "object" == typeof e && null !== e
            }

            function w(e) {
                return b(e) && "[object Date]" === S(e)
            }

            function E(e) {
                return b(e) && ("[object Error]" === S(e) || e instanceof Error)
            }

            function k(e) {
                return "function" == typeof e
            }

            function S(e) {
                return Object.prototype.toString.call(e)
            }

            function x(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function(e) {
                if (v(o) && (o = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                        var n = r.pid;
                        a[e] = function() {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else a[e] = function() {};
                return a[e]
            }, t.inspect = s, s.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, s.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = d, t.isBoolean = _, t.isNull = p, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = g, t.isString = m, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = v, t.isRegExp = y, t.isObject = b, t.isDate = w, t.isError = E, t.isFunction = k, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = n(38);
            var T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function A(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.log = function() {
                console.log("%s - %s", function() {
                    var e = new Date,
                        t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
                    return [e.getDate(), T[e.getMonth()], t].join(" ")
                }(), t.format.apply(t, arguments))
            }, t.inherits = n(2), t._extend = function(e, t) {
                if (!t || !b(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }).call(this, n(0), n(1))
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r) {
            for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
                n -= a = n > 2e3 ? 2e3 : n;
                do {
                    o = o + (i = i + t[r++] | 0) | 0
                } while (--a);
                i %= 65521, o %= 65521
            }
            return i | o << 16 | 0
        }
    }, function(e, t, n) {
        "use strict";
        var r = function() {
            for (var e, t = [], n = 0; n < 256; n++) {
                e = n;
                for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        }();
        e.exports = function(e, t, n, i) {
            var o = r,
                a = i + n;
            e ^= -1;
            for (var s = i; s < a; s++) e = e >>> 8 ^ o[255 & (e ^ t[s])];
            return -1 ^ e
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(4).Buffer,
                i = n(25).Transform,
                o = n(37),
                a = n(19),
                s = n(18).ok,
                l = n(4).kMaxLength,
                u = "Cannot create final Buffer. It would be larger than 0x" + l.toString(16) + " bytes";
            o.Z_MIN_WINDOWBITS = 8, o.Z_MAX_WINDOWBITS = 15, o.Z_DEFAULT_WINDOWBITS = 15, o.Z_MIN_CHUNK = 64, o.Z_MAX_CHUNK = 1 / 0, o.Z_DEFAULT_CHUNK = 16384, o.Z_MIN_MEMLEVEL = 1, o.Z_MAX_MEMLEVEL = 9, o.Z_DEFAULT_MEMLEVEL = 8, o.Z_MIN_LEVEL = -1, o.Z_MAX_LEVEL = 9, o.Z_DEFAULT_LEVEL = o.Z_DEFAULT_COMPRESSION;
            for (var f = Object.keys(o), h = 0; h < f.length; h++) {
                var c = f[h];
                c.match(/^Z/) && Object.defineProperty(t, c, {
                    enumerable: !0,
                    value: o[c],
                    writable: !1
                })
            }
            for (var d = {
                    Z_OK: o.Z_OK,
                    Z_STREAM_END: o.Z_STREAM_END,
                    Z_NEED_DICT: o.Z_NEED_DICT,
                    Z_ERRNO: o.Z_ERRNO,
                    Z_STREAM_ERROR: o.Z_STREAM_ERROR,
                    Z_DATA_ERROR: o.Z_DATA_ERROR,
                    Z_MEM_ERROR: o.Z_MEM_ERROR,
                    Z_BUF_ERROR: o.Z_BUF_ERROR,
                    Z_VERSION_ERROR: o.Z_VERSION_ERROR
                }, _ = Object.keys(d), p = 0; p < _.length; p++) {
                var g = _[p];
                d[d[g]] = g
            }

            function m(e, t, n) {
                var i = [],
                    o = 0;

                function a() {
                    for (var t; null !== (t = e.read());) i.push(t), o += t.length;
                    e.once("readable", a)
                }

                function s() {
                    var t, a = null;
                    o >= l ? a = new RangeError(u) : t = r.concat(i, o), i = [], e.close(), n(a, t)
                }
                e.on("error", function(t) {
                    e.removeListener("end", s), e.removeListener("readable", a), n(t)
                }), e.on("end", s), e.end(t), a()
            }

            function v(e, t) {
                if ("string" == typeof t && (t = r.from(t)), !r.isBuffer(t)) throw new TypeError("Not a string or buffer");
                var n = e._finishFlushFlag;
                return e._processChunk(t, n)
            }

            function y(e) {
                if (!(this instanceof y)) return new y(e);
                A.call(this, e, o.DEFLATE)
            }

            function b(e) {
                if (!(this instanceof b)) return new b(e);
                A.call(this, e, o.INFLATE)
            }

            function w(e) {
                if (!(this instanceof w)) return new w(e);
                A.call(this, e, o.GZIP)
            }

            function E(e) {
                if (!(this instanceof E)) return new E(e);
                A.call(this, e, o.GUNZIP)
            }

            function k(e) {
                if (!(this instanceof k)) return new k(e);
                A.call(this, e, o.DEFLATERAW)
            }

            function S(e) {
                if (!(this instanceof S)) return new S(e);
                A.call(this, e, o.INFLATERAW)
            }

            function x(e) {
                if (!(this instanceof x)) return new x(e);
                A.call(this, e, o.UNZIP)
            }

            function T(e) {
                return e === o.Z_NO_FLUSH || e === o.Z_PARTIAL_FLUSH || e === o.Z_SYNC_FLUSH || e === o.Z_FULL_FLUSH || e === o.Z_FINISH || e === o.Z_BLOCK
            }

            function A(e, n) {
                var a = this;
                if (this._opts = e = e || {}, this._chunkSize = e.chunkSize || t.Z_DEFAULT_CHUNK, i.call(this, e), e.flush && !T(e.flush)) throw new Error("Invalid flush flag: " + e.flush);
                if (e.finishFlush && !T(e.finishFlush)) throw new Error("Invalid flush flag: " + e.finishFlush);
                if (this._flushFlag = e.flush || o.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== e.finishFlush ? e.finishFlush : o.Z_FINISH, e.chunkSize && (e.chunkSize < t.Z_MIN_CHUNK || e.chunkSize > t.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + e.chunkSize);
                if (e.windowBits && (e.windowBits < t.Z_MIN_WINDOWBITS || e.windowBits > t.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + e.windowBits);
                if (e.level && (e.level < t.Z_MIN_LEVEL || e.level > t.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + e.level);
                if (e.memLevel && (e.memLevel < t.Z_MIN_MEMLEVEL || e.memLevel > t.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + e.memLevel);
                if (e.strategy && e.strategy != t.Z_FILTERED && e.strategy != t.Z_HUFFMAN_ONLY && e.strategy != t.Z_RLE && e.strategy != t.Z_FIXED && e.strategy != t.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + e.strategy);
                if (e.dictionary && !r.isBuffer(e.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
                this._handle = new o.Zlib(n);
                var s = this;
                this._hadError = !1, this._handle.onerror = function(e, n) {
                    R(s), s._hadError = !0;
                    var r = new Error(e);
                    r.errno = n, r.code = t.codes[n], s.emit("error", r)
                };
                var l = t.Z_DEFAULT_COMPRESSION;
                "number" == typeof e.level && (l = e.level);
                var u = t.Z_DEFAULT_STRATEGY;
                "number" == typeof e.strategy && (u = e.strategy), this._handle.init(e.windowBits || t.Z_DEFAULT_WINDOWBITS, l, e.memLevel || t.Z_DEFAULT_MEMLEVEL, u, e.dictionary), this._buffer = r.allocUnsafe(this._chunkSize), this._offset = 0, this._level = l, this._strategy = u, this.once("end", this.close), Object.defineProperty(this, "_closed", {
                    get: function() {
                        return !a._handle
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }

            function R(t, n) {
                n && e.nextTick(n), t._handle && (t._handle.close(), t._handle = null)
            }

            function L(e) {
                e.emit("close")
            }
            Object.defineProperty(t, "codes", {
                enumerable: !0,
                value: Object.freeze(d),
                writable: !1
            }), t.Deflate = y, t.Inflate = b, t.Gzip = w, t.Gunzip = E, t.DeflateRaw = k, t.InflateRaw = S, t.Unzip = x, t.createDeflate = function(e) {
                return new y(e)
            }, t.createInflate = function(e) {
                return new b(e)
            }, t.createDeflateRaw = function(e) {
                return new k(e)
            }, t.createInflateRaw = function(e) {
                return new S(e)
            }, t.createGzip = function(e) {
                return new w(e)
            }, t.createGunzip = function(e) {
                return new E(e)
            }, t.createUnzip = function(e) {
                return new x(e)
            }, t.deflate = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new y(t), e, n)
            }, t.deflateSync = function(e, t) {
                return v(new y(t), e)
            }, t.gzip = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new w(t), e, n)
            }, t.gzipSync = function(e, t) {
                return v(new w(t), e)
            }, t.deflateRaw = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new k(t), e, n)
            }, t.deflateRawSync = function(e, t) {
                return v(new k(t), e)
            }, t.unzip = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new x(t), e, n)
            }, t.unzipSync = function(e, t) {
                return v(new x(t), e)
            }, t.inflate = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new b(t), e, n)
            }, t.inflateSync = function(e, t) {
                return v(new b(t), e)
            }, t.gunzip = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new E(t), e, n)
            }, t.gunzipSync = function(e, t) {
                return v(new E(t), e)
            }, t.inflateRaw = function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), m(new S(t), e, n)
            }, t.inflateRawSync = function(e, t) {
                return v(new S(t), e)
            }, a.inherits(A, i), A.prototype.params = function(n, r, i) {
                if (n < t.Z_MIN_LEVEL || n > t.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + n);
                if (r != t.Z_FILTERED && r != t.Z_HUFFMAN_ONLY && r != t.Z_RLE && r != t.Z_FIXED && r != t.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + r);
                if (this._level !== n || this._strategy !== r) {
                    var a = this;
                    this.flush(o.Z_SYNC_FLUSH, function() {
                        s(a._handle, "zlib binding closed"), a._handle.params(n, r), a._hadError || (a._level = n, a._strategy = r, i && i())
                    })
                } else e.nextTick(i)
            }, A.prototype.reset = function() {
                return s(this._handle, "zlib binding closed"), this._handle.reset()
            }, A.prototype._flush = function(e) {
                this._transform(r.alloc(0), "", e)
            }, A.prototype.flush = function(t, n) {
                var i = this,
                    a = this._writableState;
                ("function" == typeof t || void 0 === t && !n) && (n = t, t = o.Z_FULL_FLUSH), a.ended ? n && e.nextTick(n) : a.ending ? n && this.once("end", n) : a.needDrain ? n && this.once("drain", function() {
                    return i.flush(t, n)
                }) : (this._flushFlag = t, this.write(r.alloc(0), "", n))
            }, A.prototype.close = function(t) {
                R(this, t), e.nextTick(L, this)
            }, A.prototype._transform = function(e, t, n) {
                var i, a = this._writableState,
                    s = (a.ending || a.ended) && (!e || a.length === e.length);
                return null === e || r.isBuffer(e) ? this._handle ? (s ? i = this._finishFlushFlag : (i = this._flushFlag, e.length >= a.length && (this._flushFlag = this._opts.flush || o.Z_NO_FLUSH)), void this._processChunk(e, i, n)) : n(new Error("zlib binding closed")) : n(new Error("invalid input"))
            }, A.prototype._processChunk = function(e, t, n) {
                var i = e && e.length,
                    o = this._chunkSize - this._offset,
                    a = 0,
                    f = this,
                    h = "function" == typeof n;
                if (!h) {
                    var c, d = [],
                        _ = 0;
                    this.on("error", function(e) {
                        c = e
                    }), s(this._handle, "zlib binding closed");
                    do {
                        var p = this._handle.writeSync(t, e, a, i, this._buffer, this._offset, o)
                    } while (!this._hadError && v(p[0], p[1]));
                    if (this._hadError) throw c;
                    if (_ >= l) throw R(this), new RangeError(u);
                    var g = r.concat(d, _);
                    return R(this), g
                }
                s(this._handle, "zlib binding closed");
                var m = this._handle.write(t, e, a, i, this._buffer, this._offset, o);

                function v(l, u) {
                    if (this && (this.buffer = null, this.callback = null), !f._hadError) {
                        var c = o - u;
                        if (s(c >= 0, "have should not go down"), c > 0) {
                            var p = f._buffer.slice(f._offset, f._offset + c);
                            f._offset += c, h ? f.push(p) : (d.push(p), _ += p.length)
                        }
                        if ((0 === u || f._offset >= f._chunkSize) && (o = f._chunkSize, f._offset = 0, f._buffer = r.allocUnsafe(f._chunkSize)), 0 === u) {
                            if (a += i - l, i = l, !h) return !0;
                            var g = f._handle.write(t, e, a, i, f._buffer, f._offset, f._chunkSize);
                            return g.callback = v, void(g.buffer = e)
                        }
                        if (!h) return !1;
                        n()
                    }
                }
                m.buffer = e, m.callback = v
            }, a.inherits(y, A), a.inherits(b, A), a.inherits(w, A), a.inherits(E, A), a.inherits(k, A), a.inherits(S, A), a.inherits(x, A)
        }).call(this, n(1))
    }, function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = u(e),
                n = t[0],
                r = t[1];
            return 3 * (n + r) / 4 - r
        }, t.toByteArray = function(e) {
            for (var t, n = u(e), r = n[0], a = n[1], s = new o(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, r, a)), l = 0, f = a > 0 ? r - 4 : r, h = 0; h < f; h += 4) t = i[e.charCodeAt(h)] << 18 | i[e.charCodeAt(h + 1)] << 12 | i[e.charCodeAt(h + 2)] << 6 | i[e.charCodeAt(h + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;
            2 === a && (t = i[e.charCodeAt(h)] << 2 | i[e.charCodeAt(h + 1)] >> 4, s[l++] = 255 & t);
            1 === a && (t = i[e.charCodeAt(h)] << 10 | i[e.charCodeAt(h + 1)] << 4 | i[e.charCodeAt(h + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t);
            return s
        }, t.fromByteArray = function(e) {
            for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(h(e, a, a + 16383 > s ? s : a + 16383));
            1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return o.join("")
        };
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;

        function u(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function f(e) {
            return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e]
        }

        function h(e, t, n) {
            for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(f(r));
            return i.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function(e, t) {
        t.read = function(e, t, n, r, i) {
            var o, a, s = 8 * i - r - 1,
                l = (1 << s) - 1,
                u = l >> 1,
                f = -7,
                h = n ? i - 1 : 0,
                c = n ? -1 : 1,
                d = e[t + h];
            for (h += c, o = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; o = 256 * o + e[t + h], h += c, f -= 8);
            for (a = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; a = 256 * a + e[t + h], h += c, f -= 8);
            if (0 === o) o = 1 - u;
            else {
                if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                a += Math.pow(2, r), o -= u
            }
            return (d ? -1 : 1) * a * Math.pow(2, o - r)
        }, t.write = function(e, t, n, r, i, o) {
            var a, s, l, u = 8 * o - i - 1,
                f = (1 << u) - 1,
                h = f >> 1,
                c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = r ? 0 : o - 1,
                _ = r ? 1 : -1,
                p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + h >= 1 ? c / l : c * Math.pow(2, 1 - h)) * l >= 2 && (a++, l /= 2), a + h >= f ? (s = 0, a = f) : a + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & s, d += _, s /= 256, i -= 8);
            for (a = a << i | s, u += i; u > 0; e[n + d] = 255 & a, d += _, a /= 256, u -= 8);
            e[n + d - _] |= 128 * p
        }
    }, function(e, t, n) {
        e.exports = i;
        var r = n(9).EventEmitter;

        function i() {
            r.call(this)
        }
        n(2)(i, r), i.Readable = n(10), i.Writable = n(33), i.Duplex = n(34), i.Transform = n(35), i.PassThrough = n(36), i.Stream = i, i.prototype.pipe = function(e, t) {
            var n = this;

            function i(t) {
                e.writable && !1 === e.write(t) && n.pause && n.pause()
            }

            function o() {
                n.readable && n.resume && n.resume()
            }
            n.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (n.on("end", s), n.on("close", l));
            var a = !1;

            function s() {
                a || (a = !0, e.end())
            }

            function l() {
                a || (a = !0, "function" == typeof e.destroy && e.destroy())
            }

            function u(e) {
                if (f(), 0 === r.listenerCount(this, "error")) throw e
            }

            function f() {
                n.removeListener("data", i), e.removeListener("drain", o), n.removeListener("end", s), n.removeListener("close", l), n.removeListener("error", u), e.removeListener("error", u), n.removeListener("end", f), n.removeListener("close", f), e.removeListener("close", f)
            }
            return n.on("error", u), e.on("error", u), n.on("end", f), n.on("close", f), e.on("close", f), e.emit("pipe", n), e
        }
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var r = n(7).Buffer,
            i = n(28);

        function o(e, t, n) {
            e.copy(t, n)
        }
        e.exports = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, e.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, e.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                return n
            }, e.prototype.concat = function(e) {
                if (0 === this.length) return r.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t = r.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) o(n.data, t, i), i += n.data.length, n = n.next;
                return t
            }, e
        }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
            var e = i.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    }, function(e, t) {}, function(e, t, n) {
        (function(e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            t.setTimeout = function() {
                return new o(i.call(setTimeout, r, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new o(i.call(setInterval, r, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(30), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, n(0))
    }, function(e, t, n) {
        (function(e, t) {
            ! function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, i = 1,
                        o = {},
                        a = !1,
                        s = e.document,
                        l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick(function() {
                            f(e)
                        })
                    } : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$",
                            n = function(n) {
                                n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && f(+n.data.slice(t.length))
                            };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), r = function(n) {
                            e.postMessage(t + n, "*")
                        }
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            f(e.data)
                        }, r = function(t) {
                            e.port2.postMessage(t)
                        }
                    }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                        var e = s.documentElement;
                        r = function(t) {
                            var n = s.createElement("script");
                            n.onreadystatechange = function() {
                                f(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }() : r = function(e) {
                        setTimeout(f, 0, e)
                    }, l.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var a = {
                            callback: e,
                            args: t
                        };
                        return o[i] = a, r(i), i++
                    }, l.clearImmediate = u
                }

                function u(e) {
                    delete o[e]
                }

                function f(e) {
                    if (a) setTimeout(f, 0, e);
                    else {
                        var t = o[e];
                        if (t) {
                            a = !0;
                            try {
                                ! function(e) {
                                    var t = e.callback,
                                        r = e.args;
                                    switch (r.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(r[0]);
                                            break;
                                        case 2:
                                            t(r[0], r[1]);
                                            break;
                                        case 3:
                                            t(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            t.apply(n, r)
                                    }
                                }(t)
                            } finally {
                                u(e), a = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, n(0), n(1))
    }, function(e, t, n) {
        (function(t) {
            function n(e) {
                try {
                    if (!t.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var n = t.localStorage[e];
                return null != n && "true" === String(n).toLowerCase()
            }
            e.exports = function(e, t) {
                if (n("noDeprecation")) return e;
                var r = !1;
                return function() {
                    if (!r) {
                        if (n("throwDeprecation")) throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }).call(this, n(0))
    }, function(e, t, n) {
        "use strict";
        e.exports = o;
        var r = n(17),
            i = n(5);

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            r.call(this, e)
        }
        i.inherits = n(2), i.inherits(o, r), o.prototype._transform = function(e, t, n) {
            n(null, e)
        }
    }, function(e, t, n) {
        e.exports = n(11)
    }, function(e, t, n) {
        e.exports = n(3)
    }, function(e, t, n) {
        e.exports = n(10).Transform
    }, function(e, t, n) {
        e.exports = n(10).PassThrough
    }, function(e, t, n) {
        "use strict";
        (function(e, r) {
            var i = n(18),
                o = n(39),
                a = n(40),
                s = n(43),
                l = n(46);
            for (var u in l) t[u] = l[u];
            t.NONE = 0, t.DEFLATE = 1, t.INFLATE = 2, t.GZIP = 3, t.GUNZIP = 4, t.DEFLATERAW = 5, t.INFLATERAW = 6, t.UNZIP = 7;

            function f(e) {
                if ("number" != typeof e || e < t.DEFLATE || e > t.UNZIP) throw new TypeError("Bad argument");
                this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = e, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0
            }
            f.prototype.close = function() {
                this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, i(this.init_done, "close before init"), i(this.mode <= t.UNZIP), this.mode === t.DEFLATE || this.mode === t.GZIP || this.mode === t.DEFLATERAW ? a.deflateEnd(this.strm) : this.mode !== t.INFLATE && this.mode !== t.GUNZIP && this.mode !== t.INFLATERAW && this.mode !== t.UNZIP || s.inflateEnd(this.strm), this.mode = t.NONE, this.dictionary = null)
            }, f.prototype.write = function(e, t, n, r, i, o, a) {
                return this._write(!0, e, t, n, r, i, o, a)
            }, f.prototype.writeSync = function(e, t, n, r, i, o, a) {
                return this._write(!1, e, t, n, r, i, o, a)
            }, f.prototype._write = function(n, o, a, s, l, u, f, h) {
                if (i.equal(arguments.length, 8), i(this.init_done, "write before init"), i(this.mode !== t.NONE, "already finalized"), i.equal(!1, this.write_in_progress, "write already in progress"), i.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, i.equal(!1, void 0 === o, "must provide flush value"), this.write_in_progress = !0, o !== t.Z_NO_FLUSH && o !== t.Z_PARTIAL_FLUSH && o !== t.Z_SYNC_FLUSH && o !== t.Z_FULL_FLUSH && o !== t.Z_FINISH && o !== t.Z_BLOCK) throw new Error("Invalid flush value");
                if (null == a && (a = e.alloc(0), l = 0, s = 0), this.strm.avail_in = l, this.strm.input = a, this.strm.next_in = s, this.strm.avail_out = h, this.strm.output = u, this.strm.next_out = f, this.flush = o, !n) return this._process(), this._checkError() ? this._afterSync() : void 0;
                var c = this;
                return r.nextTick(function() {
                    c._process(), c._after()
                }), this
            }, f.prototype._afterSync = function() {
                var e = this.strm.avail_out,
                    t = this.strm.avail_in;
                return this.write_in_progress = !1, [t, e]
            }, f.prototype._process = function() {
                var e = null;
                switch (this.mode) {
                    case t.DEFLATE:
                    case t.GZIP:
                    case t.DEFLATERAW:
                        this.err = a.deflate(this.strm, this.flush);
                        break;
                    case t.UNZIP:
                        switch (this.strm.avail_in > 0 && (e = this.strm.next_in), this.gzip_id_bytes_read) {
                            case 0:
                                if (null === e) break;
                                if (31 !== this.strm.input[e]) {
                                    this.mode = t.INFLATE;
                                    break
                                }
                                if (this.gzip_id_bytes_read = 1, e++, 1 === this.strm.avail_in) break;
                            case 1:
                                if (null === e) break;
                                139 === this.strm.input[e] ? (this.gzip_id_bytes_read = 2, this.mode = t.GUNZIP) : this.mode = t.INFLATE;
                                break;
                            default:
                                throw new Error("invalid number of gzip magic number bytes read")
                        }
                    case t.INFLATE:
                    case t.GUNZIP:
                    case t.INFLATERAW:
                        for (this.err = s.inflate(this.strm, this.flush), this.err === t.Z_NEED_DICT && this.dictionary && (this.err = s.inflateSetDictionary(this.strm, this.dictionary), this.err === t.Z_OK ? this.err = s.inflate(this.strm, this.flush) : this.err === t.Z_DATA_ERROR && (this.err = t.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === t.GUNZIP && this.err === t.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = s.inflate(this.strm, this.flush);
                        break;
                    default:
                        throw new Error("Unknown mode " + this.mode)
                }
            }, f.prototype._checkError = function() {
                switch (this.err) {
                    case t.Z_OK:
                    case t.Z_BUF_ERROR:
                        if (0 !== this.strm.avail_out && this.flush === t.Z_FINISH) return this._error("unexpected end of file"), !1;
                        break;
                    case t.Z_STREAM_END:
                        break;
                    case t.Z_NEED_DICT:
                        return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;
                    default:
                        return this._error("Zlib error"), !1
                }
                return !0
            }, f.prototype._after = function() {
                if (this._checkError()) {
                    var e = this.strm.avail_out,
                        t = this.strm.avail_in;
                    this.write_in_progress = !1, this.callback(t, e), this.pending_close && this.close()
                }
            }, f.prototype._error = function(e) {
                this.strm.msg && (e = this.strm.msg), this.onerror(e, this.err), this.write_in_progress = !1, this.pending_close && this.close()
            }, f.prototype.init = function(e, n, r, o, a) {
                i(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), i(e >= 8 && e <= 15, "invalid windowBits"), i(n >= -1 && n <= 9, "invalid compression level"), i(r >= 1 && r <= 9, "invalid memlevel"), i(o === t.Z_FILTERED || o === t.Z_HUFFMAN_ONLY || o === t.Z_RLE || o === t.Z_FIXED || o === t.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(n, e, r, o, a), this._setDictionary()
            }, f.prototype.params = function() {
                throw new Error("deflateParams Not supported")
            }, f.prototype.reset = function() {
                this._reset(), this._setDictionary()
            }, f.prototype._init = function(e, n, r, i, l) {
                switch (this.level = e, this.windowBits = n, this.memLevel = r, this.strategy = i, this.flush = t.Z_NO_FLUSH, this.err = t.Z_OK, this.mode !== t.GZIP && this.mode !== t.GUNZIP || (this.windowBits += 16), this.mode === t.UNZIP && (this.windowBits += 32), this.mode !== t.DEFLATERAW && this.mode !== t.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new o, this.mode) {
                    case t.DEFLATE:
                    case t.GZIP:
                    case t.DEFLATERAW:
                        this.err = a.deflateInit2(this.strm, this.level, t.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                        break;
                    case t.INFLATE:
                    case t.GUNZIP:
                    case t.INFLATERAW:
                    case t.UNZIP:
                        this.err = s.inflateInit2(this.strm, this.windowBits);
                        break;
                    default:
                        throw new Error("Unknown mode " + this.mode)
                }
                this.err !== t.Z_OK && this._error("Init error"), this.dictionary = l, this.write_in_progress = !1, this.init_done = !0
            }, f.prototype._setDictionary = function() {
                if (null != this.dictionary) {
                    switch (this.err = t.Z_OK, this.mode) {
                        case t.DEFLATE:
                        case t.DEFLATERAW:
                            this.err = a.deflateSetDictionary(this.strm, this.dictionary)
                    }
                    this.err !== t.Z_OK && this._error("Failed to set dictionary")
                }
            }, f.prototype._reset = function() {
                switch (this.err = t.Z_OK, this.mode) {
                    case t.DEFLATE:
                    case t.DEFLATERAW:
                    case t.GZIP:
                        this.err = a.deflateReset(this.strm);
                        break;
                    case t.INFLATE:
                    case t.INFLATERAW:
                    case t.GUNZIP:
                        this.err = s.inflateReset(this.strm)
                }
                this.err !== t.Z_OK && this._error("Failed to reset stream")
            }, t.Zlib = f
        }).call(this, n(4).Buffer, n(1))
    }, function(e, t) {
        e.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        }
    }, function(e, t, n) {
        "use strict";
        var r, i = n(8),
            o = n(41),
            a = n(20),
            s = n(21),
            l = n(42),
            u = 0,
            f = 1,
            h = 3,
            c = 4,
            d = 5,
            _ = 0,
            p = 1,
            g = -2,
            m = -3,
            v = -5,
            y = -1,
            b = 1,
            w = 2,
            E = 3,
            k = 4,
            S = 0,
            x = 2,
            T = 8,
            A = 9,
            R = 15,
            L = 8,
            I = 286,
            N = 30,
            O = 19,
            B = 2 * I + 1,
            M = 15,
            U = 3,
            D = 258,
            C = D + U + 1,
            z = 32,
            P = 42,
            F = 69,
            Z = 73,
            j = 91,
            W = 103,
            q = 113,
            Y = 666,
            H = 1,
            G = 2,
            J = 3,
            K = 4,
            V = 3;

        function X(e, t) {
            return e.msg = l[t], t
        }

        function $(e) {
            return (e << 1) - (e > 4 ? 9 : 0)
        }

        function Q(e) {
            for (var t = e.length; --t >= 0;) e[t] = 0
        }

        function ee(e) {
            var t = e.state,
                n = t.pending;
            n > e.avail_out && (n = e.avail_out), 0 !== n && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
        }

        function te(e, t) {
            o._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, ee(e.strm)
        }

        function ne(e, t) {
            e.pending_buf[e.pending++] = t
        }

        function re(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
        }

        function ie(e, t, n, r) {
            var o = e.avail_in;
            return o > r && (o = r), 0 === o ? 0 : (e.avail_in -= o, i.arraySet(t, e.input, e.next_in, o, n), 1 === e.state.wrap ? e.adler = a(e.adler, t, o, n) : 2 === e.state.wrap && (e.adler = s(e.adler, t, o, n)), e.next_in += o, e.total_in += o, o)
        }

        function oe(e, t) {
            var n, r, i = e.max_chain_length,
                o = e.strstart,
                a = e.prev_length,
                s = e.nice_match,
                l = e.strstart > e.w_size - C ? e.strstart - (e.w_size - C) : 0,
                u = e.window,
                f = e.w_mask,
                h = e.prev,
                c = e.strstart + D,
                d = u[o + a - 1],
                _ = u[o + a];
            e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
            do {
                if (u[(n = t) + a] === _ && u[n + a - 1] === d && u[n] === u[o] && u[++n] === u[o + 1]) {
                    o += 2, n++;
                    do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < c);
                    if (r = D - (c - o), o = c - D, r > a) {
                        if (e.match_start = t, a = r, r >= s) break;
                        d = u[o + a - 1], _ = u[o + a]
                    }
                }
            } while ((t = h[t & f]) > l && 0 != --i);
            return a <= e.lookahead ? a : e.lookahead
        }

        function ae(e) {
            var t, n, r, o, a, s = e.w_size;
            do {
                if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - C)) {
                    i.arraySet(e.window, e.window, s, s, 0), e.match_start -= s, e.strstart -= s, e.block_start -= s, t = n = e.hash_size;
                    do {
                        r = e.head[--t], e.head[t] = r >= s ? r - s : 0
                    } while (--n);
                    t = n = s;
                    do {
                        r = e.prev[--t], e.prev[t] = r >= s ? r - s : 0
                    } while (--n);
                    o += s
                }
                if (0 === e.strm.avail_in) break;
                if (n = ie(e.strm, e.window, e.strstart + e.lookahead, o), e.lookahead += n, e.lookahead + e.insert >= U)
                    for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + U - 1]) & e.hash_mask, e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < U)););
            } while (e.lookahead < C && 0 !== e.strm.avail_in)
        }

        function se(e, t) {
            for (var n, r;;) {
                if (e.lookahead < C) {
                    if (ae(e), e.lookahead < C && t === u) return H;
                    if (0 === e.lookahead) break
                }
                if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - C && (e.match_length = oe(e, n)), e.match_length >= U)
                    if (r = o._tr_tally(e, e.strstart - e.match_start, e.match_length - U), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= U) {
                        e.match_length--;
                        do {
                            e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                        } while (0 != --e.match_length);
                        e.strstart++
                    } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                else r = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                if (r && (te(e, !1), 0 === e.strm.avail_out)) return H
            }
            return e.insert = e.strstart < U - 1 ? e.strstart : U - 1, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G
        }

        function le(e, t) {
            for (var n, r, i;;) {
                if (e.lookahead < C) {
                    if (ae(e), e.lookahead < C && t === u) return H;
                    if (0 === e.lookahead) break
                }
                if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = U - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - C && (e.match_length = oe(e, n), e.match_length <= 5 && (e.strategy === b || e.match_length === U && e.strstart - e.match_start > 4096) && (e.match_length = U - 1)), e.prev_length >= U && e.match_length <= e.prev_length) {
                    i = e.strstart + e.lookahead - U, r = o._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - U), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                    do {
                        ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                    } while (0 != --e.prev_length);
                    if (e.match_available = 0, e.match_length = U - 1, e.strstart++, r && (te(e, !1), 0 === e.strm.avail_out)) return H
                } else if (e.match_available) {
                    if ((r = o._tr_tally(e, 0, e.window[e.strstart - 1])) && te(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return H
                } else e.match_available = 1, e.strstart++, e.lookahead--
            }
            return e.match_available && (r = o._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < U - 1 ? e.strstart : U - 1, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G
        }

        function ue(e, t, n, r, i) {
            this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i
        }

        function fe(e) {
            var t;
            return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = x, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? P : q, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = u, o._tr_init(t), _) : X(e, g)
        }

        function he(e) {
            var t = fe(e);
            return t === _ && function(e) {
                e.window_size = 2 * e.w_size, Q(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = U - 1, e.match_available = 0, e.ins_h = 0
            }(e.state), t
        }

        function ce(e, t, n, r, o, a) {
            if (!e) return g;
            var s = 1;
            if (t === y && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), o < 1 || o > A || n !== T || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > k) return X(e, g);
            8 === r && (r = 9);
            var l = new function() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = T, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * B), this.dyn_dtree = new i.Buf16(2 * (2 * N + 1)), this.bl_tree = new i.Buf16(2 * (2 * O + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(M + 1), this.heap = new i.Buf16(2 * I + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * I + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            };
            return e.state = l, l.strm = e, l.wrap = s, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = o + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + U - 1) / U), l.window = new i.Buf8(2 * l.w_size), l.head = new i.Buf16(l.hash_size), l.prev = new i.Buf16(l.w_size), l.lit_bufsize = 1 << o + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new i.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = t, l.strategy = a, l.method = n, he(e)
        }
        r = [new ue(0, 0, 0, 0, function(e, t) {
            var n = 65535;
            for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
                if (e.lookahead <= 1) {
                    if (ae(e), 0 === e.lookahead && t === u) return H;
                    if (0 === e.lookahead) break
                }
                e.strstart += e.lookahead, e.lookahead = 0;
                var r = e.block_start + n;
                if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, te(e, !1), 0 === e.strm.avail_out)) return H;
                if (e.strstart - e.block_start >= e.w_size - C && (te(e, !1), 0 === e.strm.avail_out)) return H
            }
            return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : (e.strstart > e.block_start && (te(e, !1), e.strm.avail_out), H)
        }), new ue(4, 4, 8, 4, se), new ue(4, 5, 16, 8, se), new ue(4, 6, 32, 32, se), new ue(4, 4, 16, 16, le), new ue(8, 16, 32, 32, le), new ue(8, 16, 128, 128, le), new ue(8, 32, 128, 256, le), new ue(32, 128, 258, 1024, le), new ue(32, 258, 258, 4096, le)], t.deflateInit = function(e, t) {
            return ce(e, t, T, R, L, S)
        }, t.deflateInit2 = ce, t.deflateReset = he, t.deflateResetKeep = fe, t.deflateSetHeader = function(e, t) {
            return e && e.state ? 2 !== e.state.wrap ? g : (e.state.gzhead = t, _) : g
        }, t.deflate = function(e, t) {
            var n, i, a, l;
            if (!e || !e.state || t > d || t < 0) return e ? X(e, g) : g;
            if (i = e.state, !e.output || !e.input && 0 !== e.avail_in || i.status === Y && t !== c) return X(e, 0 === e.avail_out ? v : g);
            if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === P)
                if (2 === i.wrap) e.adler = 0, ne(i, 31), ne(i, 139), ne(i, 8), i.gzhead ? (ne(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), ne(i, 255 & i.gzhead.time), ne(i, i.gzhead.time >> 8 & 255), ne(i, i.gzhead.time >> 16 & 255), ne(i, i.gzhead.time >> 24 & 255), ne(i, 9 === i.level ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0), ne(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (ne(i, 255 & i.gzhead.extra.length), ne(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = F) : (ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 9 === i.level ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0), ne(i, V), i.status = q);
                else {
                    var m = T + (i.w_bits - 8 << 4) << 8;
                    m |= (i.strategy >= w || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (m |= z), m += 31 - m % 31, i.status = q, re(i, m), 0 !== i.strstart && (re(i, e.adler >>> 16), re(i, 65535 & e.adler)), e.adler = 1
                }
            if (i.status === F)
                if (i.gzhead.extra) {
                    for (a = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), ee(e), a = i.pending, i.pending !== i.pending_buf_size));) ne(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                    i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Z)
                } else i.status = Z;
            if (i.status === Z)
                if (i.gzhead.name) {
                    a = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), ee(e), a = i.pending, i.pending === i.pending_buf_size)) {
                            l = 1;
                            break
                        }
                        l = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, ne(i, l)
                    } while (0 !== l);
                    i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), 0 === l && (i.gzindex = 0, i.status = j)
                } else i.status = j;
            if (i.status === j)
                if (i.gzhead.comment) {
                    a = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), ee(e), a = i.pending, i.pending === i.pending_buf_size)) {
                            l = 1;
                            break
                        }
                        l = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, ne(i, l)
                    } while (0 !== l);
                    i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), 0 === l && (i.status = W)
                } else i.status = W;
            if (i.status === W && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && ee(e), i.pending + 2 <= i.pending_buf_size && (ne(i, 255 & e.adler), ne(i, e.adler >> 8 & 255), e.adler = 0, i.status = q)) : i.status = q), 0 !== i.pending) {
                if (ee(e), 0 === e.avail_out) return i.last_flush = -1, _
            } else if (0 === e.avail_in && $(t) <= $(n) && t !== c) return X(e, v);
            if (i.status === Y && 0 !== e.avail_in) return X(e, v);
            if (0 !== e.avail_in || 0 !== i.lookahead || t !== u && i.status !== Y) {
                var y = i.strategy === w ? function(e, t) {
                    for (var n;;) {
                        if (0 === e.lookahead && (ae(e), 0 === e.lookahead)) {
                            if (t === u) return H;
                            break
                        }
                        if (e.match_length = 0, n = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (te(e, !1), 0 === e.strm.avail_out)) return H
                    }
                    return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G
                }(i, t) : i.strategy === E ? function(e, t) {
                    for (var n, r, i, a, s = e.window;;) {
                        if (e.lookahead <= D) {
                            if (ae(e), e.lookahead <= D && t === u) return H;
                            if (0 === e.lookahead) break
                        }
                        if (e.match_length = 0, e.lookahead >= U && e.strstart > 0 && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
                            a = e.strstart + D;
                            do {} while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < a);
                            e.match_length = D - (a - i), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                        }
                        if (e.match_length >= U ? (n = o._tr_tally(e, 1, e.match_length - U), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (te(e, !1), 0 === e.strm.avail_out)) return H
                    }
                    return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G
                }(i, t) : r[i.level].func(i, t);
                if (y !== J && y !== K || (i.status = Y), y === H || y === J) return 0 === e.avail_out && (i.last_flush = -1), _;
                if (y === G && (t === f ? o._tr_align(i) : t !== d && (o._tr_stored_block(i, 0, 0, !1), t === h && (Q(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), ee(e), 0 === e.avail_out)) return i.last_flush = -1, _
            }
            return t !== c ? _ : i.wrap <= 0 ? p : (2 === i.wrap ? (ne(i, 255 & e.adler), ne(i, e.adler >> 8 & 255), ne(i, e.adler >> 16 & 255), ne(i, e.adler >> 24 & 255), ne(i, 255 & e.total_in), ne(i, e.total_in >> 8 & 255), ne(i, e.total_in >> 16 & 255), ne(i, e.total_in >> 24 & 255)) : (re(i, e.adler >>> 16), re(i, 65535 & e.adler)), ee(e), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? _ : p)
        }, t.deflateEnd = function(e) {
            var t;
            return e && e.state ? (t = e.state.status) !== P && t !== F && t !== Z && t !== j && t !== W && t !== q && t !== Y ? X(e, g) : (e.state = null, t === q ? X(e, m) : _) : g
        }, t.deflateSetDictionary = function(e, t) {
            var n, r, o, s, l, u, f, h, c = t.length;
            if (!e || !e.state) return g;
            if (2 === (s = (n = e.state).wrap) || 1 === s && n.status !== P || n.lookahead) return g;
            for (1 === s && (e.adler = a(e.adler, t, c, 0)), n.wrap = 0, c >= n.w_size && (0 === s && (Q(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), h = new i.Buf8(n.w_size), i.arraySet(h, t, c - n.w_size, n.w_size, 0), t = h, c = n.w_size), l = e.avail_in, u = e.next_in, f = e.input, e.avail_in = c, e.next_in = 0, e.input = t, ae(n); n.lookahead >= U;) {
                r = n.strstart, o = n.lookahead - (U - 1);
                do {
                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + U - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++
                } while (--o);
                n.strstart = r, n.lookahead = U - 1, ae(n)
            }
            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = U - 1, n.match_available = 0, e.next_in = u, e.input = f, e.avail_in = l, n.wrap = s, _
        }, t.deflateInfo = "pako deflate (from Nodeca project)"
    }, function(e, t, n) {
        "use strict";
        var r = n(8),
            i = 4,
            o = 0,
            a = 1,
            s = 2;

        function l(e) {
            for (var t = e.length; --t >= 0;) e[t] = 0
        }
        var u = 0,
            f = 1,
            h = 2,
            c = 29,
            d = 256,
            _ = d + 1 + c,
            p = 30,
            g = 19,
            m = 2 * _ + 1,
            v = 15,
            y = 16,
            b = 7,
            w = 256,
            E = 16,
            k = 17,
            S = 18,
            x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            T = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            L = new Array(2 * (_ + 2));
        l(L);
        var I = new Array(2 * p);
        l(I);
        var N = new Array(512);
        l(N);
        var O = new Array(256);
        l(O);
        var B = new Array(c);
        l(B);
        var M, U, D, C = new Array(p);

        function z(e, t, n, r, i) {
            this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length
        }

        function P(e, t) {
            this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
        }

        function F(e) {
            return e < 256 ? N[e] : N[256 + (e >>> 7)]
        }

        function Z(e, t) {
            e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
        }

        function j(e, t, n) {
            e.bi_valid > y - n ? (e.bi_buf |= t << e.bi_valid & 65535, Z(e, e.bi_buf), e.bi_buf = t >> y - e.bi_valid, e.bi_valid += n - y) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
        }

        function W(e, t, n) {
            j(e, n[2 * t], n[2 * t + 1])
        }

        function q(e, t) {
            var n = 0;
            do {
                n |= 1 & e, e >>>= 1, n <<= 1
            } while (--t > 0);
            return n >>> 1
        }

        function Y(e, t, n) {
            var r, i, o = new Array(v + 1),
                a = 0;
            for (r = 1; r <= v; r++) o[r] = a = a + n[r - 1] << 1;
            for (i = 0; i <= t; i++) {
                var s = e[2 * i + 1];
                0 !== s && (e[2 * i] = q(o[s]++, s))
            }
        }

        function H(e) {
            var t;
            for (t = 0; t < _; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < p; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < g; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[2 * w] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
        }

        function G(e) {
            e.bi_valid > 8 ? Z(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
        }

        function J(e, t, n, r) {
            var i = 2 * t,
                o = 2 * n;
            return e[i] < e[o] || e[i] === e[o] && r[t] <= r[n]
        }

        function K(e, t, n) {
            for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && J(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !J(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
            e.heap[n] = r
        }

        function V(e, t, n) {
            var r, i, o, a, s = 0;
            if (0 !== e.last_lit)
                do {
                    r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === r ? W(e, i, t) : (W(e, (o = O[i]) + d + 1, t), 0 !== (a = x[o]) && j(e, i -= B[o], a), W(e, o = F(--r), n), 0 !== (a = T[o]) && j(e, r -= C[o], a))
                } while (s < e.last_lit);
            W(e, w, t)
        }

        function X(e, t) {
            var n, r, i, o = t.dyn_tree,
                a = t.stat_desc.static_tree,
                s = t.stat_desc.has_stree,
                l = t.stat_desc.elems,
                u = -1;
            for (e.heap_len = 0, e.heap_max = m, n = 0; n < l; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = u = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
            for (; e.heap_len < 2;) o[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
            for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) K(e, o, n);
            i = l;
            do {
                n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], K(e, o, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, e.heap[1] = i++, K(e, o, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1],
                function(e, t) {
                    var n, r, i, o, a, s, l = t.dyn_tree,
                        u = t.max_code,
                        f = t.stat_desc.static_tree,
                        h = t.stat_desc.has_stree,
                        c = t.stat_desc.extra_bits,
                        d = t.stat_desc.extra_base,
                        _ = t.stat_desc.max_length,
                        p = 0;
                    for (o = 0; o <= v; o++) e.bl_count[o] = 0;
                    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < m; n++)(o = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > _ && (o = _, p++), l[2 * r + 1] = o, r > u || (e.bl_count[o]++, a = 0, r >= d && (a = c[r - d]), s = l[2 * r], e.opt_len += s * (o + a), h && (e.static_len += s * (f[2 * r + 1] + a)));
                    if (0 !== p) {
                        do {
                            for (o = _ - 1; 0 === e.bl_count[o];) o--;
                            e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[_]--, p -= 2
                        } while (p > 0);
                        for (o = _; 0 !== o; o--)
                            for (r = e.bl_count[o]; 0 !== r;)(i = e.heap[--n]) > u || (l[2 * i + 1] !== o && (e.opt_len += (o - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = o), r--)
                    }
                }(e, t), Y(o, u, e.bl_count)
        }

        function $(e, t, n) {
            var r, i, o = -1,
                a = t[1],
                s = 0,
                l = 7,
                u = 4;
            for (0 === a && (l = 138, u = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = a, a = t[2 * (r + 1) + 1], ++s < l && i === a || (s < u ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * E]++) : s <= 10 ? e.bl_tree[2 * k]++ : e.bl_tree[2 * S]++, s = 0, o = i, 0 === a ? (l = 138, u = 3) : i === a ? (l = 6, u = 3) : (l = 7, u = 4))
        }

        function Q(e, t, n) {
            var r, i, o = -1,
                a = t[1],
                s = 0,
                l = 7,
                u = 4;
            for (0 === a && (l = 138, u = 3), r = 0; r <= n; r++)
                if (i = a, a = t[2 * (r + 1) + 1], !(++s < l && i === a)) {
                    if (s < u)
                        do {
                            W(e, i, e.bl_tree)
                        } while (0 != --s);
                    else 0 !== i ? (i !== o && (W(e, i, e.bl_tree), s--), W(e, E, e.bl_tree), j(e, s - 3, 2)) : s <= 10 ? (W(e, k, e.bl_tree), j(e, s - 3, 3)) : (W(e, S, e.bl_tree), j(e, s - 11, 7));
                    s = 0, o = i, 0 === a ? (l = 138, u = 3) : i === a ? (l = 6, u = 3) : (l = 7, u = 4)
                }
        }
        l(C);
        var ee = !1;

        function te(e, t, n, i) {
            j(e, (u << 1) + (i ? 1 : 0), 3),
                function(e, t, n, i) {
                    G(e), i && (Z(e, n), Z(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n
                }(e, t, n, !0)
        }
        t._tr_init = function(e) {
            ee || (function() {
                var e, t, n, r, i, o = new Array(v + 1);
                for (n = 0, r = 0; r < c - 1; r++)
                    for (B[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
                for (O[n - 1] = r, i = 0, r = 0; r < 16; r++)
                    for (C[r] = i, e = 0; e < 1 << T[r]; e++) N[i++] = r;
                for (i >>= 7; r < p; r++)
                    for (C[r] = i << 7, e = 0; e < 1 << T[r] - 7; e++) N[256 + i++] = r;
                for (t = 0; t <= v; t++) o[t] = 0;
                for (e = 0; e <= 143;) L[2 * e + 1] = 8, e++, o[8]++;
                for (; e <= 255;) L[2 * e + 1] = 9, e++, o[9]++;
                for (; e <= 279;) L[2 * e + 1] = 7, e++, o[7]++;
                for (; e <= 287;) L[2 * e + 1] = 8, e++, o[8]++;
                for (Y(L, _ + 1, o), e = 0; e < p; e++) I[2 * e + 1] = 5, I[2 * e] = q(e, 5);
                M = new z(L, x, d + 1, _, v), U = new z(I, T, 0, p, v), D = new z(new Array(0), A, 0, g, b)
            }(), ee = !0), e.l_desc = new P(e.dyn_ltree, M), e.d_desc = new P(e.dyn_dtree, U), e.bl_desc = new P(e.bl_tree, D), e.bi_buf = 0, e.bi_valid = 0, H(e)
        }, t._tr_stored_block = te, t._tr_flush_block = function(e, t, n, r) {
            var l, u, c = 0;
            e.level > 0 ? (e.strm.data_type === s && (e.strm.data_type = function(e) {
                var t, n = 4093624447;
                for (t = 0; t <= 31; t++, n >>>= 1)
                    if (1 & n && 0 !== e.dyn_ltree[2 * t]) return o;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return a;
                for (t = 32; t < d; t++)
                    if (0 !== e.dyn_ltree[2 * t]) return a;
                return o
            }(e)), X(e, e.l_desc), X(e, e.d_desc), c = function(e) {
                var t;
                for ($(e, e.dyn_ltree, e.l_desc.max_code), $(e, e.dyn_dtree, e.d_desc.max_code), X(e, e.bl_desc), t = g - 1; t >= 3 && 0 === e.bl_tree[2 * R[t] + 1]; t--);
                return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
            }(e), l = e.opt_len + 3 + 7 >>> 3, (u = e.static_len + 3 + 7 >>> 3) <= l && (l = u)) : l = u = n + 5, n + 4 <= l && -1 !== t ? te(e, t, n, r) : e.strategy === i || u === l ? (j(e, (f << 1) + (r ? 1 : 0), 3), V(e, L, I)) : (j(e, (h << 1) + (r ? 1 : 0), 3), function(e, t, n, r) {
                var i;
                for (j(e, t - 257, 5), j(e, n - 1, 5), j(e, r - 4, 4), i = 0; i < r; i++) j(e, e.bl_tree[2 * R[i] + 1], 3);
                Q(e, e.dyn_ltree, t - 1), Q(e, e.dyn_dtree, n - 1)
            }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), V(e, e.dyn_ltree, e.dyn_dtree)), H(e), r && G(e)
        }, t._tr_tally = function(e, t, n) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + d + 1)]++, e.dyn_dtree[2 * F(t)]++), e.last_lit === e.lit_bufsize - 1
        }, t._tr_align = function(e) {
            j(e, f << 1, 3), W(e, w, L),
                function(e) {
                    16 === e.bi_valid ? (Z(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                }(e)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8),
            i = n(20),
            o = n(21),
            a = n(44),
            s = n(45),
            l = 0,
            u = 1,
            f = 2,
            h = 4,
            c = 5,
            d = 6,
            _ = 0,
            p = 1,
            g = 2,
            m = -2,
            v = -3,
            y = -4,
            b = -5,
            w = 8,
            E = 1,
            k = 2,
            S = 3,
            x = 4,
            T = 5,
            A = 6,
            R = 7,
            L = 8,
            I = 9,
            N = 10,
            O = 11,
            B = 12,
            M = 13,
            U = 14,
            D = 15,
            C = 16,
            z = 17,
            P = 18,
            F = 19,
            Z = 20,
            j = 21,
            W = 22,
            q = 23,
            Y = 24,
            H = 25,
            G = 26,
            J = 27,
            K = 28,
            V = 29,
            X = 30,
            $ = 31,
            Q = 32,
            ee = 852,
            te = 592,
            ne = 15;

        function re(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
        }

        function ie(e) {
            var t;
            return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = E, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(ee), t.distcode = t.distdyn = new r.Buf32(te), t.sane = 1, t.back = -1, _) : m
        }

        function oe(e) {
            var t;
            return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, ie(e)) : m
        }

        function ae(e, t) {
            var n, r;
            return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? m : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, oe(e))) : m
        }

        function se(e, t) {
            var n, i;
            return e ? (i = new function() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }, e.state = i, i.window = null, (n = ae(e, t)) !== _ && (e.state = null), n) : m
        }
        var le, ue, fe = !0;

        function he(e) {
            if (fe) {
                var t;
                for (le = new r.Buf32(512), ue = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (s(u, e.lens, 0, 288, le, 0, e.work, {
                        bits: 9
                    }), t = 0; t < 32;) e.lens[t++] = 5;
                s(f, e.lens, 0, 32, ue, 0, e.work, {
                    bits: 5
                }), fe = !1
            }
            e.lencode = le, e.lenbits = 9, e.distcode = ue, e.distbits = 5
        }

        function ce(e, t, n, i) {
            var o, a = e.state;
            return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new r.Buf8(a.wsize)), i >= a.wsize ? (r.arraySet(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((o = a.wsize - a.wnext) > i && (o = i), r.arraySet(a.window, t, n - i, o, a.wnext), (i -= o) ? (r.arraySet(a.window, t, n - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += o, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += o))), 0
        }
        t.inflateReset = oe, t.inflateReset2 = ae, t.inflateResetKeep = ie, t.inflateInit = function(e) {
            return se(e, ne)
        }, t.inflateInit2 = se, t.inflate = function(e, t) {
            var n, ee, te, ne, ie, oe, ae, se, le, ue, fe, de, _e, pe, ge, me, ve, ye, be, we, Ee, ke, Se, xe, Te = 0,
                Ae = new r.Buf8(4),
                Re = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return m;
            (n = e.state).mode === B && (n.mode = M), ie = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, ee = e.input, oe = e.avail_in, se = n.hold, le = n.bits, ue = oe, fe = ae, ke = _;
            e: for (;;) switch (n.mode) {
                case E:
                    if (0 === n.wrap) {
                        n.mode = M;
                        break
                    }
                    for (; le < 16;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if (2 & n.wrap && 35615 === se) {
                        n.check = 0, Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = o(n.check, Ae, 2, 0), se = 0, le = 0, n.mode = k;
                        break
                    }
                    if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & se) << 8) + (se >> 8)) % 31) {
                        e.msg = "incorrect header check", n.mode = X;
                        break
                    }
                    if ((15 & se) !== w) {
                        e.msg = "unknown compression method", n.mode = X;
                        break
                    }
                    if (le -= 4, Ee = 8 + (15 & (se >>>= 4)), 0 === n.wbits) n.wbits = Ee;
                    else if (Ee > n.wbits) {
                        e.msg = "invalid window size", n.mode = X;
                        break
                    }
                    n.dmax = 1 << Ee, e.adler = n.check = 1, n.mode = 512 & se ? N : B, se = 0, le = 0;
                    break;
                case k:
                    for (; le < 16;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if (n.flags = se, (255 & n.flags) !== w) {
                        e.msg = "unknown compression method", n.mode = X;
                        break
                    }
                    if (57344 & n.flags) {
                        e.msg = "unknown header flags set", n.mode = X;
                        break
                    }
                    n.head && (n.head.text = se >> 8 & 1), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = o(n.check, Ae, 2, 0)), se = 0, le = 0, n.mode = S;
                case S:
                    for (; le < 32;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    n.head && (n.head.time = se), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, Ae[2] = se >>> 16 & 255, Ae[3] = se >>> 24 & 255, n.check = o(n.check, Ae, 4, 0)), se = 0, le = 0, n.mode = x;
                case x:
                    for (; le < 16;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    n.head && (n.head.xflags = 255 & se, n.head.os = se >> 8), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = o(n.check, Ae, 2, 0)), se = 0, le = 0, n.mode = T;
                case T:
                    if (1024 & n.flags) {
                        for (; le < 16;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        n.length = se, n.head && (n.head.extra_len = se), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = o(n.check, Ae, 2, 0)), se = 0, le = 0
                    } else n.head && (n.head.extra = null);
                    n.mode = A;
                case A:
                    if (1024 & n.flags && ((de = n.length) > oe && (de = oe), de && (n.head && (Ee = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, ee, ne, de, Ee)), 512 & n.flags && (n.check = o(n.check, ee, de, ne)), oe -= de, ne += de, n.length -= de), n.length)) break e;
                    n.length = 0, n.mode = R;
                case R:
                    if (2048 & n.flags) {
                        if (0 === oe) break e;
                        de = 0;
                        do {
                            Ee = ee[ne + de++], n.head && Ee && n.length < 65536 && (n.head.name += String.fromCharCode(Ee))
                        } while (Ee && de < oe);
                        if (512 & n.flags && (n.check = o(n.check, ee, de, ne)), oe -= de, ne += de, Ee) break e
                    } else n.head && (n.head.name = null);
                    n.length = 0, n.mode = L;
                case L:
                    if (4096 & n.flags) {
                        if (0 === oe) break e;
                        de = 0;
                        do {
                            Ee = ee[ne + de++], n.head && Ee && n.length < 65536 && (n.head.comment += String.fromCharCode(Ee))
                        } while (Ee && de < oe);
                        if (512 & n.flags && (n.check = o(n.check, ee, de, ne)), oe -= de, ne += de, Ee) break e
                    } else n.head && (n.head.comment = null);
                    n.mode = I;
                case I:
                    if (512 & n.flags) {
                        for (; le < 16;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        if (se !== (65535 & n.check)) {
                            e.msg = "header crc mismatch", n.mode = X;
                            break
                        }
                        se = 0, le = 0
                    }
                    n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = B;
                    break;
                case N:
                    for (; le < 32;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    e.adler = n.check = re(se), se = 0, le = 0, n.mode = O;
                case O:
                    if (0 === n.havedict) return e.next_out = ie, e.avail_out = ae, e.next_in = ne, e.avail_in = oe, n.hold = se, n.bits = le, g;
                    e.adler = n.check = 1, n.mode = B;
                case B:
                    if (t === c || t === d) break e;
                case M:
                    if (n.last) {
                        se >>>= 7 & le, le -= 7 & le, n.mode = J;
                        break
                    }
                    for (; le < 3;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    switch (n.last = 1 & se, le -= 1, 3 & (se >>>= 1)) {
                        case 0:
                            n.mode = U;
                            break;
                        case 1:
                            if (he(n), n.mode = Z, t === d) {
                                se >>>= 2, le -= 2;
                                break e
                            }
                            break;
                        case 2:
                            n.mode = z;
                            break;
                        case 3:
                            e.msg = "invalid block type", n.mode = X
                    }
                    se >>>= 2, le -= 2;
                    break;
                case U:
                    for (se >>>= 7 & le, le -= 7 & le; le < 32;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if ((65535 & se) != (se >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths", n.mode = X;
                        break
                    }
                    if (n.length = 65535 & se, se = 0, le = 0, n.mode = D, t === d) break e;
                case D:
                    n.mode = C;
                case C:
                    if (de = n.length) {
                        if (de > oe && (de = oe), de > ae && (de = ae), 0 === de) break e;
                        r.arraySet(te, ee, ne, de, ie), oe -= de, ne += de, ae -= de, ie += de, n.length -= de;
                        break
                    }
                    n.mode = B;
                    break;
                case z:
                    for (; le < 14;) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if (n.nlen = 257 + (31 & se), se >>>= 5, le -= 5, n.ndist = 1 + (31 & se), se >>>= 5, le -= 5, n.ncode = 4 + (15 & se), se >>>= 4, le -= 4, n.nlen > 286 || n.ndist > 30) {
                        e.msg = "too many length or distance symbols", n.mode = X;
                        break
                    }
                    n.have = 0, n.mode = P;
                case P:
                    for (; n.have < n.ncode;) {
                        for (; le < 3;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        n.lens[Re[n.have++]] = 7 & se, se >>>= 3, le -= 3
                    }
                    for (; n.have < 19;) n.lens[Re[n.have++]] = 0;
                    if (n.lencode = n.lendyn, n.lenbits = 7, Se = {
                            bits: n.lenbits
                        }, ke = s(l, n.lens, 0, 19, n.lencode, 0, n.work, Se), n.lenbits = Se.bits, ke) {
                        e.msg = "invalid code lengths set", n.mode = X;
                        break
                    }
                    n.have = 0, n.mode = F;
                case F:
                    for (; n.have < n.nlen + n.ndist;) {
                        for (; me = (Te = n.lencode[se & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        if (ve < 16) se >>>= ge, le -= ge, n.lens[n.have++] = ve;
                        else {
                            if (16 === ve) {
                                for (xe = ge + 2; le < xe;) {
                                    if (0 === oe) break e;
                                    oe--, se += ee[ne++] << le, le += 8
                                }
                                if (se >>>= ge, le -= ge, 0 === n.have) {
                                    e.msg = "invalid bit length repeat", n.mode = X;
                                    break
                                }
                                Ee = n.lens[n.have - 1], de = 3 + (3 & se), se >>>= 2, le -= 2
                            } else if (17 === ve) {
                                for (xe = ge + 3; le < xe;) {
                                    if (0 === oe) break e;
                                    oe--, se += ee[ne++] << le, le += 8
                                }
                                le -= ge, Ee = 0, de = 3 + (7 & (se >>>= ge)), se >>>= 3, le -= 3
                            } else {
                                for (xe = ge + 7; le < xe;) {
                                    if (0 === oe) break e;
                                    oe--, se += ee[ne++] << le, le += 8
                                }
                                le -= ge, Ee = 0, de = 11 + (127 & (se >>>= ge)), se >>>= 7, le -= 7
                            }
                            if (n.have + de > n.nlen + n.ndist) {
                                e.msg = "invalid bit length repeat", n.mode = X;
                                break
                            }
                            for (; de--;) n.lens[n.have++] = Ee
                        }
                    }
                    if (n.mode === X) break;
                    if (0 === n.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block", n.mode = X;
                        break
                    }
                    if (n.lenbits = 9, Se = {
                            bits: n.lenbits
                        }, ke = s(u, n.lens, 0, n.nlen, n.lencode, 0, n.work, Se), n.lenbits = Se.bits, ke) {
                        e.msg = "invalid literal/lengths set", n.mode = X;
                        break
                    }
                    if (n.distbits = 6, n.distcode = n.distdyn, Se = {
                            bits: n.distbits
                        }, ke = s(f, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, Se), n.distbits = Se.bits, ke) {
                        e.msg = "invalid distances set", n.mode = X;
                        break
                    }
                    if (n.mode = Z, t === d) break e;
                case Z:
                    n.mode = j;
                case j:
                    if (oe >= 6 && ae >= 258) {
                        e.next_out = ie, e.avail_out = ae, e.next_in = ne, e.avail_in = oe, n.hold = se, n.bits = le, a(e, fe), ie = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, ee = e.input, oe = e.avail_in, se = n.hold, le = n.bits, n.mode === B && (n.back = -1);
                        break
                    }
                    for (n.back = 0; me = (Te = n.lencode[se & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if (me && 0 == (240 & me)) {
                        for (ye = ge, be = me, we = ve; me = (Te = n.lencode[we + ((se & (1 << ye + be) - 1) >> ye)]) >>> 16 & 255, ve = 65535 & Te, !(ye + (ge = Te >>> 24) <= le);) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        se >>>= ye, le -= ye, n.back += ye
                    }
                    if (se >>>= ge, le -= ge, n.back += ge, n.length = ve, 0 === me) {
                        n.mode = G;
                        break
                    }
                    if (32 & me) {
                        n.back = -1, n.mode = B;
                        break
                    }
                    if (64 & me) {
                        e.msg = "invalid literal/length code", n.mode = X;
                        break
                    }
                    n.extra = 15 & me, n.mode = W;
                case W:
                    if (n.extra) {
                        for (xe = n.extra; le < xe;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        n.length += se & (1 << n.extra) - 1, se >>>= n.extra, le -= n.extra, n.back += n.extra
                    }
                    n.was = n.length, n.mode = q;
                case q:
                    for (; me = (Te = n.distcode[se & (1 << n.distbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
                        if (0 === oe) break e;
                        oe--, se += ee[ne++] << le, le += 8
                    }
                    if (0 == (240 & me)) {
                        for (ye = ge, be = me, we = ve; me = (Te = n.distcode[we + ((se & (1 << ye + be) - 1) >> ye)]) >>> 16 & 255, ve = 65535 & Te, !(ye + (ge = Te >>> 24) <= le);) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        se >>>= ye, le -= ye, n.back += ye
                    }
                    if (se >>>= ge, le -= ge, n.back += ge, 64 & me) {
                        e.msg = "invalid distance code", n.mode = X;
                        break
                    }
                    n.offset = ve, n.extra = 15 & me, n.mode = Y;
                case Y:
                    if (n.extra) {
                        for (xe = n.extra; le < xe;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        n.offset += se & (1 << n.extra) - 1, se >>>= n.extra, le -= n.extra, n.back += n.extra
                    }
                    if (n.offset > n.dmax) {
                        e.msg = "invalid distance too far back", n.mode = X;
                        break
                    }
                    n.mode = H;
                case H:
                    if (0 === ae) break e;
                    if (de = fe - ae, n.offset > de) {
                        if ((de = n.offset - de) > n.whave && n.sane) {
                            e.msg = "invalid distance too far back", n.mode = X;
                            break
                        }
                        de > n.wnext ? (de -= n.wnext, _e = n.wsize - de) : _e = n.wnext - de, de > n.length && (de = n.length), pe = n.window
                    } else pe = te, _e = ie - n.offset, de = n.length;
                    de > ae && (de = ae), ae -= de, n.length -= de;
                    do {
                        te[ie++] = pe[_e++]
                    } while (--de);
                    0 === n.length && (n.mode = j);
                    break;
                case G:
                    if (0 === ae) break e;
                    te[ie++] = n.length, ae--, n.mode = j;
                    break;
                case J:
                    if (n.wrap) {
                        for (; le < 32;) {
                            if (0 === oe) break e;
                            oe--, se |= ee[ne++] << le, le += 8
                        }
                        if (fe -= ae, e.total_out += fe, n.total += fe, fe && (e.adler = n.check = n.flags ? o(n.check, te, fe, ie - fe) : i(n.check, te, fe, ie - fe)), fe = ae, (n.flags ? se : re(se)) !== n.check) {
                            e.msg = "incorrect data check", n.mode = X;
                            break
                        }
                        se = 0, le = 0
                    }
                    n.mode = K;
                case K:
                    if (n.wrap && n.flags) {
                        for (; le < 32;) {
                            if (0 === oe) break e;
                            oe--, se += ee[ne++] << le, le += 8
                        }
                        if (se !== (4294967295 & n.total)) {
                            e.msg = "incorrect length check", n.mode = X;
                            break
                        }
                        se = 0, le = 0
                    }
                    n.mode = V;
                case V:
                    ke = p;
                    break e;
                case X:
                    ke = v;
                    break e;
                case $:
                    return y;
                case Q:
                default:
                    return m
            }
            return e.next_out = ie, e.avail_out = ae, e.next_in = ne, e.avail_in = oe, n.hold = se, n.bits = le, (n.wsize || fe !== e.avail_out && n.mode < X && (n.mode < J || t !== h)) && ce(e, e.output, e.next_out, fe - e.avail_out) ? (n.mode = $, y) : (ue -= e.avail_in, fe -= e.avail_out, e.total_in += ue, e.total_out += fe, n.total += fe, n.wrap && fe && (e.adler = n.check = n.flags ? o(n.check, te, fe, e.next_out - fe) : i(n.check, te, fe, e.next_out - fe)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === B ? 128 : 0) + (n.mode === Z || n.mode === D ? 256 : 0), (0 === ue && 0 === fe || t === h) && ke === _ && (ke = b), ke)
        }, t.inflateEnd = function(e) {
            if (!e || !e.state) return m;
            var t = e.state;
            return t.window && (t.window = null), e.state = null, _
        }, t.inflateGetHeader = function(e, t) {
            var n;
            return e && e.state ? 0 == (2 & (n = e.state).wrap) ? m : (n.head = t, t.done = !1, _) : m
        }, t.inflateSetDictionary = function(e, t) {
            var n, r = t.length;
            return e && e.state ? 0 !== (n = e.state).wrap && n.mode !== O ? m : n.mode === O && i(1, t, r, 0) !== n.check ? v : ce(e, t, r, r) ? (n.mode = $, y) : (n.havedict = 1, _) : m
        }, t.inflateInfo = "pako inflate (from Nodeca project)"
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n, r, i, o, a, s, l, u, f, h, c, d, _, p, g, m, v, y, b, w, E, k, S, x, T;
            n = e.state, r = e.next_in, x = e.input, i = r + (e.avail_in - 5), o = e.next_out, T = e.output, a = o - (t - e.avail_out), s = o + (e.avail_out - 257), l = n.dmax, u = n.wsize, f = n.whave, h = n.wnext, c = n.window, d = n.hold, _ = n.bits, p = n.lencode, g = n.distcode, m = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
            e: do {
                _ < 15 && (d += x[r++] << _, _ += 8, d += x[r++] << _, _ += 8), y = p[d & m];
                t: for (;;) {
                    if (d >>>= b = y >>> 24, _ -= b, 0 === (b = y >>> 16 & 255)) T[o++] = 65535 & y;
                    else {
                        if (!(16 & b)) {
                            if (0 == (64 & b)) {
                                y = p[(65535 & y) + (d & (1 << b) - 1)];
                                continue t
                            }
                            if (32 & b) {
                                n.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code", n.mode = 30;
                            break e
                        }
                        w = 65535 & y, (b &= 15) && (_ < b && (d += x[r++] << _, _ += 8), w += d & (1 << b) - 1, d >>>= b, _ -= b), _ < 15 && (d += x[r++] << _, _ += 8, d += x[r++] << _, _ += 8), y = g[d & v];
                        n: for (;;) {
                            if (d >>>= b = y >>> 24, _ -= b, !(16 & (b = y >>> 16 & 255))) {
                                if (0 == (64 & b)) {
                                    y = g[(65535 & y) + (d & (1 << b) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code", n.mode = 30;
                                break e
                            }
                            if (E = 65535 & y, _ < (b &= 15) && (d += x[r++] << _, (_ += 8) < b && (d += x[r++] << _, _ += 8)), (E += d & (1 << b) - 1) > l) {
                                e.msg = "invalid distance too far back", n.mode = 30;
                                break e
                            }
                            if (d >>>= b, _ -= b, E > (b = o - a)) {
                                if ((b = E - b) > f && n.sane) {
                                    e.msg = "invalid distance too far back", n.mode = 30;
                                    break e
                                }
                                if (k = 0, S = c, 0 === h) {
                                    if (k += u - b, b < w) {
                                        w -= b;
                                        do {
                                            T[o++] = c[k++]
                                        } while (--b);
                                        k = o - E, S = T
                                    }
                                } else if (h < b) {
                                    if (k += u + h - b, (b -= h) < w) {
                                        w -= b;
                                        do {
                                            T[o++] = c[k++]
                                        } while (--b);
                                        if (k = 0, h < w) {
                                            w -= b = h;
                                            do {
                                                T[o++] = c[k++]
                                            } while (--b);
                                            k = o - E, S = T
                                        }
                                    }
                                } else if (k += h - b, b < w) {
                                    w -= b;
                                    do {
                                        T[o++] = c[k++]
                                    } while (--b);
                                    k = o - E, S = T
                                }
                                for (; w > 2;) T[o++] = S[k++], T[o++] = S[k++], T[o++] = S[k++], w -= 3;
                                w && (T[o++] = S[k++], w > 1 && (T[o++] = S[k++]))
                            } else {
                                k = o - E;
                                do {
                                    T[o++] = T[k++], T[o++] = T[k++], T[o++] = T[k++], w -= 3
                                } while (w > 2);
                                w && (T[o++] = T[k++], w > 1 && (T[o++] = T[k++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (r < i && o < s);
            r -= w = _ >> 3, d &= (1 << (_ -= w << 3)) - 1, e.next_in = r, e.next_out = o, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = o < s ? s - o + 257 : 257 - (o - s), n.hold = d, n.bits = _
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8),
            i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
            a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
            s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        e.exports = function(e, t, n, l, u, f, h, c) {
            var d, _, p, g, m, v, y, b, w, E = c.bits,
                k = 0,
                S = 0,
                x = 0,
                T = 0,
                A = 0,
                R = 0,
                L = 0,
                I = 0,
                N = 0,
                O = 0,
                B = null,
                M = 0,
                U = new r.Buf16(16),
                D = new r.Buf16(16),
                C = null,
                z = 0;
            for (k = 0; k <= 15; k++) U[k] = 0;
            for (S = 0; S < l; S++) U[t[n + S]]++;
            for (A = E, T = 15; T >= 1 && 0 === U[T]; T--);
            if (A > T && (A = T), 0 === T) return u[f++] = 20971520, u[f++] = 20971520, c.bits = 1, 0;
            for (x = 1; x < T && 0 === U[x]; x++);
            for (A < x && (A = x), I = 1, k = 1; k <= 15; k++)
                if (I <<= 1, (I -= U[k]) < 0) return -1;
            if (I > 0 && (0 === e || 1 !== T)) return -1;
            for (D[1] = 0, k = 1; k < 15; k++) D[k + 1] = D[k] + U[k];
            for (S = 0; S < l; S++) 0 !== t[n + S] && (h[D[t[n + S]]++] = S);
            if (0 === e ? (B = C = h, v = 19) : 1 === e ? (B = i, M -= 257, C = o, z -= 257, v = 256) : (B = a, C = s, v = -1), O = 0, S = 0, k = x, m = f, R = A, L = 0, p = -1, g = (N = 1 << A) - 1, 1 === e && N > 852 || 2 === e && N > 592) return 1;
            for (;;) {
                y = k - L, h[S] < v ? (b = 0, w = h[S]) : h[S] > v ? (b = C[z + h[S]], w = B[M + h[S]]) : (b = 96, w = 0), d = 1 << k - L, x = _ = 1 << R;
                do {
                    u[m + (O >> L) + (_ -= d)] = y << 24 | b << 16 | w | 0
                } while (0 !== _);
                for (d = 1 << k - 1; O & d;) d >>= 1;
                if (0 !== d ? (O &= d - 1, O += d) : O = 0, S++, 0 == --U[k]) {
                    if (k === T) break;
                    k = t[n + h[S]]
                }
                if (k > A && (O & g) !== p) {
                    for (0 === L && (L = A), m += x, I = 1 << (R = k - L); R + L < T && !((I -= U[R + L]) <= 0);) R++, I <<= 1;
                    if (N += 1 << R, 1 === e && N > 852 || 2 === e && N > 592) return 1;
                    u[p = O & g] = A << 24 | R << 16 | m - f | 0
                }
            }
            return 0 !== O && (u[m + O] = k - L << 24 | 64 << 16 | 0), c.bits = A, 0
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(22),
            i = function(e) {
                var t = "browser";

                function n(e) {
                    var t, n, r;
                    for (r = e.length; r; r--) t = Math.floor(Math.random() * r), n = e[r - 1], e[r - 1] = e[t], e[t] = n
                }

                function i(e, n) {
                    if ("wechat" !== t) {
                        var r = new XMLHttpRequest;
                        r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json; charset=utf-8"), r.send(JSON.stringify(n))
                    }
                }

                function o(e) {
                    return e._isBuffer = !0,
                        function(e) {
                            var t = String.fromCharCode.apply(null, e);
                            return decodeURIComponent(escape(t))
                        }(Object(r.inflateSync)(e))
                }! function() {
                    if ("undefined" != typeof navigator) try {
                        "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (console.log("Current env is wechat."), t = "wechat")
                    } catch (e) {
                        console.error(e)
                    } else "undefined" != typeof wx && void 0 !== wx.connectSocket && (t = "wechat")
                }(), this.getSDKVersion = function() {
                    return "1.4.0"
                }, this.getSDKVersion_int = function() {
                    return 10104e5
                }, this.lbs_url1 = ["https://lbs-1-sig.agora.io", "https://lbs-2-sig.agora.io"], this.lbs_url2 = ["https://lbs-3-sig.agora.io", "https://lbs-4-sig.agora.io"], this.lbs_wx = ["https://lbs-wx.agora.io"], this.rp_url = "https:///wsrp-sig.agora.io/", this.vid = e, this.appid = e;
                var a = this;

                function s(e, t, n) {
                    var r = e.split(t, n),
                        i = 0;
                    for (var o in r) i += t.length + r[o].length;
                    return r.push(e.substr(i)), r
                }
                a.server_urls = [], a.setup_debugging = function(e, t) {
                    if ("ap" === e) a.server_urls.push([t, 8001]), a.debugging = !0;
                    else if ("ap_url" === e) a.server_urls.push(t), a.debugging = !0;
                    else if ("env" === e) "lbs100" === t && (a.lbs_url1 = ["https://lbs100-1-sig.agora.io", "https://lbs100-2-sig.agora.io"], a.lbs_url2 = ["https://lbs100-3-sig.agora.io", "https://lbs100-4-sig.agora.io"]);
                    else {
                        if ("proxy_server" !== e) return;
                        a.proxy_server = t
                    }
                }, a.setUpDebugging = a.setup_debugging;
                var l = function(r, l, u, f) {
                    this.onLoginSuccess = "", this.onLoginFailed = "", this.onLogout = "", this.onInviteReceived = "", this.onMessageInstantReceive = "";
                    try {
                        "string" != typeof r && (r = JSON.stringify(r))
                    } catch (e) {
                        return console.error("Invalid account type, should be a string."), void console.error(e)
                    }
                    this.m_retry_max_time = f || 3e5, this.m_retry_max_count = u || 10, this.m_retry_count = 0, this.m_retry_time_start = Date.now(), this.m_retry_delay = 200, this.m_retry_delay_min = 200, this.m_retry_delay_max = 2e3, this.account = r, this.config_msg_set = 0, this.config_inst_msg_with_msgid = 0, this.debugging = a.debugging, this.m_msgid = 0, this.state = 1, this.line = "", this.uid = 0, this.dbg = !1, this.alive_conn = 2;
                    var h = this;
                    h.lbs_state = "requesting", h.lbs_state1 = "requesting", h.lbs_state2 = "requesting";
                    var c = a.server_urls.slice();
                    n(c), h.idx = 0, this.login_start_time = null, this.login_end_time = null, this.lbs_start_time = null, this.lbs_end_time = null, this.ap_start_time = null, this.ap_end_time = null, h.browser = "unknown";
                    try {
                        h.browser = navigator.userAgent
                    } catch (e) {
                        a.isLogging && (a.loggingLevel < 2 && console.warn(e), console.log("This browser does not support navigator.userAgent"))
                    }
                    h.login_data = {
                        event: "login",
                        now: "",
                        time: "",
                        duration: "",
                        key: "",
                        seq: "",
                        result: "",
                        account: "",
                        browser: h.browser,
                        sdk_version: a.getSDKVersion_int(),
                        rmc: "",
                        rmt: "",
                        h1i1: "",
                        h1t1: "",
                        i2: "",
                        i3: "",
                        i3_0: "",
                        i3_0_ip: "",
                        i3_0_port: "",
                        i3_1_ip: "",
                        step: "",
                        t2: "",
                        t4: ""
                    }, h.v3_msg_set = new Map, setTimeout(function() {
                        var e = Date.now();
                        for (var t of h.v3_msg_set.keys())
                            if (h.v3_msg_set[t]) {
                                if (!(e - h.v3_msg_set[t] > 3e5)) break;
                                h.v3_msg_set.delete(t)
                            }
                    }, 2e3), h.socket = null;
                    var d = function() {
                            if (a.isLogging && 0 === a.loggingLevel) {
                                var e = [];
                                for (var t in arguments) e.push(arguments[t]);
                                console.log.apply(null, ["Agora sig dbg :"].concat(e))
                            }
                        },
                        _ = function(e) {
                            d("Updating the session state to " + e), h.state = e
                        },
                        p = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                        g = function(e) {
                            return p.test(e[0]) ? "wss://" + (e[0].replace(/\./g, "-") + "-sig-web.agora.io") + ":" + (e[1] + 1) + "/" : e
                        };
                    h.logout = function() {
                        2 === h.state && h.onLogout ? h.call2("user_logout", {
                            line: h.line
                        }, function(e, t) {
                            h.fire_logout(101), h.socket.close()
                        }) : 1 === h.state && (_(0), h.fire_logout(101))
                    }, h.fire_login_failed = function(e) {
                        try {
                            1 === h.state && h.onLoginFailed && h.onLoginFailed(e)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            _(0)
                        }
                    }, h.fire_logout = function(e) {
                        e || (e = 0);
                        try {
                            2 !== h.state && 3 !== h.state || h.onLogout && h.onLogout(e)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            _(0)
                        }
                    }, h.getStatus = function() {
                        return h.state
                    };
                    var m = function(n, r, i) {
                            if ("requesting" == h.lbs_state) {
                                var o = r[i];
                                "wechat" === t ? function(e, t, n) {
                                    var r, i = !1;
                                    const o = wx.request({
                                        url: e,
                                        method: "GET",
                                        header: {
                                            "content-type": "application/json"
                                        },
                                        success: function(e) {
                                            i || (clearTimeout(r), n("", e.data))
                                        },
                                        fail: function() {
                                            n("request failure")
                                        }
                                    });
                                    r = setTimeout(function() {
                                        i = !0, o.abort(), n("timeout", "")
                                    }, t)
                                }(o + "/getaddr?vid=" + e, 5e3, function(e, t) {
                                    if ("request failure" !== e)
                                        if (!t.wx_web || t.wx_web && 0 === t.wx_web.length) h.fire_login_failed(100);
                                        else if (e) n - 1 > 0 ? m(n - 1, r, (i + 1) % r.length) : h.fire_login_failed(201);
                                    else {
                                        if ("requesting" != h.lbs_state) return;
                                        h.lbs_state = "completed", c.push("wss://" + t.wx_web[0]), y()
                                    } else h.fire_login_failed(201)
                                }) : function(e, t, n) {
                                    var r = new XMLHttpRequest,
                                        i = !1,
                                        o = setTimeout(function() {
                                            i = !0, r.abort(), n("timeout", "")
                                        }, t);
                                    r.open("GET", e), r.onerror = function(e) {
                                        n("GET request error", e)
                                    }, r.onreadystatechange = function() {
                                        4 === r.readyState && (i || (clearTimeout(o), 200 === r.status && n("", r.responseText)))
                                    }, r.send(null)
                                }(o + "/getaddr?vid=" + e, 5e3, function(e, t) {
                                    if (e) n - 1 > 0 ? m(n - 1, r, (i + 1) % r.length) : (a.lbs_url1 === r ? h.lbs_state1 = "completed" : a.lbs_url2 === r && (h.lbs_state2 = "completed"), "completed" === h.lbs_state1 && "completed" === h.lbs_state2 && h.fire_login_failed(201));
                                    else {
                                        if ("requesting" != h.lbs_state) return;
                                        h.lbs_state = "completed", c = JSON.parse(t).web, y(), y()
                                    }
                                })
                            }
                        },
                        v = function() {
                            if (d("reconnecting...."), Date.now() - h.m_retry_time_start < h.m_retry_max_time && h.m_retry_count < h.m_retry_max_count) h.m_retry_count++, setTimeout(function() {
                                h.m_retry_delay = Math.min(h.m_retry_delay_max, 2 * h.m_retry_delay), y()
                            }, h.m_retry_delay);
                            else if (1 === h.state) h.fire_login_failed(201);
                            else {
                                if (3 !== h.state) return;
                                h.fire_logout(102)
                            }
                        },
                        y = function() {
                            if ("wechat" === t) {
                                if (1 === h.state || 3 === h.state) var n = new function() {
                                    var e = g(c[h.idx]);
                                    h.idx = (h.idx + 1) % c.length;
                                    var t = new wx.connectSocket({
                                        url: e
                                    });
                                    t.state = "CONNECTING", setTimeout(function() {
                                        if ("CONNECTING" === t.state) try {
                                            return void t.close()
                                        } catch (e) {
                                            console.error(e)
                                        } finally {
                                            h.fire_login_failed(201)
                                        }
                                    }, 6e3), t.onOpen(function(e) {
                                        if (0 === h.state) t.close();
                                        else if (1 === h.state && null === h.socket || 3 === h.state)
                                            for (var r in h.socket = n, t.state = "OPEN", d("on conn open"), h.go_login(), a) t.send({
                                                datd: JSON.stringify(a[r])
                                            });
                                        else t.close()
                                    }), t.onClose(function(e) {
                                        "OPEN" === t.state && 2 === h.state ? (d("on conn close"), _(3), h.line && (h.line = ""), h.m_retry_count = 0, h.m_retry_delay = h.m_retry_delay_min, h.m_retry_time_start = Date.now(), v()) : 1 === h.state ? h.fire_login_failed(201) : "CONNECTING" === t.state && y()
                                    }), t.onMessage(function(e) {
                                        var t;
                                        if (e.data instanceof ArrayBuffer) try {
                                            t = o(new Uint8Array(e.data))
                                        } catch (e) {
                                            console.error(e)
                                        } else t = e.data;
                                        d("Received message ", t);
                                        var n = JSON.parse(t),
                                            r = n[0];
                                        if ("close" === r && 1 === h.state) h.fire_login_failed(201);
                                        else if ("multi" == r)
                                            for (var a = 0; a < n[1].length; a++) {
                                                var s = n[1][a];
                                                i(s[0], s[1])
                                            } else i(n[0], n[1])
                                    }), t.onError(function(e) {
                                        d("on conn error"), t.state = "CLOSED", 2 === h.state && h.socket === n ? h.fire_logout(102) : 1 === h.state ? h.fire_login_failed(201) : 3 === h.state && (h.line && (h.line = ""), console.log("On error, going to reconnect"), 0 === h.m_retry_count && (h.m_retry_delay = h.m_retry_delay_min), h.m_retry_time_start = Date.now(), v())
                                    });
                                    var r = {},
                                        i = function(e, t) {
                                            e in r && r[e](t)
                                        },
                                        a = [];
                                    this.on = function(e, t) {
                                        r[e] = t
                                    }, this.emit = function(e, n) {
                                        "OPEN" === t.state ? (d("Sending ", [e, n]), t.send({
                                            data: JSON.stringify([e, n])
                                        })) : a.push([e, n])
                                    }, this.close = function() {
                                        t.close()
                                    }
                                }
                            } else if (1 === h.state || 3 === h.state) n = new function() {
                                var e = g(c[h.idx]);
                                if (a.proxy_server) {
                                    var t = e.split("/")[2];
                                    e = "wss://" + a.proxy_server + "/ws/?h=" + t.split(":")[0] + "&p=" + t.split(":")[1]
                                }
                                console.log(e), h.idx = (h.idx + 1) % c.length;
                                try {
                                    var r = new WebSocket(e);
                                    r.binaryType = "arraybuffer", r.state = "CONNECTING", setTimeout(function() {
                                        r.readyState !== r.CONNECTING || r.close()
                                    }, 6e3), r.onopen = function(e) {
                                        if (0 === h.state) r.close();
                                        else if (1 === h.state && null === h.socket || 3 === h.state)
                                            for (var t in h.socket = n, r.state = "OPEN", d("on conn open"), h.go_login(), l) r.send(JSON.stringify(l[t]));
                                        else r.close()
                                    }, r.onclose = function(e) {
                                        "OPEN" === r.state && 2 === h.state ? (d("on conn close"), _(3), h.line && (h.line = ""), h.m_retry_count = 0, h.m_retry_delay = h.m_retry_delay_min, h.m_retry_time_start = Date.now(), v()) : 1 === h.state ? 2 === h.alive_conn ? h.alive_conn -= 1 : 1 === h.alive_conn && h.onLoginFailed && h.fire_login_failed(201) : "CONNECTING" === r.state && y()
                                    }, r.onmessage = function(e) {
                                        var t;
                                        if (e.data instanceof ArrayBuffer) try {
                                            t = o(new Uint8Array(e.data))
                                        } catch (e) {
                                            console.error(e)
                                        } else t = e.data;
                                        d("Received message ", t);
                                        var n = JSON.parse(t),
                                            r = n[0];
                                        if ("close" === r && 1 === h.state) h.onLoginFailed && h.fire_login_failed(201);
                                        else if ("multi" == r)
                                            for (var i = 0; i < n[1].length; i++) {
                                                var a = n[1][i];
                                                s(a[0], a[1])
                                            } else s(n[0], n[1])
                                    }, r.onerror = function(e) {
                                        r.state = "CLOSED", d("on conn error"), navigator.userAgent.match(/(iPad|iPhone|iPod|Edge)/g) && (2 === h.state && _(3), h.line && (h.line = "")), 2 === h.state && h.socket === n ? h.fire_logout(102) : 1 === h.state ? h.fire_login_failed(201) : 3 === h.state && (console.log("On error, going to reconnect"), 0 === h.m_retry_count && (h.m_retry_delay = h.m_retry_delay_min), h.m_retry_time_start = Date.now(), v())
                                    };
                                    var i = {},
                                        s = function(e, t) {
                                            e in i && i[e](t)
                                        },
                                        l = [];
                                    this.on = function(e, t) {
                                        i[e] = t
                                    }, this.emit = function(e, t) {
                                        0 !== r.readyState ? (d("Sending ", [e, t]), r.send(JSON.stringify([e, t]))) : l.push([e, t])
                                    }, this.close = function() {
                                        r.close()
                                    }
                                } catch (e) {
                                    3 === h.state && (console.log("caught an error"), h.m_retry_count += 1, v())
                                }
                            };
                            var u = 0,
                                f = function() {
                                    setTimeout(function() {
                                        2 == h.state && (d("send ping", ++u), h.socket.emit("ping", u), f())
                                    }, 1e4)
                                };
                            h.go_login = function() {
                                "" === h.line ? (h.socket.emit("login", {
                                    vid: e,
                                    account: r,
                                    uid: 0,
                                    token: l,
                                    device: "websdk",
                                    ip: ""
                                }), h.login_data.account = r, h.login_data.vid = e, h.login_data.key = l, h.socket.on("login_ret", function(e) {
                                    var n = e[0],
                                        r = JSON.parse(e[1]);
                                    if (h.login_data.duration = Date.now() - h.login_data.time, d("login ret", n, r), n || "ok" !== r.result) {
                                        "" === n && (n = r.reason), h.login_data.now = Date.now(), h.login_data.result = "failed";
                                        try {
                                            if (h.onLoginFailed) {
                                                var o = "kick" === n ? 207 : "TokenErrorExpired" === n ? 204 : n.startsWith("TokenError") ? 206 : n.startsWith("wrong account") ? 209 : 201;
                                                h.fire_login_failed(o)
                                            }
                                        } catch (e) {
                                            console.error(e)
                                        } finally {
                                            i(a.rp_url, h.login_data)
                                        }
                                    } else {
                                        h.config_msg_set = r.config_msg_set || 0, h.config_inst_msg_with_msgid = r.config_inst_msg_with_msgid || 0, h.uid = r.uid, h.line = r.line, _(2), "wechat" !== t && h.socket.emit("set_flag", {
                                            binary: 1
                                        }), d("send ping", ++u), h.socket.emit("ping", u), f(), L();
                                        try {
                                            h.login_data.now = Date.now(), h.login_data.result = "success", h.onLoginSuccess && h.onLoginSuccess(h.uid)
                                        } catch (o) {
                                            console.error(o)
                                        } finally {
                                            i(a.rp_url, h.login_data), A()
                                        }
                                    }
                                })) : h.socket.emit("line_login", {
                                    line: h.line
                                });
                                var n = 0,
                                    o = {},
                                    c = {};
                                h.call2 = function(e, t, r) {
                                    o[++n] = [e, t, r], d("call ", [e, n, t]), h.socket.emit("call2", [e, n, t])
                                }, h.socket.on("call2-ret", function(e) {
                                    var t = e[0],
                                        n = e[1],
                                        r = e[2];
                                    if (t in o) {
                                        var i = o[t][2];
                                        if ("" === n) try {
                                            "ok" != (r = JSON.parse(r)).result && (n = r.data.result)
                                        } catch (e) {
                                            n = "wrong resp:" + r
                                        }
                                        i && i(n, r)
                                    }
                                });
                                var p, g = function(e, t) {
                                        return "" === e
                                    },
                                    m = function(e) {
                                        if (e.startsWith("msg-v2 ")) {
                                            if (7 === (t = s(e, " ", 6)).length) return [t[1], t[4], t[6]]
                                        } else if (e.startsWith("msg-v3 ")) {
                                            var t;
                                            if (8 === (t = s(e, " ", 7)).length) return h.v3_msg_set.get(t[1]) ? null : (h.v3_msg_set.set(t[1], Date.now()), [t[2], t[5], t[7]])
                                        }
                                        return null
                                    };
                                h.socket.on("pong", function(e) {
                                    d("recv pong")
                                }), h.socket.on("close", function(e) {
                                    h.fire_logout(102), h.socket.close()
                                }), h.socket.on("_close", function(e) {
                                    h.fire_logout(102)
                                }), h.socket.on("kick", function(e) {
                                    h.fire_logout(103)
                                });
                                var v = function(e) {
                                        if (e) {
                                            var t = e,
                                                n = t[0],
                                                r = t[1],
                                                i = t[2];
                                            if ("instant" === r) try {
                                                h.onMessageInstantReceive && h.onMessageInstantReceive(n, 0, i)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            if (r.startsWith("voip_")) {
                                                var o, a = JSON.parse(i),
                                                    s = a.channel,
                                                    l = a.peer,
                                                    u = a.extra;
                                                if ("voip_invite" === r) o = new I(s, l, u), h.call2("voip_invite_ack", {
                                                    line: h.line,
                                                    channelName: s,
                                                    peer: l,
                                                    extra: ""
                                                });
                                                else if (!(o = c[s + l])) return;
                                                if ("voip_invite" === r) try {
                                                    h.onInviteReceived && h.onInviteReceived(o)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_ack" === r) try {
                                                    o.onInviteReceivedByPeer && o.onInviteReceivedByPeer(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_accept" === r) try {
                                                    o.onInviteAcceptedByPeer && o.onInviteAcceptedByPeer(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_refuse" === r) try {
                                                    o.onInviteRefusedByPeer && o.onInviteRefusedByPeer(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_failed" === r) try {
                                                    o.onInviteFailed && o.onInviteFailed(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_bye" === r) try {
                                                    o.onInviteEndByPeer && o.onInviteEndByPeer(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if ("voip_invite_msg" === r) try {
                                                    o.onInviteMsg && o.onInviteMsg(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                            }
                                        }
                                    },
                                    y = function() {
                                        return Date.now()
                                    },
                                    b = 0,
                                    w = 0,
                                    E = 0,
                                    k = 0,
                                    S = !1,
                                    x = [],
                                    T = 0,
                                    A = function() {
                                        S || (S = !0, T = 0, 0 === h.config_msg_set ? h.call2("user_getmsg", {
                                            line: h.line,
                                            ver_clear: b,
                                            max: 30
                                        }, function(e, t) {
                                            if ("" === e) {
                                                var n = t,
                                                    r = b;
                                                for (var i in E = parseInt(n.ver_clear), b = Math.max(E, r), n.msgs) {
                                                    var o = n.msgs[i][0],
                                                        a = n.msgs[i][1];
                                                    o >= b + 1 && (v(m(a)), b = o)
                                                }(30 === n.msgs.length || b < w) && A(), y()
                                            }
                                            S = !1, k = y()
                                        }) : 1 === h.config_msg_set && h.call2("user_getmsg2", {
                                            line: h.line,
                                            clear_msgs: x,
                                            max: 30
                                        }, function(e, t) {
                                            if ("" === e) {
                                                for (var n in x = [], t.msgs) {
                                                    t.msgs[n][0];
                                                    var r = t.msgs[n][1];
                                                    v(m(r))
                                                }
                                                t.msgs.length >= 30 && A(), y()
                                            }
                                            S = !1, k = y()
                                        }))
                                    },
                                    R = function() {
                                        0 === h.config_msg_set ? k = y() : 1 === h.config_msg_set && 0 === T && (T = y() + 500)
                                    },
                                    L = function() {
                                        setTimeout(function() {
                                            if (0 !== h.state) {
                                                if (2 === h.state) {
                                                    var e = y();
                                                    0 === h.config_msg_set ? E < b && e - k > 1e3 ? A() : e - k >= 6e4 && A() : 1 === h.config_msg_set && x.length > 0 && e > T && T > 0 && A()
                                                }
                                                L()
                                            }
                                        }, 100)
                                    };
                                h.socket.on("notify", function(e) {
                                    d("recv notify ", e), "string" == typeof e && (e = (e = s(e, " ", 2)).slice(1));
                                    var t = e[0];
                                    if ("channel2" === t) {
                                        var n = e[1],
                                            r = e[2];
                                        if (0 === h.config_msg_set && 0 !== p.m_channel_msgid && p.m_channel_msgid + 1 > r) return void d("ignore channel msg", n, r, p.m_channel_msgid);
                                        p.m_channel_msgid = r;
                                        var i = m(e[3]);
                                        if (i) {
                                            i[0];
                                            var o = i[1],
                                                a = i[2],
                                                l = JSON.parse(a);
                                            if ("channel_msg" === o) try {
                                                p.onMessageChannelReceive && p.onMessageChannelReceive(l.account, l.uid, l.msg)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            if ("channel_user_join" === o) try {
                                                p.onChannelUserJoined && p.onChannelUserJoined(l.account, l.uid)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            if ("channel_user_leave" === o) try {
                                                p.onChannelUserLeaved && p.onChannelUserLeaved(l.account, l.uid)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            if ("channel_attr_update" === o) try {
                                                p.onChannelAttrUpdated && p.onChannelAttrUpdated(l.name, l.value, l.type)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                    }
                                    if ("msg" === t && (w = e[1], A()), "recvmsg" === t) {
                                        var u = JSON.parse(e[1]),
                                            f = u[0],
                                            c = u[1];
                                        f === b + 1 ? (v(m(c)), b = f, R()) : (w = f, A())
                                    }
                                    if ("recvmsg_by_msgid" === t) {
                                        r = s(e[1], " ", 7)[1];
                                        x.push(r), v(m(e[1])), R()
                                    }
                                }), h.messageInstantSend = function(e, t, n) {
                                    var r = {
                                        line: h.line,
                                        peer: e,
                                        flag: "v1:E:3600",
                                        t: "instant",
                                        content: t
                                    };
                                    if (1 === h.config_inst_msg_with_msgid) {
                                        var i = null;
                                        "string" == typeof t && (i = JSON.parse(t).msgid), r.messageID = i || y() % 1e6 + h.m_msgid++ % 1e6
                                    }
                                    h.call2("user_sendmsg", r, function(e, t) {
                                        n && n(!g(e))
                                    })
                                }, h.invoke = function(e, t, n) {
                                    if (e.startsWith("io.agora.signal.")) {
                                        var r = e.split(".")[3];
                                        t.line = h.line, h.call2(r, t, function(e, t) {
                                            n && n(e, t)
                                        })
                                    }
                                };
                                var I = function(e, t, n) {
                                    this.onInviteReceivedByPeer = "", this.onInviteAcceptedByPeer = "", this.onInviteRefusedByPeer = "", this.onInviteFailed = "", this.onInviteEndByPeer = "", this.onInviteEndByMyself = "", this.onInviteMsg = "";
                                    var r = this;
                                    this.channelName = e, this.peer = t, this.extra = n, c[e + t] = r, this.channelInviteUser2 = function() {
                                        n = n || "", h.call2("voip_invite", {
                                            line: h.line,
                                            channelName: e,
                                            peer: t,
                                            extra: n
                                        }, function(e, t) {
                                            if (g(e));
                                            else try {
                                                r.onInviteFailed(e)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        })
                                    }, this.channelInviteAccept = function(n) {
                                        n = n || "", h.call2("voip_invite_accept", {
                                            line: h.line,
                                            channelName: e,
                                            peer: t,
                                            extra: n
                                        })
                                    }, this.channelInviteRefuse = function(n) {
                                        n = n || "", h.call2("voip_invite_refuse", {
                                            line: h.line,
                                            channelName: e,
                                            peer: t,
                                            extra: n
                                        })
                                    }, this.channelInviteDTMF = function(n) {
                                        h.call2("voip_invite_msg", {
                                            line: h.line,
                                            channelName: e,
                                            peer: t,
                                            extra: JSON.stringify({
                                                msgtype: "dtmf",
                                                msgdata: n
                                            })
                                        })
                                    }, this.channelInviteEnd = function(n) {
                                        n = n || "", h.call2("voip_invite_bye", {
                                            line: h.line,
                                            channelName: e,
                                            peer: t,
                                            extra: n
                                        });
                                        try {
                                            r.onInviteEndByMyself && r.onInviteEndByMyself("")
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }
                                };
                                h.channelInviteUser2 = function(e, t, n) {
                                    var r = new I(e, t, n);
                                    return r.channelInviteUser2(), r
                                }, h.channelJoin = function(e) {
                                    try {
                                        "string" != typeof e && (e = JSON.stringify(e))
                                    } catch (e) {
                                        return console.error("Invalid channel name type, should be a string."), void console.error(e)
                                    }
                                    if (2 == h.state) return p = new function() {
                                        this.onChannelJoined = "", this.onChannelJoinFailed = "", this.onChannelLeaved = "", this.onChannelUserList = "", this.onChannelUserJoined = "", this.onChannelUserLeaved = "", this.onChannelUserList = "", this.onChannelAttrUpdated = "", this.onMessageChannelReceive = "", this.name = e, this.state = "joining", this.m_channel_msgid = 0, this.messageChannelSend = function(t, n) {
                                            var r = {
                                                line: h.line,
                                                name: e,
                                                msg: t
                                            };
                                            if (1 === h.config_inst_msg_with_msgid) {
                                                var i = null;
                                                "string" == typeof t && (i = JSON.parse(t).msgid), r.msgID = i || y() % 1e6 + h.m_msgid++ % 1e6
                                            }
                                            h.call2("channel_sendmsg", r, function(e, t) {
                                                n && n()
                                            })
                                        }, this.channelLeave = function(t) {
                                            h.call2("channel_leave", {
                                                line: h.line,
                                                name: e
                                            }, function(e, n) {
                                                if (p.state = "leaved", t) t();
                                                else try {
                                                    p.onChannelLeaved && p.onChannelLeaved(0)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                            })
                                        }, this.channelSetAttr = function(t, n, r) {
                                            h.call2("channel_set_attr", {
                                                line: h.line,
                                                channel: e,
                                                name: t,
                                                value: n
                                            }, function(e, t) {
                                                r && r()
                                            })
                                        }, this.channelDelAttr = function(t, n) {
                                            h.call2("channel_del_attr", {
                                                line: h.line,
                                                channel: e,
                                                name: t
                                            }, function(e, t) {
                                                n && n()
                                            })
                                        }, this.channelClearAttr = function(t) {
                                            h.call2("channel_clear_attr", {
                                                line: h.line,
                                                channel: e
                                            }, function(e, n) {
                                                t && t()
                                            })
                                        }
                                    }, h.call2("channel_join", {
                                        line: h.line,
                                        name: e
                                    }, function(e, t) {
                                        if ("" === e) {
                                            p.state = "joined";
                                            try {
                                                p.onChannelJoined && p.onChannelJoined()
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            var n = t;
                                            try {
                                                p.onChannelUserList && p.onChannelUserList(n.list)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            try {
                                                if (p.onChannelAttrUpdated)
                                                    for (var r in n.attrs) p.onChannelAttrUpdated(r, n.attrs[r], "update")
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        } else try {
                                            p.onChannelJoinFailed && p.onChannelJoinFailed(e)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }), p;
                                    d("You should log in first.")
                                }
                            }
                        };
                    h.socket = null, h.debugging ? (h.lbs_state = "completed", h.login_data.time = Date.now(), y()) : "wechat" === t ? m(2, a.lbs_wx, 0) : (n(a.lbs_url1), n(a.lbs_url2), m(2, a.lbs_url1, 0), m(2, a.lbs_url2, 0))
                };
                this.login = function(e, t, n, r) {
                    return new l(e, t, n, r)
                };
                var u = {
                    DEBUG: 0,
                    WARNING: 1,
                    INFO: 2
                };
                this.setDoLog = function(e = !1, t = "DEBUG") {
                    t && "DEBUG" !== t && "WARNING" !== t && "INFO" !== t ? console.log("Only accept DEBUG / WARNING / INFO as logging level values. The default level is INFO") : (a.isLogging = e, a.loggingLevel = u[t])
                }
            };

        function o(e) {
            return new i(e)
        }
        n.d(t, "default", function() {
            return o
        })
    }]).default
});
//# sourceMappingURL=AgoraSig.js.map