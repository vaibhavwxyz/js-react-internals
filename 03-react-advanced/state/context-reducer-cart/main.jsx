import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Add a `export default function App() { ... }` to ./index.jsx to render it here.
import App from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
