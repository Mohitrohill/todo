import React from 'react'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  return (

        <>
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/> 
    </Routes>
    <Link to='/about'> <h1>about</h1></Link>
    <Link to='/home'>home</Link>
    </BrowserRouter>
    </>
    
  )
}

export default App
