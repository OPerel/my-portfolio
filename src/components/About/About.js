import React from 'react';
import './About.scss';
import Parallax from '../Parallax/Parallax';
import RotatingTri from '../RotatingTri/RotatingTri';

const About = ({ animeClass, summary }) => {
  return (
    <section className="app-about">
      <div className="container">
        <Parallax
          animeClass={animeClass}
          positions={{ on: 0, under: 60, over: -50 }}
        >
          <h2>About Me</h2>
        </Parallax>

        <div className="img-wrapper">
          <Parallax
            animeClass={animeClass}
            positions={{ on: 0, under: -50, over: 80 }}
          >
            <div className="right-line" />
          </Parallax>
          <div className="bottom-line" />
          <div className="my-image" />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, '<br/>') }}
        />
      </div>

      <RotatingTri
        color="#3e7a7836"
        side="right"
        animeClass={animeClass}
        height={65}
        origin="bottom left"
        on={0}
        under={20}
        over={-20}
      />
    </section>
  );
};

export default About;
