import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {

    return (
      // About section
      <section id="about" className="py-5">
        <h1 className="about-heading">Contact</h1>
        <Container>
          <Row className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <Card md={8}>
                <Card.Body>
                  <Card.Text>
                    <span style={{fontWeight: "bold", }}>Phone:</span> 777-333-9999
                  </Card.Text>
                  <Card.Text>
                  <span style={{fontWeight: "bold", }}>Email:</span> email@email.com
                  </Card.Text>
                  <Card.Text>
                  <span style={{fontWeight: "bold", }}>Address:</span> 99 Your Mom's House, Teton Town, WV 88456
                  </Card.Text>
                </Card.Body>
            </Card>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;