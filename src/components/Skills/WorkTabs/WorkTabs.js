import React, { useState } from 'react';
import './WorkTabs.scss';

const WorkTabs = ({ work }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = idx => {
    setActiveTab(idx);
  };

  const workPlaceData = work[activeTab];
  const {
    position,
    company,
    website,
    startDate,
    endDate,
    isCurrentRole,
    summary,
    highlights,
  } = workPlaceData;

  const getDate = date => {
    return new Date(date).toLocaleDateString('default', {
      year: 'numeric',
      month: 'short',
    });
  };

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
        <h3 className="work-title">
          <span>
            <b>{position}</b> @{' '}
          </span>
          {website ? (
            <a href={website} target="_blank" rel="noreferrer noopener">
              {company}
            </a>
          ) : (
            <span>{company}</span>
          )}
          &nbsp;
          <span className="work-period">
            {getDate(startDate)}
            {' - '}
            {isCurrentRole ? 'Present' : getDate(endDate)}
          </span>
        </h3>
        <p>{summary}</p>
        <ul>
          {highlights.map((bullet, idx) => (
            <li key={`${idx}-${bullet.split(' ')[0]}`}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkTabs;
