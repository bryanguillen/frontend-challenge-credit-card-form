import React, { useState } from 'react';

import CreditCard from './CreditCard';
import CreditCardForm from './CreditCardForm';

import './App.css';

function App() {
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="app">
      <CreditCard showFront={showFront} />
      <CreditCardForm
        cvvOnFocus={() =>  setShowFront(false)}
        cvvOnBlur={() =>  setShowFront(true)}
      />
    </div>
  );
}

export default App;
