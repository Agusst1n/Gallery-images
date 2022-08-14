import React from 'react'
import ReactDOM from 'react-dom/client'
import { ImagesProvider } from './context/ImagesContext'
import { LoginProvider } from './context/LoginContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <ImagesProvider>
        <App />
      </ImagesProvider>
    </LoginProvider>
  </React.StrictMode>
)
