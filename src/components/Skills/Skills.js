import React, { forwardRef } from "react"
import WorkTabs from './WorkTabs/WorkTabs';
import RotatingTri from '../RotatingTri/RotatingTri';
import './Skills.scss';
import Parallax from '../Parallax/Parallax';

const Skills = forwardRef(({ animeClass, skills, work }, ref) => {
  return (
    <div className="skills-wrapper">
      <section className="app-skills">
        <div className="container">
          <Parallax
            animeClass={animeClass}
            positions={{ on: 0, over: -80, under: 90 }}
          >
            <h2>Skills & Experience</h2>
          </Parallax>

          <div className="skills-container" ref={ref}>
            <div className="skills-list">
              {skills.map(s => (
                <div key={s.name} className="skills-item">
                  <span>{s.name}</span>
                  <div
                    className="level"
                    style={{
                      width: animeClass === 'on' ? `${s.rating * 20}%` : '0',
                    }}
                  />
                </div>
              ))}
            </div>

            {work.length > 0 && <WorkTabs work={work} />}
          </div>
        </div>
        <RotatingTri
          color="#023a38"
          side="left"
          animeClass={animeClass}
          height={130}
          origin="top left"
          on={0}
          under={-90}
          over={90}
        />
      </section>
      <div className="end-tri" />
    </div>
  );
});

export default Skills;
