// Année footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.style.color = '');
      link.style.color = '#c9a84c';
    }
  });
});

// Fade-in sections au scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.offer, .pain, .inc, .steps li, .compare .card, .faq details').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  io.observe(el);
});

// Message de confirmation après envoi (redirection FormSubmit)
if (new URLSearchParams(window.location.search).get('sent') === '1') {
  const note = document.getElementById('formNote');
  if (note) note.textContent = 'Message reçu — je te réponds sous 2h.';
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}
