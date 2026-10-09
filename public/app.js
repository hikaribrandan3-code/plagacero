const nav = document.querySelector('#navigation');
const updateNav = () => nav.classList.toggle('compact', window.scrollY > 48);
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
const form = document.querySelector('#quote-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const error = document.querySelector('#form-error');
  const status = document.querySelector('#form-status');
  error.textContent = '';
  status.textContent = '';
  const data = Object.fromEntries(new FormData(form));
  const required = ['nombre', 'telefono', 'zona', 'plaga', 'descripcion', 'lugar', 'mascotas'];
  for (const name of required) {
    if (!data[name]?.trim()) {
      error.textContent = 'Completá los campos obligatorios para preparar tu consulta.';
      form.elements[name].focus();
      return;
    }
  }
  if (data.telefono.replace(/\D/g, '').length < 6) {
    error.textContent = 'Revisá tu número de teléfono: debe incluir al menos 6 dígitos.';
    form.elements.telefono.focus();
    return;
  }
  const message = [
    'Hola, quiero consultar por un servicio de control de plagas en Córdoba Capital.', '',
    `Nombre: ${data.nombre.trim()}`, `Teléfono: ${data.telefono.trim()}`,
    `Zona: ${data.zona.trim()}`, `Tipo de lugar: ${data.lugar}`,
    `Problema/plaga: ${data.plaga}`, `Mascotas: ${data.mascotas}`,
    ...(data.tiempo.trim() ? [`Hace cuánto: ${data.tiempo.trim()}`] : []),
    `Descripción: ${data.descripcion.trim()}`
  ].join('\n');
  const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(message)}`;
  // The browser opens a draft only; the visitor chooses whether to send it.
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

// Keep the floating action from obscuring the form or the hero action.
const floating = document.querySelector(".mobile-contact");
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) entry.target.dataset.inView = String(entry.isIntersecting);
  floating.classList.toggle("hidden", [document.querySelector(".hero"), form].some(el => el.dataset.inView === "true"));
}, { threshold: 0.08 });
observer.observe(document.querySelector(".hero"));
observer.observe(form);
