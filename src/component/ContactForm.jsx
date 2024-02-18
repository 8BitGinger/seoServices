import React from 'react';
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react';

function sendEmail() {
  alert('Email Sent!');
  window.location.reload();
}

const ContactForm = () => (
  <Form>
    <FormField>
      <label>Name</label>
      <input placeholder="Name" />
    </FormField>
    <FormField>
      <label>Email</label>
      <input placeholder="Email" />
    </FormField>
    <FormField>
      <label>Message</label>
      <textarea placeholder="Message" />
    </FormField>
    <FormField>
      <Checkbox label="I would like my free SEO anaylsis" />
    </FormField>

    <Button type="submit" onClick={sendEmail}>
      Submit
    </Button>
  </Form>
);

export default ContactForm;
