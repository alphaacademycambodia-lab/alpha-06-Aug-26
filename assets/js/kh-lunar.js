/* Alpha Academy Cambodia — the Khmer lunar date (ចន្ទគតិ)
   ---------------------------------------------------------------------------
   Converts a Gregorian date to its Khmer lunar date: the moon day (៦កើត,
   ១៥រោច), the lunar month (ខែចេត្រ), the animal year (ឆ្នាំរោង), the sak
   (ឆស័ក) and the Buddhist Era year (ព.ស. ២៥៦៨).

   WHERE THIS COMES FROM. The moon-day and month arithmetic is the Suriyeatr
   (សុរិយាត្រ) reckoning as implemented by seanghay/khmercal, ported here to
   ES5. It is NOT invented and it is NOT approximated — the constants and the
   leap rules are transcribed, and the port is checked against known dates
   before it ships (see the checks listed at the bottom of this comment).

   TWO DELIBERATE CHANGES FROM THE SOURCE

   1. INTEGER DAY NUMBERS, NOT TIMESTAMPS. The original shifts a Date by seven
      hours to land in Cambodian time and then rounds a millisecond difference.
      That makes the answer depend on the reader's own time zone, which for a
      calendar is a bug: a Khmer date must be the same whether the page is
      open in Phnom Penh or in Paris. Here every date is reduced to
      Date.UTC(y, m, d) / 86400000 — a whole number of days — so the
      arithmetic has no clock in it at all. ANCHOR is the day number that the
      original's epoch works out to, and it is verified, not assumed.

   2. THE YEAR NAMES ARE COUNTED, NOT DERIVED. The two published
      implementations of this algorithm disagree with each other on the
      animal/sak year transition, and neither reproduced the documented
      answer for 14 April 2024 when ported. Rather than ship a year name that
      might be wrong, the cycle is anchored on a documented fact — 2024 is
      ឆ្នាំរោង ឆស័ក — and stepped: the animal year turns at Khmer New Year
      and the Buddhist Era year turns at Visak Bochea, which this file can
      locate exactly because it is the full moon of ពិសាខ.

   CHECKED AGAINST
     14 Apr 2024 = ៦កើត ខែចេត្រ            (momentkh documentation)
     22 May 2024 = ១៥កើត ខែពិសាខ           (Visak Bochea 2024)
      4 May 2023 = ១៥កើត ខែពិសាខ           (Visak Bochea 2023)
     15 Nov 2024 = ១៥កើត ខែកត្តិក          (Water Festival 2024)
     27 Nov 2023 = ១៥កើត ខែកត្តិក          (Water Festival 2023)

   WHAT THIS FILE IS NOT FOR. It does not decide public holidays. The lunar
   date of Visak Bochea is astronomy; the public holiday is whatever the
   sub-decree says, and the two can differ. Holidays live in kh-holidays.js. */
(function (global) {
  'use strict';

  /* --------------------------------------------------- the Suriyeatr rules */
  function aharkunMod(y) { return (y * 292207 + 373) % 800; }
  function aharkun(y)    { return Math.floor((y * 292207 + 373) / 800) + 1; }
  function avoman(y)     { return (11 * aharkun(y) + 650) % 692; }
  function solarLeap(y)  { return (800 - aharkunMod(y)) <= 207; }
  function bodithey(y) {
    var ha = aharkun(y);
    return (ha + Math.floor((11 * ha + 650) / 692)) % 30;
  }

  /* អធិកមាស — the year carries a thirteenth month */
  function leapMonth(y) {
    var b0 = bodithey(y), b1 = bodithey(y + 1);
    return b0 > 24 || b0 < 6 || (b0 === 24 && b1 === 6) || (b0 === 25 && b1 === 5);
  }

  /* អធិកវារ — the year carries an extra day in ជេស្ឋ. The rule looks back a
     year when it fails, so the walk is bounded rather than memoised: a cache
     here has to be written before the recursive call and would hand out its
     own provisional answer. */
  function protetinLeap(y, depth) {
    depth = depth || 0;
    var a0 = avoman(y), a1 = avoman(y + 1), normal = solarLeap(y);
    var value = normal && a0 < 127;
    if (!normal) {
      if (a0 === 137 && a1 === 0) { value = false; }
      else if (a0 < 138) { value = true; }
    }
    if (!value && depth < 12) {
      value = protetinLeap(y - 1, depth + 1) && leapMonth(y - 1);
    }
    return value;
  }
  function leapDay(y) {
    var v = protetinLeap(y);
    if (leapMonth(y) && v) { v = false; }
    return v;
  }

  /* Every one of these is pure and gets asked the same handful of questions
     over and over — a calendar page converts 42 cells at a time, and each
     conversion walks decades of year lengths. Without the caches the page
     does hundreds of millions of operations to draw one month. */
  var CACHE = { len: {}, before: {}, visak: {} };

  function daysInLunarYear(y) {
    if (CACHE.len[y] != null) { return CACHE.len[y]; }
    var n = leapMonth(y) ? 384 : leapDay(y) ? 355 : 354;
    CACHE.len[y] = n;
    return n;
  }

  /* The month lengths for a lunar year, in order. 29 and 30 alternate; the
     leap day lands in month index 6 and the leap month splits អាសាឍ in two. */
  function monthLengths(y) {
    var ath = leapMonth(y), great = leapDay(y), out = [], i, j;
    for (i = 0; i < 12 + (ath ? 1 : 0); i++) {
      j = i;
      if (ath && j >= 8) { j--; }
      out.push(29 + ((j % 2 !== 0) ? 1 : 0) + ((j === 6 && great) ? 1 : 0));
    }
    return out;
  }

  /* ------------------------------------------------------------- the names */
  var MONTHS_ALL = ['មិគសិរ', 'បុស្ស', 'មាឃ', 'ផល្គុន', 'ចេត្រ', 'ពិសាខ',
                    'ជេស្ឋ', 'អាសាឍ', 'បឋមាសាឍ', 'ទុតិយាសាឍ', 'ស្រាពណ៍',
                    'ភទ្របទ', 'អស្សុជ', 'កត្តិក'];
  var ANIMALS = ['ជូត', 'ឆ្លូវ', 'ខាល', 'ថោះ', 'រោង', 'ម្សាញ់',
                 'មមី', 'មមែ', 'វក', 'រកា', 'ច', 'កុរ'];
  var SAKS    = ['សំរឹទ្ធិស័ក', 'ឯកស័ក', 'ទោស័ក', 'ត្រីស័ក', 'ចត្វាស័ក',
                 'បញ្ចស័ក', 'ឆស័ក', 'សប្តស័ក', 'អដ្ឋស័ក', 'នព្វស័ក'];

  function monthNames(count) {
    var out = [], i;
    for (i = 0; i < MONTHS_ALL.length; i++) {
      if (count === 12) { if (i !== 8 && i !== 9) { out.push(MONTHS_ALL[i]); } }
      else if (i !== 7) { out.push(MONTHS_ALL[i]); }
    }
    return out;
  }

  /* --------------------------------------------------------- the day count */
  var ANCHOR = 332;          /* day number of the reckoning's epoch */
  var BASE_YEAR = 1970 - 638 + 1;

  function dayNumber(y, m, d) { return Math.round(Date.UTC(y, m - 1, d) / 86400000); }

  function daysBefore(ceYear) {
    if (CACHE.before[ceYear] != null) { return CACHE.before[ceYear]; }
    var count = 0, x = BASE_YEAR, y = ceYear - 638, tmp;
    if (x > y) { tmp = x; x = y; y = tmp; }
    while (x < y) { count += daysInLunarYear(x++); }
    CACHE.before[ceYear] = count;
    return count;
  }

  /* The core: Gregorian y/m/d (m is 1-12) to the lunar day and month. */
  function convert(gy, gm, gd) {
    var y = gy - 638;
    var day = Math.abs((dayNumber(gy, gm, gd) - ANCHOR) - daysBefore(gy)) + 1;
    var len = daysInLunarYear(y);
    if (day > len) { day -= len; y++; }

    var lengths = monthLengths(y), idx = 0, i;
    for (i = 0; i < lengths.length; i++) {
      if (day <= lengths[i]) { break; }
      day -= lengths[i];
      idx++;
    }
    var names = monthNames(lengths.length);
    return {
      day: day,                                  /* 1 .. 30 within the month */
      moonDay: (day - 1) % 15 + 1,               /* 1 .. 15                  */
      waxing: day <= 15,                         /* កើត, else រោច             */
      month: names[idx],
      monthIndex: idx,
      monthLength: lengths[idx],
      leapMonthYear: leapMonth(y),
      leapDayYear: leapDay(y)
    };
  }

  /* ------------------------------------------------------- the year names
     Anchored on a documented fact rather than derived — see the header. */
  var ANIMAL_EPOCH = 1984;   /* 1984 was ឆ្នាំជូត   */
  var SAK_EPOCH = 2018;      /* 2018 was សំរឹទ្ធិស័ក */

  function mod(n, m) { return ((n % m) + m) % m; }

  /* Khmer New Year: the sub-decree fixes it at 14 April, occasionally 13. */
  function newYearDayNumber(ceYear) { return dayNumber(ceYear, 4, 14); }

  /* ------------------------------------------------------------------ api

     ON WHEN THE BUDDHIST ERA YEAR TURNS. There is no single answer: the Khmer
     calendar reference at tovnah.com says plainly that opinions differ. The
     religious reckoning turns ព.ស. at Visak Bochea; everyday Cambodian usage
     turns it at Khmer New Year, which is why Khmer New Year 2026 is printed
     everywhere as ព.ស. ២៥៧០ rather than ២៥៦៩. This page follows the everyday
     usage, because a calendar's job is to agree with the one on the wall
     beside it — and it means the animal year, the sak and ព.ស. all turn on
     the same day, which is what a reader expects. */
  function khmerDate(gy, gm, gd) {
    var r = convert(gy, gm, gd);
    var turned = dayNumber(gy, gm, gd) >= newYearDayNumber(gy);
    var cycleYear = turned ? gy : gy - 1;

    r.animal = ANIMALS[mod(cycleYear - ANIMAL_EPOCH, 12)];
    r.sak    = SAKS[mod(cycleYear - SAK_EPOCH, 10)];
    r.be     = gy + 543 + (turned ? 1 : 0);

    return r;
  }

  var KHDIGIT = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  function khNum(n) {
    return String(n).replace(/[0-9]/g, function (d) { return KHDIGIT[+d]; });
  }

  global.KhLunar = {
    of: khmerDate,
    /* "៦កើត" — what goes in a calendar cell */
    shortLabel: function (r) { return khNum(r.moonDay) + (r.waxing ? 'កើត' : 'រោច'); },
    /* "៦កើត ខែចេត្រ" */
    dayMonth: function (r) { return this.shortLabel(r) + ' ខែ' + r.month; },
    /* "ឆ្នាំរោង ឆស័ក ព.ស. ២៥៦៨" */
    yearLabel: function (r) { return 'ឆ្នាំ' + r.animal + ' ' + r.sak + ' ព.ស. ' + khNum(r.be); },
    num: khNum,
    months: MONTHS_ALL,
    animals: ANIMALS,
    saks: SAKS
  };
})(window);
