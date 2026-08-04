/* Alpha Academy Cambodia — Grade 12 vectors in space
   ---------------------------------------------------------------------------
   Transcribed from មេរៀនទី១០ វិចទ័រក្នុងលំហ — VECTOR SPACE (pp. 308–380) of the
   Preah Sisowath NGS summary workbook: the summary lesson (pp. 308–311, its
   sixteen numbered formula groups and two notes), the multiple-choice set
   ផ្នែកលំហាត់ពហុជ្រើសរើស (pp. 312–317) and the written exercises
   ផ្នែកលំហាត់ហ្វឹកហាត់ (pp. 318 onward).

   Shape is the shared window.MATH_BANK contract read by math-lesson.js:
     lesson    [{ id, h:{km,en}, blocks:[…] }]
     mc        [{ n, kind:'mc', q:{km,en}, o:['tex', …] }]
     exercises [{ n, q:{km,en}, p:[{ k, t:{km,en} }] }]

   The workbook carries no answer key, so nothing here claims a right answer —
   a chosen option is only remembered, never marked right or wrong.
*/
(function (global) {
  'use strict';

  /* ==================================================================== 1
     LESSON — the sixteen formula groups                                  */
  var LESSON = [
    { id: 'points',
      h: { km: 'វិចទ័រ ចម្ងាយ និងចំណុចកណ្តាល', en: 'Vectors, distance and midpoint' },
      blocks: [
        { t: 'p',
          km: 'ចំណុចនីមួយៗក្នុងលំហមានកូអរដោនេបី។ រូបមន្តទាំងបីខាងក្រោមជាមូលដ្ឋានសម្រាប់មេរៀនទាំងមូល។',
          en: 'Every point in space has three coordinates. The three formulas below underpin the whole chapter.' },
        { t: 'p', km: '១. កូអរដោនេនៃវិចទ័រ \\(\\overrightarrow{AB}\\)', en: '1. The coordinates of the vector \\(\\overrightarrow{AB}\\)' },
        { t: 'm', tex: '\\overrightarrow{AB} = \\left(x_B-x_A,\\; y_B-y_A,\\; z_B-z_A\\right)' },
        { t: 'p', km: '២. ចម្ងាយរវាងចំណុច \\(A\\) និង \\(B\\)', en: '2. The distance between \\(A\\) and \\(B\\)' },
        { t: 'm', tex: 'AB = \\left|\\overrightarrow{AB}\\right| = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}' },
        { t: 'p', km: '៣. កូអរដោនេនៃចំណុចកណ្តាលនៃចំណុច \\(A\\) និង \\(B\\)', en: '3. The midpoint of \\(A\\) and \\(B\\)' },
        { t: 'm', tex: 'I_{AB}\\left(\\frac{x_A+x_B}{2},\\; \\frac{y_A+y_B}{2},\\; \\frac{z_A+z_B}{2}\\right)' }
      ] },

    { id: 'dot',
      h: { km: 'ផលគុណស្កាលែ ភាពស្រប និងភាពកែង', en: 'Dot product, parallel and perpendicular' },
      blocks: [
        { t: 'p', km: '៤. ផលគុណស្កាលែនៃពីរវិចទ័រ', en: '4. The dot product of two vectors' },
        { t: 'm', tex: '\\vec{u}\\cdot\\vec{v} = xx\'+yy\'+zz\' \\qquad\\text{or}\\qquad \\vec{u}\\cdot\\vec{v} = |\\vec{u}|\\,|\\vec{v}|\\cos\\theta' },
        { t: 'm', tex: '\\cos\\theta = \\frac{xx\'+yy\'+zz\'}{\\sqrt{x^2+y^2+z^2}\\cdot\\sqrt{x\'^2+y\'^2+z\'^2}}' },
        { t: 'p', km: '៥. វិចទ័រពីរស្របគ្នា (កូលីនេអ៊ែគ្នា) ដែល \\(\\vec{u} = (x,y,z)\\) និង \\(\\vec{v} = (x\',y\',z\')\\)',
          en: '5. Two vectors are parallel (collinear), where \\(\\vec{u} = (x,y,z)\\) and \\(\\vec{v} = (x\',y\',z\')\\)' },
        { t: 'm', tex: '\\vec{u}\\;\\|\\;\\vec{v} \\iff \\frac{x}{x\'} = \\frac{y}{y\'} = \\frac{z}{z\'}' },
        { t: 'p', km: '៦. វិចទ័រពីរកែងគ្នា (អរតូកូណាល់)', en: '6. Two vectors are perpendicular (orthogonal)' },
        { t: 'm', tex: '\\vec{u}\\perp\\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0 \\iff xx\'+yy\'+zz\' = 0' }
      ] },

    { id: 'cross',
      h: { km: 'ផលគុណវិចទ័រ', en: 'The cross product' },
      blocks: [
        { t: 'p',
          km: '៧. បើ \\(\\vec{u} = u_1\\vec{i}+u_2\\vec{j}+u_3\\vec{k}\\) និង \\(\\vec{v} = v_1\\vec{i}+v_2\\vec{j}+v_3\\vec{k}\\) ជាវិចទ័រក្នុងលំហ',
          en: '7. If \\(\\vec{u} = u_1\\vec{i}+u_2\\vec{j}+u_3\\vec{k}\\) and \\(\\vec{v} = v_1\\vec{i}+v_2\\vec{j}+v_3\\vec{k}\\) are vectors in space' },
        { t: 'm', tex: '\\vec{u}\\times\\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}' },
        { t: 'm', tex: '= \\begin{vmatrix} u_2 & u_3 \\\\ v_2 & v_3 \\end{vmatrix}\\vec{i} - \\begin{vmatrix} u_1 & u_3 \\\\ v_1 & v_3 \\end{vmatrix}\\vec{j} + \\begin{vmatrix} u_1 & u_2 \\\\ v_1 & v_2 \\end{vmatrix}\\vec{k}' },
        { t: 'm', tex: '= (u_2v_3-u_3v_2)\\vec{i} - (u_1v_3-u_3v_1)\\vec{j} + (u_1v_2-u_2v_1)\\vec{k}' }
      ] },

    { id: 'line-plane',
      h: { km: 'សមីការបន្ទាត់ និងសមីការប្លង់', en: 'Equations of a line and of a plane' },
      blocks: [
        { t: 'p',
          km: '៨. សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់កាត់តាមចំណុច \\(P_0(x_0,y_0,z_0)\\) ដែលមានវិចទ័រប្រាប់ទិស \\(\\vec{u} = (a,b,c)\\)',
          en: '8. Parametric equations of the line through \\(P_0(x_0,y_0,z_0)\\) with direction vector \\(\\vec{u} = (a,b,c)\\)' },
        { t: 'm', tex: '\\begin{cases} x = x_0+at \\\\ y = y_0+bt \\\\ z = z_0+ct \\end{cases}\\quad (t \\in \\mathbb{R})' },
        { t: 'p', km: 'បើ \\(a\\), \\(b\\), \\(c\\) ខុសពីសូន្យ នោះសមីការឆ្លុះនៃបន្ទាត់ \\(L\\) គឺ',
          en: 'If \\(a\\), \\(b\\), \\(c\\) are all non-zero, the symmetric equations of the line \\(L\\) are' },
        { t: 'm', tex: '\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}' },
        { t: 'p',
          km: '៩. សមីការប្លង់កាត់តាមចំណុច \\(P_0(x_0,y_0,z_0)\\) និងមានវិចទ័រណរម៉ាល់ \\(\\vec{n} = (a,b,c)\\)',
          en: '9. The plane through \\(P_0(x_0,y_0,z_0)\\) with normal vector \\(\\vec{n} = (a,b,c)\\)' },
        { t: 'm', tex: 'a(x-x_0)+b(y-y_0)+c(z-z_0) = 0 \\qquad\\Longrightarrow\\qquad ax+by+cz+d = 0' },
        { t: 'p', km: '១០. មុំផ្គូររវាងប្លង់ពីរ \\((\\alpha_1): a_1x+b_1y+c_1z+d_1 = 0\\) និង \\((\\alpha_2): a_2x+b_2y+c_2z+d_2 = 0\\)',
          en: '10. The angle between the planes \\((\\alpha_1): a_1x+b_1y+c_1z+d_1 = 0\\) and \\((\\alpha_2): a_2x+b_2y+c_2z+d_2 = 0\\)' },
        { t: 'm', tex: '\\cos\\theta = \\frac{\\left|\\vec{n_1}\\cdot\\vec{n_2}\\right|}{\\left|\\vec{n_1}\\right|\\cdot\\left|\\vec{n_2}\\right|}' }
      ] },

    { id: 'area-volume',
      h: { km: 'ផ្ទៃក្រឡា និងមាឌ', en: 'Areas and volumes' },
      blocks: [
        { t: 'p', km: '១១. ផ្ទៃក្រឡាត្រីកោណ និងប្រលេឡូក្រាម', en: '11. Area of a triangle and of a parallelogram' },
        { t: 'm', tex: 'S_{\\triangle ABC} = \\tfrac{1}{2}\\left|\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right| \\qquad S_{\\square ABCD} = \\left|\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right|' },
        { t: 'p', km: '១២. មាឌតេត្រាអែត និងមាឌប្រលេពីប៉ែត', en: '12. Volume of a tetrahedron and of a parallelepiped' },
        { t: 'm', tex: 'V_{ABCD} = \\tfrac{1}{6}\\left|\\left(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right)\\cdot\\overrightarrow{AD}\\right| \\quad\\text{or}\\quad V_{ABCD} = \\tfrac{1}{3}S_b h' },
        { t: 'm', tex: 'V_{\\text{parallelepiped}} = \\left|\\left(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right)\\cdot\\overrightarrow{AD}\\right|' },
        { t: 'p',
          km: '១៥. របៀបបង្ហាញថាចតុកោណមួយជាប្រលេឡូក្រាម៖ គេត្រូវតែរកឲ្យបានវិចទ័រដុះឈមពីរស្មើគ្នា គឺ',
          en: '15. To show that a quadrilateral is a parallelogram, find two equal vectors on opposite sides:' },
        { t: 'm', tex: '\\overrightarrow{AB} = \\overrightarrow{DC} \\qquad\\text{or}\\qquad \\overrightarrow{AD} = \\overrightarrow{BC}' }
      ] },

    { id: 'distance',
      h: { km: 'ចម្ងាយ', en: 'Distances' },
      blocks: [
        { t: 'p', km: '១៣. ចម្ងាយពីចំណុចទៅប្លង់', en: '13. From a point to a plane' },
        { t: 'm', tex: 'd\\left(M,(P)\\right) = \\frac{\\left|ax_0+by_0+cz_0+d\\right|}{\\sqrt{a^2+b^2+c^2}}' },
        { t: 'p', km: '១៤. ចម្ងាយពីចំណុចមួយទៅបន្ទាត់', en: '14. From a point to a line' },
        { t: 'm', tex: 'D = \\frac{\\left|\\overrightarrow{PQ}\\times\\vec{u}\\right|}{\\left|\\vec{u}\\right|}' },
        { t: 'p', km: 'ចម្ងាយរវាងបន្ទាត់ពីរ ដែល \\(M_1, M_2\\) ជាចំណុចស្ថិតនៅលើបន្ទាត់ \\(L_1\\) និង \\(L_2\\) រៀងគ្នា',
          en: 'Between two lines, where \\(M_1\\) and \\(M_2\\) lie on \\(L_1\\) and \\(L_2\\) respectively' },
        { t: 'm', tex: 'd(L_1,L_2) = \\frac{\\left|\\overrightarrow{M_1M_2}\\cdot\\left(\\vec{u_1}\\times\\vec{u_2}\\right)\\right|}{\\left|\\vec{u_1}\\times\\vec{u_2}\\right|}' }
      ] },

    { id: 'sphere',
      h: { km: 'ស្វ៊ែរ', en: 'The sphere' },
      blocks: [
        { t: 'p', km: '១៦. សមីការស្វ៊ែរមានផ្ចិត \\(I(a,b,c)\\) និងកាំ \\(r\\)', en: '16. The sphere with centre \\(I(a,b,c)\\) and radius \\(r\\)' },
        { t: 'm', tex: 'S: (x-a)^2+(y-b)^2+(z-c)^2 = r^2' },
        { t: 'note',
          km: 'សំគាល់ទី១ — ស្វ៊ែរ \\(S\\) និងបន្ទាត់ \\(L\\)៖ ចម្ងាយពីផ្ចិត \\(I\\) មកបន្ទាត់ \\(L\\) គឺ \\(D = d(I,L) = \\dfrac{\\left|\\overrightarrow{PI}\\times\\vec{u}\\right|}{\\left|\\vec{u}\\right|}\\) ដែល \\(P\\) ជាចំណុចមួយនៅលើបន្ទាត់ \\(L\\) ហើយ \\(\\vec{u}\\) ជាវិចទ័រប្រាប់ទិសនៃបន្ទាត់ \\(L\\)។',
          en: 'Note 1 — a sphere \\(S\\) and a line \\(L\\): the distance from the centre \\(I\\) to the line is \\(D = d(I,L) = \\dfrac{\\left|\\overrightarrow{PI}\\times\\vec{u}\\right|}{\\left|\\vec{u}\\right|}\\), where \\(P\\) is any point of \\(L\\) and \\(\\vec{u}\\) is its direction vector.' },
        { t: 'ul', items: [
          { km: 'បើ \\(D > r\\) នោះបន្ទាត់ \\(L\\) មិនកាត់ស្វ៊ែរ \\(S\\) ទេ។', en: 'If \\(D > r\\), the line misses the sphere.' },
          { km: 'បើ \\(D = r\\) នោះបន្ទាត់ \\(L\\) ប៉ះស្វ៊ែរ \\(S\\) ត្រង់ចំណុចមួយ។', en: 'If \\(D = r\\), the line touches the sphere at one point.' },
          { km: 'បើ \\(D < r\\) នោះបន្ទាត់ \\(L\\) កាត់ស្វ៊ែរ \\(S\\) បានពីរចំណុច។', en: 'If \\(D < r\\), the line cuts the sphere at two points.' }
        ] },
        { t: 'note',
          km: 'សំគាល់ទី២ — ស្វ៊ែរ \\(S\\) និងប្លង់ \\(\\alpha: ax+by+cz+d = 0\\)៖ ចម្ងាយពីផ្ចិត \\(I(x_0,y_0,z_0)\\) មកប្លង់ \\(\\alpha\\) គឺ \\(D = d(I,\\alpha) = \\dfrac{\\left|ax_0+by_0+cz_0+d\\right|}{\\sqrt{a^2+b^2+c^2}}\\)។',
          en: 'Note 2 — a sphere \\(S\\) and a plane \\(\\alpha: ax+by+cz+d = 0\\): the distance from the centre \\(I(x_0,y_0,z_0)\\) to the plane is \\(D = d(I,\\alpha) = \\dfrac{\\left|ax_0+by_0+cz_0+d\\right|}{\\sqrt{a^2+b^2+c^2}}\\).' },
        { t: 'ul', items: [
          { km: 'បើ \\(D > r\\) នោះប្លង់ \\(\\alpha\\) មិនកាត់ស្វ៊ែរ \\(S\\) ទេ។', en: 'If \\(D > r\\), the plane misses the sphere.' },
          { km: 'បើ \\(D = r\\) នោះប្លង់ \\(\\alpha\\) ប៉ះស្វ៊ែរ \\(S\\) ត្រង់ចំណុចមួយ។', en: 'If \\(D = r\\), the plane touches the sphere at one point.' },
          { km: 'បើ \\(D < r\\) នោះប្លង់ \\(\\alpha\\) កាត់ស្វ៊ែរ \\(S\\) បានរង្វង់មួយ។', en: 'If \\(D < r\\), the plane cuts the sphere in a circle.' }
        ] }
      ] }
  ];

  /* ==================================================================== 2
     MULTIPLE CHOICE (pp. 312–317)                                        */
  function mc(n, km, en, opts) {
    return { n: n, kind: 'mc', q: { km: km, en: en }, o: opts };
  }

  var MC = [
    mc(1, 'គេមានពីរចំណុច \\(A(x_A,y_A,z_A)\\) និង \\(B(x_B,y_B,z_B)\\)។ គេបានវិចទ័រ \\(\\overrightarrow{AB}\\) កំណត់ដោយ',
      'Given \\(A(x_A,y_A,z_A)\\) and \\(B(x_B,y_B,z_B)\\), the vector \\(\\overrightarrow{AB}\\) is', [
      '\\overrightarrow{AB} = (x-x_A,\\,y-y_A,\\,z-z_A)',
      '\\overrightarrow{AB} = (x-x_B,\\,y-y_B,\\,z-z_B)',
      '\\overrightarrow{AB} = (x_B-x_A,\\,y_B-y_A,\\,z_B-z_A)',
      '\\overrightarrow{AB} = (x_A-x_B,\\,y_A-y_B,\\,z_A-z_B)' ]),
    mc(2, 'គេមានពីរចំណុច \\(A(1,2,3)\\) និង \\(B(3,-4,-5)\\)។ គេបានវិចទ័រ \\(\\overrightarrow{AB}\\) កំណត់ដោយ',
      'Given \\(A(1,2,3)\\) and \\(B(3,-4,-5)\\), the vector \\(\\overrightarrow{AB}\\) is',
      ['(-2,6,8)', '(2,-6,-8)', '(-2,6,8)', '(-2,-6,-8)']),
    mc(3, 'គណនាផលបូក \\(\\left(3\\vec{i}-\\vec{j}+2\\vec{k}\\right)+\\left(-\\vec{i}-4\\vec{j}-\\vec{k}\\right) = \\ldots\\)',
      'Compute \\(\\left(3\\vec{i}-\\vec{j}+2\\vec{k}\\right)+\\left(-\\vec{i}-4\\vec{j}-\\vec{k}\\right) = \\ldots\\)',
      ['\\vec{i}+\\vec{j}+\\vec{k}', '2\\vec{i}-5\\vec{j}+\\vec{k}', '2\\vec{i}+2\\vec{j}+\\vec{k}', '2\\vec{i}+\\vec{j}-5\\vec{k}']),
    mc(4, 'គណនាផលដក \\(\\left(\\vec{i}-\\vec{j}-\\vec{k}\\right)-\\left(7\\vec{i}-4\\vec{j}-\\vec{k}\\right) = \\ldots\\)',
      'Compute \\(\\left(\\vec{i}-\\vec{j}-\\vec{k}\\right)-\\left(7\\vec{i}-4\\vec{j}-\\vec{k}\\right) = \\ldots\\)',
      ['\\vec{i}+\\vec{j}', '2\\vec{i}+\\vec{k}', '2\\vec{i}+2\\vec{j}+\\vec{k}', '-6\\vec{i}+3\\vec{j}']),
    mc(5, 'រូបមន្តចម្ងាយពីចំណុច \\(A(x_1,y_1,z_1)\\) ទៅ \\(B(x_2,y_2,z_2)\\) កំណត់ដោយ',
      'The distance from \\(A(x_1,y_1,z_1)\\) to \\(B(x_2,y_2,z_2)\\) is given by', [
      'AB = \\sqrt{(x_1-y_2)^2+(y_1-z_2)^2+(z_1-x_2)^2}',
      'AB = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_2)^2}',
      'AB = \\sqrt{(z_2-y_1)^2+(x_2-z_1)^2+(y_1-x_2)^2}',
      'AB = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}' ]),
    mc(6, 'ពីចំណុច \\(A(3,-1,6)\\) ទៅ \\(B(-2,3,5)\\) មានចម្ងាយស្មើ',
      'The distance from \\(A(3,-1,6)\\) to \\(B(-2,3,5)\\) is',
      ['\\sqrt{2}\\text{ ឯកតា}', '3\\sqrt{2}\\text{ ឯកតា}', '3\\sqrt{7}\\text{ ឯកតា}', '\\sqrt{42}\\text{ ឯកតា}']),
    mc(7, 'គេមាន \\(ABC\\) ជាត្រីកោណមួយដែលមានកំពូល \\(A(x_A,y_A,z_A)\\), \\(B(x_B,y_B,z_B)\\) និង \\(C(x_C,y_C,z_C)\\)។ បើ \\(CM\\) ជាមេដ្យានៃត្រីកោណ \\(ABC\\) នោះកូអរដោនេនៃចំណុច \\(M\\) កំណត់ដោយ',
      'In the triangle \\(ABC\\) with vertices \\(A(x_A,y_A,z_A)\\), \\(B(x_B,y_B,z_B)\\) and \\(C(x_C,y_C,z_C)\\), if \\(CM\\) is a median then \\(M\\) is', [
      '\\left(\\tfrac{x_A-x_B}{2},\\tfrac{y_A-y_B}{2},\\tfrac{z_A-z_B}{2}\\right)',
      '\\left(\\tfrac{x_A+x_2}{2},\\tfrac{y_A+y_2}{2},\\tfrac{z_A+z_2}{2}\\right)',
      '\\left(\\tfrac{x_A+x_B}{2},\\tfrac{y_A+y_B}{2},\\tfrac{z_A+z_B}{2}\\right)',
      '\\left(\\tfrac{x_1+x_2}{2},\\tfrac{y_1+y_2}{2},\\tfrac{z_1+z_2}{2}\\right)' ]),
    mc(8, 'កូអរដោនេចំណុចកណ្តាលនៃចំណុច \\(A(4,3,1)\\) និង \\(B(-2,5,7)\\) គឺ',
      'The midpoint of \\(A(4,3,1)\\) and \\(B(-2,5,7)\\) is',
      ['\\left(\\tfrac{1}{2},\\tfrac{3}{2},4\\right)', '(1,-3,4)', '(1,4,-4)', '(1,4,4)']),
    mc(9, 'ផលគុណស្កាលែនៃវិចទ័រ \\(\\vec{u} = (x_1,y_1,z_1)\\) និង \\(\\vec{v} = (x_2,y_2,z_2)\\) គឺ',
      'The dot product of \\(\\vec{u} = (x_1,y_1,z_1)\\) and \\(\\vec{v} = (x_2,y_2,z_2)\\) is', [
      '\\vec{u}\\cdot\\vec{v} = x_1x_2-y_1y_2+z_1z_2',
      '\\vec{u}\\cdot\\vec{v} = x_1x_2+y_1y_2-z_1z_2',
      '\\vec{u}\\cdot\\vec{v} = x_Ax_B+y_Ay_B+z_Az_B',
      '\\vec{u}\\cdot\\vec{v} = x_1x_2+y_1y_2+z_1z_2' ]),
    mc(10, 'ផលគុណស្កាលែនៃវិចទ័រ \\(\\vec{u} = (-1,0,1)\\) និង \\(\\vec{v} = (-2,2,-2)\\) កំណត់ដោយ',
      'The dot product of \\(\\vec{u} = (-1,0,1)\\) and \\(\\vec{v} = (-2,2,-2)\\) is',
      ['\\vec{u}\\cdot\\vec{v} = 2', '\\vec{u}\\cdot\\vec{v} = \\sqrt{2}', '\\vec{u}\\cdot\\vec{v} = 0', '\\vec{u}\\cdot\\vec{v} = -2']),
    mc(11, 'វិចទ័រ \\(\\vec{u}\\) និង \\(\\vec{v}\\) អរតូកូណាល់គ្នា កាលណា',
      'The vectors \\(\\vec{u}\\) and \\(\\vec{v}\\) are orthogonal when',
      ['\\vec{u}\\cdot\\vec{v} = 1', '\\vec{u}\\cdot\\vec{v} = -1', '\\vec{u}\\cdot\\vec{v} = 90', '\\vec{u}\\cdot\\vec{v} = 0']),
    mc(12, 'គេមានវិចទ័រ \\(\\vec{u} = (x,y,z)\\) នោះ',
      'Given the vector \\(\\vec{u} = (x,y,z)\\), then',
      ['\\vec{u}^{\\,2} = x+y+z', '\\vec{u}^{\\,2} = x^2+y^2+z^2', '\\vec{u}^{\\,2} = 2x+2y+2z', '\\vec{u}^{\\,2} = x_2+y_2+z_2']),
    mc(13, 'គេមានវិចទ័រ \\(\\vec{P} = a\\vec{i}+a\\vec{j}+3\\vec{k}\\) និង \\(\\vec{Q} = a\\vec{i}-2\\vec{j}-\\vec{k}\\)។ កំណត់តម្លៃ \\(a\\;(a>0)\\) ដើម្បីឲ្យ \\(\\vec{P}\\) និង \\(\\vec{Q}\\) ជាកែងគ្នា។',
      'Given \\(\\vec{P} = a\\vec{i}+a\\vec{j}+3\\vec{k}\\) and \\(\\vec{Q} = a\\vec{i}-2\\vec{j}-\\vec{k}\\), find \\(a\\;(a>0)\\) so that \\(\\vec{P}\\) and \\(\\vec{Q}\\) are perpendicular.',
      ['3', '2', '1', '0']),
    mc(14, 'គេមានវិចទ័រ \\(\\vec{A}\\cdot\\vec{B} = 1\\) ដែលផ្ទៀងផ្ទាត់ \\(\\left|\\vec{A}\\right| = \\left|\\vec{B}\\right| = \\sqrt{2}\\)។ មុំផ្គូររវាងវិចទ័រ \\(\\vec{A}\\) និង \\(\\vec{B}\\) គឺ',
      'Given \\(\\vec{A}\\cdot\\vec{B} = 1\\) with \\(\\left|\\vec{A}\\right| = \\left|\\vec{B}\\right| = \\sqrt{2}\\), the angle between \\(\\vec{A}\\) and \\(\\vec{B}\\) is',
      ['90^\\circ', '60^\\circ', '75^\\circ', '45^\\circ']),
    mc(15, 'គេមាន \\(\\vec{a} = 2\\vec{i}-3\\vec{j}+4\\vec{k}\\) និង \\(\\vec{b} = \\vec{i}+2\\vec{j}+\\vec{k}\\)។ គណនា \\(\\vec{a}+\\vec{b}\\)',
      'Given \\(\\vec{a} = 2\\vec{i}-3\\vec{j}+4\\vec{k}\\) and \\(\\vec{b} = \\vec{i}+2\\vec{j}+\\vec{k}\\), compute \\(\\vec{a}+\\vec{b}\\)',
      ['\\vec{i}+\\vec{j}+3\\vec{k}', '3\\vec{i}-\\vec{j}+5\\vec{k}', '\\vec{i}-\\vec{j}-3\\vec{k}', '2\\vec{i}+\\vec{j}+\\vec{k}']),
    mc(16, 'បើ \\(\\left|\\vec{a}\\right| = 3\\) និង \\(-1 \\leq k \\leq 2\\) នោះ \\(\\left|k\\vec{a}\\right|\\) នៅចន្លោះ',
      'If \\(\\left|\\vec{a}\\right| = 3\\) and \\(-1 \\leq k \\leq 2\\), then \\(\\left|k\\vec{a}\\right|\\) lies in',
      ['[0,6]', '[-3,6]', '[3,6]', '[1,2]']),
    mc(17, 'គេមានវិចទ័រពីរគឺ \\(\\vec{a}\\) និង \\(\\vec{b}\\) កំណត់ដោយ \\(\\left|\\vec{a}\\right| = \\left|\\vec{b}\\right| = \\sqrt{2}\\) និង \\(\\vec{a}\\cdot\\vec{b} = -1\\)។ មុំផ្គូររវាងវិចទ័រ \\(\\vec{a}\\) និង \\(\\vec{b}\\) គឺ',
      'Two vectors satisfy \\(\\left|\\vec{a}\\right| = \\left|\\vec{b}\\right| = \\sqrt{2}\\) and \\(\\vec{a}\\cdot\\vec{b} = -1\\). The angle between them is',
      ['\\frac{\\pi}{3}', '\\frac{\\pi}{4}', '\\frac{2\\pi}{3}', '\\frac{\\pi}{6}']),
    mc(18, 'គេដឹងថាបន្ទាត់ \\((L_1): \\dfrac{x-1}{2} = \\dfrac{y-2}{-1} = \\dfrac{z-3}{3}\\) ស្របនឹងបន្ទាត់ \\((L_2)\\)។ កំណត់វិចទ័រប្រាប់ទិសនៃបន្ទាត់ \\((L_2)\\)។',
      'The line \\((L_1): \\dfrac{x-1}{2} = \\dfrac{y-2}{-1} = \\dfrac{z-3}{3}\\) is parallel to \\((L_2)\\). A direction vector of \\((L_2)\\) is',
      ['\\vec{u} = (1,2,3)', '\\vec{u} = (2,-1,3)', '\\vec{u} = (3,-1,2)', '\\vec{u} = (0,0,1)']),
    mc(19, 'ប្លង់ \\((P): x-2y+z = 0\\) កាត់បន្ទាត់ \\(x = 1-t,\\; y = 2+t,\\; z = 3+2t\\;(t \\in \\mathbb{R})\\) ត្រង់ចំណុច \\(A\\)។ កំណត់កូអរដោនេនៃចំណុច \\(A\\)។',
      'The plane \\((P): x-2y+z = 0\\) meets the line \\(x = 1-t,\\; y = 2+t,\\; z = 3+2t\\;(t \\in \\mathbb{R})\\) at \\(A\\). Find \\(A\\).',
      ['A(1,2,3)', 'A(2,-1,3)', 'A(-1,1,2)', 'A(0,0,1)']),
    mc(20, 'កំណត់សមីការប្លង់ដែលកាត់តាម \\(A(1,-2,3)\\) និងមានវិចទ័រណរម៉ាល់ \\(\\vec{n} = (-1,-2,-3)\\)',
      'Find the equation of the plane through \\(A(1,-2,3)\\) with normal \\(\\vec{n} = (-1,-2,-3)\\)',
      ['x+2y+3z+6 = 0', 'x+2y+3z-6 = 0', '-x-2y-3z-6 = 0', '-x-2y-3z+12 = 0']),
    mc(21, 'កំណត់ផ្ចិតនៃសមីការស្វ៊ែរ \\(x^2+y^2+z^2-2x+3y-4z+5 = 0\\)',
      'Find the centre of the sphere \\(x^2+y^2+z^2-2x+3y-4z+5 = 0\\)',
      ['C(1,2,3)', 'C\\left(1,-\\tfrac{3}{2},2\\right)', 'C\\left(-1,\\tfrac{3}{2},-2\\right)', 'C(0,0,1)']),
    mc(22, 'គណនាចម្ងាយពីចំណុច \\(A(1,-2,3)\\) ទៅប្លង់ \\((P): x-3y+2z-5 = 0\\)',
      'Compute the distance from \\(A(1,-2,3)\\) to the plane \\((P): x-3y+2z-5 = 0\\)',
      ['\\frac{1}{\\sqrt{2}}', '\\frac{5}{\\sqrt{2}}', '\\frac{\\sqrt{2}}{5}', '\\frac{1}{5\\sqrt{2}}']),
    mc(23, 'វិចទ័រ \\(\\vec{u}\\) និង \\(\\vec{v}\\) អរតូកូណាល់គ្នា កាលណា',
      'The vectors \\(\\vec{u}\\) and \\(\\vec{v}\\) are orthogonal when',
      ['\\vec{u}\\cdot\\vec{v} = 1', '\\vec{u}\\cdot\\vec{v} = -1', '\\vec{u}\\cdot\\vec{v} = 90', '\\vec{u}\\cdot\\vec{v} = 0', '\\vec{u} = t\\vec{v},\\; t \\in \\mathbb{R}']),
    mc(24, 'គេមាន \\(A\\), \\(B\\), \\(C\\) ជាកំពូលនៃត្រីកោណមួយ។ បើ \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 0\\) នោះ \\(ABC\\) ជាត្រីកោណ',
      'If \\(A\\), \\(B\\), \\(C\\) are the vertices of a triangle and \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 0\\), then \\(ABC\\) is',
      ['\\text{កែងត្រង់ } C', '\\text{កែងត្រង់ } A', '\\text{សមបាត}', '\\text{សម័ង្ស}']),
    mc(25, 'វិចទ័រ \\(\\vec{u}\\) និង \\(\\vec{v}\\) កូលីនេអ៊ែគ្នា កាលណា',
      'The vectors \\(\\vec{u}\\) and \\(\\vec{v}\\) are collinear when',
      ['\\vec{u}\\cdot\\vec{v} = 0', '\\vec{u}\\cdot\\vec{v} = -1', '\\vec{u}\\cdot\\vec{v} = 90', '\\vec{u}\\cdot\\vec{v} = 1', '\\vec{u} = t\\vec{v},\\; t \\in \\mathbb{R}']),
    mc(26, 'បន្ទាត់ \\(L\\) កាត់តាមចំណុច \\(A(0,1,-1)\\) និង \\(B(1,2,0)\\) មានវិចទ័រប្រាប់ទិស',
      'The line \\(L\\) through \\(A(0,1,-1)\\) and \\(B(1,2,0)\\) has direction vector',
      ['\\vec{u} = (-1,-1,-1)', '\\vec{u} = (1,1,-1)', '\\vec{u} = (1,-1,1)', '\\vec{u} = (1,-1,-1)']),
    mc(27, 'បន្ទាត់ \\(L\\) កាត់តាមចំណុច \\(A(0,1,-1)\\) និង \\(B(1,2,0)\\) ជាបន្ទាត់ដែលស្របទៅនឹងបន្ទាត់ \\(d\\) មានសមីការ',
      'The line \\(L\\) through \\(A(0,1,-1)\\) and \\(B(1,2,0)\\) is parallel to the line \\(d\\) with equation', [
      '\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z}{3}', '\\frac{x-1}{2} = \\frac{y-2}{2} = \\frac{z}{3}',
      '\\frac{x-1}{2} = \\frac{y-2}{2} = \\frac{z}{2}', '\\frac{x-1}{2} = \\frac{y-2}{2} = \\frac{z}{4}',
      '\\text{គ្មានចម្លើយ}' ]),
    mc(28, 'តើចំណុចខាងក្រោមមួយណា នៅលើបន្ទាត់ \\(L: \\dfrac{x-1}{2} = \\dfrac{y-2}{-3} = z+2\\)',
      'Which of the points below lies on the line \\(L: \\dfrac{x-1}{2} = \\dfrac{y-2}{-3} = z+2\\)?',
      ['(1,2,2)', '(3,-1,-1)', '(0,1,0)', '(0,0,1)', '\\text{គ្មានចម្លើយ}']),
    mc(29, 'ប្លង់ដែលកាត់តាមចំណុច \\(P(5,-4,3)\\) ហើយកែងនឹងវិចទ័រ \\(\\vec{n} = \\vec{i}+\\vec{j}+\\vec{k}\\) ផ្ទៀងផ្ទាត់សមីការ',
      'The plane through \\(P(5,-4,3)\\) perpendicular to \\(\\vec{n} = \\vec{i}+\\vec{j}+\\vec{k}\\) has equation',
      ['5x-4y+3z = 0', 'x+y+z = 4', 'x+y+z = -4', '5x-4y+3z = 4', '\\text{គ្មានចម្លើយ}']),
    mc(30, 'តើចំណុចខាងក្រោមមួយណា ដែលស្ថិតនៅលើប្លង់ \\(4x+3y-5z = 10\\)?',
      'Which of the points below lies on the plane \\(4x+3y-5z = 10\\)?',
      ['A(1,2,0)', 'B(-7,6,4)', 'C(-2,1,3)', 'D(1,-2,6)', '\\text{គ្មានចម្លើយ}']),
    mc(31, 'ចម្ងាយពីចំណុច \\(O(0,0,0)\\) ទៅប្លង់ \\(\\alpha: 2x+y-2z+7 = 0\\) ស្មើនឹង',
      'The distance from \\(O(0,0,0)\\) to the plane \\(\\alpha: 2x+y-2z+7 = 0\\) is',
      ['0\\text{ ឯកតា}', '7\\text{ ឯកតា}', '\\frac{7}{3}\\text{ ឯកតា}', '\\frac{3}{7}\\text{ ឯកតា}', '\\text{គ្មានចម្លើយ}']),
    mc(32, 'ប្លង់ \\(\\alpha: x-y-z+4 = 0\\) កែងនឹងបន្ទាត់ \\(L\\) ដែលមានសមីការ',
      'The plane \\(\\alpha: x-y-z+4 = 0\\) is perpendicular to the line \\(L\\) with equation', [
      '\\frac{x-1}{2} = \\frac{y-2}{-3} = z+2', '\\frac{x-1}{2} = \\frac{y-2}{2} = \\frac{z}{3}',
      '\\frac{x-1}{1} = \\frac{y-1}{-1} = \\frac{z-2}{-1}', '\\frac{x}{-1} = \\frac{y-2}{-1} = \\frac{z}{4}',
      '\\text{គ្មានចម្លើយ}' ]),
    mc(33, 'ប្លង់ \\(\\alpha: 3x-y+2z = 5\\) ស្របនឹងប្លង់ \\(\\beta\\) ដែលមានសមីការ',
      'The plane \\(\\alpha: 3x-y+2z = 5\\) is parallel to the plane \\(\\beta\\) with equation',
      ['-x+y+3z = 4', '4x+y-3z = 3', '5x+5y+15z = 21', '6x-2y+4z = 18', '\\text{គ្មានចម្លើយ}']),
    mc(34, 'ប្លង់ \\(\\alpha: x-y-z+4 = 0\\) និងបន្ទាត់ \\(x = 1+t,\\; y = 1-t,\\; z = 2-t\\;(t \\in \\mathbb{R})\\) ប្រសព្វគ្នាត្រង់ចំណុច',
      'The plane \\(\\alpha: x-y-z+4 = 0\\) and the line \\(x = 1+t,\\; y = 1-t,\\; z = 2-t\\;(t \\in \\mathbb{R})\\) meet at', [
      '(1,-1,-1)', '(-1,-1,4)', '\\left(\\tfrac{1}{3},\\tfrac{5}{3},\\tfrac{8}{3}\\right)',
      '\\left(\\tfrac{1}{3},-\\tfrac{1}{3},-\\tfrac{1}{3}\\right)', '\\text{គ្មានចម្លើយ}' ]),
    mc(35, 'នៅក្នុងតម្រុយ \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\) គេឲ្យចំណុច \\(A(0,3,0)\\), \\(B(0,1,-2)\\) និង \\(C(2,3,-2)\\)។ តើ \\(\\triangle ABC\\) ជាត្រីកោណអ្វី?',
      'In the system \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\), \\(A(0,3,0)\\), \\(B(0,1,-2)\\), \\(C(2,3,-2)\\). What kind of triangle is \\(\\triangle ABC\\)?',
      ['\\text{សមបាត}', '\\text{សមញ្ញ}', '\\text{កែង}', '\\text{សម័ង្ស}']),
    mc(36, 'មុំដែលផ្គុំដោយវិចទ័រ \\(\\overrightarrow{AB} = (0,4,-4)\\) និង \\(\\overrightarrow{AC} = (-4,4,0)\\) គឺស្មើនឹង',
      'The angle between \\(\\overrightarrow{AB} = (0,4,-4)\\) and \\(\\overrightarrow{AC} = (-4,4,0)\\) is',
      ['30^\\circ', '60^\\circ', '45^\\circ', '90^\\circ']),
    mc(37, 'គេឲ្យវិចទ័រ \\(\\vec{u} = (2,-1,5)\\) និង \\(\\vec{v} = (-10,5,4x-2)\\)។ បើ \\(\\vec{u}\\;\\|\\;\\vec{v}\\) នោះ \\(x\\) ស្មើនឹង?',
      'Given \\(\\vec{u} = (2,-1,5)\\) and \\(\\vec{v} = (-10,5,4x-2)\\). If \\(\\vec{u}\\;\\|\\;\\vec{v}\\), then \\(x\\) is',
      ['\\frac{-23}{4}', '\\frac{23}{4}', '\\frac{4}{23}', '\\frac{-4}{23}']),
    mc(38, 'ក្នុងចំណោមវិចទ័រខាងក្រោមសុទ្ធតែជាវិចទ័រឯកតា លើកលែងតែវិចទ័រ',
      'All the vectors below are unit vectors except', [
      '\\vec{u} = \\left(\\tfrac{3}{2},\\tfrac{3}{2},\\tfrac{1}{2}\\right)',
      '\\vec{v} = \\left(-\\tfrac{\\sqrt{2}}{2},\\tfrac{\\sqrt{2}}{2},0\\right)',
      '\\vec{w} = \\left(\\tfrac{-1}{3},\\tfrac{2}{3},\\tfrac{2}{3}\\right)',
      '\\vec{x} = \\left(\\tfrac{2}{3},\\tfrac{2}{3},\\tfrac{1}{3}\\right)' ]),
    mc(39, 'ចម្លើយនៃផលគុណ \\(\\vec{i}\\times\\vec{j}\\) ស្មើនឹង',
      'The product \\(\\vec{i}\\times\\vec{j}\\) equals',
      ['\\vec{i}', '\\vec{j}', '\\vec{k}', '\\vec{j}\\times\\vec{i}']),
    mc(40, 'នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\) គេឲ្យចំណុច \\(A(0,2,3)\\), \\(B(1,1,5)\\) និង \\(C(-2,4,-1)\\)។ តើអំណះអំណាងទាំង៤ខាងក្រោមមួយណាដែល<b>មិនត្រឹមត្រូវ</b>?',
      'In the orthonormal system \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\), \\(A(0,2,3)\\), \\(B(1,1,5)\\), \\(C(-2,4,-1)\\). Which of the four statements below is <b>not</b> correct?', [
      '\\overrightarrow{AB}\\;\\|\\;\\overrightarrow{AC}',
      'A,B,C \\text{ រត់ត្រង់ជួរគ្នា}',
      'A,B,C \\text{ នៅលើបន្ទាត់តែមួយ}',
      'A,B,C \\text{ មិននៅលើបន្ទាត់តែមួយ}' ]),
    mc(41, 'នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\) គេឲ្យចំណុច \\(A(0,0,3)\\), \\(B(1,1,5)\\) និង \\(C(-3,0,0)\\)។ តើអំណះអំណាងទាំង៤ខាងក្រោមមួយណាដែល<b>ត្រឹមត្រូវ</b>?',
      'In the orthonormal system \\(\\left(o,\\vec{i},\\vec{j},\\vec{k}\\right)\\), \\(A(0,0,3)\\), \\(B(1,1,5)\\), \\(C(-3,0,0)\\). Which of the four statements below <b>is</b> correct?', [
      '\\overrightarrow{AB}\\;\\|\\;\\overrightarrow{AC}',
      'A,B,C \\text{ រត់ត្រង់ជួរគ្នា}',
      'A,B,C \\text{ នៅលើបន្ទាត់តែមួយ}',
      'A,B,C \\text{ មិននៅលើបន្ទាត់តែមួយ}' ]),
    mc(42, 'គេមានប្លង់ \\(P: 2x-y+3z-1 = 0\\) និងចំណុច \\(A(2,5,-1)\\)។ សមីការបន្ទាត់ \\(d\\) ដែលកាត់តាម \\(A\\) ហើយកែងនឹងប្លង់ \\(P\\) កំណត់ដោយ',
      'Given the plane \\(P: 2x-y+3z-1 = 0\\) and the point \\(A(2,5,-1)\\), the line \\(d\\) through \\(A\\) perpendicular to \\(P\\) is', [
      'x = 2+2t,\\; y = 5-t,\\; z = -1+3t', 'x = 2+2t,\\; y = -1+5t,\\; z = 3-t',
      'x = 2+2t,\\; y = 5+t,\\; z = -1+3t', 'x = 2+2t,\\; y = 5-t,\\; z = 1+3t' ]),
    mc(43, 'គេឲ្យសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ \\(D_1: x = 1+t,\\; y = -3-t,\\; z = 2-2t,\\; t \\in \\mathbb{R}\\) និងប្លង់ \\(P: 2x+y-z+5 = 0\\)។ តើអំណះអំណាងទាំង៤ខាងក្រោមមួយណាដែល<b>ត្រឹមត្រូវ</b>?',
      'Given the line \\(D_1: x = 1+t,\\; y = -3-t,\\; z = 2-2t,\\; t \\in \\mathbb{R}\\) and the plane \\(P: 2x+y-z+5 = 0\\). Which of the four statements below <b>is</b> correct?', [
      'D_1 \\text{ និង } P \\text{ មិនកាត់គ្នាទេ}',
      'D_1 \\text{ នៅក្នុងប្លង់ } P',
      'D_1 \\text{ និង } P \\text{ ប្រសព្វគ្នាត្រង់ } E\\left(\\tfrac{1}{3},\\tfrac{-7}{3},\\tfrac{10}{3}\\right)',
      'D_1 \\text{ និង } P \\text{ ប្រសព្វគ្នាត្រង់ } F\\left(\\tfrac{4}{3},\\tfrac{-1}{3},\\tfrac{22}{3}\\right)' ])
  ];

  /* ==================================================================== 3
     WRITTEN EXERCISES (pp. 318 onward) — transcription in progress.      */
  function wr(n, km, en, parts) {
    return { n: n, q: { km: km, en: en }, p: parts || [] };
  }
  function m(k, tex) { return { k: k, t: { km: '\\(' + tex + '\\)', en: '\\(' + tex + '\\)' } }; }

  var WR = [
    wr(1, 'រកវិចទ័រ \\(\\vec{u}\\times\\vec{v}\\) ហើយបង្ហាញថា \\(\\vec{u}\\times\\vec{v}\\) អរតូកូណាល់ទៅនឹងវិចទ័រ \\(\\vec{u}\\) ផង និង \\(\\vec{v}\\) ផង ក្នុងករណីនីមួយៗខាងក្រោម៖',
      'Find \\(\\vec{u}\\times\\vec{v}\\) and show that it is orthogonal to both \\(\\vec{u}\\) and \\(\\vec{v}\\), in each case:', [
      m('a', '\\vec{u} = (2,-3,1),\\; \\vec{v} = (-2,5,0)'),
      m('b', '\\vec{u} = (-1,1,2),\\; \\vec{v} = (1,-2,1)'),
      m('c', '\\vec{u} = \\vec{i}+\\vec{j}+\\vec{k},\\; \\vec{v} = \\vec{i}-2\\vec{j}+3\\vec{k}'),
      m('d', '\\vec{u} = -\\vec{i}+3\\vec{j}-5\\vec{k},\\; \\vec{v} = 2\\vec{i}+4\\vec{j}+\\vec{k}')
    ]),
    wr(11, 'នៅក្នុងតម្រុយអរតូណរម៉ាល់ \\(\\left(O,\\vec{i},\\vec{j},\\vec{k}\\right)\\) គេឲ្យបួនចំណុច \\(A(5,0,5)\\), \\(B(2,0,5)\\), \\(C(5,5,6)\\) និង \\(D(3,0,0)\\)។',
      'In the orthonormal system \\(\\left(O,\\vec{i},\\vec{j},\\vec{k}\\right)\\), take the four points \\(A(5,0,5)\\), \\(B(2,0,5)\\), \\(C(5,5,6)\\) and \\(D(3,0,0)\\).', [
      { k: 'a', t: { km: 'គណនា \\(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\) រួចទាញរកផ្ទៃក្រឡានៃត្រីកោណ \\(ABC\\)។',
                     en: 'Compute \\(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\), then deduce the area of the triangle \\(ABC\\).' } },
      { k: 'b', t: { km: 'គណនា \\(\\overrightarrow{AD}\\cdot\\left(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right)\\) រួចទាញរកមាឌនៃប្រលេពីប៉ែតដែលមានវិចទ័រ \\(\\overrightarrow{AB}\\), \\(\\overrightarrow{AC}\\) និង \\(\\overrightarrow{AD}\\) ជាជ្រុងជាប់។',
                     en: 'Compute \\(\\overrightarrow{AD}\\cdot\\left(\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right)\\), then deduce the volume of the parallelepiped with edges \\(\\overrightarrow{AB}\\), \\(\\overrightarrow{AC}\\) and \\(\\overrightarrow{AD}\\).' } }
    ])
  ];

  global.MATH_BANK = { key: 'vector', lesson: LESSON, mc: MC, exercises: WR };
})(window);
