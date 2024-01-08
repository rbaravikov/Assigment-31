import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Nav from './pages/Nav'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState('Home')

  return (

    <>
    <BrowserRouter>
      <Nav selected={selected} setSelected={setSelected} />

      <Routes>
        <Route path='/' element={<Home setSelected={setSelected}/>}/>
        <Route path='/add' element={<Add setSelected={setSelected}/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
