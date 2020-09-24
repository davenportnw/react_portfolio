import React from 'react';
import './card.css';

function ProjectCard(props) {
  return (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>View Here:</strong> {props.occupation}
        </li>
        <li>
          <strong>Description:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
  )
}

export default ProjectCard;