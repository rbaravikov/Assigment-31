import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  // URL = "https://robust-safe-crafter.glitch.me/"
  return (

    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
