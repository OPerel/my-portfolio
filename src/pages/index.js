import React, { useEffect, useRef } from 'react';
import { useScrollContext } from '../components/ScrollingProvider';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import ArrowNav from '../components/ArrowNav/ArrowNav';
import Seo from '../components/seo';
import { useHasBeenVisible } from '../hooks/useVisibility';
import FloatingSocial from '../components/FloatingSocial/FloatingSocial';

/**
 * TODO:
 *
 * BUGS:
 *
 * TODO: NOT MANDATORY!
 * 5. mobile scroll on swipe
 * 6. performance:
 * - check lazy loading
 * - gallery photos to webp
 * - requestAnimationFrame
 * 7. use labels instead of hard coded text
 * 9. correlate scroll position with url hash
 * 11. animate something in footer
 * 12. more bg images?
 * 13. changes background and parallax?
 * 14. more data from API (image) or make as much as possible configurable for other developers
 */

// let intersectionObserver;

const IndexPage = ({ pageContext }) => {
  const {
    position: { currentPage },
  } = useScrollContext();
  const about = useRef();
  const scrolled = useHasBeenVisible(about);

  const getAnimeClass = pageIdx => {
    if (currentPage > pageIdx) {
      return 'over';
    }
    if (currentPage < pageIdx) {
      return 'under';
    }
    return 'on';
  };

  useEffect(() => {
    // disable animation on mobile keyboard open
    if (currentPage === 4) {
      let timer;
      // TODO: try refactor to useRef hook
      const docEl = document.documentElement;
      const main = docEl.querySelector('main');
      const footer = docEl.querySelector('footer');
      const skills = docEl.querySelector('.skills-container');
      window.addEventListener('resize', () => {
        main.classList.add('keyboard-open');
        footer.classList.toggle('keyboard-footer');
        skills.classList.toggle('keyboard-skills');
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          main.classList.remove('keyboard-open');
        }, 300);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const {
    basics: { name, label, summary },
    projects,
    skills,
    work,
  } = pageContext.data;

  return (
    <div>
      <Seo />
      <Header />
      <FloatingSocial animeClass={currentPage <= 3 ? 'on-s' : 'over-s'} />
      <main>
        <Home animeClass={getAnimeClass(0)} name={name} label={label} />
        <About animeClass={getAnimeClass(1)} summary={summary} ref={about} />
        <Portfolio
          animeClass={getAnimeClass(2)}
          projects={projects}
          scrolled={scrolled}
        />
        <Skills animeClass={getAnimeClass(3)} skills={skills} work={work} />
      </main>
      <Footer scrolled={scrolled} />

      <ArrowNav />
    </div>
  );
};

export default IndexPage;
