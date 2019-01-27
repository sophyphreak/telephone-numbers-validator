const expect = require('chai').expect;
const {
  takeOutNonNumbers,
  hasInvalidChars,
  firstNumberNot1,
  howManyDashes,
  howManySpaces,
  howManyParentheses
} = require('../src/isTelephoneNumber/helpers');

describe('helpers', () => {
  describe('takeOutNonNumbers()', () => {
    it('should take out all nonnumber characters', () => {
      const lotsOfEverything = 'kweekljj4lkkj23ldml][-=--`1245';
      const noNumbers = takeOutNonNumbers(lotsOfEverything);
      expect(noNumbers).to.be.a('string');
      expect(noNumbers).to.equal('4231245');
    });
  });
  describe('hasInvalidChars()', () => {
    it('should return true with letters', () => {
      const letterTest = hasInvalidChars('a');
      expect(letterTest).to.equal(true);
    });
    it('should return true with invalid punctuation', () => {
      const punctuationTest = hasInvalidChars('[');
      expect(punctuationTest).to.equal(true);
    })
    it('should return false with only numbers', () => {
      const onlyNumbers = hasInvalidChars('234234219765');
      expect(onlyNumbers).to.equal(false);
    });
    it('should return false with numbers and dashes', () => {
      const withDashes = hasInvalidChars('23423-234-234');
      expect(withDashes).to.equal(false);
    });
    it('should return false with numbers and parentheses', () => {
      const withParentheses = hasInvalidChars('23423(234)234');
      expect(withParentheses).to.equal(false);
    });
    it('should return false with numbers and spaces', () => {
      const withSpaces = hasInvalidChars('23432 2432 24');
      expect(withSpaces).to.equal(false);
    });
    it('should return false with numbers, dashes, and parentheses', () => {
      const withAll = hasInvalidChars('3423-()-43  234234 24');
      expect(withAll).to.equal(false);
    })
  });
  describe('firstNumberNot1()', () => {
    it('should return false', () => {
      const startsWithOne = firstNumberNot1('123456789012345');
      expect(startsWithOne).to.equal(false);
    });
    it('should return true', () => {
      const doesntStartWithOne = firstNumberNot1('2345678901');
      expect(doesntStartWithOne).to.equal(true);
    })
  })
  describe('howManyDashes()', () => {
    it('should return 1 because one dash', () => {
      const oneDash = howManyDashes('123312-123');
      expect(oneDash).to.equal(1);
    })
    it('should return 2 for two dashes', () => {
      const twoDashes = howManyDashes('12314-123-1233');
      expect(twoDashes).to.equal(2)
    }) 
    it('should return 3 for two dashes', () => {
      const threeDashes = howManyDashes('12314-12-3-1233');
      expect(threeDashes).to.equal(3)
    }) 
  });
  describe('howManySpaces()', () => {
    it('should return 0 because there is no space', () => {
      const inputString = howManySpaces('5555555555');
      expect(inputString).to.equal(0);
    })
    it('should return 1 because there is a space', () => {
      const inputString = howManySpaces('555555 5555'); 
      expect(inputString).to.equal(1);
    })
    it('should return 2 because there are two spaces', () => {
      const inputString = howManySpaces('555 555 5555'); 
      expect(inputString).to.equal(2);      
    })
  })
  describe('howManyParentheses()', () => {
    it('should return 0 because there are no parentheses', () => {
      const inputString = howManyParentheses('5555555555');
      expect(inputString).to.equal(0);
    })
    it('should return 1 because there is a parenthesis', () => {
      const inputString = howManyParentheses('555 555)5555'); 
      expect(inputString).to.equal(1);
    })
    it('should return 2 because there are two parentheses', () => {
      const inputString = howManyParentheses('555(55)55555'); 
      expect(inputString).to.equal(2);      
    })
  })
});