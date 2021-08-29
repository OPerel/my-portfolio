import React from 'react';
import { IonIcon, IonRippleEffect } from '@ionic/react';
import { logoGithub, mailSharp, logoLinkedin } from 'ionicons/icons';
import ContactForm from './ContactForm/ContactForm';
import './Footer.scss';

const Footer = () => {
  return (
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
              <IonIcon icon={logoGithub} />
              <IonRippleEffect />
            </a>
            <a
              href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
              target="_blank"
              rel="noopener noreferrer"
              className="ion-activatable"
            >
              <IonIcon icon={logoLinkedin} />
              <IonRippleEffect />
            </a>
            <a href="mailto: oriperelman@gmail.com" className="ion-activatable">
              <IonIcon icon={mailSharp} />
              <IonRippleEffect />
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
      <p className="credit">
        <a href="#">
          Designed and developed by Ori Perelman &copy;{' '}
          {new Date().getFullYear()}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
