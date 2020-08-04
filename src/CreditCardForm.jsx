import React, { useState } from 'react';

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
    <form className="credit-card-form" onSubmit={handleSubmit}>
      <label for="creditCardNumber">Credit Card Number</label>
      <input
        name="creditCardNumber"
        id="creditCardNumber"
        type="text"
        placeholder="1234 5678 1234 5678"
        onChange={event => setCreditCardNumber(event.target.value)}
      />
      <label for="creditCardName">Credit Card Name</label>
      <input
        name="creditCardName"
        id="creditCardName"
        type="text"
        placeholder="John Smith"
        onChange={event => setCreditCardName(event.target.value)}
      />
      <fieldset>
        <legend>Expiration Date</legend>
        <label for="creditCardExpirationMonth" className="hidden-label">Month</label>
        <select
          name="creditExpirationMonth"
          id="creditExpirationMonth"        
          onChange={event => setCreditCardExpirationMonth(event.target.value)}
        >
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
        <label for="creditCardExpirationYear" className="hidden-label">Year</label>
        <select
          name="creditExpirationYear"
          id="creditExpirationYear"
          onChange={event => setCreditCardExpirationYear(event.target.value)}
        >
          <option defaultValue>Year</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </fieldset>
      <label for="creditCardCvv">CVV</label>
      <input type="text" placeholder="123" onChange={event => setCreditCardCvv(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}