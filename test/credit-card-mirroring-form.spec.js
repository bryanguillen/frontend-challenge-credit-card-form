import { Selector } from 'testcafe';

const getUrlForTest = require('./test-utils/get-url-for-test.js');

fixture('Credit Card Event Listener')
  .page(getUrlForTest(process.argv));

test('should have credit card mirror values from form', async t => {
  const creditCardNumber = Selector('.credit-card-number');
  const creditCardNumberInput = Selector('.number-input');

  const creditCardName = Selector('.credit-card-holder-name');
  const creditCardNameInput = Selector('.name-input');


  const creditCardExpirationMonthInput = Selector('.expiration-month-input');
  const monthOptions = creditCardExpirationMonthInput.find('option');
  const creditCardExpirationYearInput = Selector('.expiration-year-input');
  const yearOptions = creditCardExpirationYearInput.find('option');
  const creditCardExpiration = Selector('.credit-card-expiration');

  const cvvInput = Selector('.cvv-input');
  const creditCardCvv = Selector('.cvv-stripe');

  await t.typeText(creditCardNumberInput, '1234123412341234');
  await t.expect(creditCardNumber.textContent).eql('1234 1234 1234 1234');
  
  await t.typeText(creditCardNameInput, 'Bryan');
  await t.expect(creditCardName.textContent).eql('Bryan');

  await t
    .click(creditCardExpirationMonthInput)
    .click(monthOptions.withText('01'));
  await t
    .click(creditCardExpirationYearInput)
    .click(yearOptions.withText('2021'));
  await t.expect(creditCardExpiration.textContent).eql('01/2021');

  await t.typeText(cvvInput, '123');
  await t.expect(creditCardCvv.textContent).eql('123');
});