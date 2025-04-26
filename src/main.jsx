import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './hook/AppProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
