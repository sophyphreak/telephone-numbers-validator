const expect = require('chai').expect;

const { telephoneCheck } = require('../main');

describe('testing main module', () => {
  describe('telephoneCheck()', () => {
    it('should return true for 555-555-5555', () => {
      const valid = telephoneCheck('555-555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for (555)555-5555', () => {
      const valid = telephoneCheck('(555)555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for (555) 555-5555', () => {
      const valid = telephoneCheck('(555) 555-5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 555 555 5555', () => {
      const valid = telephoneCheck('555 555 5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 5555555555', () => {
      const valid = telephoneCheck('5555555555');
      expect(valid).to.equal(true);
    })
    it('should return true for 1 555 555 5555', () => {
      const valid = telephoneCheck('1 555 555 5555');
      expect(valid).to.equal(true);
    })
    it('should return true for 1 555-555-5555', () => {
      const valid = telephoneCheck('1 555-555-5555');
      expect(valid).to.equal(true);
    })
  })
})