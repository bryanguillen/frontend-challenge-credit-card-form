import React, { useState } from 'react';

import './CreditCardForm.css';

export default function CreditCardForm() {
  const [creditCardNumber, setCreditCardNumber] = useState('');  
  const [creditCardName, setCreditCardName] = useState('');  
  const [creditCardExpirationMonth, setCreditCardExpirationMonth] = useState('');  
  const [creditCardExpirationYear, setCreditCardExpirationYear] = useState('');  
  const [creditCardCvv, setCreditCardCvv] = useState('');

  const [creditCardNumberError, setCreditCardNumberError] = useState(false);
  const [creditCardNameError, setCreditCardNameError] = useState(false);
  const [creditCardExpirationFieldError, setCreditCardExpirationFieldError] = useState(false);
  const [creditCardCvvError, setCreditCardCvvError] = useState(false);

  /**
   * @description Function used to add a space every four characters, given a string
   * @param {String} value
   * @returns {String}
   */
  function addSpaceEveryFourChars(value, maxNumberOfSpaces = 3) {
    const normalizedValue = value.replace(/\D/g, '');
    let formattedValue = '';
    let spacesAdded = 0;

    for (let i = 0; i < normalizedValue.length; i++) {
      formattedValue += normalizedValue[i];
      if ((i + 1) % 4 === 0 && spacesAdded < maxNumberOfSpaces) {
        formattedValue += ' ';
        spacesAdded += 1;
      }
    }

    return formattedValue;
  }

  /**
   * @description Function used to handle the change for cc number
   * field; it's used to encapsulate the logic for this field, since
   * it is a bit more involved.  It's more involved b/c it has
   * to format (i.e. add a space every 4 digits) and it can only accept
   * digits.
   * @param {Object} event
   */
  function handleChangeForCreditCardNumber(event) {
    const { value } = event.target;
    const userDidNotDeleteCharacter = creditCardNumber.length < value.length;

    if (userDidNotDeleteCharacter) {
      setCreditCardNumber(addSpaceEveryFourChars(value));
    } else {
      setCreditCardNumber(event.target.value);
    }
  }

  /**
   * @description Handler for submit; it simply validates the fields
   */
  function handleSubmit(event) {
    event.preventDefault();

    if (creditCardNumber === '' || creditCardNumber.length !== 19) {
      setCreditCardNumberError(true);
    } else {
      setCreditCardNumberError(false);
    }

    if (creditCardName.trim() === '') {
      setCreditCardNameError(true);
    } else {
      setCreditCardNameError(false);
    }

    if (creditCardExpirationMonth === '' || creditCardExpirationYear === '') {
      setCreditCardExpirationFieldError(true);
    } else {
      setCreditCardExpirationFieldError(false);
    }

    if (creditCardCvv.trim() === '' || creditCardCvv.length !== 3) {
      setCreditCardCvvError(true);
    } else {
      setCreditCardCvvError(false);
    }
  }

  return (
    <form className="credit-card-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="creditCardNumber" className="block-label">Credit Card Number</label>
        {creditCardNumberError ? <div className="credit-card-form-error">Please ensure you include a 16 digit number for this field.</div> : null}
        <input
          className="credit-card-text-field"
          name="creditCardNumber"
          id="creditCardNumber"
          type="text"
          placeholder="1234 5678 1234 5678"
          onChange={handleChangeForCreditCardNumber}
          value={creditCardNumber}
          maxLength={19}
        />
      </div>
      <div className="input-group">
        <label htmlFor="creditCardName" className="block-label">Credit Card Name</label>
        {creditCardNameError ? <div className="credit-card-form-error">Please include a name for this field</div> : null}
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
          {creditCardExpirationFieldError ? <div className="credit-card-form-error">Please select both a month and year.</div> : null}
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
          {creditCardCvvError ? <div className="credit-card-form-error">Please enter a valid 3 digit number.</div> : null}
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