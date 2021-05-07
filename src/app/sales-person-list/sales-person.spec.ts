import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000)).toBeTruthy();
  });
});

