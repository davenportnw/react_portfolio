import React from 'react';
import './home.css';
import headshot from '../assets/headshot.jpg';
const home = () => {
    return(
        <div className="body">
            <h1 className="nicole">Hi there, I'm Nicole</h1>
            <img src={headshot} alt="Headshot" width="500px" height="500px" className="headshot"/>
            <p>Passionate Web Developer Student, excited to create and learn.</p>
        </div>
    );
}

export default home;