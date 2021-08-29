import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { chevronDown, chevronUp } from 'ionicons/icons';
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
      <IonButton
        className={currentPage === 0 ? 'hide' : ''}
        onClick={() => handleClick('up')}
        disabled={currentPage === 0}
      >
        <IonIcon icon={chevronUp} />
      </IonButton>

      <IonButton
        className={currentPage === 4 ? 'hide' : ''}
        onClick={() => handleClick('down')}
        disabled={currentPage === 4}
      >
        <IonIcon icon={chevronDown} />
      </IonButton>
    </div>
  );
};

export default ArrowNav;
