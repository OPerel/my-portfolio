import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpTwoToneIcon from '@material-ui/icons/KeyboardArrowUpTwoTone';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';

import { useScrollContext } from '../ScrollingProvider';
import './ArrowNav.scss';

const ArrowNav = () => {
  const {
    position: { currentPage },
    handleNavigation,
  } = useScrollContext();

  const handleClick = dir => {
    const sectionNum = dir === 'down' ? currentPage + 1 : currentPage - 1;
    if (!validator(sectionNum)) return;
    handleNavigation(sectionNum);
  };

  const validator = section => {
    return section >= 0 && section <= 4;
  };

  return (
    <div className="arrow-nav">
      <Button
        className={currentPage === 0 ? 'arrow-nav-btn hide' : 'arrow-nav-btn'}
        onClick={() => handleClick('up')}
        disabled={currentPage === 0}
      >
        <KeyboardArrowUpTwoToneIcon className="arrow-nav-icons" />
      </Button>

      <Button
        className={currentPage === 4 ? 'arrow-nav-btn hide' : 'arrow-nav-btn'}
        onClick={() => handleClick('down')}
        disabled={currentPage === 4}
      >
        <KeyboardArrowDownTwoToneIcon className="arrow-nav-icons" />
      </Button>
    </div>
  );
};

export default ArrowNav;
