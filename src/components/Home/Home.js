import React from "react";
import bgImg from '../../assets/images/home-bg.webp';
import wheel from '../../assets/images/wheel.svg';
import './Home.scss';
import Parallax from "../Parallax/Parallax"

const Home = ({ animeClass, name, label }) => {
  return (
    <section className="app-home">
      <div className="home-container">
        <p>Hello, my name is</p>
        <Parallax animeClass={animeClass} positions={{ on: 0, over: -60, under: 0 }} enterFrom={45}>
          <h1>{name}</h1>
        </Parallax>
        <p>and I'm a</p>
        <Parallax animeClass={animeClass} positions={{ on: 0, over: -90, under: 0 }} enterFrom={35}>
          <h2>Full Stack <span className="header-on-hover">
              <span className="header">{label}</span>
              <div className="rotating-wrapper">
                <img src={wheel} alt="wheel of dhamma" className="rotating" />
              </div>
            </span></h2>
        </Parallax>
      </div>

      <Parallax animeClass={animeClass} positions={{ on: -60, over: 100, under: 0 }} enterFrom={-100}>
        <img
          className="bg"
          src={bgImg}
          alt="hex"
        />
      </Parallax>
    </section>
  )
}

export default Home;