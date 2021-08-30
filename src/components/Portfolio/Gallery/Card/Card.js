import React from 'react';
import './Card.scss';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonRippleEffect,
} from '@ionic/react';
import { logoGithub, globeOutline } from 'ionicons/icons';

const Card = ({ project }) => {
  const { images, libraries, languages, roles } = project;
  const { url } = images[0]?.resolutions.mobile || '';
  return project ? (
    <div className="card-wrapper">
      <IonCard>
        <div
          className="img-wrapper"
          style={{ backgroundImage: `url('${url}')` }}
        />
        <IonCardHeader>
          <IonCardTitle>{project.displayName}</IonCardTitle>
          <IonCardSubtitle>{project.summary}</IonCardSubtitle>
        </IonCardHeader>

        {roles.length > 0 && <p className="role">{roles}</p>}

        <IonCardContent style={{ fontSize: '1.3em' }}>
          <div className="project-description">{project.description}</div>
          <ul>
            {libraries.concat(languages).map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </IonCardContent>

        <div className="card-buttons">
          <IonButton
            fill="clear"
            href={project.url}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.url}
          >
            <IonRippleEffect />
            <IonIcon slot="start" icon={globeOutline} />
            Live
          </IonButton>
          <IonButton
            fill="clear"
            href={project.githubUrl}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.githubUrl}
          >
            <IonRippleEffect />
            <IonIcon slot="start" icon={logoGithub} />
            Source
          </IonButton>
        </div>
      </IonCard>
    </div>
  ) : null;
};

export default Card;
