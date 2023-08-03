
import backgroundIMG from '/src/assets/icons/aboutUsIMG.webp'

import styles from "./aboutUsSection.module.css"


function AboutUsSection() {
    return(
        <div id='about' className={styles.aboutUsSection}>

          <h1>ABOUT US</h1>
          <div className={styles.content}>
            
            <div className={styles.textContainer}>
            <p>

            
               
At CodeCraft, we are passionate about website development and design. Our team of skilled professionals specializes in creating exceptional online platforms tailored to your unique needs. Whether you're looking for a captivating portfolio to showcase your work, a persuasive landing page to capture leads, or a robust e-commerce website to drive online sales, we have the expertise to bring your vision to life. We believe in collaboration, working closely with our clients to understand their goals and target audience, ensuring that every website we build aligns with their brand and objectives. Partner with us at CodeCraft and let's create an online presence that sets you apart from the competition.

            </p>
            <a href="#contact">CONTACT US</a>
            </div>
            <img src={backgroundIMG}/>
          </div>

        </div>
    )
}

export default AboutUsSection