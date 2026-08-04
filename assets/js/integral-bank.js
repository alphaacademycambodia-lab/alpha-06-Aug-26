/* Alpha Academy Cambodia — មេរៀនទី៥ អាំងតេក្រាល / Lesson 5: Integrals
   ---------------------------------------------------------------------------
   Grade 12, definite and indefinite. Sets the shared global that
   assets/js/math-lesson.js renders: { key, lesson, mc, exercises }.

   The multiple-choice questions are the ones printed with the chapter; as on
   the limits page, the source carries no answer key, so an option is only
   ever recorded as the student's choice.                                    */
(function (global) {
  'use strict';

  var LESSON = [
    { id: 'anti',
      h: { km: 'ព្រីមីទីវ និងអាំងតេក្រាលមិនកំណត់', en: 'Antiderivatives and the indefinite integral' },
      blocks: [
        { t: 'p',
          km: '\\(F(x)\\) ជាព្រីមីទីវនៃ \\(f(x)\\) លុះត្រាតែ \\(F\'(x)=f(x)\\) ចំពោះគ្រប់ \\(x\\) ក្នុងដែនកំណត់។ ការរកព្រីមីទីវគឺជាការធ្វើដេរីវេបញ្ច្រាស។',
          en: '\\(F(x)\\) is an antiderivative of \\(f(x)\\) exactly when \\(F\'(x)=f(x)\\) throughout the domain. Finding one is differentiation run backwards.' },
        { t: 'm', tex: '\\int f(x)\\,dx = F(x) + c, \\qquad c \\in \\mathbb{R}' },
        { t: 'note',
          km: 'ចំណាំ៖ \\(\\int\\) ជានិមិត្តសញ្ញាអាំងតេក្រាល, \\(f(x)\\) ជាអនុគមន៍ត្រូវអាំងតេក្រាល និង \\(dx\\) ប្រាប់ថាអថេរណាដែលគេអាំងតេក្រាល។ កុំភ្លេច \\(+c\\) ។',
          en: 'The \\(\\int\\) is the integral sign, \\(f(x)\\) is what you are integrating and \\(dx\\) says which variable. Never drop the \\(+c\\).' }
      ] },

    { id: 'basic',
      h: { km: 'រូបមន្តគ្រឹះ', en: 'The basic formulas' },
      blocks: [
        { t: 'ul', items: [
          { tex: '\\int k\\,dx = kx + c \\qquad \\int k f(x)\\,dx = k\\int f(x)\\,dx' },
          { tex: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)' },
          { tex: '\\int \\frac{1}{x}\\,dx = \\ln|x| + c \\quad (x \\neq 0) \\qquad \\int \\frac{1}{x^{2}}\\,dx = -\\frac{1}{x} + c' },
          { tex: '\\int \\frac{1}{\\sqrt{x}}\\,dx = 2\\sqrt{x} + c \\qquad \\int e^{x}\\,dx = e^{x} + c' },
          { tex: '\\int \\big[f(x) \\pm g(x)\\big]dx = \\int f(x)dx \\pm \\int g(x)dx' },
          { tex: '\\int \\sin x\\,dx = -\\cos x + c \\qquad \\int \\cos x\\,dx = \\sin x + c' },
          { tex: '\\int \\frac{1}{\\cos^{2}x}\\,dx = \\tan x + c \\qquad \\int \\frac{1}{\\sin^{2}x}\\,dx = -\\cot x + c' },
          { tex: '\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a} + c \\qquad \\int \\frac{1}{1+x^{2}}\\,dx = \\arctan x + c' },
          { tex: '\\int \\frac{1}{\\sqrt{1-x^{2}}}\\,dx = \\arcsin x + c \\qquad \\int \\frac{1}{x^{2}-a^{2}}\\,dx = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + c' }
        ] },
        { t: 'eg',
          km: 'គណនា \\(\\int\\left(3x^2-\\dfrac{2}{x}+e^{x}\\right)dx\\) ។',
          en: 'Evaluate \\(\\int\\left(3x^2-\\dfrac{2}{x}+e^{x}\\right)dx\\).',
          steps: [ '= x^3 - 2\\ln|x| + e^{x} + c' ] }
      ] },

    { id: 'sub',
      h: { km: 'អាំងតេក្រាលដោយប្រើអថេរជំនួស', en: 'Integration by substitution' },
      blocks: [
        { t: 'p',
          km: 'វិធាន៖ តាង \\(t=f(x)\\) រួចរក \\(dt=f\'(x)dx\\) ។ ជំនួស \\(f(x)\\) ដោយ \\(t\\) និង \\(f\'(x)dx\\) ដោយ \\(dt\\) ។ រកចម្លើយអាំងតេក្រាលតាម \\(t\\) រួចជំនួស \\(t\\) មកវិញដោយ \\(f(x)\\) ។',
          en: 'The rule: put \\(t=f(x)\\), so \\(dt=f\'(x)dx\\). Replace \\(f(x)\\) by \\(t\\) and \\(f\'(x)dx\\) by \\(dt\\), integrate in \\(t\\), then put \\(f(x)\\) back.' },
        { t: 'eg',
          km: 'គណនា \\(A=\\int(x^3-1)^{5}\\cdot 3x^2\\,dx\\) ។',
          en: 'Evaluate \\(A=\\int(x^3-1)^{5}\\cdot 3x^2\\,dx\\).',
          steps: [
            't = x^3-1 \\ \\Rightarrow\\ dt = 3x^2\\,dx',
            'A = \\int t^{5}\\,dt = \\frac{t^{6}}{6} + c = \\frac{(x^3-1)^{6}}{6} + c'
          ] },
        { t: 'p', km: 'ទម្រង់ទូទៅដែលចេញមកញឹកញាប់៖', en: 'The general forms worth recognising on sight:' },
        { t: 'ul', items: [
          { tex: '\\int f\'(x)\\big[f(x)\\big]^{n}dx = \\frac{\\big[f(x)\\big]^{n+1}}{n+1} + c \\quad (n \\neq -1)' },
          { tex: '\\int \\frac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)| + c \\qquad \\int f\'(x)e^{f(x)}dx = e^{f(x)} + c' },
          { tex: '\\int \\frac{f\'(x)}{\\sqrt{f(x)}}\\,dx = 2\\sqrt{f(x)} + c \\qquad \\int \\frac{f\'(x)}{\\big[f(x)\\big]^{2}}dx = -\\frac{1}{f(x)} + c' },
          { tex: '\\int f\'(x)\\sin f(x)\\,dx = -\\cos f(x) + c \\qquad \\int f\'(x)\\cos f(x)\\,dx = \\sin f(x) + c' }
        ] }
      ] },

    { id: 'parts',
      h: { km: 'អាំងតេក្រាលដោយផ្នែក', en: 'Integration by parts' },
      blocks: [
        { t: 'm', tex: '\\int u\\,dv = uv - \\int v\\,du' },
        { t: 'p', km: 'របៀបជ្រើសរើស \\(u\\) ៖', en: 'How to choose \\(u\\):' },
        { t: 'ul', items: [
          { km: 'បើមាន \\(P(x)\\cdot\\cos(ax+b)\\), \\(P(x)\\cdot\\sin(ax+b)\\) ឬ \\(P(x)\\cdot e^{ax+b}\\) ដែល \\(P\\) ជាពហុធា ៖ តាង \\(u=P(x)\\) ។',
            en: 'For \\(P(x)\\cos(ax+b)\\), \\(P(x)\\sin(ax+b)\\) or \\(P(x)e^{ax+b}\\) with \\(P\\) a polynomial: take \\(u=P(x)\\).' },
          { km: 'បើមាន \\(P(x)\\cdot\\ln(ax+b)\\) ៖ តាង \\(u=\\ln(ax+b)\\) និង \\(dv=P(x)dx\\) ។',
            en: 'For \\(P(x)\\ln(ax+b)\\): take \\(u=\\ln(ax+b)\\) and \\(dv=P(x)dx\\).' }
        ] },
        { t: 'eg',
          km: 'គណនា \\(\\int x e^{x}\\,dx\\) ។',
          en: 'Evaluate \\(\\int x e^{x}\\,dx\\).',
          steps: [
            'u = x,\\ dv = e^{x}dx \\ \\Rightarrow\\ du = dx,\\ v = e^{x}',
            '\\int x e^{x}dx = xe^{x} - \\int e^{x}dx = xe^{x} - e^{x} + c'
          ] }
      ] },

    { id: 'rational',
      h: { km: 'អាំងតេក្រាលនៃអនុគមន៍សនិទាន', en: 'Integrating rational functions' },
      blocks: [
        { t: 'p',
          km: 'គេបំបែកប្រភាគ \\(\\dfrac{P(x)}{Q(x)}\\) ជាប្រភាគងាយតាមទម្រង់នៃ \\(Q(x)\\) ៖',
          en: 'Split \\(\\dfrac{P(x)}{Q(x)}\\) into partial fractions according to the shape of \\(Q(x)\\):' },
        { t: 'm', tex: 'Q(x)=(ax+b)(cx+d)\\cdots \\Rightarrow \\frac{P(x)}{Q(x)} = A(x) + \\frac{A_1}{ax+b} + \\frac{A_2}{cx+d} + \\cdots' },
        { t: 'm', tex: 'Q(x)=(ax+b)^{n} \\Rightarrow \\frac{P(x)}{Q(x)} = A(x) + \\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^{2}} + \\cdots + \\frac{A_n}{(ax+b)^{n}}' },
        { t: 'ul', items: [
          { km: 'បើដឺក្រេនៃ \\(P\\) ស្មើដឺក្រេនៃ \\(Q\\) នោះ \\(A(x)\\) ជាចំនួនថេរ។', en: 'If \\(\\deg P = \\deg Q\\), then \\(A(x)\\) is a constant.' },
          { km: 'បើដឺក្រេនៃ \\(P\\) តូចជាងដឺក្រេនៃ \\(Q\\) នោះ \\(A(x)=0\\) ។', en: 'If \\(\\deg P < \\deg Q\\), then \\(A(x)=0\\).' },
          { km: 'បើដឺក្រេនៃ \\(P\\) ធំជាងដឺក្រេនៃ \\(Q\\) នោះ \\(A(x)\\) ជាពហុធា។', en: 'If \\(\\deg P > \\deg Q\\), then \\(A(x)\\) is a polynomial.' }
        ] },
        { t: 'eg',
          km: 'គណនា \\(\\int\\dfrac{dx}{x^2-1}\\) ។',
          en: 'Evaluate \\(\\int\\dfrac{dx}{x^2-1}\\).',
          steps: [
            '\\frac{1}{x^2-1} = \\frac{1}{2}\\left(\\frac{1}{x-1}-\\frac{1}{x+1}\\right)',
            '= \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + c'
          ] }
      ] },

    { id: 'trigint',
      h: { km: 'អាំងតេក្រាលត្រីកោណមាត្រ', en: 'Trigonometric integrals' },
      blocks: [
        { t: 'p', km: 'ផលគុណនៃស៊ីនុស និងកូស៊ីនុស — ប្រើរូបមន្តបំលែងផលគុណជាផលបូក៖',
          en: 'For products of sines and cosines, turn the product into a sum:' },
        { t: 'ul', items: [
          { tex: '\\sin a\\cos b = \\tfrac{1}{2}\\big[\\sin(a+b)+\\sin(a-b)\\big]' },
          { tex: '\\cos a\\cos b = \\tfrac{1}{2}\\big[\\cos(a+b)+\\cos(a-b)\\big]' },
          { tex: '\\sin a\\sin b = \\tfrac{1}{2}\\big[\\cos(a-b)-\\cos(a+b)\\big]' },
          { tex: '\\int \\sin ax\\,dx = -\\frac{1}{a}\\cos ax + c \\qquad \\int \\cos ax\\,dx = \\frac{1}{a}\\sin ax + c' }
        ] },
        { t: 'p', km: 'ចំពោះ \\(\\int\\sin^{n}x\\cos^{m}x\\,dx\\) ៖',
          en: 'For \\(\\int\\sin^{n}x\\cos^{m}x\\,dx\\):' },
        { t: 'ul', items: [
          { km: 'បើនិទស្សន្តមួយគូ មួយសេស — តាង \\(u\\) ជាអនុគមន៍ដែលមាននិទស្សន្តគូ រួចប្រើ \\(\\sin^2x=1-\\cos^2x\\) ។',
            en: 'One even, one odd — let \\(u\\) be the one with the even power and use \\(\\sin^2x=1-\\cos^2x\\).' },
          { km: 'បើនិទស្សន្តគូទាំងពីរ — ប្រើរូបមន្តមុំឌុប \\(\\sin^2x=\\dfrac{1-\\cos 2x}{2}\\), \\(\\cos^2x=\\dfrac{1+\\cos 2x}{2}\\) ។',
            en: 'Both even — use the double-angle forms \\(\\sin^2x=\\dfrac{1-\\cos 2x}{2}\\), \\(\\cos^2x=\\dfrac{1+\\cos 2x}{2}\\).' }
        ] },
        { t: 'm', tex: '\\int \\tan^{n}x\\,(\\tan x)\'\\,dx = \\frac{\\tan^{n+1}x}{n+1} + c \\qquad \\int \\cot^{n}x\\,(\\cot x)\'\\,dx = \\frac{\\cot^{n+1}x}{n+1} + c' }
      ] },

    { id: 'definite',
      h: { km: 'អាំងតេក្រាលកំណត់', en: 'The definite integral' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(F\\) ជាព្រីមីទីវនៃ \\(f\\) លើ \\([a,b]\\) នោះ៖',
          en: 'If \\(F\\) is an antiderivative of \\(f\\) on \\([a,b]\\), then:' },
        { t: 'm', tex: '\\int_{a}^{b} f(x)\\,dx = \\Big[F(x)\\Big]_{a}^{b} = F(b)-F(a)' },
        { t: 'ul', items: [
          { tex: '\\int_{a}^{a} f(x)\\,dx = 0 \\qquad \\int_{a}^{b} f(x)\\,dx = -\\int_{b}^{a} f(x)\\,dx' },
          { tex: '\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{c} f(x)\\,dx + \\int_{c}^{b} f(x)\\,dx' }
        ] },
        { t: 'note',
          km: 'ចំណាំ៖ ក្នុងអាំងតេក្រាលកំណត់ គេមិនត្រូវសរសេរ \\(+c\\) ទេ ព្រោះវាលុបខ្លួនឯងពេលដក។',
          en: 'No \\(+c\\) in a definite integral — it cancels in the subtraction.' },
        { t: 'eg',
          km: 'គណនា \\(\\int_{1}^{2}(3x^2-2x)\\,dx\\) ។',
          en: 'Evaluate \\(\\int_{1}^{2}(3x^2-2x)\\,dx\\).',
          steps: [
            '= \\Big[x^3-x^2\\Big]_{1}^{2}',
            '= (8-4)-(1-1) = 4'
          ] }
      ] },

    { id: 'area',
      h: { km: 'ក្រឡាផ្ទៃក្រោមខ្សែកោង', en: 'Area under a curve' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(f(x)\\ge 0\\) លើ \\([a,b]\\) នោះក្រឡាផ្ទៃរវាងខ្សែកោង និងអ័ក្ស \\(Ox\\) គឺ៖',
          en: 'If \\(f(x)\\ge 0\\) on \\([a,b]\\), the area between the curve and the \\(x\\)-axis is:' },
        { t: 'm', tex: 'S = \\int_{a}^{b} f(x)\\,dx' },
        { t: 'p', km: 'រវាងខ្សែកោងពីរ \\(f\\) និង \\(g\\) ដែល \\(f(x)\\ge g(x)\\) លើ \\([a,b]\\) ៖',
          en: 'Between two curves with \\(f(x)\\ge g(x)\\) on \\([a,b]\\):' },
        { t: 'm', tex: 'S = \\int_{a}^{b} \\big[f(x)-g(x)\\big]\\,dx' },
        { t: 'note',
          km: 'ប្រយ័ត្ន៖ បើ \\(f\\) ប្តូរសញ្ញាលើ \\([a,b]\\) ត្រូវបំបែកអាំងតេក្រាលនៅចំណុចដែល \\(f(x)=0\\) រួចយកតម្លៃដាច់ខាត។',
          en: 'Careful: if \\(f\\) changes sign on \\([a,b]\\), split the integral where \\(f(x)=0\\) and take absolute values — otherwise the parts cancel.' },
        { t: 'eg',
          km: 'រកក្រឡាផ្ទៃរវាងខ្សែកោង \\(y=x^2\\) និងបន្ទាត់ \\(y=x\\) ។',
          en: 'Find the area between \\(y=x^2\\) and \\(y=x\\).',
          steps: [
            'x^2 = x \\Rightarrow x = 0,\\ x = 1',
            'S = \\int_{0}^{1}(x-x^2)\\,dx = \\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_{0}^{1} = \\frac{1}{6}'
          ] }
      ] }
  ];

  /* --------------------------------------------------- multiple choice */
  function mc(n, tex, opts) {
    return { n: n, kind: 'mc',
      q: { km: 'គណនា \\(' + tex + '\\)', en: 'Evaluate \\(' + tex + '\\)' }, o: opts };
  }

  var MC = [
    mc(1, '\\int (4x^3-2x+5)\\,dx',
       ['x^4-x^2+5x+c', '12x^2-2+c', '\\frac{x^4}{4}-x^2+5x+c', 'x^4-2x^2+5x+c']),
    mc(2, '\\int \\frac{3}{x}\\,dx',
       ['3\\ln|x|+c', '\\frac{3}{x^2}+c', '-\\frac{3}{x^2}+c', '\\frac{3}{2}x^2+c']),
    mc(3, '\\int \\sqrt{x}\\,dx',
       ['\\frac{2}{3}x^{3/2}+c', '\\frac{1}{2\\sqrt{x}}+c', '2\\sqrt{x}+c', '\\frac{3}{2}x^{3/2}+c']),
    mc(4, '\\int e^{2x}\\,dx',
       ['2e^{2x}+c', '\\frac{1}{2}e^{2x}+c', 'e^{2x}+c', '\\frac{e^{2x}}{2x}+c']),
    mc(5, '\\int \\sin 3x\\,dx',
       ['3\\cos 3x+c', '-\\frac{1}{3}\\cos 3x+c', '\\frac{1}{3}\\cos 3x+c', '-3\\cos 3x+c']),
    mc(6, '\\int_{0}^{1} (2x+1)\\,dx',
       ['1', '2', '3', '4']),
    mc(7, '\\int_{1}^{e} \\frac{1}{x}\\,dx',
       ['0', '1', 'e', 'e-1']),
    mc(8, '\\int \\frac{x^4+2x^3+x^2+1}{x^2}\\,dx',
       ['\\frac{1}{3}x^2+x^2+x-\\frac{1}{x}+c', '\\frac{1}{3}x^3+x^2+x-\\frac{1}{x}+c',
        '\\frac{1}{3}x^3+\\frac{1}{2}x^2+x-\\frac{1}{x}+c', '\\frac{1}{3}x^3+x^2+x-\\frac{1}{x}']),
    mc(9, '\\int \\frac{(x^2+1)^2}{x^2}\\,dx',
       ['\\frac{1}{3}x^3+2x+\\frac{1}{x}+c', '\\frac{1}{3}x^3+\\frac{1}{2}x-\\frac{1}{x}+c',
        '\\frac{1}{3}x^3+2x-\\frac{1}{x}+c', '\\frac{2}{3}x^3+2x-\\frac{1}{x}+c']),
    mc(10, '\\int\\left(\\sqrt{x}+\\sqrt[3]{x}+\\sqrt[5]{x^4}\\right)dx',
       ['\\frac{2}{3}x^{3/2}+\\frac{3}{4}x^{4/3}+c', '\\frac{2}{3}x^{3/2}-\\frac{3}{4}x^{4/3}+\\frac{5}{9}x^{9/5}+c',
        '\\frac{2}{3}x^{3/2}+\\frac{3}{4}x^{4/3}+\\frac{5}{9}x^{9/5}', '\\frac{2}{3}x^{3/2}+\\frac{3}{4}x^{4/3}+\\frac{5}{9}x^{9/5}+c']),
    mc(11, '\\int \\frac{dx}{\\cos^{2}x\\,\\sin^{2}x}',
       ['\\frac{1}{2}\\sin^{2}2x+c', '\\tan x-\\cot x+c', '\\tan x+\\cot x+c', '\\tan^{2}x-\\cot^{2}x+c']),
    mc(12, '\\int \\frac{\\cos 2x}{\\cos^{2}x\\,\\sin^{2}x}\\,dx',
       ['\\frac{1}{2}\\sin^{2}2x+c', '-\\tan x-\\cot x+c', '\\tan x+\\cot x+c', '\\tan^{2}x-\\cot^{2}x+c']),
    mc(13, '\\int \\frac{1+\\cos^{2}x}{1+\\cos 2x}\\,dx',
       ['\\frac{1}{2}(\\tan x-x)+c', '\\frac{1}{2}(\\tan x+x)+c', '\\frac{1}{3}(\\tan x+x)+c', '\\frac{1}{3}(\\tan x-x)+c']),
    mc(14, '\\int 2\\sin^{2}\\frac{x}{2}\\,dx',
       ['x-\\sin x+c', 'x+\\sin x+c', '-x+\\sin x+c', '\\frac{2}{3}\\sin^{3}\\frac{x}{2}+c']),
    mc(15, '\\int x\\,e^{x^{2}}\\,dx',
       ['\\frac{1}{2}e^{x^{2}}+c', '2e^{x^{2}}+c', 'e^{x^{2}}+c', 'x^{2}e^{x^{2}}+c']),
    mc(16, '\\int \\frac{2x}{x^{2}+1}\\,dx',
       ['\\ln(x^{2}+1)+c', '\\frac{1}{x^{2}+1}+c', '2\\ln(x^{2}+1)+c', '\\arctan x+c']),
    mc(17, '\\int x\\cos x\\,dx',
       ['x\\sin x+\\cos x+c', 'x\\sin x-\\cos x+c', '-x\\sin x-\\cos x+c', '\\frac{x^{2}}{2}\\sin x+c']),
    mc(18, '\\int \\ln x\\,dx',
       ['x\\ln x-x+c', '\\frac{1}{x}+c', 'x\\ln x+x+c', '\\frac{(\\ln x)^{2}}{2}+c'])
  ];

  /* ------------------------------------------------- written exercises */
  function q(km, en) { return { km: km, en: en }; }
  function part(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }
  var CALC = q('គណនាអាំងតេក្រាលខាងក្រោម៖', 'Evaluate the following integrals:');

  var WR = [
    { n: 1, q: CALC, p: [
      part('a', '\\int (x^3-4x+7)\\,dx'),
      part('b', '\\int \\left(2\\sqrt{x}-\\frac{3}{x^2}\\right)dx'),
      part('c', '\\int \\frac{x^2-3x+1}{x}\\,dx'),
      part('d', '\\int (2x-1)^{5}\\,dx')
    ] },
    { n: 2, q: CALC, p: [
      part('a', '\\int \\sin(4x-5)\\,dx'),
      part('b', '\\int \\cos^{2}x\\,dx'),
      part('c', '\\int \\sin 3x\\cos 2x\\,dx'),
      part('d', '\\int \\tan^{2}x\\,dx')
    ] },
    { n: 3,
      q: q('គណនាដោយប្រើអថេរជំនួស៖', 'Evaluate by substitution:'),
      p: [
        part('a', '\\int (x^{3}-1)^{5}\\cdot 3x^{2}\\,dx'),
        part('b', '\\int \\frac{2x+1}{x^{2}+x+3}\\,dx'),
        part('c', '\\int x\\sqrt{x^{2}+4}\\,dx'),
        part('d', '\\int \\frac{\\ln x}{x}\\,dx')
      ] },
    { n: 4,
      q: q('គណនាដោយប្រើអាំងតេក្រាលដោយផ្នែក៖', 'Evaluate by parts:'),
      p: [
        part('a', '\\int x e^{2x}\\,dx'),
        part('b', '\\int x\\sin x\\,dx'),
        part('c', '\\int x\\ln x\\,dx'),
        part('d', '\\int x^{2}e^{x}\\,dx')
      ] },
    { n: 5,
      q: q('គណនាដោយបំបែកជាប្រភាគងាយ៖', 'Evaluate using partial fractions:'),
      p: [
        part('a', '\\int \\frac{dx}{x^{2}-4}'),
        part('b', '\\int \\frac{x+3}{x^{2}-x-2}\\,dx'),
        part('c', '\\int \\frac{x^{2}}{x^{2}-1}\\,dx')
      ] },
    { n: 6,
      q: q('គណនាអាំងតេក្រាលកំណត់ខាងក្រោម៖', 'Evaluate these definite integrals:'),
      p: [
        part('a', '\\int_{0}^{2}(3x^{2}-2x)\\,dx'),
        part('b', '\\int_{1}^{4}\\frac{1}{\\sqrt{x}}\\,dx'),
        part('c', '\\int_{0}^{\\pi/2}\\sin x\\,dx'),
        part('d', '\\int_{0}^{1}\\frac{dx}{1+x^{2}}')
      ] },
    { n: 7,
      q: q('រកក្រឡាផ្ទៃនៃតំបន់ដែលកំណត់ដោយ៖', 'Find the area of the region bounded by:'),
      p: [
        part('a', 'y = x^{2},\\ y = 0,\\ x = 0,\\ x = 3'),
        part('b', 'y = x^{2}\\ \\text{and}\\ y = 2x'),
        part('c', 'y = \\sqrt{x},\\ y = 0,\\ x = 4'),
        part('d', 'y = 4-x^{2}\\ \\text{and the } x\\text{-axis}')
      ] },
    { n: 8, extra: true,
      q: q('រកព្រីមីទីវ \\(F\\) នៃ \\(f\\) ដែលផ្ទៀងផ្ទាត់លក្ខខណ្ឌដែលបានឲ្យ៖',
           'Find the antiderivative \\(F\\) of \\(f\\) satisfying the given condition:'),
      p: [
        part('a', 'f(x)=3x^{2}-2,\\quad F(1)=4'),
        part('b', 'f(x)=\\frac{1}{x},\\quad F(1)=0'),
        part('c', 'f(x)=e^{x}+\\sin x,\\quad F(0)=2')
      ] },
    { n: 9, extra: true,
      q: q('គណនាអាំងតេក្រាលមានរាងត្រីកោណមាត្រ៖', 'Evaluate these trigonometric integrals:'),
      p: [
        part('a', '\\int \\sin^{3}x\\,dx'),
        part('b', '\\int \\sin^{2}x\\cos^{2}x\\,dx'),
        part('c', '\\int \\cos 3x\\cos x\\,dx'),
        part('d', '\\int \\sin^{4}x\\,dx')
      ] },
    { n: 10, extra: true,
      q: q('ដោះស្រាយបញ្ហាអនុវត្ត៖', 'Applied problems:'),
      p: [
        { k: 'a', t: q('វត្ថុមួយមានល្បឿន \\(v(t)=3t^{2}-2t\\) (ម/វិ) ។ រកចម្ងាយដែលវាធ្វើដំណើរពី \\(t=0\\) ដល់ \\(t=3\\) ។',
                       'An object has velocity \\(v(t)=3t^{2}-2t\\) (m/s). Find the distance travelled from \\(t=0\\) to \\(t=3\\).') },
        { k: 'b', t: q('រកតម្លៃមធ្យមនៃ \\(f(x)=x^{2}\\) លើចន្លោះ \\([0,3]\\) ។',
                       'Find the mean value of \\(f(x)=x^{2}\\) on \\([0,3]\\).') },
        { k: 'c', t: q('រកតម្លៃ \\(a>0\\) ដែល \\(\\int_{0}^{a} 2x\\,dx = 9\\) ។',
                       'Find \\(a>0\\) such that \\(\\int_{0}^{a} 2x\\,dx = 9\\).') }
      ] }
  ];

  global.MATH_BANK = { key: 'integ', lesson: LESSON, mc: MC, exercises: WR };
})(window);
