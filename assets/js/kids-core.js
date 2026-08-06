/* Alpha Academy Cambodia — the kindergarten engine
   ---------------------------------------------------------------------------
   Everything the English and Chinese kindergarten pages have in common: the
   voice, the little sounds, the flip cards, the tab strip, the contents rail,
   and the whole game round. Neither language lives here — a page supplies its
   own modules and its own games and this file runs them.

       KidsCore.start({
         bestKey: 'aa-kg-best',       // namespaces the saved scores
         voice:   'en',               // which voice to hunt for: 'en' | 'zh'
         tabs:    [ {key, em, en, km, c} ],
         panel:   function (key) { return html; },
         games:   [ {key, em, c, t:{en,km}, p:{en,km}, make: fn} ],
         playP:   {en,km},            // optional — replaces the games blurb
         praise:  [ {s, em} ],        // said aloud, so in the taught language
         nudge:   [ {s, em} ],
         click:   function (near, target) { return handled; }   // optional
       });

   Two rules run through the whole thing and both follow from the age of the
   student.

   · THE PAGE READS ITSELF ALOUD. A four-year-old cannot read the question, so
     every question is spoken and every card is a speaker button. There are no
     audio files to ship or keep in sync — it is the browser's own voice.

   · A WRONG ANSWER IS NOT AN ENDING. Tapping the wrong card says "try again"
     and gives the card back; after two tries the right one starts glowing and
     the child taps it to move on. A round therefore always finishes. The star
     is what records whether it was right first time.

   The page furniture below is bilingual in place as {en,km} pairs, the same
   way the probability bank carries both languages side by side, so the two can
   never drift apart. Only the surrounding chrome uses data-i18n keys.        */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------ plumbing */
  function el(id) { return document.getElementById(id); }
  function lang() { return (global.AAi18n && global.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function t(o) { return (lang() === 'km' && o && o.km) ? o.km : (o ? o.en : ''); }

  /* The Khmer meaning of a taught word shows in BOTH languages, unlike the
     rest of the site. A card here is a bilingual flashcard — the foreign word
     is what is being taught and the Khmer is what it means — so hiding the
     Khmer from a Khmer child reading the English page would defeat the card. */
  function gloss(o) { return (o && o.km) ? o.km : ''; }

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
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* n items out of `pool` that are not `not`, compared with `key`. */
  function others(pool, n, not, key) {
    var bad = key(not), out = [], seen = {};
    shuffle(pool).forEach(function (o) {
      var k = key(o);
      if (out.length >= n || k === bad || seen[k]) { return; }
      seen[k] = 1; out.push(o);
    });
    return out;
  }

  var CLR = ['var(--kg-red)', 'var(--kg-orange)', 'var(--kg-green)',
             'var(--kg-blue)', 'var(--kg-purple)', 'var(--kg-pink)'];
  function clr(i) { return CLR[i % CLR.length]; }

  function tip(o) {
    return '<p class="kg-tip"><span class="em" aria-hidden="true">💡</span><span>' + t(o) + '</span></p>';
  }

  /* ==================================================================== 1
     THE VOICE
     One hunt, three targets. English voices are on practically every device;
     Chinese ones are on Chrome, Edge and Safari but not always elsewhere;
     Khmer ones are on very little at all. So the toolbar reports what was
     found and warns when there is nothing — and a page whose language may
     well have no voice has to be built so that it still teaches in silence.  */
  var VOICE = {
    en: {
      fallback: 'en-GB',
      score: function (l) {
        if (l.indexOf('en') !== 0) { return 0; }
        if (l === 'en-gb' || l === 'en-us' || l === 'en-au') { return 3; }
        return 2;
      },
      found:   { en: 'Voice: ', km: 'សំឡេង៖ ' },
      loading: { en: 'Loading the voice…', km: 'កំពុងផ្ទុកសំឡេង…' },
      none:    { en: 'No English voice on this device — the sound may be wrong.',
                 km: 'គ្មានសំឡេងអង់គ្លេសនៅលើឧបករណ៍នេះទេ — សំឡេងអាចខុស។' }
    },
    zh: {
      fallback: 'zh-CN',
      score: function (l) {
        if (l === 'zh' || l.indexOf('zh-cn') === 0 || l.indexOf('zh-hans') === 0) { return 4; }
        if (l.indexOf('cmn') === 0) { return 3; }
        if (l.indexOf('zh') === 0) { return 2; }   /* zh-TW / zh-HK — usable, other accent */
        return 0;
      },
      found:   { en: 'Chinese voice: ', km: 'សំឡេងចិន៖ ' },
      loading: { en: 'Loading the Chinese voice…', km: 'កំពុងផ្ទុកសំឡេងចិន…' },
      none:    { en: 'No Chinese voice on this device — Chrome, Edge or Safari has one.',
                 km: 'គ្មានសំឡេងចិននៅលើឧបករណ៍នេះទេ — Chrome, Edge ឬ Safari មាន។' }
    },
    /* Khmer is the one language here that usually has no voice at all: only
       Chrome on Android with Google Text-to-Speech reliably carries one. The
       warning therefore says what to do about it rather than just reporting
       the lack, and the Khmer page is built to work in silence regardless. */
    km: {
      fallback: 'km-KH',
      score: function (l) {
        if (l === 'km' || l.indexOf('km-') === 0 || l.indexOf('khm') === 0) { return 4; }
        return 0;
      },
      found:   { en: 'Khmer voice: ', km: 'សំឡេងខ្មែរ៖ ' },
      loading: { en: 'Looking for a Khmer voice…', km: 'កំពុងរកសំឡេងខ្មែរ…' },
      none:    { en: 'No Khmer voice on this device — every card still works, but a grown-up reads them. Chrome on Android with Google Text-to-Speech has one.',
                 km: 'គ្មានសំឡេងខ្មែរនៅលើឧបករណ៍នេះទេ — កាតទាំងអស់នៅតែប្រើបាន តែត្រូវឲ្យមនុស្សធំអានជូន។ Chrome លើ Android ដែលមាន Google Text-to-Speech មានសំឡេងនេះ។' }
    }
  };

  function makeSpeak(which) {
    var P = VOICE[which] || VOICE.en;
    var synth = global.speechSynthesis;
    var able = !!(synth && global.SpeechSynthesisUtterance);
    var voice = null, rate = 0.85, gen = 0, listeners = [];

    function score(v) {
      var l = (v.lang || '').toLowerCase().replace(/_/g, '-');
      var s = P.score(l);
      if (s && v.localService) { s += 1; }   /* local voices do not need the network */
      return s;
    }

    function refresh() {
      if (!able) { return; }
      var list = [];
      try { list = synth.getVoices() || []; } catch (e) { list = []; }
      var best = null, bestScore = 0;
      list.forEach(function (v) {
        var s = score(v);
        if (s > bestScore) { bestScore = s; best = v; }
      });
      voice = best;
      listeners.forEach(function (fn) { fn(status()); });
    }

    function status() {
      var list = [];
      try { list = (able && synth.getVoices()) || []; } catch (e) { list = []; }
      if (!able) {
        return { warn: true, en: 'This browser cannot read aloud. Chrome, Edge or Safari can.',
                 km: 'កម្មវិធីរុករកនេះមិនអាចអានឮៗបានទេ។ សូមប្រើ Chrome, Edge ឬ Safari។' };
      }
      if (voice) { return { warn: false, en: P.found.en + voice.name, km: P.found.km + voice.name }; }
      if (!list.length) { return { warn: false, en: P.loading.en, km: P.loading.km }; }
      return { warn: true, en: P.none.en, km: P.none.km };
    }

    function onStatus(fn) { listeners.push(fn); fn(status()); }

    /* say(text, opts) — cancels whatever was playing. Every call bumps `gen`,
       so a queued sequence dies the moment anything else speaks. A watchdog
       fires onend too, because some browsers never fire the real event.     */
    function say(text, opts) {
      opts = opts || {};
      gen++;
      var mine = gen;
      if (!able || !String(text).trim()) {
        if (opts.onend) { setTimeout(opts.onend, 0); }
        return;
      }
      try { synth.cancel(); } catch (e) {}

      var u = new global.SpeechSynthesisUtterance(String(text));
      u.lang = (voice && voice.lang) || P.fallback;
      u.rate = opts.rate || rate;
      u.pitch = opts.pitch || 1.05;      /* a shade brighter than the default */
      if (voice) { u.voice = voice; }

      var done = false;
      var finish = function () {
        if (done || mine !== gen) { return; }
        done = true;
        if (opts.onend) { opts.onend(); }
      };
      u.onend = finish;
      u.onerror = finish;

      setTimeout(function () {
        if (mine !== gen) { return; }
        try { synth.speak(u); } catch (e) { finish(); return; }
        setTimeout(finish, Math.max(1400, String(text).length * 900 / (opts.rate || rate)));
      }, 30);
    }

    /* Speak a list one after another — c … a … t … cat, or 一 … 二 … 三. */
    function series(items, opts) {
      opts = opts || {};
      var i = 0;
      (function step() {
        if (i >= items.length) { if (opts.onend) { opts.onend(); } return; }
        var it = items[i++];
        if (it.before) { it.before(); }
        say(it.text, { rate: it.rate || opts.rate, onend: function () {
          setTimeout(step, it.gap == null ? 160 : it.gap);
        }});
      })();
    }

    function stop() { gen++; try { synth && synth.cancel(); } catch (e) {} }

    if (able) {
      refresh();
      if (typeof synth.addEventListener === 'function') { synth.addEventListener('voiceschanged', refresh); }
      else { synth.onvoiceschanged = refresh; }
      setTimeout(refresh, 400);
      setTimeout(refresh, 1600);
    }

    return {
      say: say, series: series, stop: stop, onStatus: onStatus,
      setRate: function (r) { rate = r; },
      getRate: function () { return rate; }
    };
  }

  /* ==================================================================== 2
     THE LITTLE SOUNDS
     Short tones built with the Web Audio API rather than shipped as files:
     three effects, no download, and they work offline.                     */
  var Beep = (function () {
    var Ctx = global.AudioContext || global.webkitAudioContext, ctx = null;

    function ready() {
      if (!Ctx) { return null; }
      if (!ctx) { try { ctx = new Ctx(); } catch (e) { return null; } }
      /* Older Safari returns undefined from resume() rather than a promise. */
      if (ctx.state === 'suspended') {
        var p = ctx.resume();
        if (p && p.then) { p.then(null, function () {}); }
      }
      return ctx;
    }

    function tone(freq, at, len, type, vol) {
      var c = ready();
      if (!c) { return; }
      var o = c.createOscillator(), g = c.createGain(), t0 = c.currentTime + at;
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol || 0.16, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + len);
      o.connect(g); g.connect(c.destination);
      o.start(t0); o.stop(t0 + len + 0.03);
    }

    return {
      unlock: ready,
      ding:  function () { tone(1046, 0, .16); tone(1318, .09, .22); },
      buzz:  function () { tone(196, 0, .13, 'triangle', .12); tone(155, .1, .18, 'triangle', .12); },
      tada:  function () { [523, 659, 784, 1046].forEach(function (f, i) { tone(f, i * .1, .34); }); },
      tick:  function () { tone(660, 0, .07, 'sine', .1); }
    };
  })();

  /* ==================================================================== 3
     SHARED PAGE FURNITURE — everything around the lesson, in both languages */
  var T = {
    bar: {
      speed:  { en:'Speed',  km:'ល្បឿន' },
      slow:   { en:'Slow',   km:'យឺត' },
      normal: { en:'Normal', km:'ធម្មតា' },
      fast:   { en:'Fast',   km:'លឿន' },
      stop:   { en:'Stop sound', km:'បញ្ឈប់សំឡេង' }
    },
    side: {
      hide: { en:'Hide', km:'លាក់' },
      show: { en:'Show', km:'បង្ហាញ' }
    },
    play: {
      h: { en:'Let’s play!', km:'មកលេងល្បែងគ្នា!' },
      p: { en:'Seven games, ten questions each. Nothing is ever marked wrong — a wrong tap just says “try again”, so every round finishes happily. A star is given for every question answered right the first time.',
           km:'ល្បែង ៧ ប្រភេទ មួយៗមាន ១០ សំណួរ។ គ្មានការកត់ថាខុសទេ — បើចុចខុស វានឹងនិយាយថា “ព្យាយាមម្ដងទៀត” ដូច្នេះគ្រប់ជុំបញ្ចប់ដោយរីករាយ។ ផ្កាយមួយត្រូវបានផ្តល់ជូនរាល់សំណួរដែលឆ្លើយត្រូវលើកទីមួយ។' },
      best:   { en:'Best', km:'ល្អបំផុត' },
      go:     { en:'Play', km:'លេង' },
      quit:   { en:'← Back to the games', km:'← ត្រឡប់ទៅល្បែង' },
      listen: { en:'Listen again', km:'ស្តាប់ម្ដងទៀត' },
      again:  { en:'Play again', km:'លេងម្ដងទៀត' },
      more:   { en:'Another game', km:'ល្បែងផ្សេងទៀត' },
      of:     { en:'of', km:'ក្នុងចំណោម' }
    },
    said: {
      idle: { en:'Tap the right one', km:'ចុចលើរូបដែលត្រូវ' },
      show: { en:'Here it is — tap it!', km:'នៅទីនេះ — ចុចវា!' }
    },
    done: {
      h:  { en:'Round finished!', km:'ចប់ជុំហើយ!' },
      p3: { en:'Wonderful — nearly every one right first time.', km:'អស្ចារ្យណាស់ — ស្ទើរតែគ្រប់សំណួរត្រូវតាំងពីលើកទីមួយ។' },
      p2: { en:'Good work. Play it once more and you will beat that.', km:'ធ្វើបានល្អ។ លេងម្ដងទៀត អ្នកនឹងធ្វើបានប្រសើរជាងនេះ។' },
      p1: { en:'You finished the whole round — that is what matters. Try again!', km:'អ្នកបានបញ្ចប់ជុំទាំងមូល — នោះហើយជារឿងសំខាន់។ ព្យាយាមម្ដងទៀត!' },
      newBest: { en:'New best score!', km:'ពិន្ទុល្អបំផុតថ្មី!' }
    }
  };

  /* ==================================================================== 4
     THE ENGINE                                                             */
  function start(cfg) {
    var root = el('kgRoot');
    if (!root) { return; }

    var Speak = makeSpeak(cfg.voice || 'en');
    var TABS = cfg.tabs.map(function (x) { return x.key; });
    var META = {};
    cfg.tabs.forEach(function (x) { META[x.key] = x; });

    var current = TABS[0];
    var run = null;                /* the round in progress, if any */
    var spy = null;
    var lastStatus = null;

    /* ------------------------------------------------------ best scores */
    function bests() {
      try { return JSON.parse(localStorage.getItem(cfg.bestKey) || '{}') || {}; } catch (e) { return {}; }
    }
    function saveBest(k, v) {
      var all = bests();
      if ((all[k] || 0) >= v) { return false; }
      all[k] = v;
      try { localStorage.setItem(cfg.bestKey, JSON.stringify(all)); } catch (e) {}
      return true;
    }

    function gameByKey(k) {
      var g = null;
      cfg.games.forEach(function (x) { if (x.key === k) { g = x; } });
      return g;
    }

    /* --------------------------------------------------- the game menu */
    function panelPlay() {
      var b = bests();
      var h = '<div id="kgMenu"' + (run ? ' class="kg-hide"' : '') + '>' +
              '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🎮</span>' + t(T.play.h) + '</h3>' +
              /* The default blurb counts seven games out loud, so a page with
                 a different number of them supplies its own. */
              '<p class="say">' + t(cfg.playP || T.play.p) + '</p><div class="kg-games">';
      cfg.games.forEach(function (g) {
        h += '<button class="kg-gcard" type="button" data-game="' + g.key + '" style="--c:' + g.c + '">' +
               (b[g.key] ? '<span class="best">' + t(T.play.best) + ' ' + b[g.key] + '/10 ⭐</span>' : '') +
               '<span class="em" aria-hidden="true">' + g.em + '</span>' +
               '<h4>' + esc(t(g.t)) + '</h4><p>' + esc(t(g.p)) + '</p>' +
               '<span class="go">' + esc(t(T.play.go)) + ' <span aria-hidden="true">▸</span></span>' +
             '</button>';
      });
      return h + '</div></section></div><div id="kgPlay"></div>';
    }

    /* ---------------------------------------------------- the play screen */
    function askHTML(a) {
      if (a.kind === 'listen') {
        return '<button class="kg-listen" type="button" data-replay="1">' +
                 '<span class="em" aria-hidden="true">🔊</span>' + t(T.play.listen) + '</button>' +
               (a.label ? '<p class="ask">' + esc(a.label) + (a.km ? ' · ' + esc(a.km) : '') + '</p>' : '');
      }
      if (a.kind === 'emoji') {
        return '<span class="big" aria-hidden="true">' + a.em + '</span>' +
               (a.label || a.km ? '<p class="ask">' + esc(a.label || '') +
                 (a.km ? (a.label ? ' · ' : '') + esc(a.km) : '') + '</p>' : '') +
               '<button class="kg-listen" type="button" data-replay="1">' +
                 '<span class="em" aria-hidden="true">🔊</span>' + t(T.play.listen) + '</button>';
      }
      if (a.kind === 'count') {
        return '<span class="count" aria-hidden="true">' + a.dots + '</span>' +
               '<button class="kg-listen" type="button" data-replay="1">' +
                 '<span class="em" aria-hidden="true">🔊</span>' + t(T.play.listen) + '</button>';
      }
      if (a.kind === 'glyph') {
        return '<span class="bigletter' + (a.cls ? ' ' + a.cls : '') + '">' + esc(a.text) + '</span>' +
               (a.label ? '<p class="ask">' + esc(a.label) + '</p>' : '') +
               '<button class="kg-listen" type="button" data-replay="1">' +
                 '<span class="em" aria-hidden="true">🔊</span>' + t(T.play.listen) + '</button>';
      }
      return '';
    }

    /* `cls` rides along on an option so a page can ask for its own type —
       the Chinese page needs its characters in a Chinese face, and the core
       has no business knowing that. */
    function optHTML(o, i) {
      var inner, cls = o.cls ? ' ' + o.cls : '';
      if (o.kind === 'emoji')       { inner = '<span class="em" aria-hidden="true">' + o.em + '</span>'; }
      else if (o.kind === 'letter') { inner = '<span class="t' + cls + '">' + esc(o.text) + '</span>'; }
      else if (o.kind === 'word')   { inner = '<span class="t small' + cls + '">' + esc(o.text) + '</span>'; }
      else if (o.kind === 'swatch') { inner = '<span class="sw" style="background:' + o.hex + '"></span>'; }
      else if (o.kind === 'shape')  { inner = '<svg class="shape" viewBox="0 0 100 100" aria-hidden="true"><path d="' + o.d + '"/></svg>'; }
      else { inner = ''; }
      /* kg-sub, not sub: the shared stylesheet owns .sub for the nav
         dropdowns and hides it off-screen, which silently swallowed this. */
      if (o.sub) { inner += '<span class="kg-sub">' + esc(o.sub) + '</span>'; }
      return '<button class="kg-opt" type="button" data-i="' + i + '" aria-label="' + esc(o.say || o.text || '') + '">' +
               inner + '<span class="mark" aria-hidden="true"></span></button>';
    }

    function paintRound() {
      var mount = el('kgPlay');
      if (!mount || !run) { return; }
      var g = run.game, qn = run.qs[run.i];
      if (!qn) { paintDone(); return; }        /* the round is already over */

      var stars = '';
      for (var s = 0; s < run.qs.length; s++) {
        stars += '<i' + (run.stars[s] ? ' class="on"' : '') + ' aria-hidden="true">⭐</i>';
      }

      mount.innerHTML =
        '<div class="kg-play" style="--c:' + g.c + '">' +
          '<div class="kg-phead">' +
            '<h3><span class="em" aria-hidden="true">' + g.em + '</span> ' + esc(t(g.t)) + '</h3>' +
            '<span class="kg-count">' + (run.i + 1) + ' ' + t(T.play.of) + ' ' + run.qs.length + '</span>' +
            '<button class="kg-quit" type="button" data-quit="1">' + t(T.play.quit) + '</button>' +
          '</div>' +
          '<div class="kg-stars">' + stars + '</div>' +
          '<div class="kg-ask">' + askHTML(qn.ask) + '</div>' +
          '<div class="kg-opts' + (qn.opts.length === 4 ? ' four' : '') + '">' +
            qn.opts.map(optHTML).join('') +
          '</div>' +
          '<div class="kg-said idle"><span>' + t(T.said.idle) + '</span></div>' +
        '</div>';

      mount.scrollIntoView({ behavior:'smooth', block:'start' });
      run.tries = 0;
      setTimeout(function () { Speak.say(qn.say, { rate: qn.slow ? 0.7 : undefined }); }, 260);
    }

    function said(cls, em, text) {
      var box = document.querySelector('#kgPlay .kg-said');
      if (!box) { return; }
      box.className = 'kg-said ' + cls;
      box.innerHTML = (em ? '<span class="em" aria-hidden="true">' + em + '</span>' : '') +
                      '<span>' + esc(text) + '</span>';
    }

    function answer(i) {
      if (!run || run.locked) { return; }
      var qn = run.qs[run.i];
      var btns = document.querySelectorAll('#kgPlay .kg-opt');
      var btn = btns[i];
      if (!btn || btn.disabled) { return; }

      if (i === qn.ans) {
        run.locked = true;
        if (run.tries === 0) { run.stars[run.i] = 1; }
        btn.classList.remove('wrong');
        btn.classList.add('right');
        btn.querySelector('.mark').textContent = '✓';
        btns.forEach(function (b) { b.disabled = true; });

        var star = document.querySelectorAll('#kgPlay .kg-stars i')[run.i];
        if (star && run.stars[run.i]) { star.classList.add('on'); }

        Beep.ding();
        var p = pick(cfg.praise);
        said('ok', p.em, p.s);
        setTimeout(function () { Speak.say(p.s); }, 220);

        setTimeout(function () {
          if (!run) { return; }
          run.i++;
          run.locked = false;
          if (run.i >= run.qs.length) { finish(); } else { paintRound(); }
        }, 1250);
        return;
      }

      /* wrong — never a dead end */
      run.tries++;
      btn.classList.add('wrong');
      btn.querySelector('.mark').textContent = '✗';
      btn.disabled = true;
      Beep.buzz();

      if (run.tries >= 2) {
        var right = btns[qn.ans];
        if (right) { right.classList.add('show'); }
        said('no', '👉', t(T.said.show));
        setTimeout(function () { Speak.say(qn.say, { rate: qn.slow ? 0.7 : undefined }); }, 200);
      } else {
        var n = pick(cfg.nudge);
        said('no', n.em, n.s);
        setTimeout(function () { Speak.say(n.s); }, 200);
      }
    }

    function confetti() {
      if (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
      var cols = ['#ff5a5f', '#ff9f1c', '#ffd23f', '#2ec4b6', '#3a86ff', '#8f5cf7', '#ff70a6'];
      var box = document.createElement('div');
      box.className = 'kg-confetti';
      var h = '';
      for (var i = 0; i < 70; i++) {
        h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;' +
             'background:' + cols[i % cols.length] + ';' +
             'animation-duration:' + (2.2 + Math.random() * 1.8).toFixed(2) + 's;' +
             'animation-delay:' + (Math.random() * .7).toFixed(2) + 's"></i>';
      }
      box.innerHTML = h;
      document.body.appendChild(box);
      setTimeout(function () { box.remove(); }, 5200);
    }

    /* Drawing the result is kept apart from reaching it, so a language switch
       on the results screen can redraw it without setting off the party. */
    function paintDone() {
      var mount = el('kgPlay');
      if (!mount || !run || !run.result) { return; }
      var g = run.game, got = run.result.got, isBest = run.result.isBest;
      var line = got >= 8 ? T.done.p3 : got >= 5 ? T.done.p2 : T.done.p1;
      var face = got >= 8 ? '🏆' : got >= 5 ? '🎉' : '🌱';

      mount.innerHTML =
        '<div class="kg-play" style="--c:' + g.c + '"><div class="kg-done">' +
          '<span class="em" aria-hidden="true">' + face + '</span>' +
          '<h3>' + t(T.done.h) + '</h3>' +
          '<div class="score">' + got + ' / ' + run.qs.length + ' ⭐</div>' +
          (isBest ? '<p style="color:var(--c);font-weight:800">' + t(T.done.newBest) + '</p>' : '') +
          '<p>' + t(line) + '</p>' +
          '<div class="kg-again">' +
            '<button class="kg-btn" type="button" data-replaygame="' + g.key + '">' + t(T.play.again) + '</button>' +
            '<button class="kg-btn kg-btn--ghost" type="button" data-quit="1">' + t(T.play.more) + '</button>' +
          '</div>' +
        '</div></div>';

      mount.scrollIntoView({ behavior:'smooth', block:'start' });
    }

    function finish() {
      if (!run) { return; }
      var got = run.stars.reduce(function (a, b) { return a + (b || 0); }, 0);
      run.result = { got: got, isBest: saveBest(run.game.key, got) };
      paintDone();
      Beep.tada();
      confetti();
      setTimeout(function () { Speak.say(pick(cfg.praise).s); }, 500);
    }

    function startGame(key) {
      var g = gameByKey(key);
      if (!g) { return; }
      Beep.unlock();
      run = { game:g, qs:g.make(), i:0, stars:[], tries:0, locked:false, result:null };
      var menu = el('kgMenu');
      if (menu) { menu.classList.add('kg-hide'); }
      paintRound();
    }

    function quitGame() {
      run = null;
      Speak.stop();
      var mount = el('kgPlay');
      if (mount) { mount.innerHTML = ''; }
      render();                       /* redraw the menu so a new best shows */
      var tabs = el('kgTabs');
      if (tabs) { tabs.scrollIntoView({ behavior:'smooth', block:'start' }); }
    }

    /* ------------------------------------------------------ flip cards */
    function flipCard(btn) {
      var on = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', on ? 'false' : 'true');
      if (on) { Speak.stop(); return; }

      /* data-flip holds what to say, pipe separated — "A|Apple" reads the
         letter, a beat, then the word. Turning back is silent, so flipping a
         whole row back is not a wall of noise. */
      var parts = (btn.getAttribute('data-flip') || '').split('|').filter(Boolean);
      if (!parts.length) { return; }
      Beep.unlock();
      Beep.tick();
      Speak.series(parts.map(function (p, i) {
        return { text: p, gap: i === parts.length - 1 ? 0 : 260 };
      }));
    }

    function flipAll(on) {
      var panel = el('kgPanel');
      if (!panel) { return; }
      Speak.stop();
      panel.querySelectorAll('[data-flip]').forEach(function (b) {
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      Beep.tick();
    }

    /* ------------------------------------------------------ drawing it */
    function render() {
      var panel = el('kgPanel');
      if (!panel) { return; }
      panel.innerHTML = (current === 'play') ? panelPlay() : cfg.panel(current);
      stampSections();
      paintOutline();
      wireSpy();
    }

    /* The section list is read back out of the panel that was just rendered —
       the titles come from each <h3>, so the rail cannot drift from the page.
       Only the open module lists its sections, because scrolling to a heading
       inside a module that is not on screen would mean nothing. */
    function stampSections() {
      var panel = el('kgPanel');
      if (!panel) { return; }
      var n = 0;
      panel.querySelectorAll('.kg-sec').forEach(function (s) {
        s.id = 'kgs-' + current + '-' + (n++);
      });
    }

    function sectionsHere() {
      var panel = el('kgPanel'), out = [];
      if (!panel) { return out; }
      panel.querySelectorAll('.kg-sec').forEach(function (s) {
        var head = s.querySelector('h3');
        if (!head) { return; }
        /* Joined child by child rather than read off textContent: the heading
           puts its emoji in its own span with no whitespace between, and the
           flex gap that separates them on screen does not exist in the text. */
        var label = [].map.call(head.childNodes, function (n) {
          return (n.textContent || '').replace(/\s+/g, ' ').trim();
        }).filter(Boolean).join(' ');
        out.push({ id: s.id, label: label });
      });
      return out;
    }

    function paintOutline() {
      var nav = el('kgOutline');
      if (!nav) { return; }
      var secs = sectionsHere();

      nav.innerHTML = TABS.map(function (k) {
        var d = META[k], on = k === current;
        return '<div class="kg-og' + (on ? ' is-on' : '') + '" data-og="' + k + '" style="--c:' + d.c + '">' +
          '<button class="kg-og-link" type="button" data-tab="' + k + '"' +
            (on ? ' aria-current="true"' : '') + '>' +
            '<span class="em" aria-hidden="true">' + d.em + '</span>' +
            '<span class="lb">' + t(d) + '</span>' +
          '</button>' +
          (on && secs.length > 1
            ? '<ul class="kg-og-secs">' + secs.map(function (s) {
                return '<li><button type="button" data-sec="' + s.id + '">' + esc(s.label) + '</button></li>';
              }).join('') + '</ul>'
            : '') +
        '</div>';
      }).join('');
    }

    /* Marks the section you are reading in the rail. */
    function wireSpy() {
      if (spy) { spy.disconnect(); spy = null; }
      if (!('IntersectionObserver' in global)) { return; }
      var panel = el('kgPanel'), nav = el('kgOutline');
      if (!panel || !nav) { return; }

      spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) { return; }
          nav.querySelectorAll('[data-sec]').forEach(function (b) {
            b.classList.toggle('is-here', b.getAttribute('data-sec') === en.target.id);
          });
        });
      }, { rootMargin: '-160px 0px -65% 0px' });

      panel.querySelectorAll('.kg-sec').forEach(function (s) { spy.observe(s); });
    }

    function goToSection(id) {
      var node = document.getElementById(id);
      if (node) { node.scrollIntoView({ behavior:'smooth', block:'start' }); }
    }

    function narrow() { return global.innerWidth < 1080; }

    function setSideOpen(open) {
      var side = el('kgSide'), btn = el('kgSideToggle');
      if (!side || !btn) { return; }
      side.classList.toggle('is-collapsed', !open);
      btn.setAttribute('aria-expanded', String(open));
      var lab = btn.querySelector('span');
      if (lab) { lab.textContent = open ? t(T.side.hide) : t(T.side.show); }
    }

    function paintTabs() {
      var bar = el('kgTabs');
      if (!bar) { return; }
      bar.innerHTML = TABS.map(function (k) {
        var d = META[k];
        return '<button class="kg-tab" type="button" role="tab" data-tab="' + k + '" ' +
               'style="--c:' + d.c + '" aria-selected="' + (k === current ? 'true' : 'false') + '">' +
               '<span class="em" aria-hidden="true">' + d.em + '</span>' + t(d) + '</button>';
      }).join('');
    }

    function paintVoice(st) {
      lastStatus = st;
      var v = el('kgVoice');
      if (!v || !st) { return; }
      v.textContent = t(st);
      v.className = 'kg-voice' + (st.warn ? ' warn' : '');
    }

    function paintBar() {
      var b = el('kgBar');
      if (!b) { return; }
      var r = Speak.getRate();
      b.innerHTML =
        '<span class="lab">' + t(T.bar.speed) + '</span>' +
        '<span class="kg-speed" id="kgSpeed" role="group">' +
          '<button type="button" data-rate="0.65" aria-pressed="' + (r === 0.65) + '">' + t(T.bar.slow) + '</button>' +
          '<button type="button" data-rate="0.85" aria-pressed="' + (r === 0.85) + '">' + t(T.bar.normal) + '</button>' +
          '<button type="button" data-rate="1"    aria-pressed="' + (r === 1) + '">' + t(T.bar.fast) + '</button>' +
        '</span>' +
        '<button class="kg-stop" type="button" id="kgStop">' + t(T.bar.stop) + '</button>' +
        '<span class="spacer"></span>' +
        '<span class="kg-voice" id="kgVoice"></span>';
      paintVoice(lastStatus);
    }

    function setTab(k, push) {
      if (TABS.indexOf(k) < 0) { return; }
      current = k;
      run = null;
      Speak.stop();
      paintTabs();
      render();
      if (push && history.replaceState) { history.replaceState(null, '', '#' + k); }
    }

    /* ---------------------------------------------------------- one listener
       Everything on this page is a speaker button, so rather than binding each
       card the clicks are caught once here.                                  */
    function wire() {
      /* closest(), but it refuses to walk out of the page root. This matters:
         boot.js puts data-theme and lang on <html>, so a plain closest() for a
         short attribute name matches the document element on every single
         click and swallows the one that was actually meant. */
      function near(node, sel) {
        var hit = node.closest(sel);
        return (hit && root.contains(hit)) ? hit : null;
      }

      root.addEventListener('click', function (e) {
        var n;

        /* the flashcards come first — they are the most-tapped thing here */
        if ((n = near(e.target, '[data-flip]')))         { flipCard(n); return; }
        if ((n = near(e.target, '[data-flipall]')))      { flipAll(n.getAttribute('data-flipall') === '1'); return; }

        if (near(e.target, '#kgSideToggle'))             {
          var side = el('kgSide');
          setSideOpen(!side || side.classList.contains('is-collapsed'));
          return;
        }
        if ((n = near(e.target, '[data-sec]')))          {
          goToSection(n.getAttribute('data-sec'));
          if (narrow()) { setSideOpen(false); }
          return;
        }

        if ((n = near(e.target, '[data-tab]')))          {
          setTab(n.getAttribute('data-tab'), true);
          Beep.unlock();
          if (narrow()) { setSideOpen(false); }
          return;
        }
        if ((n = near(e.target, '[data-rate]')))         {
          var r = parseFloat(n.getAttribute('data-rate'));
          Speak.setRate(r);
          n.parentNode.querySelectorAll('button').forEach(function (b) {
            b.setAttribute('aria-pressed', b === n ? 'true' : 'false');
          });
          Speak.say(cfg.hello || 'Hello!');
          return;
        }
        if (near(e.target, '#kgStop'))                   { Speak.stop(); return; }

        /* game screen */
        if (near(e.target, '[data-quit]'))               { quitGame(); return; }
        if ((n = near(e.target, '[data-replaygame]')))   { startGame(n.getAttribute('data-replaygame')); return; }
        if ((n = near(e.target, '[data-game]')))         { startGame(n.getAttribute('data-game')); return; }
        if (near(e.target, '[data-replay]'))             {
          if (run) { var qn = run.qs[run.i]; Speak.say(qn.say, { rate: qn.slow ? 0.7 : undefined }); }
          return;
        }
        if ((n = near(e.target, '.kg-opt')))             { answer(+n.getAttribute('data-i')); return; }

        /* whatever the page itself wants to handle */
        if (cfg.click && cfg.click(near, e.target)) { return; }

        /* anything else carrying data-say is simply spoken */
        if ((n = near(e.target, '[data-say]')))          {
          Beep.unlock();
          Speak.say(n.getAttribute('data-say'), { rate: n.hasAttribute('data-slow') ? 0.6 : undefined });
        }
      });
    }

    /* ---------------------------------------------------------------- go */
    var hash = (location.hash || '').replace('#', '');
    if (TABS.indexOf(hash) > -1) { current = hash; }

    Speak.onStatus(paintVoice);
    paintBar();
    paintTabs();
    render();                       /* also draws the rail and the scroll spy */
    wire();
    setSideOpen(!narrow());         /* folded away on a phone, open on a desk */

    global.addEventListener('hashchange', function () {
      var h = (location.hash || '').replace('#', '');
      if (TABS.indexOf(h) > -1 && h !== current) { setTab(h, false); }
    });

    /* Crossing the 1080px line changes what the rail is: a column beside the
       lesson, or a drawer above it. Only react to the crossing, so a phone
       rotating does not throw away a rail the reader opened on purpose. */
    var wasNarrow = narrow();
    global.addEventListener('resize', function () {
      var isNarrow = narrow();
      if (isNarrow !== wasNarrow) { wasNarrow = isNarrow; setSideOpen(!isNarrow); }
    });

    /* A language change redraws everything — the Khmer glosses live inside the
       cards, so a repaint is the only way they can follow the switch. */
    document.addEventListener('aa:langchange', function () {
      var keep = run;               /* render() rebuilds the menu underneath */
      var side = el('kgSide');
      var wasOpen = !(side && side.classList.contains('is-collapsed'));
      paintBar();
      paintTabs();
      render();
      setSideOpen(wasOpen);         /* relabels Hide/Show in the new language */
      if (keep && current === 'play') {
        run = keep;
        /* paintRound falls through to the results screen once the round is
           over, so a switch on either screen redraws the right one. */
        paintRound();
      }
    });

    /* Leaving the page with a voice still talking is startling. */
    global.addEventListener('pagehide', function () { Speak.stop(); });

    return { speak: Speak, render: render, current: function () { return current; } };
  }

  global.KidsCore = {
    start: start,
    /* the bits a page needs while it builds its own panels */
    lang: lang, t: t, gloss: gloss, esc: esc,
    shuffle: shuffle, pick: pick, others: others, clr: clr, tip: tip,
    beep: Beep
  };
})(window);
