const expect = require('chai').expect;

const { isTelephoneNumber } = require('../src/isTelephoneNumber/isTelephoneNumber');

describe('testing main module', () => {
  describe('isTelephoneNumber()', () => {
    it('should return true for 555-555-5555', () => {
      const valid = isTelephoneNumber('555-555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for (555)555-5555', () => {
      const valid = isTelephoneNumber('(555)555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for (555) 555-5555', () => {
      const valid = isTelephoneNumber('(555) 555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 555 555 5555', () => {
      const valid = isTelephoneNumber('555 555 5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 5555555555', () => {
      const valid = isTelephoneNumber('5555555555');
      expect(valid).to.equal(true);
    })
    it('should return true for 1 555 555 5555', () => {
      const valid = isTelephoneNumber('1 555 555 5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 1 555-555-5555', () => {
      const valid = isTelephoneNumber('1 555-555-5555');
      expect(valid).to.equal(true);
    })
  })
})