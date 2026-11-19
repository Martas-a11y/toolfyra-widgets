/* Toolfyra widget embedder — v1.0 (MIT)
   Drop calculators into any page with one attribute.
   Usage:
     1. <div data-toolfyra="mortgage-calculator" data-height="760"></div>
     2. <script src="https://cdn.jsdelivr.net/gh/Martas-a11y/toolfyra-widgets@main/embed.js" defer></script>
   Any toolfyra.com URL slug works: paycheck-calculator-texas, bmi-calculator, tip-calculator, ... */
(function () {
  "use strict";
  var BASE = "https://toolfyra.com/";
  function boot() {
    var nodes = document.querySelectorAll("[data-toolfyra]");
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.getAttribute("data-toolfyra-done")) continue;
      n.setAttribute("data-toolfyra-done", "1");
      var tool = (n.getAttribute("data-toolfyra") || "").replace(/^\/+|\/+$/g, "");
      if (!/^[a-z0-9\/-]+$/.test(tool)) continue;
      var h = parseInt(n.getAttribute("data-height") || "720", 10);
      var f = document.createElement("iframe");
      f.src = BASE + tool;
      f.style.cssText = "width:100%;border:1px solid #e2e8f0;border-radius:12px;height:" + h + "px;background:#fff";
      f.setAttribute("loading", "lazy");
      f.setAttribute("title", "Toolfyra " + tool + " widget");
      n.appendChild(f);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
