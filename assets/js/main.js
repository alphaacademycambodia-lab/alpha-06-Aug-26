/* Alpha Academy Cambodia — site behaviour
   Vanilla JS, no dependencies. Safe to load on every page. */
(function () {
  'use strict';

  /* --------------------------------------------------------- Theme switch
     boot.js has already stamped data-theme on <html>; here we only wire the
     button and remember the choice.                                        */
  var root = document.documentElement;

  function currentTheme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  function syncThemeButtons() {
    var dark = currentTheme() === 'dark';
    document.querySelectorAll('.theme-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(dark));
    });
  }

  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('aa-theme', next); } catch (e) {}
      syncThemeButtons();
      document.dispatchEvent(new CustomEvent('aa:themechange', { detail: { theme: next } }));
    });
  });
  syncThemeButtons();

  // Follow the OS only while the visitor has never made an explicit choice.
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onOS = function (e) {
      var stored = null;
      try { stored = localStorage.getItem('aa-theme'); } catch (err) {}
      if (stored) return;
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      syncThemeButtons();
    };
    if (mq.addEventListener) mq.addEventListener('change', onOS);
    else if (mq.addListener) mq.addListener(onOS);
  }

  /* ------------------------------------------------------ Language switch */
  if (window.AAi18n) {
    window.AAi18n.set(window.AAi18n.saved() || 'en', false);

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.AAi18n.set(btn.getAttribute('data-lang'));
      });
    });
  }

  /* ---------------------------------------------------- Mobile navigation */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.style.overflow = !open && window.innerWidth <= 900 ? 'hidden' : '';
    });

    // Close after tapping a link on mobile
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && window.innerWidth <= 900) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ------------------------------------------ Sticky header shadow + Back-to-top */
  var header = document.querySelector('.site-header');
  var topBtn = document.querySelector('.fab--top');

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (topBtn) topBtn.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------ Reveal on scroll */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealables.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 90) + 'ms';
      io.observe(el);
    });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------- Animated counters */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var duration = 1400;

        function tick(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ----------------------------------------------------- Current year(s) */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ------------------------------------------------------- Contact form
     No backend: we validate, then hand the message to the visitor's mail
     client pre-filled. Swap the handler for a real endpoint (Formspree,
     Google Forms, Apps Script) by changing FORM_ENDPOINT below.          */
  var FORM_ENDPOINT = '';        // e.g. 'https://formspree.io/f/xxxxxx'
  var MAIL_TO = 'alphaacademycambodia@gmail.com';

  var form = document.getElementById('enquiry-form');
  if (form) {
    var status = document.getElementById('form-status');

    function setInvalid(field, invalid) {
      var wrap = field.closest('.field');
      if (wrap) wrap.classList.toggle('is-invalid', invalid);
    }

    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('input', function () { setInvalid(el, false); });
      el.addEventListener('blur', function () {
        if (el.required && !el.value.trim()) setInvalid(el, true);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var ok = true;
      form.querySelectorAll('[required]').forEach(function (el) {
        var valid = el.value.trim() !== '' && el.checkValidity();
        setInvalid(el, !valid);
        if (!valid && ok) { el.focus(); ok = false; }
      });
      if (!ok) return;

      var data = new FormData(form);
      var get = function (k) { return (data.get(k) || '').toString().trim(); };

      // Honeypot — bots fill hidden fields, humans don't.
      if (get('company')) return;

      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function () { showSuccess(); form.reset(); })
          .catch(function () { openMailClient(get); });
        return;
      }

      openMailClient(get);
      showSuccess();
    });

    function openMailClient(get) {
      var subject = 'Tutoring enquiry — ' + (get('subjectArea') || 'General') + ' (' + (get('name') || 'Website') + ')';
      var body = [
        'Name: ' + get('name'),
        'Phone / Telegram: ' + get('phone'),
        'Email: ' + get('email'),
        'Student level: ' + get('level'),
        'Subject(s): ' + get('subjectArea'),
        'Preferred format: ' + get('format'),
        'Preferred schedule: ' + get('schedule'),
        '',
        'Message:',
        get('message'),
        '',
        '— Sent from alphaacademycambodia.com'
      ].join('\n');

      window.location.href = 'mailto:' + MAIL_TO +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    }

    function showSuccess() {
      if (!status) return;
      status.classList.add('is-visible');
      status.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
})();
