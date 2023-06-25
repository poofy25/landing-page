
import styles from "./worksSection.module.css"
import WorksCarousel from "./worksCarousel"

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