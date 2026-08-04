/* Alpha Academy Cambodia — មេរៀនទី១ ចំនួនកុំផ្លិច / Lesson 1: Complex Numbers
   ---------------------------------------------------------------------------
   Grade 12. Everything here carries both languages: `km` for Khmer and `en`
   for English. The page shows whichever the visitor picked with the EN ⇄ ខ្មែរ
   switch in the header, so nothing on this page is Khmer-only.

   Maths is written once, in TeX, because it reads the same in both languages.

   Lesson block types
     { t:'p',  km, en }                 a paragraph
     { t:'m',  tex }                    a display formula
     { t:'ul', items:[{km,en}|{tex}] }  a bullet list
     { t:'eg', km, en, steps:[tex] }    a worked example
     { t:'note', km, en }               a boxed remark

   Exercise shape
     { n, src, q:{km,en}, p:[ {k, t:{km,en}, s:[…] } ] }
     `k` is 'a','b','c'… or '1','2','3' — the page prints ក ខ គ or ១ ២ ៣ in
     Khmer and (a) (b) (c) or 1. 2. 3. in English.
     `src` marks where the exercise comes from, e.g. a national exam year.   */
(function (global) {
  'use strict';

  /* ==================================================================== 1
     THE LESSON                                                           */
  var LESSON = [
    { id: 'what',
      h: { km: 'ចំនួនកុំផ្លិចជាអ្វី?', en: 'What is a complex number?' },
      blocks: [
        { t: 'p',
          km: 'សមីការ \\(x^2=-1\\) គ្មានឬសក្នុងសំណុំចំនួនពិត ព្រោះការេនៃចំនួនពិតណាមួយមិនអាចអវិជ្ជមានបានទេ។ គេកំណត់ចំនួនថ្មីមួយឈ្មោះ \\(i\\) ដែល \\(i^2=-1\\) ។ ចំនួនកុំផ្លិចគឺជាចំនួនដែលមានទម្រង់ \\(z=a+bi\\) ដែល \\(a\\) និង \\(b\\) ជាចំនួនពិត។',
          en: 'The equation \\(x^2=-1\\) has no solution among the real numbers, because the square of a real number is never negative. So we introduce a new number \\(i\\) with \\(i^2=-1\\). A complex number is anything of the form \\(z=a+bi\\), where \\(a\\) and \\(b\\) are real.' },
        { t: 'm', tex: 'i^2 = -1 \\qquad z = a + bi,\\quad a,b \\in \\mathbb{R}' },
        { t: 'ul', items: [
          { km: '\\(a=\\operatorname{Re}(z)\\) ហៅថា ផ្នែកពិត នៃ \\(z\\)', en: '\\(a=\\operatorname{Re}(z)\\) is called the real part of \\(z\\)' },
          { km: '\\(b=\\operatorname{Im}(z)\\) ហៅថា ផ្នែកនិមិត្ត នៃ \\(z\\)', en: '\\(b=\\operatorname{Im}(z)\\) is called the imaginary part of \\(z\\)' },
          { km: 'បើ \\(b=0\\) នោះ \\(z\\) ជាចំនួនពិត។ បើ \\(a=0\\) និង \\(b\\neq 0\\) នោះ \\(z\\) ជាចំនួននិមិត្តសុទ្ធ។', en: 'If \\(b=0\\) then \\(z\\) is real. If \\(a=0\\) and \\(b\\neq 0\\) then \\(z\\) is purely imaginary.' },
          { km: 'ចំនួនកុំផ្លិចពីរស្មើគ្នា លុះត្រាតែផ្នែកពិតស្មើគ្នា និងផ្នែកនិមិត្តស្មើគ្នា។', en: 'Two complex numbers are equal exactly when their real parts match and their imaginary parts match.' }
        ] },
        { t: 'm', tex: 'a+bi = c+di \\iff a=c \\ \\text{and}\\ b=d' },
        { t: 'note',
          km: 'ចំណាំ៖ វិធីនេះជាឧបករណ៍ដ៏មានប្រយោជន៍ — សមីការមួយក្នុងសំណុំ \\(\\mathbb{C}\\) ផ្តល់ឲ្យយើងសមីការពីរក្នុងសំណុំ \\(\\mathbb{R}\\) ។',
          en: 'That last line is the workhorse of the whole chapter: one equation in \\(\\mathbb{C}\\) gives you two equations in \\(\\mathbb{R}\\).' },
        { t: 'eg',
          km: 'រកចំនួនពិត \\(x,y\\) ដែល \\((3+2i)x+(2-i)y=4+5i\\) ។',
          en: 'Find the real numbers \\(x,y\\) such that \\((3+2i)x+(2-i)y=4+5i\\).',
          steps: [
            '(3x+2y) + (2x-y)i = 4+5i',
            '\\begin{cases} 3x+2y = 4 \\\\ 2x-y = 5 \\end{cases}',
            'x = 2,\\quad y = -1'
          ] }
      ] },

    { id: 'ops',
      h: { km: 'ប្រមាណវិធីលើចំនួនកុំផ្លិច', en: 'The four operations' },
      blocks: [
        { t: 'p',
          km: 'បូក ដក និងគុណ ធ្វើដូចពីជគណិតធម្មតា ដោយគ្រាន់តែជំនួស \\(i^2\\) ដោយ \\(-1\\) ។ ចំពោះការចែក គេគុណភាគយក និងភាគបែងនឹងចំនួនកុំផ្លិចឆ្លាស់នៃភាគបែង។',
          en: 'Add, subtract and multiply exactly as in ordinary algebra, then replace \\(i^2\\) by \\(-1\\). To divide, multiply the top and the bottom by the conjugate of the bottom.' },
        { t: 'm', tex: '(a+bi)+(c+di) = (a+c)+(b+d)i' },
        { t: 'm', tex: '(a+bi)-(c+di) = (a-c)+(b-d)i' },
        { t: 'm', tex: '(a+bi)(c+di) = (ac-bd)+(ad+bc)i' },
        { t: 'm', tex: '\\frac{a+bi}{c+di} = \\frac{ac+bd}{c^2+d^2} + \\frac{bc-ad}{c^2+d^2}\\,i' },
        { t: 'eg',
          km: 'សរសេរ \\(z=\\dfrac{2+i}{2-i}\\) ជាទម្រង់ពីជគណិត។',
          en: 'Write \\(z=\\dfrac{2+i}{2-i}\\) in algebraic form.',
          steps: [
            'z = \\frac{2+i}{2-i}\\cdot\\frac{2+i}{2+i} = \\frac{(2+i)^2}{4+1}',
            '= \\frac{4+4i+i^2}{5} = \\frac{3+4i}{5}',
            'z = \\frac{3}{5} + \\frac{4}{5}i'
          ] }
      ] },

    { id: 'powers',
      h: { km: 'ស្វ័យគុណទី \\(n\\) នៃ \\(i\\)', en: 'Powers of \\(i\\)' },
      blocks: [
        { t: 'p',
          km: 'ស្វ័យគុណនៃ \\(i\\) មានវដ្តប្រវែង ៤ ។ ចែក \\(n\\) នឹង ៤ រួចមើលសំណល់៖ សរសេរ \\(n=4k+x\\) ដែល \\(k\\) ជាចំនួនគត់ និង \\(x\\in\\{0,1,2,3\\}\\) ។',
          en: 'The powers of \\(i\\) repeat with period 4. Divide \\(n\\) by 4 and look at the remainder: write \\(n=4k+x\\) with \\(k\\) an integer and \\(x\\in\\{0,1,2,3\\}\\).' },
        { t: 'm', tex: 'i^{4k}=1,\\qquad i^{4k+1}=i,\\qquad i^{4k+2}=-1,\\qquad i^{4k+3}=-i' },
        { t: 'eg',
          km: 'គណនា \\(i^{2023}\\) ។',
          en: 'Evaluate \\(i^{2023}\\).',
          steps: [ '2023 = 4(505) + 3', 'i^{2023} = i^{4(505)+3} = i^3 = -i' ] }
      ] },

    { id: 'conj',
      h: { km: 'ចំនួនកុំផ្លិចឆ្លាស់', en: 'The conjugate' },
      blocks: [
        { t: 'p',
          km: 'បើ \\(z=a+bi\\) នោះចំនួនកុំផ្លិចឆ្លាស់របស់វាគឺ \\(\\overline{z}=a-bi\\) ។ ក្នុងប្លង់ គេឃើញថា \\(\\overline{z}\\) ជារូបឆ្លុះនៃ \\(z\\) ធៀបនឹងអ័ក្សពិត។',
          en: 'If \\(z=a+bi\\), its conjugate is \\(\\overline{z}=a-bi\\). Geometrically, \\(\\overline{z}\\) is the mirror image of \\(z\\) in the real axis.' },
        { t: 'ul', items: [
          { tex: '\\overline{z+w} = \\overline{z}+\\overline{w}' },
          { tex: '\\overline{z-w} = \\overline{z}-\\overline{w}' },
          { tex: '\\overline{z\\,w} = \\overline{z}\\cdot\\overline{w}' },
          { tex: '\\overline{\\left(\\dfrac{z}{w}\\right)} = \\dfrac{\\overline{z}}{\\overline{w}}' },
          { tex: 'z\\cdot\\overline{z} = |z|^2' }
        ] },
        { t: 'note',
          km: 'លទ្ធផលចុងក្រោយ \\(z\\overline{z}=|z|^2\\) ជាចំនួនពិតជានិច្ច — នេះជាមូលហេតុដែលការគុណនឹងចំនួនឆ្លាស់ធ្វើឲ្យភាគបែងក្លាយជាចំនួនពិត។',
          en: 'That last line \\(z\\overline{z}=|z|^2\\) is always real — which is exactly why multiplying by the conjugate clears \\(i\\) out of a denominator.' }
      ] },

    { id: 'modarg',
      h: { km: 'ម៉ូឌុល និងអាគុយម៉ង់', en: 'Modulus and argument' },
      blocks: [
        { t: 'p',
          km: 'គេតាង \\(z=a+bi\\) ដោយចំណុច \\(P(a,b)\\) ក្នុងប្លង់កុំផ្លិច។ ម៉ូឌុលគឺជាចម្ងាយពីគល់ \\(O\\) ទៅ \\(P\\) ហើយអាគុយម៉ង់គឺជាមុំរវាងអ័ក្សពិត និងកាំ \\(OP\\) ។',
          en: 'Plot \\(z=a+bi\\) as the point \\(P(a,b)\\) in the complex plane. The modulus is the distance from the origin \\(O\\) to \\(P\\); the argument is the angle from the positive real axis round to \\(OP\\).' },
        { t: 'm', tex: 'r = |z| = \\sqrt{a^2+b^2}\\ (r>0), \\qquad \\arg z = \\alpha + 2k\\pi,\\ k\\in\\mathbb{Z}' },
        { t: 'm', tex: '\\cos\\alpha = \\frac{a}{r}, \\qquad \\sin\\alpha = \\frac{b}{r}' },
        { t: 'p',
          km: 'ដើម្បីរកអាគុយម៉ង់ ត្រូវមើលកាដ្រង់ដែលចំណុចស្ថិតនៅ៖',
          en: 'To pin the argument down, look at which quadrant the point lands in:' },
        { t: 'ul', items: [
          { km: 'កាដ្រង់ទី១ (\\(\\cos\\alpha>0,\\sin\\alpha>0\\))៖ \\(\\arg z=\\alpha\\)', en: 'Quadrant 1 (\\(\\cos\\alpha>0,\\sin\\alpha>0\\)): \\(\\arg z=\\alpha\\)' },
          { km: 'កាដ្រង់ទី២ (\\(\\cos\\alpha<0,\\sin\\alpha>0\\))៖ \\(\\arg z=\\pi-\\alpha\\)', en: 'Quadrant 2 (\\(\\cos\\alpha<0,\\sin\\alpha>0\\)): \\(\\arg z=\\pi-\\alpha\\)' },
          { km: 'កាដ្រង់ទី៣ (\\(\\cos\\alpha<0,\\sin\\alpha<0\\))៖ \\(\\arg z=\\pi+\\alpha\\)', en: 'Quadrant 3 (\\(\\cos\\alpha<0,\\sin\\alpha<0\\)): \\(\\arg z=\\pi+\\alpha\\)' },
          { km: 'កាដ្រង់ទី៤ (\\(\\cos\\alpha>0,\\sin\\alpha<0\\))៖ \\(\\arg z=2\\pi-\\alpha\\) ឬ \\(-\\alpha\\)', en: 'Quadrant 4 (\\(\\cos\\alpha>0,\\sin\\alpha<0\\)): \\(\\arg z=2\\pi-\\alpha\\), or \\(-\\alpha\\)' }
        ] },
        { t: 'eg',
          km: 'រកម៉ូឌុល និងអាគុយម៉ង់នៃ \\(z=-4+4i\\sqrt{3}\\) ។',
          en: 'Find the modulus and argument of \\(z=-4+4i\\sqrt{3}\\).',
          steps: [
            'r = \\sqrt{(-4)^2+(4\\sqrt{3})^2} = \\sqrt{16+48} = 8',
            '\\cos\\alpha = \\frac{-4}{8} = -\\frac{1}{2},\\qquad \\sin\\alpha = \\frac{4\\sqrt3}{8} = \\frac{\\sqrt3}{2}',
            '\\arg z = \\frac{2\\pi}{3}\\quad (\\text{quadrant 2})'
          ] }
      ] },

    { id: 'polar',
      h: { km: 'ទម្រង់ត្រីកោណមាត្រ', en: 'Trigonometric (polar) form' },
      blocks: [
        { t: 'p',
          km: 'ពេលដឹងម៉ូឌុល និងអាគុយម៉ង់ហើយ គេអាចសរសេរចំនួនកុំផ្លិចជាទម្រង់ត្រីកោណមាត្រ។ ទម្រង់នេះធ្វើឲ្យការគុណ ចែក និងស្វ័យគុណ ងាយស្រួលជាង។',
          en: 'Once you know the modulus and the argument you can write the number in polar form. Multiplication, division and powers are far easier in this form than in \\(a+bi\\).' },
        { t: 'm', tex: 'z = r(\\cos\\alpha + i\\sin\\alpha)' },
        { t: 'p',
          km: 'បើ \\(z_1=r_1(\\cos\\alpha_1+i\\sin\\alpha_1)\\) និង \\(z_2=r_2(\\cos\\alpha_2+i\\sin\\alpha_2)\\) នោះ៖',
          en: 'If \\(z_1=r_1(\\cos\\alpha_1+i\\sin\\alpha_1)\\) and \\(z_2=r_2(\\cos\\alpha_2+i\\sin\\alpha_2)\\), then:' },
        { t: 'm', tex: 'z_1z_2 = r_1r_2\\big[\\cos(\\alpha_1+\\alpha_2) + i\\sin(\\alpha_1+\\alpha_2)\\big]' },
        { t: 'm', tex: '\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big[\\cos(\\alpha_1-\\alpha_2) + i\\sin(\\alpha_1-\\alpha_2)\\big]' },
        { t: 'note',
          km: 'ជាពាក្យសាមញ្ញ៖ គុណ គឺគុណម៉ូឌុល និងបូកអាគុយម៉ង់។ ចែក គឺចែកម៉ូឌុល និងដកអាគុយម៉ង់។',
          en: 'In words: to multiply, multiply the moduli and add the arguments. To divide, divide the moduli and subtract the arguments.' }
      ] },

    { id: 'moivre',
      h: { km: 'រូបមន្តដឺម័រ', en: 'De Moivre’s formula' },
      blocks: [
        { t: 'p',
          km: 'ការគុណចំនួនកុំផ្លិចមួយនឹងខ្លួនឯង \\(n\\) ដង ផ្តល់រូបមន្តដឺម័រ។',
          en: 'Multiplying a number by itself \\(n\\) times gives de Moivre’s formula.' },
        { t: 'm', tex: '\\big[r(\\cos\\alpha+i\\sin\\alpha)\\big]^{n} = r^{n}\\big(\\cos n\\alpha + i\\sin n\\alpha\\big)' },
        { t: 'eg',
          km: 'គណនា \\((1+i)^{8}\\) ។',
          en: 'Evaluate \\((1+i)^{8}\\).',
          steps: [
            '1+i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)',
            '(1+i)^{8} = (\\sqrt2)^{8}\\left(\\cos\\frac{8\\pi}{4} + i\\sin\\frac{8\\pi}{4}\\right)',
            '= 16(\\cos 2\\pi + i\\sin 2\\pi) = 16'
          ] },
        { t: 'note',
          km: 'នេះជាមូលហេតុដែលគេត្រូវប្តូរទៅទម្រង់ត្រីកោណមាត្រ មុននឹងគណនាស្វ័យគុណធំៗ ដូចជា \\(z^{2023}\\) ។',
          en: 'This is why you switch to polar form before working out a big power such as \\(z^{2023}\\) — expanding the bracket 2023 times is not an option.' }
      ] },

    { id: 'roots',
      h: { km: 'ឬសទី \\(n\\) នៃចំនួនកុំផ្លិច', en: 'The \\(n\\)th roots' },
      blocks: [
        { t: 'p',
          km: 'ចំនួនកុំផ្លិចមួយដែលខុសពីសូន្យ មានឬសទី \\(n\\) ចំនួន \\(n\\) ខុសៗគ្នា។ ឬសទាំងនោះស្ថិតនៅលើរង្វង់កាំ \\(\\sqrt[n]{r}\\) ហើយបែងចែកគ្នាស្មើៗ។',
          en: 'A non-zero complex number has exactly \\(n\\) distinct \\(n\\)th roots. They sit on a circle of radius \\(\\sqrt[n]{r}\\), spaced evenly around it.' },
        { t: 'm', tex: 'W_k = \\sqrt[n]{r}\\left[\\cos\\left(\\frac{\\alpha+2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\alpha+2k\\pi}{n}\\right)\\right],\\quad k = 0,1,2,\\dots,n-1' },
        { t: 'eg',
          km: 'រកឬសទីបីនៃ \\(8\\) ក្នុងសំណុំ \\(\\mathbb{C}\\) ។',
          en: 'Find the three cube roots of \\(8\\) in \\(\\mathbb{C}\\).',
          steps: [
            '8 = 8(\\cos 0 + i\\sin 0),\\qquad r=8,\\ \\alpha=0',
            'W_k = 2\\left(\\cos\\frac{2k\\pi}{3} + i\\sin\\frac{2k\\pi}{3}\\right),\\ k=0,1,2',
            'W_0 = 2,\\quad W_1 = -1+i\\sqrt3,\\quad W_2 = -1-i\\sqrt3'
          ] }
      ] },

    { id: 'equations',
      h: { km: 'សមីការក្នុងសំណុំ \\(\\mathbb{C}\\)', en: 'Equations in \\(\\mathbb{C}\\)' },
      blocks: [
        { t: 'p',
          km: 'សមីការដឺក្រេពីរ \\(az^2+bz+c=0\\) ដែលមេគុណជាចំនួនពិត តែងមានឬសក្នុង \\(\\mathbb{C}\\) ជានិច្ច។ បើឌីស្គ្រីមីណង់ \\(\\Delta<0\\) នោះឬសទាំងពីរជាចំនួនកុំផ្លិចឆ្លាស់គ្នា។',
          en: 'A quadratic \\(az^2+bz+c=0\\) with real coefficients always has roots in \\(\\mathbb{C}\\). When the discriminant \\(\\Delta<0\\), the two roots are conjugates of each other.' },
        { t: 'm', tex: '\\Delta = b^2-4ac < 0 \\implies z = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}' },
        { t: 'eg',
          km: 'ដោះស្រាយ \\(z^2-8z+64=0\\) ក្នុង \\(\\mathbb{C}\\) ។',
          en: 'Solve \\(z^2-8z+64=0\\) in \\(\\mathbb{C}\\).',
          steps: [
            '\\Delta = 64 - 256 = -192 < 0',
            '\\sqrt{-\\Delta} = \\sqrt{192} = 8\\sqrt3',
            'z = \\frac{8 \\pm 8i\\sqrt3}{2} = 4 \\pm 4i\\sqrt3'
          ] },
        { t: 'note',
          km: 'បើគេដឹងឬសមួយ \\(z_1\\) ហើយមេគុណជាចំនួនពិត នោះឬសទីពីរគឺ \\(\\overline{z_1}\\) ភ្លាម ហើយគេអាចប្រើផលបូក និងផលគុណឬស ដើម្បីរកមេគុណ។',
          en: 'If the coefficients are real and you already know one root \\(z_1\\), the other is \\(\\overline{z_1}\\) straight away — then sum and product of roots give you the coefficients.' }
      ] }
  ];

  /* ==================================================================== 2
     THE EXERCISES
     1–30 are the exercise set that comes with the lesson; several are past
     national examination questions and carry the year in `src`.
     31–40 are extra practice.                                            */
  var EX = [
    { n: 1,
      q: { km: 'សរសេរចំនួនកុំផ្លិចខាងក្រោមជាទម្រង់ពីជគណិត \\(a+bi\\) ៖',
           en: 'Write each complex number below in algebraic form \\(a+bi\\):' },
      p: [
        { k: 'a', t: { km: '\\(z=(1+i)(3-2i)\\)', en: '\\(z=(1+i)(3-2i)\\)' } },
        { k: 'b', t: { km: '\\(z=\\dfrac{2+i}{2-i}\\)', en: '\\(z=\\dfrac{2+i}{2-i}\\)' } },
        { k: 'c', t: { km: '\\(z=(1+3i)^2\\)', en: '\\(z=(1+3i)^2\\)' } },
        { k: 'd', t: { km: '\\(z=\\dfrac{1+\\sqrt2-i}{1+\\sqrt2+i}\\)', en: '\\(z=\\dfrac{1+\\sqrt2-i}{1+\\sqrt2+i}\\)' } },
        { k: 'e', t: { km: '\\(z=(1+i)^3\\)', en: '\\(z=(1+i)^3\\)' } },
        { k: 'f', t: { km: '\\(z=\\dfrac{(1+i)(1+3i)}{(1-i)^2}\\)', en: '\\(z=\\dfrac{(1+i)(1+3i)}{(1-i)^2}\\)' } }
      ] },

    { n: 2,
      q: { km: 'សរសេរចំនួនកុំផ្លិចខាងក្រោមជាទម្រង់ត្រីកោណមាត្រ ៖',
           en: 'Write each complex number below in trigonometric form:' },
      p: [
        { k: 'a', t: { km: '\\(z=3+3i\\)', en: '\\(z=3+3i\\)' } },
        { k: 'b', t: { km: '\\(z=2-2\\sqrt3\\,i\\)', en: '\\(z=2-2\\sqrt3\\,i\\)' } },
        { k: 'c', t: { km: '\\(z=-4+4i\\sqrt3\\)', en: '\\(z=-4+4i\\sqrt3\\)' } },
        { k: 'd', t: { km: '\\(z=-\\sqrt3-i\\)', en: '\\(z=-\\sqrt3-i\\)' } },
        { k: 'e', t: { km: '\\(z=\\sin\\dfrac{3\\pi}{7}+i\\cos\\dfrac{3\\pi}{7}\\)', en: '\\(z=\\sin\\dfrac{3\\pi}{7}+i\\cos\\dfrac{3\\pi}{7}\\)' } },
        { k: 'f', t: { km: '\\(z=1+i\\tan\\dfrac{\\pi}{7}\\)', en: '\\(z=1+i\\tan\\dfrac{\\pi}{7}\\)' } },
        { k: 'g', t: { km: '\\(z=1+\\cos\\dfrac{2\\pi}{9}+i\\sin\\dfrac{2\\pi}{9}\\)', en: '\\(z=1+\\cos\\dfrac{2\\pi}{9}+i\\sin\\dfrac{2\\pi}{9}\\)' } },
        { k: 'h', t: { km: '\\(z=\\sqrt{2+\\sqrt2}+i\\sqrt{2-\\sqrt2}\\)', en: '\\(z=\\sqrt{2+\\sqrt2}+i\\sqrt{2-\\sqrt2}\\)' } },
        { k: 'i', t: { km: '\\(z=2-\\sqrt2+\\sqrt2\\,i\\)', en: '\\(z=2-\\sqrt2+\\sqrt2\\,i\\)' } }
      ] },

    { n: 3,
      q: { km: 'កំណត់ចំនួនពិតពីរ \\(x,y\\) ដែលផ្ទៀងផ្ទាត់សមីការ \\((3+2i)x+(2-i)y=4+5i\\) ។',
           en: 'Find the two real numbers \\(x,y\\) satisfying \\((3+2i)x+(2-i)y=4+5i\\).' },
      p: [] },

    { n: 4,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(Z=3+i\\) និង \\(W=1-i\\) ។',
           en: 'Let \\(Z=3+i\\) and \\(W=1-i\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(Z+W,\\ Z-W,\\ Z\\times W\\) និង \\(\\dfrac{Z}{W}\\) រួចសរសេរលទ្ធផលជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(Z+W,\\ Z-W,\\ Z\\times W\\) and \\(\\dfrac{Z}{W}\\), giving each answer in algebraic form.' } },
        { k: 'b', t: { km: 'កំណត់ចំនួនពិត \\(\\alpha\\) និង \\(\\beta\\) ដែលផ្ទៀងផ្ទាត់ \\(\\alpha Z+\\beta W=2ZW\\) ។',
                       en: 'Find the real numbers \\(\\alpha\\) and \\(\\beta\\) such that \\(\\alpha Z+\\beta W=2ZW\\).' } }
      ] },

    { n: 5,
      q: { km: 'សរសេរចំនួនកុំផ្លិចខាងក្រោមជាទម្រង់ពីជគណិត \\(a+bi\\) ៖',
           en: 'Write each of the following in algebraic form \\(a+bi\\):' },
      p: [
        { k: 'a', t: { km: '\\(X=(1+i)(1+2i)(1+3i)\\)', en: '\\(X=(1+i)(1+2i)(1+3i)\\)' } },
        { k: 'b', t: { km: '\\(Z=\\left(\\dfrac{\\sqrt3+i}{\\sqrt3-i}\\right)^2\\)', en: '\\(Z=\\left(\\dfrac{\\sqrt3+i}{\\sqrt3-i}\\right)^2\\)' } }
      ] },

    { n: 6,
      q: { km: 'ពិចារណាសមីការ \\(x^2+ax+b=0\\) ដែល \\(a,b\\) ជាចំនួនពិត។',
           en: 'Consider the equation \\(x^2+ax+b=0\\), where \\(a,b\\) are real.' },
      p: [
        { k: 'a', t: { km: 'កំណត់ \\(a\\) និង \\(b\\) ដើម្បីឲ្យ \\(x_1=1+i\\sqrt3\\) ជាឬសមួយនៃសមីការ។',
                       en: 'Find \\(a\\) and \\(b\\) so that \\(x_1=1+i\\sqrt3\\) is a root of the equation.' } },
        { k: 'b', t: { km: 'រកឬស \\(x_2\\) មួយទៀត រួចសរសេរ \\(Z=\\left(\\dfrac{x_1}{x_2}\\right)^2\\) ជាទម្រង់ត្រីកោណមាត្រ។',
                       en: 'Find the other root \\(x_2\\), then write \\(Z=\\left(\\dfrac{x_1}{x_2}\\right)^2\\) in trigonometric form.' } }
      ] },

    { n: 7,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(Z=\\sqrt2+i\\sqrt2\\) និង \\(W=\\dfrac{\\sqrt3-1}{2}+i\\dfrac{\\sqrt3+1}{2}\\) ។',
           en: 'Let \\(Z=\\sqrt2+i\\sqrt2\\) and \\(W=\\dfrac{\\sqrt3-1}{2}+i\\dfrac{\\sqrt3+1}{2}\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(U=Z\\cdot W\\) ដោយឲ្យលទ្ធផលជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(U=Z\\cdot W\\), giving the answer in algebraic form.' } },
        { k: 'b', t: { km: 'សរសេរ \\(U\\) និង \\(Z\\) ជាទម្រង់ត្រីកោណមាត្រ រួចទាញរកទម្រង់ត្រីកោណមាត្រនៃ \\(W\\) ។',
                       en: 'Write \\(U\\) and \\(Z\\) in trigonometric form, then deduce the trigonometric form of \\(W\\).' } },
        { k: 'c', t: { km: 'ដោយប្រើលទ្ធផលខាងលើ ចូរស្រាយបញ្ជាក់ថា \\(\\cos\\dfrac{5\\pi}{12}=\\dfrac{\\sqrt6-\\sqrt2}{4}\\) និង \\(\\sin\\dfrac{5\\pi}{12}=\\dfrac{\\sqrt6+\\sqrt2}{4}\\) ។',
                       en: 'Use the results above to prove that \\(\\cos\\dfrac{5\\pi}{12}=\\dfrac{\\sqrt6-\\sqrt2}{4}\\) and \\(\\sin\\dfrac{5\\pi}{12}=\\dfrac{\\sqrt6+\\sqrt2}{4}\\).' } }
      ] },

    { n: 8,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(x=-1-i\\sqrt3\\) និង \\(y=\\sqrt3-i\\sqrt3\\) ។ សរសេរ \\(z=x^2+y^2-4-2i\\sqrt3\\) ; \\(xy\\) និង \\(\\dfrac{x}{y}\\) ជាទម្រង់ពីជគណិត និងជាទម្រង់ត្រីកោណមាត្រ។',
           en: 'Let \\(x=-1-i\\sqrt3\\) and \\(y=\\sqrt3-i\\sqrt3\\). Write \\(z=x^2+y^2-4-2i\\sqrt3\\), \\(xy\\) and \\(\\dfrac{x}{y}\\) in algebraic form and in trigonometric form.' },
      p: [] },

    { n: 9,
      q: { km: 'លំហាត់អំពីទម្រង់ត្រីកោណមាត្រ និងសមីការដឺក្រេបី ៖',
           en: 'Trigonometric form and a cubic equation:' },
      p: [
        { k: 'a', t: { km: 'សរសេរចំនួនកុំផ្លិច \\(z=\\dfrac{\\sqrt2-i\\sqrt6}{2}\\) និង \\(w=-4+i4\\sqrt3\\) ជាទម្រង់ត្រីកោណមាត្រ។',
                       en: 'Write \\(z=\\dfrac{\\sqrt2-i\\sqrt6}{2}\\) and \\(w=-4+i4\\sqrt3\\) in trigonometric form.' } },
        { k: 'b', t: { km: 'ដោះស្រាយសមីការ \\(x^3+4-i4\\sqrt3=0\\) រួចតាងឬសទាំងនោះលើរង្វង់ត្រីកោណមាត្រ។',
                       en: 'Solve \\(x^3+4-i4\\sqrt3=0\\) and mark the roots on the unit circle.' } }
      ] },

    { n: 10,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(Z_1=3+3i\\sqrt3\\) និង \\(Z_2=\\sqrt3+i\\) ។',
           en: 'Let \\(Z_1=3+3i\\sqrt3\\) and \\(Z_2=\\sqrt3+i\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(Z_1\\times Z_2\\) និង \\(\\dfrac{Z_1}{Z_2}\\) ។', en: 'Work out \\(Z_1\\times Z_2\\) and \\(\\dfrac{Z_1}{Z_2}\\).' } },
        { k: 'b', t: { km: 'សរសេរ \\(Z_1\\times Z_2\\) និង \\(\\left(\\dfrac{Z_1}{Z_2}\\right)^2\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(Z_1\\times Z_2\\) and \\(\\left(\\dfrac{Z_1}{Z_2}\\right)^2\\) in trigonometric form.' } },
        { k: 'c', t: { km: 'សរសេរ \\(\\left(\\dfrac{Z_1}{Z_2}\\right)^3\\) ជាទម្រង់ពីជគណិត។', en: 'Write \\(\\left(\\dfrac{Z_1}{Z_2}\\right)^3\\) in algebraic form.' } }
      ] },

    { n: 11,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(z=1+i\\) និង \\(w=\\sqrt3+i\\) ។',
           en: 'Let \\(z=1+i\\) and \\(w=\\sqrt3+i\\).' },
      p: [
        { k: 'a', t: { km: 'សរសេរ \\(\\dfrac{z}{w}\\) ជាទម្រង់ពីជគណិត។', en: 'Write \\(\\dfrac{z}{w}\\) in algebraic form.' } },
        { k: 'b', t: { km: 'សរសេរ \\(z\\), \\(w\\) និង \\(\\dfrac{z}{w}\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z\\), \\(w\\) and \\(\\dfrac{z}{w}\\) in trigonometric form.' } },
        { k: 'c', t: { km: 'ដោយប្រើលទ្ធផលខាងលើ ចូរទាញរកតម្លៃប្រាកដនៃ \\(\\cos\\dfrac{\\pi}{12}\\) និង \\(\\sin\\dfrac{\\pi}{12}\\) ។', en: 'Use those results to find the exact values of \\(\\cos\\dfrac{\\pi}{12}\\) and \\(\\sin\\dfrac{\\pi}{12}\\).' } }
      ] },

    { n: 12,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(a=1+i\\sqrt3\\) និង \\(b=\\sqrt3+i\\) ។',
           en: 'Let \\(a=1+i\\sqrt3\\) and \\(b=\\sqrt3+i\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(z=a^2+iab+b^2\\) និង \\(w=(\\sqrt3-1)\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)\\) ជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(z=a^2+iab+b^2\\) and \\(w=(\\sqrt3-1)\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)\\) in algebraic form.' } },
        { k: 'b', t: { km: 'សរសេរ \\(z\\) និង \\(w\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z\\) and \\(w\\) in trigonometric form.' } },
        { k: 'c', t: { km: 'ស្រាយបញ្ជាក់ថា \\(\\dfrac{z}{w}=8\\sqrt2\\left(\\cos\\dfrac{11\\pi}{12}+i\\sin\\dfrac{11\\pi}{12}\\right)\\) ។',
                       en: 'Show that \\(\\dfrac{z}{w}=8\\sqrt2\\left(\\cos\\dfrac{11\\pi}{12}+i\\sin\\dfrac{11\\pi}{12}\\right)\\).' } }
      ] },

    { n: 13,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(Z_1\\) និង \\(Z_2\\) ដែល \\(|Z_1|=3\\), \\(\\arg(Z_1)=\\dfrac{2\\pi}{3}\\) និង \\(|Z_2|=2\\), \\(\\arg(Z_2)=-\\dfrac{\\pi}{6}\\) ។',
           en: 'Let \\(Z_1\\) and \\(Z_2\\) be complex numbers with \\(|Z_1|=3\\), \\(\\arg(Z_1)=\\dfrac{2\\pi}{3}\\) and \\(|Z_2|=2\\), \\(\\arg(Z_2)=-\\dfrac{\\pi}{6}\\).' },
      p: [
        { k: 'a', t: { km: 'សរសេរ \\(Z_1\\) និង \\(Z_2\\) ជាទម្រង់ពីជគណិត រួចសរសេរ \\(Z_1\\times Z_2\\) និង \\(\\dfrac{Z_2}{Z_1}\\) ជាទម្រង់ត្រីកោណមាត្រ។',
                       en: 'Write \\(Z_1\\) and \\(Z_2\\) in algebraic form, then write \\(Z_1\\times Z_2\\) and \\(\\dfrac{Z_2}{Z_1}\\) in trigonometric form.' } },
        { k: 'b', t: { km: 'គណនា \\(Z_2^{\\,2023}\\) ដោយឲ្យលទ្ធផលជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(Z_2^{\\,2023}\\), giving the answer in algebraic form.' } }
      ] },

    { n: 14,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(z_1=-1+i\\sqrt3\\) និង \\(z_2=1-i\\sqrt3\\) ។',
           en: 'Let \\(z_1=-1+i\\sqrt3\\) and \\(z_2=1-i\\sqrt3\\).' },
      p: [
        { k: '1', t: { km: 'គណនា \\(z_1+z_2\\) ; \\(z_1-z_2\\) ; \\(z_1\\times z_2\\) ។', en: 'Work out \\(z_1+z_2\\), \\(z_1-z_2\\) and \\(z_1\\times z_2\\).' } },
        { k: '2', t: { km: 'សរសេរ \\(z_1-z_2\\) និង \\(z_1\\times z_2\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z_1-z_2\\) and \\(z_1\\times z_2\\) in trigonometric form.' } }
      ] },

    { n: 15,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(Z_1=(1+\\sqrt3)+i\\sqrt3\\) និង \\(Z_2=(1-\\sqrt3)+i\\sqrt3\\) ។',
           en: 'Let \\(Z_1=(1+\\sqrt3)+i\\sqrt3\\) and \\(Z_2=(1-\\sqrt3)+i\\sqrt3\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(U=Z_1+Z_2\\) ; \\(V=\\overline{Z_1}-Z_2\\) ; \\(W=\\left(\\dfrac{Z_1}{Z_2+2\\sqrt3}\\right)^{2022}\\) ជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(U=Z_1+Z_2\\), \\(V=\\overline{Z_1}-Z_2\\) and \\(W=\\left(\\dfrac{Z_1}{Z_2+2\\sqrt3}\\right)^{2022}\\) in algebraic form.' } },
        { k: 'b', t: { km: 'សរសេរ \\(U\\) និង \\(V\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(U\\) and \\(V\\) in trigonometric form.' } }
      ] },

    { n: 16,
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(Z_1=1+2i\\) ; \\(Z_2=1\\) និង \\(Z_3=2i\\) ។',
           en: 'Let \\(Z_1=1+2i\\), \\(Z_2=1\\) and \\(Z_3=2i\\).' },
      p: [
        { k: '1', t: { km: 'គណនា \\(Z_1+Z_2\\) ; \\(Z_1-Z_3\\) ; \\(Z_2-Z_3\\) ; \\(Z_1\\times(Z_2-Z_3)\\) និង \\(\\dfrac{Z_1}{Z_2-Z_3}\\) ។',
                       en: 'Work out \\(Z_1+Z_2\\), \\(Z_1-Z_3\\), \\(Z_2-Z_3\\), \\(Z_1\\times(Z_2-Z_3)\\) and \\(\\dfrac{Z_1}{Z_2-Z_3}\\).' } },
        { k: '2', t: { km: 'សរសេរ \\(Z_1+Z_2\\) ; \\(Z_1-Z_3\\) និង \\(\\left(\\dfrac{Z_1-Z_3}{Z_1+Z_2}\\right)^2\\) ជាទម្រង់ត្រីកោណមាត្រ។',
                       en: 'Write \\(Z_1+Z_2\\), \\(Z_1-Z_3\\) and \\(\\left(\\dfrac{Z_1-Z_3}{Z_1+Z_2}\\right)^2\\) in trigonometric form.' } }
      ] },

    { n: 17,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(Z_1=x(1+\\sqrt3)+i\\sqrt3\\) និង \\(Z_2=x(1-\\sqrt3)+i\\sqrt3\\) ដែល \\(x\\) ជាចំណោនពិតខុសពីសូន្យ។',
           en: 'Let \\(Z_1=x(1+\\sqrt3)+i\\sqrt3\\) and \\(Z_2=x(1-\\sqrt3)+i\\sqrt3\\), where \\(x\\) is a non-zero real number.' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(U=Z_1+Z_2\\) ; \\(V=\\overline{Z_1}-Z_2\\) ; \\(W=Z_1\\times Z_2\\) ។', en: 'Work out \\(U=Z_1+Z_2\\), \\(V=\\overline{Z_1}-Z_2\\) and \\(W=Z_1\\times Z_2\\).' } },
        { k: 'b', t: { km: 'សរសេរ \\(U\\) និង \\(V\\) ជាទម្រង់ត្រីកោណមាត្រក្នុងករណី \\(x=1\\) ។', en: 'Write \\(U\\) and \\(V\\) in trigonometric form in the case \\(x=1\\).' } }
      ] },

    { n: 18,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(Z=\\dfrac{1+i\\sqrt3}{1-i}\\) ។',
           en: 'Let \\(Z=\\dfrac{1+i\\sqrt3}{1-i}\\).' },
      p: [
        { k: '1', t: { km: 'សរសេរ \\(Z\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(Z\\) in trigonometric form.' } },
        { k: '2', t: { km: 'រកចំនួនគត់វិជ្ជមាន \\(n\\) ដើម្បីឲ្យ \\(Z^n\\) ជាចំនួនកុំផ្លិចពិត។', en: 'Find the positive integers \\(n\\) for which \\(Z^n\\) is real.' } },
        { k: '3', t: { km: 'រកចំនួនគត់វិជ្ជមាន \\(n\\) ដើម្បីឲ្យ \\(Z^n\\) ជាចំនួនកុំផ្លិចនិមិត្តសុទ្ធ។', en: 'Find the positive integers \\(n\\) for which \\(Z^n\\) is purely imaginary.' } }
      ] },

    { n: 19,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(Z=a+bi\\) និង \\(A=i(1+Z)\\) ។',
           en: 'Let \\(Z=a+bi\\) and \\(A=i(1+Z)\\).' },
      p: [
        { k: '1', t: { km: 'គណនា \\(A\\) ជាអនុគមន៍នៃ \\(a\\) និង \\(b\\) ដោយឲ្យលទ្ធផលជាទម្រង់ពីជគណិត។', en: 'Express \\(A\\) in terms of \\(a\\) and \\(b\\), in algebraic form.' } },
        { k: '2', t: { km: 'កំណត់តម្លៃ \\(a\\) និង \\(b\\) ដើម្បីឲ្យបាន \\(A=Z\\) ។', en: 'Find \\(a\\) and \\(b\\) so that \\(A=Z\\).' } },
        { k: '3', t: { km: 'សរសេរ \\(W=-\\dfrac12+i\\dfrac12\\) ជាទម្រង់ត្រីកោណមាត្រ រួចគណនា \\(W^4\\) ជាទម្រង់ពីជគណិត។', en: 'Write \\(W=-\\dfrac12+i\\dfrac12\\) in trigonometric form, then work out \\(W^4\\) in algebraic form.' } }
      ] },

    { n: 20,
      q: { km: 'គេមានពហុធា \\(p(z)=z^3-3z^2+3z+7\\) ដែល \\(z\\) ជាចំនួនកុំផ្លិច។',
           en: 'Let \\(p(z)=z^3-3z^2+3z+7\\), where \\(z\\) is complex.' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(p(-1)\\) ។', en: 'Work out \\(p(-1)\\).' } },
        { k: 'b', t: { km: 'កំណត់ចំនួនពិត \\(a\\) និង \\(b\\) បើ \\(p(z)=(z+1)(z^2+az+b)\\) ។', en: 'Find the real numbers \\(a\\) and \\(b\\) such that \\(p(z)=(z+1)(z^2+az+b)\\).' } },
        { k: 'c', t: { km: 'ដោះស្រាយសមីការ \\(p(z)=0\\) ក្នុងសំណុំ \\(\\mathbb{C}\\) ។', en: 'Solve \\(p(z)=0\\) in \\(\\mathbb{C}\\).' } }
      ] },

    { n: 21,
      q: { km: 'ចំណុច \\(A,B,C,G\\) មានអាហ្វិចរៀងគ្នា \\(z_A=-1\\), \\(z_B=2+i\\sqrt3\\), \\(z_C=2-i\\sqrt3\\), \\(z_G=3\\) ។',
           en: 'The points \\(A,B,C,G\\) have affixes \\(z_A=-1\\), \\(z_B=2+i\\sqrt3\\), \\(z_C=2-i\\sqrt3\\), \\(z_G=3\\).' },
      p: [
        { k: 'a', t: { km: 'សង់ចំណុច \\(A,B,C,G\\) នៅក្នុងប្លង់កុំផ្លិច។', en: 'Plot \\(A,B,C,G\\) in the complex plane.' } },
        { k: 'b', t: { km: 'គណនា \\(AB\\) ; \\(BC\\) ; \\(AC\\) និងទាញរកប្រភេទនៃត្រីកោណ \\(ABC\\) ។', en: 'Work out \\(AB\\), \\(BC\\), \\(AC\\) and deduce what kind of triangle \\(ABC\\) is.' } },
        { k: 'c', t: { km: 'គណនាអាគុយម៉ង់នៃ \\(\\dfrac{z_A-z_C}{z_G-z_C}\\) រួចទាញរកប្រភេទនៃត្រីកោណ \\(GAC\\) ។', en: 'Work out the argument of \\(\\dfrac{z_A-z_C}{z_G-z_C}\\) and deduce what kind of triangle \\(GAC\\) is.' } }
      ] },

    { n: 22,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(z_1=4+4i\\) និង \\(z_2=1-i\\sqrt3\\) ។',
           en: 'Let \\(z_1=4+4i\\) and \\(z_2=1-i\\sqrt3\\).' },
      p: [
        { k: 'a', t: { km: 'កំណត់ម៉ូឌុល និងអាគុយម៉ង់នៃ \\(z_1^2\\) ; \\(z_1z_2\\) ; \\(z_1^3\\) ; \\(\\dfrac{z_1}{z_2}\\) ; \\(\\dfrac{z_2}{z_1}\\) ។',
                       en: 'Find the modulus and argument of \\(z_1^2\\), \\(z_1z_2\\), \\(z_1^3\\), \\(\\dfrac{z_1}{z_2}\\) and \\(\\dfrac{z_2}{z_1}\\).' } },
        { k: 'b', t: { km: 'គណនា \\(z_1^{2023}\\) និង \\(z_2^{2023}\\) ដោយឲ្យលទ្ធផលជាទម្រង់ពីជគណិត។',
                       en: 'Work out \\(z_1^{2023}\\) and \\(z_2^{2023}\\), giving each answer in algebraic form.' } }
      ] },

    { n: 23,
      q: { km: 'គេឲ្យចំនួនកុំផ្លិច \\(z=2+\\sqrt3+i\\) ។',
           en: 'Let \\(z=2+\\sqrt3+i\\).' },
      p: [
        { k: 'a', t: { km: 'សរសេរ \\(z^2\\) ជាទម្រង់ពីជគណិត និងជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z^2\\) in algebraic form and in trigonometric form.' } },
        { k: 'b', t: { km: 'ទាញរកម៉ូឌុល និងអាគុយម៉ង់នៃ \\(z\\) រួចសរសេរ \\(z\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Deduce the modulus and argument of \\(z\\), then write \\(z\\) in trigonometric form.' } }
      ] },

    { n: 24,
      q: { km: '\\(Z\\) និង \\(W\\) ជាចំនួនកុំផ្លិចដែល \\(Z=-2+2\\sqrt3\\,i\\) និង \\(W=x(x-i)+y(y+i)\\) ដែល \\(x,y\\in\\mathbb{R}\\) ។',
           en: 'Let \\(Z=-2+2\\sqrt3\\,i\\) and \\(W=x(x-i)+y(y+i)\\), where \\(x,y\\in\\mathbb{R}\\).' },
      p: [
        { k: 'a', t: { km: 'សរសេរ \\(Z\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(Z\\) in trigonometric form.' } },
        { k: 'b', t: { km: 'សរសេរ \\(Z^3\\) ជាទម្រង់ \\(a+bi\\) ។', en: 'Write \\(Z^3\\) in the form \\(a+bi\\).' } },
        { k: 'c', t: { km: 'គណនា \\(x\\) និង \\(y\\) បើ \\(\\overline{W}=Z^3\\) ។', en: 'Find \\(x\\) and \\(y\\) if \\(\\overline{W}=Z^3\\).' } }
      ] },

    { n: 25, src: '2015',
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(z_1=-1+i\\sqrt3\\) និង \\(z_2=1-i\\sqrt3\\) ។',
           en: 'Let \\(z_1=-1+i\\sqrt3\\) and \\(z_2=1-i\\sqrt3\\).' },
      p: [
        { k: '1', t: { km: 'គណនា \\(z_1+z_2\\) ; \\(z_1-z_2\\) ; \\(z_1\\times z_2\\) ។', en: 'Work out \\(z_1+z_2\\), \\(z_1-z_2\\) and \\(z_1\\times z_2\\).' } },
        { k: '2', t: { km: 'សរសេរជាទម្រង់ត្រីកោណមាត្រនៃ \\(z_1-z_2\\) និង \\(z_1\\times z_2\\) ។', en: 'Write \\(z_1-z_2\\) and \\(z_1\\times z_2\\) in trigonometric form.' } }
      ] },

    { n: 26, src: '2016',
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(z_1=\\sqrt3-i\\) ; \\(z_2=(1-\\sqrt3)+(1-\\sqrt3)i\\) និង \\(z_3=-\\dfrac12\\) ។ គណនា \\(z_1+z_2\\) និង \\((z_1+z_2)\\times z_3\\) ។ សរសេរ \\(Z=(z_1+z_2)\\times z_3\\) ជាទម្រង់ត្រីកោណមាត្រ រួចទាញរកតម្លៃនៃ \\(Z^3\\) ។',
           en: 'Let \\(z_1=\\sqrt3-i\\), \\(z_2=(1-\\sqrt3)+(1-\\sqrt3)i\\) and \\(z_3=-\\dfrac12\\). Work out \\(z_1+z_2\\) and \\((z_1+z_2)\\times z_3\\). Write \\(Z=(z_1+z_2)\\times z_3\\) in trigonometric form and deduce the value of \\(Z^3\\).' },
      p: [] },

    { n: 27, src: '2017',
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(z_1=1+i\\sqrt3\\) និង \\(z_2=6\\left(\\cos\\dfrac{\\pi}{4}+i\\sin\\dfrac{\\pi}{4}\\right)\\) ។ សរសេរផលគុណ \\(z_1\\times z_2\\) ជាទម្រង់ពីជគណិត។',
           en: 'Let \\(z_1=1+i\\sqrt3\\) and \\(z_2=6\\left(\\cos\\dfrac{\\pi}{4}+i\\sin\\dfrac{\\pi}{4}\\right)\\). Write the product \\(z_1\\times z_2\\) in algebraic form.' },
      p: [] },

    { n: 28, src: '2018',
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(z_1=3+3i\\sqrt3\\) និង \\(z_2=\\sqrt3+i\\) ។',
           en: 'Let \\(z_1=3+3i\\sqrt3\\) and \\(z_2=\\sqrt3+i\\).' },
      p: [
        { k: 'a', t: { km: 'គណនា \\(z_1z_2\\) និង \\(\\dfrac{z_1}{z_2}\\) ។', en: 'Work out \\(z_1z_2\\) and \\(\\dfrac{z_1}{z_2}\\).' } },
        { k: 'b', t: { km: 'សរសេរ \\(z_1z_2\\) និង \\(\\left(\\dfrac{z_1}{z_2}\\right)^2\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z_1z_2\\) and \\(\\left(\\dfrac{z_1}{z_2}\\right)^2\\) in trigonometric form.' } },
        { k: 'c', t: { km: 'សរសេរ \\(\\left(\\dfrac{z_1}{z_2}\\right)^3\\) ជាទម្រង់ពីជគណិត។', en: 'Write \\(\\left(\\dfrac{z_1}{z_2}\\right)^3\\) in algebraic form.' } }
      ] },

    { n: 29, src: '2019',
      q: { km: 'សមីការ និងទម្រង់ត្រីកោណមាត្រ ៖',
           en: 'An equation and a trigonometric form:' },
      p: [
        { k: 'a', t: { km: 'ដោះស្រាយសមីការ \\(z^2-8z+64=0\\) ក្នុងសំណុំចំនួនកុំផ្លិច \\(\\mathbb{C}\\) ។', en: 'Solve \\(z^2-8z+64=0\\) in \\(\\mathbb{C}\\).' } },
        { k: 'b', t: { km: 'គេមាន \\(z_1=4+4i\\sqrt3\\) និង \\(z_2=4-4i\\sqrt3\\) ។ សរសេរ \\(\\left(2Z_1+\\overline{Z_2}\\right)\\) ជាទម្រង់ត្រីកោណមាត្រ រួចគណនា \\(\\left(2Z_1+\\overline{Z_2}\\right)^3\\) ។',
                       en: 'Given \\(z_1=4+4i\\sqrt3\\) and \\(z_2=4-4i\\sqrt3\\), write \\(\\left(2Z_1+\\overline{Z_2}\\right)\\) in trigonometric form and then work out \\(\\left(2Z_1+\\overline{Z_2}\\right)^3\\).' } }
      ] },

    { n: 30, src: '2021',
      q: { km: 'គេមានចំនួនកុំផ្លិច \\(Z_1=\\sqrt2+i\\sqrt2\\) ។',
           en: 'Let \\(Z_1=\\sqrt2+i\\sqrt2\\).' },
      p: [
        { k: 'a', t: { km: 'រក \\(\\overline{Z_1}\\) ។', en: 'Find \\(\\overline{Z_1}\\).' } },
        { k: 'b', t: { km: 'រកម៉ូឌុល និងអាគុយម៉ង់នៃ \\(Z_1\\) រួចសរសេរ \\(Z_1\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Find the modulus and argument of \\(Z_1\\), then write \\(Z_1\\) in trigonometric form.' } },
        { k: 'c', t: { km: 'បង្ហាញថា \\(\\overline{Z_1}\\) ជាឬសនៃសមីការ \\(Z^2=2\\left(Z\\sqrt2-2\\right)\\) ។', en: 'Show that \\(\\overline{Z_1}\\) is a root of \\(Z^2=2\\left(Z\\sqrt2-2\\right)\\).' } }
      ] },

    /* ---- extra practice, written for this page ---------------------- */
    { n: 31, extra: true,
      q: { km: 'គណនាស្វ័យគុណនៃ \\(i\\) ខាងក្រោម ៖', en: 'Work out these powers of \\(i\\):' },
      p: [
        { k: 'a', t: { km: '\\(i^{50}\\)', en: '\\(i^{50}\\)' } },
        { k: 'b', t: { km: '\\(i^{2024}\\)', en: '\\(i^{2024}\\)' } },
        { k: 'c', t: { km: '\\(i^{2023}+i^{2024}+i^{2025}+i^{2026}\\)', en: '\\(i^{2023}+i^{2024}+i^{2025}+i^{2026}\\)' } }
      ] },

    { n: 32, extra: true,
      q: { km: 'រកផ្នែកពិត និងផ្នែកនិមិត្តនៃចំនួនកុំផ្លិចខាងក្រោម ៖', en: 'Find the real and imaginary parts of:' },
      p: [
        { k: 'a', t: { km: '\\(z=(2-3i)(4+i)\\)', en: '\\(z=(2-3i)(4+i)\\)' } },
        { k: 'b', t: { km: '\\(z=\\dfrac{5}{3-4i}\\)', en: '\\(z=\\dfrac{5}{3-4i}\\)' } },
        { k: 'c', t: { km: '\\(z=\\dfrac{1}{i}+\\dfrac{1}{1+i}\\)', en: '\\(z=\\dfrac{1}{i}+\\dfrac{1}{1+i}\\)' } }
      ] },

    { n: 33, extra: true,
      q: { km: 'កំណត់ចំនួនពិត \\(x\\) និង \\(y\\) ក្នុងករណីនីមួយៗ ៖', en: 'Find the real numbers \\(x\\) and \\(y\\) in each case:' },
      p: [
        { k: 'a', t: { km: '\\((x+y)+(x-y)i=6+2i\\)', en: '\\((x+y)+(x-y)i=6+2i\\)' } },
        { k: 'b', t: { km: '\\((2+i)x+(1-3i)y=5-4i\\)', en: '\\((2+i)x+(1-3i)y=5-4i\\)' } }
      ] },

    { n: 34, extra: true,
      q: { km: 'ស្រាយបញ្ជាក់លក្ខណៈនៃចំនួនកុំផ្លិចឆ្លាស់ ៖', en: 'Prove the following properties of the conjugate:' },
      p: [
        { k: 'a', t: { km: 'បង្ហាញថា \\(z+\\overline{z}\\) ជាចំនួនពិតជានិច្ច។', en: 'Show that \\(z+\\overline{z}\\) is always real.' } },
        { k: 'b', t: { km: 'បង្ហាញថា \\(z-\\overline{z}\\) ជាចំនួននិមិត្តសុទ្ធជានិច្ច។', en: 'Show that \\(z-\\overline{z}\\) is always purely imaginary.' } },
        { k: 'c', t: { km: 'ទាញរកលក្ខខណ្ឌលើ \\(z\\) ដើម្បីឲ្យ \\(z=\\overline{z}\\) ។', en: 'Deduce the condition on \\(z\\) for \\(z=\\overline{z}\\).' } }
      ] },

    { n: 35, extra: true,
      q: { km: 'រកម៉ូឌុល និងអាគុយម៉ង់ រួចសរសេរជាទម្រង់ត្រីកោណមាត្រ ៖', en: 'Find the modulus and argument, then write in trigonometric form:' },
      p: [
        { k: 'a', t: { km: '\\(z=-1+i\\)', en: '\\(z=-1+i\\)' } },
        { k: 'b', t: { km: '\\(z=-2i\\)', en: '\\(z=-2i\\)' } },
        { k: 'c', t: { km: '\\(z=\\sqrt3-i\\)', en: '\\(z=\\sqrt3-i\\)' } },
        { k: 'd', t: { km: '\\(z=-5\\)', en: '\\(z=-5\\)' } }
      ] },

    { n: 36, extra: true,
      q: { km: 'ដោយប្រើរូបមន្តដឺម័រ គណនា ៖', en: 'Use de Moivre’s formula to work out:' },
      p: [
        { k: 'a', t: { km: '\\((1-i)^{10}\\)', en: '\\((1-i)^{10}\\)' } },
        { k: 'b', t: { km: '\\(\\left(\\dfrac{1+i\\sqrt3}{2}\\right)^{6}\\)', en: '\\(\\left(\\dfrac{1+i\\sqrt3}{2}\\right)^{6}\\)' } },
        { k: 'c', t: { km: '\\((\\sqrt3+i)^{12}\\)', en: '\\((\\sqrt3+i)^{12}\\)' } }
      ] },

    { n: 37, extra: true,
      q: { km: 'រកឬសទាំងអស់ក្នុងសំណុំ \\(\\mathbb{C}\\) រួចតាងវាលើរង្វង់ ៖', en: 'Find all the roots in \\(\\mathbb{C}\\) and mark them on a circle:' },
      p: [
        { k: 'a', t: { km: 'ឬសទីបួននៃ \\(16\\)', en: 'the fourth roots of \\(16\\)' } },
        { k: 'b', t: { km: 'ឬសទីបីនៃ \\(-27\\)', en: 'the cube roots of \\(-27\\)' } },
        { k: 'c', t: { km: 'ឬសទីបួននៃ \\(-1\\)', en: 'the fourth roots of \\(-1\\)' } }
      ] },

    { n: 38, extra: true,
      q: { km: 'ដោះស្រាយសមីការខាងក្រោមក្នុងសំណុំ \\(\\mathbb{C}\\) ៖', en: 'Solve each equation in \\(\\mathbb{C}\\):' },
      p: [
        { k: 'a', t: { km: '\\(z^2+4=0\\)', en: '\\(z^2+4=0\\)' } },
        { k: 'b', t: { km: '\\(z^2-2z+5=0\\)', en: '\\(z^2-2z+5=0\\)' } },
        { k: 'c', t: { km: '\\(z^2+2z+10=0\\)', en: '\\(z^2+2z+10=0\\)' } },
        { k: 'd', t: { km: '\\(z^4-1=0\\)', en: '\\(z^4-1=0\\)' } }
      ] },

    { n: 39, extra: true,
      q: { km: 'គេឲ្យ \\(z=1+i\\sqrt3\\) ។', en: 'Let \\(z=1+i\\sqrt3\\).' },
      p: [
        { k: 'a', t: { km: 'សរសេរ \\(z\\) ជាទម្រង់ត្រីកោណមាត្រ។', en: 'Write \\(z\\) in trigonometric form.' } },
        { k: 'b', t: { km: 'ទាញរក \\(z^{2024}\\) ជាទម្រង់ពីជគណិត។', en: 'Deduce \\(z^{2024}\\) in algebraic form.' } },
        { k: 'c', t: { km: 'រកចំនួនគត់វិជ្ជមានតូចបំផុត \\(n\\) ដែល \\(z^n\\) ជាចំនួនពិតវិជ្ជមាន។', en: 'Find the smallest positive integer \\(n\\) for which \\(z^n\\) is a positive real number.' } }
      ] },

    { n: 40, extra: true,
      q: { km: 'ចំណុច \\(A\\) និង \\(B\\) មានអាហ្វិច \\(z_A=1+2i\\) និង \\(z_B=4-2i\\) ។', en: 'The points \\(A\\) and \\(B\\) have affixes \\(z_A=1+2i\\) and \\(z_B=4-2i\\).' },
      p: [
        { k: 'a', t: { km: 'គណនាចម្ងាយ \\(AB\\) ។', en: 'Work out the distance \\(AB\\).' } },
        { k: 'b', t: { km: 'រកអាហ្វិចនៃចំណុចកណ្តាល \\(I\\) នៃ \\([AB]\\) ។', en: 'Find the affix of the midpoint \\(I\\) of \\([AB]\\).' } },
        { k: 'c', t: { km: 'រកអាហ្វិចនៃចំណុច \\(C\\) ដើម្បីឲ្យ \\(OACB\\) ជាប្រលេឡូក្រាម។', en: 'Find the affix of the point \\(C\\) making \\(OACB\\) a parallelogram.' } }
      ] }
  ];

  global.CX_BANK = { lesson: LESSON, exercises: EX };
})(window);
