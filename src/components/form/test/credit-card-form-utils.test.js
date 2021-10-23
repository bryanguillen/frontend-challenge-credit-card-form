import { addSpaceEveryFourChars } from '../credit-card-form-utils';

describe('addSpaceEveryFourChars', () => {
  it('should add a space every four characters', () => {
    expect(addSpaceEveryFourChars('1234567891024567')).toEqual('1234 5678 9102 4567');
  });
});