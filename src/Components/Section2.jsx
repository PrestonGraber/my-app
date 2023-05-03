import React, { useEffect,useState } from 'react'
import './Section2.css'

function Section2() {

  const [active, setactive] = useState(false);

  useEffect(() =>{
  function scrollAnimation(){
    const animationPoint = 300;
    const windowHeight = window.innerHeight;
    const section2 = document.querySelector(".section2");

    let section2_top = section2.getBoundingClientRect().top;

    if(section2_top < windowHeight - animationPoint){
     setactive(true);
    }
  }
  scrollAnimation();
  window.addEventListener("scroll",scrollAnimation);
}, []);

  return (
    <div className = {`section2 ${active && "active"}`} id = 'Section2'>
        <div className = "text-content">
            <div className = "text text1">
                <h1>How I <span>Started</span></h1>
                <h2>
                  I first learned how to program in the year of 2019. I interned for Wattre.Inc and my mentor
                  was adamant that I learned Objective-C. He made me practice the language by programming micro-controllers
                  using arduino. Soon after, I learned that I much prefer Front-End Development and have been zoning in my skills
                  the past few years. 
                </h2>
            </div>

            <div className = "text text2">
                <h1><span>A little</span> About Me</h1>
                <h2>I'm an avid reader for science-fiction. Some hobbies of mine are
                my coral reef tank, playing piano, and working on some coding projects 
                to pass the time. The current project I am working on is a pathfinding UI that shows the animation
                while utilizing Dijkstra's Algorithim, A* Search, and Greedy Best-First search Algorithim. </h2>
            </div>
        </div>
       
    </div>
  )
}

export default Section2