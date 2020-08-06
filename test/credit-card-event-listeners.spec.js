import { Selector } from 'testcafe';

const getUrlForTest = require('./test-utils/get-url-for-test.js');

fixture('Credit Card Event Listener')
  .page(getUrlForTest(process.argv));

test('should focus on relevant form fields when element is clicked on credit card', async t => {
  const creditCardNumber = Selector('.credit-card-number');
  const creditCardNumberInput = Selector('.number-input');
  const creditCardName = Selector('.credit-card-name-container');
  const creditCardNameInput = Selector('.name-input');
  const creditCardExpiration = Selector('.credit-card-expiration-container');
  const creditCardExpirationMonthInput = Selector('.expiration-month-input');

  await t.click(creditCardNumber);
  await t.expect(creditCardNumberInput.focused).eql(true);

  await t.click(creditCardName);
  await t.expect(creditCardNameInput.focused).eql(true);

  await t.click(creditCardExpiration);
  await t.expect(creditCardExpirationMonthInput.focused).eql(true);
});