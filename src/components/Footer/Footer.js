import React, { useReducer } from 'react';

const initialFormState = {
  name: {
    value: '',
    isValid: false,
    touched: false,
  },
  email: {
    value: '',
    isValid: false,
    touched: false,
  },
  message: {
    value: '',
    isValid: false,
    touched: false,
  },
  formIsValid: false,
  submitted: false,
  error: null,
};

const reducer = () => {};

const Footer = () => {
  const [formControls, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = e => {
    //   const { name, value } = e;
    //   formControls = {
    //     ...formControls,
    //     [name]: {
    //       ...formControls[name],
    //       value,
    //       isValid: doValidation(name, value),
    //       touched: true
    //     }
    //   };
    //
    //   checkFormIsValid();
  };
  //
  // const checkFormIsValid = () => {
  //   const { name, email, message } = formControls;
  //   formControls = {
  //     ...formControls,
  //     formIsValid: name.isValid && email.isValid && message.isValid
  //   }
  // }
  //
  const handleSubmitForm = async e => {
    //   e.preventDefault();
    //   const { name, email, message } = formControls;
    //   console.log('submit form: ', name, email, message);
    //
    //   try {
    //     const res = await fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: encode({
    //         "form-name": 'contact',
    //         name: name.value,
    //         email: email.value,
    //         message: message.value
    //       })
    //     });
    //     // const json = await res.json();
    //     console.log('res: ', res);
    //     formControls = {
    //       ...initialFormState,
    //       submitted: true
    //     };
    //   } catch (err) {
    //     console.log('error sending form: ', err);
    //     formControls = {
    //       ...formControls,
    //       error: err
    //     };
    //   }
  };

  const { name, email, message } = formControls;
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
              <ion-icon name="logo-github" />
              <ion-ripple-effect />
            </a>
            <a
              href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
              target="_blank"
              rel="noopener noreferrer"
              className="ion-activatable"
            >
              <ion-icon name="logo-linkedin" />
              <ion-ripple-effect />
            </a>
            <a href="mailto: oriperelman@gmail.com" className="ion-activatable">
              <ion-icon name="mail-sharp" />
              <ion-ripple-effect />
            </a>
          </div>
        </div>

        <form name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <ion-item
            className={name.touched && !name.isValid ? 'ion-invalid' : ''}
          >
            <ion-label position="floating">Full Name</ion-label>
            <ion-input
              type="text"
              name="name"
              value={name.value}
              onInput={e => {
                handleInputChange(e);
              }}
            />
          </ion-item>
          <ion-item
            className={email.touched && !email.isValid ? 'ion-invalid' : ''}
          >
            <ion-label position="floating">Email</ion-label>
            <ion-input
              type="email"
              name="email"
              value={email.value}
              onInput={e => {
                handleInputChange(e);
              }}
            />
          </ion-item>
          <ion-item
            className={message.touched && !message.isValid ? 'ion-invalid' : ''}
          >
            <ion-label position="floating">Message</ion-label>
            <ion-textarea
              name="message"
              enterkeyhint="done"
              value={message.value}
              onInput={e => {
                handleInputChange(e);
              }}
            />
          </ion-item>
          <ion-button
            onClick={e => handleSubmitForm(e)}
            disabled={!formControls.formIsValid}
          >
            Submit
          </ion-button>
          {formControls.submitted && <span>Thank you!</span>}
          {formControls.error && <span>Not sent!</span>}
        </form>
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
