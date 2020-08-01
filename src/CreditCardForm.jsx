import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function CreditCardForm() {
  return (
    <Form>
      <Form.Group controlId="formCcNumber">
        <Form.Label>Credit Card Number</Form.Label>
        <Form.Control type="text" placeholder="1234 5678 1234 5678" />
      </Form.Group>
      <Form.Group controlId="formCcName">
        <Form.Label>Credit Card Name</Form.Label>
        <Form.Control type="text" placeholder="John Smith" />
      </Form.Group>
      <Form.Group controlId="formCcExpirationDate">
        <Form.Label>Expiration Date</Form.Label>
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
        <Form.Control as="select" custom>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCcCvv">
        <Form.Label>CVV</Form.Label>
        <Form.Control type="text" placeholder="123" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}