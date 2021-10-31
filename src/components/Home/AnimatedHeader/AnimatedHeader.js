import React from 'react';
import wheel from '../../../assets/images/wheel.svg';
import './AnimatedHeader.scss';

const AnimatedHeader = ({ hover, setHover, setShowText, showText, label }) => {
  const handleClick = () => {
    setHover(true);
    setShowText(!showText);
  };
  return (
    <span
      className={hover ? 'header-on-hover hover' : 'header-on-hover'}
      onClick={handleClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        !showText && setHover(false);
      }}
    >
      <span className="header">{label}</span>
      <div className="rotating-wrapper">
        <img src={wheel} alt="wheel of dhamma" className="rotating" />
      </div>
    </span>
  );
};

export default AnimatedHeader;
