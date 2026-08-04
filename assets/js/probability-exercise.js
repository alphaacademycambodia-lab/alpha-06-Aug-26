/* Alpha Academy Cambodia — Grade 12 probability: lesson and exercises
   ---------------------------------------------------------------------------
   Two panes, chosen by the tab bar at the top. The lesson comes from
   probability-lesson-bank.js; the exercises from probability-bank.js with the
   English overlay in probability-bank-en.js.

   The exercises are NOT in book order, and they are NOT reshuffled: ORDER
   below is a fixed running order that every visitor sees identically, so a
   teacher can say "do number 12" and mean the same exercise for everybody.
   The only thing that differs between visitors is which ones they have
   ticked off (localStorage, key aa-prob-done, keyed on the book number so it
   survives any later edit to ORDER).

   To change the running order, edit ORDER. Numbers missing from it are
   appended at the end rather than dropped.                                 */
(function () {
  'use strict';

  var BANK = window.PROB_BANK || [];
  var EN = window.PROB_BANK_EN || {};
  var LESSON = window.PROB_LESSON || [];
  var STORE = 'aa-prob-done';
  var $ = function (id) { return document.getElementById(id); };

  /* ---------------------------------------------------------- language
     Khmer is the original; English comes from the overlay. An exercise the
     overlay has not reached simply stays in Khmer rather than going blank. */
  function isKm() { return !(window.AAi18n && window.AAi18n.get() === 'en'); }

  var KM_LETTERS = { 'ក': 'a', 'ខ': 'b', 'គ': 'c', 'ឃ': 'd', 'ង': 'e', 'ច': 'f' };
  var KM_NUMS = { '១.': '1.', '២.': '2.', '៣.': '3.', '៤.': '4.' };

  function partLabel(k) {
    if (isKm()) { return k; }
    if (KM_LETTERS[k]) { return '(' + KM_LETTERS[k] + ')'; }
    if (KM_NUMS[k]) { return KM_NUMS[k]; }
    return k;
  }

  /* Returns { q, parts:[{k,t,s:[{k,t}]}] } in whichever language is on. */
  function view(ex) {
    var en = EN[ex.n];
    if (isKm() || !en) {
      return { q: ex.q, parts: (ex.p || []).map(function (p) {
        return { k: p.k, t: p.t, s: (p.s || []).map(function (s) { return { k: s.k, t: s.t }; }) };
      }) };
    }
    return {
      q: en.q,
      parts: (ex.p || []).map(function (p, i) {
        var e = (en.p || [])[i];
        var txt = (e && typeof e === 'object') ? e.t : e;
        var subs = (e && typeof e === 'object' && e.s) ? e.s : null;
        return {
          k: partLabel(p.k),
          t: txt == null ? p.t : txt,
          s: (p.s || []).map(function (s, j) {
            return { k: partLabel(s.k), t: (subs && subs[j] != null) ? subs[j] : s.t };
          })
        };
      })
    };
  }

  /* The fixed running order — book numbers, not positions. */
  var ORDER = [
     58,  12,   3,  44, 101,  77,  21,  67,   9,  93,
     70,  31,  50,  16,  88,   2,  84,  41,  63, 107,
     28,  69,  15,  36,  95,   8,  54,  81,  27,  90,
     61,   4,  73,  38, 104,  19,  47,  10,  86,  87,
     65,  33,   5,  75,  99,  22,  59,  14,  42, 102,
     79,   1,  68,  25,  91,  72,  52,  17,  39, 108,
      6,  83,  48,  30,  96,  60,  76,  11,  45,  89,
     24,  56,  82,   7, 105,  35,  62,  71,  18,  92,
     51,  29,  43,  85, 100,  13,  66,  34,  74, 106,
     20,  57,  26,  49,  94,  80,  37,  53,  23, 103,
     78,  55,  32,  46,  97,  40,  64,  98
  ];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------------------------------------------------- Khmer numerals */
  var KH = '០១២៣៤៥៦៧៨៩';
  function khNum(n) {
    return String(n).replace(/\d/g, function (d) { return KH.charAt(+d); });
  }

  /* ------------------------------------------------------------ storage */
  function doneSet() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORE) || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveDone(list) {
    try { localStorage.setItem(STORE, JSON.stringify(list)); } catch (e) {}
  }
  var done = doneSet();
  function isDone(n) { return done.indexOf(n) > -1; }
  function toggleDone(n) {
    var i = done.indexOf(n);
    if (i > -1) { done.splice(i, 1); } else { done.push(n); }
    saveDone(done);
  }

  /* ---------------------------------------------- ORDER applied to BANK */
  function ordered() {
    var byNum = {}, out = [], used = {};
    BANK.forEach(function (e) { byNum[e.n] = e; });

    ORDER.forEach(function (n) {
      if (byNum[n] && !used[n]) { out.push(byNum[n]); used[n] = true; }
    });
    /* Anything the running order forgot still gets shown. */
    BANK.forEach(function (e) { if (!used[e.n]) { out.push(e); } });
    return out;
  }

  var LIST = ordered();

  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';

  /* ------------------------------------------------------------- render */
  function partHtml(p) {
    return '<li><span class="k">' + esc(p.k) + '</span><span class="t">' + esc(p.t) +
      (p.s && p.s.length
        ? '<ul class="pb-sub">' + p.s.map(function (s) {
            return '<li><span class="k">' + esc(s.k) + '</span><span class="t">' + esc(s.t) + '</span></li>';
          }).join('') + '</ul>'
        : '') +
      '</span></li>';
  }

  function cardHtml(ex, pos) {
    var v = view(ex);
    var en = EN[ex.n];

    /* Search looks through both languages, whichever is on screen. */
    var hay = (ex.q + ' ' + (ex.p || []).map(function (p) {
      return p.t + ' ' + (p.s || []).map(function (s) { return s.t; }).join(' ');
    }).join(' ') + ' ' + (en ? en.q + ' ' + JSON.stringify(en.p || '') : '')).toLowerCase();

    return '<article class="pb-card' + (isKm() ? ' pb-km' : '') + (isDone(ex.n) ? ' is-done' : '') + '" ' +
             'data-n="' + ex.n + '" data-find="' + esc(hay) + '">' +
             '<div class="pb-head">' +
               '<span class="pb-num">' + (isKm() ? khNum(pos) : pos) + '</span>' +
               '<div class="pb-q">' + esc(v.q) + '</div>' +
               '<button class="pb-done" type="button" data-done="' + ex.n + '" ' +
                 'aria-pressed="' + isDone(ex.n) + '" ' +
                 'title="សម្គាល់ថាបានធ្វើរួច" aria-label="Mark exercise as done">' + ICON_CHECK + '</button>' +
             '</div>' +
             (v.parts.length
               ? '<ol class="pb-parts">' + v.parts.map(partHtml).join('') + '</ol>'
               : '') +
           '</article>';
  }

  function paint() {
    $('pbList').innerHTML = LIST.map(function (ex, i) { return cardHtml(ex, i + 1); }).join('');
    applyFilter();
  }

  /* Switching the site language redraws both panes in that language. */
  document.addEventListener('aa:langchange', function () {
    paint();
    paintLesson();
    paintTabs();
  });

  /* ------------------------------------------------------------ filters */
  function applyFilter() {
    var q = ($('pbSearch').value || '').trim().toLowerCase();
    var hideDone = $('pbHideDone').getAttribute('aria-pressed') === 'true';
    var shown = 0;

    $('pbList').querySelectorAll('.pb-card').forEach(function (el) {
      var n = +el.getAttribute('data-n');
      var ok = (!q || el.getAttribute('data-find').indexOf(q) > -1) && !(hideDone && isDone(n));
      el.classList.toggle('is-hidden', !ok);
      if (ok) { shown++; }
    });

    $('pbEmpty').classList.toggle('pb-hide', shown > 0);
    $('pbShown').textContent = isKm() ? khNum(shown) : shown;
    paintProgress();
  }

  function paintProgress() {
    var total = LIST.length;
    var n = done.filter(function (x) {
      return BANK.some(function (e) { return e.n === x; });
    }).length;
    $('pbDoneCount').textContent = isKm() ? khNum(n) : n;
    $('pbTotal').textContent = isKm() ? khNum(total) : total;
    $('pbBar').style.width = (total ? (n / total * 100) : 0) + '%';
  }

  /* ==================================================================== 2
     LESSON

     The lesson lives in probability-lesson-bank.js in the same {km,en}
     block shape the complex-numbers and limits pages use, so the markup
     here is cx-* and the styling comes from complex.css.                 */
  var T = {
    lesson:    { km: 'មេរៀន', en: 'Lesson' },
    exercises: { km: 'លំហាត់', en: 'Exercises' },
    contents:  { km: 'មាតិកា', en: 'Contents' },
    example:   { km: 'ឧទាហរណ៍', en: 'Example' }
  };
  function L(o) { return o ? (isKm() ? (o.km || o.en) : (o.en || o.km)) : ''; }
  function t(k) { return L(T[k]); }
  function num(n) { return isKm() ? khNum(n) : String(n); }

  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(el ? [el] : undefined)['catch'](function () {});
    }
  }

  function blockHtml(b) {
    if (b.t === 'p') { return '<p>' + esc(L(b)) + '</p>'; }
    if (b.t === 'note') { return '<p class="cx-note">' + esc(L(b)) + '</p>'; }
    if (b.t === 'm') { return '<div class="cx-math">\\[' + b.tex + '\\]</div>'; }
    if (b.t === 'ul') {
      return '<ul class="cx-list">' + (b.items || []).map(function (it) {
        return '<li>' + (it.tex ? '\\(' + it.tex + '\\)' : esc(L(it))) + '</li>';
      }).join('') + '</ul>';
    }
    if (b.t === 'eg') {
      return '<div class="cx-eg"><span class="tag">' + esc(t('example')) + '</span>' +
        '<p class="q">' + esc(L(b)) + '</p>' +
        (b.steps || []).map(function (s) { return '<div class="cx-math">\\[' + s + '\\]</div>'; }).join('') +
        '</div>';
    }
    return '';
  }

  function paintLesson() {
    var el = $('pbLesson');
    if (!el || !LESSON.length) { return; }
    el.innerHTML =
      '<nav class="cx-toc"><b>' + esc(t('contents')) + '</b><ol>' +
        LESSON.map(function (s, i) {
          return '<li><a href="#pl-' + s.id + '">' + num(i + 1) + '. ' + esc(L(s.h)) + '</a></li>';
        }).join('') + '</ol></nav>' +
      LESSON.map(function (s, i) {
        return '<section class="cx-sec" id="pl-' + s.id + '">' +
          '<h3><span class="n">' + num(i + 1) + '</span>' + esc(L(s.h)) + '</h3>' +
          (s.blocks || []).map(blockHtml).join('') + '</section>';
      }).join('');
    typeset(el);
  }

  /* ------------------------------------------------------------- tabs */
  var pane = 'lesson';           /* which of the two panes is showing */

  function paintTabs() {
    var el = $('pbTabs');
    if (!el) { return; }
    el.innerHTML = ['lesson', 'exercises'].map(function (v) {
      /* complex.css styles the selected tab off aria-selected, not a class. */
      return '<button type="button" role="tab" data-view="' + v + '" ' +
        'aria-selected="' + (pane === v) + '">' + esc(t(v)) + '</button>';
    }).join('');
  }

  function showView(v) {
    pane = v;
    paintTabs();
    var lesson = $('pbLesson'), ex = $('pbEx');
    if (lesson) { lesson.hidden = (v !== 'lesson'); }
    if (ex) { ex.hidden = (v !== 'exercises'); }
  }

  if ($('pbTabs')) {
    $('pbTabs').addEventListener('click', function (e) {
      var b = e.target.closest('[data-view]');
      if (b) { showView(b.getAttribute('data-view')); }
    });
  }

  /* -------------------------------------------------------------- wiring */
  $('pbList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-done]');
    if (!b) { return; }
    var n = +b.getAttribute('data-done');
    toggleDone(n);
    b.setAttribute('aria-pressed', String(isDone(n)));
    b.closest('.pb-card').classList.toggle('is-done', isDone(n));
    applyFilter();
  });

  $('pbSearch').addEventListener('input', applyFilter);

  $('pbHideDone').addEventListener('click', function () {
    var on = this.getAttribute('aria-pressed') !== 'true';
    this.setAttribute('aria-pressed', String(on));
    applyFilter();
  });

  $('pbReset').addEventListener('click', function () {
    if (!done.length) { return; }
    done = [];
    saveDone(done);
    paint();
  });

  $('pbPrint').addEventListener('click', function () { window.print(); });

  paint();
  paintLesson();
  showView(LESSON.length ? 'lesson' : 'exercises');
})();
