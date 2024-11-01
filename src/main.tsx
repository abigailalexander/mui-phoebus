import { ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { diamondTheme } from './theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={diamondTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
