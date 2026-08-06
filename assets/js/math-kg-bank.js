/* Alpha Academy Cambodia — Maths for Kindergarten, content bank
   ---------------------------------------------------------------------------
   Everything the page teaches lives here as data. The renderer in
   assets/js/math-kindergarten.js never contains a fact of the course, so
   adding content is an edit to this file alone. Same split, same shapes and
   the same rules as assets/js/kindergarten-bank.js — read that file first if
   this one is new to you.

   THE ONE THING THAT IS DIFFERENT HERE. English and Chinese are subjects a
   child learns *in* a language. Maths is not: four is four whether the child
   says "four", "buon" or reads ៤. So every number, shape and word below
   carries three faces at once —

       { n:4, d:'4', kn:'៤', w:'four', km:'បួន' }

   `d`  the Hindu-Arabic digit, which is what an exam paper prints.
   `kn` the Khmer numeral, which is what a market stall and a school book
        print, and which no other page on this site teaches.
   `w`  the English word — this is also what the voice says, because a Khmer
        speech voice exists on almost no device while an English one is on
        nearly all of them.
   `km` the Khmer word, printed under everything so a parent can read along.

   A child who can only match ៤ to four dots has still learnt the maths. The
   words are the bonus, not the lesson.                                      */
(function (global) {
  'use strict';

  /* ==================================================================== 1
     NUMBERS 0 TO 20
     Zero is included and comes first. It is the number kindergarten skips
     and the one that later trips a child up in subtraction — "take three
     from three" has to have an answer with a name.                         */
  var NUMBERS = [
    { n:0,  kn:'០',  w:'zero',      km:'សូន្យ' },
    { n:1,  kn:'១',  w:'one',       km:'មួយ' },
    { n:2,  kn:'២',  w:'two',       km:'ពីរ' },
    { n:3,  kn:'៣',  w:'three',     km:'បី' },
    { n:4,  kn:'៤',  w:'four',      km:'បួន' },
    { n:5,  kn:'៥',  w:'five',      km:'ប្រាំ' },
    { n:6,  kn:'៦',  w:'six',       km:'ប្រាំមួយ' },
    { n:7,  kn:'៧',  w:'seven',     km:'ប្រាំពីរ' },
    { n:8,  kn:'៨',  w:'eight',     km:'ប្រាំបី' },
    { n:9,  kn:'៩',  w:'nine',      km:'ប្រាំបួន' },
    { n:10, kn:'១០', w:'ten',       km:'ដប់' },
    { n:11, kn:'១១', w:'eleven',    km:'ដប់មួយ' },
    { n:12, kn:'១២', w:'twelve',    km:'ដប់ពីរ' },
    { n:13, kn:'១៣', w:'thirteen',  km:'ដប់បី' },
    { n:14, kn:'១៤', w:'fourteen',  km:'ដប់បួន' },
    { n:15, kn:'១៥', w:'fifteen',   km:'ដប់ប្រាំ' },
    { n:16, kn:'១៦', w:'sixteen',   km:'ដប់ប្រាំមួយ' },
    { n:17, kn:'១៧', w:'seventeen', km:'ដប់ប្រាំពីរ' },
    { n:18, kn:'១៨', w:'eighteen',  km:'ដប់ប្រាំបី' },
    { n:19, kn:'១៩', w:'nineteen',  km:'ដប់ប្រាំបួន' },
    { n:20, kn:'២០', w:'twenty',    km:'ម្ភៃ' }
  ];

  /* The things that get counted. Picked so that twenty of them still read as
     twenty separate objects rather than as a texture. */
  var COUNTERS = ['🍎','⭐','🐟','🎈','🍌','🐞','🍪','🌸','🚗','🐤','🦆','🥭'];

  /* Small sets to count on the page, each with the thing named so the voice
     can say "one, two, three — three fish". */
  var COUNTSETS = [
    { n:3,  em:'🐟', w:'fish',      km:'ត្រី' },
    { n:5,  em:'🍌', w:'bananas',   km:'ចេក' },
    { n:4,  em:'🐤', w:'chicks',    km:'កូនមាន់' },
    { n:7,  em:'⭐', w:'stars',     km:'ផ្កាយ' },
    { n:6,  em:'🍪', w:'biscuits',  km:'នំប៊ីសស្គីត' },
    { n:8,  em:'🎈', w:'balloons',  km:'បាឡុង' },
    { n:9,  em:'🌸', w:'flowers',   km:'ផ្កា' },
    { n:10, em:'🚗', w:'cars',      km:'ឡាន' }
  ];

  /* ==================================================================== 2
     SHAPES
     `d` is drawn inside a 0 0 100 100 viewBox so every shape shares one
     coordinate system, exactly as on the English page — the two banks can
     swap paths. `sides` is the maths: a square is not "the box one", it is
     the one with four sides all the same length.                           */
  var SHAPES = [
    { w:'circle',    km:'រង្វង់',        sides:0, note:{ en:'no corners', km:'គ្មានជ្រុង' },
      d:'M50 6a44 44 0 1 0 .1 0z' },
    { w:'triangle',  km:'ត្រីកោណ',       sides:3, note:{ en:'3 sides', km:'៣ ជ្រុង' },
      d:'M50 10 92 86H8z' },
    { w:'square',    km:'ការេ',          sides:4, note:{ en:'4 sides the same', km:'៤ ជ្រុងស្មើគ្នា' },
      d:'M12 12h76v76H12z' },
    { w:'rectangle', km:'ចតុកោណកែង',     sides:4, note:{ en:'2 long, 2 short', km:'វែង ២ ខ្លី ២' },
      d:'M6 26h88v48H6z' },
    { w:'oval',      km:'ពងក្រពើ',       sides:0, note:{ en:'a squashed circle', km:'រង្វង់សំប៉ែត' },
      d:'M50 16c24 0 42 15 42 34S74 84 50 84 8 69 8 50s18-34 42-34z' },
    { w:'diamond',   km:'រាងពេជ្រ',      sides:4, note:{ en:'a square on its corner', km:'ការេឈរលើជ្រុង' },
      d:'M50 6 94 50 50 94 6 50z' },
    { w:'pentagon',  km:'បញ្ចកោណ',       sides:5, note:{ en:'5 sides', km:'៥ ជ្រុង' },
      d:'M50 6 94 38 77 90H23L6 38z' },
    { w:'hexagon',   km:'ឆកោណ',          sides:6, note:{ en:'6 sides', km:'៦ ជ្រុង' },
      d:'M28 10h44l22 40-22 40H28L6 50z' },
    { w:'star',      km:'ផ្កាយ',         sides:5, note:{ en:'5 points', km:'៥ ចំណុច' },
      d:'M50 6 62 38l34 2-26 22 8 33-28-18-28 18 8-33-26-22 34-2z' },
    { w:'heart',     km:'បេះដូង',        sides:0, note:{ en:'no straight sides', km:'គ្មានជ្រុងត្រង់' },
      d:'M50 88C22 68 8 54 8 36a22 22 0 0 1 42-9 22 22 0 0 1 42 9c0 18-14 32-42 52z' }
  ];

  /* The solid shapes, taught only as "the real thing that shape belongs to".
     A four-year-old meets a cube as a dice long before as a cube.          */
  var SOLIDS = [
    { w:'sphere',   km:'ស្វ៊ែរ',    em:'⚽', like:{ en:'like a ball',   km:'ដូចបាល់' } },
    { w:'cube',     km:'គូប',       em:'🎲', like:{ en:'like a dice',   km:'ដូចគ្រាប់ឡុកឡាក់' } },
    { w:'box',      km:'ប្រអប់',    em:'📦', like:{ en:'like a parcel', km:'ដូចប្រអប់' } },
    { w:'cone',     km:'កោន',       em:'🍦', like:{ en:'like ice cream',km:'ដូចការ៉េម' } },
    { w:'cylinder', km:'ស៊ីឡាំង',   em:'🥫', like:{ en:'like a tin',    km:'ដូចកំប៉ុង' } }
  ];

  /* ------------------------------------------------------------- patterns
     `unit` repeats; the child says what comes next. Kept to two and three
     item units, which is all a kindergarten pattern ever needs.            */
  var PATTERNS = [
    { name:'AB',  unit:['🔴','🔵'] },
    { name:'AB',  unit:['🍎','🍌'] },
    { name:'AAB', unit:['⭐','⭐','🌙'] },
    { name:'ABB', unit:['🐱','🐶','🐶'] },
    { name:'ABC', unit:['🔺','🟩','🔵'] },
    { name:'ABC', unit:['🚗','🚲','🚌'] },
    { name:'AB',  unit:['👏','🦶'] },
    { name:'AAB', unit:['🌸','🌸','🍃'] }
  ];

  /* ==================================================================== 3
     COMPARING
     Opposites come in pairs because that is the only way the words mean
     anything — "big" alone is not a measurement, "bigger than that" is.    */
  var OPPOSITES = [
    { t:{ en:'Size',   km:'ទំហំ' },
      a:{ w:'big',   km:'ធំ',    em:'🐘' }, b:{ w:'small', km:'តូច',  em:'🐜' } },
    { t:{ en:'Height', km:'កម្ពស់' },
      a:{ w:'tall',  km:'ខ្ពស់', em:'🦒' }, b:{ w:'short', km:'ទាប',  em:'🐇' } },
    { t:{ en:'Length', km:'ប្រវែង' },
      a:{ w:'long',  km:'វែង',  em:'🐍' }, b:{ w:'short', km:'ខ្លី',  em:'🐛' } },
    { t:{ en:'Weight', km:'ទម្ងន់' },
      a:{ w:'heavy', km:'ធ្ងន់', em:'🪨' }, b:{ w:'light', km:'ស្រាល', em:'🪶' } },
    { t:{ en:'How full', km:'ភាពពេញ' },
      a:{ w:'full',  km:'ពេញ',  em:'🥛' }, b:{ w:'empty', km:'ទទេ',  em:'🥃' } },
    { t:{ en:'Speed',  km:'ល្បឿន' },
      a:{ w:'fast',  km:'លឿន',  em:'🐆' }, b:{ w:'slow',  km:'យឺត',  em:'🐢' } },
    { t:{ en:'How many', km:'ចំនួន' },
      a:{ w:'many',  km:'ច្រើន', em:'🐜' }, b:{ w:'few',   km:'តិច',  em:'🐘' } },
    { t:{ en:'Thickness', km:'កម្រាស់' },
      a:{ w:'thick', km:'ក្រាស់', em:'📚' }, b:{ w:'thin',  km:'ស្តើង', em:'📄' } }
  ];

  /* Two groups side by side. `l` and `r` are counts of the same picture, so
     the only difference the eye can find is how many there are. */
  var COMPARES = [
    { em:'🍎', l:3, r:5 },
    { em:'🐤', l:6, r:2 },
    { em:'⭐', l:4, r:4 },
    { em:'🎈', l:7, r:3 },
    { em:'🍪', l:2, r:6 },
    { em:'🐟', l:5, r:5 }
  ];

  /* Measuring before a ruler: how many cubes long is it? This is the whole
     idea of a unit, and it is the step Cambodian Grade 1 assumes. */
  var MEASURES = [
    { w:'a pencil',   km:'ខ្មៅដៃ',       em:'✏️', n:5 },
    { w:'a spoon',    km:'ស្លាបព្រា',    em:'🥄', n:4 },
    { w:'a book',     km:'សៀវភៅ',        em:'📕', n:7 },
    { w:'a shoe',     km:'ស្បែកជើង',     em:'👟', n:6 },
    { w:'a leaf',     km:'ស្លឹកឈើ',      em:'🍃', n:3 },
    { w:'a toothbrush', km:'ច្រាសដុសធ្មេញ', em:'🪥', n:8 }
  ];

  /* ==================================================================== 4
     ADDING AND TAKING AWAY
     Number bonds are listed rather than generated, because the pairs that
     make ten are a thing to be *known by heart* — they are the foundation
     the whole of Grade 1 arithmetic is built on.                           */
  var BONDS5  = [[0,5],[1,4],[2,3],[3,2],[4,1],[5,0]];
  var BONDS10 = [[0,10],[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1],[10,0]];

  var DOUBLES = [1, 2, 3, 4, 5];

  /* The pictures used for a sum. Something a child can imagine sharing. */
  var SUMEMS = ['🍎','🍌','🐤','⭐','🍪','🎈','🐟','🌸'];

  /* ==================================================================== 5
     THE WORLD — time, money, place, order                                  */
  var DAYS = [
    { w:'Sunday',    km:'ថ្ងៃអាទិត្យ',      em:'1️⃣' },
    { w:'Monday',    km:'ថ្ងៃច័ន្ទ',        em:'2️⃣' },
    { w:'Tuesday',   km:'ថ្ងៃអង្គារ',       em:'3️⃣' },
    { w:'Wednesday', km:'ថ្ងៃពុធ',          em:'4️⃣' },
    { w:'Thursday',  km:'ថ្ងៃព្រហស្បតិ៍',   em:'5️⃣' },
    { w:'Friday',    km:'ថ្ងៃសុក្រ',        em:'6️⃣' },
    { w:'Saturday',  km:'ថ្ងៃសៅរ៍',         em:'7️⃣' }
  ];

  /* O'clock only. Half past and quarter to belong to Grade 1 — at this age
     the win is reading the short hand and matching it to a number. */
  var CLOCKS = [
    { h:1,  em:'🕐' }, { h:2,  em:'🕑' }, { h:3,  em:'🕒' }, { h:4,  em:'🕓' },
    { h:5,  em:'🕔' }, { h:6,  em:'🕕' }, { h:7,  em:'🕖' }, { h:8,  em:'🕗' },
    { h:9,  em:'🕘' }, { h:10, em:'🕙' }, { h:11, em:'🕚' }, { h:12, em:'🕛' }
  ];

  /* Things that happen at a time, so the clock has something to be for. */
  var DAYPARTS = [
    { w:'morning',   km:'ព្រឹក',   em:'🌅', line:{ en:'We wake up in the morning.', km:'យើងភ្ញាក់ពីព្រឹក។' } },
    { w:'afternoon', km:'រសៀល',    em:'☀️', line:{ en:'We play in the afternoon.',  km:'យើងលេងពេលរសៀល។' } },
    { w:'evening',   km:'ល្ងាច',   em:'🌇', line:{ en:'We eat in the evening.',     km:'យើងញ៉ាំបាយពេលល្ងាច។' } },
    { w:'night',     km:'យប់',     em:'🌙', line:{ en:'We sleep at night.',         km:'យើងដេកពេលយប់។' } }
  ];

  /* Cambodian riel, in the notes a child actually sees handed over. The
     numeral is printed both ways because that is how the notes print it. */
  var MONEY = [
    { v:100,   kn:'១០០',    w:'one hundred riel',        km:'មួយរយរៀល',        c:'#c0a15a' },
    { v:500,   kn:'៥០០',    w:'five hundred riel',       km:'ប្រាំរយរៀល',      c:'#4a9f6e' },
    { v:1000,  kn:'១០០០',   w:'one thousand riel',       km:'មួយពាន់រៀល',      c:'#5b7fc7' },
    { v:2000,  kn:'២០០០',   w:'two thousand riel',       km:'ពីរពាន់រៀល',      c:'#c8703f' },
    { v:5000,  kn:'៥០០០',   w:'five thousand riel',      km:'ប្រាំពាន់រៀល',    c:'#8f5cb0' },
    { v:10000, kn:'១០០០០',  w:'ten thousand riel',       km:'មួយម៉ឺនរៀល',      c:'#c14b6a' }
  ];

  /* Position words. `pos` picks the arrangement the renderer draws — the cat
     really does sit inside, on top of or behind the box, because a child
     cannot read a caption that says so. */
  var POSITIONS = [
    { w:'in',       km:'ក្នុង',        pos:'in',     line:{ en:'The cat is in the box.',       km:'ឆ្មានៅក្នុងប្រអប់។' } },
    { w:'on',       km:'លើ',           pos:'on',     line:{ en:'The cat is on the box.',       km:'ឆ្មានៅលើប្រអប់។' } },
    { w:'under',    km:'ក្រោម',        pos:'under',  line:{ en:'The cat is under the box.',    km:'ឆ្មានៅក្រោមប្រអប់។' } },
    { w:'behind',   km:'ខាងក្រោយ',     pos:'behind', line:{ en:'The cat is behind the box.',   km:'ឆ្មានៅខាងក្រោយប្រអប់។' } },
    { w:'in front of', km:'ខាងមុខ',    pos:'front',  line:{ en:'The cat is in front of the box.', km:'ឆ្មានៅខាងមុខប្រអប់។' } },
    { w:'next to',  km:'ក្បែរ',        pos:'next',   line:{ en:'The cat is next to the box.',  km:'ឆ្មានៅក្បែរប្រអប់។' } },
    { w:'between',  km:'រវាង',         pos:'between',line:{ en:'The cat is between two boxes.',km:'ឆ្មានៅចន្លោះប្រអប់ពីរ។' } }
  ];

  var ORDINALS = [
    { n:1, w:'first',  km:'ទីមួយ',  em:'🥇' },
    { n:2, w:'second', km:'ទីពីរ',  em:'🥈' },
    { n:3, w:'third',  km:'ទីបី',   em:'🥉' },
    { n:4, w:'fourth', km:'ទីបួន',  em:'4️⃣' },
    { n:5, w:'fifth',  km:'ទីប្រាំ', em:'5️⃣' }
  ];

  /* ==================================================================== 6
     WHAT THE PAGE SAYS BACK
     Short, warm, and rotated so the tenth question does not sound like the
     first. Spoken aloud, so English — see the note at the top of the file. */
  var PRAISE = [
    { s:'Yes! Well done!',   em:'🎉' },
    { s:'Great counting!',   em:'⭐' },
    { s:'Perfect!',          em:'🌟' },
    { s:"That's right!",     em:'👏' },
    { s:'Very good!',        em:'😄' },
    { s:'Excellent maths!',  em:'🏆' },
    { s:'You did it!',       em:'🎈' },
    { s:'Clever!',           em:'💡' }
  ];

  /* Never "wrong". A five-year-old who feels told off stops counting. */
  var NUDGE = [
    { s:'Try again.',          em:'🙂' },
    { s:'Nearly! Count again.',em:'💪' },
    { s:'Have another go.',    em:'🤗' },
    { s:'Count them slowly.',  em:'👆' }
  ];

  global.MKG_BANK = {
    numbers: NUMBERS,
    counters: COUNTERS,
    countsets: COUNTSETS,
    shapes: SHAPES,
    solids: SOLIDS,
    patterns: PATTERNS,
    opposites: OPPOSITES,
    compares: COMPARES,
    measures: MEASURES,
    bonds5: BONDS5,
    bonds10: BONDS10,
    doubles: DOUBLES,
    sumems: SUMEMS,
    days: DAYS,
    clocks: CLOCKS,
    dayparts: DAYPARTS,
    money: MONEY,
    positions: POSITIONS,
    ordinals: ORDINALS,
    praise: PRAISE,
    nudge: NUDGE
  };
})(window);
