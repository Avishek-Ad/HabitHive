import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.tsx'
import ScrollProvider from './context/ScrollContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ScrollProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScrollProvider>
  </AuthProvider>,
)
