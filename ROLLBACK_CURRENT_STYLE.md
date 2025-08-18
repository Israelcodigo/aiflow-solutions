# 🔄 ROLLBACK - Estilo Actual Cyan/Blue

## 📋 Documento de Respaldo - Paleta Actual

Este documento permite **revertir rápidamente** a la paleta de colores cyan/blue actual antes de implementar Trust Navy + Emerald.

### 🎨 Paleta de Colores Actual

```css
/* Colores actuales en uso */
--current-bg-primary: #0a0e27;
--current-bg-card: #0f1334;
--current-bg-surface: #111a2e;
--current-text-primary: #ffffff;
--current-text-secondary: #e5e7eb;
--current-text-muted: #94a3b8;
--current-text-slate: #64748b;
--current-brand-primary: #22d3ee; /* cyan-400 */
--current-brand-secondary: #3b82f6; /* blue-600 */
--current-brand-gradient: linear-gradient(to right, #06b6d4, #3b82f6); /* cyan-500 to blue-600 */
--current-border: rgba(71, 85, 105, 0.5); /* slate-700/50 */
--current-border-hover: rgba(34, 211, 238, 0.5); /* cyan-400/50 */
```

### 🔧 CSS Actual en index.html

```css
/* Enhanced Service Card Styles - ACTUAL */
.service-card {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(34, 211, 238, 0.2);
}

.service-card:focus-within {
    outline: 2px solid #22d3ee;
    outline-offset: 2px;
}

.service-icon {
    transition: all 200ms ease-out;
    transform-origin: center;
}

.service-card:hover .service-icon {
    transform: scale(1.1);
    filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.4));
}

.service-cta-primary {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.service-cta-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1);
}
```

### 🎯 Clases Tailwind Actuales

#### Componente Services.tsx
```typescript
// Colores actuales en Services.tsx
className="bg-[#111a2e] border border-slate-700/60"  // Card background
className="text-cyan-400"                            // Icons
className="text-white"                               // Titles  
className="text-slate-300"                          // Descriptions
className="text-cyan-400"                           // Prices
className="bg-gradient-to-r from-blue-600 to-cyan-500" // Primary CTA
className="text-cyan-400 hover:text-cyan-300"       // Secondary CTA
className="border-slate-700/50 bg-slate-800/20"     // Footer
```

#### Componente ShoppingCart.tsx
```typescript
// Colores actuales en ShoppingCart.tsx
className="bg-[#0f1334] border-l border-cyan-400/30"    // Cart panel
className="text-white"                                   // Headers
className="text-slate-400"                              // Muted text
className="bg-slate-800/50 border border-slate-700/50"  // Item cards
className="bg-gradient-to-r from-cyan-500 to-blue-600"  // Checkout button
className="text-cyan-400"                               // Prices
```

### 📄 Comandos de Rollback Rápido

#### 1. Revertir CSS en index.html
```bash
# Buscar y reemplazar en index.html las siguientes líneas:
# Líneas 183-186: box-shadow con rgba(34, 211, 238, 0.2)
# Líneas 189-191: outline: 2px solid #22d3ee
# Líneas 198-201: filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.4))
# Líneas 216-219: box-shadow con rgba(59, 130, 246, 0.3)
```

#### 2. Revertir Services.tsx
```typescript
// Restaurar estas clases específicas:
className="bg-[#111a2e] border border-slate-700/60 rounded-3xl"
className="text-cyan-400 mb-6 flex-shrink-0"
className="text-xl font-semibold text-white mb-4"
className="text-sm text-slate-300 mb-6"
className="text-base font-bold text-cyan-400"
className="bg-gradient-to-r from-blue-600 to-cyan-500"
className="text-cyan-400 hover:text-cyan-300"
className="border-slate-700/50 bg-slate-800/20"
```

#### 3. Revertir ShoppingCart.tsx
```typescript
// Restaurar estas clases específicas:
className="bg-[#0f1334] border-l border-cyan-400/30"
className="text-xl font-bold text-white"
className="text-slate-400 hover:text-white hover:bg-slate-700"
className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
className="text-cyan-400 font-semibold"
className="bg-gradient-to-r from-cyan-500 to-blue-600"
```

### 🔍 Elementos Clave a Revertir

1. **Card backgrounds**: `#111a2e` → Actual
2. **Border colors**: `slate-700/60` → Actual  
3. **Icon colors**: `cyan-400` → Actual
4. **Text colors**: `white`, `slate-300` → Actual
5. **Primary buttons**: `blue-600 to cyan-500` → Actual
6. **Hover effects**: `cyan-400` glows → Actual
7. **Focus rings**: `#22d3ee` → Actual

### ⚡ Script de Rollback Automático

```bash
# Para volver rápidamente al estilo actual:
git stash  # Guardar cambios actuales
git checkout backup/current-cyan-style  # Cambiar a backup (si se crea)
# O restaurar archivos específicos desde este documento
```

### 📝 Notas Importantes

- **Background gradients**: Mantener los gradientes del componente InteractiveBackground
- **Glow effects**: Los efectos de glow cyan son característicos del estilo actual
- **Shadow system**: Las sombras oscuras con acentos cyan son parte de la identidad
- **Contrast ratios**: La paleta actual ya cumple WCAG 2.2 AA

### 🎨 Valores Específicos para Revertir

```css
/* Si necesitas valores exactos para revertir */
--shadow-current: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
--glow-current: 0 0 12px rgba(34, 211, 238, 0.4);
--border-current: rgba(71, 85, 105, 0.6);
--focus-current: #22d3ee;
--gradient-current: linear-gradient(to right, #2563eb, #06b6d4);
```

---

**⚠️ IMPORTANTE**: Guarda este documento antes de aplicar la nueva paleta Trust Navy + Emerald. Te permitirá volver al estado actual en menos de 5 minutos.