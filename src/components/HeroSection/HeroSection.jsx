


import backgroundIMG from '/src/assets/homeBackground.png'

import styles from "./heroSection.module.css"


function HeroSection() {


    return (
    
    <div className={styles.HeroSection}>
        <h1>Creating the perfect <br/>website  for your Bussiness</h1>
       <div className={styles.btnWrapper}> <button>CONTACT US</button> <button>OUR SERVICES</button> </div>
      <div className={styles.backgroundIMGShadow}></div>
      <img src={backgroundIMG} className={styles.backgroundIMG}/>
    
    </div>
    )
}
export default HeroSection