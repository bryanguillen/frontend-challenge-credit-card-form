/**
 * @description Helper function used to wrap the logic required
 * for properly replacing the hashes in the credit card number 
 * field with what is in the text input.  In other words, this helps
 * the credit card mirror what is in the text input
 * @param {String} creditCardNumberFromInput
 * @returns {String}
 */
export function getCreditCardNumber(creditCardNumberFromInput) {
  const creditCardNumberMaxLength = 19;
  const hashedCreditCardNumber = '#### #### #### ####';
  const creditCardNumberLength = creditCardNumberFromInput.length;

  if (creditCardNumberLength === creditCardNumberMaxLength) {
    return creditCardNumberFromInput;
  } else if (creditCardNumberLength < creditCardNumberMaxLength && creditCardNumberLength > 0) {
    return creditCardNumberFromInput.substring(0, creditCardNumberLength) + hashedCreditCardNumber.substring(creditCardNumberLength)
  } else {
    return hashedCreditCardNumber;
  }
}

/**
 * @description Helper function used for the same purpose as the one above -- to help
 * wrap the logic of getting the actual month and year, which will replace the defaults
 * once the value is chosen for each field
 * @param {String} creditCardExpirationMonthFromInput
 * @param {String} creditCardExpirationYearFromInput
 * @returns {String}
 */
export function getExpirationDate(creditCardExpirationMonthFromInput, creditCardExpirationYearFromInput) {
  const expirationMonth = creditCardExpirationMonthFromInput === '' ? 'MM' : creditCardExpirationMonthFromInput;
  const expirationYear = creditCardExpirationYearFromInput === '' ? 'YYYY' : creditCardExpirationYearFromInput;

  return expirationMonth + '/' + expirationYear;
}