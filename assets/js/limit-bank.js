/* Alpha Academy Cambodia — មេរៀនទី២ លីមីតនៃអនុគមន៍ / Lesson 2: Limits
   ---------------------------------------------------------------------------
   Grade 12. Same shape as complex-bank.js: every string carries `km` and `en`,
   and the maths is written once in TeX.

   Exercises come in two kinds, and both live in the Exercises view:
     kind:'mc'  multiple choice — `o` is the list of options
     (default)  written answer  — `p` is the list of parts

   The printed source has no answer key, so the options are not marked right
   or wrong; the page lets a student pick one and remembers the choice, the
   way ticking the printed box would.                                        */
(function (global) {
  'use strict';

  var LESSON = [
    { id: 'laws',
      h: { km: 'ប្រមាណវិធីលើលីមីត', en: 'The limit laws' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(\\lim_{x\\to a}f(x)=L\\), \\(\\lim_{x\\to a}g(x)=M\\) និង \\(\\lim_{x\\to a}h(x)=N\\) ដែល \\(L,M,N,K\\) ជាចំនួនពិត នោះគេបាន៖',
          en: 'If \\(\\lim_{x\\to a}f(x)=L\\), \\(\\lim_{x\\to a}g(x)=M\\) and \\(\\lim_{x\\to a}h(x)=N\\) with \\(L,M,N,K\\) real, then:' },
        { t: 'ul', items: [
          { tex: '\\lim_{x\\to a} k = k' },
          { tex: '\\lim_{x\\to a}\\big[f(x)\\pm g(x)\\big] = L \\pm M' },
          { tex: '\\lim_{x\\to a} k\\,f(x) = k\\,L' },
          { tex: '\\lim_{x\\to a}\\big[f(x)\\,g(x)\\,h(x)\\big] = L\\,M\\,N' },
          { tex: '\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\frac{L}{M},\\quad M \\neq 0' },
          { tex: '\\lim_{x\\to a}\\big[f(x)\\big]^{n} = L^{n},\\quad n\\in\\mathbb{N}' },
          { tex: '\\lim_{x\\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{L},\\quad n \\ge 2' },
          { tex: '\\lim_{x\\to a}\\sqrt[n]{x} = \\sqrt[n]{a},\\quad a \\ge 0,\\ n \\ge 2' }
        ] },
        { t: 'eg',
          km: 'គណនា \\(\\lim_{x\\to 9}\\dfrac{15x-5}{\\sqrt{x}+3}\\) ។',
          en: 'Evaluate \\(\\lim_{x\\to 9}\\dfrac{15x-5}{\\sqrt{x}+3}\\).',
          steps: [
            '\\text{The bottom is not }0\\text{ at }x=9,\\text{ so substitute:}',
            '\\frac{15(9)-5}{\\sqrt{9}+3} = \\frac{130}{6} = \\frac{65}{3}'
          ] },
        { t: 'note',
          km: 'ចំណាំ៖ បើជំនួស \\(x=a\\) ហើយបានលទ្ធផលច្បាស់លាស់ នោះនោះជាចម្លើយ។ បញ្ហាកើតឡើងតែពេលបានទម្រង់មិនកំណត់ប៉ុណ្ណោះ។',
          en: 'Substitute first. If putting \\(x=a\\) gives a definite value, that is the answer — the work only starts when you land on an indeterminate form.' }
      ] },

    { id: 'indet',
      h: { km: 'ទម្រង់មិនកំណត់', en: 'Indeterminate forms' },
      blocks: [
        { t: 'p',
          km: 'ករណីមិនកំណត់ចម្បងមានបី៖ \\(\\frac{0}{0}\\), \\(\\frac{\\infty}{\\infty}\\) និង \\(\\infty-\\infty\\) ។ រាល់ករណីមានវិធីដោះស្រាយផ្ទាល់ខ្លួន។',
          en: 'Three forms come up again and again: \\(\\frac{0}{0}\\), \\(\\frac{\\infty}{\\infty}\\) and \\(\\infty-\\infty\\). Each has its own move.' },
        { t: 'p',
          km: '<b>ទម្រង់ \\(\\frac{0}{0}\\)</b> — បំបែកភាគយក និងភាគបែងជាផលគុណកត្តា រួចសំរូលកត្តារួម។ បើមានរ៉ាឌីកាល់ គុណនឹងកន្សោមឆ្លាស់របស់វា។',
          en: '<b>Form \\(\\frac{0}{0}\\)</b> — factorise the top and the bottom and cancel the common factor. If there is a root, multiply by its conjugate.' },
        { t: 'eg',
          km: 'គណនា \\(\\lim_{x\\to 3}\\dfrac{x^3-27}{x-3}\\) ។',
          en: 'Evaluate \\(\\lim_{x\\to 3}\\dfrac{x^3-27}{x-3}\\).',
          steps: [
            '\\frac{x^3-27}{x-3} = \\frac{(x-3)(x^2+3x+9)}{x-3} = x^2+3x+9',
            '\\lim_{x\\to 3}(x^2+3x+9) = 9+9+9 = 27'
          ] },
        { t: 'p',
          km: '<b>ទម្រង់ \\(\\frac{\\infty}{\\infty}\\)</b> — ដកកត្តាតួដែលមានដឺក្រេធំជាងគេ ចេញពីភាគយក និងភាគបែង រួចសំរូល។',
          en: '<b>Form \\(\\frac{\\infty}{\\infty}\\)</b> — take the highest-degree term out of the top and the bottom as a factor, then cancel.' },
        { t: 'eg',
          km: 'គណនា \\(\\lim_{x\\to+\\infty}\\dfrac{x^2+3x-4}{x^3+3x^2+2x}\\) ។',
          en: 'Evaluate \\(\\lim_{x\\to+\\infty}\\dfrac{x^2+3x-4}{x^3+3x^2+2x}\\).',
          steps: [
            '= \\lim_{x\\to+\\infty}\\frac{x^2\\left(1+\\frac{3}{x}-\\frac{4}{x^2}\\right)}{x^3\\left(1+\\frac{3}{x}+\\frac{2}{x^2}\\right)}',
            '= \\lim_{x\\to+\\infty}\\frac{1}{x}\\cdot\\frac{1}{1} = 0'
          ] },
        { t: 'p',
          km: '<b>ទម្រង់ \\(\\infty-\\infty\\)</b> — ដកកត្តាតួដែលមានដឺក្រេធំជាងគេចេញជាកត្តារួម ។ បើអនុគមន៍ជាប់រ៉ាឌីកាល់ គុណ និងចែកនឹងកន្សោមឆ្លាស់របស់វា។',
          en: '<b>Form \\(\\infty-\\infty\\)</b> — factor out the dominant term. If a root is involved, multiply and divide by the conjugate.' },
        { t: 'eg',
          km: 'គណនា \\(\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+1}-x\\right)\\) ។',
          en: 'Evaluate \\(\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+1}-x\\right)\\).',
          steps: [
            '= \\lim_{x\\to+\\infty}\\frac{\\left(\\sqrt{x^2+1}-x\\right)\\left(\\sqrt{x^2+1}+x\\right)}{\\sqrt{x^2+1}+x}',
            '= \\lim_{x\\to+\\infty}\\frac{1}{\\sqrt{x^2+1}+x} = 0'
          ] }
      ] },

    { id: 'trig',
      h: { km: 'លីមីតនៃអនុគមន៍ត្រីកោណមាត្រ', en: 'Trigonometric limits' },
      blocks: [
        { t: 'ul', items: [
          { tex: '\\lim_{x\\to a}\\sin x = \\sin a, \\qquad \\lim_{x\\to a}\\cos x = \\cos a' },
          { tex: '\\lim_{x\\to a}\\tan x = \\tan a, \\qquad \\lim_{x\\to a}\\cot x = \\cot a' },
          { tex: '\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{x}{\\sin x} = 1' },
          { tex: '\\lim_{x\\to 0}\\frac{1-\\cos x}{x} = 0, \\qquad \\lim_{x\\to 0}\\frac{\\sin ax}{ax} = 1' }
        ] },
        { t: 'note',
          km: 'បើគេប្តូរអថេរ \\(x\\) ទៅ \\(u\\) (អនុគមន៍) វិធានទាំងនេះនៅតែពិត៖ \\(\\lim_{u\\to 0}\\frac{\\sin u}{u}=1\\) ។',
          en: 'The rules survive a change of variable: with \\(u\\) any function tending to 0, \\(\\lim_{u\\to 0}\\frac{\\sin u}{u}=1\\) still holds.' },
        { t: 'eg',
          km: 'គណនា \\(\\lim_{x\\to 0}\\dfrac{1-\\cos 2x}{5x^2}\\) ។',
          en: 'Evaluate \\(\\lim_{x\\to 0}\\dfrac{1-\\cos 2x}{5x^2}\\).',
          steps: [
            '1-\\cos 2x = 2\\sin^2 x',
            '= \\lim_{x\\to 0}\\frac{2\\sin^2 x}{5x^2} = \\frac{2}{5}\\left(\\lim_{x\\to 0}\\frac{\\sin x}{x}\\right)^2 = \\frac{2}{5}'
          ] }
      ] },

    { id: 'exp',
      h: { km: 'លីមីតនៃអនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល', en: 'Exponential limits' },
      blocks: [
        { t: 'ul', items: [
          { tex: '\\lim_{x\\to+\\infty} e^{x} = +\\infty, \\qquad \\lim_{x\\to-\\infty} e^{x} = 0' },
          { tex: '\\lim_{x\\to+\\infty}\\frac{e^{x}}{x^{n}} = +\\infty, \\qquad \\lim_{x\\to+\\infty}\\frac{x^{n}}{e^{x}} = 0,\\ n \\ge 0' },
          { tex: '\\lim_{x\\to 0}\\frac{e^{x}-1}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{a^{x}-1}{x} = \\ln a' },
          { tex: '\\lim_{x\\to 0}\\frac{(1+x)^{n}-1}{x} = n' },
          { tex: '\\lim_{x\\to+\\infty}\\left(1+\\frac{1}{x}\\right)^{x} = e, \\qquad \\lim_{x\\to 0}(1+x)^{\\frac{1}{x}} = e' },
          { tex: '\\lim_{x\\to-\\infty} x\\,e^{x} = 0' }
        ] },
        { t: 'note',
          km: 'ចំណាំ៖ អ៊ិចស្ប៉ូណង់ស្យែលឈ្នះពហុធាជានិច្ច — នេះជាមូលហេតុដែល \\(\\frac{x^n}{e^x}\\to 0\\) ។',
          en: 'The exponential always beats the polynomial — that is the whole content of \\(\\frac{x^n}{e^x}\\to 0\\).' }
      ] },

    { id: 'log',
      h: { km: 'លីមីតនៃអនុគមន៍លោការីត', en: 'Logarithmic limits' },
      blocks: [
        { t: 'ul', items: [
          { tex: '\\lim_{x\\to+\\infty}\\ln x = +\\infty, \\qquad \\lim_{x\\to 0^{+}}\\ln x = -\\infty' },
          { tex: '\\lim_{x\\to+\\infty}\\frac{\\ln x}{x^{n}} = 0,\\ n>0, \\qquad \\lim_{x\\to 0^{+}}\\frac{\\ln x}{x^{n}} = -\\infty,\\ n>0' },
          { tex: '\\lim_{x\\to 0^{+}} x^{n}\\ln x = 0, \\qquad \\lim_{x\\to+\\infty} x^{n}\\ln x = +\\infty' },
          { tex: '\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{\\ln(1+ax)}{ax} = 1' }
        ] }
      ] },

    { id: 'cont',
      h: { km: 'ភាពជាប់ត្រង់មួយចំណុច', en: 'Continuity at a point' },
      blocks: [
        { t: 'p',
          km: 'អនុគមន៍ \\(y=f(x)\\) ជាប់ត្រង់ \\(x=c\\) កាលណាលក្ខខណ្ឌទាំងបីខាងក្រោមផ្ទៀងផ្ទាត់៖',
          en: 'A function \\(y=f(x)\\) is continuous at \\(x=c\\) when all three of these hold:' },
        { t: 'ul', items: [
          { km: '\\(f\\) កំណត់ត្រង់ \\(x=c\\)', en: '\\(f\\) is defined at \\(x=c\\)' },
          { km: '\\(f\\) មានលីមីតកាលណា \\(x=c\\)', en: '\\(f\\) has a limit as \\(x\\to c\\)' },
          { km: '\\(\\lim_{x\\to c} f(x) = f(c)\\)', en: '\\(\\lim_{x\\to c} f(x) = f(c)\\)' }
        ] },
        { t: 'm', tex: '\\lim_{x\\to c^{-}} f(x) = \\lim_{x\\to c^{+}} f(x) = f(c)' },
        { t: 'p',
          km: 'បើ \\(f\\) និង \\(g\\) ជាប់ត្រង់ \\(x_0\\) នោះ \\(f\\pm g\\), \\(f\\times g\\), \\(kf\\) ជាប់ត្រង់ \\(x_0\\) ដែរ ហើយ \\(\\dfrac{f}{g}\\) ជាប់ត្រង់ \\(x_0\\) បើ \\(g(x_0)\\neq 0\\) ។',
          en: 'If \\(f\\) and \\(g\\) are continuous at \\(x_0\\), so are \\(f\\pm g\\), \\(f\\times g\\) and \\(kf\\); and \\(\\dfrac{f}{g}\\) is continuous at \\(x_0\\) provided \\(g(x_0)\\neq 0\\).' },
        { t: 'note',
          km: 'អនុគមន៍ពហុធា និង \\(y=\\sin x\\), \\(y=\\cos x\\) ជាប់ចំពោះគ្រប់តម្លៃ \\(x\\) ។ \\(y=\\tan x\\) ជាប់ចំពោះ \\(x\\neq\\frac{\\pi}{2}+k\\pi\\) និង \\(y=\\cot x\\) ជាប់ចំពោះ \\(x\\neq k\\pi\\), \\(k\\in\\mathbb{Z}\\) ។',
          en: 'Polynomials, \\(\\sin x\\) and \\(\\cos x\\) are continuous everywhere. \\(\\tan x\\) is continuous except at \\(x=\\frac{\\pi}{2}+k\\pi\\), and \\(\\cot x\\) except at \\(x=k\\pi\\), \\(k\\in\\mathbb{Z}\\).' }
      ] },

    { id: 'extend',
      h: { km: 'អនុគមន៍បន្ថែមតាមភាពជាប់', en: 'Extending a function by continuity' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(f\\) មិនកំណត់ត្រង់ \\(x=a\\) តែ \\(\\lim_{x\\to a}f(x)=\\ell\\) នោះអនុគមន៍បន្ថែមតាមភាពជាប់ត្រង់ \\(x=a\\) កំណត់ដោយ៖',
          en: 'If \\(f\\) is undefined at \\(x=a\\) but \\(\\lim_{x\\to a}f(x)=\\ell\\), the function extended by continuity at \\(x=a\\) is:' },
        { t: 'm', tex: 'g(x) = \\begin{cases} f(x), & x \\neq a \\\\ \\ell, & x = a \\end{cases}' },
        { t: 'eg',
          km: 'តើតម្លៃ \\(a\\) ណាដែលធ្វើឲ្យ \\(f(x)=\\dfrac{x^2-4}{x-2}\\) បន្ថែមតាមភាពជាប់ត្រង់ \\(x=2\\) បាន?',
          en: 'What value of \\(a\\) extends \\(f(x)=\\dfrac{x^2-4}{x-2}\\) continuously at \\(x=2\\)?',
          steps: [
            '\\lim_{x\\to 2}\\frac{x^2-4}{x-2} = \\lim_{x\\to 2}(x+2) = 4',
            'a = 4'
          ] }
      ] }
  ];

  /* ==================================================================== 2
     MULTIPLE CHOICE — the 36 questions of ផ្ទៀកលំហាត់ជម្រើសរើស.        */
  function mc(n, tex, opts) {
    return { n: n, kind: 'mc',
      q: { km: 'គណនាលីមីត \\(' + tex + '\\)', en: 'Evaluate \\(' + tex + '\\)' },
      o: opts };
  }

  var MC = [
    mc(1, '\\lim_{x\\to 2}\\frac{x^3-8+4(x-2)}{x^2-4}', ['4', '-4', '\\frac{1}{4}', '-\\frac{1}{4}']),
    mc(2, '\\lim_{x\\to 2}\\frac{x^2+4x-12}{2-\\sqrt{x+2}}', ['\\frac{1}{32}', '32', '-32', '-\\frac{1}{32}']),
    mc(3, '\\lim_{x\\to 3}\\frac{x-3}{x-1-\\sqrt[3]{x^2-1}}', ['-2', '\\frac{1}{2}', '-\\frac{1}{2}', '2']),
    mc(4, '\\lim_{x\\to+\\infty}\\frac{|1-x|}{\\sqrt{x^2-3x+3}}', ['1', '-1', '+\\infty', '-\\infty']),
    mc(5, '\\lim_{x\\to-\\infty}\\left(3x+\\sqrt{x^2-x}\\right)', ['2', '3', '+\\infty', '-\\infty']),
    mc(6, '\\lim_{x\\to 0}\\frac{\\sqrt{1+\\sin x}-\\sqrt{1-\\sin x}}{\\tan x}', ['1', '-1', '+\\infty', '-\\infty']),
    mc(7, '\\lim_{x\\to 2}\\frac{\\cos\\left(\\frac{\\pi}{4}x\\right)}{2-x}', ['-\\frac{\\pi}{4}', '\\frac{\\pi}{4}', '\\frac{4}{\\pi}', '-\\frac{4}{\\pi}']),
    mc(8, '\\lim_{x\\to 0}\\frac{e^{2x}-e^{-2x}}{\\sin 2x}', ['\\frac{1}{2}', '0', '-2', '2']),
    mc(9, '\\lim_{x\\to 1}\\frac{x-1}{\\ln x}', ['\\frac{1}{2}', '0', '1', '2']),
    mc(10, '\\lim_{x\\to+\\infty}\\frac{x-1}{\\ln x}', ['\\frac{+\\infty}{+\\infty}', '0', '1', '+\\infty']),
    mc(11, '\\lim_{x\\to 0}\\frac{\\sin 2020x}{1010x}', ['1', '2', '3', '1010', '2020']),
    mc(12, '\\lim_{x\\to 0}\\frac{1-\\cos 7x}{x^2}', ['\\frac{1}{2}', '\\frac{7}{4}', '\\frac{7}{2}', '\\frac{49}{4}', '\\frac{49}{2}']),
    mc(13, '\\lim_{x\\to 0}\\frac{2(1-\\cos x)}{\\sin^2 x}', ['\\frac{1}{2}', '0', '1', '2', '3']),
    mc(14, '\\lim_{x\\to 0}\\frac{5x^2-x\\sin 3x}{x^3+\\sin^2 2x}', ['2', '\\frac{1}{2}', '0', '-2', '-\\frac{1}{4}']),
    mc(15, '\\lim_{x\\to\\pi}\\frac{1+\\cos x}{\\sin^2 x}', ['\\frac{1}{2}', '1', '\\frac{3}{2}', '2', '\\frac{5}{2}']),
    { n: 16, kind: 'mc',
      q: { km: 'តើតម្លៃ \\(k\\) ណាដែលធ្វើឲ្យអនុគមន៍ \\(f(x)=\\begin{cases} 2x^2-k, & k \\ge 2 \\\\ 5+kx, & k < 2 \\end{cases}\\) ជាប់ត្រង់ \\(x=2\\) ?',
           en: 'For which value of \\(k\\) is \\(f(x)=\\begin{cases} 2x^2-k, & k \\ge 2 \\\\ 5+kx, & k < 2 \\end{cases}\\) continuous at \\(x=2\\)?' },
      o: ['-2', '-1', '0', '\\frac{1}{2}', '1'] },
    { n: 17, kind: 'mc',
      q: { km: 'គេមានអនុគមន៍ \\(f(x)=\\begin{cases} \\dfrac{\\sqrt{1+\\sin 2x}-\\sqrt{1-\\sin 2x}}{x}, & x \\neq 0 \\\\ a, & x = 0 \\end{cases}\\) ។ តើតម្លៃ \\(a\\) ណាដែល \\(f\\) អាចបន្ថែមតាមភាពជាប់ត្រង់ \\(x=0\\) បាន ?',
           en: 'Let \\(f(x)=\\begin{cases} \\dfrac{\\sqrt{1+\\sin 2x}-\\sqrt{1-\\sin 2x}}{x}, & x \\neq 0 \\\\ a, & x = 0 \\end{cases}\\). For which \\(a\\) is \\(f\\) continuous at \\(x=0\\)?' },
      o: ['2', '4', '6', '8', '\\text{none of these}'] },
    mc(18, '\\lim_{x\\to-1}\\left(-\\frac{1+x^7}{x^9+1}\\right)', ['\\frac{7}{9}', '\\frac{9}{7}', '-\\frac{7}{9}', '-\\frac{9}{7}']),
    mc(19, '\\lim_{x\\to 3}\\frac{x^2+4x+7}{x^2+1}', ['\\frac{14}{9}', '\\frac{28}{9}', '\\frac{14}{5}', '-\\frac{14}{9}']),
    mc(20, '\\lim_{x\\to 1}\\frac{x-1}{\\sqrt{x+3}-2}', ['4', '-4', '\\frac{1}{4}', '\\frac{1}{8}']),
    mc(21, '\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+2x-1}-x\\right)', ['1', '-4', '\\frac{1}{4}', '-1']),
    mc(22, '\\lim_{x\\to 0}\\frac{1-e^{x}-\\sin x}{x}', ['1', '-4', '-2', '-1']),
    mc(23, '\\lim_{x\\to 0}\\frac{1-\\cos^2 x}{x^2}', ['1', '4', '-2', '-1']),
    mc(24, '\\lim_{x\\to+\\infty}\\frac{e^{2x}+1}{e^{x}+1}', ['+\\infty', '-\\infty', '1', '-1']),
    mc(25, '\\lim_{x\\to-1}\\frac{x^3+1}{x+1}', ['1', '3', '-2', '-1']),
    mc(26, '\\lim_{x\\to+\\infty}\\frac{(3x+4)(4x-2)}{(x-2)(x+4)}', ['1', '\\frac{1}{12}', '12', '-12']),
    mc(27, '\\lim_{x\\to+\\infty}\\frac{2e^{x}+1}{x^2+x-3}', ['1', '-\\infty', '+\\infty', '-2']),
    mc(28, '\\lim_{x\\to\\frac{\\pi}{4}}\\frac{2\\sin\\left(x-\\frac{\\pi}{4}\\right)}{\\frac{\\pi}{4}-x}', ['1', '-\\infty', '+\\infty', '-2']),
    mc(29, '\\lim_{x\\to 0}\\frac{\\sin x}{-3x}', ['1', '-3', '-\\frac{1}{3}', '\\frac{1}{3}']),
    mc(30, '\\lim_{x\\to-\\infty}\\frac{\\sqrt{x^2+1}}{x+1}', ['1', '-\\infty', '+\\infty', '-1']),
    mc(31, '\\lim_{x\\to 0}\\frac{\\sqrt{1-x^2}-\\sqrt{1+x^2}}{2x^2}', ['-\\frac{1}{4}', '\\frac{1}{2}', '-\\frac{1}{2}', '\\frac{1}{4}']),
    mc(32, '\\lim_{x\\to+\\infty}\\frac{(x+1)^{10}+(x+2)^{10}+\\dots+(x+2022)^{10}}{x^{10}+2022}', ['2022', '2019', '2021', '1011']),
    mc(33, '\\lim_{x\\to 0}\\frac{1+\\sin x-\\cos x}{1-\\sin x-\\cos x}', ['1', '3', '-1', '-2']),
    mc(34, '\\lim_{n\\to\\infty}\\frac{1^2+2^2+3^2+\\dots+n^2}{2n^3}', ['\\frac{1}{6}', '3', '-1', '-2']),
    { n: 35, kind: 'mc',
      q: { km: 'គេមាន \\(\\lim_{x\\to 1}\\dfrac{ax^2+bx+c}{(x-1)^2}=2\\) ។ កំណត់តម្លៃ \\((a,b,c)\\) ។',
           en: 'Given \\(\\lim_{x\\to 1}\\dfrac{ax^2+bx+c}{(x-1)^2}=2\\), find \\((a,b,c)\\).' },
      o: ['(2,-4,2)', '(2,4,2)', '(2,4,-2)', '(-2,-4,-2)'] },
    mc(36, '\\lim_{x\\to 0}\\frac{\\sin x\\cdot\\sin 2x\\cdot\\sin 3x \\cdots \\sin nx}{x^{n}}', ['\\frac{n(n+1)}{2}', 'n(n+1)', 'n!', 'n^2'])
  ];

  /* ==================================================================== 3
     WRITTEN EXERCISES — 1–7 from the book, 8–15 written for this page.   */
  function calc(km, en) { return { km: km || 'គណនាលីមីតខាងក្រោម៖', en: en || 'Evaluate the following limits:' }; }
  function part(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }

  var WR = [
    { n: 1, q: calc(), p: [
      part('a', '\\lim_{x\\to-1}\\frac{x^2-5x-6}{x+1}'),
      part('b', '\\lim_{x\\to-1}\\frac{x^2-4x-5}{x^2-1}'),
      part('c', '\\lim_{x\\to\\sqrt2}\\frac{x^2-2}{x-\\sqrt2}')
    ] },
    { n: 2, q: calc(), p: [
      part('a', '\\lim_{x\\to 4}\\left(\\sqrt{x+4}-\\sqrt2\\right)'),
      part('b', '\\lim_{x\\to 3}\\frac{\\sqrt{x}-\\sqrt3}{x^2-9}'),
      part('c', '\\lim_{x\\to 1}\\frac{x^3-3x^2+4x-2}{\\sqrt[3]{x}-1}'),
      part('d', '\\lim_{x\\to 1}\\frac{x^2-4x+3}{x^2-1}'),
      part('e', '\\lim_{x\\to\\frac{\\pi}{3}}\\frac{1-2\\cos x}{\\pi-3x}'),
      part('f', '\\lim_{x\\to 0}\\frac{1-\\cos^4 x}{1-\\cos^3 x}')
    ] },
    { n: 3, q: calc(), p: [
      part('a', '\\lim_{x\\to 0}\\frac{\\sin 3x}{2x}'),
      part('b', '\\lim_{x\\to+\\infty}\\left[\\sqrt{x^2+2x+3}-(x+1)\\right]'),
      part('c', '\\lim_{x\\to\\frac{\\pi}{3}}\\frac{\\sin x-\\sqrt3\\cos x}{2(\\pi-3x)}'),
      part('d', '\\lim_{x\\to 0}\\frac{x^3+3x^2+2x}{x^2-x-6}'),
      part('e', '\\lim_{x\\to 0}\\frac{1-\\sqrt[3]{1-x}}{2x}'),
      part('f', '\\lim_{x\\to 0}\\frac{-2\\sin 5x}{\\sqrt5-\\sqrt{x+5}}')
    ] },
    { n: 4, q: calc(), p: [
      part('a', '\\lim_{x\\to 1}\\frac{x^2(x-2)+x^2+x-1}{1-x}'),
      part('b', '\\lim_{x\\to 0}\\frac{x(e^{x}-1)}{1-\\cos x}'),
      part('c', '\\lim_{x\\to-\\frac{\\pi}{2}}\\frac{1+\\sin x}{\\sin^4 x-1}')
    ] },
    { n: 5, q: calc(), p: [
      part('A', '\\lim_{x\\to 2}\\sqrt{\\frac{x^3+2x+3}{x^2+5}}'),
      part('B', '\\lim_{x\\to 2}\\frac{x-2}{x^2-4}'),
      part('C', '\\lim_{x\\to 1}\\frac{x^3-5x+4}{x^3-1}'),
      part('D', '\\lim_{x\\to 2}\\frac{x^2-4}{x^2-3x+2}'),
      part('E', '\\lim_{x\\to 3}\\frac{\\sqrt{x+6}-3}{x^3-5x^2+3x+9}'),
      part('F', '\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+4x+1}-x\\right)')
    ] },
    { n: 6,
      q: { km: 'គណនាលីមីតខាងក្រោម (ចម្លើយត្រូវបានផ្តល់ជូន — ចូរបង្ហាញដំណើរការ)៖',
           en: 'Evaluate the following (the answers are given — show the working):' },
      p: [
        part('A', '\\lim_{x\\to 0}\\frac{1-e^{x}-\\sin x}{x} = -2'),
        part('B', '\\lim_{x\\to 0}\\frac{\\sin^2 x}{1-\\cos 2x} = \\frac{1}{2}'),
        part('C', '\\lim_{x\\to 0}\\frac{1-\\cos x}{x\\sin x} = \\frac{1}{2}'),
        part('D', '\\lim_{x\\to 0}\\frac{1-\\cos^2 x}{x^2} = 1')
      ] },
    { n: 7,
      q: { km: 'គណនាលីមីតខាងក្រោម (ចម្លើយត្រូវបានផ្តល់ជូន — ចូរបង្ហាញដំណើរការ)៖',
           en: 'Evaluate the following (the answers are given — show the working):' },
      p: [
        part('E', '\\lim_{x\\to 0}\\frac{\\sin^2 4x}{5-5\\cos 4x} = \\frac{2}{5}'),
        part('F', '\\lim_{x\\to 1}\\frac{2x^3-5x^2+2x+1}{x^2-1} = -1'),
        part('G', '\\lim_{x\\to 3}\\frac{x^2+4x+7}{x^2+1} = \\frac{14}{5}'),
        part('H', '\\lim_{x\\to 1}\\frac{x^2+4x-5}{x^2-1} = 3')
      ] },

    /* ---- extra practice written for this page ----------------------- */
    { n: 8, extra: true, q: calc('គណនាលីមីតដោយប្រើការជំនួសផ្ទាល់៖', 'Evaluate by direct substitution:'), p: [
      part('a', '\\lim_{x\\to 2}(3x^2-5x+1)'),
      part('b', '\\lim_{x\\to-1}\\frac{2x+3}{x^2+2}'),
      part('c', '\\lim_{x\\to 0}\\frac{\\cos x}{1+\\sin x}')
    ] },
    { n: 9, extra: true, q: calc('គណនាលីមីតទម្រង់ \\(\\frac{0}{0}\\) ៖', 'Evaluate these \\(\\frac{0}{0}\\) forms:'), p: [
      part('a', '\\lim_{x\\to 3}\\frac{x^2-9}{x-3}'),
      part('b', '\\lim_{x\\to 2}\\frac{x^3-8}{x^2-4}'),
      part('c', '\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4}'),
      part('d', '\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}')
    ] },
    { n: 10, extra: true, q: calc('គណនាលីមីតទម្រង់ \\(\\frac{\\infty}{\\infty}\\) ៖', 'Evaluate these \\(\\frac{\\infty}{\\infty}\\) forms:'), p: [
      part('a', '\\lim_{x\\to+\\infty}\\frac{3x^2-x+1}{2x^2+5}'),
      part('b', '\\lim_{x\\to+\\infty}\\frac{2x+1}{x^2-3}'),
      part('c', '\\lim_{x\\to-\\infty}\\frac{x^3+1}{x^2+x}'),
      part('d', '\\lim_{x\\to+\\infty}\\frac{\\sqrt{4x^2+1}}{x+2}')
    ] },
    { n: 11, extra: true, q: calc('គណនាលីមីតទម្រង់ \\(\\infty-\\infty\\) ៖', 'Evaluate these \\(\\infty-\\infty\\) forms:'), p: [
      part('a', '\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+x}-x\\right)'),
      part('b', '\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+3x}-\\sqrt{x^2-x}\\right)'),
      part('c', '\\lim_{x\\to+\\infty}\\left(x-\\sqrt{x^2-4x}\\right)')
    ] },
    { n: 12, extra: true, q: calc('គណនាលីមីតត្រីកោណមាត្រ៖', 'Evaluate these trigonometric limits:'), p: [
      part('a', '\\lim_{x\\to 0}\\frac{\\sin 5x}{3x}'),
      part('b', '\\lim_{x\\to 0}\\frac{\\tan x}{x}'),
      part('c', '\\lim_{x\\to 0}\\frac{1-\\cos 3x}{x^2}'),
      part('d', '\\lim_{x\\to 0}\\frac{\\sin 2x}{\\sin 5x}')
    ] },
    { n: 13, extra: true, q: calc('គណនាលីមីតអ៊ិចស្ប៉ូណង់ស្យែល និងលោការីត៖', 'Evaluate these exponential and logarithmic limits:'), p: [
      part('a', '\\lim_{x\\to 0}\\frac{e^{3x}-1}{x}'),
      part('b', '\\lim_{x\\to 0}\\frac{\\ln(1+2x)}{x}'),
      part('c', '\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}'),
      part('d', '\\lim_{x\\to+\\infty}\\left(1+\\frac{3}{x}\\right)^{x}')
    ] },
    { n: 14, extra: true,
      q: { km: 'ពិនិត្យភាពជាប់នៃអនុគមន៍ខាងក្រោមត្រង់ចំណុចដែលបានឲ្យ៖',
           en: 'Test each function for continuity at the point given:' },
      p: [
        part('a', 'f(x)=\\begin{cases} x^2+1, & x \\le 1 \\\\ 3x-1, & x > 1 \\end{cases}\\ \\text{at }x=1'),
        part('b', 'f(x)=\\begin{cases} \\frac{x^2-9}{x-3}, & x \\neq 3 \\\\ 5, & x = 3 \\end{cases}\\ \\text{at }x=3'),
        part('c', 'f(x)=\\begin{cases} \\frac{\\sin x}{x}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}\\ \\text{at }x=0')
      ] },
    { n: 15, extra: true,
      q: { km: 'រកតម្លៃប៉ារ៉ាម៉ែត្រ៖', en: 'Find the value of the parameter:' },
      p: [
        part('a', '\\text{Find }k\\text{ so that } f(x)=\\begin{cases} kx+3, & x \\le 2 \\\\ x^2-1, & x > 2 \\end{cases}\\ \\text{is continuous at }x=2'),
        part('b', '\\text{Find }a\\text{ so that }\\lim_{x\\to 1}\\frac{x^2+ax-3}{x-1}\\text{ exists}'),
        part('c', '\\text{Find }a,b\\text{ so that }\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+ax+1}-bx\\right)=2')
      ] }
  ];

  global.LIM_BANK = { lesson: LESSON, mc: MC, exercises: WR };
})(window);
