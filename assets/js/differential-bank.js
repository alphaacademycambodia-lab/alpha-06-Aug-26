/* Alpha Academy Cambodia — Grade 12 differential equations
   ---------------------------------------------------------------------------
   Transcribed from មេរៀនទី៦ សមីការឌីផេរ៉ង់ស្យែល (pp. 174–202) and
   មេរៀនទី៧ សមីការឌីផេរ៉ង់ស្យែល លំដាប់២ (pp. 203–234) of the Preah Sisowath
   NGS summary workbook. Both chapters live on one page because they are one
   topic for the student: sections 1–5 are first order, 6–8 are second order.

   Shape is the shared window.MATH_BANK contract read by math-lesson.js:
     lesson    [{ id, h:{km,en}, blocks:[…] }]
     mc        [{ n, kind:'mc', q:{km,en}, o:['tex', …] }]
     exercises [{ n, q:{km,en}, src?, extra?, p:[{ k, t:{km,en} }] }]

   Multiple choice 1–20 are the first-order set, 21–36 the second-order set.
   Written 1–30 are first order, 31–62 second order. Numbering runs straight
   through so a done-mark can never mean two different exercises.

   The workbook carries no answer key, so nothing here claims a right answer.
*/
(function (global) {
  'use strict';

  /* ==================================================================== 1
     LESSON                                                               */
  var LESSON = [
    { id: 'first-basic',
      h: { km: 'សមីការមានទម្រង់ dy/dx = f(x)',
           en: 'Equations of the form dy/dx = f(x)' },
      blocks: [
        { t: 'p',
          km: 'នេះជាទម្រង់ងាយបំផុត។ ដេរីវេត្រូវបានឲ្យរួច ហើយយើងគ្រាន់តែរកអាំងតេក្រាលអនិយ័តទាំងសងខាង។',
          en: 'This is the simplest form. The derivative is given outright, so we integrate both sides.' },
        { t: 'ul', items: [
          { km: 'សរសេរ dy/dx = f(x) ជាថ្មី ទៅជា dy = f(x)dx', en: 'Rewrite dy/dx = f(x) as dy = f(x)dx' },
          { tex: '\\int dy = \\int f(x)\\,dx \\quad\\Longrightarrow\\quad y = \\int f(x)\\,dx + c,\\; c \\in \\mathbb{R}' }
        ] },
        { t: 'p',
          km: 'ចម្លើយ y = ∫f(x)dx + c ហៅថាចម្លើយទូទៅ ព្រោះវាមានចំនួនថេរ c មិនកំណត់។ បើគេឲ្យលក្ខខណ្ឌដើម y(x₀) = y₀ គេជំនួសវាចូល ដើម្បីរក c ទៅជាចម្លើយពិសេស។',
          en: 'The answer y = ∫f(x)dx + c is the general solution, because c is left free. Given an initial condition y(x₀) = y₀, substitute it to pin c down and obtain the particular solution.' },
        { t: 'm', tex: 'c = y_0 - F(x_0) \\quad\\Longrightarrow\\quad y = \\int f(x)\\,dx + y_0 - F(x_0)' },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y\' = 3x²/(x³ − 1)។',
          en: 'Solve y\' = 3x²/(x³ − 1).',
          steps: [
            'y = \\int \\frac{3x^2}{x^3-1}\\,dx',
            'y = \\ln\\left|x^3-1\\right| + c'
          ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ dy/dx = 3x² + 4x − 5។',
          en: 'Solve dy/dx = 3x² + 4x − 5.',
          steps: [
            'y = \\int \\left(3x^2+4x-5\\right)dx',
            'y = x^3 + 2x^2 - 5x + c'
          ] }
      ] },

    { id: 'separable',
      h: { km: 'សមីការលំដាប់ទី១ ដែលអាចញែកអថេរបាន',
           en: 'Separable first-order equations' },
      blocks: [
        { t: 'p',
          km: 'និយមន័យ៖ សមីការឌីផេរ៉ង់ស្យែលលំដាប់ទី១ ដែលអាចញែកអថេរបាន ជាសមីការដែលសរសេរបានក្នុងទម្រង់ទូទៅខាងក្រោម។',
          en: 'Definition: a first-order equation is separable when it can be written so that each variable sits on its own side.' },
        { t: 'm', tex: 'g(y)\\frac{dy}{dx} = f(x) \\qquad\\text{or}\\qquad g(y)\\,dy = f(x)\\,dx' },
        { t: 'p',
          km: 'របៀបដោះស្រាយ៖ សរសេរឡើងវិញឲ្យអថេរនីមួយៗនៅម្ខាងៗ រួចរកអាំងតេក្រាលទាំងសងខាង។',
          en: 'Method: separate the variables, then integrate each side.' },
        { t: 'm', tex: '\\int g(y)\\,dy = \\int f(x)\\,dx \\quad\\Longrightarrow\\quad G(y) = F(x) + c' },
        { t: 'note',
          km: 'ដែល G ជាព្រីមីទីវនៃ g និង F ជាព្រីមីទីវនៃ f។ ជាទូទៅ ចម្លើយចេញមកជាទំនាក់ទំនងរវាង x និង y មិនមែនជា y = … ដោយផ្ទាល់ទេ។',
          en: 'G is an antiderivative of g and F of f. The answer usually comes out as a relation between x and y rather than as y = … directly.' },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y\' = x²y³។',
          en: 'Solve y\' = x²y³.',
          steps: [
            '\\frac{dy}{y^3} = x^2\\,dx',
            '-\\frac{1}{2y^2} = \\frac{x^3}{3} + c'
          ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ dy/dx = 2x(y+1)/y តាមលក្ខខណ្ឌដើម y(2) = 0។',
          en: 'Solve dy/dx = 2x(y+1)/y with y(2) = 0.',
          steps: [
            '\\int \\frac{y}{y+1}\\,dy = \\int 2x\\,dx',
            'y - \\ln|y+1| = x^2 + c, \\qquad c = -4'
          ] }
      ] },

    { id: 'first-homog',
      h: { km: 'សមីការលីនេអ៊ែរលំដាប់ទី១ មេគុណថេរ អូម៉ូសែន',
           en: 'First-order linear homogeneous, constant coefficient' },
      blocks: [
        { t: 'p',
          km: 'និយមន័យ៖ សមីការលីនេអ៊ែរលំដាប់ទី១ មេគុណថេរ អូម៉ូសែន ជាសមីការដែលមានរាងទូទៅ y\' + ay = 0 ដែល a ជាចំនួនថេរ។',
          en: 'A first-order linear homogeneous equation with constant coefficient has the form y\' + ay = 0, with a constant.' },
        { t: 'm', tex: 'y\' + ay = 0 \\quad\\Longrightarrow\\quad y = Ae^{-ax}, \\qquad A \\in \\mathbb{R}' },
        { t: 'p',
          km: 'ចម្លើយទូទៅគឺ y = Ae^(−ax) ដែល A ជាចំនួនថេរណាមួយក៏បាន។ រាល់តម្លៃ A ផ្សេងៗ ផ្ដល់ចម្លើយផ្សេងៗគ្នា ហើយ A កំណត់បានពីលក្ខខណ្ឌដើម។',
          en: 'Every value of A gives a solution; an initial condition fixes which one.' },
        { t: 'eg',
          km: 'រកចម្លើយទូទៅនៃសមីការ y\' − y = 0 រួចរកចម្លើយពិសេសតាមលក្ខខណ្ឌដើម y(0) = 1។',
          en: 'Find the general solution of y\' − y = 0, then the particular solution with y(0) = 1.',
          steps: [
            'y = Ae^{x}',
            'y(0) = A = 1 \\quad\\Longrightarrow\\quad y = e^{x}'
          ] }
      ] },

    { id: 'first-nonhomog',
      h: { km: 'សមីការលីនេអ៊ែរលំដាប់ទី១ មិនអូម៉ូសែន y\' + ay = p(x)',
           en: 'First-order linear non-homogeneous: y\' + ay = p(x)' },
      blocks: [
        { t: 'p',
          km: 'ដើម្បីដោះស្រាយ y\' + ay = p(x) ដែល p(x) ≠ 0 ហើយ p(x) ជាអនុគមន៍ពហុធា គេត្រូវ៖',
          en: 'To solve y\' + ay = p(x) with p(x) a non-zero polynomial:' },
        { t: 'ul', items: [
          { km: 'រកចម្លើយទូទៅ y_c នៃសមីការអូម៉ូសែន y\' + ay = 0', en: 'find the complementary solution y_c of y\' + ay = 0' },
          { km: 'រកចម្លើយពិសេស y_p ដោយសន្មតថា y_p ជាពហុធាដឺក្រេដូច p(x) រួចជំនួស y_p និង y_p\' ចូលសមីការ', en: 'find a particular solution y_p by taking a polynomial of the same degree as p(x) and substituting it in' },
          { km: 'ចម្លើយទូទៅគឺ y = y_c + y_p', en: 'the general solution is y = y_c + y_p' }
        ] },
        { t: 'm', tex: 'y = y_c + y_p, \\qquad y_c = Ae^{-ax}' },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y\' + 3y = 3x − 2។',
          en: 'Solve y\' + 3y = 3x − 2.',
          steps: [
            'y_c = Ae^{-3x}, \\qquad y_p = ax + b',
            'a + 3(ax+b) = 3x-2 \\;\\Longrightarrow\\; a = 1,\\; b = -1',
            'y = Ae^{-3x} + x - 1'
          ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y\' − 2y = x² + 3x + 2។',
          en: 'Solve y\' − 2y = x² + 3x + 2.',
          steps: [
            'y_c = Ae^{2x}, \\qquad y_p = ax^2 + bx + c',
            'y = Ae^{2x} - \\frac{1}{2}x^2 - 2x - 3'
          ] }
      ] },

    { id: 'variation',
      h: { km: 'វិធីប្រែប្រួលចំនួនថេរ និងកត្តាអាំងតេក្រាល',
           en: 'Variation of constants, and the integrating factor' },
      blocks: [
        { t: 'p',
          km: 'នៅពេល p(x) មិនមែនជាពហុធា (ឧទាហរណ៍ជាអនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល ឬត្រីកោណមាត្រ) ការសន្មតចម្លើយពិសេសមិនងាយទេ។ វិធីប្រែប្រួលចំនួនថេរដោះស្រាយករណីនេះ។',
          en: 'When p(x) is not a polynomial — exponential or trigonometric, say — guessing a particular solution is awkward. Variation of constants handles that case.' },
        { t: 'ul', items: [
          { km: 'ក្នុងចម្លើយ y = Ae^(−ax) ជំនួសចំនួនថេរ A ដោយអនុគមន៍ A(x)', en: 'in y = Ae^(−ax), replace the constant A by a function A(x)' },
          { km: 'គណនា y\' រួចជំនួស y និង y\' ចូលក្នុងសមីការ ដើម្បីទាញរក A(x)', en: 'differentiate and substitute back to recover A(x)' }
        ] },
        { t: 'm', tex: 'A\'(x) = e^{ax}p(x) \\;\\Longrightarrow\\; A(x) = \\int e^{ax}p(x)\\,dx + c' },
        { t: 'm', tex: 'y = ce^{-ax} + e^{-ax}\\int e^{ax}p(x)\\,dx' },
        { t: 'p',
          km: 'កត្តាអាំងតេក្រាល៖ កត្តាអាំងតេក្រាលគឺជាអនុគមន៍ដែលត្រូវបានគេជ្រើសរើស ដើម្បីសម្រួលដល់ការដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល។ សម្រាប់ y\' + ay = p(x) កត្តាអាំងតេក្រាលគឺ e^(∫a dx)។',
          en: 'The integrating factor is a multiplier chosen to make the left side an exact derivative. For y\' + ay = p(x) it is e^(∫a dx).' },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y\' − y = eˣ ដោយប្រើកត្តាអាំងតេក្រាល។',
          en: 'Solve y\' − y = eˣ with an integrating factor.',
          steps: [
            '\\mu = e^{\\int(-1)dx} = e^{-x}',
            '\\left(e^{-x}y\\right)\' = 1 \\;\\Longrightarrow\\; e^{-x}y = x + c',
            'y = xe^{x} + ce^{x}, \\qquad c \\in \\mathbb{R}'
          ] },
        { t: 'note',
          km: 'សម្គាល់៖ គេច្រើនយកកត្តាអាំងតេក្រាលមកប្រើ ដើម្បីដោះស្រាយសមីការលីនេអ៊ែរមិនអូម៉ូសែន ករណីអង្គម្ខាងជាអនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល។',
          en: 'The integrating factor is the usual tool for a non-homogeneous linear equation whose right-hand side is exponential.' }
      ] },

    { id: 'second-homog',
      h: { km: 'សមីការលំដាប់ទី២ អូម៉ូសែន ay″ + by′ + cy = 0',
           en: 'Second order homogeneous: ay″ + by′ + cy = 0' },
      blocks: [
        { t: 'p',
          km: 'ដើម្បីដោះស្រាយ ay″ + by′ + cy = 0 គេត្រូវរកឫសនៃសមីការសម្គាល់ ar² + br + c = 0 រួចអានចម្លើយតាមសញ្ញានៃឌីស្គ្រីមីណង់ Δ។',
          en: 'Solve ay″ + by′ + cy = 0 by finding the roots of the characteristic equation ar² + br + c = 0, then reading off the answer from the sign of Δ.' },
        { t: 'm', tex: '\\lambda^2 + b\\lambda + c = 0, \\qquad \\Delta = b^2 - 4ac' },
        { t: 'ul', items: [
          { tex: '\\Delta > 0:\\; \\lambda_1=\\alpha,\\;\\lambda_2=\\beta \\;\\Longrightarrow\\; y = Ae^{\\alpha x} + Be^{\\beta x}' },
          { tex: '\\Delta = 0:\\; \\lambda_1=\\lambda_2=\\alpha \\;\\Longrightarrow\\; y = (Ax+B)e^{\\alpha x}' },
          { tex: '\\Delta < 0:\\; \\lambda = \\alpha \\pm i\\beta \\;\\Longrightarrow\\; y = (A\\cos\\beta x + B\\sin\\beta x)e^{\\alpha x}' }
        ] },
        { t: 'note',
          km: 'ក្នុងគ្រប់ករណី A និង B ជាចំនួនថេរពិត ហើយកំណត់បានដោយលក្ខខណ្ឌដើមពីរ ជាទូទៅ y(x₀) និង y′(x₀)។',
          en: 'A and B are real constants in every case, fixed by two initial conditions — usually y(x₀) and y′(x₀).' },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ 3y″ − 10y′ + 3y = 0។',
          en: 'Solve 3y″ − 10y′ + 3y = 0.',
          steps: [
            '3\\lambda^2 - 10\\lambda + 3 = 0 \\;\\Longrightarrow\\; \\lambda = 3 \\text{ or } \\lambda = \\tfrac{1}{3}',
            'y = Ae^{3x} + Be^{x/3}'
          ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y″ − 6y′ + 9y = 0។',
          en: 'Solve y″ − 6y′ + 9y = 0.',
          steps: [
            '\\lambda^2 - 6\\lambda + 9 = 0 \\;\\Longrightarrow\\; \\lambda = 3 \\text{ (double)}',
            'y = (Ax+B)e^{3x}'
          ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y″ + 16y = 0 តាមលក្ខខណ្ឌដើម y(π/4) = √3 និង y′(π/4) = 4។',
          en: 'Solve y″ + 16y = 0 with y(π/4) = √3 and y′(π/4) = 4.',
          steps: [
            '\\lambda^2 + 16 = 0 \\;\\Longrightarrow\\; \\lambda = \\pm 4i',
            'y = A\\cos 4x + B\\sin 4x'
          ] }
      ] },

    { id: 'second-factor',
      h: { km: 'សមីការលំដាប់ទី២ មិនអូម៉ូសែន — វិធីសរសេរជាកត្តា',
           en: 'Second order non-homogeneous — the factoring method' },
      blocks: [
        { t: 'p',
          km: 'សមីការឌីផេរ៉ង់ស្យែលលីនេអ៊ែរលំដាប់ទី២ មិនអូម៉ូសែន និងមានមេគុណថេរ មានរាងទូទៅ y″ + by′ + cy = p(x) ដែល p(x) ≠ 0។',
          en: 'A second-order linear non-homogeneous equation with constant coefficients has the form y″ + by′ + cy = p(x), p(x) ≠ 0.' },
        { t: 'p',
          km: 'បើសមីការសម្គាល់ λ² + bλ + c = 0 មានឫសពិតជាចំនួនពិតផ្សេងគ្នា λ₁ = α និង λ₂ = β នោះ (E) អាចសរសេរជា៖',
          en: 'If the characteristic equation has distinct real roots λ₁ = α and λ₂ = β, the equation can be rewritten as:' },
        { t: 'm', tex: '\\left(y\'-\\alpha y\\right)\' - \\beta\\left(y\'-\\alpha y\\right) = p(x)' },
        { t: 'ul', items: [
          { km: 'តាង Z = y′ − αy គេបាន Z′ − βZ = p(x) ជាសមីការលំដាប់ទី១', en: 'set Z = y′ − αy, giving the first-order equation Z′ − βZ = p(x)' },
          { km: 'ដោះស្រាយ Z′ − βZ = p(x) តាមវិធីប្រែប្រួលចំនួនថេរ គេបាន Z = q(x)', en: 'solve it by variation of constants to get Z = q(x)' },
          { km: 'ដោះស្រាយ y′ − αy = q(x) ដែលជាសមីការលំដាប់ទី១ ម្ដងទៀត', en: 'then solve the first-order equation y′ − αy = q(x)' }
        ] },
        { t: 'eg',
          km: 'ដោះស្រាយសមីការ y″ − y = 2x។',
          en: 'Solve y″ − y = 2x.',
          steps: [
            '\\lambda^2 - 1 = 0 \\;\\Longrightarrow\\; \\alpha = 1,\\; \\beta = -1',
            'Z = y\' - y \\;\\Longrightarrow\\; Z\' + Z = 2x'
          ] }
      ] },

    { id: 'second-undetermined',
      h: { km: 'វិធីស្វែងរកចម្លើយពិសេស — មេគុណមិនកំណត់',
           en: 'Undetermined coefficients' },
      blocks: [
        { t: 'p',
          km: 'វិធីនេះស្រដៀងនឹងលំដាប់ទី១៖ ស្វែងរកចម្លើយពិសេស y_p ដែលមានទំរង់ដូចអង្គទី២ p(x) រួចបូកនឹងចម្លើយទូទៅនៃសមីការអូម៉ូសែន។',
          en: 'The same idea as in first order: look for a particular solution y_p shaped like the right-hand side p(x), then add the complementary solution.' },
        { t: 'm', tex: 'y = y_c + y_p' },
        { t: 'ul', items: [
          { km: 'p(x) ជាពហុធាដឺក្រេ n → យក y_p ជាពហុធាដឺក្រេ n', en: 'p(x) a polynomial of degree n → take y_p a polynomial of degree n' },
          { km: 'p(x) = ke^(mx) → យក y_p = Ae^(mx)', en: 'p(x) = ke^(mx) → take y_p = Ae^(mx)' },
          { km: 'p(x) មាន cos ឬ sin → យក y_p = A cos + B sin', en: 'p(x) trigonometric → take y_p = A cos + B sin' }
        ] },
        { t: 'eg',
          km: 'គេមានសមីការ y″ − 2y′ − 3y = 6x² − x។ រកចំនួនពិត a, b និង c ដើម្បីឲ្យ y_p = ax² + bx + c ជាចម្លើយពិសេស រួចទាញរកចម្លើយទូទៅ។',
          en: 'For y″ − 2y′ − 3y = 6x² − x, find a, b and c so that y_p = ax² + bx + c is a particular solution, then give the general solution.',
          steps: [
            'y_c = Ae^{3x} + Be^{-x}',
            'y = y_c + y_p'
          ] },
        { t: 'note',
          km: 'បើទម្រង់ដែលសន្មតស្ថិតក្នុងចម្លើយអូម៉ូសែនរួចហើយ ត្រូវគុណនឹង x មុននឹងជំនួស។',
          en: 'If the guessed shape already appears in the complementary solution, multiply it by x before substituting.' }
      ] }
  ];

  /* ==================================================================== 2
     MULTIPLE CHOICE                                                      */
  function mc(n, km, en, opts) {
    return { n: n, kind: 'mc', q: { km: km, en: en }, o: opts };
  }

  var MC = [
    /* --- first order, pp. 178–180 --- */
    mc(1, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'+\\alpha y = 0\\)',
          'Give the general solution of \\(y\'+\\alpha y = 0\\)',
       ['y = Ae^{-\\alpha x},\\, A \\in \\mathbb{R}', 'y = Ae^{\\alpha x},\\, A \\in \\mathbb{R}',
        'y = e^{-\\alpha x}', 'y = e^{A\\alpha x},\\, A \\in \\mathbb{R}']),
    mc(2, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'-\\ln 2\\,y = 0\\)',
          'Give the general solution of \\(y\'-\\ln 2\\,y = 0\\)',
       ['y = Ae^{\\ln 2},\\, A \\in \\mathbb{R}', 'y = 2Ae^{x},\\, A \\in \\mathbb{R}',
        'y = A\\left(2\\right)^{x},\\, A \\in \\mathbb{R}', 'y = Ae^{\\ln 2x} + c,\\, A,c \\in \\mathbb{R}']),
    mc(3, 'រកចម្លើយទូទៅនៃសមីការ \\(\\dfrac{dy}{dx} = 2xy\\)',
          'Find the general solution of \\(\\dfrac{dy}{dx} = 2xy\\)',
       ['y = Ae^{x^2},\\, A \\in \\mathbb{R}', 'y = Ae^{2x},\\, A \\in \\mathbb{R}',
        'y = e^{-x^2}', 'y = e^{-2x},\\, A \\in \\mathbb{R}']),
    mc(4, 'ដោះស្រាយសមីការ \\(y\' = 5x^4 - 2x\\)',
          'Solve \\(y\' = 5x^4 - 2x\\)',
       ['x^5 - x^2 + c', 'x^4 - x^2 + c', 'x^5 - x^2', '5x^5 - 2x^2 + c']),
    mc(5, 'ដោះស្រាយសមីការ \\(\\dfrac{dy}{dx} = \\dfrac{2x-1}{x^2-x+1}\\)',
          'Solve \\(\\dfrac{dy}{dx} = \\dfrac{2x-1}{x^2-x+1}\\)',
       ['\\ln\\left|x^2-x+1\\right| + c', 'e^{\\left|x^2-x+1\\right|+c}',
        '\\ln\\left|x^2+x+1\\right| + c', '\\ln\\left|x^2-x+1\\right|']),
    mc(6, 'ដោះស្រាយសមីការ \\(\\dfrac{dy}{dx} = e^{-y}(2x-4),\\; y(0)=0\\)',
          'Solve \\(\\dfrac{dy}{dx} = e^{-y}(2x-4),\\; y(0)=0\\)',
       ['\\ln\\left|x^2-x+1\\right| + c', 'e^{\\left|x^2-x+1\\right|+c}',
        '\\ln\\left|x^2+x+1\\right| + c', '\\ln\\left|x^2-x+1\\right|']),
    mc(7, 'រកចម្លើយពិសេសនៃសមីការ \\(\\dfrac{dy}{dx} = y^2e^{2x},\\; y(0)=1\\)',
          'Find the particular solution of \\(\\dfrac{dy}{dx} = y^2e^{2x},\\; y(0)=1\\)',
       ['\\frac{2}{3-e^{2x}}', '-\\frac{2}{3-e^{2x}}', '-\\frac{2}{3+e^{2x}}', '\\frac{2}{3-e^{-2x}}']),
    mc(8, 'តើជម្រើសណាមួយជាកត្តាអាំងតេក្រាលនៃសមីការ \\(\\dfrac{dy}{dx} - \\dfrac{2y}{x} = 3x^2\\)',
          'Which is the integrating factor of \\(\\dfrac{dy}{dx} - \\dfrac{2y}{x} = 3x^2\\)?',
       ['\\frac{1}{x^2}', '-\\frac{1}{x^2}', '\\frac{1}{x^2+1}', 'x^2']),
    mc(9, 'កំណត់កត្តាអាំងតេក្រាលនៃសមីការ \\(\\left(e^{2x}+1\\right)\\dfrac{dy}{dx} + 4e^{2x}y = x\\)',
          'Give the integrating factor of \\(\\left(e^{2x}+1\\right)\\dfrac{dy}{dx} + 4e^{2x}y = x\\)',
       ['\\left(e^{2x}-1\\right)^2', '\\left(e^{2x}+1\\right)^2', '\\left(e^{2x}-1\\right)', '\\left(e^{2x}+1\\right)']),
    mc(10, 'កំណត់កត្តាអាំងតេក្រាលនៃសមីការ \\(x\\dfrac{dy}{dx} - 2y = x^3\\ln x\\)',
           'Give the integrating factor of \\(x\\dfrac{dy}{dx} - 2y = x^3\\ln x\\)',
       ['\\frac{1}{x^2}', '-\\frac{1}{x^2}', '\\frac{1}{x^2+1}', 'x^2']),
    mc(11, 'កំណត់ទម្រង់ស្ដង់ដានៃសមីការ \\(\\cos x\\dfrac{dy}{dx} + y\\sin x = e^x\\cos^2 x\\)',
           'Put \\(\\cos x\\dfrac{dy}{dx} + y\\sin x = e^x\\cos^2 x\\) in standard form',
       ['\\frac{dy}{dx} + y\\tan x = e^x\\cos x', '\\sin x\\frac{dy}{dx} + y\\cos x = e^x\\sin x',
        '(1+\\sin x)\\frac{dy}{dx} + 4y = e^x', '-x\\frac{dy}{dx} + y\\cos x = e^x\\sin x']),
    mc(12, 'តើជម្រើសណាបង្ហាញការដោះស្រាយសមីការតាមកត្តាអាំងតេក្រាល \\(x\\dfrac{dy}{dx} + 3y = e^x\\)',
           'Which line shows \\(x\\dfrac{dy}{dx} + 3y = e^x\\) multiplied by its integrating factor?',
       ['x^4\\frac{dy}{dx} + 3x^3y = x^3e^x', 'x^3\\frac{dy}{dx} + 3x^2y = x^2e^x',
        '\\frac{dy}{dx} + \\frac{3}{x}y = \\frac{e^x}{x}', '-x^4\\frac{dy}{dx} + 3x^3y = -x^3e^x']),
    mc(13, 'តើជម្រើសណាមួយត្រឹមត្រូវក្នុងការគុណកត្តាអាំងតេក្រាលនៃសមីការ \\(x\\dfrac{dy}{dx} - 2y = x^3\\ln x\\)',
           'Which line correctly multiplies \\(x\\dfrac{dy}{dx} - 2y = x^3\\ln x\\) by its integrating factor?',
       ['x^4\\frac{dy}{dx} + 3x^3y = x^3e^x', 'x^3\\frac{dy}{dx} + 3x^2y = x^2e^x',
        '\\frac{dy}{dx} + \\frac{3}{x}y = \\frac{e^x}{x}', '-x^4\\frac{dy}{dx} + 3x^3y = -x^3e^x']),
    mc(14, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(\\dfrac{dy}{dx} - (\\cot x)y = \\sin 2x\\)',
           'Give the general solution of \\(\\dfrac{dy}{dx} - (\\cot x)y = \\sin 2x\\)',
       ['y = 2\\sin^2 x + A\\sin x', 'y = -2\\sin^2 x - A\\sin x',
        'y = 2\\sin^2 x - A\\sin x', 'y = 2\\cos^2 x - A\\sin x,\\; A \\in \\mathbb{R}']),
    mc(15, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(x\\dfrac{dy}{dx} + 3y = x^2\\)',
           'Give the general solution of \\(x\\dfrac{dy}{dx} + 3y = x^2\\)',
       ['\\frac{x^2}{5} + \\frac{c}{x^3}', '\\frac{x^3}{5} + \\frac{c}{x^2}',
        '\\frac{x^3}{5} + \\frac{3}{x^2} + c', '\\frac{x^3}{5} + \\frac{4}{x^2},\\; A \\in \\mathbb{R}']),
    mc(16, 'ចម្លើយពិសេសនៃសមីការ \\(\\dfrac{dy}{dx} + 2y = x\\) គឺ',
           'A particular solution of \\(\\dfrac{dy}{dx} + 2y = x\\) is',
       ['e^{-2x} + 2x - \\frac{1}{4}', 'e^{2x} + 2x - \\frac{1}{4}',
        'e^{-2x} - 2x + \\frac{1}{4}', 'e^{-2x} + 2x + \\frac{1}{4}']),
    mc(17, 'រកចម្លើយពិសេសនៃសមីការ \\(\\left(x^2+1\\right)\\dfrac{dy}{dx} + xy = x\\left(x^2+1\\right),\\; y(0)=0\\)',
           'Find the particular solution of \\(\\left(x^2+1\\right)\\dfrac{dy}{dx} + xy = x\\left(x^2+1\\right),\\; y(0)=0\\)',
       ['\\frac{1}{3}\\left(x^2+1\\right)^{3/2} - \\frac{1}{3}', 'e^{2x} + 2x - \\frac{1}{4}',
        'e^{-2x} - 2x + \\frac{1}{4}', 'e^{-2x} + 2x + \\frac{1}{4}']),
    mc(18, 'រកចម្លើយពិសេសនៃសមីការ \\(\\cos x\\dfrac{dy}{dx} + y\\sin x = e^x\\cos^2 x,\\; y(0)=2\\)',
           'Find the particular solution of \\(\\cos x\\dfrac{dy}{dx} + y\\sin x = e^x\\cos^2 x,\\; y(0)=2\\)',
       ['e^{-2x} + 2x - \\frac{1}{4}', 'y = \\cos x\\left(1+e^x\\right)',
        'y = \\cos x\\left(1-e^x\\right)', 'y = \\cos x - e^x\\cos x']),
    mc(19, 'បើ \\(y = \\dfrac{1}{e^{2x}}\\left[\\dfrac{x^4}{4} + \\ln|x| + c\\right]\\) ជាចម្លើយទូទៅនៃសមីការឌីផេរ៉ង់ស្យែលមួយ។ កំណត់តម្លៃ \\(c\\) បើគេអោយ \\(x=1,\\,y=0\\)',
           'If \\(y = \\dfrac{1}{e^{2x}}\\left[\\dfrac{x^4}{4} + \\ln|x| + c\\right]\\) is the general solution of a differential equation, find \\(c\\) given \\(x=1,\\,y=0\\)',
       ['c = -\\frac{1}{4}', 'c = \\frac{1}{4}', 'c = \\frac{3}{4}', 'c = -\\frac{3}{4}']),
    mc(20, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(\\dfrac{d\\theta}{dt} - 3\\theta = 2e^{3t}\\)',
           'Give the general solution of \\(\\dfrac{d\\theta}{dt} - 3\\theta = 2e^{3t}\\)',
       ['\\theta = e^{3t}\\left(2t+c\\right)', '\\theta = e^{3t}\\left(2t\\right)',
        '\\theta = e^{2t}\\left(2t+c\\right)', '\\theta = e^{3t}\\left(\\tfrac{1}{2}t+c\\right)']),

    /* --- second order, pp. 207–209 --- */
    mc(21, 'តើជម្រើសខាងក្រោមណាមួយត្រឹមត្រូវក្នុងការតាងសមីការសម្គាល់នៃសមីការ \\(3y\'\'+y\'-4y = 0\\)',
           'Which is the characteristic equation of \\(3y\'\'+y\'-4y = 0\\)?',
       ['3\\lambda^2 + \\lambda - 4 = 0', '3\\lambda^2 + \\lambda = 0',
        '3\\lambda^2 - 4 = 0', '3\\lambda + 1 = 0']),
    mc(22, 'តើជម្រើសណាមួយជាឫសនៃសមីការសម្គាល់ \\(y\'\'+2y\'-3y = 0\\)',
           'Which are the roots of the characteristic equation of \\(y\'\'+2y\'-3y = 0\\)?',
       ['\\lambda = -1,\\; \\lambda = 3', '\\lambda = -1,\\; \\lambda = -3',
        '\\lambda = 1,\\; \\lambda = 3', '\\lambda = 1,\\; \\lambda = -3']),
    mc(23, 'ឫសនៃសមីការសម្គាល់ \\(\\lambda^2+b\\lambda+c=0\\) នៃសមីការ \\(ay\'\'+by\'+cy=0\\) ករណី \\(\\Delta>0\\;(\\lambda_1=\\alpha,\\lambda_2=\\beta)\\)',
           'For \\(ay\'\'+by\'+cy=0\\) with \\(\\Delta>0\\), \\(\\lambda_1=\\alpha,\\lambda_2=\\beta\\), the solution is',
       ['y = Ae^{\\alpha x} + Be^{\\beta x}', 'y = \\left(Ax+B\\right)e^{\\alpha x}',
        'y = \\left(A\\cos\\beta x + B\\sin\\beta x\\right)e^{\\alpha x}', 'y = \\left(A+B\\right)e^{\\alpha x}']),
    mc(24, 'ឫសនៃសមីការសម្គាល់ \\(r^2+br+c=0\\) នៃសមីការ \\(ay\'\'+by\'+cy=0\\) ករណី \\(\\Delta=0\\;(\\lambda_1=\\lambda_2=\\alpha)\\)',
           'For \\(ay\'\'+by\'+cy=0\\) with \\(\\Delta=0\\), \\(\\lambda_1=\\lambda_2=\\alpha\\), the solution is',
       ['y = Ae^{\\alpha x} + Be^{\\beta x}', 'y = \\left(Ax+B\\right)e^{\\alpha x}',
        'y = \\left(A\\cos\\beta x + B\\sin\\beta x\\right)e^{\\alpha x}', 'y = \\left(A+B\\right)e^{\\alpha x}']),
    mc(25, 'ឫសនៃសមីការសម្គាល់ \\(r^2+br+c=0\\) នៃសមីការ \\(ay\'\'+by\'+cy=0\\) ករណី \\(\\Delta<0\\;(\\lambda=\\alpha\\pm\\beta i)\\)',
           'For \\(ay\'\'+by\'+cy=0\\) with \\(\\Delta<0\\), \\(\\lambda=\\alpha\\pm\\beta i\\), the solution is',
       ['y = Ae^{\\alpha x} + Be^{\\beta x}', 'y = \\left(Ax+B\\right)e^{\\alpha x}',
        'y = \\left(A\\cos\\beta x + B\\sin\\beta x\\right)e^{\\alpha x}', 'y = \\left(A+B\\right)e^{\\alpha x}']),
    mc(26, 'សមីការឌីផេរ៉ង់ស្យែលលីនេអ៊ែរលំដាប់ទី២ មិនអូម៉ូសែន និងមានមេគុណថេរ មានរាងទូទៅ',
           'A second-order linear non-homogeneous equation with constant coefficients has the general form',
       ['ay\'\'+by\'+cy = 0', 'ay\'\'+by\'+cy = p(x)',
        'y = \\left(A\\cos\\beta x + B\\sin\\beta x\\right)e^{\\alpha x}', 'ay\'+by = p(x)']),
    mc(27, 'រកចម្លើយទូទៅនៃសមីការ \\(2y\'\'-10y = y\'\\)',
           'Find the general solution of \\(2y\'\'-10y = y\'\\)',
       ['y = Ae^{\\frac{5}{2}x} + Be^{-2x}', 'y = Ae^{5x} + Be^{-2x}',
        'y = \\left(Ax+B\\right)e^{-2x}', 'y = \\left(A\\cos\\tfrac{5}{3}x + B\\sin\\tfrac{5}{3}x\\right)e^{-2x}']),
    mc(28, 'រកចម្លើយទូទៅនៃសមីការ \\(\\dfrac{d^2y}{dx^2} - 4\\dfrac{dy}{dx} + 13y = 0\\)',
           'Find the general solution of \\(\\dfrac{d^2y}{dx^2} - 4\\dfrac{dy}{dx} + 13y = 0\\)',
       ['y = e^{3x}\\left(A\\cos 2x + B\\sin 2x\\right)', 'y = \\left(Ax+B\\right)e^{2x}',
        'y = e^{2x}\\left(A\\cos 3x + B\\sin 3x\\right)', 'y = Ae^{2x} + Be^{3x}']),
    mc(29, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'\'-2y\'+y = 0\\)',
           'Give the general solution of \\(y\'\'-2y\'+y = 0\\)',
       ['y = \\left(Ax+B\\right)e^{2x}', 'y = \\left(A\\cos x + B\\sin x\\right)e^{-x}',
        'y = e^{2x}\\left(A\\cos 3x + B\\sin 3x\\right)', 'y = Ae^{x} + Bxe^{x}']),
    mc(30, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'\'+5y\'+6y = 0\\)',
           'Give the general solution of \\(y\'\'+5y\'+6y = 0\\)',
       ['y = \\left(A\\cos x + B\\sin x\\right)e^{-3x}', 'y = \\left(Ax+B\\right)e^{2x}',
        'y = Ae^{-3x} + Be^{-2x}', 'y = \\left(Ax+B\\right)e^{-3x}']),
    mc(31, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'\'-2y\'+5y = 0\\)',
           'Give the general solution of \\(y\'\'-2y\'+5y = 0\\)',
       ['y = \\left(A\\cos 2x + B\\sin 2x\\right)e^{-x}', 'y = \\left(A\\cos 2x + B\\sin 2x\\right)e^{x}',
        'y = \\left(Ax+B\\right)e^{2x}', 'y = Ae^{x} + Be^{2x}']),
    mc(32, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(9y\'\'+6y\'+y = 0\\)',
           'Give the general solution of \\(9y\'\'+6y\'+y = 0\\)',
       ['y = \\left(Ax+B\\right)e^{-x/3}', 'y = \\left(A\\cos x + B\\sin x\\right)e^{-x/3}',
        'y = \\left(Ax+B\\right)e^{x/3}', 'y = xe^{-x/3}']),
    mc(33, 'ចម្លើយទូទៅ \\(y = A\\cos 2x + B\\sin 2x\\) ផ្ទៀងផ្ទាត់សមីការ',
           '\\(y = A\\cos 2x + B\\sin 2x\\) satisfies which equation?',
       ['\\frac{d^2y}{dx^2} - 4y = 0', 'y\'\' - 4y = 0', 'y\'\' + 4y = 0', 'y\'\' - \\tfrac{1}{4}y = 0']),
    mc(34, 'កំណត់ចម្លើយទូទៅនៃសមីការ \\(y\'\'+2y\'+y = e^{-x}\\)',
           'Give the general solution of \\(y\'\'+2y\'+y = e^{-x}\\)',
       ['y = \\left(Ax+B\\right)e^{-x} + \\frac{x^2e^{-x}}{2}', 'y = \\left(Ax+B\\right)e^{-x}',
        'y = \\frac{x^2e^{-x}}{2}', 'y = \\left(Ax+B\\right)e^{-x} - \\frac{x^2e^{x}}{2}']),
    mc(35, '\\(y = Ae^{2x} + Be^{-3x}\\) ជាចម្លើយទូទៅនៃសមីការ',
           '\\(y = Ae^{2x} + Be^{-3x}\\) is the general solution of',
       ['\\frac{d^2y}{dx^2} + \\frac{dy}{dx} = 6y', 'x\\frac{d^2y}{dx^2} + \\frac{dy}{dx} = 6y',
        '\\frac{d^2y}{dx^2} + \\frac{dy}{dx} - y = 0', 'x\\frac{d^2y}{dx^2} + \\frac{dy}{dx} - y = 0']),
    mc(36, 'បើ \\(y = \\left(x+\\sqrt{1+x^2}\\right)^n\\) នោះ \\(\\left(1+x^2\\right)\\dfrac{d^2y}{dx^2} + x\\dfrac{dy}{dx} = \\underline{\\qquad}\\)',
           'If \\(y = \\left(x+\\sqrt{1+x^2}\\right)^n\\) then \\(\\left(1+x^2\\right)\\dfrac{d^2y}{dx^2} + x\\dfrac{dy}{dx} = \\underline{\\qquad}\\)',
       ['-y', 'n^2y', '2x^2y', '-n^2y'])
  ];

  /* ==================================================================== 3
     WRITTEN EXERCISES                                                    */
  function wr(n, km, en, parts, extra) {
    var o = { n: n, q: { km: km, en: en }, p: parts || [] };
    if (extra) { o.extra = true; }
    return o;
  }
  /* One-language part: the maths is the same in Khmer and English. */
  function m(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }
  function p2(k, km, en) { return { k: k, t: { km: km, en: en } }; }

  var WR = [
    /* ---- first order, level 1 (pp. 181–188) ---- */
    wr(1, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល៖', 'Solve the differential equations:', [
      m('1', 'y\' = 4+3x'), m('2', 'y\' = (x+1)^2'), m('3', 'y\' = \\frac{x}{x^2-1}'),
      m('4', 'y\' = 1+\\sin(2x+1)'), m('5', 'y\' = 2x\\cos\\left(x^2+2\\right)'), m('6', 'y\' = -2xe^{x^2-1}'),
      m('7', 'y\' = 2(x+1)e^{x^2+2x-1}'), m('8', 'y\' = \\frac{\\ln x}{x}'),
      m('9', 'y\' = \\frac{1}{2x} + \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} + \\frac{\\ln 2x}{x}')
    ]),
    wr(2, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដែលឲ្យ៖', 'Solve subject to the given condition:', [
      m('1', 'y\' = 5x+1,\\; y(11) = 111'), m('2', '\\left(3x^2-2\\right)y\' = 6x,\\; y(1) = 4'),
      m('3', 'y\' = e^{2x-2},\\; y(1) = 5'), m('4', '\\frac{y\'}{x} = \\cos\\left(x^2+\\frac{\\pi}{2}\\right),\\; y(0) = 3')
    ]),
    wr(3, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដែលឲ្យ៖', 'Solve subject to the given condition:', [
      m('1', '\\frac{dy}{dx} = 3+y,\\; y(0) = -2'), m('2', 'y\' = 4xy,\\; y(0) = 3'),
      m('3', 'y\\frac{dy}{dx} = e^{x},\\; y(0) = 0'), m('4', '\\frac{y\'}{y} = \\cos 2x,\\; y\\left(\\frac{\\pi}{2}\\right) = e')
    ]),
    wr(4, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល៖', 'Solve the differential equations:', [
      m('1', '\\frac{dy}{dx} - y = 0'), m('2', '2\\frac{dy}{dx} - 3y = 0'),
      m('3', 'y\' - 2y = 0'), m('4', 'y\' + y\\sqrt{2} = 0')
    ]),
    wr(5, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដែលឲ្យ៖', 'Solve subject to the given condition:', [
      m('1', '2y\' - 5y = 0,\\; y(1) = -3'), m('2', '2y\' - y = 0,\\; y(\\ln 4) = 1'),
      m('3', '5y\' - 2y = 0,\\; y(0) = 5')
    ]),
    wr(6, 'ដោះស្រាយសមីការ៖', 'Solve:', [
      m('1', 'y\' + 3y = 3x-2'), m('2', 'y\' - 2y = x^2+3x'), m('3', 'y\' - y = x^2-x-2'),
      m('4', 'y\' - y = e^{3x}'), m('5', 'y\' - 3y = 2e^{2x}'), m('6', 'y\' + y = \\sin x'),
      m('7', 'y\' + y = \\cos x'), m('8', 'y\' + y = \\cos 2x + \\sin 2x')
    ]),
    wr(7, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-2y = x^2+3x+2\\)។',
         'Consider \\((E): y\'-2y = x^2+3x+2\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_c\\) នៃសមីការឌីផេរ៉ង់ស្យែល \\(y\'-2y = 0\\)។',
              'Find the complementary solution \\(y_c\\) of \\(y\'-2y = 0\\).'),
      p2('b', 'កំណត់តម្លៃ \\(a\\), \\(b\\) និង \\(c\\) ដើម្បីបាន \\(y_p = ax^2+bx+c\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\), \\(b\\) and \\(c\\) so that \\(y_p = ax^2+bx+c\\) solves \\((E)\\).'),
      p2('c', 'រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Give the general solution of \\((E)\\).')
    ]),
    wr(8, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-3y = 3x^2+4x+1\\)។',
         'Consider \\((E): y\'-3y = 3x^2+4x+1\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_c\\) នៃសមីការឌីផេរ៉ង់ស្យែល \\(y\'-3y = 0\\)។',
              'Find the complementary solution \\(y_c\\) of \\(y\'-3y = 0\\).'),
      p2('b', 'កំណត់តម្លៃ \\(a\\), \\(b\\) និង \\(c\\) ដើម្បីបាន \\(y_p = ax^2+bx+c\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\), \\(b\\) and \\(c\\) so that \\(y_p = ax^2+bx+c\\) solves \\((E)\\).'),
      p2('c', 'រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Give the general solution of \\((E)\\).')
    ]),
    wr(9, 'គេមានសមីការ \\(y\'+2y = 3e^{-3x}\\;(E)\\)។',
         'Consider \\(y\'+2y = 3e^{-3x}\\;(E)\\).', [
      p2('1', 'រកចម្លើយទូទៅនៃសមីការ \\(y\'+2y = 0\\;(E\')\\)។',
              'Find the general solution of \\(y\'+2y = 0\\;(E\')\\).'),
      p2('2', 'តាងអនុគមន៍ \\(f\\) កំណត់ដោយ \\(f(x) = e^{-2x}g(x)\\)។ គណនា \\(f\'(x)\\) ជាអនុគមន៍នៃ \\(g(x)\\) និង \\(g\'(x)\\)។ គណនា \\(g\'(x)\\) បើ \\(f(x)\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Let \\(f(x) = e^{-2x}g(x)\\). Express \\(f\'(x)\\) in terms of \\(g(x)\\) and \\(g\'(x)\\), then find \\(g\'(x)\\) given that \\(f\\) solves \\((E)\\).'),
      p2('3', 'ទាញរក \\(g(x)\\) រួច \\(f(x)\\) ដើម្បីឲ្យ \\(f(x)\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Deduce \\(g(x)\\) and then \\(f(x)\\).')
    ]),
    wr(10, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-y = 2e^{x}\\)។',
          'Consider \\((E): y\'-y = 2e^{x}\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'-y = 0\\)។', 'Solve \\(y\'-y = 0\\).'),
      p2('b', 'យក \\(f\\) ចម្លើយនៃសមីការ \\((E)\\) ដែល \\(f(x) = e^{x}g(x)\\)។ កំណត់អនុគមន៍ \\(g(x)\\) រួចទាញរក \\(f(x)\\)។',
              'Let \\(f(x) = e^{x}g(x)\\) solve \\((E)\\). Find \\(g(x)\\), then \\(f(x)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) បើបន្ទាត់ប៉ះនឹងក្រាបតាងអនុគមន៍ចម្លើយត្រង់ \\(x_0 = 0\\) មានមេគុណប្រាប់ទិសស្មើ 3។',
              'Find the particular solution of \\((E)\\) whose graph has tangent slope 3 at \\(x_0 = 0\\).')
    ]),
    wr(11, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+3y = 2e^{2x}\\)។',
          'Consider \\((E): y\'+3y = 2e^{2x}\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'+3y = 0\\)។', 'Solve \\(y\'+3y = 0\\).'),
      p2('b', 'យក \\(f\\) ចម្លើយនៃសមីការ \\((E)\\) ដែល \\(g(x) = e^{3x}f(x)\\)។ កំណត់អនុគមន៍ \\(g(x)\\) រួចទាញរក \\(f(x)\\)។',
              'Let \\(g(x) = e^{3x}f(x)\\) where \\(f\\) solves \\((E)\\). Find \\(g(x)\\), then \\(f(x)\\).')
    ]),

    /* ---- first order, level 2 (pp. 189–202) ---- */
    wr(12, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល៖', 'Solve the differential equations:', [
      m('1', 'y\' = x-1'), m('2', 'y\' = 2x^2-3x+1'), m('3', 'y\' = x+1+\\frac{1}{x}'),
      m('4', 'y\' = \\frac{x^2+x-1}{x+1}'), m('5', 'y\' = 3x+\\cos 3x'), m('6', 'y\' = x\\sin\\left(x^2+1\\right)'),
      m('7', 'y\' = 1-\\tan^2 x'), m('8', 'y\' = 2e^{1-2x}'), m('9', '\\frac{y\'}{x} = 22e^{-x^2+22}')
    ]),
    wr(13, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដែលឲ្យ៖', 'Solve subject to the given condition:', [
      m('1', 'y\' = 3x^2-2x-1,\\; y(3) = 20'), m('2', 'xy\' = x^2-x+2,\\; y(e) = \\tfrac{1}{2}e^2'),
      m('3', 'y\' = 2xe^{x^2-2},\\; y(1) = 1'), m('4', '\\frac{y\'}{\\tan x} = 1,\\; y(0) = 1'),
      m('5', 'y\' = x\\sin x,\\; y(0) = 0'), m('6', 'y\' = x\\cos x,\\; y(0) = 1')
    ]),
    wr(14, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល៖', 'Solve the differential equations:', [
      m('1', 'y\' = 4y'), m('2', 'xy\'-y = -1'), m('3', 'y\' = \\frac{x^2-x+1}{y(x-1)}'),
      m('4', 'y\' = \\frac{y}{x^2-5x+6}'), m('5', 'xy\' = x^3y^2'), m('6', '\\frac{y\'}{x} = y\\sin\\left(x^2+1\\right)'),
      m('7', 'y\' = y\\tan x'), m('8', '\\frac{y\'}{x} = \\frac{e^{-x^2+2}}{y}'), m('9', 'x\\frac{dy}{dx} = y(y-1)'),
      m('10', 'yy\' = xe^{x}'), m('11', '\\frac{dy}{dx} = \\frac{x^2e^{x}}{y}'),
      m('12', '\\left(1+x^2\\right)y\\frac{dy}{dx} + \\left(1+y^2\\right)x = 0')
    ]),
    wr(15, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដែលឲ្យ៖', 'Solve subject to the given condition:', [
      m('1', 'y\' = \\frac{2x(y-1)}{y},\\; y(3) = 0'), m('2', 'y\' = e^{2x-y},\\; y(2) = 0'),
      m('3', '\\frac{dy}{dx} = y^2-4,\\; y(0) = -1'), m('4', 'x\\frac{dy}{dx} = (x+2)(y-1),\\; y(1) = 1+e')
    ]),
    wr(16, 'រកអនុគមន៍ចម្លើយមួយនៃសមីការឌីផេរ៉ង់ស្យែល \\(x\\dfrac{dy}{dx} - y = 2x^2y\\) ដែលក្រាបនៃអនុគមន៍ចម្លើយនោះកាត់តាមចំណុច \\(A(1,e)\\)។',
          'Find the solution of \\(x\\dfrac{dy}{dx} - y = 2x^2y\\) whose graph passes through \\(A(1,e)\\).', []),
    wr(17, 'រកអនុគមន៍ចម្លើយមួយនៃសមីការឌីផេរ៉ង់ស្យែល \\(\\left(e^{2x}-2x\\right)\\dfrac{dy}{dx} + 2y = 2ye^{2x}\\) ដែលក្រាបនៃអនុគមន៍ចម្លើយនោះកាត់តាមចំណុច \\((x=0,\\,y=e)\\)។',
          'Find the solution of \\(\\left(e^{2x}-2x\\right)\\dfrac{dy}{dx} + 2y = 2ye^{2x}\\) whose graph passes through \\((0,e)\\).', []),
    wr(18, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលលីនេអ៊ែរលំដាប់ទី១ ខាងក្រោម៖', 'Solve the first-order linear equations:', [
      m('1', '\\frac{dy}{dx} + 2y = 0'), m('2', '3\\frac{dy}{dx} + y = 0'),
      m('3', '3y\' + 2y = 0'), m('4', 'y\'\\sqrt{3} - 3y = 0')
    ]),
    wr(19, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលលីនេអ៊ែរលំដាប់ទី១ ខាងក្រោម៖', 'Solve the first-order linear equations:', [
      m('1', '-y\' + 2y = 0,\\; y(3) = -2'), m('2', '2y\' + y = 0,\\; y(\\ln 4) = \\tfrac{1}{5}'),
      m('3', '7y\' + 4y = 0,\\; y(7) = e^{-4}'), m('4', '3\\frac{dy}{dx} - 3y = 0,\\; y(2) = e')
    ]),
    wr(20, 'ដោះស្រាយសមីការ៖', 'Solve:', [
      m('1', 'y\' - y = 1-x'), m('2', 'y\' + 2y = 2x-1'),
      m('3', 'y\' + y = x^2+x+1'), m('4', 'y\' + 2y = 1-2x^2')
    ]),
    wr(21, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+y = x+1\\)។',
          'Consider \\((E): y\'+y = x+1\\).', [
      p2('a', 'បើគេតាង \\(Z = y-x\\) ចូររក \\((F)\\) សមីការឌីផេរ៉ង់ស្យែលលីនេអ៊ែរលំដាប់ទី១ ដែលអថេរ \\(Z\\)។',
              'With \\(Z = y-x\\), find the first-order linear equation \\((F)\\) satisfied by \\(Z\\).'),
      p2('b', 'រកចម្លើយទូទៅនៃ \\((F)\\) រួចទាញរកចម្លើយទូទៅនៃ \\((E)\\)។',
              'Solve \\((F)\\), then deduce the general solution of \\((E)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) តាមលក្ខណដើម \\(y(0)=1\\)។',
              'Find the particular solution of \\((E)\\) with \\(y(0)=1\\).')
    ]),
    wr(22, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-3y = 3x+2\\)។',
          'Consider \\((E): y\'-3y = 3x+2\\).', [
      p2('a', 'កំណត់តម្លៃ \\(a\\), \\(b\\) ដើម្បីបាន \\(y_p = ax+b\\) ជាចម្លើយមួយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\) and \\(b\\) so that \\(y_p = ax+b\\) solves \\((E)\\).'),
      p2('b', 'រកចម្លើយទូទៅនៃសមីការ \\(y\'-3y = 0\\) រួចទាញរកចម្លើយទូទៅនៃសមីការ \\((E)\\)។',
              'Solve \\(y\'-3y = 0\\), then give the general solution of \\((E)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) បើគេដឹងថាក្រាបតាងអនុគមន៍ចម្លើយនេះកាត់តាមចំណុច \\((0,0)\\)។',
              'Find the particular solution whose graph passes through \\((0,0)\\).')
    ]),
    wr(23, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-y = x-\\dfrac{e-2}{e-1}\\)។',
          'Consider \\((E): y\'-y = x-\\dfrac{e-2}{e-1}\\).', [
      p2('a', 'រកអនុគមន៍ \\(g(x)\\) ដែលជាចម្លើយមួយនៃសមីការ \\((E)\\)។',
              'Find a function \\(g(x)\\) that solves \\((E)\\).'),
      p2('b', 'យកអនុគមន៍ \\(h\\) ដែល \\(h = f-g\\)។ \\(f\\) ជាអនុគមន៍ចម្លើយទូទៅនៃសមីការ \\((E)\\)។ បង្ហាញថាអនុគមន៍ \\(h\\) ជាចម្លើយនៃសមីការ \\((F): y\'-y = 0\\)។',
              'Let \\(h = f-g\\) where \\(f\\) is the general solution of \\((E)\\). Show that \\(h\\) solves \\((F): y\'-y = 0\\).'),
      p2('c', 'កំណត់អនុគមន៍ \\(h\\) ដែលជាចម្លើយនៃសមីការ \\((F)\\) រួចទាញរកចម្លើយ \\(f\\) នៃសមីការ \\((E)\\)។',
              'Find \\(h\\), then deduce \\(f\\).'),
      p2('d', 'កំណត់អនុគមន៍ \\(f\\) បើគេដឹងថាខ្សែកោងតាងអនុគមន៍ \\(f\\) កាត់តាមគល់ \\(O\\) នៃតម្រុយ។',
              'Find \\(f\\) given that its curve passes through the origin \\(O\\).')
    ]),
    wr(24, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+2y = x^2\\)។',
          'Consider \\((E): y\'+2y = x^2\\).', [
      p2('a', 'កំណត់ពហុធាដឺក្រេទីពីរ \\(g\\) ដែលជាចម្លើយពិសេសនៃសមីការ \\((E)\\)។',
              'Find a quadratic polynomial \\(g\\) that is a particular solution of \\((E)\\).'),
      p2('b', 'តាង \\(h\\) ជាអនុគមន៍ដែល \\(h(x) = f(x)-g(x)\\)។ បើ \\(h\\) ជាចម្លើយនៃសមីការឌីផេរ៉ង់ស្យែល \\(y\'+2y = 0\\) នោះបង្ហាញថា \\(f\\) ជាចម្លើយទូទៅនៃសមីការ \\((E)\\)។',
              'Let \\(h(x) = f(x)-g(x)\\). If \\(h\\) solves \\(y\'+2y = 0\\), show that \\(f\\) is the general solution of \\((E)\\).'),
      p2('c', 'ដោះស្រាយសមីការ \\(y\'+2y = 0\\) រួចទាញរកអនុគមន៍ \\(f\\) ដែលជាចម្លើយទូទៅនៃសមីការ \\((E)\\)។',
              'Solve \\(y\'+2y = 0\\) and deduce \\(f\\).')
    ]),
    wr(25, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-2y = 4x^2+4x\\)។',
          'Consider \\((E): y\'-2y = 4x^2+4x\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_c\\) នៃសមីការឌីផេរ៉ង់ស្យែល \\(y\'-2y = 0\\)។',
              'Find the complementary solution \\(y_c\\) of \\(y\'-2y = 0\\).'),
      p2('b', 'កំណត់តម្លៃ \\(a\\), \\(b\\) និង \\(c\\) ដើម្បីបាន \\(y_p = ax^2+bx+c\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\), \\(b\\) and \\(c\\) so that \\(y_p = ax^2+bx+c\\) solves \\((E)\\).'),
      p2('c', 'រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Give the general solution of \\((E)\\).')
    ]),
    wr(26, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+2y = 2x^2-3\\)។',
          'Consider \\((E): y\'+2y = 2x^2-3\\).', [
      p2('a', 'កំណត់តម្លៃ \\(a\\), \\(b\\) និង \\(c\\) ដើម្បីបាន \\(y_p = ax^2+bx+c\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\), \\(b\\) and \\(c\\) so that \\(y_p = ax^2+bx+c\\) solves \\((E)\\).'),
      p2('b', 'រកចម្លើយទូទៅ \\(y_c\\) នៃសមីការឌីផេរ៉ង់ស្យែល \\(y\'+2y = 0\\)។',
              'Find the complementary solution \\(y_c\\).'),
      p2('c', 'រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ \\((E)\\) រួចរកចម្លើយពិសេសមួយនៃ \\((E)\\) បើគេដឹងថាក្រាបតាងអនុគមន៍ចម្លើយនេះកាត់តាមចំណុច \\((0,1)\\)។',
              'Give the general solution, then the particular one whose graph passes through \\((0,1)\\).')
    ]),
    wr(27, 'ដោះស្រាយសមីការ៖', 'Solve:', [
      m('1', 'y\' + y = 2e^{x}'), m('2', 'y\' + 2y = e^{-2x}'), m('3', '2y\' - y = 2e^{3x}'),
      m('4', 'y\' + y = \\cos x + \\sin x'), m('5', 'y\' + 2y = \\frac{1}{1+e^{2x}}'),
      m('6', 'y\' - y = \\frac{e^{-x}}{1+e^{-2x}}')
    ]),
    wr(28, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-2y = \\dfrac{-2}{1+e^{-2x}}\\)។',
          'Consider \\((E): y\'-2y = \\dfrac{-2}{1+e^{-2x}}\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'-2y = 0\\) ដែលផ្ទៀងផ្ទាត់ \\(y(0)=1\\)។',
              'Solve \\(y\'-2y = 0\\) with \\(y(0)=1\\).'),
      p2('b', 'តាង \\(f\\) ជាអនុគមន៍មានដេរីវេលើ \\(\\mathbb{R}\\) ដែល \\(f(x) = e^{2x}g(x)\\)។ គណនា \\(f\'(x)\\) ជាអនុគមន៍នៃ \\(g(x)\\) និង \\(g\'(x)\\)។',
              'Let \\(f(x) = e^{2x}g(x)\\) be differentiable on \\(\\mathbb{R}\\). Express \\(f\'(x)\\) in terms of \\(g\\) and \\(g\'\\).'),
      p2('c', 'បង្ហាញថា បើ \\(f\\) ចម្លើយនៃសមីការ \\((E)\\) លុះត្រាតែ \\(g\'(x) = \\dfrac{-2e^{-2x}}{1+e^{-2x}}\\)។',
              'Show that \\(f\\) solves \\((E)\\) exactly when \\(g\'(x) = \\dfrac{-2e^{-2x}}{1+e^{-2x}}\\).'),
      p2('d', 'ទាញរកកន្សោម \\(g(x)\\) រួច \\(f(x)\\) ដែល \\(f\\) ជាចម្លើយនៃ \\((E)\\)។',
              'Deduce \\(g(x)\\) and then \\(f(x)\\).')
    ]),
    wr(29, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+y = e^{-x}\\)។',
          'Consider \\((E): y\'+y = e^{-x}\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'+y = 0\\)។', 'Solve \\(y\'+y = 0\\).'),
      p2('b', 'យក \\(f\\) ចម្លើយនៃសមីការ \\((E)\\) ដែល \\(g(x) = e^{x}f(x)\\)។ កំណត់អនុគមន៍ \\(g(x)\\) រួចទាញរក \\(f(x)\\)។',
              'Let \\(g(x) = e^{x}f(x)\\) where \\(f\\) solves \\((E)\\). Find \\(g(x)\\), then \\(f(x)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) បើក្រាបតាងអនុគមន៍ចម្លើយនេះកាត់តាមចំណុច \\((0,2)\\)។',
              'Find the particular solution whose graph passes through \\((0,2)\\).')
    ]),
    wr(30, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'-2y = 3e^{3x}\\)។',
          'Consider \\((E): y\'-2y = 3e^{3x}\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'-2y = 0\\)។', 'Solve \\(y\'-2y = 0\\).'),
      p2('b', 'កំណត់អនុគមន៍ \\(g(x)\\) ដើម្បីឲ្យ \\(f(x) = e^{2x}g(x)\\) ជាចម្លើយនៃសមីការ \\((E)\\) រួចទាញរក \\(f(x)\\)។',
              'Find \\(g(x)\\) so that \\(f(x) = e^{2x}g(x)\\) solves \\((E)\\), then give \\(f(x)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) តាមលក្ខខណ្ឌដើម \\(y(0)=4\\)។',
              'Find the particular solution with \\(y(0)=4\\).')
    ]),

    /* ---- second order (pp. 210–234) ---- */
    wr(31, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល៖', 'Solve the differential equations:', [
      m('1', 'y\'\' - 2y\' = 0'), m('2', 'y\'\' - 4y\' + 4y = 0'), m('3', 'y\'\' + 9y = 0'),
      m('4', '3y\'\' - 10y\' + 3y = 0'), m('5', 'y\'\' - 2y\' + 4y = 0'), m('6', '3y\'\' + 4y\' + 13y = 0'),
      m('7', 'y\'\' + y\' - 6y = 0'), m('8', 'y\'\' + 10y\' + 25y = 0'), m('9', 'y\'\' + y\' + 3y = 0'),
      m('10', 'y\'\' - 6y\' + 8y = 0'), m('11', '4y\'\' + 4y\' + y = 0'), m('12', '4y\'\' + \\tfrac{1}{2}y\' + y = 0')
    ]),
    wr(32, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលតាមលក្ខខណ្ឌដើម៖', 'Solve with the given initial conditions:', [
      m('1', 'y\'\' - 2y\' - 3y = 0,\\; y(0) = -1,\\; y\'(1) = e^{-1}'),
      m('2', '4y\'\' - 4y\' + y = 0,\\; y(0) = -3,\\; y\'(0) = 2'),
      m('3', 'y\'\' + 4y\' + 8y = 0,\\; y(0) = 1,\\; y\'(0) = 2'),
      m('4', 'y\'\' - 3y\' + 2y = 0,\\; y(1) = 1,\\; y\'(1) = 3'),
      m('5', 'y\'\' - y = 0,\\; y(0) = 1,\\; y\'(0) = -2'),
      m('6', 'y\'\' - 2y\' + 3y = 0,\\; y(0) = 2,\\; y\'(0) = 1'),
      m('7', 'y\'\' + 3y\' + 2y = 0,\\; y(0) = 2,\\; y\'(0) = -3'),
      m('8', 'y\'\' + 6y\' + 9y = 0,\\; y(1) = 1,\\; y\'(1) = -3'),
      m('9', 'y\'\' + 2y\' + 2y = 0,\\; y(0) = 2,\\; y\'(0) = 1'),
      m('10', 'y\'\' - 2y\' + 5y = 0,\\; y(0) = -1,\\; y\'(0) = 1'),
      m('11', 'y\'\' + 5y\' + 6y = 0,\\; y(0) = 0,\\; y\'(0) = 1'),
      m('12', 'y\'\' - 2y\' + 5y = 0,\\; y(0) = -1,\\; y\'(0) = 0')
    ]),
    wr(33, 'សមីការ \\((E): y\'\'-y\'+\\dfrac{1}{4}y = 0\\)។', 'The equation \\((E): y\'\'-y\'+\\dfrac{1}{4}y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយ \\(f\\) មួយនៃសមីការ \\((E)\\) បើគេដឹងថាក្រាបតាងអនុគមន៍ \\(f\\) កាត់តាមចំណុច \\(M(0,4)\\) ហើយប៉ះនឹងបន្ទាត់ដេកមួយត្រង់ចំណុច \\(x = 2\\)។',
              'Find the solution \\(f\\) whose graph passes through \\(M(0,4)\\) and has a horizontal tangent at \\(x = 2\\).')
    ]),
    wr(34, 'សមីការ \\((E): 2y\'\'-3y\'+y = 0\\)។', 'The equation \\((E): 2y\'\'-3y\'+y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយ \\(f\\) មួយនៃសមីការ \\((E)\\) បើគេដឹងថាក្រាបតាងអនុគមន៍ \\(f\\) ប៉ះនឹងបន្ទាត់ \\(L: y = 2x+1\\) ត្រង់ចំណុច \\(A(0,1)\\)។',
              'Find the solution \\(f\\) whose graph is tangent to \\(L: y = 2x+1\\) at \\(A(0,1)\\).')
    ]),
    wr(35, 'សមីការ \\((E): y\'\'-6y\'+8y = 0\\)។', 'The equation \\((E): y\'\'-6y\'+8y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយ \\(f\\) មួយនៃ \\((E)\\) បើក្រាបតាង \\(f\\) ប៉ះនឹងបន្ទាត់ដេកមួយត្រង់ចំណុច \\(A(0,-1)\\)។',
              'Find the solution whose graph has a horizontal tangent at \\(A(0,-1)\\).')
    ]),
    wr(36, 'សមីការ \\((E): 9y\'\'+y = 0\\)។', 'The equation \\((E): 9y\'\'+y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយ \\(f\\) មួយនៃសមីការ \\((E)\\) បើគេដឹងថា \\(\\displaystyle\\int_0^{\\pi/2} f(x)dx = 0\\) និង \\(\\displaystyle\\int_0^{\\pi} f(x)dx = 3\\)។',
              'Find the solution \\(f\\) with \\(\\displaystyle\\int_0^{\\pi/2} f(x)dx = 0\\) and \\(\\displaystyle\\int_0^{\\pi} f(x)dx = 3\\).')
    ]),
    wr(37, 'សមីការ \\((E): y\'\'+4y = 0\\)។', 'The equation \\((E): y\'\'+4y = 0\\).', [
      p2('a', 'រកចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Give the general solution of \\((E)\\).'),
      p2('b', 'រកអនុគមន៍ \\(g\\) ដែលជាចម្លើយមួយនៃសមីការ \\((E)\\) បើគេដឹងថា \\(g\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{2}{3}\\) និង \\(g\'\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{3}\\)។',
              'Find \\(g\\) with \\(g(\\pi/4) = 2/3\\) and \\(g\'(\\pi/4) = 1/3\\).')
    ]),
    wr(38, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖', 'Solve the differential equations:', [
      m('1', 'y\'\' - 4y\' + 3y = 4'), m('2', 'y\'\' + 4y\' + 4y = 4x'), m('3', 'y\'\' - 5y\' = 5x^2'),
      m('4', '3y\'\' - 5y\' + 2y = -3'), m('5', 'y\'\' - 2y\' - 3y = -2x'), m('6', 'y\'\' + 6y\' + 9y = x^2-2x+3'),
      m('7', 'y\'\' + 4y = e^{x}'), m('8', 'y\'\' + 4y = \\sin x'), m('9', 'y\'\' + 3y\' + 2y = \\cos x'),
      m('10', 'y\'\' - 2y\' + 4y = e^{x}'), m('11', 'y\'\' - 3y\' + 5y = 4x^3-2x'),
      m('12', 'y\'\' - 2y\' + 5y = 10\\cos x'), m('13', 'y\'\' - 3y\' - 4y = 30e^{x}'),
      m('14', 'y\'\' - 3y\' - 4y = 30e^{4x}'), m('15', 'y\'\' - 4y\' + 3y = 2\\cos x + 4\\sin x'),
      m('16', 'y\'\' - y\' - 2y = 6x + 6e^{-x}'), m('17', 'y\'\' - y\' = e^{x} - 4'),
      m('18', 'y\'\' - 3y\' - 4y = 16x - 50\\cos 2x')
    ]),
    wr(39, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលខាងក្រោម៖', 'Solve the differential equations:', [
      m('1', 'y\'\' + 4y = -2,\\; y\\!\\left(\\tfrac{\\pi}{8}\\right) = \\tfrac{1}{2},\\; y\'\\!\\left(\\tfrac{\\pi}{8}\\right) = 2'),
      m('2', '5y\'\' + y\' = -6x,\\; y(0) = 0,\\; y\'(0) = -10'),
      m('3', 'y\'\' + 4y\' + 5y = 35e^{-4x},\\; y(0) = 3,\\; y\'(0) = 1'),
      m('4', 'y\'\' + 4y = \\sin x,\\; y(0) = 1,\\; y\'(0) = 2'),
      m('5', 'y\'\' + 2y\' + 5y = 8e^{-x},\\; y(0) = 0,\\; y\'(0) = 8'),
      m('6', '2y\'\' - 5y\' - 3y = -9x^2 - 1,\\; y(0) = 1,\\; y\'(0) = 0')
    ]),
    wr(40, 'សមីការ \\((E): y\'\'+2y\'+y = x\\)។', 'The equation \\((E): y\'\'+2y\'+y = x\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\(y\'\'+2y\'+y = 0\\)។', 'Solve \\(y\'\'+2y\'+y = 0\\).'),
      p2('b', 'រកចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។', 'Find a particular solution of \\((E)\\).'),
      p2('c', 'ដោះស្រាយសមីការ \\((E)\\) តាមលក្ខខណ្ឌដើម \\(y(0) = -2,\\; y\'(0) = 2\\)។',
              'Solve \\((E)\\) with \\(y(0) = -2,\\; y\'(0) = 2\\).')
    ]),
    wr(41, 'សមីការ \\((E): y\'\'+4y\'+4y = -4x\\)។', 'The equation \\((E): y\'\'+4y\'+4y = -4x\\).', [
      p2('a', 'រកចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។', 'Find a particular solution of \\((E)\\).'),
      p2('b', 'ដោះស្រាយសមីការ \\((E)\\) តាមលក្ខខណ្ឌដើម \\(y(0) = 2,\\; y\'(0) = -2\\)។',
              'Solve \\((E)\\) with \\(y(0) = 2,\\; y\'(0) = -2\\).')
    ]),
    wr(42, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-4y\'+2y = 4\\)។',
          'Consider \\((E): y\'\'-4y\'+2y = 4\\).', [
      p2('a', 'រកអនុគមន៍ថេរ \\(k\\) ដែលជាចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។',
              'Find the constant function \\(k\\) that is a particular solution of \\((E)\\).'),
      p2('b', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) ដែលផ្ទៀងផ្ទាត់លក្ខខណ្ឌដើម \\(y(0) = 2\\sqrt{2},\\; y\'(0) = 0\\)។',
              'Find the particular solution with \\(y(0) = 2\\sqrt{2},\\; y\'(0) = 0\\).')
    ]),
    wr(43, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+3y\' = 5\\)។',
          'Consider \\((E): y\'\'+3y\' = 5\\).', [
      p2('a', 'រកអនុគមន៍ \\(g\\) ដែល \\(g(x) = Ax\\) ជាចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។',
              'Find \\(g(x) = Ax\\) that is a particular solution of \\((E)\\).'),
      p2('b', 'ដោះស្រាយសមីការ \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('c', 'រកចម្លើយពិសេសមួយនៃ \\((E)\\) ដែលផ្ទៀងផ្ទាត់លក្ខខណ្ឌដើម \\(y(0) = e^{3},\\; y\'(1) = \\dfrac{2}{3}\\)។',
              'Find the particular solution with \\(y(0) = e^{3},\\; y\'(1) = \\dfrac{2}{3}\\).')
    ]),
    wr(44, 'គេឲ្យសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+y\'-6y = -6x^2+2x-4\\)។',
          'Consider \\((E): y\'\'+y\'-6y = -6x^2+2x-4\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((F): y\'\'+y\'-6y = 0\\)។', 'Solve \\((F): y\'\'+y\'-6y = 0\\).'),
      p2('b', 'រកអនុគមន៍ \\(g(x)\\) ដែលជាចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។',
              'Find a particular solution \\(g(x)\\) of \\((E)\\).'),
      p2('c', 'តាងអនុគមន៍ \\(f\\) ជាចម្លើយទូទៅនៃសមីការ \\((E)\\)។ បង្ហាញថា \\(f-g\\) ជាចម្លើយនៃសមីការ \\((F)\\) រួចទាញរកអនុគមន៍ \\(f\\)។',
              'Let \\(f\\) be the general solution of \\((E)\\). Show \\(f-g\\) solves \\((F)\\), then deduce \\(f\\).')
    ]),
    wr(45, 'គេឲ្យសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-3y\'+2y = 2x+1\\)។',
          'Consider \\((E): y\'\'-3y\'+2y = 2x+1\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_g\\) នៃសមីការ \\((E_1): y\'\'-3y\'+2y = 0\\)។ កំណត់ចម្លើយ \\(f\\) នៃ \\((E_1)\\) ដែល \\(f(0) = 3\\) និង \\(f\'(0) = 4\\)។',
              'Solve \\((E_1): y\'\'-3y\'+2y = 0\\), then find the solution with \\(f(0) = 3,\\; f\'(0) = 4\\).'),
      p2('b', 'រកចំនួនពិត \\(a\\) និង \\(b\\) ដើម្បីឲ្យ \\(y_p = ax+b\\) ជាចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។',
              'Find \\(a\\) and \\(b\\) so that \\(y_p = ax+b\\) is a particular solution of \\((E)\\).'),
      p2('c', 'ទាញរកចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Deduce the general solution of \\((E)\\).')
    ]),
    wr(46, 'សមីការ \\((E): y\'\'-5y\'+6y = x^2+x\\)។', 'The equation \\((E): y\'\'-5y\'+6y = x^2+x\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_g\\) នៃសមីការ \\(y\'\'-5y\'+6y = 0\\)។',
              'Solve \\(y\'\'-5y\'+6y = 0\\).'),
      p2('b', 'រកចំនួនពិត \\(a\\), \\(b\\) និង \\(c\\) ដើម្បីឲ្យ \\(y_p = ax^2+bx+c\\) ជាចម្លើយនៃ \\((E)\\)។',
              'Find \\(a\\), \\(b\\) and \\(c\\) so that \\(y_p = ax^2+bx+c\\) solves \\((E)\\).'),
      p2('c', 'ទាញរកចម្លើយទូទៅនៃសមីការ \\((E)\\)។', 'Deduce the general solution of \\((E)\\).')
    ]),
    wr(47, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-3y\'+2y = 2x^2-5x+3\\)។',
          'Consider \\((E): y\'\'-3y\'+2y = 2x^2-5x+3\\).', [
      p2('a', 'រកអនុគមន៍ពហុធាដឺក្រេទី២ \\(P(x)\\) ជាចម្លើយពិសេសមួយនៃសមីការ \\((E)\\)។',
              'Find a quadratic \\(P(x)\\) that is a particular solution of \\((E)\\).'),
      p2('b', 'បង្ហាញថា \\(f\\) ជាចម្លើយទូទៅនៃ \\((E)\\) បើ \\(h = f-P\\) ជាចម្លើយទូទៅនៃសមីការ \\((E\'): y\'\'-3y\'+2y = 0\\)។',
              'Show that \\(f\\) is the general solution of \\((E)\\) when \\(h = f-P\\) solves \\((E\')\\).'),
      p2('c', 'ដោះស្រាយសមីការ \\((E\')\\) រួចទាញរកអនុគមន៍ \\(f\\) ជាចម្លើយទូទៅនៃ \\((E)\\)។',
              'Solve \\((E\')\\), then deduce \\(f\\).'),
      p2('d', 'រកចម្លើយ \\(f\\) នៃ \\((E)\\) ដែលខ្សែកោង \\(C\\) តាងអនុគមន៍ \\(f\\) ប៉ះនឹងអ័ក្សអាប់ស៊ីសត្រង់គល់កូអរដោនេ។',
              'Find the solution whose curve is tangent to the x-axis at the origin.')
    ]),
    wr(48, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-2y\'+5y = nx^2+px+q\\)។',
          'Consider \\((E): y\'\'-2y\'+5y = nx^2+px+q\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((F): y\'\'-2y\'+5y = 0\\)។ រកចម្លើយនៃ \\((F)\\) បើ \\(y(0) = 2\\) និង \\(y\'(0) = 6\\)។',
              'Solve \\((F): y\'\'-2y\'+5y = 0\\), then the solution with \\(y(0) = 2,\\; y\'(0) = 6\\).'),
      p2('b', 'រកចំនួនពិត \\(n\\), \\(p\\) និង \\(q\\) ដោយដឹងថា \\(y = 2x^2+3x+1\\) ជាចម្លើយនៃសមីការ \\((E)\\)។ រកចម្លើយទូទៅ \\(y\\) នៃសមីការ \\((E)\\)។',
              'Find \\(n\\), \\(p\\) and \\(q\\) given that \\(y = 2x^2+3x+1\\) solves \\((E)\\), then give the general solution.')
    ]),
    wr(49, 'គេឲ្យសមីការឌីផេរ៉ង់ស្យែល \\((E_1): -y\'\'-y\'+6y = 6x^2-2x+4\\)។',
          'Consider \\((E_1): -y\'\'-y\'+6y = 6x^2-2x+4\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\((E_2): -y\'\'-y\'+6y = 0\\)។', 'Solve \\((E_2): -y\'\'-y\'+6y = 0\\).'),
      p2('b', 'រកពហុធា \\(p(x) = ax^2+bx+c\\) ដែលជាចម្លើយមួយនៃសមីការ \\((E_1)\\) រួចទាញរកចម្លើយទូទៅនៃ \\((E_1)\\)។',
              'Find \\(p(x) = ax^2+bx+c\\) solving \\((E_1)\\), then the general solution.')
    ]),
    wr(50, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+9y = 2\\cos x\\)។ គេតាង \\(y = Z+k\\cos x\\) ដែល \\(Z\\) ជាអនុគមន៍នៃ \\(x\\) និង \\(k\\) ជាចំនួនពិតថេរ។',
          'Consider \\((E): y\'\'+9y = 2\\cos x\\). Put \\(y = Z+k\\cos x\\), with \\(Z\\) a function of \\(x\\) and \\(k\\) a real constant.', [
      p2('a', 'រក \\(k\\) បើ \\(Z\\) ជាចម្លើយនៃសមីការ \\(Z\'\'+9Z = 0\\) និង \\(y = Z+k\\cos x\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(k\\) given that \\(Z\'\'+9Z = 0\\) and \\(y = Z+k\\cos x\\) solves \\((E)\\).'),
      p2('b', 'ដោះស្រាយសមីការ \\(Z\'\'+9Z = 0\\) រួចទាញរកចម្លើយទូទៅនៃសមីការ \\((E)\\)។',
              'Solve \\(Z\'\'+9Z = 0\\), then deduce the general solution of \\((E)\\).'),
      p2('c', 'រកចម្លើយមួយនៃសមីការ \\((E)\\) ដែលផ្ទៀងផ្ទាត់ \\(y(0) = 0,\\; y\'(\\pi) = 3\\)។',
              'Find the solution with \\(y(0) = 0,\\; y\'(\\pi) = 3\\).')
    ]),
    wr(51, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+y = \\sin x\\)។',
          'Consider \\((E): y\'\'+y = \\sin x\\).', [
      p2('a', 'រកចំនួនពិត \\(\\alpha\\) ដែលអនុគមន៍ \\(\\varphi\\) កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(\\varphi(x) = \\alpha x\\cos x\\) ជាចម្លើយនៃ \\((E)\\)។',
              'Find \\(\\alpha\\) so that \\(\\varphi(x) = \\alpha x\\cos x\\) solves \\((E)\\).'),
      p2('b', 'តាង \\(f\\) ជាចម្លើយទូទៅនៃសមីការ \\((E)\\)។ បង្ហាញថា \\((f-\\varphi)\'\'+(f-\\varphi) = 0\\)។',
              'Let \\(f\\) be the general solution of \\((E)\\). Show that \\((f-\\varphi)\'\'+(f-\\varphi) = 0\\).'),
      p2('c', 'ដោះស្រាយសមីការ \\(y\'\'+y = 0\\)។ ទាញរកចម្លើយទូទៅនៃសមីការ \\((E)\\)។',
              'Solve \\(y\'\'+y = 0\\), then deduce the general solution of \\((E)\\).')
    ]),
    wr(52, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): -y\'\'+2y\'+4y = -2\\cos 2x\\)។',
          'Consider \\((E): -y\'\'+2y\'+4y = -2\\cos 2x\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\(-y\'\'+2y\'+4y = 0\\;(E\')\\)។', 'Solve \\(-y\'\'+2y\'+4y = 0\\;(E\')\\).'),
      p2('b', 'រកចំនួនពិត \\(a\\) និង \\(b\\) ដែលអនុគមន៍ \\(g\\) កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(g(x) = a\\cos 2x+b\\sin 2x\\) ជាចម្លើយពិសេសនៃសមីការ \\((E)\\)។',
              'Find \\(a\\) and \\(b\\) so that \\(g(x) = a\\cos 2x+b\\sin 2x\\) is a particular solution of \\((E)\\).'),
      p2('c', 'បង្ហាញថា \\(h = f+g\\) ជាចម្លើយទូទៅនៃ \\((E)\\) បើ \\(f\\) ជាចម្លើយនៃ \\((E\')\\)។',
              'Show that \\(h = f+g\\) is the general solution of \\((E)\\) when \\(f\\) solves \\((E\')\\).'),
      p2('d', 'រក \\(h\\) ដែល \\(h(0) = 0\\) និង \\(h\'(0) = 0\\)។', 'Find \\(h\\) with \\(h(0) = 0\\) and \\(h\'(0) = 0\\).')
    ]),
    wr(53, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-3y\'+\\dfrac{5}{2}y = e^{3x}\\)។',
          'Consider \\((E): y\'\'-3y\'+\\dfrac{5}{2}y = e^{3x}\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\(y\'\'-3y\'+\\dfrac{5}{2}y = 0\\;(E\')\\)។', 'Solve \\(y\'\'-3y\'+\\dfrac{5}{2}y = 0\\;(E\')\\).'),
      p2('b', 'បង្ហាញថា អនុគមន៍ \\(g\\) កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(g(x) = \\dfrac{2}{5}e^{3x}\\) ជាចម្លើយពិសេសនៃសមីការ \\((E)\\)។',
              'Show that \\(g(x) = \\dfrac{2}{5}e^{3x}\\) is a particular solution of \\((E)\\).'),
      p2('c', 'បើ \\(f\\) ជាចម្លើយនៃ \\((E)\\) ស្រាយបញ្ជាក់ថា \\(f-g\\) ជាចម្លើយនៃ \\((E\')\\)។ ទាញរកចម្លើយ \\(f\\) នៃ \\((E)\\)។',
              'If \\(f\\) solves \\((E)\\), show \\(f-g\\) solves \\((E\')\\), then deduce \\(f\\).')
    ]),
    wr(54, 'គេឲ្យសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-6y\'+5y = xe^{2x}\\)។',
          'Consider \\((E): y\'\'-6y\'+5y = xe^{2x}\\).', [
      p2('a', 'រកចម្លើយទូទៅ \\(y_h\\) នៃសមីការ \\(y\'\'-6y\'+5y = 0\\)។', 'Solve \\(y\'\'-6y\'+5y = 0\\).'),
      p2('b', 'កំណត់ \\(A\\) និង \\(B\\) ដើម្បីឲ្យ \\(y_p = e^{2x}(Ax+B)\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Find \\(A\\) and \\(B\\) so that \\(y_p = e^{2x}(Ax+B)\\) solves \\((E)\\).'),
      p2('c', 'បង្ហាញថា \\(y = y_h+y_p\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
              'Show that \\(y = y_h+y_p\\) solves \\((E)\\).')
    ]),
    wr(55, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+3y\'+2y = \\dfrac{x-1}{x^2}e^{-x}\\)។',
          'Consider \\((E): y\'\'+3y\'+2y = \\dfrac{x-1}{x^2}e^{-x}\\).', [
      p2('a', 'ដោះស្រាយសមីការ \\(y\'\'+3y\'+2y = 0\\;(E\')\\)។', 'Solve \\(y\'\'+3y\'+2y = 0\\;(E\')\\).'),
      p2('b', 'បង្ហាញថា អនុគមន៍ \\(g\\) កំណត់លើ \\((0,+\\infty)\\) ដោយ \\(g(x) = e^{-x}\\ln x\\) ជាចម្លើយពិសេសនៃ \\((E)\\)។',
              'Show that \\(g(x) = e^{-x}\\ln x\\) is a particular solution of \\((E)\\) on \\((0,+\\infty)\\).'),
      p2('c', 'បើ \\(f\\) ជាចម្លើយនៃ \\((E)\\) ស្រាយបញ្ជាក់ថា \\(f-g\\) ជាចម្លើយនៃ \\((E\')\\)។ ទាញរកចម្លើយ \\(f\\) នៃ \\((E)\\)។',
              'If \\(f\\) solves \\((E)\\), show \\(f-g\\) solves \\((E\')\\), then deduce \\(f\\).')
    ]),
    wr(56, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+4y = x^2+2-1\\)។',
          'Consider \\((E): y\'\'+4y = x^2+2-1\\).', [
      p2('a', 'រកអនុគមន៍ \\(f_1(x) = ax^2+bx+c\\) ជាចម្លើយរបស់សមីការ \\((E)\\)។',
              'Find \\(f_1(x) = ax^2+bx+c\\) solving \\((E)\\).'),
      p2('b', 'បង្ហាញថា បើ \\(f(x)\\) ជាចម្លើយនៃសមីការ \\((E)\\) នោះ \\(g(x) = f(x)-f_1(x)\\) ជាចម្លើយមួយរបស់សមីការ \\(y\'\'+4y = 0\\)។',
              'Show that if \\(f\\) solves \\((E)\\), then \\(g = f-f_1\\) solves \\(y\'\'+4y = 0\\).')
    ], false),
    wr(57, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'+2y = 2\\dfrac{e^{-x}}{1+2e^{x}}\\)។',
          'Consider \\((E): y\'+2y = 2\\dfrac{e^{-x}}{1+2e^{x}}\\).', [
      p2('a', 'ផ្ទៀងផ្ទាត់ថាអនុគមន៍ \\(f\\) ដែល \\(f(x) = e^{-2x}\\ln\\left(1+2e^{x}\\right)\\) ជាចម្លើយមួយនៃ \\((E)\\)។',
              'Check that \\(f(x) = e^{-2x}\\ln\\left(1+2e^{x}\\right)\\) solves \\((E)\\).'),
      p2('b', 'បង្ហាញថា \\(\\varphi\\) ជាចម្លើយនៃ \\((E)\\) លុះត្រាតែ \\((\\varphi-f)\\) ជាចម្លើយនៃសមីការ \\(y\'+2y = 0\\)។',
              'Show that \\(\\varphi\\) solves \\((E)\\) exactly when \\(\\varphi-f\\) solves \\(y\'+2y = 0\\).')
    ]),
    wr(58, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+2y\'-3y = 0\\)។',
          'Solve \\((E): y\'\'+2y\'-3y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយពិសេសមួយនៃសមីការឌីផេរ៉ង់ស្យែល \\((E)\\) ដែល \\(y(0) = 1\\) និង \\(y\'(1) = e\\)។',
              'Find the particular solution with \\(y(0) = 1\\) and \\(y\'(1) = e\\).')
    ]),
    wr(59, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'-3y\'+2y = 0\\)។',
          'Solve \\((E): y\'\'-3y\'+2y = 0\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយពិសេសមួយនៃសមីការឌីផេរ៉ង់ស្យែល \\((E)\\) ដែល \\(y(0) = 1\\) និង \\(y\'(1) = 2e^{2}\\)។',
              'Find the particular solution with \\(y(0) = 1\\) and \\(y\'(1) = 2e^{2}\\).')
    ]),
    wr(60, 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\'+4y\' = 5y\\)។',
          'Solve \\((E): y\'\'+4y\' = 5y\\).', [
      p2('a', 'ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល \\((E)\\)។', 'Solve \\((E)\\).'),
      p2('b', 'រកចម្លើយពិសេសមួយនៃសមីការ \\((E)\\) បើគេដឹងថាក្រាប \\((C)\\) នៃអនុគមន៍ចម្លើយនេះកាត់តាមចំណុច \\((0,3)\\) ហើយបន្ទាត់ប៉ះទៅនឹងក្រាប \\((C)\\) ត្រង់ចំណុចនេះមានមេគុណប្រាប់ទិសស្មើ \\(-3\\)។',
              'Find the solution whose curve passes through \\((0,3)\\) with tangent slope \\(-3\\) there.')
    ]),
    wr(61, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\(y\'\'+3y\'+3y = 2y\'+5y\\;(E)\\)។ ដោះស្រាយសមីការឌីផេរ៉ង់ស្យែលនេះ។ បង្ហាញថាអនុគមន៍ \\(y = -e^{-2x}+2e^{x}\\) ជាចម្លើយនៃសមីការ \\((E)\\)។',
          'Consider \\(y\'\'+3y\'+3y = 2y\'+5y\\;(E)\\). Solve it, then show that \\(y = -e^{-2x}+2e^{x}\\) is a solution.', []),
    wr(62, 'គេមានសមីការឌីផេរ៉ង់ស្យែល \\((E): y\'\' = -4y\\)។',
          'Consider \\((E): y\'\' = -4y\\).', [
      p2('a', 'បង្ហាញថា \\(y = \\lambda\\cos 2x+\\mu\\sin 2x\\) ដែល \\(\\lambda,\\mu\\) ជាចំនួនពិត ជាចម្លើយរបស់ \\((E)\\)។',
              'Show that \\(y = \\lambda\\cos 2x+\\mu\\sin 2x\\), with \\(\\lambda,\\mu\\) real, solves \\((E)\\).'),
      p2('b', 'រកចម្លើយពិសេសរបស់សមីការ \\((E)\\) ដែល \\(y\'\'(0) = 1\\) និង \\(y\'(0) = 0\\)។',
              'Find the particular solution with \\(y\'\'(0) = 1\\) and \\(y\'(0) = 0\\).')
    ])
  ];

  /* Exercises taken from past national examinations. */
  var BAC = { 56: '2014', 57: '2015', 58: '2016', 59: '2017',
              60: '2018', 61: '2019', 62: '2021' };
  for (var i = 0; i < WR.length; i++) {
    if (BAC[WR[i].n]) { WR[i].src = 'bac ' + BAC[WR[i].n]; }
  }

  global.MATH_BANK = { key: 'diff', lesson: LESSON, mc: MC, exercises: WR };
})(window);
