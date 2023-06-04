import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/amanda_profile.jpg";
import "../style/About.css";

function About() {
    return (
      // About section
      <section id="about" className="py-5">
        <h1 className="about-heading">About Me</h1>
        <Container>
          <Row>
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
            >
              <Image src={avatar} rounded fluid className="about-image" />
            </Col>
            <Col xs={12} md={8}>
              <Card style={{textAlign: "unset"}}>
                <Card.Body className="d-flex justify-content-flex-start align-items-start" style={{textAlign: "unset"}}>
                 
                  {/* <Card.Text> */}
                    <section>
                      <ul>
                        <li>I am a hard-working and driven insectionidual who isn't afraid to face a challenge.
                        </li>
                        <li>I am a passionate about my work and I know how to get the job done. 
                        </li>
                        <li>I am an honest person who doesn't believe in misleading other
                            people.
                        </li>
                        <li>I am fair in everything I do.</li>
                        <li>I am an enthusiastic, self-motivated, reliable, and responsible.</li>
                        <li>I am a mature team worker and adaptable to all challenging situations.</li>
                        <li>I am able to work well both in a team environment as well as using own initiative.</li>
                        <li>I am able to work well under pressure and adhere to strict deadlines.</li>
                      </ul>
                    </section>
                {/* </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
