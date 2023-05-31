// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/AmandaGrayResumeJune(2023).pdf";

function Resume() {
    return (
      <section id="resume" className="resume-margin">
        <Container className="resume-section">
          <Row>
            <Col className="text-center">
              <h1>Resume</h1>
              <hr className="star-primary" />
              <Button variant="dark" href={PDF} download>
                Download Resume
              </Button>
            </Col>
          </Row>