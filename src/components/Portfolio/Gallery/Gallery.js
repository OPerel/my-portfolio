import React, { useLayoutEffect, useRef, useState } from 'react';
import { IonButton, IonIcon, IonSlide, IonSlides } from '@ionic/react';
import Card from './Card/Card';
import { chevronBack, chevronForward } from 'ionicons/icons';
import './Gallery.scss';

const Gallery = ({ projects }) => {
  const [displayAll, setDisplayAll] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const filteredProjects = projects.filter((_, i) => i < 5);
  const [displayProjects, setDisplayProjects] = useState(filteredProjects);

  useLayoutEffect(() => {
    const projectsToDisplay = displayAll ? projects : filteredProjects;
    setDisplayProjects(projectsToDisplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayAll]);

  const sliderOptions = {
    mousewheel: true,
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        spaceBetween: 10,
      },
      780: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
    },
  };

  const slidesRef = useRef(null);

  return (
    <div className="gallery-container">
      <IonSlides
        // TODO: this is bad.. if issue not resolved will have to switch slider. See https://www.npmjs.com/package/react-id-swiper
        key={displayProjects.map(p => p.name).join('_')}
        pager={true}
        options={sliderOptions}
        className={
          showBtn || displayAll ? 'pagination-start' : 'pagination-center'
        }
        ref={slidesRef}
        onIonSlideDrag={async () => {
          const end = await slidesRef.current.isEnd();
          setShowBtn(end);
        }}
      >
        {displayProjects.map(project => (
          <IonSlide key={project.name}>
            <Card project={project} />
          </IonSlide>
        ))}
      </IonSlides>
      <IonButton
        className={showBtn || displayAll ? 'gallery-btn' : 'gallery-btn hide'}
        onClick={() => setDisplayAll(!displayAll)}
      >
        <IonIcon
          slot={displayAll ? 'start' : 'end'}
          icon={displayAll ? chevronBack : chevronForward}
        />
        {displayAll ? 'Hide' : 'See More'}
      </IonButton>
    </div>
  );
};

export default Gallery;
