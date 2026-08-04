/* Alpha Academy Cambodia — Complex numbers page
   ---------------------------------------------------------------------------
   Two views behind one switch: the lesson and the exercises. Everything is
   drawn from assets/js/complex-bank.js, which carries Khmer and English side
   by side — the header's EN ⇄ ខ្មែរ control picks which one is shown, and the
   page redraws itself when that changes.

   Maths is typeset by MathJax after every redraw.                          */
(function () {
  'use strict';

  var B = window.CX_BANK || {};
  var LESSON = B.lesson || [];
  var EX = B.exercises || [];
  var STORE = 'aa-cx-done';
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------------------------------------------------------- language */
  function lang() { return (window.AAi18n && window.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function L(o) {
    if (!o) { return ''; }
    return o[lang()] || o.en || o.km || '';
  }
  var KM_DIGITS = '០១២៣៤៥៦៧៨៩';
  function khNum(n) {
    return String(n).replace(/\d/g, function (d) { return KM_DIGITS.charAt(+d); });
  }
  function num(n) { return lang() === 'km' ? khNum(n) : String(n); }

  var KM_LETTERS = ['ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ'];
  function label(k) {
    if (/^\d+$/.test(k)) { return num(k) + '.'; }
    var i = 'abcdefghij'.indexOf(k);
    if (i < 0) { return k; }
    return lang() === 'km' ? KM_LETTERS[i] : '(' + k + ')';
  }

  /* Words that belong to the page furniture rather than to the content. */
  var T = {
    lesson:    { km: 'មេរៀន', en: 'Lesson' },
    exercises: { km: 'លំហាត់', en: 'Exercises' },
    contents:  { km: 'មាតិកា', en: 'Contents' },
    example:   { km: 'ឧទាហរណ៍', en: 'Example' },
    exam:      { km: 'បាក់ឌុប', en: 'Exam' },
    extra:     { km: 'លំហាត់បន្ថែម', en: 'Extra practice' },
    exercise:  { km: 'លំហាត់ទី', en: 'Exercise' },
    search:    { km: 'ស្វែងរកលំហាត់…', en: 'Search the exercises…' },
    hideDone:  { km: 'លាក់លំហាត់ដែលធ្វើរួច', en: 'Hide finished' },
    reset:     { km: 'សម្អាតសញ្ញាធីក', en: 'Clear ticks' },
    print:     { km: 'បោះពុម្ព', en: 'Print' },
    showing:   { km: 'កំពុងបង្ហាញ', en: 'Showing' },
    finished:  { km: 'ធ្វើរួច', en: 'Finished' },
    empty:     { km: 'រកមិនឃើញលំហាត់ត្រូវនឹងពាក្យស្វែងរក។', en: 'Nothing matches that search.' },
    markDone:  { km: 'សម្គាល់ថាបានធ្វើរួច', en: 'Mark as done' }
  };
  function t(key) { return L(T[key]); }

  /* ------------------------------------------------------------ storage */
  function doneSet() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORE) || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveDone(l) { try { localStorage.setItem(STORE, JSON.stringify(l)); } catch (e) {} }
  var done = doneSet();
  function isDone(n) { return done.indexOf(n) > -1; }

  /* ------------------------------------------------------------ MathJax */
  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(el ? [el] : undefined)['catch'](function () {});
    }
  }

  /* ==================================================================== 1
     THE LESSON                                                           */
  function blockHtml(b) {
    if (b.t === 'p') { return '<p>' + L(b) + '</p>'; }
    if (b.t === 'm') { return '<div class="cx-math">\\[' + b.tex + '\\]</div>'; }
    if (b.t === 'ul') {
      return '<ul class="cx-list">' + (b.items || []).map(function (it) {
        return '<li>' + (it.tex ? '\\(' + it.tex + '\\)' : L(it)) + '</li>';
      }).join('') + '</ul>';
    }
    if (b.t === 'note') { return '<p class="cx-note">' + L(b) + '</p>'; }
    if (b.t === 'eg') {
      return '<div class="cx-eg">' +
        '<span class="tag">' + esc(t('example')) + '</span>' +
        '<p class="q">' + L(b) + '</p>' +
        (b.steps || []).map(function (s) { return '<div class="cx-math">\\[' + s + '\\]</div>'; }).join('') +
      '</div>';
    }
    return '';
  }

  function renderLesson() {
    var toc = '<nav class="cx-toc"><b>' + esc(t('contents')) + '</b><ol>' +
      LESSON.map(function (s, i) {
        return '<li><a href="#cx-' + s.id + '">' + num(i + 1) + '. ' + L(s.h) + '</a></li>';
      }).join('') + '</ol></nav>';

    var body = LESSON.map(function (s, i) {
      return '<section class="cx-sec" id="cx-' + s.id + '">' +
        '<h3><span class="n">' + num(i + 1) + '</span>' + L(s.h) + '</h3>' +
        (s.blocks || []).map(blockHtml).join('') +
      '</section>';
    }).join('');

    return toc + body;
  }

  /* ==================================================================== 2
     THE EXERCISES                                                        */
  function partHtml(p) {
    return '<li><span class="k">' + esc(label(p.k)) + '</span><span class="tt">' + L(p.t) + '</span></li>';
  }

  function hay(e) {
    var s = e.q.km + ' ' + e.q.en;
    (e.p || []).forEach(function (p) { s += ' ' + p.t.km + ' ' + p.t.en; });
    return s.toLowerCase();
  }

  function exCard(e) {
    var badge = e.src
      ? '<span class="cx-badge">' + esc(t('exam') + ' ' + num(e.src)) + '</span>'
      : (e.extra ? '<span class="cx-badge cx-badge--extra">' + esc(t('extra')) + '</span>' : '');

    return '<article class="cx-card' + (isDone(e.n) ? ' is-done' : '') + '" ' +
        'data-n="' + e.n + '" data-find="' + esc(hay(e)) + '">' +
        '<div class="cx-head">' +
          '<span class="cx-num">' + num(e.n) + '</span>' +
          '<div class="cx-q">' + L(e.q) + badge + '</div>' +
          '<button class="cx-done" type="button" data-done="' + e.n + '" ' +
            'aria-pressed="' + isDone(e.n) + '" title="' + esc(t('markDone')) + '" ' +
            'aria-label="' + esc(t('markDone')) + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>' +
          '</button>' +
        '</div>' +
        ((e.p && e.p.length) ? '<ol class="cx-parts">' + e.p.map(partHtml).join('') + '</ol>' : '') +
      '</article>';
  }

  function renderExercises() {
    return '<div class="cx-bar">' +
        '<div class="cx-search">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
            '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
          '<input id="cxSearch" type="search" autocomplete="off" placeholder="' + esc(t('search')) + '" ' +
            'aria-label="' + esc(t('search')) + '">' +
        '</div>' +
        '<button class="cx-btn cx-toggle" type="button" id="cxHideDone" aria-pressed="false">' + esc(t('hideDone')) + '</button>' +
        '<button class="cx-btn" type="button" id="cxReset">' + esc(t('reset')) + '</button>' +
        '<button class="cx-btn" type="button" id="cxPrint">' + esc(t('print')) + '</button>' +
      '</div>' +
      '<p class="cx-stats">' +
        '<span>' + esc(t('showing')) + ' <b id="cxShown">' + num(EX.length) + '</b></span>' +
        '<span>' + esc(t('finished')) + ' <b id="cxDone">' + num(0) + '</b> / <b>' + num(EX.length) + '</b></span>' +
        '<span class="cx-progress"><i id="cxBar"></i></span>' +
      '</p>' +
      '<div class="cx-list-ex" id="cxList">' + EX.map(exCard).join('') + '</div>' +
      '<p class="cx-empty cx-hide" id="cxEmpty">' + esc(t('empty')) + '</p>';
  }

  /* ------------------------------------------------------------ filters */
  function applyFilter() {
    var box = $('cxSearch');
    if (!box) { return; }
    var q = (box.value || '').trim().toLowerCase();
    var hide = $('cxHideDone').getAttribute('aria-pressed') === 'true';
    var shown = 0;

    $('cxList').querySelectorAll('.cx-card').forEach(function (el) {
      var n = +el.getAttribute('data-n');
      var ok = (!q || el.getAttribute('data-find').indexOf(q) > -1) && !(hide && isDone(n));
      el.classList.toggle('is-hidden', !ok);
      if (ok) { shown++; }
    });

    $('cxEmpty').classList.toggle('cx-hide', shown > 0);
    $('cxShown').textContent = num(shown);
    paintProgress();
  }

  function paintProgress() {
    if (!$('cxDone')) { return; }
    var n = done.filter(function (x) {
      return EX.some(function (e) { return e.n === x; });
    }).length;
    $('cxDone').textContent = num(n);
    $('cxBar').style.width = (EX.length ? (n / EX.length * 100) : 0) + '%';
  }

  /* ==================================================================== 3
     VIEW SWITCHING                                                       */
  var view = 'lesson';

  function paintTabs() {
    $('cxTabs').innerHTML =
      '<button type="button" role="tab" data-view="lesson" aria-selected="' + (view === 'lesson') + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"/><path d="M8 8h7M8 12h5"/></svg>' +
        esc(t('lesson')) + '</button>' +
      '<button type="button" role="tab" data-view="exercises" aria-selected="' + (view === 'exercises') + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4"/></svg>' +
        esc(t('exercises')) + ' <span class="lv">' + num(EX.length) + '</span></button>';
  }

  function paint(scroll) {
    paintTabs();
    var host = $('cxBody');
    host.innerHTML = view === 'lesson' ? renderLesson() : renderExercises();

    if (view === 'exercises') {
      $('cxSearch').addEventListener('input', applyFilter);
      $('cxHideDone').addEventListener('click', function () {
        this.setAttribute('aria-pressed', String(this.getAttribute('aria-pressed') !== 'true'));
        applyFilter();
      });
      $('cxReset').addEventListener('click', function () {
        if (!done.length) { return; }
        done = [];
        saveDone(done);
        paint(false);
      });
      $('cxPrint').addEventListener('click', function () { window.print(); });
      applyFilter();
    }

    typeset(host);
    if (scroll) { host.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    if (history.replaceState) { history.replaceState(null, '', '#' + view); }
  }

  /* -------------------------------------------------------------- wiring */
  $('cxTabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-view]');
    if (!b || b.getAttribute('data-view') === view) { return; }
    view = b.getAttribute('data-view');
    paint(true);
  });

  $('cxBody').addEventListener('click', function (e) {
    var b = e.target.closest('[data-done]');
    if (!b) { return; }
    var n = +b.getAttribute('data-done');
    var i = done.indexOf(n);
    if (i > -1) { done.splice(i, 1); } else { done.push(n); }
    saveDone(done);
    b.setAttribute('aria-pressed', String(isDone(n)));
    b.closest('.cx-card').classList.toggle('is-done', isDone(n));
    applyFilter();
  });

  /* The language switch redraws the whole thing, ticks and all. */
  document.addEventListener('aa:langchange', function () { paint(false); });

  var start = (location.hash || '').replace('#', '');
  if (start === 'exercises' || start === 'lesson') { view = start; }
  paint(false);
})();
