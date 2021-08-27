import React from "react";
import { useScrollContext } from "../ScrollingProvider"
// import './Header.scss'; TODO: problem with fonts

const Header = () => {

  const { position: { currentPage }, handleNavigation } = useScrollContext();
  return (
    <header style={{ zIndex: '100' }}>
      <nav>
        <div className="list">
          <div className="active-bg" />
          <hr />
          <button id="h" className={currentPage === 0 ? 'active' : ''} onClick={() => handleNavigation(0)}>
            Home
          </button>
          <button id="a" className={currentPage === 1 ? 'active' : ''} onClick={() => {
            console.log('click')
            handleNavigation(1)
          }}>
            About
          </button>
          <button id="p" className={currentPage === 2 ? 'active' : ''} onClick={() => handleNavigation(2)}>
            Portfolio
          </button>
          <button id="s" className={currentPage === 3 ? 'active' : ''} onClick={() => handleNavigation(3)}>
            Skills
          </button>
          <button id="c" className={currentPage === 4 ? 'active' : ''} onClick={() => handleNavigation(4)}>
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
