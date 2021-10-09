import React, { forwardRef } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

import loadable from '@loadable/component';
const ContactForm = loadable(() => import('./ContactForm/ContactForm'));

const Footer = forwardRef(({ scrolled }, ref) => (
  <footer ref={ref}>
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
            aria-label="github link"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin link"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto: oriperelman@gmail.com" aria-label="email link">
            <EmailIcon />
          </a>
        </div>
      </div>

      {scrolled ? (
        <ContactForm />
      ) : (
        <form
          name="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="name" />
          <input name="email" />
          <input name="message" />
        </form>
      )}
    </div>

    <p className="credit">
      {/* We all like to get credit for our hard work */}
      {/* If you use this repo, please leave this <p> tag as it is */}
      <a
        href="https://github.com/OPerel/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed and developed by Ori Perelman &copy; {new Date().getFullYear()}
      </a>
    </p>
  </footer>
));

export default Footer;
