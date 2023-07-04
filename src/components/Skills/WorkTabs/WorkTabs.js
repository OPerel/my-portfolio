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
          <CompanyName company={company} website={website} />
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

const CompanyName = ({ company, website }) => {
  if (company.includes('via')) {
    const companies = company.split('via');
    const websites = website.split(',');
    return (
      <>
        <a href={websites[0]} target="_blank" rel="noreferrer noopener">
          {companies[0]}
        </a>
        &nbsp;
        <span>via</span>
        &nbsp;
        <a href={websites[1]} target="_blank" rel="noreferrer noopener">
          {companies[1]}
        </a>
      </>
    );
  }

  if (website) {
    return (
      <a href={website} target="_blank" rel="noreferrer noopener">
        {company}
      </a>
    );
  }

  return <span>{company}</span>;
};
