import React from "react";
import './Home.css'
import bg from '../props/wowsa3.jpeg';

function Home(){
    return(
        <div className = 'Home' id = 'Home'>
            <div className = "bg">
            <img src = {bg} alt=""/>
            </div>

            <div className= "content">
                <h1>
                    <c>Preston</c> Graber <br />
                    <d>Front-End Developer</d>
                    <p>Avid-Learner</p>
                </h1>

                <a href = "#Section2" className = "show-me">
                    <span>About me</span>
                </a>
            </div>
        </div>
    );
}

export default Home;