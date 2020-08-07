/**
 * @description Function used to encapsulate the validation logic for
 * the "application" form fields; this helps make the application more readable
 * @param {Object} formFields
 * @returns { Object }
 */
export default function validateFormFields(formFields) {
  let showCreditCardNumberError = false;
  let showCreditCardNameError = false;
  let showCreditExpirationMonthError = false;
  let showCreditExpirationYearError = false;
  let showCreditCvvError = false;

  if (formFields.creditCardNumber.value === '' || formFields.creditCardNumber.value.length !== 19) {
    showCreditCardNumberError = true;
  }

  if (formFields.creditCardName.value.trim() === '') {
    showCreditCardNameError = true;
  }

  if (formFields.creditExpirationMonth.value === '' || formFields.creditExpirationYear.value === '') {
    showCreditExpirationMonthError = true;
    showCreditExpirationYearError = true;
  }

  if (formFields.creditCardCvv.value.trim() === '' || formFields.creditCardCvv.value.length !== 3) {
    showCreditCvvError = true;
  }

  return {
    showCreditCardNumberError,
    showCreditCardNameError,
    showCreditExpirationMonthError,
    showCreditExpirationYearError,
    showCreditCvvError
  };
}