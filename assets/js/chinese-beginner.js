/* Alpha Academy Cambodia — Chinese for Beginners
   ---------------------------------------------------------------------------
   Six modules — pinyin, sound, writing, numbers, words, conversation — drawn
   from assets/js/chinese-bank.js and styled by assets/css/chinese.css.

   Audio uses the browser's own speech synthesis with a Chinese voice. It is
   always given Chinese characters, never pinyin: a zh-CN voice reads 你好
   correctly but would read "nǐ hǎo" as English letters.                     */
(function () {
  'use strict';

  var B = window.ZH_BANK || {};
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function lang() { return (window.AAi18n && window.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function gloss(o) { return (lang() === 'km' && o && o.km) ? o.km : (o ? o.en : ''); }

  function shuffle(a) {
    var out = a.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = out[i];
      out[i] = out[j]; out[j] = t;
    }
    return out;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ==================================================================== 1
     SPEECH                                                                */
  var Speak = (function () {
    var synth = window.speechSynthesis;
    var able = !!(synth && window.SpeechSynthesisUtterance);
    var voice = null, rate = 0.85, gen = 0, listeners = [];

    function score(v) {
      var l = (v.lang || '').toLowerCase().replace(/_/g, '-');
      if (l === 'zh' || l.indexOf('zh-cn') === 0 || l.indexOf('zh-hans') === 0) { return 4; }
      if (l.indexOf('cmn') === 0) { return 3; }
      if (l.indexOf('zh') === 0) { return 2; }   /* zh-TW / zh-HK — usable, different accent */
      return 0;
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
        return { ok: false, warn: true,
          msg: 'This browser cannot play audio. Chrome, Edge or Safari will read the Chinese aloud.' };
      }
      if (voice) {
        return { ok: true, warn: false, msg: 'Chinese voice: ' + voice.name };
      }
      if (!list.length) {
        return { ok: true, warn: false, msg: 'Loading the device voice…' };
      }
      return { ok: true, warn: true,
        msg: 'No Chinese voice found on this device — the audio may sound wrong. Chrome or Edge on a computer, or adding a Chinese voice in your phone settings, fixes it.' };
    }

    function onStatus(fn) { listeners.push(fn); fn(status()); }

    /* say(text, { onend }) — cancels whatever is playing first. Every call
       bumps `gen`, so a queued sequence stops as soon as anything else is
       spoken. `onend` is also fired by a watchdog, because a few browsers
       never fire the real event when no voice matches the language.        */
    function say(text, opts) {
      opts = opts || {};
      gen++;
      var mine = gen;
      if (!able) { if (opts.onend) { opts.onend(); } return false; }

      try { synth.cancel(); } catch (e) {}

      var u = new window.SpeechSynthesisUtterance(String(text));
      u.lang = (voice && voice.lang) || 'zh-CN';
      u.rate = opts.rate || rate;
      u.pitch = 1;
      if (voice) { u.voice = voice; }

      var done = false;
      var finish = function () {
        if (done || mine !== gen) { return; }
        done = true;
        if (opts.onend) { opts.onend(); }
      };
      u.onend = finish;
      u.onerror = finish;

      /* Chrome drops an utterance queued in the same tick as cancel(). */
      setTimeout(function () {
        if (mine !== gen) { return; }
        try { synth.speak(u); } catch (e) { finish(); return; }
        var guard = Math.max(1600, String(text).length * 900 / (opts.rate || rate));
        setTimeout(finish, guard);
      }, 45);
      return true;
    }

    function stop() { gen++; if (able) { try { synth.cancel(); } catch (e) {} } }

    if (able) {
      refresh();
      if (typeof synth.onvoiceschanged !== 'undefined') {
        synth.onvoiceschanged = refresh;
      }
      /* Safari populates the list a beat late and fires nothing. */
      setTimeout(refresh, 400);
      setTimeout(refresh, 1600);
    }

    return {
      say: say, stop: stop, onStatus: onStatus, able: able,
      setRate: function (r) { rate = r; },
      getRate: function () { return rate; }
    };
  })();

  /* ==================================================================== 2
     SMALL RENDER HELPERS                                                  */
  var ICON_SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>' +
    '<path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

  function sayBtn(text, cls, label) {
    return '<button class="zh-say ' + (cls || '') + '" type="button" data-say="' + esc(text) + '" ' +
           'title="Listen" aria-label="' + esc(label || ('Listen to ' + text)) + '">' + ICON_SPK + '</button>';
  }

  var HAN = /[\u3400-\u9fff]/;   /* CJK ideographs, so punctuation is skipped */

  /* Pinyin above the characters, one syllable per character. Falls back to a
     single pinyin line above the phrase if the counts do not match.        */
  function ruby(hz, py) {
    var chars = String(hz || '').split('');
    var syl = String(py || '').trim().split(/\s+/).filter(Boolean);
    var core = chars.filter(function (c) { return HAN.test(c); });

    if (!syl.length || syl.length !== core.length) {
      return '<span class="zh-ruby zh-ruby--block">' +
               '<span class="py-line">' + esc(py) + '</span>' +
               '<span class="hz-line">' + esc(hz) + '</span></span>';
    }
    var k = 0;
    return '<span class="zh-ruby">' + chars.map(function (c) {
      if (HAN.test(c)) {
        return '<span class="zh-ru"><span class="py">' + esc(syl[k++]) + '</span>' +
               '<span class="hz">' + esc(c) + '</span></span>';
      }
      return '<span class="zh-ru zh-ru--punct"><span class="py"></span>' +
             '<span class="hz">' + esc(c) + '</span></span>';
    }).join('') + '</span>';
  }

  /* A small inline example: 好 hǎo · good, with a speaker. */
  function exPill(o) {
    return '<span class="zh-ex">' + sayBtn(o.hz, 'zh-say--sm') +
             '<span class="txt">' + ruby(o.hz, o.py) +
               '<span class="en">' + esc(gloss(o)) + '</span></span></span>';
  }

  /* ==================================================================== 3
     MODULE — PINYIN                                                       */
  var TONE_CURVE = {
    1: '<path d="M5 7h52"/>',
    2: '<path d="M5 21 57 6"/>',
    3: '<path d="M5 9c6 12 12 13 18 13s24-6 34-16"/>',
    4: '<path d="M5 6 57 21"/>',
    0: '<circle cx="31" cy="13" r="3.4" fill="currentColor" stroke="none"/>'
  };

  /* The chart is deliberately bare: the sound and nothing else. The character
     behind each tile is what the voice is given, never the pinyin itself. */
  function chartTiles(list) {
    return (list || []).map(function (it) {
      return '<button class="zh-cell" type="button" data-say="' + esc(it.hz) + '" ' +
        'title="' + esc(it.read || it.p) + '" ' +
        'aria-label="' + esc('Play ' + (it.read || it.p)) + '">' + esc(it.p) + '</button>';
    }).join('');
  }

  function chartGroups(list) {
    var groups = [], byName = {};
    (list || []).forEach(function (it) {
      if (!byName[it.grp]) { byName[it.grp] = []; groups.push(it.grp); }
      byName[it.grp].push(it);
    });
    return groups.map(function (g) {
      return '<div class="zh-chart-grp"><h5>' + esc(g) + '</h5>' +
        '<div class="zh-chart">' + chartTiles(byName[g]) + '</div></div>';
    }).join('');
  }

  function renderChart() {
    var C = B.chart || {};
    return '<div class="zh-sec">' +
      '<h3 data-i18n="zh.py.h0">The pinyin chart <span class="zh-hz">拼音表</span></h3>' +
      '<p class="lead" data-i18n="zh.py.p0">Sound only — no example words, nothing to read around it. ' +
      'Tap any square and listen. Come back to this chart whenever you want to drill the sounds on their own.</p>' +
      '<div class="zh-grp"><h4 data-i18n="zh.py.c1">Tones</h4>' +
        '<div class="zh-chart zh-chart--tone">' + chartTiles(C.tones) + '</div></div>' +
      '<div class="zh-grp"><h4 data-i18n="zh.py.c2">Initials <span class="zh-hz">声母</span></h4>' +
        '<div class="zh-chart">' + chartTiles(C.initials) + '</div></div>' +
      '<div class="zh-grp"><h4 data-i18n="zh.py.c3">Finals <span class="zh-hz">韵母</span></h4>' +
        chartGroups(C.finals) + '</div>' +
      (C.note ? '<p class="zh-tip">' + esc(C.note) + '</p>' : '') +
    '</div>';
  }

  function renderPinyin() {
    var h = [];

    h.push(renderChart());

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.py.h1">Start here: what pinyin is</h3>' +
      '<p class="lead" data-i18n="zh.py.p1">Pinyin writes the sound of a Chinese character with the letters you already know. ' +
      'Every character is exactly one syllable, and every syllable is an initial (the consonant at the front), ' +
      'a final (the rest) and a tone. Learn the sound first, and the characters become far easier to remember. ' +
      'Tap any speaker to hear a native voice say the example.</p></div>');

    /* ---- tones */
    h.push('<div class="zh-sec"><h3 data-i18n="zh.py.h2">The four tones <span class="zh-hz">声调</span></h3>' +
      '<p class="lead" data-i18n="zh.py.p2">The same syllable said with a different pitch is a different word. ' +
      'These five all sound like "ma".</p><div class="zh-tone-grid">');
    (B.tones || []).forEach(function (t) {
      h.push('<div class="zh-tone">' +
        '<span class="nm">' + esc(t.n === 0 ? 'Neutral' : 'Tone ' + t.n) + '</span>' +
        '<div class="mark">' + esc(t.mark) + '</div>' +
        '<div class="curve"><svg viewBox="0 0 62 26" fill="none" stroke="currentColor" stroke-width="2.6" ' +
          'stroke-linecap="round" aria-hidden="true">' + TONE_CURVE[t.n] + '</svg></div>' +
        '<div class="zh-big">' + esc(t.hz) + '</div>' +
        '<div class="py">' + esc(t.py) + '</div>' +
        '<div class="en">' + esc(gloss(t)) + '</div>' +
        sayBtn(t.hz, '') +
        '<p class="desc"><b>' + esc(t.name) + '</b><br>' + esc(t.desc) + '<br><i>' + esc(t.tip) + '</i></p>' +
      '</div>');
    });
    h.push('</div></div>');

    /* ---- initials */
    h.push('<div class="zh-sec"><h3 data-i18n="zh.py.h3">Initials <span class="zh-hz">声母</span></h3>' +
      '<p class="lead" data-i18n="zh.py.p3">The consonant a syllable starts with. Tap one to hear it inside a real word — ' +
      'single consonants are hard to hear on their own.</p>');
    h.push(groupedTiles(B.initials));
    h.push('</div>');

    /* ---- finals */
    h.push('<div class="zh-sec"><h3 data-i18n="zh.py.h4">Finals <span class="zh-hz">韵母</span></h3>' +
      '<p class="lead" data-i18n="zh.py.p4">Everything after the initial. Learn these as whole sounds rather than letter by letter.</p>');
    h.push(groupedTiles(B.finals));
    h.push('</div>');

    /* ---- spelling rules */
    h.push('<div class="zh-sec"><h3 data-i18n="zh.py.h5">Five spelling rules</h3>' +
      '<p class="lead" data-i18n="zh.py.p5">These are the ones that confuse every beginner reading a textbook for the first time.</p>');
    (B.spelling || []).forEach(function (r) {
      h.push('<div class="zh-rule"><h4>' + r.h + '</h4><p>' + r.p + '</p>' +
        '<div class="zh-exline">' + (r.ex || []).map(exPill).join('') + '</div></div>');
    });
    h.push('</div>');

    return h.join('');
  }

  function groupedTiles(list) {
    var groups = [], byName = {};
    (list || []).forEach(function (it) {
      if (!byName[it.grp]) { byName[it.grp] = []; groups.push(it.grp); }
      byName[it.grp].push(it);
    });
    return groups.map(function (g) {
      return '<div class="zh-grp"><h4>' + esc(g) + '</h4><div class="zh-syl-grid">' +
        byName[g].map(function (it) {
          return '<button class="zh-syl" type="button" data-say="' + esc(it.hz) + '" ' +
            'aria-label="' + esc('Listen to ' + it.p + ', as in ' + it.py) + '">' +
            '<span class="p">' + esc(it.p) + '</span>' +
            '<span class="ex"><span class="hz">' + esc(it.hz) + '</span>' +
            '<span class="py">' + esc(it.py) + ' · ' + esc(it.en) + '</span></span>' +
            '<span class="ic">' + ICON_SPK + '</span></button>';
        }).join('') +
        '</div>' + tipsFor(byName[g]) + '</div>';
    }).join('');
  }

  function tipsFor(items) {
    var tips = items.filter(function (i) { return i.tip; });
    if (!tips.length) { return ''; }
    return '<p class="zh-tip">' + tips.map(function (i) {
      return '<b>' + esc(i.p) + '</b> — ' + esc(i.tip);
    }).join('<br>') + '</p>';
  }

  /* ==================================================================== 4
     MODULE — SOUND                                                        */
  function renderSound() {
    var h = [];

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.sd.h1">Hearing the difference</h3>' +
      '<p class="lead" data-i18n="zh.sd.p1">Chinese has several pairs of sounds that arrive in the ear as one sound ' +
      'until you have heard them side by side a few dozen times. Play each pair one after the other, ' +
      'then say them yourself.</p></div>');

    (B.contrasts || []).forEach(function (c) {
      h.push('<div class="zh-sec"><h3>' + c.h + '</h3><p class="lead">' + c.p + '</p><div class="zh-pairs">');
      c.pairs.forEach(function (pr) {
        h.push('<div class="zh-pair">' + half(pr.a) + '<span class="vs">vs</span>' + half(pr.b) + '</div>');
      });
      h.push('</div></div>');
    });

    h.push('<div class="zh-sec"><h3 data-i18n="zh.sd.h2">When tones change</h3>' +
      '<p class="lead" data-i18n="zh.sd.p2">Written one way, said another. These three rules cover almost every case a beginner meets.</p>');
    (B.toneRules || []).forEach(function (r) {
      h.push('<div class="zh-rule"><h4>' + r.h + '</h4><p>' + r.p + '</p>' +
        '<div class="zh-exline">' + (r.ex || []).map(exPill).join('') + '</div></div>');
    });
    h.push('</div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.sd.h3">Tone drill</h3>' +
      '<p class="lead" data-i18n="zh.sd.p3">Listen, then choose the tone you heard. The four options are the same syllable ' +
      'in the four tones — exactly the choice your ear has to make in a real conversation.</p>' +
      '<div class="zh-drill" id="zhToneDrill"></div></div>');

    return h.join('');
  }

  function half(o) {
    return '<span class="zh-half">' + sayBtn(o.hz, 'zh-say--sm') +
      '<span class="txt"><span class="hz">' + esc(o.hz) + '</span>' +
      '<span class="py">' + esc(o.py) + '</span>' +
      '<span class="en">' + esc(o.en) + '</span></span></span>';
  }

  function wireToneDrill() {
    var host = $('zhToneDrill');
    if (!host) { return; }
    var fam = null, target = null, asked = 0, right = 0, locked = false;

    function nextRound(autoplay) {
      fam = pick(B.toneDrill || []);
      target = pick(fam.items);
      locked = false;
      paint();
      if (autoplay !== false) { Speak.say(target.hz); }
    }

    function paint(fb) {
      host.innerHTML =
        '<h4 data-i18n="zh.sd.dh">Which tone did you hear?</h4>' +
        '<p data-i18n="zh.sd.dp">Press play, listen, then pick the pinyin that matches.</p>' +
        '<div>' + sayBtn(target.hz, 'zh-say--lg', 'Play the syllable again') + '</div>' +
        '<div class="zh-drill-opts">' +
          fam.items.map(function (it, i) {
            return '<button class="zh-opt" type="button" data-i="' + i + '">' + esc(it.py) + '</button>';
          }).join('') +
        '</div>' +
        '<p class="zh-drill-fb">' + (fb || '') + '</p>' +
        '<div class="zh-btn-row"><button class="zh-btn zh-btn--primary" type="button" data-next="1">Next syllable</button></div>' +
        '<p class="zh-score">' + right + ' correct out of ' + asked + '</p>';
      translate(host);
    }

    host.addEventListener('click', function (e) {
      var opt = e.target.closest('.zh-opt');
      if (opt && !locked) {
        locked = true;
        asked++;
        var i = +opt.getAttribute('data-i');
        var chosen = fam.items[i];
        var ok = chosen.hz === target.hz;
        if (ok) { right++; }
        host.querySelectorAll('.zh-opt').forEach(function (b, k) {
          b.disabled = true;
          if (fam.items[k].hz === target.hz) { b.classList.add('is-right'); }
          else if (k === i) { b.classList.add('is-wrong'); }
        });
        var fb = host.querySelector('.zh-drill-fb');
        fb.innerHTML = (ok ? '<span style="color:var(--success-500)">Correct</span>'
                           : '<span style="color:#dc2626">Not that one</span>') +
          '<span class="sm">' + esc(target.hz) + ' — ' + esc(target.py) + ' · ' + esc(target.en) + '</span>';
        host.querySelector('.zh-score').textContent = right + ' correct out of ' + asked;
        return;
      }
      if (e.target.closest('[data-next]')) { nextRound(true); }
    });

    nextRound(false);
  }

  /* ==================================================================== 5
     MODULE — WRITING                                                      */
  function renderWriting() {
    var h = [];

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.wr.h1">Writing characters</h3>' +
      '<p class="lead" data-i18n="zh.wr.p1">Chinese has no alphabet. Each character is built from a fixed set of strokes, ' +
      'written in a fixed order, inside an imaginary square. Keeping to the order is what makes ' +
      'handwriting legible — and it is how dictionaries count strokes.</p></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.wr.h2">The eight basic strokes</h3>' +
      '<p class="lead" data-i18n="zh.wr.p2">Every character you will ever write is made of these, alone or combined.</p>' +
      '<div class="zh-strokes">' +
      (B.strokes || []).map(function (s) {
        return '<div class="zh-stroke"><span class="sym">' + esc(s.sym) + '</span>' +
          '<span class="txt"><span class="nm">' + esc(s.p) + '</span>' +
          '<span class="de">' + esc(s.en) + ' — ' + esc(s.dir) + '</span></span></div>';
      }).join('') + '</div></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.wr.h3">Stroke order rules</h3>' +
      '<p class="lead" data-i18n="zh.wr.p3">Seven rules cover nearly everything. Tap the example to hear it.</p>' +
      '<div class="zh-pairs">' +
      (B.orderRules || []).map(function (r) {
        return '<div class="zh-rule" style="margin:0"><h4>' + esc(r.h) + '</h4><p>' + esc(r.p) + '</p>' +
          '<div class="zh-exline">' + exPill(r) + '</div></div>';
      }).join('') + '</div></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.wr.h4">Practise writing</h3>' +
      '<p class="lead" data-i18n="zh.wr.p4">Pick a character, then trace it in the square with your finger or the mouse. ' +
      'Press <b>Check</b> and the page marks your writing: green where your ink is on the character, ' +
      'red where it strays. Hide the guide when you think you know it, and write it from memory.</p>' +
      '<div class="zh-write">' +
        '<div>' +
          '<div class="zh-stage" id="zhStage">' +
            '<svg class="grid" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
              '<line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width=".7" stroke-dasharray="4 4"/>' +
              '<line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width=".7" stroke-dasharray="4 4"/>' +
              '<line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width=".5" stroke-dasharray="3 5"/>' +
              '<line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width=".5" stroke-dasharray="3 5"/>' +
            '</svg>' +
            '<canvas class="zh-ghost" id="zhGhost"></canvas>' +
            '<canvas id="zhCanvas"></canvas>' +
          '</div>' +
          '<div class="zh-btn-row">' +
            '<button class="zh-btn zh-btn--primary" type="button" data-pad="check" data-i18n="zh.wr.check">Check my writing</button>' +
            '<button class="zh-btn" type="button" data-pad="undo" data-i18n="zh.wr.undo">Undo stroke</button>' +
            '<button class="zh-btn" type="button" data-pad="clear" data-i18n="zh.wr.clear">Clear</button>' +
            '<button class="zh-btn" type="button" data-pad="guide" aria-pressed="true" data-i18n="zh.wr.hide">Hide guide</button>' +
          '</div>' +
          '<div class="zh-mark" id="zhMark"></div>' +
          '<p class="zh-score" id="zhStrokeCount"></p>' +
        '</div>' +
        '<div class="zh-write-info" id="zhWriteInfo"></div>' +
      '</div></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.wr.h5">Common radicals</h3>' +
      '<p class="lead" data-i18n="zh.wr.p5">A radical is the part of a character that hints at its meaning. ' +
      'Spotting them turns memorising into reasoning.</p>' +
      '<div class="zh-tbl"><table><thead><tr>' +
        '<th>Radical</th><th>Pinyin</th><th>Meaning</th><th>Seen in</th></tr></thead><tbody>' +
      (B.radicals || []).map(function (r) {
        return '<tr><td class="hz">' + esc(r.r) + '</td><td class="py">' + esc(r.p) + '</td>' +
          '<td>' + esc(r.en) + '</td><td>' + exPill(r.ex) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>');

    return h.join('');
  }

  /* The writing pad.
     ---------------------------------------------------------------------
     Two stacked canvases: the target character (faint, the tracing guide)
     and the student's ink. Pressing Check compares the two as bitmaps —
     it marks WHERE the ink lands, not the order the strokes were made in,
     so the stroke count is reported separately as a second signal.       */
  var Pad = (function () {
    var canvas, ctx, ghost, gctx, info, count, mark;
    var idx = 0, strokes = [], cur = null, guideOn = true, dpr = 1, checked = false;
    var globalWired = false;

    var GRID = 100;    /* mask resolution                                   */
    var TOL = 5;       /* how far off the glyph ink may sit, in mask cells  */
    var OK_COLOUR = '#16a34a', OFF_COLOUR = '#dc2626', MISS_COLOUR = '#f5a524';

    function cssVar(name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name);
      return (v || '').trim() || fallback;
    }
    function colour() { return cssVar('--brand-600', '#0b57d0'); }
    function handFont() {
      return cssVar('--font-zh-hand', '"Noto Serif SC", "Kaiti SC", serif');
    }

    function current() { return (B.write || [])[idx]; }

    /* --------------------------------------------------------- geometry */
    function size() {
      if (!canvas) { return; }
      var r = canvas.getBoundingClientRect();
      if (!r.width) { return; }
      dpr = window.devicePixelRatio || 1;

      [canvas, ghost].forEach(function (c) {
        c.width = Math.round(r.width * dpr);
        c.height = Math.round(r.height * dpr);
      });
      ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      gctx = ghost.getContext('2d');
      gctx.scale(dpr, dpr);

      checked = false;      /* a resize repaints both layers plain */
      drawGhost();
      redraw();
    }

    /* Paint the character into any 2d context sized w × h. Both the guide
       and the scoring mask go through here, so they always line up. */
    function paintChar(c, w, h, ch) {
      var s = Math.min(w, h);
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.font = Math.round(s * 0.78) + 'px ' + handFont();
      c.fillText(ch, w / 2, h / 2 + s * 0.02);
    }

    function drawGhost() {
      if (!gctx) { return; }
      var r = canvas.getBoundingClientRect();
      var c = current();
      gctx.clearRect(0, 0, r.width, r.height);
      if (!c || !guideOn) { return; }
      gctx.save();
      gctx.globalAlpha = 0.14;
      gctx.fillStyle = cssVar('--ink-900', '#0b1220');
      paintChar(gctx, r.width, r.height, c.hz);
      gctx.restore();
    }

    function strokeWidth(w) { return Math.max(8, w / 30); }

    function drawStrokes(c, w, style) {
      c.lineCap = 'round';
      c.lineJoin = 'round';
      c.lineWidth = strokeWidth(w);
      c.strokeStyle = style;
      c.fillStyle = style;
      strokes.forEach(function (s) {
        if (s.length < 2) {
          c.beginPath();
          c.arc(s[0].x, s[0].y, c.lineWidth / 2, 0, Math.PI * 2);
          c.fill();
          return;
        }
        c.beginPath();
        c.moveTo(s[0].x, s[0].y);
        for (var i = 1; i < s.length; i++) { c.lineTo(s[i].x, s[i].y); }
        c.stroke();
      });
    }

    function redraw() {
      if (!ctx) { return; }
      var r = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);
      drawStrokes(ctx, r.width, colour());
      paintCount();
    }

    function paintCount() {
      if (!count) { return; }
      var c = current();
      count.textContent = strokes.length + ' stroke' + (strokes.length === 1 ? '' : 's') +
        ' drawn · this character has ' + (c ? c.n : '?');
    }

    /* ------------------------------------------------------------ masks */
    function maskFromCanvas(el) {
      var d = el.getContext('2d').getImageData(0, 0, GRID, GRID).data;
      var m = new Uint8Array(GRID * GRID);
      for (var i = 0; i < GRID * GRID; i++) { m[i] = d[i * 4 + 3] > 60 ? 1 : 0; }
      return m;
    }

    function glyphMask() {
      var c = current();
      if (!c) { return null; }
      var el = document.createElement('canvas');
      el.width = GRID; el.height = GRID;
      var g = el.getContext('2d');
      g.fillStyle = '#000';
      paintChar(g, GRID, GRID, c.hz);
      return maskFromCanvas(el);
    }

    function inkMask() {
      var r = canvas.getBoundingClientRect();
      var scale = GRID / r.width;
      var el = document.createElement('canvas');
      el.width = GRID; el.height = GRID;
      var g = el.getContext('2d');
      g.scale(scale, scale);
      drawStrokes(g, r.width, '#000');
      return maskFromCanvas(el);
    }

    /* Grow a mask by `rad` cells — two 1-D passes, which is plenty here. */
    function dilate(m, rad) {
      var tmp = new Uint8Array(GRID * GRID), out = new Uint8Array(GRID * GRID), x, y, k;
      for (y = 0; y < GRID; y++) {
        for (x = 0; x < GRID; x++) {
          var on = 0;
          for (k = -rad; k <= rad && !on; k++) {
            var xx = x + k;
            if (xx >= 0 && xx < GRID && m[y * GRID + xx]) { on = 1; }
          }
          tmp[y * GRID + x] = on;
        }
      }
      for (y = 0; y < GRID; y++) {
        for (x = 0; x < GRID; x++) {
          var on2 = 0;
          for (k = -rad; k <= rad && !on2; k++) {
            var yy = y + k;
            if (yy >= 0 && yy < GRID && tmp[yy * GRID + x]) { on2 = 1; }
          }
          out[y * GRID + x] = on2;
        }
      }
      return out;
    }

    function tally(m) {
      var n = 0;
      for (var i = 0; i < m.length; i++) { if (m[i]) { n++; } }
      return n;
    }

    /* -------------------------------------------------------- the check */
    function check() {
      var c = current();
      if (!c) { return; }
      if (!strokes.length) {
        showMark(null);
        return;
      }

      var gm = glyphMask(), im = inkMask();
      var gmD = dilate(gm, TOL), imD = dilate(im, TOL);
      var gN = tally(gm), iN = tally(im);
      if (!gN || !iN) { showMark(null); return; }

      var covered = 0, inside = 0, i;
      for (i = 0; i < gm.length; i++) {
        if (gm[i] && imD[i]) { covered++; }
        if (im[i] && gmD[i]) { inside++; }
      }
      var coverage = covered / gN;          /* how much of the character you traced */
      var precision = inside / iN;          /* how much of your ink was on it       */
      /* Harmonic mean, so scribbling over the whole square cannot score well
         on coverage alone — both halves have to be good. */
      var score = (coverage + precision) > 0
        ? Math.round(100 * (2 * coverage * precision) / (coverage + precision))
        : 0;

      paintMarkedInk(gmD);
      paintMissing(gm, imD);
      checked = true;
      showMark({
        score: score,
        coverage: Math.round(coverage * 100),
        outside: Math.round((1 - precision) * 100),
        strokes: strokes.length,
        expect: c.n
      });
    }

    /* Repaint the ink green where it sits on the character, red elsewhere. */
    function paintMarkedInk(gmD) {
      var W = canvas.width, H = canvas.height;
      var r = canvas.getBoundingClientRect();

      var off = document.createElement('canvas');
      off.width = W; off.height = H;
      var oc = off.getContext('2d');
      oc.scale(dpr, dpr);
      drawStrokes(oc, r.width, '#000');

      var img = oc.getImageData(0, 0, W, H), d = img.data;
      var ok = hexRgb(OK_COLOUR), off2 = hexRgb(OFF_COLOUR);
      var sx = GRID / W, sy = GRID / H;

      for (var y = 0; y < H; y++) {
        var row = (y * sy) | 0;
        if (row > GRID - 1) { row = GRID - 1; }
        for (var x = 0; x < W; x++) {
          var p = (y * W + x) * 4;
          if (d[p + 3] < 12) { continue; }
          var col = (x * sx) | 0;
          if (col > GRID - 1) { col = GRID - 1; }
          var good = gmD[row * GRID + col];
          d[p] = good ? ok[0] : off2[0];
          d[p + 1] = good ? ok[1] : off2[1];
          d[p + 2] = good ? ok[2] : off2[2];
        }
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.putImageData(img, 0, 0);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    /* Amber over the parts of the character that were never written — a
       stroke you left out is invisible otherwise, because nothing you drew
       was wrong. */
    function paintMissing(gm, imD) {
      var c = current();
      if (!c) { return; }
      var W = ghost.width, H = ghost.height;
      var r = canvas.getBoundingClientRect();

      var off = document.createElement('canvas');
      off.width = W; off.height = H;
      var oc = off.getContext('2d');
      oc.scale(dpr, dpr);
      oc.fillStyle = '#000';
      paintChar(oc, r.width, r.height, c.hz);

      var img = oc.getImageData(0, 0, W, H), d = img.data;
      var amber = hexRgb(MISS_COLOUR), ink = hexRgb(cssVar('--ink-900', '#0b1220'));
      var sx = GRID / W, sy = GRID / H;

      for (var y = 0; y < H; y++) {
        var row = (y * sy) | 0;
        if (row > GRID - 1) { row = GRID - 1; }
        for (var x = 0; x < W; x++) {
          var p = (y * W + x) * 4;
          if (d[p + 3] < 12) { continue; }
          var col = (x * sx) | 0;
          if (col > GRID - 1) { col = GRID - 1; }
          var cell = row * GRID + col;
          if (gm[cell] && !imD[cell]) {
            d[p] = amber[0]; d[p + 1] = amber[1]; d[p + 2] = amber[2]; d[p + 3] = 165;
          } else {
            d[p] = ink[0]; d[p + 1] = ink[1]; d[p + 2] = ink[2];
            d[p + 3] = guideOn ? 34 : 0;
          }
        }
      }
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.clearRect(0, 0, W, H);
      gctx.putImageData(img, 0, 0);
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.scale(dpr, dpr);
    }

    function hexRgb(h) {
      return [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)];
    }

    function showMark(res) {
      if (!mark) { return; }
      if (!res) {
        mark.className = 'zh-mark is-empty';
        mark.innerHTML = '<p data-i18n="zh.wr.first">Draw the character first, then press Check.</p>';
        translate(mark);
        return;
      }
      var band = res.score >= 85 ? 'good' : res.score >= 70 ? 'ok' : res.score >= 50 ? 'weak' : 'bad';
      var verdictKey = 'zh.wr.v.' + band;
      var verdictEn = { good: 'Excellent — that is the character.',
                        ok: 'Good. Clean up the red, fill in the amber.',
                        weak: 'Getting there. The amber shows what you missed.',
                        bad: 'Not yet — turn the guide back on and trace it.' }[band];

      var strokeNote = res.strokes === res.expect
        ? '<span class="ok">' + res.strokes + ' / ' + res.expect + '</span>'
        : '<span class="no">' + res.strokes + ' / ' + res.expect + '</span>';

      mark.className = 'zh-mark is-' + band;
      mark.innerHTML =
        '<div class="sc"><b>' + res.score + '%</b></div>' +
        '<div class="bd">' +
          '<p class="vd" data-i18n="' + verdictKey + '">' + verdictEn + '</p>' +
          '<ul>' +
            '<li><span data-i18n="zh.wr.cov">Character covered</span> <b>' + res.coverage + '%</b></li>' +
            '<li><span data-i18n="zh.wr.out">Ink outside it</span> <b>' + res.outside + '%</b></li>' +
            '<li><span data-i18n="zh.wr.str">Strokes</span> ' + strokeNote + '</li>' +
          '</ul>' +
          '<p class="nb"><span class="lg"><i class="ok"></i><span data-i18n="zh.wr.lgOk">on the character</span></span>' +
            '<span class="lg"><i class="no"></i><span data-i18n="zh.wr.lgNo">off it</span></span>' +
            '<span class="lg"><i class="ms"></i><span data-i18n="zh.wr.lgMs">not written</span></span></p>' +
          '<p class="nb" data-i18n="zh.wr.nb">The check reads the shape, not the order you drew it in — ' +
          'use the stroke count and the order note beside the character for that.</p>' +
        '</div>';
      translate(mark);
    }

    function clearMark() {
      if (checked) { checked = false; drawGhost(); redraw(); }
      if (mark) { mark.className = 'zh-mark'; mark.innerHTML = ''; }
    }

    /* ------------------------------------------------------------ input */
    function point(e) {
      var r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function start(e) {
      e.preventDefault();
      clearMark();
      cur = [point(e)];
      strokes.push(cur);
      if (canvas.setPointerCapture && e.pointerId !== undefined) {
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      }
      redraw();
    }
    function move(e) {
      if (!cur) { return; }
      e.preventDefault();
      cur.push(point(e));
      redraw();
    }
    function end() { cur = null; }

    /* ------------------------------------------------------ the picker */
    function show(i) {
      var list = B.write || [];
      idx = Math.max(0, Math.min(i, list.length - 1));
      var c = list[idx];
      if (!c) { return; }
      strokes = []; cur = null; checked = false;
      if (mark) { mark.className = 'zh-mark'; mark.innerHTML = ''; }

      if (info) {
        info.innerHTML =
          '<div style="display:flex;align-items:center;gap:.8rem">' +
            '<span class="hz">' + esc(c.hz) + '</span>' +
            '<span><span class="py" style="display:block">' + esc(c.py) + '</span>' +
            '<span class="en">' + esc(gloss(c)) + '</span></span>' +
            sayBtn(c.hz, 'zh-say--lg') +
          '</div>' +
          '<div class="zh-meta"><span>' + c.n + ' strokes</span><span>character ' + (idx + 1) +
            ' of ' + list.length + '</span></div>' +
          (c.order ? '<p class="zh-order"><b>Stroke order:</b> ' + esc(c.order) + '</p>' : '') +
          '<div class="zh-btn-row" style="justify-content:flex-start">' +
            '<button class="zh-btn" type="button" data-pad="prev"' + (idx === 0 ? ' disabled' : '') + '>&larr; Previous</button>' +
            '<button class="zh-btn" type="button" data-pad="next"' + (idx === list.length - 1 ? ' disabled' : '') + '>Next &rarr;</button>' +
          '</div>' +
          '<div class="zh-charlist">' + list.map(function (w, k) {
            return '<button type="button" data-char="' + k + '" aria-pressed="' + (k === idx) + '" ' +
              'aria-label="' + esc(w.hz + ' ' + w.py) + '">' + esc(w.hz) + '</button>';
          }).join('') + '</div>';
      }
      drawGhost();
      redraw();
    }

    function init(host) {
      canvas = $('zhCanvas');
      ghost = $('zhGhost');
      info = $('zhWriteInfo');
      count = $('zhStrokeCount');
      mark = $('zhMark');
      if (!canvas || !ghost) { return; }

      if (window.PointerEvent) {
        canvas.addEventListener('pointerdown', start);
        canvas.addEventListener('pointermove', move);
      } else {
        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', move);
      }

      /* The panel element survives a rebuild, so it is wired only once. */
      if (!host.getAttribute('data-wired')) {
      host.setAttribute('data-wired', '1');
      host.addEventListener('click', function (e) {
        var b = e.target.closest('[data-pad], [data-char]');
        if (!b) { return; }
        if (b.hasAttribute('data-char')) { show(+b.getAttribute('data-char')); return; }
        var act = b.getAttribute('data-pad');
        if (act === 'check') { check(); }
        else if (act === 'undo') { clearMark(); strokes.pop(); redraw(); }
        else if (act === 'clear') { clearMark(); strokes = []; redraw(); }
        else if (act === 'guide') {
          guideOn = !guideOn;
          b.setAttribute('aria-pressed', String(guideOn));
          b.removeAttribute('data-en-html');
          b.setAttribute('data-i18n', guideOn ? 'zh.wr.hide' : 'zh.wr.show');
          b.textContent = guideOn ? 'Hide guide' : 'Show guide';
          translate(b.parentNode);
          /* Re-run the marking so the amber overlay stays in step. */
          if (checked) { check(); } else { drawGhost(); }
        }
        else if (act === 'prev') { show(idx - 1); }
        else if (act === 'next') { show(idx + 1); }
      });
      }

      if (!globalWired) {
        globalWired = true;
        window.addEventListener('resize', size);
        document.addEventListener('aa:themechange', function () { drawGhost(); redraw(); });
        if (window.PointerEvent) {
          window.addEventListener('pointerup', end);
          window.addEventListener('pointercancel', end);
        } else {
          window.addEventListener('mouseup', end);
        }
        /* The guide is drawn with a web font — redraw once it has landed,
           or the mask and the guide would disagree. */
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(function () { drawGhost(); });
        }
      }
      show(0);
      size();
      /* The panel may still be laying out on the first paint. */
      setTimeout(size, 60);
    }

    return { init: init, resize: size, refresh: function () { show(idx); } };
  })();

  /* ==================================================================== 6
     MODULE — NUMBERS                                                      */
  var NUM_HZ = '零一二三四五六七八九';
  var NUM_PY = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ'];

  function numHz(n) {
    if (n < 10) { return NUM_HZ.charAt(n); }
    if (n < 20) { return '十' + (n % 10 ? NUM_HZ.charAt(n % 10) : ''); }
    if (n < 100) {
      return NUM_HZ.charAt(Math.floor(n / 10)) + '十' + (n % 10 ? NUM_HZ.charAt(n % 10) : '');
    }
    var h = Math.floor(n / 100), r = n % 100;
    var s = NUM_HZ.charAt(h) + '百';
    if (!r) { return s; }
    if (r < 10) { return s + '零' + NUM_HZ.charAt(r); }
    return s + NUM_HZ.charAt(Math.floor(r / 10)) + '十' + (r % 10 ? NUM_HZ.charAt(r % 10) : '');
  }

  function numPy(n) {
    if (n < 10) { return NUM_PY[n]; }
    if (n < 20) { return 'shí' + (n % 10 ? ' ' + NUM_PY[n % 10] : ''); }
    if (n < 100) {
      return NUM_PY[Math.floor(n / 10)] + ' shí' + (n % 10 ? ' ' + NUM_PY[n % 10] : '');
    }
    var h = Math.floor(n / 100), r = n % 100;
    var s = (h === 1 ? 'yì' : NUM_PY[h]) + ' bǎi';
    if (!r) { return s; }
    if (r < 10) { return s + ' líng ' + NUM_PY[r]; }
    return s + ' ' + NUM_PY[Math.floor(r / 10)] + ' shí' + (r % 10 ? ' ' + NUM_PY[r % 10] : '');
  }

  function renderNumbers() {
    var h = [];

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.nu.h1">Counting in Chinese</h3>' +
      '<p class="lead" data-i18n="zh.nu.p1">Numbers are the fastest win in Chinese. Learn ten characters and you can already ' +
      'say every number up to ninety-nine — the system is completely regular, with no "eleven", ' +
      '"twelve" or "thirty" to memorise separately.</p>' +
      '<div class="zh-digits">' +
      (B.digits || []).map(function (d) {
        return '<div class="zh-digit"><div class="v">' + esc(d.v) + '</div>' +
          '<div class="hz">' + esc(d.hz) + '</div>' +
          '<div class="py">' + esc(d.py) + '</div>' +
          '<div class="en">' + esc(gloss(d)) + '</div>' + sayBtn(d.hz) + '</div>';
      }).join('') + '</div></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.nu.h2">Building bigger numbers</h3>' +
      '<div class="zh-tbl"><table><thead><tr><th>Number</th><th>Characters</th><th>Pinyin</th>' +
      '<th>Meaning</th><th>Listen</th></tr></thead><tbody>' +
      (B.bigNumbers || []).map(function (d) {
        return '<tr><td class="num">' + esc(d.v) + '</td><td class="hz">' + esc(d.hz) + '</td>' +
          '<td class="py">' + esc(d.py) + '</td><td>' + esc(gloss(d)) + '</td>' +
          '<td>' + sayBtn(d.hz, 'zh-say--sm') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.nu.h3">The rules behind them</h3>');
    (B.numRules || []).forEach(function (r) {
      h.push('<div class="zh-rule"><h4>' + esc(r.h) + '</h4><p>' + esc(r.p) + '</p>' +
        '<div class="zh-exline">' + (r.ex || []).map(exPill).join('') + '</div></div>');
    });
    h.push('</div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.nu.h4">Numbers in real sentences</h3>' +
      '<p class="lead" data-i18n="zh.nu.p4">Price, time, dates, age and phone numbers — the five places a beginner needs numbers first.</p>');
    (B.numUses || []).forEach(function (u) {
      h.push('<div class="zh-rule"><h4>' + esc(u.h) + '</h4><div class="zh-dlg">' +
        u.lines.map(function (l) {
          return '<div class="zh-line" data-sp="A">' + sayBtn(l.hz, 'zh-say--sm') +
            '<div class="body">' + ruby(l.hz, l.py) +
            '<span class="gloss">' + esc(gloss(l)) + '</span></div></div>';
        }).join('') + '</div></div>');
    });
    if (B.numNote) {
      h.push('<p class="zh-note"><b>' + esc(B.numNote.h) + '.</b> ' + esc(B.numNote.p) + '</p>');
    }
    h.push('</div>');

    h.push('<div class="zh-sec"><h3 data-i18n="zh.nu.h5">Number listening drill</h3>' +
      '<p class="lead" data-i18n="zh.nu.p5">Play the number, then type the digits. This is the skill you need for prices, ' +
      'phone numbers and bus stops.</p><div class="zh-drill" id="zhNumDrill"></div></div>');

    return h.join('');
  }

  function wireNumberDrill() {
    var host = $('zhNumDrill');
    if (!host) { return; }
    var target = 0, asked = 0, right = 0, locked = false, max = 99;

    function paint(fb) {
      host.innerHTML =
        '<h4 data-i18n="zh.nu.dh">What number did you hear?</h4>' +
        '<p data-i18n="zh.nu.dp">Press play, then type the number in digits.</p>' +
        '<div>' + sayBtn(numHz(target), 'zh-say--lg', 'Play the number again') + '</div>' +
        '<div class="zh-btn-row">' +
          '<input class="zh-input" id="zhNumIn" type="text" inputmode="numeric" autocomplete="off" ' +
            'aria-label="Type the number you heard">' +
          '<button class="zh-btn zh-btn--primary" type="button" data-num="check">Check</button>' +
        '</div>' +
        '<div class="zh-btn-row">' +
          '<button class="zh-btn" type="button" data-num="range">' +
            (max === 99 ? 'Harder: up to 999' : 'Easier: up to 99') + '</button>' +
          '<button class="zh-btn" type="button" data-num="next">Next number</button>' +
        '</div>' +
        '<p class="zh-drill-fb">' + (fb || '') + '</p>' +
        '<p class="zh-score">' + right + ' correct out of ' + asked + '</p>';
      translate(host);
    }

    function nextRound(autoplay) {
      target = Math.floor(Math.random() * (max + 1));
      locked = false;
      paint();
      /* Only after the student has asked for a round — focusing on the first
         paint would scroll the page down to the drill. */
      if (autoplay !== false) {
        Speak.say(numHz(target));
        var i = $('zhNumIn');
        if (i) { i.focus(); }
      }
    }

    function check() {
      if (locked) { return; }
      var input = $('zhNumIn');
      var val = (input.value || '').trim();
      if (!val) { return; }
      locked = true;
      asked++;
      var ok = String(parseInt(val, 10)) === String(target);
      if (ok) { right++; }
      host.querySelector('.zh-drill-fb').innerHTML =
        (ok ? '<span style="color:var(--success-500)">Correct</span>'
            : '<span style="color:#dc2626">It was ' + target + '</span>') +
        '<span class="sm">' + esc(numHz(target)) + ' — ' + esc(numPy(target)) + '</span>';
      host.querySelector('.zh-score').textContent = right + ' correct out of ' + asked;
    }

    host.addEventListener('click', function (e) {
      var b = e.target.closest('[data-num]');
      if (!b) { return; }
      var act = b.getAttribute('data-num');
      if (act === 'check') { check(); }
      else if (act === 'next') { nextRound(true); }
      else if (act === 'range') { max = max === 99 ? 999 : 99; nextRound(true); }
    });
    host.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.id === 'zhNumIn') {
        e.preventDefault();
        if (locked) { nextRound(true); } else { check(); }
      }
    });

    nextRound(false);
  }

  /* ==================================================================== 7
     MODULE — WORDS                                                        */
  var SCORE_KEY = 'aa-chinese-scores';

  function bestScores() {
    try { return JSON.parse(localStorage.getItem(SCORE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveScore(key, pct) {
    try {
      var all = bestScores();
      if (!(key in all) || pct > all[key]) { all[key] = pct; localStorage.setItem(SCORE_KEY, JSON.stringify(all)); }
    } catch (e) { /* private browsing — nothing is remembered, which is fine */ }
  }

  function allWords() {
    var out = [];
    (B.words || []).forEach(function (c) {
      c.items.forEach(function (w) { out.push(w); });
    });
    return out;
  }

  function renderWords() {
    var best = bestScores().words;
    var h = [];

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.wd.h1">The first two hundred words</h3>' +
      '<p class="lead" data-i18n="zh.wd.p1">Grouped the way you will actually use them. Every entry shows the characters ' +
      'with pinyin above and reads aloud when you tap the speaker. Search in English or in pinyin.</p></div>');

    h.push('<div id="zhWordView">' +
      '<div class="zh-search">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
          '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
        '<input id="zhWordSearch" type="search" autocomplete="off" ' +
          'placeholder="Search — hello, water, shuǐ, 水…" data-i18n-placeholder="zh.wd.ph" ' +
          'aria-label="Search the word list">' +
      '</div>' +
      '<div class="zh-filters" id="zhWordFilters">' +
        '<button type="button" data-cat="all" aria-pressed="true">All</button>' +
        (B.words || []).map(function (c) {
          return '<button type="button" data-cat="' + esc(c.key) + '" aria-pressed="false">' +
            esc(lang() === 'km' && c.km ? c.km : c.en) + '</button>';
        }).join('') +
      '</div>' +
      '<p class="zh-count" id="zhWordCount"></p>' +
      '<div class="zh-words" id="zhWordGrid">' +
        (B.words || []).map(function (c) {
          return c.items.map(function (w) {
            return '<div class="zh-word" data-cat="' + esc(c.key) + '" ' +
              'data-find="' + esc((w.en + ' ' + w.py + ' ' + w.hz + ' ' + (w.km || '')).toLowerCase()) + '">' +
              sayBtn(w.hz, 'zh-say--sm') +
              '<span class="txt">' + ruby(w.hz, w.py) +
              '<span class="gloss">' + esc(gloss(w)) + '</span></span></div>';
          }).join('');
        }).join('') +
      '</div>' +
      '<p class="zh-empty zh-hide" id="zhWordEmpty">Nothing matches that search.</p>' +
      '<div class="zh-drill" style="margin-top:1.6rem">' +
        '<h4 data-i18n="zh.wd.qh">Test yourself</h4>' +
        '<p data-i18n="zh.wd.qp">Twenty words picked at random from the list above. You can skip, go back and see the answer for every question.</p>' +
        '<div class="zh-btn-row"><button class="zh-btn zh-btn--primary" type="button" id="zhWordQuiz">Start the 20-word test &rarr;</button></div>' +
        (best === undefined ? '' : '<p class="zh-score">Your best so far: ' + best + '%</p>') +
      '</div>' +
    '</div>' +
    '<div id="zhWordQuizMount" class="zh-hide"></div>');

    h.push('<div class="zh-sec" style="margin-top:2.4rem"><h3 data-i18n="zh.wd.h2">Sentence patterns worth memorising</h3>' +
      '<p class="lead" data-i18n="zh.wd.p2">Learn these as whole units and swap the words in and out.</p>' +
      '<div class="zh-pat">' +
      (B.patterns || []).map(function (p) {
        return '<div>' + sayBtn(p.hz, 'zh-say--sm') + '<div>' + ruby(p.hz, p.py) +
          '<span class="gloss">' + esc(gloss(p)) + '</span>' +
          '<span class="why">' + esc(p.note) + '</span></div></div>';
      }).join('') + '</div></div>');

    return h.join('');
  }

  function wireWords(panel) {
    var grid = $('zhWordGrid'), search = $('zhWordSearch'),
        filters = $('zhWordFilters'), countEl = $('zhWordCount'), empty = $('zhWordEmpty');
    if (!grid) { return; }
    var cat = 'all';

    function apply() {
      var q = (search.value || '').trim().toLowerCase();
      var shown = 0;
      grid.querySelectorAll('.zh-word').forEach(function (el) {
        var okCat = cat === 'all' || el.getAttribute('data-cat') === cat;
        var okQ = !q || el.getAttribute('data-find').indexOf(q) > -1;
        var on = okCat && okQ;
        el.classList.toggle('is-hidden', !on);
        if (on) { shown++; }
      });
      countEl.textContent = shown + ' word' + (shown === 1 ? '' : 's') + ' shown';
      empty.classList.toggle('zh-hide', shown > 0);
    }

    search.addEventListener('input', apply);
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat]');
      if (!b) { return; }
      cat = b.getAttribute('data-cat');
      filters.querySelectorAll('button').forEach(function (x) {
        x.setAttribute('aria-pressed', String(x === b));
      });
      apply();
    });
    apply();

    var startBtn = $('zhWordQuiz');
    if (startBtn && window.AAQuiz) {
      startBtn.addEventListener('click', function () { startWordQuiz(); });
    }
  }

  function startWordQuiz() {
    var pool = allWords();
    var mount = $('zhWordQuizMount'), view = $('zhWordView');
    if (!mount || !window.AAQuiz) { return; }

    var picked = shuffle(pool).slice(0, 20);
    var qs = picked.map(function (w) {
      var wrong = shuffle(pool.filter(function (o) { return gloss(o) !== gloss(w); })).slice(0, 3);
      var opts = shuffle([gloss(w)].concat(wrong.map(gloss)));
      return {
        q: '「' + w.hz + '」 (' + w.py + ') — what does it mean?',
        opts: opts,
        ans: opts.indexOf(gloss(w)),
        why: w.hz + ' ' + w.py + ' — ' + gloss(w) + '.'
      };
    });

    view.classList.add('zh-hide');
    mount.classList.remove('zh-hide');

    window.AAQuiz.start({
      mount: mount,
      questions: qs,
      badge: 'Vocabulary',
      title: 'Chinese words — 20 questions',
      subtitle: 'Twenty words from the beginner list',
      exitLabel: 'Back to the word list',
      onExit: function () { mount.classList.add('zh-hide'); view.classList.remove('zh-hide'); },
      onRetake: function () { startWordQuiz(); },
      onFinish: function (r) { saveScore('words', r.pct); }
    });
  }

  /* ==================================================================== 8
     MODULE — CONVERSATION                                                 */
  function renderConvo() {
    var h = [];

    h.push('<div class="zh-sec">' +
      '<h3 data-i18n="zh.cv.h1">Eight conversations to learn by heart</h3>' +
      '<p class="lead" data-i18n="zh.cv.p1">Every line has pinyin above the characters and reads aloud on its own, ' +
      'or press play and listen to the whole exchange. Once you can follow it with the translation hidden, ' +
      'say the lines out loud with the audio.</p></div>');

    h.push('<div class="zh-dlg-pick" id="zhDlgPick">' +
      (B.convos || []).map(function (c, i) {
        return '<button type="button" data-dlg="' + i + '" aria-pressed="' + (i === 0) + '">' +
          '<span class="n">Dialogue ' + (i + 1) + '</span>' +
          '<span class="t">' + esc(lang() === 'km' && c.km ? c.km : c.en) + '</span></button>';
      }).join('') + '</div>');

    h.push('<div class="zh-panel" style="padding:clamp(1rem,2.5vw,1.6rem)">' +
      '<div class="zh-play-row">' +
        '<button class="zh-btn zh-btn--primary" type="button" data-dlgact="play">&#9654; Play the whole dialogue</button>' +
        '<button class="zh-btn" type="button" data-dlgact="stop">Stop</button>' +
        '<button class="zh-btn" type="button" data-dlgact="quiet" aria-pressed="false">Hide the translation</button>' +
      '</div>' +
      '<p class="zh-count" id="zhDlgNote"></p>' +
      '<div class="zh-dlg" id="zhDlg"></div>' +
    '</div>');

    return h.join('');
  }

  var Dlg = (function () {
    var idx = 0, playing = false, host, note, pickRow;

    function paint() {
      var c = (B.convos || [])[idx];
      if (!c || !host) { return; }
      note.textContent = c.note || '';
      host.innerHTML = c.lines.map(function (l, i) {
        return '<div class="zh-line" data-sp="' + esc(l.sp) + '" data-line="' + i + '">' +
          '<span class="who">' + esc(l.sp) + '</span>' +
          sayBtn(l.hz, 'zh-say--sm') +
          '<div class="body">' + ruby(l.hz, l.py) +
          '<span class="gloss">' + esc(gloss(l)) + '</span></div></div>';
      }).join('');
      if (pickRow) {
        pickRow.querySelectorAll('[data-dlg]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(+b.getAttribute('data-dlg') === idx));
        });
      }
    }

    function highlight(i) {
      host.querySelectorAll('.zh-line').forEach(function (el, k) {
        el.classList.toggle('is-playing', k === i);
      });
    }

    function play() {
      var c = (B.convos || [])[idx];
      if (!c) { return; }
      playing = true;
      var i = 0;
      (function step() {
        if (!playing || i >= c.lines.length) { stop(); return; }
        highlight(i);
        var line = c.lines[i];
        i++;
        Speak.say(line.hz, { onend: function () { setTimeout(step, 420); } });
      })();
    }

    function stop() {
      playing = false;
      Speak.stop();
      if (host) { highlight(-1); }
    }

    function init(panel) {
      host = $('zhDlg');
      note = $('zhDlgNote');
      pickRow = $('zhDlgPick');
      if (!host) { return; }

      if (panel.getAttribute('data-wired')) { paint(); return; }
      panel.setAttribute('data-wired', '1');

      panel.addEventListener('click', function (e) {
        var p = e.target.closest('[data-dlg]');
        if (p) { stop(); idx = +p.getAttribute('data-dlg'); paint(); return; }
        var a = e.target.closest('[data-dlgact]');
        if (!a) { return; }
        var act = a.getAttribute('data-dlgact');
        if (act === 'play') { stop(); play(); }
        else if (act === 'stop') { stop(); }
        else if (act === 'quiet') {
          var on = a.getAttribute('aria-pressed') !== 'true';
          a.setAttribute('aria-pressed', String(on));
          a.textContent = on ? 'Show the translation' : 'Hide the translation';
          host.classList.toggle('is-quiet', on);
        }
      });
      paint();
    }

    return { init: init, stop: stop, repaint: paint };
  })();

  /* ==================================================================== 9
     TABS, TOOLBAR AND WIRING                                              */
  var MODULES = [
    { key: 'pinyin',       hz: '拼音', en: 'Pinyin',       render: renderPinyin, after: null },
    { key: 'sound',        hz: '发音', en: 'Sound',        render: renderSound,  after: wireToneDrill },
    { key: 'writing',      hz: '汉字', en: 'Writing',      render: renderWriting, after: function (p) { Pad.init(p); } },
    { key: 'numbers',      hz: '数字', en: 'Numbers',      render: renderNumbers, after: wireNumberDrill },
    { key: 'words',        hz: '词语', en: 'Basic words',  render: renderWords,  after: wireWords },
    { key: 'conversation', hz: '会话', en: 'Conversation', render: renderConvo,  after: function (p) { Dlg.init(p); } }
  ];

  var built = {}, active = null;

  function translate(root) {
    if (window.AAi18n) { window.AAi18n.translate(root || document); }
  }

  function panelOf(key) { return document.querySelector('[data-zh-panel="' + key + '"]'); }

  function build(mod) {
    var panel = panelOf(mod.key);
    if (!panel) { return; }
    panel.innerHTML = mod.render();
    if (mod.after) { mod.after(panel); }
    translate(panel);
    built[mod.key] = true;
  }

  function buildAll() {
    MODULES.forEach(function (m) { if (!built[m.key]) { build(m); } });
  }

  /* ------------------------------------------------- contents (left rail)
     The outline is read back out of the panels once they are built, so it
     can never drift from the headings it points at.                       */
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  var openGroups = {};

  function sectionsOf(mod) {
    var panel = panelOf(mod.key), out = [];
    if (!panel) { return out; }
    var n = 0;
    panel.querySelectorAll('.zh-sec').forEach(function (s) {
      var head = s.querySelector('h3');
      if (!head) { return; }
      s.id = 'zhs-' + mod.key + '-' + (n++);
      out.push({ id: s.id, label: head.textContent.replace(/\s+/g, ' ').trim() });
    });
    return out;
  }

  function buildOutline() {
    var nav = $('zhOutline');
    if (!nav) { return; }

    nav.innerHTML = MODULES.map(function (m) {
      var secs = sectionsOf(m);
      var on = m.key === active;
      if (on) { openGroups[m.key] = true; }
      var open = openGroups[m.key] !== false && (openGroups[m.key] || on);

      return '<div class="zh-og' + (on ? ' is-on' : '') + '" data-og="' + m.key + '">' +
        '<div class="zh-og-top">' +
          '<button class="zh-og-link" type="button" data-mod="' + m.key + '"' +
            (on ? ' aria-current="true"' : '') + '>' +
            '<span class="hz">' + m.hz + '</span>' +
            '<span class="en" data-i18n="zh.tab.' + m.key + '">' + m.en + '</span>' +
          '</button>' +
          (secs.length
            ? '<button class="zh-og-caret" type="button" data-og-toggle="' + m.key + '" ' +
              'aria-expanded="' + open + '" aria-label="' + esc('Show or hide the sections of ' + m.en) + '">' +
              CHEV + '</button>'
            : '') +
        '</div>' +
        (secs.length
          ? '<ul class="zh-og-secs"' + (open ? '' : ' hidden') + '>' + secs.map(function (s) {
              return '<li><button type="button" data-sec="' + s.id + '" data-secmod="' + m.key + '">' +
                esc(s.label) + '</button></li>';
            }).join('') + '</ul>'
          : '') +
      '</div>';
    }).join('');

    translate(nav);
  }

  function syncOutline() {
    var nav = $('zhOutline');
    if (!nav) { return; }
    nav.querySelectorAll('.zh-og').forEach(function (g) {
      var on = g.getAttribute('data-og') === active;
      g.classList.toggle('is-on', on);
      var link = g.querySelector('[data-mod]');
      if (link) {
        if (on) { link.setAttribute('aria-current', 'true'); } else { link.removeAttribute('aria-current'); }
      }
      if (on) {
        openGroups[active] = true;
        var list = g.querySelector('.zh-og-secs'), caret = g.querySelector('[data-og-toggle]');
        if (list) { list.hidden = false; }
        if (caret) { caret.setAttribute('aria-expanded', 'true'); }
      }
    });
  }

  function goToSection(id) {
    var el = document.getElementById(id);
    if (!el) { return; }
    /* The panel may have just been unhidden, so let it lay out first. */
    setTimeout(function () {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  function narrow() { return window.innerWidth < 1080; }

  function setSideOpen(open) {
    var side = $('zhSide'), btn = $('zhSideToggle');
    if (!side || !btn) { return; }
    side.classList.toggle('is-collapsed', !open);
    btn.setAttribute('aria-expanded', String(open));
    var label = btn.querySelector('span');
    if (label) {
      /* Drop the stashed English before swapping the key, or switching back
         to English would restore the label of the other state. */
      label.removeAttribute('data-en-html');
      label.setAttribute('data-i18n', open ? 'zh.side.hide' : 'zh.side.show');
      label.textContent = open ? 'Hide' : 'Show';
      translate(btn);
    }
  }

  function wireOutline() {
    var nav = $('zhOutline'), btn = $('zhSideToggle');
    if (!nav) { return; }

    nav.addEventListener('click', function (e) {
      var caret = e.target.closest('[data-og-toggle]');
      if (caret) {
        var key = caret.getAttribute('data-og-toggle');
        var list = nav.querySelector('[data-og="' + key + '"] .zh-og-secs');
        var open = caret.getAttribute('aria-expanded') !== 'true';
        caret.setAttribute('aria-expanded', String(open));
        openGroups[key] = open;
        if (list) { list.hidden = !open; }
        return;
      }

      var sec = e.target.closest('[data-sec]');
      if (sec) {
        activate(sec.getAttribute('data-secmod'));
        goToSection(sec.getAttribute('data-sec'));
        if (narrow()) { setSideOpen(false); }
        return;
      }

      var mod = e.target.closest('[data-mod]');
      if (mod) {
        activate(mod.getAttribute('data-mod'));
        if (narrow()) { setSideOpen(false); }
      }
    });

    if (btn) {
      btn.addEventListener('click', function () {
        setSideOpen($('zhSide').classList.contains('is-collapsed'));
      });
    }

    /* Open on a wide screen, tucked away on a phone. */
    setSideOpen(!narrow());
  }

  /* Marks the section you are reading in the contents list. */
  var spy = null;
  function wireSpy() {
    if (spy) { spy.disconnect(); spy = null; }
    if (!('IntersectionObserver' in window)) { return; }
    var panel = panelOf(active), nav = $('zhOutline');
    if (!panel || !nav) { return; }

    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        nav.querySelectorAll('[data-sec]').forEach(function (b) {
          b.classList.toggle('is-here', b.getAttribute('data-sec') === en.target.id);
        });
      });
    }, { rootMargin: '-160px 0px -65% 0px' });

    panel.querySelectorAll('.zh-sec').forEach(function (s) { spy.observe(s); });
  }

  function activate(key, push) {
    var mod = null;
    MODULES.forEach(function (m) { if (m.key === key) { mod = m; } });
    if (!mod) { mod = MODULES[0]; }

    Speak.stop();
    Dlg.stop();

    /* A vocabulary test left running would keep the keyboard shortcuts. */
    if (window.AAQuiz && window.AAQuiz.hasSession()) {
      window.AAQuiz.stop();
      var view = $('zhWordView'), mount = $('zhWordQuizMount');
      if (view) { view.classList.remove('zh-hide'); }
      if (mount) { mount.classList.add('zh-hide'); }
    }

    active = mod.key;
    if (!built[mod.key]) { build(mod); }

    MODULES.forEach(function (m) {
      var p = panelOf(m.key);
      if (p) { p.classList.toggle('zh-hide', m.key !== mod.key); }
    });
    document.querySelectorAll('#zhTabs button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.getAttribute('data-mod') === mod.key));
    });
    if (mod.key === 'writing') { Pad.resize(); }

    syncOutline();
    wireSpy();

    if (push !== false && history.replaceState) {
      history.replaceState(null, '', '#' + mod.key);
    }
  }

  function paintTabs() {
    $('zhTabs').innerHTML = MODULES.map(function (m) {
      return '<button type="button" role="tab" data-mod="' + m.key + '" id="zht-' + m.key + '" ' +
        'aria-controls="zhp-' + m.key + '" aria-selected="false">' +
        '<span class="zh-t-hz">' + m.hz + '</span>' +
        '<span data-i18n="zh.tab.' + m.key + '">' + m.en + '</span></button>';
    }).join('');
  }

  function wireToolbar() {
    var speed = $('zhSpeed'), status = $('zhVoice');

    speed.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rate]');
      if (!b) { return; }
      Speak.setRate(parseFloat(b.getAttribute('data-rate')));
      speed.querySelectorAll('button').forEach(function (x) {
        x.setAttribute('aria-pressed', String(x === b));
      });
    });

    $('zhStopAll').addEventListener('click', function () { Speak.stop(); Dlg.stop(); });

    Speak.onStatus(function (s) {
      status.textContent = s.msg;
      status.classList.toggle('is-warn', !!s.warn);
    });
  }

  /* One handler for every speaker button on the page. */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-say]');
    if (!b) { return; }
    var text = b.getAttribute('data-say');
    if (!text) { return; }
    Dlg.stop();
    document.querySelectorAll('.is-on[data-say], .zh-say.is-on').forEach(function (x) {
      x.classList.remove('is-on');
    });
    /* Light up whatever was pressed — the speaker itself, or the tile. */
    var mark = b.classList.contains('zh-say') ? b : (b.querySelector('.zh-say') || b);
    mark.classList.add('is-on');
    Speak.say(text, {
      onend: function () { mark.classList.remove('is-on'); }
    });
  });

  /* Switching the site language re-renders the glosses. */
  document.addEventListener('aa:langchange', function () {
    Speak.stop();
    Dlg.stop();
    Object.keys(built).forEach(function (k) { built[k] = false; });
    buildAll();
    buildOutline();
    if (active) { activate(active, false); }
  });

  /* ------------------------------------------------------------- start up */
  paintTabs();
  wireToolbar();

  $('zhTabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-mod]');
    if (b) { activate(b.getAttribute('data-mod')); }
  });

  /* All six panels are rendered up front — hidden ones cost no layout, and
     the contents list is read straight out of them. */
  var start = (location.hash || '').replace('#', '');
  buildAll();
  active = start || 'pinyin';
  buildOutline();
  wireOutline();
  activate(active, false);

  window.addEventListener('hashchange', function () {
    var k = (location.hash || '').replace('#', '');
    if (k && k !== active) { activate(k, false); }
  });
})();
