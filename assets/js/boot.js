/* Runs render-blocking in <head> so the page never flashes the wrong theme or
   the wrong language before the rest of the JavaScript arrives. */
(function () {
  var d = document.documentElement;
  var theme = 'light', lang = 'en';
  try {
    theme = localStorage.getItem('aa-theme') ||
            (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    lang = localStorage.getItem('aa-lang') || 'en';
  } catch (e) { /* private mode — fall back to the defaults above */ }
  d.setAttribute('data-theme', theme);
  d.setAttribute('lang', lang);
})();
