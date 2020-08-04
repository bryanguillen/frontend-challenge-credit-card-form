import React from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard({ showFront }) {
  return (
    <div className="credit-card">
      {showFront ? <CreditCardFront/> : <CreditCardBack/>}
    </div>
  );
}