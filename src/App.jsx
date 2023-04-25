import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button'
import Navbar from './components/Navbar/Navbar'
import RadiantApparel from './components/RadiantApparel'
import TriviaGame from './components/Triviagame'
import ThisSite from './components/ThisSite'
import Contact from './components/Contact'
import About from './components/About'


function App() {

  return (
    <div className='Main-div'>
        <Navbar />
        <RadiantApparel />
        <TriviaGame />
        <ThisSite />
        <About />
        <Contact />
        
    </div>
  )
}

export default App