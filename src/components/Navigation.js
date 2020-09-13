import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/portfolio">portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    );
}