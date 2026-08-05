/* Alpha Academy Cambodia — Chinese for Kindergarten, content bank
   ---------------------------------------------------------------------------
   Everything the page teaches lives here as data. The renderer in
   assets/js/chinese-kindergarten.js never contains a word of the course, so
   adding vocabulary is an edit to this file alone.

   Shape of a word, used everywhere:

       { hz: '猫', py: 'māo', en: 'cat', em: '🐱', km: 'ឆ្មា', tone: 1 }

   `hz`  the characters. THIS IS ALSO WHAT GETS SPOKEN — see the rule below.
   `py`  pinyin with the tone marks, shown but never spoken.
   `en`  the meaning, for the grown-up reading over the child's shoulder.
   `em`  the picture. A four-year-old cannot read, so the picture is not
         decoration: it is how the question is asked. Every entry needs one.
   `km`  the Khmer meaning, shown on the card in both site languages.
   `tone` 1-4, only on the single-syllable entries the tone game draws from.

   THE ONE RULE THAT MATTERS. Speak characters, never pinyin. A zh-CN voice
   reads 你好 correctly but would read "nǐ hǎo" as Latin letters, so every
   `data-say` the page emits is hanzi and every `say` a game asks with is
   hanzi. If you add an entry with no `hz`, it cannot be spoken.             */
(function (global) {
  'use strict';

  /* ------------------------------------------------------ first characters
     Chosen because a child can see the thing in the character, or because it
     is one of the handful that turn up in everything. All single-syllable,
     which is what lets the tone game draw from this list.                  */
  var HANZI = [
    { hz:'人', py:'rén',   tone:2, en:'person',   em:'🧍', km:'មនុស្ស' },
    { hz:'口', py:'kǒu',   tone:3, en:'mouth',    em:'👄', km:'មាត់' },
    { hz:'日', py:'rì',    tone:4, en:'sun, day', em:'☀️', km:'ព្រះអាទិត្យ' },
    { hz:'月', py:'yuè',   tone:4, en:'moon',     em:'🌙', km:'ព្រះច័ន្ទ' },
    { hz:'山', py:'shān',  tone:1, en:'mountain', em:'⛰️', km:'ភ្នំ' },
    { hz:'水', py:'shuǐ',  tone:3, en:'water',    em:'💧', km:'ទឹក' },
    { hz:'火', py:'huǒ',   tone:3, en:'fire',     em:'🔥', km:'ភ្លើង' },
    { hz:'木', py:'mù',    tone:4, en:'tree, wood', em:'🌳', km:'ឈើ' },
    { hz:'大', py:'dà',    tone:4, en:'big',      em:'🐘', km:'ធំ' },
    { hz:'小', py:'xiǎo',  tone:3, en:'small',    em:'🐜', km:'តូច' },
    { hz:'上', py:'shàng', tone:4, en:'up, above', em:'⬆️', km:'លើ' },
    { hz:'下', py:'xià',   tone:4, en:'down, below', em:'⬇️', km:'ក្រោម' },
    { hz:'中', py:'zhōng', tone:1, en:'middle',   em:'🎯', km:'កណ្តាល' },
    { hz:'天', py:'tiān',  tone:1, en:'sky, day', em:'🌤️', km:'មេឃ' },
    { hz:'手', py:'shǒu',  tone:3, en:'hand',     em:'✋', km:'ដៃ' },
    { hz:'目', py:'mù',    tone:4, en:'eye',      em:'👁️', km:'ភ្នែក' },
    { hz:'耳', py:'ěr',    tone:3, en:'ear',      em:'👂', km:'ត្រចៀក' },
    { hz:'心', py:'xīn',   tone:1, en:'heart',    em:'❤️', km:'បេះដូង' },
    { hz:'牛', py:'niú',   tone:2, en:'cow',      em:'🐄', km:'គោ' },
    { hz:'羊', py:'yáng',  tone:2, en:'sheep',    em:'🐑', km:'ចៀម' },
    { hz:'马', py:'mǎ',    tone:3, en:'horse',    em:'🐴', km:'សេះ' },
    { hz:'鱼', py:'yú',    tone:2, en:'fish',     em:'🐟', km:'ត្រី' },
    { hz:'鸟', py:'niǎo',  tone:3, en:'bird',     em:'🐦', km:'សត្វស្លាប' },
    { hz:'花', py:'huā',   tone:1, en:'flower',   em:'🌸', km:'ផ្កា' },
    { hz:'雨', py:'yǔ',    tone:3, en:'rain',     em:'🌧️', km:'ភ្លៀង' },
    { hz:'田', py:'tián',  tone:2, en:'field',    em:'🌾', km:'ស្រែ' }
  ];

  /* -------------------------------------------------------------- 1 to 20 */
  var NUMBERS = [
    { n:1,  hz:'一',   py:'yī',      km:'មួយ' },
    { n:2,  hz:'二',   py:'èr',      km:'ពីរ' },
    { n:3,  hz:'三',   py:'sān',     km:'បី' },
    { n:4,  hz:'四',   py:'sì',      km:'បួន' },
    { n:5,  hz:'五',   py:'wǔ',      km:'ប្រាំ' },
    { n:6,  hz:'六',   py:'liù',     km:'ប្រាំមួយ' },
    { n:7,  hz:'七',   py:'qī',      km:'ប្រាំពីរ' },
    { n:8,  hz:'八',   py:'bā',      km:'ប្រាំបី' },
    { n:9,  hz:'九',   py:'jiǔ',     km:'ប្រាំបួន' },
    { n:10, hz:'十',   py:'shí',     km:'ដប់' },
    { n:11, hz:'十一', py:'shíyī',   km:'ដប់មួយ' },
    { n:12, hz:'十二', py:'shí’èr', km:'ដប់ពីរ' },
    { n:13, hz:'十三', py:'shísān',  km:'ដប់បី' },
    { n:14, hz:'十四', py:'shísì',   km:'ដប់បួន' },
    { n:15, hz:'十五', py:'shíwǔ',   km:'ដប់ប្រាំ' },
    { n:16, hz:'十六', py:'shíliù',  km:'ដប់ប្រាំមួយ' },
    { n:17, hz:'十七', py:'shíqī',   km:'ដប់ប្រាំពីរ' },
    { n:18, hz:'十八', py:'shíbā',   km:'ដប់ប្រាំបី' },
    { n:19, hz:'十九', py:'shíjiǔ',  km:'ដប់ប្រាំបួន' },
    { n:20, hz:'二十', py:'èrshí',   km:'ម្ភៃ' }
  ];

  /* The things that get counted. Picked so that twenty of them still read as
     twenty separate objects rather than a texture. */
  var COUNTERS = ['🍎','⭐','🐟','🎈','🍌','🐞','🍪','🌸','🚗','🐤'];

  /* -------------------------------------------------------------- colours */
  var COLOURS = [
    { hz:'红色', py:'hóngsè',  en:'red',    km:'ក្រហម',      hex:'#e03131', on:'#fff' },
    { hz:'蓝色', py:'lánsè',   en:'blue',   km:'ខៀវ',        hex:'#1c7ed6', on:'#fff' },
    { hz:'黄色', py:'huángsè', en:'yellow', km:'លឿង',        hex:'#fcc419', on:'#3b2f00' },
    { hz:'绿色', py:'lǜsè',    en:'green',  km:'បៃតង',       hex:'#2f9e44', on:'#fff' },
    { hz:'橙色', py:'chéngsè', en:'orange', km:'ទឹកក្រូច',   hex:'#f76707', on:'#fff' },
    { hz:'紫色', py:'zǐsè',    en:'purple', km:'ស្វាយ',      hex:'#7048e8', on:'#fff' },
    { hz:'粉色', py:'fěnsè',   en:'pink',   km:'ផ្កាឈូក',    hex:'#f06595', on:'#fff' },
    { hz:'棕色', py:'zōngsè',  en:'brown',  km:'ត្នោត',      hex:'#8a5a34', on:'#fff' },
    { hz:'黑色', py:'hēisè',   en:'black',  km:'ខ្មៅ',       hex:'#1a1a1a', on:'#fff' },
    { hz:'白色', py:'báisè',   en:'white',  km:'ស',          hex:'#ffffff', on:'#333' },
    { hz:'灰色', py:'huīsè',   en:'grey',   km:'ប្រផេះ',     hex:'#909296', on:'#fff' }
  ];

  /* --------------------------------------------------------------- shapes
     `d` is drawn inside a 0 0 100 100 viewBox, the same coordinate system the
     English page uses, so a shape can be swapped without touching the CSS. */
  var SHAPES = [
    { hz:'圆形',   py:'yuánxíng',      en:'circle',    km:'រង្វង់',        d:'M50 6a44 44 0 1 0 .1 0z' },
    { hz:'正方形', py:'zhèngfāngxíng', en:'square',    km:'ការេ',          d:'M12 12h76v76H12z' },
    { hz:'三角形', py:'sānjiǎoxíng',   en:'triangle',  km:'ត្រីកោណ',       d:'M50 10 92 86H8z' },
    { hz:'长方形', py:'chángfāngxíng', en:'rectangle', km:'ចតុកោណកែង',     d:'M6 26h88v48H6z' },
    { hz:'星形',   py:'xīngxíng',      en:'star',      km:'ផ្កាយ',         d:'M50 6 62 38l34 2-26 22 8 33-28-18-28 18 8-33-26-22 34-2z' },
    { hz:'心形',   py:'xīnxíng',       en:'heart',     km:'បេះដូង',        d:'M50 88C22 68 8 54 8 36a22 22 0 0 1 42-9 22 22 0 0 1 42 9c0 18-14 32-42 52z' },
    { hz:'菱形',   py:'língxíng',      en:'diamond',   km:'រាងពេជ្រ',      d:'M50 6 94 50 50 94 6 50z' },
    { hz:'椭圆形', py:'tuǒyuánxíng',   en:'oval',      km:'ពងក្រពើ',       d:'M50 16c24 0 42 15 42 34S74 84 50 84 8 69 8 50s18-34 42-34z' }
  ];

  /* -------------------------------------------------- vocabulary by theme */
  var THEMES = [
    { key:'animals', hz:'动物', py:'dòngwù', en:'Animals', km:'សត្វ', em:'🐘', words:[
      { hz:'猫',   py:'māo',     en:'cat',      em:'🐱', km:'ឆ្មា' },
      { hz:'狗',   py:'gǒu',     en:'dog',      em:'🐶', km:'ឆ្កែ' },
      { hz:'鸟',   py:'niǎo',    en:'bird',     em:'🐦', km:'សត្វស្លាប' },
      { hz:'鱼',   py:'yú',      en:'fish',     em:'🐟', km:'ត្រី' },
      { hz:'牛',   py:'niú',     en:'cow',      em:'🐄', km:'គោ' },
      { hz:'猪',   py:'zhū',     en:'pig',      em:'🐷', km:'ជ្រូក' },
      { hz:'鸭子', py:'yāzi',    en:'duck',     em:'🦆', km:'ទា' },
      { hz:'大象', py:'dàxiàng', en:'elephant', em:'🐘', km:'ដំរី' },
      { hz:'猴子', py:'hóuzi',   en:'monkey',   em:'🐵', km:'ស្វា' },
      { hz:'老虎', py:'lǎohǔ',   en:'tiger',    em:'🐯', km:'ខ្លា' }
    ]},
    { key:'food', hz:'食物', py:'shíwù', en:'Food', km:'អាហារ', em:'🍚', words:[
      { hz:'米饭', py:'mǐfàn',    en:'rice',    em:'🍚', km:'បាយ' },
      { hz:'面包', py:'miànbāo',  en:'bread',   em:'🍞', km:'នំបុ័ង' },
      { hz:'鸡蛋', py:'jīdàn',    en:'egg',     em:'🥚', km:'ពងមាន់' },
      { hz:'牛奶', py:'niúnǎi',   en:'milk',    em:'🥛', km:'ទឹកដោះគោ' },
      { hz:'水',   py:'shuǐ',     en:'water',   em:'💧', km:'ទឹក' },
      { hz:'苹果', py:'píngguǒ',  en:'apple',   em:'🍎', km:'ផ្លែប៉ោម' },
      { hz:'香蕉', py:'xiāngjiāo',en:'banana',  em:'🍌', km:'ចេក' },
      { hz:'芒果', py:'mángguǒ',  en:'mango',   em:'🥭', km:'ស្វាយ' },
      { hz:'鸡肉', py:'jīròu',    en:'chicken', em:'🍗', km:'សាច់មាន់' },
      { hz:'蛋糕', py:'dàngāo',   en:'cake',    em:'🍰', km:'នំខេក' }
    ]},
    { key:'family', hz:'家人', py:'jiārén', en:'Family', km:'គ្រួសារ', em:'👨‍👩‍👧', words:[
      { hz:'妈妈', py:'māma',   en:'mother',      em:'👩', km:'ម្តាយ' },
      { hz:'爸爸', py:'bàba',   en:'father',      em:'👨', km:'ឪពុក' },
      { hz:'姐姐', py:'jiějie', en:'big sister',  em:'👧', km:'បងស្រី' },
      { hz:'哥哥', py:'gēge',   en:'big brother', em:'👦', km:'បងប្រុស' },
      { hz:'宝宝', py:'bǎobao', en:'baby',        em:'👶', km:'ទារក' },
      { hz:'奶奶', py:'nǎinai', en:'grandmother', em:'👵', km:'យាយ' },
      { hz:'爷爷', py:'yéye',   en:'grandfather', em:'👴', km:'តា' },
      { hz:'家',   py:'jiā',    en:'home, family',em:'🏠', km:'ផ្ទះ / គ្រួសារ' }
    ]},
    { key:'body', hz:'身体', py:'shēntǐ', en:'My Body', km:'រាងកាយ', em:'🧍', words:[
      { hz:'头',   py:'tóu',     en:'head',  em:'🧑', km:'ក្បាល' },
      { hz:'头发', py:'tóufa',   en:'hair',  em:'💇', km:'សក់' },
      { hz:'眼睛', py:'yǎnjing', en:'eye',   em:'👁️', km:'ភ្នែក' },
      { hz:'耳朵', py:'ěrduo',   en:'ear',   em:'👂', km:'ត្រចៀក' },
      { hz:'鼻子', py:'bízi',    en:'nose',  em:'👃', km:'ច្រមុះ' },
      { hz:'嘴巴', py:'zuǐba',   en:'mouth', em:'👄', km:'មាត់' },
      { hz:'手',   py:'shǒu',    en:'hand',  em:'✋', km:'ដៃ' },
      { hz:'胳膊', py:'gēbo',    en:'arm',   em:'💪', km:'ដើមដៃ' },
      { hz:'脚',   py:'jiǎo',    en:'foot',  em:'🦶', km:'ជើង' },
      { hz:'腿',   py:'tuǐ',     en:'leg',   em:'🦵', km:'ដើមជើង' }
    ]},
    { key:'school', hz:'教室', py:'jiàoshì', en:'My Classroom', km:'ថ្នាក់រៀន', em:'✏️', words:[
      { hz:'书',   py:'shū',      en:'book',    em:'📕', km:'សៀវភៅ' },
      { hz:'笔',   py:'bǐ',       en:'pen',     em:'🖊️', km:'ប៊ិច' },
      { hz:'铅笔', py:'qiānbǐ',   en:'pencil',  em:'✏️', km:'ខ្មៅដៃ' },
      { hz:'书包', py:'shūbāo',   en:'bag',     em:'🎒', km:'កាបូប' },
      { hz:'椅子', py:'yǐzi',     en:'chair',   em:'🪑', km:'កៅអី' },
      { hz:'门',   py:'mén',      en:'door',    em:'🚪', km:'ទ្វារ' },
      { hz:'尺子', py:'chǐzi',    en:'ruler',   em:'📏', km:'បន្ទាត់' },
      { hz:'剪刀', py:'jiǎndāo',  en:'scissors',em:'✂️', km:'កន្ត្រៃ' },
      { hz:'老师', py:'lǎoshī',   en:'teacher', em:'👩‍🏫', km:'គ្រូ' },
      { hz:'学生', py:'xuésheng', en:'student', em:'🧑‍🎓', km:'សិស្ស' }
    ]},
    { key:'clothes', hz:'衣服', py:'yīfu', en:'Clothes', km:'សម្លៀកបំពាក់', em:'👕', words:[
      { hz:'衬衫',   py:'chènshān',  en:'shirt',    em:'👕', km:'អាវ' },
      { hz:'裤子',   py:'kùzi',      en:'trousers', em:'👖', km:'ខោ' },
      { hz:'连衣裙', py:'liányīqún', en:'dress',    em:'👗', km:'រ៉ូប' },
      { hz:'裙子',   py:'qúnzi',     en:'skirt',    em:'👘', km:'សំពត់' },
      { hz:'鞋',     py:'xié',       en:'shoes',    em:'👟', km:'ស្បែកជើង' },
      { hz:'袜子',   py:'wàzi',      en:'socks',    em:'🧦', km:'ស្រោមជើង' },
      { hz:'帽子',   py:'màozi',     en:'hat',      em:'👒', km:'មួក' },
      { hz:'外套',   py:'wàitào',    en:'jacket',   em:'🧥', km:'អាវធំ' }
    ]},
    { key:'weather', hz:'天气', py:'tiānqì', en:'Weather', km:'អាកាសធាតុ', em:'🌤️', words:[
      { hz:'太阳', py:'tàiyáng', en:'sun',     em:'☀️', km:'ថ្ងៃ' },
      { hz:'雨',   py:'yǔ',      en:'rain',    em:'🌧️', km:'ភ្លៀង' },
      { hz:'云',   py:'yún',     en:'cloud',   em:'☁️', km:'ពពក' },
      { hz:'风',   py:'fēng',    en:'wind',    em:'💨', km:'ខ្យល់' },
      { hz:'雷雨', py:'léiyǔ',   en:'storm',   em:'⛈️', km:'ព្យុះ' },
      { hz:'彩虹', py:'cǎihóng', en:'rainbow', em:'🌈', km:'ឥន្ធនូ' },
      { hz:'热',   py:'rè',      en:'hot',     em:'🥵', km:'ក្តៅ' },
      { hz:'冷',   py:'lěng',    en:'cold',    em:'🥶', km:'ត្រជាក់' }
    ]},
    { key:'actions', hz:'我会…', py:'wǒ huì', en:'I Can…', km:'សកម្មភាព', em:'🏃', words:[
      { hz:'跑',   py:'pǎo',      en:'run',   em:'🏃', km:'រត់' },
      { hz:'跳',   py:'tiào',     en:'jump',  em:'🤸', km:'លោត' },
      { hz:'走',   py:'zǒu',      en:'walk',  em:'🚶', km:'ដើរ' },
      { hz:'吃',   py:'chī',      en:'eat',   em:'🍽️', km:'ញ៉ាំ' },
      { hz:'喝',   py:'hē',       en:'drink', em:'🥤', km:'ផឹក' },
      { hz:'睡觉', py:'shuìjiào', en:'sleep', em:'😴', km:'ដេក' },
      { hz:'读',   py:'dú',       en:'read',  em:'📖', km:'អាន' },
      { hz:'写',   py:'xiě',      en:'write', em:'📝', km:'សរសេរ' },
      { hz:'唱歌', py:'chànggē',  en:'sing',  em:'🎤', km:'ច្រៀង' },
      { hz:'玩',   py:'wán',      en:'play',  em:'🧸', km:'លេង' }
    ]}
  ];

  /* ---------------------------------------------------------------- tones
     The thing that has no equivalent in English and the thing a Khmer child
     most needs drilling on. Four groups of ordinary words, so the tone is
     practised inside something worth saying rather than on its own.        */
  var TONES = [
    { n:1, mark:'ˉ', hz:'一声', py:'dì-yī shēng',
      en:'High and flat — hold it level, like singing one note.',
      km:'ខ្ពស់ និងរាបស្មើ — កាន់សំឡេងឲ្យស្មើ ដូចច្រៀងតែមួយកូនសំឡេង។',
      words:[
        { hz:'妈', py:'mā',   en:'mother', em:'👩', km:'ម្តាយ' },
        { hz:'猫', py:'māo',  en:'cat',    em:'🐱', km:'ឆ្មា' },
        { hz:'天', py:'tiān', en:'sky',    em:'🌤️', km:'មេឃ' },
        { hz:'花', py:'huā',  en:'flower', em:'🌸', km:'ផ្កា' }
      ]},
    { n:2, mark:'ˊ', hz:'二声', py:'dì-èr shēng',
      en:'Rising — the voice goes up, like asking “what?”',
      km:'ឡើងលើ — សំឡេងឡើងខ្ពស់ ដូចសួរថា “អ្វី?”',
      words:[
        { hz:'鱼', py:'yú',   en:'fish',   em:'🐟', km:'ត្រី' },
        { hz:'牛', py:'niú',  en:'cow',    em:'🐄', km:'គោ' },
        { hz:'人', py:'rén',  en:'person', em:'🧍', km:'មនុស្ស' },
        { hz:'羊', py:'yáng', en:'sheep',  em:'🐑', km:'ចៀម' }
      ]},
    { n:3, mark:'ˇ', hz:'三声', py:'dì-sān shēng',
      en:'Down then up — it dips low and comes back.',
      km:'ចុះរួចឡើង — សំឡេងចុះទាប រួចឡើងវិញ។',
      words:[
        { hz:'马', py:'mǎ',   en:'horse', em:'🐴', km:'សេះ' },
        { hz:'水', py:'shuǐ', en:'water', em:'💧', km:'ទឹក' },
        { hz:'狗', py:'gǒu',  en:'dog',   em:'🐶', km:'ឆ្កែ' },
        { hz:'五', py:'wǔ',   en:'five',  em:'🖐️', km:'ប្រាំ' }
      ]},
    { n:4, mark:'ˋ', hz:'四声', py:'dì-sì shēng',
      en:'Falling — sharp and down, like saying “no!”',
      km:'ធ្លាក់ចុះ — ខ្លីនិងចុះ ដូចនិយាយថា “ទេ!”',
      words:[
        { hz:'月', py:'yuè', en:'moon', em:'🌙', km:'ព្រះច័ន្ទ' },
        { hz:'大', py:'dà',  en:'big',  em:'🐘', km:'ធំ' },
        { hz:'树', py:'shù', en:'tree', em:'🌳', km:'ដើមឈើ' },
        { hz:'四', py:'sì',  en:'four', em:'4️⃣', km:'បួន' }
      ]}
  ];

  /* One syllable, four tones, four different words. This is the whole reason
     tones are taught first, so it gets a row of its own. */
  var CONTRAST = [
    { hz:'妈', py:'mā', tone:1, en:'mother',   em:'👩', km:'ម្តាយ' },
    { hz:'麻', py:'má', tone:2, en:'hemp',     em:'🌿', km:'ធាង (ដំណាំ)' },
    { hz:'马', py:'mǎ', tone:3, en:'horse',    em:'🐴', km:'សេះ' },
    { hz:'骂', py:'mà', tone:4, en:'to scold', em:'😠', km:'ស្តីបន្ទោស' }
  ];

  /* The characters that turn up in everything and are simply recognised. */
  var COMMON = [
    { hz:'我',   py:'wǒ',     en:'I, me',   km:'ខ្ញុំ' },
    { hz:'你',   py:'nǐ',     en:'you',     km:'អ្នក' },
    { hz:'他',   py:'tā',     en:'he',      km:'គាត់ (ប្រុស)' },
    { hz:'她',   py:'tā',     en:'she',     km:'នាង' },
    { hz:'是',   py:'shì',    en:'to be',   km:'ជា' },
    { hz:'不',   py:'bù',     en:'not',     km:'មិន' },
    { hz:'好',   py:'hǎo',    en:'good',    km:'ល្អ' },
    { hz:'有',   py:'yǒu',    en:'to have', km:'មាន' },
    { hz:'的',   py:'de',     en:'’s, of',  km:'របស់' },
    { hz:'在',   py:'zài',    en:'at, in',  km:'នៅ' },
    { hz:'这',   py:'zhè',    en:'this',    km:'នេះ' },
    { hz:'那',   py:'nà',     en:'that',    km:'នោះ' },
    { hz:'什么', py:'shénme', en:'what',    km:'អ្វី' },
    { hz:'谁',   py:'shéi',   en:'who',     km:'នរណា' },
    { hz:'几',   py:'jǐ',     en:'how many',km:'ប៉ុន្មាន' },
    { hz:'很',   py:'hěn',    en:'very',    km:'ណាស់' },
    { hz:'也',   py:'yě',     en:'also',    km:'ក៏' },
    { hz:'和',   py:'hé',     en:'and',     km:'និង' },
    { hz:'会',   py:'huì',    en:'can',     km:'អាច' },
    { hz:'要',   py:'yào',    en:'to want', km:'ចង់' },
    { hz:'去',   py:'qù',     en:'to go',   km:'ទៅ' },
    { hz:'来',   py:'lái',    en:'to come', km:'មក' },
    { hz:'看',   py:'kàn',    en:'to look', km:'មើល' },
    { hz:'说',   py:'shuō',   en:'to speak',km:'និយាយ' }
  ];

  /* ----------------------------------------------------------------- talk
     Said out loud long before it is ever read. `a` is the answer half of a
     pair, so a child can practise both sides with the teacher.             */
  var TALK = [
    { key:'greet', hz:'打招呼', py:'dǎ zhāohu', en:'Saying hello', km:'ការស្វាគមន៍', em:'👋', lines:[
      { hz:'你好！',   py:'Nǐ hǎo!',        en:'Hello!',          km:'សួស្តី!',                em:'👋' },
      { hz:'早上好。', py:'Zǎoshang hǎo.',  en:'Good morning.',   km:'អរុណសួស្តី។',           em:'🌅' },
      { hz:'下午好。', py:'Xiàwǔ hǎo.',     en:'Good afternoon.', km:'ទិវាសួស្តី។',           em:'🌤️' },
      { hz:'晚安。',   py:'Wǎn’ān.',        en:'Good night.',     km:'រាត្រីសួស្តី។',         em:'🌙' },
      { hz:'再见！',   py:'Zàijiàn!',       en:'Goodbye!',        km:'លាហើយ!',                 em:'👋' },
      { hz:'明天见。', py:'Míngtiān jiàn.', en:'See you tomorrow.', km:'ជួបគ្នាថ្ងៃស្អែក។',   em:'🙂' }
    ]},
    { key:'me', hz:'我', py:'wǒ', en:'About me', km:'អំពីខ្ញុំ', em:'🧒', lines:[
      { hz:'你叫什么名字？', py:'Nǐ jiào shénme míngzi?', a:'我叫达拉。',      ay:'Wǒ jiào Dálā.',
        en:'What is your name? — My name is Dara.', km:'តើអ្នកឈ្មោះអ្វី?', em:'🧒' },
      { hz:'你好吗？', py:'Nǐ hǎo ma?', a:'我很好，谢谢。', ay:'Wǒ hěn hǎo, xièxie.',
        en:'How are you? — I am fine, thank you.', km:'តើអ្នកសុខសប្បាយទេ?', em:'😊' },
      { hz:'你几岁？', py:'Nǐ jǐ suì?', a:'我五岁。', ay:'Wǒ wǔ suì.',
        en:'How old are you? — I am five.', km:'តើអ្នកអាយុប៉ុន្មាន?', em:'🎂' },
      { hz:'你从哪里来？', py:'Nǐ cóng nǎlǐ lái?', a:'我从柬埔寨来。', ay:'Wǒ cóng Jiǎnpǔzhài lái.',
        en:'Where are you from? — I am from Cambodia.', km:'តើអ្នកមកពីណា?', em:'🇰🇭' }
    ]},
    { key:'polite', hz:'礼貌', py:'lǐmào', en:'Being kind', km:'ពាក្យសុភាព', em:'💛', lines:[
      { hz:'请。',       py:'Qǐng.',        en:'Please.',        km:'សូម។',           em:'🙏' },
      { hz:'谢谢。',     py:'Xièxie.',      en:'Thank you.',     km:'អរគុណ។',         em:'💛' },
      { hz:'不客气。',   py:'Bú kèqi.',     en:'You’re welcome.',km:'មិនអីទេ។',       em:'🙂' },
      { hz:'对不起。',   py:'Duìbuqǐ.',     en:'Sorry.',         km:'សុំទោស។',        em:'😔' },
      { hz:'没关系。',   py:'Méi guānxi.',  en:'It’s all right.',km:'គ្មានបញ្ហាទេ។',  em:'🤗' }
    ]},
    { key:'class', hz:'在教室', py:'zài jiàoshì', en:'In the classroom', km:'ក្នុងថ្នាក់', em:'🏫', lines:[
      { hz:'起立。',     py:'Qǐlì.',       en:'Stand up.',       km:'ក្រោកឈរ។',       em:'🧍' },
      { hz:'请坐。',     py:'Qǐng zuò.',   en:'Sit down, please.', km:'សូមអង្គុយ។',   em:'🪑' },
      { hz:'请听。',     py:'Qǐng tīng.',  en:'Listen, please.', km:'សូមស្តាប់។',     em:'👂' },
      { hz:'看我。',     py:'Kàn wǒ.',     en:'Look at me.',     km:'មើលមកខ្ញុំ។',    em:'👀' },
      { hz:'打开书。',   py:'Dǎkāi shū.',  en:'Open your book.', km:'បើកសៀវភៅ។',     em:'📖' },
      { hz:'请排队。',   py:'Qǐng páiduì.',en:'Line up, please.', km:'សូមតម្រង់ជួរ។', em:'🚸' }
    ]},
    { key:'say', hz:'小句子', py:'xiǎo jùzi', en:'Little sentences', km:'ប្រយោគខ្លីៗ', em:'💬', lines:[
      { hz:'这是我的书包。', py:'Zhè shì wǒ de shūbāo.', en:'This is my bag.',  km:'នេះជាកាបូបរបស់ខ្ញុំ។', em:'🎒' },
      { hz:'我喜欢芒果。',   py:'Wǒ xǐhuan mángguǒ.',    en:'I like mangoes.',  km:'ខ្ញុំចូលចិត្តស្វាយ។',  em:'🥭' },
      { hz:'我会跳！',       py:'Wǒ huì tiào!',          en:'I can jump!',      km:'ខ្ញុំអាចលោតបាន!',      em:'🤸' },
      { hz:'我有两只猫。',   py:'Wǒ yǒu liǎng zhī māo.', en:'I have two cats.', km:'ខ្ញុំមានឆ្មាពីរ។',     em:'🐱' },
      { hz:'今天很热。',     py:'Jīntiān hěn rè.',       en:'It is hot today.', km:'ថ្ងៃនេះក្តៅ។',         em:'🥵' },
      { hz:'我很开心。',     py:'Wǒ hěn kāixīn.',        en:'I am happy.',      km:'ខ្ញុំសប្បាយចិត្ត។',    em:'😄' }
    ]}
  ];

  /* Said to the child after a right answer — in Chinese, because the voice on
     this page is a Chinese one and would read English as nonsense. */
  var PRAISE = [
    { s:'很好！',     em:'🎉' },
    { s:'太棒了！',   em:'⭐' },
    { s:'对了！',     em:'👏' },
    { s:'真棒！',     em:'🌟' },
    { s:'做得好！',   em:'😄' },
    { s:'你真聪明！', em:'💡' },
    { s:'好极了！',   em:'🏆' },
    { s:'非常好！',   em:'🎈' }
  ];

  /* Never "wrong". A four-year-old who feels told off stops playing. */
  var NUDGE = [
    { s:'再试一次。',   em:'🙂' },
    { s:'没关系，再来。', em:'💪' },
    { s:'听一听。',     em:'👂' },
    { s:'快好了！',     em:'🤗' }
  ];

  global.ZKG_BANK = {
    hanzi: HANZI,
    numbers: NUMBERS,
    counters: COUNTERS,
    colours: COLOURS,
    shapes: SHAPES,
    themes: THEMES,
    tones: TONES,
    contrast: CONTRAST,
    common: COMMON,
    talk: TALK,
    praise: PRAISE,
    nudge: NUDGE
  };
})(window);
