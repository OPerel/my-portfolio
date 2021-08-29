import React, { useState } from 'react';
import './WorkTabs.scss';

const WorkTabs = ({ work }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = idx => {
    setActiveTab(idx);
  };

  const workPlaceData = work[activeTab];

  return (
    <div className="work-tabs-wrapper">
      <div className="work-tabs-nav">
        <div className="work-tabs-buttons">
          {work.map((w, idx) => (
            <button
              key={w.company}
              className={activeTab === idx ? 'active' : ''}
              onClick={() => handleTabClick(idx)}
            >
              {w.company}
            </button>
          ))}
        </div>
      </div>
      <div className="info">
        <p className="work-title">
          <span>
            <b>{workPlaceData.position}</b> @{' '}
          </span>
          {workPlaceData.website ? (
            <a
              href={workPlaceData.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              {workPlaceData.company}
            </a>
          ) : (
            <span>{workPlaceData.company}</span>
          )}
        </p>
        <p>{workPlaceData.summary}</p>
        <ul>
          {workPlaceData.highlights.map((bullet, idx) => (
            <li key={`${idx}-${bullet.split(' ')[0]}`}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkTabs;
