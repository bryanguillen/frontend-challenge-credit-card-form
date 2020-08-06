import { Selector } from 'testcafe';

const getUrlForTest = require('./test-utils/get-url-for-test.js');

fixture('Form Validation')
  .page(getUrlForTest(process.argv));

test('should enforce constraints on number and cvv fields', async t => {
  const numberInput = Selector('.number-input');
  const cvvInput = Selector('.cvv-input');
  
  await t.typeText(numberInput, '1234hhhh1234hhhh1234hhhh1234');
  await t.typeText(cvvInput, 'hello123');

  await t.expect(numberInput.value).eql('1234 1234 1234 1234');
  await t.expect(cvvInput.value).eql('123');
});