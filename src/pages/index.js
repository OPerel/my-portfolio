import React, { useEffect } from 'react';
import { useScrollContext } from '../components/ScrollingProvider';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import ArrowNav from '../components/ArrowNav/ArrowNav';
import Seo from '../components/seo';

// import loadable from '@loadable/component';
// const About = loadable(() => import('../components/About/About'));
// const Portfolio = loadable(() => import('../components/Portfolio/Portfolio'));
// const Skills = loadable(() => import('../components/Skills/Skills'));
// const Footer = loadable(() => import('../components/Footer/Footer'));
/**
 * TODO:
 * 2. Fix dynamic slides number
 * 3. SEO
 * 4. extra projects content
 * 5. remove logs on production
 * 8. contact on homepage (social icons or link to footer)
 *
 * BUGS:
 *
 * TODO: NOT MANDATORY!
 * 5. mobile scroll on swipe
 * 6. performance:
 * - gallery photos to webp
 * - requestAnimationFrame
 * - check the loader's impact on scores - probably bad... for now without delete component if sure
 * 7. use labels instead of hard coded text
 * 9. correlate scroll position with url hash
 * 10. animate horizontal line in about
 * 11. animate something in footer
 * 12. more bg images?
 * 13. changes background and parallax?
 * 14. more data from API (image) or make as much as possible configurable for other developers
 */

const IndexPage = ({ pageContext }) => {
  const {
    position: { currentPage },
  } = useScrollContext();

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
      const docEl = document.documentElement;
      const main = docEl.querySelector('main');
      const footer = docEl.querySelector('footer');
      const skills = docEl.querySelector('.skills-container');
      window.addEventListener('resize', e => {
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
      <main>
        <Home animeClass={getAnimeClass(0)} name={name} label={label} />
        <About animeClass={getAnimeClass(1)} summary={summary} />
        <Portfolio animeClass={getAnimeClass(2)} projects={projects} />
        <Skills animeClass={getAnimeClass(3)} skills={skills} work={work} />
      </main>
      <Footer />

      <ArrowNav />
    </div>
  );
};

export default IndexPage;
