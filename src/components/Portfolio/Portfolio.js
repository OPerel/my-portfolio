import React, { lazy, Suspense } from 'react';
import Parallax from '../Parallax/Parallax';
import './Portfolio.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
const Gallery = lazy(() => import('./Gallery/Gallery'));

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
        {scrolled && (
          <Suspense fallback={null}>
            <Gallery projects={projects} />
          </Suspense>
        )}
      </Parallax>
    </section>
  );
};

export default Portfolio;
