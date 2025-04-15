import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const gtmId = import.meta.env.VITE_GTM_ID;

// Add GTM script
if (gtmId) {
  // Add GTM script
  (function(w: Window, d: Document, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    if (f && f.parentNode) {
      f.parentNode.insertBefore(j, f);
    }
  })(window, document, 'script', 'dataLayer', gtmId);
  
  // Add GTM noscript iframe
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  
  // Insert noscript as early as possible in the body
  if (document.body) {
    document.body.insertBefore(noscript, document.body.firstChild);
  } else {
    // If body is not yet available, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      document.body.insertBefore(noscript, document.body.firstChild);
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
