// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/amandaResume.pdf";

function Resume() {
    return (
      <section id="resume" className="resume-margin">
        <Container className="resume-section">
          <Row>
            <Col className="text-center">
              <h1>Resume</h1>
              <hr className="star-primary"/>
              <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
            </Col>
          </Row>
          <Row>
              <h3>Technical Skills</h3>
              <hr className="star-secondary" />
            <Col>
              <ul >
                <li>
                  <strong>Languages:</strong> 
                  JavaScript, HTML, CSS
                </li>
                <li>
                  <strong>Libraries/Frameworks:</strong> 
                  React, jQuery, Bootstrap, Material UI
                </li>
                <li>
                  <strong>Databases:</strong> 
                  MongoDB, MySQL, PostgreSQL
                </li>
                <li>
                  <strong>Tools/Platforms:</strong> 
                  Git, GitHub, Heroku, AWS, Netlify
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Education</h3>
              <hr className="star-secondary" />
                <div className="resume-item">
                  <h4>Full Stack Web Developer</h4>
                  <h5>UC Berkeley, 2023</h5>
                  <br></br>
                  <h4>Associates in Buisness</h4>
                  <h5>Kentucky Technical College, 1996-2000</h5>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Resume;