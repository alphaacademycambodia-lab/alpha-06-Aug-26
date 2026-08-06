/* Alpha Academy Cambodia — Khmer for Kindergarten
   ---------------------------------------------------------------------------
   Six teaching modules and seven games. Everything this page has in common
   with the other three kindergarten pages — the voice, the flip cards, the
   contents rail, the game round — lives in assets/js/kids-core.js; every
   letter it teaches lives in assets/js/khmer-kg-bank.js. This file is only
   the join: it draws the panels out of the bank and hands the games to the
   engine.

   TWO THINGS ABOUT THIS PAGE THAT ARE NOT TRUE OF THE OTHER THREE.

   · NOTHING MAY DEPEND ON SOUND. A Khmer speech voice exists on Chrome for
     Android with Google Text-to-Speech and on very little else, so on most
     phones this page is silent. Every one of the seven games is therefore
     answerable by looking — there is no "listen and find" here, because on
     most devices there would be nothing to listen to. Where the other pages
     ask a question with the voice, this one asks it with a picture or with
     the letter itself, and the voice is a bonus when it happens to exist.

   · A BARE VOWEL SIGN IS DRAWN ON A DOTTED CIRCLE. ា is a combining mark, not
     a letter: printed alone it either disappears or lands on whatever came
     before it. ◌ា is how a Khmer school book prints it and it is what sign()
     below produces. Every vowel that appears without a consonant goes through
     that function.

   The page copy is bilingual here as {en,km} pairs, the same way the
   probability bank carries both languages side by side, so the two can never
   drift apart. Only the surrounding chrome uses data-i18n keys.             */
(function () {
  'use strict';

  var B = window.KKG_BANK, K = window.KidsCore;
  if (!B || !K) { return; }

  var t = K.t, esc = K.esc, clr = K.clr, tip = K.tip;
  var shuffle = K.shuffle, pick = K.pick, others = K.others;

  /* ------------------------------------------------------------ the copy */
  var T = {
    tabs: {
      cons:  { en:'Letters',  km:'ព្យញ្ជនៈ',  em:'🔤', c:'var(--kg-red)' },
      vowel: { en:'Vowels',   km:'ស្រៈ',      em:'🔉', c:'var(--kg-purple)' },
      blend: { en:'Building', km:'ការផ្សំ',   em:'🧩', c:'var(--kg-green)' },
      words: { en:'Words',    km:'ពាក្យ',     em:'🧸', c:'var(--kg-orange)' },
      num:   { en:'Numbers',  km:'លេខ',       em:'🔢', c:'var(--kg-blue)' },
      talk:  { en:'Talk',     km:'និយាយ',     em:'💬', c:'var(--kg-pink)' },
      play:  { en:'Play!',    km:'លេងល្បែង!', em:'🎮', c:'var(--kg-yellow)' }
    },

    cons: {
      h: { en:'The 33 consonants', km:'ព្យញ្ជនៈទាំង ៣៣' },
      p: { en:'Tap a card to turn it over to its picture and its word. Under every card sits the way to say it and the number 1 or 2 — the letter’s series, which is the single most important thing on this page.',
           km:'ចុចលើកាតដើម្បីបង្វិលទៅរូបភាព និងពាក្យរបស់វា។ ខាងក្រោមកាតនីមួយៗមានវិធីអាន និងលេខ ១ ឬ ២ — ជាថ្នាក់អក្សរ ដែលជារឿងសំខាន់បំផុតក្នុងទំព័រនេះ។' },
      tip:{ en:'<b>For the grown-up:</b> children learn these by chanting them in the traditional order, a few at a time, and by writing them. Two or three letters a week is plenty. This page cannot teach the stroke order — a pencil and your hand over theirs does that.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> កូនរៀនអក្សរទាំងនេះដោយសូត្រតាមលំដាប់ប្រពៃណី ម្តងបន្តិចម្តងបន្តិច និងដោយការសរសេរ។ ពីរ ឬបីអក្សរក្នុងមួយសប្តាហ៍គឺគ្រប់គ្រាន់។ ទំព័រនេះមិនអាចបង្រៀនលំដាប់ខ្នូរបានទេ — ខ្មៅដៃ និងដៃអ្នកកាន់ដៃកូន ទើបធ្វើបាន។' },
      s1: { en:'series 1 — 15 letters', km:'ថ្នាក់ទី១ — ១៥ អក្សរ' },
      s2: { en:'series 2 — 18 letters', km:'ថ្នាក់ទី២ — ១៨ អក្សរ' },
      tap:{ en:'tap me', km:'ចុចខ្ញុំ' },
      flipTo:{ en:'Show every picture', km:'បង្ហាញរូបទាំងអស់' },
      flipBack:{ en:'Turn them all back', km:'បង្វិលត្រឡប់ទាំងអស់' },
      rare:{ en:'rare — mostly in old borrowed words', km:'កម្រប្រើ — ភាគច្រើនក្នុងពាក្យបាលី-សំស្ក្រឹត' }
    },

    vow: {
      h: { en:'The 23 vowel signs', km:'ស្រៈនិស្ស័យទាំង ២៣' },
      p: { en:'A vowel sign is not a letter and never stands on its own — it is drawn here on a dotted circle to show where the consonant goes. Each card shows the sign on ក and on គ, because the same sign says two different sounds depending on which series the consonant belongs to.',
           km:'ស្រៈនិស្ស័យមិនមែនជាអក្សរទេ ហើយមិនអាចឈរតែឯងបានឡើយ — នៅទីនេះវាត្រូវបានគូរលើរង្វង់ចុចៗ ដើម្បីបង្ហាញកន្លែងដែលព្យញ្ជនៈត្រូវដាក់។ កាតនីមួយៗបង្ហាញស្រៈនៅលើ ក និងលើ គ ព្រោះស្រៈតែមួយអានពីរបែបខុសគ្នា អាស្រ័យលើថ្នាក់របស់ព្យញ្ជនៈ។' },
      tip:{ en:'<b>This is the whole difficulty of reading Khmer.</b> ក is series 1 and គ is series 2, so កា is “kaa” but គា is “kie” — same sign, different sound. A child who learns one sound per sign will misread half of everything they meet, so teach the pair from the very first day.',
            km:'<b>នេះហើយជាការលំបាកទាំងស្រុងនៃការអានភាសាខ្មែរ។</b> ក ជាថ្នាក់ទី១ ហើយ គ ជាថ្នាក់ទី២ ដូច្នេះ កា អានថា “kaa” តែ គា អានថា “kie” — ស្រៈដូចគ្នា តែសំឡេងខុសគ្នា។ កូនដែលរៀនតែមួយសំឡេងក្នុងមួយស្រៈ នឹងអានខុសពាក់កណ្តាលនៃអ្វីៗដែលគេជួប ដូច្នេះត្រូវបង្រៀនជាគូតាំងពីថ្ងៃដំបូង។' },
      ih: { en:'The independent vowels', km:'ស្រៈពេញតួ' },
      ip: { en:'These do stand on their own, with no consonant in front. Four of them carry almost all the work; the rest are listed so a child who meets one is not surprised.',
            km:'ស្រៈទាំងនេះឈរដោយខ្លួនឯងបាន ដោយគ្មានព្យញ្ជនៈនៅពីមុខ។ បួនក្នុងចំណោមនេះប្រើច្រើនជាងគេ; ឯផ្សេងទៀតរាយបញ្ជីទុក ដើម្បីកុំឲ្យកូនភ្ញាក់ផ្អើលពេលជួប។' },
      on1:{ en:'on ក (series 1)', km:'លើ ក (ថ្នាក់១)' },
      on2:{ en:'on គ (series 2)', km:'លើ គ (ថ្នាក់២)' }
    },

    bld: {
      h: { en:'A consonant plus a vowel', km:'ព្យញ្ជនៈបូកនឹងស្រៈ' },
      p: { en:'This is what reading is: put the two together and say them as one. Tap a row to hear it and see what it means.',
           km:'នេះហើយជាការអាន៖ ដាក់ទាំងពីរបញ្ចូលគ្នា រួចអានជាមួយ។ ចុចលើជួរដើម្បីស្តាប់ និងឃើញអត្ថន័យ។' },
      gh: { en:'Try every pair', km:'សាកល្បងគ្រប់គូ' },
      gp: { en:'Six consonants across six vowels. Read down a column and the vowel stays the same; read across a row and the consonant does. Not all of these are words — they are syllables, and being able to say a syllable that means nothing is exactly the skill.',
            km:'ព្យញ្ជនៈប្រាំមួយ ជាមួយស្រៈប្រាំមួយ។ អានចុះតាមជួរឈរ ស្រៈនៅដដែល; អានទទឹងតាមជួរដេក ព្យញ្ជនៈនៅដដែល។ មិនមែនទាំងអស់ជាពាក្យទេ — វាជាព្យាង្គ ហើយការអានព្យាង្គដែលគ្មានន័យបាន គឺជាជំនាញដែលត្រូវការពិតប្រាកដ។' },
      fh: { en:'The letter with a foot', km:'ជើងអក្សរ' },
      fp: { en:'Khmer writes a second consonant underneath the first, and it is everywhere — a child who does not know they are looking at two letters cannot read ផ្ទះ at all. The top letter is blue and the foot is pink on every card.',
            km:'ភាសាខ្មែរសរសេរព្យញ្ជនៈទីពីរនៅពីក្រោមព្យញ្ជនៈទីមួយ ហើយវាមានគ្រប់ទីកន្លែង — កូនដែលមិនដឹងថាខ្លួនកំពុងមើលអក្សរពីរ មិនអាចអាន ផ្ទះ បានទេ។ អក្សរខាងលើពណ៌ខៀវ ហើយជើងពណ៌ផ្កាឈូក នៅលើគ្រប់កាត។' },
      wh: { en:'Words you can already read', km:'ពាក្យដែលអ្នកអានបានហើយ' },
      wp: { en:'Short, everyday and worth knowing by sight. Tap one to hear it.',
            km:'ខ្លី ប្រើប្រចាំថ្ងៃ និងគួរចាំមើលឃើញ។ ចុចមួយដើម្បីស្តាប់។' },
      tip:{ en:'<b>Two marks to know about:</b> ៉ and ៊ swap a letter from one series to the other, which is why ម (series 2) becomes ម៉ in ម៉ែ, “mother”. Do not teach the rule yet — just say the word, and point at the mark so the child sees it is doing something.',
            km:'<b>សញ្ញាពីរដែលគួរដឹង៖</b> ៉ និង ៊ ប្តូរអក្សរពីថ្នាក់មួយទៅថ្នាក់មួយទៀត ដែលជាមូលហេតុធ្វើឲ្យ ម (ថ្នាក់២) ក្លាយជា ម៉ ក្នុងពាក្យ ម៉ែ។ កុំបង្រៀនវិធានឥឡូវនេះ — គ្រាន់តែអានពាក្យ ហើយចង្អុលសញ្ញានោះ ដើម្បីឲ្យកូនឃើញថាវាមានតួនាទី។' }
    },

    wrd: {
      h: { en:'First words', km:'ពាក្យដំបូង' },
      p: { en:'Eight groups of everyday words. Tap any picture to hear the word, with the way to say it and the English underneath.',
           km:'ពាក្យប្រចាំថ្ងៃចែកជា ៨ ក្រុម។ ចុចលើរូបភាពណាមួយដើម្បីស្តាប់ពាក្យ ព្រមទាំងវិធីអាន និងភាសាអង់គ្លេសនៅខាងក្រោម។' },
      tip:{ en:'<b>For the grown-up:</b> a child speaking Khmer at home already knows these words — the new thing is seeing them written. Point at the word as you say it, every time, and the shape and the sound join up by themselves.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> កូនដែលនិយាយខ្មែរនៅផ្ទះ ស្គាល់ពាក្យទាំងនេះរួចហើយ — រឿងថ្មីគឺការឃើញវាសរសេរជាអក្សរ។ សូមចង្អុលពាក្យរាល់ពេលអាន នោះរូបរាង និងសំឡេងនឹងភ្ជាប់គ្នាដោយខ្លួនឯង។' }
    },

    num: {
      h: { en:'Khmer numerals ០ to ២០', km:'លេខខ្មែរ ០ ដល់ ២០' },
      p: { en:'The numerals a school book, a price tag and a bus number are printed in. Each card shows the Khmer numeral, the ordinary digit beside it, and the word.',
           km:'លេខដែលសៀវភៅសិក្សា ស្លាកតម្លៃ និងលេខឡានក្រុងបោះពុម្ព។ កាតនីមួយៗបង្ហាញលេខខ្មែរ លេខអារ៉ាប់នៅក្បែរវា និងពាក្យ។' },
      tip:{ en:'<b>Counting itself lives on the maths page.</b> Here the job is only reading the shape — ៤ is four. For counting things, adding and taking away, open <a href="math-kindergarten">Maths for Kindergarten</a>.',
            km:'<b>ការរាប់ពិតប្រាកដស្ថិតនៅទំព័រគណិតវិទ្យា។</b> នៅទីនេះការងារគឺគ្រាន់តែអានរូបរាង — ៤ គឺបួន។ សម្រាប់ការរាប់វត្ថុ ការបូក និងការដក សូមបើក <a href="math-kindergarten">គណិតវិទ្យាសម្រាប់មត្តេយ្យ</a>។' }
    },

    tlk: {
      h: { en:'Things we say', km:'ពាក្យដែលយើងនិយាយ' },
      p: { en:'Said long before they are read. Tap a line to hear it, then say it back together.',
           km:'និយាយបានយូរណាស់មុនអានបាន។ ចុចលើឃ្លាដើម្បីស្តាប់ រួចនិយាយតាមជាមួយគ្នា។' },
      tip:{ en:'<b>For the grown-up:</b> the polite words are the ones worth insisting on — ជំរាបសួរ with the hands together, and បាទ or ចាស depending on whether the child is a boy or a girl. Cambodian adults notice, and a child who has them is welcome everywhere.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ពាក្យសុភាពគឺជាពាក្យដែលគួរតម្រូវឲ្យប្រើ — ជំរាបសួរ ដោយលើកដៃសំពះ និង បាទ ឬ ចាស អាស្រ័យលើកូនជាប្រុស ឬស្រី។ មនុស្សធំខ្មែរកត់សម្គាល់រឿងនេះ ហើយកូនដែលចេះវា ត្រូវបានស្វាគមន៍គ្រប់ទីកន្លែង។' }
    },

    play: {
      p: { en:'Seven games, ten questions each. Every one is answered by looking, so they all work even on a phone with no Khmer voice. Nothing is ever marked wrong — a wrong tap just says “try again”, so every round finishes happily, and a star is given for every question answered right the first time.',
           km:'ល្បែង ៧ ប្រភេទ មួយៗមាន ១០ សំណួរ។ ល្បែងទាំងអស់ឆ្លើយបានដោយការមើល ដូច្នេះវាដំណើរការសូម្បីលើទូរស័ព្ទដែលគ្មានសំឡេងខ្មែរ។ គ្មានការកត់ថាខុសទេ — បើចុចខុស វានឹងប្រាប់ថា “ព្យាយាមម្ដងទៀត” ដូច្នេះគ្រប់ជុំបញ្ចប់ដោយរីករាយ ហើយផ្កាយមួយត្រូវបានផ្តល់ជូនរាល់សំណួរដែលឆ្លើយត្រូវលើកទីមួយ។' }
    },

    g: {
      letter: { t:{ en:'Which letter does it start with?', km:'ចាប់ផ្តើមដោយអក្សរអ្វី?' },
                p:{ en:'Look at the picture and its word, then tap the first letter.', km:'មើលរូបភាព និងពាក្យរបស់វា រួចចុចអក្សរដំបូង។' } },
      picture:{ t:{ en:'Find the picture', km:'រករូបភាព' },
                p:{ en:'A letter is shown — tap the picture whose word starts with it.', km:'អក្សរមួយត្រូវបានបង្ហាញ — ចុចរូបភាពដែលពាក្យរបស់វាចាប់ផ្តើមដោយអក្សរនោះ។' } },
      word:   { t:{ en:'Read the word', km:'អានពាក្យ' },
                p:{ en:'Look at the picture, then tap the word that says it.', km:'មើលរូបភាព រួចចុចពាក្យដែលត្រូវ។' } },
      vowel:  { t:{ en:'Find the vowel', km:'រកស្រៈ' },
                p:{ en:'Which vowel sign is in this syllable?', km:'ព្យាង្គនេះប្រើស្រៈណា?' } },
      numeral:{ t:{ en:'Khmer numerals', km:'លេខខ្មែរ' },
                p:{ en:'Count the pictures, then tap the Khmer numeral.', km:'រាប់រូបភាព រួចចុចលេខខ្មែរ។' } },
      colour: { t:{ en:'Read the colour', km:'អានពណ៌' },
                p:{ en:'Read the word, then tap the colour it names.', km:'អានពាក្យ រួចចុចពណ៌ដែលវាហៅ។' } },
      order:  { t:{ en:'What comes next?', km:'អក្សរអ្វីមកបន្ទាប់?' },
                p:{ en:'Which letter follows it in the alphabet?', km:'អក្សរណាមកបន្ទាប់ក្នុងអក្ខរក្រម?' } }
    }
  };

  var theme = B.themes[0].key;      /* which vocabulary group is open */

  /* ------------------------------------------------------------- helpers */

  /* A combining mark printed alone either vanishes or lands on whatever came
     before it, so a bare vowel always rides on a dotted circle — which is
     also exactly how a Khmer school book prints one. */
  function sign(v) { return '◌' + v; }

  function seriesColour(s) { return s === 1 ? 'var(--kk-s1)' : 'var(--kk-s2)'; }

  /* ==================================================================== 1
     ព្យញ្ជនៈ — the consonant deck                                          */
  function panelCons() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔤</span>' + t(T.cons.h) + '</h3>' +
            '<p class="say">' + t(T.cons.p) + '</p>' + tip(T.cons.tip) +
            '<div class="kk-legend">' +
              '<span style="--sc:var(--kk-s1)"><i>ក</i>' + esc(t(T.cons.s1)) + '</span>' +
              '<span style="--sc:var(--kk-s2)"><i>គ</i>' + esc(t(T.cons.s2)) + '</span>' +
            '</div>' +
            '<div class="kg-drill">' +
              '<button type="button" data-flipall="1">🖼️ ' + t(T.cons.flipTo) + '</button>' +
              '<button type="button" data-flipall="0">🔤 ' + t(T.cons.flipBack) + '</button>' +
            '</div>' +
            '<div class="kk-cons">';

    B.cons.forEach(function (a, i) {
      var sc = seriesColour(a.s);
      /* data-flip is a pipe-separated list of what to say: the letter, a
         beat, then its word — silent on a device with no Khmer voice, which
         is why the card shows everything it would have said. */
      var flip = a.w ? a.c + '|' + a.w : a.c;
      h += '<div class="kg-card' + (a.rare ? ' kk-rare' : '') + '" style="--c:' + clr(i) + ';--sc:' + sc + '">' +
             '<button class="kg-flip" type="button" data-flip="' + esc(flip) + '" aria-pressed="false" ' +
               'aria-label="' + esc(a.r + '. ' + t(T.cons.tap)) + '">' +
               '<span class="kg-flip-in">' +
                 '<span class="kg-face kg-front">' +
                   '<span class="pair kk-km">' + a.c + '</span>' +
                   '<span class="hint">👆 ' + t(T.cons.tap) + '</span>' +
                 '</span>' +
                 '<span class="kg-face kg-back">' +
                   '<span class="em" aria-hidden="true">' + a.em + '</span>' +
                   (a.w
                     ? '<span class="w kk-km">' + a.w + '</span><span class="km">' + esc(a.wr + ' · ' + a.en) + '</span>'
                     : '<span class="w">' + esc(t(T.cons.rare)) + '</span>') +
                 '</span>' +
               '</span>' +
             '</button>' +
             '<span class="kk-row">' +
               '<button class="spk" type="button" data-say="' + esc(a.c) + '" aria-label="' + esc(a.r) + '">🔊</button>' +
               '<span class="r">' + esc(a.r) + '</span>' +
               '<span class="s">' + a.s + '</span>' +
             '</span>' +
           '</div>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 2
     ស្រៈ — the vowels                                                       */
  function panelVowel() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔉</span>' + t(T.vow.h) + '</h3>' +
            '<p class="say">' + t(T.vow.p) + '</p>' + tip(T.vow.tip) + '<div class="kk-vows">';
    B.vowels.forEach(function (v, i) {
      h += '<button class="kk-vow" type="button" style="--c:' + clr(i) + '" data-say="' + esc(v.a + ' ' + v.b) + '">' +
             '<span class="sign kk-km">' + sign(v.v) + '</span>' +
             '<span class="one"><b>' + v.a + '</b>' + esc(v.r1) + '</span>' +
             '<span class="two"><b>' + v.b + '</b>' + esc(v.r2) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🅰️</span>' + t(T.vow.ih) + '</h3>' +
         '<p class="say">' + t(T.vow.ip) + '</p><div class="kk-ivows">';
    B.ivowels.forEach(function (v, i) {
      h += '<button class="kk-ivow' + (v.rare ? ' kk-rare' : '') + '" type="button" style="--c:' + clr(i) + '" ' +
             'data-say="' + esc(v.w || v.v) + '">' +
             '<span class="v">' + v.v + '</span>' +
             '<span class="r">' + esc(v.r) + '</span>' +
             (v.w
               ? '<span class="em" aria-hidden="true">' + v.em + '</span>' +
                 '<span class="w">' + v.w + '</span>' +
                 '<span class="en">' + esc(v.wr + ' · ' + v.en) + '</span>'
               : '<span class="en">' + esc(t(T.cons.rare)) + '</span>') +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 3
     ការផ្សំ — building syllables and words                                  */
  function panelBlend() {
    /* Six worked examples, each landing on a real word so the row is worth
       reading rather than a drill for its own sake — and each one adding up
       exactly. `f` is a final consonant where the word has one: a Khmer
       syllable is consonant, vowel and often a letter to close it, and a row
       that quietly skipped the closing letter would be teaching a lie. */
    var WORKED = [
      { c:'ត', v:'ា',           out:'តា',   wr:'taa',   en:'grandpa' },
      { c:'ដ', v:'ៃ',           out:'ដៃ',   wr:'dai',   en:'hand' },
      { c:'ន', v:'ំ',           out:'នំ',   wr:'num',   en:'cake' },
      { c:'ប', v:'ា', f:'យ',    out:'បាយ',  wr:'baay',  en:'rice' },
      { c:'ល', v:'េ', f:'ង',    out:'លេង',  wr:'leng',  en:'to play' },
      { c:'យ', v:'ា', f:'យ',    out:'យាយ',  wr:'yeay',  en:'grandma' }
    ];

    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🧩</span>' + t(T.bld.h) + '</h3>' +
            '<p class="say">' + t(T.bld.p) + '</p>' + tip(T.bld.tip) + '<div class="kk-build">';
    WORKED.forEach(function (x, i) {
      h += '<button class="kk-brow" type="button" style="--c:' + clr(i) + '" data-say="' + esc(x.out) + '">' +
             '<span class="p kk-km">' + x.c + '</span>' +
             '<span class="op" aria-hidden="true">+</span>' +
             '<span class="p v kk-km">' + sign(x.v) + '</span>' +
             (x.f ? '<span class="op" aria-hidden="true">+</span>' +
                    '<span class="p kk-km">' + x.f + '</span>' : '') +
             '<span class="op" aria-hidden="true">=</span>' +
             '<span class="out kk-km">' + x.out + '</span>' +
             '<span class="r">' + esc(x.wr) + '</span>' +
             '<span class="en">· ' + esc(x.en) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔡</span>' + t(T.bld.gh) + '</h3>' +
         '<p class="say">' + t(T.bld.gp) + '</p>' +
         '<div class="kk-gridwrap"><table class="kk-grid"><thead><tr><th></th>';
    B.gridV.forEach(function (v) { h += '<th class="kk-km">' + sign(v) + '</th>'; });
    h += '</tr></thead><tbody>';
    B.gridC.forEach(function (c) {
      h += '<tr><th class="c kk-km">' + c + '</th>';
      B.gridV.forEach(function (v) {
        h += '<td><button type="button" class="kk-km" data-say="' + esc(c + v) + '">' + c + v + '</button></td>';
      });
      h += '</tr>';
    });
    h += '</tbody></table></div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🦶</span>' + t(T.bld.fh) + '</h3>' +
         '<p class="say">' + t(T.bld.fp) + '</p><div class="kk-feet">';
    B.feet.forEach(function (f, i) {
      h += '<button class="kk-foot" type="button" style="--c:' + clr(i) + '" data-say="' + esc(f.w) + '">' +
             '<span class="em" aria-hidden="true">' + f.em + '</span>' +
             '<span class="w">' + f.w + '</span>' +
             '<span class="parts"><span class="t">' + f.top + '</span>' +
               '<em>+</em><span class="f">' + f.foot + '</span></span>' +
             '<span class="r">' + esc(f.wr) + '</span>' +
             '<span class="en">' + esc(f.en) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📖</span>' + t(T.bld.wh) + '</h3>' +
         '<p class="say">' + t(T.bld.wp) + '</p><div class="kg-words">';
    B.firstwords.forEach(function (w, i) {
      h += '<button class="kg-word" type="button" style="--c:' + clr(i) + '" data-say="' + esc(w.w) + '">' +
             '<span class="em" aria-hidden="true">' + w.em + '</span>' +
             '<span class="w kk-km">' + w.w + '</span>' +
             '<span class="r">' + esc(w.wr) + '</span>' +
             '<span class="km">' + esc(w.en) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 4
     ពាក្យ — vocabulary                                                      */
  function panelWords() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🧸</span>' + t(T.wrd.h) + '</h3>' +
            '<p class="say">' + t(T.wrd.p) + '</p>' + tip(T.wrd.tip) +
            '<div class="kg-themebar" role="group">';
    B.themes.forEach(function (g, i) {
      h += '<button type="button" data-wordgroup="' + g.key + '" style="--c:' + clr(i) + '" aria-pressed="' +
             (g.key === theme ? 'true' : 'false') + '">' +
             '<span class="em" aria-hidden="true">' + g.em + '</span>' + esc(t(g)) + '</button>';
    });
    return h + '</div><div class="kg-words" id="kgWords">' + wordCards() + '</div></section>';
  }

  function wordCards() {
    var g = null;
    B.themes.forEach(function (x) { if (x.key === theme) { g = x; } });
    if (!g) { g = B.themes[0]; }
    return g.words.map(function (w, i) {
      return '<button class="kg-word" type="button" style="--c:' + clr(i) + '" data-say="' + esc(w.w) + '">' +
               '<span class="em" aria-hidden="true">' + w.em + '</span>' +
               '<span class="w kk-km">' + w.w + '</span>' +
               '<span class="r">' + esc(w.wr) + '</span>' +
               '<span class="km">' + esc(w.en) + '</span>' +
             '</button>';
    }).join('');
  }

  /* ==================================================================== 5
     លេខ — the Khmer numerals                                                */
  function panelNum() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔢</span>' + t(T.num.h) + '</h3>' +
            '<p class="say">' + t(T.num.p) + '</p>' + tip(T.num.tip) + '<div class="kk-nums">';
    B.numbers.forEach(function (n, i) {
      h += '<button class="kk-num" type="button" style="--c:' + clr(i) + '" data-say="' + esc(n.w) + '">' +
             '<span class="kn">' + n.kn + '</span>' +
             '<span class="d">' + n.n + '</span>' +
             '<span class="w">' + n.w + '</span>' +
             '<span class="r">' + esc(n.wr) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 6
     និយាយ — talking                                                          */
  function panelTalk() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">💬</span>' + t(T.tlk.h) + '</h3>' +
            '<p class="say">' + t(T.tlk.p) + '</p>' + tip(T.tlk.tip) + '</section>';
    B.talk.forEach(function (g, i) {
      h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">' + g.em + '</span>' +
             esc(t(g)) + '</h3><div class="kg-lines">';
      g.lines.forEach(function (l) {
        var say = l.a ? l.s + ' … ' + l.a : l.s;
        h += '<button class="kg-line" type="button" style="--c:' + clr(i) + '" data-say="' + esc(say) + '">' +
               '<span class="em" aria-hidden="true">' + l.em + '</span>' +
               '<span class="txt"><span class="s">' + l.s + '</span>' +
                 (l.a ? '<span class="a">' + l.a + '</span>' : '') +
                 '<span class="r">' + esc(l.wr) + '</span>' +
                 '<span class="km">' + esc(l.en) + '</span></span>' +
               '<span class="spk" aria-hidden="true">🔊</span>' +
             '</button>';
      });
      h += '</div></section>';
    });
    return h;
  }

  /* ==================================================================== 7
     THE GAMES
     Every one is answerable by looking. That is not a stylistic choice: on a
     phone with no Khmer voice a listen-and-find round would be ten silent
     questions with no way to answer them.                                   */

  /* the letters that have a word and a picture behind them */
  function wordCons() {
    return B.cons.filter(function (a) { return a.w && !a.rare; });
  }

  /* every readable word on the page, pooled once and deduped */
  function allWords() {
    var out = [], seen = {};
    function add(w) {
      if (!w.w || seen[w.w]) { return; }
      seen[w.w] = 1; out.push(w);
    }
    B.firstwords.forEach(add);
    B.themes.forEach(function (g) { g.words.forEach(add); });
    B.feet.forEach(add);
    return out;
  }

  var GAMES = [
    { key:'letter', em:'🔤', c:'var(--kg-red)', t:T.g.letter.t, p:T.g.letter.p,
      make: function () {
        var pool = wordCons();
        return shuffle(pool).slice(0, 10).map(function (a) {
          var opts = shuffle([a].concat(others(pool, 3, a, function (x) { return x.c; })));
          return {
            say: a.w,
            ask: { kind:'emoji', em:a.em, label:a.w, km:a.wr + ' · ' + a.en },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kk-km', text:o.c, sub:o.r, say:o.c }; }),
            ans: opts.indexOf(a)
          };
        });
      }},

    { key:'picture', em:'🖼️', c:'var(--kg-blue)', t:T.g.picture.t, p:T.g.picture.p,
      make: function () {
        var pool = wordCons();
        return shuffle(pool).slice(0, 10).map(function (a) {
          var opts = shuffle([a].concat(others(pool, 3, a, function (x) { return x.em; })));
          return {
            say: a.c,
            ask: { kind:'glyph', cls:'kk-km', text:a.c, label:a.r },
            opts: opts.map(function (o) { return { kind:'emoji', em:o.em, say:o.w }; }),
            ans: opts.indexOf(a)
          };
        });
      }},

    { key:'word', em:'📖', c:'var(--kg-green)', t:T.g.word.t, p:T.g.word.p,
      make: function () {
        var pool = allWords();
        return shuffle(pool).slice(0, 10).map(function (w) {
          var opts = shuffle([w].concat(others(pool, 3, w, function (x) { return x.w; })));
          return {
            say: w.w,
            /* No romanisation under these four: this is the one round that is
               genuinely a reading test, and a Latin crib would answer it. */
            ask: { kind:'emoji', em:w.em, km:w.en },
            opts: opts.map(function (o) { return { kind:'word', cls:'kk-km', text:o.w, say:o.w }; }),
            ans: opts.indexOf(w)
          };
        });
      }},

    { key:'vowel', em:'🔉', c:'var(--kg-purple)', t:T.g.vowel.t, p:T.g.vowel.p,
      make: function () {
        var pool = B.vowels;
        return shuffle(pool).slice(0, 10).map(function (v) {
          var first = Math.random() < 0.5;
          var opts = shuffle([v].concat(others(pool, 3, v, function (x) { return x.v; })));
          return {
            say: first ? v.a : v.b,
            ask: { kind:'glyph', cls:'kk-km', text: first ? v.a : v.b,
                   label: first ? v.r1 : v.r2 },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kk-km', text:sign(o.v), say:o.v }; }),
            ans: opts.indexOf(v)
          };
        });
      }},

    { key:'numeral', em:'៤', c:'var(--kg-orange)', t:T.g.numeral.t, p:T.g.numeral.p,
      make: function () {
        var pool = B.numbers.slice(1, 13);         /* ១ … ១២ */
        return shuffle(pool).slice(0, 10).map(function (n) {
          var em = pick(B.counters), dots = '';
          for (var k = 0; k < n.n; k++) { dots += em; }
          var opts = shuffle([n].concat(others(pool, 3, n, function (x) { return String(x.n); })));
          return {
            say: n.w,
            ask: { kind:'count', dots: dots },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kk-km', text:o.kn, sub:String(o.n), say:o.w }; }),
            ans: opts.indexOf(n)
          };
        });
      }},

    { key:'colour', em:'🎨', c:'var(--kg-pink)', t:T.g.colour.t, p:T.g.colour.p,
      make: function () {
        var pool = B.colours, out = [];
        for (var i = 0; i < 10; i++) {
          var c = pick(pool);
          var opts = shuffle([c].concat(others(pool, 3, c, function (x) { return x.w; })));
          out.push({
            say: c.w,
            ask: { kind:'glyph', cls:'kk-km', text:c.w, label:c.wr },
            opts: opts.map(function (o) { return { kind:'swatch', hex:o.hex, say:o.w }; }),
            ans: opts.indexOf(c)
          });
        }
        return out;
      }},

    { key:'order', em:'🔜', c:'var(--kg-yellow)', t:T.g.order.t, p:T.g.order.p,
      make: function () {
        var all = B.cons, out = [];
        for (var i = 0; i < 10; i++) {
          var at = Math.floor(Math.random() * (all.length - 1));   /* never the last */
          var cue = all[at], right = all[at + 1];
          /* The cue itself is filtered out of the distractors: offering ក as
             an answer to "ក →" is a question about nothing. */
          var rest = all.filter(function (x) { return x.c !== cue.c; });
          var opts = shuffle([right].concat(others(rest, 3, right, function (x) { return x.c; })));
          out.push({
            say: all[at].c + ' … ' + right.c,
            ask: { kind:'glyph', cls:'kk-km', text: all[at].c + ' →', label: all[at].r },
            opts: opts.map(function (o) { return { kind:'letter', cls:'kk-km', text:o.c, sub:o.r, say:o.c }; }),
            ans: opts.indexOf(right)
          });
        }
        return out;
      }}
  ];

  /* ------------------------------------------------------------------ go */
  K.start({
    bestKey: 'aa-kkg-best',
    voice: 'km',
    hello: 'សួស្តី!',
    tabs: ['cons', 'vowel', 'blend', 'words', 'num', 'talk', 'play'].map(function (k) {
      var d = T.tabs[k];
      return { key: k, em: d.em, en: d.en, km: d.km, c: d.c };
    }),
    panel: function (key) {
      return key === 'cons'  ? panelCons()
           : key === 'vowel' ? panelVowel()
           : key === 'blend' ? panelBlend()
           : key === 'words' ? panelWords()
           : key === 'num'   ? panelNum()
           :                   panelTalk();
    },
    games: GAMES,
    playP: T.play.p,
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
