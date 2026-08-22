/* Alpha Academy Cambodia — HSK 1 chapter tests
   ---------------------------------------------------------------------------
   Fifteen tests, one per lesson of *HSK Standard Course 1*, plus a final mixed
   paper over the whole book.

   ON THE SOURCE. The two source PDFs are image-only scans with no text layer,
   so the lesson titles, the per-lesson word lists and the grammar notes below
   were read off the book's own Contents (pp. 13-18) and Vocabulary index
   (pp. 120-125) rather than extracted. Lesson numbering, titles and the words
   taught in each lesson therefore follow the book exactly; the questions
   themselves were written for this page, using only words the student has met
   by the end of that lesson.

   Lessons 1 and 2 teach pronunciation and greetings only and have no grammar
   notes in the book, so their tests are shorter and cover greetings, pinyin
   and tones.

   Each question is the shape assets/js/quiz-engine.js expects:

       { q: 'the stem…', opts: ['A','B','C','D'], ans: 0, why: 'because…' }

   `ans` is the index into `opts`. `why` is shown after answering and again in
   the review list at the end, so it explains rather than just restating.

   ONE CONVENTION TO KNOW. **The right answer is always written first**, so a
   question can be read and checked at a glance while editing. The options are
   shuffled when the test is built (see shuffleQ in assets/js/hsk1-test.js),
   which is what stops the answer always being A on screen. If you add a
   question, put its right answer in position 0 and leave `ans: 0`.           */
(function (global) {
  'use strict';

  var LESSONS = [

  /* ==================================================================== 1 */
  { n:1, hz:'你好', py:'Nǐ hǎo', en:'Hello', page:2,
    words:[
      {hz:'你', py:'nǐ', en:'you (singular)'},
      {hz:'好', py:'hǎo', en:'good, fine'},
      {hz:'您', py:'nín', en:'you (polite)'},
      {hz:'你们', py:'nǐmen', en:'you (plural)'},
      {hz:'对不起', py:'duìbuqǐ', en:'sorry'},
      {hz:'没关系', py:'méi guānxi', en:"that's OK"}
    ],
    notes:[{hz:'声母、韵母、声调', en:'Initials, finals and the four tones'}],
    qs:[
      { q:'你好 means…', opts:['Hello','Thank you','Goodbye','Sorry'], ans:0,
        why:'你 nǐ is "you" and 好 hǎo is "good" — together they are the everyday greeting, hello.' },
      { q:'How is 你好 written in pinyin?', opts:['Nǐ hǎo','Ní hào','Nì hǎo','Nī hāo'], ans:0,
        why:'Both syllables carry the third tone in writing. When two third tones meet, the first is said as a second tone, but it is still written nǐ hǎo.' },
      { q:'Which is the polite form of "you", used for an older person or a customer?', opts:['您','你','你们','我'], ans:0,
        why:'您 nín is 你 with 心 (heart) underneath — the polite you. 你们 nǐmen is the plural.' },
      { q:'Someone steps on your foot and says 对不起. You reply…', opts:['没关系','你好','谢谢','你们好'], ans:0,
        why:'没关系 méi guānxi — "it doesn\'t matter". It is the standard answer to an apology.' },
      { q:'对不起 means…', opts:['Sorry','Hello','You are welcome','See you'], ans:0,
        why:'对不起 duìbuqǐ is how you apologise. The reply is 没关系.' },
      { q:'How do you greet a group of people?', opts:['你们好','你好','您好','我好'], ans:0,
        why:'们 men makes a pronoun plural: 你 you → 你们 you (plural). So 你们好 greets more than one person.' },
      { q:'Chinese has how many tones (not counting the neutral tone)?', opts:['Four','Two','Three','Five'], ans:0,
        why:'First (mā), second (má), third (mǎ) and fourth (mà). The neutral tone is unmarked and is counted separately.' },
      { q:'Which syllable carries the FOURTH tone?', opts:['bà','bā','bá','bǎ'], ans:0,
        why:'The fourth tone mark falls from top-left to bottom-right, and the voice falls sharply with it.' },
      { q:'The tone mark in nǐ shows the voice…', opts:['dipping down then rising','staying high and flat','rising','falling'], ans:0,
        why:'The third tone is a dip: it goes down and comes back up. The mark itself is drawn as that shape.' },
      { q:'您好 would be said to…', opts:['your teacher','your little brother','your dog','a close friend'], ans:0,
        why:'您 is the respectful you, used for elders, teachers, customers and strangers you want to be polite to.' }
    ]},

  /* ==================================================================== 2 */
  { n:2, hz:'谢谢你', py:'Xièxie nǐ', en:'Thank you', page:8,
    words:[
      {hz:'谢谢', py:'xièxie', en:'to thank'},
      {hz:'不', py:'bù', en:'no, not'},
      {hz:'不客气', py:'bú kèqi', en:"you're welcome"},
      {hz:'再见', py:'zàijiàn', en:'goodbye'}
    ],
    notes:[{hz:'轻声、"不" 的变调', en:'The neutral tone; tone sandhi of 不'}],
    qs:[
      { q:'谢谢 means…', opts:['Thank you','Sorry','Hello','Goodbye'], ans:0,
        why:'谢谢 xièxie. The second 谢 is said in the neutral tone, lighter and shorter than the first.' },
      { q:'Someone thanks you. The natural reply is…', opts:['不客气','没关系','对不起','再见'], ans:0,
        why:'不客气 bú kèqi — literally "don\'t be polite", meaning you are welcome. 没关系 answers an apology, not thanks.' },
      { q:'再见 means…', opts:['Goodbye','Good morning','Thank you','Please'], ans:0,
        why:'再 zài is "again" and 见 jiàn is "to see" — see you again.' },
      { q:'In 不客气, why is 不 said as bú and not bù?', opts:['Because the next syllable is a fourth tone','Because it is a question','Because 不 is always second tone','Because it is at the start'], ans:0,
        why:'不 is fourth tone by itself, but before another fourth tone it changes to second: bù + kè → bú kè. This is tone sandhi.' },
      { q:'Which is said with the neutral tone on the second syllable?', opts:['谢谢','再见','你好','不客气'], ans:0,
        why:'xièxie — the second syllable has no tone mark and is said light and short. 再见 has two full tones.' },
      { q:'Which pair are BOTH ways of ending a meeting?', opts:['再见 and 明天见','谢谢 and 不客气','你好 and 您好','对不起 and 没关系'], ans:0,
        why:'再见 "see you again" and 明天见 "see you tomorrow" both close a conversation. The other pairs are question-and-answer pairs.' },
      { q:'不 on its own means…', opts:['no, not','yes','very','also'], ans:0,
        why:'不 bù is the everyday negator, placed before a verb or adjective: 不好 not good, 不是 is not.' },
      { q:'Which syllable is written with a SECOND tone?', opts:['má','mā','mǎ','mà'], ans:0,
        why:'The second tone mark rises from bottom-left to top-right, like asking "what?" in English.' },
      { q:'You want to say "thank you" to your teacher politely. Best is…', opts:['谢谢您','谢谢你们','不客气','再见'], ans:0,
        why:'Swap 你 for the polite 您 when addressing a teacher. 你们 would be thanking a group.' },
      { q:'不好 means…', opts:['not good','very good','good','goodbye'], ans:0,
        why:'不 goes in front of what it negates: 不 + 好 = not good.' }
    ]},

  /* ==================================================================== 3 */
  { n:3, hz:'你叫什么名字', py:'Nǐ jiào shénme míngzi', en:"What's your name", page:14,
    words:[
      {hz:'叫', py:'jiào', en:'to be called'},
      {hz:'什么', py:'shénme', en:'what'},
      {hz:'名字', py:'míngzi', en:'name'},
      {hz:'我', py:'wǒ', en:'I, me'},
      {hz:'是', py:'shì', en:'to be'},
      {hz:'老师', py:'lǎoshī', en:'teacher'},
      {hz:'吗', py:'ma', en:'question particle'},
      {hz:'学生', py:'xuésheng', en:'student'},
      {hz:'人', py:'rén', en:'person'}
    ],
    notes:[
      {hz:'疑问代词 "什么"', en:'The interrogative pronoun 什么'},
      {hz:'"是" 字句', en:'The 是 sentence'},
      {hz:'用 "吗" 的疑问句', en:'Questions with 吗'}
    ],
    qs:[
      { q:'你叫什么名字？ is asking…', opts:['What is your name?','How old are you?','Where do you live?','What do you do?'], ans:0,
        why:'叫 jiào "to be called" + 什么 shénme "what" + 名字 míngzi "name".' },
      { q:'Complete the reply: 我___李月。', opts:['叫','是','吗','什么'], ans:0,
        why:'叫 is used with a name: 我叫李月 "I am called Li Yue". 是 would be used with a noun like 老师 or 学生.' },
      { q:'什么 means…', opts:['what','who','where','how many'], ans:0,
        why:'什么 shénme is "what". Unlike English, it stays where the answer would go rather than moving to the front.' },
      { q:'Which sentence means "I am a teacher"?', opts:['我是老师。','我叫老师。','我老师吗？','老师是我吗？'], ans:0,
        why:'是 shì links a subject to what it is: 我是老师. 叫 is only for names.' },
      { q:'How do you turn 你是学生 into a yes/no question?', opts:['你是学生吗？','你什么学生？','你是学生什么？','吗你是学生？'], ans:0,
        why:'Add 吗 at the very end of a statement. The word order does not change at all — that is what makes it easy.' },
      { q:'吗 goes…', opts:['at the end of the sentence','at the beginning','after the subject','before the verb'], ans:0,
        why:'吗 ma is a sentence-final particle. It is always the last thing you say.' },
      { q:'Which is WRONG?', opts:['你叫什么名字吗？','你叫什么名字？','你是老师吗？','他是学生。'], ans:0,
        why:'A sentence already asking with 什么 does not also take 吗. Use one or the other, never both.' },
      { q:'老师 in pinyin is…', opts:['lǎoshī','lāoshì','lăoshi','làoshī'], ans:0,
        why:'lǎoshī — third tone then first tone.' },
      { q:'学生 means…', opts:['student','teacher','school','classmate'], ans:0,
        why:'学生 xuésheng. 学 is "to study" and 生 here means a person, so a person who studies.' },
      { q:'中国人 means…', opts:['a Chinese person','China','Chinese language','the middle'], ans:0,
        why:'人 rén "person" after a country makes a nationality: 中国人 Chinese, 美国人 American.' },
      { q:'Answer 你是老师吗？ in the negative:', opts:['我不是老师。','我没老师。','我不老师。','我是不老师。'], ans:0,
        why:'不 goes directly before the verb 是, giving 不是. 没 is not used to negate 是.' },
      { q:'Which asks a teacher their name most politely?', opts:['您叫什么名字？','你叫什么名字吗？','你什么名字？','我叫什么名字？'], ans:0,
        why:'Use 您 for a teacher, keep 什么 for the question, and do not add 吗.' }
    ]},

  /* ==================================================================== 4 */
  { n:4, hz:'她是我的汉语老师', py:'Tā shì wǒ de Hànyǔ lǎoshī', en:'She is my Chinese teacher', page:22,
    words:[
      {hz:'她', py:'tā', en:'she, her'},
      {hz:'谁', py:'shéi', en:'who'},
      {hz:'的', py:'de', en:'possessive particle'},
      {hz:'汉语', py:'Hànyǔ', en:'Chinese (language)'},
      {hz:'哪', py:'nǎ', en:'which'},
      {hz:'国', py:'guó', en:'country'},
      {hz:'呢', py:'ne', en:'question particle'},
      {hz:'他', py:'tā', en:'he, him'},
      {hz:'同学', py:'tóngxué', en:'classmate'},
      {hz:'朋友', py:'péngyou', en:'friend'}
    ],
    notes:[
      {hz:'疑问代词 "谁"、"哪"', en:'The interrogative pronouns 谁 and 哪'},
      {hz:'结构助词 "的"', en:'The structural particle 的'},
      {hz:'疑问助词 "呢" (1)', en:'The interrogative particle 呢 (1)'}
    ],
    qs:[
      { q:'谁 means…', opts:['who','what','which','where'], ans:0,
        why:'谁 shéi asks about a person. 什么 asks about a thing and 哪 asks "which".' },
      { q:'她是谁？ is asking…', opts:['Who is she?','What is she?','Where is she?','Is she a teacher?'], ans:0,
        why:'谁 sits where the answer will sit: 她是谁 → 她是我的老师.' },
      { q:'Complete: 这是我___书。', opts:['的','是','呢','吗'], ans:0,
        why:'的 de marks possession, like English ’s: 我的书 my book.' },
      { q:'她是我的汉语老师 means…', opts:['She is my Chinese teacher','She is my Chinese classmate','She teaches me English','She is a Chinese person'], ans:0,
        why:'我的 my + 汉语 Chinese language + 老师 teacher.' },
      { q:'Which is usually said WITHOUT 的?', opts:['我妈妈','我的书','我的老师','我的朋友'], ans:0,
        why:'的 is normally dropped for close family: 我妈妈, 我爸爸. It is kept for things and for other people.' },
      { q:'你是哪国人？ is asking…', opts:['Which country are you from?','Who are you?','What is your name?','Where are you now?'], ans:0,
        why:'哪 nǎ "which" + 国 guó "country" + 人 rén "person".' },
      { q:'我是学生。你___？', opts:['呢','吗','什么','谁'], ans:0,
        why:'呢 ne bounces the same question back without repeating it — "and you?".' },
      { q:'呢 in 你呢？ does the job of…', opts:['and you?','are you?','who?','what?'], ans:0,
        why:'呢 after a noun asks the question that was just asked, about that noun instead.' },
      { q:'他 and 她 are…', opts:['both said tā, but written differently','said differently','the same character','both female'], ans:0,
        why:'Both are tā. 他 has the person radical 亻and means he; 她 has the woman radical 女 and means she. Speech cannot tell them apart — only writing can.' },
      { q:'朋友 means…', opts:['friend','classmate','teacher','family'], ans:0,
        why:'朋友 péngyou. 同学 tóngxué is specifically a classmate.' },
      { q:'Which is correct for "my friend\'s teacher"?', opts:['我朋友的老师','我的朋友老师','老师的我朋友','我的老师朋友'], ans:0,
        why:'的 goes after each possessor, and Chinese builds from the outside in: 我朋友 my friend + 的 + 老师 teacher.' },
      { q:'汉语 refers to…', opts:['the Chinese language','a Chinese person','China','a Chinese character'], ans:0,
        why:'汉语 Hànyǔ is the language. 汉字 hànzì is a Chinese character and 中国 Zhōngguó is the country.' }
    ]},

  /* ==================================================================== 5 */
  { n:5, hz:'她女儿今年二十岁', py:'Tā nǚ’ér jīnnián èrshí suì', en:'Her daughter is 20 years old this year', page:30,
    words:[
      {hz:'家', py:'jiā', en:'family, home'},
      {hz:'有', py:'yǒu', en:'to have'},
      {hz:'口', py:'kǒu', en:'measure word for family members'},
      {hz:'女儿', py:'nǚ’ér', en:'daughter'},
      {hz:'几', py:'jǐ', en:'how many'},
      {hz:'岁', py:'suì', en:'year of age'},
      {hz:'了', py:'le', en:'particle of change'},
      {hz:'今年', py:'jīnnián', en:'this year'},
      {hz:'多', py:'duō', en:'to what extent'},
      {hz:'大', py:'dà', en:'big; old (of age)'}
    ],
    notes:[
      {hz:'疑问代词 "几"', en:'The interrogative pronoun 几'},
      {hz:'百以内的数字', en:'Numbers below 100'},
      {hz:'"了" 表变化', en:'了 indicating a change'},
      {hz:'"多 + 大" 表示疑问', en:'The interrogative phrase 多大'}
    ],
    qs:[
      { q:'How do you write 15 in Chinese?', opts:['十五','五十','一五','十一五'], ans:0,
        why:'十五 shíwǔ is literally ten-five. Reverse it and 五十 wǔshí is fifty — the order is what carries the meaning.' },
      { q:'二十 means…', opts:['20','12','2','22'], ans:0,
        why:'二十 èrshí = two tens = 20. 十二 shí’èr is ten-two = 12.' },
      { q:'How is 99 written?', opts:['九十九','九九','十九九','九百九'], ans:0,
        why:'九十 ninety + 九 nine. Every number below 100 is built this way.' },
      { q:'几 is used to ask about…', opts:['a small number, usually under ten','a large amount','a price','a person'], ans:0,
        why:'几 jǐ expects a small answer. For bigger or unknown amounts 多少 duōshao is used instead — that comes in Lesson 8.' },
      { q:'你家有几口人？ is asking…', opts:['How many people are in your family?','How old is your family?','Where is your family?','Who is in your family?'], ans:0,
        why:'口 kǒu is the special measure word used for counting family members.' },
      { q:'Complete: 我家有四___人。', opts:['口','个','岁','了'], ans:0,
        why:'Family members are counted with 口, not the general 个.' },
      { q:'你女儿多大？ is asking…', opts:['How old is your daughter?','How big is your daughter?','Where is your daughter?','Who is your daughter?'], ans:0,
        why:'多大 duō dà literally "how big", but for a person it asks their age. Age and size share a word here.' },
      { q:'Which answers 你女儿多大？', opts:['她二十岁。','她是学生。','她有女儿。','她今年好。'], ans:0,
        why:'岁 suì counts years of age. Note that no 是 is needed: 她二十岁 not 她是二十岁.' },
      { q:'What does 了 add in 我二十岁了？', opts:['that this is a change — she has now turned twenty','that it happened long ago','a question','a negative'], ans:0,
        why:'了 marks a new situation. Without it, 我二十岁 is just a fact; with it, the speaker has just reached twenty.' },
      { q:'今年 means…', opts:['this year','last year','next year','today'], ans:0,
        why:'今 jīn means "present": 今年 this year, 今天 today.' },
      { q:'有 means…', opts:['to have','to be','to want','to go'], ans:0,
        why:'有 yǒu. It is negated with 没 rather than 不 — 没有, never 不有.' },
      { q:'Which is correct?', opts:['我没有女儿。','我不有女儿。','我没是女儿。','我不女儿。'], ans:0,
        why:'有 is the one verb that takes 没 instead of 不. 没有 is the only correct negative.' }
    ]},

  /* ==================================================================== 6 */
  { n:6, hz:'我会说汉语', py:'Wǒ huì shuō Hànyǔ', en:'I can speak Chinese', page:40,
    words:[
      {hz:'会', py:'huì', en:'can (learned skill)'},
      {hz:'说', py:'shuō', en:'to speak'},
      {hz:'妈妈', py:'māma', en:'mother'},
      {hz:'菜', py:'cài', en:'dish, cuisine'},
      {hz:'很', py:'hěn', en:'very'},
      {hz:'做', py:'zuò', en:'to make, to do'},
      {hz:'写', py:'xiě', en:'to write'},
      {hz:'汉字', py:'hànzì', en:'Chinese character'},
      {hz:'字', py:'zì', en:'character, word'},
      {hz:'怎么', py:'zěnme', en:'how'},
      {hz:'读', py:'dú', en:'to read'}
    ],
    notes:[
      {hz:'能愿动词 "会" (1)', en:'The modal verb 会 (1)'},
      {hz:'形容词谓语句', en:'Sentences with an adjectival predicate'},
      {hz:'疑问代词 "怎么" (1)', en:'The interrogative pronoun 怎么 (1)'}
    ],
    qs:[
      { q:'会 in 我会说汉语 means…', opts:['can, having learned how','may, having permission','want to','will go'], ans:0,
        why:'会 huì is the "can" of a learned skill — speaking a language, driving, cooking. Permission is 能, which comes in Lesson 10.' },
      { q:'我会说汉语 means…', opts:['I can speak Chinese','I want to speak Chinese','I am speaking Chinese','I will learn Chinese'], ans:0,
        why:'会 + 说 + 汉语 — the skill of speaking Chinese.' },
      { q:'Which is correct for "I cannot write Chinese characters"?', opts:['我不会写汉字。','我没会写汉字。','我会不写汉字。','我不写会汉字。'], ans:0,
        why:'不 goes in front of the modal verb 会, not in front of 写.' },
      { q:'Complete: 我妈妈做的菜___好吃。', opts:['很','是','会','怎么'], ans:0,
        why:'An adjective is its own predicate in Chinese and normally takes 很 in front. 是 is not used before an adjective.' },
      { q:'Which is WRONG?', opts:['她是很好。','她很好。','她不好。','她好吗？'], ans:0,
        why:'是 never appears before an adjective. 她很好 is complete on its own — the adjective is already doing the work of the verb.' },
      { q:'In 她很好, 很 is…', opts:['often just a link, not really "very"','always emphatic','a question word','a negative'], ans:0,
        why:'Without 很 the sentence sounds like a comparison. In everyday use 很 is closer to nothing than to "very".' },
      { q:'这个字怎么读？ is asking…', opts:['How is this character read?','What does this character mean?','How many characters?','Which character?'], ans:0,
        why:'怎么 zěnme asks about manner or method — how something is done.' },
      { q:'怎么 asks about…', opts:['how, in what way','who','how many','where'], ans:0,
        why:'怎么 is the "how" of method: 怎么读 how to read it, 怎么写 how to write it.' },
      { q:'写 means…', opts:['to write','to read','to speak','to make'], ans:0,
        why:'写 xiě. 读 dú is to read aloud and 说 shuō is to speak.' },
      { q:'汉字 means…', opts:['a Chinese character','the Chinese language','a Chinese person','China'], ans:0,
        why:'汉字 hànzì — the written characters. 汉语 Hànyǔ is the spoken language.' },
      { q:'我妈妈会做中国菜 means…', opts:['My mother can cook Chinese food','My mother is eating Chinese food','My mother likes Chinese food','My mother is Chinese'], ans:0,
        why:'做菜 zuò cài is "to cook" — literally to make dishes. 会 makes it a skill she has.' },
      { q:'Put in order: 汉语 / 会 / 我 / 说', opts:['我会说汉语','我说会汉语','会我说汉语','我汉语会说'], ans:0,
        why:'Subject, then modal verb, then main verb, then object: 我 + 会 + 说 + 汉语.' }
    ]},

  /* ==================================================================== 7 */
  { n:7, hz:'今天几号', py:'Jīntiān jǐ hào', en:"What's the date today", page:48,
    words:[
      {hz:'请', py:'qǐng', en:'please'},
      {hz:'问', py:'wèn', en:'to ask'},
      {hz:'今天', py:'jīntiān', en:'today'},
      {hz:'号', py:'hào', en:'date of the month'},
      {hz:'月', py:'yuè', en:'month'},
      {hz:'星期', py:'xīngqī', en:'week'},
      {hz:'昨天', py:'zuótiān', en:'yesterday'},
      {hz:'明天', py:'míngtiān', en:'tomorrow'},
      {hz:'去', py:'qù', en:'to go'},
      {hz:'学校', py:'xuéxiào', en:'school'},
      {hz:'看', py:'kàn', en:'to look, to read'},
      {hz:'书', py:'shū', en:'book'}
    ],
    notes:[
      {hz:'日期的表达 (1)', en:'Expressing a date: month, day, day of the week'},
      {hz:'名词谓语句', en:'Sentences with a nominal predicate'},
      {hz:'连动句 (1)', en:'Serial verb sentences: 去 + place + do something'}
    ],
    qs:[
      { q:'How do you say "5 October"?', opts:['十月五号','五月十号','十五号月','五号十月'], ans:0,
        why:'Chinese always goes from the larger unit to the smaller: month first, then day. 十月五号.' },
      { q:'今天几号？ is asking…', opts:['What is the date today?','What day of the week is it?','What time is it?','What month is it?'], ans:0,
        why:'号 hào is the day of the month. For the weekday you would ask 今天星期几？' },
      { q:'星期三 means…', opts:['Wednesday','Thursday','Three weeks','March'], ans:0,
        why:'星期 + a number counts from Monday: 星期一 Monday, 星期二 Tuesday, 星期三 Wednesday.' },
      { q:'Which is Sunday?', opts:['星期天','星期七','星期一','星期六'], ans:0,
        why:'Sunday breaks the pattern — it is 星期天 or 星期日, never 星期七.' },
      { q:'What is missing? 今天十月五号。', opts:['Nothing — it is already correct','是','很','有'], ans:0,
        why:'A date can be the whole predicate on its own. 今天是十月五号 is also correct, but 是 is normally dropped.' },
      { q:'我去学校看书 means…', opts:['I go to school to read','I read a book about school','I go to school and to the library','School has books'], ans:0,
        why:'Two verbs in a row, in the order the actions happen: 去 go, then 看书 read. That is a serial verb sentence.' },
      { q:'Put in order: 看书 / 我 / 学校 / 去', opts:['我去学校看书','我看书去学校','我学校去看书','去我学校看书'], ans:0,
        why:'Subject + 去 + place + what you do there. The going comes before the doing, just as in life.' },
      { q:'昨天 means…', opts:['yesterday','tomorrow','today','last week'], ans:0,
        why:'昨天 zuótiān yesterday, 今天 jīntiān today, 明天 míngtiān tomorrow.' },
      { q:'请问 is used to…', opts:['politely open a question to a stranger','ask permission to leave','say thank you','answer a question'], ans:0,
        why:'请问 qǐngwèn literally "please, may I ask" — the polite way to start a question with someone you do not know.' },
      { q:'Which is correct?', opts:['我明天去学校。','我去学校明天。','明天我去学校吗明天？','我去明天学校。'], ans:0,
        why:'A time word goes before the verb, either at the very start or straight after the subject — never after the verb.' },
      { q:'看书 means…', opts:['to read','to look at a picture','to buy a book','to write'], ans:0,
        why:'看 kàn covers looking, watching and reading. 看书 read a book, 看电视 watch television.' },
      { q:'How do you ask "What day of the week is tomorrow?"', opts:['明天星期几？','明天几号？','明天什么星期？','明天几星期？'], ans:0,
        why:'星期几 asks which day of the week; 几号 asks the date of the month.' }
    ]},

  /* ==================================================================== 8 */
  { n:8, hz:'我想喝茶', py:'Wǒ xiǎng hē chá', en:"I'd like some tea", page:56,
    words:[
      {hz:'想', py:'xiǎng', en:'to want, would like'},
      {hz:'喝', py:'hē', en:'to drink'},
      {hz:'茶', py:'chá', en:'tea'},
      {hz:'吃', py:'chī', en:'to eat'},
      {hz:'米饭', py:'mǐfàn', en:'cooked rice'},
      {hz:'下午', py:'xiàwǔ', en:'afternoon'},
      {hz:'商店', py:'shāngdiàn', en:'shop'},
      {hz:'买', py:'mǎi', en:'to buy'},
      {hz:'个', py:'gè', en:'general measure word'},
      {hz:'杯子', py:'bēizi', en:'cup'},
      {hz:'这', py:'zhè', en:'this'},
      {hz:'多少', py:'duōshao', en:'how many, how much'},
      {hz:'钱', py:'qián', en:'money'},
      {hz:'块', py:'kuài', en:'unit of money'},
      {hz:'那', py:'nà', en:'that'}
    ],
    notes:[
      {hz:'能愿动词 "想"', en:'The modal verb 想'},
      {hz:'疑问代词 "多少"', en:'The interrogative pronoun 多少'},
      {hz:'量词 "个"、"口"', en:'The measure words 个 and 口'},
      {hz:'钱数的表达', en:'Expressing amounts of money'}
    ],
    qs:[
      { q:'我想喝茶 means…', opts:['I would like to drink tea','I can drink tea','I am drinking tea','I drank tea'], ans:0,
        why:'想 xiǎng before a verb is "want to, would like to".' },
      { q:'What is the difference between 会 and 想?', opts:['会 is a learned skill; 想 is wanting to','会 is stronger than 想','They are the same','想 is only for the past'], ans:0,
        why:'我会说汉语 I can speak Chinese (I learned how). 我想说汉语 I want to speak Chinese.' },
      { q:'这个杯子多少钱？ is asking…', opts:['How much is this cup?','How many cups?','Where is this cup?','Whose cup is this?'], ans:0,
        why:'多少钱 duōshao qián is the standard way to ask a price.' },
      { q:'When do you use 多少 rather than 几?', opts:['When the answer may be more than ten','When asking about people','When asking politely','They are interchangeable'], ans:0,
        why:'几 expects a small number, and needs a measure word after it. 多少 covers any amount and can stand alone.' },
      { q:'Complete: 我想买三___杯子。', opts:['个','口','块','多少'], ans:0,
        why:'个 gè is the general measure word and works for cups. 口 is only for family members and 块 only for money.' },
      { q:'Chinese needs a measure word…', opts:['between a number and a noun','only for people','only in questions','never'], ans:0,
        why:'You cannot say 三杯子. It must be 三个杯子 — number, measure word, noun.' },
      { q:'二十块 means…', opts:['20 yuan','20 pieces','20 cups','20 people'], ans:0,
        why:'块 kuài is the spoken word for the yuan. 二十块 is twenty yuan.' },
      { q:'这 and 那 mean…', opts:['this and that','here and there','yes and no','buy and sell'], ans:0,
        why:'这 zhè this (near), 那 nà that (far). Add 儿 and they become places: 这儿 here, 那儿 there.' },
      { q:'下午 means…', opts:['afternoon','morning','yesterday','evening'], ans:0,
        why:'午 wǔ is noon: 上午 before noon (morning), 中午 noon, 下午 after noon (afternoon).' },
      { q:'Which is correct?', opts:['我想去商店买东西。','我想商店去买东西。','我买东西想去商店。','商店我想去买东西。'], ans:0,
        why:'想 + 去 + place + what you do there. The modal comes first, then the serial verbs in the order they happen.' },
      { q:'吃 goes with…', opts:['米饭','茶','钱','书'], ans:0,
        why:'吃 chī is for solid food and 喝 hē is for drinks. 吃米饭 eat rice, 喝茶 drink tea.' },
      { q:'Negate 我想喝茶:', opts:['我不想喝茶。','我想不喝茶。','我没想喝茶。','我不喝想茶。'], ans:0,
        why:'不 goes in front of the modal verb 想, exactly as it does with 会.' }
    ]},

  /* ==================================================================== 9 */
  { n:9, hz:'你儿子在哪儿工作', py:'Nǐ érzi zài nǎr gōngzuò', en:'Where does your son work', page:64,
    words:[
      {hz:'小', py:'xiǎo', en:'small'},
      {hz:'猫', py:'māo', en:'cat'},
      {hz:'在', py:'zài', en:'to be at; at'},
      {hz:'那儿', py:'nàr', en:'there'},
      {hz:'狗', py:'gǒu', en:'dog'},
      {hz:'椅子', py:'yǐzi', en:'chair'},
      {hz:'下', py:'xià', en:'under'},
      {hz:'哪儿', py:'nǎr', en:'where'},
      {hz:'工作', py:'gōngzuò', en:'to work; job'},
      {hz:'儿子', py:'érzi', en:'son'},
      {hz:'医院', py:'yīyuàn', en:'hospital'},
      {hz:'医生', py:'yīshēng', en:'doctor'},
      {hz:'爸爸', py:'bàba', en:'father'}
    ],
    notes:[
      {hz:'动词 "在"', en:'The verb 在'},
      {hz:'疑问代词 "哪儿"', en:'The interrogative pronoun 哪儿'},
      {hz:'介词 "在"', en:'The preposition 在'},
      {hz:'疑问助词 "呢" (2)', en:'The interrogative particle 呢 (2)'}
    ],
    qs:[
      { q:'哪儿 means…', opts:['where','which','who','how'], ans:0,
        why:'哪 which + 儿 → 哪儿 nǎr, where. 这儿 here and 那儿 there follow the same pattern.' },
      { q:'In 猫在椅子下, 在 is…', opts:['the main verb, "to be at"','a preposition','a question word','a particle'], ans:0,
        why:'With nothing after the place, 在 is the verb itself: the cat IS under the chair.' },
      { q:'In 我爸爸在医院工作, 在 is…', opts:['a preposition marking where the action happens','the main verb','a question word','a measure word'], ans:0,
        why:'The real verb is 工作. 在医院 is a prepositional phrase telling you where — and it must come BEFORE the verb.' },
      { q:'Which is correct?', opts:['我在医院工作。','我工作在医院。','我医院在工作。','在我医院工作。'], ans:0,
        why:'Unlike English, the place phrase goes before the verb in Chinese. "I at-hospital work."' },
      { q:'你儿子在哪儿工作？ is asking…', opts:['Where does your son work?','What does your son do?','Who is your son?','Is your son working?'], ans:0,
        why:'在哪儿 where + 工作 work. The question word sits exactly where the answer will sit.' },
      { q:'Answer 你爸爸在哪儿？', opts:['他在医院。','他是医院。','他有医院。','他医院在。'], ans:0,
        why:'在 is the verb here, so no 是 is needed: 他在医院 he is at the hospital.' },
      { q:'猫在椅子下 means…', opts:['The cat is under the chair','The chair is under the cat','The cat is on the chair','There is no cat'], ans:0,
        why:'Chinese puts the position word AFTER the noun: 椅子下 chair-under.' },
      { q:'医生 means…', opts:['doctor','hospital','medicine','nurse'], ans:0,
        why:'医生 yīshēng doctor, 医院 yīyuàn hospital. 院 means a courtyard or institution.' },
      { q:'我在学校。你___？', opts:['呢','吗','哪儿','什么'], ans:0,
        why:'呢 asks the same question back about someone else — "and you?" — without repeating any of it.' },
      { q:'Which asks where someone is, most simply?', opts:['你在哪儿？','你是哪儿？','你有哪儿？','你哪儿吗？'], ans:0,
        why:'在 is the verb of location. 是 would be wrong here.' },
      { q:'小狗 means…', opts:['puppy, little dog','a few dogs','the dog is small','dog food'], ans:0,
        why:'小 in front of a noun makes it small or young: 小狗 puppy, 小猫 kitten.' },
      { q:'Negate 我在家:', opts:['我不在家。','我没在家。','我不家在。','我在不家。'], ans:0,
        why:'在 as a verb takes 不 in the present: 我不在家 I am not at home.' }
    ]},

  /* =================================================================== 10 */
  { n:10, hz:'我能坐这儿吗', py:'Wǒ néng zuò zhèr ma', en:'Can I sit here', page:72,
    words:[
      {hz:'桌子', py:'zhuōzi', en:'desk, table'},
      {hz:'上', py:'shàng', en:'on, above'},
      {hz:'电脑', py:'diànnǎo', en:'computer'},
      {hz:'和', py:'hé', en:'and'},
      {hz:'本', py:'běn', en:'measure word for books'},
      {hz:'里', py:'lǐ', en:'inside'},
      {hz:'前面', py:'qiánmiàn', en:'front'},
      {hz:'后面', py:'hòumiàn', en:'back'},
      {hz:'这儿', py:'zhèr', en:'here'},
      {hz:'没有', py:'méiyǒu', en:'there is not'},
      {hz:'能', py:'néng', en:'can, may'},
      {hz:'坐', py:'zuò', en:'to sit'}
    ],
    notes:[
      {hz:'"有" 字句：表示存在', en:'The 有 sentence: indicating existence'},
      {hz:'连词 "和"', en:'The conjunction 和'},
      {hz:'能愿动词 "能"', en:'The modal verb 能'},
      {hz:'用 "请" 的祈使句', en:'Imperative sentences with 请'}
    ],
    qs:[
      { q:'桌子上有一个电脑 means…', opts:['There is a computer on the desk','The computer is a desk','The desk is on the computer','The computer has a desk'], ans:0,
        why:'Place + 有 + thing states that something exists there. The place comes first.' },
      { q:'我能坐这儿吗？ is asking for…', opts:['permission','a skill','a price','directions'], ans:0,
        why:'能 néng is the "can" of permission or possibility. 会 would be the "can" of a learned skill.' },
      { q:'Which uses 能 correctly?', opts:['我能坐这儿吗？','我能说汉语，我学了三年。','我能你的名字。','我能老师。'], ans:0,
        why:'能 asks whether something is allowed or possible. For a skill you have learned, 会 is the right word.' },
      { q:'Negate 桌子上有电脑:', opts:['桌子上没有电脑。','桌子上不有电脑。','桌子上有不电脑。','桌子没上有电脑。'], ans:0,
        why:'有 is always negated with 没, never 不: 没有.' },
      { q:'和 joins…', opts:['two nouns','two sentences','a verb and an object','a question'], ans:0,
        why:'和 hé links nouns: 我和你 you and me. It does not join two clauses the way English "and" does.' },
      { q:'Which is WRONG?', opts:['我去学校和我看书。','我和我朋友','老师和学生','书和电脑'], ans:0,
        why:'和 cannot join two actions. Chinese simply puts the clauses one after the other.' },
      { q:'Complete: 我有两___书。', opts:['本','个','口','块'], ans:0,
        why:'本 běn is the measure word for books. 个 is general but 本 is what a book takes.' },
      { q:'前面 means…', opts:['front','back','inside','above'], ans:0,
        why:'前面 qiánmiàn front, 后面 hòumiàn back, 里面 inside, 上面 on top.' },
      { q:'书在桌子上 means…', opts:['The book is on the desk','The desk is on the book','There is a desk and a book','The book is under the desk'], ans:0,
        why:'The position word follows the noun: 桌子上 desk-on.' },
      { q:'请坐 means…', opts:['Please sit down','I want to sit','Can I sit?','He is sitting'], ans:0,
        why:'请 qǐng at the front of a verb makes a polite request — please do this.' },
      { q:'What is the difference between 有 and 在?', opts:['有 says something exists somewhere; 在 says where a known thing is','They are the same','有 is a question word','在 is only for people'], ans:0,
        why:'桌子上有书 there is a book on the desk (new information). 书在桌子上 the book is on the desk (you already knew about the book).' },
      { q:'Put in order: 电脑 / 上 / 有 / 一个 / 桌子', opts:['桌子上有一个电脑','有桌子上一个电脑','一个电脑有桌子上','桌子有上一个电脑'], ans:0,
        why:'Place first, then 有, then the number-measure-noun: 桌子上 + 有 + 一个电脑.' }
    ]},

  /* =================================================================== 11 */
  { n:11, hz:'现在几点', py:'Xiànzài jǐ diǎn', en:"What's the time now", page:82,
    words:[
      {hz:'现在', py:'xiànzài', en:'now'},
      {hz:'点', py:'diǎn', en:"o'clock"},
      {hz:'分', py:'fēn', en:'minute'},
      {hz:'中午', py:'zhōngwǔ', en:'noon'},
      {hz:'吃饭', py:'chī fàn', en:'to eat a meal'},
      {hz:'时候', py:'shíhou', en:'time, moment'},
      {hz:'回', py:'huí', en:'to return'},
      {hz:'我们', py:'wǒmen', en:'we, us'},
      {hz:'电影', py:'diànyǐng', en:'film'},
      {hz:'住', py:'zhù', en:'to live, to stay'},
      {hz:'前', py:'qián', en:'before'}
    ],
    notes:[
      {hz:'时间的表达', en:'Expressing time'},
      {hz:'时间词做状语', en:'Time words used as adverbials'},
      {hz:'名词 "前"', en:'The noun 前'}
    ],
    qs:[
      { q:'How do you say "3 o\'clock"?', opts:['三点','三分','三时','点三'], ans:0,
        why:'点 diǎn is the hour. 分 fēn is the minute.' },
      { q:'八点二十分 means…', opts:['8:20','20:08','8 hours 20','2:08'], ans:0,
        why:'Hour first, then minutes: 八点 eight o’clock, 二十分 twenty minutes.' },
      { q:'现在几点？ is asking…', opts:['What time is it now?','What is today’s date?','How many hours?','When are you free?'], ans:0,
        why:'几 asks for a small number, and the hours only run to twelve, so 几点 is the natural way to ask the time.' },
      { q:'Which is correct for "I eat at twelve"?', opts:['我十二点吃饭。','我吃饭十二点。','十二点我吃饭吗？','我吃十二点饭。'], ans:0,
        why:'A time word is an adverbial and goes BEFORE the verb — either first in the sentence or straight after the subject.' },
      { q:'两点 or 二点 — which is correct for 2 o\'clock?', opts:['两点','二点','二两点','点二'], ans:0,
        why:'两 liǎng is used before a measure word, 二 èr for counting. The hour takes 两点, never 二点.' },
      { q:'什么时候 means…', opts:['when','what time exactly','how long','where'], ans:0,
        why:'什么时候 shénme shíhou asks "when" in general. 几点 asks for a clock time.' },
      { q:'我们 means…', opts:['we, us','you (plural)','they','I'], ans:0,
        why:'我 I + 们 (plural) = 我们 we. The same 们 makes 你们 and 他们.' },
      { q:'我住在北京 means…', opts:['I live in Beijing','I am going to Beijing','I am from Beijing','Beijing is my home town'], ans:0,
        why:'住 zhù is to live or stay somewhere. Here 在北京 follows 住 because it is where the living happens.' },
      { q:'回家 means…', opts:['to go home','to leave home','to have a home','to be at home'], ans:0,
        why:'回 huí is to return. 回家 go back home, 回来 come back.' },
      { q:'吃饭前 means…', opts:['before eating','after eating','while eating','instead of eating'], ans:0,
        why:'前 qián comes AFTER what it refers to: 吃饭前 before the meal. English puts "before" first; Chinese puts it last.' },
      { q:'Which is correct?', opts:['我们下午看电影。','我们看电影下午。','下午看我们电影。','我们看下午电影。'], ans:0,
        why:'The time word 下午 goes before the verb 看.' },
      { q:'中午 means…', opts:['noon','midnight','the middle of the week','afternoon'], ans:0,
        why:'中 middle + 午 noon. 上午 is before it and 下午 after it.' }
    ]},

  /* =================================================================== 12 */
  { n:12, hz:'明天天气怎么样', py:'Míngtiān tiānqì zěnmeyàng', en:'What will the weather be like tomorrow', page:90,
    words:[
      {hz:'天气', py:'tiānqì', en:'weather'},
      {hz:'怎么样', py:'zěnmeyàng', en:'how, how about'},
      {hz:'太', py:'tài', en:'too, excessively'},
      {hz:'热', py:'rè', en:'hot'},
      {hz:'冷', py:'lěng', en:'cold'},
      {hz:'下雨', py:'xià yǔ', en:'to rain'},
      {hz:'小姐', py:'xiǎojiě', en:'miss'},
      {hz:'来', py:'lái', en:'to come'},
      {hz:'爱', py:'ài', en:'to love'},
      {hz:'些', py:'xiē', en:'some'},
      {hz:'水果', py:'shuǐguǒ', en:'fruit'},
      {hz:'水', py:'shuǐ', en:'water'}
    ],
    notes:[
      {hz:'疑问代词 "怎么样"', en:'The interrogative pronoun 怎么样'},
      {hz:'主谓谓语句', en:'Sentences with a subject-predicate phrase as the predicate'},
      {hz:'程度副词 "太"', en:'The adverb 太'},
      {hz:'能愿动词 "会" (2)', en:'The modal verb 会 (2)'}
    ],
    qs:[
      { q:'今天天气怎么样？ is asking…', opts:['What is the weather like today?','Is the weather good?','How many days?','When will it rain?'], ans:0,
        why:'怎么样 zěnmeyàng asks for an opinion or description — what is it like, how is it.' },
      { q:'太热了 means…', opts:['It is too hot','It is quite hot','It is not hot','It is getting hot'], ans:0,
        why:'太 tài is "excessively", and it almost always ends with 了: 太热了, 太贵了.' },
      { q:'太 is usually followed at the end by…', opts:['了','吗','呢','的'], ans:0,
        why:'太……了 is a fixed frame. Leaving off 了 sounds unfinished.' },
      { q:'In 明天会下雨, 会 means…', opts:['will — a prediction','can — a skill','may — permission','must'], ans:0,
        why:'This is the second use of 会: not a learned skill but a likelihood. 明天会下雨 it will rain tomorrow.' },
      { q:'In 我今天身体很好, the predicate is…', opts:['身体很好 — itself a subject and a predicate','很好 only','今天','我'], ans:0,
        why:'身体很好 is a small sentence in its own right, and the whole of it describes 我. That is a subject-predicate predicate sentence (主谓谓语句).' },
      { q:'下雨 means…', opts:['to rain','under the rain','rainy season','umbrella'], ans:0,
        why:'下 xià here is "to fall": 下雨 rain falls. The same 下 gives 下雪 to snow.' },
      { q:'冷 is the opposite of…', opts:['热','水','来','太'], ans:0,
        why:'冷 lěng cold, 热 rè hot.' },
      { q:'Which is correct?', opts:['明天不会下雨。','明天会不下雨。','明天没会下雨。','明天会下不雨。'], ans:0,
        why:'不 goes in front of the modal 会, as it does with 想 and 能.' },
      { q:'我们去看电影，怎么样？ is…', opts:['a suggestion — how about it?','a question about the weather','a complaint','a refusal'], ans:0,
        why:'怎么样 at the end of a proposal softens it into "how about it?".' },
      { q:'一些水果 means…', opts:['some fruit','one fruit','a lot of fruit','fruit juice'], ans:0,
        why:'些 xiē is a measure word meaning an unspecified small number: 一些 some, 这些 these.' },
      { q:'我爱我妈妈 means…', opts:['I love my mother','I like my mother','My mother loves me','I miss my mother'], ans:0,
        why:'爱 ài is stronger than 喜欢 xǐhuan (to like) and is mostly kept for family and very close people.' },
      { q:'Which asks about someone\'s health?', opts:['你身体怎么样？','你身体几点？','你身体多少？','你身体在哪儿？'], ans:0,
        why:'怎么样 asks what something is like — here, how their health is.' }
    ]},

  /* =================================================================== 13 */
  { n:13, hz:'他在学做中国菜呢', py:'Tā zài xué zuò Zhōngguó cài ne', en:'He is learning to cook Chinese food', page:98,
    words:[
      {hz:'喂', py:'wèi', en:'hello (on the phone)'},
      {hz:'也', py:'yě', en:'also'},
      {hz:'学习', py:'xuéxí', en:'to study'},
      {hz:'上午', py:'shàngwǔ', en:'morning'},
      {hz:'睡觉', py:'shuìjiào', en:'to sleep'},
      {hz:'电视', py:'diànshì', en:'television'},
      {hz:'喜欢', py:'xǐhuan', en:'to like'},
      {hz:'给', py:'gěi', en:'to give; to'},
      {hz:'打电话', py:'dǎ diànhuà', en:'to make a phone call'},
      {hz:'吧', py:'ba', en:'suggestion particle'}
    ],
    notes:[
      {hz:'叹词 "喂"', en:'The interjection 喂'},
      {hz:'"在……呢" 表示动作正在进行', en:'在……呢 for an action in progress'},
      {hz:'电话号码的表达', en:'Saying telephone numbers'},
      {hz:'语气助词 "吧"', en:'The modal particle 吧'}
    ],
    qs:[
      { q:'他在看电视呢 means…', opts:['He is watching television right now','He watched television','He will watch television','He likes television'], ans:0,
        why:'在 before the verb and 呢 at the end together mark an action in progress. Either one alone also works.' },
      { q:'喂 is used…', opts:['to answer the telephone','to say goodbye','to thank someone','to apologise'], ans:0,
        why:'喂 wèi is the Chinese "hello?" on the phone. It is not used to greet someone face to face.' },
      { q:'我们走吧 means…', opts:["Let's go",'Are we going?','We went','We can go'], ans:0,
        why:'吧 ba at the end turns a statement into a gentle suggestion — let’s do it.' },
      { q:'吧 makes a sentence…', opts:['a suggestion or a soft guess','a firm question','negative','past tense'], ans:0,
        why:'吧 softens. 你是老师吧？ means "you are a teacher, I suppose?" rather than a straight question.' },
      { q:'Complete: 我给我妈妈___电话。', opts:['打','做','说','看'], ans:0,
        why:'打电话 dǎ diànhuà is a fixed pair — literally "to hit a phone". The verb is always 打.' },
      { q:'我也是学生 means…', opts:['I am a student too','I am only a student','I was a student','Am I a student?'], ans:0,
        why:'也 yě "also" goes before the verb, never at the end as English sometimes allows.' },
      { q:'Where does 也 go?', opts:['before the verb','at the end','before the subject','after the object'], ans:0,
        why:'他也去 he goes too. 他去也 is wrong.' },
      { q:'喜欢 means…', opts:['to like','to love','to want','to need'], ans:0,
        why:'喜欢 xǐhuan is the everyday "like". 爱 ài is stronger.' },
      { q:'How is the phone number 8 6 3 read?', opts:['八六三 — digit by digit','八百六十三','八十六三','六十八三'], ans:0,
        why:'Phone numbers are read one digit at a time, not as a whole number. 1 is often read yāo instead of yī to avoid confusion with 7.' },
      { q:'上午 means…', opts:['morning','afternoon','evening','midnight'], ans:0,
        why:'上午 shàngwǔ before noon. 下午 xiàwǔ after noon.' },
      { q:'Which is correct?', opts:['我在学习汉语呢。','我学习在汉语呢。','我学习汉语在呢。','在我学习汉语呢。'], ans:0,
        why:'在 goes directly before the verb; 呢 goes at the very end of the sentence.' },
      { q:'睡觉 means…', opts:['to sleep','to wake up','to rest','to dream'], ans:0,
        why:'睡觉 shuìjiào. It is a verb-object pair, so words can come between: 睡了一个觉.' }
    ]},

  /* =================================================================== 14 */
  { n:14, hz:'她买了不少衣服', py:'Tā mǎi le bù shǎo yīfu', en:'She has bought quite a few clothes', page:104,
    words:[
      {hz:'东西', py:'dōngxi', en:'thing'},
      {hz:'一点儿', py:'yìdiǎnr', en:'a little'},
      {hz:'苹果', py:'píngguǒ', en:'apple'},
      {hz:'看见', py:'kànjiàn', en:'to see'},
      {hz:'先生', py:'xiānsheng', en:'Mr, sir'},
      {hz:'开', py:'kāi', en:'to drive'},
      {hz:'车', py:'chē', en:'car'},
      {hz:'回来', py:'huílái', en:'to come back'},
      {hz:'分钟', py:'fēnzhōng', en:'minute'},
      {hz:'后', py:'hòu', en:'after'},
      {hz:'衣服', py:'yīfu', en:'clothes'},
      {hz:'漂亮', py:'piàoliang', en:'pretty'},
      {hz:'少', py:'shǎo', en:'few'},
      {hz:'这些', py:'zhèxiē', en:'these'},
      {hz:'都', py:'dōu', en:'both, all'}
    ],
    notes:[
      {hz:'"了" 表发生或完成', en:'了 indicating occurrence or completion'},
      {hz:'名词 "后"', en:'The noun 后'},
      {hz:'语气助词 "啊"', en:'The modal particle 啊'},
      {hz:'副词 "都"', en:'The adverb 都'}
    ],
    qs:[
      { q:'In 她买了不少衣服, 了 shows…', opts:['the buying has happened','a change of state','a question','the future'], ans:0,
        why:'了 straight after a verb marks the action as completed. This is a different 了 from the one in Lesson 5, which marked a change.' },
      { q:'不少 means…', opts:['quite a few','not few enough','a little','none'], ans:0,
        why:'不少 bù shǎo — "not few", so actually a good number. It is a positive amount, despite the 不.' },
      { q:'Where does 都 go?', opts:['before the verb','at the end','before the subject','after the object'], ans:0,
        why:'我们都是学生 we are all students. 都 always comes before the verb, never after the noun it refers to.' },
      { q:'Which is correct?', opts:['我们都喜欢中国菜。','我们喜欢都中国菜。','都我们喜欢中国菜。','我们喜欢中国菜都。'], ans:0,
        why:'都 refers back to 我们 but must still stand immediately before the verb.' },
      { q:'五分钟后 means…', opts:['in five minutes','five minutes ago','for five minutes','every five minutes'], ans:0,
        why:'后 hòu comes after the time, just as 前 does: 五分钟后 after five minutes.' },
      { q:'看见 differs from 看 because…', opts:['看见 means you actually saw it; 看 is only looking','看见 is polite','看见 is past tense','they are the same'], ans:0,
        why:'看 is the act of looking, 看见 is the result — you succeeded in seeing. 我看了，可是没看见 I looked, but did not see it.' },
      { q:'一点儿 means…', opts:['a little','one o’clock only','a lot','none'], ans:0,
        why:'一点儿 yìdiǎnr is a small amount of something: 一点儿水 a little water. Note that 一点 on its own can also mean one o’clock — context decides.' },
      { q:'Negate 我买了衣服 (I did not buy clothes):', opts:['我没买衣服。','我不买了衣服。','我没买了衣服。','我不买衣服了。'], ans:0,
        why:'A completed action is negated with 没, and the 了 then drops away entirely. 没买了 is always wrong.' },
      { q:'开车 means…', opts:['to drive','to open a car','to start the engine','to buy a car'], ans:0,
        why:'开 kāi covers opening and operating. 开车 drive a car, 开门 open a door.' },
      { q:'这些 means…', opts:['these','this one','all','some of them'], ans:0,
        why:'这 this + 些 some → 这些 these. 那些 is those.' },
      { q:'漂亮 describes…', opts:['how something looks','how something tastes','how someone feels','the weather only'], ans:0,
        why:'漂亮 piàoliang is pretty or good-looking — for people, clothes and things.' },
      { q:'Which is correct for "I bought two apples"?', opts:['我买了两个苹果。','我买两个苹果了。','我了买两个苹果。','我买了二个苹果。'], ans:0,
        why:'了 goes straight after the verb, and 两 not 二 is used before a measure word.' }
    ]},

  /* =================================================================== 15 */
  { n:15, hz:'我是坐飞机来的', py:'Wǒ shì zuò fēijī lái de', en:'I came here by air', page:112,
    words:[
      {hz:'认识', py:'rènshi', en:'to know, to meet'},
      {hz:'年', py:'nián', en:'year'},
      {hz:'大学', py:'dàxué', en:'university'},
      {hz:'饭店', py:'fàndiàn', en:'hotel, restaurant'},
      {hz:'出租车', py:'chūzūchē', en:'taxi'},
      {hz:'一起', py:'yìqǐ', en:'together'},
      {hz:'高兴', py:'gāoxìng', en:'glad'},
      {hz:'听', py:'tīng', en:'to listen'},
      {hz:'飞机', py:'fēijī', en:'airplane'}
    ],
    notes:[
      {hz:'"是……的" 句', en:'The 是……的 structure: emphasising time, place or manner'},
      {hz:'日期的表达 (2)', en:'Expressing a full date: year, month, day, weekday'}
    ],
    qs:[
      { q:'我是坐飞机来的 emphasises…', opts:['how I came','that I came','when I came','who came'], ans:0,
        why:'是……的 wraps around the part being emphasised. Here 坐飞机 (by plane) sits inside, so the manner is the point.' },
      { q:'是……的 is used when…', opts:['the action already happened and you are asking about its time, place or manner','the action is in the future','you are making a suggestion','you are negating'], ans:0,
        why:'Both speakers already know the action happened. What is being established is a detail of it.' },
      { q:'你是什么时候来的？ is asking…', opts:['When did you come?','Are you coming?','Why did you come?','Who came with you?'], ans:0,
        why:'什么时候 sits inside the 是……的 frame, so the time is what is being asked about.' },
      { q:'How do you say "2 May 2020"?', opts:['二〇二〇年五月二日','五月二日二〇二〇年','二日五月二〇二〇年','二〇二〇年二日五月'], ans:0,
        why:'Always largest unit to smallest: year, then month, then day.' },
      { q:'The year 2020 is read…', opts:['二〇二〇 — digit by digit','两千零二十','二十二十','二千二十'], ans:0,
        why:'Years are read one digit at a time, like phone numbers.' },
      { q:'认识 means…', opts:['to know someone, to be acquainted','to recognise a place','to study','to remember'], ans:0,
        why:'认识 rènshi is knowing a person or a character by sight. 认识你很高兴 is "pleased to meet you".' },
      { q:'认识你很高兴 means…', opts:['Pleased to meet you','I know you are happy','You know I am happy','Do you know me?'], ans:0,
        why:'Literally "knowing you, very glad" — the standard phrase on being introduced.' },
      { q:'我们一起去 means…', opts:["Let's go together",'We went first','We each go','We are going now'], ans:0,
        why:'一起 yìqǐ "together" goes before the verb, like other adverbs.' },
      { q:'坐出租车 means…', opts:['to take a taxi','to sit in a taxi seat','to drive a taxi','to buy a taxi'], ans:0,
        why:'坐 zuò is used for travelling by a vehicle you sit in: 坐飞机, 坐出租车. Driving one yourself is 开.' },
      { q:'Which is correct?', opts:['我是昨天来的。','我昨天是来的。','我是来昨天的。','我来是昨天的。'], ans:0,
        why:'是 goes before the emphasised part and 的 at the end: 是 + 昨天来 + 的.' },
      { q:'大学 means…', opts:['university','big school','big study','high school'], ans:0,
        why:'大学 dàxué. 学校 xuéxiào is the general word for a school.' },
      { q:'饭店 can mean…', opts:['both a hotel and a restaurant','only a restaurant','only a hotel','a shop'], ans:0,
        why:'饭店 fàndiàn covers both. 商店 shāngdiàn is a shop.' }
    ]}
  ];

  /* -------------------------------------------------------- the final paper
     Drawn across the whole book, so it is only offered once every chapter
     test has been taken at least once. */
  var FINAL = [
    { q:'她是我___汉语老师。', opts:['的','是','很','了'], ans:0,
      why:'的 marks possession between 我 and 老师.' },
    { q:'你家有几___人？', opts:['口','个','本','块'], ans:0,
      why:'口 is the measure word reserved for family members.' },
    { q:'我___说汉语，我学了两年。', opts:['会','能','想','在'], ans:0,
      why:'会 is the "can" of a skill you have learned.' },
    { q:'我___坐这儿吗？', opts:['能','会','很','都'], ans:0,
      why:'能 asks permission. 会 would be asking whether you know how to sit.' },
    { q:'桌子上___一个电脑。', opts:['有','是','在','和'], ans:0,
      why:'Place + 有 + thing states that something exists there.' },
    { q:'我爸爸___医院工作。', opts:['在','是','有','去'], ans:0,
      why:'在 + place goes before the verb 工作.' },
    { q:'今天___号？', opts:['几','多少','什么','怎么'], ans:0,
      why:'几 is used for small numbers, and dates only run to 31.' },
    { q:'这个杯子___钱？', opts:['多少','几','什么','怎么样'], ans:0,
      why:'多少钱 is the fixed way to ask a price.' },
    { q:'我们___是学生。', opts:['都','也都','很','太'], ans:0,
      why:'都 goes immediately before the verb.' },
    { q:'明天天气___？', opts:['怎么样','怎么','什么','几'], ans:0,
      why:'怎么样 asks what something is like. 怎么 asks how something is done.' },
    { q:'他___看电视呢。', opts:['在','是','会','了'], ans:0,
      why:'在 before the verb with 呢 at the end marks an action in progress.' },
    { q:'我没___衣服。', opts:['买','买了','了买','买的'], ans:0,
      why:'When 没 negates a completed action, the 了 disappears.' },
    { q:'我___坐飞机来的。', opts:['是','在','会','很'], ans:0,
      why:'是……的 emphasises the manner of an action that already happened.' },
    { q:'太热___！', opts:['了','吗','呢','的'], ans:0,
      why:'太……了 is a fixed frame.' },
    { q:'我给妈妈___电话。', opts:['打','做','说','看'], ans:0,
      why:'打电话 is a fixed verb-object pair.' },
    { q:'Which is WRONG?', opts:['她是很好。','她很好。','她不好。','她好吗？'], ans:0,
      why:'是 is never used before an adjective — the adjective is already the predicate.' },
    { q:'Which is WRONG?', opts:['我不有钱。','我没有钱。','我不是学生。','我不想去。'], ans:0,
      why:'有 is negated with 没, never with 不.' },
    { q:'Put in order: 学校 / 我 / 去 / 看书', opts:['我去学校看书','我看书去学校','我学校去看书','去我学校看书'], ans:0,
      why:'Subject, then 去, then the place, then what you do there.' },
    { q:'Which time expression is correctly placed?', opts:['我明天去学校。','我去学校明天。','我去明天学校。','明天去我学校。'], ans:0,
      why:'Time words come before the verb.' },
    { q:'How is 25 written?', opts:['二十五','五十二','二五','十二五'], ans:0,
      why:'二十 twenty + 五 five.' }
  ];

  global.HSK1_BANK = { lessons: LESSONS, final: FINAL };
})(window);
