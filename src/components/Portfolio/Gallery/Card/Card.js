import React from "react"

const Card = ({ project }) => {
  const { images, libraries, languages, roles } = this.project;
  const { url } = images[0]?.resolutions.desktop || '';
  return project ? (
    //<Host>
      <ion-card>
        <div class="img-wrapper" style={{backgroundImage: `url('${url}')` }} />
        <ion-card-header>
          <ion-card-title>
            {project.displayName}
          </ion-card-title>
          <ion-card-subtitle>
            {project.summary}
          </ion-card-subtitle>
        </ion-card-header>

        {roles.length > 0 && <p class="role">{roles}</p>}

        <ion-card-content style={{ fontSize: '1.3em' }}>
          <div class="project-description">
            {project.description}
          </div>
          <ul>
            {libraries.concat(languages).map(t => <li>{t}</li>)}
          </ul>
        </ion-card-content>

        <div class="card-buttons">
          <ion-button
            fill="clear"
            href={project.url}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.url}
          >
            <ion-ripple-effect />
            <ion-icon slot="start" name="globe-outline"/>
            Live
          </ion-button>
          <ion-button
            fill="clear"
            href={project.githubUrl}
            target="__blank"
            rel="noopener noreferrer"
            disabled={!project.githubUrl}
          >
            <ion-ripple-effect />
            <ion-icon slot="start" name="logo-github"/>
            Source
          </ion-button>
        </div>
      </ion-card>
    //</Host>
  ) : null;
}

export default Card