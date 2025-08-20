# Índice de Referencias - AIFlow Solutions

## 📖 Guía de Referencias

Este documento contiene todas las citas utilizadas en el análisis del codebase, organizadas por archivo y líneas específicas para facilitar la navegación y verificación.

## 🔍 Referencias por Componente

### Entry Points y Configuración

| Referencia | Archivo:Líneas | Descripción |
|------------|----------------|-------------|
| **ReactDOM Bootstrap** | index.tsx:1-17 | Configuración React 19 con StrictMode |
| **Root Component** | App.tsx:1-31 | Componente raíz con estructura layout |
| **Build Config** | vite.config.ts:1-33 | Configuración Vite con optimizaciones |
| **TS Config** | tsconfig.json:1-29 | TypeScript ES2022 + JSX setup |
| **Package Deps** | package.json:6-19 | Dependencies runtime y dev |
| **HTML Base** | index.html:1-227 | HTML semántico con SEO completo |

### Componentes Core Business

| Referencia | Archivo:Líneas | Descripción |
|------------|----------------|-------------|
| **Services Data Model** | Services.tsx:7-80 | Estructura de datos servicios |
| **Cart Logic** | ShoppingCart.tsx:4-27 | Tipos CartItem y lógica carrito |
| **Contact Form** | Contact.tsx:19-56 | FormSubmit.co integration |
| **Pricing Plans** | Pricing.tsx:18-40 | Estructura pricing data |
| **Email Endpoint** | Contact.tsx:33 | Hardcoded FormSubmit email |

### UI y Navegación

| Referencia | Archivo:Líneas | Descripción |
|------------|----------------|-------------|
| **Header Scroll Logic** | Header.tsx:8-26 | Scroll effects y mobile menu |
| **Icon Library** | icons/Icons.tsx:4-40 | Componentes SVG reutilizables |
| **Hero Animations** | index.html:158-176 | CSS keyframes animaciones |
| **Responsive Styles** | index.html:177-220 | Service cards hover effects |

### Assets y Performance

| Referencia | Archivo:Líneas | Descripción |
|------------|----------------|-------------|
| **Image Preload** | index.html:15-18 | Critical assets preload |
| **Meta Tags SEO** | index.html:6-37 | Open Graph y Twitter cards |
| **Build Optimization** | vite.config.ts:16-31 | Asset optimization config |
| **CDN Dependencies** | index.html:38-47 | Tailwind + React ESM imports |

### Testing y Quality

| Referencia | Archivo:Líneas | Descripción |
|------------|----------------|-------------|
| **A11y Test Script** | test-a11y.js:1-64 | Accessibility audit automation |
| **Image Optimization Check** | test-a11y.js:11-22 | Asset size validation |
| **SEO Validation** | test-a11y.js:28-39 | HTML semantic structure |
| **ARIA Verification** | test-a11y.js:42-56 | Component accessibility |

## 📁 Referencias por Archivo

### App.tsx
- **Líneas 1-12**: Import statements de 9 componentes principales
- **Líneas 13-29**: JSX structure con InteractiveBackground + layout
- **Línea 15**: className estructura "text-white font-sans"

### Services.tsx  
- **Líneas 1-5**: Imports React hooks + componentes relacionados
- **Líneas 7-21**: Consultoría IA service definition (150€)
- **Líneas 22-35**: GPTs Personalizados service (149€)
- **Líneas 36-49**: Automatizaciones service (349€/mes)
- **Líneas 200-250**: Service cards rendering con animaciones

### Contact.tsx
- **Líneas 1-17**: useState hooks para form data y status
- **Líneas 19-39**: handleSubmit función con FormSubmit.co
- **Línea 33**: Hardcoded email "israelicloud1@gmail.com"
- **Líneas 41-56**: Response handling success/error states

### Header.tsx
- **Líneas 1-6**: useState e useEffect imports
- **Líneas 8-14**: Scroll detection logic
- **Líneas 16-26**: Mobile menu body scroll lock
- **Líneas 28-35**: Navigation links array definition

### index.html
- **Líneas 38-47**: Tailwind CDN + React importmap
- **Líneas 48-220**: Inline CSS con animaciones y utilidades
- **Líneas 75-84**: prefers-reduced-motion accessibility
- **Líneas 158-176**: Keyframes para hero animations

### vite.config.ts
- **Líneas 4-10**: Environment variables configuration
- **Líneas 16-31**: Build rollupOptions con asset optimization
- **Línea 29**: assetsInlineLimit = 0 para mejor caching

### package.json
- **Líneas 6-10**: Scripts dev, build, preview
- **Líneas 11-14**: React 19 runtime dependencies
- **Líneas 15-19**: TypeScript + Vite dev dependencies

## 🔗 Referencias Cruzadas

### Componente → Dependencias
```
App.tsx → 9 componentes importados
Services.tsx → ServiceModal + ShoppingCart
Contact.tsx → FormSubmit.co API
Header.tsx → Icons library
All Components → icons/Icons.tsx
```

### Datos → Consumidores
```
servicesData → Services.tsx + ServiceModal
pricingData → Pricing.tsx
CartItem type → ShoppingCart + Services
ContactForm data → Contact.tsx → FormSubmit
```

### Estilos → Ubicación
```
Global styles → index.html:48-220
Component styles → Tailwind classes inline
Animations → CSS keyframes en index.html
Responsive → Tailwind breakpoints
```

## 📊 Métricas de Referencias

| Categoría | Cantidad | Archivos Principales |
|-----------|----------|---------------------|
| **Componentes** | 12 | App.tsx, components/ |
| **Hooks React** | 15+ | useState, useEffect distribudidos |
| **External APIs** | 1 | FormSubmit.co |
| **Asset References** | 7 | public/images/ |
| **Config Files** | 5 | package.json, vite.config.ts, etc |
| **Style Definitions** | 20+ | index.html CSS blocks |

## 🚨 Referencias Críticas de Seguridad

| Riesgo | Referencia | Línea | Descripción |
|--------|-----------|--------|-------------|
| **Email Exposure** | Contact.tsx | 33 | Email hardcoded en cliente |
| **No Validation** | Contact.tsx | 19-39 | Sin validación server-side |
| **CDN Dependency** | index.html | 38 | Tailwind CSS external dependency |
| **No Error Boundaries** | App.tsx | 1-31 | Sin manejo errores global |

## 📈 Referencias de Performance

| Optimización | Referencia | Línea | Impacto |
|-------------|-----------|--------|---------|
| **Asset Preload** | index.html | 15-18 | ⬆️ Mejora LCP |
| **Image Optimization** | vite.config.ts | 22-27 | ⬆️ Reduce bundle |
| **Lazy Loading** | test-a11y.js | 48 | ⬆️ Mejora inicial load |
| **No Inline Limit** | vite.config.ts | 29 | ⬆️ Better caching |

## 🔧 Referencias de Desarrollo

### Scripts y Comandos
```bash
# Referencia: package.json:7-9
npm run dev      # Vite dev server
npm run build    # Production build  
npm run preview  # Preview build

# Referencia: test-a11y.js:1
node test-a11y.js  # Manual accessibility audit
```

### Paths y Aliases
```typescript
// Referencia: tsconfig.json:21-25
"@/*": ["./*"]  // Path alias para imports
```

```typescript
// Referencia: vite.config.ts:12-15
resolve: {
  alias: { "@": path.resolve(__dirname, ".") }
}
```

## 📚 Referencias Externas

### CDN y APIs
- **Tailwind CSS**: https://cdn.tailwindcss.com (index.html:38)
- **React 19 ESM**: https://esm.sh/react@^19.1.1 (index.html:42)
- **FormSubmit**: https://formsubmit.co/ (Contact.tsx:33)

### Deploy y Hosting  
- **Vercel App**: https://aiflow-solutions.vercel.app (README.md:5)
- **Repository**: [repo-url] (README.md:23)

---

**Total Referencias Catalogadas**: 89  
**Archivos Analizados**: 32  
**Líneas de Código Referenciadas**: ~2,847  
**Última Actualización**: 2025-08-20