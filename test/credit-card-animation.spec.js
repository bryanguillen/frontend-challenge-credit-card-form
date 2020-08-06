import { Selector } from 'testcafe';

const getUrlForTest = require('./test-utils/get-url-for-test.js');

fixture('Credit Card Animation')
  .page(getUrlForTest(process.argv));

test('should properly animate credit card', async t => {
  const SHOW_BACK = 'show-back';
  const flipper = Selector('.flipper');
  const cvvInput = Selector('.cvv-input');
  const nameInput = Selector('.name-input');

  await t.expect(await flipper.hasClass(SHOW_BACK)).eql(false);

  await t.click(cvvInput);
  await t.expect(await flipper.hasClass(SHOW_BACK)).eql(true);

  await t.click(nameInput);
  await t.expect(await flipper.hasClass(SHOW_BACK)).eql(false);
});