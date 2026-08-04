/* Alpha Academy Cambodia — Limits page
   ---------------------------------------------------------------------------
   Same two views as the complex-numbers page — Lesson and Exercises — and the
   same cx-* markup, so it shares assets/css/complex.css.

   The multiple-choice questions live in the Exercises view, ahead of the
   written ones. The printed source carries no answer key, so an option is
   only remembered as the student's choice, never marked right or wrong.    */
(function () {
  'use strict';

  var B = window.LIM_BANK || {};
  var LESSON = B.lesson || [];
  var MC = B.mc || [];
  var WR = B.exercises || [];
  var STORE = 'aa-lim-done';
  var PICKS = 'aa-lim-picks';
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function lang() { return (window.AAi18n && window.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function L(o) { return o ? (o[lang()] || o.en || o.km || '') : ''; }

  var KM_DIGITS = '០១២៣៤៥៦៧៨៩';
  function num(n) {
    return lang() === 'km'
      ? String(n).replace(/\d/g, function (d) { return KM_DIGITS.charAt(+d); })
      : String(n);
  }
  var KM_LETTERS = ['ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ'];
  function label(k) {
    if (/^\d+$/.test(k)) { return num(k) + '.'; }
    var i = 'abcdefgh'.indexOf(k);
    if (i < 0) { return k + '.'; }        /* A, B, C … used as-is */
    return lang() === 'km' ? KM_LETTERS[i] : '(' + k + ')';
  }
  function optLabel(i) {
    return lang() === 'km' ? KM_LETTERS[i] + '.' : String.fromCharCode(65 + i) + '.';
  }

  var T = {
    lesson:    { km: 'មេរៀន', en: 'Lesson' },
    exercises: { km: 'លំហាត់', en: 'Exercises' },
    contents:  { km: 'មាតិកា', en: 'Contents' },
    example:   { km: 'ឧទាហរណ៍', en: 'Example' },
    mcHead:    { km: 'លំហាត់ជម្រើសរើស', en: 'Multiple choice' },
    mcNote:    { km: 'ជ្រើសរើសចម្លើយមួយ។ ឯកសារដើមគ្មានតារាងចម្លើយទេ ដូច្នេះទំព័រនេះគ្រាន់តែចងចាំជម្រើសរបស់អ្នក មិនប្រាប់ថាត្រូវឬខុសទេ។',
                 en: 'Pick one answer. The printed source carries no answer key, so the page only remembers your choice — it does not mark it right or wrong.' },
    wrHead:    { km: 'លំហាត់សរសេរចម្លើយ', en: 'Written exercises' },
    extra:     { km: 'លំហាត់បន្ថែម', en: 'Extra practice' },
    search:    { km: 'ស្វែងរកលំហាត់…', en: 'Search the exercises…' },
    hideDone:  { km: 'លាក់លំហាត់ដែលធ្វើរួច', en: 'Hide finished' },
    reset:     { km: 'សម្អាតសញ្ញាធីក', en: 'Clear ticks' },
    print:     { km: 'បោះពុម្ព', en: 'Print' },
    showing:   { km: 'កំពុងបង្ហាញ', en: 'Showing' },
    finished:  { km: 'ធ្វើរួច', en: 'Finished' },
    empty:     { km: 'រកមិនឃើញលំហាត់ត្រូវនឹងពាក្យស្វែងរក។', en: 'Nothing matches that search.' },
    markDone:  { km: 'សម្គាល់ថាបានធ្វើរួច', en: 'Mark as done' }
  };
  function t(k) { return L(T[k]); }

  /* ------------------------------------------------------------ storage */
  function load(key, fallback) {
    try {
      var raw = JSON.parse(localStorage.getItem(key) || fallback);
      return raw;
    } catch (e) { return JSON.parse(fallback); }
  }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }

  var done = load(STORE, '[]');
  if (!Array.isArray(done)) { done = []; }
  var picks = load(PICKS, '{}');
  if (!picks || typeof picks !== 'object') { picks = {}; }

  function key(ex) { return (ex.kind === 'mc' ? 'm' : 'w') + ex.n; }
  function isDone(k) { return done.indexOf(k) > -1; }

  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(el ? [el] : undefined)['catch'](function () {});
    }
  }

  /* ==================================================================== 1
     LESSON                                                               */
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
      return '<div class="cx-eg"><span class="tag">' + esc(t('example')) + '</span>' +
        '<p class="q">' + L(b) + '</p>' +
        (b.steps || []).map(function (s) { return '<div class="cx-math">\\[' + s + '\\]</div>'; }).join('') +
      '</div>';
    }
    return '';
  }

  function renderLesson() {
    return '<nav class="cx-toc"><b>' + esc(t('contents')) + '</b><ol>' +
        LESSON.map(function (s, i) {
          return '<li><a href="#lm-' + s.id + '">' + num(i + 1) + '. ' + L(s.h) + '</a></li>';
        }).join('') + '</ol></nav>' +
      LESSON.map(function (s, i) {
        return '<section class="cx-sec" id="lm-' + s.id + '">' +
          '<h3><span class="n">' + num(i + 1) + '</span>' + L(s.h) + '</h3>' +
          (s.blocks || []).map(blockHtml).join('') + '</section>';
      }).join('');
  }

  /* ==================================================================== 2
     EXERCISES                                                            */
  function doneBtn(k) {
    return '<button class="cx-done" type="button" data-done="' + k + '" ' +
      'aria-pressed="' + isDone(k) + '" title="' + esc(t('markDone')) + '" ' +
      'aria-label="' + esc(t('markDone')) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg></button>';
  }

  function mcCard(ex) {
    var k = key(ex), chosen = picks[k];
    return '<article class="cx-card' + (isDone(k) ? ' is-done' : '') + '" data-k="' + k + '" ' +
        'data-find="' + esc((ex.q.km + ' ' + ex.q.en).toLowerCase()) + '">' +
        '<div class="cx-head">' +
          '<span class="cx-num">' + num(ex.n) + '</span>' +
          '<div class="cx-q">' + L(ex.q) + '</div>' +
          doneBtn(k) +
        '</div>' +
        '<ul class="lm-opts">' + (ex.o || []).map(function (o, i) {
          return '<li><button type="button" class="lm-opt' + (chosen === i ? ' is-picked' : '') + '" ' +
            'data-pick="' + k + '" data-i="' + i + '" aria-pressed="' + (chosen === i) + '">' +
            '<span class="lt">' + esc(optLabel(i)) + '</span>' +
            '<span class="vl">\\(' + o + '\\)</span></button></li>';
        }).join('') + '</ul>' +
      '</article>';
  }

  function wrCard(ex) {
    var k = key(ex);
    var hay = (ex.q.km + ' ' + ex.q.en + ' ' + (ex.p || []).map(function (p) {
      return p.t.km + ' ' + p.t.en;
    }).join(' ')).toLowerCase();

    return '<article class="cx-card' + (isDone(k) ? ' is-done' : '') + '" data-k="' + k + '" ' +
        'data-find="' + esc(hay) + '">' +
        '<div class="cx-head">' +
          '<span class="cx-num">' + num(ex.n) + '</span>' +
          '<div class="cx-q">' + L(ex.q) +
            (ex.extra ? '<span class="cx-badge cx-badge--extra">' + esc(t('extra')) + '</span>' : '') +
          '</div>' +
          doneBtn(k) +
        '</div>' +
        ((ex.p && ex.p.length)
          ? '<ol class="cx-parts">' + ex.p.map(function (p) {
              return '<li><span class="k">' + esc(label(p.k)) + '</span>' +
                '<span class="tt">' + L(p.t) + '</span></li>';
            }).join('') + '</ol>'
          : '') +
      '</article>';
  }

  function total() { return MC.length + WR.length; }

  function renderExercises() {
    return '<div class="cx-bar">' +
        '<div class="cx-search">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
            '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
          '<input id="lmSearch" type="search" autocomplete="off" placeholder="' + esc(t('search')) + '" ' +
            'aria-label="' + esc(t('search')) + '">' +
        '</div>' +
        '<button class="cx-btn cx-toggle" type="button" id="lmHideDone" aria-pressed="false">' + esc(t('hideDone')) + '</button>' +
        '<button class="cx-btn" type="button" id="lmReset">' + esc(t('reset')) + '</button>' +
        '<button class="cx-btn" type="button" id="lmPrint">' + esc(t('print')) + '</button>' +
      '</div>' +
      '<p class="cx-stats">' +
        '<span>' + esc(t('showing')) + ' <b id="lmShown">' + num(total()) + '</b></span>' +
        '<span>' + esc(t('finished')) + ' <b id="lmDone">' + num(0) + '</b> / <b>' + num(total()) + '</b></span>' +
        '<span class="cx-progress"><i id="lmBar"></i></span>' +
      '</p>' +

      '<h3 class="lm-group">' + esc(t('mcHead')) + ' <span class="c">' + num(MC.length) + '</span></h3>' +
      '<p class="cx-note">' + esc(t('mcNote')) + '</p>' +
      '<div class="cx-list-ex">' + MC.map(mcCard).join('') + '</div>' +

      '<h3 class="lm-group">' + esc(t('wrHead')) + ' <span class="c">' + num(WR.length) + '</span></h3>' +
      '<div class="cx-list-ex">' + WR.map(wrCard).join('') + '</div>' +

      '<p class="cx-empty cx-hide" id="lmEmpty">' + esc(t('empty')) + '</p>';
  }

  function applyFilter() {
    var box = $('lmSearch');
    if (!box) { return; }
    var q = (box.value || '').trim().toLowerCase();
    var hide = $('lmHideDone').getAttribute('aria-pressed') === 'true';
    var shown = 0;

    $('cxBody').querySelectorAll('.cx-card').forEach(function (el) {
      var k = el.getAttribute('data-k');
      var ok = (!q || el.getAttribute('data-find').indexOf(q) > -1) && !(hide && isDone(k));
      el.classList.toggle('is-hidden', !ok);
      if (ok) { shown++; }
    });

    $('lmEmpty').classList.toggle('cx-hide', shown > 0);
    $('lmShown').textContent = num(shown);
    paintProgress();
  }

  function paintProgress() {
    if (!$('lmDone')) { return; }
    var n = done.length, tot = total();
    $('lmDone').textContent = num(n);
    $('lmBar').style.width = (tot ? (n / tot * 100) : 0) + '%';
  }

  /* ==================================================================== 3
     VIEWS                                                                */
  var view = 'lesson';

  function paintTabs() {
    $('cxTabs').innerHTML =
      '<button type="button" role="tab" data-view="lesson" aria-selected="' + (view === 'lesson') + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"/><path d="M8 8h7M8 12h5"/></svg>' +
        esc(t('lesson')) + '</button>' +
      '<button type="button" role="tab" data-view="exercises" aria-selected="' + (view === 'exercises') + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4"/></svg>' +
        esc(t('exercises')) + ' <span class="lv">' + num(total()) + '</span></button>';
  }

  function paint(scroll) {
    paintTabs();
    var host = $('cxBody');
    host.innerHTML = view === 'lesson' ? renderLesson() : renderExercises();

    if (view === 'exercises') {
      $('lmSearch').addEventListener('input', applyFilter);
      $('lmHideDone').addEventListener('click', function () {
        this.setAttribute('aria-pressed', String(this.getAttribute('aria-pressed') !== 'true'));
        applyFilter();
      });
      $('lmReset').addEventListener('click', function () {
        done = []; picks = {};
        save(STORE, done); save(PICKS, picks);
        paint(false);
      });
      $('lmPrint').addEventListener('click', function () { window.print(); });
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
    var pick = e.target.closest('[data-pick]');
    if (pick) {
      var pk = pick.getAttribute('data-pick'), pi = +pick.getAttribute('data-i');
      picks[pk] = (picks[pk] === pi) ? null : pi;      /* click again to clear */
      save(PICKS, picks);
      pick.closest('.lm-opts').querySelectorAll('.lm-opt').forEach(function (b, i) {
        var on = picks[pk] === i;
        b.classList.toggle('is-picked', on);
        b.setAttribute('aria-pressed', String(on));
      });
      return;
    }

    var d = e.target.closest('[data-done]');
    if (!d) { return; }
    var k = d.getAttribute('data-done');
    var i = done.indexOf(k);
    if (i > -1) { done.splice(i, 1); } else { done.push(k); }
    save(STORE, done);
    d.setAttribute('aria-pressed', String(isDone(k)));
    d.closest('.cx-card').classList.toggle('is-done', isDone(k));
    applyFilter();
  });

  document.addEventListener('aa:langchange', function () { paint(false); });

  var start = (location.hash || '').replace('#', '');
  if (start === 'exercises' || start === 'lesson') { view = start; }
  paint(false);
})();
