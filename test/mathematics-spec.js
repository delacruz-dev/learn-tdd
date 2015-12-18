import {expect} from 'chai';
import Mathematics from '../src/Mathematics';

describe('Math test suite', () => {
  describe('Given n numbers', () => {
    it('Should return the greatest', () => {
      expect(Mathematics.greatest(1, 2, 3)).to.be.eq(3);
      expect(Mathematics.greatest(4, 6, 5)).to.be.eq(6);
      expect(Mathematics.greatest(9, 8, 7)).to.be.eq(9);
    });

    it('Should return the lowest', () => {
      expect(Mathematics.lowest(1, 2)).to.be.eq(1);
      expect(Mathematics.lowest(3, 2)).to.be.eq(2);
      expect(Mathematics.lowest(1, 1)).to.be.eq(1);
    });
  });
});