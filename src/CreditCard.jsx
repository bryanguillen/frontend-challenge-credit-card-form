import React from 'react';

import './CreditCard.css';

export default function CreditCard() {
  return (
    <div className="credit-card">
      <div className="credit-card-background-image-container">
        <img
          className="credit-card-background-image"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/5.jpeg"
          alt="credit card background"
        />
      </div>
      <div className="credit-card-chip-container">
        <img
          className="credit-card-chip-image"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
          alt="credit card background"
        />
      </div>
      <div className="credit-card-logo-container">
        <img
          className="credit-card-chip-image"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
          alt="credit card background"
        />
      </div>
      <div className="credit-card-number-container">#### #### #### ####</div>
      <div className="credit-card-name-container">
        <div className="credit-card-holder-label">Card Holder</div>
        <div className="credit-card-holder-name">Bryan</div>
      </div>
      <div className="credit-card-expiration-container">
        <div className="credit-card-expiration-label">Expires</div>
        <div className="credit-card-expiration-name">MM/YY</div>
      </div>
    </div>
  );
}