var assert = require('assert');
var ctz = require('./ctz.js');

describe('Mocha test example', function() {

  beforeEach(() => {
    // nothing to do.
  });
  
  describe('testSort01', () => {
    it('positive number', () => {
      assert.deepEqual(ctz.ctz(100), 99);
    });
    
    it('positive number', () => {
      assert.deepEqual(ctz.ctz(1), 0);
    });
    
    it('negative number', () => {
      assert.deepEqual(ctz.ctz(-100), -99);
    });
    
    it('negative number', () => {
      assert.deepEqual(ctz.ctz(-1), 0);
    });
    
    it('zero', () => {
      assert.deepEqual(ctz.ctz(0), 0);
    });

  });

});

