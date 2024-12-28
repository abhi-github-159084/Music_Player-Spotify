import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerStateContextProvider from './context/PlayerStateContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerStateContextProvider>
    <App />
    </PlayerStateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
