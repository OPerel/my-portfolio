import React, { useLayoutEffect } from 'react';
import { useTheme } from 'css-vars-hook';
import './Parallax.scss';

const Parallax = ({ children, animeClass, positions, enterFrom }) => {
  const { on, over, under } = positions;
  const { setRef, setVariable, style } = useTheme({
    enterFrom,
    on,
    over,
    under,
  });
  useLayoutEffect(() => {
    setVariable('on', on);
    setVariable('over', over);
    setVariable('under', under);
    setVariable('enterFrom', enterFrom);
  }, [enterFrom, on, over, under, setVariable]);

  return (
    <div ref={setRef} className={`${animeClass} enter`} style={style}>
      {children}
    </div>
  );
};

export default Parallax;
