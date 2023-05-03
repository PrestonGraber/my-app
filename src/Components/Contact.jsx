import React, {useEffect, useState} from 'react';

import './Contact.css';

import {FiLinkedin} from "react-icons/fi";
import {FiYoutube} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";


function Contact() {

    const [active, setactive] = useState(false);

    useEffect(() =>{
    function scrollAnimation(){
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact");
  
      let contact_top = contact.getBoundingClientRect().top;
  
      if(contact_top < windowHeight - animationPoint){
       setactive(true);
      }
    }
    scrollAnimation();  
    window.addEventListener("scroll",scrollAnimation);
  }, []);

  
  return (
    <div className = {`contact ${active && "active"}`} id = 'Contact'>
    <h1>
        <span>Contact </span><b> Me</b>
    </h1>

    <div className = "socials">
    <div className = "icon" style={{"--c": "#d63cda"}}>
    
    <FiGithub className = "social-icons" />
    <a className = "tooltip" rel="noreferrer" href = "https://github.com/PrestonGraber" target = "_blank">GitHub</a>
    </div>

    <div className = "icon" style={{"--c": "#1d3fff"}}>
    <FiLinkedin className = "social-icons"/>
    <a className = "tooltip" rel="noreferrer" href = "https://www.linkedin.com/in/preston-graber-9b051a227/" target = "_blank">Linkedin</a>
    </div>

    <div className = "icon" style={{"--c": "#e41726"}}>
    <FiYoutube className = "social-icons"/>
    <a className = "tooltip" rel="noreferrer" href = "https://www.youtube.com/c/DevChronicle/featured" target = "_blank">Youtube</a>
    </div>

    <div className = "icon" style={{"--c": "#ffd721"}} >
    <FiMail className = "social-icons" />
    <a className = "tooltip" rel="noreferrer"  href = "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=DevChronicle0@gmail.com&tf=1" target = "_blank">Email</a>
    </div>

  </div>

</div>
  )
}

export default Contact