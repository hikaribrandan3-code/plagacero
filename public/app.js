const nav = document.querySelector('#navigation');
const floating = document.querySelector('.mobile-contact');
const form = document.querySelector('#quote-form');
let ticking = false;
const updateChrome = () => {
  const y = window.scrollY;
  nav.classList.toggle('compact', y > 48 && y < 150);
  nav.classList.toggle('scrolled-away', y >= 150);
  const inHero = document.querySelector('.hero').getBoundingClientRect().bottom > 130;
  const inForm = form.getBoundingClientRect().top < window.innerHeight && form.getBoundingClientRect().bottom > 0;
  floating.classList.toggle('visible', y >= 200 && !inHero && !inForm);
  ticking = false;
};
window.addEventListener('scroll', () => {
  if (!ticking) { window.requestAnimationFrame(updateChrome); ticking = true; }
}, { passive: true });
updateChrome();
form.addEventListener('submit', event => {
  event.preventDefault();
  const error = document.querySelector('#form-error');
  const status = document.querySelector('#form-status');
  error.textContent = '';
  status.textContent = '';
  const data = Object.fromEntries(new FormData(form));
  const required = ['nombre', 'zona', 'plaga'];
  for (const name of required) {
    if (!data[name]?.trim()) {
      error.textContent = 'Completá los campos obligatorios para preparar tu consulta.';
      form.elements[name].focus();
      return;
    }
  }
  const message = [
    'Hola, quiero consultar por un servicio de control de plagas en Córdoba Capital.', '',
    `Nombre: ${data.nombre.trim()}`,
    `Zona: ${data.zona.trim()}`,
    `Problema/plaga: ${data.plaga}`,
    ...(data.descripcion?.trim() ? [`Descripción: ${data.descripcion.trim()}`] : [])
  ].join('\n');
  const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(message)}`;
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
  status.textContent = 'Tu consulta está preparada. Revisala y enviala desde WhatsApp.';
  const fallback = document.createElement('a');
  fallback.href = url;
  fallback.target = '_blank';
  fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'Si no se abrió, tocá acá para ir a WhatsApp.';
  status.append(document.createElement('br'), fallback);
});
