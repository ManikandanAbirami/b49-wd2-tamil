import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx'
import Home from './Home.jsx'
// import Price from './Price.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Post></Post>
    <Home name="Manikandan Anbalagan"></Home>
    {/* <Price></Price>
    <Price></Price> */}
  </React.StrictMode>,
)
