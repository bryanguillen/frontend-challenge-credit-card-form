import React from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard() {
  return (
    <div className="credit-card">
      <div className="flipper">
        <CreditCardFront/>
        <CreditCardBack/>
      </div>
    </div>
  );
}