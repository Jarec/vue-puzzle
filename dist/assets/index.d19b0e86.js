var Qr = Object.defineProperty,
  Gr = Object.defineProperties;
var eo = Object.getOwnPropertyDescriptors;
var cs = Object.getOwnPropertySymbols;
var to = Object.prototype.hasOwnProperty,
  no = Object.prototype.propertyIsEnumerable;
var fs = (e, t, n) =>
    t in e
      ? Qr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  us = (e, t) => {
    for (var n in t || (t = {})) to.call(t, n) && fs(e, n, t[n]);
    if (cs) for (var n of cs(t)) no.call(t, n) && fs(e, n, t[n]);
    return e;
  },
  as = (e, t) => Gr(e, eo(t));
const so = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
};
so();
function Rn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ro =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  oo = Rn(ro);
function Ws(e) {
  return !!e || e === "";
}
function Wt(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Q(s) ? co(s) : Wt(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (Q(e)) return e;
    if (Y(e)) return e;
  }
}
const io = /;(?![^(]*\))/g,
  lo = /:(.+)/;
function co(e) {
  const t = {};
  return (
    e.split(io).forEach((n) => {
      if (n) {
        const s = n.split(lo);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }),
    t
  );
}
function Sn(e) {
  let t = "";
  if (Q(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = Sn(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ln = (e) =>
    Q(e)
      ? e
      : e == null
      ? ""
      : F(e) || (Y(e) && (e.toString === Ys || !L(e.toString)))
      ? JSON.stringify(e, qs, 2)
      : String(e),
  qs = (e, t) =>
    t && t.__v_isRef
      ? qs(e, t.value)
      : lt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Vs(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Y(t) && !F(t) && !Xs(t)
      ? String(t)
      : t,
  D = {},
  it = [],
  be = () => {},
  fo = () => !1,
  uo = /^on[^a-z]/,
  qt = (e) => uo.test(e),
  Bn = (e) => e.startsWith("onUpdate:"),
  te = Object.assign,
  $n = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  ao = Object.prototype.hasOwnProperty,
  R = (e, t) => ao.call(e, t),
  F = Array.isArray,
  lt = (e) => Vt(e) === "[object Map]",
  Vs = (e) => Vt(e) === "[object Set]",
  L = (e) => typeof e == "function",
  Q = (e) => typeof e == "string",
  Hn = (e) => typeof e == "symbol",
  Y = (e) => e !== null && typeof e == "object",
  Js = (e) => Y(e) && L(e.then) && L(e.catch),
  Ys = Object.prototype.toString,
  Vt = (e) => Ys.call(e),
  ho = (e) => Vt(e).slice(8, -1),
  Xs = (e) => Vt(e) === "[object Object]",
  jn = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Lt = Rn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Jt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  po = /-(\w)/g,
  ft = Jt((e) => e.replace(po, (t, n) => (n ? n.toUpperCase() : ""))),
  go = /\B([A-Z])/g,
  at = Jt((e) => e.replace(go, "-$1").toLowerCase()),
  Zs = Jt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  cn = Jt((e) => (e ? `on${Zs(e)}` : "")),
  Ct = (e, t) => !Object.is(e, t),
  fn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Ht = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Qs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ds;
const mo = () =>
  ds ||
  (ds =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let Ce;
class _o {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ce &&
        ((this.parent = Ce),
        (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Ce;
      try {
        return (Ce = this), t();
      } finally {
        Ce = n;
      }
    }
  }
  on() {
    Ce = this;
  }
  off() {
    Ce = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.active = !1;
    }
  }
}
function bo(e, t = Ce) {
  t && t.active && t.effects.push(e);
}
const Dn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Gs = (e) => (e.w & De) > 0,
  er = (e) => (e.n & De) > 0,
  yo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= De;
  },
  xo = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Gs(r) && !er(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~De),
          (r.n &= ~De);
      }
      t.length = n;
    }
  },
  mn = new WeakMap();
let _t = 0,
  De = 1;
const _n = 30;
let _e;
const Ve = Symbol(""),
  bn = Symbol("");
class kn {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      bo(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = _e,
      n = He;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = _e),
        (_e = this),
        (He = !0),
        (De = 1 << ++_t),
        _t <= _n ? yo(this) : hs(this),
        this.fn()
      );
    } finally {
      _t <= _n && xo(this),
        (De = 1 << --_t),
        (_e = this.parent),
        (He = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    _e === this
      ? (this.deferStop = !0)
      : this.active &&
        (hs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function hs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let He = !0;
const tr = [];
function dt() {
  tr.push(He), (He = !1);
}
function ht() {
  const e = tr.pop();
  He = e === void 0 ? !0 : e;
}
function ae(e, t, n) {
  if (He && _e) {
    let s = mn.get(e);
    s || mn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Dn())), nr(r);
  }
}
function nr(e, t) {
  let n = !1;
  _t <= _n ? er(e) || ((e.n |= De), (n = !Gs(e))) : (n = !e.has(_e)),
    n && (e.add(_e), _e.deps.push(e));
}
function Me(e, t, n, s, r, o) {
  const i = mn.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && F(e))
    i.forEach((f, a) => {
      (a === "length" || a >= s) && c.push(f);
    });
  else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        F(e)
          ? jn(n) && c.push(i.get("length"))
          : (c.push(i.get(Ve)), lt(e) && c.push(i.get(bn)));
        break;
      case "delete":
        F(e) || (c.push(i.get(Ve)), lt(e) && c.push(i.get(bn)));
        break;
      case "set":
        lt(e) && c.push(i.get(Ve));
        break;
    }
  if (c.length === 1) c[0] && yn(c[0]);
  else {
    const f = [];
    for (const a of c) a && f.push(...a);
    yn(Dn(f));
  }
}
function yn(e, t) {
  for (const n of F(e) ? e : [...e])
    (n !== _e || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const vo = Rn("__proto__,__v_isRef,__isVue"),
  sr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(Hn)
  ),
  Co = Un(),
  Eo = Un(!1, !0),
  To = Un(!0),
  ps = wo();
function wo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = $(this);
        for (let o = 0, i = this.length; o < i; o++) ae(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map($)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        dt();
        const s = $(this)[t].apply(this, n);
        return ht(), s;
      };
    }),
    e
  );
}
function Un(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && o === (e ? (t ? ko : cr) : t ? lr : ir).get(s))
      return s;
    const i = F(s);
    if (!e && i && R(ps, r)) return Reflect.get(ps, r, o);
    const c = Reflect.get(s, r, o);
    return (Hn(r) ? sr.has(r) : vo(r)) || (e || ae(s, "get", r), t)
      ? c
      : Z(c)
      ? !i || !jn(r)
        ? c.value
        : c
      : Y(c)
      ? e
        ? fr(c)
        : Wn(c)
      : c;
  };
}
const Ao = rr(),
  Io = rr(!0);
function rr(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (Et(i) && Z(i) && !Z(r)) return !1;
    if (
      !e &&
      !Et(r) &&
      (ur(r) || ((r = $(r)), (i = $(i))), !F(n) && Z(i) && !Z(r))
    )
      return (i.value = r), !0;
    const c = F(n) && jn(s) ? Number(s) < n.length : R(n, s),
      f = Reflect.set(n, s, r, o);
    return (
      n === $(o) && (c ? Ct(r, i) && Me(n, "set", s, r) : Me(n, "add", s, r)), f
    );
  };
}
function Oo(e, t) {
  const n = R(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Me(e, "delete", t, void 0), s;
}
function Fo(e, t) {
  const n = Reflect.has(e, t);
  return (!Hn(t) || !sr.has(t)) && ae(e, "has", t), n;
}
function Mo(e) {
  return ae(e, "iterate", F(e) ? "length" : Ve), Reflect.ownKeys(e);
}
const or = { get: Co, set: Ao, deleteProperty: Oo, has: Fo, ownKeys: Mo },
  Po = {
    get: To,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  No = te({}, or, { get: Eo, set: Io }),
  Kn = (e) => e,
  Yt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = $(e),
    o = $(t);
  t !== o && !n && ae(r, "get", t), !n && ae(r, "get", o);
  const { has: i } = Yt(r),
    c = s ? Kn : n ? Vn : Tt;
  if (i.call(r, t)) return c(e.get(t));
  if (i.call(r, o)) return c(e.get(o));
  e !== r && e.get(t);
}
function Ft(e, t = !1) {
  const n = this.__v_raw,
    s = $(n),
    r = $(e);
  return (
    e !== r && !t && ae(s, "has", e),
    !t && ae(s, "has", r),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Mt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ae($(e), "iterate", Ve), Reflect.get(e, "size", e)
  );
}
function gs(e) {
  e = $(e);
  const t = $(this);
  return Yt(t).has.call(t, e) || (t.add(e), Me(t, "add", e, e)), this;
}
function ms(e, t) {
  t = $(t);
  const n = $(this),
    { has: s, get: r } = Yt(n);
  let o = s.call(n, e);
  o || ((e = $(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Ct(t, i) && Me(n, "set", e, t) : Me(n, "add", e, t), this
  );
}
function _s(e) {
  const t = $(this),
    { has: n, get: s } = Yt(t);
  let r = n.call(t, e);
  r || ((e = $(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Me(t, "delete", e, void 0), o;
}
function bs() {
  const e = $(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Me(e, "clear", void 0, void 0), n;
}
function Pt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      c = $(i),
      f = t ? Kn : e ? Vn : Tt;
    return (
      !e && ae(c, "iterate", Ve), i.forEach((a, h) => s.call(r, f(a), f(h), o))
    );
  };
}
function Nt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = $(r),
      i = lt(o),
      c = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      a = r[e](...s),
      h = n ? Kn : t ? Vn : Tt;
    return (
      !t && ae(o, "iterate", f ? bn : Ve),
      {
        next() {
          const { value: m, done: b } = a.next();
          return b
            ? { value: m, done: b }
            : { value: c ? [h(m[0]), h(m[1])] : h(m), done: b };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Le(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Lo() {
  const e = {
      get(o) {
        return Ot(this, o);
      },
      get size() {
        return Mt(this);
      },
      has: Ft,
      add: gs,
      set: ms,
      delete: _s,
      clear: bs,
      forEach: Pt(!1, !1),
    },
    t = {
      get(o) {
        return Ot(this, o, !1, !0);
      },
      get size() {
        return Mt(this);
      },
      has: Ft,
      add: gs,
      set: ms,
      delete: _s,
      clear: bs,
      forEach: Pt(!1, !0),
    },
    n = {
      get(o) {
        return Ot(this, o, !0);
      },
      get size() {
        return Mt(this, !0);
      },
      has(o) {
        return Ft.call(this, o, !0);
      },
      add: Le("add"),
      set: Le("set"),
      delete: Le("delete"),
      clear: Le("clear"),
      forEach: Pt(!0, !1),
    },
    s = {
      get(o) {
        return Ot(this, o, !0, !0);
      },
      get size() {
        return Mt(this, !0);
      },
      has(o) {
        return Ft.call(this, o, !0);
      },
      add: Le("add"),
      set: Le("set"),
      delete: Le("delete"),
      clear: Le("clear"),
      forEach: Pt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Nt(o, !1, !1)),
        (n[o] = Nt(o, !0, !1)),
        (t[o] = Nt(o, !1, !0)),
        (s[o] = Nt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Ro, So, Bo, $o] = Lo();
function zn(e, t) {
  const n = t ? (e ? $o : Bo) : e ? So : Ro;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(R(n, r) && r in s ? n : s, r, o);
}
const Ho = { get: zn(!1, !1) },
  jo = { get: zn(!1, !0) },
  Do = { get: zn(!0, !1) },
  ir = new WeakMap(),
  lr = new WeakMap(),
  cr = new WeakMap(),
  ko = new WeakMap();
function Uo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ko(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Uo(ho(e));
}
function Wn(e) {
  return Et(e) ? e : qn(e, !1, or, Ho, ir);
}
function zo(e) {
  return qn(e, !1, No, jo, lr);
}
function fr(e) {
  return qn(e, !0, Po, Do, cr);
}
function qn(e, t, n, s, r) {
  if (!Y(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = Ko(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function ct(e) {
  return Et(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
function ur(e) {
  return !!(e && e.__v_isShallow);
}
function ar(e) {
  return ct(e) || Et(e);
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function dr(e) {
  return Ht(e, "__v_skip", !0), e;
}
const Tt = (e) => (Y(e) ? Wn(e) : e),
  Vn = (e) => (Y(e) ? fr(e) : e);
function hr(e) {
  He && _e && ((e = $(e)), nr(e.dep || (e.dep = Dn())));
}
function pr(e, t) {
  (e = $(e)), e.dep && yn(e.dep);
}
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function un(e) {
  return Wo(e, !1);
}
function Wo(e, t) {
  return Z(e) ? e : new qo(e, t);
}
class qo {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : $(t)),
      (this._value = n ? t : Tt(t));
  }
  get value() {
    return hr(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : $(t)),
      Ct(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Tt(t)),
        pr(this));
  }
}
function jt(e) {
  return Z(e) ? e.value : e;
}
const Vo = {
  get: (e, t, n) => jt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return Z(r) && !Z(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function gr(e) {
  return ct(e) ? e : new Proxy(e, Vo);
}
function Jo(e) {
  const t = F(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Xo(e, n);
  return t;
}
class Yo {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Xo(e, t, n) {
  const s = e[t];
  return Z(s) ? s : new Yo(e, t, n);
}
class Zo {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new kn(t, () => {
        this._dirty || ((this._dirty = !0), pr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = $(this);
    return (
      hr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Qo(e, t, n = !1) {
  let s, r;
  const o = L(e);
  return (
    o ? ((s = e), (r = be)) : ((s = e.get), (r = e.set)),
    new Zo(s, r, o || !r, n)
  );
}
function je(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Xt(o, t, n);
  }
  return r;
}
function ge(e, t, n, s) {
  if (L(e)) {
    const o = je(e, t, n, s);
    return (
      o &&
        Js(o) &&
        o.catch((i) => {
          Xt(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(ge(e[o], t, n, s));
  return r;
}
function Xt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      je(f, null, 10, [e, i, c]);
      return;
    }
  }
  Go(e, n, r, s);
}
function Go(e, t, n, s = !0) {
  console.error(e);
}
let Dt = !1,
  xn = !1;
const ue = [];
let Oe = 0;
const yt = [];
let bt = null,
  nt = 0;
const xt = [];
let Be = null,
  st = 0;
const mr = Promise.resolve();
let Jn = null,
  vn = null;
function ei(e) {
  const t = Jn || mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ti(e) {
  let t = Oe + 1,
    n = ue.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    wt(ue[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function _r(e) {
  (!ue.length || !ue.includes(e, Dt && e.allowRecurse ? Oe + 1 : Oe)) &&
    e !== vn &&
    (e.id == null ? ue.push(e) : ue.splice(ti(e.id), 0, e), br());
}
function br() {
  !Dt && !xn && ((xn = !0), (Jn = mr.then(vr)));
}
function ni(e) {
  const t = ue.indexOf(e);
  t > Oe && ue.splice(t, 1);
}
function yr(e, t, n, s) {
  F(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    br();
}
function si(e) {
  yr(e, bt, yt, nt);
}
function ri(e) {
  yr(e, Be, xt, st);
}
function Yn(e, t = null) {
  if (yt.length) {
    for (
      vn = t, bt = [...new Set(yt)], yt.length = 0, nt = 0;
      nt < bt.length;
      nt++
    )
      bt[nt]();
    (bt = null), (nt = 0), (vn = null), Yn(e, t);
  }
}
function xr(e) {
  if (xt.length) {
    const t = [...new Set(xt)];
    if (((xt.length = 0), Be)) {
      Be.push(...t);
      return;
    }
    for (Be = t, Be.sort((n, s) => wt(n) - wt(s)), st = 0; st < Be.length; st++)
      Be[st]();
    (Be = null), (st = 0);
  }
}
const wt = (e) => (e.id == null ? 1 / 0 : e.id);
function vr(e) {
  (xn = !1), (Dt = !0), Yn(e), ue.sort((n, s) => wt(n) - wt(s));
  const t = be;
  try {
    for (Oe = 0; Oe < ue.length; Oe++) {
      const n = ue[Oe];
      n && n.active !== !1 && je(n, null, 14);
    }
  } finally {
    (Oe = 0),
      (ue.length = 0),
      xr(),
      (Dt = !1),
      (Jn = null),
      (ue.length || yt.length || xt.length) && vr(e);
  }
}
function oi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || D;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: m, trim: b } = s[h] || D;
    b ? (r = n.map((T) => T.trim())) : m && (r = n.map(Qs));
  }
  let c,
    f = s[(c = cn(t))] || s[(c = cn(ft(t)))];
  !f && o && (f = s[(c = cn(at(t)))]), f && ge(f, e, 6, r);
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), ge(a, e, 6, r);
  }
}
function Cr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!L(e)) {
    const f = (a) => {
      const h = Cr(a, t, !0);
      h && ((c = !0), te(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  return !o && !c
    ? (s.set(e, null), null)
    : (F(o) ? o.forEach((f) => (i[f] = null)) : te(i, o), s.set(e, i), i);
}
function Zt(e, t) {
  return !e || !qt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      R(e, t[0].toLowerCase() + t.slice(1)) || R(e, at(t)) || R(e, t));
}
let Te = null,
  Qt = null;
function kt(e) {
  const t = Te;
  return (Te = e), (Qt = (e && e.type.__scopeId) || null), t;
}
function ii(e) {
  Qt = e;
}
function li() {
  Qt = null;
}
function Er(e, t = Te, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Os(-1);
    const o = kt(t),
      i = e(...r);
    return kt(o), s._d && Os(1), i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function an(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: f,
    emit: a,
    render: h,
    renderCache: m,
    data: b,
    setupState: T,
    ctx: O,
    inheritAttrs: P,
  } = e;
  let N, S;
  const se = kt(e);
  try {
    if (n.shapeFlag & 4) {
      const z = r || s;
      (N = Ee(h.call(z, z, m, o, T, b, O))), (S = f);
    } else {
      const z = t;
      (N = Ee(
        z.length > 1 ? z(o, { attrs: f, slots: c, emit: a }) : z(o, null)
      )),
        (S = t.props ? f : ci(f));
    }
  } catch (z) {
    (vt.length = 0), Xt(z, e, 1), (N = pe(Fe));
  }
  let V = N;
  if (S && P !== !1) {
    const z = Object.keys(S),
      { shapeFlag: re } = V;
    z.length && re & 7 && (i && z.some(Bn) && (S = fi(S, i)), (V = Xe(V, S)));
  }
  return (
    n.dirs && (V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs),
    n.transition && (V.transition = n.transition),
    (N = V),
    kt(se),
    N
  );
}
const ci = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || qt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  fi = (e, t) => {
    const n = {};
    for (const s in e) (!Bn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function ui(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: f } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16) return s ? ys(s, i, a) : !!i;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        const b = h[m];
        if (i[b] !== s[b] && !Zt(a, b)) return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? ys(s, i, a)
        : !0
      : !!i;
  return !1;
}
function ys(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Zt(n, o)) return !0;
  }
  return !1;
}
function ai({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const di = (e) => e.__isSuspense;
function hi(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ri(e);
}
function pi(e, t) {
  if (ee) {
    let n = ee.provides;
    const s = ee.parent && ee.parent.provides;
    s === n && (n = ee.provides = Object.create(s)), (n[e] = t);
  }
}
function dn(e, t, n = !1) {
  const s = ee || Te;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && L(t) ? t.call(s.proxy) : t;
  }
}
function gi(e, t) {
  return Xn(e, null, { flush: "post" });
}
const xs = {};
function Rt(e, t, n) {
  return Xn(e, t, n);
}
function Xn(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = D
) {
  const c = ee;
  let f,
    a = !1,
    h = !1;
  if (
    (Z(e)
      ? ((f = () => e.value), (a = ur(e)))
      : ct(e)
      ? ((f = () => e), (s = !0))
      : F(e)
      ? ((h = !0),
        (a = e.some(ct)),
        (f = () =>
          e.map((S) => {
            if (Z(S)) return S.value;
            if (ct(S)) return rt(S);
            if (L(S)) return je(S, c, 2);
          })))
      : L(e)
      ? t
        ? (f = () => je(e, c, 2))
        : (f = () => {
            if (!(c && c.isUnmounted)) return m && m(), ge(e, c, 3, [b]);
          })
      : (f = be),
    t && s)
  ) {
    const S = f;
    f = () => rt(S());
  }
  let m,
    b = (S) => {
      m = N.onStop = () => {
        je(S, c, 4);
      };
    };
  if (At)
    return (b = be), t ? n && ge(t, c, 3, [f(), h ? [] : void 0, b]) : f(), be;
  let T = h ? [] : xs;
  const O = () => {
    if (N.active)
      if (t) {
        const S = N.run();
        (s || a || (h ? S.some((se, V) => Ct(se, T[V])) : Ct(S, T))) &&
          (m && m(), ge(t, c, 3, [S, T === xs ? void 0 : T, b]), (T = S));
      } else N.run();
  };
  O.allowRecurse = !!t;
  let P;
  r === "sync"
    ? (P = O)
    : r === "post"
    ? (P = () => le(O, c && c.suspense))
    : (P = () => {
        !c || c.isMounted ? si(O) : O();
      });
  const N = new kn(f, P);
  return (
    t
      ? n
        ? O()
        : (T = N.run())
      : r === "post"
      ? le(N.run.bind(N), c && c.suspense)
      : N.run(),
    () => {
      N.stop(), c && c.scope && $n(c.scope.effects, N);
    }
  );
}
function mi(e, t, n) {
  const s = this.proxy,
    r = Q(e) ? (e.includes(".") ? Tr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  L(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ee;
  ut(this);
  const c = Xn(r, o.bind(s), n);
  return i ? ut(i) : Ye(), c;
}
function Tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function rt(e, t) {
  if (!Y(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Z(e))) rt(e.value, t);
  else if (F(e)) for (let n = 0; n < e.length; n++) rt(e[n], t);
  else if (Vs(e) || lt(e))
    e.forEach((n) => {
      rt(n, t);
    });
  else if (Xs(e)) for (const n in e) rt(e[n], t);
  return e;
}
function _i() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    tn(() => {
      e.isMounted = !0;
    }),
    Fr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const de = [Function, Array],
  bi = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: de,
      onEnter: de,
      onAfterEnter: de,
      onEnterCancelled: de,
      onBeforeLeave: de,
      onLeave: de,
      onAfterLeave: de,
      onLeaveCancelled: de,
      onBeforeAppear: de,
      onAppear: de,
      onAfterAppear: de,
      onAppearCancelled: de,
    },
    setup(e, { slots: t }) {
      const n = Kr(),
        s = _i();
      let r;
      return () => {
        const o = t.default && Ir(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const P of o)
            if (P.type !== Fe) {
              i = P;
              break;
            }
        }
        const c = $(e),
          { mode: f } = c;
        if (s.isLeaving) return hn(i);
        const a = vs(i);
        if (!a) return hn(i);
        const h = Cn(a, c, s, n);
        En(a, h);
        const m = n.subTree,
          b = m && vs(m);
        let T = !1;
        const { getTransitionKey: O } = a.type;
        if (O) {
          const P = O();
          r === void 0 ? (r = P) : P !== r && ((r = P), (T = !0));
        }
        if (b && b.type !== Fe && (!We(a, b) || T)) {
          const P = Cn(b, c, s, n);
          if ((En(b, P), f === "out-in"))
            return (
              (s.isLeaving = !0),
              (P.afterLeave = () => {
                (s.isLeaving = !1), n.update();
              }),
              hn(i)
            );
          f === "in-out" &&
            a.type !== Fe &&
            (P.delayLeave = (N, S, se) => {
              const V = Ar(s, b);
              (V[String(b.key)] = b),
                (N._leaveCb = () => {
                  S(), (N._leaveCb = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = se);
            });
        }
        return i;
      };
    },
  },
  wr = bi;
function Ar(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Cn(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: m,
      onLeave: b,
      onAfterLeave: T,
      onLeaveCancelled: O,
      onBeforeAppear: P,
      onAppear: N,
      onAfterAppear: S,
      onAppearCancelled: se,
    } = t,
    V = String(e.key),
    z = Ar(n, e),
    re = (H, X) => {
      H && ge(H, s, 9, X);
    },
    we = {
      mode: o,
      persisted: i,
      beforeEnter(H) {
        let X = c;
        if (!n.isMounted)
          if (r) X = P || c;
          else return;
        H._leaveCb && H._leaveCb(!0);
        const W = z[V];
        W && We(e, W) && W.el._leaveCb && W.el._leaveCb(), re(X, [H]);
      },
      enter(H) {
        let X = f,
          W = a,
          ie = h;
        if (!n.isMounted)
          if (r) (X = N || f), (W = S || a), (ie = se || h);
          else return;
        let ne = !1;
        const I = (H._enterCb = (J) => {
          ne ||
            ((ne = !0),
            J ? re(ie, [H]) : re(W, [H]),
            we.delayedLeave && we.delayedLeave(),
            (H._enterCb = void 0));
        });
        X ? (X(H, I), X.length <= 1 && I()) : I();
      },
      leave(H, X) {
        const W = String(e.key);
        if ((H._enterCb && H._enterCb(!0), n.isUnmounting)) return X();
        re(m, [H]);
        let ie = !1;
        const ne = (H._leaveCb = (I) => {
          ie ||
            ((ie = !0),
            X(),
            I ? re(O, [H]) : re(T, [H]),
            (H._leaveCb = void 0),
            z[W] === e && delete z[W]);
        });
        (z[W] = e), b ? (b(H, ne), b.length <= 1 && ne()) : ne();
      },
      clone(H) {
        return Cn(H, t, n, s);
      },
    };
  return we;
}
function hn(e) {
  if (Gt(e)) return (e = Xe(e)), (e.children = null), e;
}
function vs(e) {
  return Gt(e) ? (e.children ? e.children[0] : void 0) : e;
}
function En(e, t) {
  e.shapeFlag & 6 && e.component
    ? En(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ir(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === he
      ? (i.patchFlag & 128 && r++, (s = s.concat(Ir(i.children, t, c))))
      : (t || i.type !== Fe) && s.push(c != null ? Xe(i, { key: c }) : i);
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
  return s;
}
const Tn = (e) => !!e.type.__asyncLoader,
  Gt = (e) => e.type.__isKeepAlive;
function yi(e, t) {
  Or(e, "a", t);
}
function xi(e, t) {
  Or(e, "da", t);
}
function Or(e, t, n = ee) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((en(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Gt(r.parent.vnode) && vi(s, t, n, r), (r = r.parent);
  }
}
function vi(e, t, n, s) {
  const r = en(t, e, s, !0);
  Zn(() => {
    $n(s[t], r);
  }, n);
}
function en(e, t, n = ee, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          dt(), ut(n);
          const c = ge(t, n, e, i);
          return Ye(), ht(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Pe =
    (e) =>
    (t, n = ee) =>
      (!At || e === "sp") && en(e, t, n),
  Ci = Pe("bm"),
  tn = Pe("m"),
  Ei = Pe("bu"),
  Ti = Pe("u"),
  Fr = Pe("bum"),
  Zn = Pe("um"),
  wi = Pe("sp"),
  Ai = Pe("rtg"),
  Ii = Pe("rtc");
function Oi(e, t = ee) {
  en("ec", e, t);
}
let wn = !0;
function Fi(e) {
  const t = Pr(e),
    n = e.proxy,
    s = e.ctx;
  (wn = !1), t.beforeCreate && Cs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: f,
    inject: a,
    created: h,
    beforeMount: m,
    mounted: b,
    beforeUpdate: T,
    updated: O,
    activated: P,
    deactivated: N,
    beforeDestroy: S,
    beforeUnmount: se,
    destroyed: V,
    unmounted: z,
    render: re,
    renderTracked: we,
    renderTriggered: H,
    errorCaptured: X,
    serverPrefetch: W,
    expose: ie,
    inheritAttrs: ne,
    components: I,
    directives: J,
    filters: ye,
  } = t;
  if ((a && Mi(a, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const q in i) {
      const k = i[q];
      L(k) && (s[q] = k.bind(n));
    }
  if (r) {
    const q = r.call(n, n);
    Y(q) && (e.data = Wn(q));
  }
  if (((wn = !0), o))
    for (const q in o) {
      const k = o[q],
        Ae = L(k) ? k.bind(n, n) : L(k.get) ? k.get.bind(n, n) : be,
        sn = !L(k) && L(k.set) ? k.set.bind(n) : be,
        pt = ot({ get: Ae, set: sn });
      Object.defineProperty(s, q, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Qe) => (pt.value = Qe),
      });
    }
  if (c) for (const q in c) Mr(c[q], s, n, q);
  if (f) {
    const q = L(f) ? f.call(n) : f;
    Reflect.ownKeys(q).forEach((k) => {
      pi(k, q[k]);
    });
  }
  h && Cs(h, e, "c");
  function G(q, k) {
    F(k) ? k.forEach((Ae) => q(Ae.bind(n))) : k && q(k.bind(n));
  }
  if (
    (G(Ci, m),
    G(tn, b),
    G(Ei, T),
    G(Ti, O),
    G(yi, P),
    G(xi, N),
    G(Oi, X),
    G(Ii, we),
    G(Ai, H),
    G(Fr, se),
    G(Zn, z),
    G(wi, W),
    F(ie))
  )
    if (ie.length) {
      const q = e.exposed || (e.exposed = {});
      ie.forEach((k) => {
        Object.defineProperty(q, k, {
          get: () => n[k],
          set: (Ae) => (n[k] = Ae),
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === be && (e.render = re),
    ne != null && (e.inheritAttrs = ne),
    I && (e.components = I),
    J && (e.directives = J);
}
function Mi(e, t, n = be, s = !1) {
  F(e) && (e = An(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Y(o)
      ? "default" in o
        ? (i = dn(o.from || r, o.default, !0))
        : (i = dn(o.from || r))
      : (i = dn(o)),
      Z(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (c) => (i.value = c),
          })
        : (t[r] = i);
  }
}
function Cs(e, t, n) {
  ge(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mr(e, t, n, s) {
  const r = s.includes(".") ? Tr(n, s) : () => n[s];
  if (Q(e)) {
    const o = t[e];
    L(o) && Rt(r, o);
  } else if (L(e)) Rt(r, e.bind(n));
  else if (Y(e))
    if (F(e)) e.forEach((o) => Mr(o, t, n, s));
    else {
      const o = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(o) && Rt(r, o, e);
    }
}
function Pr(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let f;
  return (
    c
      ? (f = c)
      : !r.length && !n && !s
      ? (f = t)
      : ((f = {}), r.length && r.forEach((a) => Ut(f, a, i, !0)), Ut(f, t, i)),
    o.set(t, f),
    f
  );
}
function Ut(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Ut(e, o, n, !0), r && r.forEach((i) => Ut(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = Pi[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Pi = {
  data: Es,
  props: ze,
  emits: ze,
  methods: ze,
  computed: ze,
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  components: ze,
  directives: ze,
  watch: Li,
  provide: Es,
  inject: Ni,
};
function Es(e, t) {
  return t
    ? e
      ? function () {
          return te(
            L(e) ? e.call(this, this) : e,
            L(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ni(e, t) {
  return ze(An(e), An(t));
}
function An(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ze(e, t) {
  return e ? te(te(Object.create(null), e), t) : t;
}
function Li(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = te(Object.create(null), e);
  for (const s in t) n[s] = oe(e[s], t[s]);
  return n;
}
function Ri(e, t, n, s = !1) {
  const r = {},
    o = {};
  Ht(o, nn, 1), (e.propsDefaults = Object.create(null)), Nr(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : zo(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function Si(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = $(r),
    [f] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        let b = h[m];
        if (Zt(e.emitsOptions, b)) continue;
        const T = t[b];
        if (f)
          if (R(o, b)) T !== o[b] && ((o[b] = T), (a = !0));
          else {
            const O = ft(b);
            r[O] = In(f, c, O, T, e, !1);
          }
        else T !== o[b] && ((o[b] = T), (a = !0));
      }
    }
  } else {
    Nr(e, t, r, o) && (a = !0);
    let h;
    for (const m in c)
      (!t || (!R(t, m) && ((h = at(m)) === m || !R(t, h)))) &&
        (f
          ? n &&
            (n[m] !== void 0 || n[h] !== void 0) &&
            (r[m] = In(f, c, m, void 0, e, !0))
          : delete r[m]);
    if (o !== c)
      for (const m in o) (!t || (!R(t, m) && !0)) && (delete o[m], (a = !0));
  }
  a && Me(e, "set", "$attrs");
}
function Nr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let f in t) {
      if (Lt(f)) continue;
      const a = t[f];
      let h;
      r && R(r, (h = ft(f)))
        ? !o || !o.includes(h)
          ? (n[h] = a)
          : ((c || (c = {}))[h] = a)
        : Zt(e.emitsOptions, f) ||
          ((!(f in s) || a !== s[f]) && ((s[f] = a), (i = !0)));
    }
  if (o) {
    const f = $(n),
      a = c || D;
    for (let h = 0; h < o.length; h++) {
      const m = o[h];
      n[m] = In(r, f, m, a[m], e, !R(a, m));
    }
  }
  return i;
}
function In(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && s === void 0) {
      const f = i.default;
      if (i.type !== Function && L(f)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (ut(r), (s = a[n] = f.call(null, t)), Ye());
      } else s = f;
    }
    i[0] &&
      (o && !c ? (s = !1) : i[1] && (s === "" || s === at(n)) && (s = !0));
  }
  return s;
}
function Lr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    c = [];
  let f = !1;
  if (!L(e)) {
    const h = (m) => {
      f = !0;
      const [b, T] = Lr(m, t, !0);
      te(i, b), T && c.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!o && !f) return s.set(e, it), it;
  if (F(o))
    for (let h = 0; h < o.length; h++) {
      const m = ft(o[h]);
      Ts(m) && (i[m] = D);
    }
  else if (o)
    for (const h in o) {
      const m = ft(h);
      if (Ts(m)) {
        const b = o[h],
          T = (i[m] = F(b) || L(b) ? { type: b } : b);
        if (T) {
          const O = Is(Boolean, T.type),
            P = Is(String, T.type);
          (T[0] = O > -1),
            (T[1] = P < 0 || O < P),
            (O > -1 || R(T, "default")) && c.push(m);
        }
      }
    }
  const a = [i, c];
  return s.set(e, a), a;
}
function Ts(e) {
  return e[0] !== "$";
}
function ws(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function As(e, t) {
  return ws(e) === ws(t);
}
function Is(e, t) {
  return F(t) ? t.findIndex((n) => As(n, e)) : L(t) && As(t, e) ? 0 : -1;
}
const Rr = (e) => e[0] === "_" || e === "$stable",
  Qn = (e) => (F(e) ? e.map(Ee) : [Ee(e)]),
  Bi = (e, t, n) => {
    const s = Er((...r) => Qn(t(...r)), n);
    return (s._c = !1), s;
  },
  Sr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Rr(r)) continue;
      const o = e[r];
      if (L(o)) t[r] = Bi(r, o, s);
      else if (o != null) {
        const i = Qn(o);
        t[r] = () => i;
      }
    }
  },
  Br = (e, t) => {
    const n = Qn(t);
    e.slots.default = () => n;
  },
  $i = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = $(t)), Ht(t, "_", n)) : Sr(t, (e.slots = {}));
    } else (e.slots = {}), t && Br(e, t);
    Ht(e.slots, nn, 1);
  },
  Hi = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = D;
    if (s.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (o = !1)
          : (te(r, t), !n && c === 1 && delete r._)
        : ((o = !t.$stable), Sr(t, r)),
        (i = t);
    } else t && (Br(e, t), (i = { default: 1 }));
    if (o) for (const c in r) !Rr(c) && !(c in i) && delete r[c];
  };
function ke(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let f = c.dir[s];
    f && (dt(), ge(f, n, 8, [e.el, c, e, t]), ht());
  }
}
function $r() {
  return {
    app: null,
    config: {
      isNativeTag: fo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ji = 0;
function Di(e, t) {
  return function (s, r = null) {
    L(s) || (s = Object.assign({}, s)), r != null && !Y(r) && (r = null);
    const o = $r(),
      i = new Set();
    let c = !1;
    const f = (o.app = {
      _uid: ji++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: ll,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && L(a.install)
              ? (i.add(a), a.install(f, ...h))
              : L(a) && (i.add(a), a(f, ...h))),
          f
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), f;
      },
      component(a, h) {
        return h ? ((o.components[a] = h), f) : o.components[a];
      },
      directive(a, h) {
        return h ? ((o.directives[a] = h), f) : o.directives[a];
      },
      mount(a, h, m) {
        if (!c) {
          const b = pe(s, r);
          return (
            (b.appContext = o),
            h && t ? t(b, a) : e(b, a, m),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            ts(b.component) || b.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, h) {
        return (o.provides[a] = h), f;
      },
    });
    return f;
  };
}
function On(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((b, T) => On(b, t && (F(t) ? t[T] : t), n, s, r));
    return;
  }
  if (Tn(s) && !r) return;
  const o = s.shapeFlag & 4 ? ts(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: c, r: f } = e,
    a = t && t.r,
    h = c.refs === D ? (c.refs = {}) : c.refs,
    m = c.setupState;
  if (
    (a != null &&
      a !== f &&
      (Q(a)
        ? ((h[a] = null), R(m, a) && (m[a] = null))
        : Z(a) && (a.value = null)),
    L(f))
  )
    je(f, c, 12, [i, h]);
  else {
    const b = Q(f),
      T = Z(f);
    if (b || T) {
      const O = () => {
        if (e.f) {
          const P = b ? h[f] : f.value;
          r
            ? F(P) && $n(P, o)
            : F(P)
            ? P.includes(o) || P.push(o)
            : b
            ? ((h[f] = [o]), R(m, f) && (m[f] = h[f]))
            : ((f.value = [o]), e.k && (h[e.k] = f.value));
        } else
          b
            ? ((h[f] = i), R(m, f) && (m[f] = i))
            : Z(f) && ((f.value = i), e.k && (h[e.k] = i));
      };
      i ? ((O.id = -1), le(O, n)) : O();
    }
  }
}
const le = hi;
function ki(e) {
  return Ui(e);
}
function Ui(e, t) {
  const n = mo();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: f,
      setText: a,
      setElementText: h,
      parentNode: m,
      nextSibling: b,
      setScopeId: T = be,
      cloneNode: O,
      insertStaticContent: P,
    } = e,
    N = (
      l,
      u,
      d,
      g = null,
      p = null,
      x = null,
      C = !1,
      y = null,
      v = !!u.dynamicChildren
    ) => {
      if (l === u) return;
      l && !We(l, u) && ((g = It(l)), Ne(l, p, x, !0), (l = null)),
        u.patchFlag === -2 && ((v = !1), (u.dynamicChildren = null));
      const { type: _, ref: w, shapeFlag: E } = u;
      switch (_) {
        case Gn:
          S(l, u, d, g);
          break;
        case Fe:
          se(l, u, d, g);
          break;
        case St:
          l == null && V(u, d, g, C);
          break;
        case he:
          J(l, u, d, g, p, x, C, y, v);
          break;
        default:
          E & 1
            ? we(l, u, d, g, p, x, C, y, v)
            : E & 6
            ? ye(l, u, d, g, p, x, C, y, v)
            : (E & 64 || E & 128) && _.process(l, u, d, g, p, x, C, y, v, Ge);
      }
      w != null && p && On(w, l && l.ref, x, u || l, !u);
    },
    S = (l, u, d, g) => {
      if (l == null) s((u.el = c(u.children)), d, g);
      else {
        const p = (u.el = l.el);
        u.children !== l.children && a(p, u.children);
      }
    },
    se = (l, u, d, g) => {
      l == null ? s((u.el = f(u.children || "")), d, g) : (u.el = l.el);
    },
    V = (l, u, d, g) => {
      [l.el, l.anchor] = P(l.children, u, d, g, l.el, l.anchor);
    },
    z = ({ el: l, anchor: u }, d, g) => {
      let p;
      for (; l && l !== u; ) (p = b(l)), s(l, d, g), (l = p);
      s(u, d, g);
    },
    re = ({ el: l, anchor: u }) => {
      let d;
      for (; l && l !== u; ) (d = b(l)), r(l), (l = d);
      r(u);
    },
    we = (l, u, d, g, p, x, C, y, v) => {
      (C = C || u.type === "svg"),
        l == null ? H(u, d, g, p, x, C, y, v) : ie(l, u, p, x, C, y, v);
    },
    H = (l, u, d, g, p, x, C, y) => {
      let v, _;
      const {
        type: w,
        props: E,
        shapeFlag: A,
        transition: M,
        patchFlag: B,
        dirs: K,
      } = l;
      if (l.el && O !== void 0 && B === -1) v = l.el = O(l.el);
      else {
        if (
          ((v = l.el = i(l.type, x, E && E.is, E)),
          A & 8
            ? h(v, l.children)
            : A & 16 &&
              W(l.children, v, null, g, p, x && w !== "foreignObject", C, y),
          K && ke(l, null, g, "created"),
          E)
        ) {
          for (const U in E)
            U !== "value" &&
              !Lt(U) &&
              o(v, U, null, E[U], x, l.children, g, p, Ie);
          "value" in E && o(v, "value", null, E.value),
            (_ = E.onVnodeBeforeMount) && ve(_, g, l);
        }
        X(v, l, l.scopeId, C, g);
      }
      K && ke(l, null, g, "beforeMount");
      const j = (!p || (p && !p.pendingBranch)) && M && !M.persisted;
      j && M.beforeEnter(v),
        s(v, u, d),
        ((_ = E && E.onVnodeMounted) || j || K) &&
          le(() => {
            _ && ve(_, g, l), j && M.enter(v), K && ke(l, null, g, "mounted");
          }, p);
    },
    X = (l, u, d, g, p) => {
      if ((d && T(l, d), g)) for (let x = 0; x < g.length; x++) T(l, g[x]);
      if (p) {
        let x = p.subTree;
        if (u === x) {
          const C = p.vnode;
          X(l, C, C.scopeId, C.slotScopeIds, p.parent);
        }
      }
    },
    W = (l, u, d, g, p, x, C, y, v = 0) => {
      for (let _ = v; _ < l.length; _++) {
        const w = (l[_] = y ? $e(l[_]) : Ee(l[_]));
        N(null, w, u, d, g, p, x, C, y);
      }
    },
    ie = (l, u, d, g, p, x, C) => {
      const y = (u.el = l.el);
      let { patchFlag: v, dynamicChildren: _, dirs: w } = u;
      v |= l.patchFlag & 16;
      const E = l.props || D,
        A = u.props || D;
      let M;
      d && Ue(d, !1),
        (M = A.onVnodeBeforeUpdate) && ve(M, d, u, l),
        w && ke(u, l, d, "beforeUpdate"),
        d && Ue(d, !0);
      const B = p && u.type !== "foreignObject";
      if (
        (_
          ? ne(l.dynamicChildren, _, y, d, g, B, x)
          : C || Ae(l, u, y, null, d, g, B, x, !1),
        v > 0)
      ) {
        if (v & 16) I(y, u, E, A, d, g, p);
        else if (
          (v & 2 && E.class !== A.class && o(y, "class", null, A.class, p),
          v & 4 && o(y, "style", E.style, A.style, p),
          v & 8)
        ) {
          const K = u.dynamicProps;
          for (let j = 0; j < K.length; j++) {
            const U = K[j],
              me = E[U],
              et = A[U];
            (et !== me || U === "value") &&
              o(y, U, me, et, p, l.children, d, g, Ie);
          }
        }
        v & 1 && l.children !== u.children && h(y, u.children);
      } else !C && _ == null && I(y, u, E, A, d, g, p);
      ((M = A.onVnodeUpdated) || w) &&
        le(() => {
          M && ve(M, d, u, l), w && ke(u, l, d, "updated");
        }, g);
    },
    ne = (l, u, d, g, p, x, C) => {
      for (let y = 0; y < u.length; y++) {
        const v = l[y],
          _ = u[y],
          w =
            v.el && (v.type === he || !We(v, _) || v.shapeFlag & 70)
              ? m(v.el)
              : d;
        N(v, _, w, null, g, p, x, C, !0);
      }
    },
    I = (l, u, d, g, p, x, C) => {
      if (d !== g) {
        for (const y in g) {
          if (Lt(y)) continue;
          const v = g[y],
            _ = d[y];
          v !== _ && y !== "value" && o(l, y, _, v, C, u.children, p, x, Ie);
        }
        if (d !== D)
          for (const y in d)
            !Lt(y) && !(y in g) && o(l, y, d[y], null, C, u.children, p, x, Ie);
        "value" in g && o(l, "value", d.value, g.value);
      }
    },
    J = (l, u, d, g, p, x, C, y, v) => {
      const _ = (u.el = l ? l.el : c("")),
        w = (u.anchor = l ? l.anchor : c(""));
      let { patchFlag: E, dynamicChildren: A, slotScopeIds: M } = u;
      M && (y = y ? y.concat(M) : M),
        l == null
          ? (s(_, d, g), s(w, d, g), W(u.children, d, w, p, x, C, y, v))
          : E > 0 && E & 64 && A && l.dynamicChildren
          ? (ne(l.dynamicChildren, A, d, p, x, C, y),
            (u.key != null || (p && u === p.subTree)) && Hr(l, u, !0))
          : Ae(l, u, d, w, p, x, C, y, v);
    },
    ye = (l, u, d, g, p, x, C, y, v) => {
      (u.slotScopeIds = y),
        l == null
          ? u.shapeFlag & 512
            ? p.ctx.activate(u, d, g, C, v)
            : Ze(u, d, g, p, x, C, v)
          : G(l, u, v);
    },
    Ze = (l, u, d, g, p, x, C) => {
      const y = (l.component = el(l, g, p));
      if ((Gt(l) && (y.ctx.renderer = Ge), tl(y), y.asyncDep)) {
        if ((p && p.registerDep(y, q), !l.el)) {
          const v = (y.subTree = pe(Fe));
          se(null, v, u, d);
        }
        return;
      }
      q(y, l, u, d, p, x, C);
    },
    G = (l, u, d) => {
      const g = (u.component = l.component);
      if (ui(l, u, d))
        if (g.asyncDep && !g.asyncResolved) {
          k(g, u, d);
          return;
        } else (g.next = u), ni(g.update), g.update();
      else (u.component = l.component), (u.el = l.el), (g.vnode = u);
    },
    q = (l, u, d, g, p, x, C) => {
      const y = () => {
          if (l.isMounted) {
            let { next: w, bu: E, u: A, parent: M, vnode: B } = l,
              K = w,
              j;
            Ue(l, !1),
              w ? ((w.el = B.el), k(l, w, C)) : (w = B),
              E && fn(E),
              (j = w.props && w.props.onVnodeBeforeUpdate) && ve(j, M, w, B),
              Ue(l, !0);
            const U = an(l),
              me = l.subTree;
            (l.subTree = U),
              N(me, U, m(me.el), It(me), l, p, x),
              (w.el = U.el),
              K === null && ai(l, U.el),
              A && le(A, p),
              (j = w.props && w.props.onVnodeUpdated) &&
                le(() => ve(j, M, w, B), p);
          } else {
            let w;
            const { el: E, props: A } = u,
              { bm: M, m: B, parent: K } = l,
              j = Tn(u);
            if (
              (Ue(l, !1),
              M && fn(M),
              !j && (w = A && A.onVnodeBeforeMount) && ve(w, K, u),
              Ue(l, !0),
              E && on)
            ) {
              const U = () => {
                (l.subTree = an(l)), on(E, l.subTree, l, p, null);
              };
              j
                ? u.type.__asyncLoader().then(() => !l.isUnmounted && U())
                : U();
            } else {
              const U = (l.subTree = an(l));
              N(null, U, d, g, l, p, x), (u.el = U.el);
            }
            if ((B && le(B, p), !j && (w = A && A.onVnodeMounted))) {
              const U = u;
              le(() => ve(w, K, U), p);
            }
            u.shapeFlag & 256 && l.a && le(l.a, p),
              (l.isMounted = !0),
              (u = d = g = null);
          }
        },
        v = (l.effect = new kn(y, () => _r(l.update), l.scope)),
        _ = (l.update = v.run.bind(v));
      (_.id = l.uid), Ue(l, !0), _();
    },
    k = (l, u, d) => {
      u.component = l;
      const g = l.vnode.props;
      (l.vnode = u),
        (l.next = null),
        Si(l, u.props, g, d),
        Hi(l, u.children, d),
        dt(),
        Yn(void 0, l.update),
        ht();
    },
    Ae = (l, u, d, g, p, x, C, y, v = !1) => {
      const _ = l && l.children,
        w = l ? l.shapeFlag : 0,
        E = u.children,
        { patchFlag: A, shapeFlag: M } = u;
      if (A > 0) {
        if (A & 128) {
          pt(_, E, d, g, p, x, C, y, v);
          return;
        } else if (A & 256) {
          sn(_, E, d, g, p, x, C, y, v);
          return;
        }
      }
      M & 8
        ? (w & 16 && Ie(_, p, x), E !== _ && h(d, E))
        : w & 16
        ? M & 16
          ? pt(_, E, d, g, p, x, C, y, v)
          : Ie(_, p, x, !0)
        : (w & 8 && h(d, ""), M & 16 && W(E, d, g, p, x, C, y, v));
    },
    sn = (l, u, d, g, p, x, C, y, v) => {
      (l = l || it), (u = u || it);
      const _ = l.length,
        w = u.length,
        E = Math.min(_, w);
      let A;
      for (A = 0; A < E; A++) {
        const M = (u[A] = v ? $e(u[A]) : Ee(u[A]));
        N(l[A], M, d, null, p, x, C, y, v);
      }
      _ > w ? Ie(l, p, x, !0, !1, E) : W(u, d, g, p, x, C, y, v, E);
    },
    pt = (l, u, d, g, p, x, C, y, v) => {
      let _ = 0;
      const w = u.length;
      let E = l.length - 1,
        A = w - 1;
      for (; _ <= E && _ <= A; ) {
        const M = l[_],
          B = (u[_] = v ? $e(u[_]) : Ee(u[_]));
        if (We(M, B)) N(M, B, d, null, p, x, C, y, v);
        else break;
        _++;
      }
      for (; _ <= E && _ <= A; ) {
        const M = l[E],
          B = (u[A] = v ? $e(u[A]) : Ee(u[A]));
        if (We(M, B)) N(M, B, d, null, p, x, C, y, v);
        else break;
        E--, A--;
      }
      if (_ > E) {
        if (_ <= A) {
          const M = A + 1,
            B = M < w ? u[M].el : g;
          for (; _ <= A; )
            N(null, (u[_] = v ? $e(u[_]) : Ee(u[_])), d, B, p, x, C, y, v), _++;
        }
      } else if (_ > A) for (; _ <= E; ) Ne(l[_], p, x, !0), _++;
      else {
        const M = _,
          B = _,
          K = new Map();
        for (_ = B; _ <= A; _++) {
          const fe = (u[_] = v ? $e(u[_]) : Ee(u[_]));
          fe.key != null && K.set(fe.key, _);
        }
        let j,
          U = 0;
        const me = A - B + 1;
        let et = !1,
          os = 0;
        const gt = new Array(me);
        for (_ = 0; _ < me; _++) gt[_] = 0;
        for (_ = M; _ <= E; _++) {
          const fe = l[_];
          if (U >= me) {
            Ne(fe, p, x, !0);
            continue;
          }
          let xe;
          if (fe.key != null) xe = K.get(fe.key);
          else
            for (j = B; j <= A; j++)
              if (gt[j - B] === 0 && We(fe, u[j])) {
                xe = j;
                break;
              }
          xe === void 0
            ? Ne(fe, p, x, !0)
            : ((gt[xe - B] = _ + 1),
              xe >= os ? (os = xe) : (et = !0),
              N(fe, u[xe], d, null, p, x, C, y, v),
              U++);
        }
        const is = et ? Ki(gt) : it;
        for (j = is.length - 1, _ = me - 1; _ >= 0; _--) {
          const fe = B + _,
            xe = u[fe],
            ls = fe + 1 < w ? u[fe + 1].el : g;
          gt[_] === 0
            ? N(null, xe, d, ls, p, x, C, y, v)
            : et && (j < 0 || _ !== is[j] ? Qe(xe, d, ls, 2) : j--);
        }
      }
    },
    Qe = (l, u, d, g, p = null) => {
      const { el: x, type: C, transition: y, children: v, shapeFlag: _ } = l;
      if (_ & 6) {
        Qe(l.component.subTree, u, d, g);
        return;
      }
      if (_ & 128) {
        l.suspense.move(u, d, g);
        return;
      }
      if (_ & 64) {
        C.move(l, u, d, Ge);
        return;
      }
      if (C === he) {
        s(x, u, d);
        for (let E = 0; E < v.length; E++) Qe(v[E], u, d, g);
        s(l.anchor, u, d);
        return;
      }
      if (C === St) {
        z(l, u, d);
        return;
      }
      if (g !== 2 && _ & 1 && y)
        if (g === 0) y.beforeEnter(x), s(x, u, d), le(() => y.enter(x), p);
        else {
          const { leave: E, delayLeave: A, afterLeave: M } = y,
            B = () => s(x, u, d),
            K = () => {
              E(x, () => {
                B(), M && M();
              });
            };
          A ? A(x, B, K) : K();
        }
      else s(x, u, d);
    },
    Ne = (l, u, d, g = !1, p = !1) => {
      const {
        type: x,
        props: C,
        ref: y,
        children: v,
        dynamicChildren: _,
        shapeFlag: w,
        patchFlag: E,
        dirs: A,
      } = l;
      if ((y != null && On(y, null, d, l, !0), w & 256)) {
        u.ctx.deactivate(l);
        return;
      }
      const M = w & 1 && A,
        B = !Tn(l);
      let K;
      if ((B && (K = C && C.onVnodeBeforeUnmount) && ve(K, u, l), w & 6))
        Zr(l.component, d, g);
      else {
        if (w & 128) {
          l.suspense.unmount(d, g);
          return;
        }
        M && ke(l, null, u, "beforeUnmount"),
          w & 64
            ? l.type.remove(l, u, d, p, Ge, g)
            : _ && (x !== he || (E > 0 && E & 64))
            ? Ie(_, u, d, !1, !0)
            : ((x === he && E & 384) || (!p && w & 16)) && Ie(v, u, d),
          g && ss(l);
      }
      ((B && (K = C && C.onVnodeUnmounted)) || M) &&
        le(() => {
          K && ve(K, u, l), M && ke(l, null, u, "unmounted");
        }, d);
    },
    ss = (l) => {
      const { type: u, el: d, anchor: g, transition: p } = l;
      if (u === he) {
        Xr(d, g);
        return;
      }
      if (u === St) {
        re(l);
        return;
      }
      const x = () => {
        r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (l.shapeFlag & 1 && p && !p.persisted) {
        const { leave: C, delayLeave: y } = p,
          v = () => C(d, x);
        y ? y(l.el, x, v) : v();
      } else x();
    },
    Xr = (l, u) => {
      let d;
      for (; l !== u; ) (d = b(l)), r(l), (l = d);
      r(u);
    },
    Zr = (l, u, d) => {
      const { bum: g, scope: p, update: x, subTree: C, um: y } = l;
      g && fn(g),
        p.stop(),
        x && ((x.active = !1), Ne(C, l, u, d)),
        y && le(y, u),
        le(() => {
          l.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Ie = (l, u, d, g = !1, p = !1, x = 0) => {
      for (let C = x; C < l.length; C++) Ne(l[C], u, d, g, p);
    },
    It = (l) =>
      l.shapeFlag & 6
        ? It(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : b(l.anchor || l.el),
    rs = (l, u, d) => {
      l == null
        ? u._vnode && Ne(u._vnode, null, null, !0)
        : N(u._vnode || null, l, u, null, null, null, d),
        xr(),
        (u._vnode = l);
    },
    Ge = {
      p: N,
      um: Ne,
      m: Qe,
      r: ss,
      mt: Ze,
      mc: W,
      pc: Ae,
      pbc: ne,
      n: It,
      o: e,
    };
  let rn, on;
  return (
    t && ([rn, on] = t(Ge)), { render: rs, hydrate: rn, createApp: Di(rs, rn) }
  );
}
function Ue({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Hr(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[o] = $e(r[o])), (c.el = i.el)),
        n || Hr(i, c));
    }
}
function Ki(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, c;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < a ? (o = c + 1) : (i = c);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const zi = (e) => e.__isTeleport,
  Wi = Symbol(),
  he = Symbol(void 0),
  Gn = Symbol(void 0),
  Fe = Symbol(void 0),
  St = Symbol(void 0),
  vt = [];
let Je = null;
function Bt(e = !1) {
  vt.push((Je = e ? null : []));
}
function qi() {
  vt.pop(), (Je = vt[vt.length - 1] || null);
}
let Kt = 1;
function Os(e) {
  Kt += e;
}
function jr(e) {
  return (
    (e.dynamicChildren = Kt > 0 ? Je || it : null),
    qi(),
    Kt > 0 && Je && Je.push(e),
    e
  );
}
function Fs(e, t, n, s, r, o) {
  return jr(ce(e, t, n, s, r, o, !0));
}
function Dr(e, t, n, s, r) {
  return jr(pe(e, t, n, s, r, !0));
}
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function We(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nn = "__vInternal",
  kr = ({ key: e }) => (e != null ? e : null),
  $t = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Q(e) || Z(e) || L(e)
        ? { i: Te, r: e, k: t, f: !!n }
        : e
      : null;
function ce(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === he ? 0 : 1,
  i = !1,
  c = !1
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kr(t),
    ref: t && $t(t),
    scopeId: Qt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    c
      ? (es(f, n), o & 128 && e.normalize(f))
      : n && (f.shapeFlag |= Q(n) ? 8 : 16),
    Kt > 0 &&
      !i &&
      Je &&
      (f.patchFlag > 0 || o & 6) &&
      f.patchFlag !== 32 &&
      Je.push(f),
    f
  );
}
const pe = Vi;
function Vi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Wi) && (e = Fe), Fn(e))) {
    const c = Xe(e, t, !0);
    return n && es(c, n), c;
  }
  if ((ol(e) && (e = e.__vccOpts), t)) {
    t = Ji(t);
    let { class: c, style: f } = t;
    c && !Q(c) && (t.class = Sn(c)),
      Y(f) && (ar(f) && !F(f) && (f = te({}, f)), (t.style = Wt(f)));
  }
  const i = Q(e) ? 1 : di(e) ? 128 : zi(e) ? 64 : Y(e) ? 4 : L(e) ? 2 : 0;
  return ce(e, t, n, s, r, i, o, !0);
}
function Ji(e) {
  return e ? (ar(e) || nn in e ? te({}, e) : e) : null;
}
function Xe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    c = t ? Yi(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && kr(c),
    ref:
      t && t.ref ? (n && r ? (F(r) ? r.concat($t(t)) : [r, $t(t)]) : $t(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Ur(e = " ", t = 0) {
  return pe(Gn, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean"
    ? pe(Fe)
    : F(e)
    ? pe(he, null, e.slice())
    : typeof e == "object"
    ? $e(e)
    : pe(Gn, null, String(e));
}
function $e(e) {
  return e.el === null || e.memo ? e : Xe(e);
}
function es(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), es(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(nn in t)
        ? (t._ctx = Te)
        : r === 3 &&
          Te &&
          (Te.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    L(t)
      ? ((t = { default: t, _ctx: Te }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ur(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Sn([t.class, s.class]));
      else if (r === "style") t.style = Wt([t.style, s.style]);
      else if (qt(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(F(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ve(e, t, n, s = null) {
  ge(e, t, 7, [n, s]);
}
function Xi(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (F(e) || Q(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, f = i.length; c < f; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, o && o[c]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const Mn = (e) => (e ? (zr(e) ? ts(e) || e.proxy : Mn(e.parent)) : null),
  zt = te(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mn(e.parent),
    $root: (e) => Mn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Pr(e),
    $forceUpdate: (e) => () => _r(e.update),
    $nextTick: (e) => ei.bind(e.proxy),
    $watch: (e) => mi.bind(e),
  }),
  Zi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: c,
        appContext: f,
      } = e;
      let a;
      if (t[0] !== "$") {
        const T = i[t];
        if (T !== void 0)
          switch (T) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (s !== D && R(s, t)) return (i[t] = 1), s[t];
          if (r !== D && R(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && R(a, t)) return (i[t] = 3), o[t];
          if (n !== D && R(n, t)) return (i[t] = 4), n[t];
          wn && (i[t] = 0);
        }
      }
      const h = zt[t];
      let m, b;
      if (h) return t === "$attrs" && ae(e, "get", t), h(e);
      if ((m = c.__cssModules) && (m = m[t])) return m;
      if (n !== D && R(n, t)) return (i[t] = 4), n[t];
      if (((b = f.config.globalProperties), R(b, t))) return b[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return r !== D && R(r, t)
        ? ((r[t] = n), !0)
        : s !== D && R(s, t)
        ? ((s[t] = n), !0)
        : R(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== D && R(e, i)) ||
        (t !== D && R(t, i)) ||
        ((c = o[0]) && R(c, i)) ||
        R(s, i) ||
        R(zt, i) ||
        R(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : R(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  Qi = $r();
let Gi = 0;
function el(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Qi,
    o = {
      uid: Gi++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new _o(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Lr(s, r),
      emitsOptions: Cr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: D,
      inheritAttrs: s.inheritAttrs,
      ctx: D,
      data: D,
      props: D,
      attrs: D,
      slots: D,
      refs: D,
      setupState: D,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = oi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ee = null;
const Kr = () => ee || Te,
  ut = (e) => {
    (ee = e), e.scope.on();
  },
  Ye = () => {
    ee && ee.scope.off(), (ee = null);
  };
function zr(e) {
  return e.vnode.shapeFlag & 4;
}
let At = !1;
function tl(e, t = !1) {
  At = t;
  const { props: n, children: s } = e.vnode,
    r = zr(e);
  Ri(e, n, r, t), $i(e, s);
  const o = r ? nl(e, t) : void 0;
  return (At = !1), o;
}
function nl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = dr(new Proxy(e.ctx, Zi)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? rl(e) : null);
    ut(e), dt();
    const o = je(s, e, 0, [e.props, r]);
    if ((ht(), Ye(), Js(o))) {
      if ((o.then(Ye, Ye), t))
        return o
          .then((i) => {
            Ms(e, i, t);
          })
          .catch((i) => {
            Xt(i, e, 0);
          });
      e.asyncDep = o;
    } else Ms(e, o, t);
  } else Wr(e, t);
}
function Ms(e, t, n) {
  L(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Y(t) && (e.setupState = gr(t)),
    Wr(e, n);
}
let Ps;
function Wr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ps && !s.render) {
      const r = s.template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: f } = s,
          a = te(te({ isCustomElement: o, delimiters: c }, i), f);
        s.render = Ps(r, a);
      }
    }
    e.render = s.render || be;
  }
  ut(e), dt(), Fi(e), ht(), Ye();
}
function sl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ae(e, "get", "$attrs"), t[n];
    },
  });
}
function rl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = sl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ts(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(gr(dr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in zt) return zt[n](e);
        },
      }))
    );
}
function ol(e) {
  return L(e) && "__vccOpts" in e;
}
const ot = (e, t) => Qo(e, t, At);
function il(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? Y(t) && !F(t)
      ? Fn(t)
        ? pe(e, null, [t])
        : pe(e, t)
      : pe(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Fn(n) && (n = [n]),
      pe(e, t, n));
}
const ll = "3.2.33",
  cl = "http://www.w3.org/2000/svg",
  qe = typeof document != "undefined" ? document : null,
  Ns = qe && qe.createElement("template"),
  fl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? qe.createElementNS(cl, e)
        : qe.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Ns.innerHTML = s ? `<svg>${e}</svg>` : e;
        const c = Ns.content;
        if (s) {
          const f = c.firstChild;
          for (; f.firstChild; ) c.appendChild(f.firstChild);
          c.removeChild(f);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function ul(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function al(e, t, n) {
  const s = e.style,
    r = Q(n);
  if (n && !r) {
    for (const o in n) Pn(s, o, n[o]);
    if (t && !Q(t)) for (const o in t) n[o] == null && Pn(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = o);
  }
}
const Ls = /\s*!important$/;
function Pn(e, t, n) {
  if (F(n)) n.forEach((s) => Pn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = dl(e, t);
    Ls.test(n)
      ? e.setProperty(at(s), n.replace(Ls, ""), "important")
      : (e[s] = n);
  }
}
const Rs = ["Webkit", "Moz", "ms"],
  pn = {};
function dl(e, t) {
  const n = pn[t];
  if (n) return n;
  let s = ft(t);
  if (s !== "filter" && s in e) return (pn[t] = s);
  s = Zs(s);
  for (let r = 0; r < Rs.length; r++) {
    const o = Rs[r] + s;
    if (o in e) return (pn[t] = o);
  }
  return t;
}
const Ss = "http://www.w3.org/1999/xlink";
function hl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Ss, t.slice(6, t.length))
      : e.setAttributeNS(Ss, t, n);
  else {
    const o = oo(t);
    n == null || (o && !Ws(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function pl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const f = n == null ? "" : n;
    (e.value !== f || e.tagName === "OPTION") && (e.value = f),
      n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean"
      ? (n = Ws(n))
      : n == null && f === "string"
      ? ((n = ""), (c = !0))
      : f === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
const [qr, gl] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = () => performance.now());
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Nn = 0;
const ml = Promise.resolve(),
  _l = () => {
    Nn = 0;
  },
  bl = () => Nn || (ml.then(_l), (Nn = qr()));
function yl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function xl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function vl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [c, f] = Cl(t);
    if (s) {
      const a = (o[t] = El(s, r));
      yl(e, c, a, f);
    } else i && (xl(e, c, i, f), (o[t] = void 0));
  }
}
const Bs = /(?:Once|Passive|Capture)$/;
function Cl(e) {
  let t;
  if (Bs.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Bs)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [at(e.slice(2)), t];
}
function El(e, t) {
  const n = (s) => {
    const r = s.timeStamp || qr();
    (gl || r >= n.attached - 1) && ge(Tl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = bl()), n;
}
function Tl(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const $s = /^on[a-z]/,
  wl = (e, t, n, s, r = !1, o, i, c, f) => {
    t === "class"
      ? ul(e, s, r)
      : t === "style"
      ? al(e, n, s)
      : qt(t)
      ? Bn(t) || vl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Al(e, t, s, r)
        )
      ? pl(e, t, s, o, i, c, f)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        hl(e, t, s, r));
  };
function Al(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && $s.test(t) && L(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      ($s.test(t) && Q(n))
    ? !1
    : t in e;
}
function Il(e) {
  const t = Kr();
  if (!t) return;
  const n = () => Ln(t.subTree, e(t.proxy));
  gi(n),
    tn(() => {
      const s = new MutationObserver(n);
      s.observe(t.subTree.el.parentNode, { childList: !0 }),
        Zn(() => s.disconnect());
    });
}
function Ln(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Ln(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Hs(e.el, t);
  else if (e.type === he) e.children.forEach((n) => Ln(n, t));
  else if (e.type === St) {
    let { el: n, anchor: s } = e;
    for (; n && (Hs(n, t), n !== s); ) n = n.nextSibling;
  }
}
function Hs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t) n.setProperty(`--${s}`, t[s]);
  }
}
const Re = "transition",
  mt = "animation",
  ns = (e, { slots: t }) => il(wr, Ol(e), t);
ns.displayName = "Transition";
const Vr = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ns.props = te({}, wr.props, Vr);
const Ke = (e, t = []) => {
    F(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  js = (e) => (e ? (F(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ol(e) {
  const t = {};
  for (const I in e) I in Vr || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: c = `${n}-enter-to`,
      appearFromClass: f = o,
      appearActiveClass: a = i,
      appearToClass: h = c,
      leaveFromClass: m = `${n}-leave-from`,
      leaveActiveClass: b = `${n}-leave-active`,
      leaveToClass: T = `${n}-leave-to`,
    } = e,
    O = Fl(r),
    P = O && O[0],
    N = O && O[1],
    {
      onBeforeEnter: S,
      onEnter: se,
      onEnterCancelled: V,
      onLeave: z,
      onLeaveCancelled: re,
      onBeforeAppear: we = S,
      onAppear: H = se,
      onAppearCancelled: X = V,
    } = t,
    W = (I, J, ye) => {
      tt(I, J ? h : c), tt(I, J ? a : i), ye && ye();
    },
    ie = (I, J) => {
      tt(I, T), tt(I, b), J && J();
    },
    ne = (I) => (J, ye) => {
      const Ze = I ? H : se,
        G = () => W(J, I, ye);
      Ke(Ze, [J, G]),
        Ds(() => {
          tt(J, I ? f : o), Se(J, I ? h : c), js(Ze) || ks(J, s, P, G);
        });
    };
  return te(t, {
    onBeforeEnter(I) {
      Ke(S, [I]), Se(I, o), Se(I, i);
    },
    onBeforeAppear(I) {
      Ke(we, [I]), Se(I, f), Se(I, a);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(I, J) {
      const ye = () => ie(I, J);
      Se(I, m),
        Nl(),
        Se(I, b),
        Ds(() => {
          tt(I, m), Se(I, T), js(z) || ks(I, s, N, ye);
        }),
        Ke(z, [I, ye]);
    },
    onEnterCancelled(I) {
      W(I, !1), Ke(V, [I]);
    },
    onAppearCancelled(I) {
      W(I, !0), Ke(X, [I]);
    },
    onLeaveCancelled(I) {
      ie(I), Ke(re, [I]);
    },
  });
}
function Fl(e) {
  if (e == null) return null;
  if (Y(e)) return [gn(e.enter), gn(e.leave)];
  {
    const t = gn(e);
    return [t, t];
  }
}
function gn(e) {
  return Qs(e);
}
function Se(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function tt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ds(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ml = 0;
function ks(e, t, n, s) {
  const r = (e._endId = ++Ml),
    o = () => {
      r === e._endId && s();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: c, propCount: f } = Pl(e, t);
  if (!i) return s();
  const a = i + "end";
  let h = 0;
  const m = () => {
      e.removeEventListener(a, b), o();
    },
    b = (T) => {
      T.target === e && ++h >= f && m();
    };
  setTimeout(() => {
    h < f && m();
  }, c + 1),
    e.addEventListener(a, b);
}
function Pl(e, t) {
  const n = window.getComputedStyle(e),
    s = (O) => (n[O] || "").split(", "),
    r = s(Re + "Delay"),
    o = s(Re + "Duration"),
    i = Us(r, o),
    c = s(mt + "Delay"),
    f = s(mt + "Duration"),
    a = Us(c, f);
  let h = null,
    m = 0,
    b = 0;
  t === Re
    ? i > 0 && ((h = Re), (m = i), (b = o.length))
    : t === mt
    ? a > 0 && ((h = mt), (m = a), (b = f.length))
    : ((m = Math.max(i, a)),
      (h = m > 0 ? (i > a ? Re : mt) : null),
      (b = h ? (h === Re ? o.length : f.length) : 0));
  const T = h === Re && /\b(transform|all)(,|$)/.test(n[Re + "Property"]);
  return { type: h, timeout: m, propCount: b, hasTransform: T };
}
function Us(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Ks(n) + Ks(e[s])));
}
function Ks(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nl() {
  return document.body.offsetHeight;
}
const Ll = te({ patchProp: wl }, fl);
let zs;
function Rl() {
  return zs || (zs = ki(Ll));
}
const Sl = (...e) => {
  const t = Rl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Bl(s);
      if (!r) return;
      const o = t._component;
      !L(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Bl(e) {
  return Q(e) ? document.querySelector(e) : e;
}
var Jr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t) n[s] = r;
  return n;
};
const $l = {
  props: { card: { type: Object, required: !0 } },
  setup(e) {
    const t = e,
      { solved: n, peek: s, apeNumber: r } = Jo(t.card),
      o = ot(() =>
        n.value || s.value
          ? {
              "background-image": `url("https://thisboredapedoesnotexist.com/images/${r.value}.jpg")`,
              "background-size": "cover",
              transition: "all 0.4s ease",
              transform: "rotateY(180deg)",
            }
          : {}
      );
    return (i, c) => (
      Bt(),
      Dr(ns, null, {
        default: Er(() => [
          ce("div", null, [
            ce("div", { class: "card", style: Wt(jt(o)) }, null, 4),
          ]),
        ]),
        _: 1,
      })
    );
  },
};
var Hl = Jr($l, [["__scopeId", "data-v-3f17c05d"]]);
const Yr = (e) => (ii("data-v-e23c7434"), (e = e()), li(), e),
  jl = { class: "app" },
  Dl = Yr(() =>
    ce("div", { class: "header" }, [ce("h1", null, "Vue.js Puzzle")], -1)
  ),
  kl = { class: "controls" },
  Ul = ["disabled"],
  Kl = ["disabled"],
  zl = { style: { "text-align": "right", "padding-right": "20px" } },
  Wl = { class: "main" },
  ql = Yr(() =>
    ce("div", { class: "footer" }, [ce("hr"), Ur(" 2022 J. Crhonek ")], -1)
  ),
  Vl = {
    setup(e) {
      Il((h) => ({ "3ff5098c": t.value }));
      const t = un(4),
        n = un(0),
        s = ot(() => (t.value % 2 === 0 ? t.value ** 2 : t.value ** 2 - 1)),
        r = un([]);
      function o() {
        const h = () => Math.floor(Math.random() * 1e4),
          m = (T) =>
            T.map((O) => ({ val: O, r: Math.random() }))
              .sort((O, P) => O.r - P.r)
              .map((O) => O.val),
          b = [];
        for (let T = 0; T < s.value / 2; T++) {
          const O = h(),
            P = { key: `${O}A`, apeNumber: O, solved: !1, peek: !1 };
          b.push(P, as(us({}, P), { key: `${O}B` }));
        }
        (r.value = m(b)), (n.value = 0);
      }
      const i = ot(() => r.value.filter((h) => h.peek));
      function c(h) {
        if (
          !(h.peek || h.solved) &&
          ((n.value = n.value + 1),
          i.value.length === 2 && r.value.forEach((m) => (m.peek = !1)),
          (h.peek = !0),
          i.value.length === 2 && i.value[0].apeNumber === i.value[1].apeNumber)
        )
          for (const m of r.value) m.peek && (m.solved = !0);
      }
      const f = ot(() => r.value.filter((h) => h.solved).length / 2),
        a = ot(() => ((100 * f.value) / Math.floor(n.value / 2)).toFixed(2));
      return (
        tn(() => o()),
        Rt(t, () => o()),
        (h, m) => (
          Bt(),
          Fs("div", jl, [
            Dl,
            ce("div", kl, [
              ce("button", { onClick: o }, "Restart"),
              ce(
                "button",
                {
                  onClick: m[0] || (m[0] = (b) => t.value--),
                  disabled: t.value <= 3,
                },
                "Size -",
                8,
                Ul
              ),
              ce(
                "button",
                {
                  onClick: m[1] || (m[1] = (b) => t.value++),
                  disabled: t.value >= 8,
                },
                "Size +",
                8,
                Kl
              ),
              ce(
                "h3",
                zl,
                " Score: " +
                  ln(jt(f)) +
                  " Attempts: " +
                  ln(Math.floor(n.value / 2)) +
                  " (Accuracy: " +
                  ln(jt(a)) +
                  "%) ",
                1
              ),
            ]),
            ce("div", Wl, [
              (Bt(!0),
              Fs(
                he,
                null,
                Xi(
                  r.value,
                  (b) => (
                    Bt(),
                    Dr(
                      Hl,
                      { card: b, key: b.key, onClick: (T) => c(b) },
                      null,
                      8,
                      ["card", "onClick"]
                    )
                  )
                ),
                128
              )),
            ]),
            ql,
          ])
        )
      );
    },
  };
var Jl = Jr(Vl, [["__scopeId", "data-v-e23c7434"]]);
Sl(Jl).mount("#app");
