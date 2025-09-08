# Diagramas de Arquitectura - AIFlow Solutions

## 🏗️ Diagrama de Arquitectura General

```mermaid
graph TB
    subgraph "Cliente Browser"
        HTML[index.html]
        CDN_TW[Tailwind CSS CDN]
        CDN_REACT[React 19 ESM]

        HTML --> CDN_TW
        HTML --> CDN_REACT
    end

    subgraph "Aplicación React"
        APP[App.tsx - Root]
        BG[InteractiveBackground]
        HEADER[Header]
        MAIN[Main Content]
        FOOTER[Footer]

        APP --> BG
        APP --> HEADER
        APP --> MAIN
        APP --> FOOTER
    end

    subgraph "Componentes Principales"
        HERO[Hero]
        INTRO[IntroSection]
        SERVICES[Services ⭐]
        PRICING[Pricing]
        PROCESS[Process]
        CONTACT[Contact ⭐]

        MAIN --> HERO
        MAIN --> INTRO
        MAIN --> SERVICES
        MAIN --> PRICING
        MAIN --> PROCESS
        MAIN --> CONTACT
    end

    subgraph "Lógica de Negocio"
        MODAL[ServiceModal]
        CART[ShoppingCart]
        ICONS[Icons Library]

        SERVICES --> MODAL
        SERVICES --> CART
        SERVICES --> ICONS
        CONTACT --> ICONS
    end

    subgraph "Servicios Externos"
        FORMSUBMIT[FormSubmit.co API]
        VERCEL[Vercel Deploy]

        CONTACT --> FORMSUBMIT
        APP --> VERCEL
    end

    subgraph "Assets"
        IMAGES[/public/images/]
        CHATGPT[ChatGPT logos]
        CLAUDE[Claude logos]
        GEMINI[Gemini logos]

        IMAGES --> CHATGPT
        IMAGES --> CLAUDE
        IMAGES --> GEMINI

        HERO --> IMAGES
        HEADER --> IMAGES
    end
```

## 📦 Grafo de Dependencias por Módulo

```mermaid
graph LR
    subgraph "Runtime Dependencies"
        R19[React 19.1.1]
        RD19[ReactDOM 19.1.1]
    end

    subgraph "Development Dependencies"
        TS[TypeScript 5.8.2]
        VITE[Vite 6.2.0]
        TYPES[@types/node 22.14.0]
    end

    subgraph "External CDN"
        TW[Tailwind CSS]
        REACT_ESM[React ESM Imports]
    end

    subgraph "Build Process"
        SRC[Source TS/TSX]
        DIST[dist/ Build Output]
        HTML_OUT[Static HTML + Assets]
    end

    R19 --> RD19
    TS --> SRC
    VITE --> SRC
    SRC --> DIST
    DIST --> HTML_OUT

    TW --> HTML_OUT
    REACT_ESM --> HTML_OUT

    style R19 fill:#61dafb
    style VITE fill:#646cff
    style TS fill:#3178c6
```

## 🗄️ Diagrama de Entidades (Modelo de Datos)

```mermaid
erDiagram
    SERVICE {
        string id PK
        ReactElement icon
        string title
        string description
        string price
        number priceNumeric
        string-array details
    }

    CART_ITEM {
        string id PK
        string title
        string price
        number priceNumeric
        number quantity
    }

    PRICING_PLAN {
        string name
        string type
        Price price
        string description
        string-array features
        boolean featured
        string cta
        string href
    }

    CONTACT_FORM {
        string name
        string company
        string email
        string message
        string status
        string statusMessage
    }

    ICON_PROPS {
        string className
    }

    SERVICE ||--o{ CART_ITEM : "can_be_added_to"
    SERVICE ||--|| ICON_PROPS : "uses_icon_with"
    PRICING_PLAN ||--|| SERVICE : "references"
    CONTACT_FORM ||--|| EXTERNAL_API : "submits_to"
```

## 🔄 Call Graph - Flujos Principales

### 1. Flujo de Carga de Aplicación

```mermaid
sequenceDiagram
    participant Browser
    participant HTML as index.html
    participant CDN as External CDNs
    participant React as React App
    participant Components

    Browser->>HTML: GET /
    HTML->>CDN: Load Tailwind CSS
    HTML->>CDN: Load React 19 ESM
    HTML->>React: Load index.tsx
    React->>React: ReactDOM.createRoot()
    React->>Components: Render <App />
    Components->>Components: Mount all components
    Components->>Browser: Interactive UI
```

### 2. Flujo de Carrito de Compras

```mermaid
sequenceDiagram
    participant User
    participant Services as Services.tsx
    participant Modal as ServiceModal
    participant Cart as ShoppingCart
    participant State as React State

    User->>Services: Click "Añadir al carrito"
    Services->>Modal: Open service details
    Modal->>User: Show service info
    User->>Modal: Confirm add to cart
    Modal->>State: addToCart(service)
    State->>Cart: Update items[]
    Cart->>User: Show updated cart
    User->>Cart: Modify quantities
    Cart->>State: updateQuantity()
    State->>Cart: Recalculate total
```

### 3. Flujo de Formulario de Contacto

```mermaid
sequenceDiagram
    participant User
    participant Contact as Contact.tsx
    participant FormSubmit as FormSubmit.co
    participant Email as Email Service

    User->>Contact: Fill form fields
    Contact->>Contact: handleChange()
    User->>Contact: Submit form
    Contact->>Contact: setStatus('submitting')
    Contact->>FormSubmit: POST form data
    FormSubmit->>Email: Send formatted email
    FormSubmit->>Contact: Response (200/400)
    Contact->>Contact: setStatus('success'/'error')
    Contact->>User: Show status message
```

### 4. Flujo de Navegación Responsive

```mermaid
sequenceDiagram
    participant User
    participant Header as Header.tsx
    participant Window as window
    participant Body as document.body

    User->>Window: Scroll page
    Window->>Header: scroll event
    Header->>Header: setIsScrolled(true)
    Header->>Header: Apply backdrop blur

    User->>Header: Click mobile menu
    Header->>Header: setIsMenuOpen(true)
    Header->>Body: overflow = 'hidden'
    Header->>User: Show mobile menu

    User->>Header: Click menu item
    Header->>Header: setIsMenuOpen(false)
    Header->>Body: overflow = 'auto'
    Header->>Window: Smooth scroll to section
```

## 🎨 Diagrama de Componentes UI

```mermaid
graph TD
    subgraph "Layout Structure"
        APP[App Component]
        BACKGROUND[InteractiveBackground]
        HEADER[Header]
        MAIN[Main Content Area]
        FOOTER[Footer]
    end

    subgraph "Content Sections"
        HERO[Hero Section]
        INTRO[Intro Section]
        SERVICES[Services Catalog]
        PRICING[Pricing Plans]
        PROCESS[Process Steps]
        CONTACT[Contact Form]
    end

    subgraph "Interactive Elements"
        MODAL[Service Modal]
        CART[Shopping Cart]
        MENU[Mobile Menu]
        FORMS[Contact Form]
    end

    subgraph "Shared Components"
        ICONS[Icon Library]
        BUTTONS[CTA Buttons]
        CARDS[Service Cards]
        LOGOS[Logo Cloud]
    end

    APP --> BACKGROUND
    APP --> HEADER
    APP --> MAIN
    APP --> FOOTER

    MAIN --> HERO
    MAIN --> INTRO
    MAIN --> SERVICES
    MAIN --> PRICING
    MAIN --> PROCESS
    MAIN --> CONTACT

    SERVICES --> MODAL
    SERVICES --> CART
    HEADER --> MENU
    CONTACT --> FORMS

    SERVICES --> ICONS
    SERVICES --> CARDS
    HERO --> BUTTONS
    INTRO --> LOGOS

    style SERVICES fill:#22d3ee,color:#000
    style CONTACT fill:#22d3ee,color:#000
    style ICONS fill:#f59e0b,color:#000
```

## 📊 Diagrama de Flujo de Build

```mermaid
flowchart TD
    START([Inicio Build]) --> INSTALL[npm install]
    INSTALL --> VITE_BUILD[vite build]
    VITE_BUILD --> TS_COMPILE[TypeScript Compile]
    TS_COMPILE --> BUNDLE[Bundle Assets]
    BUNDLE --> OPTIMIZE[Optimize Images]
    OPTIMIZE --> MINIFY[Minify CSS/JS]
    MINIFY --> DIST[Generate dist/]
    DIST --> VERCEL{Auto Deploy?}
    VERCEL -->|Yes| DEPLOY[Vercel Deploy]
    VERCEL -->|No| LOCAL[Local Preview]
    DEPLOY --> LIVE[🚀 Production Live]
    LOCAL --> PREVIEW[npm run preview]

    subgraph "Build Optimizations"
        SPLIT[Code Splitting]
        TREE[Tree Shaking]
        COMPRESS[Asset Compression]
    end

    BUNDLE --> SPLIT
    BUNDLE --> TREE
    BUNDLE --> COMPRESS

    style START fill:#22c55e
    style LIVE fill:#ef4444,color:#fff
    style DIST fill:#3b82f6,color:#fff
```

---

**Fuente de Datos**: Análisis de código fuente en C:\Users\Troll\Desktop\aiflow-solutions\  
**Herramientas**: Mermaid.js para visualización  
**Fecha**: 2025-08-20  
**Versión**: 1.0
