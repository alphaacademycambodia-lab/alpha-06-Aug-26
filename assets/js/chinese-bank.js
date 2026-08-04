/* Alpha Academy Cambodia — Chinese for Beginners: content bank
   ---------------------------------------------------------------------------
   Data only. The page logic lives in assets/js/chinese-beginner.js.

   Two rules the renderer depends on, so keep them when you add material:

     1. `hz` holds Chinese characters and punctuation; `py` holds ONLY the
        pinyin syllables, separated by single spaces — no commas, no full
        stops. The renderer stacks one syllable over one character, so the
        syllable count must match the character count once punctuation is
        removed. (If it does not, the whole phrase simply gets one pinyin
        line above it instead of per-character stacking — nothing breaks.)

     2. Audio is always spoken from `hz`, never from pinyin. A Chinese voice
        reads characters correctly but mangles Latin letters.

   `km` is the Khmer gloss, shown when the visitor switches the site to ខ្មែរ.  */
(function (global) {
  'use strict';

  /* ==================================================================== 1
     TONES — the four tones plus the neutral tone.                        */
  var TONES = [
    { n: 1, mark: 'ā', name: 'First tone — high and level',
      hz: '妈', py: 'mā', en: 'mother', km: 'ម្តាយ',
      desc: 'Start high and hold it flat, like singing one steady note.',
      tip: 'Say it as high as your normal speaking voice goes, then do not move.' },
    { n: 2, mark: 'á', name: 'Second tone — rising',
      hz: '麻', py: 'má', en: 'hemp', km: 'ធ្មៃ',
      desc: 'Start in the middle and climb up, like asking "What?" in English.',
      tip: 'Think of the surprise in "Me?" — the pitch goes up, not the volume.' },
    { n: 3, mark: 'ǎ', name: 'Third tone — falling then rising',
      hz: '马', py: 'mǎ', en: 'horse', km: 'សេះ',
      desc: 'Dip down low, then come back up. On its own it is long and low.',
      tip: 'Before another third tone it changes: 你好 is said ní hǎo, not nǐ hǎo.' },
    { n: 4, mark: 'à', name: 'Fourth tone — sharp fall',
      hz: '骂', py: 'mà', en: 'to scold', km: 'ស្តី​បន្ទោស',
      desc: 'Drop from high to low quickly, like a firm "No!"',
      tip: 'Short and decisive. Learners often make it too soft — commit to the fall.' },
    { n: 0, mark: 'a', name: 'Neutral tone — light and short',
      hz: '吗', py: 'ma', en: 'question particle', km: 'ពាក្យសួរ',
      desc: 'No tone mark. Say it quickly and quietly, leaning on the word before it.',
      tip: 'Common on second syllables: 妈妈 māma, 谢谢 xièxie, 我们 wǒmen.' }
  ];

  /* ==================================================================== 1b
     THE PINYIN CHART — the sounds on their own, with no example word next
     to them. `p` is what the student sees; `hz` is the character actually
     spoken (a voice cannot read Latin letters); `read` is the syllable that
     character produces, used for the button's label.                      */
  var CHART = {
    tones: [
      { p: 'ā', hz: '妈', read: 'mā' },
      { p: 'á', hz: '麻', read: 'má' },
      { p: 'ǎ', hz: '马', read: 'mǎ' },
      { p: 'à', hz: '骂', read: 'mà' },
      { p: 'a', hz: '吗', read: 'ma — neutral' }
    ],
    initials: [
      { p: 'b',  hz: '波', read: 'bo' },  { p: 'p',  hz: '坡', read: 'po' },
      { p: 'm',  hz: '摸', read: 'mo' },  { p: 'f',  hz: '佛', read: 'fo' },
      { p: 'd',  hz: '得', read: 'de' },  { p: 't',  hz: '特', read: 'te' },
      { p: 'n',  hz: '呢', read: 'ne' },  { p: 'l',  hz: '乐', read: 'le' },
      { p: 'g',  hz: '哥', read: 'ge' },  { p: 'k',  hz: '科', read: 'ke' },
      { p: 'h',  hz: '喝', read: 'he' },
      { p: 'j',  hz: '鸡', read: 'ji' },  { p: 'q',  hz: '七', read: 'qi' },
      { p: 'x',  hz: '西', read: 'xi' },
      { p: 'zh', hz: '知', read: 'zhi' }, { p: 'ch', hz: '吃', read: 'chi' },
      { p: 'sh', hz: '师', read: 'shi' }, { p: 'r',  hz: '日', read: 'ri' },
      { p: 'z',  hz: '字', read: 'zi' },  { p: 'c',  hz: '次', read: 'ci' },
      { p: 's',  hz: '四', read: 'si' },
      { p: 'y',  hz: '衣', read: 'yi' },  { p: 'w',  hz: '屋', read: 'wu' }
    ],
    finals: [
      { grp: 'Single',  p: 'a',  hz: '啊', read: 'a' },
      { grp: 'Single',  p: 'o',  hz: '哦', read: 'o' },
      { grp: 'Single',  p: 'e',  hz: '鹅', read: 'e' },
      { grp: 'Single',  p: 'i',  hz: '衣', read: 'yi' },
      { grp: 'Single',  p: 'u',  hz: '屋', read: 'wu' },
      { grp: 'Single',  p: 'ü',  hz: '鱼', read: 'yu' },

      { grp: 'Two vowels', p: 'ai', hz: '爱', read: 'ai' },
      { grp: 'Two vowels', p: 'ei', hz: '诶', read: 'ei' },
      { grp: 'Two vowels', p: 'ao', hz: '袄', read: 'ao' },
      { grp: 'Two vowels', p: 'ou', hz: '欧', read: 'ou' },

      { grp: 'Ending in -n / -ng', p: 'an',  hz: '安', read: 'an' },
      { grp: 'Ending in -n / -ng', p: 'en',  hz: '恩', read: 'en' },
      { grp: 'Ending in -n / -ng', p: 'ang', hz: '昂', read: 'ang' },
      { grp: 'Ending in -n / -ng', p: 'eng', hz: '灯', read: 'dēng *' },
      { grp: 'Ending in -n / -ng', p: 'ong', hz: '东', read: 'dōng *' },
      { grp: 'Ending in -n / -ng', p: 'er',  hz: '二', read: 'er' },

      { grp: 'Starting with i-', p: 'ia',   hz: '呀', read: 'ya' },
      { grp: 'Starting with i-', p: 'ie',   hz: '夜', read: 'ye' },
      { grp: 'Starting with i-', p: 'iao',  hz: '要', read: 'yao' },
      { grp: 'Starting with i-', p: 'iu',   hz: '有', read: 'you' },
      { grp: 'Starting with i-', p: 'ian',  hz: '烟', read: 'yan' },
      { grp: 'Starting with i-', p: 'in',   hz: '音', read: 'yin' },
      { grp: 'Starting with i-', p: 'iang', hz: '羊', read: 'yang' },
      { grp: 'Starting with i-', p: 'ing',  hz: '英', read: 'ying' },
      { grp: 'Starting with i-', p: 'iong', hz: '用', read: 'yong' },

      { grp: 'Starting with u-', p: 'ua',   hz: '蛙', read: 'wa' },
      { grp: 'Starting with u-', p: 'uo',   hz: '我', read: 'wo' },
      { grp: 'Starting with u-', p: 'uai',  hz: '歪', read: 'wai' },
      { grp: 'Starting with u-', p: 'ui',   hz: '为', read: 'wei' },
      { grp: 'Starting with u-', p: 'uan',  hz: '弯', read: 'wan' },
      { grp: 'Starting with u-', p: 'un',   hz: '问', read: 'wen' },
      { grp: 'Starting with u-', p: 'uang', hz: '王', read: 'wang' },
      { grp: 'Starting with u-', p: 'ueng', hz: '翁', read: 'weng' },

      { grp: 'Starting with ü-', p: 'üe',  hz: '月', read: 'yue' },
      { grp: 'Starting with ü-', p: 'üan', hz: '远', read: 'yuan' },
      { grp: 'Starting with ü-', p: 'ün',  hz: '云', read: 'yun' }
    ],
    note: '* -eng and -ong never stand alone as a syllable, so they are played inside dēng and dōng. ' +
          'The initials are played the way they are read out in a Chinese classroom — b as "bo", d as "de", j as "ji".'
  };

  /* ==================================================================== 2
     INITIALS — the 21 consonant starts, plus y and w.                    */
  var INITIALS = [
    { grp: 'Lips', p: 'b',  hz: '八', py: 'bā',    en: 'eight',    tip: 'Like the p in "spin" — no puff of air.' },
    { grp: 'Lips', p: 'p',  hz: '怕', py: 'pà',    en: 'to fear',  tip: 'Like the p in "pen" — strong puff of air.' },
    { grp: 'Lips', p: 'm',  hz: '妈', py: 'mā',    en: 'mother',   tip: 'Same as English m.' },
    { grp: 'Lips', p: 'f',  hz: '飞', py: 'fēi',   en: 'to fly',   tip: 'Same as English f.' },

    { grp: 'Tongue tip', p: 'd', hz: '大', py: 'dà',  en: 'big',      tip: 'Like the t in "stop" — unaspirated.' },
    { grp: 'Tongue tip', p: 't', hz: '他', py: 'tā',  en: 'he',       tip: 'Like the t in "top" — aspirated.' },
    { grp: 'Tongue tip', p: 'n', hz: '你', py: 'nǐ',  en: 'you',      tip: 'Same as English n.' },
    { grp: 'Tongue tip', p: 'l', hz: '六', py: 'liù', en: 'six',      tip: 'Same as English l. Keep it clearly apart from n.' },

    { grp: 'Back of the mouth', p: 'g', hz: '哥', py: 'gē',  en: 'older brother', tip: 'Like the k in "skill" — no puff.' },
    { grp: 'Back of the mouth', p: 'k', hz: '看', py: 'kàn', en: 'to look',       tip: 'Like the k in "kill" — with a puff.' },
    { grp: 'Back of the mouth', p: 'h', hz: '好', py: 'hǎo', en: 'good',          tip: 'Rougher than English h, from the throat.' },

    { grp: 'Flat tongue, smiling', p: 'j', hz: '几', py: 'jǐ',  en: 'how many', tip: 'Tongue flat behind the lower teeth, lips spread.' },
    { grp: 'Flat tongue, smiling', p: 'q', hz: '去', py: 'qù',  en: 'to go',    tip: 'Same shape as j but with a strong puff of air.' },
    { grp: 'Flat tongue, smiling', p: 'x', hz: '下', py: 'xià', en: 'below',    tip: 'Between English s and sh, said with a smile.' },

    { grp: 'Curled tongue', p: 'zh', hz: '中', py: 'zhōng', en: 'middle',  tip: 'Tongue tip curled back to the roof: like "j" in "judge".' },
    { grp: 'Curled tongue', p: 'ch', hz: '吃', py: 'chī',   en: 'to eat',  tip: 'zh with a puff of air.' },
    { grp: 'Curled tongue', p: 'sh', hz: '是', py: 'shì',   en: 'to be',   tip: 'English sh, but with the tongue curled further back.' },
    { grp: 'Curled tongue', p: 'r',  hz: '人', py: 'rén',   en: 'person',  tip: 'Between English r and the s in "measure".' },

    { grp: 'Flat tongue, buzzing', p: 'z', hz: '在', py: 'zài', en: 'to be at', tip: 'Like the ds in "beds".' },
    { grp: 'Flat tongue, buzzing', p: 'c', hz: '菜', py: 'cài', en: 'dish',     tip: 'Like the ts in "cats", with a puff.' },
    { grp: 'Flat tongue, buzzing', p: 's', hz: '三', py: 'sān', en: 'three',    tip: 'Same as English s.' },

    { grp: 'Spelling helpers', p: 'y', hz: '要', py: 'yào', en: 'to want', tip: 'Written in front of i- finals when there is no other initial.' },
    { grp: 'Spelling helpers', p: 'w', hz: '我', py: 'wǒ',  en: 'I, me',   tip: 'Written in front of u- finals when there is no other initial.' }
  ];

  /* ==================================================================== 3
     FINALS — the vowel endings, with one everyday example each.          */
  var FINALS = [
    { grp: 'Single', p: 'a',  hz: '八', py: 'bā',   en: 'eight' },
    { grp: 'Single', p: 'o',  hz: '我', py: 'wǒ',   en: 'I, me' },
    { grp: 'Single', p: 'e',  hz: '饿', py: 'è',    en: 'hungry' },
    { grp: 'Single', p: 'i',  hz: '一', py: 'yī',   en: 'one' },
    { grp: 'Single', p: 'u',  hz: '五', py: 'wǔ',   en: 'five' },
    { grp: 'Single', p: 'ü',  hz: '女', py: 'nǚ',   en: 'woman' },

    { grp: 'Two vowels', p: 'ai', hz: '爱', py: 'ài',  en: 'to love' },
    { grp: 'Two vowels', p: 'ei', hz: '杯', py: 'bēi', en: 'cup' },
    { grp: 'Two vowels', p: 'ao', hz: '好', py: 'hǎo', en: 'good' },
    { grp: 'Two vowels', p: 'ou', hz: '走', py: 'zǒu', en: 'to walk' },

    { grp: 'Ending in -n / -ng', p: 'an',   hz: '三', py: 'sān',   en: 'three' },
    { grp: 'Ending in -n / -ng', p: 'en',   hz: '人', py: 'rén',   en: 'person' },
    { grp: 'Ending in -n / -ng', p: 'ang',  hz: '忙', py: 'máng',  en: 'busy' },
    { grp: 'Ending in -n / -ng', p: 'eng',  hz: '冷', py: 'lěng',  en: 'cold' },
    { grp: 'Ending in -n / -ng', p: 'ong',  hz: '中', py: 'zhōng', en: 'middle' },
    { grp: 'Ending in -n / -ng', p: 'er',   hz: '二', py: 'èr',    en: 'two' },

    { grp: 'Starting with i-', p: 'ia',   hz: '家', py: 'jiā',   en: 'home' },
    { grp: 'Starting with i-', p: 'ie',   hz: '谢', py: 'xiè',   en: 'to thank' },
    { grp: 'Starting with i-', p: 'iao',  hz: '小', py: 'xiǎo',  en: 'small' },
    { grp: 'Starting with i-', p: 'iu',   hz: '六', py: 'liù',   en: 'six' },
    { grp: 'Starting with i-', p: 'ian',  hz: '天', py: 'tiān',  en: 'sky, day' },
    { grp: 'Starting with i-', p: 'in',   hz: '新', py: 'xīn',   en: 'new' },
    { grp: 'Starting with i-', p: 'iang', hz: '想', py: 'xiǎng', en: 'to think' },
    { grp: 'Starting with i-', p: 'ing',  hz: '明', py: 'míng',  en: 'bright' },
    { grp: 'Starting with i-', p: 'iong', hz: '用', py: 'yòng',  en: 'to use' },

    { grp: 'Starting with u-', p: 'ua',   hz: '花', py: 'huā',   en: 'flower' },
    { grp: 'Starting with u-', p: 'uo',   hz: '说', py: 'shuō',  en: 'to speak' },
    { grp: 'Starting with u-', p: 'uai',  hz: '快', py: 'kuài',  en: 'fast' },
    { grp: 'Starting with u-', p: 'ui',   hz: '水', py: 'shuǐ',  en: 'water' },
    { grp: 'Starting with u-', p: 'uan',  hz: '关', py: 'guān',  en: 'to close' },
    { grp: 'Starting with u-', p: 'un',   hz: '春', py: 'chūn',  en: 'spring' },
    { grp: 'Starting with u-', p: 'uang', hz: '黄', py: 'huáng', en: 'yellow' },

    { grp: 'Starting with ü-', p: 'üe',  hz: '月', py: 'yuè',  en: 'moon, month' },
    { grp: 'Starting with ü-', p: 'üan', hz: '远', py: 'yuǎn', en: 'far' },
    { grp: 'Starting with ü-', p: 'ün',  hz: '云', py: 'yún',  en: 'cloud' }
  ];

  /* ==================================================================== 4
     SPELLING RULES — the handful of pinyin conventions that confuse
     beginners when they first read a textbook.                           */
  var SPELLING = [
    { h: 'The two dots on ü disappear after j q x y',
      p: 'ju, qu, xu, yu are all said with ü. Only n and l keep the dots, because nu / nü and lu / lü are different words.',
      ex: [{ hz: '去', py: 'qù', en: 'to go' }, { hz: '女', py: 'nǚ', en: 'woman' }, { hz: '鱼', py: 'yú', en: 'fish' }] },
    { h: 'iou, uei, uen are shortened after an initial',
      p: 'They are written -iu, -ui, -un. The middle vowel is still there when you say it, just written short.',
      ex: [{ hz: '六', py: 'liù', en: 'six' }, { hz: '水', py: 'shuǐ', en: 'water' }, { hz: '春', py: 'chūn', en: 'spring' }] },
    { h: 'y and w fill an empty initial slot',
      p: 'A syllable never starts with a bare i or u in writing: i → yi, u → wu, ü → yu.',
      ex: [{ hz: '一', py: 'yī', en: 'one' }, { hz: '五', py: 'wǔ', en: 'five' }, { hz: '月', py: 'yuè', en: 'month' }] },
    { h: 'Where the tone mark sits',
      p: 'On a, or o, or e first. If none are there, mark the last vowel: a &gt; o &gt; e &gt; i &gt; u &gt; ü. In iu and ui the mark goes on the second letter.',
      ex: [{ hz: '好', py: 'hǎo', en: 'good' }, { hz: '六', py: 'liù', en: 'six' }, { hz: '水', py: 'shuǐ', en: 'water' }] },
    { h: 'One syllable = one character',
      p: 'Every Chinese character is exactly one syllable. That is why pinyin above a sentence lines up character by character.',
      ex: [{ hz: '中国', py: 'zhōng guó', en: 'China' }, { hz: '老师', py: 'lǎo shī', en: 'teacher' }] }
  ];

  /* ==================================================================== 5
     SOUND — pairs that beginners mix up, and the tone-change rules.      */
  var CONTRASTS = [
    { h: 'Puff or no puff — b / p, d / t, g / k',
      p: 'Chinese does not use voicing the way English does. The difference is the puff of air. Hold a sheet of paper in front of your mouth: it should move for p, t, k and stay still for b, d, g.',
      pairs: [
        { a: { hz: '八', py: 'bā', en: 'eight' },  b: { hz: '怕', py: 'pà', en: 'to fear' } },
        { a: { hz: '大', py: 'dà', en: 'big' },    b: { hz: '他', py: 'tā', en: 'he' } },
        { a: { hz: '哥', py: 'gē', en: 'brother' }, b: { hz: '喝', py: 'hē', en: 'to drink' } }
      ] },
    { h: 'Curled tongue or flat — zh / z, ch / c, sh / s',
      p: 'For zh, ch, sh, r the tongue tip curls back towards the roof of the mouth. For z, c, s it stays flat behind the teeth.',
      pairs: [
        { a: { hz: '中', py: 'zhōng', en: 'middle' }, b: { hz: '钟', py: 'zhōng', en: 'clock' } },
        { a: { hz: '四', py: 'sì', en: 'four' },      b: { hz: '十', py: 'shí', en: 'ten' } },
        { a: { hz: '菜', py: 'cài', en: 'dish' },     b: { hz: '在', py: 'zài', en: 'to be at' } }
      ] },
    { h: 'The smiling set — j / q / x',
      p: 'These three only ever appear before i or ü. Spread your lips as if smiling and keep the tongue flat and forward.',
      pairs: [
        { a: { hz: '几', py: 'jǐ', en: 'how many' }, b: { hz: '七', py: 'qī', en: 'seven' } },
        { a: { hz: '西', py: 'xī', en: 'west' },     b: { hz: '是', py: 'shì', en: 'to be' } },
        { a: { hz: '去', py: 'qù', en: 'to go' },    b: { hz: '出', py: 'chū', en: 'to exit' } }
      ] },
    { h: 'n and l, u and ü',
      p: 'Khmer and English speakers often swap n and l at the start of a word. And nu (oo) is a different word from nü (say "ee" with rounded lips).',
      pairs: [
        { a: { hz: '你', py: 'nǐ', en: 'you' },   b: { hz: '李', py: 'lǐ', en: 'a surname' } },
        { a: { hz: '努', py: 'nǔ', en: 'to exert' }, b: { hz: '女', py: 'nǚ', en: 'woman' } },
        { a: { hz: '路', py: 'lù', en: 'road' },  b: { hz: '绿', py: 'lǜ', en: 'green' } }
      ] }
  ];

  var TONE_RULES = [
    { h: 'Two third tones in a row',
      p: 'The first one becomes a second tone. Written nǐ hǎo, said ní hǎo.',
      ex: [{ hz: '你好', py: 'nǐ hǎo', en: 'hello' }, { hz: '很好', py: 'hěn hǎo', en: 'very good' }] },
    { h: '不 bù before a fourth tone',
      p: 'It changes to bú. Everywhere else it stays bù.',
      ex: [{ hz: '不是', py: 'bú shì', en: 'is not' }, { hz: '不好', py: 'bù hǎo', en: 'not good' }] },
    { h: '一 yī on its own and in a count',
      p: 'Alone or when counting it is yī. Before a fourth tone it becomes yí; before tones 1, 2 and 3 it becomes yì.',
      ex: [{ hz: '一个', py: 'yí gè', en: 'one (item)' }, { hz: '一天', py: 'yì tiān', en: 'one day' }] },
    { h: 'Tones carry meaning — they are not decoration',
      p: 'Same syllable, four different words. Getting the tone wrong is like getting a letter wrong.',
      ex: [{ hz: '妈', py: 'mā', en: 'mother' }, { hz: '麻', py: 'má', en: 'hemp' }, { hz: '马', py: 'mǎ', en: 'horse' }, { hz: '骂', py: 'mà', en: 'to scold' }] }
  ];

  /* Families used by the listening drill: same syllable, four tones. */
  var TONE_DRILL = [
    { base: 'ma',   items: [{ hz: '妈', py: 'mā', en: 'mother' }, { hz: '麻', py: 'má', en: 'hemp' }, { hz: '马', py: 'mǎ', en: 'horse' }, { hz: '骂', py: 'mà', en: 'to scold' }] },
    { base: 'yi',   items: [{ hz: '衣', py: 'yī', en: 'clothes' }, { hz: '姨', py: 'yí', en: 'aunt' }, { hz: '椅', py: 'yǐ', en: 'chair' }, { hz: '意', py: 'yì', en: 'meaning' }] },
    { base: 'tang', items: [{ hz: '汤', py: 'tāng', en: 'soup' }, { hz: '糖', py: 'táng', en: 'sugar' }, { hz: '躺', py: 'tǎng', en: 'to lie down' }, { hz: '烫', py: 'tàng', en: 'scalding' }] },
    { base: 'shu',  items: [{ hz: '书', py: 'shū', en: 'book' }, { hz: '熟', py: 'shú', en: 'cooked' }, { hz: '数', py: 'shǔ', en: 'to count' }, { hz: '树', py: 'shù', en: 'tree' }] },
    { base: 'ba',   items: [{ hz: '八', py: 'bā', en: 'eight' }, { hz: '拔', py: 'bá', en: 'to pull out' }, { hz: '把', py: 'bǎ', en: 'to hold' }, { hz: '爸', py: 'bà', en: 'father' }] },
    { base: 'wen',  items: [{ hz: '温', py: 'wēn', en: 'warm' }, { hz: '文', py: 'wén', en: 'writing' }, { hz: '稳', py: 'wěn', en: 'steady' }, { hz: '问', py: 'wèn', en: 'to ask' }] }
  ];

  /* ==================================================================== 6
     WRITING — strokes, order rules, radicals and the practice set.       */
  var STROKES = [
    { p: '横 héng',  sym: '一', en: 'horizontal', dir: 'left to right' },
    { p: '竖 shù',   sym: '丨', en: 'vertical',   dir: 'top to bottom' },
    { p: '撇 piě',   sym: '丿', en: 'left falling', dir: 'top right to bottom left' },
    { p: '捺 nà',    sym: '㇏', en: 'right falling', dir: 'top left to bottom right, pressing at the end' },
    { p: '点 diǎn',  sym: '丶', en: 'dot',        dir: 'a short press, usually downward' },
    { p: '提 tí',    sym: '㇀', en: 'rising',     dir: 'bottom left flicking up to the right' },
    { p: '折 zhé',   sym: '𠃍', en: 'turning',    dir: 'one stroke that changes direction' },
    { p: '钩 gōu',   sym: '亅', en: 'hook',       dir: 'a small flick at the end of another stroke' }
  ];

  var ORDER_RULES = [
    { h: 'Top before bottom',        p: 'Write the upper part first.',                 hz: '三', py: 'sān', en: 'three' },
    { h: 'Left before right',        p: 'Write the left side first.',                  hz: '们', py: 'men', en: 'plural marker' },
    { h: 'Horizontal before vertical', p: 'The crossing stroke comes first.',          hz: '十', py: 'shí', en: 'ten' },
    { h: 'Outside before inside',    p: 'Draw the enclosure, then fill it.',           hz: '月', py: 'yuè', en: 'moon' },
    { h: 'Close the box last',       p: 'The bottom line of a full box is the final stroke.', hz: '国', py: 'guó', en: 'country' },
    { h: 'Middle before the two sides', p: 'In a symmetrical character the centre goes first.', hz: '小', py: 'xiǎo', en: 'small' },
    { h: 'Left falling before right falling', p: '撇 before 捺.',                       hz: '人', py: 'rén', en: 'person' }
  ];

  var RADICALS = [
    { r: '亻', p: 'rén',   en: 'person',  ex: { hz: '你', py: 'nǐ', en: 'you' } },
    { r: '氵', p: 'shuǐ',  en: 'water',   ex: { hz: '河', py: 'hé', en: 'river' } },
    { r: '口', p: 'kǒu',   en: 'mouth',   ex: { hz: '吃', py: 'chī', en: 'to eat' } },
    { r: '女', p: 'nǚ',    en: 'woman',   ex: { hz: '好', py: 'hǎo', en: 'good' } },
    { r: '木', p: 'mù',    en: 'tree',    ex: { hz: '林', py: 'lín', en: 'woods' } },
    { r: '心', p: 'xīn',   en: 'heart',   ex: { hz: '想', py: 'xiǎng', en: 'to think' } },
    { r: '扌', p: 'shǒu',  en: 'hand',    ex: { hz: '打', py: 'dǎ', en: 'to hit' } },
    { r: '讠', p: 'yán',   en: 'speech',  ex: { hz: '说', py: 'shuō', en: 'to speak' } },
    { r: '日', p: 'rì',    en: 'sun',     ex: { hz: '明', py: 'míng', en: 'bright' } },
    { r: '火', p: 'huǒ',   en: 'fire',    ex: { hz: '烧', py: 'shāo', en: 'to burn' } },
    { r: '钅', p: 'jīn',   en: 'metal',   ex: { hz: '钱', py: 'qián', en: 'money' } },
    { r: '艹', p: 'cǎo',   en: 'grass',   ex: { hz: '菜', py: 'cài', en: 'vegetable' } }
  ];

  /* The tracing set — ordered from one stroke upwards. `order` is the stroke
     sequence in plain words; `n` is the number of strokes.                */
  var WRITE = [
    { hz: '一', py: 'yī',  en: 'one',    km: 'មួយ',   n: 1, order: 'héng' },
    { hz: '二', py: 'èr',  en: 'two',    km: 'ពីរ',   n: 2, order: 'héng, héng (the lower one is longer)' },
    { hz: '三', py: 'sān', en: 'three',  km: 'បី',    n: 3, order: 'héng, héng, héng — top to bottom' },
    { hz: '十', py: 'shí', en: 'ten',    km: 'ដប់',   n: 2, order: 'héng, then shù' },
    { hz: '七', py: 'qī',  en: 'seven',  km: 'ប្រាំពីរ', n: 2, order: 'héng, then the turning stroke' },
    { hz: '八', py: 'bā',  en: 'eight',  km: 'ប្រាំបី', n: 2, order: 'piě, then nà' },
    { hz: '九', py: 'jiǔ', en: 'nine',   km: 'ប្រាំបួន', n: 2, order: 'piě, then the hooked turning stroke' },
    { hz: '人', py: 'rén', en: 'person', km: 'មនុស្ស', n: 2, order: 'piě, then nà' },
    { hz: '入', py: 'rù',  en: 'to enter', km: 'ចូល', n: 2, order: 'piě, then nà — the mirror of 人' },
    { hz: '大', py: 'dà',  en: 'big',    km: 'ធំ',    n: 3, order: 'héng, piě, nà' },
    { hz: '小', py: 'xiǎo', en: 'small', km: 'តូច',   n: 3, order: 'the middle hook, then left dot, then right dot' },
    { hz: '上', py: 'shàng', en: 'up, above', km: 'លើ', n: 3, order: 'shù, héng, héng' },
    { hz: '下', py: 'xià', en: 'down, below', km: 'ក្រោម', n: 3, order: 'héng, shù, diǎn' },
    { hz: '口', py: 'kǒu', en: 'mouth',  km: 'មាត់',  n: 3, order: 'left shù, top-right turning stroke, bottom héng last' },
    { hz: '山', py: 'shān', en: 'mountain', km: 'ភ្នំ', n: 3, order: 'middle shù, the turning stroke, right shù' },
    { hz: '女', py: 'nǚ',  en: 'woman',  km: 'ស្ត្រី',  n: 3, order: 'the turning stroke, piě, héng' },
    { hz: '子', py: 'zǐ',  en: 'child',  km: 'កូន',   n: 3, order: 'the turning stroke, the hook, héng' },
    { hz: '门', py: 'mén', en: 'door',   km: 'ទ្វារ',  n: 3, order: 'diǎn, shù, the turning stroke with a hook' },
    { hz: '四', py: 'sì',  en: 'four',   km: 'បួន',   n: 5, order: 'left shù, top turning stroke, two inside strokes, bottom héng last' },
    { hz: '五', py: 'wǔ',  en: 'five',   km: 'ប្រាំ',  n: 4, order: 'héng, shù, the turning stroke, héng' },
    { hz: '六', py: 'liù', en: 'six',    km: 'ប្រាំមួយ', n: 4, order: 'diǎn, héng, piě, diǎn' },
    { hz: '日', py: 'rì',  en: 'sun, day', km: 'ថ្ងៃ', n: 4, order: 'shù, turning stroke, middle héng, bottom héng' },
    { hz: '月', py: 'yuè', en: 'moon, month', km: 'ខែ', n: 4, order: 'piě, the hooked turning stroke, then the two inside héng' },
    { hz: '水', py: 'shuǐ', en: 'water', km: 'ទឹក',   n: 4, order: 'the hook in the middle, then left, then right' },
    { hz: '火', py: 'huǒ', en: 'fire',   km: 'ភ្លើង',  n: 4, order: 'diǎn, piě, then piě and nà' },
    { hz: '木', py: 'mù',  en: 'tree, wood', km: 'ឈើ', n: 4, order: 'héng, shù, piě, nà' },
    { hz: '天', py: 'tiān', en: 'sky, day', km: 'មេឃ', n: 4, order: 'héng, héng, piě, nà' },
    { hz: '中', py: 'zhōng', en: 'middle', km: 'កណ្តាល', n: 4, order: 'shù, turning stroke, héng, then the long shù through the middle' },
    { hz: '不', py: 'bù',  en: 'not',    km: 'មិន',   n: 4, order: 'héng, piě, shù, diǎn' },
    { hz: '心', py: 'xīn', en: 'heart',  km: 'បេះដូង', n: 4, order: 'diǎn, the hook, then two more diǎn' },
    { hz: '手', py: 'shǒu', en: 'hand',  km: 'ដៃ',    n: 4, order: 'piě, héng, héng, the hooked shù' },
    { hz: '田', py: 'tián', en: 'field', km: 'ស្រែ',   n: 5, order: 'shù, turning stroke, inside héng and shù, bottom héng last' },
    { hz: '目', py: 'mù',  en: 'eye',    km: 'ភ្នែក',  n: 5, order: 'shù, turning stroke, two inside héng, bottom héng' },
    { hz: '他', py: 'tā',  en: 'he, him', km: 'គាត់',  n: 5, order: 'the person radical first, then the right side' },
    { hz: '们', py: 'men', en: 'plural marker', km: 'ពហុវចនៈ', n: 5, order: 'the person radical, then the door part' },
    { hz: '本', py: 'běn', en: 'root, book', km: 'សៀវភៅ', n: 5, order: 'write 木 first, then the short héng at the foot' },
    { hz: '好', py: 'hǎo', en: 'good',   km: 'ល្អ',    n: 6, order: '女 on the left, then 子 on the right' },
    { hz: '我', py: 'wǒ',  en: 'I, me',  km: 'ខ្ញុំ',    n: 7, order: 'piě, héng, the hooked turning stroke, then the right side with its dot last' },
    { hz: '你', py: 'nǐ',  en: 'you',    km: 'អ្នក',   n: 7, order: 'the person radical, then the right side, the dot last' },
    { hz: '学', py: 'xué', en: 'to study', km: 'រៀន',  n: 8, order: 'the three dots on top, the cover, then 子' },
    { hz: '是', py: 'shì', en: 'to be',  km: 'ជា',    n: 9, order: '日 on top, then the lower part, the long nà last' },
    { hz: '的', py: 'de',  en: 'possessive particle', km: 'របស់', n: 8, order: '白 on the left, then the right side' }
  ];

  /* ==================================================================== 7
     NUMBERS.                                                             */
  var DIGITS = [
    { v: '0',  hz: '零', py: 'líng', en: 'zero',  km: 'សូន្យ' },
    { v: '1',  hz: '一', py: 'yī',   en: 'one',   km: 'មួយ' },
    { v: '2',  hz: '二', py: 'èr',   en: 'two',   km: 'ពីរ' },
    { v: '3',  hz: '三', py: 'sān',  en: 'three', km: 'បី' },
    { v: '4',  hz: '四', py: 'sì',   en: 'four',  km: 'បួន' },
    { v: '5',  hz: '五', py: 'wǔ',   en: 'five',  km: 'ប្រាំ' },
    { v: '6',  hz: '六', py: 'liù',  en: 'six',   km: 'ប្រាំមួយ' },
    { v: '7',  hz: '七', py: 'qī',   en: 'seven', km: 'ប្រាំពីរ' },
    { v: '8',  hz: '八', py: 'bā',   en: 'eight', km: 'ប្រាំបី' },
    { v: '9',  hz: '九', py: 'jiǔ',  en: 'nine',  km: 'ប្រាំបួន' },
    { v: '10', hz: '十', py: 'shí',  en: 'ten',   km: 'ដប់' }
  ];

  var BIG_NUMBERS = [
    { v: '11', hz: '十一',     py: 'shí yī',        en: 'eleven',        km: 'ដប់មួយ' },
    { v: '12', hz: '十二',     py: 'shí èr',        en: 'twelve',        km: 'ដប់ពីរ' },
    { v: '15', hz: '十五',     py: 'shí wǔ',        en: 'fifteen',       km: 'ដប់ប្រាំ' },
    { v: '20', hz: '二十',     py: 'èr shí',        en: 'twenty',        km: 'ម្ភៃ' },
    { v: '21', hz: '二十一',   py: 'èr shí yī',     en: 'twenty-one',    km: 'ម្ភៃមួយ' },
    { v: '30', hz: '三十',     py: 'sān shí',       en: 'thirty',        km: 'សាមសិប' },
    { v: '58', hz: '五十八',   py: 'wǔ shí bā',     en: 'fifty-eight',   km: 'ហាសិបប្រាំបី' },
    { v: '99', hz: '九十九',   py: 'jiǔ shí jiǔ',   en: 'ninety-nine',   km: 'កៅសិបប្រាំបួន' },
    { v: '100', hz: '一百',    py: 'yì bǎi',        en: 'one hundred',   km: 'មួយរយ' },
    { v: '105', hz: '一百零五', py: 'yì bǎi líng wǔ', en: 'one hundred and five', km: 'មួយរយប្រាំ' },
    { v: '200', hz: '两百',    py: 'liǎng bǎi',     en: 'two hundred',   km: 'ពីររយ' },
    { v: '1000', hz: '一千',   py: 'yì qiān',       en: 'one thousand',  km: 'មួយពាន់' },
    { v: '10000', hz: '一万',  py: 'yí wàn',        en: 'ten thousand',  km: 'មួយម៉ឺន' }
  ];

  var NUM_RULES = [
    { h: '11 to 19 — ten plus the digit',
      p: 'Say 十 first, then the digit. 十一 = 10 + 1.',
      ex: [{ hz: '十一', py: 'shí yī', en: '11' }, { hz: '十七', py: 'shí qī', en: '17' }] },
    { h: '20 to 99 — digit, ten, digit',
      p: 'How many tens, then 十, then what is left over. 五十八 = 5 tens + 8.',
      ex: [{ hz: '四十', py: 'sì shí', en: '40' }, { hz: '六十三', py: 'liù shí sān', en: '63' }] },
    { h: '二 èr or 两 liǎng?',
      p: 'Use 二 for the number itself and for the second of anything. Use 两 when you count things with a measure word.',
      ex: [{ hz: '二十', py: 'èr shí', en: '20' }, { hz: '两个人', py: 'liǎng gè rén', en: 'two people' }] },
    { h: 'Zero in the middle',
      p: 'A gap inside a number is filled with 零 líng, said once however many zeros there are.',
      ex: [{ hz: '一百零五', py: 'yì bǎi líng wǔ', en: '105' }, { hz: '一千零八', py: 'yì qiān líng bā', en: '1,008' }] },
    { h: 'Big numbers group in ten-thousands',
      p: 'Chinese counts in 万 wàn (10,000), not in millions. 100,000 is 十万 shí wàn — ten wàn.',
      ex: [{ hz: '一万', py: 'yí wàn', en: '10,000' }, { hz: '十万', py: 'shí wàn', en: '100,000' }] },
    { h: 'Always put a measure word between a number and a thing',
      p: '个 gè is the general one and works almost everywhere while you learn the specific ones.',
      ex: [{ hz: '三个学生', py: 'sān gè xué shēng', en: 'three students' }, { hz: '两本书', py: 'liǎng běn shū', en: 'two books' }] }
  ];

  var NUM_USES = [
    { h: 'Asking a price',
      lines: [
        { hz: '这个多少钱？', py: 'zhè ge duō shao qián', en: 'How much is this?', km: 'មួយនេះថ្លៃប៉ុន្មាន?' },
        { hz: '二十块。', py: 'èr shí kuài', en: 'Twenty yuan.', km: 'ម្ភៃយាន់។' },
        { hz: '太贵了！便宜一点吧。', py: 'tài guì le pián yi yì diǎn ba', en: 'Too expensive! A little cheaper, please.', km: 'ថ្លៃពេក! សូមបញ្ចុះតម្លៃបន្តិច។' }
      ] },
    { h: 'Telling the time',
      lines: [
        { hz: '现在几点？', py: 'xiàn zài jǐ diǎn', en: 'What time is it now?', km: 'ឥឡូវម៉ោងប៉ុន្មាន?' },
        { hz: '现在三点半。', py: 'xiàn zài sān diǎn bàn', en: 'It is half past three.', km: 'ឥឡូវម៉ោងបីកន្លះ។' },
        { hz: '八点十五分。', py: 'bā diǎn shí wǔ fēn', en: 'A quarter past eight.', km: 'ម៉ោងប្រាំបី ដប់ប្រាំនាទី។' }
      ] },
    { h: 'Dates',
      lines: [
        { hz: '今天几月几号？', py: 'jīn tiān jǐ yuè jǐ hào', en: 'What is the date today?', km: 'ថ្ងៃនេះខែប៉ុន្មាន ថ្ងៃទីប៉ុន្មាន?' },
        { hz: '八月四号。', py: 'bā yuè sì hào', en: 'The fourth of August.', km: 'ថ្ងៃទី៤ ខែសីហា។' },
        { hz: '星期一。', py: 'xīng qī yī', en: 'Monday.', km: 'ថ្ងៃច័ន្ទ។' }
      ] },
    { h: 'Age and phone numbers',
      lines: [
        { hz: '你多大？', py: 'nǐ duō dà', en: 'How old are you?', km: 'អ្នកអាយុប៉ុន្មាន?' },
        { hz: '我十五岁。', py: 'wǒ shí wǔ suì', en: 'I am fifteen.', km: 'ខ្ញុំអាយុដប់ប្រាំឆ្នាំ។' },
        { hz: '我的电话是零九三七九二七六七。', py: 'wǒ de diàn huà shì líng jiǔ sān qī jiǔ èr qī liù qī', en: 'My phone number is 093 792 767.', km: 'លេខទូរស័ព្ទខ្ញុំគឺ ០៩៣ ៧៩២ ៧៦៧។' }
      ] }
  ];

  var NUM_NOTE = {
    h: 'One cultural note',
    p: '八 bā (eight) sounds like 发 fā, "to prosper", so it is a lucky number. 四 sì (four) sounds like 死 sǐ, "death", so buildings sometimes skip the fourth floor. You will see this on price tags and phone numbers.'
  };

  /* ==================================================================== 8
     BASIC WORDS — grouped, searchable, every entry speakable.            */
  var WORDS = [
    { key: 'greet', en: 'Greetings & politeness', km: 'ការស្វាគមន៍', items: [
      { hz: '你好',   py: 'nǐ hǎo',      en: 'hello',            km: 'សួស្តី' },
      { hz: '您好',   py: 'nín hǎo',     en: 'hello (polite)',   km: 'សួស្តី (គួរសម)' },
      { hz: '早上好', py: 'zǎo shang hǎo', en: 'good morning',   km: 'អរុណសួស្តី' },
      { hz: '晚上好', py: 'wǎn shang hǎo', en: 'good evening',   km: 'សាយ័ណ្ហសួស្តី' },
      { hz: '晚安',   py: 'wǎn ān',      en: 'good night',       km: 'រាត្រីសួស្តី' },
      { hz: '再见',   py: 'zài jiàn',    en: 'goodbye',          km: 'លាហើយ' },
      { hz: '谢谢',   py: 'xiè xie',     en: 'thank you',        km: 'អរគុណ' },
      { hz: '不客气', py: 'bú kè qi',    en: "you're welcome",   km: 'មិនអីទេ' },
      { hz: '对不起', py: 'duì bu qǐ',   en: 'sorry',            km: 'សុំទោស' },
      { hz: '没关系', py: 'méi guān xi', en: 'it does not matter', km: 'គ្មានបញ្ហាទេ' },
      { hz: '请',     py: 'qǐng',        en: 'please',           km: 'សូម' },
      { hz: '请问',   py: 'qǐng wèn',    en: 'excuse me, may I ask', km: 'សុំទោស សុំសួរ' },
      { hz: '欢迎',   py: 'huān yíng',   en: 'welcome',          km: 'សូមស្វាគមន៍' },
      { hz: '认识你很高兴', py: 'rèn shi nǐ hěn gāo xìng', en: 'nice to meet you', km: 'រីករាយដែលបានស្គាល់អ្នក' }
    ] },

    { key: 'people', en: 'People & pronouns', km: 'មនុស្ស និងសព្វនាម', items: [
      { hz: '我',   py: 'wǒ',       en: 'I, me',            km: 'ខ្ញុំ' },
      { hz: '你',   py: 'nǐ',       en: 'you',              km: 'អ្នក' },
      { hz: '您',   py: 'nín',      en: 'you (polite)',     km: 'លោក / លោកស្រី' },
      { hz: '他',   py: 'tā',       en: 'he, him',          km: 'គាត់ (ប្រុស)' },
      { hz: '她',   py: 'tā',       en: 'she, her',         km: 'គាត់ (ស្រី)' },
      { hz: '我们', py: 'wǒ men',   en: 'we, us',           km: 'យើង' },
      { hz: '你们', py: 'nǐ men',   en: 'you (plural)',     km: 'អ្នកទាំងអស់គ្នា' },
      { hz: '他们', py: 'tā men',   en: 'they, them',       km: 'ពួកគេ' },
      { hz: '人',   py: 'rén',      en: 'person',           km: 'មនុស្ស' },
      { hz: '朋友', py: 'péng you', en: 'friend',           km: 'មិត្តភក្តិ' },
      { hz: '老师', py: 'lǎo shī',  en: 'teacher',          km: 'គ្រូ' },
      { hz: '学生', py: 'xué shēng', en: 'student',         km: 'សិស្ស' },
      { hz: '医生', py: 'yī shēng', en: 'doctor',           km: 'គ្រូពេទ្យ' },
      { hz: '名字', py: 'míng zi',  en: 'name',             km: 'ឈ្មោះ' }
    ] },

    { key: 'family', en: 'Family', km: 'គ្រួសារ', items: [
      { hz: '家',   py: 'jiā',    en: 'home, family',     km: 'ផ្ទះ គ្រួសារ' },
      { hz: '爸爸', py: 'bà ba',  en: 'father',           km: 'ឪពុក' },
      { hz: '妈妈', py: 'mā ma',  en: 'mother',           km: 'ម្តាយ' },
      { hz: '哥哥', py: 'gē ge',  en: 'older brother',    km: 'បងប្រុស' },
      { hz: '弟弟', py: 'dì di',  en: 'younger brother',  km: 'ប្អូនប្រុស' },
      { hz: '姐姐', py: 'jiě jie', en: 'older sister',    km: 'បងស្រី' },
      { hz: '妹妹', py: 'mèi mei', en: 'younger sister',  km: 'ប្អូនស្រី' },
      { hz: '爷爷', py: 'yé ye',  en: 'grandfather',      km: 'តា' },
      { hz: '奶奶', py: 'nǎi nai', en: 'grandmother',     km: 'យាយ' },
      { hz: '儿子', py: 'ér zi',  en: 'son',              km: 'កូនប្រុស' },
      { hz: '女儿', py: 'nǚ ér',  en: 'daughter',         km: 'កូនស្រី' },
      { hz: '孩子', py: 'hái zi', en: 'child',            km: 'កូន' }
    ] },

    { key: 'time', en: 'Time & days', km: 'ពេលវេលា', items: [
      { hz: '今天',   py: 'jīn tiān',   en: 'today',      km: 'ថ្ងៃនេះ' },
      { hz: '明天',   py: 'míng tiān',  en: 'tomorrow',   km: 'ថ្ងៃស្អែក' },
      { hz: '昨天',   py: 'zuó tiān',   en: 'yesterday',  km: 'ម្សិលមិញ' },
      { hz: '早上',   py: 'zǎo shang',  en: 'morning',    km: 'ព្រឹក' },
      { hz: '中午',   py: 'zhōng wǔ',   en: 'noon',       km: 'ថ្ងៃត្រង់' },
      { hz: '下午',   py: 'xià wǔ',     en: 'afternoon',  km: 'រសៀល' },
      { hz: '晚上',   py: 'wǎn shang',  en: 'evening',    km: 'ល្ងាច' },
      { hz: '现在',   py: 'xiàn zài',   en: 'now',        km: 'ឥឡូវនេះ' },
      { hz: '点',     py: 'diǎn',       en: "o'clock",    km: 'ម៉ោង' },
      { hz: '分',     py: 'fēn',        en: 'minute',     km: 'នាទី' },
      { hz: '星期',   py: 'xīng qī',    en: 'week',       km: 'សប្តាហ៍' },
      { hz: '星期一', py: 'xīng qī yī',  en: 'Monday',     km: 'ថ្ងៃច័ន្ទ' },
      { hz: '星期六', py: 'xīng qī liù', en: 'Saturday',   km: 'ថ្ងៃសៅរ៍' },
      { hz: '星期天', py: 'xīng qī tiān', en: 'Sunday',    km: 'ថ្ងៃអាទិត្យ' },
      { hz: '月',     py: 'yuè',        en: 'month',      km: 'ខែ' },
      { hz: '年',     py: 'nián',       en: 'year',       km: 'ឆ្នាំ' }
    ] },

    { key: 'food', en: 'Food & drink', km: 'អាហារ និងភេសជ្ជៈ', items: [
      { hz: '吃',   py: 'chī',      en: 'to eat',        km: 'ញ៉ាំ' },
      { hz: '喝',   py: 'hē',       en: 'to drink',      km: 'ផឹក' },
      { hz: '米饭', py: 'mǐ fàn',   en: 'cooked rice',   km: 'បាយ' },
      { hz: '面条', py: 'miàn tiáo', en: 'noodles',      km: 'មី' },
      { hz: '水',   py: 'shuǐ',     en: 'water',         km: 'ទឹក' },
      { hz: '茶',   py: 'chá',      en: 'tea',           km: 'តែ' },
      { hz: '咖啡', py: 'kā fēi',   en: 'coffee',        km: 'កាហ្វេ' },
      { hz: '牛奶', py: 'niú nǎi',  en: 'milk',          km: 'ទឹកដោះគោ' },
      { hz: '鸡蛋', py: 'jī dàn',   en: 'egg',           km: 'ស៊ុតមាន់' },
      { hz: '肉',   py: 'ròu',      en: 'meat',          km: 'សាច់' },
      { hz: '鸡肉', py: 'jī ròu',   en: 'chicken',       km: 'សាច់មាន់' },
      { hz: '鱼',   py: 'yú',       en: 'fish',          km: 'ត្រី' },
      { hz: '菜',   py: 'cài',      en: 'dish, vegetable', km: 'ម្ហូប បន្លែ' },
      { hz: '水果', py: 'shuǐ guǒ', en: 'fruit',         km: 'ផ្លែឈើ' },
      { hz: '好吃', py: 'hǎo chī',  en: 'delicious',     km: 'ឆ្ងាញ់' },
      { hz: '饿',   py: 'è',        en: 'hungry',        km: 'ឃ្លាន' }
    ] },

    { key: 'colour', en: 'Colours', km: 'ពណ៌', items: [
      { hz: '颜色', py: 'yán sè',   en: 'colour', km: 'ពណ៌' },
      { hz: '红色', py: 'hóng sè',  en: 'red',    km: 'ក្រហម' },
      { hz: '蓝色', py: 'lán sè',   en: 'blue',   km: 'ខៀវ' },
      { hz: '黄色', py: 'huáng sè', en: 'yellow', km: 'លឿង' },
      { hz: '绿色', py: 'lǜ sè',    en: 'green',  km: 'បៃតង' },
      { hz: '黑色', py: 'hēi sè',   en: 'black',  km: 'ខ្មៅ' },
      { hz: '白色', py: 'bái sè',   en: 'white',  km: 'ស' },
      { hz: '橙色', py: 'chéng sè', en: 'orange', km: 'ទឹកក្រូច' },
      { hz: '粉色', py: 'fěn sè',   en: 'pink',   km: 'ផ្កាឈូក' },
      { hz: '紫色', py: 'zǐ sè',    en: 'purple', km: 'ស្វាយ' }
    ] },

    { key: 'place', en: 'Places', km: 'ទីកន្លែង', items: [
      { hz: '学校',   py: 'xué xiào',    en: 'school',     km: 'សាលារៀន' },
      { hz: '房子',   py: 'fáng zi',     en: 'house',      km: 'ផ្ទះ' },
      { hz: '商店',   py: 'shāng diàn',  en: 'shop',       km: 'ហាង' },
      { hz: '市场',   py: 'shì chǎng',   en: 'market',     km: 'ផ្សារ' },
      { hz: '医院',   py: 'yī yuàn',     en: 'hospital',   km: 'មន្ទីរពេទ្យ' },
      { hz: '银行',   py: 'yín háng',    en: 'bank',       km: 'ធនាគារ' },
      { hz: '饭馆',   py: 'fàn guǎn',    en: 'restaurant', km: 'ភោជនីយដ្ឋាន' },
      { hz: '酒店',   py: 'jiǔ diàn',    en: 'hotel',      km: 'សណ្ឋាគារ' },
      { hz: '机场',   py: 'jī chǎng',    en: 'airport',    km: 'ព្រលានយន្តហោះ' },
      { hz: '洗手间', py: 'xǐ shǒu jiān', en: 'toilet',    km: 'បង្គន់' },
      { hz: '路',     py: 'lù',          en: 'road',       km: 'ផ្លូវ' },
      { hz: '中国',   py: 'zhōng guó',   en: 'China',      km: 'ប្រទេសចិន' },
      { hz: '柬埔寨', py: 'jiǎn pǔ zhài', en: 'Cambodia',  km: 'ប្រទេសកម្ពុជា' }
    ] },

    { key: 'verb', en: 'Everyday verbs', km: 'កិរិយាសព្ទ', items: [
      { hz: '是',   py: 'shì',      en: 'to be',            km: 'ជា' },
      { hz: '有',   py: 'yǒu',      en: 'to have',          km: 'មាន' },
      { hz: '去',   py: 'qù',       en: 'to go',            km: 'ទៅ' },
      { hz: '来',   py: 'lái',      en: 'to come',          km: 'មក' },
      { hz: '看',   py: 'kàn',      en: 'to look, to watch', km: 'មើល' },
      { hz: '听',   py: 'tīng',     en: 'to listen',        km: 'ស្តាប់' },
      { hz: '说',   py: 'shuō',     en: 'to speak',         km: 'និយាយ' },
      { hz: '读',   py: 'dú',       en: 'to read',          km: 'អាន' },
      { hz: '写',   py: 'xiě',      en: 'to write',         km: 'សរសេរ' },
      { hz: '买',   py: 'mǎi',      en: 'to buy',           km: 'ទិញ' },
      { hz: '卖',   py: 'mài',      en: 'to sell',          km: 'លក់' },
      { hz: '学习', py: 'xué xí',   en: 'to study',         km: 'រៀន' },
      { hz: '工作', py: 'gōng zuò', en: 'to work',          km: 'ធ្វើការ' },
      { hz: '睡觉', py: 'shuì jiào', en: 'to sleep',        km: 'គេង' },
      { hz: '喜欢', py: 'xǐ huan',  en: 'to like',          km: 'ចូលចិត្ត' },
      { hz: '想',   py: 'xiǎng',    en: 'to want, to think', km: 'ចង់ គិត' },
      { hz: '要',   py: 'yào',      en: 'to want, will',    km: 'ចង់បាន' },
      { hz: '会',   py: 'huì',      en: 'can (a learned skill)', km: 'ចេះ' }
    ] },

    { key: 'adj', en: 'Describing things', km: 'គុណនាម', items: [
      { hz: '大',   py: 'dà',        en: 'big',         km: 'ធំ' },
      { hz: '小',   py: 'xiǎo',      en: 'small',       km: 'តូច' },
      { hz: '多',   py: 'duō',       en: 'many, much',  km: 'ច្រើន' },
      { hz: '少',   py: 'shǎo',      en: 'few, little', km: 'តិច' },
      { hz: '好',   py: 'hǎo',       en: 'good',        km: 'ល្អ' },
      { hz: '新',   py: 'xīn',       en: 'new',         km: 'ថ្មី' },
      { hz: '旧',   py: 'jiù',       en: 'old (things)', km: 'ចាស់' },
      { hz: '热',   py: 'rè',        en: 'hot',         km: 'ក្តៅ' },
      { hz: '冷',   py: 'lěng',      en: 'cold',        km: 'ត្រជាក់' },
      { hz: '贵',   py: 'guì',       en: 'expensive',   km: 'ថ្លៃ' },
      { hz: '便宜', py: 'pián yi',   en: 'cheap',       km: 'ថោក' },
      { hz: '高兴', py: 'gāo xìng',  en: 'happy',       km: 'រីករាយ' },
      { hz: '累',   py: 'lèi',       en: 'tired',       km: 'នឿយហត់' },
      { hz: '漂亮', py: 'piào liang', en: 'beautiful',  km: 'ស្អាត' },
      { hz: '难',   py: 'nán',       en: 'difficult',   km: 'ពិបាក' },
      { hz: '容易', py: 'róng yì',   en: 'easy',        km: 'ងាយស្រួល' }
    ] },

    { key: 'ask', en: 'Question words', km: 'ពាក្យសួរ', items: [
      { hz: '什么',     py: 'shén me',       en: 'what',           km: 'អ្វី' },
      { hz: '谁',       py: 'shéi',          en: 'who',            km: 'នរណា' },
      { hz: '哪儿',     py: 'nǎ er',         en: 'where',          km: 'ទីណា' },
      { hz: '什么时候', py: 'shén me shí hou', en: 'when',         km: 'ពេលណា' },
      { hz: '为什么',   py: 'wèi shén me',   en: 'why',            km: 'ហេតុអ្វី' },
      { hz: '怎么',     py: 'zěn me',        en: 'how',            km: 'យ៉ាងដូចម្តេច' },
      { hz: '多少',     py: 'duō shao',      en: 'how many, how much', km: 'ប៉ុន្មាន' },
      { hz: '几',       py: 'jǐ',            en: 'how many (small numbers)', km: 'ប៉ុន្មាន' },
      { hz: '哪个',     py: 'nǎ ge',         en: 'which one',      km: 'មួយណា' },
      { hz: '吗',       py: 'ma',            en: 'turns a sentence into a yes/no question', km: 'ពាក្យសួរ' }
    ] },

    { key: 'school', en: 'Classroom', km: 'ក្នុងថ្នាក់រៀន', items: [
      { hz: '书',   py: 'shū',     en: 'book',            km: 'សៀវភៅ' },
      { hz: '笔',   py: 'bǐ',      en: 'pen',             km: 'ប៊ិច' },
      { hz: '本子', py: 'běn zi',  en: 'notebook',        km: 'សៀវភៅកត់ត្រា' },
      { hz: '纸',   py: 'zhǐ',     en: 'paper',           km: 'ក្រដាស' },
      { hz: '桌子', py: 'zhuō zi', en: 'table, desk',     km: 'តុ' },
      { hz: '椅子', py: 'yǐ zi',   en: 'chair',           km: 'កៅអី' },
      { hz: '课',   py: 'kè',      en: 'lesson, class',   km: 'មេរៀន' },
      { hz: '汉语', py: 'hàn yǔ',  en: 'Chinese language', km: 'ភាសាចិន' },
      { hz: '英语', py: 'yīng yǔ', en: 'English language', km: 'ភាសាអង់គ្លេស' },
      { hz: '问题', py: 'wèn tí',  en: 'question, problem', km: 'សំណួរ' },
      { hz: '考试', py: 'kǎo shì', en: 'exam',            km: 'ការប្រឡង' },
      { hz: '作业', py: 'zuò yè',  en: 'homework',        km: 'កិច្ចការផ្ទះ' }
    ] },

    { key: 'money', en: 'Shopping & money', km: 'ការទិញទំនិញ', items: [
      { hz: '钱',     py: 'qián',        en: 'money',            km: 'លុយ' },
      { hz: '多少钱', py: 'duō shao qián', en: 'how much is it?', km: 'ថ្លៃប៉ុន្មាន?' },
      { hz: '块',     py: 'kuài',        en: 'yuan (spoken)',    km: 'យាន់ (ឯកតាលុយ)' },
      { hz: '美元',   py: 'měi yuán',    en: 'US dollar',        km: 'ដុល្លារ' },
      { hz: '瑞尔',   py: 'ruì ěr',      en: 'riel',             km: 'រៀល' },
      { hz: '太贵了', py: 'tài guì le',  en: 'that is too expensive', km: 'ថ្លៃពេក' },
      { hz: '一共',   py: 'yí gòng',     en: 'altogether',       km: 'សរុប' },
      { hz: '给',     py: 'gěi',         en: 'to give',          km: 'ឲ្យ' },
      { hz: '找钱',   py: 'zhǎo qián',   en: 'to give change',   km: 'អាប់លុយ' },
      { hz: '买单',   py: 'mǎi dān',     en: 'to pay the bill',  km: 'គិតលុយ' }
    ] }
  ];

  /* ==================================================================== 9
     CONVERSATIONS.                                                       */
  var CONVOS = [
    { key: 'hello', en: 'Saying hello', km: 'ការស្វាគមន៍',
      note: 'The first exchange between two people meeting for the first time.',
      lines: [
        { sp: 'A', hz: '你好！', py: 'nǐ hǎo', en: 'Hello!', km: 'សួស្តី!' },
        { sp: 'B', hz: '你好！你叫什么名字？', py: 'nǐ hǎo nǐ jiào shén me míng zi', en: 'Hello! What is your name?', km: 'សួស្តី! អ្នកឈ្មោះអ្វី?' },
        { sp: 'A', hz: '我叫小明。你呢？', py: 'wǒ jiào xiǎo míng nǐ ne', en: 'My name is Xiao Ming. And you?', km: 'ខ្ញុំឈ្មោះ ស៊្យាវម៉ីង។ ចុះអ្នកវិញ?' },
        { sp: 'B', hz: '我叫丽丽。认识你很高兴。', py: 'wǒ jiào lì li rèn shi nǐ hěn gāo xìng', en: 'My name is Lili. Nice to meet you.', km: 'ខ្ញុំឈ្មោះ លីលី។ រីករាយដែលបានស្គាល់អ្នក។' },
        { sp: 'A', hz: '认识你我也很高兴。', py: 'rèn shi nǐ wǒ yě hěn gāo xìng', en: 'Nice to meet you too.', km: 'ខ្ញុំក៏រីករាយដែរ។' },
        { sp: 'B', hz: '你好吗？', py: 'nǐ hǎo ma', en: 'How are you?', km: 'អ្នកសុខសប្បាយទេ?' },
        { sp: 'A', hz: '我很好，谢谢。你呢？', py: 'wǒ hěn hǎo xiè xie nǐ ne', en: 'I am fine, thank you. And you?', km: 'ខ្ញុំសុខសប្បាយ អរគុណ។ ចុះអ្នកវិញ?' },
        { sp: 'B', hz: '我也很好。', py: 'wǒ yě hěn hǎo', en: 'I am fine too.', km: 'ខ្ញុំក៏សុខសប្បាយដែរ។' }
      ] },

    { key: 'intro', en: 'Where are you from?', km: 'អ្នកមកពីប្រទេសណា?',
      note: 'Country, language and a polite compliment — the standard follow-up to hello.',
      lines: [
        { sp: 'A', hz: '请问，你是哪国人？', py: 'qǐng wèn nǐ shì nǎ guó rén', en: 'Excuse me, what country are you from?', km: 'សុំទោស អ្នកជាជនជាតិអ្វី?' },
        { sp: 'B', hz: '我是柬埔寨人。你呢？', py: 'wǒ shì jiǎn pǔ zhài rén nǐ ne', en: 'I am Cambodian. And you?', km: 'ខ្ញុំជាជនជាតិខ្មែរ។ ចុះអ្នកវិញ?' },
        { sp: 'A', hz: '我是中国人。', py: 'wǒ shì zhōng guó rén', en: 'I am Chinese.', km: 'ខ្ញុំជាជនជាតិចិន។' },
        { sp: 'A', hz: '你会说汉语吗？', py: 'nǐ huì shuō hàn yǔ ma', en: 'Can you speak Chinese?', km: 'អ្នកចេះនិយាយភាសាចិនទេ?' },
        { sp: 'B', hz: '我会说一点。', py: 'wǒ huì shuō yì diǎn', en: 'I can speak a little.', km: 'ខ្ញុំចេះនិយាយបន្តិច។' },
        { sp: 'A', hz: '你的汉语很好！', py: 'nǐ de hàn yǔ hěn hǎo', en: 'Your Chinese is very good!', km: 'ភាសាចិនរបស់អ្នកល្អណាស់!' },
        { sp: 'B', hz: '谢谢！我在学习。', py: 'xiè xie wǒ zài xué xí', en: 'Thank you! I am studying it.', km: 'អរគុណ! ខ្ញុំកំពុងរៀន។' }
      ] },

    { key: 'family', en: 'Talking about family', km: 'និយាយអំពីគ្រួសារ',
      note: '有 yǒu means "to have"; 几 jǐ asks "how many" for small numbers.',
      lines: [
        { sp: 'A', hz: '你家有几口人？', py: 'nǐ jiā yǒu jǐ kǒu rén', en: 'How many people are there in your family?', km: 'គ្រួសាររបស់អ្នកមានប៉ុន្មាននាក់?' },
        { sp: 'B', hz: '我家有五口人。', py: 'wǒ jiā yǒu wǔ kǒu rén', en: 'There are five people in my family.', km: 'គ្រួសារខ្ញុំមានប្រាំនាក់។' },
        { sp: 'B', hz: '爸爸、妈妈、哥哥、妹妹和我。', py: 'bà ba mā ma gē ge mèi mei hé wǒ', en: 'Father, mother, older brother, younger sister and me.', km: 'ឪពុក ម្តាយ បងប្រុស ប្អូនស្រី និងខ្ញុំ។' },
        { sp: 'A', hz: '你妹妹多大？', py: 'nǐ mèi mei duō dà', en: 'How old is your younger sister?', km: 'ប្អូនស្រីអ្នកអាយុប៉ុន្មាន?' },
        { sp: 'B', hz: '她十岁。', py: 'tā shí suì', en: 'She is ten.', km: 'នាងអាយុដប់ឆ្នាំ។' },
        { sp: 'A', hz: '你爸爸做什么工作？', py: 'nǐ bà ba zuò shén me gōng zuò', en: 'What does your father do?', km: 'ឪពុកអ្នកធ្វើការអ្វី?' },
        { sp: 'B', hz: '他是老师。', py: 'tā shì lǎo shī', en: 'He is a teacher.', km: 'គាត់ជាគ្រូ។' }
      ] },

    { key: 'restaurant', en: 'At the restaurant', km: 'នៅភោជនីយដ្ឋាន',
      note: '要 yào is the everyday way to order: "I want …".',
      lines: [
        { sp: 'A', hz: '你好，请坐。', py: 'nǐ hǎo qǐng zuò', en: 'Hello, please sit down.', km: 'សួស្តី សូមអង្គុយ។' },
        { sp: 'B', hz: '谢谢。我要一碗米饭。', py: 'xiè xie wǒ yào yì wǎn mǐ fàn', en: 'Thank you. I would like a bowl of rice.', km: 'អរគុណ។ ខ្ញុំសុំបាយមួយចាន។' },
        { sp: 'A', hz: '还要别的吗？', py: 'hái yào bié de ma', en: 'Anything else?', km: 'ត្រូវការអ្វីទៀតទេ?' },
        { sp: 'B', hz: '我要一个鸡蛋和一杯茶。', py: 'wǒ yào yí gè jī dàn hé yì bēi chá', en: 'I would like an egg and a cup of tea.', km: 'ខ្ញុំសុំស៊ុតមួយ និងតែមួយកែវ។' },
        { sp: 'A', hz: '好的，请等一下。', py: 'hǎo de qǐng děng yí xià', en: 'All right, one moment please.', km: 'បាទ សូមរង់ចាំបន្តិច។' },
        { sp: 'B', hz: '很好吃！谢谢。', py: 'hěn hǎo chī xiè xie', en: 'It is delicious! Thank you.', km: 'ឆ្ងាញ់ណាស់! អរគុណ។' },
        { sp: 'B', hz: '买单！一共多少钱？', py: 'mǎi dān yí gòng duō shao qián', en: 'The bill please! How much altogether?', km: 'គិតលុយ! សរុបប៉ុន្មាន?' },
        { sp: 'A', hz: '一共三十块。', py: 'yí gòng sān shí kuài', en: 'Thirty yuan altogether.', km: 'សរុបសាមសិបយាន់។' }
      ] },

    { key: 'shopping', en: 'Buying something', km: 'ការទិញទំនិញ',
      note: 'Bargaining is normal in a market. 便宜一点 is the polite way to ask.',
      lines: [
        { sp: 'A', hz: '这个多少钱？', py: 'zhè ge duō shao qián', en: 'How much is this one?', km: 'មួយនេះថ្លៃប៉ុន្មាន?' },
        { sp: 'B', hz: '五十块。', py: 'wǔ shí kuài', en: 'Fifty yuan.', km: 'ហាសិបយាន់។' },
        { sp: 'A', hz: '太贵了！便宜一点吧。', py: 'tài guì le pián yi yì diǎn ba', en: 'Too expensive! A bit cheaper, please.', km: 'ថ្លៃពេក! សូមបញ្ចុះតម្លៃបន្តិច។' },
        { sp: 'B', hz: '四十块，可以吗？', py: 'sì shí kuài kě yǐ ma', en: 'Forty yuan, is that all right?', km: 'សែសិបយាន់ បានទេ?' },
        { sp: 'A', hz: '好，我要两个。', py: 'hǎo wǒ yào liǎng gè', en: 'Fine, I will take two.', km: 'បាន ខ្ញុំយកពីរ។' },
        { sp: 'B', hz: '一共八十块。', py: 'yí gòng bā shí kuài', en: 'Eighty yuan altogether.', km: 'សរុបប៉ែតសិបយាន់។' },
        { sp: 'A', hz: '给你钱。谢谢！', py: 'gěi nǐ qián xiè xie', en: 'Here is the money. Thank you!', km: 'នេះលុយ។ អរគុណ!' }
      ] },

    { key: 'direction', en: 'Asking the way', km: 'សួរផ្លូវ',
      note: '在哪儿？ zài nǎr — "where is it?" — is the one question to memorise.',
      lines: [
        { sp: 'A', hz: '请问，洗手间在哪儿？', py: 'qǐng wèn xǐ shǒu jiān zài nǎ er', en: 'Excuse me, where is the toilet?', km: 'សុំទោស បង្គន់នៅឯណា?' },
        { sp: 'B', hz: '在那边。', py: 'zài nà biān', en: 'Over there.', km: 'នៅខាងនោះ។' },
        { sp: 'A', hz: '谢谢！医院远吗？', py: 'xiè xie yī yuàn yuǎn ma', en: 'Thank you! Is the hospital far?', km: 'អរគុណ! មន្ទីរពេទ្យឆ្ងាយទេ?' },
        { sp: 'B', hz: '不远，走五分钟。', py: 'bù yuǎn zǒu wǔ fēn zhōng', en: 'Not far, five minutes on foot.', km: 'មិនឆ្ងាយទេ ដើរប្រាំនាទី។' },
        { sp: 'A', hz: '怎么走？', py: 'zěn me zǒu', en: 'How do I get there?', km: 'ទៅដោយរបៀបណា?' },
        { sp: 'B', hz: '往前走，然后向右拐。', py: 'wǎng qián zǒu rán hòu xiàng yòu guǎi', en: 'Go straight on, then turn right.', km: 'ដើរត្រង់ បន្ទាប់មកបត់ស្តាំ។' },
        { sp: 'A', hz: '我明白了，谢谢您！', py: 'wǒ míng bai le xiè xie nín', en: 'I understand, thank you!', km: 'ខ្ញុំយល់ហើយ អរគុណ!' }
      ] },

    { key: 'time', en: 'Time and plans', km: 'ពេលវេលា និងផែនការ',
      note: 'Chinese puts the time before the verb: 我三点去 — "I at three o’clock go".',
      lines: [
        { sp: 'A', hz: '现在几点？', py: 'xiàn zài jǐ diǎn', en: 'What time is it now?', km: 'ឥឡូវម៉ោងប៉ុន្មាន?' },
        { sp: 'B', hz: '现在两点半。', py: 'xiàn zài liǎng diǎn bàn', en: 'It is half past two.', km: 'ឥឡូវម៉ោងពីរកន្លះ។' },
        { sp: 'A', hz: '你今天有课吗？', py: 'nǐ jīn tiān yǒu kè ma', en: 'Do you have class today?', km: 'ថ្ងៃនេះអ្នកមានម៉ោងរៀនទេ?' },
        { sp: 'B', hz: '有，四点上课。', py: 'yǒu sì diǎn shàng kè', en: 'Yes, class starts at four.', km: 'មាន ម៉ោងបួនចូលរៀន។' },
        { sp: 'A', hz: '明天呢？', py: 'míng tiān ne', en: 'What about tomorrow?', km: 'ចុះថ្ងៃស្អែកវិញ?' },
        { sp: 'B', hz: '明天是星期天，我不上课。', py: 'míng tiān shì xīng qī tiān wǒ bú shàng kè', en: 'Tomorrow is Sunday, I have no class.', km: 'ថ្ងៃស្អែកជាថ្ងៃអាទិត្យ ខ្ញុំមិនរៀនទេ។' },
        { sp: 'A', hz: '那我们一起去市场吧。', py: 'nà wǒ men yì qǐ qù shì chǎng ba', en: 'Then let us go to the market together.', km: 'អញ្ចឹងយើងទៅផ្សារជាមួយគ្នា។' },
        { sp: 'B', hz: '好的！', py: 'hǎo de', en: 'All right!', km: 'បាទ/ចាស!' }
      ] },

    { key: 'class', en: 'In the classroom', km: 'ក្នុងថ្នាក់រៀន',
      note: 'The sentences a beginner needs on day one of a Chinese class.',
      lines: [
        { sp: 'A', hz: '老师好！', py: 'lǎo shī hǎo', en: 'Hello, teacher!', km: 'សួស្តីលោកគ្រូ!' },
        { sp: 'B', hz: '同学们好！我们开始上课。', py: 'tóng xué men hǎo wǒ men kāi shǐ shàng kè', en: 'Hello, students! Let us begin the lesson.', km: 'សួស្តីសិស្សទាំងអស់គ្នា! យើងចាប់ផ្តើមរៀន។' },
        { sp: 'A', hz: '老师，这个字怎么读？', py: 'lǎo shī zhè ge zì zěn me dú', en: 'Teacher, how is this character read?', km: 'លោកគ្រូ តួអក្សរនេះអានយ៉ាងម៉េច?' },
        { sp: 'B', hz: '这个字读“好”。', py: 'zhè ge zì dú hǎo', en: 'This character is read "hǎo".', km: 'តួអក្សរនេះអានថា "ហៅ"។' },
        { sp: 'A', hz: '请再说一遍。', py: 'qǐng zài shuō yí biàn', en: 'Please say it again.', km: 'សូមនិយាយម្តងទៀត។' },
        { sp: 'A', hz: '对不起，我不明白。', py: 'duì bu qǐ wǒ bù míng bai', en: 'Sorry, I do not understand.', km: 'សុំទោស ខ្ញុំមិនយល់ទេ។' },
        { sp: 'B', hz: '没关系，慢慢学。', py: 'méi guān xi màn màn xué', en: 'It does not matter, learn slowly.', km: 'មិនអីទេ រៀនបន្តិចម្តងៗ។' },
        { sp: 'A', hz: '谢谢老师，再见！', py: 'xiè xie lǎo shī zài jiàn', en: 'Thank you teacher, goodbye!', km: 'អរគុណលោកគ្រូ លាហើយ!' }
      ] }
  ];

  /* Sentence patterns worth memorising as whole units. */
  var PATTERNS = [
    { hz: '我是学生。',     py: 'wǒ shì xué shēng',   en: 'I am a student.',        km: 'ខ្ញុំជាសិស្ស។',           note: 'Subject + 是 + noun. 是 is only used between two nouns.' },
    { hz: '我不是老师。',   py: 'wǒ bú shì lǎo shī',  en: 'I am not a teacher.',    km: 'ខ្ញុំមិនមែនជាគ្រូទេ។',      note: 'Put 不 in front of the verb to make it negative.' },
    { hz: '你是学生吗？',   py: 'nǐ shì xué shēng ma', en: 'Are you a student?',    km: 'អ្នកជាសិស្សមែនទេ?',      note: 'Add 吗 to the end of a statement and it becomes a yes/no question.' },
    { hz: '我有两个哥哥。', py: 'wǒ yǒu liǎng gè gē ge', en: 'I have two older brothers.', km: 'ខ្ញុំមានបងប្រុសពីរនាក់។', note: 'Number + measure word + noun. Use 两 not 二 when counting.' },
    { hz: '我很喜欢中文。', py: 'wǒ hěn xǐ huan zhōng wén', en: 'I like Chinese very much.', km: 'ខ្ញុំចូលចិត្តភាសាចិនណាស់។', note: 'Adjectives and feeling verbs usually take 很 even when you do not mean "very".' },
    { hz: '这是什么？',     py: 'zhè shì shén me',    en: 'What is this?',          km: 'នេះជាអ្វី?',              note: 'Question words stay where the answer would go — no reordering.' },
    { hz: '我明天去学校。', py: 'wǒ míng tiān qù xué xiào', en: 'I am going to school tomorrow.', km: 'ថ្ងៃស្អែកខ្ញុំទៅសាលា។', note: 'Time comes before the verb, never after it.' },
    { hz: '请给我一杯水。', py: 'qǐng gěi wǒ yì bēi shuǐ', en: 'Please give me a glass of water.', km: 'សូមឲ្យទឹកខ្ញុំមួយកែវ។', note: '请 at the front makes any request polite.' }
  ];

  global.ZH_BANK = {
    tones: TONES,
    chart: CHART,
    initials: INITIALS,
    finals: FINALS,
    spelling: SPELLING,
    contrasts: CONTRASTS,
    toneRules: TONE_RULES,
    toneDrill: TONE_DRILL,
    strokes: STROKES,
    orderRules: ORDER_RULES,
    radicals: RADICALS,
    write: WRITE,
    digits: DIGITS,
    bigNumbers: BIG_NUMBERS,
    numRules: NUM_RULES,
    numUses: NUM_USES,
    numNote: NUM_NOTE,
    words: WORDS,
    convos: CONVOS,
    patterns: PATTERNS
  };
})(window);
