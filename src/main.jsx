import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

// import { App, App2 as Abacate (para trocar o nome) } from './App.jsx' // export sem default | Preciso dizer o nome da função
import { GlobalStyles } from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
