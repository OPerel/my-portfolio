import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

const Footer = () => (
  <footer>
    <div className="container contact">
      <div className="left-top">
        <div>
          <h2>Get In Touch</h2>
          <p>I would love to hear from you.</p>
        </div>

        <div className="footer-icons">
          <a
            href="https://github.com/OPerel"
            target="_blank"
            rel="noopener noreferrer"
            className="ion-activatable"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
            target="_blank"
            rel="noopener noreferrer"
            className="ion-activatable"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto: oriperelman@gmail.com" className="ion-activatable">
            <EmailIcon />
          </a>
        </div>
      </div>

      <ContactForm />
    </div>
    <p className="credit">
      <a
        href="https://github.com/OPerel/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed and developed by Ori Perelman &copy; {new Date().getFullYear()}
      </a>
    </p>
  </footer>
);

export default Footer;
