/* Alpha Academy Cambodia — English for Kindergarten
   ---------------------------------------------------------------------------
   The seven modules and the seven games. Everything they have in common with
   the Chinese kindergarten page — the voice, the flip mechanics, the contents
   rail, the game round — lives in assets/js/kids-core.js; everything English
   lives in assets/js/kindergarten-bank.js. This file is only the join: it
   draws the panels out of the bank and hands the games to the engine.

   The page copy is bilingual here as {en,km} pairs, the same way the
   probability bank carries both languages side by side, so the two can never
   drift apart. Only the surrounding chrome uses data-i18n keys.             */
(function () {
  'use strict';

  var B = window.KG_BANK, K = window.KidsCore;
  if (!B || !K) { return; }

  var t = K.t, gloss = K.gloss, esc = K.esc, clr = K.clr, tip = K.tip;
  var shuffle = K.shuffle, pick = K.pick, others = K.others;

  /* ------------------------------------------------------------ the copy */
  var T = {
    tabs: {
      abc:   { en:'ABC',        km:'អក្សរ',       em:'🔤', c:'var(--kg-red)' },
      num:   { en:'123',        km:'លេខ',         em:'🔢', c:'var(--kg-orange)' },
      col:   { en:'Colours',    km:'ពណ៌ & រាង',   em:'🎨', c:'var(--kg-purple)' },
      words: { en:'Words',      km:'ពាក្យ',       em:'🧸', c:'var(--kg-green)' },
      phon:  { en:'Sounds',     km:'សំឡេង',       em:'👂', c:'var(--kg-blue)' },
      talk:  { en:'Talk',       km:'និយាយ',       em:'💬', c:'var(--kg-pink)' },
      play:  { en:'Play!',      km:'លេងល្បែង!',   em:'🎮', c:'var(--kg-yellow)' }
    },
    abc: {
      h: { en:'The alphabet A to Z', km:'អក្សរ A ដល់ Z' },
      p: { en:'Tap a letter to hear its name, and tap Sound to hear the sound it makes in a word. The name and the sound are not the same — B is called “bee” but it says /b/, and it is the sound that lets a child read.',
           km:'ចុចលើអក្សរដើម្បីស្តាប់ឈ្មោះរបស់វា ហើយចុច “សំឡេង” ដើម្បីស្តាប់សំឡេងរបស់វានៅក្នុងពាក្យ។ ឈ្មោះ និងសំឡេងមិនដូចគ្នាទេ — B ហៅថា “bee” តែវាបញ្ចេញសំឡេង /b/ ហើយសំឡេងនេះហើយដែលធ្វើឲ្យកូនអានបាន។' },
      tip:{ en:'<b>For the grown-up:</b> two or three letters a week is plenty. Say the sound, not the name, when you point at a word.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ពីរ ឬបីអក្សរក្នុងមួយសប្តាហ៍គឺគ្រប់គ្រាន់ហើយ។ ពេលចង្អុលពាក្យ សូមអានជា “សំឡេង” មិនមែនជា “ឈ្មោះ” អក្សរទេ។' },
      name:  { en:'Name',  km:'ឈ្មោះ' },
      sound: { en:'Sound', km:'សំឡេង' },
      endNote:{ en:'X is at the end of the word', km:'X នៅចុងពាក្យ' },
      tap:   { en:'tap me', km:'ចុចខ្ញុំ' },
      flipTo:{ en:'Show every picture', km:'បង្ហាញរូបទាំងអស់' },
      flipBack:{ en:'Turn them all back', km:'បង្វិលត្រឡប់ទាំងអស់' },
      cardHint:{ en:'Tap a card to turn it over and hear it.',
                 km:'ចុចលើកាតដើម្បីបង្វិលវា ហើយស្តាប់។' }
    },
    num: {
      h: { en:'Numbers 1 to 20', km:'លេខ ១ ដល់ ២០' },
      p: { en:'Tap a card to hear the number, then count the pictures out loud together — one picture, one number, and the last number you say is how many there are.',
           km:'ចុចលើកាតដើម្បីស្តាប់លេខ រួចរាប់រូបភាពជាមួយគ្នាឮៗ — មួយរូបភាព មួយលេខ ហើយលេខចុងក្រោយដែលអ្នកនិយាយគឺជាចំនួនសរុប។' },
      tip:{ en:'<b>For the grown-up:</b> chanting “one two three…” is not yet counting. Ask “how many?” and let the child touch each picture as they say the number.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ការសូត្រ “one two three…” មិនទាន់ជាការរាប់ទេ។ សូមសួរថា “ប៉ុន្មាន?” ហើយឲ្យកូនប៉ះរូបភាពម្ដងមួយៗពេលរាប់។' }
    },
    col: {
      h:  { en:'Colours', km:'ពណ៌' },
      p:  { en:'Tap a colour to hear its name. Then go and find something that colour in the room.',
            km:'ចុចលើពណ៌ដើម្បីស្តាប់ឈ្មោះរបស់វា។ បន្ទាប់មក ទៅរកវត្ថុដែលមានពណ៌នោះនៅក្នុងបន្ទប់។' },
      h2: { en:'Shapes', km:'រាងទ្រង់ទ្រាយ' },
      p2: { en:'Tap a shape to hear its name — then look for that shape on a door, a plate or a window.',
            km:'ចុចលើរាងដើម្បីស្តាប់ឈ្មោះ — រួចរកមើលរាងនោះនៅលើទ្វារ ចាន ឬបង្អួច។' }
    },
    words: {
      h: { en:'My first words', km:'ពាក្យដំបូងរបស់ខ្ញុំ' },
      p: { en:'Eight groups of everyday words. Tap any picture to hear the word.',
           km:'ពាក្យប្រចាំថ្ងៃចែកជា ៨ ក្រុម។ ចុចលើរូបភាពណាមួយដើម្បីស្តាប់ពាក្យ។' },
      tip:{ en:'<b>For the grown-up:</b> a child needs to hear a word many times before saying it, and to say it many times before reading it. Repeat the group for a week before moving on.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> កូនត្រូវស្តាប់ពាក្យច្រើនដងមុននឹងនិយាយបាន ហើយនិយាយច្រើនដងមុននឹងអានបាន។ សូមធ្វើម្ដងទៀតមួយក្រុមរយៈពេលមួយសប្តាហ៍ មុននឹងបន្ត។' }
    },
    phon: {
      h: { en:'Sounding words out', km:'ការផ្សំសំឡេងជាពាក្យ' },
      p: { en:'Every word here is three letters and completely regular, so a child who knows the letter sounds can read it without being told. Tap the letters one by one, then tap the whole word.',
           km:'ពាក្យទាំងអស់នេះមានបីអក្សរ និងអានតាមច្បាប់ធម្មតា ដូច្នេះកូនដែលចេះសំឡេងអក្សរ អាចអានវាដោយខ្លួនឯង។ ចុចអក្សរម្ដងមួយៗ រួចចុចពាក្យទាំងមូល។' },
      tip:{ en:'<b>For the grown-up:</b> stretch the sounds and push them together — “sss-aaa-t… sat”. Do not spell out the letter names; that turns reading into memorising.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមអូសសំឡេងឲ្យវែង រួចផ្សំវាចូលគ្នា — “sss-aaa-t… sat”។ កុំអានជាឈ្មោះអក្សរ ព្រោះនោះក្លាយជាការទន្ទេញ មិនមែនការអានទេ។' },
      sh: { en:'Words to just know', km:'ពាក្យត្រូវចាំមើលឃើញ' },
      sp: { en:'These break the rules, so they cannot be sounded out — they are simply recognised. Tap to hear each one.',
            km:'ពាក្យទាំងនេះមិនតាមច្បាប់ទេ ដូច្នេះមិនអាចផ្សំសំឡេងបានទេ — គ្រាន់តែចាំមើលឃើញ។ ចុចដើម្បីស្តាប់។' }
    },
    talk: {
      h: { en:'Things we say', km:'ពាក្យដែលយើងនិយាយ' },
      p: { en:'Speaking comes long before writing. Tap a line to hear it, then say it back together.',
           km:'ការនិយាយមកមុនការសរសេរឆ្ងាយណាស់។ ចុចលើឃ្លាដើម្បីស្តាប់ រួចនិយាយតាមជាមួយគ្នា។' },
      tip:{ en:'<b>For the grown-up:</b> use these for real, not as a lesson — greet the child in English every morning and the phrase sticks in a week.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមប្រើវាពិតៗ មិនមែនជាមេរៀនទេ — ស្វាគមន៍កូនជាភាសាអង់គ្លេសរាល់ព្រឹក នោះឃ្លានឹងចាំបានក្នុងមួយសប្តាហ៍។' }
    }
  };

  var theme = B.themes[0].key;      /* which vocabulary group is open */

  /* --------------------------------------------------------------- A B C
     A flashcard, not a poster. The front is the letter alone; tapping turns
     it over to the picture and says "A … Apple". Showing both at once —
     which the first version of this panel did — lets a child read the answer
     off the card instead of recalling it, which is the whole point of a
     flashcard. The phonics badge and the two speakers sit under the card,
     outside the flip, so the letter's sound never needs a turn to reach. */
  function panelABC() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔤</span>' + t(T.abc.h) + '</h3>' +
            '<p class="say">' + t(T.abc.p) + ' ' + t(T.abc.cardHint) + '</p>' + tip(T.abc.tip) +
            '<div class="kg-drill">' +
              '<button type="button" data-flipall="1">🖼️ ' + t(T.abc.flipTo) + '</button>' +
              '<button type="button" data-flipall="0">🔤 ' + t(T.abc.flipBack) + '</button>' +
            '</div>' +
            '<div class="kg-abc">';
    B.abc.forEach(function (a, i) {
      h += '<div class="kg-card" style="--c:' + clr(i) + '">' +
             '<button class="kg-flip" type="button" data-flip="' + esc(a.L + '|' + a.w) + '" aria-pressed="false" ' +
               'aria-label="' + esc(a.L + '. ' + t(T.abc.cardHint)) + '">' +
               '<span class="kg-flip-in">' +
                 '<span class="kg-face kg-front">' +
                   '<span class="pair">' + a.L + '<small>' + a.l + '</small></span>' +
                   '<span class="hint">👆 ' + t(T.abc.tap) + '</span>' +
                 '</span>' +
                 '<span class="kg-face kg-back">' +
                   '<span class="em" aria-hidden="true">' + a.em + '</span>' +
                   '<span class="w">' + a.L + ' = ' + esc(a.w) + '</span>' +
                   '<span class="km">' + esc(gloss(a)) + '</span>' +
                 '</span>' +
               '</span>' +
             '</button>' +
             '<span class="kg-duo">' +
               '<button type="button" data-say="' + esc(a.L) + '">' + t(T.abc.name) + '</button>' +
               '<button type="button" data-say="' + esc(a.say) + '" data-slow="1">' + t(T.abc.sound) + '</button>' +
               '<span class="ph' + (a.endSound ? ' end' : '') + '"' +
                 (a.endSound ? ' title="' + esc(t(T.abc.endNote)) + '"' : '') + '>' + a.ph + '</span>' +
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
      h += '<button class="kg-num" type="button" style="--c:' + clr(i) + '" data-say="' + esc(n.w) + '">' +
             '<span class="d">' + n.n + '</span>' +
             '<span class="dots" aria-hidden="true">' + dots + '</span>' +
             '<span class="w">' + esc(n.w) + '</span>' +
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
      h += '<button class="kg-col" type="button" data-say="' + esc(c.w) + '">' +
             '<span class="chip" style="background:' + c.hex + ';color:' + c.on + '" aria-hidden="true">Aa</span>' +
             '<span class="cap"><span class="w">' + esc(c.w) + '</span>' +
             '<span class="km">' + esc(gloss(c)) + '</span></span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">⭐</span>' + t(T.col.h2) + '</h3>' +
         '<p class="say">' + t(T.col.p2) + '</p><div class="kg-shapes">';
    B.shapes.forEach(function (s, i) {
      h += '<button class="kg-shape" type="button" style="--c:' + clr(i) + '" data-say="' + esc(s.w) + '">' +
             '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="' + s.d + '"/></svg>' +
             '<span class="w">' + esc(s.w) + '</span>' +
             '<span class="km">' + esc(gloss(s)) + '</span>' +
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
             '<span class="em" aria-hidden="true">' + g.em + '</span>' + esc(t(g)) + '</button>';
    });
    h += '</div><div class="kg-words" id="kgWords">' + wordCards() + '</div></section>';
    return h;
  }

  function wordCards() {
    var g = null;
    B.themes.forEach(function (x) { if (x.key === theme) { g = x; } });
    if (!g) { g = B.themes[0]; }
    return g.words.map(function (w, i) {
      return '<button class="kg-word" type="button" style="--c:' + clr(i) + '" data-say="' + esc(w.w) + '">' +
               '<span class="em" aria-hidden="true">' + w.em + '</span>' +
               '<span class="w">' + esc(w.w) + '</span>' +
               '<span class="km">' + esc(gloss(w)) + '</span>' +
             '</button>';
    }).join('');
  }

  /* ------------------------------------------------------------ phonics */
  function soundOf(letter) {
    var found = '';
    B.abc.forEach(function (a) { if (a.l === letter) { found = a.say; } });
    return found || letter;
  }

  function panelPhon() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">👂</span>' + t(T.phon.h) + '</h3>' +
            '<p class="say">' + t(T.phon.p) + '</p>' + tip(T.phon.tip) +
            '<div class="kg-fams">';
    B.families.forEach(function (f, i) {
      h += '<div class="kg-fam" style="--c:' + clr(i) + '"><span class="end">' + esc(f.end) + '</span><div class="rows">';
      f.words.forEach(function (w) {
        var letters = w.w.split('').map(function (ch, k) {
          return '<button class="kg-snd" type="button" data-say="' + esc(soundOf(ch)) +
                 '" data-slow="1" aria-label="' + esc(ch) + '">' + esc(ch) + '</button>' +
                 (k < w.w.length - 1 ? '<span class="arrow" aria-hidden="true">·</span>' : '');
        }).join('');
        h += '<div class="kg-blend" data-word="' + esc(w.w) + '">' +
               '<span class="em" aria-hidden="true">' + w.em + '</span>' + letters +
               '<span class="arrow" aria-hidden="true">→</span>' +
               '<button class="kg-whole" type="button" data-blend="' + esc(w.w) + '">' + esc(w.w) + '</button>' +
               '<span class="km">' + esc(gloss(w)) + '</span>' +
             '</div>';
      });
      h += '</div></div>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">👀</span>' + t(T.phon.sh) + '</h3>' +
         '<p class="say">' + t(T.phon.sp) + '</p><div class="kg-sight">';
    B.sight.forEach(function (s) {
      h += '<button type="button" data-say="' + esc(s.w) + '">' + esc(s.w) +
           '<small>' + esc(gloss(s)) + '</small></button>';
    });
    return h + '</div></section>';
  }

  /* --------------------------------------------------------------- talk */
  function panelTalk() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">💬</span>' + t(T.talk.h) + '</h3>' +
            '<p class="say">' + t(T.talk.p) + '</p>' + tip(T.talk.tip) + '</section>';
    B.talk.forEach(function (g, i) {
      h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">' + g.em + '</span>' +
             esc(t(g)) + '</h3><div class="kg-lines">';
      g.lines.forEach(function (l) {
        var say = l.a ? l.s + ' … ' + l.a : l.s;
        h += '<button class="kg-line" type="button" style="--c:' + clr(i) + '" data-say="' + esc(say) + '">' +
               '<span class="em" aria-hidden="true">' + l.em + '</span>' +
               '<span class="txt"><span class="s">' + esc(l.s) + '</span>' +
                 (l.a ? '<span class="a">' + esc(l.a) + '</span>' : '') +
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
     Each generator returns ten questions in one shape, so the engine never
     needs to know which game it is running:

       { say   what the voice asks
         ask   how the question is drawn — the picture, letter or swatch
         opts  four answers, each { kind, … }
         ans   index of the right one }                                    */

  /* every picture word on the page, pooled once */
  function allWords() {
    var out = [], seen = {};
    B.themes.forEach(function (g) { g.words.forEach(function (w) { out.push(w); }); });
    return out.filter(function (w) {
      if (seen[w.w]) { return false; }
      seen[w.w] = 1; return true;
    });
  }

  var GAMES = [
    { key:'listen', em:'👂', c:'var(--kg-blue)',
      t:{ en:'Listen and find', km:'ស្តាប់ រួចរក' },
      p:{ en:'Hear a word, then tap the right picture.', km:'ស្តាប់ពាក្យ រួចចុចរូបភាពដែលត្រូវ។' },
      make: function () {
        var pool = allWords();
        return shuffle(pool).slice(0, 10).map(function (w) {
          var opts = shuffle([w].concat(others(pool, 3, w, function (x) { return x.em; })));
          return {
            say: w.w,
            ask: { kind:'listen', label: w.w, km: gloss(w) },
            opts: opts.map(function (o) { return { kind:'emoji', em:o.em, say:o.w }; }),
            ans: opts.indexOf(w)
          };
        });
      }},

    { key:'first', em:'🅰️', c:'var(--kg-red)',
      t:{ en:'First letter', km:'អក្សរដំបូង' },
      p:{ en:'Look at the picture — which letter does it start with?', km:'មើលរូបភាព — វាចាប់ផ្តើមដោយអក្សរណា?' },
      make: function () {
        var pool = B.abc.filter(function (a) { return !a.endSound; });
        return shuffle(pool).slice(0, 10).map(function (a) {
          var opts = shuffle([a].concat(others(pool, 3, a, function (x) { return x.L; })));
          return {
            say: 'What does ' + a.w + ' start with?',
            ask: { kind:'emoji', em:a.em, label:a.w, km: gloss(a) },
            opts: opts.map(function (o) { return { kind:'letter', text:o.L + o.l, say:o.L }; }),
            ans: opts.indexOf(a)
          };
        });
      }},

    { key:'sound', em:'🔊', c:'var(--kg-purple)',
      t:{ en:'Which letter says…?', km:'អក្សរណាបញ្ចេញសំឡេងនេះ?' },
      p:{ en:'Hear a sound, then tap the letter that makes it.', km:'ស្តាប់សំឡេង រួចចុចអក្សរដែលបញ្ចេញសំឡេងនោះ។' },
      make: function () {
        var pool = B.abc;
        return shuffle(pool).slice(0, 10).map(function (a) {
          /* Deduped on the SOUND, not the letter. C and K both say /k/, so
             offering both would give the question two right answers and mark
             one of them wrong — which is exactly the kind of unfairness a
             five-year-old remembers. */
          var opts = shuffle([a].concat(others(pool, 3, a, function (x) { return x.say; })));
          return {
            say: a.say, slow: true,
            ask: { kind:'listen', label: a.ph },
            opts: opts.map(function (o) { return { kind:'letter', text:o.L + o.l, say:o.say, slow:true }; }),
            ans: opts.indexOf(a)
          };
        });
      }},

    { key:'count', em:'🔢', c:'var(--kg-orange)',
      t:{ en:'How many?', km:'ប៉ុន្មាន?' },
      p:{ en:'Count the pictures, then tap the number.', km:'រាប់រូបភាព រួចចុចលេខ។' },
      make: function () {
        var pool = B.numbers.slice(0, 12);
        return shuffle(pool).slice(0, 10).map(function (n) {
          var em = pick(B.counters), dots = '';
          for (var k = 0; k < n.n; k++) { dots += em; }
          var opts = shuffle([n].concat(others(pool, 3, n, function (x) { return String(x.n); })));
          return {
            say: 'How many?',
            ask: { kind:'count', dots: dots },
            opts: opts.map(function (o) { return { kind:'letter', text:String(o.n), say:o.w }; }),
            ans: opts.indexOf(n)
          };
        });
      }},

    { key:'colour', em:'🎨', c:'var(--kg-pink)',
      t:{ en:'Find the colour', km:'រកពណ៌' },
      p:{ en:'Hear a colour, then tap it.', km:'ស្តាប់ឈ្មោះពណ៌ រួចចុចលើពណ៌នោះ។' },
      make: function () {
        var pool = B.colours, out = [];
        for (var i = 0; i < 10; i++) {
          var c = pick(pool);
          var opts = shuffle([c].concat(others(pool, 3, c, function (x) { return x.w; })));
          out.push({
            say: 'Touch the ' + c.w + ' one.',
            ask: { kind:'listen', label: c.w, km: gloss(c) },
            opts: opts.map(function (o) { return { kind:'swatch', hex:o.hex, say:o.w }; }),
            ans: opts.indexOf(c)
          });
        }
        return out;
      }},

    { key:'shape', em:'⭐', c:'var(--kg-green)',
      t:{ en:'Find the shape', km:'រករាង' },
      p:{ en:'Hear a shape, then tap it.', km:'ស្តាប់ឈ្មោះរាង រួចចុចលើរាងនោះ។' },
      make: function () {
        var pool = B.shapes, out = [];
        for (var i = 0; i < 10; i++) {
          var s = pick(pool);
          var opts = shuffle([s].concat(others(pool, 3, s, function (x) { return x.w; })));
          out.push({
            say: 'Where is the ' + s.w + '?',
            ask: { kind:'listen', label: s.w, km: gloss(s) },
            opts: opts.map(function (o) { return { kind:'shape', d:o.d, say:o.w }; }),
            ans: opts.indexOf(s)
          });
        }
        return out;
      }},

    { key:'read', em:'📖', c:'var(--kg-yellow)',
      t:{ en:'Read the word', km:'អានពាក្យ' },
      p:{ en:'Look at the picture, then tap the word that says it.', km:'មើលរូបភាព រួចចុចពាក្យដែលត្រូវ។' },
      make: function () {
        /* the short, readable words only — this is the reading game */
        var pool = allWords().filter(function (w) { return w.w.length <= 6; });
        B.families.forEach(function (f) { f.words.forEach(function (w) { pool.push(w); }); });
        var seen = {};
        pool = pool.filter(function (w) { if (seen[w.w]) { return false; } seen[w.w] = 1; return true; });
        return shuffle(pool).slice(0, 10).map(function (w) {
          var opts = shuffle([w].concat(others(pool, 3, w, function (x) { return x.w; })));
          return {
            say: 'Which word says ' + w.w + '?',
            ask: { kind:'emoji', em:w.em, km: gloss(w) },
            opts: opts.map(function (o) { return { kind:'word', text:o.w, say:o.w }; }),
            ans: opts.indexOf(w)
          };
        });
      }}
  ];

  /* ------------------------------------------------------------------ go
     The click hook below needs the engine's voice, and the hook only ever
     runs after a tap — long after start() has returned — so capturing the
     engine into this variable is enough. */
  var Engine = K.start({
    bestKey: 'aa-kg-best',
    voice: 'en',
    hello: 'Hello!',
    tabs: ['abc', 'num', 'col', 'words', 'phon', 'talk', 'play'].map(function (k) {
      var d = T.tabs[k];
      return { key: k, em: d.em, en: d.en, km: d.km, c: d.c };
    }),
    panel: function (key) {
      return key === 'abc'   ? panelABC()
           : key === 'num'   ? panelNum()
           : key === 'col'   ? panelCol()
           : key === 'words' ? panelWords()
           : key === 'phon'  ? panelPhon()
           :                   panelTalk();
    },
    games: GAMES,
    praise: B.praise,
    nudge: B.nudge,

    /* the two things only this page has: the vocabulary group buttons and
       the blend-it-together row in the phonics module */
    click: function (near, target) {
      var n;

      if ((n = near(target, '[data-wordgroup]'))) {
        theme = n.getAttribute('data-wordgroup');
        n.parentNode.querySelectorAll('button').forEach(function (b) {
          b.setAttribute('aria-pressed', b === n ? 'true' : 'false');
        });
        var box = document.getElementById('kgWords');
        if (box) { box.innerHTML = wordCards(); }
        K.beep.tick();
        return true;
      }

      if ((n = near(target, '[data-blend]'))) {
        var word = n.getAttribute('data-blend');
        var row = n.closest('.kg-blend');
        var keys = row ? row.querySelectorAll('.kg-snd') : [];
        var seq = [];
        word.split('').forEach(function (ch, k) {
          seq.push({ text: soundOf(ch), rate: 0.65, gap: 120, before: function () {
            keys.forEach(function (x, j) { x.classList.toggle('pop', j === k); });
          }});
        });
        seq.push({ text: word, rate: 0.8, gap: 0, before: function () {
          keys.forEach(function (x) { x.classList.remove('pop'); });
        }});
        K.beep.unlock();
        Engine.speak.series(seq, { onend: function () {
          keys.forEach(function (x) { x.classList.remove('pop'); });
        }});
        return true;
      }

      return false;
    }
  });
})();
