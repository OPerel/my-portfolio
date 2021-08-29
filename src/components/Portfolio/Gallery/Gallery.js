import React, { useState } from 'react';

const Gallery = ({ projects }) => {
  const [displayAll, setDisplayAll] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

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

  const displayProjects = displayAll
    ? projects
    : projects.filter((_, i) => i < 5);
  return projects ? (
    // <Host>
    <div className="gallery-container">
      <ion-slides
        pager={true}
        options={sliderOptions}
        class={showBtn || displayAll ? 'pagination-start' : 'pagination-center'}
        ref={el => (this.slides = el)}
      >
        {displayProjects.map(project => (
          <ion-slide>
            <project-card project={project} />
          </ion-slide>
        ))}
      </ion-slides>
      <ion-button
        className={showBtn || displayAll ? '' : 'hide'}
        onClick={() => setDisplayAll(!displayAll)}
      >
        <ion-icon
          slot={displayAll ? 'start' : 'end'}
          name={displayAll ? 'chevron-back' : 'chevron-forward'}
        />
        {displayAll ? 'Hide' : 'See More'}
      </ion-button>
    </div>
  ) : //{/*</Host>*/}
  null;
};

export default Gallery;
