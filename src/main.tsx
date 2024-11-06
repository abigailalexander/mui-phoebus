import { CssBaseline, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { diamondTheme, muiTheme } from './theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={import.meta.env.VITE_COMPONENT_STYLE === "mui" ? muiTheme : diamondTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
