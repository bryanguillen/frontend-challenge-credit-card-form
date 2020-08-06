import React from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard({
  creditCardCvvFromInput,
  creditCardExpirationMonthFromInput,
  creditCardExpirationYearFromInput,
  creditCardNumberFromInput,
  creditCardNameFromInput,
  showFront,
  setFocusOnCreditCardNumber,
  setFocusOnCreditCardName
}) {
  const flipperClasses = showFront ? 'flipper' : 'flipper show-back';

  return (
    <div className="credit-card">
      <div className={flipperClasses}>
        <CreditCardFront
          creditCardExpirationMonthFromInput={creditCardExpirationMonthFromInput}
          creditCardExpirationYearFromInput={creditCardExpirationYearFromInput}        
          creditCardNumberFromInput={creditCardNumberFromInput}
          creditCardNameFromInput={creditCardNameFromInput}
          setFocusOnCreditCardNumber={setFocusOnCreditCardNumber}
          setFocusOnCreditCardName={setFocusOnCreditCardName}
        />
        <CreditCardBack
          creditCardCvvFromInput={creditCardCvvFromInput}
        />
      </div>
    </div>
  );
}