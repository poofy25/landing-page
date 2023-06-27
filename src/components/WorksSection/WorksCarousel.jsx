
import styles from "./worksCarousel.module.css"

import ecommerce1 from '/src/assets/workImages/ecommerce1.png'
import ecommerce2 from '/src/assets/workImages/ecommerce2.png'

import portfolio11 from '/src/assets/workImages/portfolio1.1.png'

import { useEffect  , useState} from "react"


function WorksCarousel() {
       
    let Carousel = document.getElementById('carousel')
    let WorkArticelle = document.getElementById('workArticle')
    let articlesNr = Carousel?.children.length

    const [currentArtNr , setArtNr] = useState(0)
    const mobile = window.innerWidth <= 767
    const mobileArtOffset = mobile ? 1 : 3
    
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
        Carousel.style.transform = `translate(-${WorkArticelle.offsetWidth * currentArtNr}px)`
    },[currentArtNr])


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

                    <p>poofy25.github.io/ecommerce</p>
                    <h1>Ecommerce</h1>
                    <div className={styles.workBackground}>  
                    <img src={ecommerce1}/>
                        <img src={ecommerce2}/>                      
                    </div>
                </article>
                <article> 
                    <p>poofy25.github.io/poofys_Portfolio</p>
                    <h1>Portfolio</h1>
                    <div className={styles.workBackground}>
                        <img src={portfolio11}/>
                        <img src={portfolio11}/>
                    </div></article>
                <article>c</article>
                <article>d</article>
                <article>e</article>
            </div>
        </div>
    )
}

export default WorksCarousel