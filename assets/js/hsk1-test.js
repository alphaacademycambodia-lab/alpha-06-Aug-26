/* Alpha Academy Cambodia — HSK 1 chapter tests
   ---------------------------------------------------------------------------
   Draws the fifteen chapter cards, runs each test through the shared quiz
   engine (assets/js/quiz-engine.js — the same one the English tenses and
   grammar pages use) and keeps each student's best score per chapter.

   The whole thing sits behind AAGate, so nothing below runs until a student
   has registered. See assets/js/aa-gate.js for what that does and does not
   guarantee.                                                                 */
(function () {
  'use strict';

  var B = window.HSK1_BANK;
  if (!B) { return; }

  function el(id) { return document.getElementById(id); }
  function lang() { return (window.AAi18n && window.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function t(o) { return (lang() === 'km' && o && o.km) ? o.km : (o ? o.en : ''); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function shuffle(a) {
    var out = a.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), tmp = out[i];
      out[i] = out[j]; out[j] = tmp;
    }
    return out;
  }

  /* Every question in the bank is written with its right answer first, so a
     question can be checked at a glance while editing. That would put the
     answer at A every single time on screen, so the options are permuted here
     and `ans` is moved to wherever the right one landed.

     The Khmer overlay (assets/js/hsk1-bank-km.js) is merged in at the same
     time. Both languages are permuted by the SAME index list — shuffling them
     separately would put the Khmer answer in a different place from the
     English one, and switching language mid-question would silently change
     which option is correct. */
  function shuffleQ(q, km) {
    var order = shuffle(q.opts.map(function (_, i) { return i; }));
    var out = {
      q:    q.q,
      opts: order.map(function (i) { return q.opts[i]; }),
      ans:  order.indexOf(q.ans),
      why:  q.why
    };
    if (km) {
      if (km.q)   { out.qkm = km.q; }
      if (km.why) { out.whykm = km.why; }
      /* Khmer options only exist where the English ones were English words;
         where they are Chinese characters the overlay leaves them off and the
         originals are used in both languages. */
      if (km.opts && km.opts.length === q.opts.length) {
        out.optskm = order.map(function (i) { return km.opts[i]; });
      }
    }
    return out;
  }

  /* The overlay for one lesson, or null if it has none. */
  function kmFor(key) {
    var o = window.HSK1_KM;
    if (!o) { return null; }
    return o[key === 'final' ? 'final' : 'L' + key] || null;
  }

  /* What the lesson is about, in whichever language is on. Falls back to the
     English rather than going blank if a title has no Khmer yet. */
  function title(L) {
    var km = window.HSK1_KM && window.HSK1_KM.titles;
    return (lang() === 'km' && km && km[L.n]) ? km[L.n] : L.en;
  }

  var T = {
    h:      { en:'HSK 1 — chapter tests', km:'HSK ១ — តេស្តតាមមេរៀន' },
    p:      { en:'Fifteen tests, one for each lesson of <i>HSK Standard Course 1</i>, and a final paper over the whole book. Every question uses only the words taught up to that lesson, and every answer comes with the reason.',
              km:'តេស្ត ១៥ មួយៗសម្រាប់មេរៀននីមួយៗនៃ <i>HSK Standard Course 1</i> និងវិញ្ញាសាចុងក្រោយលើសៀវភៅទាំងមូល។ រាល់សំណួរប្រើតែពាក្យដែលបានរៀនរហូតដល់មេរៀននោះ ហើយរាល់ចម្លើយមានហេតុផលភ្ជាប់មក។' },
    lesson: { en:'Lesson', km:'មេរៀន' },
    qs:     { en:'questions', km:'សំណួរ' },
    words:  { en:'new words', km:'ពាក្យថ្មី' },
    start:  { en:'Start test', km:'ចាប់ផ្តើមតេស្ត' },
    retake: { en:'Take again', km:'ធ្វើម្តងទៀត' },
    best:   { en:'Best', km:'ល្អបំផុត' },
    grammar:{ en:'Grammar in this lesson', km:'វេយ្យាករណ៍ក្នុងមេរៀននេះ' },
    vocab:  { en:'Words in this lesson', km:'ពាក្យក្នុងមេរៀននេះ' },
    finalH: { en:'Final paper', km:'វិញ្ញាសាចុងក្រោយ' },
    finalP: { en:'Twenty questions drawn from all fifteen lessons. Best taken once you have worked through the chapters.',
              km:'សំណួរម្ភៃដកស្រង់ពីមេរៀនទាំង ១៥។ គួរធ្វើបន្ទាប់ពីបានឆ្លងកាត់មេរៀនទាំងអស់។' },
    exit:   { en:'Back to the chapters', km:'ត្រឡប់ទៅមេរៀន' },
    next:   { en:'Next lesson →', km:'មេរៀនបន្ទាប់ →' },
    doneN:  { en:'chapters done', km:'មេរៀនបានធ្វើ' },
    ready:  { en:'Ready when you are.', km:'រួចរាល់ហើយ។' }
  };

  /* ------------------------------------------------------- saved results */
  var KEY = 'aa-hsk1-best';
  function bests() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function saveBest(k, pct) {
    var all = bests();
    if ((all[k] || -1) >= pct) { return false; }
    all[k] = pct;
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {}
    return true;
  }

  function ringClass(pct) {
    return pct == null ? '' : pct >= 80 ? ' is-good' : pct >= 60 ? ' is-ok' : ' is-low';
  }

  /* -------------------------------------------------------- the chapters */
  function paintList() {
    var wrap = el('hskList');
    if (!wrap) { return; }
    var b = bests();
    var done = Object.keys(b).filter(function (k) { return k !== 'final'; }).length;

    var h = '<div class="hsk-head">' +
              '<div>' +
                '<h2>' + t(T.h) + '</h2>' +
                '<p class="lede">' + t(T.p) + '</p>' +
              '</div>' +
              '<div class="hsk-progress">' +
                '<b>' + done + ' / ' + B.lessons.length + '</b>' +
                '<small>' + t(T.doneN) + '</small>' +
              '</div>' +
            '</div>' +
            (window.AAGate ? window.AAGate.badge(window.AAGate.user() || { name:'' }) : '') +
            '<div class="hsk-grid">';

    B.lessons.forEach(function (L) {
      var pct = b['L' + L.n];
      h += '<article class="hsk-card' + ringClass(pct) + '">' +
             '<span class="n">' + t(T.lesson) + ' ' + L.n + '</span>' +
             '<h3><span class="hz">' + esc(L.hz) + '</span></h3>' +
             '<p class="py">' + esc(L.py) + '</p>' +
             '<p class="en">' + esc(title(L)) + '</p>' +
             '<span class="meta">' + L.qs.length + ' ' + t(T.qs) +
               ' · ' + L.words.length + ' ' + t(T.words) + '</span>' +
             (pct == null ? '' : '<span class="score">' + t(T.best) + ' ' + pct + '%</span>') +
             '<button type="button" data-test="' + L.n + '">' +
               (pct == null ? t(T.start) : t(T.retake)) + '</button>' +
           '</article>';
    });

    var fp = b.final;
    h += '</div>' +
         '<article class="hsk-card hsk-final' + ringClass(fp) + '">' +
           '<span class="n">' + t(T.finalH) + '</span>' +
           '<h3><span class="hz">HSK 1</span></h3>' +
           '<p class="en">' + t(T.finalP) + '</p>' +
           '<span class="meta">' + B.final.length + ' ' + t(T.qs) + '</span>' +
           (fp == null ? '' : '<span class="score">' + t(T.best) + ' ' + fp + '%</span>') +
           '<button type="button" data-test="final">' +
             (fp == null ? t(T.start) : t(T.retake)) + '</button>' +
         '</article>';

    wrap.innerHTML = h;
    wrap.classList.remove('kg-hide');
    el('hskQuiz').innerHTML = '';
  }

  /* ------------------------------------------------------------ one test */
  function lessonBy(n) {
    var found = null;
    B.lessons.forEach(function (L) { if (String(L.n) === String(n)) { found = L; } });
    return found;
  }

  function run(key) {
    var mount = el('hskQuiz'), list = el('hskList');
    if (!mount || !window.AAQuiz) { return; }

    var isFinal = key === 'final';
    var L = isFinal ? null : lessonBy(key);
    if (!isFinal && !L) { return; }

    var src = isFinal ? B.final : L.qs;
    var km = kmFor(key);
    var questions = shuffle(src.map(function (q, i) {
      return shuffleQ(q, km ? km[i] : null);
    }));
    /* heading, not `title` — a local of that name would shadow the title()
       helper that is being called on the very next line */
    var heading = isFinal
      ? 'HSK 1 — ' + t(T.finalH)
      : t(T.lesson) + ' ' + L.n + ' · ' + L.hz + ' — ' + title(L);

    list.classList.add('kg-hide');

    /* The next chapter, so a student can carry straight on. */
    var idx = isFinal ? -1 : B.lessons.indexOf(L);
    var nextL = (idx > -1 && idx < B.lessons.length - 1) ? B.lessons[idx + 1] : null;

    window.AAQuiz.start({
      mount: mount,
      questions: questions,
      badge: isFinal ? 'HSK 1' : 'HSK 1 · ' + t(T.lesson) + ' ' + L.n,
      title: heading,
      subtitle: isFinal ? t(T.finalP) : L.py,
      exitLabel: t(T.exit),
      onExit: paintList,
      onRetake: function () { run(key); },
      onNextUnit: nextL ? function () { run(nextL.n); } : null,
      nextLabel: nextL ? (t(T.next) + ' ' + nextL.hz) : '',
      onFinish: function (r) { saveBest(isFinal ? 'final' : 'L' + key, r.pct); }
    });

    mount.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  /* ------------------------------------------------------------------ go */
  function open() {
    paintList();

    var root = el('hskRoot');
    root.addEventListener('click', function (e) {
      var n = e.target.closest('[data-test]');
      if (n) { run(n.getAttribute('data-test')); return; }

      if (e.target.closest('[data-aa-forget]')) {
        window.AAQuiz && window.AAQuiz.stop();
        window.AAGate.forget();
        location.reload();
      }
    });

    /* A language change repaints the chapter list. A test already running is
       left alone — the quiz engine holds the student's answers, and throwing
       them away to relabel two buttons would be a poor trade. */
    document.addEventListener('aa:langchange', function () {
      if (!window.AAQuiz || !window.AAQuiz.hasSession()) { paintList(); }
    });
  }

  function init() {
    if (!el('hskRoot')) { return; }
    if (window.AAGate) {
      window.AAGate.protect({ mount: el('hskGate'), onOpen: open, what: 'HSK 1' });
    } else {
      open();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
