import Home from "./components/home/home"

import { Routes,Route } from "react-router-dom"

import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Project from "./components/project/project"
import Game from "./components/game/game"
import Contact from "./components/skills/contact"

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/game' element={<Game/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      </Routes>
    </>
  )
}

export default App
