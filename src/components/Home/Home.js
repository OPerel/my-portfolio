import React, { useState } from 'react';
import bgImg from '../../assets/images/home-bg.webp';
import './Home.scss';
import Parallax from '../Parallax/Parallax';
import Text from './Text/Text';
import AnimatedHeader from './AnimatedHeader/AnimatedHeader';
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Home = ({ animeClass, name, label }) => {
  const [showText, setShowText] = useState(false);
  const [hover, setHover] = useState(false);
  const matches = useMediaQuery('(min-width: 1500px)');

  return (
    <section className="app-home">
      <div className="home-container">
        <p>Hello, my name is</p>
        <Parallax
          animeClass={animeClass}
          positions={{ on: 0, over: -60, under: 0 }}
          enterFrom={45}
        >
          <h1>{name}</h1>
        </Parallax>
        <p>and I'm a</p>
        <Parallax
          animeClass={animeClass}
          positions={{ on: 0, over: -90, under: 0 }}
          enterFrom={35}
        >
          <h2>
            Full Stack{' '}
            <AnimatedHeader
              hover={hover}
              setHover={setHover}
              setShowText={setShowText}
              showText={showText}
              label={label}
            />
          </h2>
        </Parallax>
      </div>

      <Parallax
        animeClass={animeClass}
        positions={{ on: -60, over: 100, under: 0 }}
        enterFrom={-100}
      >
        <img className="bg" src={bgImg} alt="hex" />
      </Parallax>

      {matches && (showText && <Text setShowText={setShowText} setHover={setHover} />)}
    </section>
  );
};

export default Home;
