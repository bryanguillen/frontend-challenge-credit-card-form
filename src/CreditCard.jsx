import React from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard({
  creditCardExpirationMonthFromInput,
  creditCardExpirationYearFromInput,
  creditCardNumberFromInput,
  creditCardNameFromInput,
  showFront
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
        />
        <CreditCardBack/>
      </div>
    </div>
  );
}