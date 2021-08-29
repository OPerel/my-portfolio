import React, {
  useState,
  useLayoutEffect,
  createContext,
  useContext,
} from 'react';

const initialPosition = {
  currentPage: 0,
  prevPage: 0,
};

const ScrollContext = createContext({
  position: initialPosition,
  handleNavigation: () => {},
});
export const useScrollContext = () => useContext(ScrollContext);

const ScrollingProvider = ({ children }) => {
  const [position, setPosition] = useState(initialPosition);

  const handleNavigation = to => {
    setPosition(prev => ({ currentPage: to, prevPage: prev.currentPage }));
  };

  const doc = document.documentElement;

  useLayoutEffect(() => {
    const { currentPage, prevPage } = position;
    const scrollPos = currentPage === 4 ? -395 : currentPage * -100;
    const activeNav = currentPage * 8;
    const sectionGap = Math.abs(prevPage - currentPage);
    doc.style.setProperty('--scrollPos', `${scrollPos}`);
    doc.style.setProperty('--activeNav', `${activeNav}`);
    doc.style.setProperty('--sectionGap', `${sectionGap}`);
  }, [position]);

  return (
    <ScrollContext.Provider value={{ position, handleNavigation }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollingProvider;
