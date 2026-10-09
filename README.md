# Control de Plagas · Córdoba Capital

Landing estática mobile-first para atención domiciliaria. HTML generado en el build, CSS y JavaScript nativos, sin dependencias de frontend ni backend.

## Usar

Requiere Node.js 20 o posterior. No hay dependencias externas que instalar.

```sh
npm run dev
# http://127.0.0.1:4173
npm run check
npm run build
```

## Publicar en Vercel

Importar `hikaribrandan3-code/plagacero`. La configuración está en `vercel.json`: `npm run build`, salida `dist`, sin framework.

El build usa `SITE_URL` o `VERCEL_PROJECT_PRODUCTION_URL` para canonical, OG, Twitter, sitemap y datos estructurados. `SITE_URL` debe ser un origen HTTPS de producción confirmado, sin ruta, query ni fragmento. Al conectar un dominio propio, actualizar `SITE_URL` y volver a desplegar. No usar la URL temporal de un preview.

Sin dominio configurado, el preview local usa `noindex`, no publica canonical ni URLs OG falsas y bloquea rastreo en robots.txt. En producción el build falla si no existe ningún origen válido. El hostname permanente provisto por Vercel se usa automáticamente cuando está disponible.

**Estado actual:** la creación del proyecto Vercel fue bloqueada por `402 resource_creation_blocked` (saldo vencido del equipo conectado). El CLI tampoco pudo acceder al scope del equipo. No existe todavía una URL de producción verificada. Falta publicar y verificar por HTTP el canonical y la imagen social desde el dominio real.

## Datos del negocio

Editar `src/business.mjs`: nombre provisional, teléfono, WhatsApp, área, experiencia, servicios, preguntas, reseñas y SEO. `hours` queda en `null` hasta confirmar horarios. Las reseñas están vacías: no se publica prueba social inventada. Confirmar el nombre comercial y la oferta exacta con la dueña.

El formulario prepara un borrador con datos validados y URL encoding para `wa.me/543513394868`. La persona revisa y envía desde WhatsApp. No hay almacenamiento, envío automático ni analítica de terceros. Se incluye un enlace de respaldo si el navegador bloquea la pestaña nueva.

## Recursos y SEO

- OG original: `public/images/og-control-plagas-cordoba.jpg`, 1200×630, aproximadamente 139 KB.
- Imágenes originales generadas: cocina, plagas y equipamiento. WebP responsive y JPG de respaldo para las imágenes principales. Las imágenes bajo el primer bloque usan lazy loading.
- La comparación de cocina se identifica visiblemente como ilustrativa, no como un trabajo real.
- Icono de marca SVG, favicon PNG, Apple touch icon y tamaños 192/512 para manifest.
- JSON-LD: ProfessionalService con área y catálogo de servicios; FAQPage con seis preguntas presentes en la página. Sin dirección, coordenadas, calificaciones ni horarios inventados.
- Página 404 real, sin fallback de rutas arbitrarias a la homepage.

## Verificación

`npm run check` comprueba metadatos generados con un dominio de prueba reservado, datos estructurados, correspondencia de FAQs, recursos locales, destinos WhatsApp, sitemap/robots, presupuestos de tamaño y rechazo de URLs de producción inválidas. El build de prueba se reemplaza al terminar.

Se inspeccionó el renderizado local móvil/escritorio y se midió ausencia de overflow a 320, 360, 375, 390, 430, 768 y 1440 px. Se probó validación de campos obligatorios y un borrador WhatsApp con acentos, saltos de línea y `&`, sin enviar el mensaje. No se atribuye una medición Lighthouse ni Core Web Vitals sin un reporte real.

La validación pública de metadatos y la resolución HTTP de OG quedan pendientes del despliegue.
