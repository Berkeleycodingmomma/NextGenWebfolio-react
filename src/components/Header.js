import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";


function Header() {
    return (
      <>
        <Container fluid className="bg-dark">
          <Row className="justify-content-center text-center mb-0">
            <Col className="pb-0">
              <h1 className="text" style={{ fontSize: "70px", color: "white"}}>
                <Link
                  to="/Berkeleycodingmomma/NextGenWebfolio-react/"
                  className="name-link">
                   {"<>"}<span className="name">amanda_gray</span>{"</>"}
                </Link>
              </h1>
            </Col>
          </Row>
        </Container>
        <Navigation />
      </>
    );
  }

export default Header;