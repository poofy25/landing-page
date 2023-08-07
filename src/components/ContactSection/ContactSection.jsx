

import styles from "./contactSection.module.css"

import mailIcon from "/src/assets/icons/mailIcon.png"
import callIcon from "/src/assets/icons/callIcon.png"
import facebookIcon from "/src/assets/icons/facebookIcon.png"

import emailjs from '@emailjs/browser';

import { useEffect } from "react";

function ContactSection() {


    const sendMessage = (e) =>{
        e.preventDefault()

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        const data = {
            name:name,
            email:email,
            message:message
        }

        emailjs.send('service_ayllqnw', 'template_oec31jm', data, 'sUyfMkwit5nNIZk7T');


       console.log(data , e.target)
       e.target.reset()
       
    }

    useEffect(()=>{

        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var W = window.innerWidth;
        var H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        var fontSize = 16;
        var columns = Math.floor(W / fontSize);
        var drops = [];
        for(var i=0; i<columns; i++){
            drops.push(0);
        }
        var str = "<CodeCraft/>";
        function draw(){
            context.fillStyle = " rgba(50, 54, 67,0.1)";
            context.fillRect(0, 0, W, H);
            context.fontSize = "700 " + fontSize + "px";
            context.fillStyle = "rgba(54, 195, 255,0.25)";
            for(var i=0; i<columns; i++){
                var index = Math.floor(Math.random()*str.length);
                var x = i * fontSize;
                var y = drops[i] * fontSize;
                context.fillText(str[index], x, y);
                if(y >= canvas.height && Math.random() > 0.99){
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        draw();
        setInterval(draw, 50);




    },[])


    return(
        <div id='contact' className={styles.contactSection}>
        <canvas className={styles.canvas} id='canvas'></canvas>
            <h1>CONTACT</h1>


            <div className={styles.content}>

               <div className={styles.contactInfo}>

                <h2>Contact Info</h2>
                <a href = "mailto: poofy25dev@gmail.com"><img src={mailIcon}/>poofy25dev@gmail.com</a>
                <a href = "tel: +37360951369"> <img src={callIcon}/>+37360951369</a>
                <a><img src={facebookIcon}/>codecraft</a>

               </div> 

               <div className={styles.contactForm}>
                    <h2>Contact form</h2>
                    <form onSubmit={(e)=>{sendMessage(e)}}>

                        <div className={styles.formWrap}>
                            <div>
                                <label>Your Name</label>
                                <input type="text" id="name" name="firstname" placeholder="Your name"
                                required
                                minLength="3"    
                                />
                            </div>

                            <div>
                                <label>Your Email</label>
                                <input type="email" id="email" name="lastname" placeholder="Your Email"
                                  required
                                  minLength="3"
                                  />
                            </div>
                        </div>
                        <label>Your Message</label>
                        <textarea id="message" required name="subject" placeholder="Your Message"></textarea>

                        <input className={styles.submit} type="submit" value="Send a Message"/>
                    </form>

               </div>

            </div>
        </div>
    )
}

export default ContactSection