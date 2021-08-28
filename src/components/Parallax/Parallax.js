import React, { useLayoutEffect, useRef } from "react"
import './Parallax.scss';

const Parallax = ({
  children,
  animeClass,
  positions,
  enterFrom
}) => {

  const ref = useRef(null);
  const { on, over, under } = positions;
  useLayoutEffect(() => {
    const element = ref.current;
    element.style.setProperty('--on', `${on}`);
    element.style.setProperty('--over', `${over}`);
    element.style.setProperty('--under', `${under}`);
    element.style.setProperty('--enterFrom', `${enterFrom}`);
  }, [enterFrom, on, over, under]);

  return (
    <div ref={ref} className={`${animeClass} enter`} style={{
      '--on': on,
      '--over': over,
      '--under': under,
      '--enterFrom': enterFrom
    }}>
      {children}
    </div>
  )
}

export default Parallax;