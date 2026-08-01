/* Alpha Academy Cambodia — lesson renderer
   ---------------------------------------------------------------------------
   Turns a lesson object into the notes-and-examples markup shared by
   english-grammar.html and english-tenses.html. Styling lives in
   assets/css/lesson.css.

   A lesson looks like this:

     {
       intro:    'one paragraph of orientation',
       blocks: [
         { t:'table', h:'Heading', head:['A','B'], rows:[['a','b'], …] },
         { t:'list',  h:'Heading', items:['…', '…'] }
       ],
       examples: [ ['The sentence.', 'Why it works.'], … ]
     }

   The content is ours, so inline <b>, <em> and <code> in the notes and
   examples are rendered as markup on purpose. Anything that comes from a
   student — nothing does today — would have to be escaped first.          */
(function (global) {
  'use strict';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function block(b) {
    var head = b.h ? '<h3>' + b.h + '</h3>' : '';

    if (b.t === 'table') {
      return '<div class="ls-block">' + head +
               '<div class="ls-tbl"><table><thead><tr>' +
                 b.head.map(function (x) { return '<th>' + x + '</th>'; }).join('') +
               '</tr></thead><tbody>' +
                 b.rows.map(function (r) {
                   return '<tr>' + r.map(function (x) { return '<td>' + x + '</td>'; }).join('') + '</tr>';
                 }).join('') +
               '</tbody></table></div>' +
             '</div>';
    }

    return '<div class="ls-block">' + head +
             '<ul>' + b.items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
           '</div>';
  }

  global.AALesson = {
    /* Returns the inner HTML for a lesson panel: intro, rule blocks and
       worked examples. The chapter title lives in the tab bar above the
       panel, and each page adds its own action row underneath, so neither
       is produced here.                                                   */
    html: function (lesson, exTitle) {
      return (lesson.intro ? '<p class="ls-intro">' + lesson.intro + '</p>' : '') +
             (lesson.blocks || []).map(block).join('') +
             ((lesson.examples && lesson.examples.length)
               ? '<div class="ls-ex"><h3>' + esc(exTitle || 'Worked examples') + '</h3><ol>' +
                   lesson.examples.map(function (e) {
                     return '<li><span class="s">' + e[0] + '</span><span class="w">' + e[1] + '</span></li>';
                   }).join('') +
                 '</ol></div>'
               : '');
    },
    escape: esc
  };
})(window);
