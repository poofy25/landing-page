import { useEffect , useRef , useState } from 'react';

import landingPageIcon from '/src/assets/Icons/landingPageIcon.png'
import bussinessPageIcon from '/src/assets/Icons/bussinessPageIcon.png'
import eventsPageIcon from '/src/assets/Icons/eventsPageIcon.png'

import styles from "./servicesSection.module.css"


function ServicesSection() {


    return(
        <div id='services' className={styles.servicesSection}>
            <h1>SERVICES</h1>

            <div className={styles.servicesWrapper}>
                <div>
                    <img src={landingPageIcon}/>
                    <p>Lading Page</p>
                    A well-designed landing page can drive conversions, boost sales, and ultimately contribute to the owner's business success.
                </div>
                <div>
                    <img src={bussinessPageIcon}/>
                    <p>Events website</p>
                    A dedicated online platform that showcases event information, enables attendee registration, and provides essential event details to enhance event planning, promotion, and attendee experience.
                </div>
                <div>
                    <img src={eventsPageIcon}/>
                    <p>Bussiness Site</p>
                    An online platform that represents a company or organization, providing a digital presence to showcase products, services, and information, facilitate customer engagement, and support business growth.
                </div>
                
            </div>
            <span style={{textDecoration:'underline'}}>AND OTHER</span>
        </div>
    )
}

export default ServicesSection