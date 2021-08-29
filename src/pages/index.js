import * as React from 'react';
import { useScrollContext } from '../components/ScrollingProvider';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import ArrowNav from '../components/ArrowNav/ArrowNav';

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
