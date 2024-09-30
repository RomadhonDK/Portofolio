import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ball from './components/ball'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

// import './App.css'

function App() {

  return (
    <div className="bg-black--primary ">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
        <Route path={'/resume'} element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
