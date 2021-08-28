import React from "react";
import { animated, config, useSpring } from "react-spring"
import { useScrollContext } from "../ScrollingProvider";
import './Header.scss';

const Header = () => {

  const { position: { currentPage }, animeProps: { activeNav }, handleNavigation } = useScrollContext();
  const large = window.matchMedia('(min-width: 480px)')
  const props = useSpring({
    to: { x: `${activeNav * (large.matches ? 1 : 2)}vw` },
    config: config.molasses
  })

  return (
    <header style={{ zIndex: '100' }}>
      <nav>
        <ul className="list">
          <animated.div style={props} className="active-bg" />
          <animated.hr style={props} />
          <li id="h" className={currentPage === 0 ? 'active' : ''}>
            <button onClick={() => handleNavigation(0)}>Home</button>
          </li>
          <li id="a" className={currentPage === 1 ? 'active' : ''}>
            <button onClick={() => handleNavigation(1)}>About</button>
          </li>
          <li id="p" className={currentPage === 2 ? 'active' : ''}>
            <button onClick={() => handleNavigation(2)}>Portfolio</button>
          </li>
          <li id="s" className={currentPage === 3 ? 'active' : ''}>
            <button onClick={() => handleNavigation(3)}>Skills</button>
          </li>
          <li id="c" className={currentPage === 4 ? 'active' : ''}>
            <button onClick={() => handleNavigation(4)}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
