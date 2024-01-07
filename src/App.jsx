import { BrowserRouter, Form, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'

function App() {
  const [count, setCount] = useState(0)
  // URL = "https://robust-safe-crafter.glitch.me/"
  return (

    <>
    <BrowserRouter>
      <nav>
        <Link to='/'>Home page</Link>
        <Link to='/add'>Add property</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
