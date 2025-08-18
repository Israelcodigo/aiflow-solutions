#!/usr/bin/env node

// Accessibility and Performance Test Script
// Run with: node test-a11y.js

const fs = require('fs');
const path = require('path');

console.log('🔍 Iniciando auditoría de accesibilidad y rendimiento...\n');

// Test 1: Verify image optimization
const publicImagesDir = path.join(__dirname, 'public', 'images');
const images = fs.readdirSync(publicImagesDir).filter(file => file.endsWith('.png') || file.endsWith('.svg'));

console.log('📊 Análisis de assets:');
images.forEach(image => {
  const imagePath = path.join(publicImagesDir, image);
  const stats = fs.statSync(imagePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  const status = stats.size > 50000 ? '❌ PESADO' : '✅ ÓPTIMO';
  console.log(`  ${image}: ${sizeKB}KB ${status}`);
});

// Test 2: Check HTML semantic structure
const indexPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(indexPath, 'utf8');

console.log('\n🎯 Verificación SEO y Accesibilidad:');
const checks = [
  { test: /<html[^>]*lang=["']es["']/i.test(htmlContent), msg: 'Atributo lang en HTML' },
  { test: /<meta[^>]*name=["']description["']/i.test(htmlContent), msg: 'Meta description' },
  { test: /<meta[^>]*name=["']viewport["']/i.test(htmlContent), msg: 'Viewport meta tag' },
  { test: /prefers-reduced-motion/i.test(htmlContent), msg: 'Soporte prefers-reduced-motion' },
  { test: /aria-label|role=/i.test(htmlContent), msg: 'Atributos ARIA encontrados' },
];

checks.forEach(check => {
  console.log(`  ${check.test ? '✅' : '❌'} ${check.msg}`);
});

// Test 3: Component structure validation
const logoCloudPath = path.join(__dirname, 'components', 'LogoCloud.tsx');
const logoCloudContent = fs.readFileSync(logoCloudPath, 'utf8');

console.log('\n🖼️  Validación del componente LogoCloud:');
const logoChecks = [
  { test: /alt=/.test(logoCloudContent), msg: 'Atributos alt en imágenes' },
  { test: /loading="lazy"/.test(logoCloudContent), msg: 'Lazy loading implementado' },
  { test: /width|height/.test(logoCloudContent), msg: 'Dimensiones explícitas' },
  { test: /onError/.test(logoCloudContent), msg: 'Manejo de errores de imagen' },
  { test: /role=/.test(logoCloudContent), msg: 'Roles ARIA definidos' },
];

logoChecks.forEach(check => {
  console.log(`  ${check.test ? '✅' : '❌'} ${check.msg}`);
});

console.log('\n✨ Auditoría completada!\n');
console.log('📋 Próximos pasos recomendados:');
console.log('  1. Ejecutar Lighthouse audit: npm run lighthouse');
console.log('  2. Validar en dispositivos móviles');
console.log('  3. Comprobar contraste de colores');
console.log('  4. Test con lectores de pantalla');
