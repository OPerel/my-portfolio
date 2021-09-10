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
      <nav className="main-nav">
        <div className="nav-list">
          <div className="active-bg" />
          <hr />
          <div
            id="h"
            className={currentPage === 0 ? 'nav-item active' : 'nav-item'}
          >
            <button onClick={() => handleNavigation(0)}>Home</button>
          </div>
          <div
            id="a"
            className={currentPage === 1 ? 'nav-item active' : 'nav-item'}
          >
            <button onClick={() => handleNavigation(1)}>About</button>
          </div>
          <div
            id="p"
            className={currentPage === 2 ? 'nav-item active' : 'nav-item'}
          >
            <button onClick={() => handleNavigation(2)}>Portfolio</button>
          </div>
          <div
            id="s"
            className={currentPage === 3 ? 'nav-item active' : 'nav-item'}
          >
            <button onClick={() => handleNavigation(3)}>Skills</button>
          </div>
          <div
            id="c"
            className={currentPage === 4 ? 'nav-item active' : 'nav-item'}
          >
            <button onClick={() => handleNavigation(4)}>Contact</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
