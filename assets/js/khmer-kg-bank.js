/* Alpha Academy Cambodia — Khmer for Kindergarten, content bank
   ---------------------------------------------------------------------------
   Everything the page teaches lives here as data. The renderer in
   assets/js/khmer-kindergarten.js never contains a letter of the course, so
   adding content is an edit to this file alone. Same split and same shapes as
   assets/js/kindergarten-bank.js — read that file first if this one is new.

   THREE THINGS ARE DIFFERENT HERE, and all three come from the script.

   1. THE TAUGHT LANGUAGE IS THE READER'S OWN. On the English and Chinese
      pages the Khmer is the gloss — the thing that explains. Here the Khmer
      IS the lesson, so every entry carries the other direction instead:

          { c:'ខ', s:1, r:'khâ', w:'ខ្លា', wr:'khlaa', en:'tiger', em:'🐯' }

      `c`  the letter or word being taught.
      `r`  a romanisation, for a parent or teacher who does not read Khmer.
           It is an aid to saying the thing out loud, not a standard —
           see the note at the bottom of this file.
      `en` the English meaning, which is also the second language of the page.
      `em` the picture. A five-year-old cannot read the word yet, so the
           picture is not decoration: it is how a question is asked.

   2. EVERY CONSONANT BELONGS TO A SERIES. `s` is 1 or 2. This is not trivia:
      the same vowel sign says two different sounds depending on which series
      the consonant belongs to, and that single fact is what Khmer reading
      turns on. Fifteen letters are first series, eighteen are second.

   3. THE PAGE CANNOT RELY ON BEING ABLE TO SPEAK. There is a Khmer voice on
      Chrome for Android with Google Text-to-Speech and on very little else,
      so nothing here may depend on sound. Every game is answerable by
      looking, and the voice is a bonus when the device happens to have one.  */
(function (global) {
  'use strict';

  /* ==================================================================== 1
     ព្យញ្ជនៈ — the 33 consonants, in the order they are taught and recited.
     Two of them, ឋ and ឍ, appear almost only in words borrowed from Pali and
     Sanskrit. Cambodian teachers say so plainly rather than inventing a word
     for the chart, and `rare` makes the card say so too.                    */
  var CONS = [
    { c:'ក', s:1, r:'kâ',   w:'ក្អែក',      wr:'kʼaek',    en:'crow',      em:'🐦' },
    { c:'ខ', s:1, r:'khâ',  w:'ខ្លា',       wr:'khlaa',    en:'tiger',     em:'🐯' },
    { c:'គ', s:2, r:'kô',   w:'គោ',         wr:'koo',      en:'cow',       em:'🐄' },
    { c:'ឃ', s:2, r:'khô',  w:'ឃ្មុំ',      wr:'khmum',    en:'bee',       em:'🐝' },
    { c:'ង', s:2, r:'ngô',  w:'ងូតទឹក',     wr:'ngoot tɨk',en:'to bathe',  em:'🛁' },
    { c:'ច', s:1, r:'châ',  w:'ចាន',        wr:'chaan',    en:'plate',     em:'🍽️' },
    { c:'ឆ', s:1, r:'chhâ', w:'ឆ្មា',       wr:'chhmaa',   en:'cat',       em:'🐱' },
    { c:'ជ', s:2, r:'chô',  w:'ជ្រូក',      wr:'chrook',   en:'pig',       em:'🐷' },
    { c:'ឈ', s:2, r:'chhô', w:'ឈូក',        wr:'chhook',   en:'lotus',     em:'🪷' },
    { c:'ញ', s:2, r:'nhô',  w:'ញញឹម',       wr:'nhonhɨm',  en:'to smile',  em:'😊' },
    { c:'ដ', s:1, r:'dâ',   w:'ដំរី',       wr:'domrei',   en:'elephant',  em:'🐘' },
    { c:'ឋ', s:1, r:'thâ',  w:'ឋាន',        wr:'thaan',    en:'realm',     em:'📜', rare:true },
    { c:'ឌ', s:2, r:'dô',   w:'ឌីណូស័រ',    wr:'dinosaur', en:'dinosaur',  em:'🦖' },
    { c:'ឍ', s:2, r:'thô',  w:'',           wr:'',         en:'',          em:'📜', rare:true },
    { c:'ណ', s:1, r:'nâ',   w:'ណែនាំ',      wr:'nae noam', en:'to guide',  em:'👉' },
    { c:'ត', s:1, r:'tâ',   w:'ត្រី',       wr:'trei',     en:'fish',      em:'🐟' },
    { c:'ថ', s:1, r:'thâ',  w:'ថង់',        wr:'thong',    en:'bag',       em:'👜' },
    { c:'ទ', s:2, r:'tô',   w:'ទូក',        wr:'took',     en:'boat',      em:'🛶' },
    { c:'ធ', s:2, r:'thô',  w:'ធុង',        wr:'thung',    en:'bucket',    em:'🪣' },
    { c:'ន', s:2, r:'nô',   w:'នំ',         wr:'num',      en:'cake',      em:'🍰' },
    { c:'ប', s:1, r:'bâ',   w:'បាល់',       wr:'bal',      en:'ball',      em:'⚽' },
    { c:'ផ', s:1, r:'phâ',  w:'ផ្ទះ',       wr:'pteah',    en:'house',     em:'🏠' },
    { c:'ព', s:2, r:'pô',   w:'ពពែ',        wr:'popeae',   en:'goat',      em:'🐐' },
    { c:'ភ', s:2, r:'phô',  w:'ភ្នំ',       wr:'phnum',    en:'mountain',  em:'⛰️' },
    { c:'ម', s:2, r:'mô',   w:'មាន់',       wr:'moan',     en:'chicken',   em:'🐔' },
    { c:'យ', s:2, r:'yô',   w:'យន្តហោះ',    wr:'yun hoh',  en:'aeroplane', em:'✈️' },
    { c:'រ', s:2, r:'rô',   w:'រទេះ',       wr:'rôteh',    en:'cart',      em:'🛒' },
    { c:'ល', s:2, r:'lô',   w:'ល្ពៅ',       wr:'lpov',     en:'pumpkin',   em:'🎃' },
    { c:'វ', s:2, r:'vô',   w:'វិទ្យុ',     wr:'vityu',    en:'radio',     em:'📻' },
    { c:'ស', s:1, r:'sâ',   w:'សៀវភៅ',      wr:'siev phou',en:'book',      em:'📕' },
    { c:'ហ', s:1, r:'hâ',   w:'ហាង',        wr:'haang',    en:'shop',      em:'🏪' },
    { c:'ឡ', s:1, r:'lâ',   w:'ឡាន',        wr:'laan',     en:'car',       em:'🚗' },
    { c:'អ', s:1, r:'ʼâ',   w:'អាវ',        wr:'aav',      en:'shirt',     em:'👕' }
  ];

  /* ==================================================================== 2
     ស្រៈនិស្ស័យ — the 23 dependent vowels.
     Each one is shown on ក (first series) and on គ (second series), because
     the sign alone has no single sound. `r1` and `r2` are the two readings.
     This is the hardest thing on the page and the most important: a child who
     learns one reading per sign will misread half of everything they meet.   */
  var VOWELS = [
    { v:'ា',  a:'កា',  b:'គា',  r1:'kaa',  r2:'kie'  },
    { v:'ិ',  a:'កិ',  b:'គិ',  r1:'kĕ',   r2:'kĭ'   },
    { v:'ី',  a:'កី',  b:'គី',  r1:'kei',  r2:'kii'  },
    { v:'ឹ',  a:'កឹ',  b:'គឹ',  r1:'kœ̆',   r2:'kɨ'   },
    { v:'ឺ',  a:'កឺ',  b:'គឺ',  r1:'kəu',  r2:'kɨɨ'  },
    { v:'ុ',  a:'កុ',  b:'គុ',  r1:'ko',   r2:'ku'   },
    { v:'ូ',  a:'កូ',  b:'គូ',  r1:'kou',  r2:'kuu'  },
    { v:'ួ',  a:'កួ',  b:'គួ',  r1:'kuo',  r2:'kuo'  },
    { v:'ើ',  a:'កើ',  b:'គើ',  r1:'kaeu', r2:'kəu'  },
    { v:'ឿ',  a:'កឿ',  b:'គឿ',  r1:'kɨe',  r2:'kɨe'  },
    { v:'ៀ',  a:'កៀ',  b:'គៀ',  r1:'kie',  r2:'kie'  },
    { v:'េ',  a:'កេ',  b:'គេ',  r1:'kei',  r2:'kee'  },
    { v:'ែ',  a:'កែ',  b:'គែ',  r1:'kae',  r2:'kae'  },
    { v:'ៃ',  a:'កៃ',  b:'គៃ',  r1:'kai',  r2:'key'  },
    { v:'ោ',  a:'កោ',  b:'គោ',  r1:'kao',  r2:'koo'  },
    { v:'ៅ',  a:'កៅ',  b:'គៅ',  r1:'kau',  r2:'kou'  },
    { v:'ុំ',  a:'កុំ',  b:'គុំ',  r1:'kom',  r2:'kum'  },
    { v:'ំ',  a:'កំ',  b:'គំ',  r1:'kam',  r2:'kum'  },
    { v:'ាំ', a:'កាំ', b:'គាំ', r1:'kam',  r2:'koam' },
    { v:'ះ',  a:'កះ',  b:'គះ',  r1:'kah',  r2:'keah' },
    { v:'ុះ', a:'កុះ', b:'គុះ', r1:'koh',  r2:'kuh'  },
    { v:'េះ', a:'កេះ', b:'គេះ', r1:'keh',  r2:'keh'  },
    { v:'ោះ', a:'កោះ', b:'គោះ', r1:'kaoh', r2:'kuoh' }
  ];

  /* ស្រៈពេញតួ — the independent vowels. Unlike the signs above these stand on
     their own without a consonant. Four of them carry almost the whole load;
     the rest turn up in a handful of words and are listed so a child who
     meets one is not surprised. */
  var IVOWELS = [
    { v:'ឥ', r:'ĕ',   w:'ឥឡូវ',    wr:'ĕlov',    en:'now',        em:'⏱️' },
    { v:'ឦ', r:'ei',  w:'',        wr:'',        en:'',           em:'📜', rare:true },
    { v:'ឧ', r:'ŏ',   w:'ឧបករណ៍',  wr:'ŏpakâ',   en:'tool',       em:'🔧' },
    { v:'ឩ', r:'ou',  w:'',        wr:'',        en:'',           em:'📜', rare:true },
    { v:'ឪ', r:'ʼəv', w:'ឪពុក',    wr:'ʼəvpuk',  en:'father',     em:'👨' },
    { v:'ឫ', r:'rœ̆',  w:'ឫស្សី',   wr:'rœssei',  en:'bamboo',     em:'🎋' },
    { v:'ឬ', r:'rœ',  w:'ឬ',       wr:'rœ',      en:'or',         em:'🔀' },
    { v:'ឭ', r:'lœ̆',  w:'',        wr:'',        en:'',           em:'📜', rare:true },
    { v:'ឮ', r:'lœ',  w:'ឮ',       wr:'lœ',      en:'to hear',    em:'👂' },
    { v:'ឯ', r:'ae',  w:'ឯកសារ',   wr:'aekasaa', en:'document',   em:'📄' },
    { v:'ឰ', r:'ai',  w:'',        wr:'',        en:'',           em:'📜', rare:true },
    { v:'ឱ', r:'ao',  w:'ឱកាស',    wr:'aokah',   en:'chance',     em:'🍀' },
    { v:'ឳ', r:'au',  w:'',        wr:'',        en:'',           em:'📜', rare:true }
  ];

  /* ==================================================================== 3
     ការផ្សំ — building a syllable.
     The grid consonants are the six a child meets first; the grid vowels are
     the six that make the most real words with them.                        */
  var GRIDC = ['ក', 'ម', 'ត', 'ប', 'ស', 'ល'];
  var GRIDV = ['ា', 'ិ', 'ី', 'ុ', 'ូ', 'េ'];

  /* ជើងអក្សរ — the subscript. A second consonant written underneath the
     first, and it is everywhere: a child who does not know it is looking at
     two letters cannot read ផ្ទះ at all. `top` and `foot` split the pair. */
  var FEET = [
    { w:'ខ្ញុំ',  wr:'khnhom', en:'I, me',   em:'🙋', top:'ខ', foot:'ញ' },
    { w:'ស្រី',   wr:'srei',   en:'girl',    em:'👧', top:'ស', foot:'រ' },
    { w:'ប្រុស',  wr:'proh',   en:'boy',     em:'👦', top:'ប', foot:'រ' },
    { w:'ផ្ទះ',   wr:'pteah',  en:'house',   em:'🏠', top:'ផ', foot:'ទ' },
    { w:'ក្មេង',  wr:'kmeng',  en:'child',   em:'🧒', top:'ក', foot:'ម' },
    { w:'ឆ្មា',   wr:'chhmaa', en:'cat',     em:'🐱', top:'ឆ', foot:'ម' },
    { w:'ព្រៃ',   wr:'prey',   en:'forest',  em:'🌳', top:'ព', foot:'រ' },
    { w:'ស្អាត',  wr:'sʼaat',  en:'clean',   em:'✨', top:'ស', foot:'អ' }
  ];

  /* The first words a child can actually decode, kept short and regular. */
  var FIRSTWORDS = [
    { w:'ម៉ែ',   wr:'mae',   en:'mum',      em:'👩' },
    { w:'ប៉ា',   wr:'paa',   en:'dad',      em:'👨' },
    { w:'តា',    wr:'taa',   en:'grandpa',  em:'👴' },
    { w:'យាយ',   wr:'yeay',  en:'grandma',  em:'👵' },
    { w:'បង',    wr:'bong',  en:'older sibling', em:'🧑' },
    { w:'ប្អូន', wr:'pʼoun', en:'younger sibling', em:'🧒' },
    { w:'នំ',    wr:'num',   en:'cake',     em:'🍰' },
    { w:'ទឹក',   wr:'tɨk',   en:'water',    em:'💧' },
    { w:'បាយ',   wr:'baay',  en:'rice',     em:'🍚' },
    { w:'ឆ្កែ',  wr:'chhkae',en:'dog',      em:'🐶' },
    { w:'ផ្កា',  wr:'phkaa', en:'flower',   em:'🌸' },
    { w:'ដៃ',    wr:'dai',   en:'hand',     em:'✋' }
  ];

  /* ==================================================================== 4
     លេខខ្មែរ — the Khmer numerals.
     They are the same numbers the maths page teaches; here the job is
     reading the shape rather than counting the amount.                      */
  var NUMBERS = [
    { n:0,  kn:'០',  w:'សូន្យ',        wr:'soun' },
    { n:1,  kn:'១',  w:'មួយ',          wr:'muy' },
    { n:2,  kn:'២',  w:'ពីរ',          wr:'pii' },
    { n:3,  kn:'៣',  w:'បី',           wr:'bei' },
    { n:4,  kn:'៤',  w:'បួន',          wr:'buon' },
    { n:5,  kn:'៥',  w:'ប្រាំ',        wr:'pram' },
    { n:6,  kn:'៦',  w:'ប្រាំមួយ',      wr:'pram muy' },
    { n:7,  kn:'៧',  w:'ប្រាំពីរ',      wr:'pram pii' },
    { n:8,  kn:'៨',  w:'ប្រាំបី',       wr:'pram bei' },
    { n:9,  kn:'៩',  w:'ប្រាំបួន',      wr:'pram buon' },
    { n:10, kn:'១០', w:'ដប់',          wr:'dop' },
    { n:11, kn:'១១', w:'ដប់មួយ',       wr:'dop muy' },
    { n:12, kn:'១២', w:'ដប់ពីរ',       wr:'dop pii' },
    { n:13, kn:'១៣', w:'ដប់បី',        wr:'dop bei' },
    { n:14, kn:'១៤', w:'ដប់បួន',       wr:'dop buon' },
    { n:15, kn:'១៥', w:'ដប់ប្រាំ',      wr:'dop pram' },
    { n:16, kn:'១៦', w:'ដប់ប្រាំមួយ',   wr:'dop pram muy' },
    { n:17, kn:'១៧', w:'ដប់ប្រាំពីរ',   wr:'dop pram pii' },
    { n:18, kn:'១៨', w:'ដប់ប្រាំបី',    wr:'dop pram bei' },
    { n:19, kn:'១៩', w:'ដប់ប្រាំបួន',   wr:'dop pram buon' },
    { n:20, kn:'២០', w:'ម្ភៃ',         wr:'mphei' }
  ];

  var COUNTERS = ['🍎','⭐','🐟','🎈','🍌','🐞','🍪','🌸','🚗','🐤'];

  /* ==================================================================== 5
     ពាក្យ — vocabulary by theme                                             */
  var THEMES = [
    { key:'animals', en:'Animals', km:'សត្វ', em:'🐘', words:[
      { w:'ឆ្មា',   wr:'chhmaa',  en:'cat',      em:'🐱' },
      { w:'ឆ្កែ',   wr:'chhkae',  en:'dog',      em:'🐶' },
      { w:'គោ',     wr:'koo',     en:'cow',      em:'🐄' },
      { w:'ជ្រូក',  wr:'chrook',  en:'pig',      em:'🐷' },
      { w:'មាន់',   wr:'moan',    en:'chicken',  em:'🐔' },
      { w:'ទា',     wr:'tie',     en:'duck',     em:'🦆' },
      { w:'ត្រី',   wr:'trei',    en:'fish',     em:'🐟' },
      { w:'ដំរី',   wr:'domrei',  en:'elephant', em:'🐘' },
      { w:'ខ្លា',   wr:'khlaa',   en:'tiger',    em:'🐯' },
      { w:'ស្វា',   wr:'svaa',    en:'monkey',   em:'🐵' }
    ]},
    { key:'food', en:'Food', km:'អាហារ', em:'🍚', words:[
      { w:'បាយ',    wr:'baay',    en:'rice',     em:'🍚' },
      { w:'នំបុ័ង', wr:'num pang',en:'bread',    em:'🍞' },
      { w:'ពង',     wr:'pong',    en:'egg',      em:'🥚' },
      { w:'ទឹក',    wr:'tɨk',     en:'water',    em:'💧' },
      { w:'ទឹកដោះគោ', wr:'tɨk dohkoo', en:'milk', em:'🥛' },
      { w:'ចេក',    wr:'chek',    en:'banana',   em:'🍌' },
      { w:'ស្វាយ',  wr:'svaay',   en:'mango',    em:'🥭' },
      { w:'ផ្លែប៉ោម',wr:'phlae paom', en:'apple', em:'🍎' },
      { w:'សាច់',   wr:'sach',    en:'meat',     em:'🍗' },
      { w:'នំខេក',  wr:'num khek',en:'cake',     em:'🍰' }
    ]},
    { key:'family', en:'Family', km:'គ្រួសារ', em:'👨‍👩‍👧', words:[
      { w:'ម្តាយ',  wr:'mdaay',   en:'mother',      em:'👩' },
      { w:'ឪពុក',   wr:'ʼəvpuk',  en:'father',      em:'👨' },
      { w:'បងស្រី', wr:'bong srei',en:'older sister',em:'👧' },
      { w:'បងប្រុស',wr:'bong proh',en:'older brother',em:'👦' },
      { w:'ប្អូន',  wr:'pʼoun',   en:'younger sibling', em:'🧒' },
      { w:'យាយ',    wr:'yeay',    en:'grandmother', em:'👵' },
      { w:'តា',     wr:'taa',     en:'grandfather', em:'👴' },
      { w:'គ្រួសារ',wr:'kruosaa', en:'family',      em:'👨‍👩‍👧' }
    ]},
    { key:'body', en:'My body', km:'រាងកាយ', em:'🧍', words:[
      { w:'ក្បាល',  wr:'kbaal',   en:'head',   em:'🧑' },
      { w:'សក់',    wr:'sok',     en:'hair',   em:'💇' },
      { w:'ភ្នែក',  wr:'phnek',   en:'eye',    em:'👁️' },
      { w:'ត្រចៀក', wr:'trâchiek',en:'ear',    em:'👂' },
      { w:'ច្រមុះ', wr:'chrâmoh', en:'nose',   em:'👃' },
      { w:'មាត់',   wr:'moat',    en:'mouth',  em:'👄' },
      { w:'ដៃ',     wr:'dai',     en:'hand',   em:'✋' },
      { w:'ជើង',    wr:'cheung',  en:'leg',    em:'🦵' }
    ]},
    { key:'school', en:'My classroom', km:'ថ្នាក់រៀន', em:'✏️', words:[
      { w:'សៀវភៅ',  wr:'siev phou',en:'book',   em:'📕' },
      { w:'ខ្មៅដៃ', wr:'khmaudai', en:'pencil', em:'✏️' },
      { w:'ប៊ិច',   wr:'bic',      en:'pen',    em:'🖊️' },
      { w:'កាបូប',  wr:'kaabaob',  en:'bag',    em:'🎒' },
      { w:'កៅអី',   wr:'kaoei',    en:'chair',  em:'🪑' },
      { w:'ទ្វារ',  wr:'tvie',     en:'door',   em:'🚪' },
      { w:'បន្ទាត់',wr:'bantoat',  en:'ruler',  em:'📏' },
      { w:'គ្រូ',   wr:'kruu',     en:'teacher',em:'👩‍🏫' },
      { w:'សិស្ស',  wr:'seh',      en:'pupil',  em:'🧑‍🎓' },
      { w:'សាលា',   wr:'saalaa',   en:'school', em:'🏫' }
    ]},
    { key:'nature', en:'Outside', km:'ធម្មជាតិ', em:'🌳', words:[
      { w:'ថ្ងៃ',   wr:'thngai',  en:'sun, day', em:'☀️' },
      { w:'ភ្លៀង',  wr:'phlieng', en:'rain',     em:'🌧️' },
      { w:'ពពក',    wr:'popok',   en:'cloud',    em:'☁️' },
      { w:'ខ្យល់',  wr:'khyol',   en:'wind',     em:'💨' },
      { w:'ដើមឈើ',  wr:'daeum chheu', en:'tree', em:'🌳' },
      { w:'ផ្កា',   wr:'phkaa',   en:'flower',   em:'🌸' },
      { w:'ភ្នំ',   wr:'phnum',   en:'mountain', em:'⛰️' },
      { w:'ទន្លេ',  wr:'tonle',   en:'river',    em:'🏞️' }
    ]},
    { key:'colours', en:'Colours', km:'ពណ៌', em:'🎨', words:[
      { w:'ក្រហម',  wr:'krâhâm',  en:'red',    em:'🟥' },
      { w:'ខៀវ',    wr:'khiev',   en:'blue',   em:'🟦' },
      { w:'លឿង',    wr:'lɨeng',   en:'yellow', em:'🟨' },
      { w:'បៃតង',   wr:'baytong', en:'green',  em:'🟩' },
      { w:'ខ្មៅ',   wr:'khmau',   en:'black',  em:'⬛' },
      { w:'ស',      wr:'sâ',      en:'white',  em:'⬜' }
    ]},
    { key:'actions', en:'I can…', km:'សកម្មភាព', em:'🏃', words:[
      { w:'រត់',    wr:'rot',     en:'run',    em:'🏃' },
      { w:'ដើរ',    wr:'daeu',    en:'walk',   em:'🚶' },
      { w:'លោត',    wr:'loot',    en:'jump',   em:'🤸' },
      { w:'ញ៉ាំ',   wr:'nham',    en:'eat',    em:'🍽️' },
      { w:'ផឹក',    wr:'phɨk',    en:'drink',  em:'🥤' },
      { w:'ដេក',    wr:'dek',     en:'sleep',  em:'😴' },
      { w:'អាន',    wr:'aan',     en:'read',   em:'📖' },
      { w:'សរសេរ',  wr:'sâsee',   en:'write',  em:'📝' },
      { w:'ច្រៀង',  wr:'chrieng', en:'sing',   em:'🎤' },
      { w:'លេង',    wr:'leng',    en:'play',   em:'🧸' }
    ]}
  ];

  /* The colours again, with the swatch a game needs. */
  var COLOURS = [
    { w:'ក្រហម', wr:'krâhâm',  en:'red',    hex:'#e03131', on:'#fff' },
    { w:'ខៀវ',   wr:'khiev',   en:'blue',   hex:'#1c7ed6', on:'#fff' },
    { w:'លឿង',   wr:'lɨeng',   en:'yellow', hex:'#fcc419', on:'#3b2f00' },
    { w:'បៃតង',  wr:'baytong', en:'green',  hex:'#2f9e44', on:'#fff' },
    { w:'ទឹកក្រូច', wr:'tɨk krooch', en:'orange', hex:'#f76707', on:'#fff' },
    { w:'ស្វាយ', wr:'svaay',   en:'purple', hex:'#7048e8', on:'#fff' },
    { w:'ផ្កាឈូក',wr:'phkaa chhook', en:'pink', hex:'#f06595', on:'#fff' },
    { w:'ត្នោត', wr:'tnaot',   en:'brown',  hex:'#8a5a34', on:'#fff' },
    { w:'ខ្មៅ',  wr:'khmau',   en:'black',  hex:'#1a1a1a', on:'#fff' },
    { w:'ស',     wr:'sâ',      en:'white',  hex:'#ffffff', on:'#333' }
  ];

  /* ==================================================================== 6
     និយាយ — the things a child says every day.
     `a` is the answer half of a pair, so a child can practise both sides.    */
  var TALK = [
    { key:'greet', en:'Saying hello', km:'ការស្វាគមន៍', em:'👋', lines:[
      { s:'សួស្តី!',            wr:'suostei',            en:'Hi!',              em:'👋' },
      { s:'ជំរាបសួរ',           wr:'chumreap suo',       en:'Hello (polite)',   em:'🙏' },
      { s:'អរុណសួស្តី',         wr:'arun suostei',       en:'Good morning',     em:'🌅' },
      { s:'រាត្រីសួស្តី',       wr:'reatrei suostei',    en:'Good night',       em:'🌙' },
      { s:'លាហើយ',              wr:'lia haeuy',          en:'Goodbye',          em:'👋' },
      { s:'ជួបគ្នាថ្ងៃស្អែក',   wr:'chuop knea thngai sʼaek', en:'See you tomorrow', em:'🙂' }
    ]},
    { key:'polite', en:'Being kind', km:'ពាក្យសុភាព', em:'💛', lines:[
      { s:'សូម',        wr:'soum',       en:'Please',        em:'🙏' },
      { s:'អរគុណ',      wr:'âkun',       en:'Thank you',     em:'💛' },
      { s:'មិនអីទេ',    wr:'min ei te',  en:"You're welcome",em:'🙂' },
      { s:'សុំទោស',     wr:'som toh',    en:'Sorry',         em:'😔' },
      { s:'បាទ / ចាស',  wr:'baat / chaa',en:'Yes (boy / girl)', em:'👍' },
      { s:'ទេ',         wr:'te',         en:'No',            em:'🙅' }
    ]},
    { key:'me', en:'About me', km:'អំពីខ្ញុំ', em:'🧒', lines:[
      { s:'តើអ្នកឈ្មោះអ្វី?',  a:'ខ្ញុំឈ្មោះ ដារា។', wr:'tae neak chhmuoh avei?', en:"What's your name? — My name is Dara.", em:'🧒' },
      { s:'តើអ្នកសុខសប្បាយទេ?', a:'ខ្ញុំសុខសប្បាយ។',  wr:'tae neak sok sabaay te?', en:'How are you? — I am well.', em:'😊' },
      { s:'តើអ្នកអាយុប៉ុន្មាន?', a:'ខ្ញុំអាយុ ៥ ឆ្នាំ។', wr:'tae neak aayu ponmaan?', en:'How old are you? — I am five.', em:'🎂' },
      { s:'ខ្ញុំមកពីកម្ពុជា។',  wr:'khnhom mok pii kampuchea', en:'I am from Cambodia.', em:'🇰🇭' }
    ]},
    { key:'need', en:'What I need', km:'អ្វីដែលខ្ញុំត្រូវការ', em:'🙋', lines:[
      { s:'ខ្ញុំឃ្លាន',       wr:'khnhom khlien',   en:'I am hungry',   em:'🍚' },
      { s:'ខ្ញុំស្រេកទឹក',    wr:'khnhom srek tɨk', en:'I am thirsty',  em:'💧' },
      { s:'ខ្ញុំចង់ដេក',      wr:'khnhom chong dek',en:'I want to sleep',em:'😴' },
      { s:'ជួយខ្ញុំផង',       wr:'chuoy khnhom phâng', en:'Please help me', em:'🤝' },
      { s:'ខ្ញុំស្រលាញ់ម៉ាក់', wr:'khnhom srâlanh mak', en:'I love mum',  em:'❤️' }
    ]},
    { key:'class', en:'In the classroom', km:'ក្នុងថ្នាក់', em:'🏫', lines:[
      { s:'ក្រោកឈរ',       wr:'kraok chhô',    en:'Stand up',     em:'🧍' },
      { s:'អង្គុយចុះ',     wr:'ângkuy choh',   en:'Sit down',     em:'🪑' },
      { s:'សូមស្តាប់',     wr:'soum sdap',     en:'Listen, please',em:'👂' },
      { s:'មើលមកខ្ញុំ',    wr:'meul mok khnhom',en:'Look at me',   em:'👀' },
      { s:'បើកសៀវភៅ',      wr:'baek siev phou',en:'Open your book',em:'📖' },
      { s:'សូមតម្រង់ជួរ',  wr:'soum tâmrong chuo', en:'Line up, please', em:'🚸' }
    ]}
  ];

  /* ==================================================================== 7
     WHAT THE PAGE SAYS BACK
     In Khmer, because that is the language being taught — and printed as
     well as spoken, since most devices have no Khmer voice to say it with.   */
  var PRAISE = [
    { s:'ត្រូវហើយ! ពូកែណាស់!', em:'🎉' },
    { s:'ល្អណាស់!',            em:'⭐' },
    { s:'ពិតជាត្រូវ!',         em:'🌟' },
    { s:'អស្ចារ្យ!',           em:'🏆' },
    { s:'ធ្វើបានល្អ!',         em:'👏' },
    { s:'ឆ្លាតណាស់!',          em:'💡' },
    { s:'អ្នកធ្វើបានហើយ!',     em:'🎈' },
    { s:'ត្រឹមត្រូវ!',         em:'😄' }
  ];

  var NUDGE = [
    { s:'ព្យាយាមម្ដងទៀត។',     em:'🙂' },
    { s:'ជិតហើយ! សាកម្ដងទៀត។', em:'💪' },
    { s:'មើលឲ្យច្បាស់ម្ដងទៀត។', em:'👀' },
    { s:'សាកល្បងម្ដងទៀត។',     em:'🤗' }
  ];

  /* ------------------------------------------------------------------------
     ON THE ROMANISATION. It is written for this page to help an adult say a
     word out loud, and it follows no official system — Cambodia has several
     and none of them is what a parent reads. It is deliberately plain: `kh`
     is an aspirated k, `ɨ` and `œ` are the two vowels English has no letter
     for, and `ʼ` is the catch in the throat at the start of អ. Anyone using
     this page to *learn* Khmer pronunciation should learn it from a person.
     The Khmer itself is the authority on every card; the romanisation is a
     handrail beside it.                                                     */

  global.KKG_BANK = {
    cons: CONS,
    vowels: VOWELS,
    ivowels: IVOWELS,
    gridC: GRIDC,
    gridV: GRIDV,
    feet: FEET,
    firstwords: FIRSTWORDS,
    numbers: NUMBERS,
    counters: COUNTERS,
    themes: THEMES,
    colours: COLOURS,
    talk: TALK,
    praise: PRAISE,
    nudge: NUDGE
  };
})(window);
