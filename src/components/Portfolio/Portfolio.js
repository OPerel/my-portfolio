import React from 'react';
import Gallery from './Gallery/Gallery';
import Parallax from '../Parallax/Parallax';
import './Portfolio.scss';

const Portfolio = ({ animeClass, projects }) => {
  return (
    <section className="app-portfolio">
      <div className="container">
        <h2>My Projects</h2>
      </div>
      <Parallax
        animeClass={animeClass}
        positions={{ on: 0, over: -50, under: 60 }}
      >
        <Gallery projects={projects} />
      </Parallax>
    </section>
  );
};

export default Portfolio;
