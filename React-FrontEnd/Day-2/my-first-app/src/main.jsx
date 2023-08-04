import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <App />
    <App />
    <App />
  </React.StrictMode>,
)
