/* Alpha Academy Cambodia — the registration gate
   ---------------------------------------------------------------------------
   Asks a student for their name and email before the HSK tests will open, and
   sends those details on to the academy so a real person can follow up.

       AAGate.protect({
         mount:  element the sign-up card is drawn into,
         onOpen: called once the student is registered — draw your page here,
         what:   what is being unlocked, for the card's heading
       });

   BE CLEAR ABOUT WHAT THIS IS. This site is static — there is no server and no
   database — so this is a sign-up, not a login. It remembers the student on
   this device and it sends you their details, which is what makes it worth
   having. It does NOT stop a determined visitor: anyone who opens the browser
   console can clear the flag and walk straight in. If the tests ever need to
   be genuinely restricted, that needs real accounts (Firebase Auth, Supabase
   or similar) rather than anything that can live in this file.

   WHERE THE DETAILS GO. Exactly where the contact form's go, and by the same
   two routes: POST to FORM_ENDPOINT if one is set, otherwise open the
   visitor's mail client pre-filled. Set the endpoint once, in main.js and
   here, and both start posting silently.                                     */
(function (global) {
  'use strict';

  var FORM_ENDPOINT = '';        // e.g. 'https://formspree.io/f/xxxxxx'
  var MAIL_TO = 'alphaacademycambodia@gmail.com';
  var KEY = 'aa-user';

  function lang() { return (global.AAi18n && global.AAi18n.get() === 'km') ? 'km' : 'en'; }
  function t(o) { return (lang() === 'km' && o && o.km) ? o.km : (o ? o.en : ''); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var T = {
    h:    { en:'Register to start the tests', km:'ចុះឈ្មោះដើម្បីចាប់ផ្តើមធ្វើតេស្ត' },
    p:    { en:'The HSK tests are free. We only ask who you are so our tutors know who is studying with us — and so we can help if you get stuck.',
            km:'តេស្ត HSK គឺឥតគិតថ្លៃ។ យើងសួរតែថាអ្នកជានរណា ដើម្បីឲ្យគ្រូរបស់យើងដឹងថានរណាកំពុងរៀនជាមួយយើង — និងដើម្បីជួយពេលអ្នកជាប់គាំង។' },
    name: { en:'Your name', km:'ឈ្មោះរបស់អ្នក' },
    email:{ en:'Email', km:'អ៊ីមែល' },
    phone:{ en:'Phone or Telegram (optional)', km:'ទូរស័ព្ទ ឬ Telegram (ស្រេចចិត្ត)' },
    go:   { en:'Start learning', km:'ចាប់ផ្តើមរៀន' },
    back: { en:'Back to the tests', km:'ត្រឡប់ទៅតេស្ត' },
    errName:  { en:'Please tell us your name.', km:'សូមប្រាប់ឈ្មោះរបស់អ្នក។' },
    errEmail: { en:'Please enter a valid email address.', km:'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឲ្យបានត្រឹមត្រូវ។' },
    priv: { en:'We use this to contact you about lessons and nothing else. No password, no newsletter.',
            km:'យើងប្រើវាដើម្បីទាក់ទងអ្នកអំពីមេរៀនតែប៉ុណ្ណោះ។ គ្មានពាក្យសម្ងាត់ គ្មានព្រឹត្តិបត្រព័ត៌មានទេ។' },
    hi:   { en:'Signed in as', km:'ចូលក្នុងនាម' },
    out:  { en:'Not you?', km:'មិនមែនអ្នក?' }
  };

  function saved() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function save(u) { try { localStorage.setItem(KEY, JSON.stringify(u)); } catch (e) {} }
  function forget() { try { localStorage.removeItem(KEY); } catch (e) {} }

  /* Deliberately loose. A stricter pattern rejects real addresses far more
     often than it catches fake ones, and a fake address costs nothing here. */
  function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

  function send(u) {
    var body = [
      'New registration from the HSK tests',
      '',
      'Name:  ' + u.name,
      'Email: ' + u.email,
      'Phone: ' + (u.phone || '—'),
      'Page:  ' + location.href,
      '',
      '— Sent from alphaacademycambodia.com'
    ].join('\n');

    if (FORM_ENDPOINT) {
      var fd = new FormData();
      fd.append('name', u.name);
      fd.append('email', u.email);
      fd.append('phone', u.phone || '');
      fd.append('message', body);
      fetch(FORM_ENDPOINT, { method:'POST', body:fd, headers:{ Accept:'application/json' } })
        .then(null, function () {});      /* a failed POST must not block entry */
      return;
    }

    /* No endpoint set yet, so hand it to the mail client — but in a new tab,
       because navigating away mid-registration would lose the student. */
    var href = 'mailto:' + MAIL_TO +
      '?subject=' + encodeURIComponent('New HSK registration: ' + u.name) +
      '&body=' + encodeURIComponent(body);
    try { global.open(href, '_blank'); } catch (e) {}
  }

  function card(mount, what, done) {
    mount.innerHTML =
      '<div class="aa-gate">' +
        '<div class="aa-gate-in">' +
          '<span class="em" aria-hidden="true">🔑</span>' +
          '<h2>' + t(T.h) + '</h2>' +
          '<p class="lede">' + t(T.p) + '</p>' +
          '<form novalidate>' +
            '<label><span>' + t(T.name) + '</span>' +
              '<input type="text" name="name" autocomplete="name" required></label>' +
            '<label><span>' + t(T.email) + '</span>' +
              '<input type="email" name="email" autocomplete="email" inputmode="email" required></label>' +
            '<label><span>' + t(T.phone) + '</span>' +
              '<input type="tel" name="phone" autocomplete="tel"></label>' +
            /* Bots fill hidden fields; people do not. */
            '<input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="aa-hp">' +
            '<p class="err" role="alert" hidden></p>' +
            '<button type="submit">' + t(T.go) + ' →</button>' +
            '<p class="priv">' + t(T.priv) + '</p>' +
          '</form>' +
        '</div>' +
      '</div>';

    var form = mount.querySelector('form');
    var err = mount.querySelector('.err');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.company.value) { return; }                 /* honeypot */

      var u = {
        name:  form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        at:    new Date().toISOString()
      };

      if (!u.name) { fail(t(T.errName), form.name); return; }
      if (!emailOk(u.email)) { fail(t(T.errEmail), form.email); return; }

      err.hidden = true;
      save(u);
      send(u);
      done(u);
    });

    function fail(msg, field) {
      err.textContent = msg;
      err.hidden = false;
      field.focus();
    }
  }

  /* The small "signed in as …" line the page can show once someone is in. */
  function badge(user) {
    return '<p class="aa-who">' + t(T.hi) + ' <b>' + esc(user.name) + '</b> · ' +
           '<button type="button" data-aa-forget="1">' + t(T.out) + '</button></p>';
  }

  function protect(cfg) {
    var mount = cfg.mount;
    if (!mount) { return; }

    function open(user) {
      mount.innerHTML = '';
      cfg.onOpen(user);
    }

    var u = saved();
    if (u && u.email) { open(u); } else { card(mount, cfg.what, open); }

    /* Re-drawing on a language change keeps the card in step with the header
       switch, but only while the gate is still up — once the page is open it
       owns its own repaint. */
    document.addEventListener('aa:langchange', function () {
      if (!saved()) { card(mount, cfg.what, open); }
    });
  }

  global.AAGate = {
    protect: protect,
    user: saved,
    forget: forget,
    badge: badge
  };
})(window);
