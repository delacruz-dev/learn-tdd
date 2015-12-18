import {expect} from 'chai';
import Mathematics from '../src/Mathematics';

describe('Mathematics', () => {
  describe('#greatest', () => {
    describe('given n numbers', () => {
      it('should return the greatest', () => {
        expect(Mathematics.greatest(1, 2, 3)).to.be.eq(3);
        expect(Mathematics.greatest(4, 6, 5)).to.be.eq(6);
        expect(Mathematics.greatest(9, 8, 7)).to.be.eq(9);
      });
    });
  });

  describe('#lowest', () => {
    describe('given n numbers', () => {
      it('should return the lowest', () => {
        expect(Mathematics.lowest(1, 2)).to.be.eq(1);
        expect(Mathematics.lowest(3, 2)).to.be.eq(2);
        expect(Mathematics.lowest(1, 1)).to.be.eq(1);
      });
    });
  });
});