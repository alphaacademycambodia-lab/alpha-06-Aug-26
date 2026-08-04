/* Alpha Academy Cambodia — Grade 12 probability, the lesson
   ---------------------------------------------------------------------------
   Transcribed from មេរៀនទី៨ ប្រូបាប (pp. 235–251) of the Preah Sisowath NGS
   summary workbook — the counting half (sets, permutations, combinations)
   followed by probability proper (sample space, events, the definition and
   its properties, conditional probability, independence, total probability
   and Bayes).

   The exercises on this page keep their own file. This one only holds the
   lesson, in the same block shape the complex-numbers and limits pages use:

     [{ id, h:{km,en}, blocks:[ {t:'p'|'m'|'ul'|'eg'|'note', …} ] }]

   't' is the block type: p = paragraph, m = displayed maths, ul = list,
   eg = worked example, note = aside. Maths is written once in TeX.        */
(function (global) {
  'use strict';

  var LESSON = [
    { id: 'sets',
      h: { km: 'រូបមន្តទាក់ទងនឹងសំណុំ', en: 'Set notation' },
      blocks: [
        { t: 'p',
          km: 'មុននឹងរាប់ករណី យើងត្រូវចេះសរសេរសំណុំសិន។ ប្រសព្វ និងប្រជុំ សរសេរដូចខាងក្រោម។',
          en: 'Counting starts with sets. Intersection and union are written like this.' },
        { t: 'm', tex: 'A \\cap B = \\{\\,x \\mid x \\in A \\wedge x \\in B\\,\\}' },
        { t: 'm', tex: 'A \\cup B = \\{\\,x \\mid x \\in A \\vee x \\in B\\,\\}' },
        { t: 'note',
          km: 'សញ្ញា ∧ អាន «និង» ហើយ ∨ អាន «ឬ»។ n(A) សរសេរតំណាងចំនួនធាតុនៃសំណុំ A។',
          en: '∧ reads “and”, ∨ reads “or”, and n(A) is the number of elements in A.' }
      ] },

    { id: 'sum-product',
      h: { km: 'គោលការណ៍ផលបូក និងផលគុណ', en: 'The sum and product principles' },
      blocks: [
        { t: 'ul', items: [
          { tex: 'n(A \\cup B) = n(A) + n(B) - n(A \\cap B)' },
          { km: 'បើ A និង B គ្មានធាតុរួមគ្នា គេបាន n(A∪B) = n(A) + n(B) ព្រោះ A∩B = ∅',
            en: 'If A and B are disjoint then n(A∪B) = n(A) + n(B), because A∩B = ∅' }
        ] },
        { t: 'p', km: 'សម្រាប់សំណុំបីរាប់អស់ រូបមន្តពង្រីកទៅជា៖', en: 'For three finite sets the formula extends to:' },
        { t: 'm', tex: 'n(A \\cup B \\cup C) = n(A)+n(B)+n(C)-n(A \\cap B)-n(B \\cap C)-n(A \\cap C)+n(A \\cap B \\cap C)' },
        { t: 'eg',
          km: 'នៅវិទ្យាល័យមួយមានសិស្សចំនួន ៨០០ នាក់បានចុះឈ្មោះរៀនភាសាអង់គ្លេស សិស្សចំនួន ៥០០ នាក់បានចុះឈ្មោះរៀនភាសាបារាំង និងសិស្សចំនួន ២០០ នាក់បានចុះឈ្មោះរៀនទាំងពីរភាសា។ តើសិស្សទាំងអស់មានចំនួនប៉ុន្មាននាក់? តើប៉ុន្មាននាក់រៀនតែភាសាអង់គ្លេស? តែភាសាបារាំង?',
          en: 'At one school 800 students enrolled in English, 500 in French and 200 in both. How many students are there altogether? How many take only English? Only French?',
          steps: [
            'n(E \\cup F) = 800 + 500 - 200 = 1100',
            'n(E \\text{ only}) = 800 - 200 = 600, \\qquad n(F \\text{ only}) = 500 - 200 = 300'
          ] }
      ] },

    { id: 'counting',
      h: { km: 'គោលការណ៍គ្រឹះនៃរបាប', en: 'The fundamental counting principle' },
      blocks: [
        { t: 'p',
          km: 'បើមានព្រឹត្តិការណ៍ A កើតឡើង m របៀប ហើយមានព្រឹត្តិការណ៍ B កើតឡើង n របៀប នោះចំនួនលទ្ធផលដែលព្រឹត្តិការណ៍ A កើតឡើងហើយ B កើតឡើងបន្តបន្ទាប់ស្មើនឹង m × n របៀប។',
          en: 'If A can happen in m ways and then B in n ways, the two together can happen in m × n ways.' },
        { t: 'p', km: 'ចំនួនចម្លាស់នៃ n ធាតុស្មើនឹង n! ដែល៖', en: 'The number of arrangements of n objects is n!, where:' },
        { t: 'm', tex: 'n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 3 \\times 2 \\times 1' },
        { t: 'note', km: 'សម្គាល់៖ 1! = 1 និង 0! = 1។', en: 'Note: 1! = 1 and 0! = 1.' },
        { t: 'eg',
          km: 'គ្រូធ្វើបញ្ជីឈ្មោះសិស្ស ៨ នាក់ដោយមានចុះលេខរៀងពី ១ ដល់ ៨ តែមិនគិតតាមលំដាប់អក្សរក្រមទេ។ តើគ្រូអាចធ្វើបញ្ជីឈ្មោះសិស្សបានប៉ុន្មានរបៀប? បើគ្រូចង់ឲ្យឈ្មោះសុខ និងឈ្មោះសាវ៉ានៅជាប់គ្នា តើបញ្ជីរបៀបនេះមានប៉ុន្មានបែប?',
          en: 'A teacher lists 8 students, numbered 1 to 8, in no alphabetical order. In how many ways can the list be made? And if two named students must sit next to each other?',
          steps: ['8! = 40\\,320', '7! \\times 2! = 10\\,080'] }
      ] },

    { id: 'permutation',
      h: { km: 'ចម្លាស់នៃ r ធាតុយកពី n ធាតុ', en: 'Permutations of r objects from n' },
      blocks: [
        { t: 'p',
          km: 'ចម្លាស់នៃ r ធាតុយកពី n ធាតុ គឺជាតម្រៀបមានលំដាប់នៃ r ធាតុខុសៗគ្នា ដែលធាតុនីមួយៗយកចេញពី n ធាតុខុសៗគ្នា (n ∈ ℕ, r ∈ ℕ, r ≤ n)។',
          en: 'A permutation of r objects taken from n is an ordered selection of r distinct objects out of n distinct objects (r ≤ n).' },
        { t: 'm', tex: 'P(n,r) = \\frac{n!}{(n-r)!}' },
        { t: 'eg',
          km: 'ក្នុងថង់មួយមានឃ្លី ៧ គ្រាប់ដែលមានពណ៌ខុសៗគ្នា។ គេចាប់យកឃ្លីមួយចេញពីថង់ រួចកត់ត្រាពណ៌ទុក ចំនួនបីដងបន្តបន្ទាប់ ដោយមិនដាក់ចូលថង់វិញ។ តើការយកឃ្លីចេញរបៀបនេះបានប៉ុន្មានរបៀប?',
          en: 'A bag holds 7 marbles of different colours. Three are drawn one after another without replacement. In how many ways can that happen?',
          steps: ['P(7,3) = \\frac{7!}{4!} = 210'] }
      ] },

    { id: 'repetition',
      h: { km: 'ចម្លាស់ច្រំដែលនៃ r ធាតុយកពី n ធាតុ', en: 'Permutations with repetition' },
      blocks: [
        { t: 'p',
          km: 'ចម្លាស់ច្រំដែលនៃ r ធាតុយកពី n ធាតុ គឺជាតម្រៀបមានលំដាប់នៃ r ធាតុ ដែលធាតុនីមួយៗអាចជាធាតុដែលយកចេញពី n ធាតុខុសៗគ្នា — មានន័យថាធាតុមួយអាចលេចឡើងច្រើនដង។',
          en: 'Here each of the r places may be filled by any of the n objects, so an object can appear more than once.' },
        { t: 'm', tex: 'n^{r}' },
        { t: 'eg',
          km: 'ក្នុងថង់មួយមានឃ្លី ៧ គ្រាប់ដែលមានពណ៌ខុសៗគ្នា។ គេចាប់យកឃ្លីមួយចេញពីថង់ កត់ត្រាពណ៌ទុក រួចដាក់ចូលក្នុងថង់វិញ ហើយចាប់ម្ដងទៀត ចំនួនបីដងបន្តបន្ទាប់គ្នា។ រកចំនួនលទ្ធផលដែលកើតឡើងទាំងអស់។',
          en: 'The same bag of 7 marbles, but each marble is returned before the next draw. Three draws in a row — how many outcomes?',
          steps: ['7^{3} = 343'] }
      ] },

    { id: 'circular',
      h: { km: 'ចម្លាស់រង្វង់', en: 'Circular permutations' },
      blocks: [
        { t: 'p',
          km: 'ចម្លាស់រង្វង់នៃ n ធាតុ គឺជាចម្លាស់នៃ n ធាតុខុសៗគ្នាជារង្វង់។ ដោយសារគ្មានចំណុចចាប់ផ្ដើមច្បាស់លាស់ ចំនួនចម្លាស់តិចជាងករណីជួរ។',
          en: 'Arranging n distinct objects in a ring. Because a ring has no fixed starting place, there are fewer arrangements than in a line.' },
        { t: 'm', tex: '(n-1)!' },
        { t: 'eg',
          km: 'គ្រួសារមួយមានមនុស្សចាស់ ៤ នាក់ និងក្មេង ២ នាក់អង្គុយហូបបាយជុំវិញតុមូលមួយ។ តើការអង្គុយនេះមានប៉ុន្មានរបៀបខុសគ្នា? បើក្មេង ២ នាក់អង្គុយជិតគ្នា តើមានប៉ុន្មានរបៀប?',
          en: 'Four adults and two children sit around a round table. How many seatings are there? And how many with the two children side by side?',
          steps: ['(6-1)! = 120', '(5-1)! \\times 2! = 48'] }
      ] },

    { id: 'distinguishable',
      h: { km: 'ចម្លាស់បែងចែកបាន', en: 'Distinguishable permutations' },
      blocks: [
        { t: 'p',
          km: 'ចម្លាស់បែងចែកបាន៖ ចម្លាស់នៃ n វត្ថុ ដែលក្នុងនោះមានវត្ថុប្រភេទទី១ ប្រភេទទី២ … ប្រភេទទី k ហើយវត្ថុប្រភេទនីមួយៗមានចំនួន r₁, r₂, …, r_k រៀងគ្នា (r₁ + r₂ + … + r_k = n)។',
          en: 'Arranging n objects of which r₁ are of one kind, r₂ of another, and so on up to r_k, with r₁ + r₂ + … + r_k = n.' },
        { t: 'm', tex: '\\frac{n!}{r_1!\\,r_2!\\cdots r_k!}' },
        { t: 'eg',
          km: 'គេតម្រៀបទៀនពណ៌ក្រហម ៣ ដើម ទៀនពណ៌ស ២ ដើម និងទៀនពណ៌លឿង ២ ដើម។ តើគេអាចតម្រៀបទៀនទាំងនោះឲ្យឆ្លាស់ពណ៌គ្នាបានប៉ុន្មានរបៀប?',
          en: 'Three red candles, two white and two yellow are set in a row. In how many distinguishable orders?',
          steps: ['\\frac{7!}{3!\\,2!\\,2!} = 210'] }
      ] },

    { id: 'combination',
      h: { km: 'បន្សំ', en: 'Combinations' },
      blocks: [
        { t: 'p',
          km: 'បន្សំនៃ r ធាតុយកពី n ធាតុ គឺជាការយកព្រមគ្នាមួយ r ធាតុចេញពី n ធាតុខុសៗគ្នាដោយមិនគិតពីលំដាប់នៃការយកចេញ (n ∈ ℕ, r ∈ ℕ, r ≤ n)។',
          en: 'A combination of r objects from n is a selection where the order does not matter.' },
        { t: 'm', tex: 'C(n,r) = \\frac{P(n,r)}{r!} = \\frac{n!}{(n-r)!\\,r!}' },
        { t: 'p', km: 'លក្ខណៈនៃបន្សំ៖', en: 'Properties:' },
        { t: 'ul', items: [
          { tex: 'C(n, n-r) = C(n,r)' },
          { tex: 'C(n,n) = 1, \\qquad C(n,0) = 1' }
        ] },
        { t: 'p', km: 'ទ្រឹស្តីបទទ្វេធា៖ បើ n ∈ ℕ នោះ៖', en: 'The binomial theorem: for n ∈ ℕ,' },
        { t: 'm', tex: '(a+b)^{n} = C(n,0)a^{n} + C(n,1)a^{n-1}b + C(n,2)a^{n-2}b^{2} + \\cdots + C(n,n)b^{n}' },
        { t: 'eg',
          km: 'ក្នុងទូនៃបណ្ណាល័យមួយមានសៀវភៅគណិតវិទ្យា ៤ ក្បាលខុសៗគ្នា និងរូបវិទ្យា ២ ក្បាលខុសៗគ្នា។ វិចិត្រ ត្រូវការអានសៀវភៅទាំងអស់ ប៉ុន្តែអាចខ្ចីបានតែ ៣ ក្បាល។ តើវិចិត្រអាចរើសសៀវភៅ ៣ ក្បាលបានប៉ុន្មានរបៀប? បើត្រូវយកគណិតវិទ្យា ២ និងរូបវិទ្យា ១ វិញ តើប៉ុន្មានរបៀប?',
          en: 'A shelf holds 4 different maths books and 2 different physics books. A student may borrow 3. In how many ways? And if it must be 2 maths and 1 physics?',
          steps: ['C(6,3) = 20', 'C(4,2) \\times C(2,1) = 6 \\times 2 = 12'] }
      ] },

    { id: 'sample-space',
      h: { km: 'លំហសំណាក និងព្រឹត្តិការណ៍', en: 'Sample space and events' },
      blocks: [
        { t: 'ul', items: [
          { km: 'ពិសោធន៍មួយដែលគេធ្វើឡើង ដោយមិនបានដឹងជាមុនថាមានលទ្ធផលអ្វីមួយប្រាកដកើតឡើងនោះ ហៅថា ពិសោធន៍ចៃដន្យ',
            en: 'An experiment whose outcome is not known in advance is a random experiment' },
          { km: 'ពិសោធន៍មួយដែលគេកំណត់ធ្វើដោយជាក់លាក់ ក្នុងពិសោធន៍ចៃដន្យមួយ ហៅថា វិញ្ញាសា',
            en: 'One definite performance of that experiment is a trial' },
          { km: 'លំហសំណាក គឺជាសំណុំលទ្ធផលទាំងអស់ដែលអាចកើតឡើងក្នុងវិញ្ញាសាមួយនៃពិសោធន៍ចៃដន្យ',
            en: 'The sample space S is the set of all outcomes a trial can produce' },
          { km: 'ព្រឹត្តិការណ៍ ជាសំណុំរងនៃលំហសំណាក',
            en: 'An event is a subset of the sample space' }
        ] },
        { t: 'eg',
          km: 'គេបោះកាក់មួយចំនួន ២ ដង។ ចូរសរសេរលំហសំណាក រួចសរសេរលទ្ធផលនៃព្រឹត្តិការណ៍ «បោះកាក់បានខាងរូបតែ ១ ដងគត់»។',
          en: 'A coin is tossed twice. Write down the sample space, then the event “exactly one head”.',
          steps: ['S = \\{HH,\\, HT,\\, TH,\\, TT\\}', 'A = \\{HT,\\, TH\\}'] }
      ] },

    { id: 'definition',
      h: { km: 'និយមន័យប្រូបាប និងលក្ខណៈ', en: 'The definition of probability, and its properties' },
      blocks: [
        { t: 'p',
          km: 'និយមន័យ៖ ប្រូបាបនៃព្រឹត្តិការណ៍មួយ ជាផលធៀបនៃចំនួនករណីស្រប និងចំនួនករណីអាច។',
          en: 'The probability of an event is the number of favourable cases over the number of possible cases.' },
        { t: 'm', tex: 'P(A) = \\frac{\\text{favourable}}{\\text{possible}} = \\frac{n(A)}{n(S)}' },
        { t: 'p', km: 'លក្ខណៈនៃប្រូបាប៖', en: 'Properties:' },
        { t: 'ul', items: [
          { tex: 'P(E_1)+P(E_2)+\\cdots+P(E_n) = \\sum_{i=1}^{n} P(E_i) = P(S) = 1' },
          { tex: 'A = \\varnothing \\;\\Longrightarrow\\; n(A)=0 \\text{ and } P(A)=0' },
          { tex: 'P(S) = 1, \\qquad P(\\varnothing) = 0, \\qquad 0 \\le P(A) \\le 1' },
          { tex: '\\text{independent: } P(A \\cap B) = P(A) \\times P(B)' },
          { tex: '\\text{mutually exclusive: } P(A \\cap B) = 0' },
          { tex: '\\text{complement: } P(\\overline{A}) = 1 - P(A)' }
        ] },
        { t: 'eg',
          km: 'គេរើសសិស្សម្នាក់ឲ្យធ្វើជាប្រធានក្រុម ក្នុងចំណោមសិស្សស្រី ៥ នាក់ និងសិស្សប្រុស ៣ នាក់។ រកប្រូបាបដែលប្រធានក្រុមជាសិស្សស្រី និងរកប្រូបាបសិស្សប្រុសជាប្រធានក្រុម។',
          en: 'One student is picked to lead a group of 5 girls and 3 boys. Find the probability the leader is a girl, and that the leader is a boy.',
          steps: ['P(\\text{girl}) = \\frac{5}{8}, \\qquad P(\\text{boy}) = \\frac{3}{8}'] }
      ] },

    { id: 'with-counting',
      h: { km: 'គណនាប្រូបាបដោយប្រើចម្លាស់ និងបន្សំ', en: 'Probability through permutations and combinations' },
      blocks: [
        { t: 'p',
          km: 'នៅពេលលំហសំណាកធំពេក យើងមិនសរសេរលទ្ធផលទាំងអស់ទេ តែរាប់វាដោយប្រើចម្លាស់ ឬបន្សំ រួចទើបយកមកចែក។',
          en: 'When the sample space is large we do not list the outcomes — we count them with a permutation or a combination, then divide.' },
        { t: 'eg',
          km: 'គេបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ ២ ដង។ រកប្រូបាបដែលបោះបានលេខទាំង ២ លើកខុសគ្នា។',
          en: 'A die is thrown twice. Find the probability that the two numbers differ.',
          steps: ['n(S) = 6^2 = 36, \\qquad n(A) = P(6,2) = 30', 'P(A) = \\frac{30}{36} = \\frac{5}{6}'] },
        { t: 'eg',
          km: 'គេរើសសិស្ស ៨ នាក់ដោយចៃដន្យក្នុងចំណោមសិស្សប្រុស ៩ នាក់និងសិស្សស្រី ១១ នាក់ទៅសម្ភាសន៍។ រកចំនួនរបៀបខុសៗគ្នា រួចរកប្រូបាបដែលក្រុមទាំង ៨ នាក់សុទ្ធតែសិស្សស្រី។',
          en: 'Eight students are chosen at random from 9 boys and 11 girls. How many different groups are there, and what is the probability that all eight are girls?',
          steps: ['n(S) = C(20,8) = 125\\,970', 'P(A) = \\frac{C(11,8)}{C(20,8)} = \\frac{165}{125\\,970}'] }
      ] },

    { id: 'conditional',
      h: { km: 'ប្រូបាបមានលក្ខខណ្ឌ', en: 'Conditional probability' },
      blocks: [
        { t: 'p',
          km: 'បើ A និង B ជាព្រឹត្តិការណ៍ ២ ក្នុងលំហសំណាកមួយ ដែល P(A) ≠ 0 នោះប្រូបាបមានលក្ខខណ្ឌនៃព្រឹត្តិការណ៍ B ដោយដឹងថា A កើតឡើងគឺ៖',
          en: 'For two events with P(A) ≠ 0, the probability of B given that A has happened is:' },
        { t: 'm', tex: 'P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}, \\qquad P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)},\\; P(B) \\ne 0' },
        { t: 'p', km: 'តាមរូបមន្តនេះ គេអាចទាញបានប្រូបាបនៃព្រឹត្តិការណ៍ផលគុណ A និង B គឺ៖', en: 'Rearranging gives the multiplication rule:' },
        { t: 'm', tex: 'P(A \\cap B) = P(A) \\times P(B \\mid A) = P(B) \\times P(A \\mid B)' },
        { t: 'note',
          km: 'ចំណាំ៖ ការគណនាប្រូបាបមានលក្ខខណ្ឌ គេត្រូវប្រើដ្យាក្រាមដើមឈើ។',
          en: 'A tree diagram is the usual way to keep conditional probabilities straight.' },
        { t: 'eg',
          km: 'សិប្បកម្មមួយមានម៉ាស៊ីន ២ ផលិតវត្ថុដូចគ្នា។ ម៉ាស៊ីនទី ១ ផលិតវត្ថុបាន ៤៥% ដែលក្នុងនោះមានខូច ៣% និងម៉ាស៊ីនទី ២ ផលិតវត្ថុបាន ៥៥% ដែលក្នុងនោះមានខូច ២%។ រកប្រូបាបដែលមានវត្ថុខូច ដោយដឹងថាផលិតដោយម៉ាស៊ីនទី ១។',
          en: 'A workshop has two machines. Machine 1 makes 45% of the output with a 3% fault rate; machine 2 makes 55% with a 2% fault rate. Find the probability that an item is faulty and came from machine 1.',
          steps: ['P(M_1 \\cap D) = 0.45 \\times 0.03 = 0.0135'] }
      ] },

    { id: 'independence',
      h: { km: 'ព្រឹត្តិការណ៍ទាក់ទងគ្នា និងមិនទាក់ទងគ្នា', en: 'Dependent and independent events' },
      blocks: [
        { t: 'p',
          km: 'តាង A និង B ជាព្រឹត្តិការណ៍ ២ ដែលមានប្រូបាបមិនសូន្យ។ គេថាព្រឹត្តិការណ៍ A និង B មិនទាក់ទងគ្នា (មិនអាស្រ័យគ្នា) កាលណាព្រឹត្តិការណ៍ទាំងពីរផ្ទៀងផ្ទាត់លក្ខខណ្ឌណាមួយខាងក្រោម៖',
          en: 'Two events of non-zero probability are independent when any one of these holds:' },
        { t: 'ul', items: [
          { tex: 'P(A \\cap B) = P(A) \\times P(B)' },
          { tex: 'P(A \\mid B) = P(A)' },
          { tex: 'P(B \\mid A) = P(B)' }
        ] },
        { t: 'note',
          km: 'គេថាព្រឹត្តិការណ៍ A និង B ទាក់ទងគ្នា កាលណា P(A∩B) ≠ P(A) × P(B)។',
          en: 'They are dependent when P(A∩B) ≠ P(A) × P(B).' },
        { t: 'eg',
          km: 'គេបោះគ្រាប់ឡុកឡាក់ដូចគ្នា ២ ព្រមគ្នា។ តាង A ជាព្រឹត្តិការណ៍ «ផលបូកលេខដែលគ្រាប់ឡុកឡាក់ទាំង ២ ចេញជាចំនួនគូ» និង B ជាព្រឹត្តិការណ៍ «គំលាតរវាងលេខទាំង ២ ជាចំនួនគូ»។ គណនា P(A), P(B), P(A∩B) រួចប្រាប់ថាតើវាទាក់ទងគ្នាឬអត់។',
          en: 'Two identical dice are thrown together. A is “the sum is even”, B is “the difference is even”. Compute P(A), P(B), P(A∩B), and decide whether A and B are independent.',
          steps: ['P(A) = P(B) = \\frac{1}{2}, \\qquad P(A \\cap B) = \\frac{1}{2}',
                  'P(A \\cap B) \\ne P(A)P(B) \\;\\Longrightarrow\\; \\text{dependent}'] }
      ] },

    { id: 'total-bayes',
      h: { km: 'រូបមន្តប្រូបាបសរុប និងទ្រឹស្តីបទបែយេស', en: 'Total probability and Bayes’ theorem' },
      blocks: [
        { t: 'p',
          km: 'បើ A₁, A₂, …, A_n ជាបំណែងចែកនៃលំហសំណាក នោះប្រូបាបសរុបនៃព្រឹត្តិការណ៍ B គឺ៖',
          en: 'If A₁, A₂, …, A_n partition the sample space, the total probability of B is:' },
        { t: 'm', tex: 'P(B) = \\sum_{i=1}^{n} \\left[\\,P(B \\mid A_i) \\times P(A_i)\\,\\right]' },
        { t: 'p', km: 'ហើយទ្រឹស្តីបទបែយេស ដែលបញ្ច្រាសលក្ខខណ្ឌវិញ គឺ៖', en: 'Bayes’ theorem then reverses the conditioning:' },
        { t: 'm', tex: 'P(A_k \\mid B) = \\frac{P(B \\mid A_k) \\times P(A_k)}{\\displaystyle\\sum_{i=1}^{n}\\left[\\,P(B \\mid A_i) \\times P(A_i)\\,\\right]}' },
        { t: 'eg',
          km: 'គេមានម៉ាស៊ីន A, B, C ផលិតវត្ថុដូចគ្នា។ ម៉ាស៊ីន A ផលិតបាន ៥០%, B ផលិតបាន ៣០% និង C ផលិតបាន ២០%។ វត្ថុដែលផលិតដោយម៉ាស៊ីន A មានខូច ៣%, B មានខូច ៤% និង C មានខូច ៤%។ រកប្រូបាបដែលមានវត្ថុខូច។',
          en: 'Machines A, B and C make 50%, 30% and 20% of the output, with fault rates 3%, 4% and 4%. Find the probability that an item is faulty.',
          steps: ['P(D) = 0.5(0.03) + 0.3(0.04) + 0.2(0.04) = 0.035',
                  'P(A \\mid D) = \\frac{0.5 \\times 0.03}{0.035} = \\frac{3}{7}'] }
      ] }
  ];

  global.PROB_LESSON = LESSON;
})(window);
