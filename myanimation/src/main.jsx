import React from 'react'
import ReactDOM from 'react-dom/client' // Fixes: ReactDOM is not defined
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Fixes: Cannot destructure 'basename'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)