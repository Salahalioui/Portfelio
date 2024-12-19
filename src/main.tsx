import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/serviceWorkerRegistration'
import { initializePreloading } from './utils/assetPreloader'

// Register service worker
registerServiceWorker()

// Initialize asset preloading
initializePreloading()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
