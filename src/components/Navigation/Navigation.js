import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.css';
import {FaAlignRight} from 'react-icons/fa';

//   const Navigation = () => {
//     return(
//           <div className="navMenu">
//           <div className="navBar">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About Me</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//             <NavLink to="/portfolio">Portfolio</NavLink>
//             <NavLink to="/resume">Resume</NavLink>
//           </div>
//           </div>
//     );
// }   

const Navigation = () => {

    return (
      <div className="navBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    )
}

export default Navigation;