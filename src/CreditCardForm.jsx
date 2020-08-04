import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import './CreditCardForm.css';

export default function CreditCardForm() {
  const [creditCardNumber, setCreditCardNumber] = useState('');  
  const [creditCardName, setCreditCardName] = useState('');  
  const [creditCardExpirationMonth, setCreditCardExpirationMonth] = useState('Month');  
  const [creditCardExpirationYear, setCreditCardExpirationYear] = useState('Year');  
  const [creditCardCvv, setCreditCardCvv] = useState('');

  function handleSubmit(event) {
    // TODO: Implement
  }

  return (
    <Form className="credit-card-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formCcNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <input type="text" placeholder="1234 5678 1234 5678" onChange={event => setCreditCardNumber(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formCcName">
          <Form.Label>Credit Card Name</Form.Label>
          <input type="text" placeholder="John Smith" onChange={event => setCreditCardName(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs={8} controlId="formCcExpirationDate">
          <Form.Label>Expiration Date</Form.Label>
          <Row>
            <Col>
              <select onChange={event => setCreditCardExpirationMonth(event.target.value)}>
                <option defaultValue>Month</option>
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
              </select>
            </Col>
            <Col>
              <select onChange={event => setCreditCardExpirationYear(event.target.value)}>
                <option defaultValue>Year</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} xs={4} controlId="formCcCvv">
          <Form.Label>CVV</Form.Label>
          <input type="text" placeholder="123" onChange={event => setCreditCardCvv(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <button type="submit">Submit</button>
    </Form>
  );
}