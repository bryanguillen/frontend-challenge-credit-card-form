import React from 'react';

import { getCreditCardNumber, getExpirationDate } from './credit-card-front-utils';

import './CreditCardFront.css';

export default function CreditCardFront({
  fieldValues,
  setFocusOnCreditCardNumber,
  setFocusOnCreditCardName,
  setFocusOnCreditCardExpirationMonth
}) {
  const {
    creditCardNumber,
    creditCardName,
    creditExpirationMonth,
    creditExpirationYear
  } = fieldValues;

  return (
    <div className="credit-card-front">
      <div className="credit-card-chip-brand-container">  
        <div className="credit-card-chip-container">
          <img
            className="credit-card-chip"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            alt="credit card chip"
          />
        </div>
        <div className="credit-card-logo-container">
          <img
            className="credit-card-logo"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
            alt="credit card logo"
          />
        </div>
      </div>
      <div className="credit-card-number-container">
        <div className="credit-card-number" onClick={setFocusOnCreditCardNumber}>{getCreditCardNumber(creditCardNumber)}</div>
      </div>
      <div className="credit-card-name-and-expiration-container">
        <div className="credit-card-name-container" onClick={setFocusOnCreditCardName}>
          <div className="credit-card-holder-label">Card Holder</div>
          <div className="credit-card-holder-name">{creditCardName}</div>
        </div>
        <div className="credit-card-expiration-container" onClick={setFocusOnCreditCardExpirationMonth}>
          <div className="credit-card-expiration-label">Expires</div>
          <div className="credit-card-expiration">{getExpirationDate(creditExpirationMonth, creditExpirationYear)}</div>
        </div>
      </div>
    </div>
  );
}