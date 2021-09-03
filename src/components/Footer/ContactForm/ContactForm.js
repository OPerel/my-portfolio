import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField'
import { doValidation, encode } from '../../../utils';
import Button from "@material-ui/core/Button"

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

const init = initialState => initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case 'inputChange': {
      const { name, value } = action.payload;
      const isValid = doValidation(name, value);
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          isValid,
          touched: true,
        },
      };
    }
    case 'validateForm': {
      return {
        ...state,
        formIsValid: action.payload,
      };
    }
    case 'submitted': {
      return {
        ...init(action.payload),
        submitted: true,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const ContactForm = () => {
  const [formControls, dispatch] = useReducer(reducer, initialFormState, init);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'inputChange', payload: { name, value } });
    checkFormIsValid();
  };

  const checkFormIsValid = () => {
    const { name, email, message } = formControls;
    const formIsValid = name.isValid && email.isValid && message.isValid;
    dispatch({ type: 'validateForm', payload: formIsValid });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const { name, email, message } = formControls;
    console.log('submit form: ', name, email, message);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-form',
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
      console.log('res: ', res);
      dispatch({ type: 'submitted', payload: initialFormState });
    } catch (err) {
      console.log('error sending form: ', err);
      dispatch({ type: 'error', payload: err });
    }
  };

  const { name, email, message } = formControls;
  return (
    <form name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" />
        <TextField
          className="form-input"
          label="Full Name"
          type="text"
          name="name"
          value={name.value}
          variant="filled"
          InputProps={{ classes: { underline: { color: "#f36344" } } }}
          onInput={e => {
            handleInputChange(e);
          }}
        />
        <TextField
          className="form-input"
          label="Email"
          type="email"
          name="email"
          value={email.value}
          variant="filled"
          error={email.touched && !email.isValid}
          onInput={e => {
            handleInputChange(e);
          }}
        />
        <TextField
          className="form-input"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={message.value}
          variant="filled"
          error={message.touched && !message.isValid}
          onInput={e => {
            handleInputChange(e);
          }}
        />
      <Button
        className="btn"
        onClick={e => handleSubmitForm(e)}
        disabled={!formControls.formIsValid}
      >
        Submit
      </Button>
      {/* TODO: style submit messages */}
      {formControls.submitted && <span>Thank you!</span>}
      {formControls.error && <span>Not sent!</span>}
    </form>
  );
};

export default ContactForm;
