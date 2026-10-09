const paths = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  phone: '<path d="M8 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-4l-5-2-2 2a14 14 0 0 1-6-6l2-2-2-5Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  shield: '<path d="m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5l8-3Z"/><path d="m8 11 3 3 5-6"/>',
  bed: '<path d="M3 18V8m18 10V8M3 14h18M6 10V6h12v4M3 18v3m18-3v3"/><rect x="3" y="10" width="18" height="8" rx="2"/>',
  bug: '<path d="M8 8c0-5 8-5 8 0m-4 0v13M8 10 4 7m12 3 4-3M8 14H3m13 0h5M8 18l-4 3m12-3 4 3"/><rect x="8" y="8" width="8" height="13" rx="4"/>',
  home: '<path d="m3 10 9-8 9 8M5 9v12h14V9m-10 12v-8h6v8"/>',
  layers: '<path d="m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6"/>',
  more: '<circle cx="4" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>',
  chat: '<path d="M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.8-5A9 9 0 1 1 21 11Z"/><path d="M8 8h8m-8 4h5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18m-13 4h1m6 0h1"/>',
  leaf: '<path d="M20 3c0 12-4 17-11 17-8 0-8-10-1-13 4-2 8-2 12-4ZM5 21 16 9"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
  wa: '<path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.6a8.5 8.5 0 1 1 16.1-4.2Z"/><path d="m8 7 2 3-1 1c1 2 2 3 4 4l1-1 3 2c-1 3-4 2-6 1-3-2-6-7-3-10Z"/>'
};
export const icon = (name, cls = '') => `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.shield}</svg>`;
export const logo = `<svg class="brand-mark" viewBox="0 0 64 64" width="44" height="44" fill="none" aria-hidden="true"><path d="m8 24 24-18 24 18M12 24v15c0 11 20 20 20 20s20-9 20-20V24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M21 43c-7-17 8-20 23-23 0 16-6 27-21 25l15-18Z" fill="#00c868"/></svg>`;
