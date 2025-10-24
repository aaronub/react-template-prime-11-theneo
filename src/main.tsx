import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from '@primereact/core';
import WEXBrandTheme from '../packages/wex-brand-theme/index';
import './index.css'
import App from './App.tsx'
import 'primeicons/primeicons.css'

const theme = {
  preset: WEXBrandTheme
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider theme={theme}>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)