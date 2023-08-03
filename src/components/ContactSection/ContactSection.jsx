

import styles from "./contactSection.module.css"
import bgAnimation from "./BackgroundAnimation"
import { useEffect } from "react"

function ContactSection() {


    useEffect(()=>{
     
    },[])

    return(
        <div id='contact' className={styles.contactSection}>
        
            <h1>CONTACT</h1>


            <div className={styles.content}>

               <div className={styles.contactInfo}>

                <h2>Contact Info</h2>
                <a href = "mailto: poofy25dev@gmail.com">poofy25dev@gmail.com</a>
                <a href = "tel: +37360951369">+37360951369</a>
                <a>codecraft</a>

               </div> 

               <div className={styles.contactForm}>
                    <h2>Contact form</h2>
                    <form>

                        <div className={styles.formWrap}>
                            <div>
                                <label>Your Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name"
                                required
                                minLength="3"
                                />
                            </div>

                            <div>
                                <label>Your Email</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your Email"
                                  required
                                  minLength="3"
                                  />
                            </div>
                        </div>
                        <label>Your Message</label>
                        <textarea id="subject" required name="subject" placeholder="Your Message"></textarea>

                        <input className={styles.submit} type="submit" value="Send a Message"/>
                    </form>

               </div>

            </div>
        </div>
    )
}

export default ContactSection