(()=>{
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((function(i) {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    var s = "undefined" != typeof document ? document : {}
      , a = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    t(s, a);
    var i = "undefined" != typeof window ? window : {};
    t(i, {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    });
    class n {
        constructor(e) {
            const t = this;
            for (let s = 0; s < e.length; s += 1)
                t[s] = e[s];
            return t.length = e.length,
            this
        }
    }
    function r(e, t) {
        const a = [];
        let r = 0;
        if (e && !t && e instanceof n)
            return e;
        if (e)
            if ("string" == typeof e) {
                let i, n;
                const l = e.trim();
                if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                    let e = "div";
                    for (0 === l.indexOf("<li") && (e = "ul"),
                    0 === l.indexOf("<tr") && (e = "tbody"),
                    0 !== l.indexOf("<td") && 0 !== l.indexOf("<th") || (e = "tr"),
                    0 === l.indexOf("<tbody") && (e = "table"),
                    0 === l.indexOf("<option") && (e = "select"),
                    n = s.createElement(e),
                    n.innerHTML = l,
                    r = 0; r < n.childNodes.length; r += 1)
                        a.push(n.childNodes[r])
                } else
                    for (i = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || s).querySelectorAll(e.trim()) : [s.getElementById(e.trim().split("#")[1])],
                    r = 0; r < i.length; r += 1)
                        i[r] && a.push(i[r])
            } else if (e.nodeType || e === i || e === s)
                a.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (r = 0; r < e.length; r += 1)
                    a.push(e[r]);
        return new n(a)
    }
    function l(e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t
    }
    r.fn = n.prototype,
    r.Class = n,
    r.Dom7 = n;
    "resize scroll".split(" ");
    var o = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , d = "undefined" == typeof window ? {
        document: o,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window;
    const c = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[e]);
            return this
        },
        removeClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[e]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[e]);
            return this
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length)
                    this[s].setAttribute(e, t);
                else
                    for (const t in e)
                        this[s][t] = e[t],
                        this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            let s;
            if (void 0 !== t) {
                for (let a = 0; a < this.length; a += 1)
                    s = this[a],
                    s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                    s.dom7ElementDataStorage[e] = t;
                return this
            }
            if (s = this[0],
            s) {
                if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage)
                    return s.dom7ElementDataStorage[e];
                const t = s.getAttribute(`data-${e}`);
                return t || void 0
            }
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) {
                const s = this[t].style;
                s.webkitTransform = e,
                s.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
                const s = this[t].style;
                s.webkitTransitionDuration = e,
                s.transitionDuration = e
            }
            return this
        },
        on: function(...e) {
            let[t,s,a,i] = e;
            function n(e) {
                const t = e.target;
                if (!t)
                    return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e),
                r(t).is(s))
                    a.apply(t, i);
                else {
                    const e = r(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        r(e[t]).is(s) && a.apply(e[t], i)
                }
            }
            function l(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                a.apply(this, t)
            }
            "function" == typeof e[1] && ([t,a,i] = e,
            s = void 0),
            i || (i = !1);
            const o = t.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (d = 0; d < o.length; d += 1) {
                        const e = o[d];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: a,
                            proxyListener: n
                        }),
                        t.addEventListener(e, n, i)
                    }
                else
                    for (d = 0; d < o.length; d += 1) {
                        const e = o[d];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: a,
                            proxyListener: l
                        }),
                        t.addEventListener(e, l, i)
                    }
            }
            return this
        },
        off: function(...e) {
            let[t,s,a,i] = e;
            "function" == typeof e[1] && ([t,a,i] = e,
            s = void 0),
            i || (i = !1);
            const n = t.split(" ");
            for (let e = 0; e < n.length; e += 1) {
                const t = n[e];
                for (let e = 0; e < this.length; e += 1) {
                    const n = this[e];
                    let r;
                    if (!s && n.dom7Listeners ? r = n.dom7Listeners[t] : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
                    r && r.length)
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const s = r[e];
                            a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (n.removeEventListener(t, s.proxyListener, i),
                            r.splice(e, 1)) : a || (n.removeEventListener(t, s.proxyListener, i),
                            r.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = e[0].split(" ")
              , a = e[1];
            for (let n = 0; n < t.length; n += 1) {
                const r = t[n];
                for (let t = 0; t < this.length; t += 1) {
                    const n = this[t];
                    let l;
                    try {
                        l = new i.CustomEvent(r,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        l = s.createEvent("Event"),
                        l.initEvent(r, !0, !0),
                        l.detail = a
                    }
                    n.dom7EventData = e.filter(((e,t)=>t > 0)),
                    n.dispatchEvent(l),
                    n.dom7EventData = [],
                    delete n.dom7EventData
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = ["webkitTransitionEnd", "transitionend"]
              , s = this;
            let a;
            function i(n) {
                if (n.target === this)
                    for (e.call(this, n),
                    a = 0; a < t.length; a += 1)
                        s.off(t[a], i)
            }
            if (e)
                for (a = 0; a < t.length; a += 1)
                    s.on(t[a], i);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                const e = this[0]
                  , t = e.getBoundingClientRect()
                  , a = s.body
                  , n = e.clientTop || a.clientTop || 0
                  , r = e.clientLeft || a.clientLeft || 0
                  , l = e === i ? i.scrollY : e.scrollTop
                  , o = e === i ? i.scrollX : e.scrollLeft;
                return {
                    top: t.top + l - n,
                    left: t.left + o - r
                }
            }
            return null
        },
        css: function(e, t) {
            let s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (let t in e)
                            this[s].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1)
                    this[s].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (let t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = this[0];
            let a, l;
            if (!t || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (t.matches)
                    return t.matches(e);
                if (t.webkitMatchesSelector)
                    return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector)
                    return t.msMatchesSelector(e);
                for (a = r(e),
                l = 0; l < a.length; l += 1)
                    if (a[l] === t)
                        return !0;
                return !1
            }
            if (e === s)
                return t === s;
            if (e === i)
                return t === i;
            if (e.nodeType || e instanceof n) {
                for (a = e.nodeType ? [e] : e,
                l = 0; l < a.length; l += 1)
                    if (a[l] === t)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            let s;
            return e > t - 1 ? new n([]) : e < 0 ? (s = t + e,
            new n(s < 0 ? [] : [this[s]])) : new n([this[e]])
        },
        append: function(...e) {
            let t;
            for (let a = 0; a < e.length; a += 1) {
                t = e[a];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const a = s.createElement("div");
                        for (a.innerHTML = t; a.firstChild; )
                            this[e].appendChild(a.firstChild)
                    } else if (t instanceof n)
                        for (let s = 0; s < t.length; s += 1)
                            this[e].appendChild(t[s]);
                    else
                        this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            let t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    const i = s.createElement("div");
                    for (i.innerHTML = e,
                    a = i.childNodes.length - 1; a >= 0; a -= 1)
                        this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof n)
                    for (a = 0; a < e.length; a += 1)
                        this[t].insertBefore(e[a], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new n([this[0].nextElementSibling]) : new n([]) : this[0].nextElementSibling ? new n([this[0].nextElementSibling]) : new n([]) : new n([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return new n([]);
            for (; s.nextElementSibling; ) {
                const a = s.nextElementSibling;
                e ? r(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return new n(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && r(t.previousElementSibling).is(e) ? new n([t.previousElementSibling]) : new n([]) : t.previousElementSibling ? new n([t.previousElementSibling]) : new n([])
            }
            return new n([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return new n([]);
            for (; s.previousElementSibling; ) {
                const a = s.previousElementSibling;
                e ? r(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return new n(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (e ? r(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return r(l(t))
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a; )
                    e ? r(a).is(e) && t.push(a) : t.push(a),
                    a = a.parentNode
            }
            return r(l(t))
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1)
                    t.push(a[e])
            }
            return new n(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].childNodes;
                for (let s = 0; s < a.length; s += 1)
                    e ? 1 === a[s].nodeType && r(a[s]).is(e) && t.push(a[s]) : 1 === a[s].nodeType && t.push(a[s])
            }
            return new n(l(t))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function(...e) {
            const t = this;
            let s, a;
            for (s = 0; s < e.length; s += 1) {
                const i = r(e[s]);
                for (a = 0; a < i.length; a += 1)
                    t[t.length] = i[a],
                    t.length += 1
            }
            return t
        },
        styles: function() {
            return this[0] ? i.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(c).forEach((e=>{
        r.fn[e] = r.fn[e] || c[e]
    }
    ));
    const p = {
        deleteProps(e) {
            const t = e;
            Object.keys(t).forEach((e=>{
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            ))
        },
        nextTick: (e,t=0)=>setTimeout(e, t),
        now: ()=>Date.now(),
        getTranslate(e, t="x") {
            let s, a, i;
            const n = d.getComputedStyle(e, null);
            return d.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform,
            a.split(",").length > 6 && (a = a.split(", ").map((e=>e.replace(",", "."))).join(", ")),
            i = new d.WebKitCSSMatrix("none" === a ? "" : a)) : (i = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            s = i.toString().split(",")),
            "x" === t && (a = d.WebKitCSSMatrix ? i.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
            "y" === t && (a = d.WebKitCSSMatrix ? i.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
            a || 0
        },
        parseUrlQuery(e) {
            const t = {};
            let s, a, i, n, r = e || d.location.href;
            if ("string" == typeof r && r.length)
                for (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                a = r.split("&").filter((e=>"" !== e)),
                n = a.length,
                s = 0; s < n; s += 1)
                    i = a[s].replace(/#\S+/g, "").split("="),
                    t[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return t
        },
        isObject: e=>"object" == typeof e && null !== e && e.constructor && e.constructor === Object,
        extend(...e) {
            const t = Object(e[0]);
            for (let s = 1; s < e.length; s += 1) {
                const a = e[s];
                if (null != a) {
                    const e = Object.keys(Object(a));
                    for (let s = 0, i = e.length; s < i; s += 1) {
                        const i = e[s]
                          , n = Object.getOwnPropertyDescriptor(a, i);
                        void 0 !== n && n.enumerable && (p.isObject(t[i]) && p.isObject(a[i]) ? p.extend(t[i], a[i]) : !p.isObject(t[i]) && p.isObject(a[i]) ? (t[i] = {},
                        p.extend(t[i], a[i])) : t[i] = a[i])
                    }
                }
            }
            return t
        }
    }
      , u = function() {
        const e = o.createElement("div");
        return {
            touch: d.Modernizr && !0 === d.Modernizr.touch || !!(d.navigator.maxTouchPoints > 0 || "ontouchstart"in d || d.DocumentTouch && o instanceof d.DocumentTouch),
            pointerEvents: !!(d.navigator.pointerEnabled || d.PointerEvent || "maxTouchPoints"in d.navigator && d.navigator.maxTouchPoints > 0),
            prefixedPointerEvents: !!d.navigator.msPointerEnabled,
            transition: function() {
                const t = e.style;
                return "transition"in t || "webkitTransition"in t || "MozTransition"in t
            }(),
            transforms3d: d.Modernizr && !0 === d.Modernizr.csstransforms3d || function() {
                const t = e.style;
                return "webkitPerspective"in t || "MozPerspective"in t || "OPerspective"in t || "MsPerspective"in t || "perspective"in t
            }(),
            flexbox: function() {
                const t = e.style
                  , s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                for (let e = 0; e < s.length; e += 1)
                    if (s[e]in t)
                        return !0;
                return !1
            }(),
            observer: "MutationObserver"in d || "WebkitMutationObserver"in d,
            passiveListener: function() {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            e = !0
                        }
                    });
                    d.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in d
        }
    }()
      , h = {
        isIE: !!d.navigator.userAgent.match(/Trident/g) || !!d.navigator.userAgent.match(/MSIE/g),
        isEdge: !!d.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            const e = d.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(d.navigator.userAgent)
    };
    class m {
        constructor(e={}) {
            const t = this;
            t.params = e,
            t.eventsListeners = {},
            t.params && t.params.on && Object.keys(t.params.on).forEach((e=>{
                t.on(e, t.params.on[e])
            }
            ))
        }
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        }
        once(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            function i(...s) {
                t.apply(a, s),
                a.off(e, i),
                i.f7proxy && delete i.f7proxy
            }
            return i.f7proxy = t,
            a.on(e, i, s)
        }
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach(((a,i)=>{
                    (a === t || a.f7proxy && a.f7proxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        }
        emit(...e) {
            const t = this;
            if (!t.eventsListeners)
                return t;
            let s, a, i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
            a = e.slice(1, e.length),
            i = t) : (s = e[0].events,
            a = e[0].data,
            i = e[0].context || t);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e=>{
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const s = [];
                    t.eventsListeners[e].forEach((e=>{
                        s.push(e)
                    }
                    )),
                    s.forEach((e=>{
                        e.apply(i, a)
                    }
                    ))
                }
            }
            )),
            t
        }
        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach((s=>{
                const a = t.modules[s];
                a.params && p.extend(e, a.params)
            }
            ))
        }
        useModules(e={}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach((s=>{
                const a = t.modules[s]
                  , i = e[s] || {};
                a.instance && Object.keys(a.instance).forEach((e=>{
                    const s = a.instance[e];
                    t[e] = "function" == typeof s ? s.bind(t) : s
                }
                )),
                a.on && t.on && Object.keys(a.on).forEach((e=>{
                    t.on(e, a.on[e])
                }
                )),
                a.create && a.create.bind(t)(i)
            }
            ))
        }
        static set components(e) {
            this.use && this.use(e)
        }
        static installModule(e, ...t) {
            const s = this;
            s.prototype.modules || (s.prototype.modules = {});
            const a = e.name || `${Object.keys(s.prototype.modules).length}_${p.now()}`;
            return s.prototype.modules[a] = e,
            e.proto && Object.keys(e.proto).forEach((t=>{
                s.prototype[t] = e.proto[t]
            }
            )),
            e.static && Object.keys(e.static).forEach((t=>{
                s[t] = e.static[t]
            }
            )),
            e.install && e.install.apply(s, t),
            s
        }
        static use(e, ...t) {
            const s = this;
            return Array.isArray(e) ? (e.forEach((e=>s.installModule(e))),
            s) : s.installModule(e, ...t)
        }
    }
    var f = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width ? e.params.width : a[0].clientWidth,
            s = void 0 !== e.params.height ? e.params.height : a[0].clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10),
            s = s - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10),
            p.extend(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this
              , t = e.params
              , {$wrapperEl: s, size: a, rtlTranslate: i, wrongRTL: n} = e
              , r = e.virtual && t.virtual.enabled
              , l = r ? e.virtual.slides.length : e.slides.length
              , o = s.children(`.${e.params.slideClass}`)
              , c = r ? e.virtual.slides.length : o.length;
            let m = [];
            const f = []
              , g = [];
            let v = t.slidesOffsetBefore;
            "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
            let b = t.slidesOffsetAfter;
            "function" == typeof b && (b = t.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length
              , y = e.snapGrid.length;
            let x, E, T = t.spaceBetween, S = -v, C = 0, $ = 0;
            if (void 0 === a)
                return;
            "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * a),
            e.virtualSize = -T,
            i ? o.css({
                marginLeft: "",
                marginTop: ""
            }) : o.css({
                marginRight: "",
                marginBottom: ""
            }),
            t.slidesPerColumn > 1 && (x = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn,
            "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn
              , P = x / M
              , k = Math.floor(c / t.slidesPerColumn);
            for (let s = 0; s < c; s += 1) {
                E = 0;
                const i = o.eq(s);
                if (t.slidesPerColumn > 1) {
                    let a, n, r;
                    if ("column" === t.slidesPerColumnFill || "row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                        if ("column" === t.slidesPerColumnFill)
                            n = Math.floor(s / M),
                            r = s - n * M,
                            (n > k || n === k && r === M - 1) && (r += 1,
                            r >= M && (r = 0,
                            n += 1));
                        else {
                            const e = Math.floor(s / t.slidesPerGroup);
                            r = Math.floor(s / t.slidesPerView) - e * t.slidesPerColumn,
                            n = s - r * t.slidesPerView - e * t.slidesPerView
                        }
                        a = n + r * x / M,
                        i.css({
                            "-webkit-box-ordinal-group": a,
                            "-moz-box-ordinal-group": a,
                            "-ms-flex-order": a,
                            "-webkit-order": a,
                            order: a
                        })
                    } else
                        r = Math.floor(s / P),
                        n = s - r * P;
                    i.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== r && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", n).attr("data-swiper-row", r)
                }
                if ("none" !== i.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const s = d.getComputedStyle(i[0], null)
                          , a = i[0].style.transform
                          , n = i[0].style.webkitTransform;
                        if (a && (i[0].style.transform = "none"),
                        n && (i[0].style.webkitTransform = "none"),
                        t.roundLengths)
                            E = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                        else if (e.isHorizontal()) {
                            const e = parseFloat(s.getPropertyValue("width"))
                              , t = parseFloat(s.getPropertyValue("padding-left"))
                              , a = parseFloat(s.getPropertyValue("padding-right"))
                              , i = parseFloat(s.getPropertyValue("margin-left"))
                              , n = parseFloat(s.getPropertyValue("margin-right"))
                              , r = s.getPropertyValue("box-sizing");
                            E = r && "border-box" === r && !h.isIE ? e + i + n : e + t + a + i + n
                        } else {
                            const e = parseFloat(s.getPropertyValue("height"))
                              , t = parseFloat(s.getPropertyValue("padding-top"))
                              , a = parseFloat(s.getPropertyValue("padding-bottom"))
                              , i = parseFloat(s.getPropertyValue("margin-top"))
                              , n = parseFloat(s.getPropertyValue("margin-bottom"))
                              , r = s.getPropertyValue("box-sizing");
                            E = r && "border-box" === r && !h.isIE ? e + i + n : e + t + a + i + n
                        }
                        a && (i[0].style.transform = a),
                        n && (i[0].style.webkitTransform = n),
                        t.roundLengths && (E = Math.floor(E))
                    } else
                        E = (a - (t.slidesPerView - 1) * T) / t.slidesPerView,
                        t.roundLengths && (E = Math.floor(E)),
                        o[s] && (e.isHorizontal() ? o[s].style.width = `${E}px` : o[s].style.height = `${E}px`);
                    o[s] && (o[s].swiperSlideSize = E),
                    g.push(E),
                    t.centeredSlides ? (S = S + E / 2 + C / 2 + T,
                    0 === C && 0 !== s && (S = S - a / 2 - T),
                    0 === s && (S = S - a / 2 - T),
                    Math.abs(S) < .001 && (S = 0),
                    t.roundLengths && (S = Math.floor(S)),
                    $ % t.slidesPerGroup == 0 && m.push(S),
                    f.push(S)) : (t.roundLengths && (S = Math.floor(S)),
                    $ % t.slidesPerGroup == 0 && m.push(S),
                    f.push(S),
                    S = S + E + T),
                    e.virtualSize += E + T,
                    C = E,
                    $ += 1
                }
            }
            let z;
            if (e.virtualSize = Math.max(e.virtualSize, a) + b,
            i && n && ("slide" === t.effect || "coverflow" === t.effect) && s.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }),
            u.flexbox && !t.setWrapperSize || (e.isHorizontal() ? s.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }) : s.css({
                height: `${e.virtualSize + t.spaceBetween}px`
            })),
            t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * x,
            e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
            e.isHorizontal() ? s.css({
                width: `${e.virtualSize + t.spaceBetween}px`
            }) : s.css({
                height: `${e.virtualSize + t.spaceBetween}px`
            }),
            t.centeredSlides)) {
                z = [];
                for (let s = 0; s < m.length; s += 1) {
                    let a = m[s];
                    t.roundLengths && (a = Math.floor(a)),
                    m[s] < e.virtualSize + m[0] && z.push(a)
                }
                m = z
            }
            if (!t.centeredSlides) {
                z = [];
                for (let s = 0; s < m.length; s += 1) {
                    let i = m[s];
                    t.roundLengths && (i = Math.floor(i)),
                    m[s] <= e.virtualSize - a && z.push(i)
                }
                m = z,
                Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - a)
            }
            if (0 === m.length && (m = [0]),
            0 !== t.spaceBetween && (e.isHorizontal() ? i ? o.css({
                marginLeft: `${T}px`
            }) : o.css({
                marginRight: `${T}px`
            }) : o.css({
                marginBottom: `${T}px`
            })),
            t.centerInsufficientSlides) {
                let e = 0;
                if (g.forEach((s=>{
                    e += s + (t.spaceBetween ? t.spaceBetween : 0)
                }
                )),
                e -= t.spaceBetween,
                e < a) {
                    const t = (a - e) / 2;
                    m.forEach(((e,s)=>{
                        m[s] = e - t
                    }
                    )),
                    f.forEach(((e,s)=>{
                        f[s] = e + t
                    }
                    ))
                }
            }
            p.extend(e, {
                slides: o,
                snapGrid: m,
                slidesGrid: f,
                slidesSizesGrid: g
            }),
            c !== l && e.emit("slidesLengthChange"),
            m.length !== w && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            f.length !== y && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = [];
            let a, i = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
            "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                    const e = t.activeIndex + a;
                    if (e > t.slides.length)
                        break;
                    s.push(t.slides.eq(e)[0])
                }
            else
                s.push(t.slides.eq(t.activeIndex)[0]);
            for (a = 0; a < s.length; a += 1)
                if (void 0 !== s[a]) {
                    const e = s[a].offsetHeight;
                    i = e > i ? e : i
                }
            i && t.$wrapperEl.css("height", `${i}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides;
            for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e=this && this.translate || 0) {
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            a.removeClass(s.slideVisibleClass),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const r = a[e]
                  , l = (n + (s.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + s.spaceBetween);
                if (s.watchSlidesVisibility) {
                    const i = -(n - r.swiperSlideOffset)
                      , l = i + t.slidesSizesGrid[e];
                    (i >= 0 && i < t.size - 1 || l > 1 && l <= t.size || i <= 0 && l >= t.size) && (t.visibleSlides.push(r),
                    t.visibleSlidesIndexes.push(e),
                    a.eq(e).addClass(s.slideVisibleClass))
                }
                r.progress = i ? -l : l
            }
            t.visibleSlides = r(t.visibleSlides)
        },
        updateProgress: function(e=this && this.translate || 0) {
            const t = this
              , s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: n, isEnd: r} = t;
            const l = n
              , o = r;
            0 === a ? (i = 0,
            n = !0,
            r = !0) : (i = (e - t.minTranslate()) / a,
            n = i <= 0,
            r = i >= 1),
            p.extend(t, {
                progress: i,
                isBeginning: n,
                isEnd: r
            }),
            (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e),
            n && !l && t.emit("reachBeginning toEdge"),
            r && !o && t.emit("reachEnd toEdge"),
            (l && !n || o && !r) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: n} = e
              , r = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
            l = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
            l.addClass(s.slideActiveClass),
            s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0),
            o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1),
            d.addClass(s.slidePrevClass)),
            s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {slidesGrid: a, snapGrid: i, params: n, activeIndex: r, realIndex: l, snapIndex: o} = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1)
                    void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (d = i.indexOf(s) >= 0 ? i.indexOf(s) : Math.floor(c / n.slidesPerGroup),
            d >= i.length && (d = i.length - 1),
            c === r)
                return void (d !== o && (t.snapIndex = d,
                t.emit("snapIndexChange")));
            const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            p.extend(t, {
                snapIndex: d,
                realIndex: u,
                previousIndex: r,
                activeIndex: c
            }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            l !== u && t.emit("realIndexChange"),
            (t.initialized || t.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this
              , s = t.params
              , a = r(e.target).closest(`.${s.slideClass}`)[0];
            let i = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    t.slides[e] === a && (i = !0);
            if (!a || !i)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = a,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r(a).index(),
            s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var g = {
        getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            let n = p.getTranslate(i[0], e);
            return s && (n = -n),
            n || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, $wrapperEl: n, progress: r} = s;
            let l, o = 0, d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e,
            i.roundLengths && (o = Math.floor(o),
            d = Math.floor(d)),
            i.virtualTranslate || (u.transforms3d ? n.transform(`translate3d(${o}px, ${d}px, 0px)`) : n.transform(`translate(${o}px, ${d}px)`)),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? o : d;
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c,
            l !== r && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var v = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e=!0, t) {
            const s = this
              , {activeIndex: a, params: i, previousIndex: n} = s;
            i.autoHeight && s.updateAutoHeight();
            let r = t;
            if (r || (r = a > n ? "next" : a < n ? "prev" : "reset"),
            s.emit("transitionStart"),
            e && a !== n) {
                if ("reset" === r)
                    return void s.emit("slideResetTransitionStart");
                s.emit("slideChangeTransitionStart"),
                "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e=!0, t) {
            const s = this
              , {activeIndex: a, previousIndex: i} = s;
            s.animating = !1,
            s.setTransition(0);
            let n = t;
            if (n || (n = a > i ? "next" : a < i ? "prev" : "reset"),
            s.emit("transitionEnd"),
            e && a !== i) {
                if ("reset" === n)
                    return void s.emit("slideResetTransitionEnd");
                s.emit("slideChangeTransitionEnd"),
                "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
            }
        }
    };
    var b = {
        slideTo: function(e=0, t=this.params.speed, s=!0, a) {
            const i = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: r, snapGrid: l, slidesGrid: o, previousIndex: d, activeIndex: c, rtlTranslate: p} = i;
            if (i.animating && r.preventInteractionOnTransition)
                return !1;
            let h = Math.floor(n / r.slidesPerGroup);
            h >= l.length && (h = l.length - 1),
            (c || r.initialSlide || 0) === (d || 0) && s && i.emit("beforeSlideChangeStart");
            const m = -l[h];
            if (i.updateProgress(m),
            r.normalizeSlideIndex)
                for (let e = 0; e < o.length; e += 1)
                    -Math.floor(100 * m) >= Math.floor(100 * o[e]) && (n = e);
            if (i.initialized && n !== c) {
                if (!i.allowSlideNext && m < i.translate && m < i.minTranslate())
                    return !1;
                if (!i.allowSlidePrev && m > i.translate && m > i.maxTranslate() && (c || 0) !== n)
                    return !1
            }
            let f;
            return f = n > c ? "next" : n < c ? "prev" : "reset",
            p && -m === i.translate || !p && m === i.translate ? (i.updateActiveIndex(n),
            r.autoHeight && i.updateAutoHeight(),
            i.updateSlidesClasses(),
            "slide" !== r.effect && i.setTranslate(m),
            "reset" !== f && (i.transitionStart(s, f),
            i.transitionEnd(s, f)),
            !1) : (0 !== t && u.transition ? (i.setTransition(t),
            i.setTranslate(m),
            i.updateActiveIndex(n),
            i.updateSlidesClasses(),
            i.emit("beforeTransitionStart", t, a),
            i.transitionStart(s, f),
            i.animating || (i.animating = !0,
            i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) {
                i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd),
                i.onSlideToWrapperTransitionEnd = null,
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(s, f))
            }
            ),
            i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
            i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd))) : (i.setTransition(0),
            i.setTranslate(m),
            i.updateActiveIndex(n),
            i.updateSlidesClasses(),
            i.emit("beforeTransitionStart", t, a),
            i.transitionStart(s, f),
            i.transitionEnd(s, f)),
            !0)
        },
        slideToLoop: function(e=0, t=this.params.speed, s=!0, a) {
            const i = this;
            let n = e;
            return i.params.loop && (n += i.loopedSlides),
            i.slideTo(n, t, s, a)
        },
        slideNext: function(e=this.params.speed, t=!0, s) {
            const a = this
              , {params: i, animating: n} = a;
            return i.loop ? !n && (a.loopFix(),
            a._clientLeft = a.$wrapperEl[0].clientLeft,
            a.slideTo(a.activeIndex + i.slidesPerGroup, e, t, s)) : a.slideTo(a.activeIndex + i.slidesPerGroup, e, t, s)
        },
        slidePrev: function(e=this.params.speed, t=!0, s) {
            const a = this
              , {params: i, animating: n, snapGrid: r, slidesGrid: l, rtlTranslate: o} = a;
            if (i.loop) {
                if (n)
                    return !1;
                a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const c = d(o ? a.translate : -a.translate)
              , p = r.map((e=>d(e)))
              , u = (l.map((e=>d(e))),
            r[p.indexOf(c)],
            r[p.indexOf(c) - 1]);
            let h;
            return void 0 !== u && (h = l.indexOf(u),
            h < 0 && (h = a.activeIndex - 1)),
            a.slideTo(h, e, t, s)
        },
        slideReset: function(e=this.params.speed, t=!0, s) {
            return this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e=this.params.speed, t=!0, s) {
            const a = this;
            let i = a.activeIndex;
            const n = Math.floor(i / a.params.slidesPerGroup);
            if (n < a.snapGrid.length - 1) {
                const e = a.rtlTranslate ? a.translate : -a.translate
                  , t = a.snapGrid[n];
                e - t > (a.snapGrid[n + 1] - t) / 2 && (i = a.params.slidesPerGroup)
            }
            return a.slideTo(i, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, $wrapperEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, n = e.clickedIndex;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? n < e.loopedSlides - a / 2 || n > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                n = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p.nextTick((()=>{
                    e.slideTo(n)
                }
                ))) : e.slideTo(n) : n > e.slides.length - a ? (e.loopFix(),
                n = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p.nextTick((()=>{
                    e.slideTo(n)
                }
                ))) : e.slideTo(n)
            } else
                e.slideTo(n)
        }
    };
    var w = {
        loopCreate: function() {
            const e = this
              , {params: t, $wrapperEl: s} = e;
            s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let a = s.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = r(o.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        s.append(e)
                    }
                    a = s.children(`.${t.slideClass}`)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
            e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10),
            e.loopedSlides += t.loopAdditionalSlides,
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
            const i = []
              , n = [];
            a.each(((t,s)=>{
                const l = r(s);
                t < e.loopedSlides && n.push(s),
                t < a.length && t >= a.length - e.loopedSlides && i.push(s),
                l.attr("data-swiper-slide-index", t)
            }
            ));
            for (let e = 0; e < n.length; e += 1)
                s.append(r(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = i.length - 1; e >= 0; e -= 1)
                s.prepend(r(i[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this
              , {params: t, activeIndex: s, slides: a, loopedSlides: i, allowSlidePrev: n, allowSlideNext: r, snapGrid: l, rtlTranslate: o} = e;
            let d;
            e.allowSlidePrev = !0,
            e.allowSlideNext = !0;
            const c = -l[s] - e.getTranslate();
            if (s < i) {
                d = a.length - 3 * i + s,
                d += i;
                e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)
            } else if ("auto" === t.slidesPerView && s >= 2 * i || s >= a.length - i) {
                d = -a.length + s + i,
                d += i;
                e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)
            }
            e.allowSlidePrev = n,
            e.allowSlideNext = r
        },
        loopDestroy: function() {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
            s.removeAttr("data-swiper-slide-index")
        }
    };
    var y = {
        setGrabCursor: function(e) {
            const t = this;
            if (u.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)
                return;
            const s = t.el;
            s.style.cursor = "move",
            s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
            s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
            s.style.cursor = e ? "grabbing" : "grab"
        },
        unsetGrabCursor: function() {
            const e = this;
            u.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
        }
    };
    var x = {
        appendSlide: function(e) {
            const t = this
              , {$wrapperEl: s, params: a} = t;
            if (a.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (let t = 0; t < e.length; t += 1)
                    e[t] && s.append(e[t]);
            else
                s.append(e);
            a.loop && t.loopCreate(),
            a.observer && u.observer || t.update()
        },
        prependSlide: function(e) {
            const t = this
              , {params: s, $wrapperEl: a, activeIndex: i} = t;
            s.loop && t.loopDestroy();
            let n = i + 1;
            if ("object" == typeof e && "length"in e) {
                for (let t = 0; t < e.length; t += 1)
                    e[t] && a.prepend(e[t]);
                n = i + e.length
            } else
                a.prepend(e);
            s.loop && t.loopCreate(),
            s.observer && u.observer || t.update(),
            t.slideTo(n, 0, !1)
        },
        addSlide: function(e, t) {
            const s = this
              , {$wrapperEl: a, params: i, activeIndex: n} = s;
            let r = n;
            i.loop && (r -= s.loopedSlides,
            s.loopDestroy(),
            s.slides = a.children(`.${i.slideClass}`));
            const l = s.slides.length;
            if (e <= 0)
                return void s.prependSlide(t);
            if (e >= l)
                return void s.appendSlide(t);
            let o = r > e ? r + 1 : r;
            const d = [];
            for (let t = l - 1; t >= e; t -= 1) {
                const e = s.slides.eq(t);
                e.remove(),
                d.unshift(e)
            }
            if ("object" == typeof t && "length"in t) {
                for (let e = 0; e < t.length; e += 1)
                    t[e] && a.append(t[e]);
                o = r > e ? r + t.length : r
            } else
                a.append(t);
            for (let e = 0; e < d.length; e += 1)
                a.append(d[e]);
            i.loop && s.loopCreate(),
            i.observer && u.observer || s.update(),
            i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
        },
        removeSlide: function(e) {
            const t = this
              , {params: s, $wrapperEl: a, activeIndex: i} = t;
            let n = i;
            s.loop && (n -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = a.children(`.${s.slideClass}`));
            let r, l = n;
            if ("object" == typeof e && "length"in e) {
                for (let s = 0; s < e.length; s += 1)
                    r = e[s],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < l && (l -= 1);
                l = Math.max(l, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < l && (l -= 1),
                l = Math.max(l, 0);
            s.loop && t.loopCreate(),
            s.observer && u.observer || t.update(),
            s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
        },
        removeAllSlides: function() {
            const e = this
              , t = [];
            for (let s = 0; s < e.slides.length; s += 1)
                t.push(s);
            e.removeSlide(t)
        }
    };
    const E = function() {
        const e = d.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: d.cordova || d.phonegap,
            phonegap: d.cordova || d.phonegap
        }
          , s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , i = e.match(/(iPad).*OS\s([\d_]+)/)
          , n = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , r = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (s && (t.os = "windows",
        t.osVersion = s[2],
        t.windows = !0),
        a && !s && (t.os = "android",
        t.osVersion = a[2],
        t.android = !0,
        t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0),
        (i || r || n) && (t.os = "ios",
        t.ios = !0),
        r && !n && (t.osVersion = r[2].replace(/_/g, "."),
        t.iphone = !0),
        i && (t.osVersion = i[2].replace(/_/g, "."),
        t.ipad = !0),
        n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (r || i || n) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            const e = t.osVersion.split(".")
              , s = o.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (n || r) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = d.devicePixelRatio || 1,
        t
    }();
    function T(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i} = t;
        if (t.animating && a.preventInteractionOnTransition)
            return;
        let n = e;
        if (n.originalEvent && (n = n.originalEvent),
        s.isTouchEvent = "touchstart" === n.type,
        !s.isTouchEvent && "which"in n && 3 === n.which)
            return;
        if (!s.isTouchEvent && "button"in n && n.button > 0)
            return;
        if (s.isTouched && s.isMoved)
            return;
        if (a.noSwiping && r(n.target).closest(a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`)[0])
            return void (t.allowClick = !0);
        if (a.swipeHandler && !r(n).closest(a.swipeHandler)[0])
            return;
        i.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX,
        i.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
        const l = i.currentX
          , c = i.currentY
          , u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection
          , h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (!u || !(l <= h || l >= d.screen.width - h)) {
            if (p.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            i.startX = l,
            i.startY = c,
            s.touchStartTime = p.now(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
            a.threshold > 0 && (s.allowThresholdMove = !1),
            "touchstart" !== n.type) {
                let e = !0;
                r(n.target).is(s.formElements) && (e = !1),
                o.activeElement && r(o.activeElement).is(s.formElements) && o.activeElement !== n.target && o.activeElement.blur();
                const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                (a.touchStartForcePreventDefault || i) && n.preventDefault()
            }
            t.emit("touchStart", n)
        }
    }
    function S(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i, rtlTranslate: n} = t;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent),
        !s.isTouched)
            return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l));
        if (s.isTouchEvent && "mousemove" === l.type)
            return;
        const d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX
          , c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
        if (l.preventedByNestedSwiper)
            return i.startX = d,
            void (i.startY = c);
        if (!t.allowTouchMove)
            return t.allowClick = !1,
            void (s.isTouched && (p.extend(i, {
                startX: d,
                startY: c,
                currentX: d,
                currentY: c
            }),
            s.touchStartTime = p.now()));
        if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
            if (t.isVertical()) {
                if (c < i.startY && t.translate <= t.maxTranslate() || c > i.startY && t.translate >= t.minTranslate())
                    return s.isTouched = !1,
                    void (s.isMoved = !1)
            } else if (d < i.startX && t.translate <= t.maxTranslate() || d > i.startX && t.translate >= t.minTranslate())
                return;
        if (s.isTouchEvent && o.activeElement && l.target === o.activeElement && r(l.target).is(s.formElements))
            return s.isMoved = !0,
            void (t.allowClick = !1);
        if (s.allowTouchCallbacks && t.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
            return;
        i.currentX = d,
        i.currentY = c;
        const u = i.currentX - i.startX
          , h = i.currentY - i.startY;
        if (t.params.threshold && Math.sqrt(u ** 2 + h ** 2) < t.params.threshold)
            return;
        if (void 0 === s.isScrolling) {
            let e;
            t.isHorizontal() && i.currentY === i.startY || t.isVertical() && i.currentX === i.startX ? s.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI,
            s.isScrolling = t.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (s.isScrolling && t.emit("touchMoveOpposite", l),
        void 0 === s.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (s.startMoving = !0)),
        s.isScrolling)
            return void (s.isTouched = !1);
        if (!s.startMoving)
            return;
        t.allowClick = !1,
        l.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
        s.isMoved || (a.loop && t.loopFix(),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        s.allowMomentumBounce = !1,
        !a.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)),
        t.emit("sliderMove", l),
        s.isMoved = !0;
        let m = t.isHorizontal() ? u : h;
        i.diff = m,
        m *= a.touchRatio,
        n && (m = -m),
        t.swipeDirection = m > 0 ? "prev" : "next",
        s.currentTranslate = m + s.startTranslate;
        let f = !0
          , g = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (g = 0),
        m > 0 && s.currentTranslate > t.minTranslate() ? (f = !1,
        a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** g)) : m < 0 && s.currentTranslate < t.maxTranslate() && (f = !1,
        a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** g)),
        f && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
        !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
        a.threshold > 0) {
            if (!(Math.abs(m) > a.threshold || s.allowThresholdMove))
                return void (s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove)
                return s.allowThresholdMove = !0,
                i.startX = i.currentX,
                i.startY = i.currentY,
                s.currentTranslate = s.startTranslate,
                void (i.diff = t.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
        }
        a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (t.updateActiveIndex(),
        t.updateSlidesClasses()),
        a.freeMode && (0 === s.velocities.length && s.velocities.push({
            position: i[t.isHorizontal() ? "startX" : "startY"],
            time: s.touchStartTime
        }),
        s.velocities.push({
            position: i[t.isHorizontal() ? "currentX" : "currentY"],
            time: p.now()
        })),
        t.updateProgress(s.currentTranslate),
        t.setTranslate(s.currentTranslate))
    }
    function C(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i, rtlTranslate: n, $wrapperEl: r, slidesGrid: l, snapGrid: o} = t;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", d),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = p.now()
          , u = c - s.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d),
        t.emit("tap", d),
        u < 300 && c - s.lastClickTime > 300 && (s.clickTimeout && clearTimeout(s.clickTimeout),
        s.clickTimeout = p.nextTick((()=>{
            t && !t.destroyed && t.emit("click", d)
        }
        ), 300)),
        u < 300 && c - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout),
        t.emit("doubleTap", d))),
        s.lastClickTime = p.now(),
        p.nextTick((()=>{
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = a.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate,
        a.freeMode) {
            if (h < -t.minTranslate())
                return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate())
                return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
            if (a.freeModeMomentum) {
                if (s.velocities.length > 1) {
                    const e = s.velocities.pop()
                      , i = s.velocities.pop()
                      , n = e.position - i.position
                      , r = e.time - i.time;
                    t.velocity = n / r,
                    t.velocity /= 2,
                    Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0),
                    (r > 150 || p.now() - e.time > 300) && (t.velocity = 0)
                } else
                    t.velocity = 0;
                t.velocity *= a.freeModeMomentumVelocityRatio,
                s.velocities.length = 0;
                let e = 1e3 * a.freeModeMomentumRatio;
                const i = t.velocity * e;
                let l = t.translate + i;
                n && (l = -l);
                let d, c = !1;
                const u = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
                let h;
                if (l < t.maxTranslate())
                    a.freeModeMomentumBounce ? (l + t.maxTranslate() < -u && (l = t.maxTranslate() - u),
                    d = t.maxTranslate(),
                    c = !0,
                    s.allowMomentumBounce = !0) : l = t.maxTranslate(),
                    a.loop && a.centeredSlides && (h = !0);
                else if (l > t.minTranslate())
                    a.freeModeMomentumBounce ? (l - t.minTranslate() > u && (l = t.minTranslate() + u),
                    d = t.minTranslate(),
                    c = !0,
                    s.allowMomentumBounce = !0) : l = t.minTranslate(),
                    a.loop && a.centeredSlides && (h = !0);
                else if (a.freeModeSticky) {
                    let e;
                    for (let t = 0; t < o.length; t += 1)
                        if (o[t] > -l) {
                            e = t;
                            break
                        }
                    l = Math.abs(o[e] - l) < Math.abs(o[e - 1] - l) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                    l = -l
                }
                if (h && t.once("transitionEnd", (()=>{
                    t.loopFix()
                }
                )),
                0 !== t.velocity)
                    e = n ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity);
                else if (a.freeModeSticky)
                    return void t.slideToClosest();
                a.freeModeMomentumBounce && c ? (t.updateProgress(d),
                t.setTransition(e),
                t.setTranslate(l),
                t.transitionStart(!0, t.swipeDirection),
                t.animating = !0,
                r.transitionEnd((()=>{
                    t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"),
                    t.setTransition(a.speed),
                    t.setTranslate(d),
                    r.transitionEnd((()=>{
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))
                }
                ))) : t.velocity ? (t.updateProgress(l),
                t.setTransition(e),
                t.setTranslate(l),
                t.transitionStart(!0, t.swipeDirection),
                t.animating || (t.animating = !0,
                r.transitionEnd((()=>{
                    t && !t.destroyed && t.transitionEnd()
                }
                )))) : t.updateProgress(l),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            } else if (a.freeModeSticky)
                return void t.slideToClosest();
            return void ((!a.freeModeMomentum || u >= a.longSwipesMs) && (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses()))
        }
        let m = 0
          , f = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += a.slidesPerGroup)
            void 0 !== l[e + a.slidesPerGroup] ? h >= l[e] && h < l[e + a.slidesPerGroup] && (m = e,
            f = l[e + a.slidesPerGroup] - l[e]) : h >= l[e] && (m = e,
            f = l[l.length - 1] - l[l.length - 2]);
        const g = (h - l[m]) / f;
        if (u > a.longSwipesMs) {
            if (!a.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + a.slidesPerGroup) : t.slideTo(m)),
            "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + a.slidesPerGroup) : t.slideTo(m))
        } else {
            if (!a.shortSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(m + a.slidesPerGroup),
            "prev" === t.swipeDirection && t.slideTo(m)
        }
    }
    function M() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: n} = e;
        if (e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        t.freeMode) {
            const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            t.autoHeight && e.updateAutoHeight()
        } else
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
    }
    function P(e) {
        const t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    var k = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
    const z = {
        update: f,
        translate: g,
        transition: v,
        slide: b,
        loop: w,
        grabCursor: y,
        manipulation: x,
        events: {
            attachEvents: function() {
                const e = this
                  , {params: t, touchEvents: s, el: a, wrapperEl: i} = e;
                e.onTouchStart = T.bind(e),
                e.onTouchMove = S.bind(e),
                e.onTouchEnd = C.bind(e),
                e.onClick = P.bind(e);
                const n = "container" === t.touchEventsTarget ? a : i
                  , r = !!t.nested;
                if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                    if (u.touch) {
                        const a = !("touchstart" !== s.start || !u.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n.addEventListener(s.start, e.onTouchStart, a),
                        n.addEventListener(s.move, e.onTouchMove, u.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r),
                        n.addEventListener(s.end, e.onTouchEnd, a)
                    }
                    (t.simulateTouch && !E.ios && !E.android || t.simulateTouch && !u.touch && E.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1),
                    o.addEventListener("mousemove", e.onTouchMove, r),
                    o.addEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    n.addEventListener(s.start, e.onTouchStart, !1),
                    o.addEventListener(s.move, e.onTouchMove, r),
                    o.addEventListener(s.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0),
                e.on(E.ios || E.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M, !0)
            },
            detachEvents: function() {
                const e = this
                  , {params: t, touchEvents: s, el: a, wrapperEl: i} = e
                  , n = "container" === t.touchEventsTarget ? a : i
                  , r = !!t.nested;
                if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                    if (u.touch) {
                        const a = !("onTouchStart" !== s.start || !u.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n.removeEventListener(s.start, e.onTouchStart, a),
                        n.removeEventListener(s.move, e.onTouchMove, r),
                        n.removeEventListener(s.end, e.onTouchEnd, a)
                    }
                    (t.simulateTouch && !E.ios && !E.android || t.simulateTouch && !u.touch && E.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1),
                    o.removeEventListener("mousemove", e.onTouchMove, r),
                    o.removeEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    n.removeEventListener(s.start, e.onTouchStart, !1),
                    o.removeEventListener(s.move, e.onTouchMove, r),
                    o.removeEventListener(s.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0),
                e.off(E.ios || E.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i} = e
                  , n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length)
                    return;
                const r = e.getBreakpoint(n);
                if (r && e.currentBreakpoint !== r) {
                    const l = r in n ? n[r] : void 0;
                    l && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((e=>{
                        const t = l[e];
                        void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }
                    ));
                    const o = l || e.originalParams
                      , d = o.direction && o.direction !== i.direction
                      , c = i.loop && (o.slidesPerView !== i.slidesPerView || d);
                    d && s && e.changeDirection(),
                    p.extend(e.params, o),
                    p.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = r,
                    c && s && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - a + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", o)
                }
            },
            getBreakpoint: function(e) {
                const t = this;
                if (!e)
                    return;
                let s = !1;
                const a = [];
                Object.keys(e).forEach((e=>{
                    a.push(e)
                }
                )),
                a.sort(((e,t)=>parseInt(e, 10) - parseInt(t, 10)));
                for (let e = 0; e < a.length; e += 1) {
                    const i = a[e];
                    t.params.breakpointsInverse ? i <= d.innerWidth && (s = i) : i >= d.innerWidth && !s && (s = i)
                }
                return s || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                const {classNames: e, params: t, rtl: s, $el: a} = this
                  , i = [];
                i.push("initialized"),
                i.push(t.direction),
                t.freeMode && i.push("free-mode"),
                u.flexbox || i.push("no-flexbox"),
                t.autoHeight && i.push("autoheight"),
                s && i.push("rtl"),
                t.slidesPerColumn > 1 && i.push("multirow"),
                E.android && i.push("android"),
                E.ios && i.push("ios"),
                (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.push(`wp8-${t.direction}`),
                i.forEach((s=>{
                    e.push(t.containerModifierClass + s)
                }
                )),
                a.addClass(e.join(" "))
            },
            removeClasses: function() {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, s, a, i, n) {
                let r;
                function l() {
                    n && n()
                }
                e.complete && i ? l() : t ? (r = new d.Image,
                r.onload = l,
                r.onerror = l,
                a && (r.sizes = a),
                s && (r.srcset = s),
                t && (r.src = t)) : l()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , I = {};
    class L extends m {
        constructor(...e) {
            let t, s;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : [t,s] = e,
            s || (s = {}),
            s = p.extend({}, s),
            t && !s.el && (s.el = t),
            super(s),
            Object.keys(z).forEach((e=>{
                Object.keys(z[e]).forEach((t=>{
                    L.prototype[t] || (L.prototype[t] = z[e][t])
                }
                ))
            }
            ));
            const a = this;
            void 0 === a.modules && (a.modules = {}),
            Object.keys(a.modules).forEach((e=>{
                const t = a.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0]
                      , a = t.params[e];
                    if ("object" != typeof a || null === a)
                        return;
                    if (!(e in s) || !("enabled"in a))
                        return;
                    !0 === s[e] && (s[e] = {
                        enabled: !0
                    }),
                    "object" != typeof s[e] || "enabled"in s[e] || (s[e].enabled = !0),
                    s[e] || (s[e] = {
                        enabled: !1
                    })
                }
            }
            ));
            const i = p.extend({}, k);
            a.useModulesParams(i),
            a.params = p.extend({}, i, I, s),
            a.originalParams = p.extend({}, a.params),
            a.passedParams = p.extend({}, s),
            a.$ = r;
            const n = r(a.params.el);
            if (t = n[0],
            !t)
                return;
            if (n.length > 1) {
                const e = [];
                return n.each(((t,a)=>{
                    const i = p.extend({}, s, {
                        el: a
                    });
                    e.push(new L(i))
                }
                )),
                e
            }
            t.swiper = a,
            n.data("swiper", a);
            const l = n.children(`.${a.params.wrapperClass}`);
            return p.extend(a, {
                $el: n,
                el: t,
                $wrapperEl: l,
                wrapperEl: l[0],
                classNames: [],
                slides: r(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === a.params.direction,
                isVertical: ()=>"vertical" === a.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === l.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return u.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    a.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    },
                    a.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    u.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: p.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            a.useModules(),
            a.params.init && a.init(),
            a
        }
        slidesPerViewDynamic() {
            const {params: e, slides: t, slidesGrid: s, size: a, activeIndex: i} = this;
            let n = 1;
            if (e.centeredSlides) {
                let e, s = t[i].swiperSlideSize;
                for (let r = i + 1; r < t.length; r += 1)
                    t[r] && !e && (s += t[r].swiperSlideSize,
                    n += 1,
                    s > a && (e = !0));
                for (let r = i - 1; r >= 0; r -= 1)
                    t[r] && !e && (s += t[r].swiperSlideSize,
                    n += 1,
                    s > a && (e = !0))
            } else
                for (let e = i + 1; e < t.length; e += 1)
                    s[e] - s[i] < a && (n += 1);
            return n
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode ? (a(),
            e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a} wp8-${a}`).addClass(`${s.params.containerModifierClass}${e}`),
            (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`),
            s.params.direction = e,
            s.slides.each(((t,s)=>{
                "vertical" === e ? s.style.width = "" : s.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        destroy(e=!0, t=!0) {
            const s = this
              , {params: a, $el: i, $wrapperEl: n, slides: r} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttr("style"),
            n.removeAttr("style"),
            r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e=>{
                s.off(e)
            }
            )),
            !1 !== e && (s.$el[0].swiper = null,
            s.$el.data("swiper", null),
            p.deleteProps(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            p.extend(I, e)
        }
        static get extendedDefaults() {
            return I
        }
        static get defaults() {
            return k
        }
        static get Class() {
            return m
        }
        static get $() {
            return r
        }
    }
    var D = {
        name: "device",
        proto: {
            device: E
        },
        static: {
            device: E
        }
    }
      , O = {
        name: "support",
        proto: {
            support: u
        },
        static: {
            support: u
        }
    }
      , A = {
        name: "browser",
        proto: {
            browser: h
        },
        static: {
            browser: h
        }
    }
      , N = {
        name: "resize",
        create() {
            const e = this;
            p.extend(e, {
                resize: {
                    resizeHandler() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init() {
                d.addEventListener("resize", this.resize.resizeHandler),
                d.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy() {
                d.removeEventListener("resize", this.resize.resizeHandler),
                d.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    };
    const B = {
        func: d.MutationObserver || d.WebkitMutationObserver,
        attach(e, t={}) {
            const s = this
              , a = new (0,
            B.func)((e=>{
                if (1 === e.length)
                    return void s.emit("observerUpdate", e[0]);
                const t = function() {
                    s.emit("observerUpdate", e[0])
                };
                d.requestAnimationFrame ? d.requestAnimationFrame(t) : d.setTimeout(t, 0)
            }
            ));
            a.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            s.observer.observers.push(a)
        },
        init() {
            const e = this;
            if (u.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let s = 0; s < t.length; s += 1)
                        e.observer.attach(t[s])
                }
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy() {
            this.observer.observers.forEach((e=>{
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    };
    var H = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create() {
            const e = this;
            p.extend(e, {
                observer: {
                    init: B.init.bind(e),
                    attach: B.attach.bind(e),
                    destroy: B.destroy.bind(e),
                    observers: []
                }
            })
        },
        on: {
            init() {
                this.observer.init()
            },
            destroy() {
                this.observer.destroy()
            }
        }
    };
    const G = {
        update(e) {
            const t = this
              , {slidesPerView: s, slidesPerGroup: a, centeredSlides: i} = t.params
              , {addSlidesBefore: n, addSlidesAfter: r} = t.params.virtual
              , {from: l, to: o, slides: d, slidesGrid: c, renderSlide: u, offset: h} = t.virtual;
            t.updateActiveIndex();
            const m = t.activeIndex || 0;
            let f, g, v;
            f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            i ? (g = Math.floor(s / 2) + a + n,
            v = Math.floor(s / 2) + a + r) : (g = s + (a - 1) + n,
            v = a + r);
            const b = Math.max((m || 0) - v, 0)
              , w = Math.min((m || 0) + g, d.length - 1)
              , y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
            function x() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (p.extend(t.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: t.slidesGrid
            }),
            l === b && o === w && !e)
                return t.slidesGrid !== c && y !== h && t.slides.css(f, `${y}px`),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function() {
                        const e = [];
                        for (let t = b; t <= w; t += 1)
                            e.push(d[t]);
                        return e
                    }()
                }),
                void x();
            const E = []
              , T = [];
            if (e)
                t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
            else
                for (let e = l; e <= o; e += 1)
                    (e < b || e > w) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < d.length; t += 1)
                t >= b && t <= w && (void 0 === o || e ? T.push(t) : (t > o && T.push(t),
                t < l && E.push(t)));
            T.forEach((e=>{
                t.$wrapperEl.append(u(d[e], e))
            }
            )),
            E.sort(((e,t)=>t - e)).forEach((e=>{
                t.$wrapperEl.prepend(u(d[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(f, `${y}px`),
            x()
        },
        renderSlide(e, t) {
            const s = this
              , a = s.params.virtual;
            if (a.cache && s.virtual.cache[t])
                return s.virtual.cache[t];
            const i = a.renderSlide ? r(a.renderSlide.call(s, e, t)) : r(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
            a.cache && (s.virtual.cache[t] = i),
            i
        },
        appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length"in e)
                for (let s = 0; s < e.length; s += 1)
                    e[s] && t.virtual.slides.push(e[s]);
            else
                t.virtual.slides.push(e);
            t.virtual.update(!0)
        },
        prependSlide(e) {
            const t = this
              , s = t.activeIndex;
            let a = s + 1
              , i = 1;
            if (Array.isArray(e)) {
                for (let s = 0; s < e.length; s += 1)
                    e[s] && t.virtual.slides.unshift(e[s]);
                a = s + e.length,
                i = e.length
            } else
                t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache
                  , s = {};
                Object.keys(e).forEach((t=>{
                    s[parseInt(t, 10) + i] = e[t]
                }
                )),
                t.virtual.cache = s
            }
            t.virtual.update(!0),
            t.slideTo(a, 0)
        },
        removeSlide(e) {
            const t = this;
            if (null == e)
                return;
            let s = t.activeIndex;
            if (Array.isArray(e))
                for (let a = e.length - 1; a >= 0; a -= 1)
                    t.virtual.slides.splice(e[a], 1),
                    t.params.virtual.cache && delete t.virtual.cache[e[a]],
                    e[a] < s && (s -= 1),
                    s = Math.max(s, 0);
            else
                t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < s && (s -= 1),
                s = Math.max(s, 0);
            t.virtual.update(!0),
            t.slideTo(s, 0)
        },
        removeAllSlides() {
            const e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        }
    };
    var V = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                virtual: {
                    update: G.update.bind(e),
                    appendSlide: G.appendSlide.bind(e),
                    prependSlide: G.prependSlide.bind(e),
                    removeSlide: G.removeSlide.bind(e),
                    removeAllSlides: G.removeAllSlides.bind(e),
                    renderSlide: G.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if (!e.params.virtual.enabled)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}virtual`);
                const t = {
                    watchSlidesProgress: !0
                };
                p.extend(e.params, t),
                p.extend(e.originalParams, t),
                e.params.initialSlide || e.virtual.update()
            },
            setTranslate() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    };
    const X = {
        handle(e) {
            const t = this
              , {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i || 34 === i))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i || 33 === i))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (33 === i || 34 === i || 37 === i || 39 === i || 38 === i || 40 === i)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                        return;
                    const a = d.innerWidth
                      , i = d.innerHeight
                      , n = t.$el.offset();
                    s && (n.left -= t.$el[0].scrollLeft);
                    const r = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]];
                    for (let t = 0; t < r.length; t += 1) {
                        const s = r[t];
                        s[0] >= 0 && s[0] <= a && s[1] >= 0 && s[1] <= i && (e = !0)
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? (33 !== i && 34 !== i && 37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (34 !== i && 39 !== i || s) && (33 !== i && 37 !== i || !s) || t.slideNext(),
                (33 !== i && 37 !== i || s) && (34 !== i && 39 !== i || !s) || t.slidePrev()) : (33 !== i && 34 !== i && 38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                34 !== i && 40 !== i || t.slideNext(),
                33 !== i && 38 !== i || t.slidePrev()),
                t.emit("keyPress", i)
            }
        },
        enable() {
            const e = this;
            e.keyboard.enabled || (r(o).on("keydown", e.keyboard.handle),
            e.keyboard.enabled = !0)
        },
        disable() {
            const e = this;
            e.keyboard.enabled && (r(o).off("keydown", e.keyboard.handle),
            e.keyboard.enabled = !1)
        }
    };
    var Y = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                keyboard: {
                    enabled: !1,
                    enable: X.enable.bind(e),
                    disable: X.disable.bind(e),
                    handle: X.handle.bind(e)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy() {
                const e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    };
    const F = {
        lastScrollTime: p.now(),
        event: d.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            const e = "onwheel";
            let t = e in o;
            if (!t) {
                const s = o.createElement("div");
                s.setAttribute(e, "return;"),
                t = "function" == typeof s[e]
            }
            return !t && o.implementation && o.implementation.hasFeature && !0 !== o.implementation.hasFeature("", "") && (t = o.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0
              , s = 0
              , a = 0
              , i = 0;
            return "detail"in e && (s = e.detail),
            "wheelDelta"in e && (s = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
            s = 0),
            a = 10 * t,
            i = 10 * s,
            "deltaY"in e && (i = e.deltaY),
            "deltaX"in e && (a = e.deltaX),
            (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
            i *= 40) : (a *= 800,
            i *= 800)),
            a && !t && (t = a < 1 ? -1 : 1),
            i && !s && (s = i < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: s,
                pixelX: a,
                pixelY: i
            }
        },
        handleMouseEnter() {
            this.mouseEntered = !0
        },
        handleMouseLeave() {
            this.mouseEntered = !1
        },
        handle(e) {
            let t = e;
            const s = this
              , a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            let i = 0;
            const n = s.rtlTranslate ? -1 : 1
              , r = F.normalize(t);
            if (a.forceToAxis)
                if (s.isHorizontal()) {
                    if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY)))
                        return !0;
                    i = r.pixelX * n
                } else {
                    if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX)))
                        return !0;
                    i = r.pixelY
                }
            else
                i = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
            if (0 === i)
                return !0;
            if (a.invert && (i = -i),
            s.params.freeMode) {
                s.params.loop && s.loopFix();
                let e = s.getTranslate() + i * a.sensitivity;
                const n = s.isBeginning
                  , r = s.isEnd;
                if (e >= s.minTranslate() && (e = s.minTranslate()),
                e <= s.maxTranslate() && (e = s.maxTranslate()),
                s.setTransition(0),
                s.setTranslate(e),
                s.updateProgress(),
                s.updateActiveIndex(),
                s.updateSlidesClasses(),
                (!n && s.isBeginning || !r && s.isEnd) && s.updateSlidesClasses(),
                s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout),
                s.mousewheel.timeout = p.nextTick((()=>{
                    s.slideToClosest()
                }
                ), 300)),
                s.emit("scroll", t),
                s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                e === s.minTranslate() || e === s.maxTranslate())
                    return !0
            } else {
                if (p.now() - s.mousewheel.lastScrollTime > 60)
                    if (i < 0)
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (a.releaseOnEdges)
                                return !0
                        } else
                            s.slideNext(),
                            s.emit("scroll", t);
                    else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges)
                            return !0
                    } else
                        s.slidePrev(),
                        s.emit("scroll", t);
                s.mousewheel.lastScrollTime = (new d.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable() {
            const e = this;
            if (!F.event)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)),
            t.on("mouseenter", e.mousewheel.handleMouseEnter),
            t.on("mouseleave", e.mousewheel.handleMouseLeave),
            t.on(F.event, e.mousewheel.handle),
            e.mousewheel.enabled = !0,
            !0
        },
        disable() {
            const e = this;
            if (!F.event)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)),
            t.off(F.event, e.mousewheel.handle),
            e.mousewheel.enabled = !1,
            !0
        }
    };
    var q = {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: F.enable.bind(e),
                    disable: F.disable.bind(e),
                    handle: F.handle.bind(e),
                    handleMouseEnter: F.handleMouseEnter.bind(e),
                    handleMouseLeave: F.handleMouseLeave.bind(e),
                    lastScrollTime: p.now()
                }
            })
        },
        on: {
            init() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    };
    const R = {
        update() {
            const e = this
              , t = e.params.navigation;
            if (e.params.loop)
                return;
            const {$nextEl: s, $prevEl: a} = e.navigation;
            a && a.length > 0 && (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass),
            a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
            s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
            s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
        },
        onPrevClick(e) {
            const t = this;
            e.preventDefault(),
            t.isBeginning && !t.params.loop || t.slidePrev()
        },
        onNextClick(e) {
            const t = this;
            e.preventDefault(),
            t.isEnd && !t.params.loop || t.slideNext()
        },
        init() {
            const e = this
              , t = e.params.navigation;
            if (!t.nextEl && !t.prevEl)
                return;
            let s, a;
            t.nextEl && (s = r(t.nextEl),
            e.params.uniqueNavElements && "string" == typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))),
            t.prevEl && (a = r(t.prevEl),
            e.params.uniqueNavElements && "string" == typeof t.prevEl && a.length > 1 && 1 === e.$el.find(t.prevEl).length && (a = e.$el.find(t.prevEl))),
            s && s.length > 0 && s.on("click", e.navigation.onNextClick),
            a && a.length > 0 && a.on("click", e.navigation.onPrevClick),
            p.extend(e.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            })
        },
        destroy() {
            const e = this
              , {$nextEl: t, $prevEl: s} = e.navigation;
            t && t.length && (t.off("click", e.navigation.onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            s && s.length && (s.off("click", e.navigation.onPrevClick),
            s.removeClass(e.params.navigation.disabledClass))
        }
    };
    var W = {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                navigation: {
                    init: R.init.bind(e),
                    update: R.update.bind(e),
                    destroy: R.destroy.bind(e),
                    onNextClick: R.onNextClick.bind(e),
                    onPrevClick: R.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge() {
                this.navigation.update()
            },
            fromEdge() {
                this.navigation.update()
            },
            destroy() {
                this.navigation.destroy()
            },
            click(e) {
                const t = this
                  , {$nextEl: s, $prevEl: a} = t.navigation;
                if (t.params.navigation.hideOnClick && !r(e.target).is(a) && !r(e.target).is(s)) {
                    let e;
                    s ? e = s.hasClass(t.params.navigation.hiddenClass) : a && (e = a.hasClass(t.params.navigation.hiddenClass)),
                    !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                    s && s.toggleClass(t.params.navigation.hiddenClass),
                    a && a.toggleClass(t.params.navigation.hiddenClass)
                }
            }
        }
    };
    const j = {
        update() {
            const e = this
              , t = e.rtl
              , s = e.params.pagination;
            if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                return;
            const a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , i = e.pagination.$el;
            let n;
            const l = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
            n > a - 1 - 2 * e.loopedSlides && (n -= a - 2 * e.loopedSlides),
            n > l - 1 && (n -= l),
            n < 0 && "bullets" !== e.params.paginationType && (n = l + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
            "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let l, o, d;
                if (s.dynamicBullets && (e.pagination.bulletSize = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex,
                e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                l = n - e.pagination.dynamicBulletIndex,
                o = l + (Math.min(a.length, s.dynamicMainBullets) - 1),
                d = (o + l) / 2),
                a.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`),
                i.length > 1)
                    a.each(((e,t)=>{
                        const a = r(t)
                          , i = a.index();
                        i === n && a.addClass(s.bulletActiveClass),
                        s.dynamicBullets && (i >= l && i <= o && a.addClass(`${s.bulletActiveClass}-main`),
                        i === l && a.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                        i === o && a.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`))
                    }
                    ));
                else {
                    if (a.eq(n).addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        const e = a.eq(l)
                          , t = a.eq(o);
                        for (let e = l; e <= o; e += 1)
                            a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        e.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                        t.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`)
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4)
                      , n = (e.pagination.bulletSize * i - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                      , r = t ? "right" : "left";
                    a.css(e.isHorizontal() ? r : "top", `${n}px`)
                }
            }
            if ("fraction" === s.type && (i.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)),
            i.find(`.${s.totalClass}`).text(s.formatFractionTotal(l))),
            "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const a = (n + 1) / l;
                let r = 1
                  , o = 1;
                "horizontal" === t ? r = a : o = a,
                i.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${o})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, n + 1, l)),
            e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
            i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        },
        render() {
            const e = this
              , t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , a = e.pagination.$el;
            let i = "";
            if ("bullets" === t.type) {
                const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                for (let s = 0; s < n; s += 1)
                    t.renderBullet ? i += t.renderBullet.call(e, s, t.bulletClass) : i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                a.html(i),
                e.pagination.bullets = a.find(`.${t.bulletClass}`)
            }
            "fraction" === t.type && (i = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
            a.html(i)),
            "progressbar" === t.type && (i = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
            a.html(i)),
            "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        },
        init() {
            const e = this
              , t = e.params.pagination;
            if (!t.el)
                return;
            let s = r(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            e.pagination.dynamicBulletIndex = 0,
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
            t.clickable && s.on("click", `.${t.bulletClass}`, (function(t) {
                t.preventDefault();
                let s = r(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides),
                e.slideTo(s)
            }
            )),
            p.extend(e.pagination, {
                $el: s,
                el: s[0]
            }))
        },
        destroy() {
            const e = this
              , t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length)
                return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", `.${t.bulletClass}`)
        }
    };
    var U = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                pagination: {
                    init: j.init.bind(e),
                    render: j.render.bind(e),
                    update: j.update.bind(e),
                    destroy: j.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.pagination.init(),
                e.pagination.render(),
                e.pagination.update()
            },
            activeIndexChange() {
                const e = this;
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            },
            snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy() {
                this.pagination.destroy()
            },
            click(e) {
                const t = this;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !r(e.target).hasClass(t.params.pagination.bulletClass)) {
                    !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }
    };
    const K = {
        setTranslate() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t, rtlTranslate: s, progress: a} = e
              , {dragSize: i, trackSize: n, $dragEl: r, $el: l} = t
              , o = e.params.scrollbar;
            let d = i
              , c = (n - i) * a;
            s ? (c = -c,
            c > 0 ? (d = i - c,
            c = 0) : -c + i > n && (d = n + c)) : c < 0 ? (d = i + c,
            c = 0) : c + i > n && (d = n - c),
            e.isHorizontal() ? (u.transforms3d ? r.transform(`translate3d(${c}px, 0, 0)`) : r.transform(`translateX(${c}px)`),
            r[0].style.width = `${d}px`) : (u.transforms3d ? r.transform(`translate3d(0px, ${c}px, 0)`) : r.transform(`translateY(${c}px)`),
            r[0].style.height = `${d}px`),
            o.hide && (clearTimeout(e.scrollbar.timeout),
            l[0].style.opacity = 1,
            e.scrollbar.timeout = setTimeout((()=>{
                l[0].style.opacity = 0,
                l.transition(400)
            }
            ), 1e3))
        },
        setTransition(e) {
            const t = this;
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
        },
        updateSize() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t} = e
              , {$dragEl: s, $el: a} = t;
            s[0].style.width = "",
            s[0].style.height = "";
            const i = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight
              , n = e.size / e.virtualSize
              , r = n * (i / e.size);
            let l;
            l = "auto" === e.params.scrollbar.dragSize ? i * n : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`,
            a[0].style.display = n >= 1 ? "none" : "",
            e.params.scrollbar.hide && (a[0].style.opacity = 0),
            p.extend(t, {
                trackSize: i,
                divider: n,
                moveDivider: r,
                dragSize: l
            }),
            t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        },
        getPointerPosition(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
        },
        setDragPosition(e) {
            const t = this
              , {scrollbar: s, rtlTranslate: a} = t
              , {$el: i, dragSize: n, trackSize: r, dragStartPos: l} = s;
            let o;
            o = (s.getPointerPosition(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : n / 2)) / (r - n),
            o = Math.max(Math.min(o, 1), 0),
            a && (o = 1 - o);
            const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
            t.updateProgress(d),
            t.setTranslate(d),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        },
        onDragStart(e) {
            const t = this
              , s = t.params.scrollbar
              , {scrollbar: a, $wrapperEl: i} = t
              , {$el: n, $dragEl: r} = a;
            t.scrollbar.isTouched = !0,
            t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? a.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            r.transition(100),
            a.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove(e) {
            const t = this
              , {scrollbar: s, $wrapperEl: a} = t
              , {$el: i, $dragEl: n} = s;
            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            s.setDragPosition(e),
            a.transition(0),
            i.transition(0),
            n.transition(0),
            t.emit("scrollbarDragMove", e))
        },
        onDragEnd(e) {
            const t = this
              , s = t.params.scrollbar
              , {scrollbar: a} = t
              , {$el: i} = a;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            s.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = p.nextTick((()=>{
                i.css("opacity", 0),
                i.transition(400)
            }
            ), 1e3)),
            t.emit("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
        },
        enableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: i} = e
              , n = t.$el[0]
              , r = !(!u.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , l = !(!u.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            u.touch ? (n.addEventListener(s.start, e.scrollbar.onDragStart, r),
            n.addEventListener(s.move, e.scrollbar.onDragMove, r),
            n.addEventListener(s.end, e.scrollbar.onDragEnd, l)) : (n.addEventListener(a.start, e.scrollbar.onDragStart, r),
            o.addEventListener(a.move, e.scrollbar.onDragMove, r),
            o.addEventListener(a.end, e.scrollbar.onDragEnd, l))
        },
        disableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: i} = e
              , n = t.$el[0]
              , r = !(!u.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , l = !(!u.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            u.touch ? (n.removeEventListener(s.start, e.scrollbar.onDragStart, r),
            n.removeEventListener(s.move, e.scrollbar.onDragMove, r),
            n.removeEventListener(s.end, e.scrollbar.onDragEnd, l)) : (n.removeEventListener(a.start, e.scrollbar.onDragStart, r),
            o.removeEventListener(a.move, e.scrollbar.onDragMove, r),
            o.removeEventListener(a.end, e.scrollbar.onDragEnd, l))
        },
        init() {
            const e = this;
            if (!e.params.scrollbar.el)
                return;
            const {scrollbar: t, $el: s} = e
              , a = e.params.scrollbar;
            let i = r(a.el);
            e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let n = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === n.length && (n = r(`<div class="${e.params.scrollbar.dragClass}"></div>`),
            i.append(n)),
            p.extend(t, {
                $el: i,
                el: i[0],
                $dragEl: n,
                dragEl: n[0]
            }),
            a.draggable && t.enableDraggable()
        },
        destroy() {
            this.scrollbar.disableDraggable()
        }
    };
    var _ = {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                scrollbar: {
                    init: K.init.bind(e),
                    destroy: K.destroy.bind(e),
                    updateSize: K.updateSize.bind(e),
                    setTranslate: K.setTranslate.bind(e),
                    setTransition: K.setTransition.bind(e),
                    enableDraggable: K.enableDraggable.bind(e),
                    disableDraggable: K.disableDraggable.bind(e),
                    setDragPosition: K.setDragPosition.bind(e),
                    getPointerPosition: K.getPointerPosition.bind(e),
                    onDragStart: K.onDragStart.bind(e),
                    onDragMove: K.onDragMove.bind(e),
                    onDragEnd: K.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate()
            },
            update() {
                this.scrollbar.updateSize()
            },
            resize() {
                this.scrollbar.updateSize()
            },
            observerUpdate() {
                this.scrollbar.updateSize()
            },
            setTranslate() {
                this.scrollbar.setTranslate()
            },
            setTransition(e) {
                this.scrollbar.setTransition(e)
            },
            destroy() {
                this.scrollbar.destroy()
            }
        }
    };
    const Q = {
        setTransform(e, t) {
            const {rtl: s} = this
              , a = r(e)
              , i = s ? -1 : 1
              , n = a.attr("data-swiper-parallax") || "0";
            let l = a.attr("data-swiper-parallax-x")
              , o = a.attr("data-swiper-parallax-y");
            const d = a.attr("data-swiper-parallax-scale")
              , c = a.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0",
            o = o || "0") : this.isHorizontal() ? (l = n,
            o = "0") : (o = n,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t * i + "%" : l * t * i + "px",
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != c) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                a[0].style.opacity = e
            }
            if (null == d)
                a.transform(`translate3d(${l}, ${o}, 0px)`);
            else {
                const e = d - (d - 1) * (1 - Math.abs(t));
                a.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        },
        setTranslate() {
            const e = this
              , {$el: t, slides: s, progress: a, snapGrid: i} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                e.parallax.setTransform(s, a)
            }
            )),
            s.each(((t,s)=>{
                let n = s.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (i.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                r(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                    e.parallax.setTransform(s, n)
                }
                ))
            }
            ))
        },
        setTransition(e=this.params.speed) {
            const {$el: t} = this;
            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t,s)=>{
                const a = r(s);
                let i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0),
                a.transition(i)
            }
            ))
        }
    };
    var Z = {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                parallax: {
                    setTransform: Q.setTransform.bind(e),
                    setTranslate: Q.setTranslate.bind(e),
                    setTransition: Q.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            init() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    };
    const J = {
        getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX
              , s = e.targetTouches[0].pageY
              , a = e.targetTouches[1].pageX
              , i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        },
        onGestureStart(e) {
            const t = this
              , s = t.params.zoom
              , a = t.zoom
              , {gesture: i} = a;
            if (a.fakeGestureTouched = !1,
            a.fakeGestureMoved = !1,
            !u.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                a.fakeGestureTouched = !0,
                i.scaleStart = J.getDistanceBetweenTouches(e)
            }
            i.$slideEl && i.$slideEl.length || (i.$slideEl = r(e.target).closest(".swiper-slide"),
            0 === i.$slideEl.length && (i.$slideEl = t.slides.eq(t.activeIndex)),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`),
            i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
            0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0),
            t.zoom.isScaling = !0) : i.$imageEl = void 0
        },
        onGestureChange(e) {
            const t = this.params.zoom
              , s = this.zoom
              , {gesture: a} = s;
            if (!u.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                s.fakeGestureMoved = !0,
                a.scaleMove = J.getDistanceBetweenTouches(e)
            }
            a.$imageEl && 0 !== a.$imageEl.length && (u.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale,
            s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + (s.scale - a.maxRatio + 1) ** .5),
            s.scale < t.minRatio && (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** .5),
            a.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`))
        },
        onGestureEnd(e) {
            const t = this
              , s = t.params.zoom
              , a = t.zoom
              , {gesture: i} = a;
            if (!u.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !E.android)
                    return;
                a.fakeGestureTouched = !1,
                a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), s.minRatio),
            i.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`),
            a.currentScale = a.scale,
            a.isScaling = !1,
            1 === a.scale && (i.$slideEl = void 0))
        },
        onTouchStart(e) {
            const t = this.zoom
              , {gesture: s, image: a} = t;
            s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (E.android && e.preventDefault(),
            a.isTouched = !0,
            a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove(e) {
            const t = this
              , s = t.zoom
              , {gesture: a, image: i, velocity: n} = s;
            if (!a.$imageEl || 0 === a.$imageEl.length)
                return;
            if (t.allowClick = !1,
            !i.isTouched || !a.$slideEl)
                return;
            i.isMoved || (i.width = a.$imageEl[0].offsetWidth,
            i.height = a.$imageEl[0].offsetHeight,
            i.startX = p.getTranslate(a.$imageWrapEl[0], "x") || 0,
            i.startY = p.getTranslate(a.$imageWrapEl[0], "y") || 0,
            a.slideWidth = a.$slideEl[0].offsetWidth,
            a.slideHeight = a.$slideEl[0].offsetHeight,
            a.$imageWrapEl.transition(0),
            t.rtl && (i.startX = -i.startX,
            i.startY = -i.startY));
            const r = i.width * s.scale
              , l = i.height * s.scale;
            if (!(r < a.slideWidth && l < a.slideHeight)) {
                if (i.minX = Math.min(a.slideWidth / 2 - r / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(a.slideHeight / 2 - l / 2, 0),
                i.maxY = -i.minY,
                i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                !i.isMoved && !s.isScaling) {
                    if (t.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x))
                        return void (i.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))
                        return void (i.isTouched = !1)
                }
                e.preventDefault(),
                e.stopPropagation(),
                i.isMoved = !0,
                i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX,
                i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY,
                i.currentX < i.minX && (i.currentX = i.minX + 1 - (i.minX - i.currentX + 1) ** .8),
                i.currentX > i.maxX && (i.currentX = i.maxX - 1 + (i.currentX - i.maxX + 1) ** .8),
                i.currentY < i.minY && (i.currentY = i.minY + 1 - (i.minY - i.currentY + 1) ** .8),
                i.currentY > i.maxY && (i.currentY = i.maxY - 1 + (i.currentY - i.maxY + 1) ** .8),
                n.prevPositionX || (n.prevPositionX = i.touchesCurrent.x),
                n.prevPositionY || (n.prevPositionY = i.touchesCurrent.y),
                n.prevTime || (n.prevTime = Date.now()),
                n.x = (i.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                n.y = (i.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                Math.abs(i.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                Math.abs(i.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                n.prevPositionX = i.touchesCurrent.x,
                n.prevPositionY = i.touchesCurrent.y,
                n.prevTime = Date.now(),
                a.$imageWrapEl.transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)
            }
        },
        onTouchEnd() {
            const e = this.zoom
              , {gesture: t, image: s, velocity: a} = e;
            if (!t.$imageEl || 0 === t.$imageEl.length)
                return;
            if (!s.isTouched || !s.isMoved)
                return s.isTouched = !1,
                void (s.isMoved = !1);
            s.isTouched = !1,
            s.isMoved = !1;
            let i = 300
              , n = 300;
            const r = a.x * i
              , l = s.currentX + r
              , o = a.y * n
              , d = s.currentY + o;
            0 !== a.x && (i = Math.abs((l - s.currentX) / a.x)),
            0 !== a.y && (n = Math.abs((d - s.currentY) / a.y));
            const c = Math.max(i, n);
            s.currentX = l,
            s.currentY = d;
            const p = s.width * e.scale
              , u = s.height * e.scale;
            s.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
            s.maxX = -s.minX,
            s.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
            s.maxY = -s.minY,
            s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX),
            s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY),
            t.$imageWrapEl.transition(c).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
        },
        onTransitionEnd() {
            const e = this
              , t = e.zoom
              , {gesture: s} = t;
            s.$slideEl && e.previousIndex !== e.activeIndex && (s.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            s.$imageWrapEl.transform("translate3d(0,0,0)"),
            t.scale = 1,
            t.currentScale = 1,
            s.$slideEl = void 0,
            s.$imageEl = void 0,
            s.$imageWrapEl = void 0)
        },
        toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in(e) {
            const t = this
              , s = t.zoom
              , a = t.params.zoom
              , {gesture: i, image: n} = s;
            if (i.$slideEl || (i.$slideEl = t.clickedSlide ? r(t.clickedSlide) : t.slides.eq(t.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent(`.${a.containerClass}`)),
            !i.$imageEl || 0 === i.$imageEl.length)
                return;
            let l, o, d, c, p, u, h, m, f, g, v, b, w, y, x, E, T, S;
            i.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === n.touchesStart.x && e ? (l = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (l = n.touchesStart.x,
            o = n.touchesStart.y),
            s.scale = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            s.currentScale = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            e ? (T = i.$slideEl[0].offsetWidth,
            S = i.$slideEl[0].offsetHeight,
            d = i.$slideEl.offset().left,
            c = i.$slideEl.offset().top,
            p = d + T / 2 - l,
            u = c + S / 2 - o,
            f = i.$imageEl[0].offsetWidth,
            g = i.$imageEl[0].offsetHeight,
            v = f * s.scale,
            b = g * s.scale,
            w = Math.min(T / 2 - v / 2, 0),
            y = Math.min(S / 2 - b / 2, 0),
            x = -w,
            E = -y,
            h = p * s.scale,
            m = u * s.scale,
            h < w && (h = w),
            h > x && (h = x),
            m < y && (m = y),
            m > E && (m = E)) : (h = 0,
            m = 0),
            i.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${m}px,0)`),
            i.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        },
        out() {
            const e = this
              , t = e.zoom
              , s = e.params.zoom
              , {gesture: a} = t;
            a.$slideEl || (a.$slideEl = e.clickedSlide ? r(e.clickedSlide) : e.slides.eq(e.activeIndex),
            a.$imageEl = a.$slideEl.find("img, svg, canvas"),
            a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`)),
            a.$imageEl && 0 !== a.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            a.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            a.$slideEl = void 0)
        },
        enable() {
            const e = this
              , t = e.zoom;
            if (t.enabled)
                return;
            t.enabled = !0;
            const s = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            u.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s),
            e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s),
            e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
            e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
            e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
            e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
        },
        disable() {
            const e = this
              , t = e.zoom;
            if (!t.enabled)
                return;
            e.zoom.enabled = !1;
            const s = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            u.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s),
            e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s),
            e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
            e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
            e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
            e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
        }
    };
    var ee = {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create() {
            const e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((s=>{
                t[s] = J[s].bind(e)
            }
            )),
            p.extend(e, {
                zoom: t
            });
            let s = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: ()=>s,
                set(t) {
                    if (s !== t) {
                        const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    s = t
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy() {
                this.zoom.disable()
            },
            touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap(e) {
                const t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            },
            transitionEnd() {
                const e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }
        }
    };
    const te = {
        loadInSlide(e, t=!0) {
            const s = this
              , a = s.params.lazy;
            if (void 0 === e)
                return;
            if (0 === s.slides.length)
                return;
            const i = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
            let n = i.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !i.hasClass(a.elementClass) || i.hasClass(a.loadedClass) || i.hasClass(a.loadingClass) || (n = n.add(i[0])),
            0 !== n.length && n.each(((e,n)=>{
                const l = r(n);
                l.addClass(a.loadingClass);
                const o = l.attr("data-background")
                  , d = l.attr("data-src")
                  , c = l.attr("data-srcset")
                  , p = l.attr("data-sizes");
                s.loadImage(l[0], d || o, c, p, !1, (()=>{
                    if (null != s && s && (!s || s.params) && !s.destroyed) {
                        if (o ? (l.css("background-image", `url("${o}")`),
                        l.removeAttr("data-background")) : (c && (l.attr("srcset", c),
                        l.removeAttr("data-srcset")),
                        p && (l.attr("sizes", p),
                        l.removeAttr("data-sizes")),
                        d && (l.attr("src", d),
                        l.removeAttr("data-src"))),
                        l.addClass(a.loadedClass).removeClass(a.loadingClass),
                        i.find(`.${a.preloaderClass}`).remove(),
                        s.params.loop && t) {
                            const e = i.attr("data-swiper-slide-index");
                            if (i.hasClass(s.params.slideDuplicateClass)) {
                                const t = s.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`);
                                s.lazy.loadInSlide(t.index(), !1)
                            } else {
                                const t = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                s.lazy.loadInSlide(t.index(), !1)
                            }
                        }
                        s.emit("lazyImageReady", i[0], l[0])
                    }
                }
                )),
                s.emit("lazyImageLoad", i[0], l[0])
            }
            ))
        },
        load() {
            const e = this
              , {$wrapperEl: t, params: s, slides: a, activeIndex: i} = e
              , n = e.virtual && s.virtual.enabled
              , l = s.lazy;
            let o = s.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function c(e) {
                return n ? r(e).attr("data-swiper-slide-index") : r(e).index()
            }
            if ("auto" === o && (o = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children(`.${s.slideVisibleClass}`).each(((t,s)=>{
                    const a = n ? r(s).attr("data-swiper-slide-index") : r(s).index();
                    e.lazy.loadInSlide(a)
                }
                ));
            else if (o > 1)
                for (let t = i; t < i + o; t += 1)
                    d(t) && e.lazy.loadInSlide(t);
            else
                e.lazy.loadInSlide(i);
            if (l.loadPrevNext)
                if (o > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                    const t = l.loadPrevNextAmount
                      , s = o
                      , n = Math.min(i + s + Math.max(t, s), a.length)
                      , r = Math.max(i - Math.max(s, t), 0);
                    for (let t = i + o; t < n; t += 1)
                        d(t) && e.lazy.loadInSlide(t);
                    for (let t = r; t < i; t += 1)
                        d(t) && e.lazy.loadInSlide(t)
                } else {
                    const a = t.children(`.${s.slideNextClass}`);
                    a.length > 0 && e.lazy.loadInSlide(c(a));
                    const i = t.children(`.${s.slidePrevClass}`);
                    i.length > 0 && e.lazy.loadInSlide(c(i))
                }
        }
    };
    var se = {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                lazy: {
                    initialImageLoaded: !1,
                    load: te.load.bind(e),
                    loadInSlide: te.loadInSlide.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init() {
                const e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll() {
                const e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart() {
                const e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd() {
                const e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }
        }
    };
    const ae = {
        LinearSpline: function(e, t) {
            const s = function() {
                let e, t, s;
                return (a,i)=>{
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        },
        getInterpolateFunction(e) {
            const t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new ae.LinearSpline(t.slidesGrid,e.slidesGrid) : new ae.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate(e, t) {
            const s = this
              , a = s.controller.control;
            let i, n;
            function r(e) {
                const t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                n = -s.controller.spline.interpolate(-t)),
                n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                n = (t - s.minTranslate()) * i + e.minTranslate()),
                s.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(a))
                for (let e = 0; e < a.length; e += 1)
                    a[e] !== t && a[e]instanceof L && r(a[e]);
            else
                a instanceof L && t !== a && r(a)
        },
        setTransition(e, t) {
            const s = this
              , a = s.controller.control;
            let i;
            function n(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && p.nextTick((()=>{
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((()=>{
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof L && n(a[i]);
            else
                a instanceof L && t !== a && n(a)
        }
    };
    var ie = {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: ae.getInterpolateFunction.bind(e),
                    setTranslate: ae.setTranslate.bind(e),
                    setTransition: ae.setTransition.bind(e)
                }
            })
        },
        on: {
            update() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            resize() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            observerUpdate() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    };
    const ne = {
        makeElFocusable: e=>(e.attr("tabIndex", "0"),
        e),
        addElRole: (e,t)=>(e.attr("role", t),
        e),
        addElLabel: (e,t)=>(e.attr("aria-label", t),
        e),
        disableEl: e=>(e.attr("aria-disabled", !0),
        e),
        enableEl: e=>(e.attr("aria-disabled", !1),
        e),
        onEnterKey(e) {
            const t = this
              , s = t.params.a11y;
            if (13 !== e.keyCode)
                return;
            const a = r(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)),
            t.pagination && a.is(`.${t.params.pagination.bulletClass}`) && a[0].click()
        },
        notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation() {
            const e = this;
            if (e.params.loop)
                return;
            const {$nextEl: t, $prevEl: s} = e.navigation;
            s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)),
            t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t))
        },
        updatePagination() {
            const e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((s,a)=>{
                const i = r(a);
                e.a11y.makeElFocusable(i),
                e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
            }
            ))
        },
        init() {
            const e = this;
            e.$el.append(e.a11y.liveRegion);
            const t = e.params.a11y;
            let s, a;
            e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            s && (e.a11y.makeElFocusable(s),
            e.a11y.addElRole(s, "button"),
            e.a11y.addElLabel(s, t.nextSlideMessage),
            s.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, t.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        },
        destroy() {
            const e = this;
            let t, s;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            s && s.off("keydown", e.a11y.onEnterKey),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        }
    };
    var re = {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                a11y: {
                    liveRegion: r(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }
            }),
            Object.keys(ne).forEach((t=>{
                e.a11y[t] = ne[t].bind(e)
            }
            ))
        },
        on: {
            init() {
                const e = this;
                e.params.a11y.enabled && (e.a11y.init(),
                e.a11y.updateNavigation())
            },
            toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    };
    const le = {
        init() {
            const e = this;
            if (!e.params.history)
                return;
            if (!d.history || !d.history.pushState)
                return e.params.history.enabled = !1,
                void (e.params.hashNavigation.enabled = !0);
            const t = e.history;
            t.initialized = !0,
            t.paths = le.getPathValues(),
            (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || d.addEventListener("popstate", e.history.setHistoryPopState))
        },
        destroy() {
            const e = this;
            e.params.history.replaceState || d.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState() {
            const e = this;
            e.history.paths = le.getPathValues(),
            e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        },
        getPathValues() {
            const e = d.location.pathname.slice(1).split("/").filter((e=>"" !== e))
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory(e, t) {
            const s = this;
            if (!s.history.initialized || !s.params.history.enabled)
                return;
            const a = s.slides.eq(t);
            let i = le.slugify(a.attr("data-history"));
            d.location.pathname.includes(e) || (i = `${e}/${i}`);
            const n = d.history.state;
            n && n.value === i || (s.params.history.replaceState ? d.history.replaceState({
                value: i
            }, null, i) : d.history.pushState({
                value: i
            }, null, i))
        },
        slugify: e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
        scrollToSlide(e, t, s) {
            const a = this;
            if (t)
                for (let i = 0, n = a.slides.length; i < n; i += 1) {
                    const n = a.slides.eq(i);
                    if (le.slugify(n.attr("data-history")) === t && !n.hasClass(a.params.slideDuplicateClass)) {
                        const t = n.index();
                        a.slideTo(t, e, s)
                    }
                }
            else
                a.slideTo(0, e, s)
        }
    };
    var oe = {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                history: {
                    init: le.init.bind(e),
                    setHistory: le.setHistory.bind(e),
                    setHistoryPopState: le.setHistoryPopState.bind(e),
                    scrollToSlide: le.scrollToSlide.bind(e),
                    destroy: le.destroy.bind(e)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.history.enabled && e.history.init()
            },
            destroy() {
                const e = this;
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd() {
                const e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    };
    const de = {
        onHashCange() {
            const e = this
              , t = o.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === s)
                    return;
                e.slideTo(s)
            }
        },
        setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && d.history && d.history.replaceState)
                    d.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || "");
                else {
                    const t = e.slides.eq(e.activeIndex)
                      , s = t.attr("data-hash") || t.attr("data-history");
                    o.location.hash = s || ""
                }
        },
        init() {
            const e = this;
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                return;
            e.hashNavigation.initialized = !0;
            const t = o.location.hash.replace("#", "");
            if (t) {
                const s = 0;
                for (let a = 0, i = e.slides.length; a < i; a += 1) {
                    const i = e.slides.eq(a);
                    if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                        const t = i.index();
                        e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                    }
                }
            }
            e.params.hashNavigation.watchState && r(d).on("hashchange", e.hashNavigation.onHashCange)
        },
        destroy() {
            const e = this;
            e.params.hashNavigation.watchState && r(d).off("hashchange", e.hashNavigation.onHashCange)
        }
    };
    var ce = {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: de.init.bind(e),
                    destroy: de.destroy.bind(e),
                    setHash: de.setHash.bind(e),
                    onHashCange: de.onHashCange.bind(e)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd() {
                const e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }
        }
    };
    const pe = {
        run() {
            const e = this
              , t = e.slides.eq(e.activeIndex);
            let s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = p.nextTick((()=>{
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }
            ), s)
        },
        start() {
            const e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0))
        },
        stop() {
            const e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0))
        },
        pause(e) {
            const t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    };
    var ue = {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: pe.run.bind(e),
                    start: pe.start.bind(e),
                    stop: pe.stop.bind(e),
                    pause: pe.pause.bind(e),
                    onTransitionEnd(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            },
            beforeTransitionStart(e, t) {
                const s = this;
                s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop())
            },
            sliderFirstMove() {
                const e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    };
    const he = {
        setTranslate() {
            const e = this
              , {slides: t} = e;
            for (let s = 0; s < t.length; s += 1) {
                const t = e.slides.eq(s);
                let a = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (a -= e.translate);
                let i = 0;
                e.isHorizontal() || (i = a,
                a = 0);
                const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({
                    opacity: n
                }).transform(`translate3d(${a}px, ${i}px, 0px)`)
            }
        },
        setTransition(e) {
            const t = this
              , {slides: s, $wrapperEl: a} = t;
            if (s.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                s.transitionEnd((()=>{
                    if (e)
                        return;
                    if (!t || t.destroyed)
                        return;
                    e = !0,
                    t.animating = !1;
                    const s = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < s.length; e += 1)
                        a.trigger(s[e])
                }
                ))
            }
        }
    };
    var me = {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                fadeEffect: {
                    setTranslate: he.setTranslate.bind(e),
                    setTransition: he.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if ("fade" !== e.params.effect)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}fade`);
                const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                p.extend(e.params, t),
                p.extend(e.originalParams, t)
            },
            setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    };
    const fe = {
        setTranslate() {
            const e = this
              , {$el: t, $wrapperEl: s, slides: a, width: i, height: n, rtlTranslate: l, size: o} = e
              , d = e.params.cubeEffect
              , c = e.isHorizontal()
              , p = e.virtual && e.params.virtual.enabled;
            let u, m = 0;
            d.shadow && (c ? (u = s.find(".swiper-cube-shadow"),
            0 === u.length && (u = r('<div class="swiper-cube-shadow"></div>'),
            s.append(u)),
            u.css({
                height: `${i}px`
            })) : (u = t.find(".swiper-cube-shadow"),
            0 === u.length && (u = r('<div class="swiper-cube-shadow"></div>'),
            t.append(u))));
            for (let e = 0; e < a.length; e += 1) {
                const t = a.eq(e);
                let s = e;
                p && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                let i = 90 * s
                  , n = Math.floor(i / 360);
                l && (i = -i,
                n = Math.floor(-i / 360));
                const u = Math.max(Math.min(t[0].progress, 1), -1);
                let h = 0
                  , f = 0
                  , g = 0;
                s % 4 == 0 ? (h = 4 * -n * o,
                g = 0) : (s - 1) % 4 == 0 ? (h = 0,
                g = 4 * -n * o) : (s - 2) % 4 == 0 ? (h = o + 4 * n * o,
                g = o) : (s - 3) % 4 == 0 && (h = -o,
                g = 3 * o + 4 * o * n),
                l && (h = -h),
                c || (f = h,
                h = 0);
                const v = `rotateX(${c ? 0 : -i}deg) rotateY(${c ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                if (u <= 1 && u > -1 && (m = 90 * s + 90 * u,
                l && (m = 90 * -s - 90 * u)),
                t.transform(v),
                d.slideShadows) {
                    let e = c ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                      , s = c ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = r(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`),
                    t.append(e)),
                    0 === s.length && (s = r(`<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`),
                    t.append(s)),
                    e.length && (e[0].style.opacity = Math.max(-u, 0)),
                    s.length && (s[0].style.opacity = Math.max(u, 0))
                }
            }
            if (s.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "-moz-transform-origin": `50% 50% -${o / 2}px`,
                "-ms-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`
            }),
            d.shadow)
                if (c)
                    u.transform(`translate3d(0px, ${i / 2 + d.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);
                else {
                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                      , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                      , s = d.shadowScale
                      , a = d.shadowScale / t
                      , i = d.shadowOffset;
                    u.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                }
            const f = h.isSafari || h.isUiWebView ? -o / 2 : 0;
            s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`)
        },
        setTransition(e) {
            const t = this
              , {$el: s, slides: a} = t;
            a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
        }
    };
    var ge = {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                cubeEffect: {
                    setTranslate: fe.setTranslate.bind(e),
                    setTransition: fe.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if ("cube" !== e.params.effect)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}cube`),
                e.classNames.push(`${e.params.containerModifierClass}3d`);
                const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                };
                p.extend(e.params, t),
                p.extend(e.originalParams, t)
            },
            setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    };
    const ve = {
        setTranslate() {
            const e = this
              , {slides: t, rtlTranslate: s} = e;
            for (let a = 0; a < t.length; a += 1) {
                const i = t.eq(a);
                let n = i[0].progress;
                e.params.flipEffect.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                let l = -180 * n
                  , o = 0
                  , d = -i[0].swiperSlideOffset
                  , c = 0;
                if (e.isHorizontal() ? s && (l = -l) : (c = d,
                d = 0,
                o = -l,
                l = 0),
                i[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                e.params.flipEffect.slideShadows) {
                    let t = e.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                      , s = e.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                    0 === t.length && (t = r(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`),
                    i.append(t)),
                    0 === s.length && (s = r(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`),
                    i.append(s)),
                    t.length && (t[0].style.opacity = Math.max(-n, 0)),
                    s.length && (s[0].style.opacity = Math.max(n, 0))
                }
                i.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${l}deg)`)
            }
        },
        setTransition(e) {
            const t = this
              , {slides: s, activeIndex: a, $wrapperEl: i} = t;
            if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                s.eq(a).transitionEnd((function() {
                    if (e)
                        return;
                    if (!t || t.destroyed)
                        return;
                    e = !0,
                    t.animating = !1;
                    const s = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < s.length; e += 1)
                        i.trigger(s[e])
                }
                ))
            }
        }
    };
    var be = {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                flipEffect: {
                    setTranslate: ve.setTranslate.bind(e),
                    setTransition: ve.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if ("flip" !== e.params.effect)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}flip`),
                e.classNames.push(`${e.params.containerModifierClass}3d`);
                const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                p.extend(e.params, t),
                p.extend(e.originalParams, t)
            },
            setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    };
    const we = {
        setTranslate() {
            const e = this
              , {width: t, height: s, slides: a, $wrapperEl: i, slidesSizesGrid: n} = e
              , l = e.params.coverflowEffect
              , o = e.isHorizontal()
              , d = e.translate
              , c = o ? t / 2 - d : s / 2 - d
              , p = o ? l.rotate : -l.rotate
              , h = l.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
                const t = a.eq(e)
                  , s = n[e]
                  , i = (c - t[0].swiperSlideOffset - s / 2) / s * l.modifier;
                let d = o ? p * i : 0
                  , u = o ? 0 : p * i
                  , m = -h * Math.abs(i)
                  , f = o ? 0 : l.stretch * i
                  , g = o ? l.stretch * i : 0;
                Math.abs(g) < .001 && (g = 0),
                Math.abs(f) < .001 && (f = 0),
                Math.abs(m) < .001 && (m = 0),
                Math.abs(d) < .001 && (d = 0),
                Math.abs(u) < .001 && (u = 0);
                const v = `translate3d(${g}px,${f}px,${m}px)  rotateX(${u}deg) rotateY(${d}deg)`;
                if (t.transform(v),
                t[0].style.zIndex = 1 - Math.abs(Math.round(i)),
                l.slideShadows) {
                    let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                      , s = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = r(`<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`),
                    t.append(e)),
                    0 === s.length && (s = r(`<div class="swiper-slide-shadow-${o ? "right" : "bottom"}"></div>`),
                    t.append(s)),
                    e.length && (e[0].style.opacity = i > 0 ? i : 0),
                    s.length && (s[0].style.opacity = -i > 0 ? -i : 0)
                }
            }
            if (u.pointerEvents || u.prefixedPointerEvents) {
                i[0].style.perspectiveOrigin = `${c}px 50%`
            }
        },
        setTransition(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    };
    var ye = {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                coverflowEffect: {
                    setTranslate: we.setTranslate.bind(e),
                    setTransition: we.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`),
                e.classNames.push(`${e.params.containerModifierClass}3d`),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    };
    const xe = {
        init() {
            const e = this
              , {thumbs: t} = e.params
              , s = e.constructor;
            t.swiper instanceof s ? (e.thumbs.swiper = t.swiper,
            p.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            p.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : p.isObject(t.swiper) && (e.thumbs.swiper = new s(p.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick() {
            const e = this
              , t = e.thumbs.swiper;
            if (!t)
                return;
            const s = t.clickedIndex
              , a = t.clickedSlide;
            if (a && r(a).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            if (i = t.params.loop ? parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
            e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                e._clientLeft = e.$wrapperEl[0].clientLeft,
                t = e.activeIndex);
                const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                  , a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
            }
            e.slideTo(i)
        },
        update(e) {
            const t = this
              , s = t.thumbs.swiper;
            if (!s)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            if (t.realIndex !== s.realIndex) {
                let i, n = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(n).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft,
                    n = s.activeIndex);
                    const e = s.slides.eq(n).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                      , a = s.slides.eq(n).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - n == n - e ? n : a - n < n - e ? a : e
                } else
                    i = t.realIndex;
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > n ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > n && (i = i - a + 1),
                s.slideTo(i, e ? 0 : void 0))
            }
            let i = 1;
            const n = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
            s.slides.removeClass(n),
            s.params.loop || s.params.virtual)
                for (let e = 0; e < i; e += 1)
                    s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(n);
            else
                for (let e = 0; e < i; e += 1)
                    s.slides.eq(t.realIndex + e).addClass(n)
        }
    };
    const Ee = [D, O, A, N, H, V, Y, q, W, U, _, Z, ee, se, ie, re, oe, ce, ue, me, ge, be, ye, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create() {
            const e = this;
            p.extend(e, {
                thumbs: {
                    swiper: null,
                    init: xe.init.bind(e),
                    update: xe.update.bind(e),
                    onThumbClick: xe.onThumbClick.bind(e)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this
                  , {thumbs: t} = e.params;
                t && t.swiper && (e.thumbs.init(),
                e.thumbs.update(!0))
            },
            slideChange() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    void 0 === L.use && (L.use = L.Class.use,
    L.installModule = L.Class.installModule),
    L.use(Ee);
    const Te = L;
    $(document).ready((function() {
        $(window).scroll((function(e) {
            e.preventDefault();
            var t = $("#section-corporate").height() - $(".car-img").height()
              , s = -$("#section-corporate").offset().top + $(window).scrollTop() + $("#navbar").height() + t;
            s < 0 ? s = 0 : s > t && (s = t),
            $("#section-corporate .car-img").css("transform", "translateY(-" + s + "px)")
        }
        )),
        function(e) {
            e.fn.cycle = function(t, s) {
                var a = this.length
                  , i = 0
                  , n = -1
                  , r = this
                  , l = e("#main-section #section-services .tab-content .tab-pane");
                return setInterval((function() {
                    r.eq(n).removeClass(s),
                    l.eq(n).removeClass(s),
                    r.eq(i).addClass(s);
                    var t = r.eq(i).offset();
                    t.left -= r.eq(0).offset().left,
                    e("#main-section #section-services .nav-tabs").animate({
                        scrollLeft: t.left
                    }),
                    l.eq(i).addClass(s),
                    r.eq(i).tab("show"),
                    n = i,
                    i = (i + 1) % a
                }
                ), t)
            }
        }(jQuery);
        var e = $("#main-section #section-services .nav-tabs a").cycle(5e3, "active");
        $("#main-section #section-services .nav-tabs a").click((function() {
            clearInterval(e),
            $("#main-section #section-services .nav-tabs a").removeClass("active"),
            $("#main-section #section-services .tab-content .tab-pane").removeClass("active"),
            $(this).addClass("active"),
            $("#" + this.getAttribute("aria-controls")).addClass("active"),
            $(this).tab("show")
        }
        ));
        new Te("#news-swiper",{
            slidesPerView: "auto",
            spaceBetween: 30,
            autoplay: {
                delay: 2500
            }
        }),
        new Te("#features-swiper",{
            slidesPerView: 1,
            speed: 1e3,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {},
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0
        });
        setTimeout((function() {
            $(".swiper-button-next").removeClass("swiper-button-disabled")
        }
        ), 1e3);
        new Te("#city-swiper",{
            slidesPerView: "auto",
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 2500
            }
        });
        var t = !1
          , s = $("body");
        setTimeout((function() {
            s.addClass("loading"),
            setTimeout((function() {
                s.addClass("loaded")
            }
            ), 1e3)
        }
        ), 400),
        function e() {
            var s = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop || document.body.scrollTop;
            if ($("#value-proposition").length > 0)
                if (document.getElementsByClassName("value-icon")[0].contentDocument.getElementsByTagName("defs")[0]) {
                    if (s > $("#section-intro > div.intro > div.content > div > h1").offset().top && !t) {
                        t = !0;
                        for (var a = document.getElementsByClassName("value-icon"), i = 0; i < a.length; i++) {
                            var n = a[i].contentDocument
                              , r = n.createElementNS("http://www.w3.org/2000/svg", "style");
                            r.textContent = ".cls-1 ,.cls-2,.cls-3,.cls-4, .cls-5, .cls-6{ animation: dash 7s linear normal; -webkit-animation-fill-mode: forwards; }",
                            n.getElementsByTagName("defs")[0].appendChild(r)
                        }
                    }
                } else
                    ;requestAnimationFrame(e)
        }()
    }
    ))
}
)();

