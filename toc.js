const tocLinks = document.querySelectorAll('.toc-nav a');
const tocTargets = Array.from(tocLinks)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
const tocIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = '#' + entry.target.id;
    tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
tocTargets.forEach(el => tocIo.observe(el));
