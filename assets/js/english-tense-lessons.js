/* Alpha Academy Cambodia — English tense lessons
   ---------------------------------------------------------------------------
   One lesson per chapter of english-tenses.html: an orientation paragraph, a
   set of rule blocks (form, use, signal words, common mistakes) and worked
   examples. The three difficulty levels share the same lesson — the grammar
   does not change, only how hard the questions are.

   Shape:  { intro, blocks:[ {t:'table'|'list', h, head/rows/items} ],
             examples:[ [sentence, why] ] }
   Rendered by assets/js/lesson-view.js.                                    */
(function (global) {
  'use strict';

  var L = {};

  /* ===================================================== 1. PRESENT SIMPLE */
  L[1] = {
    intro: 'The Present Simple is the tense of things that are generally true: habits, routines, permanent situations and facts. It says nothing about whether the action is happening at this moment — for that you need the Present Continuous. The whole difficulty of this tense is one letter: the <b>-s</b> on he, she and it.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'I / you / we / they', 'he / she / it'],
        rows: [
          ['Affirmative', '<code>I work</code>', '<code>She work<b>s</b></code>'],
          ['Negative', '<code>I do not (don\'t) work</code>', '<code>She does not (doesn\'t) work</code>'],
          ['Question', '<code>Do you work?</code>', '<code>Does she work?</code>'],
          ['Short answer', '<code>Yes, I do. / No, I don\'t.</code>', '<code>Yes, she does. / No, she doesn\'t.</code>']
        ]
      },
      {
        t: 'table', h: 'Spelling the he/she/it form',
        head: ['Rule', 'Example'],
        rows: [
          ['most verbs — add <b>-s</b>', 'work &rarr; works, read &rarr; reads'],
          ['after -ch, -sh, -ss, -x, -o — add <b>-es</b>', 'watch &rarr; watches, go &rarr; goes, fix &rarr; fixes'],
          ['consonant + y — change to <b>-ies</b>', 'study &rarr; studies, carry &rarr; carries'],
          ['vowel + y — just add <b>-s</b>', 'play &rarr; plays, buy &rarr; buys'],
          ['three irregulars', 'have &rarr; has, be &rarr; is, do &rarr; does']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Habits and routines:</b> <em>She catches the six o\'clock bus every morning.</em>',
          '<b>Permanent situations:</b> <em>They live in Kampot.</em>',
          '<b>General truths and scientific facts:</b> <em>Water boils at 100 °C.</em>',
          '<b>Timetables and schedules</b>, even about the future: <em>The train leaves at 7.15 tomorrow.</em>',
          '<b>State verbs</b> — know, believe, want, own, seem, belong, understand: <em>I know the answer.</em>',
          '<b>Instructions and directions:</b> <em>You take the second turning on the left.</em>',
          '<b>Stories, plots and commentary:</b> <em>In chapter three the hero returns home.</em>',
          '<b>After time words and in if-clauses,</b> where it carries future meaning: <em>I will call you when I arrive.</em>'
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'Frequency: always, usually, normally, often, sometimes, occasionally, rarely, seldom, hardly ever, never.',
          'Repeated periods: every day, every week, once a month, twice a year, on Mondays, at weekends.',
          'General: in general, as a rule, generally speaking.',
          'Position: frequency adverbs go <b>before</b> the main verb but <b>after</b> the verb <em>be</em> — <em>She is never late</em>, but <em>She never arrives late</em>.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'The <b>-s</b> disappears again after <em>does</em> and <em>doesn\'t</em>: <em>Does she work</em>&thinsp;? — never <em>Does she works</em>.',
          'That <b>-s</b> is not a plural. A plural subject takes the bare verb: <em>The students work hard.</em>',
          'State verbs stay simple even when you mean "right now": <em>I want a coffee</em>, not <em>I am wanting</em>.',
          'Do not use <em>will</em> after when, as soon as, until, before, after or if.'
        ]
      }
    ],
    examples: [
      ['My father <b>leaves</b> for work at seven every morning.', 'A daily routine — the classic use of the Present Simple.'],
      ['Rice <b>grows</b> well in this province.', 'A permanent, general fact.'],
      ['She <b>doesn\'t eat</b> meat.', 'After "doesn\'t" the main verb loses its -s.'],
      ['<b>Does</b> the museum <b>open</b> on Sundays?', 'A question about a regular schedule.'],
      ['The ferry <b>departs</b> at 6.40 next Friday.', 'A published timetable, so the Present Simple is used even for future time.'],
      ['He <b>studies</b> engineering in Phnom Penh.', 'Consonant + y becomes -ies.'],
      ['I <b>don\'t understand</b> this question.', '"Understand" is a state verb, so it stays simple.']
    ]
  };

  /* ================================================= 2. PRESENT CONTINUOUS */
  L[2] = {
    intro: 'The Present Continuous describes something <b>unfinished</b>: an action in progress right now, a temporary situation around now, or a plan already fixed for the near future. It is built from the verb <em>be</em> plus the -ing form, and the <em>be</em> can never be dropped.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'am / is / are + verb-<b>ing</b>', '<code>She is working.</code>'],
          ['Negative', 'am / is / are + <b>not</b> + verb-ing', '<code>They aren\'t working.</code>'],
          ['Question', 'Am / Is / Are + subject + verb-ing', '<code>Are you working?</code>'],
          ['Short answer', '', '<code>Yes, I am. / No, I\'m not.</code>']
        ]
      },
      {
        t: 'table', h: 'Spelling the -ing form',
        head: ['Rule', 'Example'],
        rows: [
          ['most verbs — add <b>-ing</b>', 'work &rarr; working, play &rarr; playing'],
          ['ends in silent <b>-e</b> — drop it', 'make &rarr; making, write &rarr; writing, ride &rarr; riding'],
          ['one vowel + one consonant (stressed) — double it', 'sit &rarr; sitting, stop &rarr; stopping, begin &rarr; beginning'],
          ['ends in <b>-ie</b> — change to -ying', 'lie &rarr; lying, die &rarr; dying'],
          ['ends in <b>-y</b> — keep it', 'study &rarr; studying, carry &rarr; carrying']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Happening at this moment:</b> <em>Listen! Somebody is playing the piano.</em>',
          '<b>Temporary, around now</b> — not necessarily this second: <em>I am reading a good novel at the moment.</em>',
          '<b>Changing or developing situations:</b> <em>The climate is getting warmer.</em>',
          '<b>Fixed future arrangements</b>, usually with a time and a person: <em>I am meeting the dentist at four.</em>',
          '<b>Always + -ing</b> to show irritation at a repeated habit: <em>He is always losing his keys.</em>'
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'now, right now, at the moment, at present, currently, still.',
          'today, this week, this month, these days, nowadays.',
          'Look!, Listen!, Careful!, Be quiet! — all point to this second.',
          'Change: more and more, increasingly, gradually, day by day.'
        ]
      },
      {
        t: 'table', h: 'Present Simple or Present Continuous?',
        head: ['Present Simple', 'Present Continuous'],
        rows: [
          ['permanent — <em>She works in a bank.</em>', 'temporary — <em>She is working in Siem Reap this month.</em>'],
          ['a habit — <em>I cycle to school.</em>', 'happening now — <em>I am cycling to school.</em>'],
          ['a fact — <em>Water boils at 100 °C.</em>', 'a trend — <em>The water is boiling.</em>'],
          ['a timetable — <em>The bus leaves at six.</em>', 'an arrangement — <em>I am leaving at six.</em>']
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          '<b>State verbs are not used in the continuous:</b> know, believe, understand, want, need, like, love, hate, own, belong, seem, consist, prefer.',
          'Some verbs change meaning: <em>I think it is fair</em> (opinion) but <em>I am thinking of moving</em> (activity); <em>She has a car</em> (owns) but <em>She is having lunch</em> (eating).',
          '<em>Be</em> in the continuous means behaviour on one occasion: <em>You are being very quiet today.</em>',
          'Never drop the auxiliary: <em>They are working</em>, not <em>They working</em>.'
        ]
      }
    ],
    examples: [
      ['Look! It <b>is raining</b> again.', '"Look!" points to this exact moment.'],
      ['I <b>am staying</b> with my aunt until the end of term.', 'A temporary situation, not a permanent home.'],
      ['We <b>are flying</b> to Bangkok on Saturday.', 'A confirmed arrangement in the near future.'],
      ['Prices <b>are rising</b> faster than wages.', 'A situation in the middle of changing.'],
      ['He <b>is always interrupting</b> me.', '"Always" plus the continuous expresses annoyance.'],
      ['She <b>is lying</b> on the sofa.', 'Verbs ending in -ie become -ying.'],
      ['I <b>know</b> the answer.', '"Know" is a state verb — never "I am knowing".']
    ]
  };

  /* ==================================================== 3. PRESENT PERFECT */
  L[3] = {
    intro: 'The Present Perfect connects the past to <b>now</b>. It is used when the exact time is unknown, unimportant, or inside a period that has not finished. The moment you name a finished past time — yesterday, last week, in 2019 — you must switch to the Past Simple.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'have / has + past participle (V3)', '<code>She has finished.</code>'],
          ['Negative', 'have / has + not + V3', '<code>They haven\'t finished.</code>'],
          ['Question', 'Have / Has + subject + V3', '<code>Have you finished?</code>'],
          ['Short answer', '', '<code>Yes, I have. / No, she hasn\'t.</code>']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Life experience</b>, where the time does not matter: <em>I have been to Vietnam twice.</em>',
          '<b>A recent action with a result you can still see:</b> <em>She has broken her arm</em> — it is still in plaster.',
          '<b>An unfinished time period:</b> today, this week, this year, in my life: <em>I have had three meetings today.</em>',
          '<b>Something that started in the past and is still true,</b> with for or since: <em>We have lived here since 2015.</em>',
          '<b>With just, already and yet:</b> <em>He has just left. Have you eaten yet?</em>',
          '<b>After superlatives and "the first time":</b> <em>It is the best film I have ever seen.</em>'
        ]
      },
      {
        t: 'table', h: 'for and since',
        head: ['for + a length of time', 'since + a starting point'],
        rows: [
          ['for three hours', 'since two o\'clock'],
          ['for two weeks', 'since Monday'],
          ['for ten years', 'since 2015'],
          ['for a long time', 'since I was a child']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'ever, never, already, just, yet, still, so far, up to now, recently, lately.',
          'for, since, how long.',
          'Unfinished periods: today, this morning, this week, this year, in my life.',
          'once, twice, three times, several times — counting experiences.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          '<b>Never use it with a finished time expression.</b> Say <em>I saw her yesterday</em>, not <em>I have seen her yesterday</em>.',
          '<b>been</b> means the person went and came back; <b>gone</b> means they are still away: <em>She has been to the market</em> versus <em>She has gone to the market</em>.',
          '"When…?" asks about a finished moment, so it takes the Past Simple: <em>When did you buy it?</em>',
          'Use the past participle (V3), not the past simple (V2): <em>have written</em>, not <em>have wrote</em>.'
        ]
      }
    ],
    examples: [
      ['I <b>have never eaten</b> durian.', 'A life experience with no particular time.'],
      ['She <b>has lost</b> her keys, so she can\'t get in.', 'A past action with a present result.'],
      ['We <b>have lived</b> in this house for twenty years.', 'Started in the past and still true — "for" plus a duration.'],
      ['<b>Have</b> you <b>finished</b> the report <b>yet</b>?', '"Yet" belongs in questions and negatives.'],
      ['He <b>has</b> just <b>arrived</b>.', '"Just" marks something that happened moments ago.'],
      ['It is the most difficult exam I <b>have</b> ever <b>taken</b>.', 'A superlative pulls the Present Perfect after it.'],
      ['My grandfather <b>died</b> in 1998.', 'A finished date, so the Past Simple is required — not the Present Perfect.']
    ]
  };

  /* ========================================= 4. PRESENT PERFECT CONTINUOUS */
  L[4] = {
    intro: 'The Present Perfect Continuous answers the question <b>how long</b>. It looks at an activity that started in the past and is either still going on or has only just stopped, and it puts the emphasis on the activity itself rather than on any finished result.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'have / has + been + verb-ing', '<code>She has been working.</code>'],
          ['Negative', 'have / has + not + been + verb-ing', '<code>They haven\'t been working.</code>'],
          ['Question', 'Have / Has + subject + been + verb-ing', '<code>Have you been working?</code>'],
          ['How long', 'How long + have / has + subject + been + verb-ing', '<code>How long have you been waiting?</code>']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Duration of an unfinished activity:</b> <em>She has been studying since eight o\'clock.</em>',
          '<b>An activity that has just stopped, with a visible result:</b> <em>Your eyes are red — have you been crying?</em>',
          '<b>Repeated actions over a period:</b> <em>He has been phoning me all week.</em>',
          '<b>Temporary situations,</b> often with lately or recently: <em>I have been sleeping badly lately.</em>'
        ]
      },
      {
        t: 'table', h: 'Present Perfect or Present Perfect Continuous?',
        head: ['Present Perfect — the result', 'Present Perfect Continuous — the activity'],
        rows: [
          ['<em>I have read three chapters.</em> (how many)', '<em>I have been reading all afternoon.</em> (how long)'],
          ['<em>She has written the report.</em> (it is finished)', '<em>She has been writing the report.</em> (still going)'],
          ['<em>They have painted the kitchen.</em> (done)', '<em>They have been painting the kitchen.</em> (that is why it is a mess)']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'how long, for, since, all day, all morning, all week.',
          'lately, recently, these past few weeks.',
          'Present evidence: <em>You look tired… The ground is wet… There is paint on your hands…</em>'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          '<b>State verbs use the simple form, not the continuous:</b> <em>I have known her for years</em>, never <em>I have been knowing</em>.',
          'A definite quantity — three chapters, five emails — takes the plain Present Perfect.',
          '<em>Live</em>, <em>work</em> and <em>study</em> can take either form with almost no difference in meaning.',
          'The word <b>been</b> is never optional: <em>has been waiting</em>, not <em>has waiting</em>.'
        ]
      }
    ],
    examples: [
      ['We <b>have been waiting</b> for over an hour.', 'The wait started in the past and is still going on.'],
      ['He is out of breath because he <b>has been running</b>.', 'The activity has just stopped and explains the present state.'],
      ['It <b>has been raining</b> since dawn.', '"Since" plus an unfinished activity.'],
      ['How long <b>have</b> you <b>been learning</b> English?', '"How long" is the natural question for this tense.'],
      ['I <b>have read</b> four books this month.', 'A counted result, so the plain Present Perfect is correct.'],
      ['She <b>has owned</b> that shop since 2001.', '"Own" is a state verb and cannot take the continuous.'],
      ['They <b>have been arguing</b> all evening.', 'A repeated activity across a period up to now.']
    ]
  };

  /* ======================================================== 5. PAST SIMPLE */
  L[5] = {
    intro: 'The Past Simple is the main tense for telling a story. It describes a finished action at a finished time, and the time is usually stated or already understood. Regular verbs add <b>-ed</b>; the irregular ones simply have to be learned.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'subject + past form (V2)', '<code>She worked. / She went.</code>'],
          ['Negative', 'did not (didn\'t) + <b>base</b> verb', '<code>She didn\'t work. / She didn\'t go.</code>'],
          ['Question', 'Did + subject + <b>base</b> verb', '<code>Did she work?</code>'],
          ['With <em>be</em>', 'was / were — no "did"', '<code>I was late. Were they ready?</code>']
        ]
      },
      {
        t: 'table', h: 'Spelling regular past forms',
        head: ['Rule', 'Example'],
        rows: [
          ['most verbs — add <b>-ed</b>', 'work &rarr; worked, watch &rarr; watched'],
          ['ends in <b>-e</b> — add just -d', 'live &rarr; lived, hope &rarr; hoped'],
          ['one vowel + one consonant (stressed) — double it', 'stop &rarr; stopped, plan &rarr; planned'],
          ['consonant + y — change to <b>-ied</b>', 'study &rarr; studied, carry &rarr; carried'],
          ['vowel + y — just add -ed', 'play &rarr; played, enjoy &rarr; enjoyed']
        ]
      },
      {
        t: 'table', h: 'Twelve irregular verbs worth knowing cold',
        head: ['Base', 'Past (V2)', 'Base', 'Past (V2)'],
        rows: [
          ['go', 'went', 'see', 'saw'],
          ['take', 'took', 'give', 'gave'],
          ['come', 'came', 'buy', 'bought'],
          ['write', 'wrote', 'think', 'thought'],
          ['begin', 'began', 'leave', 'left'],
          ['drink', 'drank', 'put', 'put']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>A finished action at a definite past time:</b> <em>We arrived at six.</em>',
          '<b>A sequence of past events</b> in a story: <em>She opened the door, looked inside and smiled.</em>',
          '<b>Past habits and repeated actions,</b> often with <em>used to</em>: <em>We swam in the river every summer.</em>',
          '<b>Past states:</b> <em>He was a teacher for thirty years.</em>',
          '<b>In second conditionals and after wish</b> to talk about an unreal present: <em>If I had more time… / I wish I knew.</em>'
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'yesterday, last night, last week, last year.',
          'two days ago, a long time ago, in 1999, in the 1980s.',
          'then, after that, next, finally, at that moment.',
          'when I was young, during the war, at the time.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'After <em>did</em> and <em>didn\'t</em> the verb goes back to its <b>base form</b>: <em>She didn\'t go</em>, never <em>She didn\'t went</em>.',
          '<em>Be</em> does not use "did": <em>Was he there?</em> — not <em>Did he be there?</em>',
          '<em>Could</em> is already past, so its negative is <em>couldn\'t</em>, never <em>didn\'t could</em>.',
          'Use V2 not V3: <em>I saw her</em>, not <em>I seen her</em>.'
        ]
      }
    ],
    examples: [
      ['We <b>visited</b> the temple last Sunday.', '"Last Sunday" is a finished time, so the Past Simple is required.'],
      ['She <b>didn\'t come</b> to the meeting.', 'After "didn\'t" the verb returns to its base form.'],
      ['<b>Did</b> you <b>see</b> the message I sent?', 'Questions use "did" plus the base verb.'],
      ['The concert <b>began</b> at eight and <b>ended</b> at ten.', 'A sequence of finished events.'],
      ['They <b>were</b> very tired after the journey.', '"Be" needs no auxiliary in the past.'],
      ['He <b>studied</b> in Japan for two years.', 'Consonant + y becomes -ied, and the period is over.'],
      ['I <b>couldn\'t</b> find the address.', '"Could" is already a past form.']
    ]
  };

  /* ==================================================== 6. PAST CONTINUOUS */
  L[6] = {
    intro: 'The Past Continuous sets the scene. It describes something that was <b>already in progress</b> at a past moment, which is why it so often appears alongside the Past Simple: the long action was going on when the short action interrupted it.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'was / were + verb-ing', '<code>I was working.</code>'],
          ['Negative', 'was / were + not + verb-ing', '<code>They weren\'t working.</code>'],
          ['Question', 'Was / Were + subject + verb-ing', '<code>Were you working?</code>'],
          ['Who takes which', 'I / he / she / it &rarr; <b>was</b> &nbsp;·&nbsp; you / we / they &rarr; <b>were</b>', '']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>In progress at a stated past moment:</b> <em>At eight o\'clock I was having dinner.</em>',
          '<b>The long action interrupted by a short one</b> — the short one takes the Past Simple: <em>I was crossing the road when I saw her.</em>',
          '<b>Two long actions at the same time,</b> usually with <em>while</em>: <em>While she was cooking, he was studying.</em>',
          '<b>Background description</b> at the start of a story: <em>The sun was setting and the birds were singing.</em>',
          '<b>A polite, tentative opening:</b> <em>I was wondering whether you could help.</em>',
          '<b>Always + -ing</b> for an irritating past habit: <em>He was always losing his temper.</em>'
        ]
      },
      {
        t: 'table', h: 'when and while',
        head: ['Word', 'Normally followed by', 'Example'],
        rows: [
          ['when', 'the short action (Past Simple)', '<em>I was reading <b>when</b> the phone rang.</em>'],
          ['while', 'the long action (Past Continuous)', '<em><b>While</b> I was reading, the phone rang.</em>'],
          ['as', 'the long action (Past Continuous)', '<em><b>As</b> we were leaving, it started to rain.</em>']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'while, as, when, just as.',
          'at 8 o\'clock yesterday, at that moment, at the time, then.',
          'all day yesterday, all morning, the whole evening.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'Compare <em>When I arrived, she was cooking</em> (already cooking) with <em>When I arrived, she cooked</em> (she started after I got there).',
          'State verbs stay in the Past Simple: <em>I knew the answer</em>, not <em>I was knowing</em>.',
          'Do not use it for a whole finished period: <em>He lived there for ten years</em>, not <em>He was living there for ten years</em>.',
          'Never drop was/were: <em>They were waiting</em>, not <em>They waiting</em>.'
        ]
      }
    ],
    examples: [
      ['I <b>was watching</b> television when the power went out.', 'The long action is continuous, the interruption is simple.'],
      ['While she <b>was studying</b>, her brother <b>was playing</b> outside.', 'Two long actions running in parallel.'],
      ['At ten o\'clock last night we <b>were still driving</b>.', 'An exact past moment with an unfinished action.'],
      ['The sun <b>was shining</b> and the market <b>was filling up</b>.', 'Scene-setting at the start of a narrative.'],
      ['He cut himself while he <b>was shaving</b>.', '"While" introduces the background activity.'],
      ['I <b>was wondering</b> if you had a moment.', 'The continuous makes the request softer and more polite.'],
      ['She <b>knew</b> immediately that something was wrong.', '"Know" is a state verb, so it stays simple.']
    ]
  };

  /* ======================================================= 7. PAST PERFECT */
  L[7] = {
    intro: 'The Past Perfect is the "past of the past". When you are already telling a story in past time and you need to step back to something <b>earlier still</b>, this is the tense that does it. The form is refreshingly simple: <b>had</b> plus the past participle, for every subject.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'had + past participle (V3)', '<code>She had left.</code>'],
          ['Negative', 'had + not (hadn\'t) + V3', '<code>They hadn\'t arrived.</code>'],
          ['Question', 'Had + subject + V3', '<code>Had you finished?</code>'],
          ['All subjects', 'I / you / he / she / we / they &rarr; <b>had</b>', '']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>The earlier of two past actions:</b> <em>When we arrived, the film had already started.</em>',
          '<b>After before, after, by the time, as soon as</b> to make the order unmistakable: <em>By the time the police came, the thief had escaped.</em>',
          '<b>In reported speech,</b> where a past simple or present perfect moves one step back: <em>He said he had seen it.</em>',
          '<b>In third conditionals:</b> <em>If she had studied, she would have passed.</em>',
          '<b>After wish and if only</b> for regrets about the past: <em>I wish I had listened.</em>',
          '<b>After hardly, scarcely, barely and no sooner,</b> with inversion: <em>Hardly had we sat down when the lights went out.</em>'
        ]
      },
      {
        t: 'table', h: 'Which action came first?',
        head: ['Sentence', 'Order of events'],
        rows: [
          ['<em>When I arrived, she <b>left</b>.</em>', 'I arrived first, then she left.'],
          ['<em>When I arrived, she <b>had left</b>.</em>', 'She left first — I missed her.'],
          ['<em>He told me what <b>happened</b>.</em>', 'Telling and happening feel like one sequence.'],
          ['<em>He told me what <b>had happened</b>.</em>', 'The event clearly came before the telling.']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'before, after, by the time, until, as soon as, once.',
          'already, just, never … before, previously, earlier.',
          'when, by then, by 2010.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'You only need it when the order would otherwise be unclear. For a plain sequence the Past Simple is enough: <em>I got up, had breakfast and left.</em>',
          'Use the past participle: <em>had gone</em>, not <em>had went</em>.',
          'Never use it for a single past event with no other past reference point.',
          'In the inverted conditional the "if" disappears: <em>Had I known, I would have called.</em>'
        ]
      }
    ],
    examples: [
      ['By the time we reached the station, the train <b>had left</b>.', 'The departure came before our arrival.'],
      ['She couldn\'t get in because she <b>had forgotten</b> her key.', 'The forgetting explains the later problem.'],
      ['He said he <b>had never seen</b> the document.', 'Reported speech pushes the tense one step back.'],
      ['If they <b>had left</b> earlier, they would have caught the ferry.', 'The third conditional always takes the Past Perfect.'],
      ['I wish I <b>had studied</b> harder at school.', 'A regret about the past.'],
      ['No sooner <b>had</b> the ceremony <b>ended</b> than it began to rain.', 'Fronted "no sooner" forces inversion with "had".'],
      ['I got up, <b>had</b> breakfast and <b>left</b>.', 'A plain sequence needs no Past Perfect at all.']
    ]
  };

  /* ============================================ 8. PAST PERFECT CONTINUOUS */
  L[8] = {
    intro: 'The Past Perfect Continuous measures <b>how long</b> an activity had been going on before another past event. It is the past-tense twin of the Present Perfect Continuous: same idea, one step further back.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'had + been + verb-ing', '<code>She had been working.</code>'],
          ['Negative', 'had + not + been + verb-ing', '<code>They hadn\'t been working.</code>'],
          ['Question', 'Had + subject + been + verb-ing', '<code>Had you been waiting long?</code>'],
          ['All subjects', 'always <b>had been</b> — it never changes', '']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Duration up to a past moment:</b> <em>They had been waiting for an hour when the bus finally came.</em>',
          '<b>The cause of a past result:</b> <em>She was exhausted because she had been travelling all night.</em>',
          '<b>A situation that had been continuing before it changed:</b> <em>He had been working there for ten years before he resigned.</em>'
        ]
      },
      {
        t: 'table', h: 'Past Perfect or Past Perfect Continuous?',
        head: ['Past Perfect — the finished result', 'Past Perfect Continuous — the activity'],
        rows: [
          ['<em>She had written three letters.</em> (how many)', '<em>She had been writing all morning.</em> (how long)'],
          ['<em>They had painted the room.</em> (it was done)', '<em>They had been painting the room.</em> (that is why it smelled)'],
          ['<em>He had read the report.</em>', '<em>He had been reading for hours.</em>']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'for, since, how long, all day, all night, all week.',
          'before, when, by the time, until then.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'State verbs take the plain Past Perfect: <em>I had known her for years</em>, never <em>had been knowing</em>.',
          'A counted quantity takes the plain Past Perfect.',
          'There must be a past reference point in the sentence — otherwise use the Present Perfect Continuous.',
          '<b>been</b> is never dropped: <em>had been waiting</em>, not <em>had waiting</em>.'
        ]
      }
    ],
    examples: [
      ['We <b>had been driving</b> for six hours when the car broke down.', 'Duration measured up to a later past event.'],
      ['The ground was soaked — it <b>had been raining</b> all night.', 'The activity explains the past result.'],
      ['She <b>had been teaching</b> for thirty years before she retired.', 'A long period ending at a past moment.'],
      ['How long <b>had</b> they <b>been living</b> there before the flood?', '"How long" is the natural question for this tense.'],
      ['He was out of breath because he <b>had been running</b>.', 'A recently stopped activity with a visible past result.'],
      ['I <b>had known</b> him for years before we became partners.', '"Know" is a state verb, so the plain Past Perfect is used.'],
      ['She <b>had written</b> five emails before lunch.', 'A counted result, not a duration.']
    ]
  };

  /* ====================================================== 9. FUTURE SIMPLE */
  L[9] = {
    intro: 'English has no future tense as such — it has several ways of talking about the future, and <b>will</b> is only one of them. The real skill in this chapter is choosing correctly between <em>will</em> and <em>be going to</em>.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'will + base verb', '<code>I will help you. / I\'ll help you.</code>'],
          ['Negative', 'will not (won\'t) + base verb', '<code>She won\'t come.</code>'],
          ['Question', 'Will + subject + base verb', '<code>Will they arrive on time?</code>'],
          ['All subjects', '<b>will</b> never changes, and is never followed by "to"', '']
        ]
      },
      {
        t: 'table', h: 'will or be going to?',
        head: ['Use <b>will</b> for', 'Use <b>be going to</b> for'],
        rows: [
          ['a decision made this second — <em>The phone is ringing. I\'ll answer it.</em>', 'a plan already decided — <em>We are going to buy a house.</em>'],
          ['an offer — <em>I\'ll carry that for you.</em>', 'a prediction from present evidence — <em>Look at those clouds. It is going to rain.</em>'],
          ['a promise — <em>I won\'t tell anyone.</em>', 'an intention — <em>She is going to study medicine.</em>'],
          ['an opinion or prediction — <em>I think he will win.</em>', '']
        ]
      },
      {
        t: 'list', h: 'Other uses of will',
        items: [
          '<b>Facts about the future:</b> <em>The sun will rise at 5.42 tomorrow.</em>',
          '<b>Refusals</b>, including by objects: <em>He won\'t listen. The door won\'t open.</em>',
          '<b>Characteristic behaviour:</b> <em>He will sit for hours watching the river.</em>',
          '<b>In first conditionals:</b> <em>If it rains, we will cancel.</em>',
          '<b>shall</b> — for offers and suggestions with I and we (<em>Shall I open the window?</em>), and for obligation in legal writing (<em>The tenant shall pay monthly.</em>).'
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'tomorrow, next week, next year, soon, later, in a moment, in two days.',
          'I think, I expect, I\'m sure, probably, perhaps, definitely.',
          'in the future, one day, by then.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          '<b>Never put "will" in a time clause.</b> After when, as soon as, until, before, after, once and the moment, use the Present Simple: <em>I will call you when I <b>arrive</b>.</em>',
          '<b>Never put "will" in an if-clause</b> either: <em>If it <b>rains</b>, we will stay in.</em>',
          'Adverbs go between will and the verb: <em>She will probably come.</em>',
          'No "to" after will: <em>I will go</em>, not <em>I will to go</em>.'
        ]
      }
    ],
    examples: [
      ['That bag looks heavy — I<b>\'ll carry</b> it for you.', 'An offer decided at the moment of speaking.'],
      ['We <b>are going to</b> move house in June.', 'A plan already made before the conversation.'],
      ['Look at the sky. It <b>is going to</b> pour.', 'A prediction based on evidence you can see now.'],
      ['I think Cambodia <b>will win</b> the match.', 'An opinion about the future.'],
      ['If you don\'t hurry, you <b>will miss</b> the bus.', 'First conditional — "will" in the main clause only.'],
      ['I\'ll phone you as soon as I <b>get</b> home.', 'No "will" after "as soon as".'],
      ['<b>Shall</b> we take a taxi?', '"Shall we" introduces a suggestion.']
    ]
  };

  /* ================================================= 10. FUTURE CONTINUOUS */
  L[10] = {
    intro: 'The Future Continuous describes what will be <b>in progress</b> at a particular moment in the future. It is also the polite, neutral way to ask about someone\'s plans, because it asks what is going to happen anyway rather than what the person intends to do for you.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'will be + verb-ing', '<code>I will be working.</code>'],
          ['Negative', 'will not (won\'t) be + verb-ing', '<code>She won\'t be coming.</code>'],
          ['Question', 'Will + subject + be + verb-ing', '<code>Will you be using the car?</code>']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>In progress at a future moment:</b> <em>At ten o\'clock tomorrow I will be sitting an exam.</em>',
          '<b>Over a whole future period:</b> <em>The builders will be working on the roof all week.</em>',
          '<b>Something happening in the normal course of events:</b> <em>I will be seeing her tomorrow anyway, so I can ask.</em>',
          '<b>A polite enquiry about plans:</b> <em>Will you be needing the projector?</em>',
          '<b>An assumption about right now:</b> <em>Don\'t phone — they will be having dinner.</em>'
        ]
      },
      {
        t: 'table', h: 'Future Simple or Future Continuous?',
        head: ['will + base', 'will be + -ing'],
        rows: [
          ['<em>I will help you.</em> — decided just now, an offer', '<em>I will be helping at the fair.</em> — already arranged'],
          ['<em>Will you post this?</em> — a request', '<em>Will you be posting anything?</em> — a neutral question about plans'],
          ['<em>She will speak at noon.</em> — a fact', '<em>At noon she will be speaking.</em> — in progress then']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'at ten o\'clock tomorrow, at this time next week, this time next year.',
          'all day tomorrow, all next week, throughout August.',
          'when you arrive, while you are away, during the conference.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'State verbs use the plain future: <em>I will know by Friday</em>, not <em>I will be knowing</em>.',
          'After time conjunctions use the Present Continuous instead: <em>While you <b>are attending</b> the seminar…</em>',
          'Both <b>be</b> and the <b>-ing</b> are required: <em>will be working</em>.'
        ]
      }
    ],
    examples: [
      ['This time tomorrow I <b>will be flying</b> to Kuala Lumpur.', '"This time tomorrow" needs an action already in progress.'],
      ['Don\'t call at eight — we <b>will be having</b> dinner.', 'An assumption about what will be going on then.'],
      ['<b>Will</b> you <b>be using</b> the printer this afternoon?', 'A polite way to ask about someone\'s plans.'],
      ['The team <b>will be training</b> all next week.', 'An activity spread over a future period.'],
      ['I <b>will be passing</b> your office anyway, so I can drop it in.', 'Something happening in the normal course of events.'],
      ['Passengers <b>will be boarding</b> shortly.', 'The standard announcement form.'],
      ['I <b>will know</b> the result by Friday.', '"Know" is a state verb, so the plain future is used.']
    ]
  };

  /* ==================================================== 11. FUTURE PERFECT */
  L[11] = {
    intro: 'The Future Perfect looks back from a point in the future and says that something will <b>already be finished</b> by then. Almost every sentence in this tense contains the word <em>by</em>, so if you see "by 2030", "by Friday" or "by the time…", this is very likely the tense you need.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'will have + past participle (V3)', '<code>I will have finished.</code>'],
          ['Negative', 'will not (won\'t) have + V3', '<code>She won\'t have arrived.</code>'],
          ['Question', 'Will + subject + have + V3', '<code>Will you have finished by then?</code>'],
          ['Passive', 'will have been + V3', '<code>The work will have been completed.</code>']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Completed before a future point:</b> <em>By next June she will have graduated.</em>',
          '<b>A total reached by a future point:</b> <em>By the end of the course you will have learned a thousand words.</em>',
          '<b>Duration up to a future point with state verbs:</b> <em>Next month they will have been married for thirty years.</em>',
          '<b>An assumption about something already finished:</b> <em>He will have landed by now.</em>'
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'by then, by Friday, by 2030, by the end of the month.',
          'by the time (+ Present Simple), before, in two years\' time.',
          'already, all along, by now.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          '<b>After "by the time" use the Present Simple,</b> never the future: <em>By the time you <b>arrive</b>, I will have left.</em>',
          'Compare <em>I will finish at six</em> (that is when I finish) with <em>I will have finished by six</em> (some time before six).',
          'Use the past participle: <em>will have written</em>, not <em>will have wrote</em>.',
          'A duration of activity, rather than a completed result, calls for the Future Perfect Continuous instead.'
        ]
      }
    ],
    examples: [
      ['By this time next year I <b>will have saved</b> enough for the deposit.', 'Completion before a stated future point.'],
      ['By the time you read this, I <b>will have left</b> the country.', 'The time clause takes the Present Simple, the main clause the Future Perfect.'],
      ['The repairs <b>will have been completed</b> by Friday.', 'A future perfect passive.'],
      ['She <b>won\'t have finished</b> the course before September.', 'The negative states what will not yet be complete.'],
      ['By 2040 the glacier <b>will have retreated</b> another kilometre.', 'A change completed by a future date.'],
      ['Next April the shop <b>will have stood</b> here for a hundred years.', 'A state verb measuring duration to a future point.'],
      ['Hurry — the bus <b>will have gone</b> before we get there.', 'The departure will already be behind us.']
    ]
  };

  /* ========================================= 12. FUTURE PERFECT CONTINUOUS */
  L[12] = {
    intro: 'The rarest of the twelve, and the easiest to recognise: it combines <em>by</em> with <em>for</em>. Use it to say how long an activity <b>will have been going on</b> when a future moment arrives.',
    blocks: [
      {
        t: 'table', h: 'Form',
        head: ['', 'Structure', 'Example'],
        rows: [
          ['Affirmative', 'will have been + verb-ing', '<code>I will have been working.</code>'],
          ['Negative', 'will not have been + verb-ing', '<code>She won\'t have been waiting long.</code>'],
          ['Question', 'Will + subject + have been + verb-ing', '<code>Will you have been travelling long?</code>'],
          ['Typical frame', '<b>By</b> + future point … <b>for</b> + length of time', '<code>By June, for five years.</code>']
        ]
      },
      {
        t: 'list', h: 'When we use it',
        items: [
          '<b>Duration up to a future point:</b> <em>By next month I will have been working here for five years.</em>',
          '<b>The cause of a future situation:</b> <em>She will be tired — she will have been driving all day.</em>',
          '<b>Emphasis on the length of an activity</b> rather than on any result.'
        ]
      },
      {
        t: 'table', h: 'Future Perfect or Future Perfect Continuous?',
        head: ['Future Perfect — the result', 'Future Perfect Continuous — the duration'],
        rows: [
          ['<em>By June she will have written three books.</em>', '<em>By June she will have been writing for a decade.</em>'],
          ['<em>Half a million people will have visited it.</em>', '<em>The exhibition will have been running for a year.</em>'],
          ['<em>They will have interviewed sixty candidates.</em>', '<em>They will have been interviewing since March.</em>']
        ]
      },
      {
        t: 'list', h: 'Signal words',
        items: [
          'by … for, by then … for, by the time … for.',
          'all day, all year, since, how long.'
        ]
      },
      {
        t: 'list', h: 'Watch out',
        items: [
          'A countable total — three books, sixty candidates — takes the plain Future Perfect.',
          'State verbs take the plain Future Perfect: <em>will have been married</em>, never <em>will have been being married</em>.',
          'The full chain <b>will have been</b> plus <b>-ing</b> is compulsory; missing any part breaks the form.'
        ]
      }
    ],
    examples: [
      ['By December we <b>will have been living</b> here for ten years.', 'The "by … for" frame is the signature of this tense.'],
      ['She will be exhausted — she <b>will have been travelling</b> all night.', 'The activity explains the future condition.'],
      ['By the time the talks end, they <b>will have been negotiating</b> for months.', 'Duration measured up to a future event.'],
      ['How long <b>will</b> you <b>have been waiting</b> by then?', 'The natural question form for a duration.'],
      ['By June the scheme <b>will have been running</b> for exactly one year.', 'An unbroken period reaching a future milestone.'],
      ['By then the committee <b>will have interviewed</b> sixty candidates.', 'A counted total, so the plain Future Perfect is correct.'],
      ['Next month they <b>will have been</b> married for thirty years.', '"Be" is a state verb, so no continuous form is possible.']
    ]
  };

  /* =============================================== 13. MIXED TENSES REVIEW */
  L[13] = {
    intro: 'Every tense you have met fits into one grid: three times — past, present, future — each with four aspects. Once you can place a sentence on that grid, choosing the tense becomes mechanical. This chapter is about making that choice quickly and reliably.',
    blocks: [
      {
        t: 'table', h: 'The twelve tenses at a glance',
        head: ['', 'Simple', 'Continuous', 'Perfect', 'Perfect continuous'],
        rows: [
          ['<b>Past</b>', 'worked', 'was working', 'had worked', 'had been working'],
          ['<b>Present</b>', 'work / works', 'am working', 'have worked', 'have been working'],
          ['<b>Future</b>', 'will work', 'will be working', 'will have worked', 'will have been working']
        ]
      },
      {
        t: 'list', h: 'Three questions that decide the tense',
        items: [
          '<b>1. When?</b> Is the action in the past, around now, or in the future? That gives you the row.',
          '<b>2. Is it finished?</b> An action in progress takes a continuous form; a completed one takes a simple or perfect form.',
          '<b>3. Does it connect to another point in time?</b> If it does — a result now, an earlier past event, a future deadline — you need a perfect form.',
          '<b>4. Does duration matter?</b> If "how long" is the point, add the continuous: <em>have been waiting</em>, <em>had been waiting</em>, <em>will have been waiting</em>.'
        ]
      },
      {
        t: 'table', h: 'The pairs that are most often confused',
        head: ['Pair', 'The difference'],
        rows: [
          ['Present Simple / Present Continuous', 'permanent habit versus temporary action in progress'],
          ['Present Perfect / Past Simple', 'unfinished or unstated time versus a finished, stated time'],
          ['Present Perfect / Present Perfect Continuous', 'how many versus how long'],
          ['Past Simple / Past Continuous', 'the short completed action versus the longer background'],
          ['Past Simple / Past Perfect', 'the same past sequence versus one event before another'],
          ['will / be going to', 'a decision made now versus a plan made earlier'],
          ['Future Simple / Future Continuous', 'a single future act versus something already in progress then']
        ]
      },
      {
        t: 'list', h: 'Rules that override the timeline',
        items: [
          '<b>No "will" after time words</b> — when, as soon as, until, before, after, once, by the time — or in if-clauses.',
          '<b>State verbs</b> (know, believe, want, own, seem, belong, understand) do not take continuous forms in any tense.',
          '<b>Reported speech</b> shifts everything one step back, unless the fact is still true.',
          '<b>Timetables</b> take the Present Simple for future time; <b>personal arrangements</b> take the Present Continuous.',
          '<b>Superlatives, "the first time" and "it is the third time"</b> pull the Present Perfect after them.'
        ]
      }
    ],
    examples: [
      ['She usually <b>drinks</b> tea, but today she <b>is drinking</b> coffee.', 'A habit against a one-off exception.'],
      ['I <b>saw</b> her yesterday, and I <b>have seen</b> her twice this week.', 'Finished time takes the Past Simple; unfinished time takes the Present Perfect.'],
      ['While I <b>was walking</b> home, I <b>met</b> an old friend.', 'The long background action and the short event.'],
      ['By the time we arrived, the film <b>had been playing</b> for fifteen minutes.', 'Duration measured up to a past point.'],
      ['I <b>will call</b> you as soon as I <b>land</b>.', 'No "will" in the time clause.'],
      ['We <b>are meeting</b> the supplier on Thursday.', 'A fixed personal arrangement, not a prediction.'],
      ['By 2035 the company <b>will have opened</b> fifty branches.', 'A total completed before a future date.'],
      ['It is the third time you <b>have asked</b> me that.', '"The third time" always pulls the Present Perfect.']
    ]
  };

  global.TENSE_LESSONS = L;
})(window);
