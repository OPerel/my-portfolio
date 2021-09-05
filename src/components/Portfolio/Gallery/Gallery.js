import React, { useLayoutEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '@material-ui/core/Button';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ProjectCard from './Card/Card';
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
    modules: [Pagination],
    pagination: true,
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
    onSliderMove: swiper => {
      const end = swiper.isEnd;
      setShowBtn(end);
    },
  };

  return (
    <div className="gallery-container">
      <Swiper
        className={
          showBtn || displayAll ? 'pagination-start' : 'pagination-center'
        }
        {...sliderOptions}
      >
        {displayProjects.map(project => (
          <SwiperSlide key={project.name}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        className={
          showBtn || displayAll ? 'btn gallery-btn' : 'btn gallery-btn hide'
        }
        onClick={() => setDisplayAll(!displayAll)}
        startIcon={displayAll ? <ChevronLeftTwoToneIcon /> : null}
        endIcon={displayAll ? null : <ChevronRightTwoToneIcon />}
      >
        {displayAll ? 'Hide' : 'See More'}
      </Button>
    </div>
  );
};

export default Gallery;
