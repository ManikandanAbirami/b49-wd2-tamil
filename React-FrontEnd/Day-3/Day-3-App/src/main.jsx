import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div>
    <Home name="Manikandan"></Home>
    <Home name="John"></Home>
    </div>
  </React.StrictMode>,
)
