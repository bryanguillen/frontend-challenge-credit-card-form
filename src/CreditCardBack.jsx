import React from 'react';

import './CreditCardBack.css';

export default function CreditCardBack() {
  return (
    <div className="credit-card-back">
      <div className="magnetic-stripe"></div>
      <div className="cvv-stripe-container">
        <div className="cvv-stripe-label">CVV</div>
        <div className="cvv-stripe"></div>
      </div>
      <div className="credit-card-back-logo-container">
        <img
          className="credit-card-back-logo"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
          alt="credit card logo"
        />
      </div>
    </div>
  );
}