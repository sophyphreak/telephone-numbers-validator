const expect = require('chai').expect;

const { howManySpaces } = require('../src/isTelephoneNumber/helpers');

const {
  spacesMisplaced,
  threeSpacesWrongPlaces,
  twoSpacesWrongPlaces,
  oneSpaceWrongPlace
} = require('../src/isTelephoneNumber/spacesMisplaced');

describe('spacesMisplaced.js', () => {
  describe('spacesMisplaced()', () => {
    it('should return true because 2 dashes in the wrong places', () => {
      const inputStr = '55 555555 55';
      const numberOfSpaces = howManySpaces(inputStr);
      const placedCorrectly = spacesMisplaced(inputStr, numberOfSpaces);
      expect(placedCorrectly).to.equal(true); 
    })
    it('should return true because 1 space in the wrong place', () => {
      const inputStr = '1(555)5 555555';
      const numberOfSpaces = howManySpaces(inputStr);
      const placedCorrectly = spacesMisplaced(inputStr, numberOfSpaces);
      expect(placedCorrectly).to.equal(true); 
    })
    it('should return false because 2 spaces in the right places', () => {
      const inputStr = '555 555 5555';
      const numberOfSpaces = howManySpaces(inputStr);
      const placedCorrectly = spacesMisplaced(inputStr, numberOfSpaces);
      expect(placedCorrectly).to.equal(false); 
    })
    it('should return false because 1 space in the right place', () => {
      const inputStr = '(555) 555-5555';
      const numberOfSpaces = howManySpaces(inputStr)
      const placedCorrectly = spacesMisplaced(inputStr, numberOfSpaces);
      expect(placedCorrectly).to.equal(false); 
    })
  });
  describe('threeSpacesWrongPlaces()', () => {
    it('should return true because a space is in the wrong place', () => {
      const placedIncorrectly = threeSpacesWrongPlaces('55 5 555 5555');
      expect(placedIncorrectly).to.equal(true);
    });
    it('should return false because spaces are in the right places', () => {
      const placedCorrectly = threeSpacesWrongPlaces('1 555 555 5555');
      expect(placedCorrectly).to.equal(false);
    })
  })
  describe('twoSpacesWrongPlaces()', () => {
    it('should return true because a space is in the wrong place', () => {
      const placedIncorrectly = twoSpacesWrongPlaces('55 5555 5555');
      expect(placedIncorrectly).to.equal(true);
    });
    it('should return false because spaces are in the right places', () => {
      const placedCorrectly = twoSpacesWrongPlaces('555 555 5555');
      expect(placedCorrectly).to.equal(false);
    })
    it('should return false because spaces are in the right places', () => {
      const placedCorrectly = twoSpacesWrongPlaces('1 (555) 555-5555');
      expect(placedCorrectly).to.equal(false);
    })
  })
  describe('oneSpaceWrongPlace()', () => {
    it('should return true because a space is in the wrong place', () => {
      const placedIncorrectly = oneSpaceWrongPlace('55555 55555');
      expect(placedIncorrectly).to.equal(true);
    })
    it('should return false because the space is in the right place', () => {
      const placedCorrectly = oneSpaceWrongPlace('(555) 555-5555');
      expect(placedCorrectly).to.equal(false);
    })
    it('should return false because the space is in the right place', () => {
      const placedCorrectly = oneSpaceWrongPlace('1 555-555-5555');
      expect(placedCorrectly).to.equal(false);
    })
  })
})