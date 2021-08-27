import React from "react"

const Portfolio = ({ /*animeClass,*/ projects }) => {
  return (
    <section className="app-portfolio">
      <div className="container">
        <h2>My Projects</h2>
      </div>
      {/*<parallax-el animeClass={animeClass} on={0} over={-50} under={60}>*/}
        <projects-gallery projects={projects} />
      {/*</parallax-el>*/}
    </section>
  )
}

export default Portfolio