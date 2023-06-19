import Typed from 'typed.js';
import { useEffect , useRef } from 'react';

import backgroundIMG from '/src/assets/homeBackground.png'

import styles from "./heroSection.module.css"


function HeroSection() {

  const heroTypedRef = useRef(null)

  useEffect(()=>{
    var heroTyped = new Typed(heroTypedRef.current, {
      strings: ['Bussiness.', 'Company.', 'Service.'],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 2500,
      cursorChar: '|',
      shuffle: true,
      smartBackspace: false,
      loop: true
    });
    return ()=>{heroTyped.destroy()}


  },[])


    return (
    
    <div className={styles.HeroSection}>
        <h1>Creating the perfect <br/>website  for your <span ref={heroTypedRef}>Bussiness</span></h1>
       <div className={styles.btnWrapper}> <button>CONTACT US</button> <button>OUR SERVICES</button> </div>
      <div className={styles.backgroundIMGShadow}></div>
      <img src={backgroundIMG} className={styles.backgroundIMG}/>
    
    </div>
    )
}
export default HeroSection