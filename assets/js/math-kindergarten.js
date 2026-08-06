/* Alpha Academy Cambodia — Maths for Kindergarten
   ---------------------------------------------------------------------------
   Six teaching modules and eight games. Everything this page has in common
   with the English and Chinese kindergarten pages — the voice, the contents
   rail, the sound bar, the game round, the confetti — lives in
   assets/js/kids-core.js; every fact it teaches lives in
   assets/js/math-kg-bank.js. This file is only the join: it draws the panels
   out of the bank and hands the games to the engine.

   The page copy is bilingual here as {en,km} pairs, the same way the
   probability bank carries both languages side by side, so the two can never
   drift apart. Only the surrounding chrome uses data-i18n keys.

   WHY THE VOICE SPEAKS ENGLISH ON A KHMER PAGE. It reads the numbers out as
   "one, two, three" because a Khmer speech voice is on almost no phone in
   Cambodia while an English one is on nearly all of them, and a maths page
   that cannot count out loud is a worksheet. Everything the voice says is
   also printed in Khmer underneath, and the maths itself — four dots, ៤,
   4 — does not need either language to be true.                             */
(function () {
  'use strict';

  var B = window.MKG_BANK, K = window.KidsCore;
  if (!B || !K) { return; }

  var t = K.t, gloss = K.gloss, esc = K.esc, clr = K.clr, tip = K.tip;
  var shuffle = K.shuffle, pick = K.pick, others = K.others;

  /* ------------------------------------------------------------ the copy */
  var T = {
    tabs: {
      count: { en:'Numbers',  km:'លេខ',        em:'🔢', c:'var(--kg-orange)' },
      shape: { en:'Shapes',   km:'រាង',        em:'🔷', c:'var(--kg-purple)' },
      size:  { en:'Compare',  km:'ប្រៀបធៀប',   em:'📏', c:'var(--kg-green)' },
      add:   { en:'Adding',   km:'បូក',        em:'➕', c:'var(--kg-blue)' },
      sub:   { en:'Taking away', km:'ដក',      em:'➖', c:'var(--kg-red)' },
      world: { en:'Day &amp; money', km:'ថ្ងៃ និងលុយ', em:'🕐', c:'var(--kg-pink)' },
      play:  { en:'Play!',    km:'លេងល្បែង!',  em:'🎮', c:'var(--kg-yellow)' }
    },

    num: {
      h: { en:'Numbers 0 to 20', km:'លេខ ០ ដល់ ២០' },
      p: { en:'Every card shows the same number three ways: the digit, the Khmer numeral, and that many dots in a frame of ten. Tap a card to hear it. The dots are the important part — they are what turns a squiggle into an amount.',
           km:'កាតនីមួយៗបង្ហាញលេខតែមួយតាមបីរបៀប៖ លេខអារ៉ាប់ លេខខ្មែរ និងចំនុចប៉ុណ្ណឹងក្នុងក្របខ័ណ្ឌដប់។ ចុចលើកាតដើម្បីស្តាប់។ ចំនុចជាផ្នែកសំខាន់បំផុត — វាធ្វើឲ្យសញ្ញាមួយក្លាយជាចំនួនពិត។' },
      tip:{ en:'<b>For the grown-up:</b> chanting “one two three…” is not yet counting. Ask “how many?”, and make the child touch each thing as they say the number — the last number said is the answer. That single habit is the whole of early counting.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> ការសូត្រ “one two three…” មិនទាន់ជាការរាប់ទេ។ សូមសួរថា “ប៉ុន្មាន?” ហើយឲ្យកូនប៉ះវត្ថុម្ដងមួយៗពេលនិយាយលេខ — លេខចុងក្រោយដែលនិយាយគឺជាចម្លើយ។ ទម្លាប់តែមួយនេះហើយជាមូលដ្ឋានទាំងស្រុងនៃការរាប់។' },
      d10:{ en:'Count to 10 with me', km:'រាប់ដល់ ១០ ជាមួយខ្ញុំ' },
      d20:{ en:'Count to 20', km:'រាប់ដល់ ២០' },
      dbk:{ en:'Count backwards from 10', km:'រាប់ថយក្រោយពី ១០' },
      lh: { en:'The number line', km:'បន្ទាត់លេខ' },
      lp: { en:'The same numbers again, but now in a row where each one is one step bigger than the last. Tap along it. This row is where adding and taking away will happen next year, so a child who can walk it forwards and backwards is already halfway there.',
            km:'លេខដដែល តែឥឡូវរៀបជាជួរ ដែលលេខនីមួយៗធំជាងលេខមុនមួយជំហាន។ ចុចដើរតាមវា។ ជួរនេះហើយជាកន្លែងដែលការបូក និងការដកនឹងកើតឡើងឆ្នាំក្រោយ ដូច្នេះកូនណាដែលដើរទៅមុខ និងថយក្រោយបានលើវា គឺបានពាក់កណ្តាលផ្លូវហើយ។' },
      ch: { en:'Count the pictures', km:'រាប់រូបភាព' },
      cp: { en:'Tap a group and count along out loud — one, two, three — then hear how many there were altogether.',
            km:'ចុចលើក្រុមមួយ រួចរាប់តាមឮៗ — មួយ ពីរ បី — បន្ទាប់មកស្តាប់ថាមានទាំងអស់ប៉ុន្មាន។' },
      cgo:{ en:'Tap to count them', km:'ចុចដើម្បីរាប់' }
    },

    shp: {
      h: { en:'Flat shapes', km:'រាងសំប៉ែត' },
      p: { en:'Tap a shape to hear its name. Every card says how many sides it has, because that is what actually makes it that shape — a triangle is not “the pointy one”, it is the one with three sides.',
           km:'ចុចលើរាងដើម្បីស្តាប់ឈ្មោះ។ កាតនីមួយៗប្រាប់ចំនួនជ្រុង ព្រោះនោះហើយជាអ្វីដែលធ្វើឲ្យវាក្លាយជារាងនោះ — ត្រីកោណមិនមែនជា “រាងស្រួច” ទេ គឺជារាងដែលមានបីជ្រុង។' },
      tip:{ en:'<b>For the grown-up:</b> go and find the shapes in the room — a plate is a circle, a door is a rectangle, a roof is a triangle. Shapes learnt off a screen alone stay on the screen.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមទៅរករាងទាំងនេះក្នុងបន្ទប់ — ចានជារង្វង់ ទ្វារជាចតុកោណកែង ដំបូលជាត្រីកោណ។ រាងដែលរៀនតែលើអេក្រង់ នៅតែជាប់លើអេក្រង់។' },
      sh: { en:'Solid shapes', km:'រាងបីវិមាត្រ' },
      sp: { en:'The shapes you can pick up. A child meets a cube as a dice long before they meet it as a cube, so each one is named by the thing it really is.',
            km:'រាងដែលអាចយកមកកាន់បាន។ កូនស្គាល់គូបជាគ្រាប់ឡុកឡាក់ យូរណាស់មុនស្គាល់វាជាគូប ដូច្នេះរាងនីមួយៗត្រូវបានដាក់ឈ្មោះតាមវត្ថុពិតរបស់វា។' },
      ph: { en:'Patterns', km:'លំនាំ' },
      pp: { en:'A pattern is a bit that repeats. Tap a row to hear it read out and to see what comes next. Say the row out loud with the child — red, blue, red, blue — and let them guess before the answer appears.',
            km:'លំនាំគឺជាផ្នែកមួយដែលកើតឡើងម្តងហើយម្តងទៀត។ ចុចលើជួរដើម្បីស្តាប់ និងឃើញអ្វីដែលមកបន្ទាប់។ សូមអានជួរនោះឮៗជាមួយកូន — ក្រហម ខៀវ ក្រហម ខៀវ — ហើយឲ្យគេទាយមុនចម្លើយលេចឡើង។' },
      pq: { en:'what comes next?', km:'អ្វីមកបន្ទាប់?' }
    },

    cmp: {
      h: { en:'Opposites', km:'ពាក្យផ្ទុយគ្នា' },
      p: { en:'Measuring starts here, long before a ruler. Tap either side of a card to hear the word. Notice that neither word means anything on its own — nothing is “big”, it is only ever bigger than something else.',
           km:'ការវាស់វែងចាប់ផ្តើមពីទីនេះ យូរណាស់មុនប្រើបន្ទាត់។ ចុចលើផ្នែកណាមួយនៃកាតដើម្បីស្តាប់ពាក្យ។ សូមកត់សម្គាល់ថា ពាក្យទាំងពីរគ្មានន័យដោយឡែកទេ — គ្មានអ្វី “ធំ” ទេ វាគ្រាន់តែធំជាងអ្វីមួយផ្សេងទៀត។' },
      mh: { en:'More, fewer, the same', km:'ច្រើនជាង តិចជាង ស្មើគ្នា' },
      mp: { en:'Two groups of the same thing, so the only difference is how many. Tap the circle in the middle to hear which side has more. A child can see “more” long before they can count it — that is the point of these.',
            km:'ក្រុមពីរនៃវត្ថុដូចគ្នា ដូច្នេះភាពខុសគ្នាតែមួយគត់គឺចំនួន។ ចុចលើរង្វង់នៅចំកណ្តាលដើម្បីស្តាប់ថាខាងណាមានច្រើនជាង។ កូនអាចមើលឃើញ “ច្រើនជាង” យូរណាស់មុនពេលរាប់វាបាន — នោះហើយជាគោលបំណងនៃលំហាត់នេះ។' },
      hh: { en:'Measuring with cubes', km:'វាស់ដោយប្រើគូប' },
      hp: { en:'Before a ruler comes this: how many cubes long is it? The cubes must all be the same size and must not leave gaps. That idea — one unit, repeated — is the whole of measurement, and it is what a ruler is.',
            km:'មុនប្រើបន្ទាត់ គឺមកដល់សំណួរនេះ៖ វែងប៉ុន្មានគូប? គូបទាំងអស់ត្រូវតែមានទំហំដូចគ្នា និងមិនត្រូវទុកចន្លោះទេ។ គំនិតនោះ — ឯកតាមួយ ធ្វើម្តងហើយម្តងទៀត — គឺជាការវាស់វែងទាំងស្រុង ហើយនោះហើយជាអ្វីដែលបន្ទាត់មួយជា។' },
      tip:{ en:'<b>For the grown-up:</b> use the words all day and never as a lesson — “bring me the big spoon”, “whose glass is fuller?”. Compared things must be side by side to be compared at all.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមប្រើពាក្យទាំងនេះពេញមួយថ្ងៃ មិនមែនជាមេរៀនទេ — “យកស្លាបព្រាធំមកឲ្យម៉ាក់”, “កែវអ្នកណាពេញជាង?”។ វត្ថុដែលត្រូវប្រៀបធៀប ត្រូវដាក់ក្បែរគ្នា ទើបប្រៀបធៀបបាន។' },
      more:{ en:'more', km:'ច្រើនជាង' },
      few: { en:'fewer', km:'តិចជាង' },
      same:{ en:'the same', km:'ស្មើគ្នា' },
      cubes:{ en:'cubes long', km:'គូបវែង' }
    },

    add: {
      h: { en:'Adding is putting together', km:'ការបូកគឺការដាក់បញ្ចូលគ្នា' },
      p: { en:'Two groups pushed into one. Tap a row to hear the whole sentence — three apples and two apples make five apples. The pictures stay next to the numbers on purpose: a child who only ever sees “3 + 2 = 5” has learnt a ritual, not an amount.',
           km:'ក្រុមពីររុញចូលគ្នាទៅជាមួយ។ ចុចលើជួរដើម្បីស្តាប់ប្រយោគទាំងមូល — ផ្លែប៉ោមបី និងផ្លែប៉ោមពីរ ស្មើផ្លែប៉ោមប្រាំ។ រូបភាពនៅជាប់នឹងលេខដោយចេតនា៖ កូនដែលឃើញតែ “3 + 2 = 5” បានរៀនតែពិធីមួយ មិនមែនចំនួនទេ។' },
      bh: { en:'The pairs that make 5', km:'គូដែលបង្កើតបាន ៥' },
      bp: { en:'The same total, split every way it can be split. These are worth knowing by heart — the whole of next year’s arithmetic leans on them.',
            km:'ចំនួនសរុបដដែល តែបំបែកគ្រប់របៀបដែលអាចបំបែកបាន។ គួរចេះទាំងនេះដោយចិត្ត — គណិតវិទ្យាឆ្នាំក្រោយទាំងមូលពឹងលើវា។' },
      b0h:{ en:'The pairs that make 10', km:'គូដែលបង្កើតបាន ១០' },
      b0p:{ en:'Ten is the number everything else is built on, because we have ten fingers and write in tens. Learn these eleven pairs and adding gets much easier.',
            km:'ដប់ជាលេខដែលអ្វីៗទាំងអស់សាងឡើងលើវា ព្រោះយើងមានម្រាមដៃដប់ និងសរសេរជាដប់។ រៀនគូទាំង ១១ នេះ នោះការបូកនឹងកាន់តែងាយ។' },
      dh: { en:'Doubles', km:'ចំនួនទ្វេ' },
      dp: { en:'The same number twice. Children remember doubles faster than any other fact, and then get one‑more‑than‑a‑double free: if 4 and 4 is 8, then 4 and 5 is 9.',
            km:'លេខដដែលពីរដង។ កូនចាំចំនួនទ្វេលឿនជាងចំណេះផ្សេងទៀត ហើយទទួលបាន “ទ្វេបូកមួយ” ដោយឥតគិតថ្លៃ៖ បើ ៤ និង ៤ ស្មើ ៨ នោះ ៤ និង ៥ ស្មើ ៩។' },
      ah: { en:'Every sum up to ten', km:'ការបូកទាំងអស់ដល់ដប់' },
      ap: { en:'The complete table, in families. Do one family a week — not the lot in an afternoon. Tap any row to hear it.',
            km:'តារាងពេញលេញ រៀបជាគ្រួសារ។ សូមធ្វើមួយគ្រួសារក្នុងមួយសប្តាហ៍ — មិនមែនទាំងអស់ក្នុងមួយរសៀលទេ។ ចុចជួរណាមួយដើម្បីស្តាប់។' },
      tip:{ en:'<b>For the grown-up:</b> let the child count on their fingers for as long as they need to. Fingers are not cheating — they are the first number line, and children put them away by themselves once the facts are known.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមអនុញ្ញាតឲ្យកូនរាប់ម្រាមដៃរហូតដល់ពេលដែលគេលែងត្រូវការ។ ម្រាមដៃមិនមែនជាការបន្លំទេ — វាជាបន្ទាត់លេខដំបូង ហើយកូននឹងឈប់ប្រើវាដោយខ្លួនឯង ពេលចេះចាំហើយ។' }
    },

    sub: {
      h: { en:'Taking away is what is left', km:'ការដកគឺអ្វីដែលនៅសល់' },
      p: { en:'Start with a group, take some away, count what is left. The ones taken away are crossed out rather than removed, so the child can still see the whole they started with. Tap a row to hear it.',
           km:'ចាប់ផ្តើមពីក្រុមមួយ យកចេញខ្លះ រួចរាប់អ្វីដែលនៅសល់។ អ្វីដែលយកចេញត្រូវបានគូសបន្ទាត់ឆូត មិនមែនលុបចោលទេ ដូច្នេះកូននៅតែឃើញចំនួនដើម។ ចុចលើជួរដើម្បីស្តាប់។' },
      mh: { en:'The missing part', km:'ផ្នែកដែលបាត់' },
      mp: { en:'The whole is known and one part is known — what is the other part? This is the same fact as taking away, seen from the other end, and it is the one that makes subtraction finally click. Tap a card to show the answer.',
            km:'ដឹងចំនួនសរុប និងដឹងផ្នែកមួយ — ចុះផ្នែកមួយទៀតជាអ្វី? នេះជាចំណេះដដែលនឹងការដក តែមើលពីម្ខាងទៀត ហើយវាជាអ្វីដែលធ្វើឲ្យការដកយល់ច្បាស់។ ចុចលើកាតដើម្បីបង្ហាញចម្លើយ។' },
      ah: { en:'Every take-away from ten', km:'ការដកទាំងអស់ក្នុងដប់' },
      ap: { en:'The complete table, in families, the same way as the adding one. Notice the last row of every family: take all of them away and you have zero — that is what zero is for.',
            km:'តារាងពេញលេញ រៀបជាគ្រួសារ ដូចតារាងបូកដែរ។ សូមកត់សម្គាល់ជួរចុងក្រោយនៃគ្រប់គ្រួសារ៖ យកចេញទាំងអស់ នោះនៅសល់សូន្យ — នោះហើយជាតួនាទីរបស់សូន្យ។' },
      tip:{ en:'<b>For the grown-up:</b> act it out with real things — five biscuits, eat two, how many now? Subtraction done with hands and food is understood; subtraction done on paper first is memorised and then forgotten.',
            km:'<b>សម្រាប់មាតាបិតា៖</b> សូមធ្វើវាជាក់ស្តែងជាមួយវត្ថុពិត — នំប៊ីសស្គីតប្រាំ ញ៉ាំពីរ នៅសល់ប៉ុន្មាន? ការដកដែលធ្វើដោយដៃ និងអាហារ គឺយល់បាន; ការដកដែលធ្វើលើក្រដាសមុនគេ គឺទន្ទេញ រួចភ្លេច។' },
      show:{ en:'show', km:'បង្ហាញ' }
    },

    wld: {
      dh: { en:'The seven days', km:'ថ្ងៃទាំងប្រាំពីរ' },
      dp: { en:'Seven days, and then they start again. Tap a day to hear it. Ask every morning which day it is today, which was yesterday and which comes tomorrow — that is how the order sticks.',
            km:'ថ្ងៃប្រាំពីរ រួចចាប់ផ្តើមឡើងវិញ។ ចុចលើថ្ងៃដើម្បីស្តាប់។ សូមសួររាល់ព្រឹកថាថ្ងៃនេះថ្ងៃអ្វី ម្សិលមិញថ្ងៃអ្វី និងស្អែកថ្ងៃអ្វី — នោះហើយជារបៀបដែលលំដាប់ចាំបាន។' },
      ch: { en:'O’clock', km:'ម៉ោងគត់' },
      cp: { en:'Only the hours, and only on the hour. Half past and quarter to belong to next year; at this age the win is matching the short hand to a number. Tap a clock to hear the time.',
            km:'តែម៉ោងគត់ប៉ុណ្ណោះ។ កន្លះម៉ោង និងម៉ោងខ្វះ ជារបស់ឆ្នាំក្រោយ; នៅអាយុនេះ ជោគជ័យគឺការផ្គូផ្គងទ្រនិចខ្លីទៅនឹងលេខមួយ។ ចុចលើនាឡិកាដើម្បីស្តាប់ម៉ោង។' },
      ph: { en:'When things happen', km:'ពេលវេលានៃថ្ងៃ' },
      mh: { en:'Cambodian riel', km:'ប្រាក់រៀល' },
      mp: { en:'The notes a child sees handed over at a stall, with the amount written both ways. Tap a note to hear it. Money is the reason counting matters, and the first big numbers a Cambodian child ever reads are on these.',
            km:'ក្រដាសប្រាក់ដែលកូនឃើញគេប្រគល់គ្នានៅតូបលក់ ជាមួយចំនួនសរសេរទាំងពីរបែប។ ចុចលើក្រដាសប្រាក់ដើម្បីស្តាប់។ លុយជាហេតុផលដែលធ្វើឲ្យការរាប់មានន័យ ហើយលេខធំៗដំបូងបំផុតដែលកូនខ្មែរអាន គឺនៅលើវា។' },
      mtip:{ en:'<b>For the grown-up:</b> about 4,000 riel is one US dollar, so a 4,000‑riel price and a one‑dollar price are the same price. Let the child hand over the note and take the change — nothing on this page teaches money as well as that does.',
             km:'<b>សម្រាប់មាតាបិតា៖</b> ប្រហែល ៤,០០០ រៀល ស្មើមួយដុល្លារ ដូច្នេះតម្លៃ ៤,០០០ រៀល និងតម្លៃមួយដុល្លារ គឺជាតម្លៃដូចគ្នា។ សូមឲ្យកូនប្រគល់ក្រដាសប្រាក់ និងទទួលលុយអាប់ដោយខ្លួនឯង — គ្មានអ្វីក្នុងទំព័រនេះបង្រៀនរឿងលុយបានល្អដូចនោះទេ។' },
      ph2:{ en:'Where things are', km:'ទីតាំងវត្ថុ' },
      pp2:{ en:'In, on, under, behind, in front of, next to, between. These are the words a maths question will use before it ever uses a number, so a child who does not have them cannot start. Tap a picture to hear the sentence.',
            km:'ក្នុង លើ ក្រោម ខាងក្រោយ ខាងមុខ ក្បែរ រវាង។ ទាំងនេះជាពាក្យដែលសំណួរគណិតវិទ្យាប្រើ មុននឹងប្រើលេខផង ដូច្នេះកូនដែលមិនស្គាល់វា មិនអាចចាប់ផ្តើមបានទេ។ ចុចលើរូបភាពដើម្បីស្តាប់ប្រយោគ។' },
      oh: { en:'First, second, third', km:'ទីមួយ ទីពីរ ទីបី' },
      op: { en:'Counting says how many; this says which one. They are different jobs, and children mix them up for a while — that is normal. Tap to hear.',
            km:'ការរាប់ប្រាប់ថាមានប៉ុន្មាន; នេះប្រាប់ថាមួយណា។ វាជាតួនាទីខុសគ្នា ហើយកូនច្រឡំវាមួយរយៈ — នោះជារឿងធម្មតា។ ចុចដើម្បីស្តាប់។' }
    },

    play: {
      p: { en:'Eight games, ten questions each. Nothing is ever marked wrong — a wrong tap just says “try again”, so every round finishes happily. A star is given for every question answered right the first time.',
           km:'ល្បែង ៨ ប្រភេទ មួយៗមាន ១០ សំណួរ។ គ្មានការកត់ថាខុសទេ — បើចុចខុស វានឹងនិយាយថា “ព្យាយាមម្ដងទៀត” ដូច្នេះគ្រប់ជុំបញ្ចប់ដោយរីករាយ។ ផ្កាយមួយត្រូវបានផ្តល់ជូនរាល់សំណួរដែលឆ្លើយត្រូវលើកទីមួយ។' }
    }
  };

  /* ------------------------------------------------------------- helpers */
  var N = B.numbers;                       /* N[7] is seven — index is value */

  function heap(em, n) {
    var s = '';
    for (var i = 0; i < n; i++) { s += em; }
    return s;
  }

  /* A ten-frame, or two of them past ten. Five across and two down, which is
     why we group in fives: six is seen as "a full row and one more" rather
     than counted from scratch every time. */
  function frames(n) {
    var out = '', left = n, blocks = n > 10 ? 2 : 1;
    for (var b = 0; b < blocks; b++) {
      var fill = Math.min(10, left);
      left -= fill;
      out += '<span class="mk-frame' + (n === 0 ? ' is-zero' : '') + '">';
      for (var i = 0; i < 10; i++) { out += '<i' + (i < fill ? ' class="on"' : '') + '></i>'; }
      out += '</span>';
    }
    return '<span class="mk-frames">' + out + '</span>';
  }

  /* ==================================================================== 1
     NUMBERS                                                                */
  function panelCount() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔢</span>' + t(T.num.h) + '</h3>' +
            '<p class="say">' + t(T.num.p) + '</p>' + tip(T.num.tip) +
            '<div class="kg-drill">' +
              '<button type="button" data-countto="10">🔟 ' + t(T.num.d10) + '</button>' +
              '<button type="button" data-countto="20">2️⃣0️⃣ ' + t(T.num.d20) + '</button>' +
              '<button type="button" data-countto="10" data-back="1">🔙 ' + t(T.num.dbk) + '</button>' +
            '</div>' +
            '<div class="mk-nums">';
    N.forEach(function (o, i) {
      h += '<button class="mk-num" type="button" data-n="' + o.n + '" style="--c:' + clr(i) + '" data-say="' + esc(o.w) + '">' +
             '<span class="row"><span class="d">' + o.n + '</span><span class="kn">' + o.kn + '</span></span>' +
             frames(o.n) +
             '<span class="w">' + esc(o.w) + '</span>' +
             '<span class="km">' + esc(gloss(o)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📈</span>' + t(T.num.lh) + '</h3>' +
         '<p class="say">' + t(T.num.lp) + '</p>' +
         '<div class="mk-linewrap"><div class="mk-line">';
    N.forEach(function (o, i) {
      h += '<button class="mk-tick" type="button" data-n="' + o.n + '" style="--c:' + clr(i) + '" data-say="' + esc(o.w) + '">' +
             '<span class="d">' + o.n + '</span><span class="kn">' + o.kn + '</span>' +
           '</button>';
    });
    h += '</div></div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🍎</span>' + t(T.num.ch) + '</h3>' +
         '<p class="say">' + t(T.num.cp) + '</p><div class="mk-sets">';
    B.countsets.forEach(function (s, i) {
      h += '<button class="mk-set" type="button" style="--c:' + clr(i) + '" ' +
             'data-countset="' + s.n + '" data-thing="' + esc(s.w) + '">' +
             '<span class="heap" aria-hidden="true">' + heap(s.em, s.n) + '</span>' +
             '<span class="cap"><span class="n">' + s.n + '</span>' +
               '<span class="w">' + esc(s.w) + '</span>' +
               '<span class="km">' + esc(gloss(s)) + '</span></span>' +
             '<span class="go">👆 ' + t(T.num.cgo) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 2
     SHAPES                                                                 */
  function panelShape() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔷</span>' + t(T.shp.h) + '</h3>' +
            '<p class="say">' + t(T.shp.p) + '</p>' + tip(T.shp.tip) + '<div class="kg-shapes">';
    B.shapes.forEach(function (s, i) {
      h += '<button class="kg-shape" type="button" style="--c:' + clr(i) + '" data-say="' + esc(s.w) + '">' +
             '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="' + s.d + '"/></svg>' +
             '<span class="w">' + esc(s.w) + '</span>' +
             '<span class="km">' + esc(gloss(s)) + '</span>' +
             '<span class="mk-sides">' + esc(t(s.note)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🎲</span>' + t(T.shp.sh) + '</h3>' +
         '<p class="say">' + t(T.shp.sp) + '</p><div class="mk-solids">';
    B.solids.forEach(function (s, i) {
      h += '<button class="mk-solid" type="button" style="--c:' + clr(i) + '" data-say="' + esc(s.w) + '">' +
             '<span class="em" aria-hidden="true">' + s.em + '</span>' +
             '<span class="w">' + esc(s.w) + '</span>' +
             '<span class="km">' + esc(gloss(s)) + '</span>' +
             '<span class="like">' + esc(t(s.like)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔁</span>' + t(T.shp.ph) + '</h3>' +
         '<p class="say">' + t(T.shp.pp) + '</p><div class="mk-pats">';
    B.patterns.forEach(function (p, i) {
      /* Two full repeats and then the start of a third, which is the least a
         child can see a pattern in and still have something to predict. */
      var seq = p.unit.concat(p.unit), next = p.unit[0];
      h += '<button class="mk-pat" type="button" style="--c:' + clr(i) + '" data-pattern="' + esc(p.unit.join('')) + '">' +
             '<span class="tag">' + p.name + '</span>' +
             '<span class="seq" aria-hidden="true">' + seq.join('') + '<b>…</b></span>' +
             '<span class="q" aria-hidden="true" title="' + esc(t(T.shp.pq)) + '">' + next + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 3
     COMPARING                                                              */
  function panelSize() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📏</span>' + t(T.cmp.h) + '</h3>' +
            '<p class="say">' + t(T.cmp.p) + '</p>' + tip(T.cmp.tip) + '<div class="mk-pairs">';
    B.opposites.forEach(function (o, i) {
      h += '<div class="mk-pair" style="--c:' + clr(i) + '">' +
             '<span class="ttl">' + esc(t(o.t)) + '</span><div class="two">' +
             ['a', 'b'].map(function (side) {
               var x = o[side];
               return '<button class="' + side + '" type="button" data-say="' + esc(x.w) + '">' +
                        '<span class="em" aria-hidden="true">' + x.em + '</span>' +
                        '<span class="w">' + esc(x.w) + '</span>' +
                        '<span class="km">' + esc(gloss(x)) + '</span>' +
                      '</button>';
             }).join('') +
           '</div></div>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">⚖️</span>' + t(T.cmp.mh) + '</h3>' +
         '<p class="say">' + t(T.cmp.mp) + '</p><div class="mk-cmps">';
    B.compares.forEach(function (c, i) {
      var sign = c.l > c.r ? '&gt;' : c.l < c.r ? '&lt;' : '=';
      var word = c.l > c.r ? T.cmp.more : c.l < c.r ? T.cmp.few : T.cmp.same;
      var say  = c.l === c.r
        ? N[c.l].w + ' and ' + N[c.r].w + ' are the same.'
        : N[c.l].w + ' is ' + (c.l > c.r ? 'more' : 'fewer') + ' than ' + N[c.r].w + '.';
      h += '<div class="mk-cmp" style="--c:' + clr(i) + '">' +
             '<span class="heap" aria-hidden="true">' + heap(c.em, c.l) + '<b>' + c.l + '</b></span>' +
             '<button class="sign" type="button" data-say="' + esc(say) + '">' + sign +
               '<small>' + esc(t(word)) + '</small></button>' +
             '<span class="heap" aria-hidden="true">' + heap(c.em, c.r) + '<b>' + c.r + '</b></span>' +
           '</div>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🧊</span>' + t(T.cmp.hh) + '</h3>' +
         '<p class="say">' + t(T.cmp.hp) + '</p><div class="mk-meas">';
    B.measures.forEach(function (m, i) {
      var cubes = '';
      for (var k = 0; k < m.n; k++) { cubes += '<i></i>'; }
      h += '<button class="mk-mrow" type="button" style="--c:' + clr(i) + '" ' +
             'data-say="' + esc(m.w + ' is ' + N[m.n].w + ' cubes long.') + '">' +
             '<span class="em" aria-hidden="true">' + m.em + '</span>' +
             '<span class="cubes" aria-hidden="true">' + cubes + '</span>' +
             '<span class="km">' + esc(gloss(m)) + '</span>' +
             '<span class="n">' + m.n + ' ' + esc(t(T.cmp.cubes)) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 4
     ADDING
     A row is the sentence, not the sum: the things, the sign, the things,
     then the answer. `gone` marks the crossed-out half on the take-away
     page, which is the only difference between the two rows.               */
  function sumRow(a, b, em, colour, minus) {
    var total = minus ? a - b : a + b;
    var say = minus
      ? N[a].w + ' take away ' + N[b].w + ' equals ' + N[total].w + '.'
      : N[a].w + ' plus ' + N[b].w + ' equals ' + N[total].w + '.';
    return '<button class="mk-sum" type="button" style="--c:' + colour + '" data-say="' + esc(say) + '">' +
             '<span class="heap" aria-hidden="true">' + heap(em, minus ? a - b : a) + '</span>' +
             (minus
               ? '<span class="heap gone" aria-hidden="true">' + heap(em, b) + '</span>'
               : '<span class="op" aria-hidden="true">+</span><span class="heap" aria-hidden="true">' + heap(em, b) + '</span>') +
             '<span class="eq">' + a + (minus ? ' − ' : ' + ') + b +
               ' = <span class="ans">' + total + '</span></span>' +
           '</button>';
  }

  function bondCard(whole, part, colour, hide) {
    var other = whole - part;
    var say = N[part].w + ' and ' + N[other].w + ' make ' + N[whole].w + '.';
    return '<button class="mk-bond" type="button" style="--c:' + colour + '" ' +
             (hide ? 'data-reveal="' + other + '" ' : '') +
             'data-say="' + esc(say) + '">' +
             '<span class="whole">' + whole + '</span>' +
             '<span class="legs" aria-hidden="true"></span>' +
             '<span class="parts"><span>' + part + '</span>' +
               '<span class="other">' + (hide ? '?' : other) + '</span></span>' +
           '</button>';
  }

  function panelAdd() {
    var em = B.sumems;

    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">➕</span>' + t(T.add.h) + '</h3>' +
            '<p class="say">' + t(T.add.p) + '</p>' + tip(T.add.tip) + '<div class="mk-sums">';
    [[2,1],[3,2],[4,1],[3,3],[5,2],[4,4]].forEach(function (p, i) {
      h += sumRow(p[0], p[1], em[i % em.length], clr(i), false);
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🖐️</span>' + t(T.add.bh) + '</h3>' +
         '<p class="say">' + t(T.add.bp) + '</p><div class="mk-bonds">';
    B.bonds5.forEach(function (p, i) { h += bondCard(5, p[0], clr(i), false); });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🔟</span>' + t(T.add.b0h) + '</h3>' +
         '<p class="say">' + t(T.add.b0p) + '</p><div class="mk-bonds">';
    B.bonds10.forEach(function (p, i) { h += bondCard(10, p[0], clr(i), false); });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">👯</span>' + t(T.add.dh) + '</h3>' +
         '<p class="say">' + t(T.add.dp) + '</p><div class="mk-sums">';
    B.doubles.forEach(function (d, i) { h += sumRow(d, d, em[i % em.length], clr(i), false); });
    h += '</div></section>';

    /* The whole table, in families of first number. Reuses .kg-fam from
       kids.css — a word family and a number family are the same furniture. */
    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📚</span>' + t(T.add.ah) + '</h3>' +
         '<p class="say">' + t(T.add.ap) + '</p><div class="kg-fams">';
    for (var a = 1; a <= 9; a++) {
      h += '<div class="kg-fam" style="--c:' + clr(a - 1) + '"><span class="end">' + a + ' + …</span><div class="rows">';
      for (var b = 1; a + b <= 10; b++) { h += sumRow(a, b, em[(a - 1) % em.length], clr(a - 1), false); }
      h += '</div></div>';
    }
    return h + '</div></section>';
  }

  /* ==================================================================== 5
     TAKING AWAY                                                            */
  function panelSub() {
    var em = B.sumems;

    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">➖</span>' + t(T.sub.h) + '</h3>' +
            '<p class="say">' + t(T.sub.p) + '</p>' + tip(T.sub.tip) + '<div class="mk-sums">';
    [[3,1],[5,2],[4,4],[6,3],[8,5],[10,4]].forEach(function (p, i) {
      h += sumRow(p[0], p[1], em[i % em.length], clr(i), true);
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🕵️</span>' + t(T.sub.mh) + '</h3>' +
         '<p class="say">' + t(T.sub.mp) + '</p><div class="mk-bonds">';
    [[5,1],[5,3],[6,2],[7,4],[8,3],[9,5],[10,6],[10,2]].forEach(function (p, i) {
      h += bondCard(p[0], p[1], clr(i), true);
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📚</span>' + t(T.sub.ah) + '</h3>' +
         '<p class="say">' + t(T.sub.ap) + '</p><div class="kg-fams">';
    for (var a = 2; a <= 10; a++) {
      h += '<div class="kg-fam" style="--c:' + clr(a - 2) + '"><span class="end">' + a + ' − …</span><div class="rows">';
      for (var b = 1; b <= a; b++) { h += sumRow(a, b, em[(a - 2) % em.length], clr(a - 2), true); }
      h += '</div></div>';
    }
    return h + '</div></section>';
  }

  /* ==================================================================== 6
     THE DAY, MONEY AND PLACE                                               */
  function scene(p) {
    if (p.pos === 'between') {
      return '<span class="mk-scene is-between"><span class="pair" aria-hidden="true">' +
               '<span class="box">📦</span><span class="cat">🐱</span><span class="box">📦</span>' +
             '</span></span>';
    }
    return '<span class="mk-scene is-' + p.pos + '" aria-hidden="true">' +
             '<span class="box">📦</span><span class="cat">🐱</span>' +
           '</span>';
  }

  function panelWorld() {
    var h = '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📅</span>' + t(T.wld.dh) + '</h3>' +
            '<p class="say">' + t(T.wld.dp) + '</p><div class="mk-days">';
    B.days.forEach(function (d, i) {
      h += '<button class="mk-day" type="button" style="--c:' + clr(i) + '" data-say="' + esc(d.w) + '">' +
             '<span class="em" aria-hidden="true">' + d.em + '</span>' +
             '<span class="w">' + esc(d.w) + '</span>' +
             '<span class="km">' + esc(gloss(d)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🕐</span>' + t(T.wld.ch) + '</h3>' +
         '<p class="say">' + t(T.wld.cp) + '</p><div class="mk-clocks">';
    B.clocks.forEach(function (c, i) {
      h += '<button class="mk-clock" type="button" style="--c:' + clr(i) + '" ' +
             'data-say="' + esc(N[c.h].w + " o'clock") + '">' +
             '<span class="em" aria-hidden="true">' + c.em + '</span>' +
             '<span class="w">' + c.h + " o'clock</span>" +
             '<span class="km">ម៉ោង ' + N[c.h].kn + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🌗</span>' + t(T.wld.ph) + '</h3>' +
         '<div class="mk-parts">';
    B.dayparts.forEach(function (d, i) {
      h += '<button class="mk-part" type="button" style="--c:' + clr(i) + '" data-say="' + esc(t(d.line)) + '">' +
             '<span class="em" aria-hidden="true">' + d.em + '</span>' +
             '<span><span class="w">' + esc(d.w) + '</span>' +
               '<span class="km">' + esc(gloss(d)) + '</span></span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">💵</span>' + t(T.wld.mh) + '</h3>' +
         '<p class="say">' + t(T.wld.mp) + '</p>' + tip(T.wld.mtip) + '<div class="mk-money">';
    B.money.forEach(function (m) {
      h += '<button class="mk-note" type="button" style="--nc:' + m.c + '" data-say="' + esc(m.w) + '">' +
             '<span class="v">' + m.v.toLocaleString('en-US') + '<span class="r">៛</span></span>' +
             '<span class="kn">' + m.kn + ' រៀល</span>' +
             '<span class="km">' + esc(m.w) + ' · ' + esc(gloss(m)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">📦</span>' + t(T.wld.ph2) + '</h3>' +
         '<p class="say">' + t(T.wld.pp2) + '</p><div class="mk-poss">';
    B.positions.forEach(function (p, i) {
      h += '<button class="mk-pos" type="button" style="--c:' + clr(i) + '" data-say="' + esc(p.line.en) + '">' +
             scene(p) +
             '<span class="w">' + esc(p.w) + '</span>' +
             '<span class="km">' + esc(gloss(p)) + '</span>' +
           '</button>';
    });
    h += '</div></section>';

    h += '<section class="kg-sec"><h3><span class="em" aria-hidden="true">🏁</span>' + t(T.wld.oh) + '</h3>' +
         '<p class="say">' + t(T.wld.op) + '</p><div class="mk-ords">';
    B.ordinals.forEach(function (o, i) {
      h += '<button class="mk-ord" type="button" style="--c:' + clr(i) + '" data-say="' + esc(o.w) + '">' +
             '<span class="em" aria-hidden="true">' + o.em + '</span>' +
             '<span class="w">' + esc(o.w) + '</span>' +
             '<span class="km">' + esc(gloss(o)) + '</span>' +
           '</button>';
    });
    return h + '</div></section>';
  }

  /* ==================================================================== 7
     THE GAMES
     Each generator returns ten questions in one shape, so the engine never
     needs to know which game it is running:

       { say   what the voice asks
         ask   how the question is drawn — the pictures, the sum, the strip
         opts  the answers, each { kind, … }
         ans   index of the right one }

     Digits are answered with the Khmer numeral riding underneath as `sub`,
     so every game quietly drills 4 = ៤ whatever else it is asking.         */
  function digitOpts(list) {
    return list.map(function (o) {
      return { kind:'letter', text:String(o.n), sub:o.kn, say:o.w };
    });
  }

  function numPool(lo, hi) {
    return N.slice(lo, hi + 1);
  }

  var GAMES = [
    { key:'count', em:'🔢', c:'var(--kg-orange)',
      t:{ en:'How many?', km:'ប៉ុន្មាន?' },
      p:{ en:'Count the pictures, then tap the number.', km:'រាប់រូបភាព រួចចុចលេខ។' },
      make: function () {
        var pool = numPool(1, 12);
        return shuffle(pool).slice(0, 10).map(function (n) {
          var opts = shuffle([n].concat(others(pool, 3, n, function (x) { return String(x.n); })));
          return {
            say: 'How many?',
            ask: { kind:'count', dots: heap(pick(B.counters), n.n) },
            opts: digitOpts(opts),
            ans: opts.indexOf(n)
          };
        });
      }},

    { key:'numeral', em:'៤', c:'var(--kg-purple)',
      t:{ en:'Find the number', km:'រកលេខ' },
      p:{ en:'Hear a number, then tap it — the Khmer numeral is under each one.', km:'ស្តាប់លេខ រួចចុចលើវា — លេខខ្មែរនៅពីក្រោមនីមួយៗ។' },
      make: function () {
        var pool = numPool(0, 20);
        return shuffle(pool).slice(0, 10).map(function (n) {
          var opts = shuffle([n].concat(others(pool, 3, n, function (x) { return String(x.n); })));
          return {
            say: n.w,
            ask: { kind:'listen', label: n.w, km: gloss(n) },
            opts: digitOpts(opts),
            ans: opts.indexOf(n)
          };
        });
      }},

    { key:'add', em:'➕', c:'var(--kg-blue)',
      t:{ en:'Add them up', km:'បូកចូលគ្នា' },
      p:{ en:'Two groups. How many altogether?', km:'ក្រុមពីរ។ ទាំងអស់គ្នាប៉ុន្មាន?' },
      make: function () {
        var out = [];
        for (var i = 0; i < 10; i++) {
          var a = 1 + Math.floor(Math.random() * 5);
          var b = 1 + Math.floor(Math.random() * Math.min(5, 10 - a));
          var em = pick(B.sumems), sum = N[a + b];
          var opts = shuffle([sum].concat(others(numPool(1, 10), 3, sum, function (x) { return String(x.n); })));
          out.push({
            say: N[a].w + ' plus ' + N[b].w + '. How many altogether?',
            ask: { kind:'glyph', text: a + ' + ' + b, cls:'mk-sum-q',
                   label: heap(em, a) + '  +  ' + heap(em, b) },
            opts: digitOpts(opts),
            ans: opts.indexOf(sum)
          });
        }
        return out;
      }},

    { key:'sub', em:'➖', c:'var(--kg-red)',
      t:{ en:'Take some away', km:'យកចេញខ្លះ' },
      p:{ en:'Some are taken away. How many are left?', km:'យកចេញខ្លះ។ នៅសល់ប៉ុន្មាន?' },
      make: function () {
        var out = [];
        for (var i = 0; i < 10; i++) {
          var a = 2 + Math.floor(Math.random() * 9);          /* 2 … 10 */
          var b = 1 + Math.floor(Math.random() * a);          /* 1 … a  */
          var em = pick(B.sumems), left = N[a - b];
          var opts = shuffle([left].concat(others(numPool(0, 10), 3, left, function (x) { return String(x.n); })));
          out.push({
            say: N[a].w + ' take away ' + N[b].w + '. How many are left?',
            /* The taken-away ones are shown as crosses rather than removed,
               so the child can still see the whole they started from. */
            ask: { kind:'glyph', text: a + ' − ' + b, cls:'mk-sum-q',
                   label: heap(em, a - b) + ' ' + heap('❌', b) },
            opts: digitOpts(opts),
            ans: opts.indexOf(left)
          });
        }
        return out;
      }},

    { key:'more', em:'⚖️', c:'var(--kg-green)',
      t:{ en:'More or fewer', km:'ច្រើន ឬតិច' },
      p:{ en:'Which group has more? And which has fewer?', km:'ក្រុមណាមានច្រើនជាង? ហើយក្រុមណាតិចជាង?' },
      make: function () {
        var out = [];
        for (var i = 0; i < 10; i++) {
          var wantMore = i % 2 === 0;
          var em = pick(B.counters);
          /* Three different counts, so there is exactly one right answer at
             either end and no tie to argue with. */
          var ns = shuffle([1,2,3,4,5,6,7,8]).slice(0, 3);
          var target = wantMore ? Math.max.apply(null, ns) : Math.min.apply(null, ns);
          out.push({
            say: wantMore ? 'Which one has more?' : 'Which one has fewer?',
            ask: { kind:'listen', label: wantMore ? 'more' : 'fewer',
                   km: wantMore ? 'ច្រើនជាង' : 'តិចជាង' },
            opts: ns.map(function (n) {
              return { kind:'letter', text: heap(em, n), cls:'mk-heap', say: N[n].w };
            }),
            ans: ns.indexOf(target)
          });
        }
        return out;
      }},

    { key:'shape', em:'🔷', c:'var(--kg-pink)',
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

    { key:'pattern', em:'🔁', c:'var(--kg-yellow)',
      t:{ en:'What comes next?', km:'អ្វីមកបន្ទាប់?' },
      p:{ en:'Read the row, then tap the picture that carries it on.', km:'អានជួរ រួចចុចរូបភាពដែលបន្តវា។' },
      make: function () {
        var out = [];
        /* Every distractor has to differ from the answer AND from each other.
           An AAB unit starts and continues with the same picture, so slicing
           the unit blindly offers the right answer twice — and then marks the
           right tap wrong, which is exactly the unfairness a five-year-old
           remembers. */
        function collect(unit, right, into) {
          unit.forEach(function (x) {
            if (x !== right && into.indexOf(x) < 0) { into.push(x); }
          });
        }
        for (var i = 0; i < 10; i++) {
          var p = pick(B.patterns);
          /* The answer is whatever the unit starts again with. */
          var right = p.unit[0];
          var wrong = [];
          collect(p.unit, right, wrong);
          /* Padded from the other patterns when this unit is only two long,
             so there are always three cards to choose between. */
          for (var guard = 0; wrong.length < 2 && guard < 40; guard++) {
            collect(pick(B.patterns).unit, right, wrong);
          }
          var opts = shuffle([right].concat(shuffle(wrong).slice(0, 2)));
          out.push({
            say: 'What comes next?',
            ask: { kind:'count', dots: p.unit.concat(p.unit).join('') + ' ❓' },
            opts: opts.map(function (o) { return { kind:'emoji', em:o, say:'this one' }; }),
            ans: opts.indexOf(right)
          });
        }
        return out;
      }},

    { key:'order', em:'🔜', c:'var(--kg-blue)',
      t:{ en:'Before and after', km:'មុន និងបន្ទាប់' },
      p:{ en:'Which number comes next along the line?', km:'លេខណាមកបន្ទាប់នៅលើបន្ទាត់លេខ?' },
      make: function () {
        var out = [];
        for (var i = 0; i < 10; i++) {
          var after = i % 2 === 0;
          var n = 1 + Math.floor(Math.random() * 18);        /* 1 … 18 */
          var right = N[after ? n + 1 : n - 1];
          var opts = shuffle([right].concat(others(numPool(0, 20), 3, right, function (x) { return String(x.n); })));
          out.push({
            say: after ? 'What comes after ' + N[n].w + '?' : 'What comes before ' + N[n].w + '?',
            ask: { kind:'glyph', text: after ? n + ' → ?' : '? → ' + n, cls:'mk-sum-q',
                   label: after ? 'after ' + n : 'before ' + n },
            opts: digitOpts(opts),
            ans: opts.indexOf(right)
          });
        }
        return out;
      }}
  ];

  /* ------------------------------------------------------------------ go */
  var Engine = K.start({
    bestKey: 'aa-mkg-best',
    voice: 'en',
    hello: 'One, two, three!',
    tabs: ['count', 'shape', 'size', 'add', 'sub', 'world', 'play'].map(function (k) {
      var d = T.tabs[k];
      return { key: k, em: d.em, en: d.en, km: d.km, c: d.c };
    }),
    panel: function (key) {
      return key === 'count' ? panelCount()
           : key === 'shape' ? panelShape()
           : key === 'size'  ? panelSize()
           : key === 'add'   ? panelAdd()
           : key === 'sub'   ? panelSub()
           :                   panelWorld();
    },
    games: GAMES,
    playP: T.play.p,
    praise: B.praise,
    nudge: B.nudge,

    /* The four things only this page has. Everything else on the page is an
       ordinary data-say button that the engine already speaks. */
    click: function (near, target) {
      var n;

      /* count with me — 1, 2, 3 … lighting each card as it is said */
      if ((n = near(target, '[data-countto]'))) {
        var to = parseInt(n.getAttribute('data-countto'), 10);
        var back = n.hasAttribute('data-back');
        var lit = document.querySelectorAll('#kgPanel [data-n]');
        var seq = [];
        for (var i = 1; i <= to; i++) {
          seq.push(step(back ? to - i + 1 : i));
        }
        K.beep.unlock();
        Engine.speak.series(seq, { onend: function () { light(lit, -1); } });
        return true;
      }

      /* one group, counted out loud and then named — "…three fish" */
      if ((n = near(target, '[data-countset]'))) {
        var many = parseInt(n.getAttribute('data-countset'), 10);
        var thing = n.getAttribute('data-thing') || '';
        var s = [];
        for (var k = 1; k <= many; k++) { s.push({ text: N[k].w, rate: 0.75, gap: 200 }); }
        s.push({ text: N[many].w + ' ' + thing + '.', rate: 0.8, gap: 0 });
        K.beep.unlock();
        Engine.speak.series(s);
        return true;
      }

      /* a pattern row: read it aloud, then show what comes next */
      if ((n = near(target, '[data-pattern]'))) {
        n.classList.add('is-shown');
        K.beep.tick();
        Engine.speak.say('What comes next?');
        return true;
      }

      /* the missing part of a bond */
      if ((n = near(target, '[data-reveal]'))) {
        var slot = n.querySelector('.other');
        if (slot) { slot.textContent = n.getAttribute('data-reveal'); }
        K.beep.ding();
        Engine.speak.say(n.getAttribute('data-say'));
        return true;
      }

      return false;

      /* ------------------------------------------------------------- */
      function light(nodes, value) {
        nodes.forEach(function (node) {
          node.classList.toggle('is-lit', +node.getAttribute('data-n') === value);
        });
      }
      function step(value) {
        return { text: N[value].w, gap: 120, before: function () { light(lit, value); } };
      }
    }
  });
})();
