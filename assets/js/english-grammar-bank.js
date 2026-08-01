/* Alpha Academy Cambodia — English Grammar Notes
   ---------------------------------------------------------------------------
   Five chapters: articles, prepositions, conditionals, reported speech and the
   passive. Each chapter carries three things:

     blocks[]    the teaching notes — either a bullet list or a two/three
                 column table
     examples[]  [ sentence, why it works ]
     quiz[]      20 rows in the same compact shape the tense bank uses:
                 [ prompt, a, b, c, d, answerIndex, explanation ]

   Inline <b> and <em> are allowed in the notes and examples (this file is our
   own content and is rendered with innerHTML). Quiz text is escaped by the
   page, so keep quiz rows plain.                                            */
(function (global) {
  'use strict';

  var G = [];

  /* ============================================================ ARTICLES */
  G.push({
    id: 1,
    key: 'articles',
    title: 'Articles',
    sub: 'a · an · the · zero article',
    intro: 'English has only three choices — <b>a/an</b>, <b>the</b>, or nothing at all. The hard part is that the third choice is invisible, so it is easy to add an article where English wants none. Work through the three rule sets below, then check yourself against the traps.',
    blocks: [
      {
        t: 'list',
        h: 'A / AN — the indefinite article',
        items: [
          'Used with a <b>singular countable noun</b> mentioned for the first time: <em>I saw a bird in the garden.</em>',
          'It means "one of many", not a particular one.',
          'Use <b>a</b> before a consonant <em>sound</em>: a book, a European, a university, a one-way street.',
          'Use <b>an</b> before a vowel <em>sound</em>: an apple, an hour, an MP, an honest answer.',
          'Used with jobs and roles: <em>She is a nurse. He became a teacher.</em>',
          'Used in rates and measurements: <em>twice a week, sixty kilometres an hour, $3 a kilo.</em>'
        ]
      },
      {
        t: 'list',
        h: 'THE — the definite article',
        items: [
          'Second and later mentions: <em>I saw a bird. <b>The</b> bird was blue.</em>',
          'When only one thing exists: the sun, the moon, the sky, the equator, the world.',
          'With superlatives and ordinals: <em>the best film, the first time, the only one.</em>',
          'With rivers, seas, oceans, deserts and mountain <em>ranges</em>: the Mekong, the Pacific, the Sahara, the Himalayas.',
          'With plural country names and names containing a common noun: the Philippines, the Netherlands, the United Kingdom, the Republic of Korea.',
          'With musical instruments: <em>She plays the violin.</em>',
          'With <b>the + adjective</b> to mean a whole group: the rich, the elderly, the unemployed.',
          'When a phrase after the noun makes it specific: <em>the man in the blue shirt, the book I lent you.</em>'
        ]
      },
      {
        t: 'list',
        h: 'Zero article — no article at all',
        items: [
          'Plural and uncountable nouns used in a general sense: <em>Cars pollute cities. Rice is cheap here.</em>',
          'Most countries, cities, streets, single mountains and single lakes: France, Phnom Penh, Norodom Boulevard, Everest, Lake Tonle Sap.',
          'Meals, languages, school subjects and sports: <em>have lunch, speak Khmer, study physics, play football.</em>',
          'After <b>by</b> for transport: by bus, by plane, by taxi — but note <em>on foot</em>.',
          'Institutions used for their purpose: <em>go to school, go to bed, go to work, be in hospital, be in prison.</em>',
          'Before a possessive or another determiner — you cannot stack them: <em>my car</em> (never <em>the my car</em>).'
        ]
      },
      {
        t: 'table',
        h: 'Sound, not spelling, decides a or an',
        head: ['Takes A', 'Takes AN'],
        rows: [
          ['a university (starts /juː/)', 'an umbrella (starts /ʌ/)'],
          ['a European country', 'an hour (the h is silent)'],
          ['a one-way street (starts /w/)', 'an MP (say "em-pee")'],
          ['a useful tool', 'an honest answer'],
          ['a historic day', 'an X-ray']
        ]
      },
      {
        t: 'table',
        h: 'Traps worth memorising',
        head: ['Phrase', 'What it means'],
        rows: [
          ['go to school', 'attend it as a student'],
          ['go to the school', 'visit the building for some other reason'],
          ['in hospital', 'there as a patient'],
          ['in the hospital', 'inside that particular building'],
          ['in bed', 'asleep or resting'],
          ['play the piano', 'musical instruments always take "the"'],
          ['play football', 'sports never take an article']
        ]
      }
    ],
    examples: [
      ['I saw <b>a</b> dog outside. <b>The</b> dog was barking at the gate.', 'First mention takes "a"; the second mention is now specific, so it takes "the".'],
      ['She is <b>an</b> honest lawyer.', 'The h in "honest" is silent, so the word begins with a vowel sound.'],
      ['He is <b>a</b> university student.', '"University" begins with the consonant sound /j/, despite the letter u.'],
      ['<b>The</b> sun rises in <b>the</b> east.', 'There is only one sun and one east, so both take "the".'],
      ['<b>Water</b> boils at 100 degrees Celsius.', 'An uncountable noun used as a general statement takes no article.'],
      ['They have moved to <b>the</b> Netherlands.', 'Plural country names take "the".'],
      ['My daughter goes to <b>school</b> by <b>bus</b>.', 'An institution used for its purpose, and "by + transport", both take no article.'],
      ['That was <b>the</b> best meal of the whole trip.', 'Superlatives always take "the".']
    ],
    quiz: [
      ["She has just qualified as ___ engineer.", "no article", "a", "an", "the", 2, "'Engineer' begins with a vowel sound, so the indefinite article is 'an'."],
      ["___ Mekong flows through six countries.", "The", "no article", "A", "An", 0, "Rivers always take the definite article 'the'."],
      ["We usually have ___ breakfast at seven o'clock.", "a", "an", "the", "no article", 3, "Meals take no article when we simply mean the meal itself."],
      ["He is ___ most reliable person on the team.", "an", "the", "no article", "a", 1, "Superlatives are always preceded by 'the'."],
      ["We waited for ___ hour before the doctor appeared.", "the", "no article", "a", "an", 3, "The h in 'hour' is silent, so the word begins with a vowel sound."],
      ["My sister plays ___ piano extremely well.", "a", "an", "the", "no article", 2, "Musical instruments take 'the' after the verb 'play'."],
      ["She has been studying ___ Japanese for three years.", "no article", "a", "an", "the", 0, "Names of languages take no article."],
      ["There is ___ university at the end of this road.", "no article", "a", "an", "the", 1, "'University' begins with the consonant sound /j/, so it takes 'a'."],
      ["I bought a shirt and a tie. ___ tie was far too expensive.", "A", "An", "The", "no article", 2, "The second mention of a noun is specific, so it takes 'the'."],
      ["___ elephants are the largest land animals alive today.", "A", "An", "The", "no article", 3, "A plural noun used as a general statement takes no article."],
      ["She travels to the office by ___ every morning.", "an train", "the train", "train", "a train", 2, "After 'by' for means of transport, English uses no article."],
      ["They climbed ___ Everest during the dry season.", "no article", "a", "an", "the", 0, "Single mountains take no article; only mountain ranges take 'the'."],
      ["___ Himalayas stretch across five different countries.", "An", "The", "no article", "A", 1, "Mountain ranges are plural names and take 'the'."],
      ["My youngest brother goes to ___ school on a bicycle.", "the", "no article", "a", "an", 1, "An institution used for its purpose takes no article."],
      ["Could you pass me ___ salt, please?", "the", "no article", "a", "an", 0, "Both speakers know which salt is meant, so the noun is definite."],
      ["He struck me as ___ honest and careful witness.", "the", "no article", "a", "an", 3, "The silent h means 'honest' begins with a vowel sound."],
      ["We watched ___ interesting documentary about the ocean.", "an", "the", "no article", "a", 0, "'Interesting' begins with a vowel sound, so 'an' is required."],
      ["___ poor are hit hardest when food prices rise.", "The", "no article", "A", "An", 0, "'The' plus an adjective refers to a whole group of people."],
      ["I need ___ information before I can make a decision.", "no article", "a", "an", "the", 0, "'Information' is uncountable, so it cannot take 'a' or 'an'."],
      ["She was ___ only candidate with any real experience.", "a", "an", "the", "no article", 2, "'Only' makes the noun unique, so it takes 'the'."]
    ]
  });

  /* ======================================================== PREPOSITIONS */
  G.push({
    id: 2,
    key: 'prepositions',
    title: 'Prepositions',
    sub: 'time · place · movement · dependent prepositions',
    intro: 'Prepositions of time and place follow a neat pattern — big to small. Dependent prepositions do not follow any pattern at all: they are fixed to the word in front of them and simply have to be learned as pairs. Treat the last table as a vocabulary list, not a rule.',
    blocks: [
      {
        t: 'table',
        h: 'AT · ON · IN for time — from precise to broad',
        head: ['Preposition', 'Used for', 'Examples'],
        rows: [
          ['at', 'clock times, festivals, night, mealtimes', 'at 6.30, at Pchum Ben, at night, at lunchtime'],
          ['on', 'days and dates, a specific morning', 'on Monday, on 14 March, on my birthday, on Friday evening'],
          ['in', 'months, seasons, years, centuries, parts of the day', 'in April, in the rainy season, in 2026, in the morning'],
          ['no preposition', 'before this, last, next, every, all', 'last night, next week, every day, all year']
        ]
      },
      {
        t: 'table',
        h: 'AT · ON · IN for place — point, surface, enclosure',
        head: ['Preposition', 'Idea', 'Examples'],
        rows: [
          ['at', 'a point or a place seen as a point', 'at the bus stop, at the door, at home, at work'],
          ['on', 'a surface or a line', 'on the table, on the wall, on the river, on page 12'],
          ['in', 'inside something with limits', 'in the box, in the room, in Cambodia, in the water']
        ]
      },
      {
        t: 'table',
        h: 'Time relationships that are easy to confuse',
        head: ['Word', 'Followed by', 'Example'],
        rows: [
          ['for', 'a length of time', 'for three hours, for two years'],
          ['since', 'a starting point', 'since Monday, since 2015'],
          ['during', 'a noun (a period)', 'during the film, during the holidays'],
          ['while', 'a clause (subject + verb)', 'while I was watching the film'],
          ['by', 'a deadline — not later than', 'Finish it by Friday.'],
          ['until / till', 'up to that moment and then stop', 'Wait until Friday.'],
          ['in', 'how long before something happens', 'She will arrive in ten minutes.']
        ]
      },
      {
        t: 'list',
        h: 'Movement',
        items: [
          '<b>to</b> — direction towards a destination: <em>walk to the market</em>.',
          '<b>into / out of</b> — entering and leaving an enclosed space: <em>get into the car, get out of the taxi</em>.',
          '<b>onto / off</b> — moving to and from a surface: <em>climb onto the roof, fall off the wall</em>.',
          '<b>through</b> — in one side and out the other: <em>drive through the tunnel</em>.',
          '<b>across</b> — from one side to the other of a flat area: <em>swim across the river</em>.',
          '<b>along</b> — following the length of something: <em>walk along the beach</em>.',
          '<b>towards</b> — in the direction of, without necessarily arriving: <em>He ran towards the exit.</em>',
          'Note: <em>arrive <b>at</b></em> a small place, <em>arrive <b>in</b></em> a city or country, and never <em>arrive to</em>.'
        ]
      },
      {
        t: 'table',
        h: 'Dependent prepositions — learn these as pairs',
        head: ['Verb + preposition', 'Adjective + preposition', 'Noun + preposition'],
        rows: [
          ['depend on, rely on', 'good / bad at', 'reason for'],
          ['listen to, belong to', 'interested in', 'solution to'],
          ['consist of, accuse of', 'afraid of, proud of', 'increase in'],
          ['apologise for, blame for', 'married to, similar to', 'attitude to / towards'],
          ['succeed in, believe in', 'different from', 'demand for'],
          ['congratulate on, insist on', 'responsible for', 'effect on'],
          ['prevent from, suffer from', 'famous for, keen on', 'advantage of']
        ]
      }
    ],
    examples: [
      ['The train leaves <b>at</b> 6.15 <b>on</b> Sunday <b>in</b> December.', 'Precise time takes "at", the day takes "on", and the month takes "in".'],
      ['She has worked here <b>since</b> 2019, so <b>for</b> about seven years.', '"Since" marks the starting point; "for" measures the length.'],
      ['I fell asleep <b>during</b> the concert <b>while</b> the orchestra was playing.', '"During" is followed by a noun, "while" by a full clause.'],
      ['Please hand the essay in <b>by</b> Friday.', '"By" sets a deadline; "until" would mean keep handing it in continuously.'],
      ['We arrived <b>at</b> the station and later arrived <b>in</b> Battambang.', 'A station is a point; a town is an area.'],
      ['Whether we go <b>depends on</b> the weather.', '"Depend" is always followed by "on".'],
      ['She is very <b>good at</b> chemistry but <b>afraid of</b> examinations.', 'These adjective-plus-preposition pairs are fixed.'],
      ['They swam <b>across</b> the river and then walked <b>along</b> the bank.', '"Across" is side to side; "along" follows the length.']
    ],
    quiz: [
      ["The staff meeting begins ___ nine o'clock sharp.", "in", "by", "at", "on", 2, "Clock times always take 'at'."],
      ["My grandfather was born ___ July 1948.", "for", "at", "on", "in", 3, "Months and years take 'in'."],
      ["The ceremony will be held ___ 14 March.", "at", "on", "in", "since", 1, "Specific dates take 'on'."],
      ["She has lived in this village ___ 2015.", "by", "for", "since", "during", 2, "'Since' introduces the point when the situation began."],
      ["We waited at the clinic ___ almost three hours.", "for", "since", "during", "until", 0, "'For' is followed by a length of time."],
      ["He fell asleep ___ the second half of the film.", "since", "by", "while", "during", 3, "'During' is followed by a noun phrase; 'while' needs a clause."],
      ["Please submit your application ___ Friday at the latest.", "since", "during", "until", "by", 3, "'By' means 'not later than' and sets a deadline."],
      ["The office is open ___ eight in the morning to six in the evening.", "from", "at", "during", "since", 0, "'From ... to' marks the two ends of a period."],
      ["My cousin is remarkably good ___ mathematics.", "on", "at", "for", "in", 1, "'Good at' is a fixed adjective-plus-preposition pair."],
      ["Whether we hold the event outdoors depends ___ the weather.", "on", "from", "to", "of", 0, "'Depend' is always followed by 'on'."],
      ["He has never been particularly interested ___ politics.", "on", "for", "in", "at", 2, "'Interested in' is a fixed pair."],
      ["She has been afraid ___ heights since childhood.", "to", "with", "from", "of", 3, "'Afraid of' is a fixed pair."],
      ["We arrived ___ the airport two hours before departure.", "to", "on", "at", "in", 2, "A specific point such as an airport takes 'at'."],
      ["They finally arrived ___ Paris late on Sunday night.", "in", "on", "at", "to", 0, "Cities and countries take 'in' after 'arrive'."],
      ["Put the dictionary back ___ the top shelf, please.", "into", "in", "at", "on", 3, "A shelf is a surface, so it takes 'on'."],
      ["My keys must be ___ the pocket of my other jacket.", "by", "on", "at", "in", 3, "A pocket is an enclosed space, so it takes 'in'."],
      ["She walked ___ the bridge to reach the other bank.", "along", "onto", "through", "across", 3, "'Across' means from one side to the other of a flat space."],
      ["The train ran ___ a long tunnel under the mountain.", "across", "along", "through", "over", 2, "'Through' means in one side and out the other."],
      ["This model is completely different ___ the one we ordered.", "than", "of", "from", "with", 2, "In careful written English 'different from' is the standard pair."],
      ["Congratulations ___ your promotion!", "with", "for", "on", "of", 2, "'Congratulate' and 'congratulations' are followed by 'on'."]
    ]
  });

  /* ========================================================= CONDITIONALS */
  G.push({
    id: 3,
    key: 'conditionals',
    title: 'Conditionals',
    sub: 'zero · first · second · third · mixed · wish',
    intro: 'A conditional sentence has two halves: the <b>if-clause</b> (the condition) and the <b>main clause</b> (the result). The tense in the if-clause tells you how likely the speaker thinks the situation is. Two rules never change: <b>never put "will" or "would" in the if-clause</b>, and either half can come first — if the if-clause comes first, separate the halves with a comma.',
    blocks: [
      {
        t: 'table',
        h: 'The four patterns',
        head: ['Type', 'If-clause', 'Main clause', 'Meaning'],
        rows: [
          ['Zero', 'if + present simple', 'present simple', 'always true — facts and laws'],
          ['First', 'if + present simple', 'will / can / may + base', 'a real possibility in the future'],
          ['Second', 'if + past simple', 'would / could / might + base', 'unreal or unlikely now or in the future'],
          ['Third', 'if + past perfect', 'would have + past participle', 'the opposite of what really happened']
        ]
      },
      {
        t: 'list',
        h: 'Worked examples of each type',
        items: [
          '<b>Zero:</b> <em>If you heat water to 100 °C, it boils.</em> — a scientific fact.',
          '<b>First:</b> <em>If it rains tomorrow, we will cancel the trip.</em> — genuinely possible.',
          '<b>Second:</b> <em>If I had more time, I would learn Chinese.</em> — but I do not have more time.',
          '<b>Third:</b> <em>If she had studied, she would have passed.</em> — she did not study, and she did not pass.',
          '<b>Mixed (past cause, present result):</b> <em>If I had taken that job, I would be in Sydney now.</em>',
          '<b>Mixed (present cause, past result):</b> <em>If he were more careful, he would not have broken it.</em>'
        ]
      },
      {
        t: 'list',
        h: 'Words that replace "if"',
        items: [
          '<b>unless</b> = if not — <em>Unless you hurry, you will miss the bus.</em> Never add a second negative.',
          '<b>provided that / as long as</b> — a firm condition: <em>You may go as long as you finish first.</em>',
          '<b>in case</b> — a precaution taken beforehand: <em>Take an umbrella in case it rains.</em>',
          '<b>even if</b> — the result does not change: <em>Even if you apologise, he will still be angry.</em>',
          '<b>but for + noun</b> — without: <em>But for your help, we would have failed.</em>'
        ]
      },
      {
        t: 'table',
        h: 'Formal inversion — dropping "if"',
        head: ['With if', 'Inverted (more formal)'],
        rows: [
          ['If you should need help, call us.', 'Should you need help, call us.'],
          ['If I were you, I would accept.', 'Were I you, I would accept.'],
          ['If I had known, I would have called.', 'Had I known, I would have called.']
        ]
      },
      {
        t: 'list',
        h: 'Wish and if only',
        items: [
          '<b>wish / if only + past simple</b> — a regret about now: <em>I wish I knew the answer.</em>',
          '<b>wish / if only + past perfect</b> — a regret about the past: <em>I wish I had listened to you.</em>',
          '<b>wish + would</b> — annoyance at someone else’s behaviour: <em>I wish he would stop complaining.</em> Never use it about yourself.',
          'After <b>wish</b> and <b>if</b>, <em>were</em> is used for every person in careful English: <em>I wish I were taller.</em>'
        ]
      }
    ],
    examples: [
      ['<b>If</b> you <b>mix</b> blue and yellow, you <b>get</b> green.', 'Zero conditional — both halves in the present simple because it is always true.'],
      ['<b>If</b> the bus <b>is</b> late, I <b>will take</b> a tuk-tuk.', 'First conditional — a real future possibility, so "will" goes in the main clause only.'],
      ['<b>If</b> I <b>spoke</b> French, I <b>would apply</b> for that post.', 'Second conditional — I do not speak French, so this is unreal.'],
      ['<b>If</b> we <b>had left</b> earlier, we <b>would have caught</b> the train.', 'Third conditional — we left late and we missed it.'],
      ['<b>If</b> she <b>had accepted</b> the offer, she <b>would be</b> living abroad now.', 'Mixed — a past condition with a present result.'],
      ['<b>Unless</b> you book today, there <b>will be</b> no seats left.', '"Unless" already carries the negative, so the verb stays positive.'],
      ['<b>Had</b> I realised the risk, I <b>would never have</b> agreed.', 'Formal inversion replacing "If I had realised".'],
      ['I <b>wish</b> I <b>had studied</b> harder at school.', 'A regret about the past takes the past perfect after "wish".']
    ],
    quiz: [
      ["If you heat ice above zero degrees, it ___.", "would melt", "melt", "melts", "will melt", 2, "A zero conditional states a fact, so both halves use the present simple."],
      ["If it rains tomorrow, we ___ the picnic.", "cancelled", "cancel", "will cancel", "would cancel", 2, "A first conditional puts 'will' in the main clause only."],
      ["If I ___ more money, I would travel around Asia.", "will have", "would have", "have", "had", 3, "A second conditional uses the past simple in the if-clause."],
      ["If she had revised properly, she ___ the examination.", "would have passed", "passed", "will pass", "would pass", 0, "A third conditional takes 'would have' plus the past participle."],
      ["Unless you leave now, you ___ the last ferry.", "would miss", "missed", "will miss", "will not miss", 2, "'Unless' already means 'if not', so the main clause stays positive."],
      ["If I ___ you, I would accept their offer immediately.", "will be", "am", "was", "were", 3, "'If I were you' is the fixed form used for giving advice."],
      ["If he ___ half an hour earlier, he would not have missed the flight.", "would leave", "left", "had left", "has left", 2, "A third conditional requires the past perfect in the if-clause."],
      ["I wish I ___ how to swim properly.", "have known", "will know", "know", "knew", 3, "'Wish' about a present situation takes the past simple."],
      ["If only I ___ to your advice last year!", "have listened", "would listen", "listened", "had listened", 3, "'If only' about a past regret takes the past perfect."],
      ["___ I known about the delay, I would have telephoned you.", "If", "Have", "Had", "Would", 2, "The inverted third conditional begins with 'Had' and drops 'if'."],
      ["If you ___ ready, we can set off straight away.", "are", "will be", "were", "would be", 0, "Never put 'will' in the if-clause; the present simple carries future meaning."],
      ["She would be much healthier if she ___ smoking.", "stopped", "had stopped", "will stop", "stops", 0, "A second conditional uses the past simple to describe an unreal present."],
      ["We will hold the seat provided that he ___ within the hour.", "will arrive", "arrived", "would arrive", "arrives", 3, "'Provided that' behaves like 'if' and takes the present simple."],
      ["If I had not taken that post, I ___ here in Phnom Penh now.", "am not", "would not be", "would not have been", "will not be", 1, "A mixed conditional: a past condition with a present result takes 'would + base'."],
      ["Water freezes if the temperature ___ below zero.", "falls", "will fall", "would fall", "fall", 0, "A zero conditional uses the present simple in both halves."],
      ["___ you require further assistance, please contact the office.", "Had", "Were", "Would", "Should", 3, "'Should you require' is the formal inversion of 'if you require'."],
      ["If they ___ harder, they might have a chance of winning.", "had trained", "will train", "train", "trained", 3, "A second conditional pairs the past simple with 'might'."],
      ["But for your help, we ___ the project on time.", "would not have finished", "did not finish", "will not finish", "would not finish", 0, "'But for' about a past event takes the third conditional form."],
      ["I wish he ___ interrupting me every time I speak.", "stopped", "would stop", "had stopped", "stops", 1, "'Wish + would' expresses annoyance at another person's habit."],
      ["If she ___ my message, she would certainly have replied.", "has seen", "would see", "saw", "had seen", 3, "A third conditional requires the past perfect after 'if'."]
    ]
  });

  /* ====================================================== REPORTED SPEECH */
  G.push({
    id: 4,
    key: 'reported-speech',
    title: 'Reported Speech',
    sub: 'backshift · questions · commands · reporting verbs',
    intro: 'When we report what somebody said earlier, three things usually move one step further into the past: the <b>tense</b>, the <b>pronouns</b>, and any <b>words for time and place</b>. Reported questions have one extra rule that catches almost everybody — the word order goes back to normal statement order.',
    blocks: [
      {
        t: 'table',
        h: 'Backshift — one step back in time',
        head: ['Direct speech', 'Reported speech'],
        rows: [
          ['present simple — "I work here"', 'past simple — she said she worked there'],
          ['present continuous — "I am working"', 'past continuous — he said he was working'],
          ['past simple — "I saw him"', 'past perfect — he said he had seen him'],
          ['present perfect — "I have finished"', 'past perfect — she said she had finished'],
          ['past perfect — "I had left"', 'past perfect (no change)'],
          ['will — "I will call"', 'would — they said they would call'],
          ['can — "I can swim"', 'could — she said she could swim'],
          ['may — "I may be late"', 'might — he said he might be late'],
          ['must — "I must go"', 'had to — he said he had to go'],
          ['should / could / would / might', 'no change']
        ]
      },
      {
        t: 'table',
        h: 'Words for time and place move too',
        head: ['Direct', 'Reported'],
        rows: [
          ['now', 'then / at that moment'],
          ['today', 'that day'],
          ['tonight', 'that night'],
          ['tomorrow', 'the next day / the following day'],
          ['yesterday', 'the day before / the previous day'],
          ['next week', 'the following week'],
          ['last week', 'the week before'],
          ['ago', 'before'],
          ['here', 'there'],
          ['this / these', 'that / those']
        ]
      },
      {
        t: 'list',
        h: 'Reported questions',
        items: [
          'Go back to <b>statement word order</b>: subject before verb. <em>"Where do you live?" &rarr; She asked where I lived.</em>',
          'Delete <b>do / does / did</b> — the tense moves onto the main verb.',
          'Delete the question mark.',
          'For yes/no questions, add <b>if</b> or <b>whether</b>: <em>"Are you ready?" &rarr; He asked if I was ready.</em>',
          'For wh-questions, keep the question word: <em>"Why did she leave?" &rarr; He asked why she had left.</em>'
        ]
      },
      {
        t: 'list',
        h: 'Commands, requests and advice',
        items: [
          'Command &rarr; <b>tell somebody to do</b>: <em>"Sit down." &rarr; She told us to sit down.</em>',
          'Negative command &rarr; <b>not to</b>: <em>"Don\'t touch it." &rarr; He told me not to touch it.</em>',
          'Request &rarr; <b>ask somebody to do</b>: <em>"Please wait." &rarr; She asked me to wait.</em>',
          'Advice &rarr; <b>advise somebody to do</b>: <em>"You should rest." &rarr; The doctor advised him to rest.</em>'
        ]
      },
      {
        t: 'list',
        h: 'When you do NOT backshift',
        items: [
          'The reporting verb is in the present: <em>She says she is tired.</em>',
          'The statement is still true or is a general fact: <em>He said that water boils at 100 °C.</em>',
          'You are reporting something said moments ago: <em>She just said she is on her way.</em>'
        ]
      },
      {
        t: 'table',
        h: 'Say, tell and other reporting verbs',
        head: ['Verb', 'Pattern', 'Example'],
        rows: [
          ['say', 'say (that) + clause — no person', 'She said that she was busy.'],
          ['tell', 'tell + person + (that) + clause', 'She told me that she was busy.'],
          ['ask', 'ask + person + to-infinitive', 'He asked me to close the door.'],
          ['suggest', 'suggest + -ing / that + clause', 'She suggested going by bus.'],
          ['offer / promise / refuse / agree', 'verb + to-infinitive', 'He promised to pay the bill.'],
          ['admit / deny', 'verb + -ing', 'He denied taking the money.'],
          ['advise / warn / remind', 'verb + person + to-infinitive', 'She warned us not to swim there.'],
          ['apologise', 'apologise for + -ing', 'He apologised for being late.']
        ]
      }
    ],
    examples: [
      ['"I am busy." &rarr; She said (that) she <b>was</b> busy.', 'The present simple moves back one step to the past simple.'],
      ['"I have lost my keys." &rarr; He said he <b>had lost</b> his keys.', 'The present perfect becomes the past perfect, and "my" becomes "his".'],
      ['"We will come tomorrow." &rarr; They said they <b>would</b> come <b>the next day</b>.', '"Will" becomes "would" and "tomorrow" becomes "the next day".'],
      ['"Where do you work?" &rarr; She asked where I <b>worked</b>.', 'No "do", and the subject comes before the verb again.'],
      ['"Are you coming?" &rarr; He asked <b>if</b> I was coming.', 'Yes/no questions need "if" or "whether".'],
      ['"Don\'t be late." &rarr; She told us <b>not to be</b> late.', 'A negative command becomes "not to" plus the base verb.'],
      ['"The Earth goes round the Sun." &rarr; He said the Earth <b>goes</b> round the Sun.', 'Permanent facts do not need to be backshifted.'],
      ['"I didn\'t break it." &rarr; He <b>denied breaking</b> it.', '"Deny" is followed by the -ing form, not a to-infinitive.']
    ],
    quiz: [
      ["'I am extremely tired.' — She said that she ___ extremely tired.", "would be", "is", "was", "had been", 2, "The present simple backshifts one step to the past simple."],
      ["'I have finished the report.' — He said he ___ finished the report.", "has", "had", "was", "would have", 1, "The present perfect backshifts to the past perfect."],
      ["'We will telephone you.' — They said they ___ telephone me.", "would", "had", "were", "will", 0, "'Will' becomes 'would' in reported speech."],
      ["'Where do you live?' — She asked me where I ___.", "did live", "do live", "live", "lived", 3, "Reported questions drop the auxiliary and return to statement word order."],
      ["'Are you coming with us?' — He asked ___ I was coming with them.", "if", "which", "that", "what", 0, "Yes/no questions are reported with 'if' or 'whether'."],
      ["'Don't touch the wires.' — She told me ___ the wires.", "don't touch", "not touch", "not to touch", "to not touch", 2, "Negative commands take 'not to' plus the base verb."],
      ["'Please help me with this.' — He asked me ___ him with it.", "help", "helping", "to help", "that I help", 2, "'Ask' takes an object plus a to-infinitive."],
      ["'I met her yesterday.' — He said he had met her ___.", "the day before", "that day", "the next day", "yesterday", 0, "'Yesterday' shifts to 'the day before' in reported speech."],
      ["'I can drive.' — She said she ___ drive.", "can", "could", "would", "had", 1, "'Can' becomes 'could'."],
      ["'I must leave immediately.' — He said he ___ leave immediately.", "would must", "must to", "had to", "have to", 2, "'Must' becomes 'had to' when the report is backshifted."],
      ["'Water boils at 100 degrees.' — The teacher said water ___ at 100 degrees.", "boils", "had boiled", "would boil", "boiled", 0, "Permanent scientific facts do not need backshifting."],
      ["'I am flying home tomorrow.' — She said she was flying home ___.", "that day", "tomorrow", "the day before", "the next day", 3, "'Tomorrow' becomes 'the next day' or 'the following day'."],
      ["'Did you post the letter?' — She asked whether I ___ the letter.", "did post", "posted", "had posted", "have posted", 2, "The past simple backshifts to the past perfect in a reported question."],
      ["'I bought this here.' — She said she had bought that ___.", "that", "here", "there", "then", 2, "'Here' becomes 'there' when the place has changed."],
      ["'I'll see you next week.' — He said he would see me ___.", "next week", "the week before", "the following week", "last week", 2, "'Next week' becomes 'the following week'."],
      ["'What time does the film start?' — She asked what time the film ___.", "does start", "started", "did start", "start", 1, "Remove 'does' and put the tense onto the main verb."],
      ["He ___ me that the office would be closed.", "told", "spoke", "asked", "said", 0, "'Tell' is followed directly by the person; 'say' is not."],
      ["She ___ that she had never seen the document.", "spoke", "told", "said", "asked", 2, "'Say' takes no personal object before the clause."],
      ["'Let's travel by boat.' — He suggested ___ by boat.", "that travel", "travel", "to travel", "travelling", 3, "'Suggest' is followed by the -ing form or by a 'that' clause."],
      ["'I didn't take the money.' — He denied ___ the money.", "to take", "taking", "that take", "take", 1, "'Deny' is always followed by the -ing form."]
    ]
  });

  /* ==================================================== THE PASSIVE VOICE */
  G.push({
    id: 5,
    key: 'passive',
    title: 'The Passive',
    sub: 'be + past participle · agents · impersonal passive',
    intro: 'The passive turns the object of a sentence into its subject: <em>Somebody stole my bicycle</em> becomes <em>My bicycle was stolen</em>. The formula never changes — <b>the correct tense of "be" + the past participle</b>. Only the "be" moves through the tenses; the participle stays exactly the same.',
    blocks: [
      {
        t: 'table',
        h: 'The passive in every tense',
        head: ['Tense', 'Active', 'Passive'],
        rows: [
          ['present simple', 'They clean the office.', 'The office <b>is cleaned</b>.'],
          ['present continuous', 'They are cleaning it.', 'It <b>is being cleaned</b>.'],
          ['past simple', 'They cleaned it.', 'It <b>was cleaned</b>.'],
          ['past continuous', 'They were cleaning it.', 'It <b>was being cleaned</b>.'],
          ['present perfect', 'They have cleaned it.', 'It <b>has been cleaned</b>.'],
          ['past perfect', 'They had cleaned it.', 'It <b>had been cleaned</b>.'],
          ['future simple', 'They will clean it.', 'It <b>will be cleaned</b>.'],
          ['future perfect', 'They will have cleaned it.', 'It <b>will have been cleaned</b>.'],
          ['going to', 'They are going to clean it.', 'It <b>is going to be cleaned</b>.'],
          ['modal verbs', 'They must clean it.', 'It <b>must be cleaned</b>.']
        ]
      },
      {
        t: 'list',
        h: 'When to choose the passive',
        items: [
          'The person who did it is <b>unknown</b>: <em>My wallet was stolen.</em>',
          'The person who did it is <b>unimportant or obvious</b>: <em>He was arrested last night.</em>',
          'You want to keep the focus on the <b>thing affected</b>: <em>The bridge was completed in 1998.</em>',
          'Scientific and formal writing, where the method matters more than the person: <em>The samples were heated to 80 °C.</em>',
          'To avoid naming who is responsible: <em>Mistakes were made.</em>'
        ]
      },
      {
        t: 'list',
        h: 'Agents: by and with',
        items: [
          'Use <b>by</b> for the person or thing that performed the action: <em>The novel was written <b>by</b> an unknown author.</em>',
          'Use <b>with</b> for the instrument or material used: <em>The lock was forced <b>with</b> a screwdriver.</em>',
          'Leave the agent out altogether when it adds nothing: <em>The road was resurfaced last month.</em>',
          'Only about one passive sentence in five actually needs a "by" phrase.'
        ]
      },
      {
        t: 'list',
        h: 'Verbs with two objects',
        items: [
          'Active: <em>They gave <b>her</b> <b>a prize</b>.</em> Either object can become the subject.',
          'Person first (far more common): <em>She was given a prize.</em>',
          'Thing first: <em>A prize was given to her.</em> — note that "to" is now needed.',
          'The same works for send, offer, show, tell, lend, pay and teach.'
        ]
      },
      {
        t: 'table',
        h: 'Impersonal passive — reporting what people believe',
        head: ['Active', 'Passive form 1', 'Passive form 2'],
        rows: [
          ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
          ['They believe she left.', 'It is believed that she left.', 'She is believed to have left.'],
          ['People think it works.', 'It is thought that it works.', 'It is thought to work.']
        ]
      },
      {
        t: 'list',
        h: 'Points that catch people out',
        items: [
          '<b>Intransitive verbs have no passive.</b> Verbs such as arrive, happen, sleep, come, go, die and rise take no object, so there is nothing to promote.',
          'Passive infinitive: <em>The form needs <b>to be signed</b>.</em> Passive -ing form: <em>Nobody likes <b>being criticised</b>.</em>',
          'Perfect modal passive: <em>It <b>should have been reported</b> immediately.</em>',
          'The <b>get-passive</b> is common in speech for sudden or unwanted events: <em>My phone <b>got broken</b> on the bus.</em>',
          'Do not change the tense when you convert — only the voice.'
        ]
      }
    ],
    examples: [
      ['Somebody stole my bicycle. &rarr; My bicycle <b>was stolen</b>.', 'The thief is unknown, so the passive is the natural choice.'],
      ['They are repairing the bridge. &rarr; The bridge <b>is being repaired</b>.', 'Present continuous passive: is/are + being + participle.'],
      ['They have cancelled the match. &rarr; The match <b>has been cancelled</b>.', 'Present perfect passive: has/have + been + participle.'],
      ['They will announce the results on Monday. &rarr; The results <b>will be announced</b> on Monday.', 'Future passive: will + be + participle.'],
      ['You must submit the form today. &rarr; The form <b>must be submitted</b> today.', 'After a modal verb the passive is "be" plus the participle.'],
      ['The committee gave her an award. &rarr; She <b>was given</b> an award.', 'With two objects, the person normally becomes the subject.'],
      ['People say the building is haunted. &rarr; The building <b>is said to be</b> haunted.', 'The impersonal passive reports a widespread belief.'],
      ['The window was broken <b>with</b> a stone <b>by</b> a child.', '"With" introduces the instrument; "by" introduces the person.']
    ],
    quiz: [
      ["The parcel ___ to your office yesterday afternoon.", "has sent", "sent", "was sent", "is sent", 2, "The past simple passive is 'was/were' plus the past participle."],
      ["English ___ in more than fifty countries.", "speaks", "is speaking", "is spoken", "has spoken", 2, "A present simple passive uses 'is/are' plus the past participle."],
      ["The bridge ___ at the moment, so please use the ferry.", "has repaired", "repairs", "is repairing", "is being repaired", 3, "Work in progress takes the present continuous passive."],
      ["The examination results ___ next Monday.", "will be announced", "are announcing", "announce", "will announce", 0, "A future passive is 'will be' plus the past participle."],
      ["This temple ___ in the twelfth century.", "was built", "is built", "has built", "built", 0, "A completed past event with a date takes the past simple passive."],
      ["By the end of the week the work ___ completely.", "will have been finished", "has finished", "will finish", "will be finished", 0, "'By the end of' with completion takes the future perfect passive."],
      ["My motorbike ___ from outside the market last night.", "is stolen", "stole", "was stolen", "has stolen", 2, "The thief is unknown, so the past simple passive is used."],
      ["The hall ___ when we arrived, so we waited outside.", "was cleaning", "was being cleaned", "has been cleaned", "cleaned", 1, "An action in progress at a past moment takes the past continuous passive."],
      ["All applications must ___ before the first of June.", "be submitted", "been submitted", "being submitted", "submit", 0, "After a modal verb the passive is 'be' plus the past participle."],
      ["She ___ a scholarship at the awards ceremony.", "is giving", "gave", "was given", "was gave", 2, "With two objects the person normally becomes the subject of the passive."],
      ["The window ___ by a falling branch during the storm.", "was broken", "has broken", "is breaking", "broke", 0, "'By' introduces the agent in a past simple passive."],
      ["It ___ that the minister will resign before the election.", "is saying", "has said", "says", "is said", 3, "'It is said that' is the standard impersonal passive."],
      ["The patient ___ to hospital already.", "has taken", "has been taken", "is taking", "was taking", 1, "The present perfect passive is 'has been' plus the past participle."],
      ["Nothing ___ about the drainage problem so far.", "is doing", "was doing", "has done", "has been done", 3, "'So far' calls for the present perfect passive."],
      ["The documents ___ in the attic long before anyone found them.", "were hiding", "had been hidden", "have been hidden", "hid", 1, "An earlier past action takes the past perfect passive."],
      ["In this region the dish ___ with rice and fresh herbs.", "is serving", "has served", "serves", "is served", 3, "A general practice takes the present simple passive."],
      ["Nobody enjoys ___ at in public.", "been laughed", "to laugh", "laughing", "being laughed", 3, "After a verb such as 'enjoy' the passive -ing form is 'being' plus the participle."],
      ["The main road ___ next year to take more traffic.", "has widened", "will widen", "will be widened", "is widening", 2, "A future passive takes 'will be' plus the past participle."],
      ["The accident ___ by a driver using a mobile telephone.", "was caused", "is causing", "has caused", "caused", 0, "The past simple passive with 'by' names the agent."],
      ["The verb ___ has no passive form because it takes no object.", "send", "write", "build", "arrive", 3, "'Arrive' is intransitive, and only verbs with an object can be made passive."]
    ]
  });

  global.GRAMMAR_BANK = G;
})(window);
