/**
 * @description Function used to add a space every four characters, given a string;
 * it's used to add spaces for the value within the credit card number input
 * @param {String} value
 * @param {Number} maxNumberOfSpaces
 * @returns {String}
 */
export function addSpaceEveryFourChars(value, maxNumberOfSpaces = 3) {
  const normalizedValue = value.replace(/\D/g, '');
  let formattedValue = '';
  let spacesAdded = 0;

  for (let i = 0; i < normalizedValue.length; i++) {
    formattedValue += normalizedValue[i];
    if ((i + 1) % 4 === 0 && spacesAdded < maxNumberOfSpaces) {
      formattedValue += ' ';
      spacesAdded += 1;
    }
  }

  return formattedValue;
}