import React, { useState } from 'react';

const WorkTabs = ({ work }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = idx => {
    setActiveTab(idx);
  };

  const workPlaceData = work[activeTab];

  return (
    <div>
      <nav>
        <ul>
          {work.map((w, idx) => (
            <li
              key={w.company}
              className={activeTab === idx ? 'active' : ''}
              onClick={() => handleTabClick(idx)}
            >
              {w.company}
            </li>
          ))}
        </ul>
      </nav>
      <div className="info">
        <p>
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
