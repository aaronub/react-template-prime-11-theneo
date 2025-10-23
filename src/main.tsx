import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
// import WEXBrandTheme from '@wexinc/wex-brand-theme';

import './index.css'
import App from './App.tsx'

const theme = {
  // preset: WEXBrandTheme
  preset: Aura
};

// PrimeReact theme and icons
// import 'primereact/resources/themes/lara-light-blue/theme.css'
// import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider theme={theme}>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)