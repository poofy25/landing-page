
import React from 'react'
import { useState , useEffect } from "react"
import './App.css'

import Navbar from './components/Navigation/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WorksSection from './components/WorksSection/WorksSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import ContactSection from './components/ContactSection/ContactSection';
function App() {

  const [mobile, setMobile] = useState(window.innerWidth <= 767);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 767);
    console.log(window.innerWidth <= 767)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <>

        <Navbar/>
        <div className='WebsiteContent'>
          <div className='websiteBackground'></div>
          <HeroSection/>
          <ServicesSection/>
          <WorksSection/>
          <AboutUsSection/>
          <ContactSection/>
        </div>
     
    </>
  )
}

export default App