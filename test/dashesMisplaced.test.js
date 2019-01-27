const expect = require('chai').expect;

const {
  howManyDashes
} = require('../helpers');

const {
  dashesMisplaced,
  twoDashesWrongPlaces,
  oneDashWrongPlace,
  hasParentheses
} = require('../dashesMisplaced');

describe('dashesMisplaced.js', () => {
  describe('dashesMisplaced()', () => {
    it('should return true because 2 dashes in the wrong places', () => {
      const inputStr = '55-555555-55';
      const numberOfDashes = howManyDashes(inputStr);
      const placedCorrectly = dashesMisplaced(inputStr, numberOfDashes);
      expect(placedCorrectly).to.equal(true); 
    })
    it('should return true because 1 dash in the wrong place', () => {
      const inputStr = '1(555)5-555555';
      const numberOfDashes = howManyDashes(inputStr);
      const placedCorrectly = dashesMisplaced(inputStr, numberOfDashes);
      expect(placedCorrectly).to.equal(true); 
    })
    it('should return false because 2 dashes in the right places', () => {
      const inputStr = '555-555-5555';
      const numberOfDashes = howManyDashes(inputStr);
      const placedCorrectly = dashesMisplaced(inputStr, numberOfDashes);
      expect(placedCorrectly).to.equal(false); 
    })
    it('should return false because 1 dash in the right place', () => {
      const inputStr = '1(555)555-5555';
      const numberOfDashes = howManyDashes(inputStr)
      const placedCorrectly = dashesMisplaced(inputStr, numberOfDashes);
      expect(placedCorrectly).to.equal(false); 
    })
  });
  describe('twoDashesWrongPlaces()', () => {
    it('should return true because a dash is in the wrong place', () => {
      const placedCorrectly = twoDashesWrongPlaces('55-5555-5555');
      expect(placedCorrectly).to.equal(true);
    });
    it('should return false because dashes are in the right places', () => {
      const placedIncorrectly = twoDashesWrongPlaces('555-555-5555');
      expect(placedIncorrectly).to.equal(false);
    })
  })
  describe('oneDashWrongPlace()', () => {
    it('should return true because a dash is in the wrong place', () => {
      const placedIncorrectly = oneDashWrongPlace('55555-55555');
      expect(placedIncorrectly).to.equal(true);
    })
    it('should return false because the dash is in the right place', () => {
      const placedIncorrectly = oneDashWrongPlace('(555)555-5555');
      expect(placedIncorrectly).to.equal(false);
    })
  })
  describe('hasParentheses()', () => {
    it('should return false with no parentheses', () => {
      const noParentheses = hasParentheses('123456789012345');
      expect(noParentheses).to.equal(false);
    });
    it('should return true with parentheses', () => {
      const withParentheses = hasParentheses('12345678)901');
      expect(withParentheses).to.equal(true);
    })
  })
})