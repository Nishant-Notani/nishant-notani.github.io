/* =====================================================
   Nishant Notani — Portfolio scripts
   - Theme toggle (light/dark, with localStorage persistence)
   - Animated typing in hero
   - IntersectionObserver scroll-reveal
   - Mobile nav toggle
   - Year stamp in footer
   ===================================================== */

(function () {
  'use strict';

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  // Initial theme: stored preference > OS preference > light
  const stored = (function () {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Animated typing in hero ---------- */
  const target = document.getElementById('typingTarget');
  if (target) {
    const phrases = [
      'data lakehouses',
      'real-time pipelines',
      'on Microsoft Fabric',
      'with Snowflake & Iceberg',
      'that scale to 1B records/day'
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        target.textContent = phrase.slice(0, charIdx);
        if (charIdx === phrase.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
        setTimeout(tick, 60 + Math.random() * 40);
      } else {
        charIdx--;
        target.textContent = phrase.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 300);
          return;
        }
        setTimeout(tick, 30);
      }
    }
    tick();
  }

  /* ---------- Scroll-reveal via IntersectionObserver ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Mobile nav ---------- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    // Close menu after clicking a link
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
