import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WelcomeMessage from './components/WelcomeMessage.tsx'
import QueryProvider from './app/providers/QueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
      <WelcomeMessage />
    </QueryProvider>
  </StrictMode>,
)
