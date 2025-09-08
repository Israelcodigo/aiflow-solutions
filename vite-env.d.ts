/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly MODE: string;
  // Add more env variables types here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}