import React from 'react';

import CreditCard from './CreditCard';
import CreditCardForm from './CreditCardForm';

import './App.css';

function App() {
  return (
    <div className="app">
      <CreditCard showFront={true} />
      <CreditCardForm/>
    </div>
  );
}

export default App;
