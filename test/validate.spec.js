const validateUrlObject = require('../utils/validate.js')
const getUrlObject = require('../utils/readFile.js')
const urlsDir = require('./mockData')
const validatedUrlDir = require('./mockData')

describe('validateUrlObject', () => {

    it('is a function', () => {
      expect(typeof validateUrlObject).toBe('function');
    });
   /*  it('matches with the urls in the example', () => {
        expect(validateUrlObject(getUrlObject(urlsDir))).toEqual((validateUrlObject));
      });
 */

  
  });