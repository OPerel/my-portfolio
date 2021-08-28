import React, { useLayoutEffect, useRef } from "react"
import './RoattingTri.scss';

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
  const borderStyles = side === 'left' ?
    { borderRightWidth: '110vw', borderLeftWidth: '0' } : { borderLeftWidth: '110vw', borderRightWidth: '0' };

  const ref = useRef(null)
  useLayoutEffect(() => {
    ref.current.style.setProperty('--on', `${on}`);
    ref.current.style.setProperty('--over', `${over}`);
    ref.current.style.setProperty('--under', `${under}`);
    ref.current.style.setProperty('--height', `${height}`);
    ref.current.style.setProperty('--origin', `${origin}`);
    ref.current.style.setProperty('--color', `${color}`);
  }, [color, height, on, origin, over, under])

  return (
    <div ref={ref}>
      <div className={`rotating-tri tri-${animeClass}`} style={borderStyles} />;
    </div>
  )
}

export default RotatingTri