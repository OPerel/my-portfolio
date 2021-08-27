import React from "react"
import WorkTabs from "./WorkTabs/WorkTabs"

const Skills = ({ animeClass, skills, work }) => {
  return (
    <div className="skills-wrapper">
      <section className="app-skills">
        <div className="container">
          {/*<parallax-el animeClass={this.animeClass} on={0} over={-80} under={90}>*/}
            <h2>Skills & Experience</h2>
          {/*</parallax-el>*/}

          <div className="skills-container">
            <div className="skills-list">
              {skills.map(s => (
                <div key={s.name} className="skills-item">
                  <span>{s.name}</span>
                  <div
                    className="level"
                    style={{
                      width: animeClass === 'on' ? `${s.rating * 20}%` : '0'
                    }}
                  />
                </div>
              ))}
            </div>

            {work.length > 0 && (
              <WorkTabs work={work} />
            )}
          </div>

        </div>
        {/*<rotating-tri*/}
        {/*  color="#023a38"*/}
        {/*  side="left"*/}
        {/*  animeClass={this.animeClass}*/}
        {/*  height={130}*/}
        {/*  origin="top left"*/}
        {/*  on={0}*/}
        {/*  under={-90}*/}
        {/*  over={90}*/}
        {/*/>*/}

      </section>
      <div className="end-tri" />
    </div>
  )
}

export default Skills