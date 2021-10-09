import React from 'react';
import Parallax from '../Parallax/Parallax';
import './Portfolio.scss';
import loadable from '@loadable/component';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const Gallery = loadable(() => import('./Gallery/Gallery'));

const Portfolio = ({ animeClass, projects, scrolled }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <section className="app-portfolio">
      <div className="container">
        <h2>My Projects</h2>
      </div>
      <Parallax
        animeClass={animeClass}
        positions={{ on: matches ? 5 : 0, over: -50, under: 60 }}
      >
        {scrolled && <Gallery projects={projects} />}
      </Parallax>
    </section>
  );
};

export default Portfolio;
