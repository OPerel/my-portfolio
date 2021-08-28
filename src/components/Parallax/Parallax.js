import React from "react";
import './Parallax.scss';

const Parallax = ({
  children,
  animeClass,
  positions,
  enterFrom
}) => {
  const { on, over, under } = positions;
  // useLayoutEffect(() => {
  //   document.getElementById('parallax').classList.add('enter')
  // }, [])
  console.log('positions', positions)
  return (
    <div
      // key={enterFrom}
      className={`${animeClass} enter`}
      style={{
        '--on': on,
        '--over': over,
        '--under': under,
        '--enterFrom': enterFrom
      }}
    >
      {children}
    </div>
  )
}

export default Parallax;