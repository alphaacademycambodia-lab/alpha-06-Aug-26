/* Alpha Academy Cambodia — Date Calculator
   ---------------------------------------------------------------------------
   Add or subtract years, months, weeks and days from a date, and show the
   answer on a calendar. No dependencies, no network, nothing stored.

   FOUR THINGS DECIDE HOW THIS IS BUILT.

   1. THE ANSWER IS LIVE. There is no Calculate button. Every keystroke
      recomputes, so the result moves while you are still choosing — which is
      how a person actually uses one of these: nudging the number until the
      date looks right. The result panel is aria-live so a screen reader
      follows along.

   2. MONTHS ARE NOT A FIXED LENGTH, AND THE PAGE SAYS SO. 31 January plus one
      month has no honest answer; every calendar in the world clamps it to the
      last day of February, and so does this one — but it also *tells you* it
      did. Silently returning 3 March, which is what naive `setMonth` does, is
      the classic bug in date calculators and it is worth being loud about.
      Order of operations is years, then months (clamped), then whole days.
      1 month + 30 days is therefore not the same as 30 days + 1 month, and
      the conventional order is the one used here.

   3. DATES ARE HELD AS THREE INTEGERS, NEVER PARSED FROM A STRING. new
      Date('2026-03-01') is UTC midnight and can land on the previous day west
      of Greenwich; new Date(2026, 2, 1) is local midnight and always the day
      you meant. Differences are then measured through Date.UTC so a daylight
      saving jump cannot turn 90 days into 89.

   4. THE PAGE IS BILINGUAL IN PLACE. Everything the script writes carries its
      Khmer beside its English as an {en, km} pair, the same way the lesson
      banks do, and Khmer numerals are used throughout when the page is in
      Khmer — because ១៥ មករា is what a Khmer reader is looking for.          */
(function () {
  'use strict';

  var root = document.getElementById('dcRoot');
  if (!root) { return; }

  /* ------------------------------------------------------------- language */
  function lang() { return (window.AAi18n && window.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function t(o) { return (lang() === 'km' && o && o.km) ? o.km : (o ? o.en : ''); }

  var KHDIGIT = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

  /* Khmer numerals whenever the page is in Khmer. Applied to the calendar,
     the counts and the date line — a page that says ១៥ វិច្ឆិកា but prints
     "15" in the grid underneath is half-translated. */
  function num(n) {
    var s = String(n);
    if (lang() !== 'km') { return s; }
    return s.replace(/[0-9]/g, function (d) { return KHDIGIT[+d]; });
  }

  var MONTHS = {
    en: ['January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December'],
    km: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា',
         'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
  };
  /* Sunday first, which is how a Cambodian wall calendar is printed. */
  var DOW = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    km: ['ថ្ងៃអាទិត្យ', 'ថ្ងៃច័ន្ទ', 'ថ្ងៃអង្គារ', 'ថ្ងៃពុធ', 'ថ្ងៃព្រហស្បតិ៍', 'ថ្ងៃសុក្រ', 'ថ្ងៃសៅរ៍']
  };
  var DOW_SHORT = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    km: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស']
  };

  var T = {
    empty:   { en: 'Pick a start date to see the answer.', km: 'សូមជ្រើសរើសកាលបរិច្ឆេទចាប់ផ្តើម ដើម្បីឃើញចម្លើយ។' },
    nothing: { en: 'Add a number of days, weeks, months or years.', km: 'សូមបញ្ចូលចំនួនថ្ងៃ សប្តាហ៍ ខែ ឬឆ្នាំ។' },
    range:   { en: 'That date is outside the years 1 to 9999.', km: 'កាលបរិច្ឆេទនោះនៅក្រៅចន្លោះឆ្នាំ ១ ដល់ ៩៩៩៩។' },
    after:   { en: 'after the start date',  km: 'ក្រោយកាលបរិច្ឆេទចាប់ផ្តើម' },
    before:  { en: 'before the start date', km: 'មុនកាលបរិច្ឆេទចាប់ផ្តើម' },
    days:    { en: 'days',  km: 'ថ្ងៃ' },
    day:     { en: 'day',   km: 'ថ្ងៃ' },
    weeks:   { en: 'weeks', km: 'សប្តាហ៍' },
    week:    { en: 'week',  km: 'សប្តាហ៍' },
    and:     { en: 'and',   km: 'និង' },
    dayOf:   { en: 'Day {d} of {y}', km: 'ថ្ងៃទី {d} នៃឆ្នាំ {y}' },
    inDays:  { en: 'in {n} days',    km: 'ក្នុងរយៈពេល {n} ថ្ងៃទៀត' },
    agoDays: { en: '{n} days ago',   km: '{n} ថ្ងៃមុន' },
    isToday: { en: 'That is today',  km: 'នោះគឺថ្ងៃនេះ' },
    copy:    { en: 'Copy',    km: 'ចម្លង' },
    copied:  { en: 'Copied',  km: 'ចម្លងរួច' },
    clamp:   { en: '{sd} {sm} has no matching day in {tm}, so the answer is the last day of that month — every calendar does this, and it is why one month plus one month is not always the same as two months.',
               km: 'ថ្ងៃទី {sd} ខែ {sm} គ្មានថ្ងៃត្រូវគ្នាក្នុងខែ {tm} ទេ ដូច្នេះចម្លើយគឺថ្ងៃចុងក្រោយនៃខែនោះ — ប្រតិទិនទាំងអស់ធ្វើដូចនេះ ហើយនេះជាមូលហេតុដែលមួយខែបូកមួយខែ មិនតែងតែស្មើនឹងពីរខែទេ។' }
  };

  /* --------------------------------------------------------- date helpers */
  function daysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }

  function todayParts() {
    var n = new Date();
    return { y: n.getFullYear(), m: n.getMonth(), d: n.getDate() };
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(p) { return p.y + '-' + pad(p.m + 1) + '-' + pad(p.d); }

  /* Local midnight, always. See note 3 at the top of the file. */
  function toDate(p) { return new Date(p.y, p.m, p.d); }
  function fromDate(dt) { return { y: dt.getFullYear(), m: dt.getMonth(), d: dt.getDate() }; }

  /* Measured through UTC so a daylight saving jump cannot lose an hour and
     round 90 days down to 89. Cambodia has no DST; a traveller's laptop may. */
  function dayDiff(a, b) {
    var ua = Date.UTC(a.y, a.m, a.d), ub = Date.UTC(b.y, b.m, b.d);
    return Math.round((ub - ua) / 86400000);
  }

  function dayOfYear(p) {
    return dayDiff({ y: p.y, m: 0, d: 1 }, p) + 1;
  }

  /* The whole calculation. Years and months move first and clamp to the end
     of the target month; weeks and days are then plain day arithmetic. */
  function shift(start, dir, amt) {
    var sign = dir === 'sub' ? -1 : 1;

    var months = start.m + sign * (amt.y * 12 + amt.m);
    var y = start.y + Math.floor(months / 12);
    var m = ((months % 12) + 12) % 12;

    var max = daysInMonth(y, m);
    var clamped = start.d > max;
    var d = clamped ? max : start.d;

    var dt = new Date(y, m, d);
    dt.setDate(dt.getDate() + sign * (amt.w * 7 + amt.d));

    return { parts: fromDate(dt), clamped: clamped, clampTo: { y: y, m: m } };
  }

  function fmtLong(p) {
    return DOW[lang()][toDate(p).getDay()] + ', ' +
           num(p.d) + ' ' + MONTHS[lang()][p.m] + ' ' + num(p.y);
  }
  /* The other language, printed underneath — the site is read by people who
     want the Khmer and people who want the English, often at the same desk. */
  function fmtOther(p) {
    var other = lang() === 'km' ? 'en' : 'km';
    var n = other === 'km'
      ? String(p.d).replace(/[0-9]/g, function (x) { return KHDIGIT[+x]; })
      : String(p.d);
    var yy = other === 'km'
      ? String(p.y).replace(/[0-9]/g, function (x) { return KHDIGIT[+x]; })
      : String(p.y);
    return DOW[other][toDate(p).getDay()] + ', ' + n + ' ' + MONTHS[other][p.m] + ' ' + yy;
  }

  function fill(tpl, map) {
    return tpl.replace(/\{(\w+)\}/g, function (_, k) { return map[k] == null ? '' : map[k]; });
  }

  /* ---------------------------------------------------------------- state */
  var el = {
    date:  document.getElementById('dcDate'),
    today: document.getElementById('dcToday'),
    dow:   document.getElementById('dcStartDow'),
    dir:   document.getElementById('dcDir'),
    quick: document.getElementById('dcQuick'),
    reset: document.getElementById('dcReset'),
    big:   document.getElementById('dcBig'),
    alt:   document.getElementById('dcAlt'),
    facts: document.getElementById('dcFacts'),
    note:  document.getElementById('dcNote'),
    noteT: document.getElementById('dcNoteText'),
    copy:  document.getElementById('dcCopy'),
    copyT: document.getElementById('dcCopyText'),
    panel: document.getElementById('dcResult'),
    ttl:   document.getElementById('dcMonthTitle'),
    grid:  document.getElementById('dcGrid'),
    prev:  document.getElementById('dcPrev'),
    next:  document.getElementById('dcNext'),
    jump:  document.getElementById('dcJump')
  };
  var amtInputs = [].slice.call(root.querySelectorAll('[data-unit]'));

  var TODAY = todayParts();
  var state = {
    dir: 'add',
    view: { y: TODAY.y, m: TODAY.m },   /* which month the calendar shows */
    pinned: false                        /* has the reader browsed away? */
  };

  function readStart() {
    var v = (el.date.value || '').split('-');
    if (v.length !== 3) { return null; }
    var y = +v[0], m = +v[1] - 1, d = +v[2];
    if (!(y >= 1 && y <= 9999) || !(m >= 0 && m <= 11) || !(d >= 1 && d <= 31)) { return null; }
    if (d > daysInMonth(y, m)) { return null; }
    return { y: y, m: m, d: d };
  }

  function readAmounts() {
    var a = { y: 0, m: 0, w: 0, d: 0 };
    amtInputs.forEach(function (i) {
      var n = parseInt(i.value, 10);
      if (!isFinite(n) || n < 0) { n = 0; }
      if (n > 9999) { n = 9999; i.value = '9999'; }
      a[i.getAttribute('data-unit')] = n;
    });
    return a;
  }

  /* ------------------------------------------------------------- drawing */
  function draw(moveView) {
    var start = readStart();
    var amt = readAmounts();

    /* the start date's own weekday, under the input */
    el.dow.textContent = start ? fmtLong(start) : '';

    if (!start) { return fail(t(T.empty)); }

    var total = amt.y + amt.m + amt.w + amt.d;
    var out = shift(start, state.dir, amt);
    var res = out.parts;

    if (res.y < 1 || res.y > 9999) { return fail(t(T.range)); }

    el.panel.classList.remove('dc-bad');
    el.big.textContent = fmtLong(res);
    el.alt.textContent = fmtOther(res);

    /* ---- the facts beside the date ---- */
    var diff = dayDiff(start, res);
    var abs = Math.abs(diff);
    var chips = [];

    if (total === 0) {
      chips.push({ text: t(T.nothing), key: false });
    } else {
      chips.push({
        text: '<b>' + num(abs) + '</b> ' + t(abs === 1 ? T.day : T.days) + ' ' +
              t(diff < 0 ? T.before : T.after),
        key: true, html: true
      });
      if (abs >= 7) {
        var w = Math.floor(abs / 7), r = abs % 7;
        chips.push({
          text: num(w) + ' ' + t(w === 1 ? T.week : T.weeks) +
                (r ? ' ' + t(T.and) + ' ' + num(r) + ' ' + t(r === 1 ? T.day : T.days) : ''),
          key: false
        });
      }
    }

    chips.push({ text: fill(t(T.dayOf), { d: num(dayOfYear(res)), y: num(res.y) }), key: false });

    var fromToday = dayDiff(TODAY, res);
    chips.push({
      text: fromToday === 0 ? t(T.isToday)
          : fromToday > 0 ? fill(t(T.inDays), { n: num(fromToday) })
          : fill(t(T.agoDays), { n: num(-fromToday) }),
      key: false
    });

    el.facts.innerHTML = chips.map(function (c) {
      return '<li' + (c.key ? ' class="is-key"' : '') + '>' + (c.html ? c.text : esc(c.text)) + '</li>';
    }).join('');

    /* ---- the month-length warning ---- */
    if (out.clamped) {
      el.noteT.textContent = fill(t(T.clamp), {
        sd: num(start.d),
        sm: MONTHS[lang()][start.m],
        tm: MONTHS[lang()][out.clampTo.m]
      });
      el.note.classList.add('is-on');
    } else {
      el.note.classList.remove('is-on');
    }

    /* ---- copy ---- */
    el.copy.setAttribute('data-value', iso(res));
    el.copy.classList.remove('is-done');
    el.copyT.textContent = t(T.copy) + ' ' + iso(res);

    /* ---- the calendar ---- */
    if (moveView || !state.pinned) { state.view = { y: res.y, m: res.m }; }
    paintCalendar(start, res);
  }

  function fail(message) {
    el.panel.classList.add('dc-bad');
    el.big.textContent = message;
    el.alt.textContent = '';
    el.facts.innerHTML = '';
    el.note.classList.remove('is-on');
    paintCalendar(null, null);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function same(a, b) { return a && b && a.y === b.y && a.m === b.m && a.d === b.d; }

  function paintCalendar(start, res) {
    var y = state.view.y, m = state.view.m;
    el.ttl.textContent = MONTHS[lang()][m] + ' ' + num(y);

    var first = new Date(y, m, 1).getDay();          /* 0 = Sunday */
    var len = daysInMonth(y, m);
    var prevLen = daysInMonth(m === 0 ? y - 1 : y, m === 0 ? 11 : m - 1);

    var lo = null, hi = null;
    if (start && res) {
      lo = dayDiff(start, res) < 0 ? res : start;
      hi = dayDiff(start, res) < 0 ? start : res;
    }

    var html = DOW_SHORT[lang()].map(function (d) {
      return '<div class="dc-dow">' + esc(d) + '</div>';
    }).join('');

    /* Six rows always, so the grid does not change height as you page
       through — a calendar that jumps under the pointer is hard to scan. */
    for (var cell = 0; cell < 42; cell++) {
      var dayNum, cy = y, cm = m, out = false;
      if (cell < first) { dayNum = prevLen - first + 1 + cell; out = true; cm = m - 1; }
      else if (cell >= first + len) { dayNum = cell - first - len + 1; out = true; cm = m + 1; }
      else { dayNum = cell - first + 1; }
      if (cm < 0) { cm = 11; cy = y - 1; }
      if (cm > 11) { cm = 0; cy = y + 1; }

      var p = { y: cy, m: cm, d: dayNum };
      var cls = ['dc-day'];
      if (out) { cls.push('is-out'); }
      var dow = new Date(cy, cm, dayNum).getDay();
      if (dow === 0 || dow === 6) { cls.push('is-weekend'); }
      if (same(p, TODAY)) { cls.push('is-today'); }
      if (lo && hi && dayDiff(lo, p) > 0 && dayDiff(hi, p) < 0) { cls.push('is-between'); }
      if (same(p, start)) { cls.push('is-start'); }
      if (same(p, res)) { cls.push('is-result'); }

      html += '<div class="' + cls.join(' ') + '"><span>' + num(dayNum) + '</span></div>';
    }
    el.grid.innerHTML = html;
  }

  /* ----------------------------------------------------------------- wire */
  function setDir(dir) {
    state.dir = dir;
    el.dir.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-dir') === dir));
    });
    state.pinned = false;
    draw(true);
  }

  function setAmounts(a) {
    amtInputs.forEach(function (i) {
      i.value = String(a[i.getAttribute('data-unit')] || 0);
    });
  }

  el.date.addEventListener('input', function () { state.pinned = false; draw(true); });
  amtInputs.forEach(function (i) {
    i.addEventListener('input', function () { state.pinned = false; draw(true); });
  });

  el.today.addEventListener('click', function () {
    el.date.value = iso(todayParts());
    state.pinned = false;
    draw(true);
  });

  el.dir.addEventListener('click', function (e) {
    var b = e.target.closest('[data-dir]');
    if (b) { setDir(b.getAttribute('data-dir')); }
  });

  el.quick.addEventListener('click', function (e) {
    var b = e.target.closest('[data-set]');
    if (!b) { return; }
    var bits = b.getAttribute('data-set').split(',');   /* y,m,w,d */
    setAmounts({ y: +bits[0], m: +bits[1], w: +bits[2], d: +bits[3] });
    state.pinned = false;
    draw(true);
  });

  el.reset.addEventListener('click', function () {
    el.date.value = iso(todayParts());
    setAmounts({ y: 0, m: 0, w: 0, d: 0 });
    setDir('add');
  });

  el.prev.addEventListener('click', function () {
    state.pinned = true;
    state.view.m--;
    if (state.view.m < 0) { state.view.m = 11; state.view.y--; }
    draw(false);
  });
  el.next.addEventListener('click', function () {
    state.pinned = true;
    state.view.m++;
    if (state.view.m > 11) { state.view.m = 0; state.view.y++; }
    draw(false);
  });
  el.jump.addEventListener('click', function () { state.pinned = false; draw(true); });

  el.copy.addEventListener('click', function () {
    var v = el.copy.getAttribute('data-value') || '';
    if (!v) { return; }
    var done = function () {
      el.copy.classList.add('is-done');
      el.copyT.textContent = t(T.copied) + ' ' + v;
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(v).then(done, function () {});
      return;
    }
    /* Older Safari and any page not on https: still deserve a working button. */
    var ta = document.createElement('textarea');
    ta.value = v;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    ta.remove();
  });

  /* A language switch has to redraw everything: the month names, the weekday
     row, the numerals in the grid and the sentences in the result all change. */
  document.addEventListener('aa:langchange', function () { draw(false); });

  /* ------------------------------------------------------------------- go */
  if (!el.date.value) { el.date.value = iso(TODAY); }
  el.date.setAttribute('max', '9999-12-31');
  el.date.setAttribute('min', '0001-01-01');
  draw(true);
})();
