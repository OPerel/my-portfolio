import React from "react"
// import Gallery from './Gallery/Gallery';
import Parallax from '../Parallax/Parallax';
import './Portfolio.scss';
// import { useHasBeenVisible } from "../../hooks/useIsLoaded"

import loadable from '@loadable/component';
// import useIsLoaded from "../../hooks/useIsLoaded"
const Gallery = loadable(() => import('./Gallery/Gallery'));
// const Gallery = React.lazy(() =>
//   import('./Gallery/Gallery')
// );

const Portfolio = ({ animeClass, projects, scrolled }) => {

  return (
    <section className="app-portfolio">
      <div className="container">
        <h2>My Projects</h2>
      </div>
      <Parallax
        animeClass={animeClass}
        positions={{ on: 0, over: -50, under: 60 }}
      >
        {scrolled && <Gallery projects={projects} />}
      </Parallax>
    </section>
  );
};

export default Portfolio;
