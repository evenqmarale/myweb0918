document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNav');
  const menu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) collapse.hide();
    });
  });

  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
});
