import React, { useEffect } from 'react';
import { useScrollContext } from '../components/ScrollingProvider';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import ArrowNav from '../components/ArrowNav/ArrowNav';

/**
 * TODO:
 * 2. Fix dynamic slides number
 * 3. SEO
 * 4. extra projects content
 * 5. remove logs on production
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
 * 8. contact on homepage (social icons or link to footer)
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
    let timer;
    window.addEventListener('resize', e => {
      if (currentPage === 4) {
        console.log('resize e: ', e);
        this.root.querySelector('main').classList.add('keyboard-open');
        this.root.querySelector('footer').classList.toggle('keyboard-footer');
        this.root
          .querySelector('.skills-container')
          .classList.toggle('keyboard-skills');
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          console.log('**** timeout ****');
          this.root.querySelector('main').classList.remove('keyboard-open');
        }, 300);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    basics: { name, label, summary },
    projects,
    skills,
    work,
  } = pageContext.data;
  return (
    <div>
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
