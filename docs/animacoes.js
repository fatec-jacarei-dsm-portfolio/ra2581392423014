/* animacoes.js — adicione <script src="animacoes.js"></script> antes de </body> */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Barra de progresso de rolagem
  const bar = document.createElement('div');
  bar.id = 'scrollProgress';
  document.body.appendChild(bar);

  const header = document.querySelector('header');
  let ticking = false;
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
    if (header) header.classList.toggle('scrolled', scrollY > 40);
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Link ativo no menu conforme a seção visível
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting && map.has(e.target.id)) {
        links.forEach(l => l.classList.remove('active'));
        map.get(e.target.id).classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  // Contagem animada nos números das estatísticas
  const nums = document.querySelectorAll('.stat-number');
  const counter = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const el = e.target, m = el.dataset.final.match(/^(\d+)(.*)$/);
      if (!m || reduce) { el.textContent = el.dataset.final; return; }
      const end = +m[1], t0 = performance.now(), dur = 1400;
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + m[2];
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  nums.forEach(n => { n.dataset.final = n.textContent.trim(); n.textContent = '0'; counter.observe(n); });

  // Spotlight que segue o mouse nos cards
  document.addEventListener('pointermove', e => {
    const c = e.target.closest('.academic-card, .pro-card, .contact-card, .stat-item');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
})();
