
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './src/index.css';
import { initializeGA4 } from './src/config/analytics';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Inicializar Google Analytics
initializeGA4();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
