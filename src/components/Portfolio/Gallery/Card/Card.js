import React from 'react';
import './Card.scss';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const ProjectCard = ({ project }) => {
  const { images, libraries, languages, roles } = project;
  const { url } = images[0]?.resolutions.mobile || '';
  return project ? (
    <div className="card-wrapper">
      <Card className="card">
        <div
          className="img-wrapper"
          style={{ backgroundImage: `url('${url}')` }}
        />
        <div className="card-header">
          <div className="card-title">{project.displayName}</div>
          <div className="card-subtitle">{project.summary}</div>
        </div>

        {roles.length > 0 && <p className="role">{roles}</p>}

        <div className="card-content" style={{ fontSize: '1.3em' }}>
          <div className="project-description">{project.description}</div>
          <ul>
            {libraries.concat(languages).map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="card-buttons">
          <Button
            className="card-btn"
            fill="clear"
            href={project.url}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.url}
            startIcon={<LanguageIcon />}
          >
            Live
          </Button>
          <Button
            className="card-btn"
            fill="clear"
            href={project.githubUrl}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.githubUrl}
            startIcon={<GitHubIcon />}
          >
            Source
          </Button>
        </div>
      </Card>
    </div>
  ) : null;
};

export default ProjectCard;
