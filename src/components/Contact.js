import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {
  // Set initial state for name, email, message, and form errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  // Handle message input changes
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  // Validate email format using regex
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate input fields and set errors if necessary
    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }
    // If all fields are valid, log form data and reset inputs
    if (valid) {
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      }
    };

    return (
      // About section
      <section id="about" className="py-5">
        <h1 className="about-heading">Contact</h1>
        <Container>
          <Row>
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
            >
              {/* <Image src={avatar} rounded fluid className="about-image" /> */}
            </Col>
            <Col xs={12} md={8}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center mb-4">
                    How to contact me
                  </Card.Title>
                  <Card.Text>
                fsgfsgdf
                fgsdfg
                fdgsfdfgssgfgsdf    
                 </Card.Text>

                 <Card.Text>
                 fsgfsgdf
                fgsdfg
                fdgsfdfgssgfgsdf 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;