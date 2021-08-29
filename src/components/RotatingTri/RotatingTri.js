import React, { useLayoutEffect } from 'react';
import './RoattingTri.scss';
import { useTheme } from 'css-vars-hook';

const RotatingTri = ({
  animeClass,
  on,
  over,
  under,
  side,
  origin,
  height,
  color,
}) => {
  const { setRef, setVariable, style } = useTheme({
    on,
    over,
    under,
    origin,
    height,
    color,
  });
  const borderStyles =
    side === 'left'
      ? { borderRightWidth: '110vw', borderLeftWidth: '0' }
      : { borderLeftWidth: '110vw', borderRightWidth: '0' };

  useLayoutEffect(() => {
    setVariable('on', on);
    setVariable('over', over);
    setVariable('under', under);
    setVariable('height', height);
    setVariable('origin', origin);
    setVariable('color', color);
  }, [color, height, on, origin, over, under, setVariable]);

  return (
    <div ref={setRef} style={style}>
      <div className={`rotating-tri tri-${animeClass}`} style={borderStyles} />;
    </div>
  );
};

export default RotatingTri;
