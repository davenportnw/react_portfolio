import React from 'react';
import './home.css';
import headshot from '../assets/headshot.jpg';
const home = () => {
    return(
        <div className="body">
            <img src={headshot} alt="Headshot" width="500px" height="500px" className="headshot"/>
            <h1 className="header">Hi there, my name is Nicole! I'm a Passionate Web Developer Student, excited to create and learn.</h1>
        </div>
    );
}

export default home;