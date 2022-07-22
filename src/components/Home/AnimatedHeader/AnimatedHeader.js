import React from 'react';
import wheel from '../../../assets/images/wheel.svg';
import './AnimatedHeader.scss';

const AnimatedHeader = ({ hover, setHover, label }) => {
  return (
    <span
      className={hover ? 'header-on-hover hover' : 'header-on-hover'}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setHover(false);
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
