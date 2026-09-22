import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WelcomeMessage from './components/WelcomeMessage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <WelcomeMessage />
  </StrictMode>,
)
