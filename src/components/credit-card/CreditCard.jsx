import React from 'react';

import CreditCardBack from './back/CreditCardBack';
import CreditCardFront from './front/CreditCardFront';

import './CreditCard.css';

export default function CreditCard({
  formValues,
  showFront,
  setFocusOnCreditCardNumber,
  setFocusOnCreditCardName,
  setFocusOnCreditCardExpirationMonth
}) {
  const flipperClasses = showFront ? 'flipper' : 'flipper show-back';
  const {
    creditCardNumber,
    creditCardName,
    creditExpirationMonth,
    creditExpirationYear,
    creditCardCvv
  } = formValues;

  return (
    <div className="credit-card">
      <div className={flipperClasses}>
        <CreditCardFront
          fieldValues={{ creditCardNumber, creditCardName, creditExpirationMonth, creditExpirationYear }}
          setFocusOnCreditCardNumber={setFocusOnCreditCardNumber}
          setFocusOnCreditCardName={setFocusOnCreditCardName}
          setFocusOnCreditCardExpirationMonth={setFocusOnCreditCardExpirationMonth}
        />
        <CreditCardBack
          creditCardCvvFromInput={creditCardCvv}
        />
      </div>
    </div>
  );
}