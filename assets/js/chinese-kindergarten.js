/* Alpha Academy Cambodia — Chinese for Kindergarten
   ---------------------------------------------------------------------------
   The Chinese twin of english-kindergarten.js. Everything the two pages share
   — the voice, the flip mechanics, the contents rail, the game round — lives
   in assets/js/kids-core.js; everything Chinese lives in
   assets/js/chinese-kg-bank.js. This file is only the join.

   Three things differ from the English page, and all three are the language
   rather than the design.

   · SPEAK CHARACTERS, NEVER PINYIN. A zh-CN voice reads 你好 correctly but
     would read "nǐ hǎo" as Latin letters, so every data-say and every game
     prompt below is hanzi. Pinyin is printed, never spoken.

   · THE FLASHCARD RUNS THE OTHER WAY. English hides the picture and shows the
     letter, because the child is learning what A sounds like. Here the front
     shows the character and its pinyin and hides the meaning, because the
     child is learning what 人 means — the recall target is the picture.

   · TONES REPLACE PHONICS. There is nothing to blend, but there is the one
     thing a Khmer speaker most needs drilling on, so the fifth module is the
     four tones and the game set trades "which letter says…" for "which tone".

   The page copy is bilingual here as {en,km} pairs, the same way the
   probability bank carries both languages side by side.                     */
(function () {
  'use strict';

  var B = window.ZKG_BANK, K = window.KidsCore;
  if (!B || !K) { return; }

  var t = K.t, gloss = K.gloss, esc = K.esc, clr = K.clr, tip = K.tip;
  var shuffle = K.shuffle, pick = K.pick, others = K.others;

  /* ------------------------------------------------------------ the copy */
  var T = {
    tabs: {
      hz:    { en:'汉字',    km:'អក្សរចិន',    em:'🀄', c:'var(--kg-red)' },
      num:   { en:'数字',    km:'លេខ',         em:'🔢', c:'var(--kg-orange)' },
      col:   { en:'颜色',    km:'ពណ៌ & រាង',   em:'🎨', c:'var(--kg-purple)' },
      words: { en:'词语',    km:'ពាក្យ',       em:'🧸', c:'var(--kg-green)' },
      tone:  { en:'声调',    km:'សំនៀង',       em:'🎵', c:'var(--kg-blue)' },
      talk:  { en:'说话',    km:'និយាយ',       em:'💬', c:'var(--kg-pink)' },
      play:  { en:'玩！',    km:'លេងល្បែង!',   em:'🎮', c:'var(--kg-yellow)' }
    },
    hz: {
      h: { en:'My first characters 汉字', km:'អក្សរចិនដំបូងរបស់ខ្ញុំ 汉字' },
      p: { en:'Twenty-six characters to start with. Most of them are pictures of the thing they mean — 山 is a mountain with three peaks, 口 is an open mouth. Tap a card to turn it over and hear it.',
           km:'អក្សរ ២៦ តួសម្រាប់ចាប់ផ្តើម។ ភាគច្រើនគឺជារូបភាពនៃវត្ថុដែលវាមានន័យ — 山 គឺភ្នំមានកំពូលបី 口 គឺមាត់បើក។ ចុចលើកាតដើម្បីបង្វិលវា ហើយស្តាប់។' },
      tip:{ en:'<b>For the grown-up:</b> two or three characters a week is plenty. Trace the character in the air with a finger while you say it — the hand remembers what the eye forgets.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ពីរ ឬបីតួអក្សរក្នុងមួយសប្តាហ៍គឺគ្រប់គ្រាន់។ គូសតួអក្សរនៅលើអាកាសដោយម្រាមដៃពេលអាន — ដៃចាំបាននូវអ្វីដែលភ្នែកភ្លេច។' },
      listen:{ en:'Listen', km:'ស្តាប់' },
      slow:  { en:'Slow',   km:'យឺត' },
      tap:   { en:'tap me', km:'ចុចខ្ញុំ' },
      flipTo:{ en:'Show every picture', km:'បង្ហាញរូបទាំងអស់' },
      flipBack:{ en:'Turn them all back', km:'បង្វិលត្រឡប់ទាំងអស់' }
    },
    num: {
      h: { en:'Numbers 1 to 20 数字', km:'លេខ ១ ដល់ ២០ 数字' },
      p: { en:'Chinese numbers are the easiest part of the language: learn one to ten and you already have every number to ninety-nine. Eleven is simply ten-one, 十一.',
           km:'លេខចិនគឺជាផ្នែកងាយស្រួលបំផុត៖ រៀនមួយដល់ដប់ នោះអ្នកមានលេខគ្រប់ចំនួនរហូតដល់កៅសិបប្រាំបួនហើយ។ ដប់មួយគឺគ្រាន់តែ ដប់-មួយ 十一។' },
      tip:{ en:'<b>For the grown-up:</b> chanting 一二三 is not yet counting. Ask 几个? — “how many?” — and let the child touch each picture as they say the number.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ការសូត្រ 一二三 មិនទាន់ជាការរាប់ទេ។ សូមសួរ 几个? — “ប៉ុន្មាន?” — ហើយឲ្យកូនប៉ះរូបភាពម្ដងមួយៗពេលរាប់។' }
    },
    col: {
      h:  { en:'Colours 颜色', km:'ពណ៌ 颜色' },
      p:  { en:'Every colour ends in 色 (sè), which just means “colour”. Tap one to hear it, then go and find something that colour in the room.',
            km:'ពណ៌គ្រប់ពណ៌បញ្ចប់ដោយ 色 (sè) ដែលមានន័យថា “ពណ៌”។ ចុចមួយដើម្បីស្តាប់ រួចទៅរកវត្ថុដែលមានពណ៌នោះក្នុងបន្ទប់។' },
      h2: { en:'Shapes 形状', km:'រាងទ្រង់ទ្រាយ 形状' },
      p2: { en:'Every shape ends in 形 (xíng), “shape”. Tap one, then look for it on a door, a plate or a window.',
            km:'រាងគ្រប់រាងបញ្ចប់ដោយ 形 (xíng) ដែលមានន័យថា “រាង”។ ចុចមួយ រួចរកមើលវានៅលើទ្វារ ចាន ឬបង្អួច។' }
    },
    words: {
      h: { en:'My first words 词语', km:'ពាក្យដំបូងរបស់ខ្ញុំ 词语' },
      p: { en:'Eight groups of everyday words. Tap any picture to hear it — the pinyin is there for you, not for the child.',
           km:'ពាក្យប្រចាំថ្ងៃចែកជា ៨ ក្រុម។ ចុចលើរូបភាពណាមួយដើម្បីស្តាប់ — ពិនអ៊ីនមានសម្រាប់អ្នក មិនមែនសម្រាប់កូនទេ។' },
      tip:{ en:'<b>For the grown-up:</b> a child needs to hear a word many times before saying it. Do not ask them to read the pinyin — it is a ladder for adults, and children who lean on it stop looking at the characters.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> កូនត្រូវស្តាប់ពាក្យច្រើនដងមុននឹងនិយាយបាន។ កុំឲ្យគេអានពិនអ៊ីន — វាជាជណ្ដើរសម្រាប់មនុស្សពេញវ័យ ហើយកូនដែលពឹងលើវា នឹងឈប់មើលតួអក្សរ។' }
    },
    tone: {
      h: { en:'The four tones 声调', km:'សំនៀងទាំងបួន 声调' },
      p: { en:'This is the part that has no equivalent in Khmer or English, and it is the part that matters most. One syllable said at four different pitches is four different words. Tap any card to hear it.',
           km:'នេះជាផ្នែកដែលគ្មាននៅក្នុងភាសាខ្មែរ ឬអង់គ្លេសទេ ហើយវាជាផ្នែកសំខាន់បំផុត។ ព្យាង្គមួយបើនិយាយខុសកម្ពស់សំឡេង គឺក្លាយជាពាក្យបួនផ្សេងគ្នា។ ចុចលើកាតណាមួយដើម្បីស្តាប់។' },
      tip:{ en:'<b>For the grown-up:</b> do not drill tones on their own — a child copies a tone far better inside a real word than on a bare syllable. Sing them if it helps; the pitch is what carries.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> កុំហ្វឹកហាត់សំនៀងដាច់ដោយឡែក — កូនធ្វើតាមសំនៀងបានប្រសើរជាងនៅក្នុងពាក្យពិត។ បើជួយបាន សូមច្រៀងវា ព្រោះកម្ពស់សំឡេងទើបជារឿងសំខាន់។' },
      ch: { en:'One syllable, four words', km:'ព្យាង្គមួយ ពាក្យបួន' },
      cp: { en:'All four say “ma”. Only the pitch changes, and the meaning changes with it — which is why the tone is not decoration.',
            km:'ទាំងបួនអានថា “ម៉ា”។ មានតែកម្ពស់សំឡេងទេដែលប្រែ ហើយអត្ថន័យប្រែតាម — នេះហើយជាមូលហេតុដែលសំនៀងមិនមែនជាការតុបតែង។' },
      sh: { en:'Characters to just know 常用字', km:'តួអក្សរត្រូវចាំ 常用字' },
      sp: { en:'These turn up in almost every sentence. They are not pictures of anything — they are simply recognised. Tap to hear each one.',
            km:'តួអក្សរទាំងនេះមាននៅក្នុងស្ទើរតែគ្រប់ប្រយោគ។ វាមិនមែនជារូបភាពនៃអ្វីទេ — គ្រាន់តែចាំមើលឃើញ។ ចុចដើម្បីស្តាប់។' }
    },
    talk: {
      h: { en:'Things we say 说话', km:'ពាក្យដែលយើងនិយាយ 说话' },
      p: { en:'Speaking comes long before writing, and long before characters. Tap a line to hear it, then say it back together.',
           km:'ការនិយាយមកមុនការសរសេរ និងមុនតួអក្សរឆ្ងាយណាស់។ ចុចលើឃ្លាដើម្បីស្តាប់ រួចនិយាយតាមជាមួយគ្នា។' },
      tip:{ en:'<b>For the grown-up:</b> use these for real, not as a lesson — greet the child with 你好 every morning and the phrase sticks in a week.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមប្រើវាពិតៗ មិនមែនជាមេរៀនទេ — ស្វាគមន៍កូនដោយ 你好 រាល់ព្រឹក នោះឃ្លានឹងចាំបានក្នុងមួយសប្តាហ៍។' }
    }
  };

  var theme = B.themes[0].key;      /* which vocabulary group is open */

  /* The label under a card: the meaning, in whichever language is on. */
  function mean(o) { return K.lang() === 'km' ? (o.km || o.en || '') : (o.en || ''); }

  /* ------------------------------------------------------------- 汉 字
     The English deck hides the picture and shows the letter, because there
     the child is learning what A sounds like. Here it is the other way up:
     the front carries the character and its pinyin, and what is hidden is
     the meaning — because that is what the child is trying to recall. */
  function panelHz() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🀄</span>' + t(T.hz.h) + '</h3>' +
            '<p class="say">' + t(T.hz.p) + '</p>' + tip(T.hz.tip) +
            '<div class="kg-drill">' +
              '<button type="button" data-flipall="1">🖼️ ' + t(T.hz.flipTo) + '</button>' +
              '<button type="button" data-flipall="0">🀄 ' + t(T.hz.flipBack) + '</button>' +
            '</div>' +
            '<div class="kg-abc">';
    B.hanzi.forEach(function (a, i) {
      h += '<div class="kg-card" style="--c:' + clr(i) + '">' +
             '<button class="kg-flip" type="button" data-flip="' + esc(a.hz) + '" aria-pressed="false" ' +
               'aria-label="' + esc(a.hz + ' ' + a.py) + '">' +
               '<span class="kg-flip-in">' +
                 '<span class="kg-face kg-front">' +
                   '<span class="pair kg-hz">' + a.hz + '</span>' +
                   '<span class="py">' + esc(a.py) + '</span>' +
                   '<span class="hint">👆 ' + t(T.hz.tap) + '</span>' +
                 '</span>' +
                 '<span class="kg-face kg-back">' +
                   '<span class="em" aria-hidden="true">' + a.em + '</span>' +
                   '<span class="w">' + a.hz + ' = ' + esc(mean(a)) + '</span>' +
                   '<span class="km">' + esc(a.py) + '</span>' +
                 '</span>' +
               '</span>' +
             '</button>' +
             '<span class="kg-duo">' +
               '<button type="button" data-say="' + esc(a.hz) + '">' + t(T.hz.listen) + '</button>' +
               '<button type="button" data-say="' + esc(a.hz) + '" data-slow="1">' + t(T.hz.slow) + '</button>' +
               '<span class="ph">' + a.tone + '</span>' +
             '</span>' +
           '</div>';
    });
    return h + '</div></section>';
  }

  /* ----------------------------------------------------------- 1 to 2 0 */
  function panelNum() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔢</span>' + t(T.num.h) + '</h3>' +
            '<p class="say">' + t(T.num.p) + '</p>' + tip(T.num.tip) +
            '<div class="kg-nums">';
    B.numbers.forEach(function (n, i) {
      var em = B.counters[i % B.counters.length], dots = '';
      for (var k = 0; k < n.n; k++) { dots += em; }
      h += '<button class="kg-num" type="button" style="--c:' + clr(i) + '" data-say="' + esc(n.hz) + '">' +
             '<span class="d kg-hz">' + n.hz + '</span>' +
             '<span class="dots" aria-hidden="true">' + dots + '</span>' +
             '<span class="w">' + n.n + ' · ' + esc(n.py) + '</span>' +
             '<span class="km">' + esc(gloss(n)) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ------------------------------------------------- colours and shapes */
  function panelCol() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🎨</span>' + t(T.col.h) + '</h3>' +
            '<p class="say">' + t(T.col.p) + '</p><div class="kg-cols">';
    B.colours.forEach(function (c) {
      h += '<button class="kg-col" type="button" data-say="' + esc(c.hz) + '">' +
             '<span class="chip kg-hz" style="background:' + c.hex + ';color:' + c.on + '" aria-hidden="true">中</span>' +
             '<span class="cap"><span class="w kg-hz">' + c.hz + '</span>' +
             '<span class="km">' + esc(c.py) + ' · ' + esc(mean(c)) + '</span></span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">⭐</span>' + t(T.col.h2) + '</h3>' +
         '<p class="say">' + t(T.col.p2) + '</p><div class="kg-shapes">';
    B.shapes.forEach(function (s, i) {
      h += '<button class="kg-shape" type="button" style="--c:' + clr(i) + '" data-say="' + esc(s.hz) + '">' +
             '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="' + s.d + '"/></svg>' +
             '<span class="w kg-hz">' + s.hz + '</span>' +
             '<span class="km">' + esc(s.py) + ' · ' + esc(mean(s)) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* -------------------------------------------------------- vocabulary */
  function panelWords() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🧸</span>' + t(T.words.h) + '</h3>' +
            '<p class="say">' + t(T.words.p) + '</p>' + tip(T.words.tip) +
            '<div class="kg-themebar" role="group">';
    B.themes.forEach(function (g, i) {
      h += '<button type="button" data-wordgroup="' + g.key + '" style="--c:' + clr(i) + '" aria-pressed="' +
             (g.key === theme ? 'true' : 'false') + '">' +
             '<span class="em" aria-hidden="true">' + g.em + '</span>' + g.hz + '</button>';
    });
    h += '</div><div class="kg-words" id="kgWords">' + wordCards() + '</div></section>';
    return h;
  }

  function wordCards() {
    var g = null;
    B.themes.forEach(function (x) { if (x.key === theme) { g = x; } });
    if (!g) { g = B.themes[0]; }
    return g.words.map(function (w, i) {
      return '<button class="kg-word" type="button" style="--c:' + clr(i) + '" data-say="' + esc(w.hz) + '">' +
               '<span class="em" aria-hidden="true">' + w.em + '</span>' +
               '<span class="w kg-hz">' + w.hz + '</span>' +
               '<span class="py">' + esc(w.py) + '</span>' +
               '<span class="km">' + esc(gloss(w)) + '</span>' +
             '</button>';
    }).join('');
  }

  /* ------------------------------------------------------------- 声 调 */
  function toneRow(w) {
    return '<div class="kg-blend">' +
             '<span class="em" aria-hidden="true">' + w.em + '</span>' +
             '<button class="kg-whole kg-hz" type="button" data-say="' + esc(w.hz) + '">' + w.hz + '</button>' +
             '<span class="py">' + esc(w.py) + '</span>' +
             '<span class="km">' + esc(gloss(w)) + '</span>' +
           '</div>';
  }

  function panelTone() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🎵</span>' + t(T.tone.h) + '</h3>' +
            '<p class="say">' + t(T.tone.p) + '</p>' + tip(T.tone.tip) +
            '<div class="kg-fams">';
    B.tones.forEach(function (f, i) {
      h += '<div class="kg-fam" style="--c:' + clr(i) + '">' +
             '<span class="end"><b class="mark">' + f.mark + '</b> ' + f.hz + '</span>' +
             '<p class="kg-fam-note">' + esc(t(f)) + '</p>' +
             '<div class="rows">' +
             f.words.map(function (w) { return toneRow(w); }).join('') +
           '</div></div>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔁</span>' + t(T.tone.ch) + '</h3>' +
         '<p class="say">' + t(T.tone.cp) + '</p><div class="kg-abc">';
    B.contrast.forEach(function (c, i) {
      h += '<div class="kg-card" style="--c:' + clr(i) + '">' +
             '<button class="kg-flip" type="button" data-flip="' + esc(c.hz) + '" aria-pressed="false" ' +
               'aria-label="' + esc(c.hz + ' ' + c.py) + '">' +
               '<span class="kg-flip-in">' +
                 '<span class="kg-face kg-front">' +
                   '<span class="pair kg-hz">' + c.hz + '</span>' +
                   '<span class="py">' + esc(c.py) + '</span>' +
                 '</span>' +
                 '<span class="kg-face kg-back">' +
                   '<span class="em" aria-hidden="true">' + c.em + '</span>' +
                   '<span class="w">' + esc(mean(c)) + '</span>' +
                   '<span class="km">' + esc(c.py) + '</span>' +
                 '</span>' +
               '</span>' +
             '</button>' +
             '<span class="kg-duo">' +
               '<button type="button" data-say="' + esc(c.hz) + '">' + t(T.hz.listen) + '</button>' +
               '<span class="ph">' + c.tone + '</span>' +
             '</span>' +
           '</div>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">👀</span>' + t(T.tone.sh) + '</h3>' +
         '<p class="say">' + t(T.tone.sp) + '</p><div class="kg-sight">';
    B.common.forEach(function (s) {
      h += '<button type="button" data-say="' + esc(s.hz) + '"><span class="kg-hz">' + s.hz + '</span>' +
           '<small>' + esc(s.py) + ' · ' + esc(mean(s)) + '</small></button>';
    });
    return h + '</div></section>';
  }

  /* --------------------------------------------------------------- talk */
  function panelTalk() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">💬</span>' + t(T.talk.h) + '</h3>' +
            '<p class="say">' + t(T.talk.p) + '</p>' + tip(T.talk.tip) + '</section>';
    B.talk.forEach(function (g, i) {
      h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">' + g.em + '</span>' +
             g.hz + '</h3><div class="kg-lines">';
      g.lines.forEach(function (l) {
        var say = l.a ? l.hz + '…' + l.a : l.hz;
        h += '<button class="kg-line" type="button" style="--c:' + clr(i) + '" data-say="' + esc(say) + '">' +
               '<span class="em" aria-hidden="true">' + l.em + '</span>' +
               '<span class="txt"><span class="s kg-hz">' + l.hz + '</span>' +
                 '<span class="py">' + esc(l.py) + '</span>' +
                 (l.a ? '<span class="a kg-hz">' + l.a + (l.ay ? ' <i>' + esc(l.ay) + '</i>' : '') + '</span>' : '') +
                 '<span class="km">' + esc(gloss(l)) + '</span></span>' +
               '<span class="spk" aria-hidden="true">🔊</span>' +
             '</button>';
      });
      h += '</div></section>';
    });
    return h;
  }

  /* ==================================================================== 5
     THE GAMES
     Same five shapes as the English page, with two swapped for the two
     things Chinese has and English does not: characters, and tones.       */

  function allWords() {
    var out = [], seen = {};
    B.themes.forEach(function (g) { g.words.forEach(function (w) { out.push(w); }); });
    return out.filter(function (w) {
      if (seen[w.hz]) { return false; }
      seen[w.hz] = 1; return true;
    });
  }

  var TONE_OPTS = [
    { n:1, mark:'ˉ' }, { n:2, mark:'ˊ' }, { n:3, mark:'ˇ' }, { n:4, mark:'ˋ' }
  ];

  var GAMES = [
    { key:'listen', em:'👂', c:'var(--kg-blue)',
      t:{ en:'Listen and find 听一听', km:'ស្តាប់ រួចរក 听一听' },
      p:{ en:'Hear a word, then tap the right picture.', km:'ស្តាប់ពាក្យ រួចចុចរូបភាពដែលត្រូវ។' },
      make: function () {
        var pool = allWords();
        return shuffle(pool).slice(0, 10).map(function (w) {
          var opts = shuffle([w].concat(others(pool, 3, w, function (x) { return x.em; })));
          return {
            say: w.hz,
            ask: { kind:'listen', label: w.hz + ' ' + w.py, km: gloss(w) },
            opts: opts.map(function (o) { return { kind:'emoji', em:o.em, say:o.hz }; }),
            ans: opts.indexOf(w)
          };
        });
      }},

    { key:'char', em:'🀄', c:'var(--kg-red)',
      t:{ en:'Which character? 看图选字', km:'តួអក្សរណា? 看图选字' },
      p:{ en:'Look at the picture, then tap the character that means it.', km:'មើលរូបភាព រួចចុចតួអក្សរដែលមានន័យនោះ។' },
      make: function () {
        var pool = B.hanzi;
        return shuffle(pool).slice(0, 10).map(function (a) {
          var opts = shuffle([a].concat(others(pool, 3, a, function (x) { return x.hz; })));
          return {
            say: a.hz,
            ask: { kind:'emoji', em:a.em, label: mean(a) },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kg-hz', text:o.hz, sub:o.py, say:o.hz }; }),
            ans: opts.indexOf(a)
          };
        });
      }},

    { key:'tone', em:'🎵', c:'var(--kg-purple)',
      t:{ en:'Which tone? 第几声', km:'សំនៀងទីប៉ុន្មាន? 第几声' },
      p:{ en:'Hear a character, then tap its tone — 1 flat, 2 rising, 3 dipping, 4 falling.',
          km:'ស្តាប់តួអក្សរ រួចចុចសំនៀងរបស់វា — ១ រាបស្មើ ២ ឡើង ៣ ចុះឡើង ៤ ធ្លាក់។' },
      make: function () {
        /* single syllables only — the tone of a two-character word is two
           answers, and the question would then have no right one */
        var pool = B.hanzi.filter(function (a) { return a.hz.length === 1; });
        return shuffle(pool).slice(0, 10).map(function (a) {
          var opts = TONE_OPTS;      /* always 1 2 3 4, in order, so the child
                                        learns where each one lives */
          var right = 0;
          opts.forEach(function (o, i) { if (o.n === a.tone) { right = i; } });
          return {
            say: a.hz, slow: true,
            ask: { kind:'glyph', cls:'kg-hz', text: a.hz, label: a.py + ' · ' + mean(a) },
            opts: opts.map(function (o) {
              return { kind:'letter', text: o.n + ' ' + o.mark, say: a.hz };
            }),
            ans: right
          };
        });
      }},

    { key:'count', em:'🔢', c:'var(--kg-orange)',
      t:{ en:'How many? 几个', km:'ប៉ុន្មាន? 几个' },
      p:{ en:'Count the pictures, then tap the number.', km:'រាប់រូបភាព រួចចុចលេខ។' },
      make: function () {
        var pool = B.numbers.slice(0, 12);
        return shuffle(pool).slice(0, 10).map(function (n) {
          var em = pick(B.counters), dots = '';
          for (var k = 0; k < n.n; k++) { dots += em; }
          var opts = shuffle([n].concat(others(pool, 3, n, function (x) { return String(x.n); })));
          return {
            say: '几个？',
            ask: { kind:'count', dots: dots },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kg-hz', text:o.hz, sub:o.py, say:o.hz }; }),
            ans: opts.indexOf(n)
          };
        });
      }},

    { key:'colour', em:'🎨', c:'var(--kg-pink)',
      t:{ en:'Find the colour 找颜色', km:'រកពណ៌ 找颜色' },
      p:{ en:'Hear a colour, then tap it.', km:'ស្តាប់ឈ្មោះពណ៌ រួចចុចលើពណ៌នោះ។' },
      make: function () {
        var pool = B.colours, out = [];
        for (var i = 0; i < 10; i++) {
          var c = pick(pool);
          var opts = shuffle([c].concat(others(pool, 3, c, function (x) { return x.hz; })));
          out.push({
            say: '哪个是' + c.hz + '？',
            ask: { kind:'listen', label: c.hz + ' ' + c.py, km: gloss(c) },
            opts: opts.map(function (o) { return { kind:'swatch', hex:o.hex, say:o.hz }; }),
            ans: opts.indexOf(c)
          });
        }
        return out;
      }},

    { key:'shape', em:'⭐', c:'var(--kg-green)',
      t:{ en:'Find the shape 找形状', km:'រករាង 找形状' },
      p:{ en:'Hear a shape, then tap it.', km:'ស្តាប់ឈ្មោះរាង រួចចុចលើរាងនោះ។' },
      make: function () {
        var pool = B.shapes, out = [];
        for (var i = 0; i < 10; i++) {
          var s = pick(pool);
          var opts = shuffle([s].concat(others(pool, 3, s, function (x) { return x.hz; })));
          out.push({
            say: '哪个是' + s.hz + '？',
            ask: { kind:'listen', label: s.hz + ' ' + s.py, km: gloss(s) },
            opts: opts.map(function (o) { return { kind:'shape', d:o.d, say:o.hz }; }),
            ans: opts.indexOf(s)
          });
        }
        return out;
      }},

    { key:'read', em:'📖', c:'var(--kg-yellow)',
      t:{ en:'Read the word 看图选词', km:'អានពាក្យ 看图选词' },
      p:{ en:'Look at the picture, then tap the word that says it.', km:'មើលរូបភាព រួចចុចពាក្យដែលត្រូវ។' },
      make: function () {
        var pool = allWords();
        return shuffle(pool).slice(0, 10).map(function (w) {
          var opts = shuffle([w].concat(others(pool, 3, w, function (x) { return x.hz; })));
          return {
            say: w.hz,
            ask: { kind:'emoji', em:w.em, km: gloss(w) },
            opts: opts.map(function (o) { return { kind:'word', cls:'kg-hz', text:o.hz, sub:o.py, say:o.hz }; }),
            ans: opts.indexOf(w)
          };
        });
      }}
  ];

  /* ------------------------------------------------------------------ go */
  K.start({
    bestKey: 'aa-zkg-best',       /* its own namespace — English stars stay put */
    voice: 'zh',
    hello: '你好！',
    tabs: ['hz', 'num', 'col', 'words', 'tone', 'talk', 'play'].map(function (k) {
      var d = T.tabs[k];
      return { key: k, em: d.em, en: d.en, km: d.km, c: d.c };
    }),
    panel: function (key) {
      return key === 'hz'    ? panelHz()
           : key === 'num'   ? panelNum()
           : key === 'col'   ? panelCol()
           : key === 'words' ? panelWords()
           : key === 'tone'  ? panelTone()
           :                   panelTalk();
    },
    games: GAMES,
    praise: B.praise,
    nudge: B.nudge,

    /* the one thing only this page has: the vocabulary group buttons */
    click: function (near, target) {
      var n = near(target, '[data-wordgroup]');
      if (!n) { return false; }
      theme = n.getAttribute('data-wordgroup');
      n.parentNode.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', b === n ? 'true' : 'false');
      });
      var box = document.getElementById('kgWords');
      if (box) { box.innerHTML = wordCards(); }
      K.beep.tick();
      return true;
    }
  });
})();
