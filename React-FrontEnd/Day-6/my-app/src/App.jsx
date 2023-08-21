import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Animal from './Animal'

function App() {

  return (
   <Router>
    <div>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <Link to="/animal/dog">Dog</Link>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <Link to="/animal/cat">Cat</Link>
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
            <Link to="/animal/rabbit">Rabbit</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path="/" exact Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route> */}
        <Route path="/animal/:name" Component={Animal}></Route>
      </Routes>
    </div>
   </Router>  
  )
}

export default App
