/* Alpha Academy Cambodia — Grade 12 functions
   ---------------------------------------------------------------------------
   Transcribed from មេរៀនទី៤ អនុគមន៍ — RATIONAL, EXPONENTIAL, LOGARITHM
   (pp. 78–119) of the Preah Sisowath NGS summary workbook: the nine-part
   summary lesson (pp. 78–83) and the 33 written exercises that follow
   (ផ្នែកលំហាត់ហ្វឹកហាត់, pp. 84–119).

   Shape is the shared window.MATH_BANK contract read by math-lesson.js:
     lesson    [{ id, h:{km,en}, blocks:[…] }]
     exercises [{ n, q:{km,en}, src?, extra?, p:[{ k, t:{km,en} }] }]

   The chapter has no multiple-choice set, so `mc` is left empty and the
   Exercises view shows the written list on its own.

   The workbook carries no answer key, so nothing here claims a right answer.
*/
(function (global) {
  'use strict';

  /* ==================================================================== 1
     LESSON                                                               */
  var LESSON = [
    { id: 'asymptote',
      h: { km: 'អាស៊ីមតូត', en: 'Asymptotes' },
      blocks: [
        { t: 'p',
          km: 'អាស៊ីមតូតជាបន្ទាត់ដែលក្រាបខិតជិតទៅរកវាដោយមិនប៉ះ។ មានបីប្រភេទ៖ ឈរ ដេក និងទ្រេត។',
          en: 'An asymptote is a line the curve approaches without meeting. There are three kinds: vertical, horizontal and oblique.' },
        { t: 'ul', items: [
          { km: 'អាស៊ីមតូតឈរ (ស្របនឹងអ័ក្ស y\'oy)៖ បើ \\(\\lim\\limits_{x \\to a} f(x) = \\pm\\infty\\) នោះបន្ទាត់ \\(x = a\\) ជាអាស៊ីមតូតឈរ។',
            en: 'Vertical asymptote (parallel to y\'oy): if \\(\\lim\\limits_{x \\to a} f(x) = \\pm\\infty\\), the line \\(x = a\\) is a vertical asymptote.' },
          { km: 'អាស៊ីមតូតដេក (ស្របនឹងអ័ក្ស x\'ox)៖ បើ \\(\\lim\\limits_{x \\to \\pm\\infty} f(x) = b\\) ដែល \\(b\\) ជាចំនួនថេរ នោះបន្ទាត់ \\(y = b\\) ជាអាស៊ីមតូតដេក។',
            en: 'Horizontal asymptote (parallel to x\'ox): if \\(\\lim\\limits_{x \\to \\pm\\infty} f(x) = b\\) with \\(b\\) constant, the line \\(y = b\\) is a horizontal asymptote.' }
        ] },
        { t: 'note',
          km: 'វិធានទី១ — បន្ទាត់ \\(y = ax+b\\) ជាអាស៊ីមតូតទ្រេតនៃក្រាបរបស់អនុគមន៍ \\(f\\) កាលណា៖',
          en: 'Rule 1 — the line \\(y = ax+b\\) is an oblique asymptote of the curve of \\(f\\) when:' },
        { t: 'm', tex: '\\lim_{x \\to +\\infty}\\left[f(x)-(ax+b)\\right] = 0 \\quad\\text{or}\\quad \\lim_{x \\to -\\infty}\\left[f(x)-(ax+b)\\right] = 0' },
        { t: 'p',
          km: 'បើអនុគមន៍ \\(y = f(x)\\) អាចសរសេរជាទម្រង់ \\(f(x) = ax+b+\\varphi(x)\\) ដែល \\(\\lim\\limits_{x \\to \\pm\\infty} \\varphi(x) = 0\\) នោះបន្ទាត់ \\(y = ax+b\\) ជាអាស៊ីមតូតទ្រេត។',
          en: 'If \\(y = f(x)\\) can be written \\(f(x) = ax+b+\\varphi(x)\\) with \\(\\lim\\limits_{x \\to \\pm\\infty} \\varphi(x) = 0\\), then \\(y = ax+b\\) is an oblique asymptote.' },
        { t: 'note',
          km: 'វិធានទី២ — បន្ទាត់ \\(y = ax+b\\) ជាអាស៊ីមតូតទ្រេតនៃក្រាបរបស់ \\(f\\) លុះត្រាតែ៖',
          en: 'Rule 2 — the line \\(y = ax+b\\) is an oblique asymptote of the curve of \\(f\\) exactly when:' },
        { t: 'm', tex: 'a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\qquad\\text{and}\\qquad b = \\lim_{x \\to \\pm\\infty}\\left[f(x)-ax\\right]' },
        { t: 'p', km: 'សំគាល់៖', en: 'Which asymptotes each family has:' },
        { t: 'ul', items: [
          { km: 'អនុគមន៍ពហុធាគ្មានអាស៊ីមតូតទេ។', en: 'A polynomial function has no asymptote.' },
          { km: '\\(y = \\dfrac{ax+b}{cx+d}\\) មានអាស៊ីមតូតឈរមួយ និងអាស៊ីមតូតដេកមួយ។',
            en: '\\(y = \\dfrac{ax+b}{cx+d}\\) has one vertical and one horizontal asymptote.' },
          { km: '\\(y = \\dfrac{ax^2+bx+c}{px+q}\\) មានអាស៊ីមតូតឈរមួយ និងអាស៊ីមតូតទ្រេតមួយ។',
            en: '\\(y = \\dfrac{ax^2+bx+c}{px+q}\\) has one vertical and one oblique asymptote.' },
          { km: '\\(y = \\dfrac{ax^2+bx+c}{px^2+qx+r}\\) មានអាស៊ីមតូតដេកមួយ។',
            en: '\\(y = \\dfrac{ax^2+bx+c}{px^2+qx+r}\\) has one horizontal asymptote.' },
          { km: '\\(y = \\dfrac{ax+b}{px^2+qx+r}\\) មានអ័ក្ស \\((y\'y)\\) ជាអាស៊ីមតូតដេក។',
            en: '\\(y = \\dfrac{ax+b}{px^2+qx+r}\\) has the axis \\((y\'y)\\) as horizontal asymptote.' }
        ] },
        { t: 'p',
          km: 'ចំពោះពីរករណីចុងក្រោយ ចំនួនអាស៊ីមតូតឈរអាស្រ័យលើភាគបែង៖ បើ \\(px^2+qx+r = 0\\) គ្មានឬស គ្មានអាស៊ីមតូតឈរទេ; បើមានឬសឌុប មានអាស៊ីមតូតឈរមួយ; បើមានឬសពីរផ្សេងគ្នា មានអាស៊ីមតូតឈរពីរ។',
          en: 'For the last two families the number of vertical asymptotes depends on the denominator: if \\(px^2+qx+r = 0\\) has no root there is none; a double root gives one; two distinct roots give two.' }
      ] },

    { id: 'plan',
      h: { km: 'ប្លង់សិក្សាអនុគមន៍', en: 'The plan for studying a function' },
      blocks: [
        { t: 'p',
          km: 'ដើម្បីសិក្សាអនុគមន៍ (សិក្សាអថេរភាព និងសង់ក្រាប) គេត្រូវសិក្សាលើចំណុចដូចខាងក្រោម៖',
          en: 'To study a function — its variation and then its graph — work through the following points in order:' },
        { t: 'ul', items: [
          { km: '១/ ដែនកំណត់', en: '1. The domain' },
          { km: '២/ ទិសដៅអថេរភាព៖ ដេរីវេទី១ (សញ្ញាដេរីវេ តម្លៃបរមាបើមាន) · លីមីត \\((x \\to \\pm\\infty)\\) · តារាងអថេរភាព · ចំណុចរបត់បើមាន',
            en: '2. The direction of variation: the first derivative (its sign, and the extreme values if any), the limits as \\(x \\to \\pm\\infty\\), the table of variation, and the inflection points if any' },
          { km: '៣/ ក្រាភិច៖ ចំណុចប្រសព្វរាងខ្សែកោងនិងអ័ក្សទាំងពីរ · អ័ក្សឆ្លុះ ឬធ្នឹមឆ្លុះ · សង់ក្រាប (គូសតារាងជំនួយបើត្រូវការ)',
            en: '3. The graph: where the curve meets the two axes, its axis or centre of symmetry, then the sketch (with a table of values if needed)' }
        ] },
        { t: 'note',
          km: 'ចំណុច ១ និង ២ រួមគ្នាហៅថា “សិក្សាអថេរភាព” ។',
          en: 'Points 1 and 2 together are what the workbook calls "studying the variation".' }
      ] },

    { id: 'variation',
      h: { km: 'ទិសដៅអថេរភាពនៃអនុគមន៍', en: 'Direction of variation' },
      blocks: [
        { t: 'ul', items: [
          { km: 'អនុគមន៍កើន៖ \\(f\\) កើនលើចន្លោះ \\((a,b)\\) លុះត្រាតែគ្រប់ \\(x_1, x_2 \\in (a,b)\\) ដែល \\(x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)\\) ឬគ្រប់ \\(x \\in (a,b)\\) ដេរីវេ \\(f\'(x) > 0\\)។',
            en: 'Increasing: \\(f\\) increases on \\((a,b)\\) exactly when \\(x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)\\) for all \\(x_1, x_2 \\in (a,b)\\), or equivalently \\(f\'(x) > 0\\) for every \\(x \\in (a,b)\\).' },
          { km: 'អនុគមន៍ចុះ៖ \\(f\\) ចុះលើចន្លោះ \\((a,b)\\) លុះត្រាតែ \\(x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)\\) ឬគ្រប់ \\(x \\in (a,b)\\) ដេរីវេ \\(f\'(x) < 0\\)។',
            en: 'Decreasing: \\(f\\) decreases on \\((a,b)\\) exactly when \\(x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)\\), or equivalently \\(f\'(x) < 0\\) throughout.' },
          { km: 'អនុគមន៍ថេរ៖ \\(f\\) ថេរលើចន្លោះ \\((a,b)\\) លុះត្រាតែ \\(x_1 < x_2 \\Rightarrow f(x_1) = f(x_2)\\) ឬគ្រប់ \\(x \\in (a,b)\\) ដេរីវេ \\(f\'(x) = 0\\)។',
            en: 'Constant: \\(f\\) is constant on \\((a,b)\\) exactly when \\(f(x_1) = f(x_2)\\) always, or equivalently \\(f\'(x) = 0\\) throughout.' }
        ] },
        { t: 'p',
          km: 'ដើម្បីសិក្សាទិសដៅអថេរភាពនៃអនុគមន៍ \\(y = f(x)\\) គេត្រូវ៖ ជំហានទី១ រកដេរីវេ \\(f\'(x)\\) · ជំហានទី២ សិក្សាសញ្ញានៃ \\(f\'(x)\\)។',
          en: 'So the study takes two steps: first find \\(f\'(x)\\), then read off the sign of \\(f\'(x)\\).' }
      ] },

    { id: 'extrema',
      h: { km: 'អតិបរមាធៀប និងអប្បបរមាធៀបនៃអនុគមន៍', en: 'Relative maximum and minimum' },
      blocks: [
        { t: 'p', km: 'ប្រើដេរីវេទី១', en: 'Using the first derivative' },
        { t: 'ul', items: [
          { km: 'អនុគមន៍ \\(f\\) មានអតិបរមាធៀបត្រង់ \\(x_0\\) លុះត្រាតែ \\(f\'(x) > 0\\) កាលណា \\(x < x_0\\), \\(f\'(x_0) = 0\\), និង \\(f\'(x) < 0\\) កាលណា \\(x > x_0\\)។',
            en: '\\(f\\) has a relative maximum at \\(x_0\\) exactly when \\(f\'(x) > 0\\) for \\(x < x_0\\), \\(f\'(x_0) = 0\\), and \\(f\'(x) < 0\\) for \\(x > x_0\\).' },
          { km: 'អនុគមន៍ \\(f\\) មានអប្បបរមាធៀបត្រង់ \\(x_0\\) លុះត្រាតែ \\(f\'(x) < 0\\) កាលណា \\(x < x_0\\), \\(f\'(x_0) = 0\\), និង \\(f\'(x) > 0\\) កាលណា \\(x > x_0\\)។',
            en: '\\(f\\) has a relative minimum at \\(x_0\\) exactly when \\(f\'(x) < 0\\) for \\(x < x_0\\), \\(f\'(x_0) = 0\\), and \\(f\'(x) > 0\\) for \\(x > x_0\\).' }
        ] },
        { t: 'p', km: 'ប្រើដេរីវេទី២', en: 'Using the second derivative' },
        { t: 'm', tex: '\\text{maximum at } x_0 \\iff \\begin{cases} f\'(x_0) = 0 \\\\ f\'\'(x_0) < 0 \\end{cases} \\qquad \\text{minimum at } x_0 \\iff \\begin{cases} f\'(x_0) = 0 \\\\ f\'\'(x_0) > 0 \\end{cases}' }
      ] },

    { id: 'inflection',
      h: { km: 'ចំណុចរបត់នៃខ្សែកោង', en: 'Inflection points' },
      blocks: [
        { t: 'ul', items: [
          { km: 'ក្រាប \\(C: y = f(x)\\) មានភាពប៉ោងក្នុងចន្លោះ \\((a,b)\\) កាលណា \\(f\'\'(x) < 0\\) ចំពោះគ្រប់ \\(x \\in (a,b)\\)។',
            en: 'The curve \\(C: y = f(x)\\) is concave down on \\((a,b)\\) when \\(f\'\'(x) < 0\\) throughout.' },
          { km: 'ក្រាប \\(C: y = f(x)\\) មានភាពផតក្នុងចន្លោះ \\((a,b)\\) កាលណា \\(f\'\'(x) > 0\\) ចំពោះគ្រប់ \\(x \\in (a,b)\\)។',
            en: 'The curve \\(C: y = f(x)\\) is concave up on \\((a,b)\\) when \\(f\'\'(x) > 0\\) throughout.' },
          { km: 'ចំណុច \\(I(x_0, y_0)\\) ជាចំណុចរបត់នៃខ្សែកោង កាលណាខ្សែកោងប្ដូរពីភាពប៉ោងទៅភាពផត (ឬពីភាពផតទៅភាពប៉ោង) ត្រង់ចំណុច \\(I\\) នេះ។',
            en: '\\(I(x_0, y_0)\\) is an inflection point when the curve changes from concave down to concave up (or the other way round) at \\(I\\).' }
        ] },
        { t: 'p',
          km: 'របៀបរកចំណុចរបត់៖ ជំហានទី១ រក \\(f\'\'(x)\\) · ជំហានទី២ ដោះស្រាយសមីការ \\(f\'\'(x) = 0\\) · ជំហានទី៣ សិក្សាសញ្ញានៃ \\(f\'\'(x)\\)។',
          en: 'How to find one: compute \\(f\'\'(x)\\), solve \\(f\'\'(x) = 0\\), then study the sign of \\(f\'\'(x)\\).' },
        { t: 'note',
          km: 'បើ \\(f\'\'(x)\\) ដូរសញ្ញានៅសងខាង \\(x_0\\) នោះខ្សែកោងមានចំណុចរបត់ \\(I\\big(x_0, f(x_0)\\big)\\)។ បើ \\(f\'\'(x)\\) មិនដូរសញ្ញា នោះខ្សែកោងគ្មានចំណុចរបត់។',
          en: 'If \\(f\'\'(x)\\) changes sign on either side of \\(x_0\\), the curve has the inflection point \\(I\\big(x_0, f(x_0)\\big)\\). If the sign does not change, there is no inflection point.' }
      ] },

    { id: 'symmetry',
      h: { km: 'ធ្នឹមឆ្លុះ ឬអ័ក្សឆ្លុះនៃខ្សែកោង', en: 'Centre and axis of symmetry' },
      blocks: [
        { t: 'p', km: 'ភាពគូ – ភាពសេស', en: 'Even and odd functions' },
        { t: 'ul', items: [
          { km: 'ចំពោះគ្រប់ \\(x, -x \\in D\\) បើ \\(f(-x) = -f(x)\\) នោះ \\(f\\) ជាអនុគមន៍សេស ហើយក្រាបរបស់វាមានគល់តម្រុយជាធ្នឹមឆ្លុះ។',
            en: 'If \\(f(-x) = -f(x)\\) for all \\(x, -x \\in D\\), then \\(f\\) is odd and the origin is a centre of symmetry of its curve.' },
          { km: 'ចំពោះគ្រប់ \\(x, -x \\in D\\) បើ \\(f(-x) = f(x)\\) នោះ \\(f\\) ជាអនុគមន៍គូ ហើយក្រាបរបស់វាមានអ័ក្សអរដោនេ \\((y\'oy)\\) ជាអ័ក្សឆ្លុះ។',
            en: 'If \\(f(-x) = f(x)\\) for all \\(x, -x \\in D\\), then \\(f\\) is even and the \\(y\\)-axis \\((y\'oy)\\) is an axis of symmetry of its curve.' }
        ] },
        { t: 'p', km: 'ធ្នឹមឆ្លុះ ឬអ័ក្សឆ្លុះទូទៅ', en: 'A general centre or axis of symmetry' },
        { t: 'ul', items: [
          { km: 'ចំណុច \\(I(a,b)\\) ជាធ្នឹមឆ្លុះនៃក្រាបតាងអនុគមន៍ \\(f\\) លុះត្រាតែ \\(f(2a-x)+f(x) = 2b\\)។',
            en: 'The point \\(I(a,b)\\) is a centre of symmetry of the curve of \\(f\\) exactly when \\(f(2a-x)+f(x) = 2b\\).' },
          { km: 'បន្ទាត់ \\(x = a\\) ជាអ័ក្សឆ្លុះនៃក្រាបតាងអនុគមន៍ \\(f\\) លុះត្រាតែ \\(f(2a-x) = f(x)\\)។',
            en: 'The line \\(x = a\\) is an axis of symmetry of the curve of \\(f\\) exactly when \\(f(2a-x) = f(x)\\).' }
        ] },
        { t: 'p',
          km: 'រូបមន្តប្ដូរកិលអ័ក្ស៖ យកចំណុច \\(M(x,y)\\) ក្នុងតម្រុយ \\((xoy)\\)។ រំកិលគល់ \\(O\\) ទៅត្រង់ចំណុច \\(\\omega(x_0,y_0)\\) នោះកូអរដោនេថ្មីរបស់ \\(M\\) គឺ \\(M(X,Y)\\)។',
          en: 'Shifting the axes: take \\(M(x,y)\\) in the system \\((xoy)\\) and move the origin \\(O\\) to \\(\\omega(x_0,y_0)\\); the new coordinates of \\(M\\) are \\(M(X,Y)\\).' },
        { t: 'm', tex: '\\begin{cases} x = x_0 + X \\\\ y = y_0 + Y \\end{cases}' }
      ] },

    { id: 'tangent',
      h: { km: 'សមីការបន្ទាត់ប៉ះ', en: 'The equation of a tangent line' },
      blocks: [
        { t: 'p',
          km: 'សមីការបន្ទាត់ \\(T\\) ប៉ះនឹងក្រាប \\(C\\) តាងអនុគមន៍ \\(y = f(x)\\) ត្រង់ចំណុច \\((x_0,y_0)\\) មានរាង៖',
          en: 'The tangent \\(T\\) to the curve \\(C\\) of \\(y = f(x)\\) at the point \\((x_0,y_0)\\) has equation:' },
        { t: 'm', tex: 'y - y_0 = f\'(x_0)(x-x_0) \\quad\\text{or}\\quad y = f\'(x_0)(x-x_0) + y_0' },
        { t: 'm', tex: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h)-f(x_0)}{h}' },
        { t: 'p', km: 'សំគាល់៖', en: 'Notes:' },
        { t: 'ul', items: [
          { km: 'បើមេគុណប្រាប់ទិសនៃបន្ទាត់ប៉ះ \\(f\'(x_0)\\) ជាតម្លៃលេខ នោះក្រាប \\(C\\) មានបន្ទាត់ប៉ះត្រង់ \\((x_0,y_0)\\)។',
            en: 'If the slope \\(f\'(x_0)\\) is a number, the curve \\(C\\) has a tangent at \\((x_0,y_0)\\).' },
          { km: 'បើ \\(f\'(x_0) = \\infty\\) នោះក្រាប \\(C\\) គ្មានបន្ទាត់ប៉ះត្រង់ \\((x_0,y_0)\\) ទេ។',
            en: 'If \\(f\'(x_0) = \\infty\\), the curve \\(C\\) has no tangent at \\((x_0,y_0)\\).' },
          { km: 'បន្ទាត់ពីរ \\(d_1: y = ax+b\\) និង \\(d_2: y = a\'x+b\'\\) ស្របគ្នាកាលណា \\(a = a\'\\)។',
            en: 'Two lines \\(d_1: y = ax+b\\) and \\(d_2: y = a\'x+b\'\\) are parallel when \\(a = a\'\\).' },
          { km: 'បន្ទាត់ពីរ \\(d_1\\) និង \\(d_2\\) កែងគ្នាកាលណា \\(a \\cdot a\' = -1\\)។',
            en: 'They are perpendicular when \\(a \\cdot a\' = -1\\).' }
        ] },
        { t: 'note',
          km: 'បន្ទាត់ប៉ះរួមរវាងខ្សែកោងតាងអនុគមន៍ពីរ៖ ក្រាប \\(C_1: y = f(x)\\) និង \\(C_2: y = g(x)\\) មានបន្ទាត់ប៉ះរួមត្រង់ \\(A(x_0,y_0)\\) លុះត្រាតែ \\(f\'(x_0) = g\'(x_0)\\)។',
          en: 'A common tangent: the curves \\(C_1: y = f(x)\\) and \\(C_2: y = g(x)\\) share a tangent at \\(A(x_0,y_0)\\) exactly when \\(f\'(x_0) = g\'(x_0)\\).' }
      ] },

    { id: 'intersect',
      h: { km: 'សមីការអាប់ស៊ីស', en: 'The intersection equation' },
      blocks: [
        { t: 'p',
          km: 'គេមានអនុគមន៍ពីរ \\(y = f(x)\\) មានក្រាប \\(C_1\\) និង \\(y = g(x)\\) មានក្រាប \\(C_2\\)។',
          en: 'Take two functions \\(y = f(x)\\) with curve \\(C_1\\) and \\(y = g(x)\\) with curve \\(C_2\\).' },
        { t: 'm', tex: '\\begin{cases} y = f(x) \\\\ y = g(x) \\end{cases} \\iff f(x) = g(x)' },
        { t: 'p',
          km: 'ឬសនៃសមីការអាប់ស៊ីសគឺជាអាប់ស៊ីសនៃចំណុចប្រសព្វរវាងក្រាប \\(C_1\\) និង \\(C_2\\)។',
          en: 'The roots of that equation are the \\(x\\)-coordinates of the points where \\(C_1\\) and \\(C_2\\) meet.' },
        { t: 'ul', items: [
          { km: 'បើសមីការអាប់ស៊ីសមានឬសមួយ ពីរ បី ឬបួន នោះក្រាបទាំងពីរប្រសព្វគ្នាបានមួយ ពីរ បី ឬបួនចំណុចរៀងគ្នា។',
            en: 'One, two, three or four roots mean the two curves meet at one, two, three or four points.' },
          { km: 'បើសមីការអាប់ស៊ីសមានឬសឌុប \\(x_1 = x_2 = x_0\\) នោះក្រាបទាំងពីរប៉ះគ្នាត្រង់ចំណុច \\(\\big(x_0, f(x_0)\\big)\\)។',
            en: 'A double root \\(x_1 = x_2 = x_0\\) means the two curves are tangent to each other at \\(\\big(x_0, f(x_0)\\big)\\).' },
          { km: 'បើសមីការអាប់ស៊ីសគ្មានឬស នោះក្រាបទាំងពីរមិនប្រសព្វគ្នាទេ។',
            en: 'No root means the curves do not meet at all.' }
        ] }
      ] },

    { id: 'position',
      h: { km: 'សិក្សាទីតាំងធៀបនៃខ្សែកោង', en: 'Relative position of two curves' },
      blocks: [
        { t: 'p',
          km: 'ដើម្បីសិក្សាទីតាំងរវាងក្រាបពីរ \\(C_1: y = f(x)\\) និង \\(C_2: y = g(x)\\) គេត្រូវសិក្សាសញ្ញានៃផលដក \\(f(x)-g(x)\\)។',
          en: 'To compare the curves \\(C_1: y = f(x)\\) and \\(C_2: y = g(x)\\), study the sign of the difference \\(f(x)-g(x)\\).' },
        { t: 'ul', items: [
          { km: 'បើ \\(f(x)-g(x) > 0\\) លើចន្លោះ \\((a,b)\\) នោះក្រាប \\(C_1\\) ស្ថិតនៅលើក្រាប \\(C_2\\) លើចន្លោះនោះ។',
            en: 'If \\(f(x)-g(x) > 0\\) on \\((a,b)\\), then \\(C_1\\) lies above \\(C_2\\) there.' },
          { km: 'បើ \\(f(x)-g(x) < 0\\) លើចន្លោះ \\((a,b)\\) នោះក្រាប \\(C_1\\) ស្ថិតនៅក្រោមក្រាប \\(C_2\\) លើចន្លោះនោះ។',
            en: 'If \\(f(x)-g(x) < 0\\) on \\((a,b)\\), then \\(C_1\\) lies below \\(C_2\\) there.' },
          { km: 'បើ \\(f(x)-g(x) = 0\\) មានឬសឌុប \\(x_1 = x_2 = x_0\\) នោះក្រាប \\(C_1\\) ប៉ះនឹងក្រាប \\(C_2\\) ត្រង់ \\(\\big(x_0, f(x_0)\\big)\\)។',
            en: 'A double root of \\(f(x)-g(x) = 0\\) means \\(C_1\\) is tangent to \\(C_2\\) at \\(\\big(x_0, f(x_0)\\big)\\).' },
          { km: 'បើ \\(f(x)-g(x) = 0\\) មានឬស \\(x_0\\) តែមួយគត់ នោះក្រាប \\(C_1\\) កាត់ក្រាប \\(C_2\\) ត្រង់ \\(\\big(x_0, f(x_0)\\big)\\)។',
            en: 'A single root \\(x_0\\) means \\(C_1\\) crosses \\(C_2\\) at \\(\\big(x_0, f(x_0)\\big)\\).' }
        ] }
      ] }
  ];

  /* ==================================================================== 2
     MULTIPLE CHOICE — the chapter has none.                              */
  var MC = [];

  /* ==================================================================== 3
     WRITTEN EXERCISES (pp. 84–119)                                       */
  function wr(n, km, en, parts, extra) {
    var o = { n: n, q: { km: km, en: en }, p: parts || [] };
    if (extra) { o.extra = true; }
    return o;
  }
  function p2(k, km, en) { return { k: k, t: { km: km, en: en } }; }

  var WR = [
    wr(1, 'អនុគមន៍ \\(g\\) កំណត់ដោយ \\(g(x) = ax+a+\\dfrac{b}{x+2}\\) ចំពោះ \\(x \\neq -2\\) ហើយមានក្រាប \\((H)\\)។',
         'The function \\(g\\) is defined by \\(g(x) = ax+a+\\dfrac{b}{x+2}\\) for \\(x \\neq -2\\), with curve \\((H)\\).', [
      p2('1', 'កំណត់ចំនួនពិត \\(a\\) និង \\(b\\) ដើម្បីឲ្យ \\(g\\) មានអប្បបរមា \\(g(0) = 2\\)។',
              'Find the reals \\(a\\) and \\(b\\) so that \\(g\\) has a relative minimum \\(g(0) = 2\\).'),
      p2('2', 'កំណត់អាស៊ីមតូតទ្រេតនៃក្រាប \\((H)\\) ចំពោះ \\(a\\) និង \\(b\\) ក្នុងសំណួរទី១។',
              'Find the oblique asymptote of \\((H)\\) for the \\(a\\) and \\(b\\) found in part 1.')
    ]),

    wr(2, 'អនុគមន៍ \\(f\\) កំណត់ចំពោះគ្រប់ \\(x \\neq 1\\) ដោយ \\(y = f(x) = \\dfrac{x^2-3x+6}{x-1}\\) មានក្រាប \\(C\\)។',
         'The function \\(f\\) is defined for \\(x \\neq 1\\) by \\(y = f(x) = \\dfrac{x^2-3x+6}{x-1}\\), with curve \\(C\\).', [
      p2('1', 'គណនាដេរីវេទីមួយ \\(f\'(x)\\) រួចសិក្សាសញ្ញា \\(f\'(x)\\)។ បង្ហាញថាអនុគមន៍ \\(f\\) មានអតិបរមាមួយ និងអប្បបរមាមួយ រួចគណនាតម្លៃបរមាទាំងពីរនោះ។',
              'Compute \\(f\'(x)\\) and study its sign. Show that \\(f\\) has one relative maximum and one relative minimum, then compute both extreme values.'),
      p2('2', 'រកអាស៊ីមតូតឈរ និងទ្រេតនៃក្រាប \\(C\\)។ សិក្សាទីតាំងរវាងអាស៊ីមតូតទ្រេតនិងក្រាប \\(C\\)។',
              'Find the vertical and oblique asymptotes of \\(C\\), then study the position of \\(C\\) relative to the oblique asymptote.'),
      p2('3', 'សង់តារាងអថេរភាពនៃ \\(f\\)។ សង់ក្រាប \\(C\\)។',
              'Draw the table of variation of \\(f\\), then sketch \\(C\\).')
    ]),

    wr(3, 'អនុគមន៍ \\(f\\) កំណត់ដោយ \\(y = f(x) = \\dfrac{-x^2+2x+1}{x-1}\\) និងមានខ្សែកោង \\((C)\\)។',
         'The function \\(f\\) is defined by \\(y = f(x) = \\dfrac{-x^2+2x+1}{x-1}\\), with curve \\((C)\\).', [
      p2('1', 'រកដែនកំណត់នៃអនុគមន៍ \\(f\\)។ គណនា និងសិក្សាសញ្ញាដេរីវេ \\(f\'(x)\\)។',
              'Find the domain of \\(f\\). Compute \\(f\'(x)\\) and study its sign.'),
      p2('2', 'រកសមីការអាស៊ីមតូតឈរ និងទ្រេតនៃខ្សែកោង \\((C)\\)។',
              'Find the equations of the vertical and oblique asymptotes of \\((C)\\).'),
      p2('3', 'សង់តារាងអថេរភាពនៃអនុគមន៍ \\(f\\) និងសង់ខ្សែកោង \\((C)\\)។',
              'Draw the table of variation of \\(f\\) and sketch \\((C)\\).'),
      p2('4', 'ដោះស្រាយវិសមីការ \\(\\dfrac{-x^2+2x+1}{x-1} > 1-x\\) ដោយប្រើខ្សែកោង \\((C)\\)។',
              'Use the curve \\((C)\\) to solve the inequality \\(\\dfrac{-x^2+2x+1}{x-1} > 1-x\\).')
    ]),

    wr(4, 'អនុគមន៍ \\(f\\) កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(y = f(x) = \\dfrac{4x}{x^2+4}\\) និងមានខ្សែកោង \\((C)\\)។',
         'The function \\(f\\) is defined on \\(\\mathbb{R}\\) by \\(y = f(x) = \\dfrac{4x}{x^2+4}\\), with curve \\((C)\\).', [
      p2('1', 'គណនា \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to -\\infty} f(x)\\)។ ទាញរកសមីការអាស៊ីមតូតដេកនៃក្រាប \\((C)\\)។',
              'Compute \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to -\\infty} f(x)\\), then deduce the horizontal asymptote of \\((C)\\).'),
      p2('2', 'គណនាដេរីវេ \\(f\'(x)\\) រួចបង្ហាញថា \\(f\\) មានតម្លៃអប្បបរមាមួយ និងអតិបរមាមួយ។ គណនាតម្លៃបរមានោះ។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and show that \\(f\\) has one relative minimum and one relative maximum. Compute those values, then draw the table of variation of \\(f\\).'),
      p2('3', 'បង្ហាញថាក្រាប \\((C)\\) មានធ្នឹមឆ្លុះមួយ។',
              'Show that \\((C)\\) has a centre of symmetry.'),
      p2('4', 'រកសមីការនៃបន្ទាត់ \\((T)\\) ដែលប៉ះខ្សែកោង \\((C)\\) ត្រង់ \\(O(0,0)\\)។ សង់ \\((T)\\) និង \\((C)\\)។',
              'Find the equation of the tangent \\((T)\\) to \\((C)\\) at \\(O(0,0)\\), then sketch \\((T)\\) and \\((C)\\).'),
      p2('5', 'ដោយប្រើខ្សែកោង \\((C)\\) រកតម្លៃ \\(k\\) ដើម្បីឲ្យសមីការ \\(kx^2-4x+4k = 0\\) មានឬសពីរផ្សេងគ្នាជាចំនួនពិត។',
              'Using the curve \\((C)\\), find the values of \\(k\\) for which \\(kx^2-4x+4k = 0\\) has two distinct real roots.')
    ]),

    wr(5, 'អនុគមន៍ \\(f\\) កំណត់ដោយ \\(y = f(x) = \\dfrac{3x^2-4x}{2(x-1)^2}\\) និងមានខ្សែកោង \\((C)\\)។',
         'The function \\(f\\) is defined by \\(y = f(x) = \\dfrac{3x^2-4x}{2(x-1)^2}\\), with curve \\((C)\\).', [
      p2('1', 'រកដែនកំណត់នៃអនុគមន៍ \\(f\\) រួចរកលីមីតនៃ \\(f\\) ត្រង់ចុងដែនកំណត់។',
              'Find the domain of \\(f\\), then the limits of \\(f\\) at the ends of that domain.'),
      p2('2', 'គណនាដេរីវេ \\(f\'(x)\\) និងសិក្សាសញ្ញានៃ \\(f\'(x)\\)។ គណនាតម្លៃបរមា រួចសង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and study its sign. Compute the extreme value, then draw the table of variation of \\(f\\).'),
      p2('3', 'រកសមីការអាស៊ីមតូតឈរ និងដេកនៃខ្សែកោង \\((C)\\)។',
              'Find the vertical and horizontal asymptotes of \\((C)\\).'),
      p2('4', 'រកសមីការនៃបន្ទាត់ \\((L)\\) ដែលប៉ះខ្សែកោង \\((C)\\) ត្រង់គល់តម្រុយ។ សង់បន្ទាត់ \\((L)\\) និងខ្សែកោង \\((C)\\)។',
              'Find the equation of the line \\((L)\\) tangent to \\((C)\\) at the origin, then sketch \\((L)\\) and \\((C)\\).'),
      p2('5', 'រកតម្លៃ \\(k\\) ដោយប្រើខ្សែកោង \\((C)\\) ដើម្បីឲ្យសមីការ \\(3x^2-4x-2k(x-1)^2 = 0\\) មានឬសពីរផ្សេងគ្នា។',
              'Using the curve \\((C)\\), find the values of \\(k\\) for which \\(3x^2-4x-2k(x-1)^2 = 0\\) has two distinct roots.')
    ]),

    wr(6, 'គេឲ្យអនុគមន៍ \\(f_m\\) កំណត់ចំពោះ \\(x \\neq 0\\) ដោយ \\(y = f_m(x) = \\dfrac{2mx^2+x+4}{x}\\) និងមានក្រាប \\(C_m\\)។',
         'Consider the family \\(f_m\\) defined for \\(x \\neq 0\\) by \\(y = f_m(x) = \\dfrac{2mx^2+x+4}{x}\\), with curve \\(C_m\\).', [
      p2('1', 'កំណត់តម្លៃ \\(m\\) ដើម្បីឲ្យ \\(C_m\\) មានបន្ទាត់ \\(y = x+1\\) ជាអាស៊ីមតូតទ្រេត។',
              'Find \\(m\\) so that \\(C_m\\) has \\(y = x+1\\) as an oblique asymptote.'),
      p2('2', 'យក \\(m = \\dfrac{1}{2}\\)។ សិក្សា \\(f_{\\frac{1}{2}}\\)៖ លីមីត ដេរីវេ តារាងអថេរភាព។',
              'Take \\(m = \\dfrac{1}{2}\\) and study \\(f_{\\frac{1}{2}}\\): its limits, its derivative and its table of variation.'),
      p2('3', 'បង្ហាញថា \\(I(0,1)\\) ជាធ្នឹមឆ្លុះនៃខ្សែកោងតាង \\(C_{\\frac{1}{2}}\\)។',
              'Show that \\(I(0,1)\\) is a centre of symmetry of the curve \\(C_{\\frac{1}{2}}\\).'),
      p2('4', 'សង់ខ្សែកោង \\(C_{\\frac{1}{2}}\\) និងអាស៊ីមតូតទ្រេតរបស់វាក្នុងតម្រុយតែមួយ។',
              'Sketch \\(C_{\\frac{1}{2}}\\) together with its oblique asymptote in one coordinate system.')
    ]),

    wr(7, 'គេឲ្យអនុគមន៍ \\(f(x) = \\dfrac{2x^2-2x}{x^2+2x+1}\\) កំណត់ចំពោះគ្រប់ចំនួនពិត \\(x \\neq -1\\)។',
         'Consider \\(f(x) = \\dfrac{2x^2-2x}{x^2+2x+1}\\), defined for every real \\(x \\neq -1\\).', [
      p2('1', 'រកតម្លៃ \\(A\\), \\(B\\) និង \\(C\\) ដើម្បីបាន \\(f(x) = A+\\dfrac{B}{x+1}+\\dfrac{C}{(x+1)^2}\\)។',
              'Find \\(A\\), \\(B\\) and \\(C\\) so that \\(f(x) = A+\\dfrac{B}{x+1}+\\dfrac{C}{(x+1)^2}\\).'),
      p2('2', 'រកអាស៊ីមតូតដេក និងអាស៊ីមតូតឈរនៃ \\(C\\)។ គណនានិងសិក្សាសញ្ញានៃ \\(f\'(x)\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Find the horizontal and vertical asymptotes of \\(C\\). Compute \\(f\'(x)\\), study its sign and draw the table of variation of \\(f\\).'),
      p2('3', 'រកសមីការបន្ទាត់ប៉ះនឹង \\(C\\) ត្រង់ \\(x = 0\\)។ សង់ \\(C\\) និងអាស៊ីមតូតនៃ \\(C\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
              'Find the equation of the tangent to \\(C\\) at \\(x = 0\\), then sketch \\(C\\) and its asymptotes in an orthonormal system.'),
      p2('4', 'ពិភាក្សាតាមក្រាភិច ចូរដោះស្រាយវិសមីការ \\(\\dfrac{2x^2-2x}{x^2+2x+1} < 0\\)។',
              'Discuss graphically, then solve the inequality \\(\\dfrac{2x^2-2x}{x^2+2x+1} < 0\\).')
    ]),

    wr(8, 'គេមានអនុគមន៍ \\(y = f(x) = \\dfrac{ax+b}{x^2-2x-3}\\) និងមានក្រាប \\(C\\)។',
         'Consider \\(y = f(x) = \\dfrac{ax+b}{x^2-2x-3}\\), with curve \\(C\\).', [
      p2('1', 'គណនាតម្លៃ \\(a\\) និង \\(b\\) ដោយដឹងថាខ្សែកោង \\(C\\) កាត់តាម \\((0;-2)\\) និង \\((1;0)\\)។',
              'Find \\(a\\) and \\(b\\), knowing that \\(C\\) passes through \\((0;-2)\\) and \\((1;0)\\).'),
      p2('a', 'ចំពោះតម្លៃលេខនៃ \\(a\\) និង \\(b\\) ដែលរកឃើញ៖ សិក្សាអថេរភាពនៃអនុគមន៍ \\(f(x)\\) ដោយបញ្ជាក់សមីការអាស៊ីមតូត។',
              'For those values of \\(a\\) and \\(b\\): study the variation of \\(f(x)\\), stating the equations of its asymptotes.'),
      p2('b', 'គណនាកូអរដោនេនៃចំណុចប្រសព្វ \\(I\\) រវាងខ្សែកោង \\(C\\) និងអ័ក្សអាប់ស៊ីស។ រួចបង្ហាញថា \\(I\\) ជាធ្នឹមឆ្លុះនៃខ្សែកោង \\(C\\)។ ធ្វើសំណង់ខ្សែកោង \\(C\\)។',
              'Find the coordinates of the point \\(I\\) where \\(C\\) meets the \\(x\\)-axis, show that \\(I\\) is a centre of symmetry of \\(C\\), then sketch \\(C\\).'),
      p2('c', 'ប្រើក្រាភិចចូរដោះស្រាយអត្ថិភាពនិងសញ្ញាឬសនៃសមីការ \\(mx^2-2(m-3)x-3(m+2) = 0\\;(E)\\) ទៅតាមតម្លៃនៃ \\(m\\)។',
              'Use the graph to discuss the existence and the sign of the roots of \\(mx^2-2(m-3)x-3(m+2) = 0\\;(E)\\) according to \\(m\\).')
    ]),

    wr(9, 'គេឲ្យអនុគមន៍ \\(y = f(x) = x+1-e^{-x}\\) ហើយមានក្រាប \\(C\\)។',
         'Consider \\(y = f(x) = x+1-e^{-x}\\), with curve \\(C\\).', [
      p2('a', 'បង្ហាញថាក្រាប \\(C\\) មានអាស៊ីមតូតទ្រេតមួយខាង \\(+\\infty\\)។ អាស៊ីមតូតទ្រេតនេះតាងបន្ទាត់ \\(D\\)។',
              'Show that \\(C\\) has an oblique asymptote as \\(x \\to +\\infty\\); call that line \\(D\\).'),
      p2('b', 'កំណត់តម្លៃ \\(m\\) ដើម្បីឲ្យបន្ទាត់ \\(\\Delta: y = (m+2)x+1\\) ស្របនឹងបន្ទាត់ \\(D\\)។',
              'Find \\(m\\) so that the line \\(\\Delta: y = (m+2)x+1\\) is parallel to \\(D\\).'),
      p2('c', 'រកសមីការបន្ទាត់ប៉ះនឹងខ្សែកោង \\(C\\) ត្រង់ \\(x_0 = 0\\)។',
              'Find the equation of the tangent to \\(C\\) at \\(x_0 = 0\\).'),
      p2('d', 'រកកូអរដោនេនៃចំណុចប្រសព្វរវាងខ្សែកោង \\(C\\) និងខ្សែកោង \\(C\': y = -\\dfrac{1}{e^x}+2\\)។',
              'Find the coordinates of the point where \\(C\\) meets the curve \\(C\': y = -\\dfrac{1}{e^x}+2\\).')
    ]),

    wr(10, '\\(f\\) ជាអនុគមន៍មួយកំណត់ដោយ \\(y = f(x) = \\dfrac{e^x}{ax+b}\\) ដែល \\(a, b \\in \\mathbb{R}\\)។',
          '\\(f\\) is the function \\(y = f(x) = \\dfrac{e^x}{ax+b}\\), where \\(a, b \\in \\mathbb{R}\\).', [
      p2('a', 'គណនាដេរីវេទី១ \\(f\'(x)\\) និងដេរីវេទី២ \\(f\'\'(x)\\)។',
              'Compute the first derivative \\(f\'(x)\\) and the second derivative \\(f\'\'(x)\\).'),
      p2('b', 'កំណត់ \\(a\\), \\(b\\) ដើម្បីឲ្យក្រាបតាងអនុគមន៍ \\(f\\) មានអប្បបរមាស្មើ \\(e\\) ត្រង់ \\(x = 1\\)។',
              'Find \\(a\\) and \\(b\\) so that the curve of \\(f\\) has a relative minimum equal to \\(e\\) at \\(x = 1\\).')
    ]),

    wr(11, 'គេឲ្យអនុគមន៍ \\(y = f(x) = \\dfrac{3}{2+e^x}\\) មានក្រាប \\(C\\)។',
          'Consider \\(y = f(x) = \\dfrac{3}{2+e^x}\\), with curve \\(C\\).', [
      p2('a', 'សរសេរ \\(f\\) ជារាង \\(y = f(x) = \\alpha+\\dfrac{\\beta e^x}{2+e^x}\\) ដែល \\(\\alpha\\) និង \\(\\beta\\) ជាចំនួនថេរដែលត្រូវរក។',
              'Write \\(f\\) in the form \\(y = f(x) = \\alpha+\\dfrac{\\beta e^x}{2+e^x}\\), where \\(\\alpha\\) and \\(\\beta\\) are constants to be found.'),
      p2('b', 'រកសមីការបន្ទាត់ \\(\\Delta\\) ដែលប៉ះនឹងក្រាប \\(C\\) ត្រង់ \\(x_0 = 0\\)។',
              'Find the equation of the tangent \\(\\Delta\\) to \\(C\\) at \\(x_0 = 0\\).'),
      p2('c', 'រកតម្លៃ \\(m\\) ដើម្បីឲ្យបន្ទាត់ \\(D: y = (m+1)x\\) កែងនឹងបន្ទាត់ \\(\\Delta\\)។',
              'Find \\(m\\) so that the line \\(D: y = (m+1)x\\) is perpendicular to \\(\\Delta\\).')
    ]),

    wr(12, 'គេឲ្យអនុគមន៍ \\(g\\) កំណត់ដោយ \\(g(x) = (ax^2+bx+c)e^x\\) ដែល \\(x\\) ជាចំនួនពិត។',
          'Consider \\(g(x) = (ax^2+bx+c)e^x\\), for real \\(x\\).', [
      p2('a', 'គណនាដេរីវេទី១ \\(g\'(x)\\) និងដេរីវេទី២ \\(g\'\'(x)\\)។',
              'Compute \\(g\'(x)\\) and \\(g\'\'(x)\\).'),
      p2('b', 'កំណត់ចំនួនពិត \\(a\\), \\(b\\) និង \\(c\\) បើ \\(g(0) = -1\\), \\(g\'(0) = 0\\) និង \\(g\'\'(0) = 3\\)។',
              'Find the reals \\(a\\), \\(b\\) and \\(c\\) if \\(g(0) = -1\\), \\(g\'(0) = 0\\) and \\(g\'\'(0) = 3\\).')
    ]),

    wr(13, 'អនុគមន៍ \\(h\\) កំណត់ដោយ \\(h(x) = (x+m)e^{-x}\\) ហើយមានក្រាប \\(H\\) និង \\(m\\) ជាចំនួនពិត។',
          'The function \\(h\\) is defined by \\(h(x) = (x+m)e^{-x}\\), with curve \\(H\\) and \\(m\\) real.', [
      p2('a', 'កំណត់សមីការអាស៊ីមតូតដេកនៃក្រាប \\(H\\) កាលណា \\(x \\to +\\infty\\)។',
              'Find the horizontal asymptote of \\(H\\) as \\(x \\to +\\infty\\).'),
      p2('b', 'គណនាដេរីវេទី១ \\(h\'(x)\\) និងដេរីវេទី២ \\(h\'\'(x)\\)។',
              'Compute \\(h\'(x)\\) and \\(h\'\'(x)\\).'),
      p2('c', 'កំណត់តម្លៃ \\(m\\) ដើម្បីឲ្យអនុគមន៍ \\(h\\) មានអតិបរមាត្រង់ \\(x = 0\\)។',
              'Find \\(m\\) so that \\(h\\) has a relative maximum at \\(x = 0\\).')
    ]),

    wr(14, 'គេឲ្យអនុគមន៍ \\(f(x) = \\dfrac{e^x}{1+e^x}\\)។',
          'Consider \\(f(x) = \\dfrac{e^x}{1+e^x}\\).', [
      p2('1', 'បង្ហាញថា \\(k\\left(0,\\dfrac{1}{2}\\right)\\) ជាធ្នឹមឆ្លុះ។',
              'Show that \\(k\\left(0,\\dfrac{1}{2}\\right)\\) is a centre of symmetry.'),
      p2('2', 'គណនា \\(f\'(x)\\) និង \\(f\'\'(x)\\)។ រកចំណុចរបត់នៃខ្សែកោងតាងអនុគមន៍ \\(f\\)។',
              'Compute \\(f\'(x)\\) and \\(f\'\'(x)\\), then find the inflection point of the curve of \\(f\\).'),
      p2('3', 'សរសេរសមីការបន្ទាត់ប៉ះទៅនឹងខ្សែកោង \\(f\\) ត្រង់ចំណុច \\(k\\)។',
              'Write the equation of the tangent to the curve of \\(f\\) at \\(k\\).')
    ]),

    wr(15, 'គេឲ្យអនុគមន៍ \\(f(x) = e^x\\) និង \\(g(x) = \\ln(x+1)+1\\)។',
          'Consider \\(f(x) = e^x\\) and \\(g(x) = \\ln(x+1)+1\\).', [
      p2('1', 'ផ្ទៀងផ្ទាត់ថាខ្សែកោង \\((C_1): y = f(x)\\) និង \\((C_2): y = g(x)\\) មានចំណុចរួម \\(A(0,1)\\)។',
              'Check that the curves \\((C_1): y = f(x)\\) and \\((C_2): y = g(x)\\) share the point \\(A(0,1)\\).'),
      p2('2', 'គណនា \\(f\'(0)\\) និង \\(g\'(0)\\) រួចទាញបញ្ជាក់ថា \\((C_1)\\) និង \\((C_2)\\) ប៉ះគ្នាត្រង់ចំណុច \\(A\\)។',
              'Compute \\(f\'(0)\\) and \\(g\'(0)\\), then deduce that \\((C_1)\\) and \\((C_2)\\) are tangent to each other at \\(A\\).'),
      p2('3', 'សរសេរសមីការបន្ទាត់ប៉ះរួមរវាងខ្សែកោង \\((C_1)\\) និង \\((C_2)\\)។',
              'Write the equation of the common tangent to \\((C_1)\\) and \\((C_2)\\).')
    ]),

    wr(16, 'គេឲ្យអនុគមន៍ \\(f(x) = ax+b+\\dfrac{\\ln x}{x}\\) មានក្រាប \\(C\\)។',
          'Consider \\(f(x) = ax+b+\\dfrac{\\ln x}{x}\\), with curve \\(C\\).', [
      p2('1', 'រកមេគុណប្រាប់ទិសនៃបន្ទាត់ \\(T\\) ប៉ះនឹងក្រាប \\(C\\) ត្រង់ចំណុច \\(A(1,0)\\) ជាអនុគមន៍នៃ \\(a\\)។',
              'Find the slope of the tangent \\(T\\) to \\(C\\) at \\(A(1,0)\\), as a function of \\(a\\).'),
      p2('2', 'រកចំនួនពិត \\(a\\) និង \\(b\\) ដើម្បីឲ្យបន្ទាត់ \\(T\\) ស្របនឹងបន្ទាត់ \\(d: y = 2x-1\\)។',
              'Find the reals \\(a\\) and \\(b\\) so that \\(T\\) is parallel to the line \\(d: y = 2x-1\\).')
    ]),

    wr(17, 'គេឲ្យ \\(f\\) ជាអនុគមន៍កំណត់ដោយ \\(f(x) = e^{1-x}\\) ហើយ \\((C)\\) ជាក្រាបតាងអនុគមន៍ \\(f\\)។',
          'Let \\(f\\) be the function \\(f(x) = e^{1-x}\\), with curve \\((C)\\).', [
      p2('1', 'បញ្ជាក់ដែនកំណត់នៃ \\(f\\) រួចស្រាយថា \\(f\\) ជាអនុគមន៍ចុះលើ \\(\\mathbb{R}\\)។',
              'State the domain of \\(f\\), then prove that \\(f\\) is decreasing on \\(\\mathbb{R}\\).'),
      p2('2', 'គណនាលីមីត \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) រួចទាញរកអាស៊ីមតូតដេកនៃ \\((C)\\)។',
              'Compute \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to -\\infty} f(x)\\), then deduce the horizontal asymptote of \\((C)\\).'),
      p2('3', 'គូសតារាងអថេរភាពនៃ \\(f\\)។',
              'Draw the table of variation of \\(f\\).'),
      p2('4', 'កំណត់កូអរដោនេចំណុចប្រសព្វនៃក្រាប \\((C)\\) និងអ័ក្សអរដោនេ។ (គេអោយ \\(e = 2.7\\))',
              'Find where \\((C)\\) meets the \\(y\\)-axis. (take \\(e = 2.7\\))'),
      p2('5', 'សរសេរសមីការបន្ទាត់ \\((D)\\) ដែលប៉ះនឹងក្រាប \\((C)\\) ត្រង់ \\(x = 1\\)។',
              'Write the equation of the tangent \\((D)\\) to \\((C)\\) at \\(x = 1\\).'),
      p2('6', 'ចូរសង់ក្រាប \\((C)\\) និងបន្ទាត់ \\((D)\\) នៅក្នុងតម្រុយអរតូណរម៉ាល់តែមួយ។',
              'Sketch \\((C)\\) and \\((D)\\) in the same orthonormal system.')
    ]),

    wr(18, '\\(f\\) ជាអនុគមន៍កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(f(x) = (x+1)\\left(\\dfrac{1}{e^{2x}}+1\\right)\\) មានក្រាប \\((C)\\) ជាតំណាង។',
          'Let \\(f\\) be defined on \\(\\mathbb{R}\\) by \\(f(x) = (x+1)\\left(\\dfrac{1}{e^{2x}}+1\\right)\\), with curve \\((C)\\).', [
      p2('1', 'គណនា \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។',
              'Compute \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\).'),
      p2('2', 'គណនា \\(\\lim\\limits_{x \\to +\\infty} \\dfrac{f(x)}{x}\\) រួចទាញរកសមីការបន្ទាត់អាស៊ីមតូតទ្រេតនៃក្រាប \\((C)\\)។',
              'Compute \\(\\lim\\limits_{x \\to +\\infty} \\dfrac{f(x)}{x}\\), then deduce the oblique asymptote of \\((C)\\).'),
      p2('3', 'បង្ហាញចំពោះគ្រប់ \\(x \\in \\mathbb{R}\\)៖ \\(f(x)-(x+1) = \\dfrac{1}{2}\\left(\\dfrac{2x}{e^{2x}}+\\dfrac{2}{e^{2x}}\\right)\\)។',
              'Show that for every \\(x \\in \\mathbb{R}\\): \\(f(x)-(x+1) = \\dfrac{1}{2}\\left(\\dfrac{2x}{e^{2x}}+\\dfrac{2}{e^{2x}}\\right)\\).'),
      p2('4', 'បង្ហាញថាបន្ទាត់ \\((\\Delta): y = x+1\\) ជាអាស៊ីមតូតទ្រេតនៃក្រាប \\((C)\\)។',
              'Show that the line \\((\\Delta): y = x+1\\) is an oblique asymptote of \\((C)\\).'),
      p2('5', 'កំណត់កូអរដោនេនៃចំណុចប្រសព្វរវាង \\((C)\\) និង \\((\\Delta): y = x+1\\)។',
              'Find the coordinates of the point where \\((C)\\) meets \\((\\Delta): y = x+1\\).')
    ]),

    wr(19, '\\(g\\) ជាអនុគមន៍កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(g(x) = e^{2x}-(2x+1)\\) មានក្រាប \\((C)\\) ជាតំណាង។',
          'Let \\(g\\) be defined on \\(\\mathbb{R}\\) by \\(g(x) = e^{2x}-(2x+1)\\), with curve \\((C)\\).', [
      p2('1', 'បង្ហាញថាចំពោះគ្រប់ \\(x \\in \\mathbb{R}\\)៖ \\(g(x) = e^x\\left(e^x-\\dfrac{2x}{e^x}-\\dfrac{1}{e^x}\\right)\\)។',
              'Show that for every \\(x \\in \\mathbb{R}\\): \\(g(x) = e^x\\left(e^x-\\dfrac{2x}{e^x}-\\dfrac{1}{e^x}\\right)\\).'),
      p2('2', 'គណនា \\(\\lim\\limits_{x \\to +\\infty} g(x)\\) និង \\(\\lim\\limits_{x \\to -\\infty} g(x)\\)។ ទាញរកសមីការអាស៊ីមតូតទ្រេតនៃក្រាប \\((C)\\)។',
              'Compute \\(\\lim\\limits_{x \\to +\\infty} g(x)\\) and \\(\\lim\\limits_{x \\to -\\infty} g(x)\\), then deduce the oblique asymptote of \\((C)\\).'),
      p2('3', 'បង្ហាញចំពោះគ្រប់ \\(x \\in \\mathbb{R}\\)៖ \\(g\'(x) = 2\\left(e^{2x}-1\\right)\\)។',
              'Show that for every \\(x \\in \\mathbb{R}\\): \\(g\'(x) = 2\\left(e^{2x}-1\\right)\\).'),
      p2('4', 'សិក្សាសញ្ញានៃ \\(g\'(x)\\) រួចសង់តារាងអថេរភាពនៃអនុគមន៍ \\(g(x)\\)។ រួចទាញរកសញ្ញានៃ \\(g(x)\\)។',
              'Study the sign of \\(g\'(x)\\), draw the table of variation of \\(g\\), then deduce the sign of \\(g(x)\\).'),
      p2('5', 'គណនា \\(g\\left(\\dfrac{1}{2}\\right)\\) រួចសង់ក្រាប \\((C)\\)។',
              'Compute \\(g\\left(\\dfrac{1}{2}\\right)\\), then sketch \\((C)\\).')
    ]),

    wr(20, 'ផ្នែក \\(a\\)៖ \\(f\\) ជាអនុគមន៍កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(f(x) = ax+b-e^x\\)។ ផ្នែក \\(b\\)៖ \\(g\\) ជាអនុគមន៍កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(g(x) = x-e^x\\) ហើយមានខ្សែកោង \\(C\\)។',
          'Part a: \\(f\\) is defined on \\(\\mathbb{R}\\) by \\(f(x) = ax+b-e^x\\). Part b: \\(g\\) is defined on \\(\\mathbb{R}\\) by \\(g(x) = x-e^x\\), with curve \\(C\\).', [
      p2('a', 'បង្ហាញថាគ្រប់ចំនួនពិត \\(a\\) និង \\(b\\) ដែល \\(a \\neq 0\\) ខ្សែកោងតំណាង \\(f\\) មានអាស៊ីមតូតទ្រេតមួយ។',
              'Show that for all reals \\(a\\) and \\(b\\) with \\(a \\neq 0\\), the curve of \\(f\\) has an oblique asymptote.'),
      p2('b', 'កំណត់តម្លៃ \\(a\\) និង \\(b\\) ដើម្បីឲ្យ \\(f\\) មានអតិបរមាស្មើ \\(-1\\) ចំពោះ \\(x = 0\\)។',
              'Find \\(a\\) and \\(b\\) so that \\(f\\) has a relative maximum equal to \\(-1\\) at \\(x = 0\\).'),
      p2('c', 'គណនាលីមីត \\(\\lim\\limits_{x \\to +\\infty} g(x)\\) និង \\(\\lim\\limits_{x \\to -\\infty} g(x)\\)។',
              'Compute \\(\\lim\\limits_{x \\to +\\infty} g(x)\\) and \\(\\lim\\limits_{x \\to -\\infty} g(x)\\).'),
      p2('d', 'គណនាដេរីវេ \\(g\'(x)\\)។ សិក្សាសញ្ញានៃ \\(g\'(x)\\)។ គូសតារាងអថេរភាពនៃ \\(g\\)។',
              'Compute \\(g\'(x)\\), study its sign, then draw the table of variation of \\(g\\).'),
      p2('e', 'គណនា \\(g(-1)\\) និង \\(g(1)\\)។ សង់ខ្សែកោង \\(C\\) ក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) ដោយឯកតាលើអ័ក្សស្មើ \\(2\\,cm\\)។ (គេយក \\(e^{-1} = 0.36\\))',
              'Compute \\(g(-1)\\) and \\(g(1)\\), then sketch \\(C\\) in an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) with \\(2\\,cm\\) as the unit. (take \\(e^{-1} = 0.36\\))')
    ]),

    wr(21, 'អនុគមន៍ \\(f\\) កំណត់លើ \\(\\mathbb{R}\\) ដោយ \\(f(x) = \\dfrac{3e^x-1}{e^x+1}\\) ហើយមានក្រាប \\(C\\) ក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(o,\\vec{i},\\vec{j}\\right)\\)។',
          'The function \\(f\\) is defined on \\(\\mathbb{R}\\) by \\(f(x) = \\dfrac{3e^x-1}{e^x+1}\\), with curve \\(C\\) in an orthonormal system \\(\\left(o,\\vec{i},\\vec{j}\\right)\\).', [
      p2('a', 'គណនា \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ ទាញរកអាស៊ីមតូតនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then deduce the asymptotes of \\(C\\).'),
      p2('b', 'គណនាដេរីវេ \\(f\'(x)\\) រួចសិក្សាទិសដៅអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\), then study the direction of variation of \\(f\\).'),
      p2('c', 'បង្ហាញថាគ្រប់ \\(x \\in \\mathbb{R}\\), \\(f(-x)+f(x) = 2\\)។ បង្ហាញថាចំណុច \\(I(0,1)\\) ជាធ្នឹមឆ្លុះនៃក្រាប \\(C\\)។',
              'Show that \\(f(-x)+f(x) = 2\\) for all \\(x \\in \\mathbb{R}\\), then show that \\(I(0,1)\\) is a centre of symmetry of \\(C\\).'),
      p2('d', 'រកសមីការបន្ទាត់ \\(T\\) ប៉ះនឹងក្រាប \\(C\\) ត្រង់ចំណុច \\(x = 0\\)។',
              'Find the equation of the tangent \\(T\\) to \\(C\\) at \\(x = 0\\).'),
      p2('e', 'យក \\(g\\) កំណត់ដោយ \\(g(x) = f(x)-(x+1)\\)។ បង្ហាញថាគ្រប់ \\(x\\), \\(g\'(x) = -\\left(\\dfrac{e^x-1}{e^x+1}\\right)^2\\)។ ចូរប្រាប់សញ្ញា \\(g\'(x)\\)។ គណនា \\(g(0)\\)។ សង់តារាងអថេរភាពនៃ \\(g\\) (ដោយមិនចាំបាច់រកលីមីត)។ ទាញរកសញ្ញា \\(g(x)\\)។',
              'Let \\(g(x) = f(x)-(x+1)\\). Show that \\(g\'(x) = -\\left(\\dfrac{e^x-1}{e^x+1}\\right)^2\\) for all \\(x\\), give the sign of \\(g\'(x)\\), compute \\(g(0)\\), draw the table of variation of \\(g\\) (no limits needed), then deduce the sign of \\(g(x)\\).'),
      p2('f', 'បញ្ជាក់ទីតាំងនៃក្រាប \\(C\\) ធៀបនឹងបន្ទាត់ប៉ះ \\(T\\)។ សង់បន្ទាត់ប៉ះ \\(T\\), ក្រាប \\(C\\) និងអាស៊ីមតូតរបស់វា។',
              'State the position of \\(C\\) relative to the tangent \\(T\\), then sketch \\(T\\), \\(C\\) and its asymptotes.')
    ]),

    wr(22, 'ផ្នែក \\(a\\)៖ អនុគមន៍ \\(f\\) កំណត់ចំពោះគ្រប់ចំនួនពិត \\(x\\) ដោយ \\(y = f(x) = e^{2x}-2x+3\\)។ ផ្នែក \\(b\\)៖ \\(g\\) ជាអនុគមន៍កំណត់ចំពោះគ្រប់ចំនួនពិត \\(x\\) ដោយ \\(g(x) = (x-1)\\left(e^{-2x}+1\\right)\\) ហើយមានខ្សែកោង \\(C\\)។',
          'Part a: \\(f\\) is defined for all real \\(x\\) by \\(y = f(x) = e^{2x}-2x+3\\). Part b: \\(g\\) is defined for all real \\(x\\) by \\(g(x) = (x-1)\\left(e^{-2x}+1\\right)\\), with curve \\(C\\).', [
      p2('a', 'សិក្សាអថេរភាព និងគូសតារាងអថេរភាពនៃអនុគមន៍ \\(f\\)។',
              'Study the variation of \\(f\\) and draw its table of variation.'),
      p2('b', 'គណនាដេរីវេ \\(g\'(x)\\) និង \\(g\'(0)\\)។ បញ្ជាក់ថាដេរីវេ \\(g\'(x)\\) និងអនុគមន៍ \\(f(x)\\) មានសញ្ញាដូចគ្នា។',
              'Compute \\(g\'(x)\\) and \\(g\'(0)\\), then confirm that \\(g\'(x)\\) and \\(f(x)\\) have the same sign.'),
      p2('c', 'គណនា \\(g(0)\\), \\(\\lim\\limits_{x \\to -\\infty} g(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} g(x)\\)។ សង់តារាងអថេរភាពនៃអនុគមន៍ \\(g\\)។',
              'Compute \\(g(0)\\), \\(\\lim\\limits_{x \\to -\\infty} g(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} g(x)\\), then draw the table of variation of \\(g\\).'),
      p2('d', 'បង្ហាញថាបន្ទាត់ \\(D\\) មានសមីការ \\(y = x-1\\) ជាអាស៊ីមតូតទ្រេតនៃខ្សែកោង \\(C\\) នៅខាង \\(+\\infty\\)។',
              'Show that the line \\(D: y = x-1\\) is an oblique asymptote of \\(C\\) as \\(x \\to +\\infty\\).'),
      p2('e', 'សង់បន្ទាត់ \\(D\\) និងខ្សែកោង \\(C\\) ក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) តែមួយ។ (យក \\(e = 2.7\\))',
              'Sketch \\(D\\) and \\(C\\) in the same orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\). (take \\(e = 2.7\\))')
    ]),

    wr(23, 'អនុគមន៍ \\(f\\) កំណត់លើសំណុំចំនួនពិត \\(x\\) ដែល \\(x \\neq 0\\) ដោយ \\(y = f(x) = x-\\dfrac{e^x}{e^x-1}\\) ហើយមានក្រាប \\(C\\) នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\)។',
          'The function \\(f\\) is defined for real \\(x \\neq 0\\) by \\(y = f(x) = x-\\dfrac{e^x}{e^x-1}\\), with curve \\(C\\) in an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\).', [
      p2('a', 'គណនា \\(\\lim\\limits_{x \\to 0} f(x)\\), \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ ទាញរកសមីការអាស៊ីមតូតឈរនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0} f(x)\\), \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then deduce the vertical asymptote of \\(C\\).'),
      p2('b', 'បង្ហាញថាបន្ទាត់ \\(L: y = x\\) និង \\(M: y = x-1\\) ជាអាស៊ីមតូតទ្រេតនៃក្រាប \\(C\\) នៅខាង \\(-\\infty\\) និង \\(+\\infty\\) រៀងគ្នា។',
              'Show that \\(L: y = x\\) and \\(M: y = x-1\\) are oblique asymptotes of \\(C\\) as \\(x \\to -\\infty\\) and \\(x \\to +\\infty\\) respectively.'),
      p2('c', 'គណនាដេរីវេ \\(f\'(x)\\) ហើយបង្ហាញថា \\(f\'(x) > 0\\) ចំពោះ \\(x \\neq 0\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and show that \\(f\'(x) > 0\\) for \\(x \\neq 0\\), then draw the table of variation of \\(f\\).'),
      p2('d', 'គណនា \\(f(1)\\) និង \\(f(-1)\\) ហើយសង់បន្ទាត់ \\(L\\), \\(M\\) និងក្រាប \\(C\\)។ (គេយក \\(\\dfrac{e}{e-1} = 1.6\\), \\(\\dfrac{1}{1-e} = -0.6\\)) គណនាផ្ទៃក្រឡាផ្នែកប្លង់ដែលកំណត់ដោយក្រាប \\(C\\) បន្ទាត់ \\(M\\) និងបន្ទាត់ឈរមានសមីការ \\(x = 1\\) និង \\(x = 2\\)។',
              'Compute \\(f(1)\\) and \\(f(-1)\\), then sketch \\(L\\), \\(M\\) and \\(C\\). (take \\(\\dfrac{e}{e-1} = 1.6\\), \\(\\dfrac{1}{1-e} = -0.6\\)) Then find the area of the region bounded by \\(C\\), the line \\(M\\) and the vertical lines \\(x = 1\\) and \\(x = 2\\).')
    ]),

    wr(24, 'ផ្នែក \\(A\\)៖ គេមានអនុគមន៍ \\(g(x) = x^2+2-2\\ln x\\) កំណត់លើ \\((0,+\\infty)\\)។ ផ្នែក \\(B\\)៖ គេមានអនុគមន៍ \\(f(x) = \\dfrac{2\\ln x}{x}+x-1\\) មានក្រាបតំណាង \\(C\\)។',
          'Part A: \\(g(x) = x^2+2-2\\ln x\\) on \\((0,+\\infty)\\). Part B: \\(f(x) = \\dfrac{2\\ln x}{x}+x-1\\), with curve \\(C\\).', [
      p2('1', 'បង្ហាញថា \\(g\'(x) = \\dfrac{2\\left(x^2-1\\right)}{x}\\) ដែល \\(g\'\\) ជាអនុគមន៍ដេរីវេនៃ \\(g\\)។',
              'Show that \\(g\'(x) = \\dfrac{2\\left(x^2-1\\right)}{x}\\), where \\(g\'\\) is the derivative of \\(g\\).'),
      p2('2', 'សិក្សាសញ្ញានៃ \\(g\'(x)\\) និងសង់តារាងអថេរភាពនៃ \\(g\\) (មិនបាច់គណនាលីមីតនៃ \\(g\\) ត្រង់ \\(0\\) និង \\(+\\infty\\) ទេ)។',
              'Study the sign of \\(g\'(x)\\) and draw the table of variation of \\(g\\) (the limits of \\(g\\) at \\(0\\) and \\(+\\infty\\) are not needed).'),
      p2('3', 'ទាញរកសញ្ញានៃ \\(g(x)\\) លើចន្លោះ \\((0,+\\infty)\\)។',
              'Deduce the sign of \\(g(x)\\) on \\((0,+\\infty)\\).'),
      p2('4', 'គណនា \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) រួចទាញរកសមីការអាស៊ីមតូតនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then deduce the asymptote of \\(C\\).'),
      p2('5', 'ផ្ទៀងផ្ទាត់ថាបន្ទាត់ \\(\\Delta: y = x-1\\) ជាអាស៊ីមតូតទ្រេតនៃ \\(C\\)។ សិក្សាទីតាំងធៀបនៃក្រាប \\(C\\) និង \\(\\Delta\\)។',
              'Check that \\(\\Delta: y = x-1\\) is an oblique asymptote of \\(C\\), then study the relative position of \\(C\\) and \\(\\Delta\\).'),
      p2('6', 'គណនា \\(f\'(x)\\) និងបង្ហាញថា \\(f\'(x) = \\dfrac{g(x)}{x^2}\\)។ ទាញពីផ្នែក \\(A\\) នូវសញ្ញានៃ \\(f\'(x)\\) និងគូសតារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and show that \\(f\'(x) = \\dfrac{g(x)}{x^2}\\). Use Part A to give the sign of \\(f\'(x)\\), then draw the table of variation of \\(f\\).'),
      p2('7', 'កំណត់សមីការបន្ទាត់ប៉ះ \\(T\\) ដែលប៉ះ \\(C\\) ត្រង់ចំណុចដែលមានអាប់ស៊ីស \\(1\\)។ សង់ \\(C\\), \\(\\Delta\\) និង \\(T\\)។',
              'Find the equation of the tangent \\(T\\) to \\(C\\) at the point with abscissa \\(1\\), then sketch \\(C\\), \\(\\Delta\\) and \\(T\\).')
    ]),

    wr(25, 'អនុគមន៍ \\(f\\) កំណត់ដោយ \\(y = f(x) = 1-x\\ln x\\) ហើយមានក្រាប \\(C\\)។',
          'The function \\(f\\) is defined by \\(y = f(x) = 1-x\\ln x\\), with curve \\(C\\).', [
      p2('1', 'រកដែនកំណត់នៃអនុគមន៍ \\(f\\)។ គណនាលីមីត \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ ចូរពន្យល់តើ \\(f\\) ជាប់ខាងស្ដាំត្រង់ \\(x = 0\\) ឬទេ?',
              'Find the domain of \\(f\\). Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then say whether \\(f\\) is continuous from the right at \\(x = 0\\).'),
      p2('2', 'បង្ហាញថា \\(f\\) មានតម្លៃអតិបរមាត្រង់ \\(x = e^{-1}\\) ហើយគណនា \\(f\\left(e^{-1}\\right)\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Show that \\(f\\) has a relative maximum at \\(x = e^{-1}\\), compute \\(f\\left(e^{-1}\\right)\\), then draw the table of variation of \\(f\\).'),
      p2('3', 'គណនាតម្លៃ \\(f(1)\\) និង \\(f(2)\\)។ សង់ក្រាប \\(C\\)។ (គេយក \\(e^{-1} = 0.4\\), \\(\\ln 2 = 0.7\\))',
              'Compute \\(f(1)\\) and \\(f(2)\\), then sketch \\(C\\). (take \\(e^{-1} = 0.4\\), \\(\\ln 2 = 0.7\\))'),
      p2('4', 'គណនាកូអរដោនេនៃចំណុចប្រសព្វរវាងក្រាប \\(C\\) និងបន្ទាត់ \\(D: y = 1-x\\)។',
              'Find the coordinates of the point where \\(C\\) meets the line \\(D: y = 1-x\\).')
    ]),

    wr(26, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(y = f(x) = -1+2\\left(\\dfrac{\\ln x}{x}\\right)\\) ហើយមានក្រាប \\(C\\)។',
          'Let \\(f\\) be defined for \\(x > 0\\) by \\(y = f(x) = -1+2\\left(\\dfrac{\\ln x}{x}\\right)\\), with curve \\(C\\).', [
      p2('1', 'គណនា \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ កំណត់សមីការអាស៊ីមតូតឈរនិងដេកនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then find the vertical and horizontal asymptotes of \\(C\\).'),
      p2('2', 'គណនានិងសិក្សាសញ្ញាដេរីវេ \\(f\'(x)\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\), study its sign, then draw the table of variation of \\(f\\).'),
      p2('3', 'កំណត់កូអរដោនេនៃចំណុចប្រសព្វ \\(A\\) រវាងក្រាប \\(C\\) និងបន្ទាត់ \\(D: y = -1\\)។ កំណត់សមីការបន្ទាត់ \\(L\\) ប៉ះនឹងក្រាប \\(C\\) ត្រង់ \\(A\\)។',
              'Find the point \\(A\\) where \\(C\\) meets the line \\(D: y = -1\\), then find the equation of the tangent \\(L\\) to \\(C\\) at \\(A\\).'),
      p2('4', 'គណនា \\(f(0.5)\\)។ សង់បន្ទាត់ \\(L\\), អាស៊ីមតូត និងក្រាប \\(C\\)។ (គេយក \\(e = 2.7\\), \\(\\dfrac{2}{e} = 0.7\\), \\(\\ln 2 = 0.7\\))',
              'Compute \\(f(0.5)\\), then sketch \\(L\\), the asymptotes and \\(C\\). (take \\(e = 2.7\\), \\(\\dfrac{2}{e} = 0.7\\), \\(\\ln 2 = 0.7\\))')
    ]),

    wr(27, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(y = f(x) = \\dfrac{x^2+\\ln x}{x^2}\\) ហើយមានក្រាប \\(C\\)។',
          'Let \\(f\\) be defined for \\(x > 0\\) by \\(y = f(x) = \\dfrac{x^2+\\ln x}{x^2}\\), with curve \\(C\\).', [
      p2('1', 'គណនាលីមីត \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ កំណត់សមីការអាស៊ីមតូតឈរនិងដេកនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then find the vertical and horizontal asymptotes of \\(C\\).'),
      p2('2', 'បង្ហាញថា \\(f\\) មានតម្លៃអតិបរមាត្រង់ \\(x = \\sqrt{e}\\) ហើយគណនា \\(f\\left(\\sqrt{e}\\right)\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Show that \\(f\\) has a relative maximum at \\(x = \\sqrt{e}\\), compute \\(f\\left(\\sqrt{e}\\right)\\), then draw the table of variation of \\(f\\).'),
      p2('3', 'កំណត់កូអរដោនេនៃចំណុចប្រសព្វរវាងក្រាប \\(C\\) និងអាស៊ីមតូតដេក។ គណនា \\(f\\left(\\dfrac{1}{2}\\right)\\) ហើយសង់ក្រាប \\(C\\) នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\)។ (គេយក \\(e = 2.7\\), \\(\\sqrt{e} = 1.7\\), \\(\\ln 2 = 0.7\\))',
              'Find where \\(C\\) meets the horizontal asymptote, compute \\(f\\left(\\dfrac{1}{2}\\right)\\), then sketch \\(C\\) in an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\). (take \\(e = 2.7\\), \\(\\sqrt{e} = 1.7\\), \\(\\ln 2 = 0.7\\))')
    ]),

    wr(28, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(y = f(x) = x+\\dfrac{1+\\ln x}{x}\\) ហើយមានក្រាប \\(C\\) នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) ដែលមានឯកតា \\(2\\,cm\\)។',
          'Let \\(f\\) be defined for \\(x > 0\\) by \\(y = f(x) = x+\\dfrac{1+\\ln x}{x}\\), with curve \\(C\\) in an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) whose unit is \\(2\\,cm\\).', [
      p2('1', 'គណនាលីមីត \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ កំណត់សមីការអាស៊ីមតូតឈរនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then find the vertical asymptote of \\(C\\).'),
      p2('2', 'គណនានិងសិក្សាសញ្ញាដេរីវេ \\(f\'(x)\\) ដោយដឹងថា \\(x^2-\\ln x > 0\\) ចំពោះ \\(x > 0\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and study its sign, given that \\(x^2-\\ln x > 0\\) for \\(x > 0\\), then draw the table of variation of \\(f\\).'),
      p2('3', 'បង្ហាញថាបន្ទាត់ \\(L: y = x\\) ជាអាស៊ីមតូតទ្រេតនៃក្រាប \\(C\\)។ សិក្សាទីតាំងរវាងបន្ទាត់ \\(L\\) និងក្រាប \\(C\\)។',
              'Show that \\(L: y = x\\) is an oblique asymptote of \\(C\\), then study the position of \\(C\\) relative to \\(L\\).'),
      p2('4', 'បន្ទាត់ \\(D\\) ប៉ះក្រាប \\(C\\) ត្រង់ចំណុច \\(M\\) ហើយបន្ទាត់ \\(D\\) ស្របនឹង \\(L\\)។ រកកូអរដោនេនៃចំណុច \\(M\\)។ គណនា \\(f(2)\\)។ សង់បន្ទាត់ \\(D\\), \\(L\\) និងក្រាប \\(C\\)។ (គេយក \\(\\dfrac{1}{e} = 0.36\\), \\(\\ln 2 = 0.7\\))',
              'The line \\(D\\) touches \\(C\\) at \\(M\\) and is parallel to \\(L\\). Find the coordinates of \\(M\\), compute \\(f(2)\\), then sketch \\(D\\), \\(L\\) and \\(C\\). (take \\(\\dfrac{1}{e} = 0.36\\), \\(\\ln 2 = 0.7\\))')
    ]),

    wr(29, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(y = f(x) = -x-\\dfrac{4\\ln x}{x}\\) ហើយមានខ្សែកោង \\(C\\)។',
          'Let \\(f\\) be defined for \\(x > 0\\) by \\(y = f(x) = -x-\\dfrac{4\\ln x}{x}\\), with curve \\(C\\).', [
      p2('1', 'គណនាលីមីត \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ ទាញរកសមីការអាស៊ីមតូតឈរនៃខ្សែកោង \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then deduce the vertical asymptote of \\(C\\).'),
      p2('2', 'បង្ហាញថាបន្ទាត់ \\(L: y = -x\\) ជាអាស៊ីមតូតទ្រេតនៃខ្សែកោង \\(C\\)។ សិក្សាទីតាំងរវាង \\(C\\) និង \\(L\\)។',
              'Show that \\(L: y = -x\\) is an oblique asymptote of \\(C\\), then study the position of \\(C\\) relative to \\(L\\).'),
      p2('3', 'បង្ហាញថាដេរីវេ \\(f\'(x) < 0\\) ដោយដឹងថា \\(x^2+4-4\\ln x > 0\\) ចំពោះ \\(x > 0\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។ បន្ទាត់ \\(D\\) ប៉ះនឹងខ្សែកោង \\(C\\) ត្រង់ចំណុច \\(A\\) ហើយស្របនឹងបន្ទាត់ \\(L\\)។ រកកូអរដោនេនៃ \\(A\\) និងសមីការបន្ទាត់ \\(D\\)។',
              'Show that \\(f\'(x) < 0\\), given that \\(x^2+4-4\\ln x > 0\\) for \\(x > 0\\), then draw the table of variation of \\(f\\). The line \\(D\\) touches \\(C\\) at \\(A\\) and is parallel to \\(L\\); find the coordinates of \\(A\\) and the equation of \\(D\\).'),
      p2('4', 'សង់ \\(L\\), \\(D\\) និង \\(C\\) ដោយយក \\(e = 2.7\\), \\(\\dfrac{4}{e} = 1.5\\)។ គេយក \\(S(a)\\) ជាផ្ទៃក្រឡាផ្នែកប្លង់កំណត់ដោយខ្សែកោង \\(C\\) និងអាស៊ីមតូតទ្រេត \\(L\\) ដែលត្រូវនឹង \\(1 \\leq x \\leq a\\)។ រកតម្លៃ \\(a\\) ដើម្បីឲ្យ \\(S(a) = 2\\) ឯកតាក្រឡាផ្ទៃ។',
              'Sketch \\(L\\), \\(D\\) and \\(C\\), taking \\(e = 2.7\\) and \\(\\dfrac{4}{e} = 1.5\\). Let \\(S(a)\\) be the area bounded by \\(C\\) and the oblique asymptote \\(L\\) for \\(1 \\leq x \\leq a\\); find \\(a\\) so that \\(S(a) = 2\\) square units.')
    ]),

    wr(30, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(y = f(x) = \\dfrac{x^2-2x+\\ln x}{x}\\) ហើយមានខ្សែកោង \\(C\\) នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) ដែលមានឯកតា \\(2\\,cm\\)។',
          'Let \\(f\\) be defined for \\(x > 0\\) by \\(y = f(x) = \\dfrac{x^2-2x+\\ln x}{x}\\), with curve \\(C\\) in an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) whose unit is \\(2\\,cm\\).', [
      p2('1', 'រកចំនួនពិត \\(a\\) និង \\(b\\) ដើម្បីឲ្យ \\(y = f(x) = ax+b+\\dfrac{\\ln x}{x}\\) ចំពោះ \\(x > 0\\)។ គណនា \\(\\lim\\limits_{x \\to 0^+} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) រួចកំណត់សមីការអាស៊ីមតូតឈរ \\(L_1\\) និងទ្រេត \\(L_2\\) នៃខ្សែកោង \\(C\\)។',
              'Find the reals \\(a\\) and \\(b\\) so that \\(y = f(x) = ax+b+\\dfrac{\\ln x}{x}\\) for \\(x > 0\\). Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then give the vertical asymptote \\(L_1\\) and the oblique asymptote \\(L_2\\) of \\(C\\).'),
      p2('2', 'គណនានិងសិក្សាសញ្ញាដេរីវេ \\(f\'(x)\\) ដោយដឹងថា \\(x^2+1-\\ln x > 0\\) ចំពោះ \\(x > 0\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and study its sign, given that \\(x^2+1-\\ln x > 0\\) for \\(x > 0\\), then draw the table of variation of \\(f\\).'),
      p2('3', 'រកសមីការនៃបន្ទាត់ \\(L_3\\) ដែលប៉ះខ្សែកោង \\(C\\) ត្រង់ចំណុច \\(A\\left(e, e-2+\\dfrac{1}{e}\\right)\\)។ គណនា \\(f(2)\\) និងកូអរដោនេនៃចំណុចប្រសព្វ \\(B\\) រវាងបន្ទាត់ \\(L_3\\) និងខ្សែកោង \\(C\\)។',
              'Find the equation of the line \\(L_3\\) tangent to \\(C\\) at \\(A\\left(e, e-2+\\dfrac{1}{e}\\right)\\). Compute \\(f(2)\\) and the coordinates of the point \\(B\\) where \\(L_3\\) meets \\(C\\).'),
      p2('4', 'សង់បន្ទាត់ \\(L_2\\), \\(L_3\\) និងខ្សែកោង \\(C\\) ដោយយក \\(e = 2.7\\), \\(\\dfrac{1}{e} = 0.36\\), \\(\\ln 2 = 0.7\\)។ គណនាផ្ទៃក្រឡាផ្នែកប្លង់ដែលកំណត់ដោយខ្សែកោង \\(C\\) បន្ទាត់ \\(L_2\\) និងបន្ទាត់មានសមីការ \\(x = e\\)។',
              'Sketch \\(L_2\\), \\(L_3\\) and \\(C\\), taking \\(e = 2.7\\), \\(\\dfrac{1}{e} = 0.36\\), \\(\\ln 2 = 0.7\\). Then find the area of the region bounded by \\(C\\), the line \\(L_2\\) and the line \\(x = e\\).')
    ]),

    wr(31, '\\(f\\) ជាអនុគមន៍កំណត់ចំពោះ \\(x \\in D = (-\\infty,0) \\cup (1,+\\infty)\\) ដោយ \\(y = f(x) = -\\dfrac{x}{2}+\\ln\\left(\\dfrac{x-1}{x}\\right)\\) ហើយមានខ្សែកោង \\(C\\)។',
          'Let \\(f\\) be defined for \\(x \\in D = (-\\infty,0) \\cup (1,+\\infty)\\) by \\(y = f(x) = -\\dfrac{x}{2}+\\ln\\left(\\dfrac{x-1}{x}\\right)\\), with curve \\(C\\).', [
      p2('1', 'គណនាលីមីត \\(\\lim\\limits_{x \\to -\\infty} f(x)\\), \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), \\(\\lim\\limits_{x \\to 0^-} f(x)\\) និង \\(\\lim\\limits_{x \\to 1^+} f(x)\\)។ កំណត់សមីការអាស៊ីមតូតឈរទាំងពីរនៃ \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to -\\infty} f(x)\\), \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), \\(\\lim\\limits_{x \\to 0^-} f(x)\\) and \\(\\lim\\limits_{x \\to 1^+} f(x)\\), then give the equations of the two vertical asymptotes of \\(C\\).'),
      p2('2', 'គណនានិងសិក្សាសញ្ញានៃ \\(f\'(x)\\) គេដឹងថា \\(x(x-1) > 0\\) ចំពោះគ្រប់ \\(x \\in D\\)។ គណនាតម្លៃអប្បបរមា និងអតិបរមានៃ \\(f\\)។ សង់តារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and study its sign, given that \\(x(x-1) > 0\\) for every \\(x \\in D\\). Compute the relative minimum and maximum of \\(f\\), then draw its table of variation.'),
      p2('3', 'បង្ហាញថាបន្ទាត់ \\(L: y = -\\dfrac{x}{2}\\) ជាអាស៊ីមតូតទ្រេតនៃខ្សែកោង \\(C\\)។',
              'Show that \\(L: y = -\\dfrac{x}{2}\\) is an oblique asymptote of \\(C\\).'),
      p2('4', 'សង់អាស៊ីមតូតទាំងអស់ និងខ្សែកោង \\(C\\) យក \\(\\ln 2 = 0.7\\)។ រកតម្លៃ \\(a\\) ដើម្បីឲ្យសមីការ \\(-\\dfrac{x}{2}+\\ln\\left(\\dfrac{x-1}{x}\\right) = a\\) មានឬស។',
              'Sketch all the asymptotes and \\(C\\), taking \\(\\ln 2 = 0.7\\). Then find the values of \\(a\\) for which \\(-\\dfrac{x}{2}+\\ln\\left(\\dfrac{x-1}{x}\\right) = a\\) has roots.')
    ]),

    wr(32, 'ផ្នែក \\(a\\)៖ អនុគមន៍ \\(g\\) កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(g(x) = x^2-1+\\ln x\\)។ ផ្នែក \\(b\\)៖ អនុគមន៍ \\(f\\) កំណត់ចំពោះ \\(x > 0\\) ដោយ \\(f(x) = x-1-\\dfrac{\\ln x}{x}\\) ហើយមានក្រាប \\(C\\)។',
          'Part a: \\(g\\) is defined for \\(x > 0\\) by \\(g(x) = x^2-1+\\ln x\\). Part b: \\(f\\) is defined for \\(x > 0\\) by \\(f(x) = x-1-\\dfrac{\\ln x}{x}\\), with curve \\(C\\).', [
      p2('a', 'គណនា \\(g(1)\\) រួចកំណត់សញ្ញានៃអនុគមន៍ \\(g(x)\\)។',
              'Compute \\(g(1)\\), then determine the sign of \\(g(x)\\).'),
      p2('1', 'គណនា \\(\\lim\\limits_{x \\to 0^+} f(x)\\), \\(\\lim\\limits_{x \\to +\\infty} f(x)\\)។ បញ្ជាក់សមីការអាស៊ីមតូតឈរនៃក្រាប \\(C\\)។',
              'Compute \\(\\lim\\limits_{x \\to 0^+} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\), then state the vertical asymptote of \\(C\\).'),
      p2('2', 'បង្ហាញថាបន្ទាត់ \\(d: y = x-1\\) ជាអាស៊ីមតូតទ្រេតនៃ \\(C\\) ខាង \\(+\\infty\\) រួចបញ្ជាក់ទីតាំងនៃក្រាប \\(C\\) ធៀបនឹងបន្ទាត់ \\(d\\)។',
              'Show that \\(d: y = x-1\\) is an oblique asymptote of \\(C\\) as \\(x \\to +\\infty\\), then state the position of \\(C\\) relative to \\(d\\).'),
      p2('3', 'គណនា \\(f\'(x)\\) រួចកំណត់សញ្ញានៃ \\(f\'(x)\\)។ បង្ហាញថា \\(f(x)\\) មានអប្បបរមាត្រង់ \\(x = 1\\) រួចគណនា \\(f(1)\\)។ គូសតារាងអថេរភាពនៃ \\(f\\)។',
              'Compute \\(f\'(x)\\) and determine its sign. Show that \\(f\\) has a relative minimum at \\(x = 1\\), compute \\(f(1)\\), then draw the table of variation of \\(f\\).'),
      p2('4', 'គណនា \\(f\\left(\\dfrac{1}{2}\\right)\\) និង \\(f(2)\\)។ សង់ក្រាប \\(C\\) និងបន្ទាត់ \\(d\\)។',
              'Compute \\(f\\left(\\dfrac{1}{2}\\right)\\) and \\(f(2)\\), then sketch \\(C\\) and the line \\(d\\).'),
      p2('5', 'កំណត់តម្លៃ \\(k\\) ដើម្បីឲ្យសមីការ \\(x-1-\\dfrac{\\ln x}{x} = k\\) មានឬស។',
              'Find the values of \\(k\\) for which \\(x-1-\\dfrac{\\ln x}{x} = k\\) has roots.')
    ]),

    wr(33, 'គេឲ្យអនុគមន៍ \\(f\\) ដែល \\(f(x) = x-2+\\dfrac{2(x+1)}{e^x}\\)។ យើងតាង \\((C)\\) ជាក្រាបតាងអនុគមន៍ \\(f\\) ក្នុងប្លង់ប្រដាប់ដោយតម្រុយអរតូណរម៉ាល់ \\(\\left(0,\\vec{i},\\vec{j}\\right)\\)។ (បាក់ឌុប ២០២១)',
          'Consider \\(f(x) = x-2+\\dfrac{2(x+1)}{e^x}\\), and let \\((C)\\) be its curve in an orthonormal system \\(\\left(0,\\vec{i},\\vec{j}\\right)\\). (BaccII 2021)', [
      p2('1', 'រកដែនកំណត់នៃអនុគមន៍ \\(f\\)។ គណនា \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) និង \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) (យើងដឹងថា \\(\\lim\\limits_{x \\to +\\infty} \\dfrac{x}{e^x} = 0\\))។',
              'Find the domain of \\(f\\). Compute \\(\\lim\\limits_{x \\to -\\infty} f(x)\\) and \\(\\lim\\limits_{x \\to +\\infty} f(x)\\) (given that \\(\\lim\\limits_{x \\to +\\infty} \\dfrac{x}{e^x} = 0\\)).'),
      p2('2', 'បង្ហាញថាបន្ទាត់ \\((D)\\) មានសមីការ \\(y = x-2\\) ជាអាស៊ីមតូតទ្រេតនៃ \\((C)\\) ត្រង់ \\(+\\infty\\)។ បញ្ជាក់ទីតាំងនៃក្រាប \\((C)\\) ធៀបនឹងបន្ទាត់ \\((D)\\)។',
              'Show that the line \\((D): y = x-2\\) is an oblique asymptote of \\((C)\\) as \\(x \\to +\\infty\\), then state the position of \\((C)\\) relative to \\((D)\\).'),
      p2('3', 'យើងតាង \\(f\'(x)\\) ជាដេរីវេនៃ \\(f(x)\\)។ បង្ហាញថា \\(f\'(x) = \\dfrac{e^x-2x}{e^x}\\) គេដឹងថាគ្រប់ \\(x\\) ជាតុរបស់ \\(\\mathbb{R}: e^x-2x > 0\\)។ ប្រើលទ្ធផលនេះដើម្បីទាញការសិក្សាអថេរភាពនៃអនុគមន៍ \\(f\\)។',
              'Let \\(f\'(x)\\) be the derivative of \\(f\\). Show that \\(f\'(x) = \\dfrac{e^x-2x}{e^x}\\), given that \\(e^x-2x > 0\\) for every real \\(x\\), then use this to study the variation of \\(f\\).'),
      p2('4', 'បង្ហាញថាបន្ទាត់ប៉ះ \\((\\Delta)\\) ទៅនឹងក្រាប \\((C)\\) ត្រង់ចំណុចដែលមានអាប់ស៊ីស \\(0\\) ស្របទៅនឹងបន្ទាត់ \\((D)\\)។ សង់បន្ទាត់ \\((D)\\), \\((\\Delta)\\) និងក្រាប \\((C)\\)។',
              'Show that the tangent \\((\\Delta)\\) to \\((C)\\) at the point with abscissa \\(0\\) is parallel to \\((D)\\), then sketch \\((D)\\), \\((\\Delta)\\) and \\((C)\\).')
    ])
  ];

  /* Exercise taken from a past national examination. */
  WR[32].src = 'bac 2021';

  global.MATH_BANK = { key: 'func', lesson: LESSON, mc: MC, exercises: WR };
})(window);
