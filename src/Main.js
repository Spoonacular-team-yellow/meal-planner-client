import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Badge } from "react-bootstrap";
// import axios from "axios";

class Main extends React.Component {
  render() {
    return (
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
        <Button variant="primary">
          Profile <Badge bg="secondary"></Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </InputGroup>
    );
  }
}

export default Main;
