const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); }
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => { if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page'); link.addEventListener('click', closeMenu); });
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
document.querySelector('#contact-form')?.addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const data = new FormData(form); const message = `Hello Ahmad, I'm ${String(data.get('name')).trim()}.\nEmail: ${String(data.get('email')).trim()}\n\n${String(data.get('message')).trim()}`; window.location.href = 'https://wa.me/6282296861147?text=' + encodeURIComponent(message); });

// Reveal only off-screen content; keep everything visible without JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
 document.querySelectorAll('.intro-grid, .section-heading, .website-card, .project, .service-list article, .about-body, .services-strip').forEach(element => { if (element.getBoundingClientRect().top > window.innerHeight) { element.classList.add('reveal-ready'); observer.observe(element); } });
 motionPreference.addEventListener('change', event => { if (event.matches) { document.querySelectorAll('.reveal-ready').forEach(el => el.classList.add('is-visible')); observer.disconnect(); } });
}
