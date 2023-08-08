
import styles from "./worksCarousel.module.css"

import ecommerce1 from '/src/assets/workImages/ecommerce1.png'
import ecommerce2 from '/src/assets/workImages/ecommerce2.png'

import portfolio11 from '/src/assets/workImages/portfolio1.1.png'

import game1 from '/src/assets/workImages/game1.png'

import { useEffect  , useState} from "react"


function WorksCarousel() {
       
    let Carousel = document.getElementById('carousel')
    let WorkArticelle = document.getElementById('workArticle')
    let articlesNr = Carousel?.children.length

    const [currentArtNr , setArtNr] = useState(0)
    const mobile = window.innerWidth <= 767
    const mobileArtOffset = mobile ? 1 : 2
    
    useEffect(()=>{
        Carousel = document.getElementById('carousel')
        WorkArticelle = document.getElementById('workArticle')
        articlesNr = Carousel?.children.length
    },[])
    useEffect(()=>{
        Carousel.style.transform = `translateX(0px)`
        setArtNr(0)
    },[window.innerWidth])
    useEffect(()=>{
 
        if(mobile && document.querySelector(`.${styles.workPoints}`).childNodes){
          document.querySelector(`.${styles.workPoints}`).childNodes.forEach(element=>{
            element.classList.remove(styles.active)
          })
          document.querySelector(`.${styles.workPoints}`).childNodes[currentArtNr].classList.add(styles.active)
          console.log(  document.querySelector(`.${styles.workPoints}`).childNodes)
        } else if (!mobile && document.querySelector(`.${styles.workPoints}`).childNodes) {
            document.querySelector(`.${styles.workPoints}`).childNodes.forEach(element=>{
                element.classList.remove(styles.active)
            })
            document.querySelector(`.${styles.workPoints}`).childNodes[currentArtNr].classList.add(styles.active)
            document.querySelector(`.${styles.workPoints}`).childNodes[currentArtNr+1].classList.add(styles.active)
        }



        Carousel.style.transform = `translate(-${WorkArticelle.offsetWidth * currentArtNr}px)`
    },[currentArtNr , mobile])


    const backwardBtnHandler = ()=>{
        if(currentArtNr > 0){
            setArtNr(currentArtNr-1)
            
           }else{
               console.log('no more' , currentArtNr)
           }
    }

    const forwardBtnHandler = ()=>{
        if(currentArtNr < articlesNr-mobileArtOffset){
            setArtNr(currentArtNr+1)
        }else{
            console.log('no more' , currentArtNr)
        }
    }



    return(
        <div className={styles.workCarousel}>
            <button className={styles.backwardBtn} onClick={backwardBtnHandler} id='backbtn'></button> 
            <button className={styles.forwardBtn} onClick={forwardBtnHandler} id='nextbtn'></button>
            <div className={styles.workArticles} id='carousel'>
                <article id='workArticle'>

                    <a href='https://poofy25.github.io/online-shop' target="_blank">poofy25.github.io/online-shop</a>
                    <h1>Ecommerce</h1>
                    <div className={styles.workBackground}>  
                                  
                    </div>

                </article>

                <article> 

                    <a href='https://poofy25.github.io/online-shop' target="_blank">poofy25.github.io/poofys_Portfolio</a>
                    <h1>Portfolio</h1>
                    <div className={styles.workBackground}>
                       
                    </div>

                </article>

                <article>

                    <a>poofy25.github.io/case-simulator</a>
                    <h1>Game</h1>
                    <div className={styles.workBackground}>
                        
                    </div>

                </article>

                <article>

                    <a>poofy25.github.io/dorians-website</a>
                    <h1>Portfolio</h1>
                    <div className={styles.workBackground}>
                        
                    </div>

                </article>
            </div>
            <div className={styles.workPoints}>
                <span onClick={()=>setArtNr(0)}></span>
                <span onClick={()=>setArtNr(1)}></span>
                <span onClick={()=>setArtNr(2)}></span>
                <span onClick={()=>{if(!mobile){setArtNr(2)}else{setArtNr(3)}}}></span>
            </div>
        </div>
    )
}

export default WorksCarousel