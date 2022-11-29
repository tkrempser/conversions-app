import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button } from "react-bootstrap";

const NewConversionForm = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const conversionData = {
      input_number: enteredNumber
    };

    props.onConvert(conversionData);

    setEnteredNumber("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row className="mb-1">
        <Col md={4}>
          <Form.Group className="mb-3" controlId="conversionForm">
            <Form.Label>Provide a number to convert</Form.Label>
            <Form.Control
              type="number"
              placeholder="Integer number"
              onChange={numberChangeHandler}
              value={enteredNumber}
              required
            />
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end">
          <Button variant="success" className="mb-3 w-100" type="submit">
            Convert
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NewConversionForm;
