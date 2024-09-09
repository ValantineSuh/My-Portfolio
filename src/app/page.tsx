import NavBar from './components/NavBar'
import React  from 'react'
import HomePage from './components/HomePage'
import Socials from './components/Socials'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'
import MobileSocial from './components/MobileSocial'


export default function Home() {
  return (
<div >

  <NavBar />
  <HomePage />
  <About />
  <Portfolio />
  <Experience />
  <ContactMe />
  <Socials />
  {/* <MobileSocial /> */}
</div>

    )
}
