import React from 'react';
import './about.css';
import portriat from '../assets/aboutme.jpg';

const About = () => {
    return (
        <div className="body">
            <img src={portriat} alt="portrait" height="500px" width="500px" className="portrait"/>
            <p className="description">Hello, my name is Nicole Davenport. When I was two years old I was adopted from south China!
          I’ve always been a passionate and curious person, wanting to expand my knowledge on whatever crossed my way. I am currently enrolled at the University of Texas in Austin’s Coding Bootcamp. I am excited to challenge and expand my knowledge in coding the next six months. 
          When I am not coding or in school I am a full-time coach/admin at a local competitive cheer gym in Pflugerville Texas. I love being able to work with kids and teach them lessons that will stick with them beyond their cheerleading career. 
          Currently enrolled part-time at the West Texas A&M University studying Computer Information Systems.</p>
        </div>
    );
}

export default About;