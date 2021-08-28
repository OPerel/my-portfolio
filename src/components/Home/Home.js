import React from "react"

const Home = ({ name, label }) => {
  return (
    <section className="app-home">
      <div className="home-container">
        <p>Hello, my name is</p>
        {/*<parallax-el animeClass={this.animeClass} on={0} over={-60} under={0} enterFrom={45}>*/}
          <h1>{name}</h1>
        {/*</parallax-el>*/}
        <p>and I'm a</p>
        {/*<parallax-el animeClass={this.animeClass} on={0} over={-90} under={0} enterFrom={35}>*/}
          <h2>Full Stack <span className="header-on-hover">
              <span className="header">{label}</span>
              <div className="rotating-wrapper">
                <img src="../../../assets/wheel.svg" alt="wheel of dhamma" className="rotating" />
              </div>
            </span></h2>
        {/*</parallax-el>*/}
      </div>

      {/*<parallax-el animeClass={this.animeClass} on={-60} over={100} under={0} enterFrom={-100}>*/}
        <img className="bg" src="../../../assets/home-bg.webp" alt="hex" />
      {/*</parallax-el>*/}
    </section>
  )
}

export default Home;