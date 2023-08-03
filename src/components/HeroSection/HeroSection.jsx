import Typed from 'typed.js';
import { useEffect , useRef , useState } from 'react';

import backgroundIMG from '/src/assets/homeBackground.png'

import styles from "./heroSection.module.css"


function HeroSection() {

  const heroTypedRef = useRef(null)
  const [mobile, setMobile] = useState(window.innerWidth <= 767);
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
   console.log(mobile)

    return (
    
    <div className={styles.HeroSection} id='home'>

      <h1>Creating the perfect website for your&nbsp;

        <div>
          Bussiness.
          <div>
            <span ref={heroTypedRef}>Bussiness</span>
          </div>
        </div>
      </h1>

   

      <div className={styles.btnWrapper}> <a href='#contact'>CONTACT US</a> <a href="#services">OUR SERVICES</a> </div>
      <div className={styles.backgroundIMGShadow}></div>
      <img src={backgroundIMG} className={styles.backgroundIMG}/>
    
      <a href="#services"><span></span>SCROLL FOR MORE</a>

    </div>
    )
}
export default HeroSection