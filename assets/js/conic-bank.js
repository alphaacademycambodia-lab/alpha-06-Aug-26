/* Alpha Academy Cambodia — Grade 12 conics
   ---------------------------------------------------------------------------
   Transcribed from មេរៀនទី៩ កោនិច — PARABOLA, ELLIPSE AND HYPERBOLA
   (pp. 266–307) of the Preah Sisowath NGS summary workbook: the summary
   lesson (pp. 266–273, six reference tables) and the three exercise sets that
   follow — លំហាត់ប៉ារ៉ាបូល (pp. 274–283), លំហាត់អេលីប (pp. 284–296) and
   លំហាត់អ៊ីពែបូល (pp. 297–307).

   Shape is the shared window.MATH_BANK contract read by math-lesson.js:
     lesson    [{ id, h:{km,en}, blocks:[…] }]      blocks may be t:'tbl'
     exercises [{ n, grp?:{km,en}, q:{km,en}, p:[{ k, t:{km,en} }] }]

   `grp` splits the written exercises into the workbook's three families;
   numbering restarts inside each family exactly as the book prints it, so a
   done-mark key is prefixed with the family letter to stay unique.

   The workbook carries no answer key, so nothing here claims a right answer.
*/
(function (global) {
  'use strict';

  var KM = function (km, en) { return { km: km, en: en }; };
  var TEX = function (t) { return { tex: t }; };

  /* ==================================================================== 1
     LESSON — the six reference tables                                    */
  var LESSON = [
    { id: 'parabola',
      h: { km: 'ប៉ារ៉ាបូល', en: 'The parabola' },
      blocks: [
        { t: 'p',
          km: 'ប៉ារ៉ាបូលជាសំណុំចំណុចដែលមានចម្ងាយពីកំណុំ និងពីបន្ទាត់ប្រាប់ទិសស្មើគ្នា។ តារាងខាងក្រោមសង្ខេបធាតុទាំងអស់តាមទីតាំងកំពូល និងតាមអ័ក្សឆ្លុះ។',
          en: 'A parabola is the set of points equidistant from the focus and from the directrix. The tables below summarise every element, by the position of the vertex and by the axis of symmetry.' },
        { t: 'tbl',
          cap: { km: '១. កំពូលជាគល់តម្រុយ \\(O(0,0)\\)', en: '1. Vertex at the origin \\(O(0,0)\\)' },
          head: [ KM('អ័ក្សឆ្លុះជាអ័ក្ស', 'Axis of symmetry'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('សមីការស្តង់ដា', 'Standard equation'), TEX('y^2 = 4px'), TEX('x^2 = 4py') ],
            [ KM('កូអរដោនេកំពូល', 'Vertex'), TEX('V(0,0)'), TEX('V(0,0)') ],
            [ KM('កូអរដោនេកំណុំ', 'Focus'), TEX('F(p,0)'), TEX('F(0,p)') ],
            [ KM('សមីការបន្ទាត់ប្រាប់ទិស', 'Directrix'), TEX('x = -p'), TEX('y = -p') ],
            [ KM('ការបែរភាពផត \\(p > 0\\)', 'Opens when \\(p > 0\\)'), KM('បើកទៅស្តាំ', 'to the right'), KM('បើកឡើងលើ', 'upward') ],
            [ KM('ការបែរភាពផត \\(p < 0\\)', 'Opens when \\(p < 0\\)'), KM('បើកទៅឆ្វេង', 'to the left'), KM('បើកចុះក្រោម', 'downward') ]
          ] },
        { t: 'tbl',
          cap: { km: '២. កំពូលជាចំណុច \\(I(h,k)\\)', en: '2. Vertex at \\(I(h,k)\\)' },
          head: [ KM('អ័ក្សឆ្លុះស្របនឹងអ័ក្ស', 'Axis of symmetry parallel to'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('សមីការស្តង់ដា', 'Standard equation'), TEX('(y-k)^2 = 4p(x-h)'), TEX('(x-h)^2 = 4p(y-k)') ],
            [ KM('កូអរដោនេកំពូល', 'Vertex'), TEX('V(h,k)'), TEX('V(h,k)') ],
            [ KM('កូអរដោនេកំណុំ', 'Focus'), TEX('F(h+p,k)'), TEX('F(h,k+p)') ],
            [ KM('សមីការបន្ទាត់ប្រាប់ទិស', 'Directrix'), TEX('x = h-p'), TEX('y = k-p') ],
            [ KM('ការបែរភាពផត \\(p > 0\\)', 'Opens when \\(p > 0\\)'), KM('បើកទៅស្តាំ', 'to the right'), KM('បើកឡើងលើ', 'upward') ],
            [ KM('ការបែរភាពផត \\(p < 0\\)', 'Opens when \\(p < 0\\)'), KM('បើកទៅឆ្វេង', 'to the left'), KM('បើកចុះក្រោម', 'downward') ]
          ] },
        { t: 'note',
          km: 'ពាក្យបច្ចេកទេស៖ Vertex = កំពូល · Focus = កំណុំ · Directrix = បន្ទាត់ប្រាប់ទិស។',
          en: 'Terms used in the tables: Vertex = កំពូល, Focus = កំណុំ, Directrix = បន្ទាត់ប្រាប់ទិស.' }
      ] },

    { id: 'ellipse',
      h: { km: 'អេលីប', en: 'The ellipse' },
      blocks: [
        { t: 'p',
          km: 'អេលីបជាសំណុំចំណុចដែលផលបូកចម្ងាយពីកំណុំទាំងពីរថេរ។ អ័ក្សធំមានប្រវែង \\(2a\\) និងអ័ក្សតូចមានប្រវែង \\(2b\\) ជានិច្ច។',
          en: 'An ellipse is the set of points whose distances to the two foci add to a constant. The major axis always has length \\(2a\\) and the minor axis \\(2b\\).' },
        { t: 'tbl',
          cap: { km: '១. ផ្ចិតជាគល់តម្រុយ \\(O(0,0)\\)', en: '1. Centre at the origin \\(O(0,0)\\)' },
          head: [ KM('អ័ក្សធំនៅលើអ័ក្ស', 'Major axis along'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('កូអរដោនេផ្ចិត', 'Centre'), TEX('O(0,0)'), TEX('O(0,0)') ],
            [ KM('សមីការស្តង់ដា', 'Standard equation'),
              TEX('\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2} = 1'), TEX('\\dfrac{x^2}{b^2}+\\dfrac{y^2}{a^2} = 1') ],
            [ KM('ប្រវែងអ័ក្ស', 'Axis lengths'),
              KM('អ័ក្សធំ \\(2a\\), អ័ក្សតូច \\(2b\\)', 'major \\(2a\\), minor \\(2b\\)'),
              KM('អ័ក្សធំ \\(2a\\), អ័ក្សតូច \\(2b\\)', 'major \\(2a\\), minor \\(2b\\)') ],
            [ KM('កូអរដោនេកំពូលទាំងពីរ', 'Vertices'),
              TEX('V_1(a,0),\\; V_2(-a,0)'), TEX('V_1(0,a),\\; V_2(0,-a)') ],
            [ KM('កូអរដោនេកំណុំ', 'Foci'),
              TEX('F_1(c,0),\\; F_2(-c,0)'), TEX('F_1(0,c),\\; F_2(0,-c)') ],
            [ KM('រកតម្លៃ \\(c\\)', 'Finding \\(c\\)'),
              TEX('c^2 = a^2-b^2'), TEX('c^2 = a^2-b^2') ]
          ] },
        { t: 'tbl',
          cap: { km: '២. ផ្ចិតជាចំណុច \\(I(h,k)\\)', en: '2. Centre at \\(I(h,k)\\)' },
          head: [ KM('អ័ក្សធំស្របនឹងអ័ក្ស', 'Major axis parallel to'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('កូអរដោនេផ្ចិត', 'Centre'), TEX('I(h,k)'), TEX('I(h,k)') ],
            [ KM('សមីការស្តង់ដា', 'Standard equation'),
              TEX('\\dfrac{(x-h)^2}{a^2}+\\dfrac{(y-k)^2}{b^2} = 1'),
              TEX('\\dfrac{(x-h)^2}{b^2}+\\dfrac{(y-k)^2}{a^2} = 1') ],
            [ KM('កូអរដោនេកំពូលទាំងពីរ', 'Vertices'),
              TEX('V_1(h-a,k),\\; V_2(h+a,k)'), TEX('V_1(h,k-a),\\; V_2(h,k+a)') ],
            [ KM('កូអរដោនេកំណុំ', 'Foci'),
              TEX('F_1(h-c,k),\\; F_2(h+c,k)'), TEX('F_1(h,k-c),\\; F_2(h,k+c)') ],
            [ KM('រកតម្លៃ \\(c\\)', 'Finding \\(c\\)'),
              TEX('c^2 = a^2-b^2'), TEX('c^2 = a^2-b^2') ]
          ] },
        { t: 'p', km: 'អ៊ិចសង់ទ្រីស៊ីតេ', en: 'Eccentricity' },
        { t: 'm', tex: 'e = \\frac{c}{a}\\;;\\qquad 0 < e < 1' },
        { t: 'ul', items: [
          { km: 'បើ \\(e \\to 0\\) នោះអេលីបមានរាងជារង្វង់។', en: 'As \\(e \\to 0\\) the ellipse looks like a circle.' },
          { km: 'បើ \\(e \\to 1\\) នោះអេលីបមានរាងជាពងក្រពើ។', en: 'As \\(e \\to 1\\) the ellipse becomes long and flattened.' }
        ] }
      ] },

    { id: 'hyperbola',
      h: { km: 'អ៊ីពែបូល', en: 'The hyperbola' },
      blocks: [
        { t: 'p',
          km: 'អ៊ីពែបូលជាសំណុំចំណុចដែលផលដកចម្ងាយពីកំណុំទាំងពីរថេរ។ វាមានមែកពីរ និងអាស៊ីមតូតពីរដែលកាត់គ្នាត្រង់ផ្ចិត។',
          en: 'A hyperbola is the set of points whose distances to the two foci differ by a constant. It has two branches and two asymptotes crossing at the centre.' },
        { t: 'tbl',
          cap: { km: '១. ផ្ចិតជាគល់តម្រុយ \\(O(0,0)\\)', en: '1. Centre at the origin \\(O(0,0)\\)' },
          head: [ KM('អ័ក្សទទឹងនៅលើអ័ក្ស', 'Transverse axis along'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('កូអរដោនេផ្ចិត', 'Centre'), TEX('O(0,0)'), TEX('O(0,0)') ],
            [ KM('សមីការស្តង់ដា', 'Standard equation'),
              TEX('\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2} = 1'), TEX('\\dfrac{y^2}{a^2}-\\dfrac{x^2}{b^2} = 1') ],
            [ KM('កូអរដោនេកំពូលទាំងពីរ', 'Vertices'),
              TEX('V_1(a,0),\\; V_2(-a,0)'), TEX('V_1(0,a),\\; V_2(0,-a)') ],
            [ KM('កូអរដោនេកំណុំ', 'Foci'),
              TEX('F_1(c,0),\\; F_2(-c,0)'), TEX('F_1(0,c),\\; F_2(0,-c)') ],
            [ KM('សមីការអាស៊ីមតូតទាំងពីរ', 'Asymptotes'),
              TEX('y = \\pm\\dfrac{b}{a}x'), TEX('y = \\pm\\dfrac{a}{b}x') ],
            [ KM('រកតម្លៃ \\(c\\)', 'Finding \\(c\\)'),
              TEX('c^2 = a^2+b^2'), TEX('c^2 = a^2+b^2') ]
          ] },
        { t: 'tbl',
          cap: { km: '២. ផ្ចិតជាចំណុច \\(I(h,k)\\)', en: '2. Centre at \\(I(h,k)\\)' },
          head: [ KM('អ័ក្សទទឹងស្របនឹងអ័ក្ស', 'Transverse axis parallel to'), KM('អាប់ស៊ីស', 'the x-axis'), KM('អរដោនេ', 'the y-axis') ],
          rows: [
            [ KM('កូអរដោនេផ្ចិត', 'Centre'), TEX('I(h,k)'), TEX('I(h,k)') ],
            [ KM('សមីការស្តង់ដា', 'Standard equation'),
              TEX('\\dfrac{(x-h)^2}{a^2}-\\dfrac{(y-k)^2}{b^2} = 1'),
              TEX('\\dfrac{(y-k)^2}{a^2}-\\dfrac{(x-h)^2}{b^2} = 1') ],
            [ KM('កូអរដោនេកំពូលទាំងពីរ', 'Vertices'),
              TEX('V_1(h-a,k),\\; V_2(h+a,k)'), TEX('V_1(h,k-a),\\; V_2(h,k+a)') ],
            [ KM('កូអរដោនេកំណុំ', 'Foci'),
              TEX('F_1(h-c,k),\\; F_2(h+c,k)'), TEX('F_1(h,k-c),\\; F_2(h,k+c)') ],
            [ KM('សមីការអាស៊ីមតូតទាំងពីរ', 'Asymptotes'),
              TEX('y = \\pm\\dfrac{b}{a}(x-h)+k'), TEX('y = \\pm\\dfrac{a}{b}(x-h)+k') ],
            [ KM('រកតម្លៃ \\(c\\)', 'Finding \\(c\\)'),
              TEX('c^2 = a^2+b^2'), TEX('c^2 = a^2+b^2') ]
          ] },
        { t: 'p', km: 'អ៊ិចសង់ទ្រីស៊ីតេ', en: 'Eccentricity' },
        { t: 'm', tex: 'e = \\frac{c}{a}\\;;\\qquad e > 1' }
      ] }
  ];

  /* ==================================================================== 2
     No multiple-choice set in this chapter.                              */
  var MC = [];

  /* ==================================================================== 3
     WRITTEN EXERCISES — three families                                   */
  var GP = { km: 'លំហាត់ប៉ារ៉ាបូល', en: 'Parabola exercises' };
  var GE = { km: 'លំហាត់អេលីប',    en: 'Ellipse exercises' };
  var GH = { km: 'លំហាត់អ៊ីពែបូល',  en: 'Hyperbola exercises' };

  function wr(grp, n, km, en, parts) {
    return { n: n, grp: grp, q: { km: km, en: en }, p: parts || [] };
  }
  function p2(k, km, en) { return { k: k, t: { km: km, en: en } }; }
  /* One-language part: the maths reads the same in Khmer and English. */
  function m(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }

  var WR = [
    /* ------------------------------------------ ប៉ារ៉ាបូល (pp. 274–283) */
    wr(GP, 1, 'រកកូអរដោនេកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល \\((y-1)^2 = 4(x-1)\\)។ រួចសង់ប៉ារ៉ាបូលនោះ។',
      'Find the vertex, the focus and the directrix of the parabola \\((y-1)^2 = 4(x-1)\\), then sketch it.', []),
    wr(GP, 2, 'រកកូអរដោនេកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល \\((x+3)^2 = -2(y-4)\\)។ រួចសង់ប៉ារ៉ាបូលនោះ។',
      'Find the vertex, the focus and the directrix of the parabola \\((x+3)^2 = -2(y-4)\\), then sketch it.', []),
    wr(GP, 3, 'រកសមីការស្តង់ដានៃប៉ារ៉ាបូលដែលមានអ័ក្សឆ្លុះស្របអ័ក្សអរដោនេ ហើយក្រាបរបស់វាកាត់តាមចំណុច \\((0,3)\\), \\((3,4)\\) និង \\((4,11)\\)។',
      'Find the standard equation of the parabola whose axis of symmetry is parallel to the y-axis and whose curve passes through \\((0,3)\\), \\((3,4)\\) and \\((4,11)\\).', []),
    wr(GP, 4, 'រកសមីការស្តង់ដានៃប៉ារ៉ាបូលដែលមានអ័ក្សឆ្លុះស្របអ័ក្សអាប់ស៊ីស ហើយក្រាបរបស់វាកាត់តាមចំណុច \\(\\left(3,1+\\sqrt{2}\\right)\\), \\((2,1)\\) និង \\(\\left(\\dfrac{5}{2},0\\right)\\)។ កំណត់កូអរដោនេកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិស រួចសង់ប៉ារ៉ាបូល។',
      'Find the standard equation of the parabola whose axis of symmetry is parallel to the x-axis and whose curve passes through \\(\\left(3,1+\\sqrt{2}\\right)\\), \\((2,1)\\) and \\(\\left(\\dfrac{5}{2},0\\right)\\). Determine the vertex, the focus and the directrix, then sketch it.', []),
    wr(GP, 5, 'រកសមីការស្តង់ដានៃប៉ារ៉ាបូលដែលមានអ័ក្សឆ្លុះជាអ័ក្សឈរ ហើយក្រាបរបស់វាកាត់តាមចំណុច \\(A(2,5)\\), \\(B(-2,-3)\\) និង \\(C(1,6)\\)។ កំណត់កូអរដោនេកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិស រួចសង់ប៉ារ៉ាបូល។',
      'Find the standard equation of the parabola whose axis of symmetry is vertical and whose curve passes through \\(A(2,5)\\), \\(B(-2,-3)\\) and \\(C(1,6)\\). Determine the vertex, the focus and the directrix, then sketch it.', []),
    wr(GP, 7, 'គេមានប៉ារ៉ាបូល \\(P\\) មួយមានកំពូល \\((1,1)\\) និងកំណុំ \\(\\left(1,\\dfrac{3}{2}\\right)\\)។',
      'A parabola \\(P\\) has vertex \\((1,1)\\) and focus \\(\\left(1,\\dfrac{3}{2}\\right)\\).', [
      p2('a', 'រកសមីការទូទៅរបស់ប៉ារ៉ាបូល \\(P\\)។', 'Find the general equation of \\(P\\).'),
      p2('b', 'រកសមីការបន្ទាត់ \\(d\\) ដែលកាត់តាមចំណុច \\(A(2,-3)\\) ហើយប៉ះនឹងប៉ារ៉ាបូល \\(P\\)។',
              'Find the equation of the line \\(d\\) through \\(A(2,-3)\\) that is tangent to \\(P\\).')
    ]),
    wr(GP, 8, 'បំលែងសមីការប៉ារ៉ាបូលនីមួយៗខាងក្រោមជាទម្រង់ស្តង់ដា រួចកំណត់កូអរដោនេកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិស ហើយសង់ក្រាប៖',
      'Write each parabola below in standard form, then find its vertex, focus and directrix, and sketch it:', [
      m('a', 'y^2-2y-3x-8 = 0'), m('b', '4y-x^2-2x-33 = 0'),
      m('c', 'x^2-4x-4y = 0'),   m('d', 'y^2+4y+4x-4 = 0')
    ]),
    wr(GP, 9, 'គេមានប៉ារ៉ាបូល \\(P: x^2-4x+4y+12 = 0\\)។',
      'Consider the parabola \\(P: x^2-4x+4y+12 = 0\\).', [
      p2('a', 'សរសេរសមីការនៃប៉ារ៉ាបូល \\(P\\) ជាទម្រង់ស្តង់ដា រួចកំណត់កូអរដោនេកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\)។',
              'Write \\(P\\) in standard form, then find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\).'),
      p2('b', 'គណនា \\(x\\) ចំពោះ \\(y = -3\\)។ សង់ប៉ារ៉ាបូល \\(P\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
              'Compute \\(x\\) when \\(y = -3\\), then sketch \\(P\\) in an orthonormal system.')
    ]),
    wr(GP, 10, 'រកកូអរដោនេកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\) នៃប៉ារ៉ាបូល \\(P\\) រួចសង់ក្រាប ក្នុងករណីនីមួយៗខាងក្រោម៖',
      'Find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\) of the parabola \\(P\\), then sketch it, in each case:', [
      m('a', 'y = \\tfrac{1}{4}\\left(x^2-2x+5\\right)'), m('b', '2y^2+4y-9x+20 = 0'),
      m('c', 'x^2+6x+8y+25 = 0'), m('d', 'y^2+4y+8x-12 = 0')
    ]),
    wr(GP, 11, 'គេមានប៉ារ៉ាបូល \\(P: 4y^2+8y-3x+10 = 0\\)។',
      'Consider the parabola \\(P: 4y^2+8y-3x+10 = 0\\).', [
      p2('a', 'សរសេរសមីការនៃប៉ារ៉ាបូល \\(P\\) ជាទម្រង់ស្តង់ដា រួចកំណត់កូអរដោនេកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\)។',
              'Write \\(P\\) in standard form, then find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\).'),
      p2('b', 'គណនា \\(y\\) ចំពោះ \\(x = 5\\)។ សង់ប៉ារ៉ាបូល \\(P\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
              'Compute \\(y\\) when \\(x = 5\\), then sketch \\(P\\) in an orthonormal system.')
    ]),
    wr(GP, 12, 'រកសមីការបន្ទាត់ \\(d\\) ដែលប៉ះនឹងប៉ារ៉ាបូល \\(P: y = x^2-2x+2\\) ហើយកែងទៅនឹងបន្ទាត់ \\(L: y = x-2\\)។',
      'Find the equation of the line \\(d\\) tangent to the parabola \\(P: y = x^2-2x+2\\) and perpendicular to the line \\(L: y = x-2\\).', []),
    wr(GP, 13, 'រកទម្រង់ស្តង់ដានៃសមីការប៉ារ៉ាបូល \\(P\\) ដែលមានអ័ក្សឆ្លុះស្របអ័ក្សអរដោនេ និងកំពូល \\((0,1)\\) ហើយប៉ារ៉ាបូល \\(P\\) និងបន្ទាត់ \\(d: y = -x+3\\) ប្រសព្វគ្នាត្រង់ចំណុចដែលមានអាប់ស៊ីស \\(x = 1\\)។',
      'Find the standard equation of the parabola \\(P\\) whose axis of symmetry is parallel to the y-axis, with vertex \\((0,1)\\), given that \\(P\\) meets the line \\(d: y = -x+3\\) at the point with abscissa \\(x = 1\\).', []),
    wr(GP, 14, 'រកទម្រង់ស្តង់ដានៃសមីការប៉ារ៉ាបូល \\(P\\) ដែលមានអ័ក្សឆ្លុះស្របអ័ក្សអាប់ស៊ីស និងកំពូល \\((2,1)\\) ហើយក្រាបរបស់វាកាត់តាមចំណុច \\(A\\left(\\dfrac{5}{2},4\\right)\\)។',
      'Find the standard equation of the parabola \\(P\\) whose axis of symmetry is parallel to the x-axis, with vertex \\((2,1)\\), whose curve passes through \\(A\\left(\\dfrac{5}{2},4\\right)\\).', []),
    wr(GP, 15, 'គេឲ្យប៉ារ៉ាបូល \\(P: y = x^2-4x+a\\) ដែល \\(a\\) ជាចំនួនពិត។',
      'Consider the parabola \\(P: y = x^2-4x+a\\), where \\(a\\) is real.', [
      p2('a', 'កំណត់តម្លៃ \\(a\\) ដើម្បីឲ្យប៉ារ៉ាបូល \\(P\\) ប៉ះនឹងបន្ទាត់ \\(d: y = -2x+4\\) ត្រង់ \\(x_0 = 1\\)។',
              'Find \\(a\\) so that \\(P\\) is tangent to the line \\(d: y = -2x+4\\) at \\(x_0 = 1\\).'),
      p2('b', 'ចំពោះតម្លៃ \\(a\\) ដែលរកឃើញខាងលើ សរសេរសមីការប៉ារ៉ាបូល \\(P\\) ជាទម្រង់ស្តង់ដា រួចកំណត់កូអរដោនេកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\)។',
              'For that value of \\(a\\), write \\(P\\) in standard form and find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\).'),
      p2('c', 'គណនា \\(x\\) ចំពោះ \\(y = 2\\) និង \\(y = 5\\)។ សង់ប៉ារ៉ាបូល \\(P\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
              'Compute \\(x\\) when \\(y = 2\\) and when \\(y = 5\\), then sketch \\(P\\) in an orthonormal system.')
    ]),
    wr(GP, 16, 'គេមានប៉ារ៉ាបូល \\(P: y^2-4x-4y+12 = 0\\)។',
      'Consider the parabola \\(P: y^2-4x-4y+12 = 0\\).', [
      p2('a', 'សរសេរសមីការនៃប៉ារ៉ាបូល \\(P\\) ជាទម្រង់ស្តង់ដា រួចកំណត់កូអរដោនេកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\)។',
              'Write \\(P\\) in standard form, then find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\).'),
      p2('b', 'គណនា \\(y\\) ចំពោះ \\(x = 3\\)។ សង់ប៉ារ៉ាបូល \\(P\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
              'Compute \\(y\\) when \\(x = 3\\), then sketch \\(P\\) in an orthonormal system.')
    ]),
    wr(GP, 17, 'ប៉ារ៉ាបូល \\(P\\) មានសមីការ \\(x^2-2x-2y+4 = 0\\)។',
      'The parabola \\(P\\) has equation \\(x^2-2x-2y+4 = 0\\).', [
      p2('a', 'រកកូអរដោនេនៃកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\) នៃប៉ារ៉ាបូល \\(P\\)។',
              'Find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\) of \\(P\\).'),
      p2('b', 'រកកូអរដោនេនៃចំណុចប្រសព្វរវាង \\(P\\) និងអ័ក្សអរដោនេ ហើយសង់ \\(P\\) ក្នុងតម្រុយអរតូណរម៉ាល់ \\(xOy\\) មួយ។',
              'Find where \\(P\\) meets the y-axis, then sketch \\(P\\) in an orthonormal system \\(xOy\\).')
    ]),
    wr(GP, 18, 'ប៉ារ៉ាបូល \\(P\\) មានសមីការ \\(2y^2+8y+3x-4 = 0\\)។',
      'The parabola \\(P\\) has equation \\(2y^2+8y+3x-4 = 0\\).', [
      p2('a', 'រកកូអរដោនេនៃកំពូល \\(V\\), កំណុំ \\(F\\) និងសមីការបន្ទាត់ប្រាប់ទិស \\(\\Delta\\) នៃប៉ារ៉ាបូល \\(P\\)។',
              'Find the vertex \\(V\\), the focus \\(F\\) and the directrix \\(\\Delta\\) of \\(P\\).'),
      p2('b', 'រកកូអរដោនេនៃចំណុចប្រសព្វរវាង \\(P\\) និងបន្ទាត់ដែលមានសមីការ \\(x = -2\\) ហើយសង់ \\(P\\)។',
              'Find where \\(P\\) meets the line \\(x = -2\\), then sketch \\(P\\).')
    ]),
    wr(GP, 19, 'ប៉ារ៉ាបូល \\(P\\) មួយមានសមីការ \\(y^2-4y-8x+12 = 0\\)។',
      'A parabola \\(P\\) has equation \\(y^2-4y-8x+12 = 0\\).', [
      p2('a', 'រកកូអរដោនេនៃកំពូល កំណុំ សមីការអ័ក្សឆ្លុះ និងសមីការបន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល \\(P\\)។',
              'Find the vertex, the focus, the axis of symmetry and the directrix of \\(P\\).'),
      p2('b', 'រកកូអរដោនេនៃចំណុចប្រសព្វរវាង \\(P\\) និងបន្ទាត់ឈរ \\(x = 3\\)។',
              'Find where \\(P\\) meets the vertical line \\(x = 3\\).')
    ]),
    wr(GP, 20, 'បំលែងសមីការប៉ារ៉ាបូល \\(x^2+x-4y+\\dfrac{49}{4} = 0\\) ជាទម្រង់ស្តង់ដា។ រកកូអរដោនេនៃកំពូល កំណុំ និងសមីការបន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល។',
      'Write the parabola \\(x^2+x-4y+\\dfrac{49}{4} = 0\\) in standard form, then find its vertex, focus and directrix.', []),

    /* ---------------------------------------------- អេលីប (pp. 284–296) */
    wr(GE, 1, 'រកកូអរដោនេផ្ចិត កំពូល កំណុំ និងអ៊ិចសង់ទ្រីស៊ីតេរបស់អេលីប ហើយសង់អេលីបក្នុងករណីនីមួយៗខាងក្រោម៖',
      'Find the centre, the vertices, the foci and the eccentricity of the ellipse, then sketch it, in each case:', [
      m('a', '4x^2+y^2 = 4'), m('b', '2x^2+5y^2 = 10'),
      m('c', '\\dfrac{(x+4)^2}{9}+\\dfrac{(y-3)^2}{16} = 1'),
      m('d', '(x+4)^2+\\dfrac{(y+2)^2}{\\frac{1}{4}} = 1'),
      m('e', '\\dfrac{(x-5)^2}{9}+\\dfrac{(y-1)^2}{25} = 1'),
      m('f', '\\dfrac{(x+2)^2}{25}+\\dfrac{(y+2)^2}{4} = 1')
    ]),
    wr(GE, 2, 'រកកូអរដោនេផ្ចិត កំពូល កំណុំ និងអ៊ិចសង់ទ្រីស៊ីតេរបស់អេលីប ហើយសង់អេលីបក្នុងករណីនីមួយៗខាងក្រោម៖',
      'Find the centre, the vertices, the foci and the eccentricity of the ellipse, then sketch it, in each case:', [
      m('a', '4x^2+9y^2-24x+36y+36 = 0'), m('b', '16x^2+9y^2-32x+54y-47 = 0'),
      m('c', '16x^2+100y^2-64x-100y-311 = 0'), m('d', '9x^2+25y^2-36x-50y-164 = 0'),
      m('e', '3x^2+2y^2+6x-8y+5 = 0'), m('f', 'x^2+4y^2+4x = 0')
    ]),
    wr(GE, 3, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) កំណុំ \\((2,0)\\) និងកំពូល \\((3,0)\\)។',
      'Find the equation of the ellipse with centre \\((0,0)\\), focus \\((2,0)\\) and vertex \\((3,0)\\).', []),
    wr(GE, 4, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) កំពូល \\((2,0)\\) និងអ័ក្សតូចមានប្រវែង \\(3\\) ឯកតា។',
      'Find the equation of the ellipse with centre \\((0,0)\\), vertex \\((2,0)\\) and minor axis of length \\(3\\) units.', []),
    wr(GE, 5, 'រកសមីការអេលីបដែលមានកំពូល \\((2,0)\\) និង \\((-2,0)\\) ហើយអ៊ិចសង់ទ្រីស៊ីតេស្មើនឹង \\(\\dfrac{3}{5}\\)។',
      'Find the equation of the ellipse with vertices \\((2,0)\\) and \\((-2,0)\\) and eccentricity \\(\\dfrac{3}{5}\\).', []),
    wr(GE, 6, 'រកសមីការអេលីបដែលមានកំណុំ \\((0,2)\\) និង \\((0,-2)\\) និងអ័ក្សធំមានប្រវែង \\(6\\) ឯកតា។',
      'Find the equation of the ellipse with foci \\((0,2)\\) and \\((0,-2)\\) and major axis of length \\(6\\) units.', []),
    wr(GE, 7, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) និងអ័ក្សធំជាអ័ក្សដេក ហើយចំណុច \\((3,1)\\) និង \\((4,0)\\) ស្ថិតនៅលើអេលីប។',
      'Find the equation of the ellipse with centre \\((0,0)\\) whose major axis is horizontal, given that \\((3,1)\\) and \\((4,0)\\) lie on it.', []),
    wr(GE, 8, 'រកសមីការអេលីបដែលមានកំណុំ \\((0,0)\\) និង \\((4,0)\\) ហើយផលបូកចម្ងាយពីកំណុំទាំងពីររទៅចំណុចមួយនៅលើអេលីបស្មើនឹង \\(10\\) ឯកតា។',
      'Find the equation of the ellipse with foci \\((0,0)\\) and \\((4,0)\\) for which the distances from the two foci to a point of the ellipse add to \\(10\\) units.', []),
    wr(GE, 9, 'រកសមីការនៃបន្ទាត់កាត់តាមចំណុច \\((3,0)\\) ហើយប៉ះនឹងអេលីប \\(4x^2+y^2 = 4\\)។',
      'Find the equation of the line through \\((3,0)\\) tangent to the ellipse \\(4x^2+y^2 = 4\\).', []),
    wr(GE, 10, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) និងកំពូល \\((0,-6)\\), \\((0,6)\\) ហើយកាត់តាមចំណុច \\((3,2)\\)។',
      'Find the equation of the ellipse with centre \\((0,0)\\) and vertices \\((0,-6)\\), \\((0,6)\\) passing through \\((3,2)\\).', []),
    wr(GE, 11, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) អ័ក្សធំជាអ័ក្សដេក ហើយកាត់តាមចំណុច \\((2,3)\\) និង \\((6,1)\\)។',
      'Find the equation of the ellipse with centre \\((0,0)\\) and horizontal major axis passing through \\((2,3)\\) and \\((6,1)\\).', []),
    wr(GE, 12, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) អ័ក្សធំជាអ័ក្សដេក ហើយកាត់អ័ក្សអាប់ស៊ីសត្រង់ចំណុច \\((2,0)\\), \\((-2,0)\\) និងកាត់អ័ក្សអរដោនេត្រង់ចំណុច \\(\\left(0,\\dfrac{1}{3}\\right)\\), \\(\\left(0,-\\dfrac{1}{3}\\right)\\)។',
      'Find the equation of the ellipse with centre \\((0,0)\\) and horizontal major axis that meets the x-axis at \\((2,0)\\), \\((-2,0)\\) and the y-axis at \\(\\left(0,\\dfrac{1}{3}\\right)\\), \\(\\left(0,-\\dfrac{1}{3}\\right)\\).', []),
    wr(GE, 13, 'រកសមីការអេលីបដែលមានផ្ចិត \\((0,0)\\) អ័ក្សធំជាអ័ក្សដេកនិងមានប្រវែង \\(8\\) ឯកតា ហើយអ័ក្សតូចមានប្រវែង \\(5\\) ឯកតា។',
      'Find the equation of the ellipse with centre \\((0,0)\\), horizontal major axis of length \\(8\\) units and minor axis of length \\(5\\) units.', []),
    wr(GE, 14, 'នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j}\\right)\\) គេឲ្យខ្សែកោង \\(E: \\dfrac{(x-4)^2}{25}+\\dfrac{y^2}{9} = 1\\)។',
      'In an orthonormal system \\(\\left(O,\\vec{i},\\vec{j}\\right)\\), consider the curve \\(E: \\dfrac{(x-4)^2}{25}+\\dfrac{y^2}{9} = 1\\).', [
      p2('a', 'បញ្ជាក់ប្រភេទនៃខ្សែកោង \\(E\\) រួចបញ្ជាក់កូអរដោនេនៃផ្ចិត កំណុំ កំពូល និងចំណុចប្រសព្វរវាង \\(E\\) និងអ័ក្សតូច។',
              'State what kind of curve \\(E\\) is, then give its centre, foci, vertices and the points where \\(E\\) meets its minor axis.'),
      p2('b', 'សង់ \\(E\\)។', 'Sketch \\(E\\).')
    ]),
    wr(GE, 15, 'អេលីប \\(E: 4x^2+9y^2-8x+36y+4 = 0\\) ក្នុងតម្រុយអរតូណរម៉ាល់។',
      'The ellipse \\(E: 4x^2+9y^2-8x+36y+4 = 0\\) in an orthonormal system.', [
      p2('a', 'រកកូអរដោនេនៃផ្ចិត កំពូល និងកំណុំនៃអេលីប \\(E\\)។',
              'Find the centre, the vertices and the foci of \\(E\\).'),
      p2('b', 'រកកូអរដោនេនៃចំណុចប្រសព្វរវាង \\(E\\) និងអ័ក្សទាំងពីរនៃតម្រុយ ហើយសង់ \\(E\\) ដោយយក \\(\\dfrac{4\\sqrt{2}}{3} = 1.9\\)។',
              'Find where \\(E\\) meets the two axes, then sketch \\(E\\), taking \\(\\dfrac{4\\sqrt{2}}{3} = 1.9\\).')
    ]),
    wr(GE, 16, 'អេលីប \\(E\\) មួយមានសមីការ \\(25x^2+16y^2-150x+64y = 111\\)។',
      'An ellipse \\(E\\) has equation \\(25x^2+16y^2-150x+64y = 111\\).', [
      p2('a', 'រកកូអរដោនេនៃផ្ចិត កំពូល និងកំណុំរបស់អេលីប \\(E\\)។',
              'Find the centre, the vertices and the foci of \\(E\\).'),
      p2('b', 'សង់អេលីប \\(E\\) ក្នុងតម្រុយកូអរដោនេមួយ។', 'Sketch \\(E\\) in a coordinate system.')
    ]),
    wr(GE, 17, 'អេលីប \\(E\\) មួយមានផ្ចិត \\(A(1,-2)\\) កំណុំ \\(F_1\\left(1-\\sqrt{5},-2\\right)\\), \\(F_2\\left(1+\\sqrt{5},-2\\right)\\) និងអ័ក្សធំប្រវែង \\(6\\) ឯកតា។',
      'An ellipse \\(E\\) has centre \\(A(1,-2)\\), foci \\(F_1\\left(1-\\sqrt{5},-2\\right)\\) and \\(F_2\\left(1+\\sqrt{5},-2\\right)\\), and a major axis \\(6\\) units long.', [
      p2('a', 'រកសមីការស្តង់ដានៃអេលីប \\(E\\)។', 'Find the standard equation of \\(E\\).'),
      p2('b', 'រកកូអរដោនេកំពូល ហើយសង់អេលីប \\(E\\)។', 'Find the vertices, then sketch \\(E\\).')
    ]),
    wr(GE, 18, 'គេឲ្យអេលីប \\(E\\) មានសមីការទូទៅ \\(25x^2+9y^2-18y-216 = 0\\)។',
      'Consider the ellipse \\(E\\) with general equation \\(25x^2+9y^2-18y-216 = 0\\).', [
      p2('a', 'រកសមីការស្តង់ដានៃអេលីប \\(E\\)។', 'Find the standard equation of \\(E\\).'),
      p2('b', 'រកកូអរដោនេនៃផ្ចិត \\(I\\), កំពូល \\(V_1, V_2\\) និងកំណុំ \\(F_1, F_2\\) នៃអេលីប \\(E\\)។',
              'Find the centre \\(I\\), the vertices \\(V_1, V_2\\) and the foci \\(F_1, F_2\\) of \\(E\\).')
    ]),
    wr(GE, 19, 'គេឲ្យអេលីប \\(E\\) មានសមីការទូទៅ \\(9x^2+5y^2-45 = 0\\)។ រកប្រវែងអ័ក្សធំ និងអ័ក្សតូច។ រកកូអរដោនេកំពូល \\(V_1, V_2\\) និងកំណុំ \\(F_1, F_2\\) នៃអេលីប \\(E\\)។',
      'Consider the ellipse \\(E: 9x^2+5y^2-45 = 0\\). Find the lengths of the major and minor axes, then the vertices \\(V_1, V_2\\) and the foci \\(F_1, F_2\\) of \\(E\\).', []),
    wr(GE, 20, 'គេមានសមីការ \\(9y^2 = 25(3-x)(3+x)\\)។ បង្ហាញថាសមីការនេះជាអេលីប។ រកប្រវែងអ័ក្សធំ និងអ័ក្សតូច កូអរដោនេកំពូលទាំងពីរ និងកូអរដោនេកំណុំទាំងពីររបស់អេលីបនេះ។ សង់អេលីបនេះ។',
      'Consider the equation \\(9y^2 = 25(3-x)(3+x)\\). Show that it is an ellipse, then find the lengths of its major and minor axes, its two vertices and its two foci, and sketch it.', []),
    wr(GE, 21, 'គេមានសមីការ \\((2x+3y)^2 = 12(xy+3)\\)។ បង្ហាញថាសមីការនេះជាអេលីប។ រកប្រវែងអ័ក្សធំ និងអ័ក្សតូច កូអរដោនេកំពូលទាំងពីរ និងកូអរដោនេកំណុំទាំងពីររបស់អេលីបនេះ។ សង់អេលីបនេះ។',
      'Consider the equation \\((2x+3y)^2 = 12(xy+3)\\). Show that it is an ellipse, then find the lengths of its major and minor axes, its two vertices and its two foci, and sketch it.', []),

    /* ------------------------------------------- អ៊ីពែបូល (pp. 297–307) */
    wr(GH, 1, 'បំលែងសមីការអ៊ីពែបូលខាងក្រោមជាទម្រង់ស្តង់ដា៖',
      'Write each hyperbola below in standard form:', [
      m('a', 'y^2-2x^2+4x-3 = 0'), m('b', '-25x^2+100x+4y^2+24y-164 = 0'),
      m('c', 'x^2-4x-y^2+2y+11 = 0'), m('d', '-9x^2-36x+16y^2+32y-164 = 0'),
      m('e', '36x^2+144x-49y^2+98y-1669 = 0'), m('f', '16x^2-32x-9y^2+36y-164 = 0')
    ]),
    wr(GH, 2, 'រកផ្ចិត កំណុំ កំពូល អ៊ិចសង់ទ្រីស៊ីតេ និងអាស៊ីមតូតនៃអ៊ីពែបូល រួចសង់អ៊ីពែបូល៖',
      'Find the centre, the foci, the vertices, the eccentricity and the asymptotes of the hyperbola, then sketch it:', [
      m('a', '5x^2 = 4y^2+20'), m('b', '\\dfrac{(x-2)^2}{4}-\\dfrac{(y+1)^2}{1} = 1'),
      m('c', '\\dfrac{(y-2)^2}{4}-\\dfrac{(x+3)^2}{9} = 1'), m('d', '4(x-3)^2-9(y+1)^2 = 36'),
      m('e', '9y^2-x^2-6x-36y+18 = 0'), m('f', '4x^2-y^2+8x+2y-1 = 0')
    ]),
    wr(GH, 3, 'ចូរសង់អ៊ីពែបូល និងសមីការអាស៊ីមតូតខាងក្រោម៖',
      'Sketch each hyperbola below together with its asymptotes:', [
      m('a', '\\dfrac{x^2}{16}-\\dfrac{y^2}{4} = 1'), m('b', '\\dfrac{y^2}{25}-\\dfrac{x^2}{5} = 1'),
      m('c', '\\dfrac{(x-2)^2}{9}-\\dfrac{(y+3)^2}{4} = 1')
    ]),
    wr(GH, 4, 'បំលែងសមីការអ៊ីពែបូល \\(x^2-4y^2-2x-16y-19 = 0\\) ជាទម្រង់ស្តង់ដា។ រកកូអរដោនេនៃផ្ចិត កំពូល កំណុំ និងសមីការអាស៊ីមតូតនៃអ៊ីពែបូល។',
      'Write the hyperbola \\(x^2-4y^2-2x-16y-19 = 0\\) in standard form, then find its centre, vertices, foci and asymptotes.', []),
    wr(GH, 5, 'គេឲ្យសមីការអ៊ីពែបូល \\(H: x^2-4y^2-16y-2x-19 = 0\\)។',
      'Consider the hyperbola \\(H: x^2-4y^2-16y-2x-19 = 0\\).', [
      p2('a', 'បំលែងសមីការអ៊ីពែបូល \\(H\\) ជាទម្រង់ស្តង់ដា។', 'Write \\(H\\) in standard form.'),
      p2('b', 'រកកូអរដោនេនៃផ្ចិត កំពូល កំណុំ អ៊ិចសង់ទ្រីស៊ីតេ និងសមីការអាស៊ីមតូតនៃអ៊ីពែបូល រួចសង់ \\(H\\)។',
              'Find the centre, vertices, foci, eccentricity and asymptotes of the hyperbola, then sketch \\(H\\).')
    ]),
    wr(GH, 6, 'គេឲ្យសមីការអ៊ីពែបូល \\(H: 4y^2-5x^2+10x-16y+31 = 0\\)។',
      'Consider the hyperbola \\(H: 4y^2-5x^2+10x-16y+31 = 0\\).', [
      p2('a', 'បំលែងសមីការអ៊ីពែបូល \\(H\\) ជាទម្រង់ស្តង់ដា។', 'Write \\(H\\) in standard form.'),
      p2('b', 'រកកូអរដោនេនៃផ្ចិត កំពូល កំណុំ អ៊ិចសង់ទ្រីស៊ីតេ និងសមីការអាស៊ីមតូតនៃអ៊ីពែបូល រួចសង់ \\(H\\)។',
              'Find the centre, vertices, foci, eccentricity and asymptotes of the hyperbola, then sketch \\(H\\).')
    ]),
    wr(GH, 7, 'គេឲ្យសមីការអ៊ីពែបូល \\(H: 3x^2-y^2-12x+6y = 0\\)។',
      'Consider the hyperbola \\(H: 3x^2-y^2-12x+6y = 0\\).', [
      p2('a', 'បំលែងសមីការអ៊ីពែបូល \\(H\\) ជាទម្រង់ស្តង់ដា។', 'Write \\(H\\) in standard form.'),
      p2('b', 'រកកូអរដោនេនៃផ្ចិត កំពូល កំណុំ អ៊ិចសង់ទ្រីស៊ីតេ និងសមីការអាស៊ីមតូតនៃអ៊ីពែបូល រួចសង់ \\(H\\)។',
              'Find the centre, vertices, foci, eccentricity and asymptotes of the hyperbola, then sketch \\(H\\).')
    ]),
    wr(GH, 8, 'រកសមីការស្តង់ដានៃអ៊ីពែបូលដែលកំពូលទាំងពីរមានកូអរដោនេ \\((2,\\pm 3)\\) ហើយចំណុច \\((0,5)\\) នៅលើក្រាប។',
      'Find the standard equation of the hyperbola whose vertices are \\((2,\\pm 3)\\) and whose curve passes through \\((0,5)\\).', []),
    wr(GH, 9, 'រកសមីការស្តង់ដានៃអ៊ីពែបូលដែលកំពូលទាំងពីរមានកូអរដោនេ \\((\\pm 1,0)\\) និងអាស៊ីមតូតទាំងពីរមានសមីការ \\(y = \\pm 3x\\)។',
      'Find the standard equation of the hyperbola with vertices \\((\\pm 1,0)\\) and asymptotes \\(y = \\pm 3x\\).', []),
    wr(GH, 10, 'រកសមីការស្តង់ដានៃអ៊ីពែបូលដែលចំពោះគ្រប់ចំណុច \\(M(x,y)\\) នៅលើអ៊ីពែបូល ផលដកចម្ងាយពី \\(M\\) ទៅចំណុចនីមួយៗនៃ \\((2,2)\\) និង \\((10,2)\\) ស្មើនឹង \\(6\\)។',
      'Find the standard equation of the hyperbola for which, at every point \\(M(x,y)\\) on it, the distances from \\(M\\) to \\((2,2)\\) and to \\((10,2)\\) differ by \\(6\\).', []),
    wr(GH, 11, 'រកសមីការស្តង់ដានៃអ៊ីពែបូលដែលចំពោះគ្រប់ចំណុច \\(M(x,y)\\) នៅលើអ៊ីពែបូល ផលដកចម្ងាយពី \\(M\\) ទៅចំណុចនីមួយៗនៃ \\((-3,0)\\) និង \\((-3,3)\\) ស្មើនឹង \\(2\\)។',
      'Find the standard equation of the hyperbola for which, at every point \\(M(x,y)\\) on it, the distances from \\(M\\) to \\((-3,0)\\) and to \\((-3,3)\\) differ by \\(2\\).', []),
    wr(GH, 12, 'រកសមីការបន្ទាត់ដែលកាត់តាមចំណុច \\((1,0)\\) ហើយប៉ះទៅនឹងអ៊ីពែបូល \\(9x^2-4y^2 = 36\\)។',
      'Find the equation of the line through \\((1,0)\\) tangent to the hyperbola \\(9x^2-4y^2 = 36\\).', []),
    wr(GH, 13, 'រកតម្លៃ \\(a\\) ជាអនុគមន៍នៃ \\(b\\) ដើម្បីឲ្យអ៊ីពែបូល \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2} = 1\\) ប៉ះទៅនឹងបន្ទាត់ដែលមានសមីការ \\(2x-y-4 = 0\\)។ គណនាតម្លៃ \\(a\\) បើ \\(b = 2\\)។',
      'Find \\(a\\) as a function of \\(b\\) so that the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2} = 1\\) is tangent to the line \\(2x-y-4 = 0\\), then compute \\(a\\) when \\(b = 2\\).', []),
    wr(GH, 14, 'បង្ហាញថាបន្ទាត់ប៉ះទៅនឹងអ៊ីពែបូល \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2} = 1\\) ត្រង់ចំណុច \\((x_0,y_0)\\) មានសមីការ \\(\\dfrac{x_0x}{a^2}-\\dfrac{y_0y}{b^2} = 1\\)។',
      'Show that the tangent to the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2} = 1\\) at the point \\((x_0,y_0)\\) has equation \\(\\dfrac{x_0x}{a^2}-\\dfrac{y_0y}{b^2} = 1\\).', []),
    wr(GH, 15, 'កំណុំទាំងពីរនៃអ៊ីពែបូលគឺ \\(F_1(0,3)\\) និង \\(F_2(0,-3)\\) ហើយ \\(P\\) ជាចំណុចមួយនៅលើអ៊ីពែបូលដែលមានផលដកចម្ងាយរបស់វាពីចំណុច \\(F_1\\) និង \\(F_2\\) ស្មើនឹង \\(2\\) ឯកតា។ ប្រើនិយមន័យនៃអ៊ីពែបូល ទាញរកសមីការស្តង់ដានៃអ៊ីពែបូលនោះ។',
      'A hyperbola has foci \\(F_1(0,3)\\) and \\(F_2(0,-3)\\), and \\(P\\) is a point on it whose distances to \\(F_1\\) and \\(F_2\\) differ by \\(2\\) units. Use the definition of a hyperbola to derive its standard equation.', [])
  ];

  /* Each family restarts its numbering, so the number alone cannot identify
     an exercise. `uid` keeps the done-marks unique; `n` stays the printed
     number the student sees on the card.                                  */
  var TAG = {};
  TAG[GP.en] = 'p'; TAG[GE.en] = 'e'; TAG[GH.en] = 'h';
  for (var i = 0; i < WR.length; i++) { WR[i].uid = TAG[WR[i].grp.en] + WR[i].n; }

  global.MATH_BANK = { key: 'conic', lesson: LESSON, mc: MC, exercises: WR };
})(window);
