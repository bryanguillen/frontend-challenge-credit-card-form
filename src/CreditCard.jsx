import React from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard({ creditCardNumberFromInput, showFront }) {
  const flipperClasses = showFront ? 'flipper' : 'flipper show-back';

  return (
    <div className="credit-card">
      <div className={flipperClasses}>
        <CreditCardFront
          creditCardNumberFromInput={creditCardNumberFromInput}
        />
        <CreditCardBack/>
      </div>
    </div>
  );
}