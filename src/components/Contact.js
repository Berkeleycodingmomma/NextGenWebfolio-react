import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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

}