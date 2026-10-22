# Reformalo Web

Web de Reformalo: soluciones digitales e IA para pymes y negocios locales de Osona y Catalunya.

- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion
- **Despliegue:** Netlify (plugin `@netlify/plugin-nextjs`), desde GitHub
- **Fuentes:** Bricolage Grotesque (titulares) + Poppins (texto), con `next/font`

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción + lint + tipos
```

## Estructura

```
app/                 rutas (home, servicios, contacto, legales, 404, OG, sitemap, robots)
components/ui/       piezas reutilizables (Button, Logo, Reveal, TiltCard, Accordion…)
components/sections/ secciones de la home
components/layout/   Header y Footer
content/             textos en español (home.ts, services.ts, site.ts, legal.json)
public/              logo y __forms.html (detección de Netlify Forms)
```

## Marca

Colores (extraídos de la web en producción): azul `#5170FF`, `#3A52CC`, `#7A91FF`, `#C3CDFB`, `#DCE3FF`, `#EEF1FF` y tinta `#101426`.
El logo (`public/logo.png`) se usa tal cual, sin modificar.

## Formulario de contacto

Usa Netlify Forms. En Next.js, Netlify detecta el formulario por `public/__forms.html` y recibe el envío por POST a esa ruta. En local el envío no funciona; en Netlify sí.

## Pendiente (`TODO:`)

Busca `TODO:` en el código: precios de los planes, dirección o teléfono para el schema y textos en catalán.
