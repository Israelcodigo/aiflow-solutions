import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const extType = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                return `assets/images/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
            manualChunks: {
              // React & React DOM como chunk separado
              'react-vendor': ['react', 'react-dom'],
              // Analytics y utilidades como chunk separado
              'utils': ['./src/utils/analytics'],
              // Componentes pesados como chunks separados
              'services': ['./components/Services', './components/ServiceModal', './components/ShoppingCart'],
              'interactive': ['./components/InteractiveBackground'],
            }
          }
        },
        assetsInlineLimit: 0, // No inline images for better caching
        chunkSizeWarningLimit: 250, // Avisar si chunks > 250KB
      }
    };
});
