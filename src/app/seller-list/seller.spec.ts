import { Seller } from './seller';

describe('Seller', () => {
  it('should create an instance', () => {
    expect(new Seller("Anup", "Kumar", "anup.kumar@luv2code.com", 50000)).toBeTruthy();
  });
});

