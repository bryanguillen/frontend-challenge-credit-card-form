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
      <div className="input-group">
        <label htmlFor="creditCardNumber" className="block-label">Credit Card Number</label>
        <input
          className="credit-card-text-field"
          name="creditCardNumber"
          id="creditCardNumber"
          type="text"
          placeholder="1234 5678 1234 5678"
          onChange={event => setCreditCardNumber(event.target.value)}
          value={creditCardNumber}
        />
      </div>
      <div className="input-group">
        <label htmlFor="creditCardName" className="block-label">Credit Card Name</label>
        <input
          className="credit-card-text-field"
          name="creditCardName"
          id="creditCardName"
          type="text"
          placeholder="John Smith"
          onChange={event => setCreditCardName(event.target.value)}
          value={creditCardName}
        />
      </div>
      <div className="input-group input-group-flex">
        <fieldset className="credit-card-expiration-date-container">
          <legend className="block-label credit-card-expiration-legend">Expiration Date</legend>
          <div className="credit-card-expiration-selects-container">
            <label htmlFor="creditCardExpirationMonth" className="hidden-label">Month</label>
            <select
              className="credit-card-select-field"
              name="creditExpirationMonth"
              id="creditExpirationMonth"        
              onChange={event => setCreditCardExpirationMonth(event.target.value)}
              value={creditCardExpirationMonth}
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
            <label htmlFor="creditCardExpirationYear" className="hidden-label">Year</label>
            <select
              className="credit-card-select-field"
              name="creditExpirationYear"
              id="creditExpirationYear"
              onChange={event => setCreditCardExpirationYear(event.target.value)}
              value={creditCardExpirationYear}
            >
              <option defaultValue>Year</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </div>
        </fieldset>
        <div className="credit-card-cvv-container">
          <label htmlFor="creditCardCvv" className="block-label">CVV</label>
          <input
            className="credit-card-text-field"
            type="text"
            placeholder="123"
            onChange={event => setCreditCardCvv(event.target.value.replace(/\D/g, ''))}
            maxLength={3}
            value={creditCardCvv}
          />
        </div>
      </div>
      <button type="submit" className="submit-credit-card-form-button">Submit</button>
    </form>
  );
}