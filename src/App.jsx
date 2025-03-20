import React, { useEffect, useState } from "react"
import { Navbar } from "./section/Navbar"
import { Hero } from "./section/Hero"
import About from "./section/About"
import Projects from "./section/Projects"
import Clients from "./section/Clients"
import Contact from "./section/Contact"
import Experience from "./section/Experience"

function App() {

  return (
    <main className="max-w-7xl mx-auto bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Experience />
    </main>
  )
}

export default App
