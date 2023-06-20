import { useEffect , useRef , useState } from 'react';

import backgroundIMG from '/src/assets/homeBackground.png'

import styles from "./aboutUsSection.module.css"


function AboutUsSection() {
    return(
        <div id='about' className={styles.aboutUsSection}>
            ABOUT US
        </div>
    )
}

export default AboutUsSection