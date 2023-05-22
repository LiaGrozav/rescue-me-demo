import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <Container className="container-contact w-50">
      <h1>Contact Us</h1>
      <Form className="contact_form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            // placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            // placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            // placeholder="Enter your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </Form.Group>

        <Button  className="btn_sml" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
