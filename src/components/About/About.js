import React from "react"

const About = ({ animeClass, summary}) => {
  return (
    <section className="app-about">
      <div className="container">
        {/*<parallax-el animeClass={animeClass} on={0} under={60} over={-50}>*/}
          <h2>About Me</h2>
        {/*</parallax-el>*/}

        <div className="img-wrapper">
          {/*<parallax-el animeClass={this.animeClass} on={0} under={-50} over={80}>*/}
            <div className="right-line" />
          {/*</parallax-el>*/}
          <div className="bottom-line" />
          <div className="my-image" />
        </div>
        <p dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, "<br/>") }} />
      </div>

      {/*<rotating-tri color="#3e7a7836" side="right" animeClass={animeClass} height={65} origin="bottom left" on={0}*/}
      {/*              under={20} over={-20} />*/}
    </section>
  )
}

export default About;