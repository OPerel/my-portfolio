import React from 'react';
import './FloatingSocial.scss';
// import Parallax from "../Parallax/Parallax"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Mail';
const FloatingSocial = ({ animeClass }) => {
  return (
    <div className={`floating-social ${animeClass}`}>
      <div className="line" />
      <ul>
        <li>
          <a
            href="https://github.com/OPerel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin link"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="mailto: oriperelman@gmail.com" aria-label="email link">
            <EmailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingSocial;
