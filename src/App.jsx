import React, { useState } from 'react';

import CreditCard from './components/credit-card/CreditCard';
import CreditCardForm from './components/form/CreditCardForm';

import validateFormFields from './utils/validate-form-fields';

import './App.css';

function App() {
  const [formFields, setFormFields] = useState({
    creditCardNumber: { value: '', showError: false },
    creditCardName: { value: '', showError: false },
    creditExpirationMonth: { value: '', showError: false },
    creditExpirationYear: { value: '', showError: false },
    creditCardCvv: { value: '', showError: false }
  });

  const [focusOnCreditCardNumber, setFocusOnCreditCardNumber] = useState(false);
  const [focusOnCreditCardName, setFocusOnCreditCardName] = useState(false);
  const [focusOnCreditCardExpirationMonth, setFocusOnCreditCardExpirationMonth] = useState(false);

  const [showFront, setShowFront] = useState(true);

  /**
   * @description Handler for submit; it simply validates the fields
   * @param {Object} event
   */
  function handleSubmit(event) {
    event.preventDefault();

    setFormFields(previousState => {
      const {
        showCreditCardNumberError,
        showCreditCardNameError,
        showCreditExpirationMonthError,
        showCreditExpirationYearError,
        showCreditCvvError
      } = validateFormFields(formFields);
      const updatedState = {
        creditCardNumber: { ...previousState.creditCardNumber, showError: showCreditCardNumberError },
        creditCardName: { ...previousState.creditCardName, showError: showCreditCardNameError },
        creditExpirationMonth: { ...previousState.creditExpirationMonth, showError: showCreditExpirationMonthError },
        creditExpirationYear: { ...previousState.creditExpirationYear, showError: showCreditExpirationYearError },
        creditCardCvv: { ...previousState.creditCardCvv, showError: showCreditCvvError }
      };
      return { ...updatedState };
    });
  }

  return (
    <div className="app">
      <CreditCard
        creditCardCvvFromInput={formFields.creditCardCvv.value}
        creditCardExpirationMonthFromInput={formFields.creditExpirationMonth.value}
        creditCardExpirationYearFromInput={formFields.creditExpirationYear.value}   
        creditCardNumberFromInput={formFields.creditCardNumber.value}
        creditCardNameFromInput={formFields.creditCardName.value}
        showFront={showFront}
        setFocusOnCreditCardNumber={setFocusOnCreditCardNumber}
        setFocusOnCreditCardName={setFocusOnCreditCardName}
        setFocusOnCreditCardExpirationMonth={setFocusOnCreditCardExpirationMonth}
      />
      <CreditCardForm
        handleSubmit={handleSubmit}
        cvvOnFocus={() => setShowFront(false)}
        cvvOnBlur={() => setShowFront(true)}
        focusOnCreditCardNumber={focusOnCreditCardNumber}
        onBlurForCreditCardNumberInput={() => setFocusOnCreditCardNumber(false)}
        focusOnCreditCardName={focusOnCreditCardName}
        onBlurForCreditCardNameInput={() => setFocusOnCreditCardName(false)}
        focusOnCreditCardExpirationMonth={focusOnCreditCardExpirationMonth}
        onBlurForCreditCardExpirationMonthInput={() => setFocusOnCreditCardExpirationMonth(false)}
        formFields={formFields}
        setFormFields={setFormFields}
      />
    </div>
  );
}

export default App;
