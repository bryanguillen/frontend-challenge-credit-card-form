import React, { useState } from 'react';

import CreditCard from './components/credit-card/CreditCard';
import CreditCardForm from './components/form/CreditCardForm';

import validateFormFields from './utils/validate-form-fields';

import './App.css';

function App() {
  // Form control names
  const CREDIT_CARD_NUMBER = 'creditCardNumber';
  const CREDIT_CARD_NAME = 'creditCardName';
  const CREDIT_CARD_EXPIRATION_MONTH = 'creditExpirationMonth';

  // Initial state for form controls
  const initialFormFieldState = {
    value: '',
    showError: false
  };

  // form state
  const [formFields, setFormFields] = useState({
    [CREDIT_CARD_NUMBER]: { ...initialFormFieldState, focused: false },
    [CREDIT_CARD_NAME]: { ...initialFormFieldState, focused: false },
    [CREDIT_CARD_EXPIRATION_MONTH]: { ...initialFormFieldState, focused: false },
    creditExpirationYear: initialFormFieldState,
    creditCardCvv: initialFormFieldState
  });

  // Credit card side state
  const [showFront, setShowFront] = useState(true);

  /**
   * @description Function for extracting an object, where each key is the
   * name of the field and the value is value.  It's passed into credit card
   * component
   * @returns {Object}
   */
  function getFormValues() {
    const formValues = {};

    for (const field in formFields) {
      const { value } = formFields[field];
      formValues[field] = value;
    }

    return formValues;
  }

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

  /**
   * @description Wrapper for updating the focused boolean of a input field
   */
  function toggleFieldFocus(name, value) {
    setFormFields(previousState =>
      ({ ...previousState, [name]: { ...previousState[name], focused: value } })
    )
  }

  return (
    <div className="app">
      <CreditCard
        formValues={getFormValues()}
        setFocusOnCreditCardNumber={() =>  toggleFieldFocus(CREDIT_CARD_NUMBER, true)}
        setFocusOnCreditCardName={() =>  toggleFieldFocus(CREDIT_CARD_NAME, true)}
        setFocusOnCreditCardExpirationMonth={() =>  toggleFieldFocus(CREDIT_CARD_EXPIRATION_MONTH, true)}
        showFront={showFront}
      />
      <CreditCardForm
        handleSubmit={handleSubmit}
        cvvOnFocus={() => setShowFront(false)}
        cvvOnBlur={() => setShowFront(true)}
        focusOnCreditCardNumber={formFields.creditCardNumber.focused}
        onBlurForCreditCardNumberInput={() =>  toggleFieldFocus(CREDIT_CARD_NUMBER, false)}
        focusOnCreditCardName={formFields.creditCardName.focused}
        onBlurForCreditCardNameInput={() => toggleFieldFocus(CREDIT_CARD_NAME, false)}
        focusOnCreditCardExpirationMonth={formFields.creditExpirationMonth.focused}
        onBlurForCreditCardExpirationMonthInput={() =>  toggleFieldFocus(CREDIT_CARD_EXPIRATION_MONTH, false)}
        formFields={formFields}
        setFormFields={setFormFields}
      />
    </div>
  );
}

export default App;
