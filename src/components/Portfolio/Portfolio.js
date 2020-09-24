import React, {Component, useState} from "react";
import Wrapper from '../Wrapper/Wrapper';
import ProjectCard from '../ProjectCard/ProjectCard';
import portfolio from '../Portfolio/portfolio.json';


class Portfolio extends Component {
    state = {
        portfolio
    };

render() {
  return (
        <Wrapper>
          {this.state.portfolio.map(portfolio => (
            <ProjectCard
              id={portfolio.id}
              key={portfolio.id}
              name={portfolio.name}
              image={portfolio.image}
              description={portfolio.description}
              link={portfolio.link}
              github={portfolio.github}

            />
          ))}
        </Wrapper>
      );
    } 
}

export default Portfolio;