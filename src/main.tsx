import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';

import './index.css'
import App from './App.tsx'

// PrimeReact theme and icons
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider value={{ ripple: true }}>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)