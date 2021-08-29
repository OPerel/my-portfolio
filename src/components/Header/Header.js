import React from 'react';
import { useScrollContext } from '../ScrollingProvider';
import './Header.scss';

const Header = () => {
  const {
    position: { currentPage },
    handleNavigation,
  } = useScrollContext();

  return (
    <header>
      <nav>
        <ul className="list">
          <div className="active-bg" />
          <hr />
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
  );
};

export default Header;
