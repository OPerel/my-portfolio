import React from 'react';
import './Card.scss';
import Button from "@material-ui/core/Button"
import Card from '@material-ui/core/Card'
// import
// import {
//   IonButton,
//   IonCard,
//   IonCardContent,
//   IonCardHeader,
//   IonCardSubtitle,
//   IonCardTitle,
//   IonIcon,
//   IonRippleEffect,
// } from '@ionic/react';
// import { logoGithub, globeOutline } from 'ionicons/icons';

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
            fill="clear"
            href={project.url}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.url}
          >
            {/*<IonRippleEffect />*/}
            {/*<IonIcon slot="start" icon={globeOutline} />*/}
            Live
          </Button>
          <Button
            fill="clear"
            href={project.githubUrl}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.githubUrl}
          >
            {/*<IonRippleEffect />*/}
            {/*<IonIcon slot="start" icon={logoGithub} />*/}
            Source
          </Button>
        </div>
      </Card>
    </div>
  ) : null;
};

export default ProjectCard;
