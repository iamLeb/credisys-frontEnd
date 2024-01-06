import { useState } from 'react'
import './App.css'
import Nav from './components/landing_page/Nav'
import Hero from './components/landing_page/Hero'
import Home from './views/Home'
import { BrowserRouter as Router , Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route ></Route>


      </Routes>
    <>
    <div >
     <Home/>
</div>
    </>
    </Router>
  )
}

export default App
