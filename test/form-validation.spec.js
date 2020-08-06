import { Selector } from 'testcafe';

const getUrlForTest = require('./test-utils/get-url-for-test.js');

fixture('Form Validation')
  .page(getUrlForTest(process.argv));

test('should properly validate all text fields', async t => {
  const submitButton = Selector('.submit-credit-card-form-button');

  const numberInput = Selector('.number-input');
  const numberInputError = Selector('.number-input-error');

  const nameInput = Selector('.name-input');
  const nameInputError = Selector('.name-input-error');

  const creditCardExpirationMonthInput = Selector('.expiration-month-input');
  const monthOptions = creditCardExpirationMonthInput.find('option');
  const creditCardExpirationYearInput = Selector('.expiration-year-input');
  const yearOptions = creditCardExpirationYearInput.find('option');
  const expirationInputError = Selector('.expiration-input-error');

  const cvvInput = Selector('.cvv-input');
  const cvvInputError = Selector('.cvv-input-error');

  await t.click(submitButton);

  await t.expect(numberInputError.exists).eql(true);
  await t.expect(nameInputError.exists).eql(true);
  await t.expect(expirationInputError.exists).eql(true);
  await t.expect(cvvInputError.exists).eql(true);

  await t.typeText(numberInput, '1234123412341234');
  await t.typeText(nameInput, 'Bryan');
  await t
    .click(creditCardExpirationMonthInput)
    .click(monthOptions.withText('01'));
  await t
    .click(creditCardExpirationYearInput)
    .click(yearOptions.withText('2021'));
  await t.typeText(cvvInput, '123');

  await t.click(submitButton);

  await t.expect(numberInputError.exists).eql(false);
  await t.expect(nameInputError.exists).eql(false);
  await t.expect(expirationInputError.exists).eql(false);
  await t.expect(cvvInputError.exists).eql(false);
});