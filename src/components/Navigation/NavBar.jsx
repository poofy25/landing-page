
import { useEffect , lazy } from "react";

import companyLogo from '/src/assets/icons/companyLogo.png'

import NavBarMenu from "./NavBarMenu";

import styles from "./navBar.module.css"
import menuStyles from "./navBarMenu.module.css"

let hasOpened = false;




function Navbar() {

const MobileUser = window.innerWidth <= 767

const menuBtnHandler = ()=>{
    console.log(hasOpened)
  if (!hasOpened){
    hasOpened = true;
    document.querySelector(`.${menuStyles.menuContainer}`).classList.add(`${menuStyles.open}`)
    document.querySelector(`.${styles.menuButton}`).classList.add(`${styles.active}`)
    document.body.style.overflow = "hidden"
  } else {
    hasOpened = false;
    document.querySelector(`.${menuStyles.menuContainer}`).classList.remove(`${menuStyles.open}`)
    document.querySelector(`.${styles.menuButton}`).classList.remove(`${styles.active}`)
    document.body.style.overflow = "auto"
  }
}

useEffect(()=>{
  
  const navBar = document.getElementById('NavigationBar')
  //Adding | Removing the navigation bar based on scroll position
  if(navBar){
  let lastScrollHeight = 0
  let lastScrollUp = 0;
  let lastScrollDown = 0
  window.addEventListener('scroll', (e)=>{
       
    if (lastScrollHeight > document.documentElement.scrollTop ){
      lastScrollUp = document.documentElement.scrollTop
    }
    if ( lastScrollHeight < document.documentElement.scrollTop) {
      lastScrollDown = document.documentElement.scrollTop
    }
    if (lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight > document.documentElement.scrollTop && navBar.classList.contains(styles.NavbarActive)){
      navBar.classList.remove(`${styles.NavbarActive}`)
    }
    if(lastScrollDown - lastScrollUp >= navBar.offsetHeight && lastScrollHeight < document.documentElement.scrollTop  && document.documentElement.scrollTop > navBar.offsetHeight ){
      navBar.classList.add(`${styles.NavbarActive}`)
    }
    if(document.documentElement.scrollTop < navBar.offsetHeight){
      navBar.classList.add(styles.NavBarTop)
    } else if (navBar.classList.contains(styles.NavBarTop)){
      navBar.classList.remove(styles.NavBarTop)
    }

    lastScrollHeight = document.documentElement.scrollTop
  })
}

},[])
  return (
    <header className={`${styles.Navbar} ${styles.NavBarTop}`} id='NavigationBar'>
      <div className={styles.navBarTop}>
        <button className={styles.menuButton} onClick={menuBtnHandler}>
        <div className={styles.menuButtonRow1}></div>
        <div className={styles.menuButtonRow2}></div>
        <div className={styles.menuButtonRow3}></div>
        </button>
     {MobileUser && <NavBarMenu closeMenu={menuBtnHandler}/> }

          <a href="#home" className={styles.companyLogo}>
            <img src={companyLogo} alt=''/>
          </a>
        {!MobileUser && (<>
        <a href="#home">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#works">WORKS</a>
        <a href="#about">ABOUT US</a>
     
        <a href="#contact" className={styles.contactBtn}>
          CONTACT     
        </a>
        </>)}

  
      </div>
    </header>
  )
}

export default Navbar

/*
   <a href="tel:+37360951369" className={styles.callContainer}>
          <div>
          <img src={callIconHover} />
          <img src={callIcon} />
          </div>
        +37360951369</a> */