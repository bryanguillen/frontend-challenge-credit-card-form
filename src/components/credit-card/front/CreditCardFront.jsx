import React from 'react';

import './CreditCardFront.css';

export default function CreditCardFront({
  creditCardExpirationMonthFromInput,
  creditCardExpirationYearFromInput,
  creditCardNumberFromInput,
  creditCardNameFromInput,
  setFocusOnCreditCardNumber,
  setFocusOnCreditCardName,
  setFocusOnCreditCardExpirationMonth
}) {
  /**
   * @description Helper function used to wrap the logic required
   * for properly replacing the hash tags in the credit card number 
   * field
   * @returns {String}
   */
  function getCreditCardNumber() {
    const creditCardNumberMaxLength = 19;
    const hashedCreditCardNumber = '#### #### #### ####';
    const creditCardNumberLength = creditCardNumberFromInput.length;

    if (creditCardNumberLength === creditCardNumberMaxLength) {
      return creditCardNumberFromInput;
    } else if (creditCardNumberLength < creditCardNumberMaxLength && creditCardNumberLength > 0) {
      return creditCardNumberFromInput.substring(0, creditCardNumberLength) + hashedCreditCardNumber.substring(creditCardNumberLength)
    } else {
      return hashedCreditCardNumber;
    }
  }

  /**
   * @description Helper function used for the same purpose as the one above -- to help
   * wrap the logic of getting the actual month and year, which will replace the defaults
   * once the value is chosen for each field
   * @returns {String}
   */
  function getExpirationDate() {
    const expirationMonth = creditCardExpirationMonthFromInput === '' ? 'MM' : creditCardExpirationMonthFromInput;
    const expirationYear = creditCardExpirationYearFromInput === '' ? 'YYYY' : creditCardExpirationYearFromInput;

    return expirationMonth + '/' + expirationYear;
  }
  
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
        <div className="credit-card-number" onClick={() => setFocusOnCreditCardNumber(true)}>{getCreditCardNumber()}</div>
      </div>
      <div className="credit-card-name-and-expiration-container">
        <div className="credit-card-name-container" onClick={() => setFocusOnCreditCardName(true)}>
          <div className="credit-card-holder-label">Card Holder</div>
          <div className="credit-card-holder-name">{creditCardNameFromInput}</div>
        </div>
        <div className="credit-card-expiration-container" onClick={() => setFocusOnCreditCardExpirationMonth(true)}>
          <div className="credit-card-expiration-label">Expires</div>
          <div className="credit-card-expiration">{getExpirationDate()}</div>
        </div>
      </div>
    </div>
  );
}