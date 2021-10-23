import { getCreditCardNumber, getExpirationDate } from '../credit-card-front-utils';

describe('getCreditCardNumber', () => {
  it('should replace hashes with available numbers from text input', () => {
    expect(getCreditCardNumber('1234 5')).toEqual('1234 5### #### ####');
  });

  it('should not replace any of the hashes when text input is empty', () => {
    expect(getCreditCardNumber('')).toEqual('#### #### #### ####');
  });
});

describe('getExpirationDate', () => {
  it('should return a string formatted "MM/YYYY"', () => {
    expect(getExpirationDate('10', '2021')).toEqual('10/2021');
  });
  
  it('should return the default "MM/YYYY" when no month or year given', () => {
    expect(getExpirationDate('', '')).toEqual('MM/YYYY');
  });
  
  it('should return the month with default year, when month is provided but not year', () => {
    expect(getExpirationDate('2', '')).toEqual('2/YYYY');
  });
  
  it('should return the year with default month, when year is provided but not month', () => {
    expect(getExpirationDate('', '2021')).toEqual('MM/2021');
  });
});
