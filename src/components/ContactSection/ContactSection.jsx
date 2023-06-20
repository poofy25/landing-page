import { useEffect , useRef , useState } from 'react';

import backgroundIMG from '/src/assets/homeBackground.png'

import styles from "./contactSection.module.css"


function ContactSection() {
    return(
        <div id='contact' className={styles.contactSection}>
            CONTACT US
        </div>
    )
}

export default ContactSection