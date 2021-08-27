import React, { useState, useLayoutEffect, createContext, useContext } from "react";

const initPosition = {
  currentPage: 0,
  prevPage: 0
}
const initAnimeProps = {
  scrollPos: 0,
  activeNav: 0,
  sectionGap: 0
}

const ScrollContext = createContext({
  position: initPosition,
  animeProps: initAnimeProps,
  handleNavigation: () => {}
});
export const useScrollContext = () => useContext(ScrollContext);

const ScrollingProvider = ({  children  }) => {

  const [position, setPosition] = useState({ currentPage: 0, prevPage: 0 });
  const [animeProps, setAnimeProps] = useState({
    scrollPos: 0,
    activeNav: 0,
    sectionGap: 0
  });

  const handleNavigation = (to) => {
    setPosition(prev => ({ currentPage: to, prevPage: prev.currentPage }));
  }

  useLayoutEffect(() => {
    const { currentPage, prevPage } = position;
    setAnimeProps({
      scrollPos: currentPage === 4 ? -395 : (currentPage) * -100,
      activeNav: currentPage * 8,
      sectionGap: Math.abs(prevPage - currentPage)
    })
  }, [position]);

  return (
    <ScrollContext.Provider value={{ position, animeProps, handleNavigation }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollingProvider;