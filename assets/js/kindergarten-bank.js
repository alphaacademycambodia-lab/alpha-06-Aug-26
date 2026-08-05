/* Alpha Academy Cambodia — English for Kindergarten, content bank
   ---------------------------------------------------------------------------
   Everything the page teaches lives here as data. The renderer in
   assets/js/english-kindergarten.js never contains a word of the course, so
   adding vocabulary is an edit to this file alone.

   Shape of a word, used everywhere:

       { w: 'cat', em: '🐱', km: 'ឆ្មា' }

   `w`  the English word — this is also what the speech synthesiser says.
   `em` the picture. A four-year-old cannot read, so the picture is not
        decoration: it is how the question is asked. Every entry must have one.
   `km` the Khmer meaning, shown under the picture when the page is in Khmer.

   ON THE LETTER SOUNDS. `say` is what gets fed to the speech synthesiser for
   the phonics sound, and it is deliberately not the pure phoneme: a browser
   voice reads "b" as its name "bee", so the sound has to be written as "buh".
   That trailing schwa is the sound as it is taught in most kindergartens and
   every teacher will recognise it, but it is an approximation — a real voice
   in the room is still better. `ph` is the proper notation printed on screen.  */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------------ ABC */
  var ABC = [
    { L:'A', l:'a', ph:'/a/',  say:'ah',   w:'Apple',     em:'🍎', km:'ផ្លែប៉ោម' },
    { L:'B', l:'b', ph:'/b/',  say:'buh',  w:'Ball',      em:'⚽', km:'បាល់' },
    { L:'C', l:'c', ph:'/k/',  say:'kuh',  w:'Cat',       em:'🐱', km:'ឆ្មា' },
    { L:'D', l:'d', ph:'/d/',  say:'duh',  w:'Dog',       em:'🐶', km:'ឆ្កែ' },
    { L:'E', l:'e', ph:'/e/',  say:'eh',   w:'Egg',       em:'🥚', km:'ពង' },
    { L:'F', l:'f', ph:'/f/',  say:'fuh',  w:'Fish',      em:'🐟', km:'ត្រី' },
    { L:'G', l:'g', ph:'/g/',  say:'guh',  w:'Goat',      em:'🐐', km:'ពពែ' },
    { L:'H', l:'h', ph:'/h/',  say:'huh',  w:'Hat',       em:'👒', km:'មួក' },
    { L:'I', l:'i', ph:'/i/',  say:'ih',   w:'Insect',    em:'🐞', km:'សត្វល្អិត' },
    { L:'J', l:'j', ph:'/j/',  say:'juh',  w:'Juice',     em:'🧃', km:'ទឹកផ្លែឈើ' },
    { L:'K', l:'k', ph:'/k/',  say:'kuh',  w:'Kite',      em:'🪁', km:'ខ្លែង' },
    { L:'L', l:'l', ph:'/l/',  say:'luh',  w:'Lion',      em:'🦁', km:'សិង្ហ' },
    { L:'M', l:'m', ph:'/m/',  say:'muh',  w:'Moon',      em:'🌙', km:'ព្រះច័ន្ទ' },
    { L:'N', l:'n', ph:'/n/',  say:'nuh',  w:'Nose',      em:'👃', km:'ច្រមុះ' },
    { L:'O', l:'o', ph:'/o/',  say:'oh',   w:'Orange',    em:'🍊', km:'ក្រូច' },
    { L:'P', l:'p', ph:'/p/',  say:'puh',  w:'Pig',       em:'🐷', km:'ជ្រូក' },
    { L:'Q', l:'q', ph:'/kw/', say:'kwuh', w:'Queen',     em:'👑', km:'មហាក្សត្រី' },
    { L:'R', l:'r', ph:'/r/',  say:'ruh',  w:'Rabbit',    em:'🐰', km:'ទន្សាយ' },
    { L:'S', l:'s', ph:'/s/',  say:'suh',  w:'Sun',       em:'☀️', km:'ព្រះអាទិត្យ' },
    { L:'T', l:'t', ph:'/t/',  say:'tuh',  w:'Tree',      em:'🌳', km:'ដើមឈើ' },
    { L:'U', l:'u', ph:'/u/',  say:'uh',   w:'Umbrella',  em:'☂️', km:'ឆត្រ' },
    { L:'V', l:'v', ph:'/v/',  say:'vuh',  w:'Van',       em:'🚐', km:'ឡានវ៉ាន់' },
    { L:'W', l:'w', ph:'/w/',  say:'wuh',  w:'Watch',     em:'⌚', km:'នាឡិកាដៃ' },
    /* X almost never starts a word a child knows, so it is taught where it
       really lives — at the end of "fox". The tile says so. */
    { L:'X', l:'x', ph:'/ks/', say:'ks',   w:'Fox',       em:'🦊', km:'កញ្ជ្រោង', endSound:true },
    { L:'Y', l:'y', ph:'/y/',  say:'yuh',  w:'Yo-yo',     em:'🪀', km:'យូយូ' },
    { L:'Z', l:'z', ph:'/z/',  say:'zuh',  w:'Zebra',     em:'🦓', km:'សេះបង្កង់' }
  ];

  /* -------------------------------------------------------------- 1 to 20 */
  var NUMBERS = [
    { n:1,  w:'one',      km:'មួយ' },
    { n:2,  w:'two',      km:'ពីរ' },
    { n:3,  w:'three',    km:'បី' },
    { n:4,  w:'four',     km:'បួន' },
    { n:5,  w:'five',     km:'ប្រាំ' },
    { n:6,  w:'six',      km:'ប្រាំមួយ' },
    { n:7,  w:'seven',    km:'ប្រាំពីរ' },
    { n:8,  w:'eight',    km:'ប្រាំបី' },
    { n:9,  w:'nine',     km:'ប្រាំបួន' },
    { n:10, w:'ten',      km:'ដប់' },
    { n:11, w:'eleven',   km:'ដប់មួយ' },
    { n:12, w:'twelve',   km:'ដប់ពីរ' },
    { n:13, w:'thirteen', km:'ដប់បី' },
    { n:14, w:'fourteen', km:'ដប់បួន' },
    { n:15, w:'fifteen',  km:'ដប់ប្រាំ' },
    { n:16, w:'sixteen',  km:'ដប់ប្រាំមួយ' },
    { n:17, w:'seventeen',km:'ដប់ប្រាំពីរ' },
    { n:18, w:'eighteen', km:'ដប់ប្រាំបី' },
    { n:19, w:'nineteen', km:'ដប់ប្រាំបួន' },
    { n:20, w:'twenty',   km:'ម្ភៃ' }
  ];

  /* The things that get counted. Picked so that twenty of them still read as
     twenty separate objects rather than a texture. */
  var COUNTERS = ['🍎','⭐','🐟','🎈','🍌','🐞','🍪','🌸','🚗','🐤'];

  /* ------------------------------------------------------------- colours */
  var COLOURS = [
    { w:'red',    km:'ក្រហម',      hex:'#e03131', on:'#fff' },
    { w:'blue',   km:'ខៀវ',        hex:'#1c7ed6', on:'#fff' },
    { w:'yellow', km:'លឿង',        hex:'#fcc419', on:'#3b2f00' },
    { w:'green',  km:'បៃតង',       hex:'#2f9e44', on:'#fff' },
    { w:'orange', km:'ទឹកក្រូច',   hex:'#f76707', on:'#fff' },
    { w:'purple', km:'ស្វាយ',      hex:'#7048e8', on:'#fff' },
    { w:'pink',   km:'ផ្កាឈូក',    hex:'#f06595', on:'#fff' },
    { w:'brown',  km:'ត្នោត',      hex:'#8a5a34', on:'#fff' },
    { w:'black',  km:'ខ្មៅ',       hex:'#1a1a1a', on:'#fff' },
    { w:'white',  km:'ស',          hex:'#ffffff', on:'#333' },
    { w:'grey',   km:'ប្រផេះ',     hex:'#909296', on:'#fff' }
  ];

  /* -------------------------------------------------------------- shapes
     `d` is drawn inside a 0 0 100 100 viewBox so every shape shares one
     coordinate system and can be swapped without touching the CSS.        */
  var SHAPES = [
    { w:'circle',    km:'រង្វង់',          d:'M50 6a44 44 0 1 0 .1 0z' },
    { w:'square',    km:'ការេ',            d:'M12 12h76v76H12z' },
    { w:'triangle',  km:'ត្រីកោណ',         d:'M50 10 92 86H8z' },
    { w:'rectangle', km:'ចតុកោណកែង',       d:'M6 26h88v48H6z' },
    { w:'star',      km:'ផ្កាយ',           d:'M50 6 62 38l34 2-26 22 8 33-28-18-28 18 8-33-26-22 34-2z' },
    { w:'heart',     km:'បេះដូង',          d:'M50 88C22 68 8 54 8 36a22 22 0 0 1 42-9 22 22 0 0 1 42 9c0 18-14 32-42 52z' },
    { w:'diamond',   km:'រាងពេជ្រ',        d:'M50 6 94 50 50 94 6 50z' },
    { w:'oval',      km:'ពងក្រពើ',         d:'M50 16c24 0 42 15 42 34S74 84 50 84 8 69 8 50s18-34 42-34z' }
  ];

  /* -------------------------------------------------- vocabulary by theme */
  var THEMES = [
    { key:'animals', en:'Animals', km:'សត្វ', em:'🐘', words:[
      { w:'cat',      em:'🐱', km:'ឆ្មា' },
      { w:'dog',      em:'🐶', km:'ឆ្កែ' },
      { w:'bird',     em:'🐦', km:'សត្វស្លាប' },
      { w:'fish',     em:'🐟', km:'ត្រី' },
      { w:'cow',      em:'🐄', km:'គោ' },
      { w:'pig',      em:'🐷', km:'ជ្រូក' },
      { w:'duck',     em:'🦆', km:'ទា' },
      { w:'elephant', em:'🐘', km:'ដំរី' },
      { w:'monkey',   em:'🐵', km:'ស្វា' },
      { w:'tiger',    em:'🐯', km:'ខ្លា' }
    ]},
    { key:'food', en:'Food', km:'អាហារ', em:'🍚', words:[
      { w:'rice',    em:'🍚', km:'បាយ' },
      { w:'bread',   em:'🍞', km:'នំបុ័ង' },
      { w:'egg',     em:'🥚', km:'ពង' },
      { w:'milk',    em:'🥛', km:'ទឹកដោះគោ' },
      { w:'water',   em:'💧', km:'ទឹក' },
      { w:'apple',   em:'🍎', km:'ផ្លែប៉ោម' },
      { w:'banana',  em:'🍌', km:'ចេក' },
      { w:'mango',   em:'🥭', km:'ស្វាយ' },
      { w:'chicken', em:'🍗', km:'សាច់មាន់' },
      { w:'cake',    em:'🍰', km:'នំខេក' }
    ]},
    { key:'family', en:'Family', km:'គ្រួសារ', em:'👨‍👩‍👧', words:[
      { w:'mother',      em:'👩', km:'ម្តាយ' },
      { w:'father',      em:'👨', km:'ឪពុក' },
      { w:'sister',      em:'👧', km:'បងស្រី' },
      { w:'brother',     em:'👦', km:'បងប្រុស' },
      { w:'baby',        em:'👶', km:'ទារក' },
      { w:'grandmother', em:'👵', km:'យាយ' },
      { w:'grandfather', em:'👴', km:'តា' },
      { w:'family',      em:'👨‍👩‍👧', km:'គ្រួសារ' }
    ]},
    { key:'body', en:'My Body', km:'រាងកាយ', em:'🧍', words:[
      { w:'head',  em:'🧑', km:'ក្បាល' },
      { w:'hair',  em:'💇', km:'សក់' },
      { w:'eye',   em:'👁️', km:'ភ្នែក' },
      { w:'ear',   em:'👂', km:'ត្រចៀក' },
      { w:'nose',  em:'👃', km:'ច្រមុះ' },
      { w:'mouth', em:'👄', km:'មាត់' },
      { w:'hand',  em:'✋', km:'ដៃ' },
      { w:'arm',   em:'💪', km:'ដើមដៃ' },
      { w:'foot',  em:'🦶', km:'ជើង' },
      { w:'leg',   em:'🦵', km:'ដើមជើង' }
    ]},
    { key:'school', en:'My Classroom', km:'ថ្នាក់រៀន', em:'✏️', words:[
      { w:'book',    em:'📕', km:'សៀវភៅ' },
      { w:'pen',     em:'🖊️', km:'ប៊ិច' },
      { w:'pencil',  em:'✏️', km:'ខ្មៅដៃ' },
      { w:'bag',     em:'🎒', km:'កាបូប' },
      { w:'chair',   em:'🪑', km:'កៅអី' },
      /* "table" has no emoji a child would recognise as a table, and a
         picture that has to be explained is worse than a different word. */
      { w:'door',    em:'🚪', km:'ទ្វារ' },
      { w:'ruler',   em:'📏', km:'បន្ទាត់' },
      { w:'scissors',em:'✂️', km:'កន្ត្រៃ' },
      { w:'teacher', em:'👩‍🏫', km:'គ្រូ' },
      { w:'student', em:'🧑‍🎓', km:'សិស្ស' }
    ]},
    { key:'clothes', en:'Clothes', km:'សម្លៀកបំពាក់', em:'👕', words:[
      { w:'shirt',    em:'👕', km:'អាវ' },
      { w:'trousers', em:'👖', km:'ខោ' },
      { w:'dress',    em:'👗', km:'រ៉ូប' },
      { w:'skirt',    em:'👘', km:'សំពត់' },
      { w:'shoes',    em:'👟', km:'ស្បែកជើង' },
      { w:'socks',    em:'🧦', km:'ស្រោមជើង' },
      { w:'hat',      em:'👒', km:'មួក' },
      { w:'jacket',   em:'🧥', km:'អាវធំ' }
    ]},
    { key:'weather', en:'Weather', km:'អាកាសធាតុ', em:'🌤️', words:[
      { w:'sun',     em:'☀️', km:'ថ្ងៃ' },
      { w:'rain',    em:'🌧️', km:'ភ្លៀង' },
      { w:'cloud',   em:'☁️', km:'ពពក' },
      { w:'wind',    em:'💨', km:'ខ្យល់' },
      { w:'storm',   em:'⛈️', km:'ព្យុះ' },
      { w:'rainbow', em:'🌈', km:'ឥន្ធនូ' },
      { w:'hot',     em:'🥵', km:'ក្តៅ' },
      { w:'cold',    em:'🥶', km:'ត្រជាក់' }
    ]},
    { key:'actions', en:'I Can…', km:'សកម្មភាព', em:'🏃', words:[
      { w:'run',   em:'🏃', km:'រត់' },
      { w:'jump',  em:'🤸', km:'លោត' },
      { w:'walk',  em:'🚶', km:'ដើរ' },
      { w:'eat',   em:'🍽️', km:'ញ៉ាំ' },
      { w:'drink', em:'🥤', km:'ផឹក' },
      { w:'sleep', em:'😴', km:'ដេក' },
      { w:'read',  em:'📖', km:'អាន' },
      { w:'write', em:'📝', km:'សរសេរ' },
      { w:'sing',  em:'🎤', km:'ច្រៀង' },
      { w:'play',  em:'🧸', km:'លេង' }
    ]}
  ];

  /* ------------------------------------------------------------- phonics
     Word families. Every word here is three letters and fully regular, so a
     child who knows the letter sounds can read it without being told.

     A word only earns its place if there is an emoji that says it at a
     glance. "mat", "log", "wig" and "mop" were all dropped for that reason —
     three words a child can picture beat five they cannot.                 */
  var FAMILIES = [
    { end:'-at', em:'🐱', words:[
      { w:'cat', em:'🐱', km:'ឆ្មា' },
      { w:'bat', em:'🦇', km:'ប្រជៀវ' },
      { w:'hat', em:'👒', km:'មួក' },
      { w:'rat', em:'🐀', km:'កណ្ដុរ' }
    ]},
    { end:'-og', em:'🐶', words:[
      { w:'dog', em:'🐶', km:'ឆ្កែ' },
      { w:'fog', em:'🌫️', km:'អ័ព្ទ' },
      { w:'jog', em:'🏃', km:'រត់លេង' }
    ]},
    { end:'-un', em:'☀️', words:[
      { w:'sun', em:'☀️', km:'ព្រះអាទិត្យ' },
      { w:'run', em:'🏃', km:'រត់' },
      { w:'bun', em:'🍞', km:'នំបុ័ងមូល' },
      { w:'fun', em:'🎉', km:'សប្បាយ' }
    ]},
    { end:'-ig', em:'🐷', words:[
      { w:'pig', em:'🐷', km:'ជ្រូក' },
      { w:'big', em:'🐘', km:'ធំ' },
      { w:'dig', em:'⛏️', km:'ជីក' }
    ]},
    { end:'-ug', em:'🐛', words:[
      { w:'bug', em:'🐛', km:'សត្វល្អិត' },
      { w:'mug', em:'☕', km:'ពែង' },
      { w:'hug', em:'🤗', km:'ឱប' }
    ]},
    { end:'-ed', em:'🛏️', words:[
      { w:'bed', em:'🛏️', km:'គ្រែ' },
      { w:'red', em:'🟥', km:'ក្រហម' }
    ]},
    { end:'-en', em:'🐔', words:[
      { w:'hen', em:'🐔', km:'មាន់ញី' },
      { w:'pen', em:'🖊️', km:'ប៊ិច' },
      { w:'ten', em:'🔟', km:'ដប់' }
    ]},
    { end:'-op', em:'🔝', words:[
      { w:'top', em:'🔝', km:'កំពូល' },
      { w:'hop', em:'🐇', km:'លោតៗ' },
      { w:'pop', em:'🎈', km:'ផ្ទុះ' }
    ]},
    { end:'-ap', em:'🧢', words:[
      { w:'cap', em:'🧢', km:'មួក' },
      { w:'map', em:'🗺️', km:'ផែនទី' },
      { w:'nap', em:'😴', km:'ដេកបន្តិច' }
    ]}
  ];

  /* The words that break the rules and simply have to be recognised. */
  var SIGHT = [
    { w:'the',  km:'(នាំមុខនាម)' },
    { w:'a',    km:'មួយ' },
    { w:'I',    km:'ខ្ញុំ' },
    { w:'is',   km:'ជា / នៅ' },
    { w:'it',   km:'វា' },
    { w:'and',  km:'និង' },
    { w:'you',  km:'អ្នក' },
    { w:'my',   km:'របស់ខ្ញុំ' },
    { w:'me',   km:'ខ្ញុំ' },
    { w:'we',   km:'យើង' },
    { w:'see',  km:'មើលឃើញ' },
    { w:'go',   km:'ទៅ' },
    { w:'to',   km:'ទៅកាន់' },
    { w:'in',   km:'ក្នុង' },
    { w:'on',   km:'លើ' },
    { w:'up',   km:'ឡើងលើ' },
    { w:'like', km:'ចូលចិត្ត' },
    { w:'look', km:'មើល' },
    { w:'can',  km:'អាច' },
    { w:'yes',  km:'បាទ / ចាស' },
    { w:'no',   km:'ទេ' },
    { w:'this', km:'នេះ' },
    { w:'am',   km:'ជា (ខ្ញុំ)' },
    { w:'have', km:'មាន' }
  ];

  /* ---------------------------------------------------------------- talk
     Said out loud long before it is ever read. `a` is the answer half of a
     pair, so a child can practise both sides with the teacher.            */
  var TALK = [
    { key:'greet', en:'Saying hello', km:'ការស្វាគមន៍', em:'👋', lines:[
      { s:'Hello!',           km:'សួស្តី!',                 em:'👋' },
      { s:'Good morning.',    km:'អរុណសួស្តី។',            em:'🌅' },
      { s:'Good afternoon.',  km:'ទិវាសួស្តី។',            em:'🌤️' },
      { s:'Good night.',      km:'រាត្រីសួស្តី។',          em:'🌙' },
      { s:'Goodbye!',         km:'លាហើយ!',                  em:'👋' },
      { s:'See you tomorrow.',km:'ជួបគ្នាថ្ងៃស្អែក។',      em:'🙂' }
    ]},
    { key:'me', en:'About me', km:'អំពីខ្ញុំ', em:'🧒', lines:[
      { s:"What's your name?", a:'My name is Dara.', km:'តើអ្នកឈ្មោះអ្វី?',      em:'🧒' },
      { s:'How are you?',      a:"I'm fine, thank you.", km:'តើអ្នកសុខសប្បាយទេ?', em:'😊' },
      { s:'How old are you?',  a:'I am five years old.', km:'តើអ្នកអាយុប៉ុន្មាន?', em:'🎂' },
      { s:'Where are you from?', a:'I am from Cambodia.', km:'តើអ្នកមកពីណា?',     em:'🇰🇭' }
    ]},
    { key:'polite', en:'Being kind', km:'ពាក្យសុភាព', em:'💛', lines:[
      { s:'Please.',        km:'សូម។',              em:'🙏' },
      { s:'Thank you.',     km:'អរគុណ។',            em:'💛' },
      { s:"You're welcome.",km:'មិនអីទេ។',          em:'🙂' },
      { s:'Sorry.',         km:'សុំទោស។',           em:'😔' },
      { s:'Excuse me.',     km:'សុំទោស (ហៅគេ)។',    em:'✋' }
    ]},
    { key:'class', en:'In the classroom', km:'ក្នុងថ្នាក់', em:'🏫', lines:[
      { s:'Stand up.',       km:'ក្រោកឈរ។',          em:'🧍' },
      { s:'Sit down.',       km:'អង្គុយចុះ។',        em:'🪑' },
      { s:'Listen, please.', km:'សូមស្តាប់។',        em:'👂' },
      { s:'Look at me.',     km:'មើលមកខ្ញុំ។',       em:'👀' },
      { s:'Open your book.', km:'បើកសៀវភៅ។',        em:'📖' },
      { s:'Line up, please.',km:'សូមតម្រង់ជួរ។',    em:'🚸' }
    ]},
    { key:'say', en:'Little sentences', km:'ប្រយោគខ្លីៗ', em:'💬', lines:[
      { s:'This is my bag.',   km:'នេះជាកាបូបរបស់ខ្ញុំ។', em:'🎒' },
      { s:'I like mangoes.',   km:'ខ្ញុំចូលចិត្តស្វាយ។',  em:'🥭' },
      { s:'I can jump!',       km:'ខ្ញុំអាចលោតបាន!',      em:'🤸' },
      { s:'I have two cats.',  km:'ខ្ញុំមានឆ្មាពីរ។',     em:'🐱' },
      { s:'It is hot today.',  km:'ថ្ងៃនេះក្តៅ។',         em:'🥵' },
      { s:'I am happy.',       km:'ខ្ញុំសប្បាយចិត្ត។',    em:'😄' }
    ]}
  ];

  /* Said to the child after a right answer. Kept short and warm, and rotated
     so the tenth question does not sound like the first. */
  var PRAISE = [
    { s:'Yes! Well done!',  em:'🎉' },
    { s:'Great job!',       em:'⭐' },
    { s:'Perfect!',         em:'🌟' },
    { s:"That's right!",    em:'👏' },
    { s:'Very good!',       em:'😄' },
    { s:'Excellent!',       em:'🏆' },
    { s:'You did it!',      em:'🎈' },
    { s:'Clever!',          em:'💡' }
  ];

  /* Never "wrong". A four-year-old who feels told off stops playing. */
  var NUDGE = [
    { s:'Try again.',       em:'🙂' },
    { s:'Nearly! Try again.',em:'💪' },
    { s:'Have another go.', em:'🤗' },
    { s:'Listen again.',    em:'👂' }
  ];

  global.KG_BANK = {
    abc: ABC,
    numbers: NUMBERS,
    counters: COUNTERS,
    colours: COLOURS,
    shapes: SHAPES,
    themes: THEMES,
    families: FAMILIES,
    sight: SIGHT,
    talk: TALK,
    praise: PRAISE,
    nudge: NUDGE
  };
})(window);
