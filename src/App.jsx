import Home from "./home"

import { Routes,Route } from "react-router-dom"

import Navbar from "./navbar"
import About from "./about"
import Project from "./project"
import Game from './game'
import Contact from "./contact"

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/game" element={<Game/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      </Routes>
    </>
  )
}

export default App
