import React, { useRef, useEffect } from 'react';

import { addSpaceEveryFourChars } from './credit-card-form-utils';

import './CreditCardForm.css';

export default function CreditCardForm({
  cvvOnBlur,
  cvvOnFocus,
  handleChange,
  handleSubmit,
  focusOnCreditCardNumber,
  onBlurForCreditCardNumberInput,
  focusOnCreditCardName,
  onBlurForCreditCardNameInput,
  focusOnCreditCardExpirationMonth,
  onBlurForCreditCardExpirationMonthInput,
  formFields
}) {
  const creditCardNumberInputElement = useRef(null);
  const creditCardNameInputElement = useRef(null);
  const creditCardExpirationMonthInputElement = useRef(null);
  
  useEffect(() => {
    if (focusOnCreditCardNumber) {
      creditCardNumberInputElement.current.focus();
    }

    if (focusOnCreditCardName) {
      creditCardNameInputElement.current.focus();
    }

    if (focusOnCreditCardExpirationMonth) {
      creditCardExpirationMonthInputElement.current.focus();
    }
  });

  return (
    <form className="credit-card-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="creditCardNumber" className="block-label">Credit Card Number</label>
        {formFields.creditCardNumber.showError ? <div className="credit-card-form-error number-input-error">Please ensure you include a 16 digit number for this field.</div> : null}
        <input
          className="credit-card-text-field number-input"
          name="creditCardNumber"
          id="creditCardNumber"
          type="text"
          placeholder="1234 5678 1234 5678"
          onChange={event => {
            const { value } = event.target;
            const userDidNotDeleteCharacter = formFields.creditCardNumber.value.length < value.length;
            const newValue = userDidNotDeleteCharacter ? addSpaceEveryFourChars(value) : value;
            handleChange('creditCardNumber', newValue)}
          }
          value={formFields.creditCardNumber.value}
          maxLength={19}
          onBlur={onBlurForCreditCardNumberInput}
          ref={creditCardNumberInputElement}
        />
      </div>
      <div className="input-group">
        <label htmlFor="creditCardName" className="block-label">Credit Card Name</label>
        {formFields.creditCardName.showError ? <div className="credit-card-form-error name-input-error">Please include a name for this field</div> : null}
        <input
          className="credit-card-text-field name-input"
          name="creditCardName"
          id="creditCardName"
          type="text"
          placeholder="John Smith"
          onChange={event => handleChange('creditCardName', event.target.value)}
          value={formFields.creditCardName.value}
          onBlur={onBlurForCreditCardNameInput}
          ref={creditCardNameInputElement}
        />
      </div>
      <div className="input-group input-group-flex">
        <fieldset className="credit-card-expiration-date-container">
          <legend className="block-label credit-card-expiration-legend">Expiration Date</legend>
          {formFields.creditExpirationMonth.showError || formFields.creditExpirationYear.showError ? <div className="credit-card-form-error expiration-input-error">Please select both a month and year.</div> : null}
          <div className="credit-card-expiration-selects-container">
            <label htmlFor="creditCardExpirationMonth" className="hidden-label">Month</label>
            <select
              className="credit-card-select-field expiration-month-input"
              name="creditExpirationMonth"
              id="creditExpirationMonth"        
              onChange={event => handleChange('creditExpirationMonth', event.target.value)}
              value={formFields.creditExpirationMonth.value}
              onBlur={onBlurForCreditCardExpirationMonthInput}
              ref={creditCardExpirationMonthInputElement}
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
              className="credit-card-select-field expiration-year-input"
              name="creditExpirationYear"
              id="creditExpirationYear"
              onChange={event => handleChange('creditExpirationYear', event.target.value)}
              value={formFields.creditExpirationYear.value}
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
          {formFields.creditCardCvv.showError ? <div className="credit-card-form-error cvv-input-error">Please enter a valid 3 digit number.</div> : null}
          <input
            className="credit-card-text-field cvv-input"
            type="text"
            placeholder="123"
            onChange={event => handleChange('creditCardCvv', event.target.value.replace(/\D/g, ''))}
            maxLength={3}
            value={formFields.creditCardCvv.value}
            onBlur={cvvOnBlur}
            onFocus={cvvOnFocus}
            name="creditCardCvv"
            id="creditCardCvv"
          />
        </div>
      </div>
      <button type="submit" className="submit-credit-card-form-button">Submit</button>
    </form>
  );
}