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
contact.html      Contact — details, enquiry form, opening hours, map, quick FAQ
404.html          Not-found page
robots.txt        Crawler rules
sitemap.xml       Sitemap (update <loc> if the domain changes)
assets/css/style.css   Full design system — tokens, light/dark themes, components, responsive rules
assets/js/boot.js      Render-blocking: stamps the saved theme + language on <html> before first paint
assets/js/i18n.js      Khmer dictionary and the English ⇄ ខ្មែរ swap
assets/js/main.js      Theme + language wiring, nav, sticky header, scroll reveal, counters, form handling
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
