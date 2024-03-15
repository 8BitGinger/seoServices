import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function sendEmail() {
  alert('Email Sent!');

  window.location.href = '/';
}

function ContactForm() {
  const [state, handleSubmit] = useForm('xkndbbjk');
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <form
      action="https://formspree.io/f/xkndbbjk"
      method="POST"
      className="column form"
      onSubmit={sendEmail}
    >
      <label htmlFor="name">Name</label>
      <input id="name" type="name" name="name" />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
