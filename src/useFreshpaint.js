import { useEffect } from 'react';

function freshpaintInit() {
  function p(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, a = new Array(e); t < e; t++) a[t] = r[t];
      return a
  }

  function v(r) {
      if (Array.isArray(r)) return p(r)
  }

  function h(r) {
      if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r)
  }

  function A() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }

  function I(r, e) {
      if (r) {
          if (typeof r == "string") return p(r, e);
          var t = Object.prototype.toString.call(r).slice(8, -1);
          if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(t);
          if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(r, e)
      }
  }

  function y(r) {
      return v(r) || h(r) || I(r) || A()
  }
  var E = function(r, e) {
      if (!e.__SV) {
          try {
              var t, a, m = window.location,
                  c = m.hash,
                  x = function(n, o) {
                      return t = n.match(new RegExp(o + "=([^&]*)")), t ? t[1] : null
                  };
              c && x(c, "fpState") && (a = JSON.parse(decodeURIComponent(x(c, "fpState"))), a.action === "fpeditor" && (window.sessionStorage.setItem("_fpcehash", c), history.replaceState(a.desiredHash || "", r.title, m.pathname + m.search)))
          } catch (S) {}
          e.__loaded = !1, e.config = !1, e.__SV = 2, window.freshpaint = new Proxy(e, {
              get: function(n, o) {
                  return n[o] !== void 0 ? n[o] : o === "init" ? function(l, u, i) {
                      var _, d;
                      (_ = n)[d = "_i"] || (_[d] = []), n._i.push([l, u || {}, i || "freshpaint"])
                  } : function() {
                      for (var l = arguments.length, u = new Array(l), i = 0; i < l; i++) u[i] = arguments[i];
                      var _ = [o].concat(y(u));
                      return n.push(_), new Proxy(_, {
                          get: function(f, w) {
                              return f[w] ? f[w] : function() {
                                  for (var b = arguments.length, g = new Array(b), s = 0; s < b; s++) g[s] = arguments[s];
                                  f.length = 0, f.push([o].concat(y(u))), f.push([w].concat(y(g)))
                              }
                          }
                      })
                  }
              }
          })
      }
  };
  E(document, window.freshpaint || []);
  freshpaint.init("95629632-e650-498b-b78d-98afb6fb7d90", {"api_host": "https://mc4by4yv08.execute-api.us-west-2.amazonaws.com/prod", "app_host": "https://dw8zt32li9okr.cloudfront.net"});
  freshpaint.page();
}

function useFreshpaint() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://freshpaint-cdn.com/js/95629632-e650-498b-b78d-98afb6fb7d90/freshpaint.js`;
    script.async = false;
    script.onload = () => {
      // Callback function after the script is loaded
      console.log('Freshpaint CDN script loaded successfully');
      // Any function that relies on the script should be called here
      freshpaintInit();
    };

    script.onerror = () => {
       console.error('Error loading the remote script');
    };
    
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render

}

export default useFreshpaint;