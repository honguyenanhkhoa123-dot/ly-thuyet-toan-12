/* Swarm Rebuild — github.com/DhvanilPatel/swarm-cursors
 *
 * Only formulas (KaTeX) and images are rebuilt; the rest of the page is already
 * there, so nothing feels like it loads twice. Runs on first load and on every
 * route change, and stops by itself once the visible media is rebuilt.
 */
(function () {
  "use strict";

  var HARD_STOP_MS = 20000;
  // Absolute last resort so a broken run can never leave the page hidden.
  var VEIL_MAX_MS = 8000;

  // Hide what the rebuild is going to draw, from the very first paint, so a
  // formula is never shown once and then replaced by the animation.
  var veil = document.createElement("style");
  veil.id = "swarm-veil";
  veil.textContent = ".katex,img{visibility:hidden!important}";
  var veilGen = 0;

  function raiseVeil() {
    var gen = ++veilGen;
    if (!document.getElementById("swarm-veil")) document.head.appendChild(veil);
    // Only dropped here if the rebuild never gets as far as mounting its copies.
    setTimeout(function () {
      if (gen === veilGen) dropVeil();
    }, VEIL_MAX_MS);
  }

  function dropVeil() {
    veilGen++;
    var v = document.getElementById("swarm-veil");
    if (v) v.remove();
  }

  function api() {
    return window.__swarmRebuild;
  }

  function mainText() {
    var m = document.querySelector("main, article");
    return m ? m.textContent.slice(0, 200) : "";
  }

  function play() {
    var cur = api();
    if (!cur) return;
    // The new view has not rendered yet: drop the old overlay right away,
    // otherwise its agents keep drawing the previous page over the new one.
    if (cur.app) cur.stop(false);
    for (var h of document.querySelectorAll("swarm-rebuild")) h.style.display = "none";
    // Start only once the route's own content is on screen. Starting earlier
    // makes the new run capture the previous page and replay it.
    var before = mainText();
    var t0 = Date.now();
    (function wait() {
      if (!api() || api().app) return;
      if (mainText() !== before || Date.now() - t0 > 1200) api().start();
      else setTimeout(wait, 40);
    })();
  }

  // A run ends when nothing visible is left to build. Pages with no formulas and
  // no pictures end immediately; backlog() ignores what waits for a scroll.
  var app = null;
  var armed = true;
  var t0 = 0;
  setInterval(function () {
    var cur = api();
    if (!cur || !cur.app) {
      app = null;
      return;
    }
    if (cur.app !== app) {
      app = cur.app;
      t0 = Date.now();
      armed = true;
    }
    if (!armed) return;
    var E = app.engine;
    var empty = E && E.ready && E.tasks.length === 0;
    var built = E && E.started && E.doneCount > 0 && E.backlog() === 0;
    var stuck = Date.now() - t0 > HARD_STOP_MS;
    if (empty || built || stuck) {
      armed = false;
      var mine = app;
      setTimeout(function () {
        if (api() && api().app === mine) api().stop(built && !stuck);
      }, empty || stuck ? 0 : 700);
    }
  }, 200);

  // BrowserRouter swaps views without a reload. Raise the veil synchronously, at
  // the moment of navigation, so the next view is hidden from its first paint
  // instead of flashing for a few hundred ms.
  var path = location.pathname;
  function onRoute() {
    if (location.pathname === path) return;
    path = location.pathname;
    raiseVeil();
    play();
  }
  for (const m of ["pushState", "replaceState"]) {
    var orig = history[m];
    history[m] = function () {
      var out = orig.apply(this, arguments);
      try {
        onRoute();
      } catch (e) {}
      return out;
    };
  }
  addEventListener("popstate", onRoute);

  raiseVeil();

  if (api()) return;
  var s = document.createElement("script");
  s.onerror = dropVeil;
  s.src = "/swarm.js";
  document.body.appendChild(s);
})();