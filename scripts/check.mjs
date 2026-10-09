import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {business as b,seo} from '../src/business.mjs';
const build = env => execFileSync(process.execPath,['scripts/build.mjs'],{env:{...process.env,...env},stdio:'pipe'});
try {
  build({SITE_URL:'https://seo-check.invalid',VERCEL_ENV:'production'});
  const html=await readFile('dist/index.html','utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1);
  assert(html.includes('lang="es-AR"'));
  assert(html.includes('rel="canonical" href="https://seo-check.invalid/"'));
  for(const name of ['og:url','og:image','og:title','og:description','og:locale','og:image:width','og:image:height','og:image:type'])assert(html.includes(`property="${name}"`),name);
  for(const name of ['twitter:card','twitter:title','twitter:description','twitter:image'])assert(html.includes(`name="${name}"`),name);
  assert(html.includes('https://seo-check.invalid'+seo.image));
  assert(!html.includes('localhost'));
  const data=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(data[0]['@type'],'ProfessionalService');
  assert.equal(data[0].telephone,b.telephone);
  assert.equal(data[0].areaServed.name,'Córdoba Capital');
  assert.equal(data[0].hasOfferCatalog.itemListElement.length,b.services.length);
  for(const field of ['address','geo','aggregateRating','review','openingHours','openingHoursSpecification','priceRange'])assert(!Object.hasOwn(data[0],field),field);
  assert.equal(data.length,1);
  assert(!html.includes('FAQPage'));
  assert(!html.includes('id="preguntas"'));
  assert(!html.includes('<footer'));
  assert(html.includes('No es solo<br>una molestia'));
  assert(html.includes('class="service-thumb"'));
  assert(html.includes('hero-mobile-640.webp'));
  assert(html.includes('SOLICITÁ UNA VISITA'));
  assert(html.includes('class="quote-form"'));
  assert(!html.includes('name="telefono"'));
  assert(!html.includes('name="lugar"'));
  assert(!html.includes('name="mascotas"'));
  assert(!html.includes('class="faq-section"'));
  for(const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"#?]*)"/g))assert((await stat('dist'+match[1])).isFile(),match[1]);
  for(const match of html.matchAll(/href="(https:\/\/wa.me\/[^" ]+)"/g)){
    const u=new URL(match[1]);assert.equal(u.pathname,'/'+b.whatsapp);assert(u.searchParams.get('text'));
  }
  assert((await readFile('dist/robots.txt','utf8')).includes('Sitemap: https://seo-check.invalid/sitemap.xml'));
  assert((await readFile('dist/sitemap.xml','utf8')).includes('<loc>https://seo-check.invalid/</loc>'));
  assert((await stat('dist'+seo.image)).size<200000);
  assert((await stat('dist/app.js')).size<6000);
  for(const bad of ['http://localhost:4173','https://example.com','https://valid.com/path'])assert.throws(()=>build({SITE_URL:bad}));
  assert.throws(()=>build({SITE_URL:'',VERCEL_PROJECT_PRODUCTION_URL:'',VERCEL_ENV:'production'}));
  build({SITE_URL:'',VERCEL_PROJECT_PRODUCTION_URL:'',VERCEL_ENV:'development'});
  assert((await readFile('dist/index.html','utf8')).includes('noindex, nofollow'));
  console.log('PASS: metadata, schema, FAQ removal, assets, WhatsApp destinations, sitemap, robots, size budgets and production URL guard.');
}finally{build({});}
