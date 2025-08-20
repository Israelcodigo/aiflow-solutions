# AIFlow Solutions

Moderna landing page B2B para consultoría especializada en implementación de IA empresarial. Desarrollada con React 19, TypeScript y Tailwind CSS.

🌐 **Demo live**: https://aiflow-solutions.vercel.app

## Características

- ⚡ **React 19** + TypeScript + Vite
- 🎨 **Tailwind CSS** + animaciones custom
- 📧 **Formulario de contacto** integrado (FormSubmit.co)
- 🛒 **Carrito interactivo** (demo)
- 📱 **Responsive design** mobile-first
- ♿ **Accesibilidad** WCAG 2.1 AA
- 🚀 **Deploy automático** en Vercel

## Ejecutar localmente

**Prerrequisitos**: Node.js ≥16

```bash
# Clonar e instalar
git clone [repo-url]
cd aiflow-solutions
npm install

# Desarrollo
npm run dev        # http://localhost:5173

# Producción  
npm run build      # Genera dist/
npm run preview    # Preview del build
```

## Servicios Ofrecidos

1. **Consultoría IA** (150€/sesión) - Auditoría técnica 2h
2. **GPTs Personalizados** (149€/GPT) - Asistentes IA custom  
3. **Automatizaciones** (Desde 349€/mes) - Flujos CRM/ERP
4. **Integración MCP** (299€) - ChatGPT/Claude + Slack
5. **Pack Prompts Pro** (99€/pack) - Prompts sectoriales
6. **Formación** (Desde 89€/hora) - Capacitación empresarial

## Stack Técnico

- **Frontend**: React 19.1.1, TypeScript, Tailwind CSS
- **Build**: Vite 6.2.0, optimización assets  
- **Forms**: FormSubmit.co (sin backend necesario)
- **Deploy**: Vercel auto-deploy
- **Icons**: SVG inline custom library

## Estructura del Proyecto

```
components/
├── Services.tsx      # Catálogo + carrito (core business)
├── Contact.tsx       # Lead generation form
├── ShoppingCart.tsx  # E-commerce demo
├── Header.tsx        # Navigation responsive  
├── Hero.tsx          # Landing section
└── ...               # Pricing, Process, Footer

public/images/        # Logos IA optimizados
vite.config.ts        # Build configuration
```

## Análisis Técnico

📋 Ver **análisis completo** en: [`ANALISIS_COMPLETO_CODEBASE.md`](./ANALISIS_COMPLETO_CODEBASE.md)

- **SLOC**: ~1,400 líneas
- **Componentes**: 12 modulares
- **Performance**: Bundle ~400KB
- **Testing**: Por implementar
- **SEO**: Meta tags básicos
