import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUs.css";

function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Clear the form fields after validation
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
    setValidated(true);
  };

  return (
    <section id="ContactUs" className="about-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="bg-white shadow-sm rounded p-4 p-sm-5">
              <h2 className="text-center mb-4" style={{ color: "#4a4a4a" }}>
                Contact Us
              </h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={name} // Controlled input
                    onChange={(e) => setName(e.target.value)} // Update state
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={email} // Controlled input
                    onChange={(e) => setEmail(e.target.value)} // Update state
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter subject"
                    value={subject} // Controlled input
                    onChange={(e) => setSubject(e.target.value)} // Update state
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                    value={message} // Controlled input
                    onChange={(e) => setMessage(e.target.value)} // Update state
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
