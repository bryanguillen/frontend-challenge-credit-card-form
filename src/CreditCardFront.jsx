import React from 'react';

import './CreditCardFront.css';

export default function CreditCardFront() {
  return (
    <div className="credit-card-front">
      <div className="credit-card-chip-brand-container">  
        <div className="credit-card-chip-container">
          <img
            className="credit-card-chip"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            alt="credit card background"
          />
        </div>
        <div className="credit-card-logo-container">
          <img
            className="credit-card-logo"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
            alt="credit card background"
          />
        </div>
      </div>
      <div className="credit-card-number-container">
        <div class="credit-card-number">#### #### #### ####</div>
      </div>
      <div className="credit-card-name-and-expiration-container">
        <div className="credit-card-name-container">
          <div className="credit-card-holder-label">Card Holder</div>
          <div className="credit-card-holder-name">Bryan</div>
        </div>
        <div className="credit-card-expiration-container">
          <div className="credit-card-expiration-label">Expires</div>
          <div className="credit-card-expiration-month">MM/YY</div>
        </div>
      </div>
    </div>
  );
}