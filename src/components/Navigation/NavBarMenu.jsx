
import styles from './navBarMenu.module.css'

import companyLogo from '/src/assets/icons/companyLogo.png'

const NavBarMenu = (props)=>{
    const menuBtnHandler = props.closeMenu

    return(
    <div className={styles.menuContainer}>
      <div className={styles.menuContainerShadow} onClick={menuBtnHandler}></div>
      <div className={styles.menuContainerContent}>
        <div className={styles.menuCompanyLogo}>
        <img src={companyLogo}/>
        </div>
        
        <div className={styles.menuSocialsContainer}>
        </div>
      </div>
    </div>
    )
}
export default NavBarMenu