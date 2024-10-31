import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n'
import { AnimatePresence } from 'framer-motion'

createRoot(document.getElementById('root')).render(
    <AnimatePresence>
      <App />
    </AnimatePresence>
)
