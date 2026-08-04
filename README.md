# Alpha Academy Cambodia — Website

Static, dependency-free HTML/CSS/JS site for **Alpha Academy Cambodia** (home & online tutoring, Phnom Penh).

## Files

```
index.html        Home — hero, services, why-choose-us, subjects, levels, process, testimonials, CTA
services.html     Services — formats, home tutoring, online classes, subjects, languages, levels, FAQ
about.html        About — story, mission/vision/values, why choose us, approach, tutor screening
learning.html     Learning hub — subject cards linking to the free revision resources
grade-12-math-formula.html
                  Grade 12 maths formula book (Khmer) — 12 chapters, MathJax, search, contents drawer
grade-12-complex-number.html
                  Grade 12 complex numbers — lesson + 40 exercises, Khmer and English
grade-12-limit.html
                  Grade 12 limits — lesson + 36 multiple choice + 15 written, Khmer and English
grade-12-derivative.html
                  Grade 12 derivatives — lesson + 13 written exercises, Khmer and English
grade-12-differential-equation.html
                  Grade 12 differential equations — first and second order, lesson
                  + 36 multiple choice + 62 written, Khmer and English
grade-12-integral.html
                  Grade 12 integrals — lesson + 18 multiple choice + 10 written, Khmer and English
grade-12-probability-exercise.html
                  Grade 12 probability — lesson + 108 exercises, Khmer and English
chinese-beginner.html
                  Chinese for Beginners — pinyin, sound, writing, numbers,
                  words and conversation, with audio on every line
contact.html      Contact — details, enquiry form, opening hours, map, quick FAQ
404.html          Not-found page
robots.txt        Crawler rules
sitemap.xml       Sitemap (update <loc> if the domain changes)
assets/css/chinese.css Chinese page — tabs, syllable tiles, writing pad, word lists, dialogues
assets/css/style.css   Full design system — tokens, light/dark themes, components, responsive rules
assets/js/boot.js      Render-blocking: stamps the saved theme + language on <html> before first paint
assets/js/i18n.js      Khmer dictionary and the English ⇄ ខ្មែរ swap
assets/js/main.js      Theme + language wiring, nav, sticky header, scroll reveal, counters, form handling
assets/js/chinese-bank.js
                       Chinese course content — tones, syllables, characters, numbers, words, dialogues
assets/js/chinese-beginner.js
                       Chinese page behaviour — speech, pinyin stacking, writing pad, drills
assets/img/logo.png    Logo (copied from the supplied PNG)
```

No build step, no frameworks. Open `index.html` in a browser to preview.

## Themes

Every page carries a sun/moon button in the header. The choice is stored under
`aa-theme` in `localStorage` and applied by `boot.js` in `<head>`, so there is no
flash of the wrong theme on the next page load. Until the visitor picks one
explicitly, the site follows the operating system's `prefers-color-scheme`.

Colours live in two blocks at the top of `assets/css/style.css`: `:root` for
light and `:root[data-theme="dark"]` for dark. The dark block inverts the
neutral `--ink-*` ramp instead of renaming it, so `--ink-900` still means "the
strongest text colour" in both themes and existing rules keep working. The
footer is the one exception — it is dark in both themes, so it uses the pinned
`--footer-bg`.

## Languages (English ⇄ ខ្មែរ)

English is written directly into the HTML, so the pages are still correct with
JavaScript disabled. Khmer lives only in `assets/js/i18n.js`, keyed by short
ids referenced from the markup:

```html
<h2 data-i18n="home.svcH2">Three ways to learn with Alpha</h2>
<input data-i18n-placeholder="ctc.ph.name">
<button data-i18n-aria="common.toggleTheme">
```

On the first switch to Khmer the original English is stashed on the element, so
switching back is loss-free even for strings containing inline markup. The
choice is stored under `aa-lang`.

To add a string: give the element a `data-i18n="..."` attribute and add the same
key to the `KM` object in `i18n.js`. A key with no Khmer entry simply stays in
English rather than going blank.

The formula book's chapter content is Khmer-only by design (it is a Khmer
reference); the switch changes the surrounding chrome.

## Contact details used

- Phone / Telegram: **+855 93 792 767**
- Email: **alphaacademycambodia@gmail.com**

These appear in the header, footer, floating action buttons and contact page of every page. To change them, search for `85593792767` and `alphaacademycambodia@gmail.com` across the `.html` files and `assets/js/main.js`.

## Contact form

The form has no backend. By default it validates the fields, then opens the visitor's mail client with everything pre-filled to `alphaacademycambodia@gmail.com`. It also has a honeypot field to absorb bots.

To send submissions straight to an inbox without the mail-client step, sign up for a forwarding service (Formspree, Web3Forms, Google Apps Script, etc.) and set the endpoint near the top of the form section in `assets/js/main.js`:

```js
var FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
```

With that set, the form POSTs in the background and falls back to the mail client if the request fails.

## Deploying

**Any static host** — upload the whole folder as-is:

- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect a repo. No build command; publish directory is the folder root.
- **GitHub Pages** — push the folder contents to a repo, enable Pages on the branch root.
- **cPanel / shared hosting** — upload to `public_html/`.

**Google Sites** cannot host raw HTML pages like these — it only accepts embedded HTML in a code block, which strips most of this. If Google Sites is a requirement, use one of the static hosts above and point the domain there instead.

After deploying, point `www.alphaacademycambodia.com` at the host and submit `sitemap.xml` in Google Search Console.

## Things worth customising

- **Testimonials** (`index.html`) are written as realistic placeholders. Replace with real quotes before going live, or delete the section.
- **Statistics** in the hero and About page (`12+ subjects`, `100% personalised`) are safe claims drawn from the service list — swap in real numbers (students taught, years operating) when you have them.
- **Opening hours** on `contact.html` are a sensible default (Mon–Sun 8:00–20:00). Adjust to the real schedule.
- **Map** on `contact.html` centres on Phnom Penh. Replace the iframe `src` with a pinned Google Maps embed once there's a public office address.
- **Colours** all live in the `:root` block at the top of `assets/css/style.css` — the blues are sampled from the logo gradient. Change a token there and check it in both themes.
- **Learning resources** (`learning.html`) ship with Mathematics live and the Science / Languages cards marked "Soon". When a new sheet is ready, drop the page in, add a `<a>` to the right `.topic-list`, and remove the `is-soon` class and `badge-soon` span.

## Complex numbers

`grade-12-complex-number.html` is one page with two views behind a switch —
**Lesson** and **Exercises** — both drawn from `assets/js/complex-bank.js`.

The bank carries **both languages in the same object**, `km` beside `en`, and
the maths is written once in TeX because it reads the same either way:

```js
{ t:'p', km:'…', en:'…' }          // paragraph
{ t:'m', tex:'z = r(\\cos\\alpha + i\\sin\\alpha)' }   // display formula
{ t:'eg', km:'…', en:'…', steps:['…','…'] }            // worked example
```

Exercises follow the same idea — `q:{km,en}` and parts `t:{km,en}` — plus
`src` for a past-exam year and `extra: true` for the practice questions
written for this page rather than taken from the book. Part labels are stored
once as `a`, `b`, `c` or `1`, `2`, `3` and printed as ក ខ គ in Khmer and
(a) (b) (c) in English.

Nine lesson sections cover \\(i\\) and the algebraic form, the four
operations, powers of \\(i\\), the conjugate, modulus and argument, polar
form, de Moivre, the \\(n\\)th roots and quadratics in \\(\\mathbb{C}\\).
Exercises 1–30 come with the chapter (several are past national examination
questions); 31–40 were written for this page.

MathJax typesets after every redraw, including after a language change —
`complex-number.js` calls `typesetPromise` at the end of `paint()`. The
`content-box` rule for `mjx-*` in `complex.css` is the same fix the formula
book needs; don't remove it.

## Limits

`grade-12-limit.html` is the same two-view page as complex numbers and shares
its stylesheet — `complex.css` serves both, which is why the limits markup is
also `cx-*`. Content is in `assets/js/limit-bank.js`, again `km` beside `en`
with the maths written once in TeX.

The bank has three parts: `lesson` (7 sections), `mc` (36 multiple-choice) and
`exercises` (15 written). **The multiple-choice questions live in the
Exercises view**, above the written ones, per the brief.

```js
{ n: 12, kind:'mc', q:{km,en}, o:['\\frac{1}{2}','\\frac{7}{4}', …] }
```

The printed source has **no answer key**, so an option is never marked right
or wrong — clicking one records it as the student's choice (localStorage
`aa-lim-picks`), clicking it again clears it, exactly like ticking and
un-ticking the printed box. Done-marks live separately in `aa-lim-done`, keyed
`m12` / `w7` so multiple-choice 12 and written 7 never collide.

Written exercises 1–7 come from the book; 8–15 were written for this page and
are badged as extra practice.

## Derivatives and integrals

These two pages are the limits page generalised. `assets/js/math-lesson.js` is
the renderer for both: it reads whatever the bank file loaded before it puts on
`window.MATH_BANK`, so adding another maths topic is a bank file plus a copy of
the HTML with the script tag swapped — no new renderer.

```js
global.MATH_BANK = { key: 'deriv', lesson: LESSON, mc: [], exercises: WR };
```

`key` is the only thing that has to be unique: it namespaces the page's
localStorage (`aa-deriv-done`, `aa-deriv-picks`) so ticks on one page never
show up on another. An empty `mc` is fine — the renderer drops the
multiple-choice block and its heading when the bank has none, which is why the
derivative page shows a single flat list of exercises.

| page                       | bank                | lesson | mc | written |
|----------------------------|---------------------|-------:|---:|--------:|
| `grade-12-derivative.html` | `derivative-bank.js`|      8 |  0 |      13 |
| `grade-12-integral.html`   | `integral-bank.js`  |      8 | 18 |      10 |

Both share `complex.css` like limits does, and both are bilingual in the same
`{km,en}` shape.

**On sourcing.** The 120-page PDF was sampled, not transcribed end to end. The
lesson text on both pages is written for this site from the standard Grade 12
syllabus. Integral multiple-choice 8–14 are from the book; the rest of the
multiple choice, and all but two of the derivative exercises (those two carry
`src:'book'`), were written for this page and are badged as extra practice.
As with limits there is **no answer key**, so choices are recorded, never
marked.

## Differential equations

`grade-12-differential-equation.html` carries **two chapters of the workbook on
one page** — មេរៀនទី៦ (first order) and មេរៀនទី៧ (second order) — because for
the student they are one topic. It uses the shared `math-lesson.js` renderer
with `assets/js/differential-bank.js`.

| part      | contents |
|-----------|----------|
| `lesson`  | 8 sections: 5 first order, 3 second order |
| `mc`      | 36 — 1–20 first order, 21–36 second order |
| `exercises` | 62 — 1–30 first order, 31–62 second order |

Numbering runs straight through both halves so a done-mark can never mean two
different exercises. Written 56–62 are past national examination questions
(2014–2021) and carry `src: 'bac …'`.

Everything on this page is transcribed from the source workbook — the lesson,
all 36 multiple-choice questions and all 62 written exercises. As elsewhere,
the book has **no answer key**, so a chosen option is remembered but never
marked right or wrong.

## Probability

`grade-12-probability-exercise.html` now has **two panes** — Lesson and
Exercises — chosen by the tab bar at the top, so it borrows `complex.css` and
loads MathJax alongside its own `probability.css`.

- `assets/js/probability-lesson-bank.js` — the lesson, 14 sections in the same
  `{km,en}` block shape the other maths pages use: sets, the sum and product
  principles, the counting principle, permutations (plain, with repetition,
  circular, distinguishable), combinations and the binomial theorem, then
  sample space, the definition of probability and its properties, counting-based
  probability, conditional probability, independence, and total probability
  with Bayes.
- `assets/js/probability-bank.js` — 108 exercises as data, one object each:

```js
{ n: 12,                       // its number in the source book — a stable id
  q: 'the stem…',
  p: [ { k: 'ក', t: '…', s: [ { k: 'ក', t: '…' } ] } ] }   // s = nested parts
```

`n` 1–68 are the main collection (មេរៀនទី ៤ ប្រូបាប); 69–86 are the
supplementary set (ផ្ទៀកលំហាត់); 87–108 are the practice set that follows the
lesson above (មេរៀនទី៨ ប្រូបាប), of which 101–108 are past national
examination questions, 2014–2021.

**The running order is fixed, not random.** `probability-exercise.js` holds an
explicit `ORDER` array of book numbers — deliberately mixed so the exercises
are not in book order, but identical for every visitor, so a teacher can set
"number 12" and mean the same exercise for the whole class. Nothing is
reshuffled at runtime.

To reorder, edit `ORDER`. To add an exercise, give it the next free `n` in the
bank and add that `n` to `ORDER`; anything missing from `ORDER` is appended at
the end rather than dropped. Ticked-off exercises live in `localStorage`
(`aa-prob-done`) keyed on `n`, so progress survives any change to `ORDER`.

**Both languages.** The Khmer in `probability-bank.js` is the original;
`probability-bank-en.js` is an overlay keyed on the same `n`, so the two can
never drift apart — it only says the same exercise in English. Part labels
map ក→(a), ខ→(b), ១.→1. and so on. An exercise with no overlay entry stays in
Khmer rather than going blank, and the search box looks through both
languages whichever one is on screen. The page redraws on `aa:langchange`,
so the header's EN ⇄ ខ្មែរ control switches the exercises themselves, not
just the buttons around them.

The exercises were transcribed from PDFs that carry no text layer (the Khmer
is drawn as vector outlines), so the text was read from rendered pages rather
than extracted. Obvious typing slips in the source were normalised; one
duplicate survives on purpose — exercise 51 prints the same wording for parts
ក and ខ, and guessing the intent would have been worse than reproducing it.

The author card at the foot of the page uses `assets/img/nat-bunchhai.jpg`,
the same photo now shown in the credit block of the formula book.

## Chinese for Beginners

`chinese-beginner.html` is six modules — pinyin, sound, writing, numbers, basic
words and conversation — reachable two ways: the tab strip across the top and
the **contents rail on the left**, which lists each module with its sections
underneath. Every group folds away with its chevron, the whole rail folds away
with the Hide button, and the section you are reading is highlighted as you
scroll. From 1080px the rail is a sticky left column; below that it becomes a
folded block above the lesson, closed by default and closing again after you
pick something. Deep links work: `chinese-beginner#words` opens that module.

The rail is read back out of the panels after they render — the section titles
come from the `<h3>` of each `.zh-sec`, so it cannot drift from the page. That
is why all six panels are built on load rather than lazily.

The Pinyin module opens with a **sound-only chart**: tones, initials and finals
as bare squares with no example words, each one speakable. Because a voice
cannot read Latin letters, every square carries a hidden character with that
reading (`chart` in the bank) — `b` plays 波 "bo", `ang` plays 昂. Two finals,
`-eng` and `-ong`, never stand alone, so they are played inside 灯 and 东; the
footnote under the chart says so.

**Audio.** There are no audio files. Every speaker button calls the browser's
own speech synthesis (`speechSynthesis`) with the device's Chinese voice —
Chrome, Edge and Safari all have one, and the toolbar reports which voice was
found, or warns when there is none. Two rules matter when editing the content:

- Speak **characters, never pinyin.** A zh-CN voice reads 你好 correctly but
  would read `nǐ hǎo` as Latin letters. Every `data-say` value is hanzi.
- In `assets/js/chinese-bank.js`, `hz` may contain punctuation but `py` holds
  **only the pinyin syllables separated by single spaces**. The renderer stacks
  one syllable over one character, so the counts must match once punctuation is
  removed. If they do not, the phrase falls back to a single pinyin line above
  it — nothing breaks, but the alignment is lost.

**The writing pad** is two stacked canvases in a 米-grid: the target character
(drawn faint as the tracing guide) and the student's ink. Both are canvases
precisely so that **Check** can compare them as bitmaps:

- both are reduced to a 100×100 mask, each grown by a 5-cell tolerance;
- *coverage* = how much of the character the ink reached, *precision* = how
  much of the ink landed on it, and the score is their harmonic mean — so
  scribbling over the whole square cannot score well on coverage alone;
- the ink is then repainted **green** where it sits on the character and
  **red** where it strays, and the parts of the character never written are
  overlaid in **amber** — a missing stroke is invisible otherwise, because
  nothing the student drew was wrong.

The guide and the mask both go through `paintChar()`, so they always line up,
and the guide is redrawn once `document.fonts.ready` resolves — otherwise the
mask would be measuring a fallback font the student never saw.

It checks the *shape*, not the stroke order. The stroke count is reported
separately as a second signal, and the order itself is given in words next to
each character.

**Khmer.** Page furniture is translated through `data-i18n` keys (`zh.*` in
`i18n.js`). Word meanings and dialogue translations come from the `km` field on
each entry in the bank and swap over with the language toggle; the grammar
explanations are English, as on the other lesson pages.

## The formula book

`grade-12-math-formula.html` renders with MathJax 3 (CHTML) from a CDN. It uses
the shared site header and footer, with its own sticky toolbar underneath
holding the contents drawer, search and print buttons.

One thing to keep in mind when editing its inline `<style>`: MathJax sizes the
pieces of √ and ∛ — the surd glyph, the overbar it draws as a `border-top`, and
the cube-root index — with explicit widths and heights that assume the CSS
default `box-sizing: content-box`. The page's global `border-box` reset applies
to MathJax's own elements too and knocks those radicals out of alignment, so
there is a rule putting MathJax's subtree back on `content-box`. Don't remove
it, and don't add padding or borders to `mjx-*` elements.

The page's classes are namespaced `fx*` (`.fxcard`, `.fxhero`, `.fxstats`,
`.fxtag`) precisely because the shared stylesheet already owns `.card`, `.hero`,
`.stats` and `.tag`.
