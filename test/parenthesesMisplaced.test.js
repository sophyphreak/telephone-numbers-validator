const expect = require('chai').expect;

const {
  takeOutNonNumbers
} = require('../helpers');

const {
  parenthesesMisplaced,
  spaceAfterFirstNumber,
  notParenthesesAndThreeNumbers
} = require('../parenthesesMisplaced');

describe('parenthesesMisplaced.js', () => {
  describe('parenthesesMisplaces()', () => {
    it('should return false with 11 numbers and space before and after parentheses', () => {
      const inputString = '1 (234) 342 3342';
      const numberOfDigits = takeOutNonNumbers(inputString).length;
      const spaceBeforeAndAfter = parenthesesMisplaced(inputString, numberOfDigits);
      expect(spaceBeforeAndAfter).to.equal(false);
    });
    it('should return false with 11 numbers and no space before or after parentheses', () => {
      const inputString = '1(423)3423453';
      const numberOfDigits = takeOutNonNumbers(inputString).length;
      const noSpaceBeforeOrAfter = parenthesesMisplaced(inputString, numberOfDigits);
      expect(noSpaceBeforeOrAfter).to.equal(false);
    });
    it('should return false with 10 numbers and a space after parentheses', () => {
      const inputString = '(123) 1231231';
      const numberOfDigits = takeOutNonNumbers(inputString).length;
      const spaceAfter = parenthesesMisplaced(inputString, numberOfDigits);
      expect(spaceAfter).to.equal(false);
    })
    it('should return false with 10 numbers and no space after parentheses', () => {
      const inputString = '(123)1234123';
      const numberOfDigits = takeOutNonNumbers(inputString).length;
      const noSpaceAfter = parenthesesMisplaced(inputString, numberOfDigits);
      expect(noSpaceAfter).to.equal(false)
    })
    it('should return true with 11 numbers and parentheses everywhere', () => {
      const inputString = '12345(67(89(01)))';
      const numberOfDigits = takeOutNonNumbers(inputString).length;
      const parensEverywhere = parenthesesMisplaced(inputString, numberOfDigits);
      expect(parensEverywhere).to.equal(true);
    })
  })
  describe('spaceAfterFirstNumber()', () => {
    it('should return false with no space after first number', () => {
      const noSpaceAfter = spaceAfterFirstNumber('1123');
      expect(noSpaceAfter).to.equal(false);
    })
    it('should return true with space after first number', () => {
      const spaceAfter = spaceAfterFirstNumber('1 123');
      expect(spaceAfter).to.equal(true);
    })
  })
  describe('notParenthesesAndThreeNumbers()', () => {
    it('should return false with valid input', () => {
      const validInput = notParenthesesAndThreeNumbers('(123)');
      expect(validInput).to.equal(false);
    });
    it('should return true with invalid input', () => {
      const invalidInput = notParenthesesAndThreeNumbers('1(123');
      expect(invalidInput).to.equal(true);
    })
  })
});