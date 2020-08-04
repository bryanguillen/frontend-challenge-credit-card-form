import React from 'react';

import CreditCardFront from './CreditCardFront';

import './CreditCard.css';

export default function CreditCard({ showFront }) {
  return (
    <div className="credit-card">
      {showFront ? <CreditCardFront/> : null}
    </div>
  );
}