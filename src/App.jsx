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
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
