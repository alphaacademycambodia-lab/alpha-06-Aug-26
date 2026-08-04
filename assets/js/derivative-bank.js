/* Alpha Academy Cambodia — មេរៀនទី៣ ដេរីវេនៃអនុគមន៍ / Lesson 3: Derivatives
   ---------------------------------------------------------------------------
   Grade 12. Same shape as the limits bank, and it sets the shared global that
   assets/js/math-lesson.js renders: { key, lesson, mc, exercises }.
   `key` prefixes the localStorage entries so the maths pages never share
   each other's tick marks.                                                  */
(function (global) {
  'use strict';

  var LESSON = [
    { id: 'def',
      h: { km: 'ដេរីវេនៃអនុគមន៍ត្រង់ \\(x_0\\)', en: 'The derivative at a point' },
      blocks: [
        { t: 'p',
          km: 'ដេរីវេនៃអនុគមន៍ \\(y=f(x)\\) ត្រង់ \\(x_0\\) វាស់អត្រាប្រែប្រួលភ្លាមៗ — ជាជម្រាលនៃបន្ទាត់ប៉ះនឹងខ្សែកោងត្រង់ចំណុចនោះ។',
          en: 'The derivative of \\(y=f(x)\\) at \\(x_0\\) measures the instantaneous rate of change — the gradient of the tangent to the curve at that point.' },
        { t: 'm', tex: 'f\'(x_0) = \\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x} = \\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0} = \\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}' },
        { t: 'ul', items: [
          { km: 'បើ \\(f\\) មានដេរីវេត្រង់ \\(x_0\\) នោះ \\(f\\) ជាប់ត្រង់ \\(x_0\\) ។', en: 'If \\(f\\) is differentiable at \\(x_0\\) then \\(f\\) is continuous at \\(x_0\\).' },
          { km: 'ផ្ទុយមកវិញមិនពិតទេ — \\(f\\) អាចជាប់ត្រង់ \\(x_0\\) តែគ្មានដេរីវេ។', en: 'The converse fails — \\(f\\) can be continuous at \\(x_0\\) yet have no derivative there.' },
          { km: '\\(f\\) មានដេរីវេត្រង់ \\(x_0\\) លុះត្រាតែ \\(f\'_{-}(x_0)=f\'_{+}(x_0)\\) ។', en: '\\(f\\) is differentiable at \\(x_0\\) exactly when \\(f\'_{-}(x_0)=f\'_{+}(x_0)\\).' }
        ] },
        { t: 'm', tex: 'f\'_{-}(x_0)=\\lim_{h\\to 0^{-}}\\frac{f(x_0+h)-f(x_0)}{h}, \\qquad f\'_{+}(x_0)=\\lim_{h\\to 0^{+}}\\frac{f(x_0+h)-f(x_0)}{h}' },
        { t: 'eg',
          km: 'រកដេរីវេនៃ \\(f(x)=x^2\\) ត្រង់ \\(x_0=3\\) តាមនិយមន័យ។',
          en: 'Use the definition to find the derivative of \\(f(x)=x^2\\) at \\(x_0=3\\).',
          steps: [
            'f\'(3) = \\lim_{h\\to 0}\\frac{(3+h)^2-9}{h} = \\lim_{h\\to 0}\\frac{6h+h^2}{h}',
            '= \\lim_{h\\to 0}(6+h) = 6'
          ] }
      ] },

    { id: 'chain',
      h: { km: 'ដេរីវេនៃអនុគមន៍បណ្តាក់', en: 'The chain rule' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(y=f(u)\\) និង \\(u=g(x)\\) នោះ៖',
          en: 'If \\(y=f(u)\\) and \\(u=g(x)\\), then:' },
        { t: 'm', tex: '\\frac{dy}{dx} = \\frac{dy}{du}\\times\\frac{du}{dx} \\qquad \\text{or} \\qquad \\big[f(u(x))\\big]\' = u\'(x)\\cdot f\'(u(x))' },
        { t: 'eg',
          km: 'រកដេរីវេនៃ \\(y=(3x^2+1)^5\\) ។',
          en: 'Differentiate \\(y=(3x^2+1)^5\\).',
          steps: [ 'u = 3x^2+1,\\quad u\' = 6x', 'y\' = 5u^4\\cdot u\' = 30x(3x^2+1)^4' ] }
      ] },

    { id: 'table',
      h: { km: 'រូបមន្តដេរីវេសំខាន់ៗ', en: 'The standard derivatives' },
      blocks: [
        { t: 'ul', items: [
          { tex: 'y = C \\Rightarrow y\' = 0 \\quad (C \\text{ constant})' },
          { tex: 'y = kx \\Rightarrow y\' = k \\qquad\\qquad y = ku \\Rightarrow y\' = ku\'' },
          { tex: 'y = x^{n} \\Rightarrow y\' = nx^{n-1} \\qquad y = u^{n} \\Rightarrow y\' = n\\,u\'\\,u^{n-1}' },
          { tex: 'y = \\frac{1}{x} \\Rightarrow y\' = -\\frac{1}{x^{2}} \\qquad y = \\frac{1}{u} \\Rightarrow y\' = -\\frac{u\'}{u^{2}}' },
          { tex: 'y = \\sqrt{x} \\Rightarrow y\' = \\frac{1}{2\\sqrt{x}} \\qquad y = \\sqrt{u} \\Rightarrow y\' = \\frac{u\'}{2\\sqrt{u}}' }
        ] },
        { t: 'p', km: 'រូបមន្តដែលត្រូវចាំជាដាច់ខាត៖', en: 'The three you must never forget:' },
        { t: 'm', tex: 'y = u \\pm v \\Rightarrow y\' = u\' \\pm v\'' },
        { t: 'm', tex: 'y = u\\,v \\Rightarrow y\' = u\'v + v\'u' },
        { t: 'm', tex: 'y = \\frac{u}{v} \\Rightarrow y\' = \\frac{u\'v - v\'u}{v^{2}}' }
      ] },

    { id: 'trig',
      h: { km: 'ដេរីវេនៃអនុគមន៍ត្រីកោណមាត្រ', en: 'Derivatives of trigonometric functions' },
      blocks: [
        { t: 'ul', items: [
          { tex: 'y = \\sin x \\Rightarrow y\' = \\cos x \\qquad y = \\sin u \\Rightarrow y\' = u\'\\cos u' },
          { tex: 'y = \\cos x \\Rightarrow y\' = -\\sin x \\qquad y = \\cos u \\Rightarrow y\' = -u\'\\sin u' },
          { tex: 'y = \\tan x \\Rightarrow y\' = 1+\\tan^{2}x = \\frac{1}{\\cos^{2}x}' },
          { tex: 'y = \\cot x \\Rightarrow y\' = -(1+\\cot^{2}x) = -\\frac{1}{\\sin^{2}x}' }
        ] },
        { t: 'eg',
          km: 'រកដេរីវេនៃ \\(y=\\sin(3x^2)\\) ។',
          en: 'Differentiate \\(y=\\sin(3x^2)\\).',
          steps: [ 'u = 3x^2,\\quad u\' = 6x', 'y\' = u\'\\cos u = 6x\\cos(3x^2)' ] }
      ] },

    { id: 'explog',
      h: { km: 'ដេរីវេនៃអ៊ិចស្ប៉ូណង់ស្យែល និងលោការីត', en: 'Exponential and logarithmic derivatives' },
      blocks: [
        { t: 'ul', items: [
          { tex: 'y = e^{x} \\Rightarrow y\' = e^{x} \\qquad y = e^{u} \\Rightarrow y\' = u\'e^{u}' },
          { tex: 'y = \\ln x \\Rightarrow y\' = \\frac{1}{x} \\qquad y = \\ln u \\Rightarrow y\' = \\frac{u\'}{u}' }
        ] },
        { t: 'eg',
          km: 'រកដេរីវេនៃ \\(y=\\ln(x^2+1)\\) និង \\(y=e^{-2x}\\) ។',
          en: 'Differentiate \\(y=\\ln(x^2+1)\\) and \\(y=e^{-2x}\\).',
          steps: [ 'y\' = \\frac{2x}{x^2+1}', 'y\' = -2e^{-2x}' ] }
      ] },

    { id: 'second',
      h: { km: 'ដេរីវេទី២ និងដេរីវេលំដាប់ខ្ពស់', en: 'Second and higher derivatives' },
      blocks: [
        { t: 'p',
          km: 'ដេរីវេទី២ នៃ \\(y=f(x)\\) សរសេរ \\(y\'\'\\), \\(f\'\'(x)\\) ឬ \\(\\frac{d^2y}{dx^2}\\) ។ បន្តទៅទៀតគេបានដេរីវេលំដាប់ទី \\(n\\) ៖',
          en: 'The second derivative of \\(y=f(x)\\) is written \\(y\'\'\\), \\(f\'\'(x)\\) or \\(\\frac{d^2y}{dx^2}\\). Carrying on gives the \\(n\\)th derivative:' },
        { t: 'm', tex: 'f^{(n)}(x) = \\left[f^{(n-1)}(x)\\right]\'' },
        { t: 'note',
          km: 'ចំណាំ៖ គេប្រើសញ្ញា \\(f^{(n)}\\) ចាប់ពី \\(n=4\\) តទៅ។',
          en: 'The bracketed notation \\(f^{(n)}\\) is used from \\(n=4\\) upwards.' }
      ] },

    { id: 'diff',
      h: { km: '឴ឌីផេរ៉ង់ស្យែល', en: 'The differential' },
      blocks: [
        { t: 'p',
          km: 'បើអនុគមន៍ \\(y=f(x)\\) មានដេរីវេ នោះឌីផេរ៉ង់ស្យែល \\(dy\\) កំណត់ដោយ \\(dy=f\'(x)\\,dx\\) ។',
          en: 'If \\(y=f(x)\\) is differentiable, its differential is \\(dy=f\'(x)\\,dx\\).' },
        { t: 'm', tex: 'f(x+\\Delta x) \\approx f(x) + f\'(x)\\,dx' },
        { t: 'note',
          km: 'នេះជាមូលដ្ឋាននៃការប៉ាន់ស្មានលីនេអ៊ែរ — ខ្សែកោងជិតៗចំណុចមួយ មើលទៅដូចបន្ទាត់ប៉ះរបស់វា។',
          en: 'This is linear approximation: close enough to a point, a curve looks like its own tangent.' },
        { t: 'eg',
          km: 'ប្រើឌីផេរ៉ង់ស្យែលដើម្បីប៉ាន់ស្មាន \\(\\sqrt{4.02}\\) ។',
          en: 'Use the differential to approximate \\(\\sqrt{4.02}\\).',
          steps: [
            'f(x)=\\sqrt{x},\\ x=4,\\ dx=0.02,\\ f\'(x)=\\frac{1}{2\\sqrt{x}}',
            '\\sqrt{4.02} \\approx 2 + \\frac{1}{4}(0.02) = 2.005'
          ] }
      ] },

    { id: 'apply',
      h: { km: 'ការអនុវត្តដេរីវេ', en: 'What the derivative is used for' },
      blocks: [
        { t: 'ul', items: [
          { km: '<b>បន្ទាត់ប៉ះ</b> ៖ សមីការបន្ទាត់ប៉ះនឹងខ្សែកោងត្រង់ \\(x_0\\) គឺ \\(y=f\'(x_0)(x-x_0)+f(x_0)\\) ។', en: '<b>Tangent line</b>: at \\(x_0\\) the tangent is \\(y=f\'(x_0)(x-x_0)+f(x_0)\\).' },
          { km: '<b>អថេរភាព</b> ៖ \\(f\'(x)>0\\) អនុគមន៍កើន, \\(f\'(x)<0\\) អនុគមន៍ចុះ។', en: '<b>Variation</b>: \\(f\'(x)>0\\) means increasing, \\(f\'(x)<0\\) means decreasing.' },
          { km: '<b>អតិបរមា អប្បបរមា</b> ៖ រកនៅកន្លែងដែល \\(f\'(x)=0\\) ហើយ \\(f\'\\) ប្តូរសញ្ញា។', en: '<b>Maxima and minima</b>: look where \\(f\'(x)=0\\) and \\(f\'\\) changes sign.' },
          { km: '<b>ចំណុចផ្លាស់ប្តូរកោង</b> ៖ រកនៅកន្លែងដែល \\(f\'\'(x)=0\\) ហើយ \\(f\'\'\\) ប្តូរសញ្ញា។', en: '<b>Inflection</b>: where \\(f\'\'(x)=0\\) and \\(f\'\'\\) changes sign.' }
        ] },
        { t: 'eg',
          km: 'រកសមីការបន្ទាត់ប៉ះនឹងខ្សែកោង \\(y=x^3-2x\\) ត្រង់ \\(x=1\\) ។',
          en: 'Find the tangent to \\(y=x^3-2x\\) at \\(x=1\\).',
          steps: [
            'f(1) = -1,\\qquad f\'(x)=3x^2-2,\\qquad f\'(1)=1',
            'y = 1(x-1) + (-1) = x-2'
          ] }
      ] }
  ];

  function q(km, en) { return { km: km, en: en }; }
  function part(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }
  var DERIV = q('រកដេរីវេនៃអនុគមន៍ខាងក្រោម៖', 'Differentiate each function:');

  var WR = [
    { n: 1, q: DERIV, p: [
      part('a', 'y = 5x^4 - 3x^2 + 7x - 1'),
      part('b', 'y = \\frac{2}{x} + 3\\sqrt{x}'),
      part('c', 'y = (2x-1)^{6}'),
      part('d', 'y = x^3\\sqrt{x}')
    ] },
    { n: 2, q: DERIV, p: [
      part('a', 'y = (x^2+1)(x^3-2x)'),
      part('b', 'y = \\frac{x+1}{x-1}'),
      part('c', 'y = \\frac{x^2}{x^2+1}'),
      part('d', 'y = \\frac{2x-3}{\\sqrt{x}}')
    ] },
    { n: 3, q: DERIV, p: [
      part('a', 'y = \\sin 3x + \\cos 2x'),
      part('b', 'y = x\\sin x'),
      part('c', 'y = \\tan(2x+1)'),
      part('d', 'y = \\sin^{3}x')
    ] },
    { n: 4, q: DERIV, p: [
      part('a', 'y = e^{3x}'),
      part('b', 'y = x^{2}e^{x}'),
      part('c', 'y = \\ln(2x+5)'),
      part('d', 'y = \\frac{\\ln x}{x}')
    ] },
    { n: 5, q: DERIV, p: [
      part('a', 'y = e^{x}\\sin x'),
      part('b', 'y = \\ln(\\cos x)'),
      part('c', 'y = \\sqrt{x^2+4}'),
      part('d', 'y = (x^2+x+1)^{4}')
    ] },
    { n: 6,
      q: q('គណនាដេរីវេតាមនិយមន័យ (លីមីតនៃផលធៀបប្រែប្រួល)៖',
           'Work these out from the definition (the limit of the difference quotient):'),
      p: [
        part('a', 'f(x)=x^2+3x \\text{ at } x_0=2'),
        part('b', 'f(x)=\\frac{1}{x} \\text{ at } x_0=1'),
        part('c', 'f(x)=\\sqrt{x} \\text{ at } x_0=4')
      ] },
    { n: 7,
      q: q('រកដេរីវេទី១ និងទី២ នៃអនុគមន៍ខាងក្រោម៖', 'Find the first and second derivatives:'),
      p: [
        part('a', 'y = x^4 - 3x^3 + 2x'),
        part('b', 'y = e^{2x}'),
        part('c', 'y = \\sin x + \\cos x'),
        part('d', 'y = x\\ln x')
      ] },
    { n: 8,
      q: q('រកសមីការបន្ទាត់ប៉ះនឹងខ្សែកោងត្រង់ចំណុចដែលបានឲ្យ៖',
           'Find the equation of the tangent to each curve at the point given:'),
      p: [
        part('a', 'y = x^2-4x+1 \\text{ at } x=3'),
        part('b', 'y = \\frac{1}{x} \\text{ at } x=2'),
        part('c', 'y = e^{x} \\text{ at } x=0'),
        part('d', 'y = \\ln x \\text{ at } x=1')
      ] },
    { n: 9,
      q: q('សិក្សាអថេរភាព រួចរកអតិបរមា និងអប្បបរមាក្នុងតំបន់នៃអនុគមន៍៖',
           'Study the variation and find the local maxima and minima of:'),
      p: [
        part('a', 'f(x) = x^3 - 3x^2 + 4'),
        part('b', 'f(x) = \\frac{x^2+1}{x}'),
        part('c', 'f(x) = xe^{-x}')
      ] },
    { n: 10, src: 'book',
      q: q('\\(f\\) ជាអនុគមន៍កំណត់ដោយ \\(y=f(x)=\\dfrac{e^{x}}{ax+b}\\) ដែល \\(a,b\\in\\mathbb{R}\\) ។',
           'Let \\(f\\) be given by \\(y=f(x)=\\dfrac{e^{x}}{ax+b}\\), where \\(a,b\\in\\mathbb{R}\\).'),
      p: [
        { k: 'a', t: q('គណនាដេរីវេទី១ \\(f\'(x)\\) និងដេរីវេទី២ \\(f\'\'(x)\\) ។',
                       'Work out the first derivative \\(f\'(x)\\) and the second derivative \\(f\'\'(x)\\).') },
        { k: 'b', t: q('កំណត់ \\(a,b\\) ដើម្បីឲ្យក្រាបតាងអនុគមន៍ \\(f\\) មានអប្បបរមាស្មើ \\(e\\) ត្រង់ \\(x=1\\) ។',
                       'Find \\(a\\) and \\(b\\) so that the graph of \\(f\\) has a minimum equal to \\(e\\) at \\(x=1\\).') }
      ] },
    { n: 11, src: 'book',
      q: q('\\(f\\) ជាអនុគមន៍កំណត់ចំពោះគ្រប់ចំនួនពិត \\(x>0\\) ដោយ \\(y=f(x)=-x-\\dfrac{4\\ln x}{x}\\) ហើយមានខ្សែកោង \\(C\\) ។',
           'Let \\(f\\) be defined for all real \\(x>0\\) by \\(y=f(x)=-x-\\dfrac{4\\ln x}{x}\\), with curve \\(C\\).'),
      p: [
        { k: '1', t: q('គណនាលីមីត \\(\\lim_{x\\to 0^{+}}f(x)\\) និង \\(\\lim_{x\\to+\\infty}f(x)\\) ។ ទាញរកសមីការអាស៊ីមតូតឈរនៃខ្សែកោង \\(C\\) ។',
                       'Find \\(\\lim_{x\\to 0^{+}}f(x)\\) and \\(\\lim_{x\\to+\\infty}f(x)\\), and deduce the vertical asymptote of \\(C\\).') },
        { k: '2', t: q('បង្ហាញថាបន្ទាត់ \\(L: y=-x\\) ជាអាស៊ីមតូតទ្រេតនៃខ្សែកោង \\(C\\) ។ សិក្សាទីតាំងរវាង \\(C\\) និង \\(L\\) ។',
                       'Show that the line \\(L: y=-x\\) is an oblique asymptote of \\(C\\), and study the position of \\(C\\) relative to \\(L\\).') },
        { k: '3', t: q('បង្ហាញថា \\(f\'(x)<0\\) គឺដឹងថា \\(x^2+4-4\\ln x>0\\) ចំពោះ \\(x>0\\) ។ សង់តារាងអថេរភាពនៃ \\(f\\) ។',
                       'Show that \\(f\'(x)<0\\) amounts to \\(x^2+4-4\\ln x>0\\) for \\(x>0\\), then draw the table of variation of \\(f\\).') }
      ] },
    { n: 12, extra: true,
      q: q('រកតម្លៃប៉ារ៉ាម៉ែត្រ៖', 'Find the value of the parameter:'),
      p: [
        part('a', '\\text{Find }a\\text{ so that } f(x)=ax^2+3x\\text{ has } f\'(1)=7'),
        part('b', '\\text{Find }a,b\\text{ so that } f(x)=x^3+ax^2+bx\\text{ has a maximum at }x=1\\text{ and a minimum at }x=3'),
        part('c', '\\text{Find }k\\text{ so that the tangent to } y=x^2+kx\\text{ at }x=1\\text{ is parallel to } y=5x')
      ] },
    { n: 13, extra: true,
      q: q('ដោះស្រាយបញ្ហាអនុវត្ត៖', 'Applied problems:'),
      p: [
        { k: 'a', t: q('វត្ថុមួយធ្វើចលនាតាមច្បាប់ \\(s(t)=t^3-6t^2+9t\\) (ម៉ែត្រ វិនាទី) ។ រកល្បឿន និងសំទុះនៅ \\(t=2\\) ។',
                       'An object moves according to \\(s(t)=t^3-6t^2+9t\\) (metres, seconds). Find its velocity and acceleration at \\(t=2\\).') },
        { k: 'b', t: q('ចតុកោណកែងមួយមានបរិវេណ ២០ ស.ម ។ រកវិមាត្រដែលធ្វើឲ្យក្រឡាផ្ទៃធំបំផុត។',
                       'A rectangle has perimeter 20 cm. Find the dimensions that make its area largest.') },
        { k: 'c', t: q('ប្រើឌីផេរ៉ង់ស្យែលដើម្បីប៉ាន់ស្មាន \\(\\sqrt[3]{8.06}\\) ។',
                       'Use the differential to approximate \\(\\sqrt[3]{8.06}\\).') }
      ] }
  ];

  global.MATH_BANK = { key: 'deriv', lesson: LESSON, mc: [], exercises: WR };
})(window);
