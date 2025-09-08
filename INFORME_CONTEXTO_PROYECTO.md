# Informe de Contexto del Proyecto - AIFlow Solutions

## 📋 Resumen Ejecutivo

**Stack Principal**: React 19 + TypeScript + Tailwind CSS + Vite  
**Objetivo**: Landing page B2B para consultoría IA empresarial con funcionalidades de e-commerce demo  
**Estado**: Aplicación funcional desplegada en producción (Vercel)  
**SLOC Estimado**: ~1,400 líneas de código

## 🗺️ Mapa del Repositorio

```
C:\Users\Troll\Desktop\aiflow-solutions\
├── components/          # 12 componentes modulares React
│   ├── Services.tsx     # ⭐ CORE: Catálogo servicios + carrito
│   ├── Contact.tsx      # ⭐ CORE: Formulario leads (FormSubmit)
│   ├── ShoppingCart.tsx # E-commerce demo
│   ├── Header.tsx       # Navegación responsive
│   ├── Hero.tsx         # Landing principal
│   ├── Pricing.tsx      # Planes pricing
│   └── icons/Icons.tsx  # Librería SVG custom (25+ iconos)
├── public/images/       # Assets optimizados (.svg, .png)
├── App.tsx             # ⭐ ENTRY: Componente raíz
├── index.tsx           # ⭐ ENTRY: ReactDOM bootstrap
├── index.html          # HTML base con SEO/meta completos
├── vite.config.ts      # Build config con optimizaciones
├── package.json        # Deps mínimas (React 19 + Vite)
└── tsconfig.json       # TypeScript config ES2022
```

**Fuente**: index.tsx:1-17, App.tsx:1-31, README.md:54-65

## 🔧 Cómo Construir y Ejecutar

### Prerrequisitos

- **Node.js** ≥16
- **npm** (incluido con Node.js)

### Comandos de Desarrollo

```bash
# 1. Instalación
npm install

# 2. Desarrollo local
npm run dev          # → http://localhost:5173

# 3. Build de producción
npm run build        # → genera dist/
npm run preview      # → preview del build
```

**Fuente**: README.md:17-33, package.json:6-10

### Configuración de Entorno

El proyecto no requiere variables de entorno para funcionar básicamente, pero el config de Vite detecta `GEMINI_API_KEY` para funcionalidades futuras:

```typescript
// vite.config.ts:8-9
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

## 📦 Tabla de Dependencias

| Dependencia     | Versión  | Tipo    | Propósito               |
| --------------- | -------- | ------- | ----------------------- |
| **react**       | ^19.1.1  | runtime | Framework UI principal  |
| **react-dom**   | ^19.1.1  | runtime | DOM renderer            |
| **@types/node** | ^22.14.0 | dev     | Tipos Node.js           |
| **typescript**  | ~5.8.2   | dev     | Compilador TS           |
| **vite**        | ^6.2.0   | dev     | Build tool + dev server |

**Dependencias Externas (CDN)**:

- **Tailwind CSS**: Via CDN (index.html:38)
- **React/ReactDOM**: Via importmap ESM (index.html:39-47)

**Fuente**: package.json:11-19

## 🚀 APIs y Servicios

### Formulario de Contacto - FormSubmit.co

- **Endpoint**: `https://formsubmit.co/israelicloud1@gmail.com`
- **Método**: POST con FormData
- **Campos**: name, company, email, message
- **Features**: Anti-spam, templates, redirects
- **Implementación**: Contact.tsx:19-56

### Servicios Ofrecidos (Data Model)

```typescript
type ServiceData = {
  id: string;
  icon: React.ReactElement;
  title: string;
  description: string;
  price: string;
  priceNumeric: number; // Para cálculos carrito
  details: string[];
};
```

**6 Servicios Definidos**:

1. **Consultoría IA** - 150€/sesión
2. **GPTs Personalizados** - 149€/GPT
3. **Automatizaciones** - Desde 349€/mes
4. **Integración MCP** - 299€
5. **Pack Prompts Pro** - 99€/pack
6. **Formación** - Desde 89€/hora

**Fuente**: Services.tsx:7-80

### Sistema de Carrito (Demo E-commerce)

```typescript
type CartItem = {
  id: string;
  title: string;
  price: string;
  priceNumeric: number;
  quantity: number;
};
```

**Funcionalidades**:

- Agregar/remover productos
- Control de cantidad
- Cálculo total automático
- Persistencia local via state

**Fuente**: ShoppingCart.tsx:4-10

## 🏗️ Arquitectura y Patrones

### Patrón Arquitectónico

**Single Page Application (SPA)** con componentes funcionales React

### Estructura de Componentes

```
App (Raíz)
├── InteractiveBackground  # Canvas animado
├── Header                 # Nav + scroll effects
├── main
│   ├── Hero              # Landing section
│   ├── IntroSection      # Value proposition
│   ├── Services          # ⭐ CORE business logic
│   ├── Pricing           # Planes tarifarios
│   ├── Process           # Methodology
│   └── Contact           # ⭐ Lead generation
└── Footer                # Links + legal
```

**Fuente**: App.tsx:13-29

### Manejo de Estado

- **Local State**: useState para forms, UI state
- **No Redux/Context**: Simplicidad arquitectónica
- **Props Drilling**: Para componentes anidados (modal/carrito)

### Patrones de Diseño Detectados

1. **Compound Components**: Services + ServiceModal + ShoppingCart
2. **Render Props**: Icons con props configurables
3. **Custom Hooks**: No detectados (oportunidad de refactor)

**Fuente**: Services.tsx:1-5, icons/Icons.tsx:4-6

## 🧪 Pruebas

### Estado Actual

**❌ Sin framework de testing instalado**

### Testing Script Personalizado

- **test-a11y.js**: Script Node.js para auditorías manuales
- **Verificaciones**: Imágenes, SEO, accesibilidad, estructura
- **Cobertura**: Assets, HTML semántico, ARIA attributes

**Fuente**: test-a11y.js:1-64

### Casos Críticos Faltantes

1. **Unit Tests**: Componentes Services, Contact, ShoppingCart
2. **Integration Tests**: Flujo carrito completo
3. **E2E Tests**: Submit formulario contact
4. **Visual Regression**: Responsive design
5. **Performance Tests**: Bundle size, Core Web Vitals

## 🚀 CI/CD y Deploy

### Estrategia de Deploy

**Vercel Auto-Deploy** desde repositorio Git

### Pipeline Detectado

❌ **Sin configuración CI/CD formal**

- No `.github/workflows/`
- No scripts de pre-deploy
- No quality gates automatizados

### Deploy Manual

```bash
# Simulación pipeline
npm run build
# → Vercel auto-detecta y despliega dist/
```

**URLs**:

- **Producción**: https://aiflow-solutions.vercel.app
- **Preview**: Automático en PRs

**Fuente**: README.md:5

## 📋 Convenciones y Estándares

### Estructura de Archivos

- **Componentes**: PascalCase (Header.tsx)
- **Utilidades**: camelCase
- **Assets**: kebab-case (chatgpt-logo.svg)

### Code Style

- **TypeScript**: Estricto con ES2022 target
- **JSX**: React 19 con jsx-runtime
- **CSS**: Tailwind utility-first
- **Icons**: SVG inline components

**Fuente**: tsconfig.json:1-29

### Naming Conventions

```typescript
// Consistente en todo el código
const handleSubmit = async (e: React.FormEvent) => {
  /* */
};
const [isScrolled, setIsScrolled] = useState(false);
type CartItem = { id: string /* */ };
```

### Accessibility Standards

- **WCAG 2.1 AA**: Objetivo declarado
- **Semantic HTML**: Implementado
- **ARIA**: Parcialmente implementado
- **prefers-reduced-motion**: Soportado

**Fuente**: README.md:14, index.html:75-84

## ⚠️ Riesgos y Tech Debt Detectados

### Riesgos de Alto Impacto

1. **❌ Sin Tests**: Cualquier refactor es riesgoso
2. **❌ Hardcoded Email**: Contact.tsx:33 expone email en cliente
3. **❌ No Error Boundaries**: App puede crashear completamente
4. **❌ Bundle via CDN**: Dependencia externa crítica (Tailwind)

### Tech Debt Medio

1. **Props Drilling**: Services → ServiceModal → ShoppingCart
2. **Inline Styles**: index.html:48-220 (CSS en HTML)
3. **Magic Numbers**: Animaciones timing hardcoded
4. **No TypeScript Strict Mode**: types pueden ser más estrictos

### Oportunidades de Mejora

1. **Custom Hooks**: Extraer lógica de carrito, forms
2. **Context API**: Para estado carrito global
3. **Error Handling**: Componentes robustos
4. **Performance**: Code splitting, lazy loading
5. **SEO**: Structured data, sitemap

**Fuente**: Contact.tsx:33, Services.tsx:200-250

## 🎯 Guía de Onboarding (15 min)

### 1. Setup Inicial (3 min)

```bash
git clone [repo-url]
cd aiflow-solutions
npm install
npm run dev  # → localhost:5173
```

### 2. Exploración Código (5 min)

1. **App.tsx**: Entender estructura general
2. **Services.tsx**: Lógica business principal
3. **Contact.tsx**: Generación leads
4. **index.html**: SEO + estilos

### 3. Modificación de Prueba (5 min)

```typescript
// Services.tsx línea 13: Cambiar precio
price: "200 € por sesión",  // era 150€
priceNumeric: 200,
```

### 4. Build y Deploy (2 min)

```bash
npm run build
# Git commit → Auto-deploy Vercel
```

## ❓ Preguntas Abiertas

### Técnicas

1. **¿Migrar a Next.js para SSR/SEO?** - Mejor posicionamiento
2. **¿Implementar CMS headless?** - Contenido dinámico
3. **¿Integrar Stripe/PayPal?** - Pagos reales vs demo
4. **¿Analytics GA4/Mixpanel?** - Tracking conversiones

### Negocio

5. **¿Formulario multistep?** - Mejor UX/conversión
6. **¿Live chat/WhatsApp?** - Soporte inmediato
7. **¿A/B testing?** - Optimización conversiones
8. **¿Contenido multiidioma?** - Expansión mercados

### Seguridad

9. **¿Rate limiting contacto?** - Anti-spam
10. **¿Validación server-side?** - Datos sanitizados
11. **¿HTTPS obligatorio?** - Headers seguridad
12. **¿GDPR compliance?** - Cookies/privacy

---

**Fecha Análisis**: 2025-08-20  
**Analista**: Claude Code Assistant  
**Versión**: 1.0  
**Última Actualización**: git status main
