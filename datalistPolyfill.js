! function() {
  "use strict";
  var u = window.document,
    e = window.navigator.userAgent,
    t = "list" in u.createElement("input") && Boolean(u.createElement("datalist") && window.HTMLDataListElement),
    s = Boolean(-1 !== e.indexOf("Trident/") || -1 !== e.indexOf("Edge/"));
  if (t && !s) return;
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector);
  var d = !1,
    p = 13,
    c = 27,
    v = 38,
    y = 40,
    g = " / ",
    l = ["text", "email", "number", "search", "tel", "url"],
    r = "polyfilled",
    f = "polyfilling",
    i = "###[P0LYFlLLed]###";
  window.addEventListener("touchstart", function e() {
    d = !0, window.removeEventListener("touchstart", e)
  });
  var a = window.MutationObserver || window.WebKitMutationObserver,
    m;
  void 0 !== a && (m = new a(function(e) {
    var a = !1;
    if (e.forEach(function(e) {
        for (var t = 0; t < e.addedNodes.length; ++t) "datalist" === e.target.tagName.toLowerCase() && (a = e.target)
      }), a) {
      var t = u.querySelector('input[list="' + a.id + '"]');
      "" !== t.value && T(C(a, t).length, a.getElementsByClassName(f)[0])
    }
  }));
  var o = function(e) {
      var t = e.target,
        a = t.list,
        i = e.keyCode === v || e.keyCode === y;
      if ("input" === t.tagName.toLowerCase() && null !== a)
        if (s)
          "" === t.value || i || e.keyCode === p || e.keyCode === c || (b(t, a), t.focus());
        else {
          var n = !1,
            r = a.getElementsByClassName(f)[0] || L(t, a);
          if (e.keyCode !== c && e.keyCode !== p && ("" !== t.value || i) && void 0 !== r) {
            0 < C(a, t).length && (n = !0);
            var o = 0,
              l = r.options.length - 1;
            d ? r.selectedIndex = 0 : i && "number" !== t.getAttribute("type") && (r.selectedIndex = e.keyCode === v ? l : 0, r.focus())
          }
          T(n, r)
        }
    },
    b = function(a, e) {
      Array.prototype.slice.call(e.options, 0).forEach(function(e) {
        var t = e.dataset.originalvalue || e.value;
        e.dataset.originalvalue || (e.dataset.originalvalue = t), e.label || e.text || (e.label = t), e.value = w(e, a.value) ? a.value + i + t.toLowerCase() : t
      })
    },
    h = function(e) {
      var t = e.target,
        a = t.list;
      if (t.matches("input[list]") && t.matches("." + r) && a) {
        var i = a.querySelector('option[value="' + t.value.replace(/\\([\s\S])|(")/g, "\\$1$2") + '"]');
        i && i.dataset.originalvalue && (t.value = i.dataset.originalvalue)
      }
    },
    w = function(e, t) {
      var a = e.value.toLowerCase(),
        i = t.toLowerCase(),
        n = e.getAttribute("label"),
        r = e.text.toLowerCase();
      return Boolean(!1 === e.disabled && ("" !== a && -1 !== a.indexOf(i) || n && -1 !== n.toLowerCase().indexOf(i) || "" !== r && -1 !== r.indexOf(i)))
    },
    E = function(e) {
      if (e.target.matches("input[list]")) {
        var t = e.target,
          a = t.list;
        if ("input" === t.tagName.toLowerCase() && null !== a && (t.matches("." + r) || (t.setAttribute("autocomplete", "off"), t.setAttribute("role", "textbox"), t.setAttribute("aria-haspopup", "true"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-owns", t.getAttribute("list")), "focusin" === e.type ? (t.addEventListener("keyup", o), t.addEventListener("focusout", E, !0), s && t.addEventListener("input", h)) : "blur" === e.type && (t.removeEventListener("keyup", o), t.removeEventListener("focusout", E, !0), s && t.removeEventListener("input", h)), t.className += " " + r), !s)) {
          var
            i = a.getElementsByClassName(f)[0] || L(t, a),
            n = i && i.querySelector("option:not(:disabled)") && ("focusin" === e.type && "" !== t.value || e.relatedTarget && e.relatedTarget === i);
          T(n, i)
        }
      }
    };
  if (u.addEventListener("focusin", E, !0), !s) {
    var C = function(e, n) {
        void 0 !== m && m.disconnect();
        var t = e.getElementsByClassName(f)[0] || L(n, e),
          o = n.value,
          l = u.createDocumentFragment(),
          s = u.createDocumentFragment();
        "email" === n.getAttribute("type") && null !== n.getAttribute("multiple") && (o = o.substring(o.lastIndexOf(",") + 1)), Array.prototype.slice.call(e.querySelectorAll("option:not(:disabled)")).sort(function(e, t) {
          var a = e.value,
            i = t.value;
          return "url" === n.getAttribute("type") && (a = a.replace(/(^\w+:|^)\/\//, ""), i = i.replace(/(^\w+:|^)\/\//, "")), a.localeCompare(i)
        }).forEach(function(e) {
          var t = e.value,
            a = e.getAttribute("label"),
            i = e.text;
          if (w(e, o)) {
            var n = i.substr(0, t.length + g.length),
              r;
            i && !a && i !== t && n !== t + g ? e.innerText = t + g + i : e.text || (e.innerText = a || t), l.appendChild(e)
          } else s.appendChild(e)
        }), t.appendChild(l);
        var a = t.options.length;
        return t.size = 10 < a ? 10 : a, t.multiple = !d && a < 2, (e.getElementsByClassName("ie9_fix")[0] || e).appendChild(s), void 0 !== m && m.observe(e, {
          childList: !0
        }), t.options
      },
      L = function(e, t) {
        if (!(e.getAttribute("type") && -1 === l.indexOf(e.getAttribute("type")) || null === t)) {
          var a = e.getClientRects(),
            i = window.getComputedStyle(e),
            n = u.createElement("select");
          if (n.setAttribute("class", f), n.style.position = "absolute", T(!1, n), n.setAttribute("tabindex", "-1"), n.setAttribute("aria-live", "polite"), n.setAttribute("role", "listbox"), d || n.setAttribute("aria-multiselectable", "false"), "block" === i.getPropertyValue("display")) n.style.marginTop = "-" + i.getPropertyValue("margin-bottom");
          else {
            var r = "rtl" === i.getPropertyValue("direction") ? "right" : "left";
            n.style.setProperty("margin-" + r, "-" + (a[0].width + parseFloat(i.getPropertyValue("margin-" + r))) + "px"), n.style.marginTop = parseInt(a[0].height + (e.offsetTop - t.offsetTop), 10) + "px"
          }
          if (n.style.borderRadius = i.getPropertyValue("border-radius"), n.style.minWidth = a[0].width + "px", d) {
            var o = u.createElement("option");
            o.innerText = t.title, o.disabled = !0, o.setAttribute("class", "message"), n.appendChild(o)
          }
          return t.appendChild(n), d ? n.addEventListener("change", k) : n.addEventListener("click", k), n.addEventListener("blur", k), n.addEventListener("keydown", k), n.addEventListener("keypress", A), n
        }
      },
      A = function(e) {
        var t = e.target,
          a = t.parentNode,
          i = u.querySelector('input[list="' + a.id + '"]');
        "select" === t.tagName.toLowerCase() && null !== i && (!e.key || "Backspace" !== e.key && 1 !== e.key.length || (i.focus(), "Backspace" === e.key ? (i.value = i.value.substr(0, i.value.length - 1), x(i)) : i.value += e.key, C(a, i)))
      },
      k = function(e) {
        var t = e.currentTarget,
          a = t.parentNode,
          i = u.querySelector('input[list="' + a.id + '"]');
        if ("select" === t.tagName.toLowerCase() && null !== i) {
          var n = e.type,
            r = "keydown" === n && e.keyCode !== p && e.keyCode !== c,
            o;
          if (("change" === n || "click" === n || "keydown" === n && (e.keyCode === p || "Tab" === e.key)) && 0 < t.value.length && t.value !== a.title)
            i.value = "email" === i.getAttribute("type") && null !== i.getAttribute("multiple") && -1 < (o = i.value.lastIndexOf(",")) ? i.value.slice(0, o) + "," + t.value : i.value = t.value, x(i), "Tab" !== e.key && i.focus(), r = !1;
          else "keydown" === n && e.keyCode === c && i.focus();
          T(r, t)
        }
      },
      x = function(e) {
        var t;
        "function" == typeof Event ? t = new Event("input", {
          bubbles: !0
        }) : (t = u.createEvent("Event")).initEvent("input", !0, !1), e.dispatchEvent(t)
      },
      T = function(e, t) {
        e ? t.removeAttribute("hidden") : t.setAttributeNode(u.createAttribute("hidden")), t.setAttribute("aria-hidden", (!e).toString())
      },
      n, N;
    (n = window.HTMLInputElement) && n.prototype && void 0 === n.prototype.list && Object.defineProperty(n.prototype, "list", {
      get: function() {
        var e = u.getElementById(this.getAttribute("list"));
        return "object" == typeof this && this instanceof n && e && e.matches("datalist") ? e : null
      }
    }), (N = window.HTMLElement) && N.prototype && void 0 === N.prototype.options && Object.defineProperty(N.prototype, "options", {
      get: function() {
        return "object" == typeof this && this instanceof N ? this.getElementsByTagName("option") : null
      }
    })
  }
}()
