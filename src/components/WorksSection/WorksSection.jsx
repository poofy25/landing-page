
import WorksCarousel from "./WorksCarousel"

import styles from "./worksSection.module.css"

function WorksSection() {
    return(
        <div id='works' className={styles.worksSection}>
               <div className={styles.worksSectionDent}></div>
            <h1 >WORKS</h1>
            <WorksCarousel/>
        </div>
    )
}

export default WorksSection