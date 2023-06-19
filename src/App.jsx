
import React from 'react'
import { useState , useEffect } from "react"
import './App.css'

import Navbar from './components/Navigation/NavBar';
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
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
          <p>AAAAAAAAAA</p>
        </div>
     
    </>
  )
}

export default App