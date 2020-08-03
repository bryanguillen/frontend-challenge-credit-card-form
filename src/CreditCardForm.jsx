import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import './CreditCardForm.css';

export default function CreditCardForm() {
  return (
    <Form className="credit-card-form">
      <Form.Row>
        <Form.Group as={Col} controlId="formCcNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control type="text" placeholder="1234 5678 1234 5678" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formCcName">
          <Form.Label>Credit Card Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs={8} controlId="formCcExpirationDate">
          <Form.Label>Expiration Date</Form.Label>
          <Row>
            <Col>
              <Form.Control as="select" custom>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" custom>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} xs={4} controlId="formCcCvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="text" placeholder="123" />
          </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" block>Submit</Button>
    </Form>
  );
}