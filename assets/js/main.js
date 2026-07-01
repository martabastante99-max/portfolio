// ── Scanner card score animation ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const scores = document.querySelectorAll('.score[data-target]');
  const verdict = document.getElementById('verdict');

  if (!scores.length) return;

  const animateScore = (el, delay) => {
    const target = parseInt(el.dataset.target, 10);
    setTimeout(() => {
      let current = 0;
      const step = () => {
        current = Math.min(current + 2, target);
        el.textContent = current + '%';
        if (current < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
  };

  scores.forEach((el, i) => animateScore(el, 400 + i * 300));

  // reveal verdict after all scores done
  setTimeout(() => {
    if (verdict) {
      verdict.textContent = 'STRONG BUY';
      verdict.style.animation = 'none';
    }
  }, 400 + (scores.length - 1) * 300 + 1200);

  // ── Smooth active nav link ──────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id
            ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
});
