/* Alpha Academy Cambodia — shared quiz engine
   ---------------------------------------------------------------------------
   One engine drives both the tense trainer and the grammar notes, so the two
   behave identically. It renders its own markup into a container you give it;
   the styling lives in assets/css/quiz.css.

   Usage
   -----
     AAQuiz.start({
       mount:        element the quiz is drawn into,
       questions:    [ { q, opts:[4], ans:0-3, why } ],
       badge:        small pill text, e.g. 'Easy'      (optional)
       title:        heading, e.g. 'Chapter 1: Articles',
       subtitle:     line under the results heading    (optional)
       onExit:       called when the student leaves the quiz,
       exitLabel:    label for the two exit buttons    (optional)
       onRetake:     called to restart the same unit   (optional)
       onNextUnit:   called for the "next" button      (optional)
       nextLabel:    label for that button             (optional)
       onFinish:     fn({ total, correct, wrong, skipped, pct, seconds })
     });

   Three navigation rules the student can rely on:
     · Back      always available except on the first question. Answers you
                 have already given stay visible and locked.
     · Skip      always available. The question is recorded as skipped and can
                 still be answered later by going back to it.
     · Timer     starts on the first render and runs until the last question is
                 submitted. It is paused if the student leaves the quiz.        */
(function (global) {
  'use strict';

  var LETTERS = 'ABCD';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Draw the blank as a rule rather than three underscores. */
  function withGap(text) {
    return esc(text).replace(/_{2,}/g, '<span class="gap"></span>');
  }

  function clock(sec) {
    var h = Math.floor(sec / 3600),
        m = Math.floor((sec % 3600) / 60),
        s = sec % 60,
        pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return h > 0 ? h + ':' + pad(m) + ':' + pad(s) : pad(m) + ':' + pad(s);
  }

  /* answers[i] is null = untouched, -1 = skipped, 0-3 = the option chosen. */
  var SKIPPED = -1;

  function Quiz(cfg) {
    this.cfg = cfg;
    this.qs = cfg.questions || [];
    this.i = 0;
    this.answers = new Array(this.qs.length).fill(null);
    this.seconds = 0;
    this.ticker = null;
    this.finished = false;
    this.build();
    this.startClock();
    this.paintQuestion();
  }

  Quiz.prototype.build = function () {
    var c = this.cfg;
    c.mount.innerHTML =
      '<div class="aq-card" data-aq="play">' +
        '<div class="aq-head">' +
          '<div>' +
            (c.badge ? '<span class="aq-pill" data-aq="badge"></span>' : '') +
            '<h2 data-aq="title"></h2>' +
          '</div>' +
          '<div class="aq-stats">' +
            '<div><small>Question</small><b data-aq="count">1 / 1</b></div>' +
            '<div class="aq-clock"><small>Time</small><b data-aq="clock">00:00</b></div>' +
          '</div>' +
        '</div>' +
        '<div class="aq-bar"><i data-aq="bar"></i></div>' +
        '<p class="aq-q" data-aq="q"></p>' +
        '<div class="aq-opts" data-aq="opts"></div>' +
        '<div class="aq-why aq-hide" data-aq="why"><b data-aq="verdict"></b><p data-aq="text"></p></div>' +
        '<div class="aq-foot">' +
          '<button class="aq-exit" type="button" data-aq="exit">&larr; Leave quiz</button>' +
          '<span class="spacer"></span>' +
          '<button class="aq-nav" type="button" data-aq="back">&larr; Back</button>' +
          '<button class="aq-nav" type="button" data-aq="skip">Skip &rarr;</button>' +
          '<button class="aq-next" type="button" data-aq="next">Next question</button>' +
          '<p class="aq-hint">Keyboard: A&ndash;D to answer &middot; Enter for next &middot; S to skip &middot; Backspace to go back.</p>' +
        '</div>' +
      '</div>' +

      '<div class="aq-card aq-done aq-hide" data-aq="done">' +
        (c.badge ? '<span class="aq-pill" data-aq="dbadge"></span>' : '') +
        '<h2>Test complete</h2>' +
        '<p class="sub" data-aq="dsub"></p>' +
        '<div class="aq-grid">' +
          '<div class="aq-donut">' +
            '<svg viewBox="0 0 120 120" width="200" height="200" role="img" aria-label="Score chart">' +
              '<circle cx="60" cy="60" r="52" fill="none" stroke="var(--ink-100)" stroke-width="14"/>' +
              '<circle data-aq="arc" cx="60" cy="60" r="52" fill="none" stroke="var(--brand-500)" stroke-width="14" ' +
                'stroke-linecap="round" stroke-dasharray="0 999" style="transition:stroke-dasharray .7s var(--ease)"/>' +
            '</svg>' +
            '<div class="mid"><b data-aq="pct">0%</b><small>Score</small></div>' +
          '</div>' +
          '<div class="aq-metrics">' +
            '<div><span>Total questions</span><b data-aq="mTotal">0</b></div>' +
            '<div><span>Correct</span><b data-aq="mOk" style="color:var(--success-500)">0</b></div>' +
            '<div><span>Incorrect</span><b data-aq="mNo" style="color:#dc2626">0</b></div>' +
            '<div><span>Skipped</span><b data-aq="mSkip" style="color:var(--accent-500)">0</b></div>' +
            '<div><span>Time taken</span><b data-aq="mTime">00:00</b></div>' +
            '<div><span>Average per question</span><b data-aq="mAvg">0s</b></div>' +
            '<div><span>Rating</span><b data-aq="mRate">&mdash;</b></div>' +
          '</div>' +
        '</div>' +
        '<div class="aq-btns">' +
          (c.onRetake ? '<button class="aq-next" type="button" data-aq="retake">Retake this test</button>' : '') +
          (c.onNextUnit ? '<button class="aq-nav" type="button" data-aq="nextUnit"></button>' : '') +
          '<button class="aq-nav" type="button" data-aq="dexit"></button>' +
        '</div>' +
        '<div class="aq-review aq-hide" data-aq="review"><h3>Questions to look at again</h3><ol data-aq="rlist"></ol></div>' +
      '</div>';

    var self = this;
    this.el = {};
    c.mount.querySelectorAll('[data-aq]').forEach(function (n) {
      self.el[n.getAttribute('data-aq')] = n;
    });

    if (c.badge) { this.el.badge.textContent = c.badge; this.el.dbadge.textContent = c.badge; }
    this.el.title.textContent = c.title || '';
    this.el.dsub.textContent = c.subtitle || c.title || '';
    this.el.exit.innerHTML = '&larr; ' + (c.exitLabel || 'Leave quiz');
    this.el.dexit.textContent = c.exitLabel || 'Back to the list';
    if (c.onNextUnit) { this.el.nextUnit.textContent = c.nextLabel || 'Next'; }

    this.el.opts.addEventListener('click', function (e) {
      var b = e.target.closest('.aq-opt');
      if (b) { self.answer(+b.dataset.i); }
    });
    this.el.back.addEventListener('click', function () { self.go(-1); });
    this.el.skip.addEventListener('click', function () { self.skip(); });
    this.el.next.addEventListener('click', function () { self.next(); });
    this.el.exit.addEventListener('click', function () { self.leave(); });
    this.el.dexit.addEventListener('click', function () { self.leave(); });
    if (c.onRetake) { this.el.retake.addEventListener('click', function () { c.onRetake(); }); }
    if (c.onNextUnit) { this.el.nextUnit.addEventListener('click', function () { c.onNextUnit(); }); }

    this.onKey = function (e) {
      if (self.finished || !document.body.contains(c.mount)) { return; }
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) { return; }
      var k = (e.key || '').toUpperCase(), i = LETTERS.indexOf(k);
      if (i > -1 && i < self.qs[self.i].opts.length) { e.preventDefault(); self.answer(i); }
      else if (e.key === 'Enter') { if (!self.el.next.disabled) { e.preventDefault(); self.next(); } }
      else if (k === 'S') { e.preventDefault(); self.skip(); }
      else if (e.key === 'Backspace') { e.preventDefault(); self.go(-1); }
    };
    document.addEventListener('keydown', this.onKey);
  };

  /* ----------------------------------------------------------- the clock */
  Quiz.prototype.startClock = function () {
    var self = this;
    this.stopClock();
    this.ticker = setInterval(function () {
      self.seconds++;
      self.el.clock.textContent = clock(self.seconds);
    }, 1000);
  };
  Quiz.prototype.stopClock = function () {
    if (this.ticker) { clearInterval(this.ticker); this.ticker = null; }
  };

  /* -------------------------------------------------------- one question */
  Quiz.prototype.paintQuestion = function () {
    var q = this.qs[this.i], total = this.qs.length, given = this.answers[this.i];

    this.el.count.textContent = (this.i + 1) + ' / ' + total;
    this.el.bar.style.width = (this.i / total * 100) + '%';
    this.el.q.innerHTML = '<span class="n">' + (this.i + 1) + '.</span> ' + withGap(q.q);

    this.el.opts.innerHTML = q.opts.map(function (o, k) {
      return '<button class="aq-opt" type="button" data-i="' + k + '">' +
               '<span class="key">' + LETTERS[k] + '</span>' +
               '<span class="txt">' + esc(o) + '</span>' +
               '<span class="mark"></span>' +
             '</button>';
    }).join('');

    this.el.back.disabled = this.i === 0;
    this.el.skip.textContent = (this.i === total - 1) ? 'Skip and finish' : 'Skip →';

    if (given !== null && given !== SKIPPED) {
      this.lock(given);
    } else {
      this.el.why.className = 'aq-why aq-hide';
      this.el.next.disabled = true;
      this.el.next.textContent = (this.i === total - 1) ? 'Finish and see score' : 'Next question';
      if (given === SKIPPED) {
        this.el.why.className = 'aq-why skip';
        this.el.verdict.textContent = 'You skipped this one';
        this.el.verdict.style.color = 'var(--accent-500)';
        this.el.text.textContent = 'Choose an answer now, or skip past it again — it stays marked as skipped until you answer.';
      }
    }
  };

  /* Redraw an already-answered question in its locked state. */
  Quiz.prototype.lock = function (pick) {
    var q = this.qs[this.i], ok = pick === q.ans;

    this.el.opts.querySelectorAll('.aq-opt').forEach(function (btn, k) {
      btn.disabled = true;
      if (k === q.ans) {
        btn.classList.add('is-right');
        btn.querySelector('.mark').textContent = '✓';
      } else if (k === pick) {
        btn.classList.add('is-wrong');
        btn.querySelector('.mark').textContent = '✗';
      } else {
        btn.classList.add('is-dim');
      }
    });

    this.el.why.className = 'aq-why ' + (ok ? 'ok' : 'no');
    this.el.verdict.textContent = ok ? 'Correct' : 'Not quite — the answer is ' + LETTERS[q.ans] + '.';
    this.el.verdict.style.color = ok ? 'var(--success-500)' : '#dc2626';
    this.el.text.textContent = q.why;

    this.el.next.disabled = false;
    this.el.next.textContent = (this.i === this.qs.length - 1) ? 'Finish and see score' : 'Next question';
  };

  Quiz.prototype.answer = function (pick) {
    var given = this.answers[this.i];
    if (given !== null && given !== SKIPPED) { return; }   // already locked
    this.answers[this.i] = pick;
    this.lock(pick);
  };

  /* ------------------------------------------------------------ movement */
  Quiz.prototype.skip = function () {
    if (this.answers[this.i] === null) { this.answers[this.i] = SKIPPED; }
    this.go(1);
  };

  Quiz.prototype.next = function () { this.go(1); };

  Quiz.prototype.go = function (step) {
    var to = this.i + step;
    if (to < 0) { return; }
    if (to >= this.qs.length) { this.finish(); return; }
    this.i = to;
    this.paintQuestion();
    this.cfg.mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  Quiz.prototype.leave = function () {
    this.destroy();
    if (this.cfg.onExit) { this.cfg.onExit(); }
  };

  /* ------------------------------------------------------------- results */
  Quiz.prototype.finish = function () {
    this.finished = true;
    this.stopClock();

    var total = this.qs.length, ok = 0, skipped = 0, self = this;
    this.answers.forEach(function (a, k) {
      if (a === SKIPPED || a === null) { skipped++; }
      else if (a === self.qs[k].ans) { ok++; }
    });
    var wrong = total - ok - skipped;
    var pct = Math.round(ok / total * 100);

    this.el.mTotal.textContent = total;
    this.el.mOk.textContent = ok;
    this.el.mNo.textContent = wrong;
    this.el.mSkip.textContent = skipped;
    this.el.mTime.textContent = clock(this.seconds);
    this.el.mAvg.textContent = Math.round(this.seconds / total) + 's';
    this.el.pct.textContent = pct + '%';

    var rate = pct >= 90 ? 'Excellent' : pct >= 70 ? 'Good' : pct >= 50 ? 'Fair' : 'Needs review';
    this.el.mRate.textContent = rate;
    this.el.mRate.style.color = pct >= 70 ? 'var(--success-500)' : pct >= 50 ? 'var(--brand-600)' : '#dc2626';

    var circ = 2 * Math.PI * 52;
    this.el.arc.setAttribute('stroke-dasharray', (circ * pct / 100).toFixed(1) + ' ' + circ.toFixed(1));

    var rows = [];
    this.answers.forEach(function (a, k) {
      var q = self.qs[k];
      if (a !== null && a !== SKIPPED && a === q.ans) { return; }
      var yours = (a === null || a === SKIPPED)
        ? '<span class="skipped">Skipped</span>'
        : '<span class="yours">Your answer: ' + esc(q.opts[a]) + '</span>';
      rows.push('<li>' + withGap(q.q) + '<br>' + yours +
                ' &nbsp;&middot;&nbsp; <span class="right">Correct: ' + esc(q.opts[q.ans]) + '</span>' +
                '<br><span class="note">' + esc(q.why) + '</span></li>');
    });
    this.el.review.classList.toggle('aq-hide', rows.length === 0);
    this.el.rlist.innerHTML = rows.join('');

    this.el.play.classList.add('aq-hide');
    this.el.done.classList.remove('aq-hide');
    this.cfg.mount.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (this.cfg.onFinish) {
      this.cfg.onFinish({
        total: total, correct: ok, wrong: wrong, skipped: skipped,
        pct: pct, seconds: this.seconds
      });
    }
  };

  Quiz.prototype.destroy = function () {
    this.stopClock();
    this.destroyed = true;
    document.removeEventListener('keydown', this.onKey);
    this.cfg.mount.innerHTML = '';
  };

  var current = null;

  global.AAQuiz = {
    start: function (cfg) {
      if (current) { current.destroy(); }
      current = new Quiz(cfg);
      return current;
    },
    stop: function () {
      if (current) { current.destroy(); current = null; }
    },
    /* Used when the student flips to the lesson tab in the middle of a
       test — it would be unfair to keep the clock running while they read. */
    pause: function () {
      if (current && !current.finished) { current.stopClock(); }
    },
    resume: function () {
      if (current && !current.finished) { current.startClock(); }
    },
    /* True while the quiz markup is still on the page — including the
       results screen, so switching tabs after finishing does not throw the
       score away. */
    hasSession: function () {
      return !!(current && !current.destroyed);
    },
    isRunning: function () {
      return !!(current && !current.destroyed && !current.finished);
    },
    formatTime: clock
  };
})(window);
